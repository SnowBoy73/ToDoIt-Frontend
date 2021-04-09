// dialog-box.component.ts
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UsersData {
  id: number;
  description: string;
  assigneeId: any;
  dueDate: string;
  isCompleted: boolean;
}


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {

  action: string;
  localData: any;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.localData = {...data};
    this.action = this.localData.action;
  }

  doAction(): any {
    this.dialogRef.close({event: this.action, data: this.localData});
  }

  closeDialog(): any {
    this.dialogRef.close({event: 'Cancel'});
  }

}
