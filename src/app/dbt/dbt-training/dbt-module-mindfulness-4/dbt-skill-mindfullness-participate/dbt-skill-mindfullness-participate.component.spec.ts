import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import {DbtSkillMindfullnessParticipateComponent} from "./dbt-skill-mindfullness-participate.component";

describe("DbtSkillMidfulnessParticipateComponent", () => {
    let component: DbtSkillMindfullnessParticipateComponent;
    let fixture: ComponentFixture<DbtSkillMindfullnessParticipateComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [DbtSkillMindfullnessParticipateComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DbtSkillMindfullnessParticipateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
