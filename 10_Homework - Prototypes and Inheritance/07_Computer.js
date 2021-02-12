function computerHierarchy() {
  class Keyboard {
    constructor(manufacturer, responseTime) {
      this.manufacturer = manufacturer;
      this.responseTime = responseTime;
    }
  }

  class Monitor {
    constructor(manufacturer, width, height) {
      this.manufacturer = manufacturer;
      this.width = width;
      this.height = height;
    }
  }

  class Battery {
    constructor(manufacturer, expectedLife) {
      this.manufacturer = manufacturer;
      this.expectedLife = expectedLife;
    }
  }

   class Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
      if (new.target == Computer) {
        // Prevent instantiating abstract class. 
        // We can also do that by chekicng the constructor: if(this.constructor == Computer)
        throw new Error(`Abstract classes can't be instantiated.`);
      }
      this.manufacturer = manufacturer;
      this.processorSpeed = processorSpeed;
      this.ram = ram;
      this.hardDiskSpace = hardDiskSpace;
    }
  }

  class Laptop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace)
      this.weight = weight;
      this.color = color;
      this.battery = battery;
    }

    get battery() {
      return this._battery;
    }

    set battery(v) {
      if (!(v instanceof Battery)) {
        throw new TypeError('Arguments must be of type battery.');
      }
      this._battery = v;
    }
  }

  class Desktop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);

      this.keyboard = keyboard;
      this.monitor = monitor;
    }

    get keyboard() {
      return this._keyboard;
    }

    set keyboard(v) {
      if (!(v instanceof Keyboard)) {
        throw new TypeError('Arguments must be of type keyboard.');
      }
      this._keyboard = v;
    }

    get monitor() {
      return this._monitor;
    }

    set monitor(v) {
      if (!(v instanceof Monitor)) {
        throw new TypeError('Arguments must be of type monitor.');
      }
      this._monitor = v;
    }
  }

  return { Keyboard, Monitor, Battery, Computer, Laptop, Desktop };
}