function gerarCamadas() {
    for(var camadas = 0; camadas<ordem.length;camadas++){
        var linha = document.createElement("div")
        linha.classList
        for(var blocos = 0; blocos<4; blocos++){
            var bloco = document.createElement("div")
        }
    }

}
function gerarCamadasAleatoria() {
    
}

var blocos = {
    terra:"terra",
    terra_sem_grama:"terra2",
    minerio_carvao:"carvao",
    minerio_ferro:"ferro",
    minerio_ouro:"ouro",
    obsidian:"obsidian",
    bedrock:"bedrock"
}
    

var ordem = [
blocos.terra,
blocos.terra_sem_grama,
blocos.terra_sem_grama,
blocos.terra_sem_grama,
blocos.terra_sem_grama,
blocos.minerio_carvao,
blocos.minerio_ferro,
blocos.minerio_ouro,
blocos.obsidian,
blocos.bedrock
]



