import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.css']
})
export class PresentationsComponent implements OnInit {

  presentation: any;
  firstLoad: boolean = true;

  @ViewChild('op') op: ElementRef;
  @ViewChild('f1') f1: ElementRef;
  @ViewChild('d') d: ElementRef;
  @ViewChild('pt') pt: ElementRef;
  @ViewChild('fpt') fpt: ElementRef;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.activatedRoute.queryParams.subscribe(params => {
      this.presentation = params['param'];

      if(this.firstLoad)
        setTimeout(() => {
          if(this.presentation == "op"){
            this.scrollIntoView(this.op);
          }
          else if(this.presentation == "f1"){
            this.scrollIntoView(this.f1);
          }
          else if(this.presentation == "d"){
            this.scrollIntoView(this.d);
          }
          else if(this.presentation == "pt"){
            this.scrollIntoView(this.pt);
          }
          else if(this.presentation == "fpt"){
            this.scrollIntoView(this.fpt);
          }
          this.firstLoad = false;
        }, 300);
      else{
        if(this.presentation == "op"){
          this.scrollIntoView(this.op);
        }
        else if(this.presentation == "f1"){
          this.scrollIntoView(this.f1);
        }
        else if(this.presentation == "d"){
          this.scrollIntoView(this.d);
        }
        else if(this.presentation == "pt"){
          this.scrollIntoView(this.pt);
        }
        else if(this.presentation == "fpt"){
          this.scrollIntoView(this.fpt);
        }
      }

    });
  }

  scrollIntoView(el: ElementRef){
    let pos = el.nativeElement.style.position;
    let top = el.nativeElement.style.top;
    el.nativeElement.style.position = 'relative';
    el.nativeElement.style.top = '-120px';
    el.nativeElement.scrollIntoView();
    el.nativeElement.style.top = top;
    el.nativeElement.style.position = pos;
  }
}
