import { Component, Input, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-homeuser-resource-image',
  templateUrl: './homeuser-resource-image.component.html',
  styleUrls: ['./homeuser-resource-image.component.css']
})
export class HomeuserResourceImageComponent {

  @Input("blob")
  imageBlob: Blob;

  imageResult: SafeUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges(change: SimpleChanges): void {
    let objectURL = URL.createObjectURL(this.imageBlob);       
    this.imageResult = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

}
