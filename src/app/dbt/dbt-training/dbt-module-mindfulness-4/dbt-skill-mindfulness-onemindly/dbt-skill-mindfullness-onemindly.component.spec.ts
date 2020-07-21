import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import {DbtSkillMindfullnessOnemindlyComponent} from "./dbt-skill-mindfullness-onemindly.component";

describe("DbtSkillMidfulnessDescribeComponent", () => {
    let component: DbtSkillMindfullnessOnemindlyComponent;
    let fixture: ComponentFixture<DbtSkillMindfullnessOnemindlyComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [DbtSkillMindfullnessOnemindlyComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DbtSkillMindfullnessOnemindlyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
