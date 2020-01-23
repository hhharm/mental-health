import {ChangeDetectionStrategy, Component, HostListener, OnInit} from "@angular/core";
import {MenuStateService} from "./shared/menu-state.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
    title = "mental-health";

    //todo: use latest typescript
    constructor(private menuService: MenuStateService) {
    }

    ngOnInit(): void {
        this.menuService.setWindowSize(window.innerWidth);
    }

    @HostListener("window:resize", ["$event"])
    onResize(event) {
        this.menuService.setWindowSize(window.innerWidth);
    }
}
