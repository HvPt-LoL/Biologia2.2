if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
      .then(registration => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch(error => {
        console.error('Error al registrar el Service Worker:', error);
      });
  }
  
  const questions = [
    {
      question: "¿Qué teoría de la vida sugiere que la vida fue creada por un ser divino?",
      answers: [
        { text: "Creacionismo", correct: true },
        { text: "Panspermia", correct: false },
        { text: "Litopanspermia", correct: false },
        { text: "Radiopanspermia", correct: false }
      ]
    },
    {
      question: "¿Qué es la biología?",
      answers: [
        { text: "Es la ciencia que estudia a los minerales", correct: false },
        { text: "Es la ciencia que estudia a los seres vivos", correct: true },
        { text: "Es el estudio de los fenómenos climáticos", correct: false },
        { text: "Es la ciencia que estudia a los astros", correct: false }
      ]
    },
    {
      question: "¿Qué postula la hipótesis de la panspermia?",
      answers: [
        { text: "Que la vida fue creada por un ser divino", correct: false },
        { text: "Que la vida surge espontáneamente de materia inerte", correct: false },
        { text: "Que la vida se originó en el espacio", correct: true },
        { text: "Que los microorganismos se desarrollaron en la Tierra hace millones de años", correct: false }
      ]
    },
    {
      question: "¿Qué propone la hipótesis de la panspermia dirigida?",
      answers: [
        { text: "Que la vida viaja en fragmentos de roca", correct: false },
        { text: "Que la vida fue sembrada por una civilización extraterrestre avanzada", correct: true },
        { text: "Que la vida surgió por la radiación estelar", correct: false },
        { text: "Que la vida se generó de manera espontánea en la Tierra", correct: false }
      ]
    },
    {
      question: "¿Qué plantea la generación espontánea?",
      answers: [
        { text: "Que la vida puede surgir de manera repentina de materia no viva", correct: true },
        { text: "Que la vida fue creada por un ser divino", correct: false },
        { text: "Que la vida llegó del espacio en meteoritos", correct: false },
        { text: "Que los organismos evolucionan a partir de ancestros comunes", correct: false }
      ]
    },
    {
      question: "¿Qué es la homeostasis?",
      answers: [
        { text: "El proceso mediante el cual la vida surge de la materia inerte", correct: false },
        { text: "La capacidad de los organismos para evolucionar en su ambiente", correct: false },
        { text: "El equilibrio necesario en el cuerpo para que funcione correctamente", correct: true },
        { text: "El mecanismo que permite la reproducción de organismos unicelulares", correct: false }
      ]
    },
    {
      question: "¿Para qué sirven los carbohidratos y lípidos?",
      answers: [
        { text: "Para formar estructuras celulares", correct: true },
        { text: "Para transportar oxígeno en la sangre", correct: false },
        { text: "Para dar energía al cuerpo", correct: false },
        { text: "Para sintetizar ADN", correct: false }
      ]
    },
    {
      question: "¿Cuál es la función de las proteínas y lípidos?",
      answers: [
        { text: "Formar estructuras celulares", correct: true },
        { text: "Generar energía para el cuerpo", correct: false },
        { text: "Regular el sistema inmunológico", correct: false },
        { text: "Ayudar a la digestión de carbohidratos", correct: false }
      ]
    },
    {
      question: "¿En dónde ocurre la respiración anaeróbica?",
      answers: [
        { text: "En los ribosomas", correct: false },
        { text: "En el citoplasma", correct: true },
        { text: "En las mitocondrias", correct: false },
        { text: "En el aparato de Golgi", correct: false }
      ]
    },
    {
      question: "¿Qué es el líquido extracelular?",
      answers: [
        { text: "El líquido dentro de la célula", correct: false },
        { text: "El líquido fuera de las células", correct: true },
        { text: "El líquido fuera del núcleo", correct: false },
        { text: "El líquido dentro de las mitocondrias", correct: false }
      ]
    },
    {
      question: "¿Qué significa 'Homo sapiens'?",
      answers: [
        { text: "Hombre trabajador", correct: false },
        { text: "Hombre sabio", correct: true },
        { text: "Hombre cazador", correct: false },
        { text: "Hombre primitivo", correct: false }
      ]
    },
    {
      question: "¿Quién fue el primer homínido en usar el fuego?",
      answers: [
        { text: "Homo sapiens", correct: false },
        { text: "Homo habilis", correct: false },
        { text: "Homo erectus", correct: true },
        { text: "Homo neanderthalensis", correct: false }
      ]
    },
    {
      question: "¿Dónde se lleva a cabo la respiración aeróbica?",
      answers: [
        { text: "En el citoplasma", correct: false },
        { text: "En las mitocondrias", correct: true },
        { text: "En los ribosomas", correct: false },
        { text: "En el núcleo celular", correct: false }
      ]
    },
    {
      question: "¿Qué tipo de célula posee mitocondrias?",
      answers: [
        { text: "Procariota", correct: false },
        { text: "Eucariota", correct: true },
        { text: "Ambas", correct: false },
        { text: "Ninguna", correct: false }
      ]
    },
    {
      question: "¿Quién es reconocido como el padre de la biología moderna?",
      answers: [
        { text: "Aristóteles", correct: false },
        { text: "Gregor Mendel", correct: false },
        { text: "Charles Darwin", correct: true },
        { text: "Louis Pasteur", correct: false }
      ]
    }
  ];
  
  let currentQuestionIndex = 0;
  
  function showInstructions() {
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("instructions").classList.remove("hidden");
  }
  
  function startQuiz() {
    document.getElementById("instructions").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    loadQuestion();
  }
  
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
  
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    optionsElement.innerHTML = "";
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.textContent = answer.text;
      button.onclick = () => checkAnswer(answer.correct);
      optionsElement.appendChild(button);
    });
  }
  
  function checkAnswer(isCorrect) {
    if (isCorrect) {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        showEndScreen();
      }
    } else {
      showResult("Respuesta incorrecta. Volviendo al inicio...");
      setTimeout(resetQuiz, 2000);
    }
  }
  
  function showResult(message) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = message;
    resultElement.classList.remove("hidden");
    document.getElementById("options").innerHTML = "";
  }
  
  function resetQuiz() {
    currentQuestionIndex = 0;
    document.getElementById("result").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("instructions").classList.add("hidden");
  }
  
  function showEndScreen() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("end-screen").classList.remove("hidden");
  }
  
  function returnToMenu() {
    currentQuestionIndex = 0;
    document.getElementById("end-screen").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
  }