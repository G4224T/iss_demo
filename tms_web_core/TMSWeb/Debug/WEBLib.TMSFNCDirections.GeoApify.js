rtl.module("WEBLib.TMSFNCDirections.GeoApify",["System"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.RegisterGeoApifyDirectionsService = function () {
    if (!pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceGeoApify),{p: $impl, get: function () {
        return this.p.DirectionsService;
      }, set: function (v) {
        rtl.setIntfP(this.p,"DirectionsService",v);
      }})) {
      rtl.setIntfP($impl,"DirectionsService",rtl.queryIntfT($impl.TTMSFNCDirectionsGeoApifyService.$create("Create$1"),pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceGeoApify),true);
      pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsPlatformServices.Current().AddPlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceGeoApify),$impl.DirectionsService);
    };
  };
  this.UnRegisterGeoApifyDirectionsService = function () {
    pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsPlatformServices.Current().RemovePlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceGeoApify));
  };
  $mod.$implcode = function () {
    $mod.$rtti.$Class("TTMSFNCDirectionsGeoApifyService");
    rtl.createClass($impl,"TTMSFNCDirectionsGeoApifyDirectionsFactoryService",pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsFactoryService,function () {
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceGeoApify);
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    rtl.createClass($impl,"TTMSFNCDirectionsGeoApifyService",$impl.TTMSFNCDirectionsGeoApifyDirectionsFactoryService,function () {
      this.DoCreateDirections = function () {
        var Result = null;
        var $ok = false;
        try {
          Result = rtl.setIntfL(Result,rtl.queryIntfT($impl.TTMSFNCDirectionsGeoApifyDirections.$create("Create$1"),pas["WEBLib.TMSFNCDirections"].ITMSFNCCustomDirections),true);
          $ok = true;
        } finally {
          if (!$ok) rtl._Release(Result);
        };
        return Result;
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceGeoApify);
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $mod.$rtti.$Class("TTMSFNCDirectionsGeoApifyDirections");
    rtl.createClass($impl,"TTMSFNCDirectionsGeoApifyDirections",pas["WEBLib.TMSFNCDirections"].TTMSFNCCustomDirectionsInterfacedObject,function () {
      this.$init = function () {
        pas["WEBLib.TMSFNCDirections"].TTMSFNCCustomDirectionsInterfacedObject.$init.call(this);
        this.FTravelMode = 0;
      };
      this.GetIdentifier = function () {
        var Result = "";
        Result = "GeoApify";
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
        Result = "https://api.geoapify.com";
        return Result;
      };
      this.GetPath = function (AOrigin, ADestination, AOriginLatitude, AOriginLongitude, ADestinationLatitude, ADestinationLongitude, ATravelMode, AWayPoints) {
        var Result = "";
        Result = "/v1/routing";
        return Result;
      };
      this.GetQuery = function (AOrigin, ADestination, AOriginLatitude, AOriginLongitude, ADestinationLatitude, ADestinationLongitude, AAlternatives, ATravelMode, AWayPointList, AWayPoints, AOptimizeWayPoints, ALocale, AAVoidTolls) {
        var Result = "";
        var TravelMode = "";
        var WayPoints = "";
        var I = 0;
        var $ir = rtl.createIntfRefs();
        try {
          var $tmp = ATravelMode;
          if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmDriving) {
            TravelMode = "drive"}
           else if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmWalking) {
            TravelMode = "walk"}
           else if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmBicycling) {
            TravelMode = "bicycle"}
           else if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmPublicTransport) {
            TravelMode = "transit"}
           else if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmTruck) TravelMode = "truck";
          WayPoints = pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AOriginLatitude) + "," + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AOriginLongitude);
          for (var $l = 0, $end = rtl.length(AWayPoints) - 1; $l <= $end; $l++) {
            I = $l;
            WayPoints = WayPoints + "|" + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AWayPoints[I].Latitude) + "," + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AWayPoints[I].Longitude);
          };
          WayPoints = WayPoints + "|" + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(ADestinationLatitude) + "," + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(ADestinationLongitude);
          Result = "apiKey=" + $ir.ref(1,this.GetDirectionsProperties()).GetAPIKey() + "&mode=" + TravelMode + "&waypoints=" + WayPoints;
          if (ALocale !== "") Result = Result + "&lang=" + ALocale;
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
        var l = null;
        var it = null;
        var lit = null;
        var o = null;
        var jo = null;
        var jol = null;
        var jos = null;
        var joar = null;
        var jar = null;
        var jal = null;
        var jas = null;
        var jac = null;
        var jaa = null;
        var i = 0;
        var j = 0;
        var k = 0;
        var m = 0;
        var startindex = 0;
        var endindex = 0;
        var ob = null;
        var ol = null;
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
                    ARequest.SetStatus(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"error"));
                    ARequest.SetErrorMessage(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"message"));
                    jar = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(o,"features"),pas["WEBLib.JSON"].TJSONArray);
                    if (jar != null) {
                      for (var $l = 0, $end = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jar) - 1; $l <= $end; $l++) {
                        i = $l;
                        jo = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jar,i);
                        di = d.Add$1();
                        ol = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jo,"geometry"),pas["WEBLib.JSON"].TJSONObject);
                        if (ol != null) {
                          jac = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(ol,"coordinates"),pas["WEBLib.JSON"].TJSONArray);
                          if (jac != null) {
                            for (var $l1 = 0, $end1 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jac) - 1; $l1 <= $end1; $l1++) {
                              k = $l1;
                              l = di.FLegs.Add$1();
                              jaa = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jac,k),pas["WEBLib.JSON"].TJSONArray);
                              if (jaa != null) {
                                for (var $l2 = 0, $end2 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jaa) - 1; $l2 <= $end2; $l2++) {
                                  m = $l2;
                                  jas = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jaa,m),pas["WEBLib.JSON"].TJSONArray);
                                  if (jas != null) {
                                    it = di.FCoordinates.Add$1();
                                    joar = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jas,0);
                                    if (joar.GetStrValue() !== "") it.SetLongitude(pas["WEBLib.TMSFNCMapsCommonTypes"].StrToFloatDot(joar.GetStrValue()));
                                    joar = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jas,1);
                                    if (joar.GetStrValue() !== "") it.SetLatitude(pas["WEBLib.TMSFNCMapsCommonTypes"].StrToFloatDot(joar.GetStrValue()));
                                    lit = l.FCoordinates.Add$1();
                                    lit.SetLatitude(it.GetLatitude());
                                    lit.SetLongitude(it.GetLongitude());
                                  };
                                };
                              };
                              if (l.FCoordinates.GetCount() > 0) {
                                l.FStartLocation.Assign(l.FCoordinates.GetItem$1(0).FCoordinate);
                                l.FEndLocation.Assign(l.FCoordinates.GetItem$1(l.FCoordinates.GetCount() - 1).FCoordinate);
                              };
                            };
                          };
                        };
                        ol = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jo,"properties"),pas["WEBLib.JSON"].TJSONObject);
                        if (ol != null) {
                          di.FDistance = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(ol,"distance");
                          di.FDuration = Math.round(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(ol,"time"));
                          jal = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(ol,"legs"),pas["WEBLib.JSON"].TJSONArray);
                          if (jal != null) {
                            for (var $l3 = 0, $end3 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jal) - 1; $l3 <= $end3; $l3++) {
                              j = $l3;
                              jol = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jal,j);
                              l = di.FLegs.GetItem$1(j);
                              l.FDistance = Math.round(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(jol,"distance"));
                              l.FDuration = Math.round(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(jol,"time"));
                              jas = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jol,"steps"),pas["WEBLib.JSON"].TJSONArray);
                              if (jas != null) {
                                for (var $l4 = 0, $end4 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jas) - 1; $l4 <= $end4; $l4++) {
                                  k = $l4;
                                  jos = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jas,k);
                                  step = di.FSteps.Add$1();
                                  step.FDistance = Math.round(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(jos,"distance"));
                                  step.FDuration = Math.round(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(jos,"time"));
                                  ob = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jos,"instruction"),pas["WEBLib.JSON"].TJSONObject);
                                  if (ob != null) {
                                    step.FInstructions = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(ob,"text");
                                  };
                                  startindex = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONIntegerValue(jos,"from_index");
                                  endindex = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONIntegerValue(jos,"to_index");
                                  for (var $l5 = startindex, $end5 = endindex; $l5 <= $end5; $l5++) {
                                    m = $l5;
                                    it = step.FCoordinates.Add$1();
                                    it.SetLatitude(l.FCoordinates.GetItem$1(m).GetLatitude());
                                    it.SetLongitude(l.FCoordinates.GetItem$1(m).GetLongitude());
                                  };
                                  if (step.FCoordinates.GetCount() > 0) {
                                    step.FStartLocation.Assign(step.FCoordinates.GetItem$1(0).FCoordinate);
                                    step.FEndLocation.Assign(step.FCoordinates.GetItem$1(step.FCoordinates.GetCount() - 1).FCoordinate);
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
        var $ir = rtl.createIntfRefs();
        try {
          AHeaders.Add$1(pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBaseRequestHeader.$create("Create$1",["Content-Type","application/json"]));
          AHeaders.Add$1(pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBaseRequestHeader.$create("Create$1",["Authorization",$ir.ref(1,this.GetDirectionsProperties()).GetAPIKey()]));
        } finally {
          $ir.free();
        };
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
//# sourceMappingURL=WEBLib.TMSFNCDirections.GeoApify.js.map
