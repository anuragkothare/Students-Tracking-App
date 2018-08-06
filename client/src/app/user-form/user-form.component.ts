import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service'
import { User } from '../models/User'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(public studentService: StudentService, public router: Router) { }

  errorMessage: String

  model: User = new User("", "", "")

  ngOnInit() {
  }

  onSubmit() {
    this.studentService.addAdmin(this.model.name, this.model.email, this.model.password).subscribe(
      (data: User) => {
        console.log(data)
        this.router.navigate(['/login']);
        console.log("Admin Added")
      },
      error => {
        console.log(error)
        this.errorMessage = error.error.errorMessage;
      }
    )
  }

}
