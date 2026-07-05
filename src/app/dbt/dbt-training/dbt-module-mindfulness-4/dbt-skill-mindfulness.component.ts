import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";

@Component({
    selector: "app-dbt-skill-mindfulness",
    templateUrl: "./dbt-skill-mindfulness.component.html",
    styleUrls: ["./dbt-skill-mindfulness.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class DbtSkillMindfulnessComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }

}
