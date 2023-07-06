//Función inmpura

//const dPorcentaje = 16;

// const fn_calcularPrecioConIva = (nCantidad) =>
//   (nCantidad / 100) * (100 + dPorcentaje);

// let totalUno = fn_calcularPrecioConIva(1000);

// console.log(totalUno);

//Función puras que no dependan de valores externos

// const fn_calcularPrecioConIvas = (nCanti, nPocentaje) => {
//     return (nCanti / 100) * (100 + nPocentaje);
// };

// let totalDos = fn_calcularPrecioConIvas (100, 16)

// console.log(totalDos);

//Funciones dentro de otras funciones
// const fn_showMsj = () => {
//   console.log('Hola mundo');
// };

// const fn_execFn = () => {
//   fn_showMsj();
// };

// fn_execFn(fn_showMsj());

//--------------------------------------------------------------------------//
//Clousures

// const fn_externa = () => {
//   const fn_interna = () => {
//     let variableInterna = 'Variable interna';
//     console.log(variableInterna);
//   };
//   fn_interna();
// };

// fn_externa();

// let sMsj = '';

// //Ejercicio
// const fn_externa = (sVariable) => {
//   const fn_interna = () => {
//     let variableInterna = 'Variable interna';
//     console.log(variableInterna);
//     console.log(sVariable);
//   };
//   fn_interna();
// };

// fn_externa('Hola');

//---------------------------------------------//
//const array = [1,2,3,4,5]

//-------------------FUNCIONES PERSONALIZADAS---------------------//
const array = [1, 2, 3, 4, 5, 6, 7, 8, , 9, 10];

// const forEachUV = (arreglo, fn) => {
//   for (let i = 0; i < arreglo.length; i++) {
//     fn(arreglo[i]);
//   }
// };

// const unless = (predicate, fn) => {
//   if (!predicate) fn();
// };

// const times = (times, fn) => {
//   for (let i = 0; i <= times; i++) {
//     fn(i);
//   }
// };

// times(100, (n) => {
//   unless(n % 2, () => {
//     console.log(n, ' es par');
//   });
// });

//MAP

// const array2 = array.map((item) => {
//   return item * 2;
// });

// const array3 = array.map((item) => {
//   return item * 3;
// });

// console.log(array);
// console.log(array2);
// console.log(array3);

const cursos = [
  { nombre: 'Angular', precio: 10000, lenguaje: 'JS' },
  { nombre: 'React', precio: 10000, lenguaje: 'JS' },
  { nombre: 'Vue', precio: 10000, lenguaje: 'JS' },
  { nombre: 'SolidJS', precio: 8000, lenguaje: 'JS' },
  { nombre: 'Svelte', precio: 7000, lenguaje: 'JS' },
  { nombre: 'AstroJS', precio: 6500, lenguaje: 'JS' },
  { nombre: 'Qwik', precio: 4500, lenguaje: 'JS' },
  { nombre: 'Ember', precio: 5000, lenguaje: 'JS' },
  { nombre: 'Blazor', precio: 10500, lenguaje: 'CSharp' },
];

//Ejercicio con map
//Desconstar 5000 al objeto cuyo lenguaje sea JS

const arrCursosDiscount = cursos.map((curso) => {
  //Esta manera fue en la que lo realizo Jimmy
  // if (curso.lenguaje === 'JS') {
  //   return {
  //     ...curso,
  //     precio: curso.precio - 5000,
  //   };
  //}

  if (curso.lenguaje === 'JS') {
    curso.precio -= 1000;
  }
  return curso;
});

//Obtener los cursos con precio mayor a 7000 después de haber recibido el descuento
//FILTER
const arrCursosUpper = cursos.filter((curso) => {
  if (curso.precio > 7000) {
    return curso;
  }
});

//Sumar el precio de todos los cursos

const arrCursosSum = cursos.reduce(
  (accumulator, currentValue) => accumulator + currentValue.precio,
  0
);
//REDUCE
const total = cursos.reduce((prev, current) => {
  console.log(`${prev},${current.precio}`);
  return prev + current.precio;
}, 0);

//Buscar el elemento del arreglo con el nombre de Angular y mostrarlo dentro de otro arreglo,(o el mismo)
//FIND
const arrCursosFindName = cursos.find((curso) => {
  curso.nombre == 'Angular';
});

console.log(arrCursosDiscount);
console.log(arrCursosUpper);
console.log(arrCursosSum);
console.log(arrCursosFindName);
