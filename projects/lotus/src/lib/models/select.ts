import { Options } from './options';

export class Select {
  public name: string;
  public id: string;
  public options: Options[];

  constructor(name: string, options: Options[]) {
    this.name = name;
    this.id = `select-${name}`;
    this.options = options;
  }
}
