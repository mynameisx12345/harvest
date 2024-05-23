import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ModulesModule } from '../shared/modules/modules.module';
import { ComponentsModule } from '../shared/components/components.module';
import { SignupComponent } from './signup/signup.component';
import { ReminderComponent } from './reminder/reminder.component';
import { CreateComponent } from './create/create.component';
import { SuccessComponent } from './success/success.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path: 'reminder',
    component: ReminderComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ReminderComponent,
    CreateComponent,
    SuccessComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModulesModule,
    ComponentsModule
  ]
})
export class AuthModule { }
