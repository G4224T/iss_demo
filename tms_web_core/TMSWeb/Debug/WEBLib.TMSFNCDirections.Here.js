rtl.module("WEBLib.TMSFNCDirections.Here",["System"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.RegisterHereDirectionsService = function () {
    if (!pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceHere),{p: $impl, get: function () {
        return this.p.DirectionsService;
      }, set: function (v) {
        rtl.setIntfP(this.p,"DirectionsService",v);
      }})) {
      rtl.setIntfP($impl,"DirectionsService",rtl.queryIntfT($impl.TTMSFNCDirectionsHereService.$create("Create$1"),pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceHere),true);
      pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsPlatformServices.Current().AddPlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceHere),$impl.DirectionsService);
    };
  };
  this.UnRegisterHereDirectionsService = function () {
    pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsPlatformServices.Current().RemovePlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceHere));
  };
  $mod.$implcode = function () {
    $mod.$rtti.$Class("TTMSFNCDirectionsHereService");
    rtl.createClass($impl,"TTMSFNCDirectionsHereDirectionsFactoryService",pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsFactoryService,function () {
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceHere);
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    rtl.createClass($impl,"TTMSFNCDirectionsHereService",$impl.TTMSFNCDirectionsHereDirectionsFactoryService,function () {
      this.DoCreateDirections = function () {
        var Result = null;
        var $ok = false;
        try {
          Result = rtl.setIntfL(Result,rtl.queryIntfT($impl.TTMSFNCDirectionsHereDirections.$create("Create$1"),pas["WEBLib.TMSFNCDirections"].ITMSFNCCustomDirections),true);
          $ok = true;
        } finally {
          if (!$ok) rtl._Release(Result);
        };
        return Result;
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsServiceHere);
      rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCDirectionsService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $mod.$rtti.$StaticArray("DECODING_TABLE$a",{dims: [78], eltype: rtl.longint});
    $impl.DECODING_TABLE = [62,-1,-1,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,63,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51];
    $mod.$rtti.$Class("TTMSFNCDirectionsHereDirections");
    $impl.TTMSFNCDirectionsHereDirectionsThirdDimensionValue = {"0": "tdAbsent", tdAbsent: 0, "1": "tdLevel", tdLevel: 1, "2": "tdAltitude", tdAltitude: 2, "3": "tdElevation", tdElevation: 3, "4": "tdReserved1", tdReserved1: 4, "5": "tdReserved2", tdReserved2: 5, "6": "tdCustom1", tdCustom1: 6, "7": "tdCustom2", tdCustom2: 7};
    $mod.$rtti.$Enum("TTMSFNCDirectionsHereDirectionsThirdDimensionValue",{minvalue: 0, maxvalue: 7, ordtype: 1, enumtype: $impl.TTMSFNCDirectionsHereDirectionsThirdDimensionValue});
    $mod.$rtti.$Set("TTMSFNCDirectionsHereDirectionsThirdDimensionValueEnum",{comptype: $mod.$rtti["TTMSFNCDirectionsHereDirectionsThirdDimensionValue"]});
    rtl.createClass($impl,"TTMSFNCDirectionsHereDirectionsThirdDimension",pas.System.TObject,function () {
      this.fromNum = function (value) {
        var Result = 0;
        var I = 0;
        Result = $impl.TTMSFNCDirectionsHereDirectionsThirdDimensionValue.tdAbsent;
        for (var $l = $impl.TTMSFNCDirectionsHereDirectionsThirdDimensionValue.tdAbsent, $end = $impl.TTMSFNCDirectionsHereDirectionsThirdDimensionValue.tdCustom2; $l <= $end; $l++) {
          I = $l;
          if (value === I) {
            Result = I;
            break;
          };
        };
        return Result;
      };
    });
    rtl.createClass($impl,"TTMSFNCDirectionsHereDirectionsConverter",pas.System.TObject,function () {
      this.$init = function () {
        pas.System.TObject.$init.call(this);
        this.multiplier = 0;
        this.lastValue = 0;
      };
      this.setPrecision = function (precision) {
        this.multiplier = Math.round(Math.pow(10,precision));
      };
      this.Create$1 = function (precision) {
        this.setPrecision(precision);
        return this;
      };
      this.decodeUnsignedVarInt = function (enc, idx, res) {
        var Result = false;
        var shift = 0;
        var delta = 0;
        var value = 0;
        shift = 0;
        delta = 0;
        while (idx.get() < enc.length) {
          value = this.decodeChar(enc.charAt((idx.get() + 1) - 1));
          if (value < 0) {
            Result = false;
            return Result;
          };
          idx.set(idx.get() + 1);
          delta = delta | ((value & 0x1F) << shift);
          if ((value & 0x20) === 0) {
            res.set(delta);
            Result = true;
            return Result;
          } else shift += 5;
        };
        if (shift > 0) {
          Result = false;
          return Result;
        };
        Result = true;
        return Result;
      };
      this.decodeChar = function (charValue) {
        var Result = 0;
        var pos = 0;
        pos = charValue.charCodeAt() - 45;
        if ((pos < 0) || (pos > 77)) {
          Result = -1;
          return Result;
        };
        Result = $impl.DECODING_TABLE[pos];
        return Result;
      };
      this.decodeValue = function (enc, idx, c) {
        var Result = false;
        var delta = 0;
        if (!this.$class.decodeUnsignedVarInt(enc,idx,{get: function () {
            return delta;
          }, set: function (v) {
            delta = v;
          }})) {
          Result = false;
          return Result;
        };
        if ((delta & 1) !== 0) delta = ~delta;
        delta = rtl.trunc(delta / (1 << 1));
        this.lastValue += delta;
        c.set(this.lastValue / this.multiplier);
        Result = true;
        return Result;
      };
    });
    rtl.createClass($impl,"TTMSFNCDirectionsHereDirectionsDecoder",pas.System.TObject,function () {
      this.$init = function () {
        pas.System.TObject.$init.call(this);
        this.encoded = "";
        this.index = 0;
        this.latConverter = null;
        this.lngConverter = null;
        this.zConverter = null;
        this.precision = 0;
        this.thirdDimPrecision = 0;
        this.thirdDimension = 0;
      };
      this.$final = function () {
        this.latConverter = undefined;
        this.lngConverter = undefined;
        this.zConverter = undefined;
        pas.System.TObject.$final.call(this);
      };
      this.decodeHeaderFromString = function (enc, idx, h) {
        var value = 0;
        if (!$impl.TTMSFNCDirectionsHereDirectionsConverter.decodeUnsignedVarInt(enc,idx,{get: function () {
            return value;
          }, set: function (v) {
            value = v;
          }})) return;
        if (value !== 1) return;
        if (!$impl.TTMSFNCDirectionsHereDirectionsConverter.decodeUnsignedVarInt(enc,{p: this, get: function () {
            return this.p.index;
          }, set: function (v) {
            this.p.index = v;
          }},{get: function () {
            return value;
          }, set: function (v) {
            value = v;
          }})) return;
        h.set(value);
      };
      this.decodeHeader = function () {
        var td = 0;
        var header = 0;
        this.decodeHeaderFromString(this.encoded,{p: this, get: function () {
            return this.p.index;
          }, set: function (v) {
            this.p.index = v;
          }},{get: function () {
            return header;
          }, set: function (v) {
            header = v;
          }});
        this.precision = header & 15;
        header = header >>> 4;
        td = header & 7;
        this.thirdDimension = $impl.TTMSFNCDirectionsHereDirectionsThirdDimension.fromNum(td);
      };
      this.decodeOne = function (lat, lng, z) {
        var Result = false;
        if (this.index === this.encoded.length) {
          Result = false;
          return Result;
        };
        if (!this.latConverter.decodeValue(this.encoded,{p: this, get: function () {
            return this.p.index;
          }, set: function (v) {
            this.p.index = v;
          }},lat)) throw pas.SysUtils.Exception.$create("Create$1",["Invalid encoding"]);
        if (!this.lngConverter.decodeValue(this.encoded,{p: this, get: function () {
            return this.p.index;
          }, set: function (v) {
            this.p.index = v;
          }},lng)) throw pas.SysUtils.Exception.$create("Create$1",["Invalid encoding"]);
        if (this.hasThirdDimension()) {
          if (!this.zConverter.decodeValue(this.encoded,{p: this, get: function () {
              return this.p.index;
            }, set: function (v) {
              this.p.index = v;
            }},z)) throw pas.SysUtils.Exception.$create("Create$1",["Invalid encoding"]);
        };
        Result = true;
        return Result;
      };
      this.hasThirdDimension = function () {
        var Result = false;
        Result = this.thirdDimension !== $impl.TTMSFNCDirectionsHereDirectionsThirdDimensionValue.tdAbsent;
        return Result;
      };
      this.Create$1 = function (AEncoded) {
        this.encoded = AEncoded;
        this.index = 0;
        this.decodeHeader();
        this.latConverter = $impl.TTMSFNCDirectionsHereDirectionsConverter.$create("Create$1",[this.precision]);
        this.lngConverter = $impl.TTMSFNCDirectionsHereDirectionsConverter.$create("Create$1",[this.precision]);
        this.zConverter = $impl.TTMSFNCDirectionsHereDirectionsConverter.$create("Create$1",[this.thirdDimPrecision]);
        return this;
      };
      this.Destroy = function () {
        rtl.free(this,"latConverter");
        rtl.free(this,"lngConverter");
        rtl.free(this,"zConverter");
        pas.System.TObject.Destroy.call(this);
      };
      this.Decode = function (AEncoded) {
        var Result = [];
        var d = null;
        var a = [];
        var lat = 0.0;
        var lng = 0.0;
        var z = 0.0;
        if (AEncoded === "") return Result;
        d = $impl.TTMSFNCDirectionsHereDirectionsDecoder.$create("Create$1",[AEncoded]);
        try {
          lat = 0;
          lng = 0;
          z = 0;
          while (d.decodeOne({get: function () {
              return lat;
            }, set: function (v) {
              lat = v;
            }},{get: function () {
              return lng;
            }, set: function (v) {
              lng = v;
            }},{get: function () {
              return z;
            }, set: function (v) {
              z = v;
            }})) {
            a = rtl.arraySetLength(a,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,rtl.length(a) + 1);
            a[rtl.length(a) - 1].$assign(pas["WEBLib.TMSFNCMapsCommonTypes"].CreateCoordinate(lat,lng));
          };
          Result = rtl.arrayRef(a);
        } finally {
          d = rtl.freeLoc(d);
        };
        return Result;
      };
    });
    rtl.createClass($impl,"TTMSFNCDirectionsHereDirections",pas["WEBLib.TMSFNCDirections"].TTMSFNCCustomDirectionsInterfacedObject,function () {
      this.$init = function () {
        pas["WEBLib.TMSFNCDirections"].TTMSFNCCustomDirectionsInterfacedObject.$init.call(this);
        this.FTravelMode = 0;
      };
      this.GetIdentifier = function () {
        var Result = "";
        Result = "Here";
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
        Result = "https://router.hereapi.com";
        return Result;
      };
      this.GetPath = function (AOrigin, ADestination, AOriginLatitude, AOriginLongitude, ADestinationLatitude, ADestinationLongitude, ATravelMode, AWayPoints) {
        var Result = "";
        Result = "/v8/routes";
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
            Alternatives = "3"}
           else Alternatives = "0";
          if (ATravelMode in rtl.createSet(pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmPublicTransport)) {
            this.FTravelMode = pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmDriving}
           else this.FTravelMode = ATravelMode;
          var $tmp = this.FTravelMode;
          if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmDriving) {
            TravelMode = "car"}
           else if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmWalking) {
            TravelMode = "pedestrian"}
           else if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmBicycling) {
            TravelMode = "bicycle"}
           else if ($tmp === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmTruck) TravelMode = "truck";
          AOrigin = pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AOriginLatitude) + "," + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AOriginLongitude);
          ADestination = pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(ADestinationLatitude) + "," + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(ADestinationLongitude);
          WayPoints = "";
          if ((rtl.length(AWayPoints) > 0) && (rtl.length(AWayPoints) > 0)) {
            for (var $l = 0, $end = rtl.length(AWayPoints) - 1; $l <= $end; $l++) {
              I = $l;
              WayPoints = WayPoints + "&via=" + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AWayPoints[I].Latitude) + "," + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AWayPoints[I].Longitude);
            };
          };
          Result = "apiKey=" + $ir.ref(1,this.GetDirectionsProperties()).GetAPIKey() + "&transportMode=" + TravelMode + "&origin=" + AOrigin + "&destination=" + ADestination + "&return=polyline,actions,instructions,summary" + WayPoints + "&alternatives=" + Alternatives;
          if (ALocale !== "") Result = Result + "&lang=" + ALocale;
          if (ATravelMode === pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmTruck) {
            Result = $ir.ref(2,this.GetDirectionsProperties()).GetTruckOptions({get: function () {
                return Result;
              }, set: function (v) {
                Result = v;
              }},AAVoidTolls);
          } else {
            Result = Result + "&routingMode=fast";
            if (AAVoidTolls) Result = Result + "&avoid[features]=tollRoad";
          };
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
        var step = null;
        var lstep = null;
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
        var l = null;
        var ol = null;
        var old = null;
        var ola = null;
        var corlist = "";
        var coarr = [];
        var offset = 0;
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
                    ARequest.SetErrorMessage(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"title"));
                    if (ARequest.FStatus === "") ARequest.SetStatus(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"type") + " " + pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"subtype"));
                    if (ARequest.FErrorMessage === "") ARequest.SetErrorMessage(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"Details"));
                    jar = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(o,"routes"),pas["WEBLib.JSON"].TJSONArray);
                    if (jar != null) {
                      for (var $l = 0, $end = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jar) - 1; $l <= $end; $l++) {
                        i = $l;
                        jo = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jar,i);
                        di = d.Add$1();
                        di.FSummary = "Route " + pas.SysUtils.IntToStr(i);
                        jal = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jo,"sections"),pas["WEBLib.JSON"].TJSONArray);
                        if (jal != null) {
                          for (var $l1 = 0, $end1 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jal) - 1; $l1 <= $end1; $l1++) {
                            j = $l1;
                            l = di.FLegs.Add$1();
                            jol = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jal,j);
                            old = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jol,"arrival"),pas["WEBLib.JSON"].TJSONObject);
                            if (old != null) {
                              ol = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(old,"place"),pas["WEBLib.JSON"].TJSONObject);
                              if (ol != null) {
                                ol = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(ol,"location"),pas["WEBLib.JSON"].TJSONObject);
                                if (ol != null) {
                                  l.FEndLocation.SetLatitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(ol,"lat"));
                                  l.FEndLocation.SetLongitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(ol,"lng"));
                                };
                              };
                            };
                            ola = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jol,"departure"),pas["WEBLib.JSON"].TJSONObject);
                            if (ola != null) {
                              ol = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(ola,"place"),pas["WEBLib.JSON"].TJSONObject);
                              if (ol != null) {
                                ol = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(ol,"location"),pas["WEBLib.JSON"].TJSONObject);
                                if (ol != null) {
                                  l.FStartLocation.SetLatitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(ol,"lat"));
                                  l.FStartLocation.SetLongitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(ol,"lng"));
                                };
                              };
                            };
                            corlist = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(jol,"polyline");
                            coarr = $impl.TTMSFNCDirectionsHereDirectionsDecoder.Decode(corlist);
                            for (var $l2 = 0, $end2 = rtl.length(coarr) - 1; $l2 <= $end2; $l2++) {
                              k = $l2;
                              co = di.FCoordinates.Add$1();
                              co.SetLatitude(coarr[k].Latitude);
                              co.SetLongitude(coarr[k].Longitude);
                              l.FCoordinates.Add$1().Assign(co);
                            };
                            jas = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jol,"actions"),pas["WEBLib.JSON"].TJSONArray);
                            if (jas != null) {
                              for (var $l3 = 0, $end3 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jas) - 1; $l3 <= $end3; $l3++) {
                                k = $l3;
                                jos = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jas,k);
                                step = di.FSteps.Add$1();
                                offset = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONIntegerValue(jos,"offset");
                                if ((di.FCoordinates.GetCount() > offset) && (offset >= 0)) {
                                  step.FStartLocation.SetLatitude(di.FCoordinates.GetItem$1(offset).GetLatitude());
                                  step.FStartLocation.SetLongitude(di.FCoordinates.GetItem$1(offset).GetLongitude());
                                };
                                step.FInstructions = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(jos,"instruction");
                                step.FDistance = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONIntegerValue(jos,"length");
                                step.FDuration = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONIntegerValue(jos,"duration");
                                lstep = l.FSteps.Add$1();
                                lstep.Assign(step);
                              };
                            };
                            ol = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jol,"summary"),pas["WEBLib.JSON"].TJSONObject);
                            if (ol != null) {
                              l.FDistance = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONIntegerValue(ol,"length");
                              di.FDistance = di.FDistance + l.FDistance;
                              l.FDuration = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONIntegerValue(ol,"duration");
                              di.FDuration = di.FDuration + l.FDuration;
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
},["Classes","Math","DateUtils","Types","WEBLib.TMSFNCDirections","WEBLib.TMSFNCUtils","WEBLib.TMSFNCTypes","WEBLib.TMSFNCMapsCommonTypes","WEBLib.TMSFNCCloudBase","SysUtils","contnrs","Web","WEBLib.JSON"]);
//# sourceMappingURL=WEBLib.TMSFNCDirections.Here.js.map
