import { Component, OnInit, ViewChild } from '@angular/core';
import { AssigneeModel} from '../shared/models/assignee.model';
import { TaskModel} from '../shared/models/task.model';
import { SharedModule} from '../shared/shared.module';
import {MDCDataTable} from '@material/data-table';
import { Router } from '@angular/router';

import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import {DialogBoxComponent} from '../dialog-box/dialog-box.component';
import {ToDoService} from '../shared/services/todo.service';

const allTasks: TaskModel[] = [{
  id: 1,
  description: 'foo',
  assigneeId: 3,
  dueDate: '22-03-2022',  // Date??
  isCompleted: true
},
{
  id: 2,
  description: 'bubbles',
  assigneeId: 2,
  dueDate: '19-10-2022',  // Date??
  isCompleted: false
},
{
  id: 3,
  description: 'swimming',
  assigneeId: 1,
  dueDate: '04-03-2021',  // Date??
  isCompleted: true
},
{
  id: 4,
  description: 'fun',
  assigneeId: 2,
  dueDate: '10-03-2021',  // Date??
  isCompleted: false
}];

//

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {


  constructor(private router: Router, private todoService: ToDoService, public dialog: MatDialog) {
  }

  displayedColumns: string[] = ['id', 'description', 'assigneeId', 'dueDate', 'isCompleted', 'action'];
  dataSource = allTasks;  // was ELEMENT_DATA
  // table: any = null;

  @ViewChild(MatTable, {static: true}) table: MatTable<any> | undefined;

  public allAssignees: AssigneeModel[] = [{
    id: 1,
    name: 'alice'
  },
  {
    id: 2,
    name: 'bob'
  },
  {
    id: 3,
    name: 'eve'
  }];



  public mockTask = {
    id: 4,
    description: 'fun',
    assigneeId: 2,
    dueDate: '10-23-2021',  // Date??
    isCompleted: false
  };
   // const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));

  ngOnInit(): void {}

  openDialog(action: any, obj: any): any {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: obj
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Add Task'){
        this.addRowData(result.data);



      }else if (result.event === 'Edit Task'){
        this.updateRowData(result.data);
      }else if (result.event === 'Delete Task'){
        this.deleteRowData(result.data);
      }
    });
  }


  addRowData(rowObject: any): any{
    const d = new Date();  // MOCK
    const newTask: TaskModel = {
      id: d.getTime(),  // MOCK
      description: rowObject.description,
      assigneeId: rowObject.assigneeId,
      dueDate: rowObject.dueDate,
      isCompleted: rowObject.isCompleted,
    };
    console.log('ADD ROW DATA', newTask.description);

      // PUSH newTask to Backend here!!

    this.dataSource.push({
      id: d.getTime(),
      description: rowObject.description,
      assigneeId: rowObject.assigneeId,
      dueDate: rowObject.dueDate,
      isCompleted: rowObject.isCompleted,
    });
    // @ts-ignore
    this.table.renderRows();
  }

  updateRowData(rowObject: any): any{
    const editedTask: TaskModel = {
      id: rowObject.id,
      description: rowObject.description,
      assigneeId: rowObject.assigneeId,
      dueDate: rowObject.dueDate,
      isCompleted: rowObject.isCompleted,
    };
    console.log('UPDATE ROW DATA', editedTask.description);

    // PATCH newTask to Backend here!!

    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.id === rowObject.id){
        value.description = rowObject.description,
        value.assigneeId = rowObject.assigneeId,
        value.dueDate = rowObject.dueDate,
        value.isCompleted = rowObject.isCompleted;
      }
      return true;
    });
  }

  deleteRowData(rowObject: any): any{
    this.todoService.deleteTask(rowObject.id);

    this.dataSource = this.dataSource.filter((value, key) => {
      return value.id !== rowObject.id;
    });
  }
}

