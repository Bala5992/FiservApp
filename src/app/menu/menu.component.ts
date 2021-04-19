import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import { GLOBAL_DATA } from '../util/constant-loader';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private filterSvc: FilterService) { }

  categorys: string[]=GLOBAL_DATA.CATEGORY;
  selected:string='All';

  ngOnInit(): void {
  }

  triggerChange(category:string) {
    this.selected=category;
    this.filterSvc.notifyCategoryChange(category);
  }

}
