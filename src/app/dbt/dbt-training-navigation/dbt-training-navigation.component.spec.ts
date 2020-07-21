import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import {DbtTrainingNavigationComponent} from "./dbt-training-navigation.component";

describe("DbtTrainingNavigationComponent", () => {
    let component: DbtTrainingNavigationComponent;
    let fixture: ComponentFixture<DbtTrainingNavigationComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [DbtTrainingNavigationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DbtTrainingNavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
