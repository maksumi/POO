 /* Paradigmas de Programación y Clases en JavaScript */

// Definición de paradigmas de programación y clases

/* 
Paradigmas de programación (formas de programar):
    - Programación imperativa: Basada en instrucciones detalladas a la computadora, ejecutadas en una secuencia determinada (C, C++, Java, Python, Swift, JS)
    - Programación basada en eventos: Enfocada en la gestión y respuesta de eventos (JS, C#, Python)
    - Programación declarativa: Explicar lo que necesitamos obtener, más que cómo se hace (HTML, SQL)
    - Programación Orientada a Objetos: Toma ejemplos del mundo real (objetos), comprende sus características (propiedades o atributos) y con base en su comportamiento o acciones (métodos), resolvemos problemas reales.
    Clase: Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crear instancias (materialización) de este tipo de objetos.
    Objeto: Materialización de la información o los datos con los que cuenta mi plantilla o clase.
*/

// Creando mi primera clase

class Persona {

    // Propiedades o atributos de mi clase de forma general
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

    // Defino un constructor que tomará los atributos como "material" para la instancia o creación de mis objetos
    // El constructor es una función especial cuya función es construir o instanciar objetos.
    // Al pasar los atributos como parámetros, es importante cuidar el orden en cómo fueron declarados
    constructor(nombre, apellido, edad, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }

    // Métodos o comportamientos (Funciones)
    // Para definir los métodos de mi objeto, ya no utilizo la palabra "function"

    hablar() {
        console.log("Hola, estoy hablando...");
    }

    dormir() {
        console.log("Zzzzzzzz");
    }

    mostrarInfo() {
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Telefono: ", this.telefono);
    }
}

// Instancia de objetos de tipo Persona

let persona1 = new Persona("Felipe", "Maqueda", 31, "felipemaqueda@mail.com", "5512345678");
let persona2 = new Persona("Naruto", "Uzumaki", 22, "naruto@hokage.com", "1234567800");
let persona3 = new Persona("Alicia", "Diaz", 23, "aliciadiaz@mail.com", "3412345678");

// Imprimir el objeto completo
console.log(persona1);

// Imprimir un atributo de un objeto
console.log(persona1.apellido);

// Imprimir dos o más atributos de un objeto
console.log(persona3.apellido, persona3.nombre);

// Invocar el método de nuestros objetos
persona1.dormir();
persona2.mostrarInfo();
console.log(persona3.nombre);

/* Existen 4 pilares de la POO que nos permiten ampliar las características y dotar de funcionalidades y operaciones a nuestro código.
    - Herencia
    - Polimorfismo
    - Encapsulamiento
    - Abstracción
*/

// Creando una nueva clase para aplicar la Herencia (extends)

class Paciente extends Persona {

    // Definición de atributos o propiedades
    doctorAtiende = ""; // Nombre del médico que atiende
    historialMedico = ""; // Si o no el historial médico
    alergias = ""; // Alergias existentes

    // Generación de constructor
    constructor(nombre, apellido, edad, email, telefono, doctorAtiende, historialMedico, alergias) {
        super(nombre, apellido, edad, email, telefono); // "super" indica que traemos cosas de la clase superior
        this.doctorAtiende = doctorAtiende;
        this.historialMedico = historialMedico;
        this.alergias = alergias;
    }

    // Métodos
    mostrarInfo() {
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Telefono: ", this.telefono);
        console.log("Doctor que atiende: ", this.doctorAtiende);
        console.log("Historial Médico: ", this.historialMedico);
        console.log("Alergias: ", this.alergias);
    }
}

// Instancia de un paciente
let paciente1 = new Paciente("Jesus", "Gonzalez", 31, "jesusgonzales@mail.com", "55987654321", "Doctor Simi", "No tiene", "Penicilina");

// Imprimir objeto paciente
console.log(paciente1);

// Uso de método mostrar info
paciente1.mostrarInfo();
paciente1.dormir();

/* Diferencias entre un objeto literal (normal) y un objeto tipo JSON */

// Todas las claves y los valores van dentro de comillas
// Envío de información a servidores
let objetoJSON = {
    "nombre": "Jesus",
    "apellido": "Gonzalez",
    "edad": 31,
    "email": "jesusgonzalez@mail.com",
    "telefono": "55987654321",
    "doctorAtiende": "Doctor Simi",
    "historialMedico": "No tiene",
    "alergias": "Penicilina"
}

// Tratar la información y sacar datos específicos para el DOM
let objetoLiteral = {
    nombre: "Jesus",
    apellido: "Gonzalez",
    edad: 31,
    email: "jesusgonzalez@mail.com",
    telefono: "55987654321",
    doctorAtiende: "Doctor Simi",
    historialMedico: "No tiene",
    alergias: "Penicilina"
}

/* 
Realizar un programa que conste de una clase llamada Alumno, que tenga como atributos el nombre y la nota del alumno. Definir métodos para inicializar sus atributos (método constructor), imprimirlos y mostrar un mensaje con el resultado de la nota si ha aprobado o no.
    Atributos:
        - nombre
        - nota (calificación)
    Métodos:
        - Constructor
        - Método evaluación (si aprueba o no)
        - Método imprimirInfo (nombre y la nota)
    
    Lógica del negocio:
        - If para evaluar la nota (si la nota es menor a 6, está reprobado)
        - Recuperamos la información por medio de un prompt
        - Generamos 3 instancias para probar mi código (la nota sea igual a 6, la nota sea menor a 6, la nota sea mayor a 6)
*/

// Creación de la clase
class Alumno {
    // Atributos o propiedades
    nombre;
    nota;

    // Constructor donde le doy identidad a mi objeto (this)
    constructor(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }

    // Métodos
    // Método general, un método que no requiere personalización porque aplica para cualquier objeto
    evaluacion(nota) {
        // Condición para saber si está aprobado o reprobado
        if (nota >= 6) {
            console.log("Aprobado");
        } else {
            console.log("Reprobado");
        }
    }

    imprimirInfo() {
        console.log("Nombre del alumno ", this.nombre);
        console.log("Nota del alumno: ", this.nota)
    }
}

// Instancias de alumnos en 3 escenarios

let alumno1 = new Alumno("Felipe", 3);
let alumno2 = new Alumno("Felipe", 8);
let alumno3 = new Alumno("Felipe", 6);

// Invocando métodos
alumno1.evaluacion(alumno1.nota); // Reprobado
alumno2.evaluacion(alumno2.nota); // Aprobado
alumno3.evaluacion(alumno3.nota); // Aprobado

}// Cierre de la clase persona
