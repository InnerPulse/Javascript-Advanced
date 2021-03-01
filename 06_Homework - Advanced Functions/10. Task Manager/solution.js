function solve() {
    const taskName = document.getElementById('task');
    const taskDate = document.getElementById('date');
    const taskDescription = document.getElementById('description');

    const [open, inProgress, completed] = Array.from(
        document.querySelectorAll('.wrapper > section')
    ).slice(1);

    document.getElementById('add').addEventListener('click', addTask);

    function addTask(e) {
        e.preventDefault();

        let dataIsValid = true;
        const values = [taskName, taskDescription, taskDate].map(
            (el) => el.value
        );

        values.forEach((v) => {
            if (!Boolean(v)) dataIsValid = false;
        });

        if (dataIsValid) {
            [taskName, taskDescription, taskDate].forEach(
                (el) => (el.value = '')
            );
            const article = createElement('article');
            const name = createElement('h3', values[0]);
            const description = createElement('p', `Description: ${values[1]}`);
            const date = createElement('p', `Due Date: ${values[2]}`);
            const btnsArea = createElement('div', null, 'flex');
            const startBtn = createElement('button', 'Start', 'green');
            const deleteBtn = createElement('button', 'Delete', 'red');

            startBtn.addEventListener('click', () => {
                inProgress.lastElementChild.appendChild(article);
                startBtn.remove();

                const finishBtn = createElement('button', 'Finish', 'orange');
                btnsArea.appendChild(finishBtn);

                finishBtn.addEventListener('click', () => {
                    completed.lastElementChild.appendChild(article);
                    btnsArea.remove();
                });
            });

            deleteBtn.addEventListener('click', () => {
                article.remove();
            });

            open.lastElementChild.appendChild(
                attach(
                    article,
                    name,
                    description,
                    date,
                    attach(btnsArea, startBtn, deleteBtn)
                )
            );
        } else {
            return;
        }
    }

    function createElement(type, txtContent, className) {
        const el = document.createElement(type);

        if (txtContent) {
            el.textContent = txtContent;
        }
        if (className) {
            el.className = className;
        }
        return el;
    }

    function attach(main, ...elements) {
        while (elements.length) {
            main.appendChild(elements.shift());
        }
        return main;
    }
}
