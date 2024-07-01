class Meditation {
  constructor(public times: number) { }

  start() {
    for (let i = 0; i < this.times; i++) {
      setTimeout(() => {
        console.log(i);
      }, this.times - i);
    }
    setTimeout(() => { console.log("Jay Guru Dev"); }, this.times + 1);
  }
}

export default Meditation;
