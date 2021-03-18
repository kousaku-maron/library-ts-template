export const message = (value: string) => {
  console.info(value)
  return value
}

export const hello = () => {
  message('hello')
}

export const world = () => {
  message('world')
}

