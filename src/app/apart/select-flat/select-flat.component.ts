
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { StorageService } from '../../_services/storage.service';
import { RootService } from '../../_services/root.service';
import { Flat } from '../../interfaces/interfacesMgn';


@Component({
  selector: 'app-select-flat',
  templateUrl: './select-flat.component.html',
  styleUrl: './select-flat.component.css'
})
export class SelectFlatComponent {
  @Output() selectedFlt = new EventEmitter<Flat>();

}

