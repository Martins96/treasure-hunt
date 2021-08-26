import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CookieManager } from 'src/app/cookie-utils';
import { RestService } from 'src/app/rest-service';
import { StepInfoVO } from '../../vo/step-info-vo';

@Component({
  selector: 'app-homeuser-enigma-image',
  templateUrl: './homeuser-enigmaimage.component.html',
  styleUrls: ['./homeuser-enigmaimage.component.css']
})
export class HomeuserEnigmaimageComponent implements OnInit {

  @Input()
	imgFile: StepInfoVO;
  @Input()
	stepCode: StepInfoVO;

  private cookieJWT: string;

  enigmaImgBase64: string;


  constructor(private cookieMng: CookieManager, private rest: RestService) {
    this.cookieJWT = this.cookieMng.getCookie("user.jwt");
  }

  ngOnInit(): void {
    let enigmaTextUrl: string = "/step/get-enigma-file";
    if (window.location.port === "4200")
    enigmaTextUrl = "http://localhost/step/get-enigma-file";

    this.rest.sendPostRawText(enigmaTextUrl,
        {
          "stepcode": this.stepCode,
          "filename": this.imgFile
        },
        new HttpHeaders({
          "Authorization": "Bearer " + this.cookieJWT,
          "content-type": "application/json"
        })).subscribe(r => {
          this.enigmaImgBase64 = r.body;
        }, err => {
          console.error(err);
        })

  }

}
