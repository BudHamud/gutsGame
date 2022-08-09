let sec = document.querySelector(".sechis")
let img = document.querySelector(".imghis")
let opcion = 0

acciones()

function acciones() {
    botonSig()
}

function botonSig() {
    const btn = document.getElementById("btn")
    btn.addEventListener('click', ()=> {
        fech()
    })
}

function fech() {
    fetch('api.json')
    .then(resp => resp.json())
    .then(json => mostrarTexto(json))
} 

function mostrarTexto(textz) {
    img.innerHTML =`<img src="img/img${textz[opcion].cinco}.png">`
    sec.innerHTML=
    `<h2>${textz[opcion].titulo}</h2>
    <p>${textz[opcion].texto}</p>
    <button onclick="cambiar(value)" value=${textz[opcion].tres}>${textz[opcion].uno}</button>
    <button onclick="cambiar(value)" value=${textz[opcion].cuatro}>${textz[opcion].dos}</button>
    `
}

function cambiar(value) {
    opcion = value
    fech()
}

let num = Number(prompt("numero"))
let ram = Math.round(Math.random()*10)

if (num === ram) {
    alert("acertaste!")
} if (num > ram) {
    alert("no acertaste, es más chico "+ram)
} if (num < ram) {
    alert("no acertaste, es más grande "+ram)
}