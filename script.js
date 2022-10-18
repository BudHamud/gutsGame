let sec = document.querySelector(".dialog");
let img = document.querySelector(".imgDialog");
let atk = document.getElementById("atk");
let def = document.getElementById("def");
let dialog = document.querySelector(".dialog");
let progress = document.getElementById("progress");
let opcion = 0;
let player = 100;
let enemy = 100;
let divHere = false;

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
  } else if (e[opcion].numBtns === 4) {
    let progress = document.createElement("div");
    img.innerHTML = `<img src="img/img${e[opcion].img}">`;
    sec.innerHTML = `<h2>${e[opcion].titulo}</h2>
      <p>${e[opcion].texto}</p>
      <button onclick="atack()" value=${e[opcion].rutaBtn1}>${e[opcion].rutaOp1}</button>
      <button onclick="atack()" value=${e[opcion].rutaBtn2}>${e[opcion].rutaOp2}</button>`;
    progress.innerHTML = `<label for="you">You</label>
  <progress id="you" value="${player}" max="100"></progress>
  <label for="enemy">Enemy</label>
  <progress id="enemy" value="${enemy}" max="100"></progress>`;
    dialog.appendChild(progress);
  } else {
    img.innerHTML = `<img src="img/img${e[opcion].img}">`;
    sec.innerHTML = `<h2>${e[opcion].titulo}</h2>
      <p>${e[opcion].texto}</p>
      <button onclick="fin()">${e[opcion].rutaOp1}</button>`;
  }
}

function fin() {
  alert("Está acá llega la historia de momento, fin del tomo 3");
}

function cambiar(value) {
  opcion = value;
  fech();
}

let atack = () => {
  let num = Math.round(Math.random() * 1);
  let button = document.createElement("button");

  switch (num) {
    case 1:
      player -= 10;
      break;
    case 0:
      enemy -= 10;
      break;
  }

  if (player > 0 && enemy > 0) {
    fech();
  } else {
    if (enemy === 0) {
      img.innerHTML = `<img src="img/guts.svg">`;
      sec.innerHTML =
        "<p>Lo lograste, ¡venciste a Griffith! (si, ese bicho era Griffith)</p>";
      button.innerText = "Volver";
      button.value = 0;
      button.addEventListener("click", () => {
        cambiar(button.value);
        enemy = 100;
        player = 100;
      });
      sec.append(button);
    } else if (player === 0) {
      img.innerHTML = `<img src="img/img3.svg">`;
      sec.innerHTML =
        "<p>Perdiste contra Griffith (si, ese bicho era Griffith)</p>";
      button.innerText = "Volver";
      button.value = 0;
      button.addEventListener("click", () => {
        cambiar(button.value);
        enemy = 100;
        player = 100;
      });
      sec.append(button);
    }
  }
};

// -- -- -- -- -- //

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

// -- -- -- -- -- //
