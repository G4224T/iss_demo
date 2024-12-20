rtl.module("WEBLib.TMSFNCLocation.IPStack",["System"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.RegisterIPStackLocationService = function () {
    if (!pas["WEBLib.TMSFNCLocation"].TTMSFNCLocationPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCLocation"].ITMSFNCLocationServiceIPStack),{p: $impl, get: function () {
        return this.p.LocationService;
      }, set: function (v) {
        rtl.setIntfP(this.p,"LocationService",v);
      }})) {
      rtl.setIntfP($impl,"LocationService",rtl.queryIntfT($impl.TTMSFNCLocationIPStackService.$create("Create$1"),pas["WEBLib.TMSFNCLocation"].ITMSFNCLocationServiceIPStack),true);
      pas["WEBLib.TMSFNCLocation"].TTMSFNCLocationPlatformServices.Current().AddPlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCLocation"].ITMSFNCLocationServiceIPStack),$impl.LocationService);
    };
  };
  this.UnRegisterIPStackLocationService = function () {
    pas["WEBLib.TMSFNCLocation"].TTMSFNCLocationPlatformServices.Current().RemovePlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCLocation"].ITMSFNCLocationServiceIPStack));
  };
  $mod.$implcode = function () {
    $mod.$rtti.$Class("TTMSFNCLocationIPStackService");
    rtl.createClass($impl,"TTMSFNCLocationIPStackLocationFactoryService",pas["WEBLib.TMSFNCLocation"].TTMSFNCLocationFactoryService,function () {
      rtl.addIntf(this,pas["WEBLib.TMSFNCLocation"].ITMSFNCLocationServiceIPStack);
      rtl.addIntf(this,pas["WEBLib.TMSFNCLocation"].ITMSFNCLocationService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    rtl.createClass($impl,"TTMSFNCLocationIPStackService",$impl.TTMSFNCLocationIPStackLocationFactoryService,function () {
      this.DoCreateLocation = function () {
        var Result = null;
        var $ok = false;
        try {
          Result = rtl.setIntfL(Result,rtl.queryIntfT($impl.TTMSFNCLocationIPStackLocation.$create("Create$1"),pas["WEBLib.TMSFNCLocation"].ITMSFNCCustomLocation),true);
          $ok = true;
        } finally {
          if (!$ok) rtl._Release(Result);
        };
        return Result;
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCLocation"].ITMSFNCLocationServiceIPStack);
      rtl.addIntf(this,pas["WEBLib.TMSFNCLocation"].ITMSFNCLocationService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $mod.$rtti.$Class("TTMSFNCLocationIPStackLocation");
    rtl.createClass($impl,"TTMSFNCLocationIPStackLocation",pas["WEBLib.TMSFNCLocation"].TTMSFNCCustomLocationInterfacedObject,function () {
      this.GetIdentifier = function () {
        var Result = "";
        Result = "IPStack";
        return Result;
      };
      this.IsValid = function () {
        var Result = false;
        var $ir = rtl.createIntfRefs();
        try {
          Result = $ir.ref(1,this.GetLocationProperties()).GetAPIKey() !== "";
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
        Result = "https://api.ipstack.com";
        return Result;
      };
      this.GetPath = function () {
        var Result = "";
        Result = "/check";
        return Result;
      };
      this.GetQuery = function () {
        var Result = "";
        var $ir = rtl.createIntfRefs();
        try {
          Result = "access_key=" + $ir.ref(1,this.GetLocationProperties()).GetAPIKey();
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
        var o = null;
        var $ir = rtl.createIntfRefs();
        try {
          if ($ir.ref(1,this.GetLocationProperties()) != null) {
            if (ARequest != null) {
              if (ARequestResult !== "") {
                o = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.ParseJSON(ARequestResult);
                if (o != null) {
                  try {
                    ARequest.FCoordinate.SetLatitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(o,"latitude"));
                    ARequest.FCoordinate.SetLongitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(o,"longitude"));
                    ARequest.FIP = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"ip");
                    ARequest.FIPType = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"type");
                    ARequest.FContinent = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"continent_name");
                    ARequest.FContinentCode = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"continent_code");
                    ARequest.FCountry = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"country_name");
                    ARequest.FCountryCode = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"country_code");
                    ARequest.FRegion = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"region_name");
                    ARequest.FRegionCode = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"region_code");
                    ARequest.FCity = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"city");
                    ARequest.FPostalCode = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(o,"zip");
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
      this.DestroyLocation = function () {
        var $ir = rtl.createIntfRefs();
        try {
          $impl.LocationService.DestroyLocation($ir.ref(1,rtl.queryIntfT(this,pas["WEBLib.TMSFNCLocation"].ITMSFNCCustomLocation)));
        } finally {
          $ir.free();
        };
      };
      this.Create$1 = function () {
        pas.System.TObject.Create.call(this);
        return this;
      };
      this.Destroy = function () {
        pas["WEBLib.TMSFNCLocation"].TTMSFNCCustomLocationInterfacedObject.Destroy.call(this);
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCLocation"].ITMSFNCCustomLocation);
      rtl.addIntf(this,pas["WEBLib.TMSFNCLocation"].ITMSFNCCustomLocationInstance);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $impl.LocationService = null;
  };
},["Classes","Math","DateUtils","Types","SysUtils","WEBLib.TMSFNCLocation","WEBLib.TMSFNCUtils","WEBLib.TMSFNCTypes","WEBLib.TMSFNCMapsCommonTypes","WEBLib.TMSFNCCloudBase","contnrs","Web","WEBLib.JSON"]);
//# sourceMappingURL=WEBLib.TMSFNCLocation.IPStack.js.map
