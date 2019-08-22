

export default class Job {
  constructor(data) {
    this._id = data._id || Math.floor(Math.random() * 4000)
    this.type = data.type
    this.pay = data.pay
    this.hours = data.hours
    this.location = data.location
    this.degree = data.degree
    this.imgUrl = data.imgUrl
  }
  get Template() {
    return `
    <div class="col-4 border">
    <h1>${this.type}</h1>
    <h3>${this.pay}</h3>
    <h3>${this.hours}</h3>
    <h3>${this.location}</h3>
    <h3>${this.degree}</h3>
    <img class="img" src="${this.imgUrl}" alt="">
    <button class="btn btn-danger" onclick="app.controllers.jobController.deleteJob(${this._id})">Delete Job</button>
  </div>
    `
  }

}