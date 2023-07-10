

var qtdBloco = 8
var posicaoInicial = 0;
var posicaoFinal = 0
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
var ordem = ordemCorreta;

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



function reiniciarCamadaAleatoria() {
  window.location.reload()
}

function misturarCamadas() {
    if(camadasAleatorias.length < 11){
            var posicaoMax = ordem.length-1
            var posicaoMin = 0
        
            var intervalo = (posicaoMax-posicaoMin)+1
            
            var posicaoAletatoria = parseInt(Math.random() * intervalo)

            if(ordem[posicaoAletatoria] != null){
                camadasAleatorias.push(ordem[posicaoAletatoria]);
                ordem[posicaoAletatoria] = null  
            }
           
            return misturarCamadas()
        }else{
            posicaoFinal = camadasAleatorias.length-1;
            return listarCamadasAleatorias()
        }
}

function listarCamadasAleatorias() {
    divCamadasAleatorias.innerHTML = "";
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



var bloco = ""
function quicksort(vetor, comeco, fim) {
    if(comeco < fim){
            setTimeout(() => {
            var posicaoPivot = particionar(vetor, comeco, fim)

            quicksort(vetor, comeco, (posicaoPivot-1))
            quicksort(vetor, (posicaoPivot+1), fim)

        }, 2000);
    }
}

function particionar(vetor, comeco, fim) {
    var pivot = vetor[comeco].valor
    var i = comeco

    for(var j = comeco +1; j<=fim; j++){
        var valorBlocoComparacao = vetor[j].valor
        if(valorBlocoComparacao <= pivot){
            i+=1
            var camada_guardada = vetor[i]
            vetor[i] = vetor[j]
            vetor[j] = camada_guardada
        }
    }
    
    camada_guardada = vetor[comeco]
     vetor[comeco] = vetor[i]
    vetor[i] = camada_guardada
    
    listarCamadasAleatorias()
    return i   
}






