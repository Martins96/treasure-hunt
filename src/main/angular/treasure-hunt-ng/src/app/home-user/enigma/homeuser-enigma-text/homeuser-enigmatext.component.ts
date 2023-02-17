import { HttpHeaders } from '@angular/common/http';
import { SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, Input } from '@angular/core';
import { CookieManager } from 'src/app/cookie-utils';
import { RestService } from 'src/app/rest-service';
import { StepInfoVO } from '../../vo/step-info-vo';

@Component({
	selector: 'app-homeuser-enigma-text',
	templateUrl: './homeuser-enigmatext.component.html',
	styleUrls: ['./homeuser-enigmatext.component.css']
})
export class HomeuserEnigmatextComponent implements OnChanges {

	@Input()
	textFile: StepInfoVO;
	@Input()
	stepCode: StepInfoVO;

	private cookieJWT: string;

	enigmaDoc: string;


	constructor(private cookieMng: CookieManager, private rest: RestService) {
		this.cookieJWT = this.cookieMng.getCookie("user.jwt");
	}

	ngOnChanges(changes: SimpleChanges) {
		let enigmaTextUrl: string = "/step/get-enigma-file";
		if (window.location.port === "4200")
			enigmaTextUrl = "http://localhost/step/get-enigma-file";

		this.rest.sendPostRawText(enigmaTextUrl,
			{
				"stepcode": changes.stepCode.currentValue,
				"filename": this.textFile
			},
			new HttpHeaders({
				"Authorization": "Bearer " + this.cookieJWT,
				"content-type": "application/json"
			})).subscribe(r => {
				this.enigmaDoc = r.body;
			}, err => {
				console.error(err);
			})
	}

}
