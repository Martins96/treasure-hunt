import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CookieManager } from 'src/app/cookie-utils';
import { RestService } from 'src/app/rest-service';
import { StepInfoVO } from '../../vo/step-info-vo';

@Component({
  selector: 'app-homeuser-enigmafile',
  templateUrl: './homeuser-enigmafile.component.html',
  styleUrls: ['./homeuser-enigmafile.component.css']
})
export class HomeuserEnigmafileComponent implements OnChanges {

  private cookieJWT: string;


  @Input()
  stepCode: string;

  stepCodeResult: boolean = null;
  stepInfoResponse: StepInfoVO = null;

  serverError: boolean = false;
  serverErrorMsg: string = null;


  constructor(private cookieMng: CookieManager, private rest: RestService) {
    this.cookieJWT = this.cookieMng.getCookie("user.jwt");
  }

  ngOnChanges(change: SimpleChanges): void {
    this.serverError = false;
    this.serverErrorMsg = null;
    let getStepUrl: string = "/step/get-info";
    if (window.location.port === "4200")
      getStepUrl = "http://localhost/step/get-info";


    this.rest.sendPost<StepInfoVO>(getStepUrl, change.stepCode.currentValue, new HttpHeaders({
      "content-type": "text/plain",
      "Authorization": "Bearer " + this.cookieJWT
    })).subscribe(r => {
      this.stepInfoResponse = r.body;
      this.stepCodeResult = true;
    }, err => {
      console.error(err);
      if (err.status === 400)
        this.stepCodeResult = false;
      else{
        this.serverError = true;
        this.serverErrorMsg = err.message;
      }
    })
  }



}

