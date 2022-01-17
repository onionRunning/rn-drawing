import {CallBack} from '@src/global/interface'

class Scheduler {
  task: CallBack[]
  lock: boolean
  constructor() {
    this.task = []
    this.lock = false
  }

  call(callback: CallBack) {
    this.task.push(callback)
    if (!this.lock) {
      this.handler(this.task.shift())
    }
  }

  handler(callback: any) {
    this.lock = true
    callback()
    setTimeout(() => {
      const nextTask = this.task.shift()
      if (nextTask) {
        this.handler(nextTask)
      } else {
        this.lock = false
      }
    }, 10)
  }
}

const scheduler = new Scheduler()

export default scheduler
