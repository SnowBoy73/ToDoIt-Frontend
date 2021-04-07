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
  // allTasks: TaskModel[] = [];

  public allTasks: TaskModel[] = [{
    id: 1,
    description: 'foo',
    assigneeId: 3,
    dueDate: '22-23-2022',  // Date??
    isCompleted: true
  },
    {
      id: 4,
      description: 'fun',
      assigneeId: 2,
      dueDate: '10-23-2021',  // Date??
      isCompleted: false
    }];

  //public product = { id: '3', name: 'Angular'};

  public task = {
    id: 4,
    description: 'fun',
    assigneeId: 2,
    dueDate: '10-23-2021',  // Date??
    isCompleted: false
  };


  constructor(private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.allTasks);

  }
  // const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));


  btnClickAddTask = (): any => {
     this.router.navigateByUrl('/add-edit', { state: this.task });
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
