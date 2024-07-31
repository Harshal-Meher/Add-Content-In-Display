import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditerComponent } from './components/editer/editer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EditerComponent,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Text-editer';
inputvalue: any;
}
