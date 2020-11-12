export function makeDataRanger<T> (data: T[]) {
  return function getRangeByIndex (start: number, end: number) {
    return data.slice(Math.max(0, start), end + 1)
  }
}