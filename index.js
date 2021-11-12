// Import stylesheets
import './style.css';

// Write Javascript code!
const btnGuardar = document.getElementById("btn-guardar");
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function direccion(e) {
  e.preventDefault();
  var URLactual = window.location;
  alert(URLactual);
}

btnGuardar.onclick = direccion;
