rtl.module("WEBLib.TMSFNCMaps.BingMaps",["System"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.RegisterBingMapsService = function () {
    if (!pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceBingMaps),{p: $impl, get: function () {
        return this.p.MapsService;
      }, set: function (v) {
        rtl.setIntfP(this.p,"MapsService",v);
      }})) {
      rtl.setIntfP($impl,"MapsService",rtl.queryIntfT($impl.TTMSFNCMapsBingMapsService.$create("Create$1"),pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceBingMaps),true);
      pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsPlatformServices.Current().AddPlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceBingMaps),$impl.MapsService);
    };
  };
  this.UnRegisterBingMapsService = function () {
    pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsPlatformServices.Current().RemovePlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceBingMaps));
  };
  $mod.$implcode = function () {
    $mod.$rtti.$Class("TTMSFNCMapsBingMapsService");
    rtl.createClass($impl,"TTMSFNCMapsBingMapsFactoryService",pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsFactoryService,function () {
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceBingMaps);
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    rtl.createClass($impl,"TTMSFNCMapsBingMapsService",$impl.TTMSFNCMapsBingMapsFactoryService,function () {
      this.DoCreateMaps = function () {
        var Result = null;
        var $ok = false;
        try {
          Result = rtl.setIntfL(Result,rtl.queryIntfT($impl.TTMSFNCMapsBingMaps.$create("Create$1"),pas["WEBLib.TMSFNCMaps"].ITMSFNCCustomMaps),true);
          $ok = true;
        } finally {
          if (!$ok) rtl._Release(Result);
        };
        return Result;
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceBingMaps);
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $mod.$rtti.$Class("TTMSFNCMapsBingMaps");
    rtl.createClass($impl,"TTMSFNCMapsBingMaps",pas["WEBLib.TMSFNCMaps"].TTMSFNCCustomMapsInterfacedObject,function () {
      this.GetHeadLinks = function (AList) {
        var $ir = rtl.createIntfRefs();
        try {
          AList.Add$1(pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsLink.$create("CreateScript",[$impl.BINGMAPSAPIURL + "mapcontrol?callback=MapCallBack&setMkt=" + $ir.ref(1,this.GetMapsProperties()).GetLocale(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsLocaleMode.mlmDefault) + "&setLang=" + $ir.ref(2,this.GetMapsProperties()).GetLocale(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsLocaleMode.mlmCountry) + "&key=" + $ir.ref(3,this.GetMapsProperties()).GetAPIKey(),"text/javascript","","",false,false]));
        } finally {
          $ir.free();
        };
      };
      this.RemoveScripts = function () {
        let keywords = ['www.bing.com/rb/3A', 'www.bing.com/rp'];
        
            if (window.Microsoft){
              window.Microsoft.Maps = undefined;
            }
        
            let scripts = document.querySelectorAll('script,link');
            for (let i = scripts.length - 1; i >= 0; i--) {
                let scriptSource = scripts[i].getAttribute('src');
                if (!scriptSource){
                  scriptSource = scripts[i].getAttribute('href');
                }
                if (scriptSource != null) {
                    if (keywords.filter(item => scriptSource.includes(item)).length) {
                        scripts[i].remove();
                        // scripts[i].parentNode.removeChild(scripts[i]);
                    }
                }
            };
      };
      this.GetResetMap = function () {
        var Result = "";
        Result = "";
        return Result;
      };
      this.GetShowPopup = function () {
        var Result = "";
        Result = '  var popupTemplate = \'<div class="customInfobox">{text}</div>\';' + pas["WEBLib.TMSFNCMaps"].LB + "  var loc = new " + $impl.MAPSERVICEVAR + ".Location(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"]);' + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].POPUPVAR + " = new " + $impl.MAPSERVICEVAR + ".Infobox(loc, {" + pas["WEBLib.TMSFNCMaps"].LB + "    showCloseButton: true," + pas["WEBLib.TMSFNCMaps"].LB + "    offset: new " + $impl.MAPSERVICEVAR + ".Point(-" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["OffsetX"], -' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["OffsetY"]),' + pas["WEBLib.TMSFNCMaps"].LB + "    maxHeight: 10000," + pas["WEBLib.TMSFNCMaps"].LB + "    maxWidth: 10000," + pas["WEBLib.TMSFNCMaps"].LB + "    description: popupTemplate.replace(/{text}/g, " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Text"])' + pas["WEBLib.TMSFNCMaps"].LB + "  });" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].POPUPVAR + ".setMap(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].POPUPVAR + ", 'click', handleClickInfoBox);" + pas["WEBLib.TMSFNCMaps"].LB + "  function handleClickInfoBox(e){" + pas["WEBLib.TMSFNCMaps"].LB + '      var isCloseAction = e.originalEvent.target.className == "infobox-close-img";' + pas["WEBLib.TMSFNCMaps"].LB + "      if(isCloseAction){" + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].POPUPVAR + ".setMap(null);" + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "    }";
        return Result;
      };
      this.GetClosePopup = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].POPUPVAR + ".setMap(null);";
        return Result;
      };
      this.GetHeadStyle = function () {
        var Result = "";
        Result = ".customInfobox {" + pas["WEBLib.TMSFNCMaps"].LB + "  background:white;" + pas["WEBLib.TMSFNCMaps"].LB + "  white-space:normal;" + pas["WEBLib.TMSFNCMaps"].LB + "  padding: 10px;" + pas["WEBLib.TMSFNCMaps"].LB + "}";
        return Result;
      };
      this.GetDelayLoadEvent = function () {
        var Result = "";
        Result = "  " + $impl.MAPSERVICEVAR + ".loadModule('Microsoft.Maps.SpatialMath', function () {";
        return Result;
      };
      this.GetMapsServiceCheck = function () {
        var Result = "";
        Result = "!(MapCallBackFlag == true) || !window.Microsoft || !" + $impl.MAPSERVICEVAR + " || !" + $impl.MAPSERVICEVAR + ".Map";
        return Result;
      };
      this.GetIdentifier = function () {
        var Result = "";
        Result = "Bing Maps";
        return Result;
      };
      this.GetInitializeMap = function () {
        var Result = "";
        var $ir = rtl.createIntfRefs();
        try {
          Result = "  " + $impl.DOUBLECLICKZOOM + " = " + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr($ir.ref(1,this.GetMapsProperties()).GetZoomOnDblClick(),true)) + ";" + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.SCROLLZOOM + " = " + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr($ir.ref(2,this.GetMapsProperties()).GetZoomOnWheelScroll(),true)) + ";" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + " = new " + $impl.MAPSERVICEVAR + '.Map("#' + pas["WEBLib.TMSFNCMaps"].MAPID + '", {' + pas["WEBLib.TMSFNCMaps"].LB + "    disableScrollWheelZoom: true," + pas["WEBLib.TMSFNCMaps"].LB + "    disablePanning: " + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr(!$ir.ref(3,this.GetMapsProperties()).GetPanning(),true)) + "," + pas["WEBLib.TMSFNCMaps"].LB + "    showZoomButtons: " + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr($ir.ref(4,this.GetMapsProperties()).GetShowZoomControl(),true)) + "," + pas["WEBLib.TMSFNCMaps"].LB + "    showMapTypeSelector: " + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr($ir.ref(5,this.GetMapsProperties()).GetShowMapTypeControl(),true)) + pas["WEBLib.TMSFNCMaps"].LB + "  });" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setView({" + pas["WEBLib.TMSFNCMaps"].LB + "    zoom: " + $ir.ref(6,this.GetMapsProperties()).GetDefaultZoomLevel() + "," + pas["WEBLib.TMSFNCMaps"].LB + "    center: new " + $impl.MAPSERVICEVAR + ".Location(" + $ir.ref(7,this.GetMapsProperties()).GetDefaultLatitude() + ", " + $ir.ref(8,this.GetMapsProperties()).GetDefaultLongitude() + ")" + pas["WEBLib.TMSFNCMaps"].LB + "  });";
        } finally {
          $ir.free();
        };
        return Result;
      };
      this.GetInitializeEvents = function () {
        var Result = "";
        Result = "  var oldZoom = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getZoom();" + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ",'viewchangeend', function(){" + pas["WEBLib.TMSFNCMaps"].LB + "    var newZoom = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getZoom();" + pas["WEBLib.TMSFNCMaps"].LB + "    if(newZoom != oldZoom){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(null, "ZoomChanged"));' + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    oldZoom = newZoom;" + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ", 'maptypechanged', function(){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(null, "MapTypeChanged"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ", 'viewchangestart', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMoveStart"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ", 'viewchangeend', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMoveEnd"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ", 'click', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapClick"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ", 'dblclick', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    if (!" + $impl.DOUBLECLICKZOOM + "){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setOptions({ disableZooming: true });" + pas["WEBLib.TMSFNCMaps"].LB + "      setTimeout(function () { return " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setOptions({ disableZooming: false}); });" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapDblClick"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  mouseUpId = " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ", 'mouseup', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseUp"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  mouseDownId = " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ", 'mousedown', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseDown"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ", 'mouseout', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseLeave"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ", 'mouseover', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseEnter"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ", 'mousemove', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseMove"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ", 'mousewheel', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    if (" + $impl.SCROLLZOOM + "){" + pas["WEBLib.TMSFNCMaps"].LB + "      var zoom = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getZoom();" + pas["WEBLib.TMSFNCMaps"].LB + "      if (event.wheelDelta > 0 || event.detail < 0) {" + pas["WEBLib.TMSFNCMaps"].LB + "        zoom++;" + pas["WEBLib.TMSFNCMaps"].LB + "      } else {" + pas["WEBLib.TMSFNCMaps"].LB + "        zoom--;" + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "      if (zoom <= 0) {" + pas["WEBLib.TMSFNCMaps"].LB + "        zoom = 1;" + pas["WEBLib.TMSFNCMaps"].LB + "      } else if (zoom >= 21) {" + pas["WEBLib.TMSFNCMaps"].LB + "        zoom = 21;" + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setView({ zoom: zoom });" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "  })";
        return Result;
      };
      this.GetAddOrUpdateMarker = function () {
        var Result = "";
        Result = "  var options = {" + pas["WEBLib.TMSFNCMaps"].LB + "    title: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Title"],' + pas["WEBLib.TMSFNCMaps"].LB + "    icon: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["IconURL"],' + pas["WEBLib.TMSFNCMaps"].LB + "    visible: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Visible"]' + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  var loc = new " + $impl.MAPSERVICEVAR + ".Location(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"])' + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  if (!" + pas["WEBLib.TMSFNCMaps"].MARKERVAR + "){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + " = new " + $impl.MAPSERVICEVAR + ".Pushpin(loc, options);" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".entities.push(" + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "    " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ", 'click', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ", 'dblclick', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerDblClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ", 'mouseup', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      activeElement = " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerMouseUp", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ", 'mousedown', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      activeElement = " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerMouseDown", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ", 'mouseout', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerMouseLeave", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ", 'mouseover', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerMouseEnter", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    if (mouseUpId != -1) {" + pas["WEBLib.TMSFNCMaps"].LB + "      " + $impl.MAPSERVICEVAR + ".Events.removeHandler(mouseUpId);" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    if (mouseDownId != -1) {" + pas["WEBLib.TMSFNCMaps"].LB + "      " + $impl.MAPSERVICEVAR + ".Events.removeHandler(mouseDownId);" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    mouseUpId = " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ", 'mouseup', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      if (activeElement){" + pas["WEBLib.TMSFNCMaps"].LB + "        activeElement = null; " + pas["WEBLib.TMSFNCMaps"].LB + "        return;" + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseUp"));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    mouseDownId = " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ", 'mousedown', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      if (activeElement){" + pas["WEBLib.TMSFNCMaps"].LB + "        activeElement = null; " + pas["WEBLib.TMSFNCMaps"].LB + "        return;" + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseDown"));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  }else{" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".setOptions(options);" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".setLocation(loc);" + pas["WEBLib.TMSFNCMaps"].LB + "  }";
        return Result;
      };
      this.GetDeleteMarker = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".entities.remove(" + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ")";
        return Result;
      };
      this.GetAddOrUpdatePolyElement = function () {
        var Result = "";
        Result = "  var c = " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["$type"];' + pas["WEBLib.TMSFNCMaps"].LB + "  var options;" + pas["WEBLib.TMSFNCMaps"].LB + "  var co = [];" + pas["WEBLib.TMSFNCMaps"].LB + "  switch(c){" + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsRectangle":' + pas["WEBLib.TMSFNCMaps"].LB + "      co.push(new " + $impl.MAPSERVICEVAR + ".Location(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Longitude"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      co.push(new " + $impl.MAPSERVICEVAR + ".Location(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Longitude"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      co.push(new " + $impl.MAPSERVICEVAR + ".Location(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Longitude"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      co.push(new " + $impl.MAPSERVICEVAR + ".Location(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Longitude"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      co.push(new " + $impl.MAPSERVICEVAR + ".Location(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Longitude"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    break;" + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsCircle":' + pas["WEBLib.TMSFNCMaps"].LB + "      if (" + $impl.MAPSERVICEVAR + ".SpatialMath){" + pas["WEBLib.TMSFNCMaps"].LB + "        co = " + $impl.MAPSERVICEVAR + ".SpatialMath.getRegularPolygon(new " + $impl.MAPSERVICEVAR + ".Location(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Center"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Center"]["Longitude"]), ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Radius"], 100);' + pas["WEBLib.TMSFNCMaps"].LB + "      }else{" + pas["WEBLib.TMSFNCMaps"].LB + "        co.push(new " + $impl.MAPSERVICEVAR + ".Location(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Center"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Center"]["Latitude"]));' + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "    break;" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  switch(c){" + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsPolyline":' + pas["WEBLib.TMSFNCMaps"].LB + "    options = {" + pas["WEBLib.TMSFNCMaps"].LB + "      visible: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Visible"],' + pas["WEBLib.TMSFNCMaps"].LB + "      strokeColor: toRGBA(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeColor"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeOpacity"]),' + pas["WEBLib.TMSFNCMaps"].LB + "      strokeThickness: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeWidth"]' + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    break;" + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsPolygon":' + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCBingMapsPolygon":' + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsCircle":' + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsRectangle":' + pas["WEBLib.TMSFNCMaps"].LB + "    options = {" + pas["WEBLib.TMSFNCMaps"].LB + "      visible: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Visible"],' + pas["WEBLib.TMSFNCMaps"].LB + "      fillColor: toRGBA(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["FillColor"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["FillOpacity"]),' + pas["WEBLib.TMSFNCMaps"].LB + "      strokeColor: toRGBA(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeColor"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeOpacity"]),' + pas["WEBLib.TMSFNCMaps"].LB + "      strokeThickness: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeWidth"]' + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    break;" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  if (!" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + "){" + pas["WEBLib.TMSFNCMaps"].LB + "    switch(c){" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsPolyline":' + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + " = new " + $impl.MAPSERVICEVAR + ".Polyline(" + pas["WEBLib.TMSFNCMaps"].COORDINATEARRAYVAR + ", options);" + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsCircle":' + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsRectangle":' + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + " = new " + $impl.MAPSERVICEVAR + ".Polygon(co, options);" + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsPolygon":' + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCBingMapsPolygon":' + pas["WEBLib.TMSFNCMaps"].LB + "      var pthArr = [];" + pas["WEBLib.TMSFNCMaps"].LB + "      pthArr.push(" + pas["WEBLib.TMSFNCMaps"].COORDINATEARRAYVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "      for (var key in " + pas["WEBLib.TMSFNCMaps"].HOLEARRAYVAR + "){" + pas["WEBLib.TMSFNCMaps"].LB + "        pthArr.push(" + pas["WEBLib.TMSFNCMaps"].HOLEARRAYVAR + "[key]);" + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + " = new " + $impl.MAPSERVICEVAR + ".Polygon(pthArr, options);" + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".entities.push(" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "    " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ", 'click', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ", 'dblclick', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementDblClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ", 'mouseup', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      activeElement = " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseUp", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ", 'mousedown', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      activeElement = " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseDown", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ", 'mouseout', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseLeave", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ", 'mouseover', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementMouseEnter", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    if (mouseUpId != -1) {" + pas["WEBLib.TMSFNCMaps"].LB + "      " + $impl.MAPSERVICEVAR + ".Events.removeHandler(mouseUpId);" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    if (mouseDownId != -1) {" + pas["WEBLib.TMSFNCMaps"].LB + "      " + $impl.MAPSERVICEVAR + ".Events.removeHandler(mouseDownId);" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    mouseUpId = " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ", 'mouseup', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      if (activeElement){" + pas["WEBLib.TMSFNCMaps"].LB + "        activeElement = null; " + pas["WEBLib.TMSFNCMaps"].LB + "        return;" + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseUp"));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    mouseDownId = " + $impl.MAPSERVICEVAR + ".Events.addHandler(" + pas["WEBLib.TMSFNCMaps"].MAPVAR + ", 'mousedown', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "      if (activeElement){" + pas["WEBLib.TMSFNCMaps"].LB + "        activeElement = null; " + pas["WEBLib.TMSFNCMaps"].LB + "        return;" + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseDown"));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  }else{" + pas["WEBLib.TMSFNCMaps"].LB + "    switch(c){" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsPolyline":' + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsPolygon":' + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".setLocations(" + pas["WEBLib.TMSFNCMaps"].COORDINATEARRAYVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsRectangle":' + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsCircle":' + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".setLocations(co);" + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".setOptions(options);" + pas["WEBLib.TMSFNCMaps"].LB + "  }";
        return Result;
      };
      this.GetDeletePolyElement = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".entities.remove(" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ")";
        return Result;
      };
      this.GetZoomToBounds = function () {
        var Result = "";
        Result = "  var sw = new " + $impl.MAPSERVICEVAR + ".Location(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["SouthWest"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["SouthWest"]["Longitude"])' + pas["WEBLib.TMSFNCMaps"].LB + "  var ne = new " + $impl.MAPSERVICEVAR + ".Location(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["NorthEast"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["NorthEast"]["Longitude"])' + pas["WEBLib.TMSFNCMaps"].LB + "  var locs = [sw, ne];" + pas["WEBLib.TMSFNCMaps"].LB + "  var rect = " + $impl.MAPSERVICEVAR + ".LocationRect.fromLocations(locs);" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setView({ bounds: rect, padding: 0 });";
        return Result;
      };
      this.GetGetBounds = function () {
        var Result = "";
        Result = "  var loc = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getBounds();" + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["NorthEast"]["Latitude"] = loc.getNorth();' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["NorthEast"]["Longitude"] = loc.getEast();' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["SouthWest"]["Latitude"] = loc.getSouth();' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["SouthWest"]["Longitude"] = loc.getWest();';
        return Result;
      };
      this.GetGetCenterCoordinate = function () {
        var Result = "";
        Result = "  var loc = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getCenter();" + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Latitude"] = loc.latitude;' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Longitude"] = loc.longitude;';
        return Result;
      };
      this.GetGetZoomLevel = function () {
        var Result = "";
        Result = "  var z = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".getZoom();";
        return Result;
      };
      this.GetLatLonToXY = function () {
        var Result = "";
        Result = "  var loc = new " + $impl.MAPSERVICEVAR + ".Location(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"]);' + pas["WEBLib.TMSFNCMaps"].LB + "  point = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".tryLocationToPixel(loc, " + $impl.MAPSERVICEVAR + ".PixelReference.control);" + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["X"] = parseFloat(point.x);' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Y"] = parseFloat(point.y);';
        return Result;
      };
      this.GetXYToLatLon = function () {
        var Result = "";
        Result = "  var point = new " + $impl.MAPSERVICEVAR + ".Point(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["X"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Y"]);' + pas["WEBLib.TMSFNCMaps"].LB + "  var loc = map.tryPixelToLocation(point, " + $impl.MAPSERVICEVAR + ".PixelReference.control);" + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Latitude"] = parseFloat(loc.lat);' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Longitude"] = parseFloat(loc.lng);';
        return Result;
      };
      this.GetSetCenterCoordinate = function () {
        var Result = "";
        Result = "  var lat = new " + $impl.MAPSERVICEVAR + ".Location(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"])' + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setView({ center: lat});";
        return Result;
      };
      this.GetSetZoomLevel = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setView({ zoom: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + "});";
        return Result;
      };
      this.GetUpdateOptions = function () {
        var Result = "";
        Result = "  " + $impl.DOUBLECLICKZOOM + " = " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ZoomOnDblClick"];' + pas["WEBLib.TMSFNCMaps"].LB + "  " + $impl.SCROLLZOOM + " = " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ZoomOnWheelScroll"];' + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  var opt = {" + pas["WEBLib.TMSFNCMaps"].LB + "    disablePanning: !" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Panning"],' + pas["WEBLib.TMSFNCMaps"].LB + "    showZoomButtons: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ShowZoomControl"],' + pas["WEBLib.TMSFNCMaps"].LB + "    showMapTypeSelector: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ShowMapTypeControl"]' + pas["WEBLib.TMSFNCMaps"].LB + "  };" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setOptions(opt);";
        return Result;
      };
      this.GetGlobalVariables = function () {
        var Result = "";
        Result = "var activeElement = null;" + pas["WEBLib.TMSFNCMaps"].LB + "var mouseDownId = -1;" + pas["WEBLib.TMSFNCMaps"].LB + "var mouseUpId = -1;" + pas["WEBLib.TMSFNCMaps"].LB + "var " + $impl.DOUBLECLICKZOOM + ";" + pas["WEBLib.TMSFNCMaps"].LB + "var " + $impl.SCROLLZOOM + ";" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "function parseEvent(event, eventname, id = ''){" + pas["WEBLib.TMSFNCMaps"].LB + "  var loc = {'Latitude': 0, 'Longitude': 0};" + pas["WEBLib.TMSFNCMaps"].LB + "  var x = 0.0;" + pas["WEBLib.TMSFNCMaps"].LB + "  var y = 0.0;" + pas["WEBLib.TMSFNCMaps"].LB + "  if (event) {" + pas["WEBLib.TMSFNCMaps"].LB + "    if (event.location){" + pas["WEBLib.TMSFNCMaps"].LB + "      loc = {'Latitude': event.location.latitude, 'Longitude': event.location.longitude};" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    if (event.pageX && event.pageY){" + pas["WEBLib.TMSFNCMaps"].LB + "      x = event.pageX;" + pas["WEBLib.TMSFNCMaps"].LB + "      y = event.pageY;" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  var r = {'Coordinate': loc, 'X': x, 'Y': y, 'ID': id, 'EventName': eventname};" + pas["WEBLib.TMSFNCMaps"].LB + "  return r;" + pas["WEBLib.TMSFNCMaps"].LB + "}";
        return Result;
      };
      this.GetAddCoordinateToArray = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].COORDINATEARRAYVAR + ".push(new " + $impl.MAPSERVICEVAR + ".Location(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"],' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"]));';
        return Result;
      };
      this.GetAddHoleToArray = function () {
        var Result = "";
        Result = "var o = " + pas["WEBLib.TMSFNCMaps"].HOLEARRAYVAR + "[" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + "[0]];" + pas["WEBLib.TMSFNCMaps"].LB + "if (o){" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].HOLEARRAYVAR + "[" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + "[0]].push(new " + $impl.MAPSERVICEVAR + ".Location(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '[1]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '[1]["Longitude"]));' + pas["WEBLib.TMSFNCMaps"].LB + "}else{" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].HOLEARRAYVAR + "[" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + "[0]] = [new " + $impl.MAPSERVICEVAR + ".Location(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '[1]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '[1]["Longitude"])];' + pas["WEBLib.TMSFNCMaps"].LB + "}";
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
    $impl.BINGMAPSAPIURL = "https://www.bing.com/api/maps/";
    $impl.MAPSERVICEVAR = "window.Microsoft.Maps";
    $impl.DOUBLECLICKZOOM = "dblclickZoom";
    $impl.SCROLLZOOM = "scrollZoom";
  };
},["Classes","Math","DateUtils","Types","SysUtils","WEBLib.TMSFNCMaps","WEBLib.TMSFNCUtils","WEBLib.TMSFNCTypes","WEBLib.TMSFNCMapsCommonTypes","contnrs","Web"]);
//# sourceMappingURL=WEBLib.TMSFNCMaps.BingMaps.js.map
