import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {JigsawButtonBarModule, JigsawDateTimeSelectModule, JigsawRadioModule, JigsawSwitchModule} from "jigsaw/public_api";
import {JigsawDemoDescriptionModule} from "app/demo-description/demo-description";
import {DateTimeSelectDemoComponent} from "./demo.component";

@NgModule({
    declarations: [DateTimeSelectDemoComponent],
    exports: [ DateTimeSelectDemoComponent ],
    imports: [CommonModule, JigsawDemoDescriptionModule, JigsawDateTimeSelectModule, JigsawButtonBarModule, JigsawRadioModule, JigsawSwitchModule]
})
export class DateTimeSelectDemoModule{

}
