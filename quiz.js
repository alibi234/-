   // Отображение модального окна при нажатии кнопки "Start Quiz"
   document.getElementById("openPopup").onclick = function() {
    document.getElementById("myModal").style.display = "block";
  }
  // Скрытие модального окна при нажатии на крестик (закрыть)
  document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("myModal").style.display = "none";
  }
  // Скрытие модального окна при нажатии кнопки "Exit"
  document.getElementById("exitBtn").onclick = function() {
    document.getElementById("myModal").style.display = "none";
  }
  // Ваша логика для кнопки "Continue" может быть добавлена здесь
  // Например, перенаправление на следующую часть квиза или другие действия
  document.getElementById("continueBtn").onclick = function() {
    // Добавьте здесь вашу логику для продолжения квиза
  }

  // JavaScript
document.getElementById("continueBtn").onclick = function() {
    document.getElementById("newModal").style.display = "block";
    setTimeout(function() {
      document.getElementById("newModal").style.left = "0";
    }, 100);
  }
  
  document.getElementById("exitBtn").onclick = function() {
    document.getElementById("myModal").style.display = "none";
  }
  
  document.getElementById("openPopup").onclick = function() {
    document.getElementById("myModal").style.display = "block";
  }
  
  document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("myModal").style.display = "none";
  }

// Данные вопросов из Java файла
let ques = document.querySelector(".questxt");
let btn = document.querySelector(".btn");
let btntext = document.querySelector(".btntxt");
let options = document.querySelectorAll(".option");
let content=document.querySelector(".content")
const questions = [
    {
        question: "Find the correct translation: Pharmacy",
        answers: [
            { text: "A) Emkhana", correct: false },
            { text: "B) Ashana", correct: false },
            { text: "C) Darihana", correct: true },
            { text: "D) Meiramkhana", correct: false }
        ]
    },
    {
        question: "Choose the correct ending for the word Ayaldama",
        answers: [
            { text: "A) da", correct: true },
            { text: "B) de", correct: false },
            { text: "C) ta", correct: false },
            { text: "D) te", correct: false }
        ]
    },
    {
        question: "Choose one word in logical chain:",
        answers: [
            { text: "A) qasında", correct: false },
            { text: "B) aldında", correct: false },
            { text: "C) artında", correct: false },
            { text: "D) dosında", correct: true }
        ]
    },
    {
        question: "Find the correct translation: useful",
        answers: [
            { text: "A) ädemi", correct: false },
            { text: "B) köñildi", correct: false },
            { text: "C) paydalı", correct: true },
            { text: "D) tabıstı", correct: false }
        ]
    },
    {
        question: "Find the equivalent of the phrase: Good evening!",
        answers: [
            { text: "A) Qayırlı kün!", correct: false },
            { text: "B) Qayırlı keş!", correct: true },
            { text: "C) Qayırlı tün!", correct: false },
            { text: "D) Qayırlı tañ", correct: false }
        ]
    },
   
];

let questionnumber = 0;
let score = 0;
let correctans;

function startq() {
    questionnumber = 0;
    score = 0;
    btntext.innerHTML = "Next";
    showques();
}

function showques() {
    let currentquestion = questions[questionnumber];
    let quesno = questionnumber + 1;
    ques.innerText = quesno + ". " + currentquestion.question;

    options.forEach((cbtn, index) => {
        cbtn.innerHTML = currentquestion.answers[index].text;
        cbtn.dataset.correct = currentquestion.answers[index].correct;
        cbtn.classList.remove("correct", "incorrect");
        cbtn.disabled = false;
        cbtn.removeEventListener("click", checkans);
        cbtn.addEventListener("click", checkans);
    });
}

function nextbutton() {
    questionnumber += 1;
    showques();
    
}

function showresult() {
    content.innerHTML = `<h3 class='fin'>Your Final score is ${score} out of ${questions.length} </h3> `;
    btntext.innerText = "Replay";

    btn.removeEventListener("click", nextbutton);
    btn.addEventListener("click", reloadPage); 
}

function reloadPage() {
    location.reload(); 
}

function checkans(e) {
    const selectedbtn = e.target;
    btn.style.display = "block";
    const iscorrect = selectedbtn.dataset.correct === "true";

    if (iscorrect) {
        score+=1;
        selectedbtn.classList.add("correct");
    } else {
        selectedbtn.classList.add("incorrect");
    }

    options.forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
}

btn.addEventListener("click", () => {
    if (questionnumber < questions.length-1 ) {
        nextbutton();
    } else {
        showresult()
    }
});

startq();





