import {ChangeDetectionStrategy, Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "app-chain-connection",
    templateUrl: "./chain-connection.component.html",
    styleUrls: ["./chain-connection.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChainConnectionComponent implements OnInit {

    @Input() arrow: boolean;

    constructor() {
    }

    ngOnInit() {
    }

}
