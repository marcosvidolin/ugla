import { Component, Input } from '@angular/core';
import { UglaService } from '../../ugla.service';

/**
 * Brand component
 *
 * This component genate brand Logo and brand Name
 *
 * @example
 * <ugl-brand [path]="home" [brandName]="BRAND_NAME"></ugl-brand>
 */
@Component({
  selector: 'ugl-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent {

  /**
   * Receives the brand's name
   */
  @Input() brandName: string;
  
  /**
   * Brand image
   */
  @Input() brandImage: string;

  /**
   * Receives the path to redirect
   */
  @Input() path = 'home';

  /**
   * Insert the theme name on html component
   */
  public theme: string;

  /**
   * Receives the component's name
   * @param ugla: UglaService
   */
  constructor(private ugla: UglaService) {
    this.theme = ugla.theme;
  }
}
