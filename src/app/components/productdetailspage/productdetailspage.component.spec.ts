import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailspageComponent } from './productdetailspage.component';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

const mockActivatedRoute = {
  snapshot: { params: {} },
  params: of({ id: '123' }),
};

describe('ProductdetailspageComponent', () => {
  let component: ProductdetailspageComponent;
  let fixture: ComponentFixture<ProductdetailspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductdetailspageComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute,
        },
      ],
    });
    fixture = TestBed.createComponent(ProductdetailspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the route parameter', () => {
    const activatedRoute: ActivatedRoute = TestBed.inject(ActivatedRoute);
    spyOn(activatedRoute.params, 'subscribe').and.callThrough();
    component.ngOnInit();
    expect(activatedRoute.params.subscribe).toHaveBeenCalled();
    expect(component.id).toBe('123');
  });
});
