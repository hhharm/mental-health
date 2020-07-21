import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import {DbtTrainingTheoryComponent} from "./dbt-training-theory.component";

describe("DbyTrainingTheoryComponent", () => {
    let component: DbtTrainingTheoryComponent;
    let fixture: ComponentFixture<DbtTrainingTheoryComponent>;

    beforeEach(waitForAsync(() => {
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
