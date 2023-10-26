import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {

  @Input('appHighlight') highlightColor!: string;

  constructor(private _el: ElementRef) {}

  ngOnInit() {
    this._el.nativeElement.style.backgroundColor =
      this.highlightColor || 'yellow';
  }
}
