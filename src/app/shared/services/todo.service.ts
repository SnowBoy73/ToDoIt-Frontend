import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {TaskModel} from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  apiUrl = 'https://localhost:5001/api/ToDo';

  constructor(private http: HttpClient) { }

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
        id: taskId, description: taskDescription, assigneeId: taskAssigneeId, dueDate: taskDueDate, isCompleted: taskIsCompleted
      } as TaskModel ;
    });
  }


  async addTask(task: TaskModel): Promise<void>{
    console.log('SERVICE CLASS');
    console.log(task);

    // const uspromise = await this.http.post<id>(environment.apiUrl + '/api/ToDo/' + id).toPromise();
  }

  async updateTask(task: TaskModel): Promise<void>{
    // const uspromise = await this.http.put<id>(environment.apiUrl + '/api/ToDo/' + task).toPromise();
  }

  async deleteTask(id: number): Promise<void>{
    // const uspromise = await this.http.delete<id>(environment.apiUrl + '/api/ToDo/' + id).toPromise();
  }
}
