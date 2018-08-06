import { Component, OnInit } from '@angular/core';
import { User } from '../models/User'
import { StudentService } from '../student.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public studentService: StudentService, public router: Router ) { }

  ngOnInit() {
  }

  model = new User("", "", "")
  submitted = false
  onSubmit() {
    this.studentService.loginUser(this.model.email, this.model.password).subscribe(
      (data:any) => {
        console.log(data)
        localStorage.setItem('token', data.token)
        console.log('Login Successfull')
        this.submitted = true
        this.router.navigate(['/students']);
      }
    )
  }

  createAccount() {
    this.router.navigate(['/admin-form']);
  }

}
