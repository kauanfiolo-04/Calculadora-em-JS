function calculadora(){
    const operacao=Number(prompt('Escolha uma operação\n 1-Soma\n 2-Subtração\n 3-Multiplicação\n 4-Divisão Real\n 5-Divisão Inteira\n 6-Potenciação'))
     let n1=Number(prompt('Insira o primeiro valor'))
     let n2=Number(prompt('Insira o segundo valor'))
     let resultado
     function continuacao(){
         let cont=Number(prompt('Deseja continuar?\n 1-Sim\n 2-Não'))
         if(cont==1){
             calculadora()
         }
     }
      function error(){
          alert('Selecione uma operação válida')
      }
     function soma(){
         resultado=n1+n2
         alert(`${n1}+${n2}=${resultado}`)
         continuacao()
     }
     function subtracao(){
        resultado=n1-n2
         alert(`${n1}-${n2}=${resultado}`)
         continuacao()
     }
     function multiplicacao(){
        resultado=n1*n2
        alert(`${n1}*${n2}=${resultado}`)
        continuacao()
     }
     function divReal(){
        resultado=n1/n2
        alert(`${n1}/${n2}=${resultado}`)
        continuacao()
     }
     function divInt(){
        resultado=n1%n2
        alert(`${n1}%${n2}=${resultado}`)
        continuacao()
     }
     function potenciacao(){
        resultado=n1**n2
        alert(`${n1}**${n2}=${resultado}`)
        continuacao()
     }

     switch (operacao){
         case 1: 
            soma()
            break
         case 2:
             subtracao()
             break
         case 3:
             multiplicacao()
             break
         case 4:
             divReal()
             break
         case 5:
             divInt()
             break
         case 6:
             potenciacao()
             break
         default:
             error()
     }
}
