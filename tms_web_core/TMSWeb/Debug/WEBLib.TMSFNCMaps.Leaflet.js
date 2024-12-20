rtl.module("WEBLib.TMSFNCMaps.Leaflet",["System"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.LeafletAPIVERSION = "1.9.4";
  this.LeafletAPIURL = "https://unpkg.com/leaflet@";
  this.MAPSERVICEVAR = "window.L";
  this.MAPSOURCEVAR = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
  this.MAPBASELAYERVAR = "baseLayer";
  this.MAPATTRIBUTIONPREFIX = "<a href='https://www.leafletjs.com' target='_blank'>Leaflet</a>";
  this.MAPATTRIBUTIONTEXT = "&copy; <a href='https://www.openstreetmap.org/copyright' target='_blank'>OpenStreetMap</a>";
  this.CLUSTERVAR = "cluster";
  this.CLUSTERARRAYVAR = "clusterarray";
  this.GETCLUSTERARRAYVAR = "get" + this.CLUSTERARRAYVAR + "()";
  this.ADDORUPDATECLUSTERFUNCTION = "addOrUpdateCluster";
  this.DELETECLUSTERFUNCTION = "deleteCluster";
  this.RegisterLeafletService = function () {
    if (!pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceLeaflet),{p: $impl, get: function () {
        return this.p.MapsService;
      }, set: function (v) {
        rtl.setIntfP(this.p,"MapsService",v);
      }})) {
      rtl.setIntfP($impl,"MapsService",rtl.queryIntfT($impl.TTMSFNCMapsLeafletService.$create("Create$1"),pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceLeaflet),true);
      pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsPlatformServices.Current().AddPlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceLeaflet),$impl.MapsService);
    };
  };
  this.UnRegisterLeafletService = function () {
    pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsPlatformServices.Current().RemovePlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceLeaflet));
  };
  $mod.$implcode = function () {
    $mod.$rtti.$Class("TTMSFNCMapsLeafletService");
    rtl.createClass($impl,"TTMSFNCMapsLeafletFactoryService",pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsFactoryService,function () {
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceLeaflet);
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    rtl.createClass($impl,"TTMSFNCMapsLeafletService",$impl.TTMSFNCMapsLeafletFactoryService,function () {
      this.DoCreateMaps = function () {
        var Result = null;
        var $ok = false;
        try {
          Result = rtl.setIntfL(Result,rtl.queryIntfT($impl.TTMSFNCMapsLeaflet.$create("Create$1"),pas["WEBLib.TMSFNCMaps"].ITMSFNCCustomMaps),true);
          $ok = true;
        } finally {
          if (!$ok) rtl._Release(Result);
        };
        return Result;
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceLeaflet);
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $mod.$rtti.$Class("TTMSFNCMapsLeaflet");
    rtl.createClass($impl,"TTMSFNCMapsLeaflet",pas["WEBLib.TMSFNCMaps"].TTMSFNCCustomMapsInterfacedObject,function () {
      this.GetHeadLinks = function (AList) {
        AList.Add$1(pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsLink.$create("CreateLink",[$mod.LeafletAPIURL + $mod.LeafletAPIVERSION + "/dist/leaflet.css","text/css","stylesheet"]));
        AList.Add$1(pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsLink.$create("CreateScript",[$mod.LeafletAPIURL + $mod.LeafletAPIVERSION + "/dist/leaflet.js","text/javascript","","",false,false]));
      };
      this.RemoveScripts = function () {
        if (window.L){
          window.L = undefined;
        };
      };
      this.GetResetMap = function () {
        var Result = "";
        Result = "";
        return Result;
      };
      this.GetShowPopup = function () {
        var Result = "";
        Result = "  var lat = [" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"]];' + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].POPUPVAR + " = " + $mod.MAPSERVICEVAR + ".popup(lat, {" + pas["WEBLib.TMSFNCMaps"].LB + "    offset: " + $mod.MAPSERVICEVAR + ".point(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["OffsetX"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["OffsetY"]),' + pas["WEBLib.TMSFNCMaps"].LB + "    content: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Text"],' + pas["WEBLib.TMSFNCMaps"].LB + "    autoPan: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["PanMap"],' + pas["WEBLib.TMSFNCMaps"].LB + "  });" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].POPUPVAR + ".openOn(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ");";
        return Result;
      };
      this.GetClosePopup = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".closePopup();" + pas["WEBLib.TMSFNCMaps"].LB;
        return Result;
      };
      this.GetHeadStyle = function () {
        var Result = "";
        Result = ".tms_leaflet_iconImage{" + pas["WEBLib.TMSFNCMaps"].LB + "  position: relative!important;" + pas["WEBLib.TMSFNCMaps"].LB + "  margin-top: -100%;" + pas["WEBLib.TMSFNCMaps"].LB + "  margin-left: -50%;" + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB;
        return Result;
      };
      this.GetDelayLoadEvent = function () {
        var Result = "";
        Result = "";
        return Result;
      };
      this.GetMapsServiceCheck = function () {
        var Result = "";
        Result = "!" + $mod.MAPSERVICEVAR;
        return Result;
      };
      this.GetIdentifier = function () {
        var Result = "";
        Result = "Leaflet";
        return Result;
      };
      this.GetInitializeMap = function () {
        var Result = "";
        var $ir = rtl.createIntfRefs();
        try {
          Result = Result + "  " + $mod.MAPBASELAYERVAR + " = " + $mod.MAPSERVICEVAR + '.tileLayer("' + $mod.MAPSOURCEVAR + '", {' + pas["WEBLib.TMSFNCMaps"].LB + "    maxZoom: 19," + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + "";
          Result = Result + " " + pas["WEBLib.TMSFNCMaps"].MAPVAR + " = " + $mod.MAPSERVICEVAR + '.map("' + pas["WEBLib.TMSFNCMaps"].MAPID + '", {' + pas["WEBLib.TMSFNCMaps"].LB + "    center: [" + $ir.ref(1,this.GetMapsProperties()).GetDefaultLatitude() + ", " + $ir.ref(2,this.GetMapsProperties()).GetDefaultLongitude() + "]," + pas["WEBLib.TMSFNCMaps"].LB + "    zoom: " + $ir.ref(3,this.GetMapsProperties()).GetDefaultZoomLevel() + "," + pas["WEBLib.TMSFNCMaps"].LB + "    dragging: " + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr($ir.ref(4,this.GetMapsProperties()).GetPanning(),true)) + "," + pas["WEBLib.TMSFNCMaps"].LB + "    scrollWheelZoom: " + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr($ir.ref(5,this.GetMapsProperties()).GetZoomOnWheelScroll(),true)) + "," + pas["WEBLib.TMSFNCMaps"].LB + "    doubleClickZoom: " + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr($ir.ref(6,this.GetMapsProperties()).GetZoomOnDblClick(),true)) + "," + pas["WEBLib.TMSFNCMaps"].LB + "    zoomControl: " + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr($ir.ref(7,this.GetMapsProperties()).GetShowZoomControl(),true)) + "," + pas["WEBLib.TMSFNCMaps"].LB + "    layers: [" + $mod.MAPBASELAYERVAR + "]," + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
          Result = Result + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".removeControl(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".attributionControl);" + pas["WEBLib.TMSFNCMaps"].LB + "    var attr = " + $mod.MAPSERVICEVAR + ".control.attribution();" + pas["WEBLib.TMSFNCMaps"].LB + '    if ("' + $mod.MAPATTRIBUTIONPREFIX + '" != "") {' + pas["WEBLib.TMSFNCMaps"].LB + '      attr.setPrefix("' + $mod.MAPATTRIBUTIONPREFIX + '");' + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + '    if ("' + $mod.MAPATTRIBUTIONTEXT + '" != "") {' + pas["WEBLib.TMSFNCMaps"].LB + '      attr.addAttribution("' + $mod.MAPATTRIBUTIONTEXT + '");' + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    attr.addTo(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "";
        } finally {
          $ir.free();
        };
        return Result;
      };
      this.GetInitializeEvents = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('movestart', MapMoveStart);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('moveend', MapMoveEnd);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('zoomend', MapZoomChanged);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('click', MapClick);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('dblclick', MapDblClick);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('mouseup', MapMouseUp);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('mousedown', MapMouseDown);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".on('mousemove', MapMouseMove);" + pas["WEBLib.TMSFNCMaps"].LB;
        return Result;
      };
      this.GetAddOrUpdateMarker = function () {
        var Result = "";
        Result = "  var pos = " + $mod.MAPSERVICEVAR + ".latLng([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"]]);' + pas["WEBLib.TMSFNCMaps"].LB + "  var ic = null;" + pas["WEBLib.TMSFNCMaps"].LB + "  if (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["IconURL"] != ""){' + pas["WEBLib.TMSFNCMaps"].LB + "    ic = " + $mod.MAPSERVICEVAR + ".icon({" + pas["WEBLib.TMSFNCMaps"].LB + "      iconUrl: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["IconURL"],' + pas["WEBLib.TMSFNCMaps"].LB + '      className: "tms_leaflet_iconImage",' + pas["WEBLib.TMSFNCMaps"].LB + "    });" + pas["WEBLib.TMSFNCMaps"].LB + "    var options = {" + pas["WEBLib.TMSFNCMaps"].LB + "        icon: ic," + pas["WEBLib.TMSFNCMaps"].LB + "        title: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Title"],' + pas["WEBLib.TMSFNCMaps"].LB + "        alt: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Title"],' + pas["WEBLib.TMSFNCMaps"].LB + "        draggable: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Draggable"],' + pas["WEBLib.TMSFNCMaps"].LB + "        bubblingMouseEvents: false" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "  } else {" + pas["WEBLib.TMSFNCMaps"].LB + "    var options = {" + pas["WEBLib.TMSFNCMaps"].LB + "        title: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Title"],' + pas["WEBLib.TMSFNCMaps"].LB + "        alt: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Title"],' + pas["WEBLib.TMSFNCMaps"].LB + "        draggable: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Draggable"],' + pas["WEBLib.TMSFNCMaps"].LB + "        bubblingMouseEvents: false" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  if (" + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ")" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".remove();" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + " = " + $mod.MAPSERVICEVAR + ".marker(pos, options);" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".on('click', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".on('contextmenu', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerRightClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".on('dblclick', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerDblClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".on('mouseup', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerMouseUp", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".on('mousedown', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerMouseDown", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".on('mouseout', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerMouseLeave", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".on('mouseover', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerMouseEnter", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".on('dragend', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerDragEnd", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  if (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Visible"]) {' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".addTo(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "  } else { " + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".remove();" + pas["WEBLib.TMSFNCMaps"].LB + "  }";
        return Result;
      };
      this.GetDeleteMarker = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".removeLayer(" + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB;
        return Result;
      };
      this.GetAddOrUpdatePolyElement = function () {
        var Result = "";
        Result = "  var c = " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["$type"];' + pas["WEBLib.TMSFNCMaps"].LB + "  var co = [];" + pas["WEBLib.TMSFNCMaps"].LB + "  switch(c){" + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsRectangle":' + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsLeafletRectangle":' + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsCircle":' + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCLeafletCircle":' + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsPolygon":' + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCLeafletPolygon":' + pas["WEBLib.TMSFNCMaps"].LB + "      var options = {" + pas["WEBLib.TMSFNCMaps"].LB + "        color: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeColor"],' + pas["WEBLib.TMSFNCMaps"].LB + "        weight: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeWidth"],' + pas["WEBLib.TMSFNCMaps"].LB + "        opacity: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeOpacity"],' + pas["WEBLib.TMSFNCMaps"].LB + "        fill: true," + pas["WEBLib.TMSFNCMaps"].LB + "        fillColor: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["FillColor"],' + pas["WEBLib.TMSFNCMaps"].LB + "        fillOpacity: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["FillOpacity"],' + pas["WEBLib.TMSFNCMaps"].LB + "        radius: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Radius"],' + pas["WEBLib.TMSFNCMaps"].LB + "        bubblingMouseEvents: false" + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "    break;" + pas["WEBLib.TMSFNCMaps"].LB + "    default:" + pas["WEBLib.TMSFNCMaps"].LB + "      var options = {" + pas["WEBLib.TMSFNCMaps"].LB + "        color: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeColor"],' + pas["WEBLib.TMSFNCMaps"].LB + "        weight: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeWidth"],' + pas["WEBLib.TMSFNCMaps"].LB + "        opacity: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeOpacity"],' + pas["WEBLib.TMSFNCMaps"].LB + "        bubblingMouseEvents: false" + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "    break;" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  switch(c){" + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsRectangle":' + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsLeafletRectangle":' + pas["WEBLib.TMSFNCMaps"].LB + "      co.push([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Longitude"]]);' + pas["WEBLib.TMSFNCMaps"].LB + "      co.push([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Longitude"]]);' + pas["WEBLib.TMSFNCMaps"].LB + "      co.push([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Longitude"]]);' + pas["WEBLib.TMSFNCMaps"].LB + "      co.push([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Longitude"]]);' + pas["WEBLib.TMSFNCMaps"].LB + "      co.push([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Longitude"]]);' + pas["WEBLib.TMSFNCMaps"].LB + "    break;" + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsCircle":' + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCLeafletCircle":' + pas["WEBLib.TMSFNCMaps"].LB + "      co = [" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Center"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Center"]["Longitude"]];' + pas["WEBLib.TMSFNCMaps"].LB + "    break;" + pas["WEBLib.TMSFNCMaps"].LB + "    default:" + pas["WEBLib.TMSFNCMaps"].LB + "      var pthArr = [];" + pas["WEBLib.TMSFNCMaps"].LB + "      pthArr.push(" + pas["WEBLib.TMSFNCMaps"].COORDINATEARRAYVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "      for (var key in " + pas["WEBLib.TMSFNCMaps"].HOLEARRAYVAR + "){" + pas["WEBLib.TMSFNCMaps"].LB + "        pthArr.push(" + pas["WEBLib.TMSFNCMaps"].HOLEARRAYVAR + "[key]);" + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "      co = pthArr;" + pas["WEBLib.TMSFNCMaps"].LB + "    break;" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  if (" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ")" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".remove();" + pas["WEBLib.TMSFNCMaps"].LB + "    switch(c){" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsRectangle":' + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsLeafletRectangle":' + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + " = " + $mod.MAPSERVICEVAR + ".rectangle(co, options).addTo(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsCircle":' + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCLeafletCircle":' + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + " = " + $mod.MAPSERVICEVAR + ".circle(co, options).addTo(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsPolygon":' + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCLeafletPolygon":' + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + " = " + $mod.MAPSERVICEVAR + ".polygon(co, options).addTo(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + "      default:" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + " = " + $mod.MAPSERVICEVAR + ".polyline(co, options).addTo(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".on('click', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".on('rightclick', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementRightClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".on('dblclick', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementDblClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".on('mouseup', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseUp", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".on('mousedown', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseDown", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".on('mouseout', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseLeave", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".on('mouseover', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseEnter", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  if (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Visible"]) {' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".addTo(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "  } else { " + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".remove();" + pas["WEBLib.TMSFNCMaps"].LB + "  }";
        return Result;
      };
      this.GetDeletePolyElement = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".removeLayer(" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB;
        return Result;
      };
      this.GetZoomToBounds = function () {
        var Result = "";
        Result = pas["WEBLib.TMSFNCMaps"].MAPVAR + ".fitBounds([[" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["SouthWest"]["Latitude"],' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["SouthWest"]["Longitude"]], ' + "[" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["NorthEast"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["NorthEast"]["Longitude"]]])';
        return Result;
      };
      this.GetGetBounds = function () {
        var Result = "";
        Result = "  var loc = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getBounds();" + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["NorthEast"]["Latitude"] = loc._northEast.lat;' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["NorthEast"]["Longitude"] = loc._northEast.lng;' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["SouthWest"]["Latitude"] = loc._southWest.lat;' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["SouthWest"]["Longitude"] = loc._southWest.lng;';
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
      this.GetLatLonToXY = function () {
        var Result = "";
        Result = "  var pixel = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".latLngToContainerPoint([parseFloat(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"]), parseFloat(' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"])]);' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["X"] = parseFloat(pixel.x);' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Y"] = parseFloat(pixel.y);' + pas["WEBLib.TMSFNCMaps"].LB + "";
        return Result;
      };
      this.GetXYToLatLon = function () {
        var Result = "";
        Result = "  var co = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".containerPointToLatLng([parseInt(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["X"]), parseInt(' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Y"])]);' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Latitude"] = parseFloat(co.lat);' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Longitude"] = parseFloat(co.lng);' + pas["WEBLib.TMSFNCMaps"].LB + "";
        return Result;
      };
      this.GetSetCenterCoordinate = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setView([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"]]);';
        return Result;
      };
      this.GetSetZoomLevel = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setZoom(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + ");";
        return Result;
      };
      this.GetUpdateOptions = function () {
        var Result = "";
        Result = Result + "  if (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ShowZoomControl"]){' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addControl(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".zoomControl);" + pas["WEBLib.TMSFNCMaps"].LB + "  } else { " + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".removeControl(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".zoomControl);" + pas["WEBLib.TMSFNCMaps"].LB + "  }";
        Result = Result + "  if (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ZoomOnWheelScroll"]){' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".scrollWheelZoom.enable();" + pas["WEBLib.TMSFNCMaps"].LB + "  } else { " + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".scrollWheelZoom.disable();" + pas["WEBLib.TMSFNCMaps"].LB + "  }";
        Result = Result + "  if (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ZoomOnDblClick"]){' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".doubleClickZoom.enable();" + pas["WEBLib.TMSFNCMaps"].LB + "  } else { " + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".doubleClickZoom.disable();" + pas["WEBLib.TMSFNCMaps"].LB + "  }";
        Result = Result + "  if (" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Panning"]){' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".dragging.enable();" + pas["WEBLib.TMSFNCMaps"].LB + "  } else { " + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".dragging.disable();" + pas["WEBLib.TMSFNCMaps"].LB + "  }";
        return Result;
      };
      this.GetGlobalVariables = function () {
        var Result = "";
        Result = "var activePolyElement = null;" + pas["WEBLib.TMSFNCMaps"].LB + "var activeMarker = null;" + pas["WEBLib.TMSFNCMaps"].LB + "var " + $mod.MAPBASELAYERVAR + ";" + pas["WEBLib.TMSFNCMaps"].LB + "var " + $impl.MAPZOOMCONTROLVAR + ";" + pas["WEBLib.TMSFNCMaps"].LB + "var " + $impl.MAPCONTROLARRAYVAR + " = [];" + "var oldZoom;" + pas["WEBLib.TMSFNCMaps"].LB + "var hoverFeature;" + pas["WEBLib.TMSFNCMaps"].LB + "var mouseLatLng = {'Latitude': 0, 'Longitude': 0};" + pas["WEBLib.TMSFNCMaps"].LB + "function parseEvent(event, eventname, id = ''){" + pas["WEBLib.TMSFNCMaps"].LB + "  var loc = {'Latitude': 0, 'Longitude': 0};" + pas["WEBLib.TMSFNCMaps"].LB + "  var x = 0.0;" + pas["WEBLib.TMSFNCMaps"].LB + "  var y = 0.0;" + pas["WEBLib.TMSFNCMaps"].LB + '  if ((eventname == "MapMoveStart") || (eventname == "MapMoveEnd")){ ' + "    centerpt = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getCenter();" + pas["WEBLib.TMSFNCMaps"].LB + "    loc = {'Latitude': centerpt.lat, 'Longitude': centerpt.lng};" + pas["WEBLib.TMSFNCMaps"].LB + "  } else if (event) {" + pas["WEBLib.TMSFNCMaps"].LB + "    if (event.latlng) {" + pas["WEBLib.TMSFNCMaps"].LB + "      loc = {'Latitude': event.latlng.lat, 'Longitude': event.latlng.lng};" + pas["WEBLib.TMSFNCMaps"].LB + "      mouseLatLng = loc;" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    if (event.layerPoint) {" + pas["WEBLib.TMSFNCMaps"].LB + "      x = event.layerPoint.x;" + pas["WEBLib.TMSFNCMaps"].LB + "      y = event.layerPoint.y;" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  var r = {'Coordinate': loc, 'X': x, 'Y': y, 'ID': id, 'EventName': eventname};" + pas["WEBLib.TMSFNCMaps"].LB + "  return r;" + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "function MapMoveStart(event){" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMoveStart"));' + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "function MapMoveEnd(event){" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMoveEnd"));' + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "function MapClick(event){" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapClick"));' + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "function MapDblClick(event){" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapDblClick"));' + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "function MapMouseDown(event){" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseDown"));' + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "function MapMouseUp(event){" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseUp"));' + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "function MapMouseLeave(event){" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseLeave"));' + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "function MapMouseEnter(event){" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMousEnter"));' + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "function MapMouseMove(event){" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseMove"));' + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "function MapZoomChanged(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    if (" + pas["WEBLib.TMSFNCMaps"].MAPVAR + "){" + pas["WEBLib.TMSFNCMaps"].LB + "      if (!oldZoom){" + pas["WEBLib.TMSFNCMaps"].LB + "        oldZoom = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getZoom();" + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "      var newZoom = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getZoom();" + pas["WEBLib.TMSFNCMaps"].LB + "      if(newZoom != oldZoom){" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(null, "ZoomChanged"));' + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "      oldZoom = newZoom;" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
        return Result;
      };
      this.GetAddCoordinateToArray = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].COORDINATEARRAYVAR + ".push([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"],' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"]]);';
        return Result;
      };
      this.GetAddHoleToArray = function () {
        var Result = "";
        Result = "var o = " + pas["WEBLib.TMSFNCMaps"].HOLEARRAYVAR + "[" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + "[0]];" + pas["WEBLib.TMSFNCMaps"].LB + "if (o){" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].HOLEARRAYVAR + "[" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + "[0]].push([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '[1]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '[1]["Longitude"]]);' + pas["WEBLib.TMSFNCMaps"].LB + "}else{" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].HOLEARRAYVAR + "[" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + "[0]] = [[" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '[1]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '[1]["Longitude"]]];' + pas["WEBLib.TMSFNCMaps"].LB + "}";
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
        Result = true;
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
    $impl.MAPZOOMCONTROLVAR = "mapZoomControl";
    $impl.MAPCONTROLARRAYVAR = "mapControls";
    $impl.MAPDOUBLECLICK = "mapDoubleClick";
    $impl.MAPWHEELZOOM = "mapWheelZoom";
    $impl.MAPPANNING = "mapPanning";
  };
},["Classes","Math","DateUtils","Types","SysUtils","WEBLib.TMSFNCMaps","WEBLib.TMSFNCUtils","WEBLib.TMSFNCTypes","WEBLib.TMSFNCMapsCommonTypes","contnrs","Web"]);
//# sourceMappingURL=WEBLib.TMSFNCMaps.Leaflet.js.map
