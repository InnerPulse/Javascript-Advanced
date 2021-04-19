function solve() {
  const addBtn = document.getElementById('add');
  const nameInput = document.getElementById('task');
  const dateInput = document.getElementById('date');
  const descriptionInput = document.getElementById('description');

  const [open, inProgress, complete] = Array.from(
    document.querySelectorAll('section')
  ).slice(1);

  addBtn.addEventListener('click', add);

  function add(e) {
    e.preventDefault();

    const [name, description, date] = [
      nameInput,
      descriptionInput,
      dateInput,
    ].map((el) => el.value);

    const inputsAreValid = [name, description, date]
      .map((el) => !!el)
      .includes(false)
      ? false
      : true;

    if (!inputsAreValid) {
      alert('Details missing');
      return;
    }

    const article = taskConstructor('article');
    const h3El = taskConstructor('h3', name);
    const p1El = taskConstructor('p', `Description: ${description}`);
    const p2El = taskConstructor('p', `Due Date: ${date}`);
    const btnsWrapper = taskConstructor('div', null, 'flex');
    const startBtn = taskConstructor('button', 'Start', 'green');
    const delBtn = taskConstructor('button', 'Delete', 'red');

    append(article, h3El, p1El, p2El, append(btnsWrapper, startBtn, delBtn));
    append(open.lastElementChild, article);

    startBtn.addEventListener('click', () => {
      append(inProgress.lastElementChild, article);
      startBtn.remove();

      const finishBtn = taskConstructor('button', 'Finish', 'orange');
      finishBtn.addEventListener('click', () => {
        append(complete.lastElementChild, article);
        btnsWrapper.remove();
      });
      append(btnsWrapper, finishBtn);
    });
    delBtn.addEventListener('click', () => article.remove());
  }

  function taskConstructor(type, txtContent, className) {
    const el = document.createElement(type);
    if (txtContent) {
      el.textContent = txtContent;
    }
    if (className) {
      el.className = className;
    }
    return el;
  }
  function append(main, ...args) {
    while (args.length) {
      main.appendChild(args.shift());
    }
    return main;
  }
}
