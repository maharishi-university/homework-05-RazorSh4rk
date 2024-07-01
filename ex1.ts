class Meditation {
  constructor(public times: number) { }

  start() {
    for (let i = 1; i <= this.times; i++) {
      setTimeout(() => {
        console.log(i);
      }, (this.times - i) * 1000);
    }
    setTimeout(() => { console.log("Jay Guru Dev"); }, (this.times + 1) * 1000);
  }
}

export default Meditation;
