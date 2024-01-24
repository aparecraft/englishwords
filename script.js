
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

//Do houseExercise

function verificarRespostas() {
    const respostasEsperadas = {
        resposta1: "chair",
        resposta2: "bed",
        resposta3: "kitchen",
        resposta4: "bathroom",
        resposta5: "tv", 
        resposta6: "garage",
        resposta7: "fridge",
        resposta8: "wardrobe"
    };

    const feedback = document.getElementById('feedback2');
    let todasCorretas = true;

    for (let i = 1; i <= Object.keys(respostasEsperadas).length; i++) {
        const respostaUsuario = document.getElementById(`resposta${i}`).value.trim().toLowerCase();
        const respostaCorreta = respostasEsperadas[`resposta${i}`];

        if (respostaUsuario !== respostaCorreta) {
            todasCorretas = false;
            break;
        }
    }

    if (todasCorretas) {
        feedback.textContent = "Todas as respostas estão corretas!";
    } else {
        feedback.textContent = "Pelo menos uma resposta está incorreta.";
    }
}