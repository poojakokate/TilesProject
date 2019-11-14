import{ MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,MatGridListModule,
        MatTableModule ,MatToolbarModule,MatTabsModule,MatSelectModule
    } from '@angular/material';
import { NgModule } from '@angular/core';
import { importType } from '@angular/compiler/src/output/output_ast';
import{CommonModule} from '@angular/common';
import { MatIconModule } from '@angular/material';
import { MatSidenavModule,MatListModule} from '@angular/material';


@NgModule({
    imports:[CommonModule,MatButtonModule, MatCardModule, MatFormFieldModule,
             MatInputModule,MatGridListModule,MatSidenavModule,MatTableModule,
             MatToolbarModule,MatListModule,MatIconModule,MatTabsModule,MatSelectModule],

    exports:[MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
             MatGridListModule,MatSidenavModule,MatTableModule,MatToolbarModule,
             MatListModule,MatIconModule,MatTabsModule,MatSelectModule]
})
export class MaterialModule{}

