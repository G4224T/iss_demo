rtl.module("WEBLib.TMSFNCDirections.OpenRouteService",["System"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.RegisterOpenRouteServiceDirectionsService = function () {
    if (!pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceOpenRouteService),{p: $impl, get: function () {
        return this.p.DirectionsService;
      }, set: function (v) {
        rtl.setIntfP(this.p,"DirectionsService",v);
      }})) {
      rtl.setIntfP($impl,"DirectionsService",rtl.queryIntfT($impl.TTMSFNCDirectionsOpenRouteServiceService.$create("Create$1"),pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceOpenRouteService),true);
      pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsPlatformServices.Current().AddPlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceOpenRouteService),$impl.DirectionsService);
    };
  };
  this.UnRegisterOpenRouteServiceDirectionsService = function () {
    pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsPlatformServices.Current().RemovePlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceOpenRouteService));
  };
  $mod.$implcode = function () {
    $mod.$rtti.$Class("TTMSFNCDirectionsOpenRouteServiceService");
    rtl.createClass($impl,"TTMSFNCDirectionsOpenRouteServiceDirectionsFactoryService",pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsFactoryService,function () {
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceOpenRouteService);
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    rtl.createClass($impl,"TTMSFNCDirectionsOpenRouteServiceService",$impl.TTMSFNCDirectionsOpenRouteServiceDirectionsFactoryService,function () {
      this.DoCreateDirections = function () {
        var Result = null;
        var $ok = false;
        try {
          Result = rtl.setIntfL(Result,rtl.queryIntfT($impl.TTMSFNCDirectionsOpenRouteServiceDirections.$create("Create$1"),pas["WEBLib.TMSFNCDirections"].ITMSFNCCustomDirections),true);
          $ok = true;
        } finally {
          if (!$ok) rtl._Release(Result);
        };
        return Result;
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceOpenRouteService);
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $mod.$rtti.$Class("TTMSFNCDirectionsOpenRouteServiceDirections");
    rtl.createClass($impl,"TTMSFNCDirectionsOpenRouteServiceDirections",pas["WEBLib.TMSFNCDirections"].TTMSFNCCustomDirectionsInterfacedObject,function () {
      this.$init = function () {
        pas["WEBLib.TMSFNCDirections"].TTMSFNCCustomDirectionsInterfacedObject.$init.call(this);
        this.FTravelMode = 0;
      };
      this.GetIdentifier = function () {
        var Result = "";
        Result = "OpenRouteService";
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
        Result = pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBaseRequestMethod.rmPOST;
        return Result;
      };
      this.GetHost = function () {
        var Result = "";
        Result = "https://api.openrouteservice.org";
        return Result;
      };
      this.GetPath = function (AOrigin, ADestination, AOriginLatitude, AOriginLongitude, ADestinationLatitude, ADestinationLongitude, ATravelMode, AWayPoints) {
        var Result = "";
        var TravelMode = "";
        if (ATravelMode in rtl.createSet(pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmPublicTransport)) {
          this.FTravelMode = pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmDriving}
         else this.FTravelMode = ATravelMode;
        var $tmp = ATravelMode;
        if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmDriving) {
          TravelMode = "driving-car"}
         else if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmWalking) {
          TravelMode = "foot-walking"}
         else if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmBicycling) {
          TravelMode = "cycling-regular"}
         else if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmPublicTransport) {
          TravelMode = "driving-car"}
         else if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmTruck) TravelMode = "driving-hgv";
        Result = "/v2/directions/" + TravelMode;
        return Result;
      };
      this.GetQuery = function (AOrigin, ADestination, AOriginLatitude, AOriginLongitude, ADestinationLatitude, ADestinationLongitude, AAlternatives, ATravelMode, AWayPointList, AWayPoints, AOptimizeWayPoints, ALocale, AAVoidTolls) {
        var Result = "";
        Result = "";
        return Result;
      };
      this.GetPostData = function (AOrigin, ADestination, AOriginLatitude, AOriginLongitude, ADestinationLatitude, ADestinationLongitude, AAlternatives, ATravelMode, AWayPointList, AWayPoints, AOptimizeWayPoints, ALocale, AAvoidTolls) {
        var $Self = this;
        var Result = "";
        var coords = "";
        var tolls = "";
        var alts = "";
        var lang = "";
        var I = 0;
        var wpcount = 0;
        function CoordToStr(Latitude, Longitude) {
          var Result = "";
          Result = "[" + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(Longitude) + "," + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(Latitude) + "]";
          return Result;
        };
        wpcount = 0;
        coords = CoordToStr(AOriginLatitude,AOriginLongitude);
        if (rtl.length(AWayPoints) > 0) {
          wpcount = rtl.length(AWayPoints);
          for (var $l = 0, $end = wpcount - 1; $l <= $end; $l++) {
            I = $l;
            coords = coords + ", " + CoordToStr(AWayPoints[I].Latitude,AWayPoints[I].Longitude);
          };
        };
        coords = coords + ", " + CoordToStr(ADestinationLatitude,ADestinationLongitude);
        if (ATravelMode in rtl.createSet(pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmDriving,pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmTruck)) {
          if (AAvoidTolls) tolls = ',"options":{"avoid_features":["tollways"]}';
        };
        if (wpcount <= 0) {
          if (AAlternatives) alts = ',"alternative_routes":{"target_count":2}';
        };
        if (ALocale !== "") lang = ', "language": "' + ALocale + '"';
        Result = '{"coordinates":[' + coords + "]" + lang + alts + tolls + "}";
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
        var jab = null;
        var i = 0;
        var j = 0;
        var k = 0;
        var m = 0;
        var startindex = 0;
        var endindex = 0;
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
                    ARequest.SetErrorMessage(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"error"));
                    if (ARequest.FErrorMessage !== "") ARequest.SetStatus("error");
                    jar = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(o,"routes"),pas["WEBLib.JSON"].TJSONArray);
                    if (jar != null) {
                      for (var $l = 0, $end = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jar) - 1; $l <= $end; $l++) {
                        i = $l;
                        jo = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jar,i);
                        di = d.Add$1();
                        ol = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jo,"summary"),pas["WEBLib.JSON"].TJSONObject);
                        if (ol != null) {
                          di.FDistance = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(ol,"distance");
                          di.FDuration = Math.round(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(ol,"duration"));
                        };
                        pas["WEBLib.TMSFNCDirections"].DecodeValues(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(jo,"geometry"),di.FCoordinates);
                        jal = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jo,"segments"),pas["WEBLib.JSON"].TJSONArray);
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
                                step.FInstructions = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(jos,"instruction");
                                jab = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jos,"way_points"),pas["WEBLib.JSON"].TJSONArray);
                                if (jar != null) {
                                  startindex = 0;
                                  endindex = 0;
                                  for (var $l3 = 0, $end3 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jab) - 1; $l3 <= $end3; $l3++) {
                                    m = $l3;
                                    joar = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jab,m);
                                    if (m === 0) startindex = Math.round(pas["WEBLib.TMSFNCMapsCommonTypes"].StrToFloatDot(joar.GetStrValue()));
                                    if (m === 1) endindex = Math.round(pas["WEBLib.TMSFNCMapsCommonTypes"].StrToFloatDot(joar.GetStrValue()));
                                  };
                                  for (var $l4 = startindex, $end4 = endindex; $l4 <= $end4; $l4++) {
                                    m = $l4;
                                    it = step.FCoordinates.Add$1();
                                    it.SetLatitude(di.FCoordinates.GetItem$1(m).GetLatitude());
                                    it.SetLongitude(di.FCoordinates.GetItem$1(m).GetLongitude());
                                    lit = l.FCoordinates.Add$1();
                                    lit.SetLatitude(it.GetLatitude());
                                    lit.SetLongitude(it.GetLongitude());
                                  };
                                  if (step.FCoordinates.GetCount() > 0) {
                                    step.FStartLocation.Assign(step.FCoordinates.GetItem$1(0).FCoordinate);
                                    step.FEndLocation.Assign(step.FCoordinates.GetItem$1(step.FCoordinates.GetCount() - 1).FCoordinate);
                                  };
                                  lstep = l.FSteps.Add$1();
                                  lstep.Assign(step);
                                };
                              };
                              if (l.FCoordinates.GetCount() > 0) {
                                l.FStartLocation.Assign(l.FCoordinates.GetItem$1(0).FCoordinate);
                                l.FEndLocation.Assign(l.FCoordinates.GetItem$1(l.FCoordinates.GetCount() - 1).FCoordinate);
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
//# sourceMappingURL=WEBLib.TMSFNCDirections.OpenRouteService.js.map
