import MessageBox from "sap/m/MessageBox";
import Controller from "sap/ui/core/mvc/Controller";
import AppComponent from "../Component";
import Log from "sap/base/Log";

import BaseController from "./Base.controller";
import Model from "sap/ui/model/Model";
/**
 * @namespace ui5.typescript.helloworld.controller
 */
export default class App extends BaseController {

	public onInit(): void {
		Log.info("Inside the AppController");
		super.onInit();
		// apply content density mode to root view
		const view = super.getView();
		if (view) {
			view.addStyleClass((this.getOwnerComponent() as AppComponent).getContentDensityClass());
		}

		//get the model
		let model= super.getModel() as Model;
	}

	public sayHello() {
		//try to call the formatter here
		debugger;
		let converted = super.getFormatter().convertCurrency("123",2);
		MessageBox.show("Hello World!");
	}
}