import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModelDataService } from '../model/model-data.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Modello } from '../model/model';
import { QueryResult } from '../model/query-result';

@Component({
  selector: 'app-search-model',
  templateUrl: './search-model.component.html',
  styleUrls: ['./search-model.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchModelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
