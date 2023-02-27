import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShoppingActionComponent } from './product-shopping-action.component';

describe('ProductShoppingActionComponent', () => {
  let component: ProductShoppingActionComponent;
  let fixture: ComponentFixture<ProductShoppingActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductShoppingActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductShoppingActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
