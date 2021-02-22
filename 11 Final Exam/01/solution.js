function solve() {
   const [authorInput, titleInput, categoryInput, contentInput] = document.querySelectorAll('form > p');
 
   const postSection = document.querySelectorAll('section')[1];
   const archiveSection = document.querySelectorAll('section')[3].lastElementChild;
 
   document.querySelector('form button').addEventListener('click', (e) => {
     e.preventDefault();
 
     const [author, title, category, content] = [
       authorInput.lastElementChild.value,
       titleInput.lastElementChild.value,
       categoryInput.lastElementChild.value,
       contentInput.lastElementChild.value
     ];
 
     const article = articleConstructor('article');
     const h1El = articleConstructor('h1', title);
     const p1El = articleConstructor('p', 'Category:');
     const strong1El = articleConstructor('strong', category);
     const p2El = articleConstructor('p', 'Creator:');
     const strong2El = articleConstructor('strong', author);
     const p3El = articleConstructor('p', content);
     
     const btnsWrapper = articleConstructor('div', null, 'buttons');
     const dltButton = articleConstructor('button', 'Delete', 'btn delete');
     const archBtn = articleConstructor('button', 'Archive', 'btn archive');
 
     append(p1El, strong1El);
     append(p2El, strong2El);
     append(btnsWrapper, dltButton, archBtn);
     append(article, h1El, p1El, p2El, p3El, btnsWrapper);
     postSection.appendChild(article);
 
     dltButton.addEventListener('click', () => article.remove());

     archBtn.addEventListener('click', () => {
       article.remove();
       archiveSection.appendChild(articleConstructor('li', title));
       sort();
     });
   });
 
   function articleConstructor(type, txtContent, className) {
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
   }
 
   function sort() {
    Array.from(archiveSection.children)
      .sort((a, b) =>
        a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent)
      )
      .forEach((el) => archiveSection.appendChild(el));
  }
 }
 