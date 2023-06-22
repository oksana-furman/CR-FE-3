import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  linkColor: string = "";

  setLinkColor(color: string) {
    this.linkColor = color;
  }

  getLinkColor() {
    return this.linkColor;
  }

  constructor() { }

}
