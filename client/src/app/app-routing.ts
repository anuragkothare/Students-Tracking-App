import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { StudentListComponent } from './student-list/student-list.component';
import { LoginComponent } from './login/login.component'
import { StudentFormComponent } from 'src/app/student-form/student-form.component';
import { UserFormComponent } from 'src/app/user-form/user-form.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'admin-form', component: UserFormComponent},
  {path: 'students', component: StudentListComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: StudentFormComponent},
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);