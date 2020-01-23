import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {DbtSkillMindfullnessOnemindlyComponent} from "./dbt-skill-mindfullness-onemindly.component";

describe("DbtSkillMidfulnessDescribeComponent", () => {
    let component: DbtSkillMindfullnessOnemindlyComponent;
    let fixture: ComponentFixture<DbtSkillMindfullnessOnemindlyComponent>;

    beforeEach(async(() => {
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
