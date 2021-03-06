import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SiteHeaderComponent } from './site-header.component';
import { MatButtonModule, MatIconModule, MatMenuModule, MatAutocompleteModule, MatInputModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatAutocompleteModule,
        MatInputModule
    ],
    exports: [SiteHeaderComponent],
    declarations: [SiteHeaderComponent]
})
export class SiteHeaderModule { }
