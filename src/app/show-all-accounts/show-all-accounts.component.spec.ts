import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllAccountsComponent } from './show-all-accounts.component';

describe('ShowAllAccountsComponent', () => {
  let component: ShowAllAccountsComponent;
  let fixture: ComponentFixture<ShowAllAccountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAllAccountsComponent]
    });
    fixture = TestBed.createComponent(ShowAllAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
