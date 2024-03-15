// console.log('Hola desde el archivo index.js')

// console.log('Objeto Window:', window)

// console.log('Navigator:', navigator)
// console.log(navigator.userAgent)

// console.log('Location:', location)

// window.alert('Hola desde el navegador')
// window siempre regresa null cuando no se encuentra el elemento

// let nombre = window.prompt('Ingresa tu nombre')

// const nameEl = document.getElementById('nombre')

// nameEl.textContent = nombre || 'Invitado'

// const respuesta = window.confirm('¿Quieres ir a google.com?') // valor booleano true o false

// console.log('Respuesta:', respuesta)

// if (respuesta) {
//   window.location.href = 'https://google.com'
// }

// DOM - Document Object Model
/*
Window {...
document: {...}
...
}
*/

console.log('Document:', window.document)


console.log(document) // a la página web

// obtener un solo string con las clases del elemento.
// document.body.className = 'bg-red'
// reemplaza todas las clases del elemento.
console.log(document.body.className)

// obtener un arreglo con las clases del elemento.
console.log(document.body.classList[2])
console.log(document.body.classList.value)
document.body.classList.add('bg-red')
document.body.classList.remove('one')

console.log(document.body.classList)

// Métdos de búsqueda
// Malas prácticas
// pokebola.onclick = function () {
//   alert('Atrapaste un pokemon')
// }

// getElementById
// const btnPoke = document.getElementById('poke')
// buena práctica
// btnPoke.onclick = function () {
//   alert('Atrapaste un pokemon')
// }

// querySelector
const btnOpen = document.querySelector('.btn--open')
const btnClose = document.querySelector('.btn--close')
const navMenu = document.querySelector('.nav__menu')
console.log(btnOpen)

// Agregar evento por propiedad
btnOpen.onclick = function () {
  // navMenu.classList.add('show--menu')
  navMenu.classList.toggle('show--menu')
}

btnClose.onclick = function () {
  navMenu.classList.remove('show--menu')
}

// Método para manejar eventos
// addEventListener
// querySelectorAll
const links = document.querySelectorAll('.nav__link')

for (const link of links) {
  link.addEventListener('click', function () {
    navMenu.classList.remove('show--menu')
  })
}


/* Usando la libreria typing.js */
var typed = new Typed('#typing', {
  strings: ['Software', 'FullStack'],
  typeSpeed: 65,
  loop: true,
  cursorChar: '__'
})

// const document = {
//   doctype: {},
//   documentElement: { // html
//     body: {
//       firstChild: {},
//       lastChild: {},
//       classList: {
//         add: () => { },
//         remove: () => { },
//         toggle: () => { },
//       },
//       style: {
//         color: '',
//         backgroundColor: '',
//         // ...
//       },
//       children: []
//     }
//   },
//   head: {},
// },
//   body: {},
//   head: {},
//   //...
// }
