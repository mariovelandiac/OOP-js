class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lan = 'español'
    }) {
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lan = lan;
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
