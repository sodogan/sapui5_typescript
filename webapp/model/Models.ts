import Device from "sap/ui/Device";
import BindingMode from "sap/ui/model/BindingMode";
import Model from "sap/ui/model/Model";
import JSONModel from "sap/ui/model/json/JSONModel";

export default class Models {

    public createDeviceModel(): Model {
        //create a JSONModel
        let deviceModel = new JSONModel(Device);
        deviceModel.setDefaultBindingMode(BindingMode.OneWay);
        return deviceModel;
       
       
    }


}