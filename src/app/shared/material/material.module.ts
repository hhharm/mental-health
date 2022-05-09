import {NgModule} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatMenuModule} from '@angular/material/menu';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
    declarations: [],
    imports: [
        MatMenuModule,
        MatSidenavModule,
        MatSliderModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule,
    ],
    exports: [
        MatMenuModule,
        MatSidenavModule,
        MatSliderModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule,
    ],
})
export class MaterialModule {}
