export class Link {
  public description: string;
  public path: string;
  public active: boolean;
  public label: string;

  constructor(description: string, path?: string, active?: boolean, label?: string) {
    this.description = description;
    this.path = path || null;
    this.active = active || false;
    this.label = label || description;
  }
}
