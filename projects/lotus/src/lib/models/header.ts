import { People } from './people';
import { Menu } from './menu';

export class Header {
  public brandName: string;
  public image: string;
  public people: People;
  public menu: Menu;

  constructor(brandName: string, image: string) {
    this.brandName = brandName;
    this.image = image;
  }
}
