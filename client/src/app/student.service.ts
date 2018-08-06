import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Student } from '../app/models/Student'


@Injectable({
  providedIn: 'root'
})

export class StudentService {

  public obj: any

  constructor(public http: HttpClient) { }

  public baseUrl = "api/"

  // Login User
  loginUser(email: String, password: String) {
      return this.http.post(this.baseUrl + "users/login", {email: email, password: password})
  }


  getStudents() {
    return this.http.get<Student[]>(this.baseUrl+'students')
  }

  // register Student
  addStudent(rollNumber: Number, name: String, standard: String, age: Number) {
    return this.http.post<Student>(this.baseUrl+"students", {rollNumber: rollNumber, name: name, standard: standard, age: age})
  }

  // delete Student
  deleteStudent(rollNumber: Number) {
    return this.http.delete(this.baseUrl+"students/"+ rollNumber)
  }

  // admin register
  addAdmin(name: String, email: String, password: String) {
    return this.http.post(this.baseUrl+"users/" + "register", {name: name, email: email, password: password} )
  }
}


