import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxAComponent } from './box-a.component';

describe('BoxAComponent', () => {
  let component: BoxAComponent;
  let fixture: ComponentFixture<BoxAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
