import {NgModule} from '@angular/core';
import {JigsawTableModule} from "jigsaw/component/table/table";
import {JigsawSelectModule} from "jigsaw/component/select/select";
import {
    JigsawTableRendererModule, TableCellCheckboxRenderer,
    TableHeadCheckboxRenderer
} from "jigsaw/component/table/table-renderer";
import {JigsawPaginationModule} from "jigsaw/component/pagination/pagination";
import {JigsawComboSelectModule} from "jigsaw/component/combo-select/index";
import {JigsawListModule} from "jigsaw/component/list-and-tile/list";
import {JigsawCheckBoxModule} from "jigsaw/component/checkbox/index";
import {JigsawButtonModule} from "jigsaw/component/button/button";
import {JigsawDemoDescriptionModule} from "app/demo-description/demo-description";
import {TableRendererDemoComponent} from './app.component';
import {
    OfficeEditor, OfficeHeader, OfficeRenderer, TableCellOperation,
    PositionHeaderSelect
} from "./renderers";

@NgModule({
    imports: [
        JigsawTableModule, JigsawSelectModule, JigsawTableRendererModule, JigsawPaginationModule,
        JigsawComboSelectModule, JigsawListModule, JigsawCheckBoxModule, JigsawButtonModule,
        JigsawDemoDescriptionModule
    ],
    declarations: [
        TableRendererDemoComponent, PositionHeaderSelect, TableCellOperation,
        OfficeRenderer, OfficeEditor, OfficeHeader
    ],
    bootstrap: [TableRendererDemoComponent], // 这个是给plunker用的，不能去掉。
    entryComponents: [
        PositionHeaderSelect, TableCellOperation, TableCellCheckboxRenderer, TableHeadCheckboxRenderer,
        OfficeRenderer, OfficeEditor, OfficeHeader
    ]
})
export class TableRendererDemoModule {
}
