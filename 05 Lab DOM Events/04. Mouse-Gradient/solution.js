function attachGradientEvents() {
    const output = document.getElementById('result');
    document.getElementById('gradient').addEventListener('mousemove', onMove);

    function onMove(event) {
        const offsetX = event.offsetX;
        // or ->
        // const offsetX = event.pageX - event.target.offsetLeft;
        const percentage = Math.ceil((offsetX / event.target.clientWidth) * 100);
        output.textContent = `${percentage}%`;
    }
}
