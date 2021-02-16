class Parking {
  constructor(capacity) {
    this.capacity = capacity;
    this.vehicles = [];
  }

  addCar(model, numberPlate) {
    if (this.capacity == 0) {
      throw Error('Not enough parking space.');
    }

    this.vehicles.push({ numberPlate, model, payed: false });
    --this.capacity;

    return `The ${model}, with a registration number ${numberPlate}, parked.`;
  }

  removeCar(numberPlate) {
    const vehicleIndex = this.vehicles.findIndex(
      (v) => v.numberPlate == numberPlate
    );

    if (vehicleIndex < 0) {
      throw Error(`The car, you're looking for, is not found.`);
    }

    if (!this.vehicles[vehicleIndex].payed) {
      throw Error(
        `${numberPlate} needs to pay before leaving the parking lot.`
      );
    }

    this.vehicles.splice(vehicleIndex, 1);
    ++this.capacity;

    return `${numberPlate} left the parking lot.`;
  }

  pay(numberPlate) {
    const vehicleIndex = this.vehicles.findIndex(
      (v) => v.numberPlate == numberPlate
    );

    if (vehicleIndex < 0) {
      throw Error(`${numberPlate} is not in the parking lot.`);
    }

    if (this.vehicles[vehicleIndex].payed) {
      throw Error(`${numberPlate}'s driver has already payed his ticket.`);
    }

    this.vehicles[vehicleIndex].payed = true;

    return `${numberPlate}'s driver successfully payed for his stay.`;
  }

  getStatistics(numberPlate) {
    if (numberPlate) {
      const vehicle = this.vehicles.find((v) => v.numberPlate == numberPlate);

      return `${vehicle.model} == ${numberPlate} - ${
        vehicle.payed ? 'Has payed' : 'Not payed'
      }`;
    }

    return [
      `The Parking Lot has ${this.capacity} empty spots left.`,
      this.vehicles
        .sort((a, b) => a.model.localeCompare(b.model))
        .map(
          (v) =>
            `${v.model} == ${v.numberPlate} - ${
              v.payed ? 'Has payed' : 'Not payed'
            }`
        )
        .join('\n'),
    ].join('\n');
  }
}
