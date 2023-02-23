class Comment {
  constructor({
    content,
    studentName,
    studentRole = 'student'
  }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }


  publicar() {
    if (this.studentRole === 'student') {
      console.log('Comentario de estudiante: ' + this.content)
    } else if (this.studentRole === 'Profe') {
      console.log('Comentario de Profe: ' + this.content)
    }
  }

}

export default Comment
