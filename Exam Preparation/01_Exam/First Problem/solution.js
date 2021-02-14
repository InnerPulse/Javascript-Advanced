function solve() {
  const state = {};
  const trainingsSection = document.querySelector('.modules');

  const [nameInput, dateInput, moduleInput, addBtn] = Array.from(
    document.querySelector('form').children
  ).map((el) => (el.children[1] ? el.children[1] : el.children[0]));

  addBtn.addEventListener('click', (e) => {

    e.preventDefault();

    trainingsSection.innerHTML = '';

    const [name, date, module] = [nameInput, dateInput, moduleInput].map(
      (el) => el.value
    );
    const allAreValid =
      [name, date].map((el) => !!el).includes(false) ||
      module == 'Select module'
        ? false
        : true;

    if (!allAreValid) {
      alert('Invalid Details!');
      return;
    }

    const liEl = lectureConstructor('li', null, 'flex');
    const h4El = lectureConstructor('h4', `${name} - ${dateConstructor(date)}`); // received 1995-07-15T10:30 -> needed 1995/07/15 - 10:30
    const delBtn = lectureConstructor('button', 'Del', 'red');

    delBtn.addEventListener('click', del);

    append(liEl, h4El, delBtn);

    if (state[module]) {
      state[module].push({ date, liEl });
    } else {
      state[module] = [{ date, liEl }];
    }

    Object.entries(state).forEach((pair) => {
      const [key, value] = pair;
      const divEl = lectureConstructor('div', null, 'module');
      const ulEl = lectureConstructor('ul');
      const h3El = lectureConstructor('h3', `${key.toUpperCase()}-MODULE`);
      value
        .sort((a, b) => a.date.localeCompare(b.date))
        .forEach((e) => ulEl.appendChild(e.liEl));

      append(trainingsSection, append(divEl, h3El, ulEl));
    });


  });

  function del(e) {
    const li = e.target.parentNode;
    const ul = li.parentNode;
    const module = ul.parentNode;

    li.remove();

    if (ul.children.length === 0) {
      module.remove();
    }
  }

  function lectureConstructor(type, txtContent, className) {
    const el = document.createElement(type);
    if (txtContent) {
      el.textContent = txtContent;
    }
    if (className) {
      el.className = className;
    }
    return el;
  }

  function dateConstructor(raw) {
    let [date, time] = raw.split('T');
    date = date.split('-').join('/');
    return `${date} - ${time}`;
  }

  function append(el, ...args) {
    while (args.length) {
      el.appendChild(args.shift());
    }
    return el;
  }
}
