import Comment from './comment.js'
class Student {
    constructor ({
        name,
        age,
        username,
        email,
        instagram = undefined,
        twitter = undefined,
        facebook = undefined,
        approvedCourse = [],
        learningPaths = []

    }) {
        this.name = name;
        this.age = age;
        this.username = username
        this.email = email;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        }
        this.approvedCourse = approvedCourse;
        this.learningPaths = learningPaths
    }

    publicarComentario(content) {
      const commentInfo = {
        content: content,
        studentName: this.name,
      }
      const comment = new Comment(commentInfo)
      comment.publicar()
    }
};

export default Student
