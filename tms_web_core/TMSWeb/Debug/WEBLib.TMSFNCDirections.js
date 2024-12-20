rtl.module("WEBLib.TMSFNCDirections",["System","Classes","Types","WEBLib.Forms","Web","contnrs","WEBLib.TMSFNCTypes","WEBLib.TMSFNCMapsCommonTypes","WEBLib.TMSFNCCloudBase"],function () {
  "use strict";
  var $mod = this;
  this.TTMSFNCDirectionsDocURL = pas["WEBLib.TMSFNCTypes"].TTMSFNCBaseDocURL + "tmsfncmaps/components/ttmsfncmaps/#ttmsfncdirections";
  this.TTMSFNCDirectionsTipsURL = "https://www.tmssoftware.com/site/tmsfncmaps.asp?s=faq";
  this.MAJ_VER = 1;
  this.MIN_VER = 5;
  this.REL_VER = 0;
  this.BLD_VER = 0;
  this.TTMSFNCDirectionsTravelMode = {"0": "tmDriving", tmDriving: 0, "1": "tmWalking", tmWalking: 1, "2": "tmBicycling", tmBicycling: 2, "3": "tmPublicTransport", tmPublicTransport: 3, "4": "tmTruck", tmTruck: 4};
  this.$rtti.$Enum("TTMSFNCDirectionsTravelMode",{minvalue: 0, maxvalue: 4, ordtype: 1, enumtype: this.TTMSFNCDirectionsTravelMode});
  this.$rtti.$Class("TTMSFNCCustomDirections");
  this.$rtti.$Class("TTMSFNCDirectionsRequest");
  this.$rtti.$Class("TTMSFNCDirectionsItems");
  this.$rtti.$Class("TTMSFNCDirectionsItem");
  rtl.createInterface(this,"ITMSFNCCustomDirectionsProperties","{7E76D35C-397F-4D05-AAAB-3CE44C082FE7}",["GetAPIKey","GetTruckOptions","GetGoogleRoutesOptions"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetAPIKey",1,[],rtl.string);
    $r.addMethod("GetTruckOptions",1,[["AOptions",rtl.string,1],["AAvoidTolls",rtl.boolean]],rtl.string);
    $r.addMethod("GetGoogleRoutesOptions",1,[["AOptions",rtl.string,1],["ATravelMode",$mod.$rtti["TTMSFNCDirectionsTravelMode"]],["AWayPoints",pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinateRecArray"]],["AWayPointsList",pas.Classes.$rtti["TStringList"]]],rtl.string);
  });
  rtl.createInterface(this,"ITMSFNCCustomDirectionsInstance","{BB0799B8-FE15-4E10-AC1D-7490C887DB7C}",["SetDirectionsProperties"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("SetDirectionsProperties",0,[["Value",$mod.$rtti["ITMSFNCCustomDirectionsProperties"],2]]);
  });
  rtl.createInterface(this,"ITMSFNCCustomDirections","{EDE79341-AAA4-4E89-B471-47365BDC999D}",["GetIdentifier","GetRequestMethod","GetHost","GetPath","GetQuery","GetPostData","AddHeaders","Parse","IsValid","DestroyDirections"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetIdentifier",1,[],rtl.string);
    $r.addMethod("GetRequestMethod",1,[],pas["WEBLib.TMSFNCCloudBase"].$rtti["TTMSFNCCloudBaseRequestMethod"]);
    $r.addMethod("GetHost",1,[],rtl.string);
    $r.addMethod("GetPath",1,[["AOrigin",rtl.string],["ADestination",rtl.string],["AOriginLatitude",rtl.double],["AOriginLongitude",rtl.double],["ADestinationLatitude",rtl.double],["ADestinationLongitude",rtl.double],["ATravelMode",$mod.$rtti["TTMSFNCDirectionsTravelMode"]],["AWayPoints",pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinateRecArray"]]],rtl.string);
    $r.addMethod("GetQuery",1,[["AOrigin",rtl.string],["ADestination",rtl.string],["AOriginLatitude",rtl.double],["AOriginLongitude",rtl.double],["ADestinationLatitude",rtl.double],["ADestinationLongitude",rtl.double],["AAlternatives",rtl.boolean],["ATravelMode",$mod.$rtti["TTMSFNCDirectionsTravelMode"]],["AWayPointList",pas.Classes.$rtti["TStringList"]],["AWayPoints",pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinateRecArray"]],["AOptimizeWayPoints",rtl.boolean],["ALocale",rtl.string],["AAvoidTolls",rtl.boolean]],rtl.string);
    $r.addMethod("GetPostData",1,[["AOrigin",rtl.string],["ADestination",rtl.string],["AOriginLatitude",rtl.double],["AOriginLongitude",rtl.double],["ADestinationLatitude",rtl.double],["ADestinationLongitude",rtl.double],["AAlternatives",rtl.boolean],["ATravelMode",$mod.$rtti["TTMSFNCDirectionsTravelMode"]],["AWayPointList",pas.Classes.$rtti["TStringList"]],["AWayPoints",pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinateRecArray"]],["AOptimizeWayPoints",rtl.boolean],["ALocale",rtl.string],["AAvoidTolls",rtl.boolean]],rtl.string);
    $r.addMethod("AddHeaders",0,[["AHeaders",pas["WEBLib.TMSFNCCloudBase"].$rtti["TTMSFNCCloudBaseRequestHeaders"]]]);
    $r.addMethod("Parse",0,[["ARequest",$mod.$rtti["TTMSFNCDirectionsRequest"]],["ARequestResult",rtl.string]]);
    $r.addMethod("IsValid",1,[],rtl.boolean);
    $r.addMethod("DestroyDirections",0,[]);
  });
  rtl.createInterface(this,"ITMSFNCDirectionsService","{74DDA282-D3BD-4883-8A49-CE2F67BF32AB}",["CreateDirections","DestroyDirections"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("CreateDirections",1,[],$mod.$rtti["ITMSFNCCustomDirections"]);
    $r.addMethod("DestroyDirections",0,[["ADirections",$mod.$rtti["ITMSFNCCustomDirections"]]]);
  });
  rtl.createInterface(this,"ITMSFNCDirectionsServiceGoogle","{6A97B0E0-8F24-4E04-9110-E1472169FF20}",[],this.ITMSFNCDirectionsService,function () {
  });
  rtl.createInterface(this,"ITMSFNCDirectionsServiceGoogleRoutes","{65FF008D-06F9-418D-8399-7DCB12003B17}",[],this.ITMSFNCDirectionsService,function () {
  });
  rtl.createInterface(this,"ITMSFNCDirectionsServiceHere","{0CD111D1-2C73-47A0-86B2-04CFFD819AAF}",[],this.ITMSFNCDirectionsService,function () {
  });
  rtl.createInterface(this,"ITMSFNCDirectionsServiceBing","{6A0EED0A-BBE0-4092-956F-37A0055A64B2}",[],this.ITMSFNCDirectionsService,function () {
  });
  rtl.createInterface(this,"ITMSFNCDirectionsServiceAzure","{A8DBA06B-C950-4B88-B124-58A67600E0F5}",[],this.ITMSFNCDirectionsService,function () {
  });
  rtl.createInterface(this,"ITMSFNCDirectionsServiceMapBox","{8695A289-6B14-472C-AA32-617B913173FD}",[],this.ITMSFNCDirectionsService,function () {
  });
  rtl.createInterface(this,"ITMSFNCDirectionsServiceTomTom","{111375A8-5C34-4AA9-A612-E3FB70944928}",[],this.ITMSFNCDirectionsService,function () {
  });
  rtl.createInterface(this,"ITMSFNCDirectionsServiceOpenRouteService","{ABDB1BFD-AEBF-421A-B744-98E7040803F9}",[],this.ITMSFNCDirectionsService,function () {
  });
  rtl.createInterface(this,"ITMSFNCDirectionsServiceGeoApify","{BFB8236B-9D74-4F67-BCFB-1641107C4DEA}",[],this.ITMSFNCDirectionsService,function () {
  });
  this.TTMSFNCDirectionsService = {"0": "dsGoogle", dsGoogle: 0, "1": "dsHere", dsHere: 1, "2": "dsBing", dsBing: 2, "3": "dsAzure", dsAzure: 3, "4": "dsMapBox", dsMapBox: 4, "5": "dsTomTom", dsTomTom: 5, "6": "dsOpenRouteService", dsOpenRouteService: 6, "7": "dsGeoApify", dsGeoApify: 7};
  this.$rtti.$Enum("TTMSFNCDirectionsService",{minvalue: 0, maxvalue: 7, ordtype: 1, enumtype: this.TTMSFNCDirectionsService});
  rtl.createClass(this,"TTMSFNCDirectionsStep",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FOwner = null;
      this.FDataBoolean = false;
      this.FDataString = "";
      this.FDataObject = null;
      this.FDataInteger = 0;
      this.FDataPointer = null;
      this.FDistance = 0;
      this.FDuration = 0;
      this.FStartLocation = null;
      this.FInstructions = "";
      this.FEndLocation = null;
      this.FCoordinates = null;
    };
    this.$final = function () {
      this.FOwner = undefined;
      this.FDataObject = undefined;
      this.FStartLocation = undefined;
      this.FEndLocation = undefined;
      this.FCoordinates = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.SetCoordinates = function (Value) {
      this.FCoordinates.Assign(Value);
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      if (ACollection != null) this.FOwner = rtl.as(this.FCollection,$mod.TTMSFNCDirectionsSteps).FOwner$1;
      this.FCoordinates = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinates.$create("Create$3",[this]);
      this.FStartLocation = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinate.$create("Create$1");
      this.FEndLocation = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinate.$create("Create$1");
      this.FDistance = 0;
      this.FDuration = 0;
      this.FInstructions = "";
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCDirectionsStep.isPrototypeOf(Source)) {
        this.FCoordinates.Assign(Source.FCoordinates);
        this.FStartLocation.Assign(Source.FStartLocation);
        this.FEndLocation.Assign(Source.FEndLocation);
        this.FDistance = Source.FDistance;
        this.FDuration = Source.FDuration;
        this.FInstructions = Source.FInstructions;
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FCoordinates");
      rtl.free(this,"FStartLocation");
      rtl.free(this,"FEndLocation");
      pas.Classes.TCollectionItem.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("Coordinates",2,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinates"],"FCoordinates","SetCoordinates");
    $r.addProperty("StartLocation",0,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinate"],"FStartLocation","FStartLocation");
    $r.addProperty("EndLocation",0,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinate"],"FEndLocation","FEndLocation");
    $r.addProperty("Distance",0,rtl.longint,"FDistance","FDistance");
    $r.addProperty("Duration",0,rtl.longint,"FDuration","FDuration");
    $r.addProperty("Instructions",0,rtl.string,"FInstructions","FInstructions");
  });
  rtl.createClass(this,"TTMSFNCDirectionsSteps",pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection,function () {
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
      Result = $mod.TTMSFNCDirectionsStep;
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
    $r.addMethod("Create$3",2,[["AOwner",pas.Classes.$rtti["TCollectionItem"]]]);
  });
  rtl.createClass(this,"TTMSFNCDirectionsLeg",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FOwner = null;
      this.FDataBoolean = false;
      this.FDataString = "";
      this.FDataObject = null;
      this.FDataInteger = 0;
      this.FDataPointer = null;
      this.FDistance = 0;
      this.FDuration = 0;
      this.FStartLocation = null;
      this.FEndLocation = null;
      this.FCoordinates = null;
      this.FSteps = null;
      this.FStartAddress = "";
      this.FEndAddress = "";
    };
    this.$final = function () {
      this.FOwner = undefined;
      this.FDataObject = undefined;
      this.FStartLocation = undefined;
      this.FEndLocation = undefined;
      this.FCoordinates = undefined;
      this.FSteps = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.SetCoordinates = function (Value) {
      this.FCoordinates.Assign(Value);
    };
    this.SetSteps = function (Value) {
      this.FSteps = Value;
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      if (ACollection != null) this.FOwner = rtl.as(this.FCollection,$mod.TTMSFNCDirectionsLegs).FOwner$1;
      this.FCoordinates = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinates.$create("Create$3",[this]);
      this.FStartLocation = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinate.$create("Create$1");
      this.FEndLocation = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinate.$create("Create$1");
      this.FDistance = 0;
      this.FDuration = 0;
      this.FSteps = $mod.TTMSFNCDirectionsSteps.$create("Create$3",[this]);
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCDirectionsLeg.isPrototypeOf(Source)) {
        this.FCoordinates.Assign(Source.FCoordinates);
        this.FStartLocation.Assign(Source.FStartLocation);
        this.FEndLocation.Assign(Source.FEndLocation);
        this.FDistance = Source.FDistance;
        this.FDuration = Source.FDuration;
        this.FSteps.Assign(Source.FSteps);
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FCoordinates");
      rtl.free(this,"FStartLocation");
      rtl.free(this,"FEndLocation");
      rtl.free(this,"FSteps");
      pas.Classes.TCollectionItem.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("Coordinates",2,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinates"],"FCoordinates","SetCoordinates");
    $r.addProperty("StartAddress",0,rtl.string,"FStartAddress","FStartAddress");
    $r.addProperty("StartLocation",0,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinate"],"FStartLocation","FStartLocation");
    $r.addProperty("EndAddress",0,rtl.string,"FEndAddress","FEndAddress");
    $r.addProperty("EndLocation",0,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinate"],"FEndLocation","FEndLocation");
    $r.addProperty("Distance",0,rtl.longint,"FDistance","FDistance");
    $r.addProperty("Duration",0,rtl.longint,"FDuration","FDuration");
    $r.addProperty("Steps",2,$mod.$rtti["TTMSFNCDirectionsSteps"],"FSteps","SetSteps");
  });
  rtl.createClass(this,"TTMSFNCDirectionsLegs",pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection,function () {
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
      Result = $mod.TTMSFNCDirectionsLeg;
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
    $r.addMethod("Create$3",2,[["AOwner",pas.Classes.$rtti["TCollectionItem"]]]);
  });
  rtl.createClass(this,"TTMSFNCDirectionsWayPoint",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FOwner = null;
      this.FDataBoolean = false;
      this.FDataString = "";
      this.FDataObject = null;
      this.FDataInteger = 0;
      this.FDataPointer = null;
      this.FDistance = 0;
      this.FDuration = 0;
      this.FOptimizedIndex = 0;
    };
    this.$final = function () {
      this.FOwner = undefined;
      this.FDataObject = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      if (ACollection != null) this.FOwner = rtl.as(this.FCollection,$mod.TTMSFNCDirectionsWayPoints).FOwner$1;
      this.FDistance = 0;
      this.FDuration = 0;
      this.FOptimizedIndex = -1;
      return this;
    };
    this.Assign = function (Source) {
      pas.Classes.TPersistent.Assign.apply(this,arguments);
      if ($mod.TTMSFNCDirectionsWayPoint.isPrototypeOf(Source)) {
        this.FDistance = Source.FDistance;
        this.FDuration = Source.FDuration;
        this.FOptimizedIndex = Source.FOptimizedIndex;
      };
    };
    this.Destroy = function () {
      pas.Classes.TCollectionItem.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("Distance",0,rtl.longint,"FDistance","FDistance");
    $r.addProperty("Duration",0,rtl.longint,"FDuration","FDuration");
    $r.addProperty("OptimizedIndex",0,rtl.longint,"FOptimizedIndex","FOptimizedIndex");
  });
  rtl.createClass(this,"TTMSFNCDirectionsWayPoints",pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection,function () {
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
      Result = $mod.TTMSFNCDirectionsWayPoint;
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
    $r.addMethod("Create$3",2,[["AOwner",pas.Classes.$rtti["TCollectionItem"]]]);
  });
  rtl.createClass(this,"TTMSFNCDirectionsItem",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FOwner = null;
      this.FDataBoolean = false;
      this.FDataString = "";
      this.FDataObject = null;
      this.FDataInteger = 0;
      this.FDataPointer = null;
      this.FCoordinates = null;
      this.FSummary = "";
      this.FDistance = 0.0;
      this.FDuration = 0;
      this.FSteps = null;
      this.FLegs = null;
      this.FWayPoints = null;
    };
    this.$final = function () {
      this.FOwner = undefined;
      this.FDataObject = undefined;
      this.FCoordinates = undefined;
      this.FSteps = undefined;
      this.FLegs = undefined;
      this.FWayPoints = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.SetCoordinates = function (Value) {
      this.FCoordinates.Assign(Value);
    };
    this.GetBounds = function () {
      var Result = null;
      Result = this.FCoordinates.GetBounds();
      return Result;
    };
    this.SetSteps = function (Value) {
      this.FSteps.Assign(Value);
    };
    this.SetLegs = function (Value) {
      this.FLegs.Assign(Value);
    };
    this.SetWayPoints = function (Value) {
      this.FWayPoints.Assign(Value);
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      if ((ACollection != null) && $mod.TTMSFNCDirectionsItems.isPrototypeOf(this.FCollection)) this.FOwner = rtl.as(this.FCollection,$mod.TTMSFNCDirectionsItems).FOwner$1;
      this.FCoordinates = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinates.$create("Create$3",[this]);
      this.FDistance = 0;
      this.FDuration = 0;
      this.FSummary = "";
      this.FSteps = $mod.TTMSFNCDirectionsSteps.$create("Create$3",[this]);
      this.FLegs = $mod.TTMSFNCDirectionsLegs.$create("Create$3",[this]);
      this.FWayPoints = $mod.TTMSFNCDirectionsWayPoints.$create("Create$3",[this]);
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCDirectionsItem.isPrototypeOf(Source)) {
        this.FCoordinates.Assign(Source.FCoordinates);
        this.FDistance = Source.FDistance;
        this.FDuration = Source.FDuration;
        this.FSummary = Source.FSummary;
        this.FSteps.Assign(Source.FSteps);
        this.FLegs.Assign(Source.FLegs);
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FCoordinates");
      rtl.free(this,"FSteps");
      rtl.free(this,"FLegs");
      rtl.free(this,"FWayPoints");
      pas.Classes.TCollectionItem.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("Coordinates",2,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinates"],"FCoordinates","SetCoordinates");
    $r.addProperty("Distance",0,rtl.double,"FDistance","FDistance");
    $r.addProperty("Duration",0,rtl.longint,"FDuration","FDuration");
    $r.addProperty("Summary",0,rtl.string,"FSummary","FSummary");
    $r.addProperty("WayPoints",2,$mod.$rtti["TTMSFNCDirectionsWayPoints"],"FWayPoints","SetWayPoints");
    $r.addProperty("Steps",2,$mod.$rtti["TTMSFNCDirectionsSteps"],"FSteps","SetSteps");
  });
  rtl.createClass(this,"TTMSFNCDirectionsItems",pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection,function () {
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
      Result = $mod.TTMSFNCDirectionsItem;
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
    $r.addMethod("Create$3",2,[["AOwner",$mod.$rtti["TTMSFNCCustomDirections"]]]);
  });
  this.$rtti.$ClassRef("TTMSFNCDirectionsItemsClass",{instancetype: this.$rtti["TTMSFNCDirectionsItems"]});
  rtl.createClass(this,"TTMSFNCDirectionsRequest",pas.Classes.TCollectionItem,function () {
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
      this.FTraveLmode = 0;
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
    this.SetTravelMode = function (Value) {
      this.FTraveLmode = Value;
    };
    this.SetErrorMessage = function (Value) {
      this.FErrorMessage = Value;
    };
    this.SetStatus = function (Value) {
      this.FStatus = Value;
    };
    this.GetDirectionsItemsClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCDirectionsItems;
      return Result;
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      if (ACollection != null) this.FOwner = rtl.as(this.FCollection,$mod.TTMSFNCDirectionsRequests).FOwner$1;
      this.FItems = this.GetDirectionsItemsClass().$create("Create$3",[this.FOwner]);
      this.FTraveLmode = $mod.TTMSFNCDirectionsTravelMode.tmDriving;
      this.FID$1 = "";
      this.FStatus = "";
      this.FErrorMessage = "";
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCDirectionsRequest.isPrototypeOf(Source)) {
        this.FItems.Assign(rtl.as(Source,$mod.TTMSFNCDirectionsRequest).FItems);
        this.FTraveLmode = rtl.as(Source,$mod.TTMSFNCDirectionsRequest).FTraveLmode;
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FItems");
      pas.Classes.TCollectionItem.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("ID",0,rtl.string,"FID$1","");
    $r.addProperty("Items",2,$mod.$rtti["TTMSFNCDirectionsItems"],"FItems","SetItems");
    $r.addProperty("TravelMode",2,$mod.$rtti["TTMSFNCDirectionsTravelMode"],"FTraveLmode","SetTravelMode");
    $r.addProperty("Status",2,rtl.string,"FStatus","SetStatus");
    $r.addProperty("ErrorMessage",2,rtl.string,"FErrorMessage","SetErrorMessage");
  });
  rtl.createClass(this,"TTMSFNCDirectionsRequests",pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection,function () {
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
      Result = $mod.TTMSFNCDirectionsRequest;
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
    $r.addMethod("Create$3",2,[["AOwner",$mod.$rtti["TTMSFNCCustomDirections"]]]);
  });
  this.$rtti.$ClassRef("TTMSFNCDirectionsRequestsClass",{instancetype: this.$rtti["TTMSFNCDirectionsRequests"]});
  this.$rtti.$RefToProcVar("TTMSFNCDirectionsGetDirectionsCallback",{procsig: rtl.newTIProcSig([["ARequest",this.$rtti["TTMSFNCDirectionsRequest"],2],["ARequestResult",pas["WEBLib.TMSFNCCloudBase"].$rtti["TTMSFNCCloudBaseRequestResult"],2]])});
  this.$rtti.$MethodVar("TTMSFNCDirectionsGetDirectionsEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ARequest",this.$rtti["TTMSFNCDirectionsRequest"],2],["ARequestResult",pas["WEBLib.TMSFNCCloudBase"].$rtti["TTMSFNCCloudBaseRequestResult"],2]]), methodkind: 0});
  this.$rtti.$RefToProcVar("TTMSFNCDirectionsGetDirectionsResultCallback",{procsig: rtl.newTIProcSig([["AResult",this.$rtti["TTMSFNCDirectionsRequest"],2]])});
  this.$rtti.$MethodVar("TTMSFNCDirectionsGetDirectionsResultEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AResult",this.$rtti["TTMSFNCDirectionsRequest"],2]]), methodkind: 0});
  rtl.createClass(this,"TTMSFNCDirectionsCallBackWrapper",pas.System.TObject,function () {
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
  rtl.createClass(this,"TTMSFNCDirectionsResultCallBackWrapper",pas.System.TObject,function () {
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
  rtl.createClass(this,"TTMSFNCCustomDirections",pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBase,function () {
    this.$init = function () {
      pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBase.$init.call(this);
      this.FDirections = null;
      this.FDirectionsInstance = null;
      this.FDirectionsProperties = null;
      this.FService$1 = 0;
      this.FAPIKey = "";
      this.FDirectionsRequests = null;
      this.FOnGetDirections = null;
      this.FOnGetDirectionsInternal = null;
      this.FOnGetDirectionsResultInternal = null;
      this.FOnGetDirectionsResult = null;
      this.FIsGoogleRoutes = false;
    };
    this.$final = function () {
      rtl.setIntfP(this,"FDirections",null);
      rtl.setIntfP(this,"FDirectionsInstance",null);
      rtl.setIntfP(this,"FDirectionsProperties",null);
      this.FDirectionsRequests = undefined;
      this.FOnGetDirections = undefined;
      this.FOnGetDirectionsInternal = undefined;
      this.FOnGetDirectionsResultInternal = undefined;
      this.FOnGetDirectionsResult = undefined;
      pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBase.$final.call(this);
    };
    this.SetService$1 = function (Value) {
      if (this.FService$1 !== Value) {
        this.FService$1 = Value;
        this.InitializeDirections();
      };
    };
    this.SetAPIKey = function (Value) {
      if (this.FAPIKey !== Value) {
        this.FAPIKey = Value;
      };
    };
    this.SetDirectionsRequests = function (Value) {
      this.FDirectionsRequests.Assign(Value);
    };
    this.SetIsGoogleRoutes = function (Value) {
      if (this.FIsGoogleRoutes !== Value) {
        this.FIsGoogleRoutes = Value;
      };
    };
    this.DoRequestGetDirections = function (ARequestResult) {
      var req = null;
      var obj = null;
      var obj2 = null;
      if (!this.DirectionsReady()) return;
      req = this.FDirectionsRequests.Add$1();
      req.FID$1 = ARequestResult.FDataString;
      req.FDataPointer = ARequestResult.FDataPointer;
      this.FDirections.Parse(req,ARequestResult.FResultString);
      this.DoGetDirections(req,ARequestResult);
      if (ARequestResult.FDataObject != null) {
        if ($mod.TTMSFNCDirectionsCallBackWrapper.isPrototypeOf(ARequestResult.FDataObject)) {
          obj = ARequestResult.FDataObject;
          obj.FCallback(req,ARequestResult);
          obj = rtl.freeLoc(obj);
        } else if ($mod.TTMSFNCDirectionsResultCallBackWrapper.isPrototypeOf(ARequestResult.FDataObject)) {
          obj2 = ARequestResult.FDataObject;
          obj2.FCallback(req);
          obj2 = rtl.freeLoc(obj2);
        };
      };
    };
    this.DoGetDirections = function (ARequest, ARequestResult) {
      if (this.FOnGetDirectionsInternal != null) this.FOnGetDirectionsInternal(this,ARequest,ARequestResult);
      if (this.FOnGetDirections != null) this.FOnGetDirections(this,ARequest,ARequestResult);
      if (this.FOnGetDirectionsResultInternal != null) this.FOnGetDirectionsResultInternal(this,ARequest);
      if (this.FOnGetDirectionsResult != null) this.FOnGetDirectionsResult(this,ARequest);
    };
    this.InitializeDirections = function () {
      var DirectionsServiceGoogleDirections = null;
      var DirectionsServiceGoogleRoutesDirections = null;
      var DirectionsServiceHereDirections = null;
      var DirectionsServiceBingDirections = null;
      var DirectionsServiceAzureDirections = null;
      var DirectionsServiceMapBoxDirections = null;
      var DirectionsServiceTomTomDirections = null;
      var DirectionsServiceOpenRouteServiceDirections = null;
      var DirectionsServiceGeoApifyDirections = null;
      try {
        if (this.IsDestroying()) return;
        if (this.FDirections != null) this.FDirections.DestroyDirections();
        rtl.setIntfP(this,"FDirections",null);
        rtl.setIntfP(this,"FDirectionsInstance",null);
        if (this.FIsGoogleRoutes) {
          if ($mod.TTMSFNCDirectionsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCDirectionsServiceGoogleRoutes),{get: function () {
              return DirectionsServiceGoogleRoutesDirections;
            }, set: function (v) {
              DirectionsServiceGoogleRoutesDirections = rtl.setIntfL(DirectionsServiceGoogleRoutesDirections,v);
            }})) {
            rtl.setIntfP(this,"FDirections",DirectionsServiceGoogleRoutesDirections.CreateDirections(),true);
          };
        } else {
          var $tmp = this.FService$1;
          if ($tmp === $mod.TTMSFNCDirectionsService.dsGoogle) {
            if ($mod.TTMSFNCDirectionsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCDirectionsServiceGoogle),{get: function () {
                return DirectionsServiceGoogleDirections;
              }, set: function (v) {
                DirectionsServiceGoogleDirections = rtl.setIntfL(DirectionsServiceGoogleDirections,v);
              }})) rtl.setIntfP(this,"FDirections",DirectionsServiceGoogleDirections.CreateDirections(),true);
          } else if ($tmp === $mod.TTMSFNCDirectionsService.dsHere) {
            if ($mod.TTMSFNCDirectionsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCDirectionsServiceHere),{get: function () {
                return DirectionsServiceHereDirections;
              }, set: function (v) {
                DirectionsServiceHereDirections = rtl.setIntfL(DirectionsServiceHereDirections,v);
              }})) rtl.setIntfP(this,"FDirections",DirectionsServiceHereDirections.CreateDirections(),true);
          } else if ($tmp === $mod.TTMSFNCDirectionsService.dsBing) {
            if ($mod.TTMSFNCDirectionsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCDirectionsServiceBing),{get: function () {
                return DirectionsServiceBingDirections;
              }, set: function (v) {
                DirectionsServiceBingDirections = rtl.setIntfL(DirectionsServiceBingDirections,v);
              }})) rtl.setIntfP(this,"FDirections",DirectionsServiceBingDirections.CreateDirections(),true);
          } else if ($tmp === $mod.TTMSFNCDirectionsService.dsAzure) {
            if ($mod.TTMSFNCDirectionsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCDirectionsServiceAzure),{get: function () {
                return DirectionsServiceAzureDirections;
              }, set: function (v) {
                DirectionsServiceAzureDirections = rtl.setIntfL(DirectionsServiceAzureDirections,v);
              }})) rtl.setIntfP(this,"FDirections",DirectionsServiceAzureDirections.CreateDirections(),true);
          } else if ($tmp === $mod.TTMSFNCDirectionsService.dsMapBox) {
            if ($mod.TTMSFNCDirectionsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCDirectionsServiceMapBox),{get: function () {
                return DirectionsServiceMapBoxDirections;
              }, set: function (v) {
                DirectionsServiceMapBoxDirections = rtl.setIntfL(DirectionsServiceMapBoxDirections,v);
              }})) rtl.setIntfP(this,"FDirections",DirectionsServiceMapBoxDirections.CreateDirections(),true);
          } else if ($tmp === $mod.TTMSFNCDirectionsService.dsTomTom) {
            if ($mod.TTMSFNCDirectionsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCDirectionsServiceTomTom),{get: function () {
                return DirectionsServiceTomTomDirections;
              }, set: function (v) {
                DirectionsServiceTomTomDirections = rtl.setIntfL(DirectionsServiceTomTomDirections,v);
              }})) rtl.setIntfP(this,"FDirections",DirectionsServiceTomTomDirections.CreateDirections(),true);
          } else if ($tmp === $mod.TTMSFNCDirectionsService.dsOpenRouteService) {
            if ($mod.TTMSFNCDirectionsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCDirectionsServiceOpenRouteService),{get: function () {
                return DirectionsServiceOpenRouteServiceDirections;
              }, set: function (v) {
                DirectionsServiceOpenRouteServiceDirections = rtl.setIntfL(DirectionsServiceOpenRouteServiceDirections,v);
              }})) rtl.setIntfP(this,"FDirections",DirectionsServiceOpenRouteServiceDirections.CreateDirections(),true);
          } else if ($tmp === $mod.TTMSFNCDirectionsService.dsGeoApify) {
            if ($mod.TTMSFNCDirectionsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCDirectionsServiceGeoApify),{get: function () {
                return DirectionsServiceGeoApifyDirections;
              }, set: function (v) {
                DirectionsServiceGeoApifyDirections = rtl.setIntfL(DirectionsServiceGeoApifyDirections,v);
              }})) rtl.setIntfP(this,"FDirections",DirectionsServiceGeoApifyDirections.CreateDirections(),true);
          };
        };
        if ((this.FDirections != null) && pas.SysUtils.Supports$1(this.FDirections,rtl.getIntfGUIDR($mod.ITMSFNCCustomDirectionsInstance),{p: this, get: function () {
            return this.p.FDirectionsInstance;
          }, set: function (v) {
            this.p.FDirectionsInstance = v;
          }})) this.FDirectionsInstance.SetDirectionsProperties(this.FDirectionsProperties);
      } finally {
        rtl._Release(DirectionsServiceGoogleRoutesDirections);
        rtl._Release(DirectionsServiceGoogleDirections);
        rtl._Release(DirectionsServiceHereDirections);
        rtl._Release(DirectionsServiceBingDirections);
        rtl._Release(DirectionsServiceAzureDirections);
        rtl._Release(DirectionsServiceMapBoxDirections);
        rtl._Release(DirectionsServiceTomTomDirections);
        rtl._Release(DirectionsServiceOpenRouteServiceDirections);
        rtl._Release(DirectionsServiceGeoApifyDirections);
        rtl._Release(this.FDirectionsInstance);
      };
    };
    this.GetTruckOptions = function (AOptions, AAVoidTolls) {
      var Result = "";
      Result = AOptions.get();
      return Result;
    };
    this.GetGoogleRoutesOptions = function (AOptions, ATravelMode, AWayPoints, AWayPointsList) {
      var Result = "";
      Result = AOptions.get();
      return Result;
    };
    this.GetInstance = function () {
      var Result = 0;
      Result = pas["WEBLib.TMSFNCTypes"].HInstance();
      return Result;
    };
    this.GetDirectionsRequests = function () {
      var Result = null;
      Result = this.FDirectionsRequests;
      return Result;
    };
    this.GetDirectionsRequestsClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCDirectionsRequests;
      return Result;
    };
    this.DirectionsReady = function () {
      var Result = false;
      Result = (this.FDirections != null) && (this.FDirectionsInstance != null) && (this.FDirectionsProperties != null) && this.FDirections.IsValid();
      return Result;
    };
    this.GetAPIKey = function () {
      var Result = "";
      Result = this.FAPIKey;
      return Result;
    };
    this.GetVersionNr = function () {
      var Result = 0;
      Result = pas["WEBLib.TMSFNCUtils"].MakeLong(pas["WEBLib.TMSFNCUtils"].MakeWord(0,0),pas["WEBLib.TMSFNCUtils"].MakeWord(5,1));
      return Result;
    };
    this.GetDocURL = function () {
      var Result = "";
      Result = $mod.TTMSFNCDirectionsDocURL;
      return Result;
    };
    this.GetTipsURL = function () {
      var Result = "";
      Result = $mod.TTMSFNCDirectionsTipsURL;
      return Result;
    };
    this.Directions = function () {
      var Result = null;
      var $ok = false;
      try {
        Result = rtl.setIntfL(Result,this.FDirections);
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
    this.GetDirectionsInt = function (AOrigin, ADestination, AOriginLatitude, AOriginLongitude, ADestinationLatitude, ADestinationLongitude, AAlternatives, ATravelMode, AWayPointList, AWayPoints, AOptimizeWayPoints, ALocale, AMode, AID, ADataPointer, ACallback, ACallback2, AAVoidTolls) {
      if (this.FService$1 === $mod.TTMSFNCDirectionsService.dsGoogle) {
        throw pas.SysUtils.Exception.$create("Create$1",["The Google Directions API does not support client-side requests from a browser."]);
        return;
      };
      if (!this.DirectionsReady()) {
        throw pas.SysUtils.Exception.$create("Create$1",["Please set API key!"]);
        return;
      };
      this.FRequest.Clear();
      this.FRequest.ClearHeaders();
      this.FDirections.AddHeaders(this.FRequest.GetHeaders());
      this.FRequest.FName = "GET DIRECTIONS";
      this.FRequest.FDataString = AID;
      this.FRequest.FDataPointer = ADataPointer;
      if (ACallback != null) {
        this.FRequest.FDataObject = $mod.TTMSFNCDirectionsCallBackWrapper.$create("Create$1",[ACallback])}
       else if (ACallback2 != null) this.FRequest.FDataObject = $mod.TTMSFNCDirectionsResultCallBackWrapper.$create("Create$1",[ACallback2]);
      this.FRequest.FMethod = this.FDirections.GetRequestMethod();
      this.FRequest.FHost = this.FDirections.GetHost();
      this.FRequest.FPath = this.FDirections.GetPath(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.URLEncode(AOrigin),pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.URLEncode(ADestination),AOriginLatitude,AOriginLongitude,ADestinationLatitude,ADestinationLongitude,ATravelMode,rtl.arrayRef(AWayPoints));
      this.FRequest.FQuery = this.FDirections.GetQuery(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.URLEncode(AOrigin),pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.URLEncode(ADestination),AOriginLatitude,AOriginLongitude,ADestinationLatitude,ADestinationLongitude,AAlternatives,ATravelMode,AWayPointList,rtl.arrayRef(AWayPoints),AOptimizeWayPoints,pas["WEBLib.TMSFNCMapsCommonTypes"].ParseLocale(ALocale,AMode),AAVoidTolls);
      this.FRequest.FPostData = this.FDirections.GetPostData(AOrigin,ADestination,AOriginLatitude,AOriginLongitude,ADestinationLatitude,ADestinationLongitude,AAlternatives,ATravelMode,AWayPointList,rtl.arrayRef(AWayPoints),AOptimizeWayPoints,pas["WEBLib.TMSFNCMapsCommonTypes"].ParseLocale(ALocale,AMode),AAVoidTolls);
      this.ExecuteRequest(rtl.createCallback(this,"DoRequestGetDirections"),null,true);
    };
    this.SaveToGPXInt = function (ACoordinates, AMetaData, AInstructions) {
      var Result = "";
      var Instructions = null;
      var Steps = [];
      var I = 0;
      var J = 0;
      if (AInstructions != null) {
        Steps = rtl.arraySetLength(Steps,[],AInstructions.GetCount());
        Instructions = pas.Classes.TStringList.$create("Create$1");
        for (var $l = 0, $end = AInstructions.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          Instructions.Add(AInstructions.GetItem$1(I).FInstructions);
          Steps[I] = rtl.arraySetLength(Steps[I],pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,AInstructions.GetItem$1(I).FCoordinates.GetCount());
          for (var $l1 = 0, $end1 = AInstructions.GetItem$1(I).FCoordinates.GetCount() - 1; $l1 <= $end1; $l1++) {
            J = $l1;
            Steps[I][J].Latitude = AInstructions.GetItem$1(I).FCoordinates.GetItem$1(J).GetLatitude();
            Steps[I][J].Longitude = AInstructions.GetItem$1(I).FCoordinates.GetItem$1(J).GetLongitude();
          };
        };
        Result = pas["WEBLib.TMSFNCMapsCommonTypes"].SaveToGPX$1(rtl.arrayRef(Steps),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(AMetaData),true,true,Instructions);
        Instructions = rtl.freeLoc(Instructions);
      } else {
        Result = pas["WEBLib.TMSFNCMapsCommonTypes"].SaveToGPX(rtl.arrayRef(ACoordinates),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(AMetaData),true,true,"");
      };
      return Result;
    };
    this.Assign = function (Source) {
      pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCustomCloudBase.Assign.apply(this,arguments);
      if ($mod.TTMSFNCCustomDirections.isPrototypeOf(Source)) {
        this.FService$1 = rtl.as(Source,$mod.TTMSFNCCustomDirections).FService$1;
        this.FAPIKey = rtl.as(Source,$mod.TTMSFNCCustomDirections).FAPIKey;
        this.FDirectionsRequests.Assign(rtl.as(Source,$mod.TTMSFNCCustomDirections).FDirectionsRequests);
      };
    };
    this.Create$1 = function (AOwner) {
      var $ir = rtl.createIntfRefs();
      try {
        pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCustomCloudBase.Create$1.apply(this,arguments);
        pas.SysUtils.Supports$1($ir.ref(1,rtl.queryIntfT(this,pas.System.IUnknown)),rtl.getIntfGUIDR($mod.ITMSFNCCustomDirectionsProperties),{p: this, get: function () {
            return this.p.FDirectionsProperties;
          }, set: function (v) {
            this.p.FDirectionsProperties = v;
          }});
        this.FDirectionsRequests = this.GetDirectionsRequestsClass().$create("Create$3",[this]);
        this.InitializeDirections();
      } finally {
        $ir.free();
        rtl._Release(this.FDirectionsProperties);
      };
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FDirectionsRequests");
      if (this.FDirections != null) this.FDirections.DestroyDirections();
      rtl.setIntfP(this,"FDirections",null);
      rtl.setIntfP(this,"FDirectionsInstance",null);
      rtl.setIntfP(this,"FDirectionsProperties",null);
      pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCustomCloudBase.Destroy.call(this);
    };
    this.GetDirections = function (AOrigin, ADestination, ACallback, AID, ADataPointer, AAlternatives, ATravelMode, AWayPoints, AOptimizeWayPoints, ALocale, AMode, AAvoidTolls) {
      this.GetDirectionsInt("","",AOrigin.Latitude,AOrigin.Longitude,ADestination.Latitude,ADestination.Longitude,AAlternatives,ATravelMode,null,rtl.arrayRef(AWayPoints),AOptimizeWayPoints,ALocale,AMode,AID,ADataPointer,ACallback,null,AAvoidTolls);
    };
    this.GetDirections$1 = function (AOrigin, ADestination, ACallback, AID, ADataPointer, AAlternatives, ATravelMode, AWayPoints, AOptimizeWayPoints, ALocale, AMode, AAvoidTolls) {
      if ((this.FService$1 in rtl.createSet($mod.TTMSFNCDirectionsService.dsGoogle)) || this.FIsGoogleRoutes) {
        this.GetDirectionsInt(AOrigin,ADestination,0,0,0,0,AAlternatives,ATravelMode,AWayPoints,[],AOptimizeWayPoints,ALocale,AMode,AID,ADataPointer,ACallback,null,AAvoidTolls);
      } else {
        throw pas.SysUtils.Exception.$create("Create$1",["Using AOrigin and ADestination string parameters only supported for Google Directions"]);
      };
    };
    this.GetDirectionsResult = function (AOrigin, ADestination, ACallback, AID, ADataPointer, AAlternatives, ATravelMode, AWayPoints, AOptimizeWayPoints, ALocale, AMode, AAvoidTolls) {
      this.GetDirectionsInt("","",AOrigin.Latitude,AOrigin.Longitude,ADestination.Latitude,ADestination.Longitude,AAlternatives,ATravelMode,null,rtl.arrayRef(AWayPoints),AOptimizeWayPoints,ALocale,AMode,AID,ADataPointer,null,ACallback,AAvoidTolls);
    };
    this.GetDirectionsResult$1 = function (AOrigin, ADestination, ACallback, AID, ADataPointer, AAlternatives, ATravelMode, AWayPoints, AOptimizeWayPoints, ALocale, AMode, AAvoidTolls) {
      if ((this.FService$1 in rtl.createSet($mod.TTMSFNCDirectionsService.dsGoogle)) || this.FIsGoogleRoutes) {
        this.GetDirectionsInt(AOrigin,ADestination,0,0,0,0,AAlternatives,ATravelMode,AWayPoints,[],AOptimizeWayPoints,ALocale,AMode,AID,ADataPointer,null,ACallback,AAvoidTolls);
      } else {
        throw pas.SysUtils.Exception.$create("Create$1",["Using AOrigin and ADestination string parameters only supported for Google Directions"]);
      };
    };
    this.SaveToGPXStream = function (ACoordinates, AStream, AInstructions) {
      this.SaveToGPXStream$1(rtl.arrayRef(ACoordinates),AStream,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(pas["WEBLib.TMSFNCMapsCommonTypes"].DefaultGPXMetaData()),AInstructions);
    };
    this.SaveToGPXStream$1 = function (ACoordinates, AStream, AMetaData, AInstructions) {
      var ss = null;
      ss = pas.Classes.TStringStream.$create("Create$2",[this.SaveToGPXText$1(rtl.arrayRef(ACoordinates),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(AMetaData),AInstructions)]);
      try {
        AStream.CopyFrom(ss,ss.GetSize());
      } finally {
        ss = rtl.freeLoc(ss);
      };
    };
    this.SaveToGPXFile = function (ACoordinates, AFileName, AInstructions) {
      this.SaveToGPXFile$1(rtl.arrayRef(ACoordinates),AFileName,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(pas["WEBLib.TMSFNCMapsCommonTypes"].DefaultGPXMetaData()),AInstructions);
    };
    this.SaveToGPXFile$1 = function (ACoordinates, AFileName, AMetaData, AInstructions) {
      var sl = null;
      sl = pas.Classes.TStringList.$create("Create$1");
      try {
        sl.SetTextStr(this.SaveToGPXText$1(rtl.arrayRef(ACoordinates),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(AMetaData),AInstructions));
        sl.SaveToFile(AFileName);
      } finally {
        sl = rtl.freeLoc(sl);
      };
    };
    this.SaveToGPXText = function (ACoordinates, AInstructions) {
      var Result = "";
      Result = this.SaveToGPXInt(rtl.arrayRef(ACoordinates),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(pas["WEBLib.TMSFNCMapsCommonTypes"].DefaultGPXMetaData()),AInstructions);
      return Result;
    };
    this.SaveToGPXText$1 = function (ACoordinates, AMetaData, AInstructions) {
      var Result = "";
      Result = this.SaveToGPXInt(rtl.arrayRef(ACoordinates),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(AMetaData),AInstructions);
      return Result;
    };
    rtl.addIntf(this,$mod.ITMSFNCCustomDirectionsProperties);
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
  });
  rtl.createClass(this,"TTMSFNCCustomDirectionsInterfacedObject",pas.System.TInterfacedObject,function () {
    this.$init = function () {
      pas.System.TInterfacedObject.$init.call(this);
      this.FDirectionsProperties = null;
    };
    this.$final = function () {
      rtl.setIntfP(this,"FDirectionsProperties",null);
      pas.System.TInterfacedObject.$final.call(this);
    };
    this.GetDirectionsProperties = function () {
      var Result = null;
      var $ok = false;
      try {
        Result = rtl.setIntfL(Result,this.FDirectionsProperties);
        $ok = true;
      } finally {
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.SetDirectionsProperties = function (Value) {
      rtl.setIntfP(this,"FDirectionsProperties",Value);
    };
    this.Destroy = function () {
      rtl.setIntfP(this,"FDirectionsProperties",null);
      pas.System.TObject.Destroy.call(this);
    };
    rtl.addIntf(this,$mod.ITMSFNCCustomDirectionsInstance);
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TTMSFNCDirectionsList",pas.Classes.TList,function () {
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
  rtl.createClass(this,"TTMSFNCDirectionsFactoryService",pas.System.TInterfacedObject,function () {
    this.$init = function () {
      pas.System.TInterfacedObject.$init.call(this);
      this.FDirections = null;
    };
    this.$final = function () {
      this.FDirections = undefined;
      pas.System.TInterfacedObject.$final.call(this);
    };
    this.CreateDirections = function () {
      var Result = null;
      var $ok = false;
      try {
        Result = rtl.setIntfL(Result,this.DoCreateDirections(),true);
        this.FDirections.Add(Result);
        $ok = true;
      } finally {
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.DestroyDirections = function (ADirections) {
      this.FDirections.Remove(ADirections);
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FDirections = $mod.TTMSFNCDirectionsList.$create("Create$1");
      return this;
    };
    this.Destroy = function () {
      pas.SysUtils.FreeAndNil({p: this, get: function () {
          return this.p.FDirections;
        }, set: function (v) {
          this.p.FDirections = v;
        }});
      pas.System.TObject.Destroy.call(this);
    };
    rtl.addIntf(this,$mod.ITMSFNCDirectionsService);
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TTMSFNCDirections",this.TTMSFNCCustomDirections,function () {
    this.RegisterRuntimeClasses = function () {
      pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent.RegisterRuntimeClasses.call(this);
      pas.Classes.RegisterClasses([$mod.TTMSFNCDirections]);
    };
    rtl.addIntf(this,$mod.ITMSFNCCustomDirectionsProperties);
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("OnGetDirections",0,$mod.$rtti["TTMSFNCDirectionsGetDirectionsEvent"],"FOnGetDirections","FOnGetDirections");
    $r.addProperty("OnGetDirectionsResult",0,$mod.$rtti["TTMSFNCDirectionsGetDirectionsResultEvent"],"FOnGetDirectionsResult","FOnGetDirectionsResult");
    $r.addProperty("APIKey",2,rtl.string,"FAPIKey","SetAPIKey");
    $r.addProperty("DirectionsRequests",2,$mod.$rtti["TTMSFNCDirectionsRequests"],"FDirectionsRequests","SetDirectionsRequests");
    $r.addProperty("Service",2,$mod.$rtti["TTMSFNCDirectionsService"],"FService$1","SetService$1",{Default: $mod.TTMSFNCDirectionsService.dsGoogle});
    $r.addProperty("Version",1,rtl.string,"GetVersion","");
  });
  rtl.createClass(this,"TTMSFNCDirectionsPlatformServicesService",pas.System.TObject,function () {
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
  rtl.createClass(this,"TTMSFNCDirectionsPlatformServicesList",pas.contnrs.TObjectList,function () {
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
  rtl.createClass(this,"TTMSFNCDirectionsPlatformServices",pas.System.TObject,function () {
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
      pas.SysUtils.FreeAndNil({p: $mod.TTMSFNCDirectionsPlatformServices, get: function () {
          return this.p.FCurrent;
        }, set: function (v) {
          this.p.FCurrent = v;
        }});
      $mod.TTMSFNCDirectionsPlatformServices.FCurrentReleased = true;
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FServicesList = $mod.TTMSFNCDirectionsPlatformServicesList.$create("Create$2");
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
            }})) this.FServicesList.Add$1($mod.TTMSFNCDirectionsPlatformServicesService.$create("Create$1",[pas.SysUtils.GUIDToString(AServiceGUID),AService]));
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
      if ((this.FCurrent === null) && !this.FCurrentReleased) $mod.TTMSFNCDirectionsPlatformServices.FCurrent = $mod.TTMSFNCDirectionsPlatformServices.$create("Create$1");
      Result = this.FCurrent;
      return Result;
    };
  });
  this.DecodeValues = function (AValues, ACoordinates) {
    var lat = 0.0;
    var lon = 0.0;
    var lat_f = 0.0;
    var lon_f = 0.0;
    var index = 0;
    var len = 0;
    var b = 0;
    var shift = 0;
    var decodeResult = 0;
    var encoded = "";
    var dlat = 0;
    var dlng = 0;
    var co = null;
    encoded = AValues;
    len = encoded.length;
    index = 1;
    lat = 0;
    lon = 0;
    while (index <= len) {
      b = 0x20;
      shift = 0;
      decodeResult = 0;
      while (b >= 0x20) {
        b = encoded.charCodeAt(index - 1);
        b = b - 63;
        index += 1;
        decodeResult = decodeResult | ((b & 0x1f) << shift);
        shift = shift + 5;
      };
      if ((decodeResult & 1) !== 0) {
        dlat = ~(decodeResult >>> 1)}
       else dlat = decodeResult >>> 1;
      lat = lat + dlat;
      shift = 0;
      decodeResult = 0;
      b = 0x20;
      while (b >= 0x20) {
        b = encoded.charCodeAt(index - 1);
        b = b - 63;
        index += 1;
        decodeResult = decodeResult | ((b & 0x1f) << shift);
        shift = shift + 5;
      };
      if ((decodeResult & 1) !== 0) {
        dlng = ~(decodeResult >>> 1)}
       else dlng = decodeResult >>> 1;
      lon = lon + dlng;
      lon_f = lon / 100000.0;
      lat_f = lat / 100000.0;
      co = ACoordinates.Add$1();
      co.SetLatitude(lat_f);
      co.SetLongitude(lon_f);
    };
  };
  $mod.$init = function () {
    $mod.TTMSFNCDirectionsPlatformServices.FCurrentReleased = false;
    pas["WEBLib.TMSFNCDirections.Google"].RegisterGoogleDirectionsService();
    pas["WEBLib.TMSFNCDirections.GoogleRoutes"].RegisterGoogleRoutesDirectionsService();
    pas["WEBLib.TMSFNCDirections.Here"].RegisterHereDirectionsService();
    pas["WEBLib.TMSFNCDirections.Bing"].RegisterBingDirectionsService();
    pas["WEBLib.TMSFNCDirections.Azure"].RegisterAzureDirectionsService();
    pas["WEBLib.TMSFNCDirections.MapBox"].RegisterMapBoxDirectionsService();
    pas["WEBLib.TMSFNCDirections.TomTom"].RegisterTomTomDirectionsService();
    pas["WEBLib.TMSFNCDirections.OpenRouteService"].RegisterOpenRouteServiceDirectionsService();
    pas["WEBLib.TMSFNCDirections.GeoApify"].RegisterGeoApifyDirectionsService();
  };
},["Math","WEBLib.TMSFNCUtils","WEBLib.TMSFNCDirections.Google","WEBLib.TMSFNCDirections.GoogleRoutes","WEBLib.TMSFNCDirections.Here","WEBLib.TMSFNCDirections.Bing","WEBLib.TMSFNCDirections.Azure","WEBLib.TMSFNCDirections.MapBox","WEBLib.TMSFNCDirections.TomTom","WEBLib.TMSFNCDirections.OpenRouteService","WEBLib.TMSFNCDirections.GeoApify","SysUtils"]);
//# sourceMappingURL=WEBLib.TMSFNCDirections.js.map
