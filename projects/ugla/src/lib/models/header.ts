import { People } from './people';
import { Menu } from './menu';

export class Header {
  public brandName: string;
  public people: People;
  public menu: Menu;
  public brandImage: string;

  constructor(brandName: string, brandImage: string) {
    this.brandName = brandName;
    this.brandImage = brandImage;
  }
}
