"use strict";

//Escribe una función que, al recibir un array con la forma del ejemplo a continuación, devuelva un objeto con el número de animales de cada especie. Piensa que el array puede ser modificado para añadir nuevas especies que no estuviesen en el original.

const animals = [
  {
    name: "Frank",
    species: "dog",
  },
  {
    name: "Romeo",
    species: "cat",
  },
  {
    name: "Olivia",
    species: "chicken",
  },
  {
    name: "Cooper",
    species: "cat",
  },
  {
    name: "Max",
    species: "dog",
  },
  {
    name: "Oscar",
    species: "dog",
  },
  {
    name: "Lola",
    species: "cat",
  },
  {
    name: "Jax",
    species: "snake",
  },
  {
    name: "Millie",
    species: "cat",
  },
];

//Escribe una función que, al recibir un array con la forma del ejemplo a continuación, devuelva un objeto con el número de animales de cada especie. Piensa que el array puede ser modificado para añadir nuevas especies que no estuviesen en el original.

function animales(valor){
  let nuevoObjeto = {}
  let contadorDog = 0
  let contadorCat = 0
  let contadorChicken = 0
  let contadorSnake = 0
  for (let objetos of valor){
    // console.log(objetos.name, objetos.species)

    if (objetos.species === "dog"){
      contadorDog++
      const resultado = contadorDog
        nuevoObjeto["dog"] = resultado
    
        
    }if(objetos.species === "cat"){
      contadorCat ++
      const resultado1 = contadorCat
      nuevoObjeto["cat"] = resultado1
    }if(objetos.species === "chicken"){
      contadorChicken ++
      const resultado2 = contadorChicken
      nuevoObjeto["chicken"] = resultado2
    }if(objetos.species === "snake"){
      contadorSnake ++
      const resultado3 = contadorSnake
      nuevoObjeto["snake"] = resultado3
    }
  }

  return nuevoObjeto
}

const contar = animales(animals)
console.log(contar)
