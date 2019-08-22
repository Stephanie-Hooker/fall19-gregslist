import Job from "../models/Job.js";

let _state = {
  jobs: [new Job({
    type: "construction",
    pay: "30,000",
    hours: "8-5",
    location: "Boise",
    degree: "no",
    imgUrl: "https://st2.depositphotos.com/6235482/10317/i/450/depositphotos_103173498-stock-photo-handyman-with-tools.jpg"
  })]
}



export default class JobService {
  constructor() {
    console.log("hello from JobService")
  }

  addJob(newJob) {
    _state.jobs.push(new Job(newJob))
  }

  deleteJob(id) {
    _state.jobs.forEach((job, i) => {
      if (job._id == id) {
        _state.jobs.splice(i, 1)
      }
    })
  }

  get Jobs() {
    return _state.jobs.map(job => new Job(job))
  }
}