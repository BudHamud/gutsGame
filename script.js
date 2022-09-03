let sec = document.querySelector(".dialog");
let img = document.querySelector(".imgDialog");
let opcion = 0;

acciones();

function acciones() {
  botonSig();
}

function botonSig() {
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    fech();
  });
}

function fech() {
  fetch("api.json")
    .then((resp) => resp.json())
    .then((json) => mostrarTexto(json));
}

function mostrarTexto(e) {
  if (e[opcion].numBtns === 1) {
    img.innerHTML = `<img src="img/img${e[opcion].img}">`;
    sec.innerHTML = `<h2>${e[opcion].titulo}</h2>
      <p>${e[opcion].texto}</p>
      <button onclick="cambiar(value)" value=${e[opcion].rutaBtn1}>${e[opcion].rutaOp1}</button>`;
  } else if (e[opcion].numBtns === 2) {
    img.innerHTML = `<img src="img/img${e[opcion].img}">`;
    sec.innerHTML = `<h2>${e[opcion].titulo}</h2>
      <p>${e[opcion].texto}</p>
      <button onclick="cambiar(value)" value=${e[opcion].rutaBtn1}>${e[opcion].rutaOp1}</button>
      <button onclick="cambiar(value)" value=${e[opcion].rutaBtn2}>${e[opcion].rutaOp2}</button>`;
  } else if (e[opcion].numBtns === 3) {
    img.innerHTML = `<img src="img/img${e[opcion].img}">`;
    sec.innerHTML = `<h2>${e[opcion].titulo}</h2>
      <p>${e[opcion].texto}</p>
      <button onclick="cambiar(value)" value=${e[opcion].rutaBtn1}>${e[opcion].rutaOp1}</button>
      <button onclick="cambiar(value)" value=${e[opcion].rutaBtn2}>${e[opcion].rutaOp2}</button>
      <button onclick="cambiar(value)" value=${e[opcion].rutaBtn3}>${e[opcion].rutaOp3}</button>`;
  } else {
    img.innerHTML = `<img src="img/img${e[opcion].img}">`;
    sec.innerHTML = `<h2>${e[opcion].titulo}</h2>
      <p>${e[opcion].texto}</p>
      <button onclick="fin()">${e[opcion].rutaOp1}</button>`;
  }
}

function fin() {
  alert("Está acá llega la historia de momento, fin del tomo 3")
}

function cambiar(value) {
  opcion = value;
  fech();
}

// Todo esto de acá abajo es para testear la api

// function ultimo(e) {
//   img.innerHTML = `<img src="img/img${e[16].img}">`;
//   sec.innerHTML = `<h2>${e[16].titulo}</h2>
//       <p>${e[16].texto}</p>
//       <button onclick="cambiar(value)" value=${e[16].rutaBtn1}>${e[16].rutaOp1}</button>`
// }

// function test(value) {
//   opcion = value;
//   fechTest();
// }

// function fechTest() {
//   fetch("api.json")
//     .then((resp) => resp.json())
//     .then((json) => ultimo(json));
// }

// for (let i = 1; i <= 2; i++) {
//   div = document.createElement('div');
//   div.innerHTML = `<button onclick="cambiar(value)" value=${e[opcion].rutaBtn[i]}>${e[opcion].rutaOp[i]}</button>
//   `;
//   sec.appendChild(div)
// }
