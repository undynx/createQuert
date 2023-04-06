let tablas = {};
let ultimaCreada;

let divVista = document.getElementById("div-vista");
let divInfo = document.getElementById("div-info");

function createTable() {
    let nombreTabla = document.getElementById('input1').value;

    let div1 = document.createElement("div");

    let texto = document.createElement("p");
    texto.innerHTML = `Creaste la tabla <strong>${nombreTabla}</strong>`;

    tablas[`${nombreTabla}`] = {};

    let tabla = document.createElement("table");
    tabla.setAttribute("id", `tabla-${nombreTabla}`);

    divVista.appendChild(div1);
    div1.appendChild(texto);
    div1.appendChild(tabla);

    let btnAgregarCol = document.createElement("button");
    btnAgregarCol.setAttribute("id", "btn-AgregarCol");
    btnAgregarCol.setAttribute("onClick", "agregarColumna()");
    btnAgregarCol.innerHTML = "Agregar columna";

    divInfo.replaceChild(btnAgregarCol, document.getElementById("btn-nuevaTabla"))
}

function agregarColumna() {

    let nombreCol = document.getElementById('input1').value;


}