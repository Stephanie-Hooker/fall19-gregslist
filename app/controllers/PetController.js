import PetService from "../services/PetService.js";
import Pet from "../models/Pet.js";

// private _
let _petService = new PetService()

function _draw() {
  let template = ''
  let pets = _petService.Pets
  pets.forEach((pet, index) => {
    template += pet.Template
  })
  document.querySelector("#pets").innerHTML = template
}

// public
export default class PetController {



  constructor() {
    console.log("hello from pet controller")
  }

  deletePet(id) {
    _petService.deletePet(id)
    _draw()
  }

  addPet(event) {
    event.preventDefault();
    let form = event.target

    let pet = new Pet({
      type: form.type.value,
      color: form.color.value,
      gender: form.gender.value,
      age: form.age.value,
      diet: form.diet.value,
      price: form.price.value,
      imgUrl: form.imgUrl.value,
    })
    console.log(`new pet ${JSON.stringify(form)}  after: ${JSON.stringify(pet)}`)
    _petService.addPet(pet)
    _draw()
  }


}