import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import {CommonModule} from "@angular/common";

import {BlockComponent} from "./block.component";

describe("BlockComponent", () => {
    let component: BlockComponent;
    let fixture: ComponentFixture<BlockComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [CommonModule],
            declarations: [BlockComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlockComponent);
        component = fixture.componentInstance;
        component.block = {id: "id", elements: []};
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
