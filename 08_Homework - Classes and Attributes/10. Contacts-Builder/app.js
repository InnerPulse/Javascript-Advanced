function contactBuilder() {
  const infoArea = document.getElementsByClassName('info')[0];
  infoArea.style.display = 'none';

  document.querySelector('button').addEventListener('click', () => {
    infoArea.style.display =
      infoArea.style.display == 'none' ? 'block' : 'none';
  });
}

class Contact {
  constructor(firstName, secondName, mobileNumber, email) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.mobileNumber = mobileNumber;
    this.email = email;
    this.online = false;
  }

  set online(value) {
    this._online = value;
    if(this.divTitle) {
    this.divTitle.className = this._online == true ? 'title online' : 'title';
    }
  }

  get online() {
    return this._online;
  }

  render(id) {
    this.article = this.createElement('article');
    this.infoButton = this.createElement('button', '&#8505;');
    this.info = this.createElement('div', null, ['class', 'info']);
    this.emailInfo = this.createElement('span', `&#9993; ${this.email}`);
    this.phoneInfo = this.createElement('span', `&phone; ${this.mobileNumber}`);
    this.divTitle = this.createElement('div', `${this.firstName} ${this.secondName}`, ['class', 'title']);

    this.divTitle.className = this.online == true ? 'title online' : 'title';
   
    this.info.style.display = 'none';
   
    this.divTitle.appendChild(this.infoButton);
    this.info.appendChild(this.phoneInfo);
    this.info.appendChild(this.emailInfo);
    this.article.appendChild(this.divTitle);
    this.article.appendChild(this.info);

    this.infoButton.addEventListener('click', () => {
      this.info.style.display =
        this.info.style.display == 'none' ? 'block' : 'none';
    });

    document.getElementById(id).appendChild(this.article);
  }

  createElement(type, txtContent, attr) {
    const el = document.createElement(type);

    if (txtContent) {
      el.innerHTML = txtContent
    } 
    if (attr) {
      el.setAttribute(attr[0], attr[1]);
    }
    return el;
  }
}

const contacts = [
  new Contact('Ivan', 'Ivanov', '0888 123 456', 'i.ivanov@gmail.com'),
  new Contact('Maria', 'Petrova', '0899 987 654', 'mar4eto@abv.bg'),
  new Contact('Jordan', 'Kirov', '0988 456 789', 'jordk@gmail.com'),
];

contacts.forEach((c) => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => (contacts[1].online = true), 2000);
