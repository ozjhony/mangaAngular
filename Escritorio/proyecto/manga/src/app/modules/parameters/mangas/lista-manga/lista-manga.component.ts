import { Component, OnInit } from '@angular/core';
import { MangaModel } from 'src/app/modelos/parameters/manga.model';
import { MangaService } from 'src/app/services/manga.service';
import { Router } from '@angular/router';

declare const showMessage: any;
declare const closeAllModal: any;

@Component({
  selector: 'app-lista-manga',
  templateUrl: './lista-manga.component.html',
  styleUrls: ['./lista-manga.component.css']
})
export class ListaMangaComponent implements OnInit {

  recordList: MangaModel[];
  idToRemove: String = '';

  constructor(private service:MangaService, private router:Router) { }

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


