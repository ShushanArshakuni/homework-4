class TV {
  constructor(brand, channel = 1, volume = 100) {
    this.brand = brand;
    this.channel = channel;
    this.volume = volume;
  }
  increaseVolume() {
    if (this.volume > 0 && this.volume < 100) {
      this.volume++;
    } else {
      return "Volume is already on maximum";
    }
  }
  decreaseVolume() {
    if (this.volume > 0 && this.volume < 100) {
      this.volume--;
    } else {
      return "Volume is already on minimum";
    }
  }
  resetTV(channel = 1, volume = 50) {
    //chisht e senc anely?
    this.channel = channel;
    this.volume = volume;
  }
  setChannel(channel) {
    if (channel > 50) {
      return this.channel;
    }
  }
  setStatus() {
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
  }
}
let tv = new TV("Sony");
// console.log(tv);

console.log(tv.increaseVolume());
// tv.decreaseVolume();
// tv.increaseVolume();
// tv.increaseVolume();
// tv.increaseVolume();
// tv.resetTV();
// console.log(tv.setStatus());
console.log(tv);
// console.log(tv.setChannel(52));
