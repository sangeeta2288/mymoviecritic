import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedsearchComponent } from './advancedsearch.component';
import { Http, HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import {RatingModule} from 'ngx-rating';

describe('AdvancedsearchComponent', () => {
  let component: AdvancedsearchComponent;
  let fixture: ComponentFixture<AdvancedsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedsearchComponent ],
      imports: [ RouterTestingModule,
        HttpModule,
        FormsModule, MultiselectDropdownModule,
        RatingModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
