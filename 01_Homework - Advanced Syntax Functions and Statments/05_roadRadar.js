function roadRadar(speed, limit) {
  let status;
  let withinLimit = true;

  const speedLimit = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  const overTheLimit = speed - speedLimit[limit];

  if (overTheLimit > 0) {
    withinLimit = false;

    if (overTheLimit <= 20) {
      status = "speeding";
    } else if (overTheLimit <= 40) {
      status = "excessive speeding";
    } else {
      status = "reckless driving";
    }
  }

  withinLimit
    ? console.log(`Driving ${speed} km/h in a ${speedLimit[limit]} zone`)
    : console.log(
        `The speed is ${overTheLimit} km/h faster than the allowed speed of ${speedLimit[limit]} - ${status}`
      );
}
