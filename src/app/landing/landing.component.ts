import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import { GLOBAL_DATA } from '../util/constant-loader';
import { Document } from '../util/document';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private filterSvc: FilterService) { }

  documents: Document[] = GLOBAL_DATA.DOCUMENT;
  fileredDocs:any[]=[];
  searchKey='';
  selectedCategory:string='All';

  ngOnInit(): void {
    this.filterSvc.categorySubject.subscribe(category => {
      this.selectedCategory = category;
      this.filterCategory(category);
    });
  }

  filterCategory(category:string) {
    this.fileredDocs = category == 'All' ? this.documents : this.documents.filter(obj => obj.category == category);
  }

  searchDocument() {
    if (this.searchKey == '') {
      this.filterCategory(this.selectedCategory);
    } else {
      this.fileredDocs = this.documents.filter(
        obj => (this.selectedCategory == 'All' || obj.category == this.selectedCategory)  
        && obj.content.toLocaleLowerCase().indexOf(this.searchKey.toLocaleLowerCase()) != -1);
    }
  }
}
