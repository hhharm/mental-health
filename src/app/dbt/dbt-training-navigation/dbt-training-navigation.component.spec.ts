import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import {CommonModule} from "@angular/common";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

import {DbtTrainingNavigationComponent} from "./dbt-training-navigation.component";

describe("DbtTrainingNavigationComponent", () => {
    let component: DbtTrainingNavigationComponent;
    let fixture: ComponentFixture<DbtTrainingNavigationComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [CommonModule],
            declarations: [DbtTrainingNavigationComponent],
            providers: [
                {provide: ActivatedRoute, useValue: {firstChild: {snapshot: {url: []}}}}
            ],
            schemas: [NO_ERRORS_SCHEMA]
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
