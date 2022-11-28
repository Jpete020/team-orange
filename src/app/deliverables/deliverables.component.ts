import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { CurrentFlowImgComponent } from '../current-flow-img/current-flow-img.component';

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
  @ViewChild('wbs') wbs: ElementRef;
  @ViewChild('rd') rd: ElementRef;


  constructor(private activatedRoute: ActivatedRoute, public dialog: MatDialog) { }

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
          else if(this.deliverable == "wbs"){
            this.scrollIntoView(this.wbs);
          }
          else if(this.deliverable == "rd"){
            this.scrollIntoView(this.rd);
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
        else if(this.deliverable == "wbs"){
          this.scrollIntoView(this.wbs);
        }
        else if(this.deliverable == "rd"){
          this.scrollIntoView(this.rd);
        }
      }

    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(CurrentFlowImgComponent,{
      width:'70%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
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
