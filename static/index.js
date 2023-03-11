var date = new Date()
let display_date= "Data: " + date.toLocaleDateString('pt-BR', {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'})

//Carregar o DOM HTML
//usada para inicializar o documento  garantir que a página seja renderizada primeiro
//$seletor . ação()
$(document).ready(function () {
    $("").html(display_date)
})

//emoção prevista
let predicted_emotion;
//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

//criaar uma função em query para enviar requisições atraves  ajax e receber resposta
$(function () {
    //ao clicar no botao de prever emoção o texto deve ser passado para a APi
    //ATRAVES DO AJAX
    $("").click(function () {

        let input_data = {
            //Pega o valor da caixa de texto de armazena na variavel input
            "": $("").val()
        }
        console.log(input_data)

        $.ajax({
            // que significa obter e postar dados do 
            //servidor sem recarregar a página inteira novamente!
            type: '',
            url: "",
            data: JSON.stringify(),
            dataType: "json",
            contentType: 'application/json',
            success: function (result) {
                
                // Resultado recebido do Flask ----->JavaScript
                predicted_emotion = result.data.predicted_emotion
                emo_url = result.data.predicted_emotion_img_url

                
                // Exibir resultado usando JavaScript----->HTML
                
                $("").html(predicted_emotion)
                $('').css("display", "block");

                $("").attr('src', emo_url);
                $('').css("display", "block");
            },
            //erros também são exibidos. Esses erros ocorrem
            //quando a chamada AJAX não consegue localizar os dados ex arq python
            error: function (result) {
                alert(result.responseJSON.message)
            }
        });
    });
})

