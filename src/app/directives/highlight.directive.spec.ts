import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template: '<p appHighlight>Hello World!!!</p>',
})
class TestComponent {}

describe('HighlightDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, HighlightDirective],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
  });

  it('should show text in yellow highlight', () => {
    fixture.detectChanges();
    expect(el.querySelector('p')?.style.backgroundColor).toBe('yellow');
  });
});
