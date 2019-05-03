import { Directive, Input, HostListener, ElementRef, Renderer2, OnInit, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { CheckboxColumnItem } from '../models';

/**
 * Directive for checkbox column - check all
 *
 * For parent checkbox, use directive:
 *
 * @example
 * <ugl-checkbox
 *   [name]="'checkbox'"
 *   uglCheckboxColumn
 *   #selectAll="checkboxColumn"
 *   [items]="items"
 *   (checkboxColumnChange)="checkAll($event)">
 * </ugl-checkbox>
 *
 * // For children checkboxes, convert list into a CheckboxListColumn, to be used in interator:
 * this.items = CheckboxListColumn.create<any>(listItems);
 *
 * // Then, use change method of directive on component:
 * <div *ngFor="let item of items; let idx = index;">
 *    <ugl-checkbox
 *      [name]="'checkbox-item-' + idx"
 *      [isChecked]="item.selected"
 *      (checked)="selectAll.changeItem($event, item)">
 *    </ugl-checkbox>
 * </div>
 *
 */
@Directive({
  selector: '[uglCheckboxColumn]',
  exportAs: 'checkboxColumn'
})
export class CheckboxColumnDirective<V, T extends CheckboxColumnItem<V>> implements OnInit, AfterViewInit {

  /**
   * HTMLInputElement of parent checkbox
   */
  private parent: HTMLInputElement;

  /**
   * Emitter for check/uncheck of parent checkbox
   */
  @Output() checkboxColumnChange = new EventEmitter<boolean>();

  /**
   * Array of children items of specified type
   */
  private _items: Array<T>;

  /**
   * Input for children items
   */
  @Input()
  set items(items: Array<T>) {
    this._items = items;
    setTimeout(() => {
      this.checkboxColumnChange.emit(this.countItemsSelected() > 0);
    });
  }

  /**
   * Get children items
   */
  get items() {
    return this._items;
  }

  /**
   * @ignore
   */
  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  /**
   * Set initials configurations
   */
  ngOnInit() {
  }

  /**
   * Set configurations after view is initializes
   */
  ngAfterViewInit() {
    this.parent = this.elementRef.nativeElement.firstElementChild.firstElementChild as HTMLInputElement;
  }

  /**
   * Method on change of item of list.
   * Emitts the new value of item, and call function to change the parent status.
   *
   * @param event true | false
   * @param item class item
   */
  changeItem(event: boolean, item: T) {
    item.selected = event;
    this.changeColumnSelection();
    this.checkboxColumnChange.emit(item.selected);
  }

  /**
   * Uncheck all items
   */
  uncheckAll() { this.toggleCheck(false); }

  /**
   * Check all items
   */
  checkAll() { this.toggleCheck(true); }

  /**
   * Toggle check on parent click
   * @param checked true | false
   */
  private toggleCheck(checked: boolean) {
    if (this.parent) {
      this.parent.checked = checked;
      this.renderer.setProperty(this.parent, 'indeterminate', false);

      if (this._items) {
        this._items.forEach(e => e.selected = checked);
      }
    }
  }

  /**
   * Host listener for change selection of parent
   */
  @HostListener('change')
  private changeSelection() {
    this.toggleColumnSelection();
    this.checkboxColumnChange.emit(this.parent.checked);
  }

  /**
   * Set the status of children, based on parent selection
   */
  private toggleColumnSelection() {
    const newState = this.parent.checked;
    this._items.forEach(i => i.selected = newState);
  }

  /**
   * On children click, change status of parent element
   */
  private changeColumnSelection() {
    const count = this.countItemsSelected();
    const isAllSelected = count === this._items.length;
    this.parent.checked = isAllSelected;
    this.renderer.setProperty(this.parent, 'indeterminate', count !== 0 && !isAllSelected);
  }

  /**
   * Count the selected items
   */
  private countItemsSelected() {
    if (this._items && this._items.length) {
      return this._items.filter(i => i.selected).length;
    }
    return 0;
  }

}
