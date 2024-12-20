rtl.module("WEBLib.TMSFNCRouteCalculator",["System","Classes","Types","WEBLib.Forms","Web","contnrs","WEBLib.TMSFNCCustomComponent","WEBLib.TMSFNCTypes","WEBLib.TMSFNCMapsCommonTypes","WEBLib.TMSFNCCloudBase","WEBLib.TMSFNCGeocoding","WEBLib.TMSFNCDirections","WEBLib.TMSFNCLocation","WEBLib.TMSFNCUndo","WEBLib.TMSFNCGraphicsTypes"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.TTMSFNCRouteCalculatorDocURL = pas["WEBLib.TMSFNCTypes"].TTMSFNCBaseDocURL + "tmsfncmaps/components/ttmsfncmaps/#ttmsfncroutecalculator";
  this.TTMSFNCRouteCalculatorTipsURL = "https://www.tmssoftware.com/site/tmsfncmaps.asp?s=faq";
  this.MAJ_VER = 1;
  this.MIN_VER = 1;
  this.REL_VER = 0;
  this.BLD_VER = 0;
  this.DEFAULTSTARTMARKER = "data:image/png;base64," + "iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADdYAAA3WAZBveZwAAAcrSURBVGhDzZldbBRVFMfPndmPlra0paVABdr" + "S0i8aQoIxGgli/IoPSGgi+oJUE21abEx8kvBACQ9GHjQGhRRFhZgQ8YnEFzXRCJgoNKJpgXYF20Ip9osSoLTd3ZnrOXfu7M7uzLT7VeqPTvaeszvnnv+9Z+6dGRhkglOn1PKRdY8CY1vweAyArWXAH+" + "HAculrbN/H9k0A/jd+/zto2i/9JZc6YccOTZyfBmkJWNPRvZrr3hbgfBdGWiHdicHhFmf8uKp7Dl/bvfaG9CZNSgKqO3qKgxrfj803GWNew5sanPMQMOVoVljb19NWPy7dCZO0gIqOnpe5xg9j4sXSF" + "YEpXlA9flAUH7Y9WC0YntMf/tPDoOtB0MIz2A7JM6KgkDEGrLWvtfZb6UqIhAU8te9nz/VlKz7EM9qkS8CYAqo3Fzy+XEw8scnQUUA4eB+00H1MXJdeCdcP9Q0Pvwv7nw5Lz6wkJKDq44Bf8/NvsLdt" + "0iXw+PLA6y8QIlKBkg/N3EEx96RHwvlpNaS+cvWd6hnpcWXunk9xNezVTlqTp/LIylkOvqwlKSdP0LkUg2JRzAiMbRN9Yt/S48qcvZeP9RzEWt4uTVBUn+hQUf3Skz4Uy4jpkx7SwLaXj/d+IE1XZi2" + "hik+vbAWFncam+B114F+0LK1Rnw0qqZkHw6BrwYgH/17qa63/TjpsuApY09GZz/Xcy9gsJZsxFbJyV4jPdPDdGQAlOCna4ZwSPGIXM841mL5/S3waDhhSQ0odXg93DUcsrkOp6znv4YdInvBlFyeVfP" + "bUKFT1nhQHtU2KLh6H0p/axZE7cEZ6o1Af1FcEBqVhn7ZHWjYcZ6D00OUiv8oGMFoO2R5cJn3ZReK7uciZHIKV13+EotGLwLACCI4lN750Awyufg4Wn/8csoe7hf/2+lfhTn2jaMcTnBqHMC6zAs4nZ" + "zReNuSw0TnOgM/L3jCTJ43erAKjOQt5d/uhrvsz2NB5EIpH/ogkTzCsbfLRdyu0UfD5oherG0afcnwxF5GTA84lxNku2cLRz5m1dAomAtDw1yew/uJHsGScRtZIvLKyEpqamsRBbQMO2V4FioqKxLGI" + "mxerHeqT+o7A2WuyFYOthFYf7alQNfhHmri8LcPVJ0taJhyTvYSl8gOO/ID0UacMampqYPPmzVBaGrl8BENDQ3DmzBno7e3FiojOzr3FZVhaz8PtonVoxaaja9MwPTksLbSBVwy01PVLU2ATUHbkSpM" + "C7Etq03KZnbdK+E2KR/+ElQPfi1o3URQFGhoaYNOmTVBSUiK9zoyMjMC5c+egu7sbF4robcRkTikMlr0AY3itWJm6dwMFG79DAa+jgK+EIbGVEONso2w6blYFEz2R5FWPBzZu3AhtbW3Q2Ng4Z/IE/Y" + "Z+S+fQuRSDoJgUOx5rDtbcTOwCGKyVzZid0eTmqmdAw5IaWrkF1Bf3wNatW6GwsFB+mzh0Dp1LMSiW5smCwVXPym+jxO7O0dxM7Bcx58tlS1xI8UxlL4ULTxyAvsrtEPTnS2/qUAyKdf7xAzBtXf8lM" + "TlYcjOxCcDLSzwGClxuGTSHmUkX3S2mJYeY3CS2i7j8SE8vOqupTZsXbWJuPLk0BO0NcrOxcOLECbh7N3bnz8/Ph507d0orSnt3Lvw66v4cQZsZbWoECgj0t9TWCEPiNMTRm3PLcpcMgUAAurq6Yg5a" + "PlMiNoe4BwcHAQx45AGbnpwWGmsO1txM7DPAISBbuJH8DwRYc7DkZmIToDPlN9nEk+mJLrUyyghYPkYOBtbcTGwC/Ao/izlHbsa10JTRXAC0MPUdGcBwKKzZ7r9tAgLNtWP4cdawjFVgoYjr+2zCt9O" + "o+QvZFKMQfcR7eFCfxgwYYDWJ+7N4bPsAQa9Rwl7tKt5driSb7kbprjSeQp8O1Xn215tXA70QDMaKpmeAquqYJVwQuKfCRNA+jtOT/0bqH+9eBz0htcrpNYujAKL88JW3UECHNMXrD3oP9DCg90TB6d" + "vSEgKa+1vrjkozBscSIvqLa4/htHVKEwNOxKwI8wX1QX2ZcOAX+ou7jknThqsA2ME0VdeaMMIDw8Fh5sHIvG5uFJv6oL4EnD/QAXOY5TW8uwDk2tvrLmGsZopEtnhvg09I8yFCJI+xo+9KsU/Omq+3N" + "NCrHVdmFUD07a79Gn+2V5oYVsu4iGjy1oHme42+Z2dOAURfS837GJD+P0CQSRFOyeMstPe11GOfc+O6CjlRceRKO56yT5riYcNPD/0JvlaPxzl5aO9vrY0M1lwkJYDIlIhMJE8kVEJW+lrqUEB65eRW" + "NskmTyQ9AyapzkSmRt4kZQFEsiIynTyRdAlZSaacMlk2VtKaAZO5ZmI+Rt4kIwIINxHEfCVPZEwA4SSCsJdNfUaSJzIqgIgXYSWTI2+ScQGEk4j5SJ5IaxVyw746pb/aLAg0E+WHexzLKTMA/AdvKV0" + "lo28WnwAAAABJRU5ErkJggg==";
  this.DEFAULTENDMARKER = "data:image/png;base64," + "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";
  this.DEFAULTSELECTEDWAYPOINTMARKER = "data:image/png;base64," + "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" + "xFhPzMaAAAAAElFTkSuQmCC";
  this.DEFAULTADDWAYPOINTMARKER = "data:image/png;base64," + "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" + "AT/Q+niwvEyza8sQAAAABJRU5ErkJggg==";
  this.DEFAULTWAYPOINTMARKER = "data:image/png;base64," + "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" + "UVORK5CYII=";
  this.$rtti.$Class("TTMSFNCCustomRouteCalculator");
  this.$rtti.$Class("TTMSFNCRouteCalculatorRoute");
  this.$rtti.$Class("TTMSFNCRouteCalculatorSegments");
  this.$rtti.$Class("TTMSFNCRouteCalculatorAlternativeSegments");
  this.$rtti.$Class("TTMSFNCRouteCalculatorSegment");
  this.$rtti.$Class("TTMSFNCRouteCalculatorAlternativeSegment");
  this.TTMSFNCRouteCalculatorService = {"0": "csAzure", csAzure: 0, "1": "csBing", csBing: 1, "2": "csGoogle", csGoogle: 2, "3": "csHere", csHere: 3, "4": "csMapBox", csMapBox: 4, "5": "csOpenRouteService", csOpenRouteService: 5, "6": "csGeoApify", csGeoApify: 6};
  this.$rtti.$Enum("TTMSFNCRouteCalculatorService",{minvalue: 0, maxvalue: 6, ordtype: 1, enumtype: this.TTMSFNCRouteCalculatorService});
  this.TTMSFNCRouteCalculatorLocationMode = {"0": "lmDevice", lmDevice: 0, "1": "lmService", lmService: 1};
  this.$rtti.$Enum("TTMSFNCRouteCalculatorLocationMode",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TTMSFNCRouteCalculatorLocationMode});
  rtl.createClass(this,"TTMSFNCRouteCalculatorPolylineOptions",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FWayPointMarker = "";
      this.FStrokeWidth = 0;
      this.FStrokeColor = 0;
      this.FEndMarker = "";
      this.FStrokeOpacity = 0.0;
      this.FStartMarker = "";
      this.FAddWayPointMarker = "";
      this.FSelectedStrokeColor = 0;
      this.FSelectedWayPointMarker = "";
    };
    this.IsStrokeOpacityStored = function () {
      var Result = false;
      Result = this.FStrokeOpacity !== 1;
      return Result;
    };
    this.SetStrokeOpacity = function (Value) {
      this.FStrokeOpacity = Value;
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FStartMarker = "";
      this.FEndMarker = "";
      this.FWayPointMarker = "";
      this.FAddWayPointMarker = "";
      this.FSelectedWayPointMarker = "";
      this.FStrokeColor = 16711680;
      this.FStrokeWidth = 5;
      this.SetStrokeOpacity(1.0);
      this.FSelectedStrokeColor = 255;
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCRouteCalculatorPolylineOptions.isPrototypeOf(Source)) {
        this.FStartMarker = rtl.as(Source,$mod.TTMSFNCRouteCalculatorPolylineOptions).FStartMarker;
        this.FEndMarker = rtl.as(Source,$mod.TTMSFNCRouteCalculatorPolylineOptions).FEndMarker;
        this.FWayPointMarker = rtl.as(Source,$mod.TTMSFNCRouteCalculatorPolylineOptions).FWayPointMarker;
        this.FAddWayPointMarker = rtl.as(Source,$mod.TTMSFNCRouteCalculatorPolylineOptions).FAddWayPointMarker;
        this.FSelectedWayPointMarker = rtl.as(Source,$mod.TTMSFNCRouteCalculatorPolylineOptions).FSelectedWayPointMarker;
        this.FStrokeColor = rtl.as(Source,$mod.TTMSFNCRouteCalculatorPolylineOptions).FStrokeColor;
        this.FStrokeWidth = rtl.as(Source,$mod.TTMSFNCRouteCalculatorPolylineOptions).FStrokeWidth;
        this.FStrokeOpacity = rtl.as(Source,$mod.TTMSFNCRouteCalculatorPolylineOptions).FStrokeOpacity;
        this.FSelectedStrokeColor = rtl.as(Source,$mod.TTMSFNCRouteCalculatorPolylineOptions).FSelectedStrokeColor;
      };
    };
    this.Destroy = function () {
      pas.System.TObject.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addProperty("StartMarker",0,rtl.string,"FStartMarker","FStartMarker");
    $r.addProperty("EndMarker",0,rtl.string,"FEndMarker","FEndMarker");
    $r.addProperty("WayPointMarker",0,rtl.string,"FWayPointMarker","FWayPointMarker");
    $r.addProperty("AddWayPointMarker",0,rtl.string,"FAddWayPointMarker","FAddWayPointMarker");
    $r.addProperty("SelectedWayPointMarker",0,rtl.string,"FSelectedWayPointMarker","FSelectedWayPointMarker");
    $r.addProperty("StrokeColor",0,pas["WEBLib.Graphics"].$rtti["TColor"],"FStrokeColor","FStrokeColor",{Default: 16711680});
    $r.addProperty("StrokeWidth",0,rtl.longint,"FStrokeWidth","FStrokeWidth",{Default: 5});
    $r.addProperty("StrokeOpacity",14,rtl.double,"FStrokeOpacity","SetStrokeOpacity",{stored: "IsStrokeOpacityStored"});
    $r.addProperty("SelectedStrokeColor",0,pas["WEBLib.Graphics"].$rtti["TColor"],"FSelectedStrokeColor","FSelectedStrokeColor",{Default: 255});
  });
  rtl.createClass(this,"TTMSFNCRouteCalculatorHistoryManager",pas["WEBLib.TMSFNCUndo"].TTMSFNCUndoManager,function () {
  });
  rtl.createClass(this,"TTMSFNCRouteCalculatorOptions",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FIncludeAlternativeRoutes = false;
      this.FTravelMode = 0;
      this.FAvoidTolls = false;
      this.FPolyline = null;
      this.FHistoryEnabled = false;
      this.FLocale = "";
      this.FlocaleMode = 0;
    };
    this.$final = function () {
      this.FPolyline = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetPolyline = function (Value) {
      this.FPolyline.Assign(Value);
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FHistoryEnabled = false;
      this.FAvoidTolls = false;
      this.FIncludeAlternativeRoutes = false;
      this.FTravelMode = pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmDriving;
      this.FPolyline = $mod.TTMSFNCRouteCalculatorPolylineOptions.$create("Create$1");
      this.FLocale = "";
      this.FlocaleMode = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsLocaleMode.mlmDefault;
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCRouteCalculatorOptions.isPrototypeOf(Source)) {
        this.FAvoidTolls = rtl.as(Source,$mod.TTMSFNCRouteCalculatorOptions).FAvoidTolls;
        this.FIncludeAlternativeRoutes = rtl.as(Source,$mod.TTMSFNCRouteCalculatorOptions).FIncludeAlternativeRoutes;
        this.FTravelMode = rtl.as(Source,$mod.TTMSFNCRouteCalculatorOptions).FTravelMode;
        this.FPolyline.Assign(rtl.as(Source,$mod.TTMSFNCRouteCalculatorOptions).FPolyline);
        this.FHistoryEnabled = rtl.as(Source,$mod.TTMSFNCRouteCalculatorOptions).FHistoryEnabled;
        this.FLocale = rtl.as(Source,$mod.TTMSFNCRouteCalculatorOptions).FLocale;
        this.FlocaleMode = rtl.as(Source,$mod.TTMSFNCRouteCalculatorOptions).FlocaleMode;
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FPolyline");
      pas.System.TObject.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addProperty("AvoidTolls",0,rtl.boolean,"FAvoidTolls","FAvoidTolls",{Default: false});
    $r.addProperty("IncludeAlternativeRoutes",0,rtl.boolean,"FIncludeAlternativeRoutes","FIncludeAlternativeRoutes",{Default: false});
    $r.addProperty("TravelMode",0,pas["WEBLib.TMSFNCDirections"].$rtti["TTMSFNCDirectionsTravelMode"],"FTravelMode","FTravelMode",{Default: pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmDriving});
    $r.addProperty("Polyline",2,$mod.$rtti["TTMSFNCRouteCalculatorPolylineOptions"],"FPolyline","SetPolyline");
    $r.addProperty("HistoryEnabled",0,rtl.boolean,"FHistoryEnabled","FHistoryEnabled",{Default: false});
    $r.addProperty("Locale",0,rtl.string,"FLocale","FLocale");
    $r.addProperty("LocaleMode",0,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsLocaleMode"],"FlocaleMode","FlocaleMode",{Default: pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsLocaleMode.mlmDefault});
  });
  rtl.createClass(this,"TTMSFNCRouteCalculatorDirectionsItems",pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection,function () {
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
      Result = pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsItem;
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
    $r.addMethod("Create$3",2,[["AOwner",$mod.$rtti["TTMSFNCRouteCalculatorSegment"]]]);
  });
  this.TTMSFNCRouteCalculatorInfoMode = {"0": "cimDefault", cimDefault: 0, "1": "cimUpdateDirections", cimUpdateDirections: 1, "2": "cimAddDirections", cimAddDirections: 2};
  this.$rtti.$Enum("TTMSFNCRouteCalculatorInfoMode",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TTMSFNCRouteCalculatorInfoMode});
  rtl.createClass(this,"TTMSFNCRouteCalculatorInfo",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FID = "";
      this.FStartAddress = "";
      this.FEndAddress = "";
      this.FStartFound = false;
      this.FEndFound = false;
      this.FStartGeocoded = false;
      this.FEndGeocoded = false;
      this.FStartCoordinate = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$new();
      this.FEndCoordinate = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$new();
      this.FCallBack = null;
      this.FMode = 0;
      this.FWayPoints = [];
      this.FUpdateRoute = null;
      this.FUpdateSegments = [];
    };
    this.$final = function () {
      this.FStartCoordinate = undefined;
      this.FEndCoordinate = undefined;
      this.FWayPoints = undefined;
      this.FUpdateRoute = undefined;
      this.FUpdateSegments = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.Create$1 = function () {
      this.FStartCoordinate.$assign(pas["WEBLib.TMSFNCMapsCommonTypes"].EmptyCoordinate());
      this.FEndCoordinate.$assign(pas["WEBLib.TMSFNCMapsCommonTypes"].EmptyCoordinate());
      this.FStartFound = false;
      this.FStartGeocoded = false;
      this.FEndFound = false;
      this.FEndGeocoded = false;
      this.FMode = $mod.TTMSFNCRouteCalculatorInfoMode.cimDefault;
      this.FUpdateSegments = rtl.arraySetLength(this.FUpdateSegments,null,0);
      return this;
    };
    this.Destroy = function () {
      this.FCallBack = null;
      pas.System.TObject.Destroy.call(this);
    };
    var $r = this.$rtti;
    $mod.$rtti.$DynArray("TTMSFNCRouteCalculatorInfo.FUpdateSegments$a",{eltype: $mod.$rtti["TTMSFNCRouteCalculatorSegment"]});
  });
  rtl.createClass(this,"TTMSFNCRouteCalculatorAlternativeSegment",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FOwner = null;
      this.FDataPointer = null;
      this.FDataBoolean = false;
      this.FDataString = "";
      this.FDataObject = null;
      this.FDataInteger = 0;
      this.FStartCoordinate = null;
      this.FEndCoordinate = null;
      this.FCoordinates = null;
      this.FDistance = 0.0;
      this.FDuration = 0;
    };
    this.$final = function () {
      this.FOwner = undefined;
      this.FDataObject = undefined;
      this.FStartCoordinate = undefined;
      this.FEndCoordinate = undefined;
      this.FCoordinates = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.GetPolyline = function () {
      var Result = [];
      var I = 0;
      var r = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$new();
      Result = rtl.arraySetLength(Result,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,0);
      Result = rtl.arraySetLength(Result,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,this.FCoordinates.GetCount());
      for (var $l = 0, $end = this.FCoordinates.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        r.$assign(pas["WEBLib.TMSFNCMapsCommonTypes"].EmptyCoordinate());
        r.Latitude = this.FCoordinates.GetItem$1(I).GetLatitude();
        r.Longitude = this.FCoordinates.GetItem$1(I).GetLongitude();
        Result[I].$assign(r);
      };
      return Result;
    };
    this.SetCoordinates = function (Value) {
      this.FCoordinates.Assign(Value);
    };
    this.GetSegment = function () {
      var Result = null;
      Result = null;
      if (this.FOwner != null) Result = this.FOwner.GetSegment();
      return Result;
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      if ((ACollection != null) && $mod.TTMSFNCRouteCalculatorAlternativeSegments.isPrototypeOf(this.FCollection)) this.FOwner = rtl.as(this.FCollection,$mod.TTMSFNCRouteCalculatorAlternativeSegments);
      this.FStartCoordinate = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinate.$create("Create$1");
      this.FEndCoordinate = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinate.$create("Create$1");
      this.FCoordinates = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinates.$create("Create$3",[this]);
      this.FDistance = 0;
      this.FDuration = 0;
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCRouteCalculatorAlternativeSegment.isPrototypeOf(Source)) {
        this.FCoordinates.Assign(Source.FCoordinates);
        this.FDistance = Source.FDistance;
        this.FDuration = Source.FDuration;
        this.FStartCoordinate.Assign(rtl.as(Source,$mod.TTMSFNCRouteCalculatorAlternativeSegment).FStartCoordinate);
        this.FEndCoordinate.Assign(rtl.as(Source,$mod.TTMSFNCRouteCalculatorAlternativeSegment).FEndCoordinate);
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FCoordinates");
      rtl.free(this,"FStartCoordinate");
      rtl.free(this,"FEndCoordinate");
      pas.Classes.TCollectionItem.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("Coordinates",2,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinates"],"FCoordinates","SetCoordinates");
    $r.addProperty("Distance",0,rtl.double,"FDistance","FDistance");
    $r.addProperty("Duration",0,rtl.longint,"FDuration","FDuration");
    $r.addProperty("StartCoordinate",0,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinate"],"FStartCoordinate","FStartCoordinate");
    $r.addProperty("EndCoordinate",0,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinate"],"FEndCoordinate","FEndCoordinate");
  });
  rtl.createClass(this,"TTMSFNCRouteCalculatorAlternativeSegments",pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection,function () {
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
    this.GetSegment = function () {
      var Result = null;
      Result = this.FOwner$1;
      return Result;
    };
    this.CreateItemClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCRouteCalculatorAlternativeSegment;
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
    $r.addMethod("Create$3",2,[["AOwner",$mod.$rtti["TTMSFNCRouteCalculatorSegment"]]]);
  });
  rtl.createClass(this,"TTMSFNCRouteCalculatorSegment",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FOwner = null;
      this.FDataPointer = null;
      this.FDataBoolean = false;
      this.FDataString = "";
      this.FDataObject = null;
      this.FDataInteger = 0;
      this.FID$1 = "";
      this.FStartAddress = "";
      this.FEndAddress = "";
      this.FStartCoordinate = null;
      this.FEndCoordinate = null;
      this.FCoordinates = null;
      this.FDistance = 0.0;
      this.FDuration = 0;
      this.FAlternativeSegments = null;
    };
    this.$final = function () {
      this.FOwner = undefined;
      this.FDataObject = undefined;
      this.FStartCoordinate = undefined;
      this.FEndCoordinate = undefined;
      this.FCoordinates = undefined;
      this.FAlternativeSegments = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.GetPolyline = function () {
      var Result = [];
      var I = 0;
      var r = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$new();
      Result = rtl.arraySetLength(Result,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,0);
      Result = rtl.arraySetLength(Result,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,this.FCoordinates.GetCount());
      for (var $l = 0, $end = this.FCoordinates.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        r.$assign(pas["WEBLib.TMSFNCMapsCommonTypes"].EmptyCoordinate());
        r.Latitude = this.FCoordinates.GetItem$1(I).GetLatitude();
        r.Longitude = this.FCoordinates.GetItem$1(I).GetLongitude();
        Result[I].$assign(r);
      };
      return Result;
    };
    this.GetSegments = function () {
      var Result = null;
      Result = this.FOwner;
      return Result;
    };
    this.SetCoordinates = function (Value) {
      this.FCoordinates.Assign(Value);
    };
    this.GetNextSegment = function () {
      var Result = null;
      var i = 0;
      Result = null;
      if (!(this.FOwner != null)) return Result;
      i = this.GetIndex();
      if ((i + 1) < this.FOwner.GetCount()) Result = this.FOwner.GetItem$1(i + 1);
      return Result;
    };
    this.GetPreviousSegment = function () {
      var Result = null;
      var i = 0;
      Result = null;
      if (!(this.FOwner != null)) return Result;
      i = this.GetIndex();
      if ((i > 0) && (i < this.FOwner.GetCount())) Result = this.FOwner.GetItem$1(i - 1);
      return Result;
    };
    this.GetRoute = function () {
      var Result = null;
      Result = null;
      if (this.GetSegments() != null) Result = this.GetSegments().GetRoute();
      return Result;
    };
    this.SetAlternativeSegments = function (Value) {
      this.FAlternativeSegments.Assign(Value);
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      if ((ACollection != null) && $mod.TTMSFNCRouteCalculatorSegments.isPrototypeOf(this.FCollection)) this.FOwner = rtl.as(this.FCollection,$mod.TTMSFNCRouteCalculatorSegments);
      this.FID$1 = "";
      this.FStartAddress = "";
      this.FEndAddress = "";
      this.FStartCoordinate = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinate.$create("Create$1");
      this.FEndCoordinate = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinate.$create("Create$1");
      this.FCoordinates = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinates.$create("Create$3",[this]);
      this.FDistance = 0;
      this.FDuration = 0;
      this.FAlternativeSegments = $mod.TTMSFNCRouteCalculatorAlternativeSegments.$create("Create$3",[this]);
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCRouteCalculatorSegment.isPrototypeOf(Source)) {
        this.FCoordinates.Assign(Source.FCoordinates);
        this.FDistance = Source.FDistance;
        this.FDuration = Source.FDuration;
        this.FID$1 = rtl.as(Source,$mod.TTMSFNCRouteCalculatorSegment).FID$1;
        this.FStartAddress = rtl.as(Source,$mod.TTMSFNCRouteCalculatorSegment).FStartAddress;
        this.FEndAddress = rtl.as(Source,$mod.TTMSFNCRouteCalculatorSegment).FEndAddress;
        this.FStartCoordinate.Assign(rtl.as(Source,$mod.TTMSFNCRouteCalculatorSegment).FStartCoordinate);
        this.FEndCoordinate.Assign(rtl.as(Source,$mod.TTMSFNCRouteCalculatorSegment).FEndCoordinate);
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FAlternativeSegments");
      rtl.free(this,"FCoordinates");
      rtl.free(this,"FStartCoordinate");
      rtl.free(this,"FEndCoordinate");
      pas.Classes.TCollectionItem.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("ID",0,rtl.string,"FID$1","FID$1");
    $r.addProperty("AlternativeSegments",2,$mod.$rtti["TTMSFNCRouteCalculatorAlternativeSegments"],"FAlternativeSegments","SetAlternativeSegments");
    $r.addProperty("Coordinates",2,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinates"],"FCoordinates","SetCoordinates");
    $r.addProperty("Distance",0,rtl.double,"FDistance","FDistance");
    $r.addProperty("Duration",0,rtl.longint,"FDuration","FDuration");
    $r.addProperty("StartAddress",0,rtl.string,"FStartAddress","FStartAddress");
    $r.addProperty("EndAddress",0,rtl.string,"FEndAddress","FEndAddress");
    $r.addProperty("StartCoordinate",0,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinate"],"FStartCoordinate","FStartCoordinate");
    $r.addProperty("EndCoordinate",0,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinate"],"FEndCoordinate","FEndCoordinate");
  });
  rtl.createClass(this,"TTMSFNCRouteCalculatorSegments",pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection,function () {
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
    this.GetRoute = function () {
      var Result = null;
      Result = this.FOwner$1;
      return Result;
    };
    this.CreateItemClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCRouteCalculatorSegment;
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
    $r.addMethod("Create$3",2,[["AOwner",$mod.$rtti["TTMSFNCRouteCalculatorRoute"]]]);
  });
  rtl.createClass(this,"TTMSFNCRouteCalculatorRoute",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FOwner = null;
      this.FDataPointer = null;
      this.FDataBoolean = false;
      this.FDataString = "";
      this.FDataObject = null;
      this.FDataInteger = 0;
      this.FSegments = null;
      this.FID$1 = "";
      this.FStartAddress = "";
      this.FEndAddress = "";
      this.FStartCoordinate = null;
      this.FEndCoordinate = null;
      this.FRouteName = "";
      this.FActive = false;
      this.FSteps = null;
    };
    this.$final = function () {
      this.FOwner = undefined;
      this.FDataObject = undefined;
      this.FSegments = undefined;
      this.FStartCoordinate = undefined;
      this.FEndCoordinate = undefined;
      this.FSteps = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.GetPolyline = function () {
      var Result = [];
      var I = 0;
      var J = 0;
      var K = 0;
      var r = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$new();
      Result = rtl.arraySetLength(Result,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,0);
      K = 0;
      for (var $l = 0, $end = this.FSegments.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        for (var $l1 = 0, $end1 = this.FSegments.GetItem$1(I).FCoordinates.GetCount() - 1; $l1 <= $end1; $l1++) {
          J = $l1;
          Result = rtl.arraySetLength(Result,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,K + 1);
          r.$assign(pas["WEBLib.TMSFNCMapsCommonTypes"].EmptyCoordinate());
          r.Latitude = this.FSegments.GetItem$1(I).FCoordinates.GetItem$1(J).GetLatitude();
          r.Longitude = this.FSegments.GetItem$1(I).FCoordinates.GetItem$1(J).GetLongitude();
          Result[K].$assign(r);
          K = K + 1;
        };
      };
      return Result;
    };
    this.GetWayPoints = function () {
      var Result = [];
      var I = 0;
      var J = 0;
      var r = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$new();
      Result = [];
      if (this.FSegments.GetCount() === 0) return Result;
      J = this.FSegments.GetCount();
      Result = rtl.arraySetLength(Result,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,J + 1);
      for (var $l = 0, $end = this.FSegments.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        r.$assign(pas["WEBLib.TMSFNCMapsCommonTypes"].EmptyCoordinate());
        r.Latitude = this.FSegments.GetItem$1(I).FStartCoordinate.FLatitude;
        r.Longitude = this.FSegments.GetItem$1(I).FStartCoordinate.FLongitude;
        r.Description = this.FSegments.GetItem$1(I).FStartAddress;
        Result[I].$assign(r);
      };
      r.$assign(pas["WEBLib.TMSFNCMapsCommonTypes"].EmptyCoordinate());
      r.Latitude = this.FSegments.GetItem$1(J - 1).FEndCoordinate.FLatitude;
      r.Longitude = this.FSegments.GetItem$1(J - 1).FEndCoordinate.FLongitude;
      r.Description = this.FSegments.GetItem$1(J - 1).FEndAddress;
      Result[J].$assign(r);
      return Result;
    };
    this.GetDistance = function () {
      var Result = 0.0;
      var I = 0;
      Result = 0;
      for (var $l = 0, $end = this.FSegments.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        Result = Result + this.FSegments.GetItem$1(I).FDistance;
      };
      return Result;
    };
    this.GetDuration = function () {
      var Result = 0.0;
      var I = 0;
      Result = 0;
      for (var $l = 0, $end = this.FSegments.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        Result = Result + this.FSegments.GetItem$1(I).FDuration;
      };
      return Result;
    };
    this.GetRouteCalculator = function () {
      var Result = null;
      Result = this.FOwner;
      return Result;
    };
    this.SetSteps = function (Value) {
      this.FSteps.Assign(Value);
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      if ((ACollection != null) && $mod.TTMSFNCRouteCalculatorRoutes.isPrototypeOf(this.FCollection)) this.FOwner = rtl.as(this.FCollection,$mod.TTMSFNCRouteCalculatorRoutes).GetRouteCalculator();
      this.FSegments = $mod.TTMSFNCRouteCalculatorSegments.$create("Create$3",[this]);
      this.FID$1 = "";
      this.FStartAddress = "";
      this.FEndAddress = "";
      this.FRouteName = "";
      this.FActive = true;
      this.FStartCoordinate = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinate.$create("Create$1");
      this.FEndCoordinate = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinate.$create("Create$1");
      this.FSteps = pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsSteps.$create("Create$3",[this]);
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCRouteCalculatorRoute.isPrototypeOf(Source)) {
        this.FSegments.Assign(rtl.as(Source,$mod.TTMSFNCRouteCalculatorRoute).FSegments);
        this.FID$1 = rtl.as(Source,$mod.TTMSFNCRouteCalculatorRoute).FID$1;
        this.FRouteName = rtl.as(Source,$mod.TTMSFNCRouteCalculatorRoute).FRouteName;
        this.FActive = rtl.as(Source,$mod.TTMSFNCRouteCalculatorRoute).FActive;
        this.FSteps.Assign(rtl.as(Source,$mod.TTMSFNCRouteCalculatorRoute).FSteps);
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FSteps");
      rtl.free(this,"FStartCoordinate");
      rtl.free(this,"FEndCoordinate");
      rtl.free(this,"FSegments");
      pas.Classes.TCollectionItem.Destroy.call(this);
    };
    this.FirstSegment = function () {
      var Result = null;
      if (this.FSegments.GetCount() > 0) {
        Result = this.FSegments.GetItem$1(0)}
       else Result = null;
      return Result;
    };
    this.LastSegment = function () {
      var Result = null;
      if (this.FSegments.GetCount() > 0) {
        Result = this.FSegments.GetItem$1(this.FSegments.GetCount() - 1)}
       else Result = null;
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("ID",0,rtl.string,"FID$1","FID$1");
    $r.addProperty("RouteName",0,rtl.string,"FRouteName","FRouteName");
    $r.addProperty("Steps",2,pas["WEBLib.TMSFNCDirections"].$rtti["TTMSFNCDirectionsSteps"],"FSteps","SetSteps");
    $r.addProperty("Segments",0,$mod.$rtti["TTMSFNCRouteCalculatorSegments"],"FSegments","FSegments");
    $r.addProperty("Active",0,rtl.boolean,"FActive","FActive");
  });
  rtl.createClass(this,"TTMSFNCRouteCalculatorRoutes",pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection,function () {
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
    this.GetRouteCalculator = function () {
      var Result = null;
      Result = this.FOwner$1;
      return Result;
    };
    this.CreateItemClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCRouteCalculatorRoute;
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
    $r.addMethod("Create$3",2,[["AOwner",$mod.$rtti["TTMSFNCCustomRouteCalculator"]]]);
  });
  this.$rtti.$RefToProcVar("TTMSFNCRouteCalculatorCalculateRouteCallback",{procsig: rtl.newTIProcSig([["ARoute",this.$rtti["TTMSFNCRouteCalculatorRoute"],2]])});
  this.$rtti.$MethodVar("TTMSFNCRouteCalculatorCalculateRouteEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ARoute",this.$rtti["TTMSFNCRouteCalculatorRoute"],2]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCRouteCalculatorCalculateRoutesCompleteEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCRouteCalculatorLocationEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ACoordinate",pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinateRec"],2]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCRouteCalculatorGPXEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ARoute",this.$rtti["TTMSFNCRouteCalculatorRoute"],2]]), methodkind: 0});
  rtl.createClass(this,"TTMSFNCRouteCalculatorRouteCallBackWrapper",pas.System.TObject,function () {
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
  rtl.createClass(this,"TTMSFNCCustomRouteCalculator",pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent,function () {
    this.$init = function () {
      pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent.$init.call(this);
      this.FAPIKey = "";
      this.FLocation = null;
      this.FGeocoding = null;
      this.FDirections = null;
      this.FService = 0;
      this.FOnGetGeocoding = null;
      this.FOnGetDirections = null;
      this.FOnCalculateRoute = null;
      this.FRoutes = null;
      this.FOnGetRouteGeocoding = null;
      this.FOnGetRouteDirections = null;
      this.FOnGetLocation = null;
      this.FOnCreateGPXSegment = null;
      this.FOnCreateGPXTrack = null;
      this.FOnLoadGPXRouteComplete = null;
      this.FOptions = null;
      this.FActive = false;
      this.FHistoryManager = null;
    };
    this.$final = function () {
      this.FLocation = undefined;
      this.FGeocoding = undefined;
      this.FDirections = undefined;
      this.FOnGetGeocoding = undefined;
      this.FOnGetDirections = undefined;
      this.FOnCalculateRoute = undefined;
      this.FRoutes = undefined;
      this.FOnGetRouteGeocoding = undefined;
      this.FOnGetRouteDirections = undefined;
      this.FOnGetLocation = undefined;
      this.FOnCreateGPXSegment = undefined;
      this.FOnCreateGPXTrack = undefined;
      this.FOnLoadGPXRouteComplete = undefined;
      this.FOptions = undefined;
      this.FHistoryManager = undefined;
      pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent.$final.call(this);
    };
    this.SetService = function (Value) {
      if (this.FService !== Value) {
        this.FLocation.SetService$1(pas["WEBLib.TMSFNCLocation"].TTMSFNCLocationService.lsGoogle);
        this.FService = Value;
        var $tmp = this.FService;
        if ($tmp === $mod.TTMSFNCRouteCalculatorService.csAzure) {
          this.FGeocoding.SetService$1(pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingService.gsAzure);
          this.FDirections.SetService$1(pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsService.dsAzure);
        } else if ($tmp === $mod.TTMSFNCRouteCalculatorService.csBing) {
          this.FGeocoding.SetService$1(pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingService.gsBing);
          this.FDirections.SetService$1(pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsService.dsBing);
        } else if ($tmp === $mod.TTMSFNCRouteCalculatorService.csGoogle) {
          this.FGeocoding.SetService$1(pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingService.gsGoogle);
          this.FDirections.SetService$1(pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsService.dsGoogle);
        } else if ($tmp === $mod.TTMSFNCRouteCalculatorService.csHere) {
          this.FGeocoding.SetService$1(pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingService.gsHere);
          this.FDirections.SetService$1(pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsService.dsHere);
        } else if ($tmp === $mod.TTMSFNCRouteCalculatorService.csMapBox) {
          this.FGeocoding.SetService$1(pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingService.gsMapBox);
          this.FDirections.SetService$1(pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsService.dsMapBox);
        } else if ($tmp === $mod.TTMSFNCRouteCalculatorService.csOpenRouteService) {
          this.FGeocoding.SetService$1(pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingService.gsOpenRouteService);
          this.FDirections.SetService$1(pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsService.dsOpenRouteService);
        } else if ($tmp === $mod.TTMSFNCRouteCalculatorService.csGeoApify) {
          this.FGeocoding.SetService$1(pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingService.gsGeoApify);
          this.FDirections.SetService$1(pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsService.dsGeoApify);
        };
      };
    };
    this.SetAPIKey = function (Value) {
      if (this.FAPIKey !== Value) this.FAPIKey = Value;
    };
    this.SetRoutes = function (Value) {
      this.FRoutes.Assign(Value);
    };
    this.GetHistoryManager = function () {
      var Result = null;
      if (!(this.FHistoryManager != null)) this.FHistoryManager = $mod.TTMSFNCRouteCalculatorHistoryManager.$create("Create$2",[this.FRoutes]);
      Result = this.FHistoryManager;
      return Result;
    };
    this.DoGetGeocoding = function (Sender, ARequest, ARequestResult) {
      var o = null;
      var I = 0;
      o = null;
      if (ARequestResult.FSuccess) {
        if ((ARequest.FDataPointer != null) && $mod.TTMSFNCRouteCalculatorInfo.isPrototypeOf(ARequest.FDataPointer)) {
          o = ARequest.FDataPointer;
          if (ARequest.FItems.GetCount() > 0) {
            if (ARequest.FID$1 === "Start") {
              o.FStartFound = true;
              o.FStartCoordinate.$assign(ARequest.FItems.GetItem$1(0).FCoordinate.GetToRec());
              o.FStartAddress = ARequest.FItems.GetItem$1(0).FAddress;
            } else if (ARequest.FID$1 === "End") {
              o.FEndFound = true;
              o.FEndCoordinate.$assign(ARequest.FItems.GetItem$1(0).FCoordinate.GetToRec());
              o.FEndAddress = ARequest.FItems.GetItem$1(0).FAddress;
            } else if (ARequest.FID$1 === "GPXStart") {
              o.FStartFound = false;
              o.FStartGeocoded = true;
              o.FStartAddress = ARequest.FItems.GetItem$1(0).FAddress;
            } else if (ARequest.FID$1 === "GPXEnd") {
              o.FEndFound = false;
              o.FEndGeocoded = true;
              o.FEndAddress = ARequest.FItems.GetItem$1(0).FAddress;
            };
          };
          if (o.FStartGeocoded && o.FEndGeocoded) {
            if (this.FGeocoding.GetRequestCount(true,"") === 0) ;
          };
          if (o.FStartFound && o.FEndFound) {
            if (o.FMode === $mod.TTMSFNCRouteCalculatorInfoMode.cimAddDirections) {
              this.GetDirections(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(o.FStartCoordinate),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(o.FEndCoordinate),null,o.FWayPoints,o.FID,o)}
             else if (o.FMode === $mod.TTMSFNCRouteCalculatorInfoMode.cimUpdateDirections) {
              for (var $l = 0, $end = rtl.length(o.FUpdateSegments) - 1; $l <= $end; $l++) {
                I = $l;
                this.UpdateRouteSegment$1(o.FUpdateSegments[I],pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(o.FStartCoordinate),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(o.FEndCoordinate),o.FCallBack.FCallback,o.FID,null);
              };
              o = rtl.freeLoc(o);
            };
          };
        };
      };
      if (o != null) {
        if (o.FMode !== $mod.TTMSFNCRouteCalculatorInfoMode.cimDefault) {
          if (this.FOnGetRouteGeocoding != null) this.FOnGetRouteGeocoding(this,ARequest,ARequestResult);
        } else o = rtl.freeLoc(o);
      } else {
        if (this.FOnGetGeocoding != null) this.FOnGetGeocoding(this,ARequest,ARequestResult);
      };
    };
    this.DoGetDirections = function (Sender, ARequest, ARequestResult) {
      var $Self = this;
      var o = null;
      var I = 0;
      var d = null;
      var r = null;
      var s = null;
      var seg = null;
      var l = null;
      function ApplyLeg(ASegment, ALeg) {
        var K = 0;
        var la = null;
        var sa = null;
        var da = null;
        ASegment.FCoordinates.Assign(ALeg.FCoordinates);
        if (ALeg.FStartAddress !== "") {
          ASegment.FStartAddress = ALeg.FStartAddress}
         else ASegment.FStartAddress = o.FStartAddress;
        if (ALeg.FEndAddress !== "") {
          ASegment.FEndAddress = ALeg.FEndAddress}
         else ASegment.FEndAddress = o.FEndAddress;
        ASegment.FStartCoordinate.Assign(ALeg.FStartLocation);
        ASegment.FEndCoordinate.Assign(ALeg.FEndLocation);
        ASegment.FDuration = ALeg.FDuration;
        ASegment.FDistance = ALeg.FDistance;
        ASegment.FAlternativeSegments.Clear();
        for (var $l = 1, $end = ARequest.FItems.GetCount() - 1; $l <= $end; $l++) {
          K = $l;
          da = ARequest.FItems.GetItem$1(K);
          if (da.FLegs.GetCount() > 0) {
            if ((ALeg.GetIndex() >= 0) && (ALeg.GetIndex() <= (da.FLegs.GetCount() - 1))) {
              la = da.FLegs.GetItem$1(ALeg.GetIndex());
              sa = ASegment.FAlternativeSegments.Add$1();
              sa.FCoordinates.Assign(la.FCoordinates);
              sa.FStartCoordinate.Assign(la.FStartLocation);
              sa.FEndCoordinate.Assign(la.FEndLocation);
              sa.FDuration = la.FDuration;
              sa.FDistance = la.FDistance;
            };
          };
        };
      };
      o = null;
      if (ARequestResult.FSuccess) {
        if ((ARequest.FDataPointer != null) && $mod.TTMSFNCRouteCalculatorInfo.isPrototypeOf(ARequest.FDataPointer)) {
          o = ARequest.FDataPointer;
          if (o != null) {
            if (ARequest.FItems.GetCount() === 0) {
              this.DoCalculateRoute(null,o)}
             else {
              if (this.FOptions.FHistoryEnabled) {
                if (this.GetHistoryManager().GetCount() === 0) this.GetHistoryManager().PushState("Initialize");
              };
              d = ARequest.FItems.GetItem$1(0);
              if (o.FUpdateRoute != null) {
                r = o.FUpdateRoute;
                r.FSteps.Clear();
                for (var $l = 0, $end = d.FSteps.GetCount() - 1; $l <= $end; $l++) {
                  I = $l;
                  r.FSteps.Add$1().Assign(d.FSteps.GetItem$1(I));
                };
              } else {
                r = this.FRoutes.Add$1();
                r.FID$1 = o.FID;
                r.FSteps.Assign(d.FSteps);
              };
              if (rtl.length(o.FUpdateSegments) > 0) {
                for (var $l1 = 0, $end1 = rtl.length(o.FUpdateSegments) - 1; $l1 <= $end1; $l1++) {
                  I = $l1;
                  s = o.FUpdateSegments[I];
                  if (I <= (d.FLegs.GetCount() - 1)) ApplyLeg(s,d.FLegs.GetItem$1(I));
                };
                seg = o.FUpdateSegments[rtl.length(o.FUpdateSegments) - 1];
                for (var $l2 = rtl.length(o.FUpdateSegments), $end2 = d.FLegs.GetCount() - 1; $l2 <= $end2; $l2++) {
                  I = $l2;
                  s = r.FSegments.Insert$1(seg.GetIndex() + 1);
                  ApplyLeg(s,d.FLegs.GetItem$1(I));
                };
              } else {
                for (var $l3 = 0, $end3 = d.FLegs.GetCount() - 1; $l3 <= $end3; $l3++) {
                  I = $l3;
                  s = r.FSegments.Add$1();
                  l = d.FLegs.GetItem$1(I);
                  ApplyLeg(s,l);
                };
              };
              if (this.FOptions.FHistoryEnabled) this.GetHistoryManager().PushState("RouteAction" + pas.SysUtils.IntToStr(this.GetHistoryManager().GetCount()));
              this.DoCalculateRoute(r,o);
            };
          };
        };
      };
      if (o != null) {
        if (this.FOnGetRouteDirections != null) this.FOnGetRouteDirections($Self,ARequest,ARequestResult);
        o = rtl.freeLoc(o);
      } else {
        if (this.FOnGetDirections != null) this.FOnGetDirections($Self,ARequest,ARequestResult);
      };
    };
    this.DoCalculateRoute = function (ARoute, ARouteInfo) {
      var obj = null;
      if (!(ARoute != null) || !(ARouteInfo != null)) return;
      if (ARouteInfo.FCallBack != null) {
        obj = ARouteInfo.FCallBack;
        obj.FCallback(ARoute);
        obj = rtl.freeLoc(obj);
      };
      if (this.FOnCalculateRoute != null) this.FOnCalculateRoute(this,ARoute);
      if (this.FOnCalculateRoute != null) this.FOnCalculateRoute(this,ARoute);
    };
    this.DoGetLocation = function (Sender, ARequest, ARequestResult) {
      if (!ARequestResult.FSuccess) return;
      if (this.FOnGetLocation != null) this.FOnGetLocation(this,ARequest.FCoordinate.GetToRec());
    };
    this.DoCreateGPXTrack = function (AEventData) {
      if (this.FOnCreateGPXTrack != null) this.FOnCreateGPXTrack(this,AEventData);
    };
    this.DoCreateGPXSegment = function (AEventData) {
      if (this.FOnCreateGPXSegment != null) this.FOnCreateGPXSegment(this,AEventData);
    };
    this.DoLoadGPXRouteComplete = function (ARoute) {
      if (this.FOnLoadGPXRouteComplete != null) this.FOnLoadGPXRouteComplete(this,ARoute);
    };
    this.GetInstance = function () {
      var Result = 0;
      Result = pas["WEBLib.TMSFNCTypes"].HInstance();
      return Result;
    };
    this.GeocodingReady = function () {
      var Result = false;
      if (this.FGeocoding != null) this.FGeocoding.SetAPIKey(this.FAPIKey);
      Result = (this.FGeocoding != null) && (this.FGeocoding.FAPIKey !== "");
      return Result;
    };
    this.DirectionsReady = function () {
      var Result = false;
      if (this.FDirections != null) this.FDirections.SetAPIKey(this.FAPIKey);
      Result = (this.FDirections != null) && (this.FDirections.FAPIKey !== "");
      return Result;
    };
    this.LocationReady = function () {
      var Result = false;
      if (this.FLocation != null) this.FLocation.SetAPIKey(this.FAPIKey);
      Result = (this.FLocation != null) && (this.FLocation.FAPIKey !== "");
      return Result;
    };
    this.GetAPIKey = function () {
      var Result = "";
      Result = this.FAPIKey;
      return Result;
    };
    this.GetVersionNr = function () {
      var Result = 0;
      Result = pas["WEBLib.TMSFNCUtils"].MakeLong(pas["WEBLib.TMSFNCUtils"].MakeWord(0,0),pas["WEBLib.TMSFNCUtils"].MakeWord(1,1));
      return Result;
    };
    this.GetDocURL = function () {
      var Result = "";
      Result = $mod.TTMSFNCRouteCalculatorDocURL;
      return Result;
    };
    this.GetTipsURL = function () {
      var Result = "";
      Result = pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocodingTipsURL;
      return Result;
    };
    this.GetVersion = function () {
      var Result = "";
      var vn = 0;
      vn = this.GetVersionNr();
      Result = pas.SysUtils.IntToStr((pas["WEBLib.TMSFNCUtils"].Hiword(vn) >> 8) & 0xFF) + "." + pas.SysUtils.IntToStr(pas["WEBLib.TMSFNCUtils"].Hiword(vn) & 0xFF) + "." + pas.SysUtils.IntToStr((pas["WEBLib.TMSFNCUtils"].LoWord(vn) >> 8) & 0xFF) + "." + pas.SysUtils.IntToStr(pas["WEBLib.TMSFNCUtils"].LoWord(vn) & 0xFF);
      return Result;
    };
    this.InternalSaveGPX = function (ARoute, AMetaData) {
      var Result = "";
      var ca = [];
      var I = 0;
      var J = 0;
      var hdr = "";
      var ftr = "";
      var wpts = "";
      var sl = null;
      var d = "";
      var t = "";
      t = pas.SysUtils.FormatSettings.ThousandSeparator;
      d = pas.SysUtils.FormatSettings.DecimalSeparator;
      pas.SysUtils.FormatSettings.DecimalSeparator = ".";
      pas.SysUtils.FormatSettings.ThousandSeparator = ",";
      ca = ARoute.GetWayPoints();
      wpts = "";
      for (var $l = 0, $end = rtl.length(ca) - 1; $l <= $end; $l++) {
        I = $l;
        wpts = wpts + pas.SysUtils.Format('<wpt lat="%.7f" lon="%.7f">',pas.System.VarRecs(3,ca[I].Latitude,3,ca[I].Longitude));
        if (ca[I].HasElevation) wpts = wpts + pas.SysUtils.Format("<ele>%.7f</ele>",pas.System.VarRecs(3,ARoute.GetWayPoints()[I].Elevation));
        if (ca[I].Description !== "") wpts = wpts + "<name>" + ca[I].Description + "</name>";
        wpts = wpts + "</wpt>";
      };
      hdr = '<?xml version="1.0"?>' + '<gpx xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' + 'xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd" version="1.1" creator="TMS FNC Maps" xmlns="http://www.topografix.com/GPX/1/1">' + "<metadata>" + "<author>" + "<name>%s</name>" + '<link href="%s" />' + "</author>" + "</metadata>" + wpts + "<trk>" + "<name>%s</name>" + "<type>%s</type>";
      ftr = "</trk>" + "</gpx>";
      hdr = pas.SysUtils.Format(hdr,pas.System.VarRecs(18,AMetaData.AuthorName,18,AMetaData.AuthorLink,18,AMetaData.TrackName,18,AMetaData.TrackType));
      sl = pas.Classes.TStringList.$create("Create$1");
      try {
        sl.Add(hdr);
        for (var $l1 = 0, $end1 = ARoute.FSegments.GetCount() - 1; $l1 <= $end1; $l1++) {
          I = $l1;
          sl.Add("<trkseg>");
          for (var $l2 = 0, $end2 = ARoute.FSegments.GetItem$1(I).FCoordinates.GetCount() - 1; $l2 <= $end2; $l2++) {
            J = $l2;
            sl.Add(pas.SysUtils.Format('<trkpt lat="%.7f" lon="%.7f" />',pas.System.VarRecs(3,ARoute.FSegments.GetItem$1(I).FCoordinates.GetItem$1(J).GetLatitude(),3,ARoute.FSegments.GetItem$1(I).FCoordinates.GetItem$1(J).GetLongitude())));
          };
          sl.Add("</trkseg>");
        };
        sl.Add(ftr);
        Result = sl.GetTextStr();
      } finally {
        sl = rtl.freeLoc(sl);
      };
      pas.SysUtils.FormatSettings.ThousandSeparator = t;
      pas.SysUtils.FormatSettings.DecimalSeparator = d;
      return Result;
    };
    this.InternalLoadGPX = function (AText, ADoGeocoding) {
      var Result = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXRec.$new();
      var xmldoc = null;
      var iNode = null;
      var nNode = null;
      var sNode = null;
      var snlat = null;
      var snlng = null;
      var cNode = null;
      var eNode = null;
      var pNode = null;
      var v = 0.0;
      var parentNode = null;
      var gpx11 = false;
      var cnt = 0;
      var cntTr = 0;
      var cntSeg = 0;
      var allpath = [];
      var nodeName = "";
      var timeStamp = "";
      var ele = 0.0;
      var maxHeight = 0.0;
      var minHeight = 0.0;
      var heightFound = false;
      var trackEventData = null;
      var segmentEventData = null;
      var I = 0;
      var J = 0;
      var K = 0;
      var r = null;
      var s = null;
      var c = null;
      var distance = 0.0;
      var o = null;
      var parser = new DOMParser();
      xmldoc = parser.parseFromString(AText, 'text/xml');
      parentNode = xmldoc.documentElement;
      gpx11 = false;
      cntTr = -1;
      minHeight = 0;
      maxHeight = 0;
      if (parentNode != null) {
        iNode = $impl.FindNode(parentNode,"trk");
        if (!(iNode != null)) {
          iNode = $impl.FindNode(parentNode,"rte");
          gpx11 = true;
        };
        do {
          if (iNode != null) {
            cntSeg = -1;
            cntTr += 1;
            Result.Tracks = rtl.arraySetLength(Result.Tracks,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXTrackRec,cntTr + 1);
            nNode = $impl.FindNode(iNode,"name");
            if (nNode != null) {
              Result.Tracks[cntTr].Name = nNode.nodeValue;
            };
            trackEventData = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXTrackEventData.$create("Create$1");
            trackEventData.FNode = iNode;
            trackEventData.FData.$assign(Result.Tracks[cntTr]);
            try {
              this.DoCreateGPXTrack(trackEventData);
            } finally {
              trackEventData = rtl.freeLoc(trackEventData);
            };
            if (!gpx11) {
              sNode = $impl.FindNode(iNode,"trkseg")}
             else sNode = iNode;
            do {
              if ((sNode != null) && sNode.hasChildNodes()) {
                cnt = -1;
                cntSeg += 1;
                Result.Tracks[cntTr].Segments = rtl.arraySetLength(Result.Tracks[cntTr].Segments,[],cntSeg + 1);
                heightFound = false;
                cNode = $impl.GetFirstChildNode(sNode);
                while (cNode != null) {
                  pNode = cNode;
                  nodeName = pNode.nodeName;
                  if (!gpx11 || (gpx11 && (pNode.nodeName === "rtept"))) {
                    snlat = $impl.FindNodeAttribute(pNode,"lat");
                    snlng = $impl.FindNodeAttribute(pNode,"lon");
                    if ((snlat != null) && (snlng != null)) {
                      cnt += 1;
                      Result.Tracks[cntTr].Segments[cntSeg] = rtl.arraySetLength(Result.Tracks[cntTr].Segments[cntSeg],pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,cnt + 1);
                      if (nodeName === "trkpt") {
                        eNode = $impl.FindNodeAttribute(pNode,"ele");
                        if (eNode != null) {
                          ele = 0;
                          if (pas["WEBLib.TMSFNCMapsCommonTypes"].TryStrToFloatDot(eNode.nodeValue,{get: function () {
                              return ele;
                            }, set: function (v) {
                              ele = v;
                            }})) {
                            if (heightFound) {
                              if (ele > maxHeight) maxHeight = ele;
                              if (ele < minHeight) minHeight = ele;
                            } else {
                              heightFound = true;
                              maxHeight = ele;
                              minHeight = ele;
                            };
                            Result.Tracks[cntTr].Segments[cntSeg][cnt].Elevation = ele;
                            Result.Tracks[cntTr].Segments[cntSeg][cnt].HasElevation = true;
                          };
                        };
                        eNode = $impl.FindNodeAttribute(pNode,"time");
                        if (eNode != null) {
                          timeStamp = eNode.nodeValue;
                          if (timeStamp !== "") {
                            Result.Tracks[cntTr].Segments[cntSeg][cnt].TimeStamp = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.ISOToDateTime(timeStamp,true);
                            Result.Tracks[cntTr].Segments[cntSeg][cnt].HasTimeStamp = true;
                          };
                        };
                      };
                      v = 0;
                      if (pas["WEBLib.TMSFNCMapsCommonTypes"].TryStrToFloatDot(snlat.nodeValue,{get: function () {
                          return v;
                        }, set: function (w) {
                          v = w;
                        }})) Result.Tracks[cntTr].Segments[cntSeg][cnt].Latitude = v;
                      v = 0;
                      if (pas["WEBLib.TMSFNCMapsCommonTypes"].TryStrToFloatDot(snlng.nodeValue,{get: function () {
                          return v;
                        }, set: function (w) {
                          v = w;
                        }})) Result.Tracks[cntTr].Segments[cntSeg][cnt].Longitude = v;
                      allpath = rtl.arraySetLength(allpath,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,rtl.length(allpath) + 1);
                      allpath[rtl.length(allpath) - 1].$assign(pas["WEBLib.TMSFNCMapsCommonTypes"].CreateCoordinate(Result.Tracks[cntTr].Segments[cntSeg][cnt].Latitude,Result.Tracks[cntTr].Segments[cntSeg][cnt].Longitude));
                      segmentEventData = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXSegmentEventData.$create("Create$1");
                      segmentEventData.FNode = pNode;
                      segmentEventData.FData.$assign(Result.Tracks[cntTr].Segments[cntSeg][cnt]);
                      try {
                        this.DoCreateGPXSegment(segmentEventData);
                      } finally {
                        segmentEventData = rtl.freeLoc(segmentEventData);
                      };
                    };
                  };
                  cNode = cNode.nextSibling;
                };
              };
              if (sNode != null) sNode = sNode.nextSibling;
            } while (sNode != null);
          };
          if (iNode != null) iNode = iNode.nextSibling;
        } while (iNode != null);
      };
      for (var $l = 0, $end = rtl.length(Result.Tracks) - 1; $l <= $end; $l++) {
        I = $l;
        r = this.FRoutes.Add$1();
        r.FRouteName = Result.Tracks[I].Name;
        for (var $l1 = 0, $end1 = rtl.length(Result.Tracks[I].Segments) - 1; $l1 <= $end1; $l1++) {
          J = $l1;
          distance = 0;
          s = r.FSegments.Add$1();
          for (var $l2 = 0, $end2 = rtl.length(Result.Tracks[I].Segments[J]) - 1; $l2 <= $end2; $l2++) {
            K = $l2;
            c = s.FCoordinates.Add$1();
            c.SetLatitude(Result.Tracks[I].Segments[J][K].Latitude);
            c.SetLongitude(Result.Tracks[I].Segments[J][K].Longitude);
            if (K === 0) {
              if (J === 0) r.FStartCoordinate.Assign(c.FCoordinate);
              s.FStartCoordinate.Assign(c.FCoordinate);
            };
            if (K === (rtl.length(Result.Tracks[I].Segments[J]) - 1)) {
              if (J === (rtl.length(Result.Tracks[I].Segments) - 1)) r.FEndCoordinate.Assign(c.FCoordinate);
              s.FEndCoordinate.Assign(c.FCoordinate);
            };
            if (K > 0) distance = distance + pas["WEBLib.TMSFNCMapsCommonTypes"].MeasureDistance(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(c.FCoordinate.GetToRec()),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(s.FCoordinates.GetItem$1(K - 1).FCoordinate.GetToRec()));
          };
          s.FDistance = distance;
        };
        if (!ADoGeocoding) {
          this.DoLoadGPXRouteComplete(r)}
         else {
          for (var $l3 = 0, $end3 = r.FSegments.GetCount() - 1; $l3 <= $end3; $l3++) {
            J = $l3;
            s = r.FSegments.GetItem$1(J);
            o = $mod.TTMSFNCRouteCalculatorInfo.$create("Create$1");
            o.FStartGeocoded = false;
            o.FEndGeocoded = true;
            this.GetReverseGeocoding(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(s.FStartCoordinate.GetToRec()),null,"GPXStart",o);
            this.GetReverseGeocoding(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(s.FEndCoordinate.GetToRec()),null,"GPXEnd",o);
          };
        };
      };
      return Result;
    };
    this.Assign = function (Source) {
      pas["WEBLib.Controls"].TControl.Assign.apply(this,arguments);
      if ($mod.TTMSFNCCustomRouteCalculator.isPrototypeOf(Source)) {
        this.FActive = rtl.as(Source,$mod.TTMSFNCCustomRouteCalculator).FActive;
        this.FService = rtl.as(Source,$mod.TTMSFNCCustomRouteCalculator).FService;
        this.FAPIKey = rtl.as(Source,$mod.TTMSFNCCustomRouteCalculator).FAPIKey;
        this.FRoutes.Assign(rtl.as(Source,$mod.TTMSFNCCustomRouteCalculator).FRoutes);
      };
    };
    this.Create$5 = function () {
      this.Create$1(null);
      return this;
    };
    this.Create$1 = function (AOwner) {
      pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent.Create$1.apply(this,arguments);
      this.FActive = false;
      this.FService = $mod.TTMSFNCRouteCalculatorService.csGoogle;
      this.FGeocoding = pas["WEBLib.TMSFNCGeocoding"].TTMSFNCGeocoding.$create("Create$1",[this]);
      this.FGeocoding.FOnGetGeocoding = rtl.createCallback(this,"DoGetGeocoding");
      this.FGeocoding.FOnGetReverseGeocoding = rtl.createCallback(this,"DoGetGeocoding");
      this.FDirections = pas["WEBLib.TMSFNCDirections"].TTMSFNCDirections.$create("Create$1",[this]);
      this.FDirections.FOnGetDirections = rtl.createCallback(this,"DoGetDirections");
      this.FLocation = pas["WEBLib.TMSFNCLocation"].TTMSFNCLocation.$create("Create$1",[this]);
      this.FLocation.FOnGetLocation = rtl.createCallback(this,"DoGetLocation");
      this.FRoutes = $mod.TTMSFNCRouteCalculatorRoutes.$create("Create$3",[this]);
      this.FOptions = $mod.TTMSFNCRouteCalculatorOptions.$create("Create$1");
      return this;
    };
    this.Destroy = function () {
      if (this.FHistoryManager != null) rtl.free(this,"FHistoryManager");
      rtl.free(this,"FGeocoding");
      this.FGeocoding = null;
      rtl.free(this,"FDirections");
      this.FDirections = null;
      rtl.free(this,"FLocation");
      this.FLocation = null;
      rtl.free(this,"FRoutes");
      rtl.free(this,"FOptions");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.GetGeocoding = function (AAddress, ACallback, AID, ADataPointer) {
      if (!this.GeocodingReady()) {
        throw pas.SysUtils.Exception.$create("Create$1",["Please set API key!"]);
        return;
      };
      this.FGeocoding.GetGeocoding(AAddress,ACallback,AID,ADataPointer,"",pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsLocaleMode.mlmDefault);
    };
    this.GetReverseGeocoding = function (ACoordinates, ACallback, AID, ADataPointer) {
      if (!this.GeocodingReady()) {
        throw pas.SysUtils.Exception.$create("Create$1",["Please set API key!"]);
        return;
      };
      this.FGeocoding.GetReverseGeocoding(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(ACoordinates),ACallback,AID,ADataPointer,"",pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsLocaleMode.mlmDefault);
    };
    this.GetDirections = function (AOrigin, ADestination, ACallback, AWayPoints, AID, ADataPointer) {
      if (!this.DirectionsReady()) {
        throw pas.SysUtils.Exception.$create("Create$1",["Please set API key!"]);
        return;
      };
      this.FDirections.GetDirections(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(AOrigin),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(ADestination),ACallback,AID,ADataPointer,this.FOptions.FIncludeAlternativeRoutes,this.FOptions.FTravelMode,rtl.arrayRef(AWayPoints),false,this.FOptions.FLocale,this.FOptions.FlocaleMode,this.FOptions.FAvoidTolls);
    };
    this.CalculateRoute = function (AStartAddress, AEndAddress, ACallback, AID, ADataPointer) {
      var o = null;
      o = $mod.TTMSFNCRouteCalculatorInfo.$create("Create$1");
      o.FID = AID;
      o.FStartAddress = AStartAddress;
      o.FEndAddress = AEndAddress;
      o.FMode = $mod.TTMSFNCRouteCalculatorInfoMode.cimAddDirections;
      if (ACallback != null) {
        o.FCallBack = $mod.TTMSFNCRouteCalculatorRouteCallBackWrapper.$create("Create$1",[ACallback])}
       else o.FCallBack = null;
      this.GetGeocoding(o.FStartAddress,null,"Start",o);
      this.GetGeocoding(o.FEndAddress,null,"End",o);
    };
    this.CalculateRoute$1 = function (AStartCoordinate, AEndCoordinate, ACallback, AWayPoints, AID, ADataPointer) {
      var o = null;
      o = $mod.TTMSFNCRouteCalculatorInfo.$create("Create$1");
      o.FID = AID;
      o.FStartCoordinate.Latitude = AStartCoordinate.Latitude;
      o.FEndCoordinate.Latitude = AEndCoordinate.Latitude;
      o.FStartCoordinate.Longitude = AStartCoordinate.Longitude;
      o.FEndCoordinate.Longitude = AEndCoordinate.Longitude;
      if (ACallback != null) {
        o.FCallBack = $mod.TTMSFNCRouteCalculatorRouteCallBackWrapper.$create("Create$1",[ACallback])}
       else o.FCallBack = null;
      this.GetDirections(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(o.FStartCoordinate),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(o.FEndCoordinate),null,rtl.arrayRef(AWayPoints),o.FID,o);
    };
    this.AddRouteSegment = function (ARoute, AEndAddress, ACallback, AID, ADataPointer) {
      var o = null;
      var sg = null;
      if (!(ARoute != null) || (ARoute.FSegments.GetCount() === 0)) return;
      o = $mod.TTMSFNCRouteCalculatorInfo.$create("Create$1");
      o.FID = AID;
      sg = ARoute.LastSegment();
      o.FStartAddress = sg.FEndAddress;
      o.FStartCoordinate.$assign(sg.FEndCoordinate.GetToRec());
      o.FEndAddress = AEndAddress;
      o.FStartFound = true;
      o.FUpdateRoute = ARoute;
      o.FMode = $mod.TTMSFNCRouteCalculatorInfoMode.cimAddDirections;
      if (ACallback != null) {
        o.FCallBack = $mod.TTMSFNCRouteCalculatorRouteCallBackWrapper.$create("Create$1",[ACallback])}
       else o.FCallBack = null;
      this.GetGeocoding(o.FEndAddress,null,"End",o);
    };
    this.AddRouteSegment$1 = function (ARoute, AEndCoordinate, ACallback, AID, ADataPointer) {
      var o = null;
      var sg = null;
      if (!(ARoute != null) || (ARoute.FSegments.GetCount() === 0)) return;
      o = $mod.TTMSFNCRouteCalculatorInfo.$create("Create$1");
      o.FID = AID;
      sg = ARoute.LastSegment();
      o.FStartAddress = sg.FEndAddress;
      o.FStartCoordinate.$assign(sg.FEndCoordinate.GetToRec());
      o.FEndCoordinate.$assign(AEndCoordinate);
      o.FUpdateRoute = ARoute;
      o.FMode = $mod.TTMSFNCRouteCalculatorInfoMode.cimAddDirections;
      if (ACallback != null) {
        o.FCallBack = $mod.TTMSFNCRouteCalculatorRouteCallBackWrapper.$create("Create$1",[ACallback])}
       else o.FCallBack = null;
      this.GetDirections(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(o.FStartCoordinate),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(o.FEndCoordinate),null,[],AID,o);
    };
    this.AddWayPointsToSegment = function (ASegment, AWayPoints, ACallback, AID, ADataPointer) {
      var o = null;
      if (!(ASegment != null)) return;
      o = $mod.TTMSFNCRouteCalculatorInfo.$create("Create$1");
      o.FID = AID;
      o.FUpdateRoute = ASegment.GetRoute();
      o.FMode = $mod.TTMSFNCRouteCalculatorInfoMode.cimUpdateDirections;
      o.FStartCoordinate.$assign(ASegment.FStartCoordinate.GetToRec());
      o.FEndCoordinate.$assign(ASegment.FEndCoordinate.GetToRec());
      o.FUpdateSegments = rtl.arraySetLength(o.FUpdateSegments,null,1);
      o.FUpdateSegments[0] = ASegment;
      if (ACallback != null) {
        o.FCallBack = $mod.TTMSFNCRouteCalculatorRouteCallBackWrapper.$create("Create$1",[ACallback])}
       else o.FCallBack = null;
      this.GetDirections(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(o.FStartCoordinate),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(o.FEndCoordinate),null,rtl.arrayRef(AWayPoints),AID,o);
    };
    this.UpdateRouteSegment = function (ASegment, AStartAddress, AEndAddress, ACallback, AID, ADataPointer) {
      var o = null;
      if (!(ASegment != null)) return;
      o = $mod.TTMSFNCRouteCalculatorInfo.$create("Create$1");
      o.FID = AID;
      o.FStartAddress = AStartAddress;
      o.FEndAddress = AEndAddress;
      o.FUpdateRoute = ASegment.GetRoute();
      o.FMode = $mod.TTMSFNCRouteCalculatorInfoMode.cimUpdateDirections;
      o.FUpdateSegments = rtl.arraySetLength(o.FUpdateSegments,null,1);
      o.FUpdateSegments[0] = ASegment;
      if (ACallback != null) {
        o.FCallBack = $mod.TTMSFNCRouteCalculatorRouteCallBackWrapper.$create("Create$1",[ACallback])}
       else o.FCallBack = null;
      this.GetGeocoding(o.FEndAddress,null,"End",o);
      this.GetGeocoding(o.FStartAddress,null,"Start",o);
    };
    this.UpdateRouteSegment$1 = function (ASegment, AStartCoordinate, AEndCoordinate, ACallback, AID, ADataPointer) {
      var o = null;
      var ps = null;
      var ns = null;
      var wp = [];
      if (!(ASegment != null)) return;
      o = $mod.TTMSFNCRouteCalculatorInfo.$create("Create$1");
      o.FID = AID;
      ps = ASegment.GetPreviousSegment();
      ns = ASegment.GetNextSegment();
      o.FUpdateRoute = ASegment.GetRoute();
      o.FMode = $mod.TTMSFNCRouteCalculatorInfoMode.cimUpdateDirections;
      if ((ps != null) && (ns != null)) {
        o.FStartCoordinate.$assign(ps.FStartCoordinate.GetToRec());
        o.FEndCoordinate.$assign(ns.FEndCoordinate.GetToRec());
        wp = rtl.arraySetLength(wp,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,rtl.length(wp) + 1);
        wp[rtl.length(wp) - 1].$assign(AStartCoordinate);
        wp = rtl.arraySetLength(wp,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,rtl.length(wp) + 1);
        wp[rtl.length(wp) - 1].$assign(AEndCoordinate);
        o.FUpdateSegments = rtl.arraySetLength(o.FUpdateSegments,null,3);
        o.FUpdateSegments[0] = ps;
        o.FUpdateSegments[1] = ASegment;
        o.FUpdateSegments[2] = ns;
      } else if (ps != null) {
        o.FStartCoordinate.$assign(ps.FStartCoordinate.GetToRec());
        o.FEndCoordinate.$assign(AEndCoordinate);
        wp = rtl.arraySetLength(wp,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,rtl.length(wp) + 1);
        wp[rtl.length(wp) - 1].$assign(AStartCoordinate);
        o.FUpdateSegments = rtl.arraySetLength(o.FUpdateSegments,null,2);
        o.FUpdateSegments[0] = ps;
        o.FUpdateSegments[1] = ASegment;
      } else if (ns != null) {
        o.FStartCoordinate.$assign(AStartCoordinate);
        o.FEndCoordinate.$assign(ns.FEndCoordinate.GetToRec());
        wp = rtl.arraySetLength(wp,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,rtl.length(wp) + 1);
        wp[rtl.length(wp) - 1].$assign(AEndCoordinate);
        o.FUpdateSegments = rtl.arraySetLength(o.FUpdateSegments,null,2);
        o.FUpdateSegments[0] = ASegment;
        o.FUpdateSegments[1] = ns;
      } else {
        o.FStartCoordinate.$assign(AStartCoordinate);
        o.FEndCoordinate.$assign(AEndCoordinate);
        o.FUpdateSegments = rtl.arraySetLength(o.FUpdateSegments,null,1);
        o.FUpdateSegments[0] = ASegment;
      };
      if (ACallback != null) {
        o.FCallBack = $mod.TTMSFNCRouteCalculatorRouteCallBackWrapper.$create("Create$1",[ACallback])}
       else o.FCallBack = null;
      this.GetDirections(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(o.FStartCoordinate),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(o.FEndCoordinate),null,rtl.arrayRef(wp),AID,o);
    };
    this.UpdateRouteSegmentStartAddress = function (ASegment, AStartAddress, ACallback, AID, ADataPointer) {
      this.UpdateRouteSegment(ASegment,AStartAddress,ASegment.FEndAddress,ACallback,AID,ADataPointer);
    };
    this.UpdateRouteSegmentEndAddress = function (ASegment, AEndAddress, ACallback, AID, ADataPointer) {
      this.UpdateRouteSegment(ASegment,ASegment.FStartAddress,AEndAddress,ACallback,AID,ADataPointer);
    };
    this.UpdateRouteSegmentStartCoordinate = function (ASegment, AStartCoordinate, ACallback, AID, ADataPointer) {
      this.UpdateRouteSegment$1(ASegment,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(AStartCoordinate),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(ASegment.FEndCoordinate.GetToRec()),ACallback,AID,ADataPointer);
    };
    this.UpdateRouteSegmentEndCoordinate = function (ASegment, AEndCoordinate, ACallback, AID, ADataPointer) {
      this.UpdateRouteSegment$1(ASegment,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(ASegment.FStartCoordinate.GetToRec()),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(AEndCoordinate),ACallback,AID,ADataPointer);
    };
    this.DeleteRoute = function (ARoute) {
      if (!(ARoute != null)) return;
      ARoute = rtl.freeLoc(ARoute);
    };
    this.DeleteRouteSegment = function (ASegment, ACallback) {
      var ps = null;
      var ns = null;
      var et = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$new();
      var st = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$new();
      var r = null;
      var o = null;
      if (!(ASegment != null)) return;
      if ((ASegment.GetRoute() != null) && (ASegment.GetRoute().FSegments.GetCount() === 1)) {
        r = ASegment.GetRoute();
        ASegment = rtl.freeLoc(ASegment);
        if (ACallback != null) ACallback(r);
        o = $mod.TTMSFNCRouteCalculatorInfo.$create("Create$1");
        this.DoCalculateRoute(r,o);
        o = rtl.freeLoc(o);
        r = rtl.freeLoc(r);
        return;
      };
      ps = ASegment.GetPreviousSegment();
      ns = ASegment.GetNextSegment();
      et.$assign(ASegment.FEndCoordinate.GetToRec());
      st.$assign(ASegment.FStartCoordinate.GetToRec());
      ASegment = rtl.freeLoc(ASegment);
      if (ps != null) {
        this.UpdateRouteSegmentEndCoordinate(ps,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(st),ACallback,"",null)}
       else if (ns != null) this.UpdateRouteSegmentStartCoordinate(ns,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(et),ACallback,"",null);
    };
    this.GetCurrentLocation = function (AMode) {
      if (AMode === $mod.TTMSFNCRouteCalculatorLocationMode.lmService) {
        if (!this.LocationReady()) {
          throw pas.SysUtils.Exception.$create("Create$1",["Please set API key!"]);
          return;
        };
        if (this.FService === $mod.TTMSFNCRouteCalculatorService.csGoogle) this.FLocation.GetLocation(null,"");
      };
    };
    this.LoadGPXFromStream = function (AStream, ADoGeocoding) {
      var Result = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXRec.$new();
      var s = null;
      s = pas.Classes.TStringStream.$create("Create$2",[""]);
      try {
        AStream.SetPosition(0);
        s.CopyFrom(AStream,AStream.GetSize());
        Result.$assign(this.LoadGPXFromText(s.GetDataString(),ADoGeocoding));
      } finally {
        s = rtl.freeLoc(s);
      };
      return Result;
    };
    this.LoadGPXFromText = function (AText, ADoGeocoding) {
      var Result = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXRec.$new();
      Result.$assign(this.InternalLoadGPX(AText,ADoGeocoding));
      return Result;
    };
    this.SaveToGPXStream = function (ARoute, AStream) {
      this.SaveToGPXStream$1(ARoute,AStream,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(pas["WEBLib.TMSFNCMapsCommonTypes"].DefaultGPXMetaData()));
    };
    this.SaveToGPXStream$1 = function (ARoute, AStream, AMetaData) {
      var ss = null;
      ss = pas.Classes.TStringStream.$create("Create$2",[this.InternalSaveGPX(ARoute,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(AMetaData))]);
      try {
        AStream.CopyFrom(ss,ss.GetSize());
      } finally {
        ss = rtl.freeLoc(ss);
      };
    };
    this.SaveToGPXFile = function (ARoute, AFileName) {
      this.SaveToGPXFile$1(ARoute,AFileName,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(pas["WEBLib.TMSFNCMapsCommonTypes"].DefaultGPXMetaData()));
    };
    this.SaveToGPXFile$1 = function (ARoute, AFileName, AMetaData) {
      var sl = null;
      sl = pas.Classes.TStringList.$create("Create$1");
      try {
        sl.SetTextStr(this.InternalSaveGPX(ARoute,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(AMetaData)));
        sl.SaveToFile(AFileName);
      } finally {
        sl = rtl.freeLoc(sl);
      };
    };
    this.SaveToGPXText = function (ARoute) {
      var Result = "";
      Result = this.InternalSaveGPX(ARoute,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(pas["WEBLib.TMSFNCMapsCommonTypes"].DefaultGPXMetaData()));
      return Result;
    };
    this.SaveToGPXText$1 = function (ARoute, AMetaData) {
      var Result = "";
      Result = this.InternalSaveGPX(ARoute,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(AMetaData));
      return Result;
    };
    this.SaveRoutesToStream = function (AStream) {
      pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.SaveSettingsToStream(this.FRoutes,AStream);
    };
    this.SaveRoutesToText = function () {
      var Result = "";
      var s = null;
      s = pas.Classes.TStringStream.$create("Create$2",[""]);
      try {
        this.SaveRoutesToStream(s);
        s.SetPosition(0);
        Result = s.GetDataString();
      } finally {
        s = rtl.freeLoc(s);
      };
      return Result;
    };
    this.SaveRoutesToFile = function (AFileName) {
      var ms = null;
      ms = pas.Classes.TMemoryStream.$create("Create");
      try {
        this.SaveRoutesToStream(ms);
        ms.SetPosition(0);
        pas["WEBLib.TMSFNCTypes"].TTMSFNCMemoryStream.SaveToFile.call(ms,AFileName);
      } finally {
        ms = rtl.freeLoc(ms);
      };
    };
    this.LoadRoutesFromStream = function (AStream) {
      pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.LoadSettingsFromStream(this.FRoutes,AStream);
    };
    this.LoadRoutesFromText = function (AText) {
      var s = null;
      s = pas.Classes.TStringStream.$create("Create$2",[AText]);
      try {
        s.SetPosition(0);
        this.LoadRoutesFromStream(s);
      } finally {
        s = rtl.freeLoc(s);
      };
    };
    this.RunnningRequestCount = function () {
      var Result = 0;
      Result = this.FDirections.GetRequestCount(true,"");
      return Result;
    };
    this.Clear = function () {
      this.BeginUpdate();
      this.ClearRoutes();
      if (this.FGeocoding != null) this.FGeocoding.FGeocodingRequests.Clear();
      if (this.FDirections != null) this.FDirections.FDirectionsRequests.Clear();
      if (this.FLocation != null) this.FLocation.FLocationRequests.Clear();
      this.EndUpdate();
    };
    this.ClearRoutes = function () {
      this.BeginUpdate();
      this.FRoutes.Clear();
      this.EndUpdate();
    };
    this.SaveToGPXStream$2 = function (ACoordinates, AStream) {
      this.SaveToGPXStream$3(rtl.arrayRef(ACoordinates),AStream,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(pas["WEBLib.TMSFNCMapsCommonTypes"].DefaultGPXMetaData()));
    };
    this.SaveToGPXStream$3 = function (ACoordinates, AStream, AMetaData) {
      var ss = null;
      ss = pas.Classes.TStringStream.$create("Create$2",[this.SaveToGPXText$3(rtl.arrayRef(ACoordinates),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(AMetaData))]);
      try {
        AStream.CopyFrom(ss,ss.GetSize());
      } finally {
        ss = rtl.freeLoc(ss);
      };
    };
    this.SaveToGPXFile$2 = function (ACoordinates, AFileName) {
      this.SaveToGPXFile$3(rtl.arrayRef(ACoordinates),AFileName,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(pas["WEBLib.TMSFNCMapsCommonTypes"].DefaultGPXMetaData()));
    };
    this.SaveToGPXFile$3 = function (ACoordinates, AFileName, AMetaData) {
      var sl = null;
      sl = pas.Classes.TStringList.$create("Create$1");
      try {
        sl.SetTextStr(this.SaveToGPXText$3(rtl.arrayRef(ACoordinates),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(AMetaData)));
        sl.SaveToFile(AFileName);
      } finally {
        sl = rtl.freeLoc(sl);
      };
    };
    this.SaveToGPXText$2 = function (ACoordinates) {
      var Result = "";
      Result = pas["WEBLib.TMSFNCMapsCommonTypes"].SaveToGPX(rtl.arrayRef(ACoordinates),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(pas["WEBLib.TMSFNCMapsCommonTypes"].DefaultGPXMetaData()),true,true,"");
      return Result;
    };
    this.SaveToGPXText$3 = function (ACoordinates, AMetaData) {
      var Result = "";
      Result = pas["WEBLib.TMSFNCMapsCommonTypes"].SaveToGPX(rtl.arrayRef(ACoordinates),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(AMetaData),true,true,"");
      return Result;
    };
    this.HasRoutes = function () {
      var Result = false;
      Result = false;
      if (this.FRoutes.GetCount() <= 0) return Result;
      if (this.FRoutes.GetItem$1(0).FSegments.GetCount() <= 0) return Result;
      if (this.FRoutes.GetItem$1(0).FSegments.GetItem$1(0).FCoordinates.GetCount() <= 0) return Result;
      Result = true;
      return Result;
    };
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$5",2,[]);
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
  });
  rtl.createClass(this,"TTMSFNCRouteCalculator",this.TTMSFNCCustomRouteCalculator,function () {
    this.RegisterRuntimeClasses = function () {
      pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent.RegisterRuntimeClasses.call(this);
      pas.Classes.RegisterClasses([$mod.TTMSFNCRouteCalculator,$mod.TTMSFNCRouteCalculatorRoute,$mod.TTMSFNCRouteCalculatorSegment,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateItem,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinate,pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsStep,pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsItem,$mod.TTMSFNCRouteCalculatorAlternativeSegment]);
    };
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("OnGetGeocoding",0,pas["WEBLib.TMSFNCGeocoding"].$rtti["TTMSFNCGeocodingGetGeocodingEvent"],"FOnGetGeocoding","FOnGetGeocoding");
    $r.addProperty("OnGetDirections",0,pas["WEBLib.TMSFNCDirections"].$rtti["TTMSFNCDirectionsGetDirectionsEvent"],"FOnGetDirections","FOnGetDirections");
    $r.addProperty("OnGetRouteGeocoding",0,pas["WEBLib.TMSFNCGeocoding"].$rtti["TTMSFNCGeocodingGetGeocodingEvent"],"FOnGetRouteGeocoding","FOnGetRouteGeocoding");
    $r.addProperty("OnGetRouteDirections",0,pas["WEBLib.TMSFNCDirections"].$rtti["TTMSFNCDirectionsGetDirectionsEvent"],"FOnGetRouteDirections","FOnGetRouteDirections");
    $r.addProperty("OnCalculateRoute",0,$mod.$rtti["TTMSFNCRouteCalculatorCalculateRouteEvent"],"FOnCalculateRoute","FOnCalculateRoute");
    $r.addProperty("OnCreateGPXTrack",0,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsGPXTrackEvent"],"FOnCreateGPXTrack","FOnCreateGPXTrack");
    $r.addProperty("OnCreateGPXSegment",0,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsGPXSegmentEvent"],"FOnCreateGPXSegment","FOnCreateGPXSegment");
    $r.addProperty("OnLoadGPXRouteComplete",0,$mod.$rtti["TTMSFNCRouteCalculatorGPXEvent"],"FOnLoadGPXRouteComplete","FOnLoadGPXRouteComplete");
    $r.addProperty("OnGetLocation",0,$mod.$rtti["TTMSFNCRouteCalculatorLocationEvent"],"FOnGetLocation","FOnGetLocation");
    $r.addProperty("APIKey",2,rtl.string,"FAPIKey","SetAPIKey");
    $r.addProperty("Service",2,$mod.$rtti["TTMSFNCRouteCalculatorService"],"FService","SetService",{Default: $mod.TTMSFNCRouteCalculatorService.csGoogle});
    $r.addProperty("Version",1,rtl.string,"GetVersion","");
    $r.addProperty("Routes",2,$mod.$rtti["TTMSFNCRouteCalculatorRoutes"],"FRoutes","SetRoutes");
    $r.addProperty("Options",0,$mod.$rtti["TTMSFNCRouteCalculatorOptions"],"FOptions","FOptions");
  });
  $mod.$implcode = function () {
    $impl.GetFirstChildNode = function (ANode) {
      var Result = null;
      Result = ANode.firstChild;
      return Result;
    };
    $impl.FindNodeAttribute = function (ANode, ANodeName) {
      var Result = null;
      if (ANode.attributes){
        return ANode.attributes.getNamedItem(ANodeName);
      }else{
        return undefined;
      };
      return Result;
    };
    $impl.FindNode = function (ANode, ANodeName) {
      var Result = null;
      Result = pas["WEBLib.TMSFNCMapsCommonTypes"].TJSNodeListHelper.FindNode.call(ANode.childNodes,ANodeName);
      return Result;
    };
    $impl.NodeToString = function (ANode) {
      var Result = "";
      Result = "";
      if (!(ANode != null)) return Result;
      Result = ANode.nodeValue;
      return Result;
    };
  };
},["Math","WEBLib.TMSFNCUtils","WEBLib.TMSFNCPersistence","SysUtils"]);
//# sourceMappingURL=WEBLib.TMSFNCRouteCalculator.js.map
