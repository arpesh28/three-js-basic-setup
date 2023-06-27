import EventEmitter from "./EventEmitter";

export default class Time extends EventEmitter {
  constructor() {
    super();

    //  Setup
    this.start = Date.now();
    this.current = this.start;
    this.elapsed = 0;
    this.delta = 16; //  0 value as default can trigger error sometimes for some reason. 16 is the default milliseconds taken for each frame change.

    window.requestAnimationFrame(() => {
      this.tick(); // the initial call of the tick function is trigger after skipping 1 frame just to be on safe side.
    });
  }

  tick() {
    const currentTime = Date.now();
    this.delta = currentTime - this.current;
    this.current = currentTime;

    this.trigger("tick");

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }
}
