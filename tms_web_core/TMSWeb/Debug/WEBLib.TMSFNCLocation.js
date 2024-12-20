rtl.module("WEBLib.TMSFNCLocation",["System","Classes","Types","WEBLib.Forms","Web","contnrs","WEBLib.TMSFNCTypes","WEBLib.TMSFNCMapsCommonTypes","WEBLib.TMSFNCCloudBase"],function () {
  "use strict";
  var $mod = this;
  this.TTMSFNCLocationDocURL = pas["WEBLib.TMSFNCTypes"].TTMSFNCBaseDocURL + "tmsfncmaps/components/ttmsfncmaps/#ttmsfnclocation";
  this.TTMSFNCLocationTipsURL = "https://www.tmssoftware.com/site/tmsfncmaps.asp?s=faq";
  this.MAJ_VER = 1;
  this.MIN_VER = 0;
  this.REL_VER = 2;
  this.BLD_VER = 0;
  this.$rtti.$Class("TTMSFNCCustomLocation");
  this.$rtti.$Class("TTMSFNCLocationRequests");
  this.$rtti.$Class("TTMSFNCLocationRequest");
  rtl.createInterface(this,"ITMSFNCCustomLocationProperties","{360FCEAE-9777-47FB-ACCC-4DFCAC859E8C}",["GetAPIKey"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetAPIKey",1,[],rtl.string);
  });
  rtl.createInterface(this,"ITMSFNCCustomLocationInstance","{2E68C9D2-AAE4-4D00-B243-BA7EC6BF1946}",["SetLocationProperties"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("SetLocationProperties",0,[["Value",$mod.$rtti["ITMSFNCCustomLocationProperties"],2]]);
  });
  rtl.createInterface(this,"ITMSFNCCustomLocation","{AC454083-A583-4826-B598-DF46154FD159}",["GetIdentifier","GetRequestMethod","GetHost","GetPath","GetQuery","GetPostData","AddHeaders","Parse","IsValid","DestroyLocation"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetIdentifier",1,[],rtl.string);
    $r.addMethod("GetRequestMethod",1,[],pas["WEBLib.TMSFNCCloudBase"].$rtti["TTMSFNCCloudBaseRequestMethod"]);
    $r.addMethod("GetHost",1,[],rtl.string);
    $r.addMethod("GetPath",1,[],rtl.string);
    $r.addMethod("GetQuery",1,[],rtl.string);
    $r.addMethod("GetPostData",1,[],rtl.string);
    $r.addMethod("AddHeaders",0,[["AHeaders",pas["WEBLib.TMSFNCCloudBase"].$rtti["TTMSFNCCloudBaseRequestHeaders"]]]);
    $r.addMethod("Parse",0,[["ARequest",$mod.$rtti["TTMSFNCLocationRequest"]],["ARequestResult",rtl.string]]);
    $r.addMethod("IsValid",1,[],rtl.boolean);
    $r.addMethod("DestroyLocation",0,[]);
  });
  rtl.createInterface(this,"ITMSFNCLocationService","{E18B6ADA-BA25-4D32-8427-9BA47CDE3B86}",["CreateLocation","DestroyLocation"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("CreateLocation",1,[],$mod.$rtti["ITMSFNCCustomLocation"]);
    $r.addMethod("DestroyLocation",0,[["ALocation",$mod.$rtti["ITMSFNCCustomLocation"]]]);
  });
  rtl.createInterface(this,"ITMSFNCLocationServiceIPStack","{212D0845-716A-4E06-A5EE-3DB50B1B639F}",[],this.ITMSFNCLocationService,function () {
  });
  rtl.createInterface(this,"ITMSFNCLocationServiceGoogle","{79722F6E-7BE2-451F-9D22-8F3C3CB5F118}",[],this.ITMSFNCLocationService,function () {
  });
  this.TTMSFNCLocationService = {"0": "lsGoogle", lsGoogle: 0, "1": "lsIPStack", lsIPStack: 1};
  this.$rtti.$Enum("TTMSFNCLocationService",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TTMSFNCLocationService});
  this.TTMSFNCLocationConnection = {"0": "lcHTTP", lcHTTP: 0, "1": "lcHTTPS", lcHTTPS: 1};
  this.$rtti.$Enum("TTMSFNCLocationConnection",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TTMSFNCLocationConnection});
  rtl.createClass(this,"TTMSFNCLocationRequest",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FID$1 = "";
      this.FOwner = null;
      this.FDataBoolean = false;
      this.FDataString = "";
      this.FDataObject = null;
      this.FDataInteger = 0;
      this.FDataPointer = null;
      this.FCoordinate = null;
      this.FPostalCode = "";
      this.FCountry = "";
      this.FCountryCode = "";
      this.FRegion = "";
      this.FCity = "";
      this.FIP = "";
      this.FIPType = "";
      this.FContinentCode = "";
      this.FContinent = "";
      this.FRegionCode = "";
    };
    this.$final = function () {
      this.FOwner = undefined;
      this.FDataObject = undefined;
      this.FCoordinate = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.SetCoordinate = function (Value) {
      this.FCoordinate.Assign(Value);
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      if (ACollection != null) this.FOwner = rtl.as(this.FCollection,$mod.TTMSFNCLocationRequests).FOwner$1;
      this.FCoordinate = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinate.$create("Create$1");
      this.FCity = "";
      this.FRegion = "";
      this.FRegionCode = "";
      this.FCountry = "";
      this.FCountryCode = "";
      this.FContinent = "";
      this.FContinentCode = "";
      this.FPostalCode = "";
      this.FIP = "";
      this.FIPType = "";
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCLocationRequest.isPrototypeOf(Source)) {
        this.FCity = Source.FCity;
        this.FCountry = Source.FCountry;
        this.FCountryCode = Source.FCountryCode;
        this.FContinent = Source.FContinent;
        this.FContinentCode = Source.FContinentCode;
        this.FRegion = Source.FRegion;
        this.FRegionCode = Source.FRegionCode;
        this.FPostalCode = Source.FPostalCode;
        this.FIP = Source.FIP;
        this.FIPType = Source.FIPType;
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FCoordinate");
      pas.Classes.TCollectionItem.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("ID",0,rtl.string,"FID$1","");
    $r.addProperty("Coordinate",2,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinate"],"FCoordinate","SetCoordinate");
    $r.addProperty("City",0,rtl.string,"FCity","FCity");
    $r.addProperty("Country",0,rtl.string,"FCountry","FCountry");
    $r.addProperty("CountryCode",0,rtl.string,"FCountryCode","FCountryCode");
    $r.addProperty("Continent",0,rtl.string,"FContinent","FContinent");
    $r.addProperty("ContinentCode",0,rtl.string,"FContinentCode","FContinentCode");
    $r.addProperty("Region",0,rtl.string,"FRegion","FRegion");
    $r.addProperty("RegionCode",0,rtl.string,"FRegionCode","FRegionCode");
    $r.addProperty("PostalCode",0,rtl.string,"FPostalCode","FPostalCode");
    $r.addProperty("IP",0,rtl.string,"FIP","FIP");
    $r.addProperty("IPType",0,rtl.string,"FIPType","FIPType");
  });
  rtl.createClass(this,"TTMSFNCLocationRequests",pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection,function () {
    this.$init = function () {
      pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection.$init.call(this);
      this.FOwner$1 = null;
    };
    this.$final = function () {
      this.FOwner$1 = undefined;
      pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection.$final.call(this);
    };
    this.GetItem$1 = function (Index) {
      var Result = null;
      Result = this.GetItem(Index);
      return Result;
    };
    this.SetItem$1 = function (Index, Value) {
      this.SetItem(Index,Value);
    };
    this.CreateItemClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCLocationRequest;
      return Result;
    };
    this.GetOwner = function () {
      var Result = null;
      Result = this.FOwner$1;
      return Result;
    };
    this.Create$3 = function (AOwner) {
      pas.Classes.TOwnedCollection.Create$2.call(this,AOwner,this.CreateItemClass());
      this.FOwner$1 = AOwner;
      return this;
    };
    this.Add$1 = function () {
      var Result = null;
      Result = pas.Classes.TCollection.Add.call(this);
      return Result;
    };
    this.Insert$1 = function (Index) {
      var Result = null;
      Result = pas.Classes.TCollection.Insert.call(this,Index);
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$3",2,[["AOwner",$mod.$rtti["TTMSFNCCustomLocation"]]]);
  });
  this.$rtti.$RefToProcVar("TTMSFNCLocationGetLocationCallBack",{procsig: rtl.newTIProcSig([["ARequest",this.$rtti["TTMSFNCLocationRequest"],2],["ARequestResult",pas["WEBLib.TMSFNCCloudBase"].$rtti["TTMSFNCCloudBaseRequestResult"],2]])});
  this.$rtti.$MethodVar("TTMSFNCLocationGetLocationEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ARequest",this.$rtti["TTMSFNCLocationRequest"],2],["ARequestResult",pas["WEBLib.TMSFNCCloudBase"].$rtti["TTMSFNCCloudBaseRequestResult"],2]]), methodkind: 0});
  this.$rtti.$RefToProcVar("TTMSFNCLocationGetLocationResultCallBack",{procsig: rtl.newTIProcSig([["AResult",this.$rtti["TTMSFNCLocationRequest"],2]])});
  this.$rtti.$MethodVar("TTMSFNCLocationGetLocationResultEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AResult",this.$rtti["TTMSFNCLocationRequest"],2]]), methodkind: 0});
  rtl.createClass(this,"TTMSFNCLocationCallBackWrapper",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FCallback = null;
    };
    this.$final = function () {
      this.FCallback = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.Create$1 = function (ACallback) {
      this.FCallback = ACallback;
      return this;
    };
  });
  rtl.createClass(this,"TTMSFNCLocationResultCallBackWrapper",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FCallback = null;
    };
    this.$final = function () {
      this.FCallback = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.Create$1 = function (ACallback) {
      this.FCallback = ACallback;
      return this;
    };
  });
  rtl.createClass(this,"TTMSFNCCustomLocation",pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBase,function () {
    this.$init = function () {
      pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBase.$init.call(this);
      this.FLocation = null;
      this.FLocationInstance = null;
      this.FLocationProperties = null;
      this.FService$1 = 0;
      this.FAPIKey = "";
      this.FLocationRequests = null;
      this.FOnGetLocation = null;
      this.FOnGetLocationInternal = null;
      this.FConnection = 0;
      this.FOnGetLocationResultInternal = null;
      this.FOnGetLocationResult = null;
    };
    this.$final = function () {
      rtl.setIntfP(this,"FLocation",null);
      rtl.setIntfP(this,"FLocationInstance",null);
      rtl.setIntfP(this,"FLocationProperties",null);
      this.FLocationRequests = undefined;
      this.FOnGetLocation = undefined;
      this.FOnGetLocationInternal = undefined;
      this.FOnGetLocationResultInternal = undefined;
      this.FOnGetLocationResult = undefined;
      pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBase.$final.call(this);
    };
    this.SetService$1 = function (Value) {
      if (this.FService$1 !== Value) {
        this.FService$1 = Value;
        this.InitializeLocation();
      };
    };
    this.SetAPIKey = function (Value) {
      if (this.FAPIKey !== Value) this.FAPIKey = Value;
    };
    this.SetLocationRequests = function (Value) {
      this.FLocationRequests.Assign(Value);
    };
    this.SetConnection = function (Value) {
      this.FConnection = Value;
    };
    this.InternalGetLocation = function (ACallback, ACallback2, AID) {
      if (!this.LocationReady()) {
        throw pas.SysUtils.Exception.$create("Create$1",["Please set API key!"]);
        return;
      };
      this.FRequest.Clear();
      this.FRequest.ClearHeaders();
      this.FLocation.AddHeaders(this.FRequest.GetHeaders());
      this.FRequest.FName = "GET LOCATION";
      this.FRequest.FDataString = AID;
      if (ACallback != null) {
        this.FRequest.FDataObject = $mod.TTMSFNCLocationCallBackWrapper.$create("Create$1",[ACallback])}
       else if (ACallback2 != null) this.FRequest.FDataObject = $mod.TTMSFNCLocationResultCallBackWrapper.$create("Create$1",[ACallback2]);
      this.FRequest.FMethod = this.FLocation.GetRequestMethod();
      this.FRequest.FHost = this.FLocation.GetHost();
      if ((this.FService$1 === $mod.TTMSFNCLocationService.lsIPStack) && (this.FConnection === $mod.TTMSFNCLocationConnection.lcHTTP)) this.FRequest.FHost = pas.SysUtils.StringReplace(this.FRequest.FHost,"https://","http://",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfIgnoreCase));
      this.FRequest.FPath = this.FLocation.GetPath();
      this.FRequest.FQuery = this.FLocation.GetQuery();
      this.FRequest.FPostData = this.FLocation.GetPostData();
      this.ExecuteRequest(rtl.createCallback(this,"DoRequestGetLocation"),null,true);
    };
    this.DoRequestGetLocation = function (ARequestResult) {
      var req = null;
      var obj = null;
      var obj2 = null;
      if (!this.LocationReady()) return;
      if (ARequestResult.FSuccess) {
        req = this.FLocationRequests.Add$1();
        req.FID$1 = ARequestResult.FDataString;
        this.FLocation.Parse(req,ARequestResult.FResultString);
        this.DoGetLocation(req,ARequestResult);
        if (ARequestResult.FDataObject != null) {
          if ($mod.TTMSFNCLocationCallBackWrapper.isPrototypeOf(ARequestResult.FDataObject)) {
            obj = ARequestResult.FDataObject;
            obj.FCallback(req,ARequestResult);
            obj = rtl.freeLoc(obj);
          } else if ($mod.TTMSFNCLocationResultCallBackWrapper.isPrototypeOf(ARequestResult.FDataObject)) {
            obj2 = ARequestResult.FDataObject;
            obj2.FCallback(req);
            obj2 = rtl.freeLoc(obj2);
          };
        };
      };
    };
    this.DoGetLocation = function (ARequest, ARequestResult) {
      if (this.FOnGetLocationInternal != null) this.FOnGetLocationInternal(this,ARequest,ARequestResult);
      if (this.FOnGetLocation != null) this.FOnGetLocation(this,ARequest,ARequestResult);
      if (this.FOnGetLocationResultInternal != null) this.FOnGetLocationResultInternal(this,ARequest);
      if (this.FOnGetLocationResult != null) this.FOnGetLocationResult(this,ARequest);
    };
    this.InitializeLocation = function () {
      var LocationServiceGoogleLocation = null;
      var LocationServiceIPStackLocation = null;
      try {
        if (this.IsDestroying()) return;
        if (this.FLocation != null) this.FLocation.DestroyLocation();
        rtl.setIntfP(this,"FLocation",null);
        rtl.setIntfP(this,"FLocationInstance",null);
        var $tmp = this.FService$1;
        if ($tmp === $mod.TTMSFNCLocationService.lsGoogle) {
          if ($mod.TTMSFNCLocationPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCLocationServiceGoogle),{get: function () {
              return LocationServiceGoogleLocation;
            }, set: function (v) {
              LocationServiceGoogleLocation = rtl.setIntfL(LocationServiceGoogleLocation,v);
            }})) rtl.setIntfP(this,"FLocation",LocationServiceGoogleLocation.CreateLocation(),true);
        } else if ($tmp === $mod.TTMSFNCLocationService.lsIPStack) {
          if ($mod.TTMSFNCLocationPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCLocationServiceIPStack),{get: function () {
              return LocationServiceIPStackLocation;
            }, set: function (v) {
              LocationServiceIPStackLocation = rtl.setIntfL(LocationServiceIPStackLocation,v);
            }})) rtl.setIntfP(this,"FLocation",LocationServiceIPStackLocation.CreateLocation(),true);
        };
        if ((this.FLocation != null) && pas.SysUtils.Supports$1(this.FLocation,rtl.getIntfGUIDR($mod.ITMSFNCCustomLocationInstance),{p: this, get: function () {
            return this.p.FLocationInstance;
          }, set: function (v) {
            this.p.FLocationInstance = v;
          }})) this.FLocationInstance.SetLocationProperties(this.FLocationProperties);
      } finally {
        rtl._Release(LocationServiceGoogleLocation);
        rtl._Release(LocationServiceIPStackLocation);
        rtl._Release(this.FLocationInstance);
      };
    };
    this.GetInstance = function () {
      var Result = 0;
      Result = pas["WEBLib.TMSFNCTypes"].HInstance();
      return Result;
    };
    this.GetLocationRequests = function () {
      var Result = null;
      Result = this.FLocationRequests;
      return Result;
    };
    this.LocationReady = function () {
      var Result = false;
      Result = (this.FLocation != null) && (this.FLocationInstance != null) && (this.FLocationProperties != null) && this.FLocation.IsValid();
      return Result;
    };
    this.GetAPIKey = function () {
      var Result = "";
      Result = this.FAPIKey;
      return Result;
    };
    this.GetVersionNr = function () {
      var Result = 0;
      Result = pas["WEBLib.TMSFNCUtils"].MakeLong(pas["WEBLib.TMSFNCUtils"].MakeWord(0,2),pas["WEBLib.TMSFNCUtils"].MakeWord(0,1));
      return Result;
    };
    this.GetDocURL = function () {
      var Result = "";
      Result = $mod.TTMSFNCLocationDocURL;
      return Result;
    };
    this.GetTipsURL = function () {
      var Result = "";
      Result = $mod.TTMSFNCLocationTipsURL;
      return Result;
    };
    this.Location = function () {
      var Result = null;
      var $ok = false;
      try {
        Result = rtl.setIntfL(Result,this.FLocation);
        $ok = true;
      } finally {
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.GetVersion = function () {
      var Result = "";
      var vn = 0;
      vn = this.GetVersionNr();
      Result = pas.SysUtils.IntToStr((pas["WEBLib.TMSFNCUtils"].Hiword(vn) >> 8) & 0xFF) + "." + pas.SysUtils.IntToStr(pas["WEBLib.TMSFNCUtils"].Hiword(vn) & 0xFF) + "." + pas.SysUtils.IntToStr((pas["WEBLib.TMSFNCUtils"].LoWord(vn) >> 8) & 0xFF) + "." + pas.SysUtils.IntToStr(pas["WEBLib.TMSFNCUtils"].LoWord(vn) & 0xFF);
      return Result;
    };
    this.Assign = function (Source) {
      pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCustomCloudBase.Assign.apply(this,arguments);
      if ($mod.TTMSFNCCustomLocation.isPrototypeOf(Source)) {
        this.FService$1 = rtl.as(Source,$mod.TTMSFNCCustomLocation).FService$1;
        this.FAPIKey = rtl.as(Source,$mod.TTMSFNCCustomLocation).FAPIKey;
        this.FLocationRequests.Assign(rtl.as(Source,$mod.TTMSFNCCustomLocation).FLocationRequests);
      };
    };
    this.Create$1 = function (AOwner) {
      var $ir = rtl.createIntfRefs();
      try {
        pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCustomCloudBase.Create$1.apply(this,arguments);
        pas.SysUtils.Supports$1($ir.ref(1,rtl.queryIntfT(this,pas.System.IUnknown)),rtl.getIntfGUIDR($mod.ITMSFNCCustomLocationProperties),{p: this, get: function () {
            return this.p.FLocationProperties;
          }, set: function (v) {
            this.p.FLocationProperties = v;
          }});
        this.FLocationRequests = $mod.TTMSFNCLocationRequests.$create("Create$3",[this]);
        this.InitializeLocation();
      } finally {
        $ir.free();
        rtl._Release(this.FLocationProperties);
      };
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FLocationRequests");
      if (this.FLocation != null) this.FLocation.DestroyLocation();
      rtl.setIntfP(this,"FLocation",null);
      rtl.setIntfP(this,"FLocationInstance",null);
      rtl.setIntfP(this,"FLocationProperties",null);
      this.FConnection = $mod.TTMSFNCLocationConnection.lcHTTP;
      pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCustomCloudBase.Destroy.call(this);
    };
    this.GetLocation = function (ACallback, AID) {
      this.InternalGetLocation(ACallback,null,AID);
    };
    this.GetLocationResult = function (ACallback, AID) {
      this.InternalGetLocation(null,ACallback,AID);
    };
    rtl.addIntf(this,$mod.ITMSFNCCustomLocationProperties);
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
    $r.addProperty("Connection",2,$mod.$rtti["TTMSFNCLocationConnection"],"FConnection","SetConnection");
  });
  rtl.createClass(this,"TTMSFNCCustomLocationInterfacedObject",pas.System.TInterfacedObject,function () {
    this.$init = function () {
      pas.System.TInterfacedObject.$init.call(this);
      this.FLocationProperties = null;
    };
    this.$final = function () {
      rtl.setIntfP(this,"FLocationProperties",null);
      pas.System.TInterfacedObject.$final.call(this);
    };
    this.GetLocationProperties = function () {
      var Result = null;
      var $ok = false;
      try {
        Result = rtl.setIntfL(Result,this.FLocationProperties);
        $ok = true;
      } finally {
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.SetLocationProperties = function (Value) {
      rtl.setIntfP(this,"FLocationProperties",Value);
    };
    this.Destroy = function () {
      rtl.setIntfP(this,"FLocationProperties",null);
      pas.System.TObject.Destroy.call(this);
    };
    rtl.addIntf(this,$mod.ITMSFNCCustomLocationInstance);
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TTMSFNCLocationList",pas.Classes.TList,function () {
    this.GetItem = function (Index) {
      var Result = null;
      var $ok = false;
      try {
        Result = rtl.setIntfL(Result,rtl.getObject(this.Get(Index)));
        $ok = true;
      } finally {
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.SetItem = function (Index, Value) {
      this.Put(Index,Value);
    };
  });
  rtl.createClass(this,"TTMSFNCLocationFactoryService",pas.System.TInterfacedObject,function () {
    this.$init = function () {
      pas.System.TInterfacedObject.$init.call(this);
      this.FLocation = null;
    };
    this.$final = function () {
      this.FLocation = undefined;
      pas.System.TInterfacedObject.$final.call(this);
    };
    this.CreateLocation = function () {
      var Result = null;
      var $ok = false;
      try {
        Result = rtl.setIntfL(Result,this.DoCreateLocation(),true);
        this.FLocation.Add(Result);
        $ok = true;
      } finally {
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.DestroyLocation = function (ALocation) {
      this.FLocation.Remove(ALocation);
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FLocation = $mod.TTMSFNCLocationList.$create("Create$1");
      return this;
    };
    this.Destroy = function () {
      pas.SysUtils.FreeAndNil({p: this, get: function () {
          return this.p.FLocation;
        }, set: function (v) {
          this.p.FLocation = v;
        }});
      pas.System.TObject.Destroy.call(this);
    };
    rtl.addIntf(this,$mod.ITMSFNCLocationService);
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TTMSFNCLocation",this.TTMSFNCCustomLocation,function () {
    this.RegisterRuntimeClasses = function () {
      pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent.RegisterRuntimeClasses.call(this);
      pas.Classes.RegisterClasses([$mod.TTMSFNCLocation]);
    };
    rtl.addIntf(this,$mod.ITMSFNCCustomLocationProperties);
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("OnGetLocation",0,$mod.$rtti["TTMSFNCLocationGetLocationEvent"],"FOnGetLocation","FOnGetLocation");
    $r.addProperty("OnGetLocationResult",0,$mod.$rtti["TTMSFNCLocationGetLocationResultEvent"],"FOnGetLocationResult","FOnGetLocationResult");
    $r.addProperty("APIKey",2,rtl.string,"FAPIKey","SetAPIKey");
    $r.addProperty("LocationRequests",2,$mod.$rtti["TTMSFNCLocationRequests"],"FLocationRequests","SetLocationRequests");
    $r.addProperty("Service",2,$mod.$rtti["TTMSFNCLocationService"],"FService$1","SetService$1",{Default: $mod.TTMSFNCLocationService.lsGoogle});
    $r.addProperty("Version",1,rtl.string,"GetVersion","");
  });
  rtl.createClass(this,"TTMSFNCLocationPlatformServicesService",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FInterface = null;
      this.FGUID = "";
    };
    this.$final = function () {
      rtl.setIntfP(this,"FInterface",null);
      pas.System.TObject.$final.call(this);
    };
    this.Create$1 = function (AGUID, AInterface) {
      this.FGUID = AGUID;
      rtl.setIntfP(this,"FInterface",AInterface);
      return this;
    };
  });
  rtl.createClass(this,"TTMSFNCLocationPlatformServicesList",pas.contnrs.TObjectList,function () {
    this.GetItem$1 = function (Index) {
      var Result = null;
      Result = this.GetItem(Index);
      return Result;
    };
    this.SetItem$1 = function (Index, Value) {
      this.SetItem(Index,Value);
    };
    this.GetValue = function (AGUID) {
      var Result = null;
      var I = 0;
      var $ok = false;
      try {
        Result = rtl.setIntfL(Result,null);
        for (var $l = 0, $end = this.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          if (this.GetItem$1(I).FGUID === AGUID) {
            Result = rtl.setIntfL(Result,this.GetItem$1(I).FInterface);
            break;
          };
        };
        $ok = true;
      } finally {
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.ContainsKey = function (AGUID) {
      var Result = false;
      var I = 0;
      Result = false;
      for (var $l = 0, $end = this.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        if (this.GetItem$1(I).FGUID === AGUID) {
          Result = true;
          break;
        };
      };
      return Result;
    };
    this.RemoveByGUID = function (AGUID) {
      var I = 0;
      for (var $l = this.GetCount() - 1; $l >= 0; $l--) {
        I = $l;
        if (this.GetItem$1(I).FGUID === AGUID) {
          this.Remove$1(this.GetItem$1(I));
          break;
        };
      };
    };
  });
  rtl.createClass(this,"TTMSFNCLocationPlatformServices",pas.System.TObject,function () {
    this.FCurrent = null;
    this.FCurrentReleased = false;
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FServicesList = null;
    };
    this.$final = function () {
      this.FServicesList = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.ReleaseCurrent = function () {
      pas.SysUtils.FreeAndNil({p: $mod.TTMSFNCLocationPlatformServices, get: function () {
          return this.p.FCurrent;
        }, set: function (v) {
          this.p.FCurrent = v;
        }});
      $mod.TTMSFNCLocationPlatformServices.FCurrentReleased = true;
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FServicesList = $mod.TTMSFNCLocationPlatformServicesList.$create("Create$2");
      return this;
    };
    this.Destroy = function () {
      pas.SysUtils.FreeAndNil({p: this, get: function () {
          return this.p.FServicesList;
        }, set: function (v) {
          this.p.FServicesList = v;
        }});
      pas.System.TObject.Destroy.call(this);
    };
    this.AddPlatformService = function (AServiceGUID, AService) {
      var LService = null;
      try {
        if (!this.FServicesList.ContainsKey(pas.SysUtils.GUIDToString(AServiceGUID))) {
          if (pas.SysUtils.Supports$1(AService,AServiceGUID,{get: function () {
              return LService;
            }, set: function (v) {
              LService = v;
            }})) this.FServicesList.Add$1($mod.TTMSFNCLocationPlatformServicesService.$create("Create$1",[pas.SysUtils.GUIDToString(AServiceGUID),AService]));
        };
      } finally {
        rtl._Release(LService);
      };
    };
    this.RemovePlatformService = function (AServiceGUID) {
      this.FServicesList.RemoveByGUID(pas.SysUtils.GUIDToString(AServiceGUID));
    };
    this.GetPlatformService = function (AServiceGUID) {
      var Result = null;
      var k = null;
      var $ok = false;
      try {
        k = rtl.setIntfL(k,this.FServicesList.GetValue(pas.SysUtils.GUIDToString(AServiceGUID)),true);
        pas.SysUtils.Supports$1(k,AServiceGUID,{get: function () {
            return Result;
          }, set: function (v) {
            Result = v;
          }});
        $ok = true;
      } finally {
        rtl._Release(k);
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.SupportsPlatformService = function (AServiceGUID) {
      var Result = false;
      Result = this.FServicesList.ContainsKey(pas.SysUtils.GUIDToString(AServiceGUID));
      return Result;
    };
    this.SupportsPlatformService$1 = function (AServiceGUID, AService) {
      var Result = false;
      var $ir = rtl.createIntfRefs();
      try {
        if (this.FServicesList.ContainsKey(pas.SysUtils.GUIDToString(AServiceGUID))) {
          Result = pas.SysUtils.Supports$1($ir.ref(1,this.FServicesList.GetValue(pas.SysUtils.GUIDToString(AServiceGUID))),AServiceGUID,AService)}
         else {
          AService.set(null);
          Result = false;
        };
      } finally {
        $ir.free();
      };
      return Result;
    };
    this.Current = function () {
      var Result = null;
      if ((this.FCurrent === null) && !this.FCurrentReleased) $mod.TTMSFNCLocationPlatformServices.FCurrent = $mod.TTMSFNCLocationPlatformServices.$create("Create$1");
      Result = this.FCurrent;
      return Result;
    };
  });
  $mod.$init = function () {
    $mod.TTMSFNCLocationPlatformServices.FCurrentReleased = false;
    pas["WEBLib.TMSFNCLocation.Google"].RegisterGoogleLocationService();
    pas["WEBLib.TMSFNCLocation.IPStack"].RegisterIPStackLocationService();
  };
},["Math","WEBLib.TMSFNCUtils","WEBLib.TMSFNCLocation.IPStack","WEBLib.TMSFNCLocation.Google","SysUtils"]);
//# sourceMappingURL=WEBLib.TMSFNCLocation.js.map
