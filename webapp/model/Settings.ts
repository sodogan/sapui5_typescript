import { Mode } from "../customTypes/types";
/*
* Singleton Class
*/
export default class Settings {
    private static _self:Settings;  

    public constructor(private _mode:Mode){

    }

    static getInstance(mode:Mode){
        if(!Settings._self){
            return new Settings(mode);
        }
        return Settings._self;
    }
    
    //getter
    public  get Mode() {
        return this._mode;
    }
    //setter
    public set Mode(newMode: Mode) {
        this._mode = newMode;
    }


}