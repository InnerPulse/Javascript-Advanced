function editElement(ref, match, replacer) {
    const regExp = new RegExp(match, 'g');
    ref.textContent = ref.textContent.replace(regExp, replacer);
}
