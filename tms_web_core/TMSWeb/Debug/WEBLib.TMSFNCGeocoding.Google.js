rtl.module("WEBLib.TMSFNCGeocoding.Google",["System"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.RegisterGoogleGeocodingService = function () {
    if (!pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingServiceGoogle),{p: $impl, get: function () {
        return this.p.GeocodingService;
      }, set: function (v) {
        rtl.setIntfP(this.p,"GeocodingService",v);
      }})) {
      rtl.setIntfP($impl,"GeocodingService",rtl.queryIntfT($impl.TTMSFNCGeocodingGoogleService.$create("Create$1"),pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingServiceGoogle),true);
      pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingPlatformServices.Current().AddPlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingServiceGoogle),$impl.GeocodingService);
    };
  };
  this.UnRegisterGoogleGeocodingService = function () {
    pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingPlatformServices.Current().RemovePlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingServiceGoogle));
  };
  $mod.$implcode = function () {
    $impl.PRECISION_ROOFTOP = "ROOFTOP";
    $impl.PRECISION_RANGE_INTERPOLATED = "RANGE_INTERPOLATED";
    $impl.PRECISION_GEOMETRIC_CENTER = "GEOMETRIC_CENTER";
    $impl.PRECISION_APPROXIMATE = "APPROXIMATE";
    $mod.$rtti.$Class("TTMSFNCGeocodingGoogleService");
    rtl.createClass($impl,"TTMSFNCGeocodingGoogleGeocodingFactoryService",pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingFactoryService,function () {
      rtl.addIntf(this,pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingServiceGoogle);
      rtl.addIntf(this,pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    rtl.createClass($impl,"TTMSFNCGeocodingGoogleService",$impl.TTMSFNCGeocodingGoogleGeocodingFactoryService,function () {
      this.DoCreateGeocoding = function () {
        var Result = null;
        var $ok = false;
        try {
          Result = rtl.setIntfL(Result,rtl.queryIntfT($impl.TTMSFNCGeocodingGoogleGeocoding.$create("Create$1"),pas["WEBLib.TMSFNCGeocoding"].ITMSFNCCustomGeocoding),true);
          $ok = true;
        } finally {
          if (!$ok) rtl._Release(Result);
        };
        return Result;
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingServiceGoogle);
      rtl.addIntf(this,pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $mod.$rtti.$Class("TTMSFNCGeocodingGoogleGeocoding");
    rtl.createClass($impl,"TTMSFNCGeocodingGoogleGeocoding",pas["WEBLib.TMSFNCGeocoding"].TTMSFNCCustomGeocodingInterfacedObject,function () {
      this.GetIdentifier = function () {
        var Result = "";
        Result = "Google";
        return Result;
      };
      this.IsValid = function () {
        var Result = false;
        var $ir = rtl.createIntfRefs();
        try {
          Result = $ir.ref(1,this.GetGeocodingProperties()).GetAPIKey() !== "";
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
      this.GetReverseHost = function () {
        var Result = "";
        Result = this.GetHost();
        return Result;
      };
      this.GetPath = function (AAddress) {
        var Result = "";
        Result = "/maps/api/geocode/json";
        return Result;
      };
      this.GetReversePath = function (ACoordinate) {
        var Result = "";
        Result = this.GetPath("");
        return Result;
      };
      this.GetQuery = function (AAddress, ALocale) {
        var Result = "";
        var $ir = rtl.createIntfRefs();
        try {
          Result = "key=" + $ir.ref(1,this.GetGeocodingProperties()).GetAPIKey() + "&address=" + AAddress + "&language=" + ALocale;
        } finally {
          $ir.free();
        };
        return Result;
      };
      this.GetQuery$1 = function (ACoordinate, ALocale) {
        var Result = "";
        var $ir = rtl.createIntfRefs();
        try {
          Result = "key=" + $ir.ref(1,this.GetGeocodingProperties()).GetAPIKey() + "&latlng=" + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(ACoordinate.Latitude) + "," + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(ACoordinate.Longitude) + "&language=" + ALocale;
        } finally {
          $ir.free();
        };
        return Result;
      };
      this.GetPostData = function () {
        var Result = "";
        Result = "";
        return Result;
      };
      this.Parse = function (ARequest, ARequestResult) {
        var d = null;
        var di = null;
        var o = null;
        var jo = null;
        var joa = null;
        var jar = null;
        var jaa = null;
        var i = 0;
        var j = 0;
        var ob = null;
        var oc = null;
        var atype = "";
        var streetno = "";
        var streetname = "";
        var longname = "";
        var shortname = "";
        var precision = "";
        var $ir = rtl.createIntfRefs();
        try {
          if ($ir.ref(1,this.GetGeocodingProperties()) != null) {
            d = ARequest.FItems;
            if (d != null) {
              if (ARequestResult !== "") {
                o = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.ParseJSON(ARequestResult);
                if (o != null) {
                  try {
                    ARequest.SetStatus(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"status"));
                    ARequest.SetErrorMessage(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"error_message"));
                    jar = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(o,"results"),pas["WEBLib.JSON"].TJSONArray);
                    if (jar != null) {
                      for (var $l = 0, $end = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jar) - 1; $l <= $end; $l++) {
                        i = $l;
                        jo = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jar,i);
                        di = d.Add$1();
                        di.FAddress = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(jo,"formatted_address");
                        jaa = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jo,"address_components"),pas["WEBLib.JSON"].TJSONArray);
                        if (jaa != null) {
                          for (var $l1 = 0, $end1 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jaa) - 1; $l1 <= $end1; $l1++) {
                            j = $l1;
                            joa = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jaa,j);
                            atype = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(joa,"types"),pas["WEBLib.JSON"].TJSONArray).ToString();
                            longname = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(joa,"long_name");
                            shortname = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(joa,"short_name");
                            if (pas.System.Pos("street_number",atype) > 0) streetno = longname;
                            if (pas.System.Pos("route",atype) > 0) streetname = longname;
                            if (pas.System.Pos("locality",atype) > 0) di.FCity = longname;
                            if (pas.System.Pos("sublocality",atype) > 0) di.FDistrict = longname;
                            if (di.FDistrict === "") {
                              if (pas.System.Pos("political",atype) > 0) di.FDistrict = longname;
                            };
                            if (pas.System.Pos("administrative_area_level_1",atype) > 0) {
                              di.FRegion = longname;
                              di.FRegionCode = shortname;
                            };
                            if (pas.System.Pos("administrative_area_level_2",atype) > 0) {
                              di.FProvince = longname;
                              di.FProvinceCode = shortname;
                            };
                            if (pas.System.Pos("country",atype) > 0) {
                              di.FCountry = longname;
                              di.FCountryCode = shortname;
                            };
                            if ((pas.System.Pos("postal_code",atype) > 0) && !(pas.System.Pos("postal_code_suffix",atype) > 0)) {
                              di.FPostalCode = longname;
                            };
                            if (pas.System.Pos("intersection",atype) > 0) {
                              di.FIntersection = shortname;
                            };
                            di.FStreet = streetname + " " + streetno;
                            di.FStreetName = streetname;
                            di.FStreetNumber = streetno;
                          };
                        };
                        ob = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jo,"geometry"),pas["WEBLib.JSON"].TJSONObject);
                        if (ob != null) {
                          precision = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(ob,"location_type");
                          if (precision === $impl.PRECISION_ROOFTOP) {
                            di.FPrecision = pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingPrecision.gpRoofTop}
                           else if (precision === $impl.PRECISION_RANGE_INTERPOLATED) {
                            di.FPrecision = pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingPrecision.gpRangeInterpolated}
                           else if (precision === $impl.PRECISION_GEOMETRIC_CENTER) {
                            di.FPrecision = pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingPrecision.gpGeometricCenter}
                           else if (precision === $impl.PRECISION_APPROXIMATE) {
                            di.FPrecision = pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingPrecision.gpApproximate}
                           else di.FPrecision = pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingPrecision.gpUnknown;
                          oc = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(ob,"location"),pas["WEBLib.JSON"].TJSONObject);
                          if (oc != null) {
                            di.FCoordinate.SetLatitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(oc,"lat"));
                            di.FCoordinate.SetLongitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(oc,"lng"));
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
      this.DestroyGeocoding = function () {
        var $ir = rtl.createIntfRefs();
        try {
          $impl.GeocodingService.DestroyGeocoding($ir.ref(1,rtl.queryIntfT(this,pas["WEBLib.TMSFNCGeocoding"].ITMSFNCCustomGeocoding)));
        } finally {
          $ir.free();
        };
      };
      this.Create$1 = function () {
        pas.System.TObject.Create.call(this);
        return this;
      };
      this.Destroy = function () {
        pas["WEBLib.TMSFNCGeocoding"].TTMSFNCCustomGeocodingInterfacedObject.Destroy.call(this);
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCGeocoding"].ITMSFNCCustomGeocoding);
      rtl.addIntf(this,pas["WEBLib.TMSFNCGeocoding"].ITMSFNCCustomGeocodingInstance);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $impl.GeocodingService = null;
  };
},["Classes","Math","DateUtils","Types","SysUtils","WEBLib.TMSFNCGeocoding","WEBLib.TMSFNCUtils","WEBLib.TMSFNCTypes","WEBLib.TMSFNCMapsCommonTypes","WEBLib.TMSFNCCloudBase","contnrs","Web","WEBLib.JSON"]);
//# sourceMappingURL=WEBLib.TMSFNCGeocoding.Google.js.map
