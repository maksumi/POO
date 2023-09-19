 /*Paradigma
Estructarado
Instancia
Plantilla


Paradigma de programacion


Paradigma = la forma de hacer algo

Paradigma de programacion = la forma de programar, la forma de dar soluciones a problemas que se nos presentan.


Paradigmas de programacion (formas de programar)

    - Programacion imperativa: Basada en instrucciones detalladas a la computadora, ejecutadas en una secuencia determinada (C, C++, Java, Python, Swift, JS)

    - Programacion basada en eventos: Enfocada en la gestion y respuesta de eventos (JS, C#, Python)

    - Programacion declarativa: Explicar lo que necesitamos obtener, mas que como se hace (HTML, SQL)

    - Programacion Orientada a Objetos: Toma ejemplos del mundo real (objetos), comprende sus caracteristicas (propiedades o atributos) y con base en su comportamiento o acciones (metodos), resolvemos problemas reales.


*/


// Creando mi primera clase

class persona{
    //1 . Propiedades o atributos de mi clase de forma general
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

    //2. Métodos o comportamientos (funciones)
    //Para definir los métodos del objeto ya no utilizo la plabra 'function'

    hablar(){
        console.log("Hola estoy hablando...");
    }

    dormir(){
        console.log("ZzZzZzZzZzZ");
    }

    mostrariInfo(){
        console.log("Nombre: ");
        console.log("Apellido: ");
        console.log("Edad: ");
        console.log("Email: ");
        console.log("Telefono: ");
    }
}// Cierre de la clase persona