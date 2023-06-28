//  libs classes
import * as THREE from "three";

//  setup classes
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import Camera from "./Camera";
import Renderer from "./Renderer";

//  misc
import sources from "./sources";

//  World
import World from "./World/World";
import Resources from "./Utils/Resorces";

//  singleton experience class for accessing it globally
let instance = null;

export default class Experience {
  constructor(canvas) {
    if (instance) {
      return instance;
    }
    instance = this;

    //  Global access
    window.experience = this;

    //  Options
    this.canvas = canvas;

    //  Setup
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.resources = new Resources(sources);
    this.camera = new Camera();
    this.renderer = new Renderer();

    //  World
    this.world = new World();

    //  Sizes resize event
    this.sizes.on("resize", () => {
      this.resize();
    });

    //  Time tick event
    this.time.on("tick", () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }
  update() {
    this.camera.update();
    this.renderer.update();
  }
}
