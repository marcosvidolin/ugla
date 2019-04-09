import { NgModule, Optional, SkipSelf } from '@angular/core';
import { LotusComponent } from './lotus.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// FilePond
import { FilePondModule, registerPlugin } from 'ngx-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import {
  BrandComponent,
  ButtonComponent,
  CheckboxComponent,
  FieldComponent,
  DatepickerComponent,
  FileUploadComponent,
  FormComponent,
  HeaderComponent,
  PeopleCardComponent,
  PageTitleComponent,
  SelectComponent,
  ToolbarComponent,
  ReversePipe,
  ToastComponent,
  ToastItemComponent,
  ListOptionsComponent,
  LoginComponent,
  LoadingComponent,
  SwitchComponent,
  ListLinksComponent,
  FilterComponent,
  CardTimelineComponent,
  SimpleTableComponent,
  PaginationComponent } from './components';
import { GridDirective, CheckboxColumnDirective } from './directives';
import { PaginationItemsPerPageComponent } from './components/pagination/pagination-items-per-page/pagination-items-per-page.component';
import { LotusService, ThemeConfig } from './lotus.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';

registerPlugin(FilePondPluginFileValidateType,
  FilePondPluginFileValidateSize,
  FilePondPluginImageCrop,
  FilePondPluginImageResize,
  FilePondPluginImageTransform,
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview);

@NgModule({
  declarations: [
    LotusComponent,
    BrandComponent,
    ButtonComponent,
    CheckboxComponent,
    DatepickerComponent,
    FieldComponent,
    FileUploadComponent,
    FormComponent,
    HeaderComponent,
    PageTitleComponent,
    PeopleCardComponent,
    SelectComponent,
    ToolbarComponent,
    ReversePipe,
    ToastComponent,
    ToastItemComponent,
    GridDirective,
    ListOptionsComponent,
    LoginComponent,
    LoadingComponent,
    CheckboxComponent,
    SwitchComponent,
    ListLinksComponent,
    FilterComponent,
    CardTimelineComponent,
    SimpleTableComponent,
    CheckboxColumnDirective,
    PaginationComponent,
    PaginationItemsPerPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FilePondModule
  ],
  exports: [
    LotusComponent,
    BrandComponent,
    ButtonComponent,
    CheckboxComponent,
    DatepickerComponent,
    FieldComponent,
    FileUploadComponent,
    FormComponent,
    HeaderComponent,
    PageTitleComponent,
    PeopleCardComponent,
    SelectComponent,
    ToolbarComponent,
    ReversePipe,
    ToastComponent,
    ToastItemComponent,
    GridDirective,
    ListOptionsComponent,
    LoginComponent,
    LoadingComponent,
    SwitchComponent,
    ListLinksComponent,
    FilterComponent,
    CardTimelineComponent,
    SimpleTableComponent,
    CheckboxColumnDirective,
    PaginationComponent,
    PaginationItemsPerPageComponent
  ],
  providers: [LotusService]
})
export class LotusModule {
  /**
   * Constructor LotusModule
   *
   * @param parentModule: LotusModule
   */
  constructor (@Optional() @SkipSelf() parentModule: LotusModule) {
    if (parentModule) {
      throw new Error('LotusModule is already loaded. Import it in the AppModule only');
    }
  }

  /**
   * Initialize Lotus with theme configurations.
   * @param config typeof ThemeConfig
   * @returns typeof ModuleWithProviders
   */
  static forRoot(config: ThemeConfig): ModuleWithProviders {
    return {
      ngModule: LotusModule,
      providers: [
        { provide: ThemeConfig, useValue: config }
      ]
    };
  }
}
