export class Feature {
  code: number;
  acronym: string;
  name: string;
  parent: number;
  operations: [];

  constructor(code: number, acronym: string, name: string, parent?: number, operations?: []) {
    this.code = code;
    this.acronym = acronym;
    this.name = name;
    this.parent = (parent) ? parent : null;
    this.operations = (operations) ? operations : [];
  }
}
