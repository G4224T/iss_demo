rtl.module("WEBLib.TMSFNCGeocoding.Azure",["System"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.RegisterAzureGeocodingService = function () {
    if (!pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingServiceAzure),{p: $impl, get: function () {
        return this.p.GeocodingService;
      }, set: function (v) {
        rtl.setIntfP(this.p,"GeocodingService",v);
      }})) {
      rtl.setIntfP($impl,"GeocodingService",rtl.queryIntfT($impl.TTMSFNCGeocodingAzureService.$create("Create$1"),pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingServiceAzure),true);
      pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingPlatformServices.Current().AddPlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingServiceAzure),$impl.GeocodingService);
    };
  };
  this.UnRegisterAzureGeocodingService = function () {
    pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingPlatformServices.Current().RemovePlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingServiceAzure));
  };
  $mod.$implcode = function () {
    $mod.$rtti.$Class("TTMSFNCGeocodingAzureService");
    rtl.createClass($impl,"TTMSFNCGeocodingAzureGeocodingFactoryService",pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingFactoryService,function () {
      rtl.addIntf(this,pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingServiceAzure);
      rtl.addIntf(this,pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    rtl.createClass($impl,"TTMSFNCGeocodingAzureService",$impl.TTMSFNCGeocodingAzureGeocodingFactoryService,function () {
      this.DoCreateGeocoding = function () {
        var Result = null;
        var $ok = false;
        try {
          Result = rtl.setIntfL(Result,rtl.queryIntfT($impl.TTMSFNCGeocodingAzureGeocoding.$create("Create$1"),pas["WEBLib.TMSFNCGeocoding"].ITMSFNCCustomGeocoding),true);
          $ok = true;
        } finally {
          if (!$ok) rtl._Release(Result);
        };
        return Result;
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingServiceAzure);
      rtl.addIntf(this,pas["WEBLib.TMSFNCGeocoding"].ITMSFNCGeocodingService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $mod.$rtti.$Class("TTMSFNCGeocodingAzureGeocoding");
    rtl.createClass($impl,"TTMSFNCGeocodingAzureGeocoding",pas["WEBLib.TMSFNCGeocoding"].TTMSFNCCustomGeocodingInterfacedObject,function () {
      this.GetIdentifier = function () {
        var Result = "";
        Result = "Azure";
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
        Result = "https://atlas.microsoft.com";
        return Result;
      };
      this.GetReverseHost = function () {
        var Result = "";
        Result = this.GetHost();
        return Result;
      };
      this.GetPath = function (AAddress) {
        var Result = "";
        Result = "/search/address/json";
        return Result;
      };
      this.GetReversePath = function (ACoordinate) {
        var Result = "";
        Result = "/search/address/reverse/json";
        return Result;
      };
      this.GetQuery = function (AAddress, ALocale) {
        var Result = "";
        var $ir = rtl.createIntfRefs();
        try {
          Result = "subscription-key=" + $ir.ref(1,this.GetGeocodingProperties()).GetAPIKey() + "&api-version=1" + "&limit=1" + "&language=" + ALocale + "&query=" + AAddress;
        } finally {
          $ir.free();
        };
        return Result;
      };
      this.GetQuery$1 = function (ACoordinate, ALocale) {
        var Result = "";
        Result = this.GetQuery(pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(ACoordinate.Latitude) + "," + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(ACoordinate.Longitude),ALocale);
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
        var jav = null;
        var i = 0;
        var oc = null;
        var op = null;
        var isReverse = false;
        var position = "";
        var street = "";
        var number = "";
        var sposition = null;
        var $ir = rtl.createIntfRefs();
        try {
          if ($ir.ref(1,this.GetGeocodingProperties()) != null) {
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
                    jav = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(o,"results"),pas["WEBLib.JSON"].TJSONArray);
                    isReverse = false;
                    if (!(jav != null)) {
                      jav = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(o,"addresses"),pas["WEBLib.JSON"].TJSONArray);
                      isReverse = true;
                    };
                    if (jav != null) {
                      for (var $l = 0, $end = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jav) - 1; $l <= $end; $l++) {
                        i = $l;
                        di = d.Add$1();
                        jo = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jav,i);
                        oc = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jo,"address"),pas["WEBLib.JSON"].TJSONObject);
                        if (oc != null) {
                          di.FAddress = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"freeformAddress");
                          di.FCity = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"municipality");
                          di.FCountry = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"country");
                          di.FCountryCode = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"countryCode");
                          di.FRegion = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"countrySecondarySubdivision");
                          di.FProvince = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"countrySubdivision");
                          street = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"streetName");
                          number = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"streetNumber");
                          di.FStreet = pas.SysUtils.Trim(street + " " + number);
                          di.FStreetName = street;
                          di.FStreetNumber = number;
                          di.FPostalCode = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(oc,"postalCode");
                        };
                        if (!isReverse) {
                          op = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jo,"position"),pas["WEBLib.JSON"].TJSONObject);
                          if (op != null) {
                            di.FCoordinate.SetLatitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(op,"lat"));
                            di.FCoordinate.SetLongitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(op,"lon"));
                          };
                        } else {
                          position = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(jo,"position");
                          if (position !== "") {
                            sposition = pas.Classes.TStringList.$create("Create$1");
                            pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.Split(",",position,sposition,false);
                            if (sposition.GetCount() > 1) {
                              di.FCoordinate.SetLatitude(pas["WEBLib.TMSFNCMapsCommonTypes"].StrToFloatDot(sposition.Get(0)));
                              di.FCoordinate.SetLongitude(pas["WEBLib.TMSFNCMapsCommonTypes"].StrToFloatDot(sposition.Get(1)));
                            };
                            sposition = rtl.freeLoc(sposition);
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
//# sourceMappingURL=WEBLib.TMSFNCGeocoding.Azure.js.map
