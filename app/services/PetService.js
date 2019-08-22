import Pet from "../models/Pet.js";


let _state = {
  pets: []
}



export default class PetService {
  constructor() {
    console.log("hello from pet service")
  }

  get Pets() {
    return _state.pets.map(pet => new Pet(pet))
  }

  addPet(newPet) {
    _state.pets.push(new Pet(newPet))
    console.log(_state.pets)
  }

  deletePet(id) {
    _state.pets.forEach((car, i) => {
      if (car._id == id) {
        _state.pets.splice(i, 1)
      }
    })
  }



}