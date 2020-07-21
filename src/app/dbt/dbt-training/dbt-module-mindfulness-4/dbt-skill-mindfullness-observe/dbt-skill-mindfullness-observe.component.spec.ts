import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import {DbtSkillMindfullnessObserveComponent} from "./dbt-skill-mindfullness-observe.component";

describe("DbtSkillMidfulnessObserveComponent", () => {
    let component: DbtSkillMindfullnessObserveComponent;
    let fixture: ComponentFixture<DbtSkillMindfullnessObserveComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [DbtSkillMindfullnessObserveComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DbtSkillMindfullnessObserveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
