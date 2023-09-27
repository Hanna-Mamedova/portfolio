import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BublesComponent } from './bubles.component';

describe('BublesComponent', () => {
  let component: BublesComponent;
  let fixture: ComponentFixture<BublesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BublesComponent]
    });
    fixture = TestBed.createComponent(BublesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
