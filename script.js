const memeData = [
  {
    question: "Is this the Doge meme?",
    options: [
      { img: "memes/doge.jpg", correct: true },
      { img: "memes/cat.jpg", correct: false },
      { img: "memes/spongebob.jpg", correct: false },
      { img: "memes/pepe.jpg", correct: false }
    ]
  },
  {
    question: "Distracted Boyfriend",
    options: [
      { img: "memes/distracted.jpg", correct: true },
      { img: "memes/woman-yelling.jpg", correct: false },
      { img: "memes/grumpycat.jpg", correct: false },
      { img: "memes/shrek.jpg", correct: false }
    ]
  },
  {
    question: "Woman Yelling at a Cat",
    options: [
      { img: "memes/woman-yelling.jpg", correct: true },
      { img: "memes/doge.jpg", correct: false },
      { img: "memes/shockedpikachu.jpg", correct: false },
      { img: "memes/spongebob.jpg", correct: false }
    ]
  },
];

let currentStep = 0;

function loadStep() {
  const container = document.getElementById("memeGrid");
  const question = document.getElementById("question");
  const status = document.getElementById("status");
  const step = memeData[currentStep];

  question.textContent = step.question;
  container.innerHTML = "";
  status.textContent = "";

  step.options.forEach((option, index) => {
    const img = document.createElement("img");
    img.src = option.img;
    img.onclick = () => {
      if (option.correct) {
        currentStep++;
        if (currentStep < memeData.length) {
          loadStep();
        } else {
          window.location.href = "success.html";
        }
      } else {
        status.textContent = "Wrong Bot Detected";
      }
    };
    container.appendChild(img);
  });
}

if (window.location.pathname.includes("verify.html")) {
  window.onload = loadStep;
}
