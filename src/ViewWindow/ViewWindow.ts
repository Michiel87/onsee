export interface ViewWindowProps {
  /**
   * @description 
   * Height off the view window.
   */
  windowHeight: number
  /**
   * @description 
   * Position of the scrollbar - scrollTop property.
   */
  windowPosition: number
  /**
   * @description 
   * Number of items * itemSize.
   */
  listHeight: number
  /**
   * @description 
   * Size of each list item.
   */
  itemSize: number
}

export class ViewWindow {
  windowHeight
  windowPosition
  listHeight
  itemSize

  constructor ({ windowHeight, listHeight, windowPosition, itemSize }: ViewWindowProps) {
    this.windowHeight = windowHeight
    this.windowPosition = windowPosition
    this.listHeight = listHeight
    this.itemSize = itemSize
  }

  private getItemsInView () {
    return Math.ceil(this.windowHeight / this.itemSize)
  }

  private getStartIndex () {
    return Math.floor(this.windowPosition / this.itemSize + 1) - 1
  }

  private getEndIndex () {
    return this.getStartIndex() + (this.getItemsInView() - 1)
  }

  /**
   * @description 
   * Returns a tuple with the startIndex and endIndex of the items
   * to render.
   */
  public getItemIndexRange (): [startIndex: number, endIndex: number] {
    return [this.getStartIndex(), this.getEndIndex()]
  }
}

