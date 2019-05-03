import { Injectable } from '@angular/core';
import { LoadingComponent } from './loading.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loadingComponent = 'loadingComponent';

  private instances: {[key: string]: LoadingComponent} = {};

  public registerInstance(name: string, instance: LoadingComponent) {
    this.instances[name] = instance;
  }

  public removeInstance(name: string, instance: LoadingComponent) {
    if (this.instances[name] === instance) {
      delete this.instances[name];
    }
  }

  public hide() {
    this.instances[this.loadingComponent].onHide();
  }

  public show(transparency?: boolean) {
    this.instances[this.loadingComponent].onShow(transparency);
  }

  /**
   * @ignore
   */
  constructor() { }
}
