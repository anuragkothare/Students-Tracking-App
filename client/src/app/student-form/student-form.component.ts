import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service'
import { Student } from '../models/Student'
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  constructor(public studentService: StudentService, public router: Router) { }

  errorMessage: String

  ngOnInit() {
  }

  model: Student = new Student("", parseInt(""), "", '',  parseInt(""))

  onSubmit() {
    this.studentService.addStudent(this.model.rollNumber, this.model.name, this.model.standard, this.model. age).subscribe(
      (data:any) => {
        console.log(data)
        this.router.navigate(['/students']);
      },
      error => {
        console.log(error)
        this.errorMessage = error.error.errorMessage;
      }
    )
  }

}
