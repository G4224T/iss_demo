rtl.module("WEBLib.TMSFNCDirections.Azure",["System"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.RegisterAzureDirectionsService = function () {
    if (!pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceAzure),{p: $impl, get: function () {
        return this.p.DirectionsService;
      }, set: function (v) {
        rtl.setIntfP(this.p,"DirectionsService",v);
      }})) {
      rtl.setIntfP($impl,"DirectionsService",rtl.queryIntfT($impl.TTMSFNCDirectionsAzureService.$create("Create$1"),pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceAzure),true);
      pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsPlatformServices.Current().AddPlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceAzure),$impl.DirectionsService);
    };
  };
  this.UnRegisterAzureDirectionsService = function () {
    pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsPlatformServices.Current().RemovePlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceAzure));
  };
  $mod.$implcode = function () {
    $mod.$rtti.$Class("TTMSFNCDirectionsAzureService");
    rtl.createClass($impl,"TTMSFNCDirectionsAzureDirectionsFactoryService",pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsFactoryService,function () {
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceAzure);
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    rtl.createClass($impl,"TTMSFNCDirectionsAzureService",$impl.TTMSFNCDirectionsAzureDirectionsFactoryService,function () {
      this.DoCreateDirections = function () {
        var Result = null;
        var $ok = false;
        try {
          Result = rtl.setIntfL(Result,rtl.queryIntfT($impl.TTMSFNCDirectionsAzureDirections.$create("Create$1"),pas["WEBLib.TMSFNCDirections"].ITMSFNCCustomDirections),true);
          $ok = true;
        } finally {
          if (!$ok) rtl._Release(Result);
        };
        return Result;
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceAzure);
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $mod.$rtti.$Class("TTMSFNCDirectionsAzureDirections");
    rtl.createClass($impl,"TTMSFNCDirectionsAzureDirections",pas["WEBLib.TMSFNCDirections"].TTMSFNCCustomDirectionsInterfacedObject,function () {
      this.$init = function () {
        pas["WEBLib.TMSFNCDirections"].TTMSFNCCustomDirectionsInterfacedObject.$init.call(this);
        this.FTravelMode = 0;
      };
      this.GetIdentifier = function () {
        var Result = "";
        Result = "Azure";
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
        Result = "https://atlas.microsoft.com";
        return Result;
      };
      this.GetPath = function (AOrigin, ADestination, AOriginLatitude, AOriginLongitude, ADestinationLatitude, ADestinationLongitude, ATravelMode, AWayPoints) {
        var Result = "";
        Result = "/route/directions/json";
        return Result;
      };
      this.GetQuery = function (AOrigin, ADestination, AOriginLatitude, AOriginLongitude, ADestinationLatitude, ADestinationLongitude, AAlternatives, ATravelMode, AWayPointList, AWayPoints, AOptimizeWayPoints, ALocale, AAVoidTolls) {
        var Result = "";
        var TravelMode = "";
        var WayPoints = "";
        var Alternatives = "";
        var I = 0;
        var $ir = rtl.createIntfRefs();
        try {
          if (AAlternatives) {
            Alternatives = "5"}
           else Alternatives = "0";
          if (ATravelMode in rtl.createSet(pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmPublicTransport)) {
            this.FTravelMode = pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmDriving}
           else this.FTravelMode = ATravelMode;
          var $tmp = ATravelMode;
          if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmDriving) {
            TravelMode = "car"}
           else if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmWalking) {
            TravelMode = "pedestrian"}
           else if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmBicycling) {
            TravelMode = "bicycle"}
           else if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmTruck) TravelMode = "truck";
          AOrigin = pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AOriginLatitude) + "," + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AOriginLongitude);
          ADestination = pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(ADestinationLatitude) + "," + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(ADestinationLongitude);
          WayPoints = AOrigin;
          if ((rtl.length(AWayPoints) > 0) && (rtl.length(AWayPoints) > 0)) {
            for (var $l = 0, $end = rtl.length(AWayPoints) - 1; $l <= $end; $l++) {
              I = $l;
              WayPoints = WayPoints + ":" + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AWayPoints[I].Latitude) + "," + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AWayPoints[I].Longitude);
            };
          };
          WayPoints = WayPoints + ":" + ADestination;
          Result = "api-version=1.0" + "&subscription-key=" + $ir.ref(1,this.GetDirectionsProperties()).GetAPIKey() + "&query=" + WayPoints + "&maxAlternatives=" + Alternatives + "&computeBestOrder=" + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr(AOptimizeWayPoints,true)) + "&instructionsType=text" + "&travelMode=" + TravelMode + "&language=" + ALocale;
          if (AAVoidTolls) Result = Result + "&avoid=tollRoads";
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
        var co = null;
        var step = null;
        var wp = null;
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
        var ol = null;
        var os = null;
        var oc = null;
        var wpIndex = [];
        var providedIndex = 0;
        var optimizedIndex = 0;
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
                    oc = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(o,"error"),pas["WEBLib.JSON"].TJSONObject);
                    if (oc != null) {
                      ARequest.SetStatus(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"code"));
                      ARequest.SetErrorMessage(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"message"));
                    };
                    wpIndex = rtl.arraySetLength(wpIndex,0,1);
                    wpIndex[0] = -1;
                    jal = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(o,"optimizedWaypoints"),pas["WEBLib.JSON"].TJSONArray);
                    if (jal != null) {
                      wpIndex = rtl.arraySetLength(wpIndex,0,pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jal) + 1);
                      for (var $l = 0, $end = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jal) - 1; $l <= $end; $l++) {
                        j = $l;
                        jol = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jal,j);
                        if (jol != null) {
                          providedIndex = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONIntegerValue(jol,"providedIndex");
                          optimizedIndex = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONIntegerValue(jol,"optimizedIndex");
                          wpIndex[providedIndex + 1] = optimizedIndex;
                        };
                      };
                    };
                    jar = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(o,"routes"),pas["WEBLib.JSON"].TJSONArray);
                    if (jar != null) {
                      for (var $l1 = 0, $end1 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jar) - 1; $l1 <= $end1; $l1++) {
                        i = $l1;
                        jo = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jar,i);
                        di = d.Add$1();
                        di.FSummary = "Route " + pas.SysUtils.IntToStr(i);
                        jal = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jo,"legs"),pas["WEBLib.JSON"].TJSONArray);
                        if (jal != null) {
                          for (var $l2 = 0, $end2 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jal) - 1; $l2 <= $end2; $l2++) {
                            j = $l2;
                            jol = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jal,j);
                            l = di.FLegs.Add$1();
                            wp = di.FWayPoints.Add$1();
                            if (rtl.length(wpIndex) > j) wp.FOptimizedIndex = wpIndex[j];
                            ol = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jol,"summary"),pas["WEBLib.JSON"].TJSONObject);
                            if (ol != null) {
                              l.FDistance = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONIntegerValue(ol,"lengthInMeters");
                              di.FDistance = di.FDistance + l.FDistance;
                              l.FDuration = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONIntegerValue(ol,"travelTimeInSeconds");
                              di.FDuration = di.FDuration + l.FDuration;
                              wp.FDistance = l.FDistance;
                              wp.FDuration = l.FDuration;
                            };
                            jas = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jol,"points"),pas["WEBLib.JSON"].TJSONArray);
                            if (jas != null) {
                              for (var $l3 = 0, $end3 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jas) - 1; $l3 <= $end3; $l3++) {
                                k = $l3;
                                jos = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jas,k);
                                co = di.FCoordinates.Add$1();
                                co.SetLatitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(jos,"latitude"));
                                co.SetLongitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(jos,"longitude"));
                                l.FCoordinates.Add$1().Assign(co);
                                if (k === 0) {
                                  l.FStartLocation.SetLatitude(co.GetLatitude());
                                  l.FStartLocation.SetLongitude(co.GetLongitude());
                                } else if (k === (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jas) - 1)) {
                                  l.FEndLocation.SetLatitude(co.GetLatitude());
                                  l.FEndLocation.SetLongitude(co.GetLongitude());
                                };
                              };
                            };
                          };
                        };
                        ol = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jo,"guidance"),pas["WEBLib.JSON"].TJSONObject);
                        if (ol != null) {
                          jas = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(ol,"instructions"),pas["WEBLib.JSON"].TJSONArray);
                          if (jas != null) {
                            for (var $l4 = 0, $end4 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jas) - 1; $l4 <= $end4; $l4++) {
                              k = $l4;
                              jos = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jas,k);
                              step = di.FSteps.Add$1();
                              step.FDistance = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONIntegerValue(jos,"routeOffsetInMeters");
                              step.FDuration = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONIntegerValue(jos,"travelTimeInSeconds");
                              os = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jos,"point"),pas["WEBLib.JSON"].TJSONObject);
                              if (os != null) {
                                step.FStartLocation.SetLatitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(os,"latitude"));
                                step.FStartLocation.SetLongitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(os,"longitude"));
                              };
                              step.FInstructions = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(jos,"message");
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
//# sourceMappingURL=WEBLib.TMSFNCDirections.Azure.js.map
