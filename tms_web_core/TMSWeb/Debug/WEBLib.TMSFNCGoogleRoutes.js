rtl.module("WEBLib.TMSFNCGoogleRoutes",["System","Classes","Types","WEBLib.Forms","Web","contnrs","WEBLib.TMSFNCTypes","WEBLib.TMSFNCMapsCommonTypes","WEBLib.TMSFNCCloudBase","WEBLib.TMSFNCDirections"],function () {
  "use strict";
  var $mod = this;
  this.LB = "\r";
  this.TTMSFNCGoogleRoutesDocURL = pas["WEBLib.TMSFNCTypes"].TTMSFNCBaseDocURL + "tmsfncmaps/components/ttmsfncmaps/#ttmsfncdirections";
  this.TTMSFNCGoogleRoutesTipsURL = "https://www.tmssoftware.com/site/tmsfncmaps.asp?s=faq";
  this.MAJ_VER = 1;
  this.MIN_VER = 0;
  this.REL_VER = 0;
  this.BLD_VER = 0;
  this.TTMSFNCGoogleRoutesRoutingMode = {"0": "rmTrafficUnaware", rmTrafficUnaware: 0, "1": "rmTrafficAware", rmTrafficAware: 1, "2": "rmTrafficAwareOptimal", rmTrafficAwareOptimal: 2};
  this.$rtti.$Enum("TTMSFNCGoogleRoutesRoutingMode",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TTMSFNCGoogleRoutesRoutingMode});
  this.TTMSFNCGoogleRoutesDeparture = {"0": "rdIgnore", rdIgnore: 0, "1": "rdNow", rdNow: 1, "2": "rdDateTime", rdDateTime: 2};
  this.$rtti.$Enum("TTMSFNCGoogleRoutesDeparture",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TTMSFNCGoogleRoutesDeparture});
  this.$rtti.$Class("TTMSFNCGoogleRoutes");
  rtl.createClass(this,"TTMSFNCGoogleRoutesOptions",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FRoutingMode = 0;
      this.FDeparture = 0;
      this.FDepartureTime = 0.0;
      this.FHTMLFormattedInstructions = false;
      this.FIncludeFuelEfficientRoute = false;
    };
    this.SetRoutingMode = function (Value) {
      if (this.FRoutingMode !== Value) {
        this.FRoutingMode = Value;
      };
    };
    this.SetDeparture = function (Value) {
      if (this.FDeparture !== Value) {
        this.FDeparture = Value;
      };
    };
    this.SetDepartureTime = function (Value) {
      if (this.FDepartureTime !== Value) {
        this.FDepartureTime = Value;
      };
    };
    this.SetHTMLFormattedInstructions = function (Value) {
      if (this.FHTMLFormattedInstructions !== Value) {
        this.FHTMLFormattedInstructions = Value;
      };
    };
    this.SetIncludeFuelEfficientRoute = function (Value) {
      if (this.FIncludeFuelEfficientRoute !== Value) {
        this.FIncludeFuelEfficientRoute = Value;
      };
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCGoogleRoutesOptions.isPrototypeOf(Source)) {
        this.FRoutingMode = rtl.as(Source,$mod.TTMSFNCGoogleRoutesOptions).FRoutingMode;
        this.FDeparture = rtl.as(Source,$mod.TTMSFNCGoogleRoutesOptions).FDeparture;
        this.FDepartureTime = rtl.as(Source,$mod.TTMSFNCGoogleRoutesOptions).FDepartureTime;
        this.FHTMLFormattedInstructions = rtl.as(Source,$mod.TTMSFNCGoogleRoutesOptions).FHTMLFormattedInstructions;
      } else pas.Classes.TPersistent.Assign.apply(this,arguments);
    };
    this.Create$1 = function () {
      this.FRoutingMode = $mod.TTMSFNCGoogleRoutesRoutingMode.rmTrafficUnaware;
      this.FDeparture = $mod.TTMSFNCGoogleRoutesDeparture.rdIgnore;
      this.FDepartureTime = pas.SysUtils.Now();
      this.FHTMLFormattedInstructions = false;
      return this;
    };
    this.Destroy = function () {
      pas.System.TObject.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addProperty("RoutingMode",2,$mod.$rtti["TTMSFNCGoogleRoutesRoutingMode"],"FRoutingMode","SetRoutingMode",{Default: $mod.TTMSFNCGoogleRoutesRoutingMode.rmTrafficUnaware});
    $r.addProperty("Departure",2,$mod.$rtti["TTMSFNCGoogleRoutesDeparture"],"FDeparture","SetDeparture",{Default: $mod.TTMSFNCGoogleRoutesDeparture.rdIgnore});
    $r.addProperty("DepartureTime",2,pas.System.$rtti["TDateTime"],"FDepartureTime","SetDepartureTime");
    $r.addProperty("HTMLFormattedInstructions",2,rtl.boolean,"FHTMLFormattedInstructions","SetHTMLFormattedInstructions",{Default: false});
    $r.addProperty("IncludeFuelEfficientRoute",2,rtl.boolean,"FIncludeFuelEfficientRoute","SetIncludeFuelEfficientRoute",{Default: false});
  });
  rtl.createClass(this,"TTMSFNCSpeedReadingInterval",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FOwner = null;
      this.FDataBoolean = false;
      this.FDataString = "";
      this.FDataObject = null;
      this.FDataInteger = 0;
      this.FDataPointer = null;
      this.FStartPolylinePointIndex = 0;
      this.FSpeed = "";
      this.FEndPolylinePointIndex = 0;
    };
    this.$final = function () {
      this.FOwner = undefined;
      this.FDataObject = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      if (ACollection != null) this.FOwner = rtl.as(this.FCollection,$mod.TTMSFNCSpeedReadingIntervals).FOwner$1;
      this.FStartPolylinePointIndex = -1;
      this.FEndPolylinePointIndex = 0;
      this.FSpeed = "";
      return this;
    };
    this.Assign = function (Source) {
      pas.Classes.TPersistent.Assign.apply(this,arguments);
    };
    this.Destroy = function () {
      pas.Classes.TCollectionItem.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("StartPolylinePointIndex",0,rtl.longint,"FStartPolylinePointIndex","FStartPolylinePointIndex");
    $r.addProperty("EndPolylinePointIndex",0,rtl.longint,"FEndPolylinePointIndex","FEndPolylinePointIndex");
    $r.addProperty("Speed",0,rtl.string,"FSpeed","FSpeed");
  });
  rtl.createClass(this,"TTMSFNCSpeedReadingIntervals",pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection,function () {
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
      Result = $mod.TTMSFNCSpeedReadingInterval;
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
    $r.addMethod("Create$3",2,[["AOwner",pas.Classes.$rtti["TPersistent"]]]);
  });
  rtl.createClass(this,"TTMSFNCGoogleRoutesTravelAdvisory",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FSpeedReadingIntervals = null;
      this.FFuelConsumptionMicroliters = 0;
    };
    this.$final = function () {
      this.FSpeedReadingIntervals = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetSpeedReadingIntervals = function (Value) {
      this.FSpeedReadingIntervals.Assign(Value);
    };
    this.SetFuelConsumptionMicroliters = function (Value) {
      this.FFuelConsumptionMicroliters = Value;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCGoogleRoutesTravelAdvisory.isPrototypeOf(Source)) {
        this.FSpeedReadingIntervals = rtl.as(Source,$mod.TTMSFNCGoogleRoutesTravelAdvisory).FSpeedReadingIntervals;
        this.FFuelConsumptionMicroliters = rtl.as(Source,$mod.TTMSFNCGoogleRoutesTravelAdvisory).FFuelConsumptionMicroliters;
      } else pas.Classes.TPersistent.Assign.apply(this,arguments);
    };
    this.Create$1 = function () {
      this.FSpeedReadingIntervals = $mod.TTMSFNCSpeedReadingIntervals.$create("Create$3",[this]);
      this.FFuelConsumptionMicroliters = 0;
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FSpeedReadingIntervals");
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addProperty("SpeedReadingIntervals",2,$mod.$rtti["TTMSFNCSpeedReadingIntervals"],"FSpeedReadingIntervals","SetSpeedReadingIntervals");
    $r.addProperty("FuelConsumptionMicroliters",2,rtl.longint,"FFuelConsumptionMicroliters","SetFuelConsumptionMicroliters");
  });
  rtl.createClass(this,"TTMSFNCGoogleRoutesItem",pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsItem,function () {
    this.$init = function () {
      pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsItem.$init.call(this);
      this.FRouteLabels = null;
      this.FTravelAdvisory = null;
    };
    this.$final = function () {
      this.FRouteLabels = undefined;
      this.FTravelAdvisory = undefined;
      pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsItem.$final.call(this);
    };
    this.SetRouteLabels = function (Value) {
      this.FRouteLabels.Assign(Value);
    };
    this.SetTravelAdivsory = function (Value) {
      this.FTravelAdvisory = Value;
    };
    this.Create$1 = function (ACollection) {
      pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsItem.Create$1.apply(this,arguments);
      this.FRouteLabels = pas.Classes.TStringList.$create("Create$1");
      this.FTravelAdvisory = $mod.TTMSFNCGoogleRoutesTravelAdvisory.$create("Create$1");
      return this;
    };
    this.Assign = function (Source) {
      pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsItem.Assign.apply(this,arguments);
      if ($mod.TTMSFNCGoogleRoutesItem.isPrototypeOf(Source)) {
        this.FRouteLabels.Assign(Source.FRouteLabels);
        this.FTravelAdvisory.Assign(Source.FTravelAdvisory);
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FRouteLabels");
      rtl.free(this,"FTravelAdvisory");
      pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsItem.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("RouteLabels",2,pas.Classes.$rtti["TStringList"],"FRouteLabels","SetRouteLabels");
    $r.addProperty("TravelAdvisory",2,$mod.$rtti["TTMSFNCGoogleRoutesTravelAdvisory"],"FTravelAdvisory","SetTravelAdivsory");
  });
  rtl.createClass(this,"TTMSFNCGoogleRoutesItems",pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsItems,function () {
    this.GetItem$2 = function (Index) {
      var Result = null;
      Result = this.GetItem$1(Index);
      return Result;
    };
    this.CreateItemClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCGoogleRoutesItem;
      return Result;
    };
  });
  rtl.createClass(this,"TTMSFNCGoogleRoutesRequest",pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsRequest,function () {
    this.GetItems = function () {
      var Result = null;
      Result = this.FItems;
      return Result;
    };
    this.GetDirectionsItemsClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCGoogleRoutesItems;
      return Result;
    };
    var $r = this.$rtti;
    $r.addProperty("Items",1,$mod.$rtti["TTMSFNCGoogleRoutesItems"],"GetItems","");
  });
  rtl.createClass(this,"TTMSFNCGoogleRoutesRequests",pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsRequests,function () {
    this.GetItem$2 = function (Index) {
      var Result = null;
      Result = this.GetItem$1(Index);
      return Result;
    };
    this.SetItem$2 = function (Index, Value) {
      this.SetItem$1(Index,Value);
    };
    this.CreateItemClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCGoogleRoutesRequest;
      return Result;
    };
  });
  rtl.createClass(this,"TTMSFNCCustomGoogleRoutes",pas["WEBLib.TMSFNCDirections"].TTMSFNCCustomDirections,function () {
    this.$init = function () {
      pas["WEBLib.TMSFNCDirections"].TTMSFNCCustomDirections.$init.call(this);
      this.FOptions = null;
    };
    this.$final = function () {
      this.FOptions = undefined;
      pas["WEBLib.TMSFNCDirections"].TTMSFNCCustomDirections.$final.call(this);
    };
    this.SetOptions = function (Value) {
      this.FOptions.Assign(Value);
    };
    this.GetDirectionsRequests$1 = function () {
      var Result = null;
      Result = this.FDirectionsRequests;
      return Result;
    };
    this.SetDirectionsRequests$1 = function (Value) {
    };
    this.GetDirectionsRequestsClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCGoogleRoutesRequests;
      return Result;
    };
    this.GetGoogleRoutesOptions = function (AOptions, ATravelMode, AWayPoints, AWayPointsList) {
      var Result = "";
      var Preference = "";
      var Departure = "";
      var Extras = null;
      var I = 0;
      Result = AOptions.get();
      if (!(ATravelMode in rtl.createSet(pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmWalking,pas["WEBLib.TMSFNCDirections"].TTMSFNCDirectionsTravelMode.tmBicycling))) {
        var $tmp = this.FOptions.FRoutingMode;
        if ($tmp === $mod.TTMSFNCGoogleRoutesRoutingMode.rmTrafficUnaware) {
          Preference = ""}
         else if ($tmp === $mod.TTMSFNCGoogleRoutesRoutingMode.rmTrafficAware) {
          Preference = "TRAFFIC_AWARE"}
         else if ($tmp === $mod.TTMSFNCGoogleRoutesRoutingMode.rmTrafficAwareOptimal) {
          Preference = "TRAFFIC_AWARE_OPTIMAL";
          if (this.FOptions.FIncludeFuelEfficientRoute) {
            if ((rtl.length(AWayPoints) <= 0) && (!(AWayPointsList != null) || ((AWayPointsList != null) && (AWayPointsList.GetCount() <= 0)))) {
              Result = Result + '  "requestedReferenceRoutes": ["FUEL_EFFICIENT"],' + $mod.LB;
            };
          };
        };
        if (Preference !== "") {
          Result = Result + '  "routingPreference": "' + Preference + '",' + $mod.LB;
        };
      };
      if (this.FOptions.FRoutingMode !== $mod.TTMSFNCGoogleRoutesRoutingMode.rmTrafficUnaware) {
        var $tmp1 = this.FOptions.FDeparture;
        if ($tmp1 === $mod.TTMSFNCGoogleRoutesDeparture.rdIgnore) {
          Departure = ""}
         else if ($tmp1 === $mod.TTMSFNCGoogleRoutesDeparture.rdNow) {
          Departure = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.DateTimeToISO(pas.SysUtils.Now(),true,true)}
         else if ($tmp1 === $mod.TTMSFNCGoogleRoutesDeparture.rdDateTime) Departure = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.DateTimeToISO(this.FOptions.FDepartureTime,true,true);
        if (Departure !== "") {
          Result = Result + '  "departureTime": "' + Departure + '",' + $mod.LB;
        };
      };
      Extras = pas.Classes.TStringList.$create("Create$1");
      Extras.Add("TRAFFIC_ON_POLYLINE");
      if (this.FOptions.FHTMLFormattedInstructions) {
        Extras.Add("HTML_FORMATTED_NAVIGATION_INSTRUCTIONS");
      };
      if (Extras.GetCount() > 0) {
        Result = Result + '  "extraComputations": [';
        for (var $l = 0, $end = Extras.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          Result = Result + '"' + Extras.Get(I) + '",';
        };
        Result = Result + "]," + $mod.LB;
      };
      Extras = rtl.freeLoc(Extras);
      return Result;
    };
    this.Create$1 = function (AOwner) {
      pas["WEBLib.TMSFNCDirections"].TTMSFNCCustomDirections.Create$1.apply(this,arguments);
      this.SetIsGoogleRoutes(true);
      this.InitializeDirections();
      this.FOptions = $mod.TTMSFNCGoogleRoutesOptions.$create("Create$1");
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FOptions");
      pas["WEBLib.TMSFNCDirections"].TTMSFNCCustomDirections.Destroy.call(this);
    };
    rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCCustomDirectionsProperties);
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
  });
  rtl.createClass(this,"TTMSFNCGoogleRoutes",this.TTMSFNCCustomGoogleRoutes,function () {
    this.RegisterRuntimeClasses = function () {
      pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent.RegisterRuntimeClasses.call(this);
      pas.Classes.RegisterClass($mod.TTMSFNCGoogleRoutes);
    };
    rtl.addIntf(this,pas["WEBLib.TMSFNCDirections"].ITMSFNCCustomDirectionsProperties);
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("OnGetDirections",0,pas["WEBLib.TMSFNCDirections"].$rtti["TTMSFNCDirectionsGetDirectionsEvent"],"FOnGetDirections","FOnGetDirections");
    $r.addProperty("OnGetDirectionsResult",0,pas["WEBLib.TMSFNCDirections"].$rtti["TTMSFNCDirectionsGetDirectionsResultEvent"],"FOnGetDirectionsResult","FOnGetDirectionsResult");
    $r.addProperty("APIKey",2,rtl.string,"FAPIKey","SetAPIKey");
    $r.addProperty("DirectionsRequests",3,$mod.$rtti["TTMSFNCGoogleRoutesRequests"],"GetDirectionsRequests$1","SetDirectionsRequests$1");
    $r.addProperty("Version",1,rtl.string,"GetVersion","");
  });
},["Math","WEBLib.TMSFNCUtils","WEBLib.TMSFNCDirections.Google","SysUtils","DateUtils"]);
//# sourceMappingURL=WEBLib.TMSFNCGoogleRoutes.js.map
