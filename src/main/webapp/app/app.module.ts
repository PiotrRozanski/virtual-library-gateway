import './vendor.ts';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';
import { CommonModule } from '@angular/common';

import { VirtualLibraryGatewaySharedModule, UserRouteAccessService } from './shared';
import { VirtualLibraryGatewayHomeModule } from './home/home.module';
import { VirtualLibraryGatewayAdminModule } from './admin/admin.module';
import { VirtualLibraryGatewayAccountModule } from './account/account.module';
import { VirtualLibraryGatewayEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    ErrorComponent
} from './layouts';
import { EbookCardComponent } from './layouts/main/ebook-card/ebook-card/ebook-card.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        VirtualLibraryGatewaySharedModule,
        VirtualLibraryGatewayHomeModule,
        VirtualLibraryGatewayAdminModule,
        VirtualLibraryGatewayAccountModule,
        VirtualLibraryGatewayEntityModule,
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        FooterComponent,
        EbookCardComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class VirtualLibraryGatewayAppModule {}
