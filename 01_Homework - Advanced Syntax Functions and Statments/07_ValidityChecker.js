function validityCheker(x1, y1, x2, y2) {
    const start = { x: 0, y: 0 };

    const pointA = {
        x: x1,
        y: y1,
    };

    const pointB = {
        x: x2,
        y: y2,
    };

    function getDistance(a, b) {
        return Math.sqrt(Math.pow(Math.abs(b.y - a.y), 2) + Math.pow(Math.abs(b.x - a.x), 2));
    }
  
    function isValid(x) {
        let isValid = null;
        x.toString().includes(".") ? (isValid = "invalid") : (isValid = "valid");
        return isValid;
    }
  
    console.log(`{${x1}, ${y1}} to {${0}, ${0}} is ${isValid(getDistance(start, pointA))}`);
    console.log(`{${x2}, ${y2}} to {${0}, ${0}} is ${isValid(getDistance(start, pointB))}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid(getDistance(pointA, pointB))}`);
}
