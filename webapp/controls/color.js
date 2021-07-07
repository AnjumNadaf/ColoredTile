// sap.ui.define([
// 	"sap/m/GenericTile"
// ], function(GenericTile) {
// 	"use strict";

// 	return GenericTile.extend("colortile.controls.color", {
//         metadata:{
//             properties:{
//                 //"bgColor":{"type": "sap.ui.core.CSSColor", "defaultValue": "#ffffff"}
//                 "bgColor":  "sap.ui.core.CSSColor"
//             }
//         },
//         // renderer:function(oRm,oControl){
//         //         //  oRm.write("</div>");
//         //         //  oRm.writeControlData(oControl);
//         //         //  oRm.addStyle("background", oControl.getBgColor);
//         //         //  oRm.writeStyles();

//         //         //  //calling the original Renderer
//         //         // //  sap.m.GenericTileRenderer.render(oRm,oControl);
//         //         //  sap.m.GenericTileRenderer.render(oRm,oControl);

//         //         //  oRm.write("</div>");

//         // oRm.write("<div");
//         // oRm.writeControlData(oControl);
//         // oRm.addStyle("background", oControl.getBgColor());
//         // oRm.writeStyles();
//     	// oRm.write(">"); // this is missing
 

//         // },
//         onAfterRendering: function() {
//             GenericTile.prototype.onAfterRendering &&
//               GenericTile.prototype.onAfterRendering.apply(this, arguments);
//             if (this.getBgColor()) {
//               this.$().css("background", this.getBgColor());
//             }
//           }

// 	});
// });


sap.ui.define(["sap/m/GenericTile"], function(GenericTile) {
    GenericTile.extend("colortile.controls.color", {
      metadata: {
        properties: {
          "bgColor":  "sap.ui.core.CSSColor"
        }
      },
      renderer: {},
      onAfterRendering: function() {
        GenericTile.prototype.onAfterRendering &&
          GenericTile.prototype.onAfterRendering.apply(this, arguments);
        if (this.getBgColor()) {
          this.$().css("background", this.getBgColor());
        }
      },

      
     });
  });