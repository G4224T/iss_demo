rtl.module("WEBLib.TMSFNCDirections.GoogleRoutes",["System"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.RegisterGoogleRoutesDirectionsService = function () {
    if (!pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceGoogleRoutes),{p: $impl, get: function () {
        return this.p.DirectionsService;
      }, set: function (v) {
        rtl.setIntfP(this.p,"DirectionsService",v);
      }})) {
      rtl.setIntfP($impl,"DirectionsService",rtl.queryIntfT($impl.TTMSFNCDirectionsGoogleRoutesService.$create("Create$1"),pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceGoogleRoutes),true);
      pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsPlatformServices.Current().AddPlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceGoogleRoutes),$impl.DirectionsService);
    };
  };
  this.UnRegisterGoogleRoutesDirectionsService = function () {
    pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsPlatformServices.Current().RemovePlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceGoogleRoutes));
  };
  $mod.$implcode = function () {
    $impl.LB = "\r";
    $mod.$rtti.$Class("TTMSFNCDirectionsGoogleRoutesService");
    rtl.createClass($impl,"TTMSFNCDirectionsGoogleRoutesDirectionsFactoryService",pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsFactoryService,function () {
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceGoogleRoutes);
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    rtl.createClass($impl,"TTMSFNCDirectionsGoogleRoutesService",$impl.TTMSFNCDirectionsGoogleRoutesDirectionsFactoryService,function () {
      this.DoCreateDirections = function () {
        var Result = null;
        var $ok = false;
        try {
          Result = rtl.setIntfL(Result,rtl.queryIntfT($impl.TTMSFNCDirectionsGoogleRoutesDirections.$create("Create$1"),pas["WEBLib.TMSFNCDirections"].ITMSFNCCustomDirections),true);
          $ok = true;
        } finally {
          if (!$ok) rtl._Release(Result);
        };
        return Result;
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceGoogleRoutes);
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $mod.$rtti.$Class("TTMSFNCDirectionsGoogleRoutesDirections");
    rtl.createClass($impl,"TTMSFNCDirectionsGoogleRoutesDirections",pas["WEBLib.TMSFNCDirections"].TTMSFNCCustomDirectionsInterfacedObject,function () {
      this.$init = function () {
        pas["WEBLib.TMSFNCDirections"].TTMSFNCCustomDirectionsInterfacedObject.$init.call(this);
        this.FTravelMode = 0;
      };
      this.GetIdentifier = function () {
        var Result = "";
        Result = "GoogleRoutes";
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
        Result = "https://routes.googleapis.com";
        return Result;
      };
      this.GetPath = function (AOrigin, ADestination, AOriginLatitude, AOriginLongitude, ADestinationLatitude, ADestinationLongitude, ATravelMode, AWayPoints) {
        var Result = "";
        Result = "/directions/v2:computeRoutes";
        return Result;
      };
      this.GetQuery = function (AOrigin, ADestination, AOriginLatitude, AOriginLongitude, ADestinationLatitude, ADestinationLongitude, AAlternatives, ATravelMode, AWayPointList, AWayPoints, AOptimizeWayPoints, ALocale, AAVoidTolls) {
        var Result = "";
        var $ir = rtl.createIntfRefs();
        try {
          Result = "key=" + $ir.ref(1,this.GetDirectionsProperties()).GetAPIKey();
        } finally {
          $ir.free();
        };
        return Result;
      };
      this.GetPostData = function (AOrigin, ADestination, AOriginLatitude, AOriginLongitude, ADestinationLatitude, ADestinationLongitude, AAlternatives, ATravelMode, AWayPointList, AWayPoints, AOptimizeWayPoints, ALocale, AAvoidTolls) {
        var Result = "";
        var TravelMode = "";
        var WayPoints = "";
        var Locale = "";
        var I = 0;
        var $ir = rtl.createIntfRefs();
        try {
          if (ATravelMode in rtl.createSet(pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmTruck)) {
            this.FTravelMode = pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmDriving}
           else this.FTravelMode = ATravelMode;
          var $tmp = ATravelMode;
          if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmDriving) {
            TravelMode = "DRIVE"}
           else if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmWalking) {
            TravelMode = "WALK"}
           else if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmBicycling) {
            TravelMode = "BICYCLE"}
           else if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmPublicTransport) TravelMode = "TRANSIT";
          if (ALocale === "") {
            Locale = "EN";
          } else {
            Locale = ALocale;
          };
          WayPoints = "";
          if (ATravelMode !== pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmPublicTransport) {
            if ((AWayPointList != null) && (AWayPointList.GetCount() > 0)) {
              WayPoints = '  "intermediates": [';
              for (var $l = 0, $end = AWayPointList.GetCount() - 1; $l <= $end; $l++) {
                I = $l;
                WayPoints = WayPoints + '{"address": "' + AWayPointList.Get(I) + '"},';
              };
              WayPoints = WayPoints + "]";
            };
            if ((rtl.length(AWayPoints) > 0) && (rtl.length(AWayPoints) > 0)) {
              WayPoints = '  "intermediates": [';
              for (var $l1 = 0, $end1 = AWayPointList.GetCount() - 1; $l1 <= $end1; $l1++) {
                I = $l1;
                WayPoints = WayPoints + '    "location":{' + $impl.LB + '      "latLng":{' + $impl.LB + '        "latitude": ' + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AWayPoints[I].Latitude) + "," + $impl.LB + '        "longitude": ' + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AWayPoints[I].Longitude) + "" + $impl.LB + "      }" + $impl.LB + "    }" + $impl.LB;
              };
              WayPoints = WayPoints + "]" + $impl.LB;
            };
            if (WayPoints !== "") {
              WayPoints = WayPoints + ', "optimizeWaypointOrder": ' + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr(AOptimizeWayPoints,true)) + "" + $impl.LB;
            };
          };
          Result = "{" + $impl.LB + '  "origin":{' + $impl.LB;
          if (AOrigin !== "") {
            Result = Result + '    "address": "' + AOrigin + '"' + $impl.LB;
          } else {
            Result = Result + '    "location":{' + $impl.LB + '      "latLng":{' + $impl.LB + '        "latitude": ' + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AOriginLatitude) + "," + $impl.LB + '        "longitude": ' + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AOriginLongitude) + "" + $impl.LB + "      }" + $impl.LB + "    }" + $impl.LB;
          };
          Result = Result + "  }," + $impl.LB + '  "destination":{' + $impl.LB;
          if (ADestination !== "") {
            Result = Result + '    "address": "' + ADestination + '"' + $impl.LB;
          } else {
            Result = Result + '    "location":{' + $impl.LB + '      "latLng":{' + $impl.LB + '        "latitude": ' + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(ADestinationLatitude) + "," + $impl.LB + '        "longitude": ' + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(ADestinationLongitude) + "" + $impl.LB + "      }" + $impl.LB + "    }" + $impl.LB;
          };
          Result = Result + "  }," + $impl.LB + '  "travelMode": "' + TravelMode + '",' + $impl.LB;
          Result = $ir.ref(1,this.GetDirectionsProperties()).GetGoogleRoutesOptions({get: function () {
              return Result;
            }, set: function (v) {
              Result = v;
            }},ATravelMode,rtl.arrayRef(AWayPoints),AWayPointList);
          Result = Result + '    "computeAlternativeRoutes": ' + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr(AAlternatives,true)) + "," + $impl.LB + '    "routeModifiers": {' + $impl.LB + '    "avoidTolls": ' + pas.SysUtils.LowerCase(pas.SysUtils.BoolToStr(AAvoidTolls,true)) + "," + $impl.LB + '    "avoidHighways": false,' + $impl.LB + '    "avoidFerries": false,' + $impl.LB + "  }," + $impl.LB + '  "languageCode": "' + Locale + '",' + $impl.LB + '  "units": "IMPERIAL",' + $impl.LB + WayPoints + "}" + $impl.LB;
        } finally {
          $ir.free();
        };
        return Result;
      };
      this.Parse = function (ARequest, ARequestResult) {
        var d = null;
        var di = null;
        var step = null;
        var lstep = null;
        var wp = null;
        var l = null;
        var spi = null;
        var fcm = "";
        var fcmint = 0;
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
        var os = null;
        var ot = null;
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
                        di.FSummary = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(jo,"description");
                        di.FDistance = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONIntegerValue(jo,"distanceMeters");
                        di.FDuration = pas.SysUtils.StrToInt(pas.SysUtils.StringReplace(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(jo,"duration"),"s","",{}));
                        os = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jo,"polyline"),pas["WEBLib.JSON"].TJSONObject);
                        if (os != null) {
                          pas["WEBLib.TMSFNCDirections"].DecodeValues(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(os,"encodedPolyline"),di.FCoordinates);
                        };
                        wpIndex = rtl.arraySetLength(wpIndex,0,1);
                        wpIndex[0] = -1;
                        jal = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jo,"optimizedIntermediateWaypointIndex"),pas["WEBLib.JSON"].TJSONArray);
                        if (jal != null) {
                          wpIndex = rtl.arraySetLength(wpIndex,0,pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jal) + 1);
                          for (var $l1 = 0, $end1 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jal) - 1; $l1 <= $end1; $l1++) {
                            j = $l1;
                            jol = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jal,j);
                            if (jol.GetStrValue() !== "") wpIndex[j + 1] = pas.SysUtils.StrToInt(jol.GetStrValue());
                          };
                        };
                        if (pas["WEBLib.TMSFNCGoogleRoutes"].TTMSFNCGoogleRoutesItem.isPrototypeOf(di)) {
                          jas = pas["WEBLib.TMSFNCTypes"].TTMSFNCJSONValueHelper.GetAsArray.call(pas["WEBLib.TMSFNCTypes"].TTMSFNCJSONValueHelper.GetProperties.call(jo,"routeLabels"));
                          if (jas != null) {
                            pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.FromJSON.call(rtl.as(di,pas["WEBLib.TMSFNCGoogleRoutes"].TTMSFNCGoogleRoutesItem).FRouteLabels,jas.ToJSON());
                          };
                          jos = pas["WEBLib.TMSFNCTypes"].TTMSFNCJSONValueHelper.GetProperties.call(jo,"travelAdvisory");
                          if (jos != null) {
                            fcm = pas["WEBLib.TMSFNCTypes"].TTMSFNCJSONValueHelper.GetAsString.call(pas["WEBLib.TMSFNCTypes"].TTMSFNCJSONValueHelper.GetProperties.call(jos,"fuelConsumptionMicroliters"));
                            pas.SysUtils.TryStrToInt(fcm,{get: function () {
                                return fcmint;
                              }, set: function (v) {
                                fcmint = v;
                              }});
                            rtl.as(di,pas["WEBLib.TMSFNCGoogleRoutes"].TTMSFNCGoogleRoutesItem).FTravelAdvisory.SetFuelConsumptionMicroliters(fcmint);
                            jas = pas["WEBLib.TMSFNCTypes"].TTMSFNCJSONValueHelper.GetAsArray.call(pas["WEBLib.TMSFNCTypes"].TTMSFNCJSONValueHelper.GetProperties.call(jos,"speedReadingIntervals"));
                            if (jas != null) {
                              for (var $l2 = 0, $end2 = jas.GetCount() - 1; $l2 <= $end2; $l2++) {
                                k = $l2;
                                spi = rtl.as(di,pas["WEBLib.TMSFNCGoogleRoutes"].TTMSFNCGoogleRoutesItem).FTravelAdvisory.FSpeedReadingIntervals.Add$1();
                                pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.FromJSON.call(spi,pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON$1.call(pas["WEBLib.TMSFNCTypes"].TTMSFNCJSONArrayHelper.GetValues.call(jas,k)));
                              };
                            };
                          };
                        };
                        jal = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jo,"legs"),pas["WEBLib.JSON"].TJSONArray);
                        if (jal != null) {
                          for (var $l3 = 0, $end3 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jal) - 1; $l3 <= $end3; $l3++) {
                            j = $l3;
                            jol = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jal,j);
                            l = di.FLegs.Add$1();
                            wp = di.FWayPoints.Add$1();
                            if (rtl.length(wpIndex) > j) wp.FOptimizedIndex = wpIndex[j];
                            l.FDistance = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONIntegerValue(jol,"distanceMeters");
                            wp.FDistance = l.FDistance;
                            l.FDuration = pas.SysUtils.StrToInt(pas.SysUtils.StringReplace(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(jol,"duration"),"s","",{}));
                            wp.FDuration = l.FDuration;
                            os = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jol,"polyline"),pas["WEBLib.JSON"].TJSONObject);
                            if (os != null) {
                              pas["WEBLib.TMSFNCDirections"].DecodeValues(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(os,"encodedPolyline"),l.FCoordinates);
                            };
                            os = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jol,"endLocation"),pas["WEBLib.JSON"].TJSONObject);
                            if (os != null) {
                              ot = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(os,"latLng"),pas["WEBLib.JSON"].TJSONObject);
                              if (ot != null) {
                                l.FEndLocation.SetLatitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(ot,"latitude"));
                                l.FEndLocation.SetLongitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(ot,"longitude"));
                              };
                            };
                            os = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jol,"startLocation"),pas["WEBLib.JSON"].TJSONObject);
                            if (os != null) {
                              ot = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(os,"latLng"),pas["WEBLib.JSON"].TJSONObject);
                              if (ot != null) {
                                l.FStartLocation.SetLatitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(ot,"latitude"));
                                l.FStartLocation.SetLongitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(ot,"longitude"));
                              };
                            };
                            jas = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jol,"steps"),pas["WEBLib.JSON"].TJSONArray);
                            if (jas != null) {
                              for (var $l4 = 0, $end4 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jas) - 1; $l4 <= $end4; $l4++) {
                                k = $l4;
                                jos = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jas,k);
                                step = di.FSteps.Add$1();
                                step.FDistance = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONIntegerValue(jos,"distanceMeters");
                                step.FDuration = pas.SysUtils.StrToInt(pas.SysUtils.StringReplace(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(jos,"staticDuration"),"s","",{}));
                                os = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jos,"navigationInstruction"),pas["WEBLib.JSON"].TJSONObject);
                                if (os != null) {
                                  step.FInstructions = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(os,"instructions");
                                };
                                os = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jos,"polyline"),pas["WEBLib.JSON"].TJSONObject);
                                if (os != null) pas["WEBLib.TMSFNCDirections"].DecodeValues(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(os,"encodedPolyline"),step.FCoordinates);
                                for (var $l5 = 0, $end5 = step.FCoordinates.GetCount() - 1; $l5 <= $end5; $l5++) {
                                  lm = $l5;
                                  l.FCoordinates.Add$1().Assign(step.FCoordinates.GetItem$1(lm));
                                };
                                os = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jos,"endLocation"),pas["WEBLib.JSON"].TJSONObject);
                                if (os != null) {
                                  ot = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(os,"latLng"),pas["WEBLib.JSON"].TJSONObject);
                                  if (ot != null) {
                                    step.FEndLocation.SetLatitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(ot,"latitude"));
                                    step.FEndLocation.SetLongitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(ot,"longitude"));
                                  };
                                };
                                os = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jos,"startLocation"),pas["WEBLib.JSON"].TJSONObject);
                                if (os != null) {
                                  ot = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(os,"latLng"),pas["WEBLib.JSON"].TJSONObject);
                                  if (ot != null) {
                                    step.FStartLocation.SetLatitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(ot,"latitude"));
                                    step.FStartLocation.SetLongitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(ot,"longitude"));
                                  };
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
        var Fields = null;
        Fields = pas.Classes.TStringList.$create("Create$1");
        Fields.Add("routes.distanceMeters");
        Fields.Add("routes.duration");
        Fields.Add("routes.polyline.encodedPolyline");
        Fields.Add("routes.description");
        Fields.Add("routes.routeLabels");
        Fields.Add("routes.travelAdvisory");
        Fields.Add("routes.optimizedIntermediateWaypointIndex");
        Fields.Add("routes.legs.distanceMeters");
        Fields.Add("routes.legs.duration");
        Fields.Add("routes.legs.polyline.encodedPolyline");
        Fields.Add("routes.legs.startLocation");
        Fields.Add("routes.legs.endLocation");
        Fields.Add("routes.legs.steps.distanceMeters");
        Fields.Add("routes.legs.steps.staticDuration");
        Fields.Add("routes.legs.steps.polyline.encodedPolyline");
        Fields.Add("routes.legs.steps.startLocation");
        Fields.Add("routes.legs.steps.endLocation");
        Fields.Add("routes.legs.steps.navigationInstruction.instructions");
        AHeaders.Add$1(pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBaseRequestHeader.$create("Create$1",["X-Goog-FieldMask",Fields.GetCommaText()]));
        Fields = rtl.freeLoc(Fields);
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
},["Classes","Math","DateUtils","Types","SysUtils","WEBLib.TMSFNCDirections","WEBLib.TMSFNCGoogleRoutes","WEBLib.TMSFNCUtils","WEBLib.TMSFNCTypes","WEBLib.TMSFNCMapsCommonTypes","WEBLib.TMSFNCCloudBase","contnrs","Web","WEBLib.JSON"]);
//# sourceMappingURL=WEBLib.TMSFNCDirections.GoogleRoutes.js.map
