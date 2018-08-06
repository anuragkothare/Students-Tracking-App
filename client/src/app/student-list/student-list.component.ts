import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service'
import { Router } from '@angular/router';

import { Student } from '../models/Student'
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public students$: Observable<Array<Student>>
  constructor(public studentService: StudentService, public router: Router) { }

  ngOnInit() {
    this.students$ = this.studentService.getStudents()
  }

  btnClick() {
    this.router.navigate(['/register']);
  }

  removeStudent(rollNumber: number) {
    console.log(rollNumber)
    this.studentService.deleteStudent(rollNumber).subscribe(
      (data) => {
        console.log(data)
        this.students$ = this.studentService.getStudents()
      },
      error => console.log(error)
    )
  }
}
