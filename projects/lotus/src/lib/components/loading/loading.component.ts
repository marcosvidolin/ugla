import { Component, OnInit, Input, OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { LoadingService } from './loading.service';
import { LotusService } from '../../lotus.service';


/**
 * Loading | LoadingService
 *
 *  Call loadingService.show() for to display loading without transparency while loading and loadingService.hide() after loading page.
 *  Call loadingService.show(true) for to display loading with transparency.
 *  Use <lts-loading [show]="true" [fullScreen]="false" [loadingName]="'loadingName'"></lts-loading> when local loading is needed.
 *
 * @example
 * <lts-loading></lts-loading>
 *
 */
@Component({
  selector: 'lts-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {

  /**
   * Indicates if the loading must be shown.
   *
   * Default: false
   */
  @Input() show = false;

  /**
   * Indicates if the loading must be full screen.
   *
   * Default: true
   */
  @Input() fullScreen = true;

  /**
   * Loading component name.
   *
   * Default: loadingComponent
   */
  @Input() loadingName = 'loadingComponent';

  inTransparency: boolean;

  /**
   * Insert the theme name on html component
   */
  public theme: string;


  constructor(private service: LoadingService, private lotus: LotusService) {
    this.theme = lotus.theme;
  }

  ngOnInit() {
    if (this.loadingName) {
      this.service.registerInstance(this.loadingName, this);
    }
  }

  ngOnDestroy() {
    if (this.loadingName) {
      this.service.removeInstance(this.loadingName, this);
    }
  }

  onShow(transparency?: boolean) {
    this.show = !this.show;
    this.inTransparency = transparency;
    document.body.classList.add('no-scroll');
  }

  onHide() {
    if (this.show) {
      this.show = !this.show;
    }
  }
}
