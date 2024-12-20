rtl.module("WEBLib.TMSFNCMaps.Here",["System"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.RegisterHereService = function () {
    if (!pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceHere),{p: $impl, get: function () {
        return this.p.MapsService;
      }, set: function (v) {
        rtl.setIntfP(this.p,"MapsService",v);
      }})) {
      rtl.setIntfP($impl,"MapsService",rtl.queryIntfT($impl.TTMSFNCMapsHereService.$create("Create$1"),pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceHere),true);
      pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsPlatformServices.Current().AddPlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceHere),$impl.MapsService);
    };
  };
  this.UnRegisterHereService = function () {
    pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsPlatformServices.Current().RemovePlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceHere));
  };
  $mod.$implcode = function () {
    $impl.MAJ_VER = 1;
    $impl.MIN_VER = 0;
    $impl.REL_VER = 2;
    $impl.BLD_VER = 0;
    $mod.$rtti.$Class("TTMSFNCMapsHereService");
    rtl.createClass($impl,"TTMSFNCMapsHereFactoryService",pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsFactoryService,function () {
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceHere);
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    rtl.createClass($impl,"TTMSFNCMapsHereService",$impl.TTMSFNCMapsHereFactoryService,function () {
      this.DoCreateMaps = function () {
        var Result = null;
        var $ok = false;
        try {
          Result = rtl.setIntfL(Result,rtl.queryIntfT($impl.TTMSFNCMapsHere.$create("Create$1"),pas["WEBLib.TMSFNCMaps"].ITMSFNCCustomMaps),true);
          $ok = true;
        } finally {
          if (!$ok) rtl._Release(Result);
        };
        return Result;
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceHere);
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $mod.$rtti.$Class("TTMSFNCMapsHere");
    rtl.createClass($impl,"TTMSFNCMapsHere",pas["WEBLib.TMSFNCMaps"].TTMSFNCCustomMapsInterfacedObject,function () {
      this.GetHeadLinks = function (AList) {
        AList.Add$1(pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsLink.$create("CreateLink",[$impl.HEREAPIURL + $impl.HEREAPIVERSION + "/mapsjs-ui.css","text/css","stylesheet"]));
        AList.Add$1(pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsLink.$create("CreateScript",[$impl.HEREAPIURL + $impl.HEREAPIVERSION + "/mapsjs-core.js","text/javascript","utf-8","",false,false]));
        AList.Add$1(pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsLink.$create("CreateScript",[$impl.HEREAPIURL + $impl.HEREAPIVERSION + "/mapsjs-service.js","text/javascript","utf-8","",false,false]));
        AList.Add$1(pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsLink.$create("CreateScript",[$impl.HEREAPIURL + $impl.HEREAPIVERSION + "/mapsjs-ui.js","text/javascript","utf-8","",false,false]));
        AList.Add$1(pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsLink.$create("CreateScript",[$impl.HEREAPIURL + $impl.HEREAPIVERSION + "/mapsjs-mapevents.js","text/javascript","utf-8","",false,false]));
      };
      this.RemoveScripts = function () {
        if (window.H){
          window.H = undefined;
        };
      };
      this.GetResetMap = function () {
        var Result = "";
        Result = "";
        return Result;
      };
      this.GetShowPopup = function () {
        var Result = "";
        Result = "  var pos = {" + pas["WEBLib.TMSFNCMaps"].LB + "    lat: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"],' + pas["WEBLib.TMSFNCMaps"].LB + "    lng: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"]' + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  var xy = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".geoToScreen(pos);" + pas["WEBLib.TMSFNCMaps"].LB + "  var newpos = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".screenToGeo(xy.x + " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["OffsetX"], xy.y + ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["OffsetY"]);' + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].POPUPVAR + " = new " + $impl.MAPSERVICEVAR + ".ui.InfoBubble(newpos, {" + pas["WEBLib.TMSFNCMaps"].LB + "    content: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Text"]' + pas["WEBLib.TMSFNCMaps"].LB + "  });" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].POPUPVAR + ".close = function(){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + $impl.MAPUI + ".removeBubble(" + pas["WEBLib.TMSFNCMaps"].POPUPVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POPUPVAR + " = null;" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.MAPUI + ".addBubble(" + pas["WEBLib.TMSFNCMaps"].POPUPVAR + ");";
        return Result;
      };
      this.GetClosePopup = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].POPUPVAR + ".close();" + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.MAPUI + ".removeBubble(" + pas["WEBLib.TMSFNCMaps"].POPUPVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].POPUPVAR + " = null;";
        return Result;
      };
      this.GetHeadStyle = function () {
        var Result = "";
        Result = "";
        return Result;
      };
      this.GetDelayLoadEvent = function () {
        var Result = "";
        Result = "";
        return Result;
      };
      this.GetMapsServiceCheck = function () {
        var Result = "";
        Result = "!" + $impl.MAPSERVICEVAR;
        return Result;
      };
      this.GetIdentifier = function () {
        var Result = "";
        Result = "Here";
        return Result;
      };
      this.GetInitializeMap = function () {
        var Result = "";
        var v = "";
        var $ir = rtl.createIntfRefs();
        try {
          v = $impl.MAPSERVICEVAR;
          Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPOPTIONS + " = {" + pas["WEBLib.TMSFNCMaps"].LB + "    zoom: " + $ir.ref(1,this.GetMapsProperties()).GetDefaultZoomLevel() + "," + pas["WEBLib.TMSFNCMaps"].LB + "    center: { lng: " + $ir.ref(2,this.GetMapsProperties()).GetDefaultLongitude() + ", lat: " + $ir.ref(3,this.GetMapsProperties()).GetDefaultLatitude() + " }," + pas["WEBLib.TMSFNCMaps"].LB + "    pixelRatio: window.devicePixelRatio || 1" + pas["WEBLib.TMSFNCMaps"].LB + "  };" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  var platform = new " + v + ".service.Platform({" + pas["WEBLib.TMSFNCMaps"].LB + '    "apikey": "' + $ir.ref(4,this.GetMapsProperties()).GetAPIKey() + '", ' + pas["WEBLib.TMSFNCMaps"].LB + "  });" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  var defaultLayers = platform.createDefaultLayers({" + pas["WEBLib.TMSFNCMaps"].LB + "    lg: '" + $ir.ref(5,this.GetMapsProperties()).GetLocale(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsLocaleMode.mlmCountry) + "'" + pas["WEBLib.TMSFNCMaps"].LB + "  });" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + " = new " + v + '.Map(document.getElementById("' + pas["WEBLib.TMSFNCMaps"].MAPID + '"), defaultLayers.vector.normal.map, ' + pas["WEBLib.TMSFNCMaps"].MAPOPTIONS + ")" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + '  window.addEventListener("resize", () => ' + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getViewPort().resize());" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.MAPBEHAVIOR + " = new " + v + ".mapevents.Behavior(new " + v + ".mapevents.MapEvents(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + "));" + pas["WEBLib.TMSFNCMaps"].LB;
          if (!$ir.ref(6,this.GetMapsProperties()).GetZoomOnDblClick()) {
            Result = Result + "  " + $impl.MAPBEHAVIOR + ".disable(" + $impl.MAPSERVICEVAR + ".mapevents.Behavior.DBLTAPZOOM)" + pas["WEBLib.TMSFNCMaps"].LB;
          };
          if (!$ir.ref(7,this.GetMapsProperties()).GetPanning()) {
            Result = Result + "  " + $impl.MAPBEHAVIOR + ".disable(" + $impl.MAPSERVICEVAR + ".mapevents.Behavior.DRAGGING)" + pas["WEBLib.TMSFNCMaps"].LB;
          };
          if (!$ir.ref(8,this.GetMapsProperties()).GetZoomOnWheelScroll()) {
            Result = Result + "  " + $impl.MAPBEHAVIOR + ".disable(" + $impl.MAPSERVICEVAR + ".mapevents.Behavior.WHEELZOOM)" + pas["WEBLib.TMSFNCMaps"].LB;
          };
          Result = Result + "  " + $impl.MAPUI + " = " + v + ".ui.UI.createDefault(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ", defaultLayers, '" + $ir.ref(9,this.GetMapsProperties()).GetLocale(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsLocaleMode.mlmDefault) + "');" + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.MAPUI + ".getControl('zoom').setVisibility(" + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr($ir.ref(10,this.GetMapsProperties()).GetShowZoomControl(),true)) + ");" + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.MAPUI + ".getControl('mapsettings').setVisibility(" + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr($ir.ref(11,this.GetMapsProperties()).GetShowMapTypeControl(),true)) + ");";
        } finally {
          $ir.free();
        };
        return Result;
      };
      this.GetInitializeEvents = function () {
        var Result = "";
        Result = "  var oldZoom = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getZoom();" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addEventListener('mapviewchangeend', function(){" + pas["WEBLib.TMSFNCMaps"].LB + "    var newZoom = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getZoom();" + pas["WEBLib.TMSFNCMaps"].LB + "    if(newZoom != oldZoom){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(null, "ZoomChanged"));' + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    oldZoom = newZoom;" + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addEventListener('baselayerchange', function(){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(null, "MapTypeChanged"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addEventListener('dragstart', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMoveStart"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addEventListener('dragend', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMoveEnd"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addEventListener('tap', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapClick"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addEventListener('dbltap', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapDblClick"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addEventListener('pointerup', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseUp"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addEventListener('pointerdown', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseDown"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addEventListener('pointerleave', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseLeave"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addEventListener('pointerenter', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseEnter"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addEventListener('pointermove', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseMove"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addEventListener('drag', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseMove"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })";
        return Result;
      };
      this.GetAddOrUpdateMarker = function () {
        var Result = "";
        Result = "  var pos = {" + pas["WEBLib.TMSFNCMaps"].LB + "    lat: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"],' + pas["WEBLib.TMSFNCMaps"].LB + "    lng: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"]' + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  var opt;" + pas["WEBLib.TMSFNCMaps"].LB + "  if ((" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["IconURL"] != "") && ' + "   ((" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["IconURL"].toLowerCase().startsWith("http")) || (' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["IconURL"].toLowerCase().startsWith("data:image/")))){' + pas["WEBLib.TMSFNCMaps"].LB + "    opt = {" + pas["WEBLib.TMSFNCMaps"].LB + "      icon: new " + $impl.MAPSERVICEVAR + ".map.Icon(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["IconURL"]),' + pas["WEBLib.TMSFNCMaps"].LB + "      visibility: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Visible"]' + pas["WEBLib.TMSFNCMaps"].LB + "      , volatility: true" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "  }else{" + pas["WEBLib.TMSFNCMaps"].LB + "    opt = {" + pas["WEBLib.TMSFNCMaps"].LB + "      visibility: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Visible"]' + pas["WEBLib.TMSFNCMaps"].LB + "      , volatility: true" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  if (!" + pas["WEBLib.TMSFNCMaps"].MARKERVAR + "){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + " = new " + $impl.MAPSERVICEVAR + ".map.Marker(pos, opt);" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".addEventListener('tap', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      if (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Title"]){' + pas["WEBLib.TMSFNCMaps"].LB + "        var xy = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".geoToScreen(event.target.getGeometry());" + pas["WEBLib.TMSFNCMaps"].LB + "        var newpos = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".screenToGeo(xy.x, xy.y - 50);" + pas["WEBLib.TMSFNCMaps"].LB + "        var bubble =  new " + $impl.MAPSERVICEVAR + ".ui.InfoBubble(newpos, {" + pas["WEBLib.TMSFNCMaps"].LB + "          content: event.target.getData()" + pas["WEBLib.TMSFNCMaps"].LB + "        });" + pas["WEBLib.TMSFNCMaps"].LB + "        " + $impl.MAPUI + ".addBubble(bubble);" + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".addEventListener('dbltap', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerDblClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".addEventListener('pointerup', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerMouseUp", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".addEventListener('pointerdown', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerMouseDown", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".addEventListener('pointerleave', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerMouseLeave", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".addEventListener('pointerenter', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerMouseEnter", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".setData(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Title"]);' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addObject(" + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "  }else{" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".setGeometry(pos);" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".setData(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Title"]);' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".setVisibility(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Visible"]);' + pas["WEBLib.TMSFNCMaps"].LB + "  }";
        return Result;
      };
      this.GetDeleteMarker = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".removeObject(" + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ")";
        return Result;
      };
      this.GetAddOrUpdatePolyElement = function () {
        var Result = "";
        Result = "  var c = " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["$type"];' + pas["WEBLib.TMSFNCMaps"].LB + "  var options;" + pas["WEBLib.TMSFNCMaps"].LB + "  switch(c){" + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsPolyline":' + pas["WEBLib.TMSFNCMaps"].LB + "    options = {" + pas["WEBLib.TMSFNCMaps"].LB + "      visibility: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Visible"],' + pas["WEBLib.TMSFNCMaps"].LB + "      style: {" + pas["WEBLib.TMSFNCMaps"].LB + "        strokeColor: toRGBA(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeColor"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeOpacity"]),' + pas["WEBLib.TMSFNCMaps"].LB + "        lineWidth: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeWidth"]' + pas["WEBLib.TMSFNCMaps"].LB + "      }," + pas["WEBLib.TMSFNCMaps"].LB + "    };" + pas["WEBLib.TMSFNCMaps"].LB + "    break;" + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsCircle":' + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsRectangle":' + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsPolygon":' + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCHerePolygon":' + pas["WEBLib.TMSFNCMaps"].LB + "    options = {" + pas["WEBLib.TMSFNCMaps"].LB + "      visibility: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Visible"],' + pas["WEBLib.TMSFNCMaps"].LB + "      style: {" + pas["WEBLib.TMSFNCMaps"].LB + "        fillColor: toRGBA(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["FillColor"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["FillOpacity"]),' + pas["WEBLib.TMSFNCMaps"].LB + "        strokeColor: toRGBA(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeColor"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeOpacity"]),' + pas["WEBLib.TMSFNCMaps"].LB + "        lineWidth: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeWidth"]' + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "    };" + pas["WEBLib.TMSFNCMaps"].LB + "    break;" + pas["WEBLib.TMSFNCMaps"].LB + "   }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  if (!" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + "){" + pas["WEBLib.TMSFNCMaps"].LB + "    switch(c){" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsCircle":' + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + " = new " + $impl.MAPSERVICEVAR + ".map.Circle({lat: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Center"]["Latitude"], lng: ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Center"]["Longitude"]}, ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Radius"], options);' + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsRectangle":' + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + " = new " + $impl.MAPSERVICEVAR + ".map.Rect(new " + $impl.MAPSERVICEVAR + ".geo.Rect(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Longitude"]), options);' + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsPolyline":' + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + " = new " + $impl.MAPSERVICEVAR + ".map.Polyline(" + pas["WEBLib.TMSFNCMaps"].COORDINATEARRAYVAR + ", options);" + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsPolygon":' + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCHerePolygon":' + pas["WEBLib.TMSFNCMaps"].LB + "        co = " + pas["WEBLib.TMSFNCMaps"].COORDINATEARRAYVAR + ";" + pas["WEBLib.TMSFNCMaps"].LB + "        var pthArr = [];" + pas["WEBLib.TMSFNCMaps"].LB + "        for (var key in " + pas["WEBLib.TMSFNCMaps"].HOLEARRAYVAR + "){" + pas["WEBLib.TMSFNCMaps"].LB + "          pthArr.push(" + pas["WEBLib.TMSFNCMaps"].HOLEARRAYVAR + "[key]);" + pas["WEBLib.TMSFNCMaps"].LB + "        }" + pas["WEBLib.TMSFNCMaps"].LB + "        co = new " + $impl.MAPSERVICEVAR + ".geo.Polygon(co, pthArr);" + "        " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + " = new " + $impl.MAPSERVICEVAR + ".map.Polygon(co, options);" + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".addEventListener('tap', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".addEventListener('dbltap', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementDblClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".addEventListener('pointerup', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseUp", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".addEventListener('pointerdown', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseDown", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".addEventListener('pointerleave', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseLeave", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".addEventListener('pointerenter', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseEnter", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addObject(" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "  }else{" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".setStyle(options.style);" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".setVisibility(options.visibility);" + pas["WEBLib.TMSFNCMaps"].LB + "    switch(c){" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsCircle":' + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".setCenter({lat: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Center"]["Latitude"], lng: ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Center"]["Longitude"]});' + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".setRadius(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Radius"]);' + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsRectangle":' + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".setBoundingBox(new " + $impl.MAPSERVICEVAR + ".geo.Rect(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Longitude"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsPolyline":' + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".setGeometry(" + pas["WEBLib.TMSFNCMaps"].COORDINATEARRAYVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsPolygon":' + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCHerePolygon":' + pas["WEBLib.TMSFNCMaps"].LB + "        co = " + pas["WEBLib.TMSFNCMaps"].COORDINATEARRAYVAR + ";" + pas["WEBLib.TMSFNCMaps"].LB + "        var pthArr = [];" + pas["WEBLib.TMSFNCMaps"].LB + "        for (var key in " + pas["WEBLib.TMSFNCMaps"].HOLEARRAYVAR + "){" + pas["WEBLib.TMSFNCMaps"].LB + "          pthArr.push(" + pas["WEBLib.TMSFNCMaps"].HOLEARRAYVAR + "[key]);" + pas["WEBLib.TMSFNCMaps"].LB + "        }" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".setGeometry(new " + $impl.MAPSERVICEVAR + ".geo.Polygon(co, pthArr));" + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "  }";
        return Result;
      };
      this.GetDeletePolyElement = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".removeObject(" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ")";
        return Result;
      };
      this.GetZoomToBounds = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getViewModel().setLookAtData({" + pas["WEBLib.TMSFNCMaps"].LB + "      bounds: new " + $impl.MAPSERVICEVAR + ".geo.Rect(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["NorthEast"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["SouthWest"]["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["SouthWest"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["NorthEast"]["Longitude"])' + pas["WEBLib.TMSFNCMaps"].LB + "  });";
        return Result;
      };
      this.GetGetBounds = function () {
        var Result = "";
        Result = "  var loc = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getViewModel().getLookAtData().bounds.toGeoJSON();" + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["NorthEast"]["Latitude"] = loc.coordinates[0][0][1];' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["NorthEast"]["Longitude"] = loc.coordinates[0][0][0];' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["SouthWest"]["Latitude"] = loc.coordinates[0][2][1];' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["SouthWest"]["Longitude"] = loc.coordinates[0][2][0];';
        return Result;
      };
      this.GetGetCenterCoordinate = function () {
        var Result = "";
        Result = "  var loc = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getCenter();" + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Latitude"] = loc.lat;' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Longitude"] = loc.lng;';
        return Result;
      };
      this.GetGetZoomLevel = function () {
        var Result = "";
        Result = "  z = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getZoom();";
        return Result;
      };
      this.GetLatLonToXY = function () {
        var Result = "";
        Result = "  var geopos = {" + pas["WEBLib.TMSFNCMaps"].LB + "    lat: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"],' + pas["WEBLib.TMSFNCMaps"].LB + "    lng: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"]' + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  var point = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".geoToScreen(geopos);" + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["X"] = parseFloat(point.x);' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Y"] = parseFloat(point.y);';
        return Result;
      };
      this.GetXYToLatLon = function () {
        var Result = "";
        Result = "  var point = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".screenToGeo(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["X"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Y"]);' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Latitude"] = parseFloat(point.lat);' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Longitude"] = parseFloat(point.lng);';
        return Result;
      };
      this.GetSetCenterCoordinate = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setCenter({lat:" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"], lng:' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"]});';
        return Result;
      };
      this.GetSetZoomLevel = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setZoom(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + ");";
        return Result;
      };
      this.GetUpdateOptions = function () {
        var Result = "";
        Result = "  if (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ZoomOnDblClick"]){' + pas["WEBLib.TMSFNCMaps"].LB + "    " + $impl.MAPBEHAVIOR + ".enable(" + $impl.MAPSERVICEVAR + ".mapevents.Behavior.DBLTAPZOOM)" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  else{" + pas["WEBLib.TMSFNCMaps"].LB + "    " + $impl.MAPBEHAVIOR + ".disable(" + $impl.MAPSERVICEVAR + ".mapevents.Behavior.DBLTAPZOOM)" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  if (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Panning"]){' + pas["WEBLib.TMSFNCMaps"].LB + "    " + $impl.MAPBEHAVIOR + ".enable(" + $impl.MAPSERVICEVAR + ".mapevents.Behavior.DRAGGING)" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  else{" + pas["WEBLib.TMSFNCMaps"].LB + "    " + $impl.MAPBEHAVIOR + ".disable(" + $impl.MAPSERVICEVAR + ".mapevents.Behavior.DRAGGING)" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  if (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ZoomOnWheelScroll"]){' + pas["WEBLib.TMSFNCMaps"].LB + "    " + $impl.MAPBEHAVIOR + ".enable(" + $impl.MAPSERVICEVAR + ".mapevents.Behavior.WHEELZOOM)" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  else{" + pas["WEBLib.TMSFNCMaps"].LB + "    " + $impl.MAPBEHAVIOR + ".disable(" + $impl.MAPSERVICEVAR + ".mapevents.Behavior.WHEELZOOM)" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.MAPUI + ".getControl('zoom').setVisibility(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ShowZoomControl"]);' + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.MAPUI + ".getControl('mapsettings').setVisibility(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ShowMapTypeControl"]);';
        return Result;
      };
      this.GetGlobalVariables = function () {
        var Result = "";
        Result = "var " + $impl.MAPUI + ";" + pas["WEBLib.TMSFNCMaps"].LB + "var " + $impl.MAPBEHAVIOR + ";" + pas["WEBLib.TMSFNCMaps"].LB + "function parseEvent(event, eventname, id = ''){" + pas["WEBLib.TMSFNCMaps"].LB + "  var loc = {'Latitude': 0, 'Longitude': 0};" + pas["WEBLib.TMSFNCMaps"].LB + "  var x = 0.0;" + pas["WEBLib.TMSFNCMaps"].LB + "  var y = 0.0;" + pas["WEBLib.TMSFNCMaps"].LB + "  if (event) {" + pas["WEBLib.TMSFNCMaps"].LB + "    event.stopPropagation();" + pas["WEBLib.TMSFNCMaps"].LB + "    if (event.currentPointer){" + pas["WEBLib.TMSFNCMaps"].LB + "      x = event.currentPointer.viewportX;" + pas["WEBLib.TMSFNCMaps"].LB + "      y = event.currentPointer.viewportY;" + pas["WEBLib.TMSFNCMaps"].LB + "      var l = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".screenToGeo(x, y);" + pas["WEBLib.TMSFNCMaps"].LB + "      var loc = {'Latitude': l.lat, 'Longitude': l.lng};" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  var r = {'Coordinate': loc, 'X': x, 'Y': y, 'ID': id, 'EventName': eventname};" + pas["WEBLib.TMSFNCMaps"].LB + "  return r;" + pas["WEBLib.TMSFNCMaps"].LB + "}";
        return Result;
      };
      this.GetAddCoordinateToArray = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].COORDINATEARRAYVAR + ".pushLatLngAlt(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"],' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"]);';
        return Result;
      };
      this.GetAddHoleToArray = function () {
        var Result = "";
        Result = "var o = " + pas["WEBLib.TMSFNCMaps"].HOLEARRAYVAR + "[" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + "[0]];" + pas["WEBLib.TMSFNCMaps"].LB + "if (o){" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].HOLEARRAYVAR + "[" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + "[0]].pushLatLngAlt(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '[1]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '[1]["Longitude"]);' + pas["WEBLib.TMSFNCMaps"].LB + "}else{" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].HOLEARRAYVAR + "[" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + "[0]] = new " + $impl.MAPSERVICEVAR + ".geo.LineString();" + "  " + pas["WEBLib.TMSFNCMaps"].HOLEARRAYVAR + "[" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + "[0]].pushLatLngAlt(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '[1]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '[1]["Longitude"]);' + pas["WEBLib.TMSFNCMaps"].LB + "}";
        return Result;
      };
      this.GetInitializeCoordinateArray = function () {
        var Result = "";
        Result = "new " + $impl.MAPSERVICEVAR + ".geo.LineString();";
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
    $impl.HEREAPIVERSION = "v3/3.1.42.2";
    $impl.HEREAPIURL = "https://js.api.here.com/";
    $impl.MAPSERVICEVAR = "window.H";
    $impl.MAPUI = "mapUI";
    $impl.MAPBEHAVIOR = "mapBehavior";
  };
},["Classes","Math","DateUtils","Types","SysUtils","WEBLib.TMSFNCMaps","WEBLib.TMSFNCUtils","WEBLib.TMSFNCTypes","WEBLib.TMSFNCMapsCommonTypes","contnrs","Web"]);
//# sourceMappingURL=WEBLib.TMSFNCMaps.Here.js.map
