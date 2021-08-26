
export class StepInfoVO {
    
    private _result: string;
	private _description: string;
	private _enigmaTextFile: string;
	private _enigmaImageFile: string;
	private _enigmaVideo: string

    get result(): string {
        return this._result;
    }
    set result(result: string) {
        this._result = result;
    }

    get description(): string {
        return this._description;
    }
    set description(description: string) {
        this._description = description;
    }

    get enigmaTextFile(): string {
        return this._enigmaTextFile;
    }
    set enigmaTextFile(enigmaTextFile: string) {
        this._enigmaTextFile = enigmaTextFile;
    }

    get enigmaImageFile(): string {
        return this._enigmaImageFile;
    }
    set enigmaImageFile(enigmaImageFile: string) {
        this._enigmaImageFile = enigmaImageFile;
    }

    get enigmaVideo(): string {
        return this._enigmaVideo;
    }
    set enigmaVideo(enigmaVideo: string) {
        this._enigmaVideo = enigmaVideo;
    }

}