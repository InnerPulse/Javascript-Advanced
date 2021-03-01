function timeToWlalk(steps, stepLength, khPerHour) {
    const breakMinutes = Math.floor((steps * stepLength) / 500);
    const distance = (steps * stepLength) / 1000;
    let seconds = (distance / khPerHour) * 3600;
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    minutes += breakMinutes;
    seconds = seconds % 60;

    function addZero(x) {
        const toArr = Array.from(x.toString());
        const result = '0'.concat(toArr.shift());
        return result;
    }

    if (hours.toString().length <= 1) {
        hours = addZero(hours);
    } else {
        hours = Math.round(hours);
    }
    if (minutes.toString().length <= 1) {
        minutes = addZero(minutes);
    } else {
        minutes = Math.round(minutes);
    }
    if (seconds.toString().length <= 1) {
        seconds = addZero(seconds);
    } else {
        seconds = Math.round(seconds);
    }

    console.log(`${hours}:${minutes}:${seconds}`);
}
