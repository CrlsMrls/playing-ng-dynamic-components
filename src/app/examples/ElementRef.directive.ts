import { Directive, Component, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  template: `
    <h2>Using @ViewChild to inject Directives</h2>

    <div>Mouseover directly the capital letters to underline:</div>

    <p class="example">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      <span appAddUnderline>SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE</span> magna aliqua.
      <span appAddUnderline>UT ENIM AD MINIM VENIAM</span>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. <span appAddUnderline>DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE</span> velit esse
      cillum dolore eu fugiat nulla pariatur.
      <span appAddUnderline>EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT</span>, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
    </p>

    <p>
      Do not access directly to DOM using ElementRef.nativeElement. Use Renderer2 instead.
    </p>
  `
})
export class ElementRefDirectiveExampleComponent {}

@Directive({
  selector: '[appAddUnderline]'
})
export class ElementRefDirective implements OnInit {
  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Accessing directly to nativeElement using ElementRef is not recommended.
    //  check https://angular.io/api/core/ElementRef
    // NOT RECOMMENDED this.elem.nativeElement.style.color = 'blue';
    // NOT RECOMMENDED this.elem.nativeElement.style.cursor = 'pointer';
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'blue');
    this.renderer.setStyle(this.elem.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseenter') onMouseOver() {
    // NOT RECOMMENDED this.elem.nativeElement.classList.add('underline');
    this.renderer.addClass(this.elem.nativeElement, 'underline');
  }

  @HostListener('mouseleave') onMouseOut() {
    // NOT RECOMMENDED this.elem.nativeElement.classList.remove('underline');
    this.renderer.removeClass(this.elem.nativeElement, 'underline');
  }
}
