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

let sMsj = '';

//Ejercicio
const fn_externa = (sVariable) => {
  const fn_interna = () => {
    let variableInterna = 'Variable interna';
    console.log(variableInterna);
    console.log(sVariable);
  };
  fn_interna();
};

fn_externa('Hola');
