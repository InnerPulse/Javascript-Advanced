function deckOfCards(cards) {
  function createCard(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = { S: '\u2660', H: '\u2665', D: '\u2666', C: '\u2663' };

    if (!faces.includes(face)) throw new Error('Invalid face');
    else if (!suits.hasOwnProperty(suit)) throw new Error('Invalid suit');

    class Card {
      constructor(face, suit) {
        this.face = face;
        this.suit = suit;
      }

      toString() {
        return `${this.face}${suits[this.suit]}`;
      }
    }
    return new Card(face, suit);
  }

  const deck = [];
  for (let card of cards) {
    try {
      const toArr = [...card];
      const face = toArr.length == 3 ? toArr.slice(0, 2).join('') : toArr.shift();
      const suit = toArr.pop();
      deck.push(createCard(face, suit));
    } catch (error) {
      console.log(`Invalid card: ${card}`);
      return;
    }
  }

  console.log(deck.map((card) => card.toString()).join(' '));
}