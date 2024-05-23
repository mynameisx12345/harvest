import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private readonly router: Router){}

  signup(){
    this.router.navigate(['/auth/signup'])
  }

  login(){
    this.router.navigate(['/auth/reminder'])
  }

}
