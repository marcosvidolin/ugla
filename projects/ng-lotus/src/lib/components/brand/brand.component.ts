import { Component, Input } from '@angular/core';
import { uglaService } from '../../ugla.service';

/**
 * Brand component
 *
 * This component genate brand Logo and brand Name
 *
 * @example
 * <lts-brand [path]="home" [brandName]="BRAND_NAME"></lts-brand>
 */
@Component({
  selector: 'lts-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent {

  /**
   * Receives the brand's name
   */
  @Input() brandName: string;

  /**
   * Receives the path to redirect
   */
  @Input() path = 'home';

  /**
   * Image logo
   * 
   * Size: 55px x 55px
   */
  @Input() image = '';

  /**
   * Insert the theme name on html component
   */
  public theme: string;

  /**
   * Receives the component's name
   * @param ugla: uglaService
   */
  constructor(private ugla: uglaService) {
    this.theme = ugla.theme;
  }
}
