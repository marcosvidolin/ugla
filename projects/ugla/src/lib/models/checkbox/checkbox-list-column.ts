import { CheckboxColumnItem } from './checkbox-column-item';

/**
 * Class for list of items of checkbox of specified type.
 */
export class CheckboxListColumn<T> extends Array<CheckboxColumnItem<T>> {

  /**
   * @ignore
   */
  private constructor(list: T[]) {
    super();
  }

  /**
   * Converts the list of items of specified type into a CheckboxListColumn
   * @param list of CheckboxListColumn
   */
  static create<T>(list: T[]): CheckboxListColumn<T> {
    const cp = Object.create(CheckboxListColumn.prototype);
    list.forEach(e => cp.push(new CheckboxColumnItem(e)));
    return cp;
  }

  /**
   * Check if any item of the list is selected
   */
  isAnySelected(): boolean {
    return super.some((e: CheckboxColumnItem<T>) => e.selected);
  }

  /**
   * Get all selected items of the list
   */
  getSelected(): Array<T> {
    return super.filter(e => e.selected).map(e => e.value);
  }

}
