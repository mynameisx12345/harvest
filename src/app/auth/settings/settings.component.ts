import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  constructor(private readonly router: Router){}
  select(language:any){
    this.router.navigateByUrl('/auth/create?language=' + language)
  }
}
