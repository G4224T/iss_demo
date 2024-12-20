rtl.module("WEBLib.TMSFNCDirections.Google",["System"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.RegisterGoogleDirectionsService = function () {
    if (!pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceGoogle),{p: $impl, get: function () {
        return this.p.DirectionsService;
      }, set: function (v) {
        rtl.setIntfP(this.p,"DirectionsService",v);
      }})) {
      rtl.setIntfP($impl,"DirectionsService",rtl.queryIntfT($impl.TTMSFNCDirectionsGoogleService.$create("Create$1"),pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceGoogle),true);
      pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsPlatformServices.Current().AddPlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceGoogle),$impl.DirectionsService);
    };
  };
  this.UnRegisterGoogleDirectionsService = function () {
    pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsPlatformServices.Current().RemovePlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceGoogle));
  };
  $mod.$implcode = function () {
    $mod.$rtti.$Class("TTMSFNCDirectionsGoogleService");
    rtl.createClass($impl,"TTMSFNCDirectionsGoogleDirectionsFactoryService",pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsFactoryService,function () {
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceGoogle);
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    rtl.createClass($impl,"TTMSFNCDirectionsGoogleService",$impl.TTMSFNCDirectionsGoogleDirectionsFactoryService,function () {
      this.DoCreateDirections = function () {
        var Result = null;
        var $ok = false;
        try {
          Result = rtl.setIntfL(Result,rtl.queryIntfT($impl.TTMSFNCDirectionsGoogleDirections.$create("Create$1"),pas["WEBLib.TMSFNCDirections"].ITMSFNCCustomDirections),true);
          $ok = true;
        } finally {
          if (!$ok) rtl._Release(Result);
        };
        return Result;
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceGoogle);
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $mod.$rtti.$Class("TTMSFNCDirectionsGoogleDirections");
    rtl.createClass($impl,"TTMSFNCDirectionsGoogleDirections",pas["WEBLib.TMSFNCDirections"].TTMSFNCCustomDirectionsInterfacedObject,function () {
      this.$init = function () {
        pas["WEBLib.TMSFNCDirections"].TTMSFNCCustomDirectionsInterfacedObject.$init.call(this);
        this.FTravelMode = 0;
      };
      this.GetIdentifier = function () {
        var Result = "";
        Result = "Google";
        return Result;
      };
      this.IsValid = function () {
        var Result = false;
        var $ir = rtl.createIntfRefs();
        try {
          Result = $ir.ref(1,this.GetDirectionsProperties()).GetAPIKey() !== "";
        } finally {
          $ir.free();
        };
        return Result;
      };
      this.GetRequestMethod = function () {
        var Result = 0;
        Result = pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBaseRequestMethod.rmGET;
        return Result;
      };
      this.GetHost = function () {
        var Result = "";
        Result = "https://maps.googleapis.com";
        return Result;
      };
      this.GetPath = function (AOrigin, ADestination, AOriginLatitude, AOriginLongitude, ADestinationLatitude, ADestinationLongitude, ATravelMode, AWayPoints) {
        var Result = "";
        Result = "/maps/api/directions/json";
        return Result;
      };
      this.GetQuery = function (AOrigin, ADestination, AOriginLatitude, AOriginLongitude, ADestinationLatitude, ADestinationLongitude, AAlternatives, ATravelMode, AWayPointList, AWayPoints, AOptimizeWayPoints, ALocale, AAVoidTolls) {
        var Result = "";
        var TravelMode = "";
        var WayPoints = "";
        var I = 0;
        var $ir = rtl.createIntfRefs();
        try {
          if (ATravelMode in rtl.createSet(pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmTruck)) {
            this.FTravelMode = pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmDriving}
           else this.FTravelMode = ATravelMode;
          var $tmp = ATravelMode;
          if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmDriving) {
            TravelMode = ""}
           else if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmWalking) {
            TravelMode = "walking"}
           else if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmBicycling) {
            TravelMode = "bicycling"}
           else if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmPublicTransport) TravelMode = "transit";
          WayPoints = "";
          if ((AWayPointList != null) && (AWayPointList.GetCount() > 0)) {
            WayPoints = "&waypoints=";
            WayPoints = WayPoints + "optimize:" + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr(AOptimizeWayPoints,true));
            for (var $l = 0, $end = AWayPointList.GetCount() - 1; $l <= $end; $l++) {
              I = $l;
              WayPoints = WayPoints + "|" + AWayPointList.Get(I);
            };
          };
          if ((rtl.length(AWayPoints) > 0) && (rtl.length(AWayPoints) > 0)) {
            WayPoints = "&waypoints=";
            WayPoints = WayPoints + "optimize:" + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr(AOptimizeWayPoints,true));
            for (var $l1 = 0, $end1 = rtl.length(AWayPoints) - 1; $l1 <= $end1; $l1++) {
              I = $l1;
              WayPoints = WayPoints + "|" + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AWayPoints[I].Latitude) + "," + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AWayPoints[I].Longitude);
            };
          };
          if (AOrigin === "") AOrigin = pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AOriginLatitude) + "," + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AOriginLongitude);
          if (ADestination === "") ADestination = pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(ADestinationLatitude) + "," + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(ADestinationLongitude);
          Result = "key=" + $ir.ref(1,this.GetDirectionsProperties()).GetAPIKey() + "&origin=" + AOrigin + "&destination=" + ADestination + "&alternatives=" + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr(AAlternatives,true)) + "&mode=" + TravelMode + "&language=" + ALocale + WayPoints;
          if (AAVoidTolls) Result = Result + "&avoid=tolls";
        } finally {
          $ir.free();
        };
        return Result;
      };
      this.GetPostData = function (AOrigin, ADestination, AOriginLatitude, AOriginLongitude, ADestinationLatitude, ADestinationLongitude, AAlternatives, ATravelMode, AWayPointList, AWayPoints, AOptimizeWayPoints, ALocale, AAvoidTolls) {
        var Result = "";
        Result = "";
        return Result;
      };
      this.Parse = function (ARequest, ARequestResult) {
        var d = null;
        var di = null;
        var step = null;
        var lstep = null;
        var wp = null;
        var l = null;
        var o = null;
        var jo = null;
        var jol = null;
        var jos = null;
        var jar = null;
        var jal = null;
        var jas = null;
        var i = 0;
        var j = 0;
        var k = 0;
        var lm = 0;
        var op = null;
        var ol = null;
        var os = null;
        var wpIndex = [];
        var $ir = rtl.createIntfRefs();
        try {
          if ($ir.ref(1,this.GetDirectionsProperties()) != null) {
            ARequest.SetTravelMode(this.FTravelMode);
            d = ARequest.FItems;
            if (d != null) {
              if (ARequestResult !== "") {
                o = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.ParseJSON(ARequestResult);
                if (o != null) {
                  try {
                    ARequest.SetStatus(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"status"));
                    ARequest.SetErrorMessage(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"error_message"));
                    jar = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(o,"routes"),pas["WEBLib.JSON"].TJSONArray);
                    if (jar != null) {
                      for (var $l = 0, $end = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jar) - 1; $l <= $end; $l++) {
                        i = $l;
                        jo = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jar,i);
                        di = d.Add$1();
                        di.FSummary = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(jo,"summary");
                        op = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jo,"overview_polyline"),pas["WEBLib.JSON"].TJSONObject);
                        if (op != null) pas["WEBLib.TMSFNCDirections"].DecodeValues(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(op,"points"),di.FCoordinates);
                        wpIndex = rtl.arraySetLength(wpIndex,0,1);
                        wpIndex[0] = -1;
                        jal = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jo,"waypoint_order"),pas["WEBLib.JSON"].TJSONArray);
                        if (jal != null) {
                          wpIndex = rtl.arraySetLength(wpIndex,0,pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jal) + 1);
                          for (var $l1 = 0, $end1 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jal) - 1; $l1 <= $end1; $l1++) {
                            j = $l1;
                            jol = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jal,j);
                            if (jol.GetStrValue() !== "") wpIndex[j + 1] = pas.SysUtils.StrToInt(jol.GetStrValue());
                          };
                        };
                        jal = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jo,"legs"),pas["WEBLib.JSON"].TJSONArray);
                        if (jal != null) {
                          for (var $l2 = 0, $end2 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jal) - 1; $l2 <= $end2; $l2++) {
                            j = $l2;
                            jol = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jal,j);
                            l = di.FLegs.Add$1();
                            wp = di.FWayPoints.Add$1();
                            if (rtl.length(wpIndex) > j) wp.FOptimizedIndex = wpIndex[j];
                            l.FStartAddress = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(jol,"start_address");
                            l.FEndAddress = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(jol,"end_address");
                            ol = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jol,"distance"),pas["WEBLib.JSON"].TJSONObject);
                            if (ol != null) {
                              l.FDistance = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONIntegerValue(ol,"value");
                              di.FDistance = di.FDistance + l.FDistance;
                              wp.FDistance = l.FDistance;
                            };
                            ol = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jol,"duration"),pas["WEBLib.JSON"].TJSONObject);
                            if (ol != null) {
                              l.FDuration = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONIntegerValue(ol,"value");
                              di.FDuration = di.FDuration + l.FDuration;
                              wp.FDuration = l.FDuration;
                            };
                            os = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jol,"end_location"),pas["WEBLib.JSON"].TJSONObject);
                            if (os != null) {
                              l.FEndLocation.SetLatitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(os,"lat"));
                              l.FEndLocation.SetLongitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(os,"lng"));
                            };
                            os = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jol,"start_location"),pas["WEBLib.JSON"].TJSONObject);
                            if (os != null) {
                              l.FStartLocation.SetLatitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(os,"lat"));
                              l.FStartLocation.SetLongitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(os,"lng"));
                            };
                            jas = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jol,"steps"),pas["WEBLib.JSON"].TJSONArray);
                            if (jas != null) {
                              for (var $l3 = 0, $end3 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jas) - 1; $l3 <= $end3; $l3++) {
                                k = $l3;
                                jos = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jas,k);
                                step = di.FSteps.Add$1();
                                os = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jos,"distance"),pas["WEBLib.JSON"].TJSONObject);
                                if (ol != null) step.FDistance = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONIntegerValue(os,"value");
                                os = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jos,"duration"),pas["WEBLib.JSON"].TJSONObject);
                                if (ol != null) step.FDuration = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONIntegerValue(os,"value");
                                step.FInstructions = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(jos,"html_instructions");
                                os = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jos,"polyline"),pas["WEBLib.JSON"].TJSONObject);
                                if (os != null) pas["WEBLib.TMSFNCDirections"].DecodeValues(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(os,"points"),step.FCoordinates);
                                for (var $l4 = 0, $end4 = step.FCoordinates.GetCount() - 1; $l4 <= $end4; $l4++) {
                                  lm = $l4;
                                  l.FCoordinates.Add$1().Assign(step.FCoordinates.GetItem$1(lm));
                                };
                                os = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jos,"end_location"),pas["WEBLib.JSON"].TJSONObject);
                                if (os != null) {
                                  step.FEndLocation.SetLatitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(os,"lat"));
                                  step.FEndLocation.SetLongitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(os,"lng"));
                                };
                                os = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jos,"start_location"),pas["WEBLib.JSON"].TJSONObject);
                                if (os != null) {
                                  step.FStartLocation.SetLatitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(os,"lat"));
                                  step.FStartLocation.SetLongitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(os,"lng"));
                                };
                                lstep = l.FSteps.Add$1();
                                lstep.Assign(step);
                              };
                            };
                          };
                        };
                      };
                    };
                  } finally {
                    o = rtl.freeLoc(o);
                  };
                };
              };
            };
          };
        } finally {
          $ir.free();
        };
      };
      this.AddHeaders = function (AHeaders) {
      };
      this.DestroyDirections = function () {
        var $ir = rtl.createIntfRefs();
        try {
          $impl.DirectionsService.DestroyDirections($ir.ref(1,rtl.queryIntfT(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCCustomDirections)));
        } finally {
          $ir.free();
        };
      };
      this.Create$1 = function () {
        pas.System.TObject.Create.call(this);
        return this;
      };
      this.Destroy = function () {
        pas["WEBLib.TMSFNCDirections"].TTMSFNCCustomDirectionsInterfacedObject.Destroy.call(this);
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCCustomDirections);
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCCustomDirectionsInstance);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $impl.DirectionsService = null;
  };
},["Classes","Math","DateUtils","Types","SysUtils","WEBLib.TMSFNCDirections","WEBLib.TMSFNCUtils","WEBLib.TMSFNCTypes","WEBLib.TMSFNCMapsCommonTypes","WEBLib.TMSFNCCloudBase","contnrs","Web","WEBLib.JSON"]);
//# sourceMappingURL=WEBLib.TMSFNCDirections.Google.js.map
