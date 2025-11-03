import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeModal1 } from './three-modal-1';

describe('ThreeModal1', () => {
  let component: ThreeModal1;
  let fixture: ComponentFixture<ThreeModal1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeModal1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeModal1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
