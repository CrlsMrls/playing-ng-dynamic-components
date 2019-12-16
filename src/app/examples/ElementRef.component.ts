import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-element-ref',
  template: `
    <h2>@ViewChild injection by template reference</h2>

    <div class="action" (mouseenter)="underline()" (mouseleave)="removeUnderline()">Mouseover me to underline span</div>

    <p class="example">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. <span #ref>Duis aute irure dolor in reprehenderit in voluptate inside span</span> velit esse cillum
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
    </p>

    <p>
      Do not access directly to DOM using ElementRef.nativeElement. Use Renderer2 instead.
    </p>
  `
})
export class ElementRefExampleComponent implements OnInit, AfterViewInit{
  // static:
  //      - true to resolve query results before change detection runs
  //      - false as it is not needed in OnInit,
  @ViewChild('ref', { static: false }) spanReference: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // if view child would be used here -> @ViewChild('ref', { static: true })
    // this.renderer.setStyle(this.spanReference.nativeElement, 'color', 'blue');
  }

  ngAfterViewInit() {
    // NOT RECOMMENDED this.spanReference.nativeElement.style.color = 'blue';
    this.renderer.setStyle(this.spanReference.nativeElement, 'color', 'blue');
  }


  underline() {
    // NOT RECOMMENDED this.spanReference.nativeElement.classList.add('underline');
    this.renderer.addClass(this.spanReference.nativeElement, 'underline');
  }

  removeUnderline() {
    // NOT RECOMMENDED this.spanReference.nativeElement.classList.remove('underline');
    this.renderer.removeClass(this.spanReference.nativeElement, 'underline');
  }
}
