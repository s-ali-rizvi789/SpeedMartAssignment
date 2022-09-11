import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'santa-inc-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {
  version: string;
  deviceType: string;

  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  
  constructor(
    private observer: BreakpointObserver,
    private changeDetectorRef: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.version = "V4.1.2";
    this.deviceType = "pc";
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 640px)']).subscribe((res) => {
      if (res.matches) {
        this.deviceType = "phone";
        this.sidenav.mode = 'over';
        this.sidenav.close();
        this.changeDetectorRef.detectChanges();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
        this.changeDetectorRef.detectChanges();
      }
    });
    this.observer.observe(['(max-width: 1007px)']).subscribe((res) => {
      if (res.matches) {
        this.deviceType = "tab";
        this.sidenav.mode = 'side';
        this.sidenav.open();
        this.changeDetectorRef.detectChanges();
      }
    });
    this.observer.observe(['(min-width: 1008px)']).subscribe((res) => {
      if (res.matches) {
        this.deviceType = "pc";
        this.sidenav.mode = 'side';
        this.sidenav.open();
        this.changeDetectorRef.detectChanges();
      }
    });
  }
}
