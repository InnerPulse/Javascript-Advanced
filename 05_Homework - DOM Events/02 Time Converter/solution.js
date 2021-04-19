function attachEventsListeners() {
    document.querySelector('main').addEventListener('click', convert);
    const days = document.getElementById('days').parentNode.children[1];
    const hours = document.getElementById('hours').parentNode.children[1];
    const minutes = document.getElementById('minutes').parentNode.children[1];
    const seconds = document.getElementById('seconds').parentNode.children[1];

    function convert(ev) {
        if (ev.target.value === 'Convert') {
            const input = ev.target.parentNode.children[1].value;
            const type = ev.target.parentNode.children[0].textContent.match(/[A-Za-z]+/)[0];
            const action = actions[type];
            action(Number(input));
        }
    }

    const actions = {
        Seconds: (x) => {
            minutes.value = x / 60;
            hours.value = x / 3600;
            days.value = x / 86400;
        },
        Minutes: (x) => {
            seconds.value = x * 60;
            hours.value = x / 60;
            days.value = x / 1440;
        },
        Hours: (x) => {
            seconds.value = x * 3600;
            minutes.value = x * 60;
            days.value = x / 24;
        },
        Days: (x) => {
            seconds.value = x * 86400;
            minutes.value = x * 1440;
            hours.value = x * 24;
        },
    };
}
