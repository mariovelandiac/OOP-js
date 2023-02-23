class Course {
    constructor({
        name,
        classes = []
    }) {
        this._name = name,
        this.classes = classes
    }

    get name() {
      return this._name
    }

    set name(newName) {
      if (newName === 'ajatuque') {
        throw new Error('Por favor no lo hagas...')
      }
      this._name = newName
    }
}

export default Course;
