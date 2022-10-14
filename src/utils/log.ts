/* eslint-disable no-console */

export const log = (...args: any) => {
  console.log(...args)
}

export const logColor = (color: string = 'yellow', ...args: any[]) => {
  console.log(...args, `color:${color}`)
}

