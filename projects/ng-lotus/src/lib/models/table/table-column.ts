export class TableColumn {
  text: string;
  options?: {
    type?: string,
    color?: string,
    align?: string
  };

  constructor(text: string, options?: {type?: string, color?: string, align?: string}) {
    this.text = text;
    this.options = options === undefined ? null : options;
    this.options.align = options.align === undefined ? '' : options.align;
    this.options.color = options.color === undefined ? '' : options.color;
    this.options.type = options.type === undefined ? '' : options.type;
  }
}
