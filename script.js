const questions = [
    {
        question: "In which year did World War II end?",
        options: ["1940", "1945", "1950", "1939"],
        correctAnswer: "1945"
    },
    {
        question: "Which organ in the human body is primarily responsible for filtering blood?",
        options: ["Heart", "Liver", "Kidneys", "Lungs"],
        correctAnswer: "Kidneys"
    },
    {
        question: "How many minutes are in a full week?",
        options: ["11,076", "54,234", "10,080", "11,986"],
        correctAnswer: "10,080"
    },
    {
        question: "What is part of a database that holds only one type of information?",
        options: ["Report", "Record", "File", "Field"],
        correctAnswer: "Field"
    },
    {
        question: "Which of the following is not a chief organ of the United Nations Organizations?",
        options: ["International Labour Organization", "Security Council", "International Court of Justice", "General Assembly"],
        correctAnswer: "International Labour Organization"
    },
    {
        question: "The Indian delegation to the first World Conference on Human Rights was led by?",
        options: ["Dr. Manmohan Singh", "Farooq Abdullah", "Dinesh Singh", "Alam Khan"],
        correctAnswer: "Dr. Manmohan Singh"
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "2"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "H2SO4"],
        correctAnswer: "H2O"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide"
    },
    {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        options: ["Mark Twain", "J.K. Rowling", "Harper Lee", "Charles Dickens"],
        correctAnswer: "Harper Lee"
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");
  const scoreElement = document.getElementById("score");
  const nextButton = document.getElementById("next-button");
  
  
  function showQuestion() {
    const question = questions[currentQuestion];
    questionContainer.innerText = `Question ${currentQuestion + 1}: ${question.question}`;
    optionsContainer.innerHTML = "";
  
    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.className = "option";
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
  
    nextButton.style.display = "none";
  }
  
  function checkAnswer(selectedAnswer) {
    const question = questions[currentQuestion];
    if (selectedAnswer === question.correctAnswer) {
        score++;
    }
    scoreElement.innerText = score;
    nextButton.style.display = "block";
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
  }
  
  function endQuiz() {
    questionContainer.innerText = "Quiz Complete!";
    optionsContainer.innerHTML = "";
    nextButton.style.display = "none";
    endButton.style.display = "none";
    submitButton.style.display = "block";
  }
  
  showQuestion();
  nextButton.addEventListener("click", nextQuestion);