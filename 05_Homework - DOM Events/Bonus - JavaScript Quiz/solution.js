function solve() {
    const answers = [];
    const output = document.querySelectorAll('h1')[1];
    const sections = [...document.querySelectorAll('section')];

    const rightAnswers = {
        1: 'onclick',
        2: 'JSON.stringify()',
        3: 'A programming API for HTML and XML documents',
    };

    sections.forEach((s) => {
        const [answerA, answerB] = s.getElementsByTagName('p');
        answerA.addEventListener('click', checkAnswer);
        answerB.addEventListener('click', checkAnswer);
    });

    function checkAnswer(ev) {
        const answer = ev.target.textContent;
        const questionNumber = Number(
            ev.target.parentNode.parentNode.parentNode
                .querySelector('h2')
                .textContent.split(':')[0]
                .split('')
                .slice(-1)
                .shift()
        );

        answer === rightAnswers[questionNumber]
            ? answers.push(true)
            : answers.push(false);

        if (questionNumber <= 2) {
            sections[questionNumber - 1].style.display = 'none';
            sections[questionNumber].style.display = 'block';
        } else {
            sections[questionNumber - 1].style.display = "none";
            const outputElement = document.querySelector("#results");
            outputElement.style.display = "block";

            if (answers.includes(false)) {
                output.textContent = `You have ${answers.filter((a) => a != false).length} right answers`;
            } else {
                output.textContent = `You are recognized as top JavaScript fan!`;
            }
        }
    }
}
