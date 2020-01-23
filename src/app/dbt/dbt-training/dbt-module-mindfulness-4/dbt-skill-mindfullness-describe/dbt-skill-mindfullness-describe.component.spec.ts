import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {DbtSkillMindfullnessDescribeComponent} from "./dbt-skill-mindfullness-describe.component";

describe("DbtSkillMidfulnessDescribeComponent", () => {
    let component: DbtSkillMindfullnessDescribeComponent;
    let fixture: ComponentFixture<DbtSkillMindfullnessDescribeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DbtSkillMindfullnessDescribeComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DbtSkillMindfullnessDescribeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
