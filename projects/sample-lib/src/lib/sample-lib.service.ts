import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleLibService {

  constructor() { }
}


export interface SampleLibModel {
  width: number;
  height: number;
}
