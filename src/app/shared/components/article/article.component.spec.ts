import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import {CommonModule} from "@angular/common";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";

import {ArticleComponent} from "./article.component";

describe("ArticleComponent", () => {
    let component: ArticleComponent;
    let fixture: ComponentFixture<ArticleComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [CommonModule],
            declarations: [ArticleComponent],
            providers: [
                {provide: ActivatedRoute, useValue: {params: of({})}}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ArticleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
