import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimerComponent],
    });
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should verify countdown goes to 0', () => {
    expect(component.time).toBe(5);
    component.startTimer();  
    expect(component.time).toBe(4);
    component.startTimer();  
    expect(component.time).toBe(3);
    component.startTimer();
    expect(component.time).toBe(2);
    component.startTimer();
    expect(component.time).toBe(1);
    component.startTimer();
    expect(component.time).toBe(0);
  });

  afterEach(() => {
    component.ngOnDestroy();
    fixture.destroy();
  });
});
