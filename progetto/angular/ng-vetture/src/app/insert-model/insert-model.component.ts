import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UpdateResult } from '../model/update-result';
import { ModelDataService } from '../model/model-data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Marca } from '../model/brand';
import { BrandDataService } from '../model/brand-data.service';
import { QueryResult } from '../model/query-result';


@Component({
  selector: 'app-insert-model',
  templateUrl: './insert-model.component.html',
  styleUrls: ['./insert-model.component.scss']
})
export class InsertModelComponent implements OnInit {
  modelloFG: FormGroup;
  nomeCtrl = false;
  cilindrataCtrl = false;
  potenzaCtrl = false;
  marcaCtrl = false;
  listaMarche: Array<Marca>;

  messaggio: string;
  messaggioCtrl = false;

  constructor(private fb: FormBuilder, private modelSvc: ModelDataService, private modalSvc: NgbModal, private brandSvc: BrandDataService) { }

  ngOnInit() {
    this.modelloFG = this.fb.group({
      nome: [
        '',
        Validators.required
      ],
      cilindrata: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[0-9]{3,5}$/)
        ])
      ],
      potenza: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[0-9]{2,4}$/)
        ])
      ],
      marca :[
        '',
        Validators.required
      ]
    });

    this.brandSvc.getAllBrands()
      .subscribe((response: any) => {
        const queryResult: QueryResult = response;
        this.listaMarche = queryResult.esito.marca;
      }, (error: any) => {
        setTimeout(() => {
          this.messaggio = 'No brands found!<br><br>HTTP error!<br><br>' + error.message;
        }, 7000);
      });
  }



  check(element: string) {
    const ctrl = (this.modelloFG.get(element).touched || this.modelloFG.get(element).dirty) && this.modelloFG.get(element).invalid;
    switch (element) {
      case 'nome':
        this.nomeCtrl = ctrl;
        break;
      case 'cilindrata':
        this.cilindrataCtrl = ctrl;
        break;
      case 'potenza':
        this.potenzaCtrl = ctrl;
        break;
      case 'marca':
        this.marcaCtrl = ctrl;
    }
  }

  onSubmit(content: any) {
    this.modelSvc.insertModel(this.modelloFG.value)
      .subscribe((response: any) => {
        const updateResult: UpdateResult = response;
        this.messaggio = (updateResult.esito.modello.inserisci ? 'Added model data!' : 'Error! Model data not added!');
        this.messaggioCtrl = false;
        this.openModal(content);
      }, (error: any) => {
        this.messaggio = 'HTTP error!<br><br>' + error.message;
        this.messaggioCtrl = true;
        this.openModal(content);
      });
  }

  openModal(content: any) {
    this.modalSvc.open(content, { ariaLabelledBy: 'modal-basic-title' }).result
      .then(() => this.modelloFG.reset());
  }

}
