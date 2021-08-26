import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-homeuser-resource-text',
  templateUrl: './homeuser-resource-text.component.html',
  styleUrls: ['./homeuser-resource-text.component.css']
})
export class HomeuserResourceTextComponent implements OnChanges {

  @Input("blob")
  textBlob: Blob;

  textResult: string;

  constructor() { }

  ngOnChanges(change: SimpleChanges): void {
    this.textBlob.text().then(r => {
      this.textResult = r;
    });
  }

}
