import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FloatBasicModule} from "./basic/demo.module";
import {FloatBasicDemo} from "./basic/demo.component";
import {FloatTriggerDemoModule} from "./trigger/demo.module";
import {FloatTriggerDemo} from "./trigger/demo.component";
import {FloatPositionDemoModule} from "./position/demo.module";
import {FloatPositionDemo} from "./position/demo.component";
import {FloatTargetDemo} from "./target/demo.component";
import {FloatTargetDemoModule} from "./target/demo.module";
import {FloatOptionDemo} from "./option/demo.component";
import {FloatOptionDemoModule} from "./option/demo.module";
import {FloatPosReviserDemo} from "./pos-reviser/demo.component";
import {FloatPosReviserModule} from "./pos-reviser/demo.module";
import {FloatMultiLevelModule} from "./multi-level/demo.module";
import {FloatMultiLevelDemo} from "./multi-level/demo.component";

export const routerConfig = [
    {
        path: 'basic', component: FloatBasicDemo
    },
    {
        path: 'trigger', component: FloatTriggerDemo
    },
    {
        path: 'position', component: FloatPositionDemo
    },
    {
        path: 'target', component: FloatTargetDemo
    },
    {
        path: 'option', component: FloatOptionDemo
    },
    {
        path: 'pos-reviser', component: FloatPosReviserDemo
    },
    {
        path: 'multi-level', component: FloatMultiLevelDemo
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routerConfig), FloatPosReviserModule, FloatMultiLevelModule,
        FloatBasicModule, FloatTriggerDemoModule, FloatPositionDemoModule, FloatTargetDemoModule, FloatOptionDemoModule
    ]
})
export class FloatMobileDemoModule {
}
