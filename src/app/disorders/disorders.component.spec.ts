import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import {DisordersComponent} from "./disorders.component";

describe("DisordersComponent", () => {
    let component: DisordersComponent;
    let fixture: ComponentFixture<DisordersComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [DisordersComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DisordersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
