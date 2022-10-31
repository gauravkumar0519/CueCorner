sap.ui.define([
	"sap/ui/core/UIComponent",
	   "sap/ui/model/json/JSONModel",
	   "sap/ui/model/resource/ResourceModel"
	], function (UIComponent, JSONModel, ResourceModel) {
	"use strict";
	return UIComponent.extend("cueCorner.Component", {
		metadata : {
			"interfaces": ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json"
		},
		init : function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			// bring the heat
			 // set data model
	         var oData = {
	            tables: [
                    {
                        id: 1,
                        type: "pool",
                        label: "Pool",
                        startTime: "",
                        startTime1: 0,
                        endTime: "",
                        duration: "",
                        isStarted: false,
                        amount: 0
                    },
                    {
                        id: 2,
                        type: "french",
                        label: "French 1",
                        startTime: "",
                        startTime1: 0,
                        endTime: "",
                        duration: "",
                        isStarted: false,
                        amount: 0
                    },
                    {
                        id: 3,
                        type: "french",
                        label: "French 2",
                        startTime: "",
                        startTime1: 0,
                        endTime: "",
                        duration: "",
                        isStarted: false,
                        amount: 0
                    },
                    {
                        id: 4,
                        type: "english",
                        label: "English 1",
                        startTime: "",
                        startTime1: 0,
                        endTime: "",
                        duration: "",
                        isStarted: false,
                        amount: 0
                    },
                    {
                        id: 5,
                        type: "miniEnglish",
                        label: "Mini English",
                        startTime: "",
                        startTime1: 0,
                        endTime: "",
                        duration: "",
                        isStarted: false,
                        amount: 0
                    },
                    {
                        id: 6,
                        type: "english",
                        label: "English 2",
                        startTime: "",
                        startTime1: 0,
                        endTime: "",
                        duration: "",
                        isStarted: false,
                        amount: 0
                    }
                ],
                prices: {
                    pool: {
                        "M10": 20,
                        "M20": 30,
                        "M30": 50,
                        "M40": 70,
                        "M50": 90,
                        "M60": 100, 
                    },
                    french: {
                        "M10": 30,
                        "M20": 50,
                        "M30": 70,
                        "M40": 90,
                        "M50": 110,
                        "M60": 130, 
                    },
                    miniEnglish: {
                        "M10": 40,
                        "M20": 60,
                        "M30": 80,
                        "M40": 110,
                        "M50": 140,
                        "M60": 160, 
                    },
                    english: {
                        "M10": 50,
                        "M20": 70,
                        "M30": 100,
                        "M40": 140,
                        "M50": 170,
                        "M60": 200, 
                    }
                }
	         };
	         var oModel = new JSONModel(oData);
	         this.setModel(oModel);	        
		}
	});
});
