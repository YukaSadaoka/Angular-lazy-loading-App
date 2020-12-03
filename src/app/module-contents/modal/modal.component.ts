import { Component, OnInit, OnDestroy, ElementRef, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() closess = new EventEmitter();

  constructor(private el: ElementRef) {
    console.log(`print this ${this.el.nativeElement}`)
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestory(){
    this.el.nativeElement.remove();
  }

  onCloseClick(){
    this.closess.emit();
  }
}
