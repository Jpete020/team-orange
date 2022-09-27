import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-deliverables',
  templateUrl: './deliverables.component.html',
  styleUrls: ['./deliverables.component.css']
})
export class DeliverablesComponent implements OnInit {
  deliverable: any;
  firstLoad: boolean = true;

  @ViewChild('cpf') cpf: ElementRef;
  @ViewChild('spf') spf: ElementRef;
  @ViewChild('cm') cm: ElementRef;
  @ViewChild('mfcd') mfcd: ElementRef;


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.activatedRoute.queryParams.subscribe(params => {
      this.deliverable = params['param'];

      if(this.firstLoad)
        setTimeout(() => {
          if(this.deliverable == "cpf"){
            this.scrollIntoView(this.cpf);
          }
          else if(this.deliverable == "spf"){
            this.scrollIntoView(this.spf);
          }
          else if(this.deliverable == "cm"){
            this.scrollIntoView(this.cm);
          }
          else if(this.deliverable == "mfcd"){
            this.scrollIntoView(this.mfcd);
          }
          this.firstLoad = false;
        }, 100);
      else{
        if(this.deliverable == "cpf"){
          this.scrollIntoView(this.cpf);
        }
        else if(this.deliverable == "spf"){
          this.scrollIntoView(this.spf);
        }
        else if(this.deliverable == "cm"){
          this.scrollIntoView(this.cm);
        }
        else if(this.deliverable == "mfcd"){
          this.scrollIntoView(this.mfcd);
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
