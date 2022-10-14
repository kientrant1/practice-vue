/* eslint-disable no-console */
const turnOn = true

export const log = (...args: any) => {
  turnOn && console.log(...args)
}

export const logColor = (color: string = 'yellow', ...args: any[]) => {
  turnOn && console.log(...args, `color:${color}`)
}

export const warn = (...args: any) => {
  turnOn && console.warn(...args)
}

