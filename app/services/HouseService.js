import House from "../models/House.js";


let _state = {
  houses: [new House({
    year: 2008,
    squareFeet: 2500,
    bedrooms: 4,
    bathrooms: 3,
    price: "S390,000",
    location: "boise",
    imgUrl: "https://www.australianfloorplans.com/images/159fr.jpg"

  })]
}


export default class HouseService {
  constructor() {
    console.log("hello from house service")
  }

  addHouse(newHouse) {
    _state.houses.push(new House(newHouse))
    console.log(_state.houses)
  }

  get Houses() {
    return _state.houses.map(house => new House(house))
  }

  deleteHouse(id) {
    _state.houses.forEach((House, i) => {
      if (House._id == id) {
        _state.houses.splice(i, 1)
      }
    })
  }
}