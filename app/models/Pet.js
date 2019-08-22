
export default class Pet {
  constructor(data) {
    console.log("pet created")
    this._id = data._id || Math.floor(Math.random() * 4000)
    this.type = data.type
    this.color = data.color
    this.gender = data.gender
    this.age = data.age
    this.diet = data.diet
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get Template() {
    return `
    <div class="col-4 border">
      <h1>${this.type}</h1>
      <h3>${this.color}</h3>
      <h3>${this.gender}</h3>
      <h3>${this.age}</h3>
      <h3>${this.diet}</h3>
      <h3>${this.price}</h3>
      <img class = "img" src ="${this.imgUrl}"></img>
      <button class="btn btn-danger" onclick="app.controllers.petController.deletePet(${this._id})">Delete Pet</button>
    </div>
    `
  }
}