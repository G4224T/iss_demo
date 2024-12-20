rtl.module("WEBLib.TMSFNCDirections.MapBox",["System"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.RegisterMapBoxDirectionsService = function () {
    if (!pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceMapBox),{p: $impl, get: function () {
        return this.p.DirectionsService;
      }, set: function (v) {
        rtl.setIntfP(this.p,"DirectionsService",v);
      }})) {
      rtl.setIntfP($impl,"DirectionsService",rtl.queryIntfT($impl.TTMSFNCDirectionsMapBoxService.$create("Create$1"),pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceMapBox),true);
      pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsPlatformServices.Current().AddPlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceMapBox),$impl.DirectionsService);
    };
  };
  this.UnRegisterMapBoxDirectionsService = function () {
    pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsPlatformServices.Current().RemovePlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceMapBox));
  };
  $mod.$implcode = function () {
    $mod.$rtti.$Class("TTMSFNCDirectionsMapBoxService");
    rtl.createClass($impl,"TTMSFNCDirectionsMapBoxDirectionsFactoryService",pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsFactoryService,function () {
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceMapBox);
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    rtl.createClass($impl,"TTMSFNCDirectionsMapBoxService",$impl.TTMSFNCDirectionsMapBoxDirectionsFactoryService,function () {
      this.DoCreateDirections = function () {
        var Result = null;
        var $ok = false;
        try {
          Result = rtl.setIntfL(Result,rtl.queryIntfT($impl.TTMSFNCDirectionsMapBoxDirections.$create("Create$1"),pas["WEBLib.TMSFNCDirections"].ITMSFNCCustomDirections),true);
          $ok = true;
        } finally {
          if (!$ok) rtl._Release(Result);
        };
        return Result;
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceMapBox);
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $mod.$rtti.$Class("TTMSFNCDirectionsMapBoxDirections");
    rtl.createClass($impl,"TTMSFNCDirectionsMapBoxDirections",pas["WEBLib.TMSFNCDirections"].TTMSFNCCustomDirectionsInterfacedObject,function () {
      this.$init = function () {
        pas["WEBLib.TMSFNCDirections"].TTMSFNCCustomDirectionsInterfacedObject.$init.call(this);
        this.FTravelMode = 0;
      };
      this.GetIdentifier = function () {
        var Result = "";
        Result = "MapBox";
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
        Result = "https://api.mapbox.com";
        return Result;
      };
      this.GetPath = function (AOrigin, ADestination, AOriginLatitude, AOriginLongitude, ADestinationLatitude, ADestinationLongitude, ATravelMode, AWayPoints) {
        var Result = "";
        var TravelMode = "";
        var WayPoints = "";
        var I = 0;
        if (ATravelMode in rtl.createSet(pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmTruck,pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmPublicTransport)) {
          this.FTravelMode = pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmDriving}
         else this.FTravelMode = ATravelMode;
        var $tmp = ATravelMode;
        if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmDriving) {
          TravelMode = "driving"}
         else if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmWalking) {
          TravelMode = "walking"}
         else if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmBicycling) TravelMode = "cycling";
        AOrigin = pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AOriginLongitude) + "," + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AOriginLatitude);
        ADestination = pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(ADestinationLongitude) + "," + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(ADestinationLatitude);
        WayPoints = AOrigin;
        if ((rtl.length(AWayPoints) > 0) && (rtl.length(AWayPoints) > 0)) {
          for (var $l = 0, $end = rtl.length(AWayPoints) - 1; $l <= $end; $l++) {
            I = $l;
            WayPoints = WayPoints + ";" + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AWayPoints[I].Longitude) + "," + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AWayPoints[I].Latitude);
          };
        };
        WayPoints = WayPoints + ";" + ADestination;
        Result = "/directions/v5/mapbox/" + TravelMode + "/" + WayPoints;
        return Result;
      };
      this.GetQuery = function (AOrigin, ADestination, AOriginLatitude, AOriginLongitude, ADestinationLatitude, ADestinationLongitude, AAlternatives, ATravelMode, AWayPointList, AWayPoints, AOptimizeWayPoints, ALocale, AAVoidTolls) {
        var Result = "";
        var $ir = rtl.createIntfRefs();
        try {
          Result = "geometries=polyline" + "&alternatives=" + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr(AAlternatives,true)) + "&overview=full" + "&steps=true" + "&access_token=" + $ir.ref(1,this.GetDirectionsProperties()).GetAPIKey() + "&language=" + ALocale;
          if (AAVoidTolls) Result = Result + "&exclude=toll";
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
        var l = null;
        var step = null;
        var lstep = null;
        var o = null;
        var jo = null;
        var jol = null;
        var jos = null;
        var joc = null;
        var jar = null;
        var jal = null;
        var jas = null;
        var jac = null;
        var i = 0;
        var j = 0;
        var k = 0;
        var os = null;
        var lm = 0;
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
                    ARequest.SetStatus(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"message"));
                    ARequest.SetErrorMessage(ARequest.FStatus);
                    jar = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(o,"routes"),pas["WEBLib.JSON"].TJSONArray);
                    if (jar != null) {
                      for (var $l = 0, $end = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jar) - 1; $l <= $end; $l++) {
                        i = $l;
                        di = d.Add$1();
                        di.FSummary = "Route " + pas.SysUtils.IntToStr(i);
                        jo = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jar,i);
                        di.FDistance = Math.round(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(jo,"distance"));
                        di.FDuration = Math.round(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(jo,"duration"));
                        pas["WEBLib.TMSFNCDirections"].DecodeValues(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(jo,"geometry"),di.FCoordinates);
                        jal = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jo,"legs"),pas["WEBLib.JSON"].TJSONArray);
                        if (jal != null) {
                          for (var $l1 = 0, $end1 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jal) - 1; $l1 <= $end1; $l1++) {
                            j = $l1;
                            jol = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jal,j);
                            l = di.FLegs.Add$1();
                            l.FDistance = Math.round(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(jol,"distance"));
                            l.FDuration = Math.round(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(jol,"duration"));
                            jas = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jol,"steps"),pas["WEBLib.JSON"].TJSONArray);
                            if (jas != null) {
                              for (var $l2 = 0, $end2 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jas) - 1; $l2 <= $end2; $l2++) {
                                k = $l2;
                                jos = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jas,k);
                                step = di.FSteps.Add$1();
                                step.FDistance = Math.round(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(jos,"distance"));
                                step.FDuration = Math.round(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(jos,"duration"));
                                pas["WEBLib.TMSFNCDirections"].DecodeValues(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(jos,"geometry"),step.FCoordinates);
                                for (var $l3 = 0, $end3 = step.FCoordinates.GetCount() - 1; $l3 <= $end3; $l3++) {
                                  lm = $l3;
                                  l.FCoordinates.Add$1().Assign(step.FCoordinates.GetItem$1(lm));
                                };
                                if (l.FCoordinates.GetCount() > 0) {
                                  l.FStartLocation.Assign(l.FCoordinates.GetItem$1(0).FCoordinate);
                                  l.FEndLocation.Assign(l.FCoordinates.GetItem$1(l.FCoordinates.GetCount() - 1).FCoordinate);
                                };
                                os = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jos,"maneuver"),pas["WEBLib.JSON"].TJSONObject);
                                if (os != null) {
                                  step.FInstructions = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(os,"instruction");
                                  jac = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(os,"location"),pas["WEBLib.JSON"].TJSONArray);
                                  if (jac != null) {
                                    joc = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jac,0);
                                    step.FStartLocation.SetLongitude(pas["WEBLib.TMSFNCMapsCommonTypes"].StrToFloatDot(joc.ToString()));
                                    joc = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jac,1);
                                    step.FStartLocation.SetLatitude(pas["WEBLib.TMSFNCMapsCommonTypes"].StrToFloatDot(joc.ToString()));
                                  };
                                  lstep = l.FSteps.Add$1();
                                  lstep.Assign(step);
                                };
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
//# sourceMappingURL=WEBLib.TMSFNCDirections.MapBox.js.map
