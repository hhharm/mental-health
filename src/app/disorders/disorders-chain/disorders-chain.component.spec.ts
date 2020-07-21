import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import {DisordersChainComponent} from "./disorders-chain.component";

describe("DisordersChainComponent", () => {
    let component: DisordersChainComponent;
    let fixture: ComponentFixture<DisordersChainComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [DisordersChainComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DisordersChainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
