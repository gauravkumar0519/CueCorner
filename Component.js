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
                        type: "English",
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
                        "M10": 160,
                        "M20": 140,
                        "M30": 110,
                        "M40": 80,
                        "M50": 60,
                        "M60": 40, 
                    },
                    english: {
                        "M10": 200,
                        "M20": 170,
                        "M30": 140,
                        "M40": 100,
                        "M50": 70,
                        "M60": 50, 
                    }
                }
	         };
	         var oModel = new JSONModel(oData);
	         this.setModel(oModel);	        
		}
	});
});
