rtl.module("WEBLib.TMSFNCLocation.Google",["System"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.RegisterGoogleLocationService = function () {
    if (!pas["WEBLib.TMSFNCLocation"].TTMSFNCLocationPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCLocation"].ITMSFNCLocationServiceGoogle),{p: $impl, get: function () {
        return this.p.LocationService;
      }, set: function (v) {
        rtl.setIntfP(this.p,"LocationService",v);
      }})) {
      rtl.setIntfP($impl,"LocationService",rtl.queryIntfT($impl.TTMSFNCLocationGoogleService.$create("Create$1"),pas["WEBLib.TMSFNCLocation"].ITMSFNCLocationServiceGoogle),true);
      pas["WEBLib.TMSFNCLocation"].TTMSFNCLocationPlatformServices.Current().AddPlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCLocation"].ITMSFNCLocationServiceGoogle),$impl.LocationService);
    };
  };
  this.UnRegisterGoogleLocationService = function () {
    pas["WEBLib.TMSFNCLocation"].TTMSFNCLocationPlatformServices.Current().RemovePlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCLocation"].ITMSFNCLocationServiceGoogle));
  };
  $mod.$implcode = function () {
    $mod.$rtti.$Class("TTMSFNCLocationGoogleService");
    rtl.createClass($impl,"TTMSFNCLocationGoogleLocationFactoryService",pas["WEBLib.TMSFNCLocation"].TTMSFNCLocationFactoryService,function () {
      rtl.addIntf(this,pas["WEBLib.TMSFNCLocation"].ITMSFNCLocationServiceGoogle);
      rtl.addIntf(this,pas["WEBLib.TMSFNCLocation"].ITMSFNCLocationService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    rtl.createClass($impl,"TTMSFNCLocationGoogleService",$impl.TTMSFNCLocationGoogleLocationFactoryService,function () {
      this.DoCreateLocation = function () {
        var Result = null;
        var $ok = false;
        try {
          Result = rtl.setIntfL(Result,rtl.queryIntfT($impl.TTMSFNCLocationGoogleLocation.$create("Create$1"),pas["WEBLib.TMSFNCLocation"].ITMSFNCCustomLocation),true);
          $ok = true;
        } finally {
          if (!$ok) rtl._Release(Result);
        };
        return Result;
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCLocation"].ITMSFNCLocationServiceGoogle);
      rtl.addIntf(this,pas["WEBLib.TMSFNCLocation"].ITMSFNCLocationService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $mod.$rtti.$Class("TTMSFNCLocationGoogleLocation");
    rtl.createClass($impl,"TTMSFNCLocationGoogleLocation",pas["WEBLib.TMSFNCLocation"].TTMSFNCCustomLocationInterfacedObject,function () {
      this.GetIdentifier = function () {
        var Result = "";
        Result = "Google";
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
        Result = pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBaseRequestMethod.rmPOST;
        return Result;
      };
      this.GetHost = function () {
        var Result = "";
        Result = "https://www.googleapis.com";
        return Result;
      };
      this.GetPath = function () {
        var Result = "";
        Result = "/geolocation/v1/geolocate";
        return Result;
      };
      this.GetQuery = function () {
        var Result = "";
        var $ir = rtl.createIntfRefs();
        try {
          Result = "key=" + $ir.ref(1,this.GetLocationProperties()).GetAPIKey();
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
        var b = null;
        var $ir = rtl.createIntfRefs();
        try {
          if ($ir.ref(1,this.GetLocationProperties()) != null) {
            if (ARequest != null) {
              if (ARequestResult !== "") {
                o = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.ParseJSON(ARequestResult);
                if (o != null) {
                  try {
                    b = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(o,"location"),pas["WEBLib.JSON"].TJSONObject);
                    if (b != null) {
                      ARequest.FCoordinate.SetLatitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(b,"lat"));
                      ARequest.FCoordinate.SetLongitude(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONDoubleValue(b,"lng"));
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
//# sourceMappingURL=WEBLib.TMSFNCLocation.Google.js.map
