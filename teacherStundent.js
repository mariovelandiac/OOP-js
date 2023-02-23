import Student from "./student.js";
import Comment from "./comment.js";

class TeacherStudent extends Student {
  constructor(property) {
    super(property)
  }

  approveCourse(newCourse) {
    this.approvedCourse.push(newCourse)
    return 'approved'
  }

  // aqui viene el polimorfismo

  publicarComentario(content) {
    const commentInfo = {
      content: content,
      studentName: this.name,
      studentRole: 'Profe'
    }
    const comment = new Comment(commentInfo)
    comment.publicar(comment.studentRole)
  }
}

export default TeacherStudent
