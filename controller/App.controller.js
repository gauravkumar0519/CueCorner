sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
	], function (Controller, MessageToast, JSONModel) {
	"use strict";
	return Controller.extend("cueCorner.controller.App", {
//		onInit : function () {
//			// set data model on view
//			var oData = {
//					recipient : {
//						name : "World"
//					}
//			};
//			var oModel = new JSONModel(oData);
//			this.getView().setModel(oModel);
//		},
        onTimeStart : function (oEvent) {
            var oController = this;
            var oModel = oController.getView().getModel();
			var sPath = oEvent.getSource().getParent().getBindingContext().getPath();    
            var data = oModel.getProperty(sPath);
            var d = new Date();
            var nhour = d.getHours(),
            nmin = d.getMinutes(),
            nsec = d.getSeconds();
            var AmOrPm = nhour >= 12 ? 'PM' : 'AM';
            nhour = (nhour % 12) || 12;
            if(nmin < 10){
                nmin = "0" + nmin;
            }
            if(nsec < 10){
                nsec = "0" + nsec;
            }
            data.startTime = nhour + ":" + nmin + ":" + nsec + " " + AmOrPm;
            data.startTime1 = d.getTime();
            data.endTime = "";
            data.isStarted = true;
            oModel.setProperty(sPath, data);                    
		},
        onTimeEnd : function (oEvent) {
            var oController = this;
            var oModel = oController.getView().getModel();
			var sPath = oEvent.getSource().getParent().getBindingContext().getPath();    
            var data = oModel.getProperty(sPath);
            var d = new Date();
            var nhour = d.getHours(),
            nmin = d.getMinutes(),
            nsec = d.getSeconds();
            var AmOrPm = nhour >= 12 ? 'PM' : 'AM';
            nhour = (nhour % 12) || 12;
            if(nmin < 10){
                nmin = "0" + nmin;
            }
            if(nsec < 10){
                nsec = "0" + nsec;
            }
            data.endTime = nhour + ":" + nmin + ":" + nsec + " " + AmOrPm;
            var diffMs = d.getTime() -  data.startTime1; 
            var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
            data.startTime1 = 0;
            data.isStarted = false;
            data.duration = diffMins + " min";
            data.amount = oController.calculateAmount(data.type ,diffMins);
            oModel.setProperty(sPath, data);                    
		},
        calculateAmount : function(type, minutes){
            var hours = 0, remainingMinutes = 0, amount = 0;
            var oController = this;
            var oModel = oController.getView().getModel();
            var rate = oModel.getProperty("/prices/" + type);
            if(minutes > 60){
                hours =  Math.floor(minutes/60);
                remainingMinutes = minutes%60;
            }else{
                remainingMinutes = minutes;
            }
            amount = hours * rate.M60;
            if(remainingMinutes > 55){
                amount = amount + rate.M60;
            }else if(remainingMinutes <= 55 && remainingMinutes > 45){
                amount = amount + rate.M50;
            }else if(remainingMinutes <= 45 && remainingMinutes > 35){
                amount = amount + rate.M40;
            }else if(remainingMinutes <= 35 && remainingMinutes > 25){
                amount = amount + rate.M30;
            }else if(remainingMinutes <= 25 && remainingMinutes > 15){
                amount = amount + rate.M20;
            }else if(remainingMinutes <= 15 && remainingMinutes > 5){
                amount = amount + rate.M10;
            }                                             
            return amount;
        }
	});
});