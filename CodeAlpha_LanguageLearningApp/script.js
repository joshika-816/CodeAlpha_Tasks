const dictionary = {
  Tamil: {
    "hello": "வணக்கம்",
    "thank you": "நன்றி",
    "good morning": "காலை வணக்கம்",
    "good night": "இனிய இரவு",
    "love": "அன்பு"
  },
  Malayalam: {
    "hello": "നമസ്കാരം",
    "thank you": "നന്ദി",
    "good morning": "സുപ്രഭാതം",
    "good night": "ശുഭ രാത്രി",
    "love": "സ്നേഹം"
  },
  Hindi: {
    "hello": "नमस्ते",
    "thank you": "धन्यवाद",
    "good morning": "सुप्रभात",
    "good night": "शुभ रात्रि",
    "love": "प्यार"
  },
  Japanese: {
    "hello": "こんにちは",
    "thank you": "ありがとうございます",
    "good morning": "おはようございます",
    "good night": "おやすみなさい",
    "love": "愛"
  },
  Telugu: {
    "hello": "నమస్కారం",
    "thank you": "ధన్యవాదాలు",
    "good morning": "శుభోదయం",
    "good night": "శుభ రాత్రి",
    "love": "ప్రేమ"
  },
  Chinese: {
    "hello": "你好",
    "thank you": "谢谢",
    "good morning": "早上好",
    "good night": "晚安",
    "love": "爱"
  },
  Korean: {
    "hello": "안녕하세요",
    "thank you": "감사합니다",
    "good morning": "좋은 아침",
    "good night": "안녕히 주무세요",
    "love": "사랑"
  }
};

const loadBtn = document.getElementById("load-btn");
const wordContainer = document.getElementById("word-container");
const quizSection = document.getElementById("quiz-section");
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizResult = document.getElementById("quiz-result");
const nextBtn = document.getElementById("next-btn");

let currentLang = "Tamil";
let quizWords = [];
let currentQuestion = 0;
let score = 0;
const totalQuestions = 5;

loadBtn.addEventListener("click", () => {
  currentLang = document.getElementById("language").value;
  showFlashcards();
  setupQuiz();
});

function showFlashcards() {
  wordContainer.innerHTML = "";
  quizSection.style.display = "block";

  const words = dictionary[currentLang];
  Object.keys(words).forEach(word => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">${word}</div>
        <div class="card-back">${words[word]}</div>
      </div>
    `;
    card.addEventListener("click", () => card.classList.toggle("flip"));
    wordContainer.appendChild(card);
  });
}

function setupQuiz() {
  quizWords = Object.keys(dictionary[currentLang]);
  currentQuestion = 0;
  score = 0;
  generateQuestion();
}

function generateQuestion() {
  if (currentQuestion >= totalQuestions) {
    showFinalScore();
    return;
  }

  quizResult.textContent = "";
  const words = dictionary[currentLang];
  const englishWord = quizWords[Math.floor(Math.random() * quizWords.length)];
  const correctAnswer = words[englishWord];

  quizQuestion.textContent = `Question ${currentQuestion + 1}/${totalQuestions}: What is "${englishWord}" in ${currentLang}?`;

  let options = [correctAnswer];
  while (options.length < 4) {
    const randomWord = words[quizWords[Math.floor(Math.random() * quizWords.length)]];
    if (!options.includes(randomWord)) options.push(randomWord);
  }
  options.sort(() => Math.random() - 0.5);

  quizOptions.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.addEventListener("click", () => {
      if (opt === correctAnswer) {
        quizResult.textContent = "✅ Correct!";
        quizResult.style.color = "green";
        score++;
      } else {
        quizResult.textContent = `❌ Wrong! Correct answer: ${correctAnswer}`;
        quizResult.style.color = "red";
      }
      currentQuestion++;
      nextBtn.disabled = false;
    });
    quizOptions.appendChild(btn);
  });
  nextBtn.disabled = true;
}

nextBtn.addEventListener("click", generateQuestion);

function showFinalScore() {
  quizQuestion.textContent = `🏁 Quiz Over! You scored ${score} out of ${totalQuestions}.`;
  quizOptions.innerHTML = "";
  quizResult.textContent = "";

  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Restart Quiz";
  restartBtn.addEventListener("click", setupQuiz);
  quizOptions.appendChild(restartBtn);
}
