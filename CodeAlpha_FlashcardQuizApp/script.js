const addBtn = document.getElementById('add-btn');
const questionInput = document.getElementById('question');
const answerInput = document.getElementById('answer');
const flashcardsContainer = document.getElementById('flashcards-container');

let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];

function saveToLocalStorage() {
  localStorage.setItem('flashcards', JSON.stringify(flashcards));
}

function renderFlashcards() {
  flashcardsContainer.innerHTML = '';
  flashcards.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('flashcard');
    cardElement.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <p>${card.question}</p>
          <div class="card-btns">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </div>
        </div>
        <div class="card-back">
          <p>${card.answer}</p>
          <div class="card-btns">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </div>
        </div>
      </div>
    `;

    const innerCard = cardElement.querySelector('.card-inner');
    cardElement.addEventListener('click', () => {
      cardElement.classList.toggle('flip');
    });

    const editBtns = cardElement.querySelectorAll('.edit');
    const deleteBtns = cardElement.querySelectorAll('.delete');

    editBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const newQ = prompt('Edit Question:', card.question);
        const newA = prompt('Edit Answer:', card.answer);
        if (newQ && newA) {
          flashcards[index] = { question: newQ, answer: newA };
          saveToLocalStorage();
          renderFlashcards();
        }
      });
    });

    deleteBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        flashcards.splice(index, 1);
        saveToLocalStorage();
        renderFlashcards();
      });
    });

    flashcardsContainer.appendChild(cardElement);
  });
}

addBtn.addEventListener('click', () => {
  const question = questionInput.value.trim();
  const answer = answerInput.value.trim();
  if (question && answer) {
    flashcards.push({ question, answer });
    saveToLocalStorage();
    renderFlashcards();
    questionInput.value = '';
    answerInput.value = '';
  } else {
    alert('Please enter both question and answer!');
  }
});

renderFlashcards();
