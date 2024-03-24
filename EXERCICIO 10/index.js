const vogaisMaiscula = ["A","E","I","O","U"];
const vogaisMinusculas = ["a","e","i","o","u"];
const caractere = "E";

if (vogaisMaiscula.includes(caractere)) {
    console.log("Vogal maiuscula")
} else if (vogaisMinusculas.includes(caractere)) {
    console.log("Vogal minúscula")
} else {
    console.log("Consoante")
}


