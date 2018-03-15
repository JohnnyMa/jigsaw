import {AfterViewInit, ChangeDetectorRef, Component} from "@angular/core";
import {TimeGr} from "jigsaw/service/time.service";
import {GrItem, Shortcut} from "jigsaw/component/time/time";
import {RangeTimeDataRanges} from "jigsaw/component/range-time/shortcut-dateranges";


@Component({
    templateUrl: './demo.component.html',
    styles: [`
        h4 {
            font-size: 20px;
            margin-bottom: 20px;
        }

        h5 {
            font-size: 16px;
            margin-bottom: 10px
        }

        p {
            font-size: 14px;
            margin: 10px 0 20px 0
        }
    `]
})
export class RangeTimeGrItemsComponent implements AfterViewInit {

    beginDate = "now-1d";

    endDate = "now";

    shortcuts: Shortcut[] = [{label: "自定义", dateRange: ["now-15d", "now"]},
        {label: "这周", dateRange: RangeTimeDataRanges.RecentWeek}];

    grItems: GrItem[] = [
        {label: "Day", value: TimeGr.date, shortcuts: this.shortcuts, span: "15d"},
        {label: "Week", value: TimeGr.week},
        {label: "Month", value: TimeGr.month}];

    constructor(public changeDetectorRef: ChangeDetectorRef) {
    }

    ngAfterViewInit() {
        this.changeDetectorRef.detectChanges();
    }

    // ====================================================================
    // ignore the following lines, they are not important to this demo
    // ====================================================================
    summary: string = '';
    description: string = '';
    tags: string[] = [
        'JigsawRangeTime.grItems',
    ];
}

