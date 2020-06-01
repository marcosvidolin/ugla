import { Application } from './models/application';
import { Optional } from '@angular/core';
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
        item.features.forEach(fe => {
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
  view(): boolean {
    if (!this.operations) {
      console.error('VIEW operation:', 'You need inform a FEATURE\'s acronym');
    }

    return this.operations !== undefined ? this.operations.find(v => v.acronym === 'VW') !== undefined : false;
  }

  /**
   * EDIT permission
   * @return - Return if has a EDIT permission
   */
  edit(): boolean {
    if (!this.operations) {
      console.error('EDIT operation:', 'You need inform a FEATURE\'s acronym');
    }

    return this.operations !== undefined ? this.operations.find(v => v.acronym === 'ED') !== undefined : false;
  }

  /**
   * CREATE permission
   * @returns - Return if has a CREATE permission
   */
  create() {
    if (!this.operations) {
      console.error('CREATE operation:', 'You need inform a FEATURE\'s acronym');
    }

    return this.operations !== undefined ? this.operations.find(v => v.acronym === 'CR') !== undefined : false;
  }

  /**
   * DELETE permission
   * @returns - Return if has a DELETE permission
   */
  delete() {
    if (!this.operations) {
      console.error('DELETE operation:', 'You need inform a FEATURE\'s acronym');
    }

    return this.operations !== undefined ? this.operations.find(v => v.acronym === 'DE') !== undefined : false;
  }
}
