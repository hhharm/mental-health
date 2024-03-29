import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import {ChainConnectionComponent} from "./chain-connection.component";

describe("ChainConnectionComponent", () => {
    let component: ChainConnectionComponent;
    let fixture: ComponentFixture<ChainConnectionComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ChainConnectionComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChainConnectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
