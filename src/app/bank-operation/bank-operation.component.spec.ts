import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankOperationComponent } from './bank-operation.component';

describe('BankOperationComponent', () => {
  let component: BankOperationComponent;
  let fixture: ComponentFixture<BankOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankOperationComponent]
    });
    fixture = TestBed.createComponent(BankOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
