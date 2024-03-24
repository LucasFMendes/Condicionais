const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui
if (aposentada || portadoraDeDoenca) {
    console.log("Isenta")
} else if (totalDeRendimentos < 2855978) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE")
} else {
    console.log("Pega Leao")
}