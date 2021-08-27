import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CookieManager } from 'src/app/cookie-utils';
import { RestService } from 'src/app/rest-service';

@Component({
  selector: 'app-homeuser-resourcefile',
  templateUrl: './homeuser-resourcefile.component.html',
  styleUrls: ['./homeuser-resourcefile.component.css']
})
export class HomeuserResourcefileComponent implements OnChanges {

  @Input("stepCode")
  stepCode: string;

  private cookieJWT: string;

  resourceContent: any;
  filetype: string;

  constructor(private cookieMng: CookieManager, private rest: RestService) {
    this.cookieJWT = this.cookieMng.getCookie("user.jwt");
  }

  ngOnChanges(changes: SimpleChanges): void {
    let enigmaTextUrl: string = "/step/get-resource/"+changes.stepCode.currentValue;
    if (window.location.port === "4200")
    enigmaTextUrl = "http://localhost/step/get-resource/"+changes.stepCode.currentValue;

    
    this.filetype = null;
    this.resourceContent = null;
    this.rest.sendGetBlob(enigmaTextUrl,
        new HttpHeaders({
          "Authorization": "Bearer " + this.cookieJWT,
          "content-type": "application/octet-stream"
        })).subscribe(r => {
          this.filetype = r.headers.get("content-file-type");
          this.resourceContent = r.body;
        }, err => {
          console.error(err);
        })
  }

}
