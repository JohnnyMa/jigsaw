import {Component, ViewChild} from "@angular/core";
import {JigsawProgress, PopupInfo} from "jigsaw/public_api";

@Component({
    templateUrl: './demo.component.html',
})
export class ProgressFullComponent {
    @ViewChild('estimateProgress')
    estimateProgress: JigsawProgress;
    progressValue: number = 32;
    estimationInfo: string = '';
    duration: number = 10000;
    maxProgress: number = 80;
    dockingBar: PopupInfo;

    refreshProgress() {
        this.estimateProgress.value = this.progressValue;
        this.estimateProgress.startEstimating(this.duration, this.maxProgress);
        this.estimationInfo = '';
        this.estimateProgress.status = 'processing';
    }

    onEstimationStopped(value: number) {
        this.estimationInfo = '进度估计终止在' + value + '%';
        if (value >= this.maxProgress) {
            this.estimateProgress.status = 'block';
        }
    }

    showTopBar() {
        if (this.dockingBar) {
            this.dockingBar.dispose();
        }
        this.dockingBar = JigsawProgress.showDockingBar(this.progressValue);
    }

    updateTopBarValue(offset) {
        if (!this.dockingBar) {
            return;
        }
        this.dockingBar.instance.status = 'processing';
        this.dockingBar.instance.value += offset;
    }

    // ====================================================================
    // ignore the following lines, they are not important to this demo
    // ====================================================================
    summary: string = '本Demo集中展示了进度条的各种功能，请仔细浏览、尝试各个功能';
    description: string = '';
}
