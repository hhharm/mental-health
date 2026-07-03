import {NgModule} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatMenuModule} from '@angular/material/menu';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';


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
