console.log("Javascript carregado!");
//carrega junto da página

function validaCPF(cpf) {
    console.log(cpf.length);
        if(cpf.length != 11) {
            return false;
            //qualquer coisa diferente de 11 caracteres é falso
        } else {
            //pegando os primeiros 9 numeros
            //substring retorna apenas o valor na posição marcada "0, 9"
            var numeros = cpf.substring(0, 9);
            //pegando todos os numeros a partir nono numero
            var digitos = cpf.substring(9);
            console.log(numeros)
            console.log(digitos)

        var soma = 0;
            for (var i = 10; i > 1; i--) {
                soma += numeros.charAt(10 - i) * i;
                //O método charAt() retorna o caractere especificado a partir de uma string
                //charAt() retorna a posição da string na lista 

            } 
         console.log(soma);

         //operação pode resultar em 0, caso resulte em 0 será colocado dentro da variável 
        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        console.log(resultado)
        console.log(digitos.charAt(0))
        
        //validaçao do primeiro digito
            if (resultado != digitos.charAt(0)) {
                return false;
                }

                soma = 0;
                    numeros = cpf.substring(0, 10);

                    for (var k = 11; k > 1; k--) {
                        soma += numeros.charAt(11 - k) * k; 
                    }
                console.log(soma);

                    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
                    console.log(resultado, digitos.charAt(1));

                    if(resultado != digitos.charAt(1)){ 
                        return false;
                }

    return true;
    }
}

function validacao() {
    console.log('Iniciando validação CPF'); //inicia ao clicar em Validar
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

        var cpf = document.getElementById('cpf_digitado').value;
        console.log(cpf)
        var resultadoValidacao = validaCPF(cpf);

            if (resultadoValidacao) {
                document.getElementById('success').style.display = 'block';
            } else {
                document.getElementById('error').style.display = 'block';
            }
}




// function validaCPF(cpf) {
//     var numeros, digitos, soma, i, resultado, digitos_iguais;
//     digitos_iguais = 1;
  
//     if (cpf.length < 11) {
//       return false;
//     }
  
//     for (i = 0; i < cpf.length - 1; i++) {
//       if (cpf.charAt(i) != cpf.charAt(i + 1)) {
//         digitos_iguais = 0;
//         break;
//       }
//     }
  
//     if (!digitos_iguais) {
//       numeros = cpf.substring(0, 9);
//       digitos = cpf.substring(9);
//       soma = 0;
  
//       for (i = 10; i > 1; i--) {
//         soma += numeros.charAt(10 - i) * i;
//       }
  
//       resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  
//       if (resultado != digitos.charAt(0)) {
//         return false;
//       }
  
//       numeros = cpf.substring(0, 10);
//       soma = 0;
  
//       for (i = 11; i > 1; i--) {
//         soma += numeros.charAt(11 - i) * i;
//       }
  
//       resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
//       if (resultado != digitos.charAt(1)) {
//         return false;
//       }
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   function validacao() {
//     console.log('Iniciando validação CPF');
//     document.getElementById('success').style.display = 'none';
//     document.getElementById('error').style.display = 'none';
  
//     var cpf = document.getElementById('cpf_digitado').value;
  
//     if (validaCPF(cpf)) {
//       document.getElementById('success').style.display = 'block';
//     } else {
//       document.getElementById('error').style.display = 'block';
//     }
//     console.log('Finalizando validação CPF');
//   }