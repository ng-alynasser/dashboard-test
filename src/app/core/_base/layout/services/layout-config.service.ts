import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as objectPath from 'object-path';
import { merge } from 'lodash';
import { LayoutConfigModel } from '../models/layout-config.model';

@Injectable()
export class LayoutConfigService {

  onConfigUpdated$: Subject<LayoutConfigModel>;
  layoutConfig: LayoutConfigModel;

  constructor() {
    this.onConfigUpdated$ = new Subject();
  }

  saveConfig(layoutConfig: LayoutConfigModel): void {
    if (layoutConfig) {
      localStorage.setItem('layoutConfig', JSON.stringify(layoutConfig));
    }
  }

  getSavedConfig(): LayoutConfigModel {
    const config = localStorage.getItem('layoutConfig');
    try {
      return JSON.parse(config);
    } catch (e) { }
  }

  resetConfig(): void {
    localStorage.removeItem('layoutConfig');
  }

  getConfig(path?: string): LayoutConfigModel | any {
    this.layoutConfig = this.getSavedConfig();

    if (path) {
      return objectPath.get(this.layoutConfig, path);
    }

    return this.layoutConfig;
  }

  setConfig(value: any, save?: boolean): void {
    this.layoutConfig = merge(this.layoutConfig, value);

    if (save) {
      this.saveConfig(this.layoutConfig);
    }

    this.onConfigUpdated$.next(this.layoutConfig);
  }

  getLogo(): string {
    const menuAsideLeftSkin = objectPath.get(this.layoutConfig, 'brand.self.theme');
    const logoObject = objectPath.get(this.layoutConfig, 'self.logo');

    let logo;
    if (typeof logoObject === 'string') {
      logo = logoObject;
    }
    if (typeof logoObject === 'object') {
      logo = objectPath.get(logoObject, menuAsideLeftSkin + '');
    }
    if (typeof logo === 'undefined') {
      try {
        const logos = objectPath.get(this.layoutConfig, 'self.logo');
        logo = logos[Object.keys(logos)[0]];
      } catch (e) {
      }
    }
    return logo;
  }

  /**
   * Returns sticky logo
   */
  getStickyLogo(): string {
    let logo = objectPath.get(this.layoutConfig, 'self.logo.sticky');
    if (typeof logo === 'undefined') {
      logo = this.getLogo();
    }
    return logo + '';
  }

  /**
   * Initialize layout config
   * param config
   */
  loadConfigs(config: LayoutConfigModel) {
    this.layoutConfig = this.getSavedConfig();
    // use saved config as priority, or load new config if demo does not matched
    if (!this.layoutConfig || objectPath.get(this.layoutConfig, 'name') !== config.name) {
      this.layoutConfig = config;
    }
    this.saveConfig(this.layoutConfig);
  }

  /**
   * Reload current layout config to the state of latest saved config
   */
  reloadConfigs(): LayoutConfigModel {
    this.layoutConfig = this.getSavedConfig();
    this.onConfigUpdated$.next(this.layoutConfig);
    return this.layoutConfig;
  }
}
