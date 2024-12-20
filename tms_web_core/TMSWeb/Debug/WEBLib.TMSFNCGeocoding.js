rtl.module("WEBLib.TMSFNCGeocoding",["System","Classes","Types","WEBLib.Forms","Web","contnrs","JS","WEBLib.TMSFNCTypes","WEBLib.TMSFNCMapsCommonTypes","WEBLib.TMSFNCCloudBase"],function () {
  "use strict";
  var $mod = this;
  this.TTMSFNCGeocodingDocURL = pas["WEBLib.TMSFNCTypes"].TTMSFNCBaseDocURL + "tmsfncmaps/components/ttmsfncmaps/#ttmsfncgeocoding";
  this.TTMSFNCGeocodingTipsURL = "https://www.tmssoftware.com/site/tmsfncmaps.asp?s=faq";
  this.MAJ_VER = 1;
  this.MIN_VER = 5;
  this.REL_VER = 3;
  this.BLD_VER = 1;
  this.$rtti.$Class("TTMSFNCCustomGeocoding");
  this.$rtti.$Class("TTMSFNCGeocodingRequests");
  this.$rtti.$Class("TTMSFNCGeocodingRequest");
  rtl.createInterface(this,"ITMSFNCCustomGeocodingProperties","{FE4F141C-69EA-4FBE-B5BF-1262F9EFBA70}",["GetAPIKey"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetAPIKey",1,[],rtl.string);
  });
  rtl.createInterface(this,"ITMSFNCCustomGeocodingInstance","{25C43C12-543C-460C-A8EE-9010559E62AD}",["SetGeocodingProperties"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("SetGeocodingProperties",0,[["Value",$mod.$rtti["ITMSFNCCustomGeocodingProperties"],2]]);
  });
  rtl.createInterface(this,"ITMSFNCCustomGeocoding","{FE8B5C56-279A-405B-94ED-ACDFC142CFEF}",["GetIdentifier","GetRequestMethod","GetHost","GetReverseHost","GetPath","GetReversePath","GetQuery","GetQuery$1","GetPostData","AddHeaders","Parse","IsValid","DestroyGeocoding"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetIdentifier",1,[],rtl.string);
    $r.addMethod("GetRequestMethod",1,[],pas["WEBLib.TMSFNCCloudBase"].$rtti["TTMSFNCCloudBaseRequestMethod"]);
    $r.addMethod("GetHost",1,[],rtl.string);
    $r.addMethod("GetReverseHost",1,[],rtl.string);
    $r.addMethod("GetPath",1,[["AAddress",rtl.string]],rtl.string);
    $r.addMethod("GetReversePath",1,[["ACoordinate",pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinateRec"]]],rtl.string);
    $r.addMethod("GetQuery",1,[["AAddress",rtl.string],["ALocale",rtl.string]],rtl.string);
    $r.addMethod("GetQuery$1",1,[["ACoordinate",pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinateRec"]],["ALocale",rtl.string]],rtl.string);
    $r.addMethod("GetPostData",1,[],rtl.string);
    $r.addMethod("AddHeaders",0,[["AHeaders",pas["WEBLib.TMSFNCCloudBase"].$rtti["TTMSFNCCloudBaseRequestHeaders"]]]);
    $r.addMethod("Parse",0,[["ARequest",$mod.$rtti["TTMSFNCGeocodingRequest"]],["ARequestResult",rtl.string]]);
    $r.addMethod("IsValid",1,[],rtl.boolean);
    $r.addMethod("DestroyGeocoding",0,[]);
  });
  rtl.createInterface(this,"ITMSFNCGeocodingService","{7B450AC9-7EE3-4D61-AFEA-6D0D1FF2B392}",["CreateGeocoding","DestroyGeocoding"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("CreateGeocoding",1,[],$mod.$rtti["ITMSFNCCustomGeocoding"]);
    $r.addMethod("DestroyGeocoding",0,[["AGeocoding",$mod.$rtti["ITMSFNCCustomGeocoding"]]]);
  });
  rtl.createInterface(this,"ITMSFNCGeocodingServiceGoogle","{88D1B5B9-DA7F-44EB-97C7-93C5EBDDEA83}",[],this.ITMSFNCGeocodingService,function () {
  });
  rtl.createInterface(this,"ITMSFNCGeocodingServiceHere","{C08CBDEE-6884-4C81-A241-3B8E8EE1D6F2}",[],this.ITMSFNCGeocodingService,function () {
  });
  rtl.createInterface(this,"ITMSFNCGeocodingServiceBing","{E03F86CE-3E36-43D9-AD79-4D9D1BFB5C22}",[],this.ITMSFNCGeocodingService,function () {
  });
  rtl.createInterface(this,"ITMSFNCGeocodingServiceAzure","{541F996E-F3A7-4750-8E12-D95B091DB936}",[],this.ITMSFNCGeocodingService,function () {
  });
  rtl.createInterface(this,"ITMSFNCGeocodingServiceMapBox","{496E6828-08F0-4E28-AB11-577069815E99}",[],this.ITMSFNCGeocodingService,function () {
  });
  rtl.createInterface(this,"ITMSFNCGeocodingServiceTomTom","{95D7749D-DA80-45D3-B0E5-D21E7654FABA}",[],this.ITMSFNCGeocodingService,function () {
  });
  rtl.createInterface(this,"ITMSFNCGeocodingServiceOpenStreetMap","{E2D4A08F-03F2-4A23-83AA-27E599E01C5A}",[],this.ITMSFNCGeocodingService,function () {
  });
  rtl.createInterface(this,"ITMSFNCGeocodingServiceOpenRouteService","{CE13AC60-6343-4A53-8577-4A11D98F9136}",[],this.ITMSFNCGeocodingService,function () {
  });
  rtl.createInterface(this,"ITMSFNCGeocodingServiceGeoApify","{BEAAE65C-C97B-4668-8C94-413F8C7987B8}",[],this.ITMSFNCGeocodingService,function () {
  });
  this.TTMSFNCGeocodingService = {"0": "gsGoogle", gsGoogle: 0, "1": "gsHere", gsHere: 1, "2": "gsBing", gsBing: 2, "3": "gsAzure", gsAzure: 3, "4": "gsMapBox", gsMapBox: 4, "5": "gsTomTom", gsTomTom: 5, "6": "gsOpenStreetMap", gsOpenStreetMap: 6, "7": "gsOpenRouteService", gsOpenRouteService: 7, "8": "gsGeoApify", gsGeoApify: 8};
  this.$rtti.$Enum("TTMSFNCGeocodingService",{minvalue: 0, maxvalue: 8, ordtype: 1, enumtype: this.TTMSFNCGeocodingService});
  this.TTMSFNCGeocodingPrecision = {"0": "gpRoofTop", gpRoofTop: 0, "1": "gpRangeInterpolated", gpRangeInterpolated: 1, "2": "gpGeometricCenter", gpGeometricCenter: 2, "3": "gpApproximate", gpApproximate: 3, "4": "gpUnknown", gpUnknown: 4};
  this.$rtti.$Enum("TTMSFNCGeocodingPrecision",{minvalue: 0, maxvalue: 4, ordtype: 1, enumtype: this.TTMSFNCGeocodingPrecision});
  rtl.createClass(this,"TTMSFNCGeocodingItem",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FOwner = null;
      this.FDataBoolean = false;
      this.FDataString = "";
      this.FDataObject = null;
      this.FDataInteger = 0;
      this.FDataPointer = null;
      this.FAddress = "";
      this.FCoordinate = null;
      this.FStreet = "";
      this.FPostalCode = "";
      this.FCountry = "";
      this.FCountryCode = "";
      this.FRegion = "";
      this.FCity = "";
      this.FProvince = "";
      this.FProvinceCode = "";
      this.FRegionCode = "";
      this.FDistrict = "";
      this.FStreetNumber = "";
      this.FIntersection = "";
      this.FPrecision = 0;
      this.FStreetName = "";
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
      if (ACollection != null) this.FOwner = rtl.as(this.FCollection,$mod.TTMSFNCGeocodingItems).FOwner$1;
      this.FCoordinate = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinate.$create("Create$1");
      this.FAddress = "";
      this.FCity = "";
      this.FDistrict = "";
      this.FRegion = "";
      this.FRegionCode = "";
      this.FCountry = "";
      this.FCountryCode = "";
      this.FProvince = "";
      this.FProvinceCode = "";
      this.FStreet = "";
      this.FStreetNumber = "";
      this.FStreetName = "";
      this.FPostalCode = "";
      this.FIntersection = "";
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCGeocodingItem.isPrototypeOf(Source)) {
        this.FCoordinate.Assign(Source.FCoordinate);
        this.FAddress = Source.FAddress;
        this.FCity = Source.FCity;
        this.FDistrict = Source.FDistrict;
        this.FCountry = Source.FCountry;
        this.FCountryCode = Source.FCountryCode;
        this.FProvince = Source.FProvince;
        this.FProvinceCode = Source.FProvinceCode;
        this.FRegion = Source.FRegion;
        this.FRegionCode = Source.FRegionCode;
        this.FStreet = Source.FStreet;
        this.FStreetNumber = Source.FStreetNumber;
        this.FStreetName = Source.FStreetName;
        this.FPostalCode = Source.FPostalCode;
        this.FIntersection = Source.FIntersection;
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FCoordinate");
      pas.Classes.TCollectionItem.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("Coordinate",2,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinate"],"FCoordinate","SetCoordinate");
    $r.addProperty("Address",0,rtl.string,"FAddress","FAddress");
    $r.addProperty("City",0,rtl.string,"FCity","FCity");
    $r.addProperty("District",0,rtl.string,"FDistrict","FDistrict");
    $r.addProperty("Country",0,rtl.string,"FCountry","FCountry");
    $r.addProperty("CountryCode",0,rtl.string,"FCountryCode","FCountryCode");
    $r.addProperty("Province",0,rtl.string,"FProvince","FProvince");
    $r.addProperty("ProvinceCode",0,rtl.string,"FProvinceCode","FProvinceCode");
    $r.addProperty("Region",0,rtl.string,"FRegion","FRegion");
    $r.addProperty("RegionCode",0,rtl.string,"FRegionCode","FRegionCode");
    $r.addProperty("Street",0,rtl.string,"FStreet","FStreet");
    $r.addProperty("StreetName",0,rtl.string,"FStreetName","FStreetName");
    $r.addProperty("StreetNumber",0,rtl.string,"FStreetNumber","FStreetNumber");
    $r.addProperty("PostalCode",0,rtl.string,"FPostalCode","FPostalCode");
    $r.addProperty("Intersection",0,rtl.string,"FIntersection","FIntersection");
    $r.addProperty("Precision",0,$mod.$rtti["TTMSFNCGeocodingPrecision"],"FPrecision","FPrecision");
  });
  rtl.createClass(this,"TTMSFNCGeocodingItems",pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection,function () {
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
      Result = $mod.TTMSFNCGeocodingItem;
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
    $r.addMethod("Create$3",2,[["AOwner",$mod.$rtti["TTMSFNCCustomGeocoding"]]]);
  });
  rtl.createClass(this,"TTMSFNCGeocodingRequest",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FOwner = null;
      this.FDataPointer = null;
      this.FDataBoolean = false;
      this.FDataString = "";
      this.FDataObject = null;
      this.FDataInteger = 0;
      this.FItems = null;
      this.FID$1 = "";
      this.FStatus = "";
      this.FErrorMessage = "";
    };
    this.$final = function () {
      this.FOwner = undefined;
      this.FDataObject = undefined;
      this.FItems = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.SetItems = function (Value) {
      this.FItems.Assign(Value);
    };
    this.SetErrorMessage = function (Value) {
      this.FErrorMessage = Value;
    };
    this.SetStatus = function (Value) {
      this.FStatus = Value;
    };
    this.GetFirst = function () {
      var Result = null;
      Result = null;
      if (this.FItems.GetCount() > 0) Result = this.FItems.GetItem$1(0);
      return Result;
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      if (ACollection != null) this.FOwner = rtl.as(this.FCollection,$mod.TTMSFNCGeocodingRequests).FOwner$1;
      this.FItems = $mod.TTMSFNCGeocodingItems.$create("Create$3",[this.FOwner]);
      this.FID$1 = "";
      this.FStatus = "";
      this.FErrorMessage = "";
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCGeocodingRequest.isPrototypeOf(Source)) {
        this.FItems.Assign(rtl.as(Source,$mod.TTMSFNCGeocodingRequest).FItems);
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FItems");
      pas.Classes.TCollectionItem.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("ID",0,rtl.string,"FID$1","");
    $r.addProperty("Items",2,$mod.$rtti["TTMSFNCGeocodingItems"],"FItems","SetItems");
    $r.addProperty("Status",2,rtl.string,"FStatus","SetStatus");
    $r.addProperty("ErrorMessage",2,rtl.string,"FErrorMessage","SetErrorMessage");
  });
  rtl.createClass(this,"TTMSFNCGeocodingRequests",pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection,function () {
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
      Result = $mod.TTMSFNCGeocodingRequest;
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
    $r.addMethod("Create$3",2,[["AOwner",$mod.$rtti["TTMSFNCCustomGeocoding"]]]);
  });
  this.$rtti.$RefToProcVar("TTMSFNCGeocodingGetGeocodingCallBack",{procsig: rtl.newTIProcSig([["ARequest",this.$rtti["TTMSFNCGeocodingRequest"],2],["ARequestResult",pas["WEBLib.TMSFNCCloudBase"].$rtti["TTMSFNCCloudBaseRequestResult"],2]])});
  this.$rtti.$MethodVar("TTMSFNCGeocodingGetGeocodingEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ARequest",this.$rtti["TTMSFNCGeocodingRequest"],2],["ARequestResult",pas["WEBLib.TMSFNCCloudBase"].$rtti["TTMSFNCCloudBaseRequestResult"],2]]), methodkind: 0});
  this.$rtti.$RefToProcVar("TTMSFNCGeocodingGetGeocodingResultCallBack",{procsig: rtl.newTIProcSig([["AResult",this.$rtti["TTMSFNCGeocodingRequest"],2]])});
  this.$rtti.$MethodVar("TTMSFNCGeocodingGetGeocodingResultEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AResult",this.$rtti["TTMSFNCGeocodingRequest"],2]]), methodkind: 0});
  this.$rtti.$RefToProcVar("TTMSFNCGeocodingGetReverseGeocodingCallBack",{procsig: rtl.newTIProcSig([["ARequest",this.$rtti["TTMSFNCGeocodingRequest"],2],["ARequestResult",pas["WEBLib.TMSFNCCloudBase"].$rtti["TTMSFNCCloudBaseRequestResult"],2]])});
  this.$rtti.$MethodVar("TTMSFNCGeocodingGetReverseGeocodingEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ARequest",this.$rtti["TTMSFNCGeocodingRequest"],2],["ARequestResult",pas["WEBLib.TMSFNCCloudBase"].$rtti["TTMSFNCCloudBaseRequestResult"],2]]), methodkind: 0});
  this.$rtti.$RefToProcVar("TTMSFNCGeocodingGetReverseGeocodingResultCallBack",{procsig: rtl.newTIProcSig([["AResult",this.$rtti["TTMSFNCGeocodingRequest"],2]])});
  this.$rtti.$MethodVar("TTMSFNCGeocodingGetReverseGeocodingResultEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AResult",this.$rtti["TTMSFNCGeocodingRequest"],2]]), methodkind: 0});
  rtl.createClass(this,"TTMSFNCGeocodingCallBackWrapper",pas.System.TObject,function () {
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
  rtl.createClass(this,"TTMSFNCGeocodingResultCallBackWrapper",pas.System.TObject,function () {
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
  rtl.createClass(this,"TTMSFNCReverseGeocodingCallBackWrapper",pas.System.TObject,function () {
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
  rtl.createClass(this,"TTMSFNCReverseGeocodingResultCallBackWrapper",pas.System.TObject,function () {
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
  rtl.createClass(this,"TTMSFNCCustomGeocoding",pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBase,function () {
    this.$init = function () {
      pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBase.$init.call(this);
      this.FGeocoding = null;
      this.FGeocodingInstance = null;
      this.FGeocodingProperties = null;
      this.FService$1 = 0;
      this.FAPIKey = "";
      this.FGeocodingRequests = null;
      this.FOnGetGeocoding = null;
      this.FOnGetGeocodingInternal = null;
      this.FOnGetReverseGeocodingInternal = null;
      this.FOnGetReverseGeocoding = null;
      this.FOnGetGeocodingResult = null;
      this.FOnGetReverseGeocodingResultInternal = null;
      this.FOnGetReverseGeocodingResult = null;
      this.FOnGetGeocodingResultInternal = null;
    };
    this.$final = function () {
      rtl.setIntfP(this,"FGeocoding",null);
      rtl.setIntfP(this,"FGeocodingInstance",null);
      rtl.setIntfP(this,"FGeocodingProperties",null);
      this.FGeocodingRequests = undefined;
      this.FOnGetGeocoding = undefined;
      this.FOnGetGeocodingInternal = undefined;
      this.FOnGetReverseGeocodingInternal = undefined;
      this.FOnGetReverseGeocoding = undefined;
      this.FOnGetGeocodingResult = undefined;
      this.FOnGetReverseGeocodingResultInternal = undefined;
      this.FOnGetReverseGeocodingResult = undefined;
      this.FOnGetGeocodingResultInternal = undefined;
      pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBase.$final.call(this);
    };
    this.SetService$1 = function (Value) {
      if (this.FService$1 !== Value) {
        this.FService$1 = Value;
        this.InitializeGeocoding();
      };
    };
    this.SetAPIKey = function (Value) {
      if (this.FAPIKey !== Value) this.FAPIKey = Value;
    };
    this.SetGeocodingRequests = function (Value) {
      this.FGeocodingRequests.Assign(Value);
    };
    this.InternalGetGeocoding = function (AAddress, ACallback, ACallback2, AID, ADataPointer, ALocale, AMode) {
      if (!this.GeocodingReady()) {
        throw pas.SysUtils.Exception.$create("Create$1",["Please set API key!"]);
        return;
      };
      this.FRequest.Clear();
      this.FRequest.ClearHeaders();
      this.FGeocoding.AddHeaders(this.FRequest.GetHeaders());
      this.FRequest.FName = "GET GEOCODING";
      this.FRequest.FDataString = AID;
      this.FRequest.FDataPointer = ADataPointer;
      if (ACallback != null) {
        this.FRequest.FDataObject = $mod.TTMSFNCGeocodingCallBackWrapper.$create("Create$1",[ACallback])}
       else if (ACallback2 != null) this.FRequest.FDataObject = $mod.TTMSFNCGeocodingResultCallBackWrapper.$create("Create$1",[ACallback2]);
      this.FRequest.FMethod = this.FGeocoding.GetRequestMethod();
      this.FRequest.FHost = this.FGeocoding.GetHost();
      this.FRequest.FPath = this.FGeocoding.GetPath(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.URLEncode(AAddress));
      this.FRequest.FQuery = this.FGeocoding.GetQuery(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.URLEncode(AAddress),pas["WEBLib.TMSFNCMapsCommonTypes"].ParseLocale(ALocale,AMode));
      this.FRequest.FPostData = this.FGeocoding.GetPostData();
      this.ExecuteRequest(rtl.createCallback(this,"DoRequestGetGeocoding"),null,true);
    };
    this.InternalGetReverseGeocoding = function (ACoordinate, ACallback, ACallback2, AID, ADataPointer, ALocale, AMode) {
      if (!this.GeocodingReady()) {
        throw pas.SysUtils.Exception.$create("Create$1",["Please set API key!"]);
        return;
      };
      this.FRequest.Clear();
      this.FRequest.ClearHeaders();
      this.FGeocoding.AddHeaders(this.FRequest.GetHeaders());
      this.FRequest.FName = "GET REVERSEGEOCODING";
      this.FRequest.FDataString = AID;
      this.FRequest.FDataPointer = ADataPointer;
      this.FRequest.FDataBoolean = true;
      if (ACallback != null) {
        this.FRequest.FDataObject = $mod.TTMSFNCReverseGeocodingCallBackWrapper.$create("Create$1",[ACallback])}
       else if (ACallback2 != null) this.FRequest.FDataObject = $mod.TTMSFNCReverseGeocodingResultCallBackWrapper.$create("Create$1",[ACallback2]);
      this.FRequest.FMethod = this.FGeocoding.GetRequestMethod();
      this.FRequest.FHost = this.FGeocoding.GetReverseHost();
      this.FRequest.FPath = this.FGeocoding.GetReversePath(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(ACoordinate));
      this.FRequest.FQuery = this.FGeocoding.GetQuery$1(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(ACoordinate),pas["WEBLib.TMSFNCMapsCommonTypes"].ParseLocale(ALocale,AMode));
      this.FRequest.FPostData = this.FGeocoding.GetPostData();
      this.ExecuteRequest(rtl.createCallback(this,"DoRequestGetGeocoding"),null,true);
    };
    this.InternalGetGeocodingSync = function (AAddress, ALocale, AMode) {
      var $Self = this;
      var Result = null;
      var req = null;
      if (!this.GeocodingReady()) {
        throw pas.SysUtils.Exception.$create("Create$1",["Please set API key!"]);
        return Result;
      };
      Result = new Promise(function (AResolve, AReject) {
        $Self.GetGeocoding(AAddress,function (ARequest, ARequestResult) {
          var c = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$new();
          c.$assign(pas["WEBLib.TMSFNCMapsCommonTypes"].EmptyCoordinate());
          if (ARequest.FItems.GetCount() > 0) c.$assign(ARequest.FItems.GetItem$1(0).FCoordinate.GetToRec());
          AResolve(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(c));
        },"",null,ALocale,AMode);
      });
      return Result;
    };
    this.InternalGetReverseGeocodingSync = function (ACoordinate, ALocale, AMode) {
      var $Self = this;
      var Result = null;
      var req = null;
      if (!this.GeocodingReady()) {
        throw pas.SysUtils.Exception.$create("Create$1",["Please set API key!"]);
        return Result;
      };
      Result = new Promise(function (AResolve, AReject) {
        $Self.GetReverseGeocoding(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(ACoordinate),function (ARequest, ARequestResult) {
          var s = "";
          s = "";
          if (ARequest.FItems.GetCount() > 0) s = ARequest.FItems.GetItem$1(0).FAddress;
          AResolve(s);
        },"",null,ALocale,AMode);
      });
      return Result;
    };
    this.DoRequestGetGeocoding = function (ARequestResult) {
      var req = null;
      var obj = null;
      var obj2 = null;
      var obj3 = null;
      if (!this.GeocodingReady()) return;
      req = this.FGeocodingRequests.Add$1();
      req.FID$1 = ARequestResult.FDataString;
      req.FDataPointer = ARequestResult.FDataPointer;
      this.FGeocoding.Parse(req,ARequestResult.FResultString);
      if (!ARequestResult.FDataBoolean) {
        this.DoGetGeocoding(req,ARequestResult)}
       else this.DoGetReverseGeocoding(req,ARequestResult);
      if (ARequestResult.FDataObject != null) {
        if ($mod.TTMSFNCGeocodingCallBackWrapper.isPrototypeOf(ARequestResult.FDataObject)) {
          obj = ARequestResult.FDataObject;
          obj.FCallback(req,ARequestResult);
          obj = rtl.freeLoc(obj);
        } else if ($mod.TTMSFNCGeocodingResultCallBackWrapper.isPrototypeOf(ARequestResult.FDataObject)) {
          obj2 = ARequestResult.FDataObject;
          obj2.FCallback(req);
          obj2 = rtl.freeLoc(obj2);
        } else if ($mod.TTMSFNCReverseGeocodingCallBackWrapper.isPrototypeOf(ARequestResult.FDataObject)) {
          obj3 = ARequestResult.FDataObject;
          obj3.FCallback(req);
          obj3 = rtl.freeLoc(obj3);
        } else if ($mod.TTMSFNCReverseGeocodingResultCallBackWrapper.isPrototypeOf(ARequestResult.FDataObject)) {
          obj3 = ARequestResult.FDataObject;
          obj3.FCallback(req);
          obj3 = rtl.freeLoc(obj3);
        };
      };
    };
    this.DoGetGeocoding = function (ARequest, ARequestResult) {
      if (this.FOnGetGeocodingInternal != null) this.FOnGetGeocodingInternal(this,ARequest,ARequestResult);
      if (this.FOnGetGeocoding != null) this.FOnGetGeocoding(this,ARequest,ARequestResult);
      if (this.FOnGetGeocodingResultInternal != null) this.FOnGetGeocodingResultInternal(this,ARequest);
      if (this.FOnGetGeocodingResult != null) this.FOnGetGeocodingResult(this,ARequest);
    };
    this.DoGetReverseGeocoding = function (ARequest, ARequestResult) {
      if (this.FOnGetReverseGeocodingInternal != null) this.FOnGetReverseGeocodingInternal(this,ARequest,ARequestResult);
      if (this.FOnGetReverseGeocoding != null) this.FOnGetReverseGeocoding(this,ARequest,ARequestResult);
      if (this.FOnGetReverseGeocodingResultInternal != null) this.FOnGetReverseGeocodingResultInternal(this,ARequest);
      if (this.FOnGetReverseGeocodingResult != null) this.FOnGetReverseGeocodingResult(this,ARequest);
    };
    this.InitializeGeocoding = function () {
      var GeocodingServiceGoogleGeocoding = null;
      var GeocodingServiceHereGeocoding = null;
      var GeocodingServiceBingGeocoding = null;
      var GeocodingServiceAzureGeocoding = null;
      var GeocodingServiceMapBoxGeocoding = null;
      var GeocodingServiceTomTomGeocoding = null;
      var GeocodingServiceOpenStreetMapGeocoding = null;
      var GeocodingServiceOpenRouteServiceGeocoding = null;
      var GeocodingServiceGeoApifyGeocoding = null;
      try {
        if (this.IsDestroying()) return;
        if (this.FGeocoding != null) this.FGeocoding.DestroyGeocoding();
        rtl.setIntfP(this,"FGeocoding",null);
        rtl.setIntfP(this,"FGeocodingInstance",null);
        var $tmp = this.FService$1;
        if ($tmp === $mod.TTMSFNCGeocodingService.gsGoogle) {
          if ($mod.TTMSFNCGeocodingPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCGeocodingServiceGoogle),{get: function () {
              return GeocodingServiceGoogleGeocoding;
            }, set: function (v) {
              GeocodingServiceGoogleGeocoding = rtl.setIntfL(GeocodingServiceGoogleGeocoding,v);
            }})) rtl.setIntfP(this,"FGeocoding",GeocodingServiceGoogleGeocoding.CreateGeocoding(),true);
        } else if ($tmp === $mod.TTMSFNCGeocodingService.gsHere) {
          if ($mod.TTMSFNCGeocodingPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCGeocodingServiceHere),{get: function () {
              return GeocodingServiceHereGeocoding;
            }, set: function (v) {
              GeocodingServiceHereGeocoding = rtl.setIntfL(GeocodingServiceHereGeocoding,v);
            }})) rtl.setIntfP(this,"FGeocoding",GeocodingServiceHereGeocoding.CreateGeocoding(),true);
        } else if ($tmp === $mod.TTMSFNCGeocodingService.gsBing) {
          if ($mod.TTMSFNCGeocodingPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCGeocodingServiceBing),{get: function () {
              return GeocodingServiceBingGeocoding;
            }, set: function (v) {
              GeocodingServiceBingGeocoding = rtl.setIntfL(GeocodingServiceBingGeocoding,v);
            }})) rtl.setIntfP(this,"FGeocoding",GeocodingServiceBingGeocoding.CreateGeocoding(),true);
        } else if ($tmp === $mod.TTMSFNCGeocodingService.gsAzure) {
          if ($mod.TTMSFNCGeocodingPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCGeocodingServiceAzure),{get: function () {
              return GeocodingServiceAzureGeocoding;
            }, set: function (v) {
              GeocodingServiceAzureGeocoding = rtl.setIntfL(GeocodingServiceAzureGeocoding,v);
            }})) rtl.setIntfP(this,"FGeocoding",GeocodingServiceAzureGeocoding.CreateGeocoding(),true);
        } else if ($tmp === $mod.TTMSFNCGeocodingService.gsMapBox) {
          if ($mod.TTMSFNCGeocodingPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCGeocodingServiceMapBox),{get: function () {
              return GeocodingServiceMapBoxGeocoding;
            }, set: function (v) {
              GeocodingServiceMapBoxGeocoding = rtl.setIntfL(GeocodingServiceMapBoxGeocoding,v);
            }})) rtl.setIntfP(this,"FGeocoding",GeocodingServiceMapBoxGeocoding.CreateGeocoding(),true);
        } else if ($tmp === $mod.TTMSFNCGeocodingService.gsTomTom) {
          if ($mod.TTMSFNCGeocodingPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCGeocodingServiceTomTom),{get: function () {
              return GeocodingServiceTomTomGeocoding;
            }, set: function (v) {
              GeocodingServiceTomTomGeocoding = rtl.setIntfL(GeocodingServiceTomTomGeocoding,v);
            }})) rtl.setIntfP(this,"FGeocoding",GeocodingServiceTomTomGeocoding.CreateGeocoding(),true);
        } else if ($tmp === $mod.TTMSFNCGeocodingService.gsOpenStreetMap) {
          if ($mod.TTMSFNCGeocodingPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCGeocodingServiceOpenStreetMap),{get: function () {
              return GeocodingServiceOpenStreetMapGeocoding;
            }, set: function (v) {
              GeocodingServiceOpenStreetMapGeocoding = rtl.setIntfL(GeocodingServiceOpenStreetMapGeocoding,v);
            }})) rtl.setIntfP(this,"FGeocoding",GeocodingServiceOpenStreetMapGeocoding.CreateGeocoding(),true);
        } else if ($tmp === $mod.TTMSFNCGeocodingService.gsOpenRouteService) {
          if ($mod.TTMSFNCGeocodingPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCGeocodingServiceOpenRouteService),{get: function () {
              return GeocodingServiceOpenRouteServiceGeocoding;
            }, set: function (v) {
              GeocodingServiceOpenRouteServiceGeocoding = rtl.setIntfL(GeocodingServiceOpenRouteServiceGeocoding,v);
            }})) rtl.setIntfP(this,"FGeocoding",GeocodingServiceOpenRouteServiceGeocoding.CreateGeocoding(),true);
        } else if ($tmp === $mod.TTMSFNCGeocodingService.gsGeoApify) {
          if ($mod.TTMSFNCGeocodingPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCGeocodingServiceGeoApify),{get: function () {
              return GeocodingServiceGeoApifyGeocoding;
            }, set: function (v) {
              GeocodingServiceGeoApifyGeocoding = rtl.setIntfL(GeocodingServiceGeoApifyGeocoding,v);
            }})) rtl.setIntfP(this,"FGeocoding",GeocodingServiceGeoApifyGeocoding.CreateGeocoding(),true);
        };
        if ((this.FGeocoding != null) && pas.SysUtils.Supports$1(this.FGeocoding,rtl.getIntfGUIDR($mod.ITMSFNCCustomGeocodingInstance),{p: this, get: function () {
            return this.p.FGeocodingInstance;
          }, set: function (v) {
            this.p.FGeocodingInstance = v;
          }})) this.FGeocodingInstance.SetGeocodingProperties(this.FGeocodingProperties);
      } finally {
        rtl._Release(GeocodingServiceGoogleGeocoding);
        rtl._Release(GeocodingServiceHereGeocoding);
        rtl._Release(GeocodingServiceBingGeocoding);
        rtl._Release(GeocodingServiceAzureGeocoding);
        rtl._Release(GeocodingServiceMapBoxGeocoding);
        rtl._Release(GeocodingServiceTomTomGeocoding);
        rtl._Release(GeocodingServiceOpenStreetMapGeocoding);
        rtl._Release(GeocodingServiceOpenRouteServiceGeocoding);
        rtl._Release(GeocodingServiceGeoApifyGeocoding);
        rtl._Release(this.FGeocodingInstance);
      };
    };
    this.GetInstance = function () {
      var Result = 0;
      Result = pas["WEBLib.TMSFNCTypes"].HInstance();
      return Result;
    };
    this.GetGeocodingRequests = function () {
      var Result = null;
      Result = this.FGeocodingRequests;
      return Result;
    };
    this.GeocodingReady = function () {
      var Result = false;
      Result = (this.FGeocoding != null) && (this.FGeocodingInstance != null) && (this.FGeocodingProperties != null) && this.FGeocoding.IsValid();
      return Result;
    };
    this.GetAPIKey = function () {
      var Result = "";
      Result = this.FAPIKey;
      return Result;
    };
    this.GetVersionNr = function () {
      var Result = 0;
      Result = pas["WEBLib.TMSFNCUtils"].MakeLong(pas["WEBLib.TMSFNCUtils"].MakeWord(1,3),pas["WEBLib.TMSFNCUtils"].MakeWord(5,1));
      return Result;
    };
    this.GetDocURL = function () {
      var Result = "";
      Result = $mod.TTMSFNCGeocodingDocURL;
      return Result;
    };
    this.GetTipsURL = function () {
      var Result = "";
      Result = $mod.TTMSFNCGeocodingTipsURL;
      return Result;
    };
    this.Geocoding = function () {
      var Result = null;
      var $ok = false;
      try {
        Result = rtl.setIntfL(Result,this.FGeocoding);
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
      if ($mod.TTMSFNCCustomGeocoding.isPrototypeOf(Source)) {
        this.FService$1 = rtl.as(Source,$mod.TTMSFNCCustomGeocoding).FService$1;
        this.FAPIKey = rtl.as(Source,$mod.TTMSFNCCustomGeocoding).FAPIKey;
        this.FGeocodingRequests.Assign(rtl.as(Source,$mod.TTMSFNCCustomGeocoding).FGeocodingRequests);
      };
    };
    this.Create$1 = function (AOwner) {
      var $ir = rtl.createIntfRefs();
      try {
        pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCustomCloudBase.Create$1.apply(this,arguments);
        pas.SysUtils.Supports$1($ir.ref(1,rtl.queryIntfT(this,pas.System.IUnknown)),rtl.getIntfGUIDR($mod.ITMSFNCCustomGeocodingProperties),{p: this, get: function () {
            return this.p.FGeocodingProperties;
          }, set: function (v) {
            this.p.FGeocodingProperties = v;
          }});
        this.FGeocodingRequests = $mod.TTMSFNCGeocodingRequests.$create("Create$3",[this]);
        this.InitializeGeocoding();
      } finally {
        $ir.free();
        rtl._Release(this.FGeocodingProperties);
      };
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FGeocodingRequests");
      if (this.FGeocoding != null) this.FGeocoding.DestroyGeocoding();
      rtl.setIntfP(this,"FGeocoding",null);
      rtl.setIntfP(this,"FGeocodingInstance",null);
      rtl.setIntfP(this,"FGeocodingProperties",null);
      pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCustomCloudBase.Destroy.call(this);
    };
    this.GetGeocoding = function (AAddress, ACallback, AID, ADataPointer, ALocale, AMode) {
      this.InternalGetGeocoding(AAddress,ACallback,null,AID,ADataPointer,ALocale,AMode);
    };
    this.GetReverseGeocoding = function (ACoordinate, ACallback, AID, ADataPointer, ALocale, AMode) {
      this.InternalGetReverseGeocoding(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(ACoordinate),ACallback,null,AID,ADataPointer,ALocale,AMode);
    };
    this.GetGeocodingResult = function (AAddress, ACallback, AID, ADataPointer, ALocale, AMode) {
      this.InternalGetGeocoding(AAddress,null,ACallback,AID,ADataPointer,ALocale,AMode);
    };
    this.GetReverseGeocodingResult = function (ACoordinate, ACallback, AID, ADataPointer, ALocale, AMode) {
      this.InternalGetReverseGeocoding(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(ACoordinate),null,ACallback,AID,ADataPointer,ALocale,AMode);
    };
    this.GetGeocodingSync = async function (AAddress, ALocale, AMode) {
      var Result = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$new();
      Result.$assign(await this.InternalGetGeocodingSync(AAddress,ALocale,AMode));
      return Result;
    };
    this.GetReverseGeocodingSync = async function (ACoordinate, ALocale, AMode) {
      var Result = "";
      Result = await this.InternalGetReverseGeocodingSync(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(ACoordinate),ALocale,AMode);
      return Result;
    };
    rtl.addIntf(this,$mod.ITMSFNCCustomGeocodingProperties);
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
  });
  rtl.createClass(this,"TTMSFNCCustomGeocodingInterfacedObject",pas.System.TInterfacedObject,function () {
    this.$init = function () {
      pas.System.TInterfacedObject.$init.call(this);
      this.FGeocodingProperties = null;
    };
    this.$final = function () {
      rtl.setIntfP(this,"FGeocodingProperties",null);
      pas.System.TInterfacedObject.$final.call(this);
    };
    this.GetGeocodingProperties = function () {
      var Result = null;
      var $ok = false;
      try {
        Result = rtl.setIntfL(Result,this.FGeocodingProperties);
        $ok = true;
      } finally {
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.SetGeocodingProperties = function (Value) {
      rtl.setIntfP(this,"FGeocodingProperties",Value);
    };
    this.Destroy = function () {
      rtl.setIntfP(this,"FGeocodingProperties",null);
      pas.System.TObject.Destroy.call(this);
    };
    rtl.addIntf(this,$mod.ITMSFNCCustomGeocodingInstance);
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TTMSFNCGeocodingList",pas.Classes.TList,function () {
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
  rtl.createClass(this,"TTMSFNCGeocodingFactoryService",pas.System.TInterfacedObject,function () {
    this.$init = function () {
      pas.System.TInterfacedObject.$init.call(this);
      this.FGeocoding = null;
    };
    this.$final = function () {
      this.FGeocoding = undefined;
      pas.System.TInterfacedObject.$final.call(this);
    };
    this.CreateGeocoding = function () {
      var Result = null;
      var $ok = false;
      try {
        Result = rtl.setIntfL(Result,this.DoCreateGeocoding(),true);
        this.FGeocoding.Add(Result);
        $ok = true;
      } finally {
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.DestroyGeocoding = function (AGeocoding) {
      this.FGeocoding.Remove(AGeocoding);
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FGeocoding = $mod.TTMSFNCGeocodingList.$create("Create$1");
      return this;
    };
    this.Destroy = function () {
      pas.SysUtils.FreeAndNil({p: this, get: function () {
          return this.p.FGeocoding;
        }, set: function (v) {
          this.p.FGeocoding = v;
        }});
      pas.System.TObject.Destroy.call(this);
    };
    rtl.addIntf(this,$mod.ITMSFNCGeocodingService);
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TTMSFNCGeocoding",this.TTMSFNCCustomGeocoding,function () {
    this.RegisterRuntimeClasses = function () {
      pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent.RegisterRuntimeClasses.call(this);
      pas.Classes.RegisterClasses([$mod.TTMSFNCGeocoding]);
    };
    rtl.addIntf(this,$mod.ITMSFNCCustomGeocodingProperties);
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("OnGetReverseGeocoding",0,$mod.$rtti["TTMSFNCGeocodingGetReverseGeocodingEvent"],"FOnGetReverseGeocoding","FOnGetReverseGeocoding");
    $r.addProperty("OnGetGeocoding",0,$mod.$rtti["TTMSFNCGeocodingGetGeocodingEvent"],"FOnGetGeocoding","FOnGetGeocoding");
    $r.addProperty("OnGetReverseGeocodingResult",0,$mod.$rtti["TTMSFNCGeocodingGetReverseGeocodingResultEvent"],"FOnGetReverseGeocodingResult","FOnGetReverseGeocodingResult");
    $r.addProperty("OnGetGeocodingResult",0,$mod.$rtti["TTMSFNCGeocodingGetGeocodingResultEvent"],"FOnGetGeocodingResult","FOnGetGeocodingResult");
    $r.addProperty("APIKey",2,rtl.string,"FAPIKey","SetAPIKey");
    $r.addProperty("GeocodingRequests",2,$mod.$rtti["TTMSFNCGeocodingRequests"],"FGeocodingRequests","SetGeocodingRequests");
    $r.addProperty("Service",2,$mod.$rtti["TTMSFNCGeocodingService"],"FService$1","SetService$1",{Default: $mod.TTMSFNCGeocodingService.gsGoogle});
    $r.addProperty("Version",1,rtl.string,"GetVersion","");
  });
  rtl.createClass(this,"TTMSFNCGeocodingPlatformServicesService",pas.System.TObject,function () {
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
  rtl.createClass(this,"TTMSFNCGeocodingPlatformServicesList",pas.contnrs.TObjectList,function () {
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
  rtl.createClass(this,"TTMSFNCGeocodingPlatformServices",pas.System.TObject,function () {
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
      pas.SysUtils.FreeAndNil({p: $mod.TTMSFNCGeocodingPlatformServices, get: function () {
          return this.p.FCurrent;
        }, set: function (v) {
          this.p.FCurrent = v;
        }});
      $mod.TTMSFNCGeocodingPlatformServices.FCurrentReleased = true;
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FServicesList = $mod.TTMSFNCGeocodingPlatformServicesList.$create("Create$2");
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
            }})) this.FServicesList.Add$1($mod.TTMSFNCGeocodingPlatformServicesService.$create("Create$1",[pas.SysUtils.GUIDToString(AServiceGUID),AService]));
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
      if ((this.FCurrent === null) && !this.FCurrentReleased) $mod.TTMSFNCGeocodingPlatformServices.FCurrent = $mod.TTMSFNCGeocodingPlatformServices.$create("Create$1");
      Result = this.FCurrent;
      return Result;
    };
  });
  $mod.$init = function () {
    $mod.TTMSFNCGeocodingPlatformServices.FCurrentReleased = false;
    pas["WEBLib.TMSFNCGeocoding.Google"].RegisterGoogleGeocodingService();
    pas["WEBLib.TMSFNCGeocoding.Here"].RegisterHereGeocodingService();
    pas["WEBLib.TMSFNCGeocoding.Bing"].RegisterBingGeocodingService();
    pas["WEBLib.TMSFNCGeocoding.Azure"].RegisterAzureGeocodingService();
    pas["WEBLib.TMSFNCGeocoding.MapBox"].RegisterMapBoxGeocodingService();
    pas["WEBLib.TMSFNCGeocoding.TomTom"].RegisterTomTomGeocodingService();
    pas["WEBLib.TMSFNCGeocoding.OpenStreetMap"].RegisterOpenStreetMapGeocodingService();
    pas["WEBLib.TMSFNCGeocoding.OpenRouteService"].RegisterOpenRouteServiceGeocodingService();
    pas["WEBLib.TMSFNCGeocoding.GeoApify"].RegisterGeoApifyGeocodingService();
  };
},["Math","WEBLib.TMSFNCUtils","WEBLib.TMSFNCGeocoding.Google","WEBLib.TMSFNCGeocoding.Here","WEBLib.TMSFNCGeocoding.Bing","WEBLib.TMSFNCGeocoding.Azure","WEBLib.TMSFNCGeocoding.MapBox","WEBLib.TMSFNCGeocoding.TomTom","WEBLib.TMSFNCGeocoding.OpenStreetMap","WEBLib.TMSFNCGeocoding.OpenRouteService","WEBLib.TMSFNCGeocoding.GeoApify","SysUtils"]);
//# sourceMappingURL=WEBLib.TMSFNCGeocoding.js.map
