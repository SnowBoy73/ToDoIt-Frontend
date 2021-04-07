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
  // allAssignees: AssigneeModel[] = [];
  // allTasks: TaskModel[] = [];

  public selectedTaskId = 1;

  public selectedTask = {
    id: 2,
    description: 'bubbles',
    assigneeId: 2,
    dueDate: '19-10-2022',  // Date??
    isCompleted: true
  };

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


    public allTasks: TaskModel[] = [{
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

    //this.selectedTask = this.allTasks.find(task.id === this.selectedTaskId);

    this.router.navigateByUrl('/add-edit', { state: this.selectedTask });
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
