/**
 * Class for item of checkbox of specified type.
 */
export class CheckboxColumnItem<T> {

  /**
   * Property to indicate if the item is selected
   */
  selected = false;
  /**
   * Original type value of item
   */
  value: T;

  /**
   * @ignore
   */
  constructor(value: T) {
    this.value = value;
  }
}
