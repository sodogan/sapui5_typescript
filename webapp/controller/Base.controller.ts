import Controller from "sap/ui/core/mvc/Controller";
import Component from "../Component";
import Router from "sap/f/routing/Router";
import Log from "sap/base/Log";
import Model from "sap/ui/model/Model";
import View from "sap/ui/core/mvc/View";
import Formatter from "../model/Formatter";
import { Mode } from "../customTypes/types";
import Settings from "../model/Settings";


//Base controller inhrit from MVC controller
export default class BaseController extends Controller {

    private _formatter:Formatter;
    private  _settings:Settings;

    public onInit():void {
        Log.info("Inside the BaseController");
        if(this._formatter=== undefined){
            this._formatter = new Formatter();
        }
        //Set the settings which is a singleton object
        this._settings = Settings.getInstance(Mode.DEBUG);

    }//class 


    public getModel(sModelName?: string): Model {
        let view = super.getView() as View;
        return sModelName ? view.getModel(sModelName) as Model : view.getModel() as Model;
    }

    public setModel(model: Model, modelName: string): void {
        let view = this.getView() as View;
        view.setModel(model, modelName);
    }

    public getRouter(): Router {
        //get the owner component first
        const _oComponent = this.getOwnerComponent() as Component;
        return _oComponent.getRouter() as Router;

    }
   
    //Getters
    public getFormatter():Formatter{
        return this._formatter;
    }




};