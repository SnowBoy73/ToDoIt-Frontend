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
  // table: any = null;

  @ViewChild(MatTable, {static: true}) table: MatTable<any> | undefined;


  public allTasks = [{
    id: 1,
    description: 'foo',
    assigneeId: {
      id: 2,
      name: 'bob'
    },
    dueDate: '22-03-2022',
    isCompleted: true
  },
    {
      id: 2,
      description: 'bubbles',
      assigneeId: {
      id: 1,
      name: 'alice'
    },
      dueDate: '19-10-2022',
      isCompleted: false
    },
    {
      id: 3,
      description: 'swimming',
      assigneeId: {
        id: 2,
        name: 'bob'
      },
      dueDate: '04-03-2021',
      isCompleted: true
    },
    {
      id: 4,
      description: 'fun',
      assigneeId: {
        id: 3,
        name: 'eve'
      },
      dueDate: '10-03-2021',
      isCompleted: false
    }];

  dataSource = this.allTasks;  // was ELEMENT_DATA

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
    dueDate: '10-23-2021',
    isCompleted: false
  };
   // const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));

  ngOnInit(): void {
    // this.allTasks = this.getAllTasks()
  }

  async getAllTasks(): Promise<void> {  // LOOK INTO
    // this.allTasks = await this.todoService.getAllTasks();
  }

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
      assigneeId: rowObject.assigneeId, // .name,
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

  findAssignee(aid: AssigneeModel): AssigneeModel {
     const newAssignee = this.allAssignees.find(na => na.id === aid.id) as AssigneeModel;
     console.log (this.allAssignees);
     console.log (' aid ' , aid);

     console.log (this.allAssignees.filter(na => na.id === aid.id));
     return newAssignee;
    // return this.allAssignees.find(a => a.id === id) as AssigneeModel;

  }

  updateRowData(rowObject: any): any{
  const newAssigneeId = parseInt((rowObject.assigneeId.id), 10);
    console.log('NEW ASSIGNEE ID ', newAssigneeId);

     const newAssignee = this.allAssignees.filter(na => na.id === newAssigneeId)[0];
    console.log('NEW ASSIGNEE ', newAssignee);


    // const newAssigneeName = rowObject.assigneeId as AssigneeModel;
    // const newAssignee = this.findAssignee(rowObject.assigneeId);

    // console.log('NEW ASSIGNEE Name ', newAssigneeName);

    const editedTask: TaskModel = {
      id: rowObject.id,
      description: rowObject.description,
      assigneeId: newAssignee,
      dueDate: rowObject.dueDate,
      isCompleted: rowObject.isCompleted,
    };
    console.log('UPDATE ROW DATA', editedTask.description);

    // PATCH newTask to Backend here!!

    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.id === rowObject.id){
        value.description = rowObject.description,
        value.assigneeId = newAssignee,
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

