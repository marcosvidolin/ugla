import { Feature } from './feature';

export class Application {
  code: number;
  acronym: string;
  name: string;
  features: Feature[];

  constructor(code: number, acronym: string, name: string, features?: Feature[]) {
    this.code = code;
    this.acronym = acronym;
    this.name = name;
    this.features = (features) ? features : [];
  }
}
