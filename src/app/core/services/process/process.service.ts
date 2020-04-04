import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Process } from './../../../process/process.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {
  processes: Process[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getAllProcesses(){
    return this.http.get<Process[]>(`${environment.flask_api}/processes/`);
  }

  getProcess(pid: number){
    return this.processes.find(p => p.pid === pid);
  }

}
