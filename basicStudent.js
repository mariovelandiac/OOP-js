import Student from "./student.js";

class BasicStudent extends Student {
  constructor(property) {
    super(property)
  }

  approveCourse(newCourse) {
    if (newCourse.lan !== 'english') {
      this.approvedCourse.push(newCourse)
      return 'approved'
    } else {
      console.warn(`Lo sentimos, ${this.name}, solo puedes tomar cursos en español`)
    }
  }
}

export default BasicStudent
