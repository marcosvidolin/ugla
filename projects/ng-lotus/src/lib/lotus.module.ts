import { NgModule, Optional, SkipSelf } from '@angular/core';
import { uglaComponent } from './ugla.component';
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
import { uglaService, ThemeConfig } from './ugla.service';
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
    uglaComponent,
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
    uglaComponent,
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
  providers: [uglaService]
})
export class uglaModule {
  /**
   * Constructor uglaModule
   *
   * @param parentModule: uglaModule
   */
  constructor (@Optional() @SkipSelf() parentModule: uglaModule) {
    if (parentModule) {
      throw new Error('uglaModule is already loaded. Import it in the AppModule only');
    }
  }

  /**
   * Initialize ugla with theme configurations.
   * @param config typeof ThemeConfig
   * @returns typeof ModuleWithProviders
   */
  static forRoot(config: ThemeConfig): ModuleWithProviders {
    return {
      ngModule: uglaModule,
      providers: [
        { provide: ThemeConfig, useValue: config }
      ]
    };
  }
}
