import { makeDataRanger } from '../utils'

describe('makeDataRanger', () => {
  // [0, ..24]
  const data = new Array(25).fill(null).map((_,i) => i)

  it('should return a function', () => {
    expect(typeof makeDataRanger([])).toBe('function')
  })

  it.each([
    [0, 3, [0, 1, 2, 3]],
    [3, 4, [3, 4]],
    [19, 23, [19, 20, 21, 22, 23]]
  ])
  ('should return expected index range', (start, end, expected) => {
    const getRangeByIndex = makeDataRanger(data)

    expect(getRangeByIndex(start, end)).toEqual(expected)
  })

  it('should treat negative startIndex as zero', () => {
    const getRangeByIndex = makeDataRanger(data)

    expect(getRangeByIndex(-2, 3)).toEqual([0, 1, 2, 3])
  })

  it('should treat exceeding endIndex as last index of data', () => {
    const getRangeByIndex = makeDataRanger(data)

    expect(getRangeByIndex(22, 30)).toEqual([22, 23, 24])
  })
})
