import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {DbtCommunicationComponent} from "./dbt-communication.component";

describe("DbtCommunicationComponent", () => {
    let component: DbtCommunicationComponent;
    let fixture: ComponentFixture<DbtCommunicationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DbtCommunicationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DbtCommunicationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
