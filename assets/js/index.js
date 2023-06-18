

var qtdBloco = 8

var blocos = [
    {tipo:"terra",valor:-1},
    {tipo:"terra2",valor:1},
    {tipo:"carvao",valor:2},
    {tipo:"ferro",valor:6},
    {tipo:"ouro",valor:24},
    {tipo:"diamante",valor:120},
    {tipo:"obsidian",valor:720},
    {tipo:"bedrock",valor:5040},
]
    

var ordemCorreta = [
blocos[0],
blocos[1],
blocos[1],
blocos[1],
blocos[1],
blocos[2],
blocos[3],
blocos[4],
blocos[5],
blocos[6],
blocos[7],
]

var divCamadas1 = document.getElementById("camadas_1");
var divCamadas2 = document.getElementById("camadas_2");
var divCamadasAleatorias= document.getElementById("camadas_aleatoria")

function iniciarMundo() {

    
    for(var camadas = 0; camadas < ordemCorreta.length; camadas++){
        var linha = document.createElement("div")
        linha.classList.add("linha")

        for(var contagemBlocos = 0; contagemBlocos < qtdBloco; contagemBlocos++){
            var blocoAtual = ordemCorreta[camadas]
            var divBloco = document.createElement("div")
            divBloco.classList.add("bloco")
            divBloco.classList.add(`${blocoAtual.tipo}`)
            linha.appendChild(divBloco)
        }

        
        divCamadas1.appendChild(linha)
        divCamadas2.appendChild(linha.cloneNode(true))
    }
}


var camadasAleatorias = []
function misturarCamadas() {
    if(camadasAleatorias.length < 11){
        console.log(camadasAleatorias.length)
        var posicaoMax = ordemCorreta.length-1
        var posicaoMin = 0
    
        var intervalo = (posicaoMax-posicaoMin)+1
    
        var posicaoAletatoria = parseInt(Math.random() * intervalo)

        console.log(posicaoAletatoria)
       
        var camadaValida = true
        var contagemTerra2 = 0
        if(camadasAleatorias.length == 0){
            camadasAleatorias.push(ordemCorreta[posicaoAletatoria])
            return misturarCamadas()
        }else{
            for(var i = 0; i<camadasAleatorias.length; i++){
                if(camadasAleatorias[i].valor == ordemCorreta[posicaoAletatoria].valor){
                    if(camadasAleatorias[i].valor == 1){
                        contagemTerra2++
                        if(contagemTerra2 > 4){
                            camadaValida = false
                        }
                    }else{
                        camadaValida = false
                        
                    }
                  
                }
            }
            if(camadaValida){
                camadasAleatorias.push(ordemCorreta[posicaoAletatoria])
            }
            return misturarCamadas()
        }
    }else{
        listarCamadasAleatorias()
    }
}

function listarCamadasAleatorias() {
    for(var camadas = 0; camadas < camadasAleatorias.length; camadas++){
        var linha = document.createElement("div")
        linha.classList.add("linha")

        for(var contagemBlocos = 0; contagemBlocos < 1; contagemBlocos++){
            var blocoAtual = camadasAleatorias[camadas]
            var divBloco = document.createElement("div")
            divBloco.classList.add("bloco")
            divBloco.classList.add(`${blocoAtual.tipo}`)
            linha.appendChild(divBloco)
            divCamadasAleatorias.appendChild(linha)
        }
    }
}






