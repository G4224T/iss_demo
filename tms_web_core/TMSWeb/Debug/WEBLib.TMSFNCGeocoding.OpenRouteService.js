rtl.module("WEBLib.TMSFNCGeocoding.OpenRouteService",["System"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.RegisterOpenRouteServiceGeocodingService = function () {
    if (!pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingServiceOpenRouteService),{p: $impl, get: function () {
        return this.p.GeocodingService;
      }, set: function (v) {
        rtl.setIntfP(this.p,"GeocodingService",v);
      }})) {
      rtl.setIntfP($impl,"GeocodingService",rtl.queryIntfT($impl.TTMSFNCGeocodingOpenRouteServiceService.$create("Create$1"),pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingServiceOpenRouteService),true);
      pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingPlatformServices.Current().AddPlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingServiceOpenRouteService),$impl.GeocodingService);
    };
  };
  this.UnRegisterOpenRouteServiceGeocodingService = function () {
    pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingPlatformServices.Current().RemovePlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingServiceOpenRouteService));
  };
  $mod.$implcode = function () {
    $mod.$rtti.$Class("TTMSFNCGeocodingOpenRouteServiceService");
    rtl.createClass($impl,"TTMSFNCGeocodingOpenRouteServiceGeocodingFactoryService",pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingFactoryService,function () {
      rtl.addIntf(this,pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingServiceOpenRouteService);
      rtl.addIntf(this,pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    rtl.createClass($impl,"TTMSFNCGeocodingOpenRouteServiceService",$impl.TTMSFNCGeocodingOpenRouteServiceGeocodingFactoryService,function () {
      this.DoCreateGeocoding = function () {
        var Result = null;
        var $ok = false;
        try {
          Result = rtl.setIntfL(Result,rtl.queryIntfT($impl.TTMSFNCGeocodingOpenRouteServiceGeocoding.$create("Create$1"),pas["WEBLib.TMSFNCGeocoding"].ITMSFNCCustomGeocoding),true);
          $ok = true;
        } finally {
          if (!$ok) rtl._Release(Result);
        };
        return Result;
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingServiceOpenRouteService);
      rtl.addIntf(this,pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $mod.$rtti.$Class("TTMSFNCGeocodingOpenRouteServiceGeocoding");
    rtl.createClass($impl,"TTMSFNCGeocodingOpenRouteServiceGeocoding",pas["WEBLib.TMSFNCGeocoding"].TTMSFNCCustomGeocodingInterfacedObject,function () {
      this.GetIdentifier = function () {
        var Result = "";
        Result = "OpenRouteService";
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
        Result = "https://api.openrouteservice.org";
        return Result;
      };
      this.GetReverseHost = function () {
        var Result = "";
        Result = this.GetHost();
        return Result;
      };
      this.GetPath = function (AAddress) {
        var Result = "";
        Result = "/geocode/search";
        return Result;
      };
      this.GetReversePath = function (ACoordinate) {
        var Result = "";
        Result = "/geocode/reverse";
        return Result;
      };
      this.GetQuery = function (AAddress, ALocale) {
        var Result = "";
        var $ir = rtl.createIntfRefs();
        try {
          Result = "api_key=" + $ir.ref(1,this.GetGeocodingProperties()).GetAPIKey() + "&text=" + AAddress;
        } finally {
          $ir.free();
        };
        return Result;
      };
      this.GetQuery$1 = function (ACoordinate, ALocale) {
        var Result = "";
        var $ir = rtl.createIntfRefs();
        try {
          Result = "api_key=" + $ir.ref(1,this.GetGeocodingProperties()).GetAPIKey() + "&point.lat=" + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(ACoordinate.Latitude) + "&point.lon=" + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(ACoordinate.Longitude);
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
        var joar = null;
        var jar = null;
        var jab = null;
        var i = 0;
        var j = 0;
        var ob = null;
        var oc = null;
        var $ir = rtl.createIntfRefs();
        try {
          if ($ir.ref(1,this.GetGeocodingProperties()) != null) {
            d = ARequest.FItems;
            if (d != null) {
              if (ARequestResult !== "") {
                o = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.ParseJSON(ARequestResult);
                if (o != null) {
                  try {
                    ARequest.SetErrorMessage(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"error"));
                    if (ARequest.FErrorMessage !== "") ARequest.SetStatus("error");
                    jar = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(o,"features"),pas["WEBLib.JSON"].TJSONArray);
                    if (jar != null) {
                      for (var $l = 0, $end = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jar) - 1; $l <= $end; $l++) {
                        i = $l;
                        jo = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jar,i);
                        di = d.Add$1();
                        oc = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jo,"properties"),pas["WEBLib.JSON"].TJSONObject);
                        if (oc != null) {
                          di.FAddress = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"label");
                          di.FStreet = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"street");
                          if (di.FStreet === "") di.FStreet = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"name");
                          di.FPostalCode = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"postalcode");
                          di.FCity = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"localadmin");
                          di.FRegion = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"county");
                          di.FRegionCode = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"county_a");
                          di.FProvince = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"region");
                          di.FProvinceCode = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"region_a");
                          di.FCountry = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"country");
                          di.FCountryCode = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"country_a");
                        };
                        ob = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jo,"geometry"),pas["WEBLib.JSON"].TJSONObject);
                        if (ob != null) {
                          jab = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(ob,"coordinates"),pas["WEBLib.JSON"].TJSONArray);
                          if (jar != null) {
                            for (var $l1 = 0, $end1 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jab) - 1; $l1 <= $end1; $l1++) {
                              j = $l1;
                              joar = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jab,j);
                              if (j === 0) di.FCoordinate.SetLongitude(pas["WEBLib.TMSFNCMapsCommonTypes"].StrToFloatDot(joar.GetStrValue()));
                              if (j === 1) di.FCoordinate.SetLatitude(pas["WEBLib.TMSFNCMapsCommonTypes"].StrToFloatDot(joar.GetStrValue()));
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
//# sourceMappingURL=WEBLib.TMSFNCGeocoding.OpenRouteService.js.map
