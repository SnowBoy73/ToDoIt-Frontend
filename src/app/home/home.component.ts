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

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  // const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));


  btnClickAddTask = (): any => {
    this.router.navigateByUrl('/');
  }

}
