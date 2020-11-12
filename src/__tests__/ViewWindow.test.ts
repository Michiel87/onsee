import { ViewWindow } from '../ViewWindow'

describe('ViewWindow', () => {
  const cases = [
    {
      windowHeight: 100,
      windowPosition: 0,
      listHeight: 200,
      itemSize: 10,
      expectedResult: [0, 10]
    },
    {
      windowHeight: 100,
      windowPosition: 59,
      listHeight: 200,
      itemSize: 10,
      expectedResult: [5, 15]
    },
    {
      windowHeight: 100,
      windowPosition: 91,
      listHeight: 200,
      itemSize: 10,
      expectedResult: [9, 19]
    },
  ]

  it.each(cases)
  ('can calculate the indexes of items that are in view', ({ expectedResult, ...args }) => {
    expect(new ViewWindow(args).getItemIndexRange()).toEqual(expectedResult)
  })
})