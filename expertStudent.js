import Student from "./student.js";

class ExpertStudent extends Student {
  constructor(property) {
    super(property)
  }

  approveCourse(newCourse) {
    this.approvedCourse.push(newCourse)
    return 'approved'
  }
}

export default ExpertStudent
