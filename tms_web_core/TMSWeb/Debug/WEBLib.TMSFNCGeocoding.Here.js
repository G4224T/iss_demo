rtl.module("WEBLib.TMSFNCGeocoding.Here",["System"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.RegisterHereGeocodingService = function () {
    if (!pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingServiceHere),{p: $impl, get: function () {
        return this.p.GeocodingService;
      }, set: function (v) {
        rtl.setIntfP(this.p,"GeocodingService",v);
      }})) {
      rtl.setIntfP($impl,"GeocodingService",rtl.queryIntfT($impl.TTMSFNCGeocodingHereService.$create("Create$1"),pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingServiceHere),true);
      pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingPlatformServices.Current().AddPlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingServiceHere),$impl.GeocodingService);
    };
  };
  this.UnRegisterHereGeocodingService = function () {
    pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingPlatformServices.Current().RemovePlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingServiceHere));
  };
  $mod.$implcode = function () {
    $mod.$rtti.$Class("TTMSFNCGeocodingHereService");
    rtl.createClass($impl,"TTMSFNCGeocodingHereGeocodingFactoryService",pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingFactoryService,function () {
      rtl.addIntf(this,pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingServiceHere);
      rtl.addIntf(this,pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    rtl.createClass($impl,"TTMSFNCGeocodingHereService",$impl.TTMSFNCGeocodingHereGeocodingFactoryService,function () {
      this.DoCreateGeocoding = function () {
        var Result = null;
        var $ok = false;
        try {
          Result = rtl.setIntfL(Result,rtl.queryIntfT($impl.TTMSFNCGeocodingHereGeocoding.$create("Create$1"),pas["WEBLib.TMSFNCGeocoding"].ITMSFNCCustomGeocoding),true);
          $ok = true;
        } finally {
          if (!$ok) rtl._Release(Result);
        };
        return Result;
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingServiceHere);
      rtl.addIntf(this,pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $mod.$rtti.$Class("TTMSFNCGeocodingHereGeocoding");
    rtl.createClass($impl,"TTMSFNCGeocodingHereGeocoding",pas["WEBLib.TMSFNCGeocoding"].TTMSFNCCustomGeocodingInterfacedObject,function () {
      this.GetIdentifier = function () {
        var Result = "";
        Result = "Here";
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
        Result = "https://geocode.search.hereapi.com";
        return Result;
      };
      this.GetReverseHost = function () {
        var Result = "";
        Result = "https://revgeocode.search.hereapi.com";
        return Result;
      };
      this.GetPath = function (AAddress) {
        var Result = "";
        Result = "/v1/geocode";
        return Result;
      };
      this.GetReversePath = function (ACoordinate) {
        var Result = "";
        Result = "/v1/revgeocode";
        return Result;
      };
      this.GetQuery = function (AAddress, ALocale) {
        var Result = "";
        var $ir = rtl.createIntfRefs();
        try {
          Result = "apiKey=" + $ir.ref(1,this.GetGeocodingProperties()).GetAPIKey() + "&q=" + AAddress;
          if (ALocale !== "") Result = Result + "&lang=" + ALocale;
        } finally {
          $ir.free();
        };
        return Result;
      };
      this.GetQuery$1 = function (ACoordinate, ALocale) {
        var Result = "";
        var $ir = rtl.createIntfRefs();
        try {
          Result = "apiKey=" + $ir.ref(1,this.GetGeocodingProperties()).GetAPIKey() + "&at=" + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(ACoordinate.Latitude) + "," + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(ACoordinate.Longitude);
          if (ALocale !== "") Result = Result + "&lang=" + ALocale;
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
        var jar = null;
        var i = 0;
        var oc = null;
        var street = "";
        var number = "";
        var $ir = rtl.createIntfRefs();
        try {
          if ($ir.ref(1,this.GetGeocodingProperties()) != null) {
            d = ARequest.FItems;
            if (d != null) {
              if (ARequestResult !== "") {
                o = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.ParseJSON(ARequestResult);
                if (o != null) {
                  try {
                    ARequest.SetStatus(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"error"));
                    ARequest.SetErrorMessage(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"error_description"));
                    if (ARequest.FStatus === "") ARequest.SetStatus(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"type") + " " + pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"subtype"));
                    if (ARequest.FErrorMessage === "") ARequest.SetErrorMessage(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"Details"));
                    jar = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(o,"items"),pas["WEBLib.JSON"].TJSONArray);
                    if (jar != null) {
                      for (var $l = 0, $end = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jar) - 1; $l <= $end; $l++) {
                        i = $l;
                        jo = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jar,i);
                        di = d.Add$1();
                        oc = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jo,"address"),pas["WEBLib.JSON"].TJSONObject);
                        if (oc != null) {
                          di.FAddress = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"label");
                          di.FCountryCode = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"countryCode");
                          di.FCountry = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"countryName");
                          di.FProvince = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"county");
                          di.FDistrict = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"district");
                          di.FProvince = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"county");
                          di.FRegion = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"state");
                          di.FCity = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"city");
                          di.FPostalCode = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"postalCode");
                          street = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"street");
                          number = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"houseNumber");
                          di.FStreet = pas.SysUtils.Trim(street + " " + number);
                          di.FStreetName = street;
                          di.FStreetNumber = number;
                        };
                        oc = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jo,"position"),pas["WEBLib.JSON"].TJSONObject);
                        if (oc != null) {
                          di.FCoordinate.SetLatitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(oc,"lat"));
                          di.FCoordinate.SetLongitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(oc,"lng"));
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
//# sourceMappingURL=WEBLib.TMSFNCGeocoding.Here.js.map
