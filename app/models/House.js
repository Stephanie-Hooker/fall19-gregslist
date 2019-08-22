
export default class House {
  constructor(data) {
    this._id = data._id || Math.floor(Math.random() * 4000)
    this.year = data.year
    this.squareFeet = data.squareFeet
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.price = data.price
    this.location = data.location
    this.imgUrl = data.imgUrl
  }

  get Template() {
    return `
     <div class="col-4 border">
        <h1>${this.year}</h1>
        <h3>${this.squareFeet}</h3>
        <h3>${this.bedrooms}</h3>
        <h3>${this.bathrooms}</h3>
        <h3>${this.price}</h3>
        <h3>${this.location}</h3>
        <img class="img" src="${this.imgUrl}" alt="">
        <button class="btn btn-danger" onclick="app.controllers.houseController.deleteHouse(${this._id})">Delete House</button>
      </div>
  `
  }
}