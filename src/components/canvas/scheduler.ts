import {CallBack} from '@src/global/interface'

class Scheduler {
  task: CallBack[]
  lock: boolean
  constructor() {
    this.task = []
    this.lock = false
  }

  call(callback: CallBack, time?: number) {
    this.task.push(callback)
    if (!this.lock) {
      this.handler(this.task.shift(), time)
    }
  }

  handler(callback: any, time?: number) {
    this.lock = true
    callback()
    const timer = setTimeout(() => {
      const nextTask = this.task.shift()
      if (nextTask) {
        this.handler(nextTask)
        clearTimeout(timer)
      } else {
        this.lock = false
      }
    }, time ?? 10)
  }
}

const scheduler = new Scheduler()

export default scheduler
