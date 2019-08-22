import HouseService from "../services/HouseService.js";

let _houseService = new HouseService()

//draw all the cars
//get cars form the service
//the element to inject the cars template into
function _draw() {
  let template = ''
  let houses = _houseService.Houses

  houses.forEach((house, index) => {
    template += house.Template
  })
  document.querySelector("#houses").innerHTML = template
}





export default class HouseController {
  constructor() {
    console.log("Hello form house controller")
    _draw()
  }

  deleteHouse(id) {
    _houseService.deleteHouse(id)
    _draw()
  }

  addHouse(event) {
    event.preventDefault()
    let form = event.target

    let newHouse = {
      year: form.year.value,
      squareFeet: form.squareFeet.value,
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      price: form.price.value,
      location: form.location.value,
      imgUrl: form.imgUrl.value,
    }
    _houseService.addHouse(newHouse)
    _draw()
  }
}