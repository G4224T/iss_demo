rtl.module("WEBLib.TMSFNCMapsCommonTypes",["System","Classes","WEBLib.TMSFNCTypes","Web"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.DEFAULT_LOCALE = "en-US";
  this.DEFAULT_LATITUDE = 40.689247;
  this.DEFAULT_LONGITUDE = -74.044502;
  this.DEFAULT_ICONURL = "https://cdn.mapmarker.io/api/v1/pin?text=P&size=50&hoffset=1";
  rtl.recNewT(this,"TTMSFNCMapsAnchorPointRec",function () {
    this.X = 0.0;
    this.Y = 0.0;
    this.$eq = function (b) {
      return (this.X === b.X) && (this.Y === b.Y);
    };
    this.$assign = function (s) {
      this.X = s.X;
      this.Y = s.Y;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCMapsAnchorPointRec",{});
    $r.addField("X",rtl.double);
    $r.addField("Y",rtl.double);
  });
  rtl.recNewT(this,"TTMSFNCMapsCoordinateRec",function () {
    this.Longitude = 0.0;
    this.Latitude = 0.0;
    this.Elevation = 0.0;
    this.TimeStamp = 0.0;
    this.HasElevation = false;
    this.HasTimeStamp = false;
    this.DataObject = null;
    this.Description = "";
    this.$eq = function (b) {
      return (this.Longitude === b.Longitude) && (this.Latitude === b.Latitude) && (this.Elevation === b.Elevation) && (this.TimeStamp === b.TimeStamp) && (this.HasElevation === b.HasElevation) && (this.HasTimeStamp === b.HasTimeStamp) && (this.DataObject === b.DataObject) && (this.Description === b.Description);
    };
    this.$assign = function (s) {
      this.Longitude = s.Longitude;
      this.Latitude = s.Latitude;
      this.Elevation = s.Elevation;
      this.TimeStamp = s.TimeStamp;
      this.HasElevation = s.HasElevation;
      this.HasTimeStamp = s.HasTimeStamp;
      this.DataObject = s.DataObject;
      this.Description = s.Description;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCMapsCoordinateRec",{});
    $r.addField("Longitude",rtl.double);
    $r.addField("Latitude",rtl.double);
    $r.addField("Elevation",rtl.double);
    $r.addField("TimeStamp",pas.System.$rtti["TDateTime"]);
    $r.addField("HasElevation",rtl.boolean);
    $r.addField("HasTimeStamp",rtl.boolean);
    $r.addField("DataObject",pas.System.$rtti["TObject"]);
    $r.addField("Description",rtl.string);
  });
  this.$rtti.$DynArray("TTMSFNCMapsCoordinateRecArray",{eltype: this.$rtti["TTMSFNCMapsCoordinateRec"]});
  this.$rtti.$DynArray("TTMSFNCMapsCoordinateRecArrayArray",{eltype: this.$rtti["TTMSFNCMapsCoordinateRecArray"]});
  this.$rtti.$DynArray("TTMSFNCMapsCoordinateRecArrayArrayArray",{eltype: this.$rtti["TTMSFNCMapsCoordinateRecArrayArray"]});
  rtl.createHelper(this,"TJSNodeListHelper",null,function () {
    this.FindNode = function (ANodeName) {
      var Result = null;
      var Index = 0;
      Index = $mod.TJSNodeListHelper.IndexOf.call(this,ANodeName);
      if (Index >= 0) {
        Result = this.item(Index)}
       else Result = null;
      return Result;
    };
    this.IndexOf = function (Name) {
      var Result = 0;
      var n = null;
      for (var $l = 0, $end = $mod.TJSNodeListHelper.GetCount.call(this) - 1; $l <= $end; $l++) {
        Result = $l;
        n = this.item(Result);
        if (n.nodeName === Name) return Result;
      };
      Result = -1;
      return Result;
    };
    this.GetCount = function () {
      var Result = 0;
      Result = this.length;
      return Result;
    };
  });
  rtl.recNewT(this,"TTMSFNCMapsGPXTrackRec",function () {
    this.Name = "";
    this.$new = function () {
      var r = Object.create(this);
      r.Segments = [];
      return r;
    };
    this.$eq = function (b) {
      return (this.Segments === b.Segments) && (this.Name === b.Name);
    };
    this.$assign = function (s) {
      this.Segments = rtl.arrayRef(s.Segments);
      this.Name = s.Name;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCMapsGPXTrackRec",{});
    $r.addField("Segments",$mod.$rtti["TTMSFNCMapsCoordinateRecArrayArray"]);
    $r.addField("Name",rtl.string);
  });
  rtl.createClass(this,"TTMSFNCMapsGPXTrackEventData",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FNode = null;
      this.FData = $mod.TTMSFNCMapsGPXTrackRec.$new();
    };
    this.$final = function () {
      this.FNode = undefined;
      this.FData = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.Create$1 = function () {
      this.FNode = null;
      return this;
    };
    this.Destroy = function () {
      pas.System.TObject.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
  });
  rtl.createClass(this,"TTMSFNCMapsGPXSegmentEventData",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FNode = null;
      this.FData = $mod.TTMSFNCMapsCoordinateRec.$new();
    };
    this.$final = function () {
      this.FNode = undefined;
      this.FData = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.Create$1 = function () {
      this.FNode = null;
      return this;
    };
    this.Destroy = function () {
      pas.System.TObject.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
  });
  rtl.recNewT(this,"TTMSFNCMapsGPXMetaData",function () {
    this.AuthorName = "";
    this.AuthorLink = "";
    this.TrackName = "";
    this.TrackType = "";
    this.$eq = function (b) {
      return (this.AuthorName === b.AuthorName) && (this.AuthorLink === b.AuthorLink) && (this.TrackName === b.TrackName) && (this.TrackType === b.TrackType);
    };
    this.$assign = function (s) {
      this.AuthorName = s.AuthorName;
      this.AuthorLink = s.AuthorLink;
      this.TrackName = s.TrackName;
      this.TrackType = s.TrackType;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCMapsGPXMetaData",{});
    $r.addField("AuthorName",rtl.string);
    $r.addField("AuthorLink",rtl.string);
    $r.addField("TrackName",rtl.string);
    $r.addField("TrackType",rtl.string);
  });
  rtl.recNewT(this,"TTMSFNCMapWayPointRec",function () {
    this.Name = "";
    this.$new = function () {
      var r = Object.create(this);
      r.WayPoint = $mod.TTMSFNCMapsCoordinateRec.$new();
      return r;
    };
    this.$eq = function (b) {
      return this.WayPoint.$eq(b.WayPoint) && (this.Name === b.Name);
    };
    this.$assign = function (s) {
      this.WayPoint.$assign(s.WayPoint);
      this.Name = s.Name;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCMapWayPointRec",{});
    $r.addField("WayPoint",$mod.$rtti["TTMSFNCMapsCoordinateRec"]);
    $r.addField("Name",rtl.string);
  });
  rtl.recNewT(this,"TTMSFNCMapsGPXRec",function () {
    this.$new = function () {
      var r = Object.create(this);
      r.Tracks = [];
      r.WayPoints = [];
      return r;
    };
    this.$eq = function (b) {
      return (this.Tracks === b.Tracks) && (this.WayPoints === b.WayPoints);
    };
    this.$assign = function (s) {
      this.Tracks = rtl.arrayRef(s.Tracks);
      this.WayPoints = rtl.arrayRef(s.WayPoints);
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCMapsGPXRec",{});
    $mod.$rtti.$DynArray("TTMSFNCMapsGPXRec.Tracks$a",{eltype: $mod.$rtti["TTMSFNCMapsGPXTrackRec"]});
    $r.addField("Tracks",$mod.$rtti["TTMSFNCMapsGPXRec.Tracks$a"]);
    $mod.$rtti.$DynArray("TTMSFNCMapsGPXRec.WayPoints$a",{eltype: $mod.$rtti["TTMSFNCMapWayPointRec"]});
    $r.addField("WayPoints",$mod.$rtti["TTMSFNCMapsGPXRec.WayPoints$a"]);
  });
  this.$rtti.$MethodVar("TTMSFNCMapsGPXTrackEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AEventData",this.$rtti["TTMSFNCMapsGPXTrackEventData"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCMapsGPXSegmentEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AEventData",this.$rtti["TTMSFNCMapsGPXSegmentEventData"]]]), methodkind: 0});
  this.TTMSFNCMapsLocaleMode = {"0": "mlmDefault", mlmDefault: 0, "1": "mlmCountry", mlmCountry: 1, "2": "mlmLanguage", mlmLanguage: 2};
  this.$rtti.$Enum("TTMSFNCMapsLocaleMode",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TTMSFNCMapsLocaleMode});
  rtl.recNewT(this,"TTMSFNCMapsBoundsRec",function () {
    this.$new = function () {
      var r = Object.create(this);
      r.NorthEast = $mod.TTMSFNCMapsCoordinateRec.$new();
      r.SouthWest = $mod.TTMSFNCMapsCoordinateRec.$new();
      return r;
    };
    this.$eq = function (b) {
      return this.NorthEast.$eq(b.NorthEast) && this.SouthWest.$eq(b.SouthWest);
    };
    this.$assign = function (s) {
      this.NorthEast.$assign(s.NorthEast);
      this.SouthWest.$assign(s.SouthWest);
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCMapsBoundsRec",{});
    $r.addField("NorthEast",$mod.$rtti["TTMSFNCMapsCoordinateRec"]);
    $r.addField("SouthWest",$mod.$rtti["TTMSFNCMapsCoordinateRec"]);
  });
  rtl.createClass(this,"TTMSFNCMapsCoordinate",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FDataBoolean = false;
      this.FDataString = "";
      this.FDataObject = null;
      this.FDataInteger = 0;
      this.FDataPointer = null;
      this.FLatitude = 0.0;
      this.FLongitude = 0.0;
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FDataObject = undefined;
      this.FOnChange = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetLatitude = function (Value) {
      if (this.FLatitude !== Value) {
        this.FLatitude = Value;
        this.UpdateCoordinate();
      };
    };
    this.SetLongitude = function (Value) {
      if (this.FLongitude !== Value) {
        this.FLongitude = Value;
        this.UpdateCoordinate();
      };
    };
    this.IsLatitudeStored = function () {
      var Result = false;
      Result = this.FLatitude !== 40.689247;
      return Result;
    };
    this.IsLongitudeStored = function () {
      var Result = false;
      Result = this.FLongitude !== -74.044502;
      return Result;
    };
    this.GetToRec = function () {
      var Result = $mod.TTMSFNCMapsCoordinateRec.$new();
      var c = $mod.TTMSFNCMapsCoordinateRec.$new();
      c.Longitude = this.FLongitude;
      c.Latitude = this.FLatitude;
      c.Elevation = 0;
      c.TimeStamp = 0;
      c.HasElevation = false;
      c.HasTimeStamp = false;
      c.DataObject = null;
      Result.$assign(c);
      return Result;
    };
    this.SetToRec = function (Value) {
      this.SetLatitude(Value.Latitude);
      this.SetLongitude(Value.Longitude);
    };
    this.UpdateCoordinate = function () {
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.Create$1 = function () {
      this.FLatitude = 40.689247;
      this.FLongitude = -74.044502;
      return this;
    };
    this.Create$2 = function (ACoordinate) {
      this.FLatitude = ACoordinate.Latitude;
      this.FLongitude = ACoordinate.Longitude;
      return this;
    };
    this.Create$3 = function (ALatitude, ALongitude) {
      this.Create$2($mod.TTMSFNCMapsCoordinateRec.$clone($mod.CreateCoordinate(ALatitude,ALongitude)));
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCMapsCoordinate.isPrototypeOf(Source)) {
        this.FLatitude = rtl.as(Source,$mod.TTMSFNCMapsCoordinate).FLatitude;
        this.FLongitude = rtl.as(Source,$mod.TTMSFNCMapsCoordinate).FLongitude;
      };
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addMethod("Create$2",2,[["ACoordinate",$mod.$rtti["TTMSFNCMapsCoordinateRec"]]]);
    $r.addMethod("Create$3",2,[["ALatitude",rtl.double],["ALongitude",rtl.double]]);
    $r.addProperty("Longitude",14,rtl.double,"FLongitude","SetLongitude",{stored: "IsLongitudeStored"});
    $r.addProperty("Latitude",14,rtl.double,"FLatitude","SetLatitude",{stored: "IsLatitudeStored"});
  });
  rtl.createClass(this,"TTMSFNCMapsBounds",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FNorthEast = null;
      this.FSouthWest = null;
      this.FOnChange = null;
      this.FDataPointer = null;
      this.FDataBoolean = false;
      this.FDataString = "";
      this.FDataObject = null;
      this.FDataInteger = 0;
    };
    this.$final = function () {
      this.FNorthEast = undefined;
      this.FSouthWest = undefined;
      this.FOnChange = undefined;
      this.FDataObject = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.GetToRec = function () {
      var Result = $mod.TTMSFNCMapsBoundsRec.$new();
      var r = $mod.TTMSFNCMapsBoundsRec.$new();
      var ne = $mod.TTMSFNCMapsCoordinateRec.$new();
      var sw = $mod.TTMSFNCMapsCoordinateRec.$new();
      ne.$assign(this.FNorthEast.GetToRec());
      sw.$assign(this.FSouthWest.GetToRec());
      r.NorthEast.$assign(ne);
      r.SouthWest.$assign(sw);
      Result.$assign(r);
      return Result;
    };
    this.SetToRec = function (Value) {
      this.FNorthEast.SetToRec(Value.NorthEast);
      this.FSouthWest.SetToRec(Value.SouthWest);
    };
    this.DoCoordinateChanged = function (Sender) {
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.Create$1 = function () {
      this.FNorthEast = $mod.TTMSFNCMapsCoordinate.$create("Create$1");
      this.FSouthWest = $mod.TTMSFNCMapsCoordinate.$create("Create$1");
      return this;
    };
    this.Create$2 = function (ANorthEast, ASouthWest) {
      this.FNorthEast = $mod.TTMSFNCMapsCoordinate.$create("Create$2",[$mod.TTMSFNCMapsCoordinateRec.$clone(ANorthEast)]);
      this.FNorthEast.FOnChange = rtl.createCallback(this,"DoCoordinateChanged");
      this.FSouthWest = $mod.TTMSFNCMapsCoordinate.$create("Create$2",[$mod.TTMSFNCMapsCoordinateRec.$clone(ASouthWest)]);
      this.FSouthWest.FOnChange = rtl.createCallback(this,"DoCoordinateChanged");
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCMapsBounds.isPrototypeOf(Source)) {
        this.FNorthEast.Assign(rtl.as(Source,$mod.TTMSFNCMapsBounds).FNorthEast);
        this.FSouthWest.Assign(rtl.as(Source,$mod.TTMSFNCMapsBounds).FSouthWest);
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FNorthEast");
      rtl.free(this,"FSouthWest");
      pas.System.TObject.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addMethod("Create$2",2,[["ANorthEast",$mod.$rtti["TTMSFNCMapsCoordinateRec"]],["ASouthWest",$mod.$rtti["TTMSFNCMapsCoordinateRec"]]]);
    $r.addProperty("NorthEast",0,$mod.$rtti["TTMSFNCMapsCoordinate"],"FNorthEast","");
    $r.addProperty("SouthWest",0,$mod.$rtti["TTMSFNCMapsCoordinate"],"FSouthWest","");
  });
  rtl.createClass(this,"TTMSFNCMapsCoordinateItem",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FOwner = null;
      this.FDataBoolean = false;
      this.FDataString = "";
      this.FDataObject = null;
      this.FDataInteger = 0;
      this.FDataPointer = null;
      this.FCoordinate = null;
    };
    this.$final = function () {
      this.FOwner = undefined;
      this.FDataObject = undefined;
      this.FCoordinate = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.SetCoordinate = function (Value) {
      if (this.FCoordinate !== Value) {
        this.FCoordinate.Assign(Value);
        this.UpdateCoordinateItem();
      };
    };
    this.GetLatitude = function () {
      var Result = 0.0;
      Result = this.FCoordinate.FLatitude;
      return Result;
    };
    this.GetLongitude = function () {
      var Result = 0.0;
      Result = this.FCoordinate.FLongitude;
      return Result;
    };
    this.SetLatitude = function (Value) {
      this.FCoordinate.SetLatitude(Value);
    };
    this.SetLongitude = function (Value) {
      this.FCoordinate.SetLongitude(Value);
    };
    this.IsLatitudeStored = function () {
      var Result = false;
      Result = this.GetLatitude() !== 40.689247;
      return Result;
    };
    this.IsLongitudeStored = function () {
      var Result = false;
      Result = this.GetLongitude() !== -74.044502;
      return Result;
    };
    this.UpdateCoordinateItem = function () {
      if ($mod.TTMSFNCMapsCoordinates.isPrototypeOf(this.FCollection)) rtl.as(this.FCollection,$mod.TTMSFNCMapsCoordinates).UpdateCoordinates();
    };
    this.CoordinateChanged = function (Sender) {
      this.UpdateCoordinateItem();
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      if (ACollection != null) this.FOwner = rtl.as(this.FCollection,$mod.TTMSFNCMapsCoordinates).FOwner$1;
      this.FCoordinate = $mod.TTMSFNCMapsCoordinate.$create("Create$1");
      this.FCoordinate.FOnChange = rtl.createCallback(this,"CoordinateChanged");
      this.UpdateCoordinateItem();
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCMapsCoordinateItem.isPrototypeOf(Source)) this.FCoordinate.Assign(rtl.as(Source,$mod.TTMSFNCMapsCoordinateItem).FCoordinate);
    };
    this.Destroy = function () {
      rtl.free(this,"FCoordinate");
      pas.Classes.TCollectionItem.Destroy.call(this);
      this.UpdateCoordinateItem();
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("Longitude",15,rtl.double,"GetLongitude","SetLongitude",{stored: "IsLongitudeStored"});
    $r.addProperty("Latitude",15,rtl.double,"GetLatitude","SetLatitude",{stored: "IsLatitudeStored"});
  });
  rtl.createClass(this,"TTMSFNCMapsCoordinates",pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection,function () {
    this.$init = function () {
      pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection.$init.call(this);
      this.FBounds = null;
      this.FOwner$1 = null;
      this.FOnBeginUpdate = null;
      this.FOnEndUpdate = null;
      this.FOnUpdateCoordinates = null;
    };
    this.$final = function () {
      this.FBounds = undefined;
      this.FOwner$1 = undefined;
      this.FOnBeginUpdate = undefined;
      this.FOnEndUpdate = undefined;
      this.FOnUpdateCoordinates = undefined;
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
    this.GetBounds = function () {
      var Result = null;
      var b = $mod.TTMSFNCMapsBoundsRec.$new();
      if (!(this.FBounds != null)) this.FBounds = $mod.TTMSFNCMapsBounds.$create("Create$1");
      b.$assign($mod.CreateBounds$1(rtl.arrayRef(this.GetArray())));
      this.FBounds.FNorthEast.SetLongitude(b.NorthEast.Longitude);
      this.FBounds.FNorthEast.SetLatitude(b.NorthEast.Latitude);
      this.FBounds.FSouthWest.SetLongitude(b.SouthWest.Longitude);
      this.FBounds.FSouthWest.SetLatitude(b.SouthWest.Latitude);
      Result = this.FBounds;
      return Result;
    };
    this.GetArray = function () {
      var Result = [];
      var I = 0;
      var r = $mod.TTMSFNCMapsCoordinateRec.$new();
      Result = rtl.arraySetLength(Result,$mod.TTMSFNCMapsCoordinateRec,this.GetCount());
      for (var $l = 0, $end = this.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        r.Longitude = this.GetItem$1(I).GetLongitude();
        r.Latitude = this.GetItem$1(I).GetLatitude();
        r.Elevation = 0;
        r.TimeStamp = 0;
        r.HasElevation = false;
        r.HasTimeStamp = false;
        r.DataObject = null;
        Result[I].$assign(r);
      };
      return Result;
    };
    this.CreateItemClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCMapsCoordinateItem;
      return Result;
    };
    this.GetOwner = function () {
      var Result = null;
      Result = this.FOwner$1;
      return Result;
    };
    this.UpdateCoordinates = function () {
      if (this.FOnUpdateCoordinates != null) this.FOnUpdateCoordinates(this);
    };
    this.Create$3 = function (AOwner) {
      pas.Classes.TOwnedCollection.Create$2.call(this,AOwner,this.CreateItemClass());
      this.FOwner$1 = AOwner;
      return this;
    };
    this.Destroy = function () {
      if (this.FBounds != null) rtl.free(this,"FBounds");
      pas.Classes.TCollection.Destroy.call(this);
    };
    this.Clear$1 = function () {
      var ci = null;
      if (this.FOnBeginUpdate != null) this.FOnBeginUpdate(this);
      if (this.GetCount() > 0) {
        while (this.GetCount() > 0) {
          ci = this.GetItem$1(this.GetCount() - 1);
          ci = rtl.freeLoc(ci);
        };
      };
      if (this.FOnEndUpdate != null) this.FOnEndUpdate(this);
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
  rtl.createClass(this,"TTMSFNCMapsBasePoint",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FX = 0.0;
      this.FY = 0.0;
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetY = function (Value) {
      if (this.FY !== Value) {
        this.FY = Value;
        this.UpdatePoint();
      };
    };
    this.SetX = function (Value) {
      if (this.FX !== Value) {
        this.FX = Value;
        this.UpdatePoint();
      };
    };
    this.IsYStored = function () {
      var Result = false;
      Result = this.FY !== 0;
      return Result;
    };
    this.IsXStored = function () {
      var Result = false;
      Result = this.FX !== 0;
      return Result;
    };
    this.UpdatePoint = function () {
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.Create$1 = function () {
      this.FX = 0;
      this.FY = 0;
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCMapsBasePoint.isPrototypeOf(Source)) {
        this.FX = rtl.as(Source,$mod.TTMSFNCMapsBasePoint).FX;
        this.FY = rtl.as(Source,$mod.TTMSFNCMapsBasePoint).FY;
      };
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
  });
  rtl.createClass(this,"TTMSFNCMapsAnchorPoint",this.TTMSFNCMapsBasePoint,function () {
    var $r = this.$rtti;
    $r.addProperty("X",14,rtl.double,"FX","SetX",{stored: "IsXStored"});
    $r.addProperty("Y",14,rtl.double,"FY","SetY",{stored: "IsYStored"});
  });
  rtl.createClass(this,"TTMSFNCMapsPlusCode",pas.System.TObject,function () {
    this.SeparatorPosition = 8;
    this.SeparatorCharacter = "+";
    this.PaddingCharacter = "0";
    this.GridColumns = 4;
    this.GridRows = 5;
    this.CodeAlphaBet = ["2","3","4","5","6","7","8","9","C","F","G","H","J","M","P","Q","R","V","W","X"];
    this.EncodingBase = 20;
    this.LatitudeMax = 90;
    this.LongitudeMax = 180;
    this.GridRowsMultiplier = 3125;
    this.GridColumnsMultiplier = 1024;
    this.LatIntegerMultiplier = 25000000;
    this.LngIntegerMultiplier = 8192000;
    this.LatMspValue = 10000000000;
    this.LngMspValue = 3276800000;
    this.PairCodeLength = 10;
    this.MaxDigitCount = 15;
    this.GridCodeLength = 5;
    this.DigitValueOf = function (digit) {
      var Result = 0;
      Result = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.IndexOfTextInArray(digit,this.CodeAlphaBet);
      return Result;
    };
    var codeLength = 10;
    this.Encode = function (ACoordinate) {
      var $Self = this;
      var Result = "";
      var latDigit = 0.0;
      var lngDigit = 0.0;
      var latitude = 0.0;
      var longitude = 0.0;
      var latVal = 0.0;
      var lngVal = 0.0;
      var I = 0;
      var K = 0;
      var ndx = 0;
      var s = "";
      function ClipLatitude(ALatitude) {
        var Result = 0.0;
        Result = Math.min(Math.max(ALatitude,-$Self.LatitudeMax),$Self.LatitudeMax);
        return Result;
      };
      function NormalizeLongitude(ALongitude) {
        var Result = 0.0;
        Result = ALongitude;
        while (Result < -$Self.LongitudeMax) Result = Result + ($Self.LongitudeMax * 2);
        while (Result >= $Self.LongitudeMax) Result = Result - ($Self.LongitudeMax * 2);
        return Result;
      };
      function ComputeLatitudePrecision(ACodeLength) {
        var Result = 0.0;
        if (ACodeLength <= 10) {
          Result = Math.pow($Self.EncodingBase,(ACodeLength / -2) + 2);
          return Result;
        };
        Result = Math.pow($Self.EncodingBase,-2) / Math.pow($Self.GridRows,ACodeLength - $Self.PairCodeLength);
        return Result;
      };
      function FModEx(ANumerator, ADenominator) {
        var Result = 0.0;
        Result = ANumerator - (pas.System.Trunc(ANumerator / ADenominator) * ADenominator);
        return Result;
      };
      Result = "";
      latitude = ClipLatitude(ACoordinate.Latitude);
      longitude = NormalizeLongitude(ACoordinate.Longitude);
      if (pas.System.Int(latitude) === this.LatitudeMax) latitude = latitude - (0.9 * ComputeLatitudePrecision(codeLength));
      latVal = Math.round((latitude + this.LatitudeMax) * this.LatIntegerMultiplier * 1E6) / 1E6;
      lngVal = Math.round((longitude + this.LongitudeMax) * this.LngIntegerMultiplier * 1E6) / 1E6;
      if (codeLength > this.PairCodeLength) {
        for (var $l = 0, $end = this.GridCodeLength - 1; $l <= $end; $l++) {
          I = $l;
          latDigit = FModEx(latVal,this.GridRows);
          lngDigit = FModEx(lngVal,this.GridColumns);
          ndx = Math.round(pas.System.Int((latDigit * this.GridColumns) + lngDigit));
          s = this.CodeAlphaBet[ndx] + s;
          latVal = latVal / this.GridRows;
          lngVal = lngVal / this.GridColumns;
        };
      } else {
        latVal = latVal / this.GridRowsMultiplier;
        lngVal = lngVal / this.GridColumnsMultiplier;
      };
      for (var $l1 = 0, $end1 = rtl.trunc(this.PairCodeLength / 2) - 1; $l1 <= $end1; $l1++) {
        I = $l1;
        s = this.CodeAlphaBet[Math.round(pas.System.Int(FModEx(lngVal,this.EncodingBase)))] + s;
        s = this.CodeAlphaBet[Math.round(pas.System.Int(FModEx(latVal,this.EncodingBase)))] + s;
        latVal = latVal / this.EncodingBase;
        lngVal = lngVal / this.EncodingBase;
      };
      s = pas.System.Copy(s,0,this.SeparatorPosition) + this.SeparatorCharacter + pas.System.Copy(s,this.SeparatorPosition + 1,s.length - this.SeparatorPosition);
      if (codeLength >= this.SeparatorPosition) {
        Result = pas.System.Copy(s,0,codeLength + 1);
        return Result;
      };
      Result = pas.System.Copy(s,0,codeLength);
      for (var $l2 = 0, $end2 = this.SeparatorPosition - codeLength - 1; $l2 <= $end2; $l2++) {
        K = $l2;
        Result = Result + this.PaddingCharacter;
      };
      Result = Result + this.SeparatorCharacter;
      return Result;
    };
    this.Decode = function (APlusCode) {
      var $Self = this;
      var Result = $mod.TTMSFNCMapsBoundsRec.$new();
      var latVal = 0;
      var lngVal = 0;
      var latPlaceVal = 0;
      var lngPlaceVal = 0;
      var pairPartLength = 0;
      var codeLength = 0;
      var I = 0;
      var digit = 0;
      var row = 0;
      var col = 0;
      function NormalizeCode(ACode) {
        var Result = "";
        var K = 0;
        Result = ACode;
        if (ACode.length < $Self.SeparatorPosition) {
          Result = ACode;
          for (var $l = 0, $end = $Self.SeparatorPosition - ACode.length - 1; $l <= $end; $l++) {
            K = $l;
            Result = Result + $Self.PaddingCharacter;
          };
          Result = Result + $Self.SeparatorCharacter;
        } else if (ACode.length === $Self.SeparatorPosition) {
          Result = ACode + $Self.SeparatorCharacter}
         else if (ACode.charAt(($Self.SeparatorPosition + 1) - 1) !== $Self.SeparatorCharacter) Result = pas.System.Copy(ACode,0,$Self.SeparatorPosition) + $Self.SeparatorCharacter + pas.System.Copy(ACode,$Self.SeparatorPosition + 1,ACode.length - $Self.SeparatorPosition);
        return Result;
      };
      APlusCode = NormalizeCode(pas.SysUtils.UpperCase(APlusCode));
      APlusCode = pas.SysUtils.StringReplace(APlusCode,this.SeparatorCharacter,"",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
      APlusCode = pas.SysUtils.StringReplace(APlusCode,this.PaddingCharacter,"",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
      latVal = -this.LatitudeMax * this.LatIntegerMultiplier;
      lngVal = -this.LongitudeMax * this.LngIntegerMultiplier;
      latPlaceVal = this.LatMspValue;
      lngPlaceVal = this.LngMspValue;
      pairPartLength = Math.min(APlusCode.length,this.PairCodeLength);
      codeLength = Math.min(APlusCode.length,this.MaxDigitCount);
      I = 0;
      while (I < pairPartLength) {
        latPlaceVal = rtl.trunc(latPlaceVal / this.EncodingBase);
        lngPlaceVal = rtl.trunc(lngPlaceVal / this.EncodingBase);
        latVal = latVal + (this.DigitValueOf(APlusCode.charAt((I + 1) - 1)) * latPlaceVal);
        lngVal = lngVal + (this.DigitValueOf(APlusCode.charAt((I + 1 + 1) - 1)) * lngPlaceVal);
        I += 2;
      };
      I = this.PairCodeLength;
      while (I < codeLength) {
        latPlaceVal = rtl.trunc(latPlaceVal / this.GridRows);
        lngPlaceVal = rtl.trunc(lngPlaceVal / this.GridColumns);
        digit = this.DigitValueOf(APlusCode.charAt((I + 1) - 1));
        row = rtl.trunc(digit / this.GridColumns);
        col = digit % this.GridColumns;
        latVal = latVal + (row * latPlaceVal);
        lngVal = lngVal + (col * lngPlaceVal);
        I += 1;
      };
      Result.$assign($mod.CreateBounds$4((latVal + latPlaceVal) / this.LatIntegerMultiplier,(lngVal + lngPlaceVal) / this.LngIntegerMultiplier,latVal / this.LatIntegerMultiplier,lngVal / this.LngIntegerMultiplier));
      return Result;
    };
    var $r = this.$rtti;
    $mod.$rtti.$StaticArray("TTMSFNCMapsPlusCode.CodeAlphaBet$a",{dims: [20], eltype: rtl.string});
  });
  this.StrToFloatDot = function (AValue) {
    var Result = 0.0;
    var d = "";
    var t = "";
    t = pas.SysUtils.FormatSettings.ThousandSeparator;
    d = pas.SysUtils.FormatSettings.DecimalSeparator;
    pas.SysUtils.FormatSettings.DecimalSeparator = ".";
    pas.SysUtils.FormatSettings.ThousandSeparator = ",";
    Result = pas.SysUtils.StrToFloat(AValue);
    pas.SysUtils.FormatSettings.ThousandSeparator = t;
    pas.SysUtils.FormatSettings.DecimalSeparator = d;
    return Result;
  };
  this.FloatToStrDot = function (AValue) {
    var Result = "";
    var d = "";
    var t = "";
    t = pas.SysUtils.FormatSettings.ThousandSeparator;
    d = pas.SysUtils.FormatSettings.DecimalSeparator;
    pas.SysUtils.FormatSettings.DecimalSeparator = ".";
    pas.SysUtils.FormatSettings.ThousandSeparator = ",";
    Result = pas.SysUtils.FloatToStr(AValue);
    pas.SysUtils.FormatSettings.ThousandSeparator = t;
    pas.SysUtils.FormatSettings.DecimalSeparator = d;
    return Result;
  };
  this.TryStrToFloatDot = function (AValue, AResult) {
    var Result = false;
    var d = "";
    var t = "";
    t = pas.SysUtils.FormatSettings.ThousandSeparator;
    d = pas.SysUtils.FormatSettings.DecimalSeparator;
    pas.SysUtils.FormatSettings.DecimalSeparator = ".";
    pas.SysUtils.FormatSettings.ThousandSeparator = ",";
    Result = pas.SysUtils.TryStrToFloat$2(AValue,AResult);
    pas.SysUtils.FormatSettings.ThousandSeparator = t;
    pas.SysUtils.FormatSettings.DecimalSeparator = d;
    return Result;
  };
  this.CenterCoordinate = function () {
    var Result = $mod.TTMSFNCMapsCoordinateRec.$new();
    Result.Latitude = 0;
    Result.Longitude = 0;
    Result.Elevation = 0;
    Result.TimeStamp = 0;
    Result.HasElevation = false;
    Result.HasTimeStamp = false;
    Result.DataObject = null;
    return Result;
  };
  this.DefaultCoordinate = function () {
    var Result = $mod.TTMSFNCMapsCoordinateRec.$new();
    Result.Latitude = 40.689247;
    Result.Longitude = -74.044502;
    Result.Elevation = 0;
    Result.TimeStamp = 0;
    Result.HasElevation = false;
    Result.HasTimeStamp = false;
    Result.DataObject = null;
    return Result;
  };
  this.EmptyCoordinate = function () {
    var Result = $mod.TTMSFNCMapsCoordinateRec.$new();
    Result.Latitude = 0;
    Result.Longitude = 0;
    Result.Elevation = 0;
    Result.TimeStamp = 0;
    Result.HasElevation = false;
    Result.HasTimeStamp = false;
    Result.DataObject = null;
    return Result;
  };
  this.CreateCoordinate = function (ALatitude, ALongitude) {
    var Result = $mod.TTMSFNCMapsCoordinateRec.$new();
    Result.Latitude = ALatitude;
    Result.Longitude = ALongitude;
    Result.Elevation = 0;
    Result.TimeStamp = 0;
    Result.HasElevation = false;
    Result.HasTimeStamp = false;
    Result.DataObject = null;
    return Result;
  };
  this.CreateBounds = function (ACoordinate1, ACoordinate2) {
    var Result = $mod.TTMSFNCMapsBoundsRec.$new();
    var arr = [];
    arr = rtl.arraySetLength(arr,$mod.TTMSFNCMapsCoordinateRec,2);
    arr[0].$assign(ACoordinate1);
    arr[1].$assign(ACoordinate2);
    Result.$assign($mod.CreateBounds$1(rtl.arrayRef(arr)));
    return Result;
  };
  this.CreateBounds$1 = function (ACoordinates) {
    var Result = $mod.TTMSFNCMapsBoundsRec.$new();
    var arr = [];
    var arrc = [];
    arrc = rtl.arraySetLength(arrc,[],1);
    arrc[0] = rtl.arrayRef(ACoordinates);
    arr = rtl.arraySetLength(arr,[],1);
    arr[0] = rtl.arrayRef(arrc);
    Result.$assign($mod.CreateBounds$3(rtl.arrayRef(arr)));
    return Result;
  };
  this.CreateBounds$2 = function (ACoordinatesArray) {
    var Result = $mod.TTMSFNCMapsBoundsRec.$new();
    var arr = [];
    arr = rtl.arraySetLength(arr,[],1);
    arr[0] = rtl.arrayRef(ACoordinatesArray);
    Result.$assign($mod.CreateBounds$3(rtl.arrayRef(arr)));
    return Result;
  };
  this.CreateBounds$3 = function (ACoordinatesArrayArray) {
    var Result = $mod.TTMSFNCMapsBoundsRec.$new();
    var maxlat = 0.0;
    var minlat = 0.0;
    var maxlon = 0.0;
    var minlon = 0.0;
    var i = 0;
    var j = 0;
    var k = 0;
    maxlon = -180;
    maxlat = -90;
    minlon = 180;
    minlat = 90;
    for (var $l = 0, $end = rtl.length(ACoordinatesArrayArray) - 1; $l <= $end; $l++) {
      i = $l;
      for (var $l1 = 0, $end1 = rtl.length(ACoordinatesArrayArray[i]) - 1; $l1 <= $end1; $l1++) {
        j = $l1;
        for (var $l2 = 0, $end2 = rtl.length(ACoordinatesArrayArray[i][j]) - 1; $l2 <= $end2; $l2++) {
          k = $l2;
          if (ACoordinatesArrayArray[i][j][k].Longitude < minlon) minlon = ACoordinatesArrayArray[i][j][k].Longitude;
          if (ACoordinatesArrayArray[i][j][k].Latitude < minlat) minlat = ACoordinatesArrayArray[i][j][k].Latitude;
          if (ACoordinatesArrayArray[i][j][k].Longitude > maxlon) maxlon = ACoordinatesArrayArray[i][j][k].Longitude;
          if (ACoordinatesArrayArray[i][j][k].Latitude > maxlat) maxlat = ACoordinatesArrayArray[i][j][k].Latitude;
        };
      };
    };
    if (maxlon === -180) maxlon = 180;
    if (maxlat === -90) maxlat = 90;
    if (minlon === 180) minlon = -180;
    if (minlat === 90) minlat = -90;
    Result.NorthEast.Latitude = maxlat;
    Result.NorthEast.Longitude = maxlon;
    Result.SouthWest.Latitude = minlat;
    Result.SouthWest.Longitude = minlon;
    return Result;
  };
  this.CreateBounds$4 = function (ANorthLatitude, AEastLongitude, ASouthLatitude, AWestLongitude) {
    var Result = $mod.TTMSFNCMapsBoundsRec.$new();
    Result.NorthEast.$assign($mod.CreateCoordinate(ANorthLatitude,AEastLongitude));
    Result.SouthWest.$assign($mod.CreateCoordinate(ASouthLatitude,AWestLongitude));
    return Result;
  };
  var stp = 100;
  this.CreateCircle = function (ACenter, ARadius) {
    var Result = [];
    var I = 0;
    for (I = 0; I <= 100; I++) {
      Result = rtl.arraySetLength(Result,$mod.TTMSFNCMapsCoordinateRec,rtl.length(Result) + 1);
      Result[rtl.length(Result) - 1].$assign($mod.CalculateCoordinate($mod.TTMSFNCMapsCoordinateRec.$clone(ACenter),(I * -360) / 100,ARadius));
    };
    return Result;
  };
  this.BoundsCenter = function (ABounds) {
    var Result = $mod.TTMSFNCMapsCoordinateRec.$new();
    Result.Longitude = (ABounds.SouthWest.Longitude + ABounds.NorthEast.Longitude) / 2;
    Result.Latitude = (ABounds.SouthWest.Latitude + ABounds.NorthEast.Latitude) / 2;
    return Result;
  };
  this.BoundsRectangle = function (ABounds) {
    var Result = [];
    Result = rtl.arraySetLength(Result,$mod.TTMSFNCMapsCoordinateRec,5);
    Result[0].$assign($mod.CreateCoordinate(ABounds.NorthEast.Latitude,ABounds.SouthWest.Longitude));
    Result[1].$assign(ABounds.NorthEast);
    Result[2].$assign($mod.CreateCoordinate(ABounds.SouthWest.Latitude,ABounds.NorthEast.Longitude));
    Result[3].$assign(ABounds.SouthWest);
    Result[4].$assign(Result[0]);
    return Result;
  };
  this.MeasureDistance = function (ACoordinate1, ACoordinate2) {
    var Result = 0.0;
    var r = 0.0;
    var a1 = 0.0;
    var a2 = 0.0;
    var d1 = 0.0;
    var d2 = 0.0;
    var a = 0.0;
    var c = 0.0;
    r = 6378137;
    a1 = pas.Math.DegToRad(ACoordinate1.Latitude);
    a2 = pas.Math.DegToRad(ACoordinate2.Latitude);
    d1 = pas.Math.DegToRad(ACoordinate2.Latitude - ACoordinate1.Latitude);
    d2 = pas.Math.DegToRad(ACoordinate2.Longitude - ACoordinate1.Longitude);
    a = (Math.sin(d1 / 2) * Math.sin(d1 / 2)) + (Math.cos(a1) * Math.cos(a2) * Math.sin(d2 / 2) * Math.sin(d2 / 2));
    c = 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1 - a));
    Result = r * c;
    return Result;
  };
  this.MeasureArea = function (ACoordinatesArray) {
    var Result = 0.0;
    var i = 0;
    var pointsCount = 0;
    var area = 0.0;
    var d2r = 0.0;
    var radius = 0.0;
    var p1 = $mod.TTMSFNCMapsCoordinateRec.$new();
    var p2 = $mod.TTMSFNCMapsCoordinateRec.$new();
    pointsCount = rtl.length(ACoordinatesArray);
    area = 0;
    d2r = Math.PI / 180;
    radius = 6378137;
    if (pointsCount <= 2) {
      area = 0;
    } else {
      for (var $l = 0, $end = pointsCount - 1; $l <= $end; $l++) {
        i = $l;
        p1.$assign(ACoordinatesArray[i]);
        p2.$assign(ACoordinatesArray[(i + 1) % pointsCount]);
        area = area + ((p2.Longitude - p1.Longitude) * d2r * (2 + Math.sin(p1.Latitude * d2r) + Math.sin(p2.Latitude * d2r)));
      };
      area = (area * radius * radius) / 2.0;
      area = Math.abs(area);
    };
    Result = area;
    return Result;
  };
  this.IsPointInArea = function (ALatitude, ALongitude, ACoordinatesArray) {
    var Result = false;
    var i = 0;
    var j = 0;
    var pointsCount = 0;
    var x = 0.0;
    var xi = 0.0;
    var xj = 0.0;
    var y = 0.0;
    var yi = 0.0;
    var yj = 0.0;
    pointsCount = rtl.length(ACoordinatesArray);
    Result = false;
    x = ALatitude;
    y = ALongitude;
    j = pointsCount - 1;
    for (var $l = 0, $end = pointsCount - 1; $l <= $end; $l++) {
      i = $l;
      xi = ACoordinatesArray[i].Latitude;
      yi = ACoordinatesArray[i].Longitude;
      xj = ACoordinatesArray[j].Latitude;
      yj = ACoordinatesArray[j].Longitude;
      if ((((yi < y) && (yj >= y)) || ((yj < y) && (yi >= y))) && ((xi <= x) || (xj <= x))) {
        Result = Result ^ ((xi + (((y - yi) * (xj - xi)) / (yj - yi))) < x);
      };
      j = i;
    };
    return Result;
  };
  this.CalculateCoordinate = function (ACoordinate, ABearing, ADistance) {
    var Result = $mod.TTMSFNCMapsCoordinateRec.$new();
    var a = 0.0;
    var ad = 0.0;
    var r = 0.0;
    var a1 = 0.0;
    var sina2 = 0.0;
    var a2 = 0.0;
    var y = 0.0;
    var x = 0.0;
    var d1 = 0.0;
    var d2 = 0.0;
    r = 6378137;
    a = ADistance / r;
    ad = pas.Math.DegToRad(ABearing);
    a1 = pas.Math.DegToRad(ACoordinate.Latitude);
    d1 = pas.Math.DegToRad(ACoordinate.Longitude);
    sina2 = (Math.sin(a1) * Math.cos(a)) + (Math.cos(a1) * Math.sin(a) * Math.cos(ad));
    a2 = Math.asin(sina2);
    y = Math.sin(ad) * Math.sin(a) * Math.cos(a1);
    x = Math.cos(a) - (Math.sin(a1) * sina2);
    d2 = d1 + Math.atan2(y,x);
    Result.Latitude = pas.Math.RadToDeg(a2);
    Result.Longitude = pas.Math.RadToDeg(d2);
    return Result;
  };
  this.CalculateBearing = function (ACoordinate1, ACoordinate2) {
    var Result = 0.0;
    var a1 = 0.0;
    var a2 = 0.0;
    var d1 = 0.0;
    var x = 0.0;
    var y = 0.0;
    var a = 0.0;
    a1 = pas.Math.DegToRad(ACoordinate1.Latitude);
    a2 = pas.Math.DegToRad(ACoordinate2.Latitude);
    d1 = pas.Math.DegToRad(ACoordinate2.Longitude - ACoordinate1.Longitude);
    x = (Math.cos(a1) * Math.sin(a2)) - (Math.sin(a1) * Math.cos(a2) * Math.cos(d1));
    y = Math.sin(d1) * Math.cos(a2);
    a = Math.atan2(y,x);
    Result = pas.Math.RadToDeg(a);
    return Result;
  };
  this.ParseLocale = function (ALocale, AMode) {
    var Result = "";
    var s = "";
    var sl = null;
    Result = ALocale;
    var $tmp = AMode;
    if (($tmp === $mod.TTMSFNCMapsLocaleMode.mlmCountry) || ($tmp === $mod.TTMSFNCMapsLocaleMode.mlmLanguage)) {
      s = Result;
      sl = pas.Classes.TStringList.$create("Create$1");
      try {
        pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.Split("-",s,sl,false);
        if (sl.GetCount() >= 2) {
          var $tmp1 = AMode;
          if ($tmp1 === $mod.TTMSFNCMapsLocaleMode.mlmCountry) {
            Result = sl.Get(0)}
           else if ($tmp1 === $mod.TTMSFNCMapsLocaleMode.mlmLanguage) Result = sl.Get(1);
        };
      } finally {
        sl = rtl.freeLoc(sl);
      };
    };
    return Result;
  };
  this.LoadResourceFile = function (AResName) {
    var Result = "";
    Result = "";
    return Result;
  };
  this.DefaultGPXMetaData = function () {
    var Result = $mod.TTMSFNCMapsGPXMetaData.$new();
    Result.$assign($mod.CreateGPXMetaData("TMS","http://www.tmssoftware.com","MyTrack","Track"));
    return Result;
  };
  this.CreateGPXMetaData = function (AAuthorName, AAuthorLink, ATrackName, ATrackType) {
    var Result = $mod.TTMSFNCMapsGPXMetaData.$new();
    var md = $mod.TTMSFNCMapsGPXMetaData.$new();
    md.AuthorName = AAuthorName;
    md.AuthorLink = AAuthorLink;
    md.TrackName = ATrackName;
    md.TrackType = ATrackType;
    return Result;
  };
  this.SaveToGPX = function (ACoordinates, AMetaData, IncludeElevation, IncludeTimeStamp, AInstructions) {
    var Result = "";
    var Segments = [];
    var Instructions = null;
    Segments = rtl.arraySetLength(Segments,[],1);
    Segments[0] = rtl.arrayRef(ACoordinates);
    Instructions = pas.Classes.TStringList.$create("Create$1");
    Instructions.Add(AInstructions);
    Result = $mod.SaveToGPX$1(rtl.arrayRef(Segments),$mod.TTMSFNCMapsGPXMetaData.$clone(AMetaData),IncludeElevation,IncludeTimeStamp,Instructions);
    Instructions = rtl.freeLoc(Instructions);
    return Result;
  };
  var LB = "\r";
  this.SaveToGPX$1 = function (ASegments, AMetaData, IncludeElevation, IncludeTimeStamp, AInstructions) {
    var Result = "";
    var i = 0;
    var j = 0;
    var hdr = "";
    var ftr = "";
    var sl = null;
    var d = "";
    var t = "";
    var ACoordinates = [];
    hdr = '<?xml version="1.0"?>' + LB + '<gpx xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' + LB + 'xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd" version="1.1" creator="TMS FNC Maps" xmlns="http://www.topografix.com/GPX/1/1">' + LB + "<metadata>" + LB + "<author>" + LB + "<name>%s</name>" + LB + '<link href="%s" />' + LB + "</author>" + LB + "</metadata>" + LB + "<trk>" + LB + "<name>%s</name>" + LB + "<type>%s</type>";
    ftr = "</trk>" + LB + "</gpx>";
    hdr = pas.SysUtils.Format(hdr,pas.System.VarRecs(18,AMetaData.AuthorName,18,AMetaData.AuthorLink,18,AMetaData.TrackName,18,AMetaData.TrackType));
    t = pas.SysUtils.FormatSettings.ThousandSeparator;
    d = pas.SysUtils.FormatSettings.DecimalSeparator;
    pas.SysUtils.FormatSettings.DecimalSeparator = ".";
    pas.SysUtils.FormatSettings.ThousandSeparator = ",";
    sl = pas.Classes.TStringList.$create("Create$1");
    try {
      sl.Add(hdr);
      for (var $l = 0, $end = rtl.length(ASegments) - 1; $l <= $end; $l++) {
        i = $l;
        ACoordinates = rtl.arrayRef(ASegments[i]);
        sl.Add("<trkseg>");
        if ((AInstructions != null) && (AInstructions.GetCount() > i)) {
          sl.Add(pas.SysUtils.Format("<extensions>" + LB + "<instructions>%s</instructions>" + LB + "</extensions>",pas.System.VarRecs(18,AInstructions.Get(i))));
        };
        for (var $l1 = 0, $end1 = rtl.length(ACoordinates) - 1; $l1 <= $end1; $l1++) {
          j = $l1;
          sl.Add(pas.SysUtils.Format('<trkpt lat="%.7f" lon="%.7f">',pas.System.VarRecs(3,ACoordinates[j].Latitude,3,ACoordinates[j].Longitude)));
          if (IncludeElevation && ACoordinates[j].HasElevation) {
            sl.Add(pas.SysUtils.Format("<ele>%.7f</ele>",pas.System.VarRecs(3,ACoordinates[j].Elevation)));
          };
          if (IncludeTimeStamp && ACoordinates[j].HasTimeStamp) {
            sl.Add(pas.SysUtils.Format("<time>%s</time>",pas.System.VarRecs(18,pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.DateTimeToISO(ACoordinates[j].TimeStamp,true,true))));
          };
          sl.Add("</trkpt>");
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
  $mod.$implcode = function () {
    $impl.EarthRadius = 6378137;
  };
},["WEBLib.TMSFNCUtils","SysUtils","Math"]);
//# sourceMappingURL=WEBLib.TMSFNCMapsCommonTypes.js.map
