import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import {DbtSkillMindfulnessComponent} from "./dbt-skill-mindfulness.component";

describe("DbtSkillMindfulnessComponent", () => {
    let component: DbtSkillMindfulnessComponent;
    let fixture: ComponentFixture<DbtSkillMindfulnessComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [DbtSkillMindfulnessComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DbtSkillMindfulnessComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
