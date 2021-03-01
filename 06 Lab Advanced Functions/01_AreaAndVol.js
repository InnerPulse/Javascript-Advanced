function areaAndVolume(area, vol, data) {
    return JSON.parse(data).map((obj) => ({
        area: area.call(obj),
        volume: vol.call(obj),
    }));
}

function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}

areaAndVolume(
    area,
    vol,
    `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
);
