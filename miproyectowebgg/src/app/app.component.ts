import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { NgxSonnerToaster } from 'ngx-sonner';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxSonnerToaster, ReactiveFormsModule, CommonModule ],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
}
