rtl.module("WEBLib.TMSFNCMaps.AzureMaps",["System"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.RegisterAzureMapsService = function () {
    if (!pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceAzureMaps),{p: $impl, get: function () {
        return this.p.MapsService;
      }, set: function (v) {
        rtl.setIntfP(this.p,"MapsService",v);
      }})) {
      rtl.setIntfP($impl,"MapsService",rtl.queryIntfT($impl.TTMSFNCMapsAzureMapsService.$create("Create$1"),pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceAzureMaps),true);
      pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsPlatformServices.Current().AddPlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceAzureMaps),$impl.MapsService);
    };
  };
  this.UnRegisterAzureMapsService = function () {
    pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsPlatformServices.Current().RemovePlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceAzureMaps));
  };
  $mod.$implcode = function () {
    $mod.$rtti.$Class("TTMSFNCMapsAzureMapsService");
    rtl.createClass($impl,"TTMSFNCMapsAzureMapsFactoryService",pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsFactoryService,function () {
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceAzureMaps);
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    rtl.createClass($impl,"TTMSFNCMapsAzureMapsService",$impl.TTMSFNCMapsAzureMapsFactoryService,function () {
      this.DoCreateMaps = function () {
        var Result = null;
        var $ok = false;
        try {
          Result = rtl.setIntfL(Result,rtl.queryIntfT($impl.TTMSFNCMapsAzureMaps.$create("Create$1"),pas["WEBLib.TMSFNCMaps"].ITMSFNCCustomMaps),true);
          $ok = true;
        } finally {
          if (!$ok) rtl._Release(Result);
        };
        return Result;
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceAzureMaps);
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $mod.$rtti.$Class("TTMSFNCMapsAzureMaps");
    rtl.createClass($impl,"TTMSFNCMapsAzureMaps",pas["WEBLib.TMSFNCMaps"].TTMSFNCCustomMapsInterfacedObject,function () {
      this.GetHeadLinks = function (AList) {
        AList.Add$1(pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsLink.$create("CreateLink",[$impl.AZUREMAPSAPIURL + $impl.AZUREMAPSAPIVERSION + "/atlas.min.css","text/css","stylesheet"]));
        AList.Add$1(pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsLink.$create("CreateScript",[$impl.AZUREMAPSAPIURL + $impl.AZUREMAPSAPIVERSION + "/atlas.min.js","","","",false,false]));
        AList.Add$1(pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsLink.$create("CreateScript",[$impl.AZUREMAPSAPIURL + $impl.AZUREMAPSAPIVERSION + "/atlas-service.min.js","","","",false,false]));
      };
      this.RemoveScripts = function () {
        if (window.atlas){
          window.atlas = undefined;
        };
      };
      this.GetResetMap = function () {
        var Result = "";
        Result = "";
        return Result;
      };
      this.GetShowPopup = function () {
        var Result = "";
        Result = '  var popupTemplate = \'<div class="customInfobox">{text}</div>\';' + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].POPUPVAR + " = new " + $impl.MAPSERVICEVAR + ".Popup({" + pas["WEBLib.TMSFNCMaps"].LB + "    pixelOffset: [" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["OffsetX"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["OffsetY"]],' + pas["WEBLib.TMSFNCMaps"].LB + "    content: popupTemplate.replace(/{text}/g, " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Text"]),' + pas["WEBLib.TMSFNCMaps"].LB + "    position: new " + $impl.MAPSERVICEVAR + ".data.Position(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"]),' + pas["WEBLib.TMSFNCMaps"].LB + "  });" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('close'," + pas["WEBLib.TMSFNCMaps"].POPUPVAR + ", function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POPUPVAR + ".remove();" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POPUPVAR + " = null" + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].POPUPVAR + ".open(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ");";
        return Result;
      };
      this.GetClosePopup = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].POPUPVAR + ".remove();" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].POPUPVAR + " = null;";
        return Result;
      };
      this.GetHeadStyle = function () {
        var Result = "";
        Result = ".customInfobox {" + pas["WEBLib.TMSFNCMaps"].LB + "  white-space:normal;" + pas["WEBLib.TMSFNCMaps"].LB + "  padding: 10px;" + pas["WEBLib.TMSFNCMaps"].LB + "}";
        return Result;
      };
      this.GetDelayLoadEvent = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('ready', function () {";
        return Result;
      };
      this.GetMapsServiceCheck = function () {
        var Result = "";
        Result = "!" + $impl.MAPSERVICEVAR;
        return Result;
      };
      this.GetIdentifier = function () {
        var Result = "";
        Result = "Azure Maps";
        return Result;
      };
      this.GetInitializeMap = function () {
        var Result = "";
        var v = "";
        var $ir = rtl.createIntfRefs();
        try {
          v = $impl.MAPSERVICEVAR;
          Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + " = new " + v + '.Map("' + pas["WEBLib.TMSFNCMaps"].MAPID + '", {' + pas["WEBLib.TMSFNCMaps"].LB + "    language: '" + $ir.ref(1,this.GetMapsProperties()).GetLocale(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsLocaleMode.mlmCountry) + "'," + pas["WEBLib.TMSFNCMaps"].LB + "    center: [" + $ir.ref(2,this.GetMapsProperties()).GetDefaultLongitude() + ", " + $ir.ref(3,this.GetMapsProperties()).GetDefaultLatitude() + "]," + pas["WEBLib.TMSFNCMaps"].LB + "    zoom: " + $ir.ref(4,this.GetMapsProperties()).GetDefaultZoomLevel() + "," + pas["WEBLib.TMSFNCMaps"].LB + "    authOptions: {" + pas["WEBLib.TMSFNCMaps"].LB + '      authType: "subscriptionKey",' + pas["WEBLib.TMSFNCMaps"].LB + '      subscriptionKey: "' + $ir.ref(5,this.GetMapsProperties()).GetAPIKey() + '"' + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "  });" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
          Result = Result + "  " + $impl.MAPZOOMCONTROLVAR + " = new " + $impl.MAPSERVICEVAR + ".control.ZoomControl();" + pas["WEBLib.TMSFNCMaps"].LB;
          Result = Result + "  " + $impl.MAPMAPTYPECONTROLVAR + " = new " + $impl.MAPSERVICEVAR + ".control.StyleControl({mapStyles: 'all'});" + pas["WEBLib.TMSFNCMaps"].LB;
          if ($ir.ref(6,this.GetMapsProperties()).GetShowZoomControl()) {
            Result = Result + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".controls.add(" + $impl.MAPZOOMCONTROLVAR + ", {" + pas["WEBLib.TMSFNCMaps"].LB + "     position: 'bottom-right'" + pas["WEBLib.TMSFNCMaps"].LB + "  });" + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.MAPCONTROLARRAYVAR + ".push(" + $impl.MAPZOOMCONTROLVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
          };
          if (!$ir.ref(7,this.GetMapsProperties()).GetZoomOnDblClick()) {
            Result = Result + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setUserInteraction({dblClickZoomInteraction: false})" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
          };
          if (!$ir.ref(8,this.GetMapsProperties()).GetPanning()) {
            Result = Result + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setUserInteraction({dragPanInteraction: false})" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
          };
          if (!$ir.ref(9,this.GetMapsProperties()).GetZoomOnWheelScroll()) {
            Result = Result + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setUserInteraction({scrollZoomInteraction: false})" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
          };
          if ($ir.ref(10,this.GetMapsProperties()).GetShowMapTypeControl()) {
            Result = Result + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".controls.add(" + $impl.MAPMAPTYPECONTROLVAR + ", {" + pas["WEBLib.TMSFNCMaps"].LB + "     position: 'bottom-right'" + pas["WEBLib.TMSFNCMaps"].LB + "  });" + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.MAPCONTROLARRAYVAR + ".push(" + $impl.MAPMAPTYPECONTROLVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
          };
        } finally {
          $ir.free();
        };
        return Result;
      };
      this.GetInitializeEvents = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('zoom', function(){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(null, "ZoomChanged"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('styledata', function(){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(null, "MapTypeChanged"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('dragstart', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + '    if (event.originalEvent.target.tagName == "CANVAS")' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMoveStart"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('dragend', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + '    if (event.originalEvent.target.tagName == "CANVAS")' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMoveEnd"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('click', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + '    if (event.originalEvent.target.tagName == "CANVAS" && ((event.shapes.length > 0 && event.shapes[0].constructor.name == "Dp") || event.shapes.length == 0))' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapClick"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('dblclick', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + '    if (event.originalEvent.target.tagName == "CANVAS" && ((event.shapes.length > 0 && event.shapes[0].constructor.name == "Dp") || event.shapes.length == 0))' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapDblClick"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('mouseup', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + '    if (event.originalEvent.target.tagName == "CANVAS" && ((event.shapes.length > 0 && event.shapes[0].constructor.name == "Dp") || event.shapes.length == 0))' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseUp"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('mousedown', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + '    if (event.originalEvent.target.tagName == "CANVAS" && ((event.shapes.length > 0 && event.shapes[0].constructor.name == "Dp") || event.shapes.length == 0))' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseDown"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('mouseleave', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + '    if (event.originalEvent.target.tagName == "CANVAS" && ((event.shapes.length > 0 && event.shapes[0].constructor.name == "Dp") || event.shapes.length == 0))' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseLeave"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('mouseover', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + '    if (event.originalEvent.target.tagName == "CANVAS")' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseEnter"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('mousemove', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseMove"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })";
        return Result;
      };
      this.GetAddOrUpdateMarker = function () {
        var Result = "";
        Result = '  var popupTemplate = \'<div style="padding:10px">{title}</div>\';' + pas["WEBLib.TMSFNCMaps"].LB + "  var options = {" + pas["WEBLib.TMSFNCMaps"].LB + "    visible: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Visible"],' + pas["WEBLib.TMSFNCMaps"].LB + "    position: new " + $impl.MAPSERVICEVAR + ".data.Position(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"]),' + pas["WEBLib.TMSFNCMaps"].LB + "    popup: new " + $impl.MAPSERVICEVAR + ".Popup({" + pas["WEBLib.TMSFNCMaps"].LB + "      content: popupTemplate.replace(/{title}/g, " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Title"]),' + pas["WEBLib.TMSFNCMaps"].LB + "      pixelOffset: [0, -30]" + pas["WEBLib.TMSFNCMaps"].LB + "    })," + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  if (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["IconURL"] != ""){' + pas["WEBLib.TMSFNCMaps"].LB + "    options.htmlContent = '<img src=' + " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["IconURL"] + \'></img>\'' + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  if (!" + pas["WEBLib.TMSFNCMaps"].MARKERVAR + "){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + " = new " + $impl.MAPSERVICEVAR + ".HtmlMarker(options);" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('click'," + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ", function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      if (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Title"]){' + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".togglePopup();" + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('dblclick'," + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ", function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerDblClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('mouseup'," + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ", function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerMouseUp", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('mousedown'," + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ", function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerMouseDown", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('mouseleave'," + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ", function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerMouseLeave", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('mouseover'," + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ", function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerMouseEnter", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".markers.add(" + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "  }else{" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".setOptions(options);" + pas["WEBLib.TMSFNCMaps"].LB + "  }";
        return Result;
      };
      this.GetDeleteMarker = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".markers.remove(" + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ");";
        return Result;
      };
      this.GetAddOrUpdatePolyElement = function () {
        var Result = "";
        Result = "  var c = " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["$type"];' + pas["WEBLib.TMSFNCMaps"].LB + "  var co = [];" + pas["WEBLib.TMSFNCMaps"].LB + "  var pgo, plo;" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  switch(c){" + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsRectangle":' + pas["WEBLib.TMSFNCMaps"].LB + "      co.push([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Latitude"]]);' + pas["WEBLib.TMSFNCMaps"].LB + "      co.push([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Latitude"]]);' + pas["WEBLib.TMSFNCMaps"].LB + "      co.push([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Latitude"]]);' + pas["WEBLib.TMSFNCMaps"].LB + "      co.push([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Latitude"]]);' + pas["WEBLib.TMSFNCMaps"].LB + "      co.push([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Latitude"]]);' + pas["WEBLib.TMSFNCMaps"].LB + "    break;" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  switch(c){" + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsPolygon":' + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsRectangle":' + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsCircle":' + pas["WEBLib.TMSFNCMaps"].LB + "      pgo = {" + pas["WEBLib.TMSFNCMaps"].LB + "        visible: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Visible"],' + pas["WEBLib.TMSFNCMaps"].LB + "        fillColor: toRGBA(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["FillColor"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["FillOpacity"])' + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsPolyline":' + pas["WEBLib.TMSFNCMaps"].LB + "      plo = {" + pas["WEBLib.TMSFNCMaps"].LB + "        visible: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Visible"],' + pas["WEBLib.TMSFNCMaps"].LB + "        strokeColor: toRGBA(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeColor"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeOpacity"]),' + pas["WEBLib.TMSFNCMaps"].LB + "        strokeWidth: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeWidth"]' + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "    break;" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  if (!" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + "){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + " = new " + $impl.MAPSERVICEVAR + ".source.DataSource();" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".sources.add(" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "    switch(c){" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsPolyline":' + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".add(new " + $impl.MAPSERVICEVAR + ".data.LineString(" + pas["WEBLib.TMSFNCMaps"].COORDINATEARRAYVAR + "));" + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsCircle":' + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".add(new " + $impl.MAPSERVICEVAR + ".data.Feature(new " + $impl.MAPSERVICEVAR + ".data.Point([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Center"]["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Center"]["Latitude"]]), {subType: "Circle", radius: ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Radius"]}));' + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsPolygon":' + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".add(new " + $impl.MAPSERVICEVAR + ".data.Polygon([" + pas["WEBLib.TMSFNCMaps"].COORDINATEARRAYVAR + "]));" + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsRectangle":' + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".add(new " + $impl.MAPSERVICEVAR + ".data.Polygon([co]));" + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    switch(c){" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsCircle":' + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsRectangle":' + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsPolygon":' + pas["WEBLib.TMSFNCMaps"].LB + "      var pg = new " + $impl.MAPSERVICEVAR + ".layer.PolygonLayer(" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ", " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"] + "_polygon", pgo);' + pas["WEBLib.TMSFNCMaps"].LB + "      var pl = new " + $impl.MAPSERVICEVAR + ".layer.LineLayer(" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ", " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"] + "_polyline", plo);' + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".layers.add(pg);" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsPolyline":' + pas["WEBLib.TMSFNCMaps"].LB + "      var pl = new " + $impl.MAPSERVICEVAR + ".layer.LineLayer(" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ", " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"] + "_polyline", plo);' + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".layers.add(pl);" + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    if (pg) {" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('click', pg, function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('dblclick', pg, function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementDblClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('mouseup', pg, function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseUp", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('mousedown', pg, function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseDown", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('mouseleave', pg, function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseLeave", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('mouseover', pg, function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseEnter", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      })" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    if (pl && !pg) {" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('click', pl, function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('dblclick', pl, function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementDblClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('mouseup', pl, function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseUp", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('mousedown', pl, function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseDown", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('mouseleave', pl, function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseLeave", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".events.add('mouseover', pl, function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseEnter", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      })" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  }else{" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".clear();" + pas["WEBLib.TMSFNCMaps"].LB + "    switch(c){" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsPolyline":' + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".add(new " + $impl.MAPSERVICEVAR + ".data.LineString(" + pas["WEBLib.TMSFNCMaps"].COORDINATEARRAYVAR + "));" + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsCircle":' + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".add(new " + $impl.MAPSERVICEVAR + ".data.Feature(new " + $impl.MAPSERVICEVAR + ".data.Point([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Center"]["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Center"]["Latitude"]]), {subType: "Circle", radius: ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Radius"]}));' + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsPolygon":' + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".add(new " + $impl.MAPSERVICEVAR + ".data.Polygon([" + pas["WEBLib.TMSFNCMaps"].COORDINATEARRAYVAR + "]));" + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsRectangle":' + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".add(new " + $impl.MAPSERVICEVAR + ".data.Polygon([co]));" + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    var pl = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".layers.getLayerById(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"] + "_polyline");' + pas["WEBLib.TMSFNCMaps"].LB + "    var pg = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".layers.getLayerById(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"] + "_polygon");' + pas["WEBLib.TMSFNCMaps"].LB + "    if (pl) {" + pas["WEBLib.TMSFNCMaps"].LB + "      pl.setOptions(plo);" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    if (pg) {" + pas["WEBLib.TMSFNCMaps"].LB + "      pg.setOptions(pgo);" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "  }";
        return Result;
      };
      this.GetDeletePolyElement = function () {
        var Result = "";
        Result = "  var pl = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".layers.getLayerById(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"] + "_polyline");' + pas["WEBLib.TMSFNCMaps"].LB + "  var pg = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".layers.getLayerById(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"] + "_polygon");' + pas["WEBLib.TMSFNCMaps"].LB + "  var s = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".sources.getById(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]);' + pas["WEBLib.TMSFNCMaps"].LB + "  if (pl) {" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".layers.remove(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"] + "_polyline");' + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  if (pg) {" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".layers.remove(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"] + "_polygon");' + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  if (s) {" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".sources.remove(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]);' + pas["WEBLib.TMSFNCMaps"].LB + "  }";
        return Result;
      };
      this.GetZoomToBounds = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setCamera({" + pas["WEBLib.TMSFNCMaps"].LB + "    bounds: [" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["SouthWest"]["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["SouthWest"]["Latitude"] , ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["NorthEast"]["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["NorthEast"]["Latitude"]], ' + pas["WEBLib.TMSFNCMaps"].LB + "    padding: 10" + pas["WEBLib.TMSFNCMaps"].LB + "  });";
        return Result;
      };
      this.GetGetBounds = function () {
        var Result = "";
        Result = "  var loc = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getCamera().bounds;" + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["NorthEast"]["Latitude"] = loc[1];' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["NorthEast"]["Longitude"] = loc[0];' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["SouthWest"]["Latitude"] = loc[3];' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["SouthWest"]["Longitude"] = loc[2];';
        return Result;
      };
      this.GetSetCenterCoordinate = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setCamera({" + pas["WEBLib.TMSFNCMaps"].LB + "    center: [" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"]] ' + pas["WEBLib.TMSFNCMaps"].LB + "  });";
        return Result;
      };
      this.GetSetZoomLevel = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setCamera({" + pas["WEBLib.TMSFNCMaps"].LB + "    zoom: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + pas["WEBLib.TMSFNCMaps"].LB + "  });";
        return Result;
      };
      this.GetLatLonToXY = function () {
        var Result = "";
        Result = "  var pos = [parseFloat(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"]), parseFloat(' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"])];' + pas["WEBLib.TMSFNCMaps"].LB + "  var ts = 512;" + pas["WEBLib.TMSFNCMaps"].LB + "  var zo = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getCamera().zoom;" + pas["WEBLib.TMSFNCMaps"].LB + "  var MinLatitude = -85.05112878;" + pas["WEBLib.TMSFNCMaps"].LB + "  var MaxLatitude = 85.05112878;" + pas["WEBLib.TMSFNCMaps"].LB + "  var MinLongitude = -180;" + pas["WEBLib.TMSFNCMaps"].LB + "  var MaxLongitude = 180;" + pas["WEBLib.TMSFNCMaps"].LB + "  function Clip(n, minValue, maxValue) {" + pas["WEBLib.TMSFNCMaps"].LB + "    return Math.min(Math.max(n, minValue), maxValue);" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  function MapSize(zoom, tileSize) {" + pas["WEBLib.TMSFNCMaps"].LB + "    return Math.ceil(tileSize * Math.pow(2, zoom));" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  function PositionToGlobalPixel(position, zoom, tileSize) {" + pas["WEBLib.TMSFNCMaps"].LB + "    var latitude = Clip(position[1], MinLatitude, MaxLatitude);" + pas["WEBLib.TMSFNCMaps"].LB + "    var longitude = Clip(position[0], MinLongitude, MaxLongitude);" + pas["WEBLib.TMSFNCMaps"].LB + "    var x = (longitude + 180) / 360;" + pas["WEBLib.TMSFNCMaps"].LB + "    var sinLatitude = Math.sin(latitude * Math.PI / 180);" + pas["WEBLib.TMSFNCMaps"].LB + "    var y = 0.5 - Math.log((1 + sinLatitude) / (1 - sinLatitude)) / (4 * Math.PI);" + pas["WEBLib.TMSFNCMaps"].LB + "    var ms = MapSize(zoom, tileSize);" + pas["WEBLib.TMSFNCMaps"].LB + "    return [" + pas["WEBLib.TMSFNCMaps"].LB + "       Clip(x * ms + 0.5, 0, ms - 1)," + pas["WEBLib.TMSFNCMaps"].LB + "       Clip(y * ms + 0.5, 0, ms - 1)" + pas["WEBLib.TMSFNCMaps"].LB + "    ];" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  var centerPixel = PositionToGlobalPixel(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getCamera().center, zo, ts);" + pas["WEBLib.TMSFNCMaps"].LB + "  var w = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getCanvas().offsetWidth;" + pas["WEBLib.TMSFNCMaps"].LB + "  var h = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getCanvas().offsetHeight;" + pas["WEBLib.TMSFNCMaps"].LB + "  var topLeftPixel = [" + pas["WEBLib.TMSFNCMaps"].LB + "     centerPixel[0] - w / 2," + pas["WEBLib.TMSFNCMaps"].LB + "     centerPixel[1] - h / 2" + pas["WEBLib.TMSFNCMaps"].LB + "  ];" + pas["WEBLib.TMSFNCMaps"].LB + "  var transform = (position) => {" + pas["WEBLib.TMSFNCMaps"].LB + "      var pixel = PositionToGlobalPixel(position, zo, ts);" + pas["WEBLib.TMSFNCMaps"].LB + "      pixel[0] -= topLeftPixel[0];" + pas["WEBLib.TMSFNCMaps"].LB + "      pixel[1] -= topLeftPixel[1];" + pas["WEBLib.TMSFNCMaps"].LB + "      return pixel;" + pas["WEBLib.TMSFNCMaps"].LB + "  };" + pas["WEBLib.TMSFNCMaps"].LB + "  var pixel = transform(pos);" + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["X"] = parseFloat(pixel[0]);' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Y"] = parseFloat(pixel[1]);';
        return Result;
      };
      this.GetXYToLatLon = function () {
        var Result = "";
        Result = "";
        return Result;
      };
      this.GetGetCenterCoordinate = function () {
        var Result = "";
        Result = "  var loc = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getCamera().center;" + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Latitude"] = loc[1];' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Longitude"] = loc[0];';
        return Result;
      };
      this.GetGetZoomLevel = function () {
        var Result = "";
        Result = "  var z = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getCamera().zoom;";
        return Result;
      };
      this.GetUpdateOptions = function () {
        var Result = "";
        Result = Result + "  " + $impl.MAPCONTROLARRAYVAR + ".forEach(removeElement);" + pas["WEBLib.TMSFNCMaps"].LB + "  function removeElement(value){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".controls.remove([value]);" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.MAPCONTROLARRAYVAR + " = [];" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
        Result = Result + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setUserInteraction({dblClickZoomInteraction: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ZoomOnDblClick"]})' + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
        Result = Result + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setUserInteraction({dragPanInteraction: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Panning"]})' + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
        Result = Result + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setUserInteraction({scrollZoomInteraction: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ZoomOnWheelScroll"]})' + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
        Result = Result + "  if (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ShowZoomControl"]){' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".controls.add(" + $impl.MAPZOOMCONTROLVAR + ", {" + pas["WEBLib.TMSFNCMaps"].LB + "       position: 'bottom-right'" + pas["WEBLib.TMSFNCMaps"].LB + "    });" + pas["WEBLib.TMSFNCMaps"].LB + "    " + $impl.MAPCONTROLARRAYVAR + ".push(" + $impl.MAPZOOMCONTROLVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  if (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ShowMapTypeControl"]){' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".controls.add(" + $impl.MAPMAPTYPECONTROLVAR + ", {" + pas["WEBLib.TMSFNCMaps"].LB + "       position: 'bottom-right'" + pas["WEBLib.TMSFNCMaps"].LB + "    });" + pas["WEBLib.TMSFNCMaps"].LB + "    " + $impl.MAPCONTROLARRAYVAR + ".push(" + $impl.MAPMAPTYPECONTROLVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "  }";
        return Result;
      };
      this.GetGlobalVariables = function () {
        var Result = "";
        Result = "var " + $impl.MAPZOOMCONTROLVAR + ";" + pas["WEBLib.TMSFNCMaps"].LB + "var " + $impl.MAPMAPTYPECONTROLVAR + ";" + pas["WEBLib.TMSFNCMaps"].LB + "var " + $impl.MAPCONTROLARRAYVAR + " = [];" + pas["WEBLib.TMSFNCMaps"].LB + "function parseEvent(event, eventname, id = ''){" + pas["WEBLib.TMSFNCMaps"].LB + "  var loc = {'Latitude': 0, 'Longitude': 0};" + pas["WEBLib.TMSFNCMaps"].LB + "  var x = 0.0;" + pas["WEBLib.TMSFNCMaps"].LB + "  var y = 0.0;" + pas["WEBLib.TMSFNCMaps"].LB + '  if ((eventname == "MapMoveStart") || (eventname == "MapMoveEnd")){ ' + "    var centerpt = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getCamera().center;" + pas["WEBLib.TMSFNCMaps"].LB + "    loc = {'Latitude': centerpt[1], 'Longitude': centerpt[0]};" + pas["WEBLib.TMSFNCMaps"].LB + "  } else if (event) {" + pas["WEBLib.TMSFNCMaps"].LB + "    if (event.position){" + pas["WEBLib.TMSFNCMaps"].LB + "      loc = {'Latitude': event.position[1], 'Longitude': event.position[0]};" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    if (event.pixel){" + pas["WEBLib.TMSFNCMaps"].LB + "      x = event.pixel[0];" + pas["WEBLib.TMSFNCMaps"].LB + "      y = event.pixel[1];" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  var r = {'Coordinate': loc, 'X': x, 'Y': y, 'ID': id, 'EventName': eventname};" + pas["WEBLib.TMSFNCMaps"].LB + "  return r;" + pas["WEBLib.TMSFNCMaps"].LB + "}";
        return Result;
      };
      this.GetAddCoordinateToArray = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].COORDINATEARRAYVAR + ".push([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"],' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"]]);';
        return Result;
      };
      this.GetAddHoleToArray = function () {
        var Result = "";
        Result = "";
        return Result;
      };
      this.GetInitializeCoordinateArray = function () {
        var Result = "";
        Result = "[]";
        return Result;
      };
      this.GetInitializeHolesArray = function () {
        var Result = "";
        Result = "[]";
        return Result;
      };
      this.IsValid = function () {
        var Result = false;
        var $ir = rtl.createIntfRefs();
        try {
          Result = $ir.ref(1,this.GetMapsProperties()).GetAPIKey() !== "";
        } finally {
          $ir.free();
        };
        return Result;
      };
      this.DestroyMaps = function () {
        var $ir = rtl.createIntfRefs();
        try {
          $impl.MapsService.DestroyMaps($ir.ref(1,rtl.queryIntfT(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCCustomMaps)));
        } finally {
          $ir.free();
        };
      };
      this.Create$1 = function () {
        pas.System.TObject.Create.call(this);
        return this;
      };
      this.Destroy = function () {
        pas["WEBLib.TMSFNCMaps"].TTMSFNCCustomMapsInterfacedObject.Destroy.call(this);
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCCustomMaps);
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCCustomMapsInstance);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $impl.MapsService = null;
    $impl.AZUREMAPSAPIVERSION = "2";
    $impl.AZUREMAPSAPIURL = "https://atlas.microsoft.com/sdk/javascript/mapcontrol/";
    $impl.MAPSERVICEVAR = "window.atlas";
    $impl.MAPZOOMCONTROLVAR = "mapZoomControl";
    $impl.MAPMAPTYPECONTROLVAR = "mapMapTypeControl";
    $impl.MAPCONTROLARRAYVAR = "mapControls";
  };
},["Classes","Math","DateUtils","Types","SysUtils","WEBLib.TMSFNCMaps","WEBLib.TMSFNCUtils","WEBLib.TMSFNCTypes","WEBLib.TMSFNCMapsCommonTypes","contnrs","Web"]);
//# sourceMappingURL=WEBLib.TMSFNCMaps.AzureMaps.js.map
