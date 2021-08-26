import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-homeuser-resource-pdf',
  templateUrl: './homeuser-resource-pdf.component.html',
  styleUrls: ['./homeuser-resource-pdf.component.css']
})
export class HomeuserResourcePdfComponent implements OnChanges {

  @Input("blob")
  private pdfBlob: Blob;

  pdfObj: SafeUrl;

  filename: string = "resource.pdf";

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges(change: SimpleChanges): void {
    let fileURL = URL.createObjectURL(this.pdfBlob);
    this.pdfObj = this.sanitizer.bypassSecurityTrustUrl(fileURL);
  }

}
