/* eslint-disable no-console */
const turnOn = false

export const log = (...args: any) => {
  turnOn && console.log(...args)
}

export const logColor = (color: string = 'yellow', ...args: any[]) => {
  turnOn && console.log(...args, `color:${color}`)
}

