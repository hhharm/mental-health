import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {DbtTrainingTheoryComponent} from "./dbt-training-theory.component";

describe("DbyTrainingTheoryComponent", () => {
    let component: DbtTrainingTheoryComponent;
    let fixture: ComponentFixture<DbtTrainingTheoryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DbtTrainingTheoryComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DbtTrainingTheoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
