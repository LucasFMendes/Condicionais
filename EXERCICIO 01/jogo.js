const jogada1 = "pedra"
const jogada2 = "tesoura"

if (jogada1 === jogada2) {

    console.log("empate")

    } else {
    
    if (jogada1 === "pedra") 
        if (jogada2 === "tesoura" ) {
            console.log("Pedra ganhou!")
    } else {
        console.log("Tesoura Ganhou")
    } else {
        if (jogada2 === "pedra") {
            console.log("Pedra ganhou")
        } else {
            console.log("Tesoura ganhou")
        }
    }
    
}
