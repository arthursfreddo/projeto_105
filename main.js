Webcam.attach( '#camera' );

//conecta a webcam do usuário à página web e exibe a imagem da webcam em um elemento HTML com o ID "camera".

camera = document.getElementById("camera");

// cria uma variável chamada "camera" e atribui a ela o elemento HTML que tem o ID "camera" 
//Isso permite que o JavaScript interaja com o elemento HTML "camera" na página, por exemplo, para exibir o fluxo de vídeo da webcam.
      
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  // configuram as opções para a biblioteca Webcam.js
  // que é usada para capturar e exibir o fluxo de vídeo da webcam.

function take_snapshot()

// A função  inclui instruções para capturar a imagem 
{
    Webcam.snap(function(data_uri)
    
    // (data_uri)  recebe a imagem capturada como um parâmetro data_uri
    {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
    
    // para capturar uma imagem do 
    //fluxo de vídeo da webcam e exibi-la em um elemento HTML com o ID "result".
}

  console.log('ml5 version:', ml5.version);

  
// O código está inicializando o método de Classificador de Imagens com o MobileNet.
// O classificador está usando o modelo hospedado no link 
// 'https://teachablemachine.withgoogle.com/models/JACkTMciY/model.json', e está chamando a função "modelLoaded" assim que o modelo for carregado.

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VK6X7UYHV/model.json',modelLoaded);

// Quando o modelo é carregado.

  function modelLoaded() {
    console.log('Model Loaded!');
  }

  //Define uma função chamada "modelLoaded", que quando é executada, exibe a mensagem "Model Loaded!"
  //Inicializa o modelo de machine learning, 
  //Por exemplo, para indicar quando o modelo está pronto para ser usado após o carregamento.
      
  function check()
  {
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
  }

  // Obtém a referência a um elemento HTML com o id "selfie_image" usando o método "document.getElementById".
  // Usa a variável "classifier" (que provavelmente é um objeto que representa um classificador de machine learning) 
  // Para chamar o método "classify" e passa o elemento HTML como entrada e a função "gotResult" como callback.
  // Em resumo, a função "check" usada para classificar uma imagem usando um modelo de machine learning 
  // e chama uma função de retorno quando a classificação estiver concluída.


 //Função a ser executada quando obtemos algum erro e os resultados

function gotResult(error, results) {

  // Exibir erro no console

  if (error) {
    console.error(error);
  } else {

// Verifica se uma variável "error" contém um valor de erro ou não.
    
    console.log(results);

// Os resultados estão em uma matriz (Array) ordenada por confiança.

    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}

 