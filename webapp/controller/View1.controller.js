sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"colortile/controls/color"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, color) {
		"use strict";

		return Controller.extend("colortile.controller.View1", {
			onInit: function () {

			},

			Pressed:function(oEvent){
				debugger;
			
			var contentd = oEvent.getSource();
			var data = contentd.mProperties.value;
			sap.m.MessageToast.show(data);

			},

			onPress:function(oEvent){
				debugger;
				sap.m.MessageToast.show("Pressed");
			},

			onCreate:function(){
				debugger;
				var oGenericTile = new colortile.controls.color({
				   header:"Title",
				   subheader:"SubTitle",
				   bgColor:"#ff0000",
				   tileContent:new sap.m.TileContent({
					  unit:"23",
					  content:new sap.m.NumericContent({
						  value:33
					  })
				   })
		
				});
		        
				oGenericTile.addStyleClass("sapUiTinyMarginBegin sapUiTinyMarginTop tileLayout");
				var oPage = this.getView().byId("page");
				oPage.addContent(oGenericTile);
		
			}

			


		});
	});
