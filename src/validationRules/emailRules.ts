export const isMatchEmailPattern = (value: string) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  return regex.test(value)
}

export const isExistingEmail = (value: string) =>
  // mock API to check existing email
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(value === 'test@example.com')
    }, 5000)
  })
