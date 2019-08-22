import JobService from "../services/JobService.js";


let _jobService = new JobService()

function _draw() {
  let templete = ''
  let jobs = _jobService.Jobs

  jobs.forEach((job, index) => {
    templete += job.Template
  })
  document.querySelector("#jobs").innerHTML = templete
}




export default class JobController {
  constructor() {
    console.log("hello from JobController")
  }

  deleteJob(id) {
    _jobService.deleteJob(id)
    _draw()
  }

  addJob(event) {
    event.preventDefault()
    let form = event.target

    let newJob = {
      type: form.type.value,
      pay: form.pay.value,
      hours: form.hours.value,
      location: form.location.value,
      degree: form.degree.value,
      imgUrl: form.imgUrl.value
    }

    _jobService.addJob(newJob)
    _draw()
  }
}