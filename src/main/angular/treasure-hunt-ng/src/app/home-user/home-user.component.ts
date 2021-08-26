import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieManager } from '../cookie-utils';
import { RestService } from '../rest-service';
import { StepInfoVO } from './vo/step-info-vo';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

  private cookieJWT: string;

  teamName: string;
  imageToShow: any;

  stepCode: string;
  submitedStepCode: string;

  stepLoading: boolean = false;

  constructor(private cookieMng: CookieManager, private rest: RestService) {
    this.cookieJWT = this.cookieMng.getCookie("user.jwt");
  }

  ngOnInit(): void {
    this.getImageFromService();
    this.getTeamNameFromService();
  }



  private getTeamNameFromService() {
    let getNameUrl: string = "/team-info/name";
    if (window.location.port === "4200")
      getNameUrl = "http://localhost/team-info/name";
    
    this.rest.sendGetRawText(getNameUrl, new HttpHeaders({
      "Authorization": "Bearer " + this.cookieJWT
    })).subscribe(r => {
      this.teamName = r.body;
    }, err => {
      console.error(err);
    })
  }


  private getImageFromService() {
    let getImageUrl: string = "/team-info/avatar";
    if (window.location.port === "4200")
      getImageUrl = "http://localhost/team-info/avatar";
    
    this.rest.getImage(getImageUrl, new HttpHeaders({
      "Authorization": "Bearer " + this.cookieJWT
    })).subscribe(data => {
      this.createImageFromBlob(data);
    }, error => {
      console.log(error);
    });
  }

  private createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imageToShow = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
  }

  //---- STEPS ----

  submitStep() {
    this.submitedStepCode = this.stepCode;
  }
}
