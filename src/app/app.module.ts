import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { PortalModule } from '@angular/cdk/portal';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CdkPortalComponent } from './cdk-portal.component';
import { AppComponent } from './app.component';
import { DynamicStringComponent } from './dynamic-string.component';
import { ViewContainerExampleComponent } from './view-container-example/view-container-example.component';
import { AlertComponent } from './view-container-example/alert.component';

registerLocaleData(zh);

const routeConfig: Route[] = [
  {
    path: '',
    redirectTo: 'dynamic-view',
    pathMatch: 'full'
  },
  {
    path: 'dynamic-view',
    component: ViewContainerExampleComponent
  },
  {
    path: 'cdk-directive',
    component: CdkPortalComponent
  },
  {
    path: 'string-component',
    component: DynamicStringComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CdkPortalComponent,
    DynamicStringComponent,
    ViewContainerExampleComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig),
    NzGridModule,
    NzButtonModule,
    PortalModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class AppModule { }
