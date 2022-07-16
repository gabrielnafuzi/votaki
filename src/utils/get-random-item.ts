export const getRandomItem = <T = unknown>(
  items: T[] | ReadonlyArray<T>
): T => {
  const index = Math.floor(Math.random() * items.length)

  return items[index] as T
}
