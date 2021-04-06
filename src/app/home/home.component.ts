import { Component, OnInit } from '@angular/core';
import { AssigneeModel} from '../shared/models/assignee.model';
import { TaskModel} from '../shared/models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allAssignee: AssigneeModel[] = [];
  allTasks: TaskModel[] = [];
  constructor() {}

  ngOnInit(): void {}


}
