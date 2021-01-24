function createAssemblyLine() {

  return {
    hasClima(vehicle) {
      vehicle.temp = 21;
      vehicle.tempSettings = 21;
      vehicle.adjustTemp = function () {
        this.temp < this.tempSettings ? this.temp++ : this.temp--;
      };
    },
    hasAudio(vehicle) {
      vehicle.currentTrack = { name: null, artist: null };
      vehicle.nowPlaying = function () {
        if (this.currentTrack.name && this.currentTrack.artist)
          console.log(`Now playing '${this.currentTrack.name}' by 
          ${this.currentTrack.artist}`);
      };
    },
    hasParktronic(vehicle) {
      vehicle.checkDistance = function (distance) {
        let message = [];
        if (distance < 0.1) {
          message = "Beep! Beep! Beep!";
        } else if (distance < 0.25) {
          message = "Beep! Beep!";
        } else if (distance < 0.5) {
          message = "Beep!";
        } else {
          message = "";
        }
        console.log(message);
      };
    },
  };
}
