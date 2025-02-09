let score = 0;

function generateNumbers() {
    let n1 = Math.floor(Math.random() * 100);
    let n2 = Math.floor(Math.random() * 100);
    document.getElementById("num1").textContent = n1;
    document.getElementById("num2").textContent = n2;
    document.getElementById("num1").onclick = () => checkAnswer(n1, n2);
    document.getElementById("num2").onclick = () => checkAnswer(n2, n1);
}

function checkAnswer(selected, other) {
    if (selected > other) {
        score++;
        document.getElementById("score").textContent = score;
        generateNumbers();
    } else {
        alert("Juego terminado! Puntuación: " + score);
        location.reload();
    }
}

generateNumbers();
