/*objetos */
//1.- Crea un **objeto** de nombre **Coche** que tenga las propiedades: **marca, modelo, matricula**
let Coche = {
    marca: "Ford",
    modelo: "Escort",
    matricula: "123456"
}

//2.- Crea un **objeto** de nombre **Casa** que tenga las propiedades: **codPostal, calle, portal, piso**
const Casa = {
    codPostal: 28029,
    calle: 'Calle falsa 123',
    portal: 4,
    piso: 2
}

//3.- Crea un **objeto** de nombre **FullStackDeveloper** que tenga las propiedades: **array lenguajes, array proyectos**
const FullStackDeveloper = {
    lenguajes: ['html','css', 'javascript'],
    proyectos: ['proyecto1', 'proyecto2', 'proyecto3']
}

//4.- Crea un **objeto** de nombre **Perro** que tenga las propiedades: **nombre, raza, color, edad, función ladrar (imprime por consola un ladrido), función popo (devuelve el valor: Math.random() * 3)**

const Perro = {
    nombre: 'Carlitos',
    raza: 'Chihuahua',
    color: 'beige',
    edad: 1,
    ladrar: function(){
        console.log('Guau!')
    },
    popo: function(){
        return Math.random() * 3;
    }
}

/*Lectura de propiedades*/

//5.- Dado un **objeto** de nombre **Portatil** obtén el valor de la propiedad **marca con .marca** guardándolo en la variable **marcaPortatil**

const Portatil = {
    
}