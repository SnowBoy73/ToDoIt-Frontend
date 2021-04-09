import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TaskModel} from '../models/task.model';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private apiUrl = 'https://localhost:5001/api/ToDo';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /*
  async getAllTasks(): Promise<TaskModel[]>{
    const uspromise = await this.http.get<any[]>(environment.apiUrl + '/api/ToDo/').toPromise();
    return uspromise.map(a => {
      console.log(a);
      const taskId = a.id;
      const taskDescription = a.description;
      const taskAssigneeId = a.assigneeId;
      const taskDueDate = a.dueDate;
      const taskIsCompleted = a.isCompleted;
      return {
        id: taskId, description: taskDescription, assignee: taskAssigneeId, dueDate: taskDueDate, isCompleted: taskIsCompleted
      } as TaskModel ;
    });
  }
*/

  /** GET tasks from the server */
  getAllTasks(): Observable<TaskModel[]> {
    console.log('SERVICE CLASS get all');
    return this.http.get<TaskModel[]>(this.apiUrl);
  }



  addTask(task: TaskModel): Observable<any> {
    console.log('SERVICE CLASS add');
    console.log(task);
    return this.http.put(this.apiUrl, task, this.httpOptions);
    // const uspromise = await this.http.post<id>(environment.apiUrl + '/api/ToDo/' + id).toPromise();
  }

  async updateTask(task: TaskModel): Promise<void>{
    // const uspromise = await this.http.put<id>(environment.apiUrl + '/api/ToDo/' + task).toPromise();
  }

  async deleteTask(id: number): Promise<void>{
    // const uspromise = await this.http.delete<id>(environment.apiUrl + '/api/ToDo/' + id).toPromise();
  }
}

