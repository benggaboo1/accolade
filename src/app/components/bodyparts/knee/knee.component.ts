import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService, PageScrollInstance } from 'ngx-page-scroll';

@Component({
  selector: 'app-knee',
  templateUrl: './knee.component.html',
  styleUrls: ['./knee.component.scss']
})
export class KneeComponent implements OnInit {

  @ViewChild('container') private container: ElementRef;
 
  pageScrollOffset;
  

  ngOnInit() {
    this.pageScrollOffset = "80";
  }
  
  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {}

  public animateScroll(sectionTarget: string): void {
    var target = "home/reports/knee/" + sectionTarget;
    const pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
      document: this.document, scrollTarget: target, scrollingViews: [this.container.nativeElement]
    });
    this.pageScrollService.start(pageScrollInstance);
  }
}
