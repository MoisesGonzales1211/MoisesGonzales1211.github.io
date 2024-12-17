import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export  default class TaskListComponent {

}