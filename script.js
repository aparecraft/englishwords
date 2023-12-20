
function playAudio() {
    let x = document.getElementById("myAudio");
    x.play();
}
function pauseAudio() {
    let x = document.getElementById("myAudio");
    x.pause();
}       

function verificarResposta() {
    const feedback = document.getElementById('feedback');}
    
    // Obter respostas corretas
    const respostasCorretas = {
        'question1': 'can',
        'question2': 'I would like',
        'question3': "I'd like",
        'question4': 'can',
        'question5': 'would you like',
        'question6': 'could',
        'question7': 'would you like',
        

        // Adicione mais IDs e respostas conforme necessário
    };

    function verificarResposta() {
        const feedback = document.getElementById('feedback');
        
        let todasCorretas = true;
    
        // Verificar cada resposta do usuário em comparação com as respostas corretas
        for (const id in respostasCorretas) {
            const respostaUsuario = document.getElementById(id).value.trim().toLowerCase();
            const respostaCorreta = respostasCorretas[id].toLowerCase();
    
            if (respostaUsuario !== respostaCorreta) {
                todasCorretas = false;
                break;  // Se uma resposta estiver incorreta, para a verificação
            }
        }
    
        if (todasCorretas) {
            feedback.innerHTML = 'Todas as respostas estão corretas!';
        } else {
            feedback.innerHTML = 'Incorreto. Tente novamente.';
        }
    }
    
    function corrigirResposta() {
        for (const id in respostasCorretas) {
            document.getElementById(id).value = '';  // Limpar o campo de resposta
        }
        feedback.innerHTML = '';  // Limpar o feedback
    }
    