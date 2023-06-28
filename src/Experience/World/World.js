//  libs
import * as THREE from "three";

//  custom classes
import Experience from "../Experience";
import Environment from "./Environment";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    //  Test Mesh
    const testMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial()
    );
    this.scene.add(testMesh);

    //  Wait for resources
    this.resources.on("resourcesReady", () => {
      //  Setup
      this.environment = new Environment();
    });
  }
}
