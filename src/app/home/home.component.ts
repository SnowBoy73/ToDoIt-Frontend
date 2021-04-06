import { Component, OnInit } from '@angular/core';
import { AssigneeModel} from '../shared/models/assignee.model';
import { TaskModel} from '../shared/models/task.model';
import {MDCDataTable} from '@material/data-table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allAssignee: AssigneeModel[] = [];
  allTasks: TaskModel[] = [];
  public product = { id: '3', name: 'Angular'};

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  // const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));


  btnClickAddTask = (): any => {
     this.router.navigateByUrl('/add-edit', { state: this.product });

     /*
    this.router.navigateByUrl('/add-edi', {state: this.product}).then(r => {
      // fulfillment
      console.log('send success');
    }, reason => {
      // rejection
      console.log('send success');
    });

     */
  }

}
