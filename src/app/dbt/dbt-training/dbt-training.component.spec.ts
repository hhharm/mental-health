import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import {DbtTrainingComponent} from "./dbt-training.component";

describe("DbtTrainingComponent", () => {
    let component: DbtTrainingComponent;
    let fixture: ComponentFixture<DbtTrainingComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [DbtTrainingComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DbtTrainingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
