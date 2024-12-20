rtl.module("WEBLib.TMSFNCDirections.Bing",["System"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.RegisterBingDirectionsService = function () {
    if (!pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceBing),{p: $impl, get: function () {
        return this.p.DirectionsService;
      }, set: function (v) {
        rtl.setIntfP(this.p,"DirectionsService",v);
      }})) {
      rtl.setIntfP($impl,"DirectionsService",rtl.queryIntfT($impl.TTMSFNCDirectionsBingService.$create("Create$1"),pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceBing),true);
      pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsPlatformServices.Current().AddPlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceBing),$impl.DirectionsService);
    };
  };
  this.UnRegisterBingDirectionsService = function () {
    pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsPlatformServices.Current().RemovePlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceBing));
  };
  $mod.$implcode = function () {
    $mod.$rtti.$Class("TTMSFNCDirectionsBingService");
    rtl.createClass($impl,"TTMSFNCDirectionsBingDirectionsFactoryService",pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsFactoryService,function () {
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceBing);
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    rtl.createClass($impl,"TTMSFNCDirectionsBingService",$impl.TTMSFNCDirectionsBingDirectionsFactoryService,function () {
      this.DoCreateDirections = function () {
        var Result = null;
        var $ok = false;
        try {
          Result = rtl.setIntfL(Result,rtl.queryIntfT($impl.TTMSFNCDirectionsBingDirections.$create("Create$1"),pas["WEBLib.TMSFNCDirections"].ITMSFNCCustomDirections),true);
          $ok = true;
        } finally {
          if (!$ok) rtl._Release(Result);
        };
        return Result;
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceBing);
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $mod.$rtti.$Class("TTMSFNCDirectionsBingDirections");
    rtl.createClass($impl,"TTMSFNCDirectionsBingDirections",pas["WEBLib.TMSFNCDirections"].TTMSFNCCustomDirectionsInterfacedObject,function () {
      this.$init = function () {
        pas["WEBLib.TMSFNCDirections"].TTMSFNCCustomDirectionsInterfacedObject.$init.call(this);
        this.FTravelMode = 0;
      };
      this.GetIdentifier = function () {
        var Result = "";
        Result = "BingMaps";
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
        Result = "https://dev.virtualearth.net";
        return Result;
      };
      this.GetPath = function (AOrigin, ADestination, AOriginLatitude, AOriginLongitude, ADestinationLatitude, ADestinationLongitude, ATravelMode, AWayPoints) {
        var Result = "";
        var TravelMode = "";
        if (ATravelMode in rtl.createSet(pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmBicycling,pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmTruck)) {
          this.FTravelMode = pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmDriving}
         else this.FTravelMode = ATravelMode;
        var $tmp = this.FTravelMode;
        if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmDriving) {
          TravelMode = "driving"}
         else if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmWalking) {
          TravelMode = "walking"}
         else if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmPublicTransport) TravelMode = "transit";
        Result = "/REST/v1/Routes/" + TravelMode + "/";
        return Result;
      };
      this.GetQuery = function (AOrigin, ADestination, AOriginLatitude, AOriginLongitude, ADestinationLatitude, ADestinationLongitude, AAlternatives, ATravelMode, AWayPointList, AWayPoints, AOptimizeWayPoints, ALocale, AAVoidTolls) {
        var Result = "";
        var WayPoints = "";
        var Alternatives = "";
        var I = 0;
        var $ir = rtl.createIntfRefs();
        try {
          if (AAlternatives) {
            Alternatives = "3"}
           else Alternatives = "1";
          if (ATravelMode in rtl.createSet(pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmBicycling,pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmTruck)) {
            this.FTravelMode = pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmDriving}
           else this.FTravelMode = ATravelMode;
          if (AOrigin === "") AOrigin = pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AOriginLatitude) + "," + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AOriginLongitude);
          if (ADestination === "") ADestination = pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(ADestinationLatitude) + "," + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(ADestinationLongitude);
          if ((rtl.length(AWayPoints) > 0) && (rtl.length(AWayPoints) > 0)) {
            for (var $l = 0, $end = rtl.length(AWayPoints) - 1; $l <= $end; $l++) {
              I = $l;
              WayPoints = WayPoints + "&wayPoint." + pas.SysUtils.IntToStr(I + 2) + "=" + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AWayPoints[I].Latitude) + "," + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AWayPoints[I].Longitude);
            };
            WayPoints = "&wayPoint.1=" + AOrigin + WayPoints + "&wayPoint." + pas.SysUtils.IntToStr(rtl.length(AWayPoints) + 2) + "=" + ADestination;
          } else WayPoints = "&wayPoint.1=" + AOrigin + "&wayPoint.2=" + ADestination;
          Result = "key=" + $ir.ref(1,this.GetDirectionsProperties()).GetAPIKey() + WayPoints + "&optimizeWaypoints=" + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr(AOptimizeWayPoints,true)) + "&routeAttributes=routePath" + "&maxSolutions=" + Alternatives + "&c=" + ALocale;
          if (this.FTravelMode === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmPublicTransport) Result = Result + "&timeType=Departure&dateTime=10:00:00AM";
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
        var co = null;
        var lg = null;
        var cor = null;
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
        var jak = null;
        var i = 0;
        var j = 0;
        var k = 0;
        var l = 0;
        var ob = null;
        var os = null;
        var obs = null;
        var idxs = 0;
        var idxe = 0;
        var corlist = "";
        var distance = "";
        var JJ = 0;
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
                    ARequest.SetStatus(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"statusCode"));
                    ARequest.SetErrorMessage(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"statusDescription"));
                    jar = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(o,"resourceSets"),pas["WEBLib.JSON"].TJSONArray);
                    if (jar != null) {
                      for (var $l = 0, $end = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jar) - 1; $l <= $end; $l++) {
                        i = $l;
                        jo = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jar,i);
                        jal = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jo,"resources"),pas["WEBLib.JSON"].TJSONArray);
                        if (jal != null) {
                          for (var $l1 = 0, $end1 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jal) - 1; $l1 <= $end1; $l1++) {
                            j = $l1;
                            di = d.Add$1();
                            di.FSummary = "Route " + pas.SysUtils.IntToStr(j);
                            jol = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jal,j);
                            distance = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(jol,"travelDistance");
                            if (distance !== "") di.FDistance = pas["WEBLib.TMSFNCMapsCommonTypes"].StrToFloatDot(pas.SysUtils.StringReplace(distance,",",".",{})) * 1000;
                            di.FDuration = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONIntegerValue(jol,"travelDuration");
                            os = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jol,"routePath"),pas["WEBLib.JSON"].TJSONObject);
                            if (os != null) {
                              ob = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(os,"line"),pas["WEBLib.JSON"].TJSONObject);
                              jas = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(ob,"coordinates"),pas["WEBLib.JSON"].TJSONArray);
                              if (jas != null) {
                                for (var $l2 = 0, $end2 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jas) - 1; $l2 <= $end2; $l2++) {
                                  k = $l2;
                                  jos = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jas,k);
                                  co = di.FCoordinates.Add$1();
                                  cor = pas.Classes.TStringList.$create("Create$1");
                                  cor.SetQuoteChar('"');
                                  corlist = pas.SysUtils.StringReplace(jos.ToString(),",",'","',rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
                                  corlist = pas.SysUtils.StringReplace(corlist,"[",'"',rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
                                  corlist = pas.SysUtils.StringReplace(corlist,"]",'"',rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
                                  pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.Split(",",corlist,cor,false);
                                  co.SetLatitude(pas["WEBLib.TMSFNCMapsCommonTypes"].StrToFloatDot(cor.Get(0)));
                                  co.SetLongitude(pas["WEBLib.TMSFNCMapsCommonTypes"].StrToFloatDot(cor.Get(1)));
                                  cor = rtl.freeLoc(cor);
                                };
                              };
                            };
                            jak = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jol,"routeLegs"),pas["WEBLib.JSON"].TJSONArray);
                            if (jak != null) {
                              for (var $l3 = 0, $end3 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jak) - 1; $l3 <= $end3; $l3++) {
                                l = $l3;
                                lg = di.FLegs.Add$1();
                                jol = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jak,l);
                                obs = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jol,"actualStart");
                                if (obs != null) {
                                  jac = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(obs,"coordinates"),pas["WEBLib.JSON"].TJSONArray);
                                  if (jac != null) {
                                    joc = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jac,0);
                                    lg.FStartLocation.SetLatitude(pas["WEBLib.TMSFNCMapsCommonTypes"].StrToFloatDot(joc.ToString()));
                                    joc = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jac,1);
                                    lg.FStartLocation.SetLongitude(pas["WEBLib.TMSFNCMapsCommonTypes"].StrToFloatDot(joc.ToString()));
                                  };
                                };
                                obs = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jol,"actualEnd");
                                if (obs != null) {
                                  jac = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(obs,"coordinates"),pas["WEBLib.JSON"].TJSONArray);
                                  if (jac != null) {
                                    joc = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jac,0);
                                    lg.FEndLocation.SetLatitude(pas["WEBLib.TMSFNCMapsCommonTypes"].StrToFloatDot(joc.ToString()));
                                    joc = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jac,1);
                                    lg.FEndLocation.SetLongitude(pas["WEBLib.TMSFNCMapsCommonTypes"].StrToFloatDot(joc.ToString()));
                                  };
                                };
                                di.FSummary = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(jol,"description");
                                jas = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jol,"routeSubLegs"),pas["WEBLib.JSON"].TJSONArray);
                                if (jas != null) {
                                  for (var $l4 = 0, $end4 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jas) - 1; $l4 <= $end4; $l4++) {
                                    k = $l4;
                                    jos = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jas,k);
                                    obs = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jos,"startWaypoint");
                                    idxs = -1;
                                    if (obs != null) idxs = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONIntegerValue(obs,"routePathIndex");
                                    obs = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jos,"endWaypoint");
                                    idxe = -1;
                                    if (obs != null) idxe = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONIntegerValue(obs,"routePathIndex");
                                    for (var $l5 = idxs, $end5 = idxe; $l5 <= $end5; $l5++) {
                                      JJ = $l5;
                                      if ((JJ >= 0) && (JJ <= (di.FCoordinates.GetCount() - 1))) lg.FCoordinates.Add$1().Assign(di.FCoordinates.GetItem$1(JJ));
                                    };
                                  };
                                };
                                jas = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jol,"itineraryItems"),pas["WEBLib.JSON"].TJSONArray);
                                if (jas != null) {
                                  for (var $l6 = 0, $end6 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jas) - 1; $l6 <= $end6; $l6++) {
                                    k = $l6;
                                    jos = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jas,k);
                                    step = di.FSteps.Add$1();
                                    distance = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(jos,"travelDistance");
                                    if (distance !== "") step.FDistance = Math.round(pas["WEBLib.TMSFNCMapsCommonTypes"].StrToFloatDot(pas.SysUtils.StringReplace(distance,",",".",{})) * 1000);
                                    step.FDuration = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONIntegerValue(jos,"travelDuration");
                                    lg.FDistance = lg.FDistance + step.FDistance;
                                    lg.FDuration = lg.FDuration + step.FDuration;
                                    os = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jos,"instruction"),pas["WEBLib.JSON"].TJSONObject);
                                    if (os != null) step.FInstructions = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(os,"text");
                                    os = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jos,"maneuverPoint"),pas["WEBLib.JSON"].TJSONObject);
                                    if (os != null) {
                                      jac = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(os,"coordinates"),pas["WEBLib.JSON"].TJSONArray);
                                      if (jac != null) {
                                        joc = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jac,0);
                                        step.FStartLocation.SetLatitude(pas["WEBLib.TMSFNCMapsCommonTypes"].StrToFloatDot(joc.ToString()));
                                        joc = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jac,1);
                                        step.FStartLocation.SetLongitude(pas["WEBLib.TMSFNCMapsCommonTypes"].StrToFloatDot(joc.ToString()));
                                      };
                                    };
                                    lstep = lg.FSteps.Add$1();
                                    lstep.Assign(step);
                                  };
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
//# sourceMappingURL=WEBLib.TMSFNCDirections.Bing.js.map
