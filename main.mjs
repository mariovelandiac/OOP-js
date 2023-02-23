import Class from './class.mjs'
import Course from './course.mjs';
import LearningPaths from './learningpaths.mjs';
import Student from './student.mjs'
// Información de clases

const introducción = new Class({
    name: 'introducción',
    description: 'Clase introducción al curso',
    videoID: 1234
});

const proyecto = new Class({
    name: 'proyecto este es mi fafa',
    description: 'Clase donde se muestra qué hay que hacer y cómo hacerlo',
    videoID: 1235
});


const información = new Class({
    name: 'información a enseñar',
    description: 'Lo que yo sé y voy a enseñar',
    videoID: 1236
});


const conclusiones = new Class({
    name: 'Esto es todo',
    description: 'Clase donde se termina el proyecto o lo enseñado',
    videoID: 1237
});

// Información de cursos

const cursoProgramBásica = new Course({
    name: "Curso gratis de programación Básico",
    classes: [
        introducción,
        proyecto,
        conclusiones
    ]
});

const cursoHTML = new Course({
    name: "Curso definitivo de HTML",
    classes: [
        introducción,
        información,
        conclusiones
    ]
});

const cursoHTMLdefinitvo = new Course({
    name: "Curso Práctivo de HTML",
    classes: [
        introducción,
        información,
        conclusiones
    ]
});

const cursoDataBusiness = new Course({
    name: "Curso Data Business",
    classes: [
        introducción,
        proyecto,
        conclusiones
    ]
});

const cursoDataViz = new Course({
    name: "Curso Data Viz",
    classes: [
        introducción,
        proyecto,
        conclusiones
    ]
});

const cursoRealEngine = new Course({
    name: "Curso Real Engine",
    classes: [
        introducción,
        proyecto,
        conclusiones
    ]
});

const cursoUnity = new Course({
    name: "Curso Unity",
    classes: [
        introducción,
        proyecto,
        conclusiones
    ]
});

// Información de Learning Paths

const escuelaWeb = new LearningPaths({
    name: 'Escuela desarrollo Web',
    courses: [
        cursoProgramBásica,
        cursoHTML,
        cursoHTMLdefinitvo
]});

const escuelaDS = new LearningPaths({
    name: 'Escuela Data Science',
    courses: [
        cursoDataBusiness,
        cursoDataViz
]});

const escuelaVdj = new LearningPaths({
    name: 'Escuela VideoJuegos',
    courses: [
        cursoUnity,
        cursoRealEngine
]});



const mario2 = new Student({
    name: 'Mario',
    age: 26,
    username: 'mariovelandiac',
    twitter: 'mariovelandiac',
    instagram: 'mariovelandiac',
    learningPaths: [
        escuelaDS,
        escuelaWeb
    ]
});

const ricardo = new Student({
    name: 'Ricardo',
    age: 8,
    username: 'ricardo23',
    twitter: 'mariovelandiac',
    instagram: 'mariovelandiac',
    learningPaths: [
        escuelaDS,
        escuelaVdj
    ]
});

const toShow = [
  mario2.learningPaths[0].courses[0].name,
  ricardo.learningPaths[0].courses[1].name
]


function main() {
    introducción.pausar()
}

export default main();


