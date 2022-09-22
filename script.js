const users = [
    { Nombre: 'Marta', Documento: 001, Contraseña: 001, tipo: 'cliente' },
    { Nombre: 'Juan', Documento: 002, Contraseña: 002, tipo: "cliente" },
    { Nombre: "Olga", Documento: 003, Contraseña: 003, tipo: "admin" },
    { Nombre: "David", Documento: 004, Contraseña: 004, tipo: "admin" },
];

let balance = 0; //Balance total
let mil50 = 0; //Cantidad de billetes de 50mil
let mil5 = 0; //Cantidad de billetes de 5mil
let mil10 = 0; //Cantidad de billetes de 10mil
let mil20 = 0; //Cantidad de billetes de 20mil
let mil100 = 0; //Cantidad de billetes de 100mil

let logged = false;

while (!logged) {
    const inputDocument = prompt("Ingrese el documento: ");
    const inputPassword = prompt("Ingrese el contraseña: ");

    const loginUser = (Documento, Contraseña) => {
        return users.find(item => {
            return item.Documento == Documento
        })
            .Contraseña == Contraseña ? true : false
    };

    logged = loginUser(inputDocument, inputPassword)
    logged ? console.log("Bienvenido!") : console.log("Datos incorrectos, intentelo nuevamente.")

    function validar() {
        if (inputPassword == 003 && inputDocument == 003 || inputPassword == 004 && inputDocument == 004) {
            billetes5mil();
        } else { alert('Cajero en mantenimiento'); }
    }
    validar();
}



function billetes5mil() {
    let withdrawal = parseFloat(prompt("Cuantos billetes de 5mil deseas ingresar"));
    if (isNaN(withdrawal) || withdrawal === '') {
        billetes5mil();
    } else {
        balance += 5000 * withdrawal;
        mil5 += 5000 * withdrawal;
    }
    billetes10mil();
}

function billetes10mil() {
    let withdrawal = parseFloat(prompt("Cuantos billetes de 10mil deseas ingresar?"));
    if (isNaN(withdrawal) || withdrawal == '') {
        billetes10mil();
    } else {
        balance += 10000 * withdrawal;
        mil10 += 10000 * withdrawal;
    }
    billetes20mil();
}

function billetes20mil() {
    let withdrawal = parseFloat(prompt("Cuantos billetes de 20mil deseas ingresar?"))
    if (isNaN(withdrawal) || withdrawal == '') {
        billetes20mil();
    } else {
        balance += 20000 * withdrawal;
        mil20 += 20000 * withdrawal;
    }
    billetes50mil();
}

function billetes50mil() {
    let withdrawal = parseFloat(prompt("Cuantos billetes de 50mil deseas ingresar?"))
    if (isNaN(withdrawal) || withdrawal == '') {
        billetes50mil();
    } else {
        balance += 50000 * withdrawal;
        mil50 += 50000 * withdrawal;
    }
    billetes100mil();
}

function billetes100mil() {
    let withdrawal = parseFloat(prompt("Cuantos billetes de 100mil deseas ingresar?"))
    if (isNaN(withdrawal) || withdrawal == '') {
        billetes100mil();
    } else {
        balance += 100000 * withdrawal;
        mil100 += 100000 * withdrawal;
    }
    getBalance();
}
function getBalance() {
    console.log(`Tienes ${balance}COP en total`, "\n", `Tienes ${mil5} en billetes de 5000COP`, "\n", `Tienes ${mil10} en billetes de 10000COP`, "\n", `Tienes ${mil20} en billetes de 20000COP`, "\n", `Tienes ${mil50} en billetes de 50000COP`, "\n", `Tienes ${mil100} en billetes de 100000`)
}

