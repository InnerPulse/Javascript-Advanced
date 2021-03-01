function createCard(face, suit) {
    const faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    const suits = { S: '\u2660', H: '\u2665', D: '\u2666', C: '\u2663' };

    if (faces.includes(face) == false) throw new Error('Invalid face');
    else if (!suits.hasOwnProperty(suit)) throw new Error('Invalid suit');

    return {
        face,
        suit,
        toString() {
            return `${face}${suits[suit]}`;
        },
    };
}

console.log(`${createCard('A', 'S')}`); // A♠
