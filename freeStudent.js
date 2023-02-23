import Student from "./student.js";

class FreeStudent extends Student {
  constructor(property) {
    super(property)
  }

approveCourse(newCourse) {
  if (newCourse.isFree) {
    this.approvedCourse.push(newCourse);
  } else {
    console.warn(`Lo sentimos, ${this.name}, solo puedes tomar cursos abierto`)
  }
}
}

export default FreeStudent
