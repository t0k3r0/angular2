import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-json-data',
  templateUrl: './json-data.component.html',
  styles: '',
})
export class JsonDataComponent implements OnInit {
  jsonData: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.jsonData = data;
    });
  }
}
