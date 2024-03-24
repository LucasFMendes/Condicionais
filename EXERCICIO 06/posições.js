const alturaEmCm = 185;

//seu código aqui
if (alturaEmCm < 180) {
    console.log("Reprovado")
} else if (alturaEmCm >= 185) {
    console.log("Libero")
} else if (alturaEmCm >= 186) {
    console.log("Ponteiro")
} else if (alturaEmCm >= 196) {
    console.log("Oposto")
} else if (alturaEmCm > 205) {
    console.log("Central")
} else {
    console.log("Reprovado")
}