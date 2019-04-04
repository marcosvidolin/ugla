import { TableHeader } from './table-header';
import { TableRow } from './table-row';

export class Table {
  name: string;
  fixed: boolean;
  header: TableHeader[];
  data: TableRow[];

  constructor(name: string, fixed: boolean, header: TableHeader[], data: TableRow[]) {
    this.name = name;
    this.fixed = fixed;
    this.header = header;
    this.data = data;
  }
}
