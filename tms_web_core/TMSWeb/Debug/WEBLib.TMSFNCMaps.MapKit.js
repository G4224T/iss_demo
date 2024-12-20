rtl.module("WEBLib.TMSFNCMaps.MapKit",["System"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.MAPSERVICEVAR = "window.mapkit";
  this.RegisterMapKitService = function () {
    if (!pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceMapKit),{p: $impl, get: function () {
        return this.p.MapsService;
      }, set: function (v) {
        rtl.setIntfP(this.p,"MapsService",v);
      }})) {
      rtl.setIntfP($impl,"MapsService",rtl.queryIntfT($impl.TTMSFNCMapsMapKitService.$create("Create$1"),pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceMapKit),true);
      pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsPlatformServices.Current().AddPlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceMapKit),$impl.MapsService);
    };
  };
  this.UnRegisterMapKitService = function () {
    pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsPlatformServices.Current().RemovePlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceMapKit));
  };
  $mod.$implcode = function () {
    $mod.$rtti.$Class("TTMSFNCMapsMapKitService");
    rtl.createClass($impl,"TTMSFNCMapsMapKitFactoryService",pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsFactoryService,function () {
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceMapKit);
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    rtl.createClass($impl,"TTMSFNCMapsMapKitService",$impl.TTMSFNCMapsMapKitFactoryService,function () {
      this.DoCreateMaps = function () {
        var Result = null;
        var $ok = false;
        try {
          Result = rtl.setIntfL(Result,rtl.queryIntfT($impl.TTMSFNCMapsMapKit.$create("Create$1"),pas["WEBLib.TMSFNCMaps"].ITMSFNCCustomMaps),true);
          $ok = true;
        } finally {
          if (!$ok) rtl._Release(Result);
        };
        return Result;
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsServiceMapKit);
      rtl.addIntf(this,pas["WEBLib.TMSFNCMaps"].ITMSFNCMapsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $mod.$rtti.$Class("TTMSFNCMapsMapKit");
    rtl.createClass($impl,"TTMSFNCMapsMapKit",pas["WEBLib.TMSFNCMaps"].TTMSFNCCustomMapsInterfacedObject,function () {
      this.GetHeadLinks = function (AList) {
        AList.Add$1(pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsLink.$create("CreateScript",[$impl.MAPKITAPIURL + $impl.MAPKITAPIVERSION + "/mapkit.js","text/javascript","utf-8","",false,false]));
      };
      this.RemoveScripts = function () {
        let keywords = ['cdn.apple-mapkit'];
        
            if (window.mapkit){
              window.mapkit = undefined;
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
        Result = "  var pid = " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"];' + pas["WEBLib.TMSFNCMaps"].LB + "  var co = new " + $mod.MAPSERVICEVAR + ".Coordinate(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"]);' + pas["WEBLib.TMSFNCMaps"].LB + "  var custompopup = function(coordinate, options) {" + pas["WEBLib.TMSFNCMaps"].LB + '    var div = document.createElement("div");' + pas["WEBLib.TMSFNCMaps"].LB + "    div.className = 'bubble';" + pas["WEBLib.TMSFNCMaps"].LB + "    var t = " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Text"];' + pas["WEBLib.TMSFNCMaps"].LB + '    div.innerHTML = \'<a href="#" id="popup-closer-popup\' + pid + \'" class="ol-popup-closer"></a><div>\' + t + \'</div>\'' + pas["WEBLib.TMSFNCMaps"].LB + "    return div;" + pas["WEBLib.TMSFNCMaps"].LB + "    };" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POPUPVAR + " = new " + $mod.MAPSERVICEVAR + ".Annotation(co, custompopup);" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addAnnotation(" + pas["WEBLib.TMSFNCMaps"].POPUPVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "    var closer = document.getElementById('popup-closer-popup' + pid);" + pas["WEBLib.TMSFNCMaps"].LB + "    closer.onclick = function() {" + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".removeAnnotation(" + pas["WEBLib.TMSFNCMaps"].POPUPVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "      closer.blur();" + pas["WEBLib.TMSFNCMaps"].LB + "      return false;" + pas["WEBLib.TMSFNCMaps"].LB + "    };";
        return Result;
      };
      this.GetClosePopup = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".removeAnnotation(" + pas["WEBLib.TMSFNCMaps"].POPUPVAR + ");";
        return Result;
      };
      this.GetHeadStyle = function () {
        var Result = "";
        Result = ".bubble {" + pas["WEBLib.TMSFNCMaps"].LB + "  background-color: #FAFAFA;" + pas["WEBLib.TMSFNCMaps"].LB + "  border-radius: 5px;" + pas["WEBLib.TMSFNCMaps"].LB + "  box-shadow: 0 0 6px #B2B2B2;" + pas["WEBLib.TMSFNCMaps"].LB + "  display: inline-block;" + pas["WEBLib.TMSFNCMaps"].LB + "  padding: 10px 28px 10px 18px;" + pas["WEBLib.TMSFNCMaps"].LB + "  position: relative;" + pas["WEBLib.TMSFNCMaps"].LB + "  vertical-align: top;" + pas["WEBLib.TMSFNCMaps"].LB + "  margin: 20px 10px;" + pas["WEBLib.TMSFNCMaps"].LB + "  font-family: sans-serif;" + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + ".bubble::before {" + pas["WEBLib.TMSFNCMaps"].LB + "  background-color: #FAFAFA; " + pas["WEBLib.TMSFNCMaps"].LB + '  content: "";' + pas["WEBLib.TMSFNCMaps"].LB + "  display: block;" + pas["WEBLib.TMSFNCMaps"].LB + "  height: 16px;" + pas["WEBLib.TMSFNCMaps"].LB + "  width: 16px;" + pas["WEBLib.TMSFNCMaps"].LB + "  position: absolute;" + pas["WEBLib.TMSFNCMaps"].LB + "  bottom: -7.5px;" + pas["WEBLib.TMSFNCMaps"].LB + "  left: 50%;" + pas["WEBLib.TMSFNCMaps"].LB + "  right: 50%;" + pas["WEBLib.TMSFNCMaps"].LB + "  transform: rotate(47deg) skew(5deg);" + pas["WEBLib.TMSFNCMaps"].LB + "\t -moz-transform: rotate(47deg) skew(5deg);" + pas["WEBLib.TMSFNCMaps"].LB + "  -ms-transform: rotate(47deg) skew(5deg);" + pas["WEBLib.TMSFNCMaps"].LB + "  -o-transform: rotate(47deg) skew(5deg);" + pas["WEBLib.TMSFNCMaps"].LB + "  -webkit-transform: rotate(47deg) skew(5deg);" + pas["WEBLib.TMSFNCMaps"].LB + "  box-shadow: 2px 2px 2px 0 rgba( 178, 178, 178, .4 );" + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + ".ol-popup:before {" + pas["WEBLib.TMSFNCMaps"].LB + "  border-top-color: #cccccc;" + pas["WEBLib.TMSFNCMaps"].LB + "  border-width: 11px;" + pas["WEBLib.TMSFNCMaps"].LB + "  left: 48px;" + pas["WEBLib.TMSFNCMaps"].LB + "  margin-left: -11px;" + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + ".ol-popup-closer {" + pas["WEBLib.TMSFNCMaps"].LB + "  text-decoration: none;" + pas["WEBLib.TMSFNCMaps"].LB + "  position: absolute;" + pas["WEBLib.TMSFNCMaps"].LB + "  top: 2px;" + pas["WEBLib.TMSFNCMaps"].LB + "  right: 8px;" + pas["WEBLib.TMSFNCMaps"].LB + "}" + pas["WEBLib.TMSFNCMaps"].LB + ".ol-popup-closer:after {" + pas["WEBLib.TMSFNCMaps"].LB + '  content: "✖";' + pas["WEBLib.TMSFNCMaps"].LB + "}";
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
        Result = "Apple MapKit";
        return Result;
      };
      this.GetInitializeMap = function () {
        var Result = "";
        var v = "";
        var $ir = rtl.createIntfRefs();
        try {
          v = $mod.MAPSERVICEVAR;
          Result = "  " + v + ".init({" + pas["WEBLib.TMSFNCMaps"].LB + "    language: '" + $ir.ref(1,this.GetMapsProperties()).GetLocale(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsLocaleMode.mlmDefault) + "'," + pas["WEBLib.TMSFNCMaps"].LB + "    authorizationCallback: function(done) {" + pas["WEBLib.TMSFNCMaps"].LB + '      done("' + $ir.ref(2,this.GetMapsProperties()).GetAPIKey() + '");' + pas["WEBLib.TMSFNCMaps"].LB + "    }," + pas["WEBLib.TMSFNCMaps"].LB + "  });" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + " = new " + $mod.MAPSERVICEVAR + '.Map("' + pas["WEBLib.TMSFNCMaps"].MAPID + '");' + pas["WEBLib.TMSFNCMaps"].LB + "  var co = new " + $mod.MAPSERVICEVAR + ".Coordinate(" + $ir.ref(3,this.GetMapsProperties()).GetDefaultLatitude() + ", " + $ir.ref(4,this.GetMapsProperties()).GetDefaultLongitude() + ");" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".center = co;" + pas["WEBLib.TMSFNCMaps"].LB + "  var zoomlevel = " + pas.SysUtils.IntToStr(51200000) + " / (Math.pow(2, " + $ir.ref(5,this.GetMapsProperties()).GetDefaultZoomLevel() + "));" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".cameraDistance = zoomlevel;" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".isScrollEnabled = " + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr($ir.ref(6,this.GetMapsProperties()).GetPanning(),true)) + ";" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".showsMapTypeControl = " + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr($ir.ref(7,this.GetMapsProperties()).GetShowMapTypeControl(),true)) + ";" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".showsZoomControl = " + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr($ir.ref(8,this.GetMapsProperties()).GetShowZoomControl(),true)) + ";" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".isZoomEnabled = ((" + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr($ir.ref(9,this.GetMapsProperties()).GetZoomOnDblClick(),true)) + ") && (" + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr($ir.ref(10,this.GetMapsProperties()).GetZoomOnWheelScroll(),true)) + "));";
        } finally {
          $ir.free();
        };
        return Result;
      };
      this.GetInitializeEvents = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addEventListener('zoom-end', function(){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(null, "ZoomChanged"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addEventListener('map-type-change', function(){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(null, "MapTypeChanged"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addEventListener('rotation-end', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(null, "MapRotationChanged"), ' + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".rotation);" + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addEventListener('scroll-start', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMoveStart"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addEventListener('scroll-end', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMoveEnd"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addEventListener('single-tap', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapClick"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".element.addEventListener('click', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".selectedAnnotation = null;" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".selectedOverlay = null;" + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addEventListener('double-tap', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapDblClick"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".element.addEventListener('mousemove', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseMove"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".element.addEventListener('mouseover', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseEnter"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".element.addEventListener('mouseout', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MapMouseLeave"));' + pas["WEBLib.TMSFNCMaps"].LB + "  })";
        return Result;
      };
      this.GetAddOrUpdateMarker = function () {
        var Result = "";
        Result = "  var co = new " + $mod.MAPSERVICEVAR + ".Coordinate(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"]);' + pas["WEBLib.TMSFNCMaps"].LB + "  if (!" + pas["WEBLib.TMSFNCMaps"].MARKERVAR + "){" + pas["WEBLib.TMSFNCMaps"].LB + "    if(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["IconURL"] == "") {' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + " = new " + $mod.MAPSERVICEVAR + ".MarkerAnnotation(co, { title: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Title"], visible: ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Visible"], data: { id: ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"] } } );' + pas["WEBLib.TMSFNCMaps"].LB + "    } else { " + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + " = new " + $mod.MAPSERVICEVAR + ".ImageAnnotation(co, { title: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Title"], visible: ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Visible"], data: { id: ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"] }, url: { 1: ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["IconURL"]}});' + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".addEventListener('select', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "MarkerClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addAnnotation(" + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "  } else {" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".coordinate = co;" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".title = " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Title"];' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".visible = " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Visible"];' + pas["WEBLib.TMSFNCMaps"].LB + "    if(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["IconURL"] != "")' + pas["WEBLib.TMSFNCMaps"].LB + "      " + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ".url = { 1: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["IconURL"] };' + pas["WEBLib.TMSFNCMaps"].LB + "  }";
        return Result;
      };
      this.GetDeleteMarker = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".removeAnnotation(" + pas["WEBLib.TMSFNCMaps"].MARKERVAR + ");";
        return Result;
      };
      this.GetAddOrUpdatePolyElement = function () {
        var Result = "";
        Result = "  var c = " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["$type"];' + pas["WEBLib.TMSFNCMaps"].LB + "  var options;" + pas["WEBLib.TMSFNCMaps"].LB + "  switch(c){" + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsRectangle":' + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsPolygon":' + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsCircle":' + pas["WEBLib.TMSFNCMaps"].LB + "      options = new " + $mod.MAPSERVICEVAR + ".Style({" + pas["WEBLib.TMSFNCMaps"].LB + "        strokeColor: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeColor"],' + pas["WEBLib.TMSFNCMaps"].LB + "        strokeOpacity: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeOpacity"],' + pas["WEBLib.TMSFNCMaps"].LB + "        lineWidth: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeWidth"],' + pas["WEBLib.TMSFNCMaps"].LB + "        fillColor: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["FillColor"],' + pas["WEBLib.TMSFNCMaps"].LB + "        fillOpacity: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["FillOpacity"],' + pas["WEBLib.TMSFNCMaps"].LB + '        fillRule: "evenodd",' + pas["WEBLib.TMSFNCMaps"].LB + "      });" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    break;" + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsPolyline":' + pas["WEBLib.TMSFNCMaps"].LB + "      options = new " + $mod.MAPSERVICEVAR + ".Style({" + pas["WEBLib.TMSFNCMaps"].LB + "        strokeColor: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeColor"],' + pas["WEBLib.TMSFNCMaps"].LB + "        strokeOpacity: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeOpacity"],' + pas["WEBLib.TMSFNCMaps"].LB + "        lineWidth: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["StrokeWidth"],' + pas["WEBLib.TMSFNCMaps"].LB + "      });" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    break;" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  function toCoordinates(array) {" + pas["WEBLib.TMSFNCMaps"].LB + "    return array.map(function(element) {" + pas["WEBLib.TMSFNCMaps"].LB + "        return new " + $mod.MAPSERVICEVAR + ".Coordinate(element[0], element[1]);" + pas["WEBLib.TMSFNCMaps"].LB + "    });" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  switch(c){" + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsRectangle":' + pas["WEBLib.TMSFNCMaps"].LB + "      var points = " + pas["WEBLib.TMSFNCMaps"].COORDINATEARRAYVAR + ";" + pas["WEBLib.TMSFNCMaps"].LB + "      points.push([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Longitude"]]);' + pas["WEBLib.TMSFNCMaps"].LB + "      points.push([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Longitude"]]);' + pas["WEBLib.TMSFNCMaps"].LB + "      points.push([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["NorthEast"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Longitude"]]);' + pas["WEBLib.TMSFNCMaps"].LB + "      points.push([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Bounds"]["SouthWest"]["Longitude"]]);' + pas["WEBLib.TMSFNCMaps"].LB + "      var coords = points.map(function(point) {" + pas["WEBLib.TMSFNCMaps"].LB + "        return new " + $mod.MAPSERVICEVAR + ".Coordinate(point[0], point[1]);" + pas["WEBLib.TMSFNCMaps"].LB + "      });" + pas["WEBLib.TMSFNCMaps"].LB + "    break;" + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsPolyline":' + pas["WEBLib.TMSFNCMaps"].LB + "      var coords = toCoordinates(" + pas["WEBLib.TMSFNCMaps"].COORDINATEARRAYVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "    break;" + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsPolygon":' + pas["WEBLib.TMSFNCMaps"].LB + "      var coords = [];" + pas["WEBLib.TMSFNCMaps"].LB + "      coords.push(toCoordinates(" + pas["WEBLib.TMSFNCMaps"].COORDINATEARRAYVAR + "));" + pas["WEBLib.TMSFNCMaps"].LB + "      for (var key in " + pas["WEBLib.TMSFNCMaps"].HOLEARRAYVAR + "){" + pas["WEBLib.TMSFNCMaps"].LB + "        coords.push(toCoordinates(" + pas["WEBLib.TMSFNCMaps"].HOLEARRAYVAR + "[key]));" + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "    break;" + pas["WEBLib.TMSFNCMaps"].LB + '    case "TTMSFNCMapsCircle":' + pas["WEBLib.TMSFNCMaps"].LB + "      var coord = new " + $mod.MAPSERVICEVAR + ".Coordinate(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Center"]["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Center"]["Longitude"]);' + "    break;" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  if (!" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + "){" + pas["WEBLib.TMSFNCMaps"].LB + "    switch(c){" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsPolyline":' + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + " = new " + $mod.MAPSERVICEVAR + ".PolylineOverlay(coords, { style: options });" + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsPolygon":' + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsRectangle":' + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + " = new " + $mod.MAPSERVICEVAR + ".PolygonOverlay(coords, { style: options });" + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + '      case "TTMSFNCMapsCircle":' + pas["WEBLib.TMSFNCMaps"].LB + "        " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + " = new " + $mod.MAPSERVICEVAR + ".CircleOverlay(coord, " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Radius"], { style: options });' + pas["WEBLib.TMSFNCMaps"].LB + "      break;" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".data = { id: " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"] };' + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".addEventListener('select', function(event){" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].GETSENDEVENT + '(parseEvent(event, "PolyElementClick", ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ID"]));' + pas["WEBLib.TMSFNCMaps"].LB + "    })" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".addOverlay(" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ");" + pas["WEBLib.TMSFNCMaps"].LB + "  }else{" + pas["WEBLib.TMSFNCMaps"].LB + "    " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".style = options;" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ".visible = " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Visible"];' + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB;
        return Result;
      };
      this.GetDeletePolyElement = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".removeOverlay(" + pas["WEBLib.TMSFNCMaps"].POLYELEMENTVAR + ");";
        return Result;
      };
      this.GetZoomToBounds = function () {
        var Result = "";
        Result = "  var def = new " + $mod.MAPSERVICEVAR + ".BoundingRegion(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["NorthEast"]["Latitude"],' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["NorthEast"]["Longitude"],' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["SouthWest"]["Latitude"],' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["SouthWest"]["Longitude"]);' + pas["WEBLib.TMSFNCMaps"].LB + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".region = def.toCoordinateRegion();";
        return Result;
      };
      this.GetGetBounds = function () {
        var Result = "";
        Result = "  var loc = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".region;" + "  var bounds = loc.toBoundingRegion(loc);" + '  jsonObj["NorthEast"]["Latitude"] = bounds.northLatitude;' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["NorthEast"]["Longitude"] = bounds.eastLongitude;' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["SouthWest"]["Latitude"] = bounds.southLatitude;' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["SouthWest"]["Longitude"] = bounds.westLongitude;';
        return Result;
      };
      this.GetSetCenterCoordinate = function () {
        var Result = "";
        Result = "  var co = new " + $mod.MAPSERVICEVAR + ".Coordinate(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"]);' + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setCenterAnimated(co, true);";
        return Result;
      };
      this.GetGetCenterCoordinate = function () {
        var Result = "";
        Result = "  var loc = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".center;" + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Latitude"] = loc.latitude;' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Longitude"] = loc.longitude;';
        return Result;
      };
      this.GetGetZoomLevel = function () {
        var Result = "";
        Result = "  var maxzoomlevel = " + pas.SysUtils.IntToStr(51200000) + ";" + pas["WEBLib.TMSFNCMaps"].LB + "  var z = -1;" + pas["WEBLib.TMSFNCMaps"].LB + "  while (maxzoomlevel >= " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".cameraDistance){" + pas["WEBLib.TMSFNCMaps"].LB + "    maxzoomlevel = maxzoomlevel / 2;" + pas["WEBLib.TMSFNCMaps"].LB + "    z++;" + pas["WEBLib.TMSFNCMaps"].LB + " }";
        return Result;
      };
      this.GetSetZoomLevel = function () {
        var Result = "";
        Result = "var zoomlevel = " + pas.SysUtils.IntToStr(51200000) + " / (Math.pow(2, " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + "));" + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".setCameraDistanceAnimated(zoomlevel);";
        return Result;
      };
      this.GetLatLonToXY = function () {
        var Result = "";
        Result = "  var loc = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".region;" + "  var bounds = loc.toBoundingRegion(loc);" + "  var coordinate = new " + $mod.MAPSERVICEVAR + ".Coordinate(" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"]);' + pas["WEBLib.TMSFNCMaps"].LB + "  var point = coordinate.toMapPoint();" + pas["WEBLib.TMSFNCMaps"].LB + "  var coordinateNE = new " + $mod.MAPSERVICEVAR + ".Coordinate(bounds.northLatitude, bounds.westLongitude);" + pas["WEBLib.TMSFNCMaps"].LB + "  var pointNE = coordinateNE.toMapPoint();" + pas["WEBLib.TMSFNCMaps"].LB + "  var coordinateSW = new " + $mod.MAPSERVICEVAR + ".Coordinate(bounds.southLatitude, bounds.eastLongitude);" + pas["WEBLib.TMSFNCMaps"].LB + "  var pointSW = coordinateSW.toMapPoint();" + pas["WEBLib.TMSFNCMaps"].LB + "  var heightMap = pointSW.y - pointNE.y;" + pas["WEBLib.TMSFNCMaps"].LB + "  var widthMap = pointSW.x - pointNE.x;" + pas["WEBLib.TMSFNCMaps"].LB + "  var heightPoint = point.y - pointNE.y;" + pas["WEBLib.TMSFNCMaps"].LB + "  var widthPoint = point.x - pointNE.x;" + pas["WEBLib.TMSFNCMaps"].LB + "  var heightResult = heightMap / heightPoint;" + pas["WEBLib.TMSFNCMaps"].LB + "  var widthResult = widthMap / widthPoint;" + pas["WEBLib.TMSFNCMaps"].LB + '  var heightDIV = document.getElementById("' + pas["WEBLib.TMSFNCMaps"].MAPID + '").offsetHeight;' + pas["WEBLib.TMSFNCMaps"].LB + '  var widthDIV = document.getElementById("' + pas["WEBLib.TMSFNCMaps"].MAPID + '").offsetWidth;' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Y"] = Math.ceil(parseFloat(heightDIV / heightResult));' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["X"] = Math.ceil(parseFloat(widthDIV / widthResult));';
        return Result;
      };
      this.GetXYToLatLon = function () {
        var Result = "";
        Result = "  var loc = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".region;" + "  var bounds = loc.toBoundingRegion(loc);" + "  var pointX = " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["X"];' + pas["WEBLib.TMSFNCMaps"].LB + "  var pointY = " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Y"];' + pas["WEBLib.TMSFNCMaps"].LB + '  var heightDIV = document.getElementById("' + pas["WEBLib.TMSFNCMaps"].MAPID + '").offsetHeight;' + pas["WEBLib.TMSFNCMaps"].LB + '  var widthDIV = document.getElementById("' + pas["WEBLib.TMSFNCMaps"].MAPID + '").offsetWidth;' + pas["WEBLib.TMSFNCMaps"].LB + "  var coordinateNE = new " + $mod.MAPSERVICEVAR + ".Coordinate(bounds.northLatitude, bounds.westLongitude);" + pas["WEBLib.TMSFNCMaps"].LB + "  var pointNE = coordinateNE.toMapPoint();" + pas["WEBLib.TMSFNCMaps"].LB + "  var coordinateSW = new " + $mod.MAPSERVICEVAR + ".Coordinate(bounds.southLatitude, bounds.eastLongitude);" + pas["WEBLib.TMSFNCMaps"].LB + "  var pointSW = coordinateSW.toMapPoint();" + pas["WEBLib.TMSFNCMaps"].LB + "  var heightMap = pointSW.y - pointNE.y;" + pas["WEBLib.TMSFNCMaps"].LB + "  var widthMap = pointSW.x - pointNE.x;" + pas["WEBLib.TMSFNCMaps"].LB + "  var resultY = (heightMap / heightDIV) * pointY;" + pas["WEBLib.TMSFNCMaps"].LB + "  var resultX = (widthMap / widthDIV) * pointX;" + pas["WEBLib.TMSFNCMaps"].LB + "  var point = new " + $mod.MAPSERVICEVAR + ".MapPoint(pointNE.x + resultX, pointNE.y + resultY);" + pas["WEBLib.TMSFNCMaps"].LB + "  var coordinate = point.toCoordinate();" + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Latitude"] = parseFloat(coordinate.latitude);' + pas["WEBLib.TMSFNCMaps"].LB + '  jsonObj["Longitude"] = parseFloat(coordinate.longitude);';
        return Result;
      };
      this.GetUpdateOptions = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".isScrollEnabled = " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Panning"];' + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".showsMapTypeControl = " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ShowMapTypeControl"];' + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".showsZoomControl = " + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ShowZoomControl"];' + pas["WEBLib.TMSFNCMaps"].LB + "  " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".isZoomEnabled = ((" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ZoomOnDblClick"]) && (' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["ZoomOnWheelScroll"]));';
        return Result;
      };
      this.GetGlobalVariables = function () {
        var Result = "";
        Result = "function parseEvent(event, eventname, id = ''){" + pas["WEBLib.TMSFNCMaps"].LB + "  var loc = {'Latitude': 0, 'Longitude': 0};" + pas["WEBLib.TMSFNCMaps"].LB + "  var x = 0.0;" + pas["WEBLib.TMSFNCMaps"].LB + "  var y = 0.0;" + pas["WEBLib.TMSFNCMaps"].LB + '  if ((eventname == "MapMoveStart") || (eventname == "MapMoveEnd")){ ' + "    var centerpt = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".center;" + pas["WEBLib.TMSFNCMaps"].LB + "    loc = {'Latitude': centerpt.latitude, 'Longitude': centerpt.longitude};" + pas["WEBLib.TMSFNCMaps"].LB + "  } else if (event) {" + pas["WEBLib.TMSFNCMaps"].LB + "    if (event.pointOnPage){" + pas["WEBLib.TMSFNCMaps"].LB + "      x = event.pointOnPage.x;" + pas["WEBLib.TMSFNCMaps"].LB + "      y = event.pointOnPage.y;" + pas["WEBLib.TMSFNCMaps"].LB + "      var dp = new DOMPoint(x, y);" + pas["WEBLib.TMSFNCMaps"].LB + "      var l = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".convertPointOnPageToCoordinate(dp);" + pas["WEBLib.TMSFNCMaps"].LB + "      loc = {'Latitude': l.latitude, 'Longitude': l.longitude};" + pas["WEBLib.TMSFNCMaps"].LB + "    }else if ((event.x) && (event.y)){" + pas["WEBLib.TMSFNCMaps"].LB + "      x = event.x;" + pas["WEBLib.TMSFNCMaps"].LB + "      y = event.y;" + pas["WEBLib.TMSFNCMaps"].LB + "      var dp = new DOMPoint(x, y);" + pas["WEBLib.TMSFNCMaps"].LB + "      var l = " + pas["WEBLib.TMSFNCMaps"].MAPVAR + ".convertPointOnPageToCoordinate(dp);" + pas["WEBLib.TMSFNCMaps"].LB + "      loc = {'Latitude': l.latitude, 'Longitude': l.longitude};" + pas["WEBLib.TMSFNCMaps"].LB + "    }else{" + pas["WEBLib.TMSFNCMaps"].LB + "      if (event.target){" + "        if (event.target.coordinate){" + pas["WEBLib.TMSFNCMaps"].LB + "          loc = {'Latitude': event.target.coordinate.latitude, 'Longitude': event.target.coordinate.longitude};" + pas["WEBLib.TMSFNCMaps"].LB + "        }" + "        else if (event.target.points){" + pas["WEBLib.TMSFNCMaps"].LB + "          if (event.target.points.length > 0){" + pas["WEBLib.TMSFNCMaps"].LB + "            var p = event.target.points[0];" + pas["WEBLib.TMSFNCMaps"].LB + "            if (Array.isArray(p) && (p.length > 0)){" + pas["WEBLib.TMSFNCMaps"].LB + "              p = p[0]" + pas["WEBLib.TMSFNCMaps"].LB + "            }" + pas["WEBLib.TMSFNCMaps"].LB + "            loc = {'Latitude': p.latitude, 'Longitude': p.longitude};" + pas["WEBLib.TMSFNCMaps"].LB + "          }" + pas["WEBLib.TMSFNCMaps"].LB + "        }" + pas["WEBLib.TMSFNCMaps"].LB + "      }" + pas["WEBLib.TMSFNCMaps"].LB + "    }" + pas["WEBLib.TMSFNCMaps"].LB + "  }" + pas["WEBLib.TMSFNCMaps"].LB + "  var r = {'Coordinate': loc, 'X': x, 'Y': y, 'ID': id, 'EventName': eventname};" + pas["WEBLib.TMSFNCMaps"].LB + "  return r;" + pas["WEBLib.TMSFNCMaps"].LB + "}";
        return Result;
      };
      this.GetAddCoordinateToArray = function () {
        var Result = "";
        Result = "  " + pas["WEBLib.TMSFNCMaps"].COORDINATEARRAYVAR + ".push([" + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Latitude"], ' + pas["WEBLib.TMSFNCMaps"].PARAMSNAME + '["Longitude"]]);';
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
    $impl.MAPKITAPIVERSION = "5.x.x";
    $impl.MAPKITAPIURL = "https://cdn.apple-mapkit.com/mk/";
    $impl.MAPMAXZOOMLEVEL = 51200000;
  };
},["Classes","Math","DateUtils","Types","SysUtils","WEBLib.TMSFNCMaps","WEBLib.TMSFNCUtils","WEBLib.TMSFNCTypes","WEBLib.TMSFNCMapsCommonTypes","contnrs","Web"]);
//# sourceMappingURL=WEBLib.TMSFNCMaps.MapKit.js.map
