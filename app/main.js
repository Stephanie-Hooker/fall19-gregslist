import CarController from "./controllers/CarController.js";
import HouseController from "./controllers/HouseController.js";
import JobController from "./controllers/Jobs.controller.js";
import PetController from "./controllers/PetController.js";


class App {
  constructor() {
    this.controllers = {
      carController: new CarController(),
      houseController: new HouseController(),
      jobController: new JobController(),
      petController: new PetController(),
    }
  }
}

window["app"] = new App()