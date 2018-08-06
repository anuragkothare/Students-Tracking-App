const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')


// Load Student Model
const Student = require('../../models/Student')

// @route GET api/students/test
// @desc Tests students route
// @access Public
router.get('/test', (req, res) => res.json({msg: "Student Works"}))


// @route POST api/students/
// @desc Register Student
// @access Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {

    Student.findOne({ rollNumber: req.body.rollNumber }).then(student => {
      if(student) {
        res.json({msg: "Roll Number already exists"})
      }
    })

    const newStudent = new Student({
      rollNumber: req.body.rollNumber,
      name: req.body.name,
      standard: req.body.standard,
      age: req.body.age
    })

    newStudent.save().then(student => res.json(student))
})

// @route GET api/students/
// @desc  Get all students
// @access Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  Student.find((err, students) => {
      if(err) {
          return next(err);
      }
      res.send(students)
  })
})


// @route DELETE api/employees/:rollNumber
// @desc  Delete  Student Info
// @access Private
router.delete('/:rollNumber', (req, res) => {
  console.log(req.params.rollNumber )
  Student.remove({ rollNumber: req.params.rollNumber } , (err, student) => {
      if(err) res.send(err)
      res.json({ message: 'Successfully deleted' })
  })
})

module.exports = router