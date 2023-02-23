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
};

export default Student
