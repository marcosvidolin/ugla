export class Options {
  public value: string;
  public description: string;
  public checked: boolean;

  constructor(description: string, value: string, checked?: boolean) {
    this.value = value;
    this.description = description;
    this.checked = checked;
  }
}
