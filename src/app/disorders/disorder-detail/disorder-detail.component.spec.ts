import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import {DisorderDetailComponent} from "./disorder-detail.component";

describe("DisorderDetailComponent", () => {
    let component: DisorderDetailComponent;
    let fixture: ComponentFixture<DisorderDetailComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [DisorderDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DisorderDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
