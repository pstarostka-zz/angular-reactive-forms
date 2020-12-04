import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftWishFormComponent } from './gift-wish-form.component';

describe('GiftWishFormComponent', () => {
  let component: GiftWishFormComponent;
  let fixture: ComponentFixture<GiftWishFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftWishFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftWishFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
