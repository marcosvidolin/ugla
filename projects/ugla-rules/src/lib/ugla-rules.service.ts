import { Application } from './models/application';
import { Injectable, Optional } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { Feature } from './models/feature';

export class UglaRulesService {
  private applicationAcronym: string;
  private featureAcronym: string;

  private application: Application;
  private feature: Feature;
  private operations: any[];

  constructor(@Optional() applicationAcronym: string) {
    this.applicationAcronym = applicationAcronym;
    if (!applicationAcronym) {
      console.error('Was need include an Application`s acronym!');
    }
  }

  /**
   * Create a Application object
   * @param rules is array applications returned jwt token
   */
  createRules(rules: any[]) {
    rules.forEach(item => {
      if (item.acronym === this.applicationAcronym) {
        this.application = new Application(
          item.code,
          item.acronym,
          item.name
        );
        item.features.forEach((fe) => {
          const feature = new Feature(
            fe.code,
            fe.acronym,
            fe.name,
            fe.parent,
            fe.operations
          );
          this.application.features.push(feature);
        });
      }
    });
  }

  /**
   * Set feature on specific object
   * @param string acronym name
   */
  setFeature(featureAcronym: string) {
    this.featureAcronym = featureAcronym;

    if (this.application !== undefined) {
      this.application.features.forEach(item => {
        if (item.acronym === featureAcronym) {
          this.feature = item;
        }
      });

      this.setOperations(featureAcronym);
    }
  }

  private setOperations(featureAcronym: string) {
    this.application.features.forEach(item => {
      if (item.acronym === featureAcronym) {
        this.operations = item.operations;
      }
    });
  }

  /**
   * VIEW permission
   * @return - Return if has a VIEW permission
   */
  vw(): boolean {
    return this.operations !== undefined ? this.operations.find(v => v.acronym === 'VW') !== undefined : false;
  }

  /**
   * EDIT permission
   * @return - Return if has a EDIT permission
   */
  ed(): boolean {
    return this.operations !== undefined ? this.operations.find(v => v.acronym === 'ED') !== undefined : false;
  }
}
