import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed=true;
  @Output() featureSelected=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onselect(feature:string){
    this.featureSelected.emit(feature);

  }

}
