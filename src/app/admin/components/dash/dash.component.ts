import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { ProcessService } from './../../../core/services/process/process.service';
import { Process } from './../../../process/process.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */
  processes: Process[];
  cards: Observable<Process[]>;

  constructor(
    private breakpointObserver: BreakpointObserver, 
    private processService: ProcessService) {
  }

  ngOnInit(){
    this.fetchProcesses();
  }

  fetchProcesses(){
    this.processService.getAllProcesses()
    .subscribe(pss => {
      this.processes = pss;
      this.cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(({ matches }) => {
          return this.processes;
        })
      );
    });
    
  }

  refreshDash(){
    this.fetchProcesses();
  }

}
