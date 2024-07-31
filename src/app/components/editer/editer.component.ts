import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editer.component.html',
  styleUrl: './editer.component.css'
})
export class EditerComponent {

  inputvalue=" "
  namechange(e:Event)
  {
  const value=(e.target as HTMLInputElement).value
  this.inputvalue=value
  }


}
