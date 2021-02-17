function solve() {
  const input = document.querySelector('input');
  const [gifts, sent, discarded] = document.querySelectorAll('section ul');
  document.querySelector('button').addEventListener('click', addGift);

  function addGift() {
    const giftName = input.value;
    input.value = '';

    if (giftName == false) {
      alert('Details missing');
      return;
    }

    const liEl = giftsConstructor('li', giftName, 'gift');
    const sendBtn = giftsConstructor('button', 'Send', 'sendButton', () => dispatchGift(sent, giftName, liEl));
    const discardBtn = giftsConstructor('button', 'Discard', 'discardButton', () => dispatchGift(discarded, giftName, liEl));
    liEl.appendChild(sendBtn);
    liEl.appendChild(discardBtn);
    gifts.appendChild(liEl)

    // sortGifts();
  
    // or instead of using the sorting function I can use the following logic
    // to improve performance:

    let inserted = false;
    for (let child of Array.from(gifts.children)) {
      if (child.textContent.localeCompare(liEl.textContent) == 1) {
        gifts.insertBefore(liEl, child);
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      gifts.appendChild(liEl);
    }
  }

  function giftsConstructor(type, txtContent, className, onlick) {
    const el = document.createElement(type);
    el.textContent = txtContent;
    el.className = className;
    if (onlick) {
      el.addEventListener('click', onlick);
    }
    return el;
  }

  function dispatchGift(target, name, gift) {
    gift.remove();
    target.appendChild(giftsConstructor('li', name, 'glift'));
  }

  function sortGifts() {
    Array.from(gifts.children)
      .sort((a, b) =>
        a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent)
      )
      .forEach((g) => gifts.appendChild(g));
  }
}
