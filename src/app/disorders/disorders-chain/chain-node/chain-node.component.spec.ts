import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import {ChainNodeComponent} from "./chain-node.component";

describe("ChainNodeComponent", () => {
    let component: ChainNodeComponent;
    let fixture: ComponentFixture<ChainNodeComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ChainNodeComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChainNodeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
