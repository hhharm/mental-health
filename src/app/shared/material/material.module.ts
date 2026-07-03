import {NgModule} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatLegacyMenuModule as MatMenuModule} from '@angular/material/legacy-menu';
import {MatLegacySliderModule as MatSliderModule} from '@angular/material/legacy-slider';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';


@NgModule({
    declarations: [],
    imports: [
        MatMenuModule,
        MatSidenavModule,
        MatSliderModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule,
        MatCardModule
    ],
    exports: [
        MatMenuModule,
        MatSidenavModule,
        MatSliderModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule,
        MatCardModule
    ],
})
export class MaterialModule {}
