rtl.module("WEBLib.TMSFNCMaps.MapBox",["System"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.RegisterMapBoxService = function () {
    if (!pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceMapBox),{p: $impl, get: function () {
        return this.p.MapsService;
      }, set: function (v) {
        rtl.setIntfP(this.p,"MapsService",v);
      }})) {
      rtl.setIntfP($impl,"MapsService",rtl.queryIntfT($impl.TTMSFNCMapsMapBoxService.$create("Create$1"),pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceMapBox),true);
      pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsPlatformServices.Current().AddPlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceMapBox),$impl.MapsService);
    };
  };
  this.UnRegisterMapBoxService = function () {
    pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsPlatformServices.Current().RemovePlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceMapBox));
  };
  $mod.$implcode = function () {
    $impl.MAJ_VER = 1;
    $impl.MIN_VER = 0;
    $impl.REL_VER = 1;
    $impl.BLD_VER = 0;
    $mod.$rtti.$Class("TTMSFNCMapsMapBoxService");
    rtl.createClass($impl,"TTMSFNCMapsMapBoxFactoryService",pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsFactoryService,function () {
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceMapBox);
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    rtl.createClass($impl,"TTMSFNCMapsMapBoxService",$impl.TTMSFNCMapsMapBoxFactoryService,function () {
      this.DoCreateMaps = function () {
        var Result = null;
        var $ok = false;
        try {
          Result = rtl.setIntfL(Result,rtl.queryIntfT($impl.TTMSFNCMapsMapBox.$create("Create$1"),pas["WEBLib.TMSFNCMaps"].ITMSFNCCustomMaps),true);
          $ok = true;
        } finally {
          if (!$ok) rtl._Release(Result);
        };
        return Result;
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceMapBox);
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $mod.$rtti.$Class("TTMSFNCMapsMapBox");
    rtl.createClass($impl,"TTMSFNCMapsMapBox",pas["WEBLib.TMSFNCMaps"].TTMSFNCCustomMapsInterfacedObject,function () {
      this.GetHeadLinks = function (AList) {
        var APIVersion = "";
        var $ir = rtl.createIntfRefs();
        try {
          if ($ir.ref(1,this.GetMapsProperties()).GetAPIVersion() === "") {
            APIVersion = "v2.15.0"}
           else APIVersion = "v" + $ir.ref(2,this.GetMapsProperties()).GetAPIVersion();
          AList.Add$1(pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsLink.$create("CreateLink",[$impl.MAPBOXAPIURL + APIVersion + "/mapbox-gl.css","text/css","stylesheet"]));
          AList.Add$1(pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsLink.$create("CreateScript",[$impl.MAPBOXAPIURL + APIVersion + "/mapbox-gl.js","text/javascript","","",false,false]));
        } finally {
          $ir.free();
        };
      };
      this.RemoveScripts = function () {
        if (window.mapboxgl){
          window.mapboxgl = undefined;
        };
      };
      this.GetResetMap = function () {
        var Result = "";
        Result = "";
        return Result;
      };
      this.GetShowPopup = function () {
        var Result = "";
        Result = "  var loc = [" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"]]' + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].POPUPVAR + " = new " + $impl.MAPSERVICEVAR + '.Popup({ closeOnClick: true, maxWidth: "none", offset: [' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["OffsetX"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["OffsetY"]]}).setLngLat(loc).setHTML(' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Text"]).addTo(' + pas["WEBLib.TMSFNCMaps"].MAPVAR + ");";
        return Result;
      };
      this.GetClosePopup = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].POPUPVAR + ".remove();";
        return Result;
      };
      this.GetHeadStyle = function () {
        var Result = "";
        Result = "";
        return Result;
      };
      this.GetDelayLoadEvent = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('load', function () {";
        return Result;
      };
      this.GetMapsServiceCheck = function () {
        var Result = "";
        Result = "!" + $impl.MAPSERVICEVAR;
        return Result;
      };
      this.GetIdentifier = function () {
        var Result = "";
        Result = "MapBox";
        return Result;
      };
      this.GetInitializeMap = function () {
        var Result = "";
        var v = "";
        var $ir = rtl.createIntfRefs();
        try {
          v = $impl.MAPSERVICEVAR;
          Result = "  " + v + '.accessToken = "' + $ir.ref(1,this.GetMapsProperties()).GetAPIKey() + '";' + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + " = new " + v + ".Map({" + pas["WEBLib.TMSFNCMaps"].LB + '    container: "' + pas["WEBLib.TMSFNCMaps"].MAPID + '", ' + pas["WEBLib.TMSFNCMaps"].LB + '    style: "mapbox://sprites/mapbox/streets-v11",' + pas["WEBLib.TMSFNCMaps"].LB + "    center: [" + $ir.ref(2,this.GetMapsProperties()).GetDefaultLongitude() + ", " + $ir.ref(3,this.GetMapsProperties()).GetDefaultLatitude() + "], " + pas["WEBLib.TMSFNCMaps"].LB + "    zoom: " + $ir.ref(4,this.GetMapsProperties()).GetDefaultZoomLevel() + pas["WEBLib.TMSFNCMaps"].LB + "  });" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
          Result = Result + "  " + $impl.MAPZOOMCONTROLVAR + " = new " + $impl.MAPSERVICEVAR + ".NavigationControl();" + pas["WEBLib.TMSFNCMaps"].LB;
          if ($ir.ref(5,this.GetMapsProperties()).GetShowZoomControl()) {
            Result = Result + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addControl(" + $impl.MAPZOOMCONTROLVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.MAPCONTROLARRAYVAR + ".push(" + $impl.MAPZOOMCONTROLVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
          };
          if ($ir.ref(6,this.GetMapsProperties()).GetZoomOnDblClick()) {
            Result = Result + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".doubleClickZoom.enable();" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
          } else {
            Result = Result + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".doubleClickZoom.disable();" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
          };
          if ($ir.ref(7,this.GetMapsProperties()).GetZoomOnWheelScroll()) {
            Result = Result + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".scrollZoom.enable();" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
          } else {
            Result = Result + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".scrollZoom.disable();" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
          };
          if ($ir.ref(8,this.GetMapsProperties()).GetPanning()) {
            Result = Result + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".dragPan.enable();" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
          } else {
            Result = Result + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".dragPan.disable();" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
          };
          Result = Result + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('load', function(){" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setLayoutProperty('country-label', 'text-field', ['get','name_" + $ir.ref(9,this.GetMapsProperties()).GetLocale(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsLocaleMode.mlmCountry) + "']);});;";
        } finally {
          $ir.free();
        };
        return Result;
      };
      this.GetInitializeEvents = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('zoom', function(){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(null, "ZoomChanged"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".off('dragstart', MapMoveStart);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('dragstart', MapMoveStart);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".off('dragend', MapMoveEnd);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('dragend', MapMoveEnd);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".off('click', MapClick);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('click', MapClick);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".off('dblclick', MapDblClick);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('dblclick', MapDblClick);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".off('mouseup', MapMouseUp);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('mouseup', MapMouseUp);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".off('mousedown', MapMouseDown);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('mousedown', MapMouseDown);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".off('mouseout', MapMouseLeave);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('mouseout', MapMouseLeave);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".off('mouseover', MapMouseEnter);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('mouseover', MapMouseEnter);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".off('mousemove', MapMouseMove);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('mousemove', MapMouseMove);";
        return Result;
      };
      this.GetAddOrUpdateMarker = function () {
        var Result = "";
        Result = "  var loc = [" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"]]' + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  if (!" + pas["WEBLib.TMSFNCMaps"].MARKERVAR + "){" + pas["WEBLib.TMSFNCMaps"].LB + "    var el = document.createElement('div');" + pas["WEBLib.TMSFNCMaps"].LB + "    el.style.width = '48px';" + pas["WEBLib.TMSFNCMaps"].LB + "    el.style.height = '48px';" + pas["WEBLib.TMSFNCMaps"].LB + "    el.style.zIndex = " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ZIndex"];' + pas["WEBLib.TMSFNCMaps"].LB + '    el.innerHTML = \'<img src="' + pas["WEBLib.TMSFNCMapsCommonTypes"].DEFAULT_ICONURL + '"></img>\';' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + " = new " + $impl.MAPSERVICEVAR + ".Marker({element: el, draggable:" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Draggable"]});' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".setLngLat(loc).addTo(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "    el.addEventListener('click', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      event.stopPropagation();" + pas["WEBLib.TMSFNCMaps"].LB + "      if (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Title"] != ""){' + pas["WEBLib.TMSFNCMaps"].LB + "        var popup = new " + $impl.MAPSERVICEVAR + '.Popup({ closeOnClick: true, maxWidth: "none", offset: [0, -30]}).setLngLat(loc).setHTML(' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Title"]).addTo(' + pas["WEBLib.TMSFNCMaps"].MAPVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    el.addEventListener('dblclick', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      event.stopPropagation();" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerDblClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    el.addEventListener('mouseup', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      if (!" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Draggable"]){' + pas["WEBLib.TMSFNCMaps"].LB + "        event.stopPropagation();" + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerMouseUp", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    } )" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    el.addEventListener('mousedown', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      if (!" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Draggable"]){' + pas["WEBLib.TMSFNCMaps"].LB + "        event.stopPropagation();" + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerMouseDown", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    el.addEventListener('mouseout', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      event.stopPropagation();" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerMouseLeave", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    el.addEventListener('mouseover', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      event.stopPropagation();" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerMouseEnter", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  }else{" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".setLngLat(loc);" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".setDraggable(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Draggable"]);' + pas["WEBLib.TMSFNCMaps"].LB + "function onDragEnd() {" + pas["WEBLib.TMSFNCMaps"].LB + "  const lngLat = " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".getLngLat();" + pas["WEBLib.TMSFNCMaps"].LB + "  var jsonObj = getDefaultCoordinateObject();" + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Latitude"] = lngLat.latitude;' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Longitude"] = lngLat.longitude;' + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerDragEnd", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]), jsonObj);' + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".on('dragend', onDragEnd)" + pas["WEBLib.TMSFNCMaps"].LB + "  var elx = " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".getElement();" + pas["WEBLib.TMSFNCMaps"].LB + "  if (elx){" + pas["WEBLib.TMSFNCMaps"].LB + "    if (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["IconURL"] != ""){' + pas["WEBLib.TMSFNCMaps"].LB + '      elx.innerHTML = "<img src=" + ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["IconURL"] + "></img>";' + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    if (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Visible"]){' + pas["WEBLib.TMSFNCMaps"].LB + '      elx.style.visibility = "visible";' + pas["WEBLib.TMSFNCMaps"].LB + "    }else{" + pas["WEBLib.TMSFNCMaps"].LB + '      elx.style.visibility = "hidden";' + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "  }";
        return Result;
      };
      this.GetDeleteMarker = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".remove();";
        return Result;
      };
      this.GetAddOrUpdatePolyElement = function () {
        var Result = "";
        Result = "  var c = " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["$type"];' + pas["WEBLib.TMSFNCMaps"].LB + "  var pg, dpg, pl, dpl, spg, spl;" + pas["WEBLib.TMSFNCMaps"].LB + "  var co = [];" + pas["WEBLib.TMSFNCMaps"].LB + "  switch(c){" + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsRectangle":' + pas["WEBLib.TMSFNCMaps"].LB + "      co.push([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Latitude"]]);' + pas["WEBLib.TMSFNCMaps"].LB + "      co.push([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Latitude"]]);' + pas["WEBLib.TMSFNCMaps"].LB + "      co.push([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Latitude"]]);' + pas["WEBLib.TMSFNCMaps"].LB + "      co.push([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Latitude"]]);' + pas["WEBLib.TMSFNCMaps"].LB + "      co.push([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Latitude"]]);' + pas["WEBLib.TMSFNCMaps"].LB + "    break;" + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsCircle":' + pas["WEBLib.TMSFNCMaps"].LB + "      co = createCircle(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Center"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Radius"], true);' + pas["WEBLib.TMSFNCMaps"].LB + "    break;" + pas["WEBLib.TMSFNCMaps"].LB + "    default:" + pas["WEBLib.TMSFNCMaps"].LB + "      co = " + pas["WEBLib.TMSFNCMaps"].COORDINATEARRAYVAR + ";" + pas["WEBLib.TMSFNCMaps"].LB + "    break;" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  switch(c){" + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsRectangle":' + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsCircle":' + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsPolygon":' + pas["WEBLib.TMSFNCMaps"].LB + "      dpg = {" + pas["WEBLib.TMSFNCMaps"].LB + "      'type': 'Feature'," + pas["WEBLib.TMSFNCMaps"].LB + "        'geometry': {" + pas["WEBLib.TMSFNCMaps"].LB + "          'type': 'Polygon'," + pas["WEBLib.TMSFNCMaps"].LB + "          'coordinates': [co]" + pas["WEBLib.TMSFNCMaps"].LB + "        }" + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "      spg = {" + pas["WEBLib.TMSFNCMaps"].LB + "        'type': 'geojson'," + pas["WEBLib.TMSFNCMaps"].LB + "        'data': dpg" + pas["WEBLib.TMSFNCMaps"].LB + "      };" + pas["WEBLib.TMSFNCMaps"].LB + "      pg = {" + pas["WEBLib.TMSFNCMaps"].LB + "        'id': " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"] + "_polygon",' + pas["WEBLib.TMSFNCMaps"].LB + "        'type': 'fill'," + pas["WEBLib.TMSFNCMaps"].LB + "        'source': spg, " + pas["WEBLib.TMSFNCMaps"].LB + "        'layout': {" + pas["WEBLib.TMSFNCMaps"].LB + "          'visibility': (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Visible"] ? \'visible\' : \'none\')' + pas["WEBLib.TMSFNCMaps"].LB + "        }," + pas["WEBLib.TMSFNCMaps"].LB + "        'paint': {" + pas["WEBLib.TMSFNCMaps"].LB + "          'fill-color': " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["FillColor"],' + pas["WEBLib.TMSFNCMaps"].LB + "          'fill-opacity': " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["FillOpacity"],' + pas["WEBLib.TMSFNCMaps"].LB + "        }" + pas["WEBLib.TMSFNCMaps"].LB + "      };" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "      co.push(co[0]);" + pas["WEBLib.TMSFNCMaps"].LB + "    break;" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  dpl = {" + pas["WEBLib.TMSFNCMaps"].LB + "    'type': 'Feature'," + pas["WEBLib.TMSFNCMaps"].LB + "    'geometry': {" + pas["WEBLib.TMSFNCMaps"].LB + "      'type': 'LineString'," + pas["WEBLib.TMSFNCMaps"].LB + "      'coordinates': co" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  spl = {" + pas["WEBLib.TMSFNCMaps"].LB + "    'type': 'geojson'," + pas["WEBLib.TMSFNCMaps"].LB + "    'data': dpl" + pas["WEBLib.TMSFNCMaps"].LB + "  };" + pas["WEBLib.TMSFNCMaps"].LB + "  pl = {" + pas["WEBLib.TMSFNCMaps"].LB + "    'id': " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"] + "_polyline",' + pas["WEBLib.TMSFNCMaps"].LB + "    'type': 'line'," + pas["WEBLib.TMSFNCMaps"].LB + "    'source': spl, " + pas["WEBLib.TMSFNCMaps"].LB + "    'layout': {" + pas["WEBLib.TMSFNCMaps"].LB + "      'visibility': (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Visible"] ? \'visible\' : \'none\')' + pas["WEBLib.TMSFNCMaps"].LB + "    }," + pas["WEBLib.TMSFNCMaps"].LB + "    'paint': {" + pas["WEBLib.TMSFNCMaps"].LB + "      'line-color': " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeColor"],' + pas["WEBLib.TMSFNCMaps"].LB + "        'line-opacity': " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeOpacity"],' + pas["WEBLib.TMSFNCMaps"].LB + "        'line-width': " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeWidth"],' + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  if (!" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + "){" + pas["WEBLib.TMSFNCMaps"].LB + "    switch(c){" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsPolyline":' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addLayer(pl);" + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsCircle":' + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsRectangle":' + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsPolygon":' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addLayer(pg);" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addLayer(pl);" + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    if (pg) {" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('click', pg.id, function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "        activeElement = pl;" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('dblclick', pg.id, function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "        activeElement = pl;" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementDblClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('mouseup', pg.id, function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "        activeElement = pl;" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseUp", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('mousedown', pg.id, function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "        activeElement = pl;" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseDown", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "     " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('mouseout', pg.id, function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "        activeElement = pl;" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseLeave", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('mouseover', pg.id, function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "        activeElement = pl;" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseEnter", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      })" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    if (pl && !pg) {" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('click', pl.id, function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "        activeElement = pl;" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('dblclick', pl.id, function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "        activeElement = pl;" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementDblClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('mouseup', pl.id, function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "        activeElement = pl;" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseUp", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('mousedown', pl.id, function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "        activeElement = pl;" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseDown", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "     " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('mouseout', pl.id, function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "        activeElement = pl;" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseLeave", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('mouseover', pl.id, function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "        activeElement = pl;" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseEnter", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      })" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + this.GetInitializeEvents() + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  }else{" + pas["WEBLib.TMSFNCMaps"].LB + "    if (pg) {" + pas["WEBLib.TMSFNCMaps"].LB + "      var pgu = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getLayer(pg.id);" + pas["WEBLib.TMSFNCMaps"].LB + "      if (pgu){" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setLayoutProperty(pgu.id, 'visibility', (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Visible"] ? \'visible\' : \'none\'));' + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setPaintProperty(pgu.id, 'fill-color', " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["FillColor"]);' + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setPaintProperty(pgu.id, 'fill-opacity', " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["FillOpacity"]);' + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getSource(pgu.id).setData(dpg);" + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    if (pl) {" + pas["WEBLib.TMSFNCMaps"].LB + "      var plu = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getLayer(pl.id);" + pas["WEBLib.TMSFNCMaps"].LB + "      if (plu){" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setLayoutProperty(plu.id, 'visibility', (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Visible"] ? \'visible\' : \'none\'));' + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setPaintProperty(plu.id, 'line-color', " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeColor"]);' + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setPaintProperty(plu.id, 'line-opacity', " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeOpacity"]);' + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setPaintProperty(plu.id, 'line-width', " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeWidth"]);' + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getSource(plu.id).setData(dpl);" + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + " = " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]';
        return Result;
      };
      this.GetDeletePolyElement = function () {
        var Result = "";
        Result = "  var pgu = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getLayer(" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ' + "_polygon");' + pas["WEBLib.TMSFNCMaps"].LB + "  if (pgu){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".removeLayer(" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ' + "_polygon");' + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  var plu = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getLayer(" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ' + "_polyline");' + pas["WEBLib.TMSFNCMaps"].LB + "  if (plu){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".removeLayer(" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ' + "_polyline");' + pas["WEBLib.TMSFNCMaps"].LB + "  }";
        return Result;
      };
      this.GetZoomToBounds = function () {
        var Result = "";
        Result = "  var sw = [" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["SouthWest"]["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["SouthWest"]["Latitude"]];' + pas["WEBLib.TMSFNCMaps"].LB + "  var ne = [" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["NorthEast"]["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["NorthEast"]["Latitude"]];' + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".fitBounds([sw, ne], {duration: 0});";
        return Result;
      };
      this.GetGetBounds = function () {
        var Result = "";
        Result = "  var loc = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getBounds();" + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["NorthEast"]["Latitude"] = loc.getNorthEast().lat;' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["NorthEast"]["Longitude"] = loc.getNorthEast().lng;' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["SouthWest"]["Latitude"] = loc.getSouthWest().lat;' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["SouthWest"]["Longitude"] = loc.getSouthWest().lng;';
        return Result;
      };
      this.GetSetCenterCoordinate = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".flyTo({duration: 0, center: [" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"],' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"]]});';
        return Result;
      };
      this.GetGetCenterCoordinate = function () {
        var Result = "";
        Result = "  var loc = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getCenter();" + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Latitude"] = loc.lat;' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Longitude"] = loc.lng;';
        return Result;
      };
      this.GetGetZoomLevel = function () {
        var Result = "";
        Result = "  var z = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getZoom();";
        return Result;
      };
      this.GetSetZoomLevel = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setZoom(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + ");";
        return Result;
      };
      this.GetLatLonToXY = function () {
        var Result = "";
        Result = "  var coordinate = [" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"]];' + pas["WEBLib.TMSFNCMaps"].LB + "  var point = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".project(coordinate);" + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["X"] = parseFloat(point.x);' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Y"] = parseFloat(point.y);';
        return Result;
      };
      this.GetXYToLatLon = function () {
        var Result = "";
        Result = "  var point = [" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["X"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Y"]];' + pas["WEBLib.TMSFNCMaps"].LB + "  var coordinate = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".unproject(point);" + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Latitude"] = parseFloat(coordinate.lat);' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Longitude"] = parseFloat(coordinate.lng);';
        return Result;
      };
      this.GetUpdateOptions = function () {
        var Result = "";
        Result = Result + "  " + $impl.MAPCONTROLARRAYVAR + ".forEach(removeElement);" + pas["WEBLib.TMSFNCMaps"].LB + "  function removeElement(value){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".removeControl(value);" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.MAPCONTROLARRAYVAR + " = [];" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
        Result = Result + "  if (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ShowZoomControl"]){' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addControl(" + $impl.MAPZOOMCONTROLVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "    " + $impl.MAPCONTROLARRAYVAR + ".push(" + $impl.MAPZOOMCONTROLVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
        Result = Result + "  if (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ZoomOnDblClick"]){' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".doubleClickZoom.enable();" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  else{" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".doubleClickZoom.disable();" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
        Result = Result + "  if (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ZoomOnWheelScroll"]){' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".scrollZoom.enable();" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  else{" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".scrollZoom.disable();" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
        Result = Result + "  if (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Panning"]){' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".dragPan.enable();" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  else{" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".dragPan.disable();" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
        Result = Result + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setLayoutProperty('country-label', 'text-field', ['get','name_' + " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Locale"].slice(0, ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Locale"].indexOf(\'-\')) + \'\']);';
        return Result;
      };
      this.GetGlobalVariables = function () {
        var Result = "";
        Result = "var activeElement = null;" + pas["WEBLib.TMSFNCMaps"].LB + "var " + $impl.MAPZOOMCONTROLVAR + ";" + pas["WEBLib.TMSFNCMaps"].LB + "var " + $impl.MAPCONTROLARRAYVAR + " = [];" + pas["WEBLib.TMSFNCMaps"].LB + "var mouseLatLng = {'Latitude': 0, 'Longitude': 0};" + pas["WEBLib.TMSFNCMaps"].LB + "function parseEvent(event, eventname, id = ''){" + pas["WEBLib.TMSFNCMaps"].LB + "  var loc = {'Latitude': 0, 'Longitude': 0};" + pas["WEBLib.TMSFNCMaps"].LB + "  var x = 0.0;" + pas["WEBLib.TMSFNCMaps"].LB + "  var y = 0.0;" + pas["WEBLib.TMSFNCMaps"].LB + '  if ((eventname == "MapMoveStart") || (eventname == "MapMoveEnd")){ ' + "    var ptcenter = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getCenter();" + pas["WEBLib.TMSFNCMaps"].LB + "    var lat = ptcenter.lat;" + pas["WEBLib.TMSFNCMaps"].LB + "    var lng = ptcenter.lng;" + pas["WEBLib.TMSFNCMaps"].LB + "  loc = {'Latitude': lat, 'Longitude': lng};" + pas["WEBLib.TMSFNCMaps"].LB + "  } else if (event) {" + pas["WEBLib.TMSFNCMaps"].LB + "    if (event.clientX && event.clientY){" + pas["WEBLib.TMSFNCMaps"].LB + "      x = event.clientX;" + pas["WEBLib.TMSFNCMaps"].LB + "      y = event.clientY;" + pas["WEBLib.TMSFNCMaps"].LB + "      loc = mouseLatLng;" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    else{" + pas["WEBLib.TMSFNCMaps"].LB + "      if (event.lngLat){" + pas["WEBLib.TMSFNCMaps"].LB + "        loc = {'Latitude': event.lngLat.lat, 'Longitude': event.lngLat.lng};" + pas["WEBLib.TMSFNCMaps"].LB + "        mouseLatLng = loc;" + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "      if (event.point){" + pas["WEBLib.TMSFNCMaps"].LB + "        x = event.point.x;" + pas["WEBLib.TMSFNCMaps"].LB + "        y = event.point.y;" + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  var r = {'Coordinate': loc, 'X': x, 'Y': y, 'ID': id, 'EventName': eventname};" + pas["WEBLib.TMSFNCMaps"].LB + "  return r;" + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "function MapMoveStart(event){" + pas["WEBLib.TMSFNCMaps"].LB + "  if (activeElement){" + pas["WEBLib.TMSFNCMaps"].LB + "    activeElement = null;" + pas["WEBLib.TMSFNCMaps"].LB + "    return;" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMoveStart"));' + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "function MapMoveEnd(event){" + pas["WEBLib.TMSFNCMaps"].LB + "  if (activeElement){" + pas["WEBLib.TMSFNCMaps"].LB + "    activeElement = null;" + pas["WEBLib.TMSFNCMaps"].LB + "    return;" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMoveEnd"));' + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "function MapClick(event){" + pas["WEBLib.TMSFNCMaps"].LB + "  if (activeElement){" + pas["WEBLib.TMSFNCMaps"].LB + "    activeElement = null;" + pas["WEBLib.TMSFNCMaps"].LB + "    return;" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapClick"));' + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "function MapDblClick(event){" + pas["WEBLib.TMSFNCMaps"].LB + "  if (activeElement){" + pas["WEBLib.TMSFNCMaps"].LB + "    activeElement = null;" + pas["WEBLib.TMSFNCMaps"].LB + "    return;" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapDblClick"));' + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "function MapMouseDown(event){" + pas["WEBLib.TMSFNCMaps"].LB + "  if (activeElement){" + pas["WEBLib.TMSFNCMaps"].LB + "    activeElement = null;" + pas["WEBLib.TMSFNCMaps"].LB + "    return;" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseDown"));' + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "function MapMouseUp(event){" + pas["WEBLib.TMSFNCMaps"].LB + "  if (activeElement){" + pas["WEBLib.TMSFNCMaps"].LB + "    activeElement = null;" + pas["WEBLib.TMSFNCMaps"].LB + "    return;" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseUp"));' + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "function MapMouseLeave(event){" + pas["WEBLib.TMSFNCMaps"].LB + "  if (activeElement){" + pas["WEBLib.TMSFNCMaps"].LB + "    activeElement = null;" + pas["WEBLib.TMSFNCMaps"].LB + "    return;" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseLeave"));' + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "function MapMouseEnter(event){" + pas["WEBLib.TMSFNCMaps"].LB + "  if (activeElement){" + pas["WEBLib.TMSFNCMaps"].LB + "    activeElement = null;" + pas["WEBLib.TMSFNCMaps"].LB + "    return;" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMousEnter"));' + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "function MapMouseMove(event){" + pas["WEBLib.TMSFNCMaps"].LB + "  if (activeElement){" + pas["WEBLib.TMSFNCMaps"].LB + "    activeElement = null;" + pas["WEBLib.TMSFNCMaps"].LB + "    return;" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseMove"));' + pas["WEBLib.TMSFNCMaps"].LB + "}";
        return Result;
      };
      this.GetAddCoordinateToArray = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].COORDINATEARRAYVAR + ".push([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"]]);';
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
    $impl.MAPBOXAPIURL = "https://api.tiles.mapbox.com/mapbox-gl-js/";
    $impl.MAPSERVICEVAR = "window.mapboxgl";
    $impl.MAPZOOMCONTROLVAR = "mapZoomControl";
    $impl.MAPCONTROLARRAYVAR = "mapControls";
  };
},["Classes","Math","DateUtils","Types","SysUtils","WEBLib.TMSFNCMaps","WEBLib.TMSFNCUtils","WEBLib.TMSFNCTypes","WEBLib.TMSFNCMapsCommonTypes","contnrs","Web"]);
//# sourceMappingURL=WEBLib.TMSFNCMaps.MapBox.js.map
