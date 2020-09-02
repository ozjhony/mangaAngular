import { Component, OnInit } from '@angular/core';
import { CapituloModel } from 'src/app/modelos/parameters/capitulos.model';
import {CapituloService} from '../../../../services/capitulo.service'
import { Router } from '@angular/router';

declare const showMessage: any;
declare const closeAllModal: any;

@Component({
  selector: 'app-lista-capitulos',
  templateUrl: './lista-capitulos.component.html',
  styleUrls: ['./lista-capitulos.component.css']
})
export class ListaCapitulosComponent implements OnInit {

  recordList: CapituloModel[];
  idToRemove: String = '';

  constructor(private service:CapituloService, private router:Router) { }

  ngOnInit(): void {
    this.fillRecords();
  }

  fillRecords() {
    this.service.getAllRecords().subscribe(
      data => {
        this.recordList = data;
        console.log(this.recordList);
      },
      error => {
        showMessage("There os an error with backend communication.");
      }
    );
  }

  RemoveRecord() {
    if (this.idToRemove) {
      this.service.DeleteRecord(this.idToRemove).subscribe(
        data => {
          this.idToRemove = '';
          this.fillRecords();
          closeAllModal('removeConfirmationModal');
        },
        error => {
          showMessage("There is an error with backend communication.");
        }
      );
    }
  }
}
