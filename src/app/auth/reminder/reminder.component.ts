import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrl: './reminder.component.scss'
})
export class ReminderComponent {
  constructor(private readonly router: Router){}
  agree(){
    this.router.navigate(['/auth/settings'])
  }
}
