import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UpdateResult } from '../model/update-result';
import { ModelDataService } from '../model/model-data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  messaggio: string;
  messaggioCtrl = false;

  constructor(private fb: FormBuilder, private brandSvc: ModelDataService, private modalSvc: NgbModal) { }

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
      ]
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
    }
  }

  onSubmit(content: any) {
    this.brandSvc.insertModel(this.modelloFG.value)
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
    this.modalSvc.open(content, {ariaLabelledBy: 'modal-basic-title'}).result
      .then(() => this.modelloFG.reset());
  }

}
