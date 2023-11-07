let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado`
       lista.appendChild(item)
       res.innerHTML = ''
    }else{
        window.alert('Número inválido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus() //limpar a caixa apos clicar no botão
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adiciona algum valor ai meu parceiro')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        for(let pos in valores){
            soma += valores[pos] // somatoria de todos os numeros dentro do vetor
            if (valores[pos] > maior){ //selecionar o maior numero
                maior = valores[pos]
            }
            if (valores[pos] < menor){ //selcionar o menor numero
                menor = valores[pos]
            }
            
        }

        let media = soma/tot //media aritmetica dos numeros dentro do vetor
        res.innerHTML = ''
        res.innerHTML = `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número é ${maior}.</p>`
        res.innerHTML += `<p>O menor número é ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os numeros é ${soma}</p>`
        res.innerHTML += `<p>A media dos números informados é ${media}</p>` 
    }
    
}