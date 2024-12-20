rtl.module("WEBLib.TMSFNCMaps",["System","Classes","Types","DateUtils","WEBLib.Forms","Web","contnrs","WEBLib.Controls","WEBLib.JSON","WEBLib.TMSFNCRouteCalculator","WEBLib.TMSFNCMapsCommonTypes","WEBLib.TMSFNCTypes","WEBLib.TMSFNCJSONReader","WEBLib.TMSFNCGraphicsTypes","WEBLib.TMSFNCWebBrowser"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.TTMSFNCMapsDocURL = pas["WEBLib.TMSFNCTypes"].TTMSFNCBaseDocURL + "tmsfncmaps/";
  this.TTMSFNCMapsTipsURL = "https://www.tmssoftware.com/site/tmsfncmaps.asp?s=faq";
  this.MAJ_VER = 2;
  this.MIN_VER = 6;
  this.REL_VER = 1;
  this.BLD_VER = 0;
  this.LB = "\r";
  this.STARTHTMLTAG = "<html>";
  this.STARTHEADTAG = "<head>";
  this.STARTBODYTAG = "<body>";
  this.STARTTITLETAG = "<title>";
  this.STARTSCRIPTTAG = "<script>";
  this.STARTSTYLETAG = "<style>";
  this.ENDHTMLTAG = "</html>";
  this.ENDHEADTAG = "</head>";
  this.ENDBODYTAG = "</body>";
  this.ENDTITLETAG = "</title>";
  this.ENDSCRIPTTAG = "</script>";
  this.ENDSTYLETAG = "</style>";
  this.MAPID = "mapContainer";
  this.MARKERVAR = "marker";
  this.ELEMENTCONTAINERVAR = "elementContainer";
  this.POPUPVAR = "popup";
  this.POLYELEMENTVAR = "polyelement";
  this.MAPVAR = "map";
  this.MAPOPTIONS = "mapoptions";
  this.MAPBOUNDS = "mapbounds";
  this.MAPCOMPONENT = "mapcomponent";
  this.PARAMSNAME = "params";
  this.MARKERARRAYVAR = "markerarray";
  this.ELEMENTCONTAINERARRAYVAR = "elementContainerArray";
  this.POPUPARRAYVAR = "popuparray";
  this.GETMARKERARRAYVAR = "get" + this.MARKERARRAYVAR + "()";
  this.GETELEMENTCONTAINERARRAYVAR = "get" + this.ELEMENTCONTAINERARRAYVAR + "()";
  this.GETSENDEVENT = "sendEvent";
  this.GETFOCUSMAP = "focusMap";
  this.POLYELEMENTARRAYVAR = "polyelementarray";
  this.COORDINATEARRAYVAR = "coordinatearray";
  this.HOLEARRAYVAR = "holearray";
  this.GETPOLYELEMENTARRAYVAR = "get" + this.POLYELEMENTARRAYVAR + "()";
  this.GETPOPUPARRAYVAR = "get" + this.POPUPARRAYVAR + "()";
  this.DEFAULT_ZOOMLEVEL = 12;
  this.DEFAULT_MARKERTEXT = "Sample Marker";
  this.SHOWPOPUPFUNCTION = "showPopup";
  this.CLOSEPOPUPFUNCTION = "closePopup";
  this.ADDORUPDATEMARKERFUNCTION = "addOrUpdateMarker";
  this.DELETEMARKERFUNCTION = "deleteMarker";
  this.ADDORUPDATEELEMENTCONTAINERFUNCTION = "addOrUpdateElementContainer";
  this.DELETEELEMENTCONTAINERFUNCTION = "deleteElementContainer";
  this.ADDORUPDATEPOLYELEMENTFUNCTION = "addOrUpdatePolyElement";
  this.INITIALIZECOORDINATEARRAY = "initializeCoordinateArray";
  this.INITIALIZEHOLESARRAY = "initializeHolesArray";
  this.ADDCOORDINATETOARRAY = "addCoordinateToArray";
  this.ADDHOLETOARRAY = "addHoleToArray";
  this.ADDCOORDINATESTOARRAY = "addCoordinatesToArray";
  this.ADDHOLESTOARRAY = "addHolesToArray";
  this.DELETEPOLYELEMENTFUNCTION = "deletePolyElement";
  this.ZOOMTOBOUNDSFUNCTION = "zoomToBounds";
  this.SETCENTERCOORDINATEFUNCTION = "setCenterCoordinate";
  this.GETCENTERCOORDINATEFUNCTION = "getCenterCoordinate";
  this.GETLATLONTOXYFUNCTION = "getLatLonToXY";
  this.GETXYTOLATLONFUNCTION = "getXYToLatLon";
  this.GETBOUNDSFUNCTION = "getBounds";
  this.SETZOOMLEVELFUNCTION = "setZoomLevel";
  this.GETZOOMLEVELFUNCTION = "getZoomLevel";
  this.UPDATEOPTIONSFUNCTION = "updateOptions";
  this.DEBUGCONSOLELINK = "https://download.tmssoftware.com/webgmaps/firebug/firebug-lite.js#startOpened";
  this.ROUTECALCULATORROUTE = "#TTMSFNCMapsRouteCalculatorRoute";
  this.ROUTECALCULATORSEGMENT = "#TTMSFNCMapsRouteCalculatorSegment";
  this.ROUTECALCULATORMARKER = "#TTMSFNCRouteCalculatorMarker";
  this.ROUTECALCULATORSTARTMARKER = "#TTMSFNCRouteCalculatorStartMarker";
  this.ROUTECALCULATORENDMARKER = "#TTMSFNCRouteCalculatorEndMarker";
  this.ROUTECALCULATORDRAGMARKER = "#TMSFNCRouteCalculatorDragMarker";
  this.ACTIONCLICKEVENT = "ActionClick";
  this.ACTIONDBLCLICKEVENT = "ActionDblClick";
  this.ACTIONKEYPRESSEVENT = "ActionKeyPress";
  this.ACTIONKEYDOWNEVENT = "ActionKeyDown";
  this.ACTIONKEYUPEVENT = "ActionKeyUp";
  this.ACTIONMOUSEDOWNEVENT = "ActionMouseDown";
  this.ACTIONMOUSEMOVEEVENT = "ActionMouseMove";
  this.ACTIONMOUSEUPEVENT = "ActionMouseUp";
  this.ACTIONMOUSEENTEREVENT = "ActionMouseEnter";
  this.ACTIONMOUSELEAVEEVENT = "ActionMouseLeave";
  this.ACTIONBLUREVENT = "ActionBlur";
  this.ACTIONFOCUSEVENT = "ActionFocus";
  this.ACTIONCHANGEEVENT = "ActionChange";
  this.ACTIONSELECTEVENT = "ActionSelect";
  this.ACTIONCUSTOMEVENT = "ActionCustomEvent";
  this.$rtti.$Class("TTMSFNCCustomMaps");
  rtl.createInterface(this,"ITMSFNCCustomMapsProperties","{A081EF51-171D-4C04-9F2C-28A4EBE9E1DE}",["GetDefaultLatitude","GetDefaultLongitude","GetDefaultZoomLevel","GetAPIKey","GetLocale","GetShowZoomControl","GetZoomOnDblClick","GetPanning","GetMapID","GetAPIVersion","GetHeading","GetTilt","GetZoomOnWheelScroll","GetShowMapTypeControl","GetBackgroundColor"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetDefaultLatitude",1,[],rtl.string);
    $r.addMethod("GetDefaultLongitude",1,[],rtl.string);
    $r.addMethod("GetDefaultZoomLevel",1,[],rtl.string);
    $r.addMethod("GetAPIKey",1,[],rtl.string);
    $r.addMethod("GetLocale",1,[["AMode",pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsLocaleMode"]]],rtl.string);
    $r.addMethod("GetShowZoomControl",1,[],rtl.boolean);
    $r.addMethod("GetZoomOnDblClick",1,[],rtl.boolean);
    $r.addMethod("GetPanning",1,[],rtl.boolean);
    $r.addMethod("GetMapID",1,[],rtl.string);
    $r.addMethod("GetAPIVersion",1,[],rtl.string);
    $r.addMethod("GetHeading",1,[],rtl.double);
    $r.addMethod("GetTilt",1,[],rtl.double);
    $r.addMethod("GetZoomOnWheelScroll",1,[],rtl.boolean);
    $r.addMethod("GetShowMapTypeControl",1,[],rtl.boolean);
    $r.addMethod("GetBackgroundColor",1,[],pas["WEBLib.Graphics"].$rtti["TColor"]);
  });
  rtl.createInterface(this,"ITMSFNCCustomMapsInstance","{419FAD22-8164-47EB-8CFE-C60BBFF57751}",["SetMapsProperties"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("SetMapsProperties",0,[["Value",$mod.$rtti["ITMSFNCCustomMapsProperties"],2]]);
  });
  this.TTMSFNCMapsLinkKind = {"0": "mlkLink", mlkLink: 0, "1": "mlkScript", mlkScript: 1, "2": "mlkStyle", mlkStyle: 2};
  this.$rtti.$Enum("TTMSFNCMapsLinkKind",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TTMSFNCMapsLinkKind});
  rtl.createClass(this,"TTMSFNCMapsLink",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FCharSet = "";
      this.FType = "";
      this.FURL = "";
      this.FContent = "";
      this.FDefer = false;
      this.FAsync = false;
      this.FRel = "";
      this.FKind = 0;
    };
    this.CreateScript = function (AURL, AType, ACharSet, AContent, ADefer, AAsync) {
      this.Create$1($mod.TTMSFNCMapsLinkKind.mlkScript,AURL,AType,ACharSet,"",AContent,ADefer,AAsync);
      return this;
    };
    this.CreateLink = function (AURL, AType, ARel) {
      this.Create$1($mod.TTMSFNCMapsLinkKind.mlkLink,AURL,AType,"",ARel,"",false,false);
      return this;
    };
    this.Create$1 = function (AKind, AURL, AType, ACharSet, ARel, AContent, ADefer, AAsync) {
      this.FKind = AKind;
      this.FURL = AURL;
      this.FType = AType;
      this.FCharSet = ACharSet;
      this.FDefer = ADefer;
      this.FRel = ARel;
      this.FAsync = AAsync;
      this.FContent = AContent;
      return this;
    };
  });
  rtl.createClass(this,"TTMSFNCMapsLinksList",pas.contnrs.TObjectList,function () {
    this.GetItem$1 = function (Index) {
      var Result = null;
      Result = this.GetItem(Index);
      return Result;
    };
    this.SetItem$1 = function (Index, Value) {
      this.SetItem(Index,Value);
    };
  });
  this.TTMSFNCMapsLibraryLocation = {"0": "llOffline", llOffline: 0, "1": "llOnline", llOnline: 1};
  this.$rtti.$Enum("TTMSFNCMapsLibraryLocation",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TTMSFNCMapsLibraryLocation});
  this.TTMSFNCMapsService = {"0": "msGoogleMaps", msGoogleMaps: 0, "1": "msHere", msHere: 1, "2": "msAzureMaps", msAzureMaps: 2, "3": "msBingMaps", msBingMaps: 3, "4": "msTomTom", msTomTom: 4, "5": "msMapBox", msMapBox: 5, "6": "msOpenLayers", msOpenLayers: 6, "7": "msMapKit", msMapKit: 7, "8": "msLeaflet", msLeaflet: 8};
  this.$rtti.$Enum("TTMSFNCMapsService",{minvalue: 0, maxvalue: 8, ordtype: 1, enumtype: this.TTMSFNCMapsService});
  rtl.createInterface(this,"ITMSFNCCustomMaps","{B305522A-852B-4A51-B9C0-C9D91B9A8C8B}",["GetHeadLinks","RemoveScripts","GetResetMap","GetHeadStyle","GetDelayLoadEvent","GetIdentifier","GetMapsServiceCheck","GetInitializeMap","GetInitializeEvents","GetAddOrUpdateMarker","GetShowPopup","GetClosePopup","GetDeleteMarker","GetAddOrUpdatePolyElement","GetDeletePolyElement","GetZoomToBounds","GetSetCenterCoordinate","GetGetCenterCoordinate","GetLatLonToXY","GetXYToLatLon","GetGetBounds","GetGetZoomLevel","GetSetZoomLevel","GetUpdateOptions","GetGlobalVariables","GetAddCoordinateToArray","GetAddHoleToArray","GetInitializeCoordinateArray","GetInitializeHolesArray","IsValid","DestroyMaps"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetHeadLinks",0,[["AList",$mod.$rtti["TTMSFNCMapsLinksList"],2]]);
    $r.addMethod("RemoveScripts",0,[]);
    $r.addMethod("GetResetMap",1,[],rtl.string);
    $r.addMethod("GetHeadStyle",1,[],rtl.string);
    $r.addMethod("GetDelayLoadEvent",1,[],rtl.string);
    $r.addMethod("GetIdentifier",1,[],rtl.string);
    $r.addMethod("GetMapsServiceCheck",1,[],rtl.string);
    $r.addMethod("GetInitializeMap",1,[],rtl.string);
    $r.addMethod("GetInitializeEvents",1,[],rtl.string);
    $r.addMethod("GetAddOrUpdateMarker",1,[],rtl.string);
    $r.addMethod("GetShowPopup",1,[],rtl.string);
    $r.addMethod("GetClosePopup",1,[],rtl.string);
    $r.addMethod("GetDeleteMarker",1,[],rtl.string);
    $r.addMethod("GetAddOrUpdatePolyElement",1,[],rtl.string);
    $r.addMethod("GetDeletePolyElement",1,[],rtl.string);
    $r.addMethod("GetZoomToBounds",1,[],rtl.string);
    $r.addMethod("GetSetCenterCoordinate",1,[],rtl.string);
    $r.addMethod("GetGetCenterCoordinate",1,[],rtl.string);
    $r.addMethod("GetLatLonToXY",1,[],rtl.string);
    $r.addMethod("GetXYToLatLon",1,[],rtl.string);
    $r.addMethod("GetGetBounds",1,[],rtl.string);
    $r.addMethod("GetGetZoomLevel",1,[],rtl.string);
    $r.addMethod("GetSetZoomLevel",1,[],rtl.string);
    $r.addMethod("GetUpdateOptions",1,[],rtl.string);
    $r.addMethod("GetGlobalVariables",1,[],rtl.string);
    $r.addMethod("GetAddCoordinateToArray",1,[],rtl.string);
    $r.addMethod("GetAddHoleToArray",1,[],rtl.string);
    $r.addMethod("GetInitializeCoordinateArray",1,[],rtl.string);
    $r.addMethod("GetInitializeHolesArray",1,[],rtl.string);
    $r.addMethod("IsValid",1,[],rtl.boolean);
    $r.addMethod("DestroyMaps",0,[]);
  });
  rtl.createInterface(this,"ITMSFNCMapsService","{6E91727E-EFA6-4A74-B523-97DAF6605F09}",["CreateMaps","DestroyMaps"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("CreateMaps",1,[],$mod.$rtti["ITMSFNCCustomMaps"]);
    $r.addMethod("DestroyMaps",0,[["AMaps",$mod.$rtti["ITMSFNCCustomMaps"]]]);
  });
  rtl.createInterface(this,"ITMSFNCMapsServiceGoogleMaps","{71E5D88A-366B-4573-B54D-DE0B3848CB15}",[],this.ITMSFNCMapsService,function () {
  });
  rtl.createInterface(this,"ITMSFNCMapsServiceHere","{646B2E30-657D-4D64-BDE7-13357E46255B}",[],this.ITMSFNCMapsService,function () {
  });
  rtl.createInterface(this,"ITMSFNCMapsServiceAzureMaps","{CB46E849-C6D7-4B6C-AE8E-39A404FDE4BE}",[],this.ITMSFNCMapsService,function () {
  });
  rtl.createInterface(this,"ITMSFNCMapsServiceBingMaps","{382BB281-E709-4028-9E10-3D3790C04C7B}",[],this.ITMSFNCMapsService,function () {
  });
  rtl.createInterface(this,"ITMSFNCMapsServiceTomTom","{AFDD0113-F2BB-44FE-8DD3-4EAEC70BA851}",[],this.ITMSFNCMapsService,function () {
  });
  rtl.createInterface(this,"ITMSFNCMapsServiceMapBox","{B141412A-AD1C-4C5F-9729-952BD04B9D6D}",[],this.ITMSFNCMapsService,function () {
  });
  rtl.createInterface(this,"ITMSFNCMapsServiceMapKit","{3EAC77BF-DBDA-4328-910F-B2C23C5E9229}",[],this.ITMSFNCMapsService,function () {
  });
  rtl.createInterface(this,"ITMSFNCMapsServiceOpenLayers","{424129BB-9C0E-44C5-BD30-E6399A5BC5CE}",[],this.ITMSFNCMapsService,function () {
  });
  rtl.createInterface(this,"ITMSFNCMapsServiceLeaflet","{CEB938F6-48D3-4173-BB7C-7D5C56BFAA51}",[],this.ITMSFNCMapsService,function () {
  });
  rtl.recNewT(this,"TTMSFNCMapsGPXColorRec",function () {
    this.Color = 0;
    this.$eq = function (b) {
      return this.Color === b.Color;
    };
    this.$assign = function (s) {
      this.Color = s.Color;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCMapsGPXColorRec",{});
    $r.addField("Color",pas["WEBLib.Graphics"].$rtti["TColor"]);
  });
  this.$rtti.$DynArray("TTMSFNCMapsGPXColorRecArray",{eltype: this.$rtti["TTMSFNCMapsGPXColorRec"]});
  rtl.recNewT(this,"TTMSFNCMapsPointRec",function () {
    this.Name = "";
    this.$new = function () {
      var r = Object.create(this);
      r.Coordinate = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$new();
      return r;
    };
    this.$eq = function (b) {
      return this.Coordinate.$eq(b.Coordinate) && (this.Name === b.Name);
    };
    this.$assign = function (s) {
      this.Coordinate.$assign(s.Coordinate);
      this.Name = s.Name;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCMapsPointRec",{});
    $r.addField("Coordinate",pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinateRec"]);
    $r.addField("Name",rtl.string);
  });
  rtl.recNewT(this,"TTMSFNCMapsPolyElementRec",function () {
    this.Name = "";
    this.$new = function () {
      var r = Object.create(this);
      r.Coordinates = [];
      r.Holes = [];
      return r;
    };
    this.$eq = function (b) {
      return (this.Coordinates === b.Coordinates) && (this.Holes === b.Holes) && (this.Name === b.Name);
    };
    this.$assign = function (s) {
      this.Coordinates = rtl.arrayRef(s.Coordinates);
      this.Holes = rtl.arrayRef(s.Holes);
      this.Name = s.Name;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCMapsPolyElementRec",{});
    $r.addField("Coordinates",pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinateRecArray"]);
    $r.addField("Holes",pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinateRecArrayArray"]);
    $r.addField("Name",rtl.string);
  });
  rtl.recNewT(this,"TTMSFNCMapsGeoJSONRec",function () {
    this.$new = function () {
      var r = Object.create(this);
      r.Points = [];
      r.Polylines = [];
      r.Polygons = [];
      return r;
    };
    this.$eq = function (b) {
      return (this.Points === b.Points) && (this.Polylines === b.Polylines) && (this.Polygons === b.Polygons);
    };
    this.$assign = function (s) {
      this.Points = rtl.arrayRef(s.Points);
      this.Polylines = rtl.arrayRef(s.Polylines);
      this.Polygons = rtl.arrayRef(s.Polygons);
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCMapsGeoJSONRec",{});
    $mod.$rtti.$DynArray("TTMSFNCMapsGeoJSONRec.Points$a",{eltype: $mod.$rtti["TTMSFNCMapsPointRec"]});
    $r.addField("Points",$mod.$rtti["TTMSFNCMapsGeoJSONRec.Points$a"]);
    $mod.$rtti.$DynArray("TTMSFNCMapsGeoJSONRec.Polylines$a",{eltype: $mod.$rtti["TTMSFNCMapsPolyElementRec"]});
    $r.addField("Polylines",$mod.$rtti["TTMSFNCMapsGeoJSONRec.Polylines$a"]);
    $mod.$rtti.$DynArray("TTMSFNCMapsGeoJSONRec.Polygons$a",{eltype: $mod.$rtti["TTMSFNCMapsPolyElementRec"]});
    $r.addField("Polygons",$mod.$rtti["TTMSFNCMapsGeoJSONRec.Polygons$a"]);
  });
  rtl.createClass(this,"TTMSFNCMapsPopup",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FID = "";
      this.FText = "";
      this.FOffsetX = 0.0;
      this.FOffsetY = 0.0;
      this.FCoordinate = null;
      this.FPanMap = false;
    };
    this.$final = function () {
      this.FCoordinate = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.GetID = function () {
      var Result = "";
      if (this.FID === "") this.FID = pas["WEBLib.TMSFNCTypes"].CreateNewGUID();
      Result = this.FID;
      return Result;
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
    this.Create$1 = function () {
      this.FCoordinate = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinate.$create("Create$1");
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FCoordinate");
      pas.System.TObject.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addProperty("ID",1,rtl.string,"GetID","");
    $r.addProperty("Text",0,rtl.string,"FText","FText");
    $r.addProperty("Coordinate",0,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinate"],"FCoordinate","");
    $r.addProperty("Longitude",3,rtl.double,"GetLongitude","SetLongitude");
    $r.addProperty("Latitude",3,rtl.double,"GetLatitude","SetLatitude");
    $r.addProperty("OffsetX",0,rtl.double,"FOffsetX","FOffsetX");
    $r.addProperty("OffsetY",0,rtl.double,"FOffsetY","FOffsetY");
    $r.addProperty("PanMap",0,rtl.boolean,"FPanMap","FPanMap");
  });
  rtl.createClass(this,"TTMSFNCMapsMarker",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FReload = false;
      this.FID$1 = "";
      this.FDataBoolean = false;
      this.FDataString = "";
      this.FDataObject = null;
      this.FDataInteger = 0;
      this.FDataPointer = null;
      this.FTitle = "";
      this.FCoordinate = null;
      this.FIconURL = "";
      this.FRecreate = false;
      this.FVisible = false;
      this.FOwner = null;
    };
    this.$final = function () {
      this.FDataObject = undefined;
      this.FCoordinate = undefined;
      this.FOwner = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.SetTitle = function (Value) {
      if (this.FTitle !== Value) {
        this.FTitle = Value;
        this.UpdateMarker();
      };
    };
    this.GetID = function () {
      var Result = "";
      if ((this.FID$1 === "") || this.FRecreate) this.FID$1 = pas["WEBLib.TMSFNCTypes"].CreateNewGUID();
      this.FRecreate = false;
      Result = this.FID$1;
      return Result;
    };
    this.IsTitleStored = function () {
      var Result = false;
      Result = this.FTitle !== $mod.DEFAULT_MARKERTEXT;
      return Result;
    };
    this.SetCoordinate = function (Value) {
      if (this.FCoordinate !== Value) {
        this.FCoordinate.Assign(Value);
        this.UpdateMarker();
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
    this.IsIconURLStored = function () {
      var Result = false;
      Result = this.FIconURL !== "";
      return Result;
    };
    this.SetIconURL = function (Value) {
      if (this.FIconURL !== Value) {
        this.FIconURL = Value;
        this.UpdateMarker();
      };
    };
    this.SetVisible = function (Value) {
      if (this.FVisible !== Value) {
        this.FVisible = Value;
        this.UpdateMarker();
      };
    };
    this.UpdateMarker = function () {
      this.FReload = true;
      if (this.FOwner != null) this.FOwner.UpdateMarkers();
    };
    this.CoordinateChanged = function (Sender) {
      this.UpdateMarker();
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      if (ACollection != null) this.FOwner = rtl.as(this.FCollection,$mod.TTMSFNCMapsMarkers).FOwner$1;
      this.FTitle = $mod.DEFAULT_MARKERTEXT;
      this.FCoordinate = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinate.$create("Create$1");
      this.FCoordinate.FOnChange = rtl.createCallback(this,"CoordinateChanged");
      this.FVisible = true;
      this.UpdateMarker();
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCMapsMarker.isPrototypeOf(Source)) {
        this.FCoordinate.Assign(rtl.as(Source,$mod.TTMSFNCMapsMarker).FCoordinate);
        this.FTitle = rtl.as(Source,$mod.TTMSFNCMapsMarker).FTitle;
        this.FIconURL = rtl.as(Source,$mod.TTMSFNCMapsMarker).FIconURL;
        this.FVisible = rtl.as(Source,$mod.TTMSFNCMapsMarker).FVisible;
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FCoordinate");
      pas.Classes.TCollectionItem.Destroy.call(this);
      this.UpdateMarker();
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("ID",1,rtl.string,"GetID","");
    $r.addProperty("Longitude",15,rtl.double,"GetLongitude","SetLongitude",{stored: "IsLongitudeStored"});
    $r.addProperty("Latitude",15,rtl.double,"GetLatitude","SetLatitude",{stored: "IsLatitudeStored"});
    $r.addProperty("Title",14,rtl.string,"FTitle","SetTitle",{stored: "IsTitleStored"});
    $r.addProperty("IconURL",14,rtl.string,"FIconURL","SetIconURL",{stored: "IsIconURLStored"});
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
  });
  rtl.createClass(this,"TTMSFNCMapsMarkers",pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection,function () {
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
    this.GetItemByID = function (ID) {
      var Result = null;
      var I = 0;
      var m = null;
      Result = null;
      for (var $l = 0, $end = this.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        m = this.GetItem$1(I);
        if (m.GetID() === ID) {
          Result = m;
          break;
        };
      };
      return Result;
    };
    this.CreateItemClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCMapsMarker;
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
    this.Clear$1 = function () {
      var l = null;
      var ci = null;
      l = this.FOwner$1;
      if (l != null) l.BeginUpdate();
      if (this.GetCount() > 0) {
        while (this.GetCount() > 0) {
          ci = this.GetItem$1(this.GetCount() - 1);
          ci = rtl.freeLoc(ci);
        };
      };
      if (l != null) l.EndUpdate();
    };
    this.Recreate = function () {
      var I = 0;
      for (var $l = 0, $end = this.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        this.GetItem$1(I).FRecreate = true;
      };
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
    this.ToCoordinateArray = function () {
      var Result = [];
      var I = 0;
      var arr = [];
      Result = rtl.arraySetLength(Result,[],this.GetCount());
      for (var $l = 0, $end = this.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        arr = rtl.arraySetLength(arr,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,1);
        arr[0].$assign(this.GetItem$1(I).FCoordinate.GetToRec());
        Result[I] = rtl.arrayRef(arr);
      };
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$3",2,[["AOwner",$mod.$rtti["TTMSFNCCustomMaps"]]]);
  });
  this.$rtti.$Class("TTMSFNCMapsPolyElement");
  rtl.createClass(this,"TTMSFNCMapsPolyElementHole",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FID$1 = "";
      this.FOwner = null;
      this.FCoordinates = null;
    };
    this.$final = function () {
      this.FOwner = undefined;
      this.FCoordinates = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.GetID = function () {
      var Result = "";
      if ((this.FID$1 === "") || this.FOwner.FRecreate) this.FID$1 = pas["WEBLib.TMSFNCTypes"].CreateNewGUID();
      Result = this.FID$1;
      return Result;
    };
    this.SetCoordinates = function (Value) {
      if (this.FCoordinates !== Value) {
        this.FCoordinates.Assign(Value);
        this.UpdatePolyElement();
      };
    };
    this.UpdatePolyElement = function () {
      if (this.FOwner != null) this.FOwner.UpdatePolyElement();
    };
    this.DoBeginUpdate = function (Sender) {
      if (this.FOwner != null) this.FOwner.BeginUpdate();
    };
    this.DoEndUpdate = function (Sender) {
      if (this.FOwner != null) this.FOwner.EndUpdate();
    };
    this.DoUpdateCoordinates = function (Sender) {
      if (this.FOwner != null) this.FOwner.UpdatePolyElement();
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      if (ACollection != null) this.FOwner = rtl.as(this.FCollection,$mod.TTMSFNCMapsPolyElementHoles).FOwner$1;
      this.FCoordinates = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinates.$create("Create$3",[this]);
      this.FCoordinates.FOnBeginUpdate = rtl.createCallback(this,"DoBeginUpdate");
      this.FCoordinates.FOnEndUpdate = rtl.createCallback(this,"DoEndUpdate");
      this.FCoordinates.FOnUpdateCoordinates = rtl.createCallback(this,"DoUpdateCoordinates");
      return this;
    };
    this.Assign = function (Source) {
      this.FID$1 = rtl.as(Source,$mod.TTMSFNCMapsPolyElementHole).GetID();
      this.FCoordinates.Assign(rtl.as(Source,$mod.TTMSFNCMapsPolyElementHole).FCoordinates);
    };
    this.Destroy = function () {
      rtl.free(this,"FCoordinates");
      pas.Classes.TCollectionItem.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("Coordinates",2,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinates"],"FCoordinates","SetCoordinates");
    $r.addProperty("ID",1,rtl.string,"GetID","");
  });
  rtl.createClass(this,"TTMSFNCMapsPolyElementHoles",pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection,function () {
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
      Result = $mod.TTMSFNCMapsPolyElementHole;
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
    this.Clear$1 = function () {
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
    $r.addMethod("Create$3",2,[["AOwner",$mod.$rtti["TTMSFNCMapsPolyElement"]]]);
  });
  rtl.createClass(this,"TTMSFNCMapsPolyElement",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FReload = false;
      this.FID$1 = "";
      this.FOwner = null;
      this.FDataBoolean = false;
      this.FDataString = "";
      this.FDataObject = null;
      this.FDataInteger = 0;
      this.FDataPointer = null;
      this.FStrokeColor = 0;
      this.FCoordinates = null;
      this.FStrokeOpacity = 0.0;
      this.FStrokeWidth = 0;
      this.FRecreate = false;
      this.FVisible = false;
      this.FHoles = null;
    };
    this.$final = function () {
      this.FOwner = undefined;
      this.FDataObject = undefined;
      this.FCoordinates = undefined;
      this.FHoles = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.GetID = function () {
      var Result = "";
      if ((this.FID$1 === "") || this.FRecreate) this.FID$1 = pas["WEBLib.TMSFNCTypes"].CreateNewGUID();
      this.FRecreate = false;
      Result = this.FID$1;
      return Result;
    };
    this.SetStrokeColor = function (Value) {
      if (this.FStrokeColor !== Value) {
        this.FStrokeColor = Value;
        this.UpdatePolyElement();
      };
    };
    this.SetCoordinates = function (Value) {
      if (this.FCoordinates !== Value) {
        this.FCoordinates.Assign(Value);
        this.UpdatePolyElement();
      };
    };
    this.SetHoles = function (Value) {
      if (this.FHoles !== Value) {
        this.FHoles.Assign(Value);
        this.UpdatePolyElement();
      };
    };
    this.IsStrokeOpacityStored = function () {
      var Result = false;
      Result = this.FStrokeOpacity !== 1;
      return Result;
    };
    this.SetStrokeOpacity = function (Value) {
      if (this.FStrokeOpacity !== Value) {
        this.FStrokeOpacity = Value;
        this.UpdatePolyElement();
      };
    };
    this.SetStrokeWidth = function (Value) {
      if (this.FStrokeWidth !== Value) {
        this.FStrokeWidth = Value;
        this.UpdatePolyElement();
      };
    };
    this.SetVisible = function (Value) {
      if (this.FVisible !== Value) {
        this.FVisible = Value;
        this.UpdatePolyElement();
      };
    };
    this.BeginUpdate = function () {
      if (this.FOwner != null) this.FOwner.BeginUpdate();
    };
    this.EndUpdate = function () {
      if (this.FOwner != null) this.FOwner.EndUpdate();
    };
    this.UpdatePolyElement = function () {
      if (this.FOwner != null) {
        this.FReload = true;
        this.FOwner.UpdatePolyElements();
      };
    };
    this.DoUpdateCoordinates = function (Sender) {
      if (this.FOwner != null) this.FOwner.UpdatePolyElements();
    };
    this.DoBeginUpdate = function (Sender) {
      if (this.FOwner != null) this.FOwner.BeginUpdate();
    };
    this.DoEndUpdate = function (Sender) {
      if (this.FOwner != null) this.FOwner.EndUpdate();
    };
    this.AddHole = function (ACoordinates) {
      var Result = null;
      var I = 0;
      var co = null;
      Result = null;
      if (rtl.length(ACoordinates) === 0) return Result;
      this.BeginUpdate();
      Result = this.FHoles.Add$1();
      for (var $l = 0, $end = rtl.length(ACoordinates) - 1; $l <= $end; $l++) {
        I = $l;
        co = Result.FCoordinates.Add$1();
        co.FCoordinate.SetLongitude(ACoordinates[I].Longitude);
        co.FCoordinate.SetLatitude(ACoordinates[I].Latitude);
      };
      this.EndUpdate();
      return Result;
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      if (ACollection != null) this.FOwner = rtl.as(this.FCollection,$mod.TTMSFNCMapsPolyElements).FOwner$1;
      this.FCoordinates = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinates.$create("Create$3",[this]);
      this.FCoordinates.FOnBeginUpdate = rtl.createCallback(this,"DoBeginUpdate");
      this.FCoordinates.FOnEndUpdate = rtl.createCallback(this,"DoEndUpdate");
      this.FCoordinates.FOnUpdateCoordinates = rtl.createCallback(this,"DoUpdateCoordinates");
      this.FStrokeColor = 0;
      this.FStrokeOpacity = 1.0;
      this.FStrokeWidth = 2;
      this.FVisible = true;
      this.FHoles = $mod.TTMSFNCMapsPolyElementHoles.$create("Create$3",[this]);
      this.UpdatePolyElement();
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCMapsPolyElement.isPrototypeOf(Source)) {
        this.FCoordinates.Assign(rtl.as(Source,$mod.TTMSFNCMapsPolyElement).FCoordinates);
        this.FStrokeColor = rtl.as(Source,$mod.TTMSFNCMapsPolyElement).FStrokeColor;
        this.FStrokeOpacity = rtl.as(Source,$mod.TTMSFNCMapsPolyElement).FStrokeOpacity;
        this.FStrokeWidth = rtl.as(Source,$mod.TTMSFNCMapsPolyElement).FStrokeWidth;
        this.FVisible = rtl.as(Source,$mod.TTMSFNCMapsPolyElement).FVisible;
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FCoordinates");
      rtl.free(this,"FHoles");
      pas.Classes.TCollectionItem.Destroy.call(this);
      this.UpdatePolyElement();
    };
    this.Area = function () {
      var Result = 0.0;
      Result = pas["WEBLib.TMSFNCMapsCommonTypes"].MeasureArea(this.FCoordinates.GetArray());
      return Result;
    };
    this.ContainsPoint = function (ACoordinate) {
      var Result = false;
      Result = pas["WEBLib.TMSFNCMapsCommonTypes"].IsPointInArea(ACoordinate.Latitude,ACoordinate.Longitude,this.FCoordinates.GetArray());
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("ID",1,rtl.string,"GetID","");
    $r.addProperty("StrokeColor",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FStrokeColor","SetStrokeColor",{Default: 0});
    $r.addProperty("StrokeOpacity",14,rtl.double,"FStrokeOpacity","SetStrokeOpacity",{stored: "IsStrokeOpacityStored"});
    $r.addProperty("StrokeWidth",2,rtl.longint,"FStrokeWidth","SetStrokeWidth",{Default: 2});
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
  });
  rtl.createClass(this,"TTMSFNCMapsPolyElements",pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection,function () {
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
    this.GetItemByID = function (ID) {
      var Result = null;
      var I = 0;
      var m = null;
      Result = null;
      for (var $l = 0, $end = this.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        m = this.GetItem$1(I);
        if (m.GetID() === ID) {
          Result = m;
          break;
        };
      };
      return Result;
    };
    this.CreateItemClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCMapsPolyElement;
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
    this.Clear$1 = function () {
      var l = null;
      var ci = null;
      l = this.FOwner$1;
      if (l != null) l.BeginUpdate();
      if (this.GetCount() > 0) {
        while (this.GetCount() > 0) {
          ci = this.GetItem$1(this.GetCount() - 1);
          ci = rtl.freeLoc(ci);
        };
      };
      if (l != null) l.EndUpdate();
    };
    this.Recreate = function () {
      var I = 0;
      for (var $l = 0, $end = this.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        this.GetItem$1(I).FRecreate = true;
      };
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
    this.ToCoordinateArray = function () {
      var Result = [];
      var I = 0;
      Result = rtl.arraySetLength(Result,[],this.GetCount());
      for (var $l = 0, $end = this.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        Result[I] = this.GetItem$1(I).FCoordinates.GetArray();
      };
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$3",2,[["AOwner",$mod.$rtti["TTMSFNCCustomMaps"]]]);
  });
  rtl.createClass(this,"TTMSFNCMapsPolyline",this.TTMSFNCMapsPolyElement,function () {
    this.Distance = function () {
      var Result = 0.0;
      var I = 0;
      Result = 0;
      for (var $l = 0, $end = this.FCoordinates.GetCount() - 2; $l <= $end; $l++) {
        I = $l;
        Result = Result + pas["WEBLib.TMSFNCMapsCommonTypes"].MeasureDistance(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(this.FCoordinates.GetItem$1(I).FCoordinate.GetToRec()),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(this.FCoordinates.GetItem$1(I + 1).FCoordinate.GetToRec()));
      };
      return Result;
    };
    var $r = this.$rtti;
    $r.addProperty("Coordinates",2,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinates"],"FCoordinates","SetCoordinates");
  });
  rtl.createClass(this,"TTMSFNCMapsPolylines",this.TTMSFNCMapsPolyElements,function () {
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
      Result = $mod.TTMSFNCMapsPolyline;
      return Result;
    };
    this.Add$2 = function () {
      var Result = null;
      Result = $mod.TTMSFNCMapsPolyElements.Add$1.call(this);
      return Result;
    };
    this.Insert$2 = function (Index) {
      var Result = null;
      Result = $mod.TTMSFNCMapsPolyElements.Insert$1.call(this,Index);
      return Result;
    };
  });
  rtl.createClass(this,"TTMSFNCMapsCustomPolygon",this.TTMSFNCMapsPolyElement,function () {
    this.$init = function () {
      $mod.TTMSFNCMapsPolyElement.$init.call(this);
      this.FFillColor = 0;
      this.FFillOpacity = 0.0;
    };
    this.SetFillColor = function (Value) {
      if (this.FFillColor !== Value) {
        this.FFillColor = Value;
        this.UpdatePolyElement();
      };
    };
    this.IsFillOpacityStored = function () {
      var Result = false;
      Result = this.FFillOpacity !== 1.0;
      return Result;
    };
    this.SetFillOpacity = function (Value) {
      if (this.FFillOpacity !== Value) {
        this.FFillOpacity = Value;
        this.UpdatePolyElement();
      };
    };
    this.Create$1 = function (ACollection) {
      $mod.TTMSFNCMapsPolyElement.Create$1.apply(this,arguments);
      this.FFillColor = 16777215;
      this.FFillOpacity = 1.0;
      return this;
    };
    this.Assign = function (Source) {
      $mod.TTMSFNCMapsPolyElement.Assign.apply(this,arguments);
      if ($mod.TTMSFNCMapsPolygon.isPrototypeOf(Source)) {
        this.FFillColor = rtl.as(Source,$mod.TTMSFNCMapsPolygon).FFillColor;
        this.FFillOpacity = rtl.as(Source,$mod.TTMSFNCMapsPolygon).FFillOpacity;
      };
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("FillColor",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FFillColor","SetFillColor",{Default: 16777215});
    $r.addProperty("FillOpacity",14,rtl.double,"FFillOpacity","SetFillOpacity",{stored: "IsFillOpacityStored"});
  });
  rtl.createClass(this,"TTMSFNCMapsCustomPolygons",this.TTMSFNCMapsPolyElements,function () {
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
      Result = $mod.TTMSFNCMapsCustomPolygon;
      return Result;
    };
    this.Add$2 = function () {
      var Result = null;
      Result = $mod.TTMSFNCMapsPolyElements.Add$1.call(this);
      return Result;
    };
    this.Insert$2 = function (Index) {
      var Result = null;
      Result = $mod.TTMSFNCMapsPolyElements.Insert$1.call(this,Index);
      return Result;
    };
  });
  rtl.createClass(this,"TTMSFNCMapsPolygon",this.TTMSFNCMapsCustomPolygon,function () {
    this.AddHole = function (ACoordinates) {
      var Result = null;
      Result = $mod.TTMSFNCMapsPolyElement.AddHole.call(this,rtl.arrayRef(ACoordinates));
      return Result;
    };
    var $r = this.$rtti;
    $r.addProperty("Coordinates",2,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinates"],"FCoordinates","SetCoordinates");
  });
  rtl.createClass(this,"TTMSFNCMapsPolygons",this.TTMSFNCMapsPolyElements,function () {
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
      Result = $mod.TTMSFNCMapsPolygon;
      return Result;
    };
    this.Add$2 = function () {
      var Result = null;
      Result = $mod.TTMSFNCMapsPolyElements.Add$1.call(this);
      return Result;
    };
    this.Insert$2 = function (Index) {
      var Result = null;
      Result = $mod.TTMSFNCMapsPolyElements.Insert$1.call(this,Index);
      return Result;
    };
  });
  rtl.createClass(this,"TTMSFNCMapsRectangle",this.TTMSFNCMapsCustomPolygon,function () {
    this.$init = function () {
      $mod.TTMSFNCMapsCustomPolygon.$init.call(this);
      this.FBounds = null;
    };
    this.$final = function () {
      this.FBounds = undefined;
      $mod.TTMSFNCMapsCustomPolygon.$final.call(this);
    };
    this.SetBounds = function (Value) {
      if (this.FBounds !== Value) {
        this.FBounds.Assign(Value);
        this.UpdatePolyElement();
      };
    };
    this.DoBoundsChanged = function (Sender) {
      this.UpdatePolyElement();
    };
    this.Create$1 = function (ACollection) {
      $mod.TTMSFNCMapsCustomPolygon.Create$1.apply(this,arguments);
      this.FBounds = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsBounds.$create("Create$1");
      this.FBounds.FOnChange = rtl.createCallback(this,"DoBoundsChanged");
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FBounds");
      $mod.TTMSFNCMapsPolyElement.Destroy.call(this);
    };
    this.Assign = function (Source) {
      $mod.TTMSFNCMapsCustomPolygon.Assign.apply(this,arguments);
      if ($mod.TTMSFNCMapsRectangle.isPrototypeOf(Source)) {
        this.FBounds.Assign(rtl.as(Source,$mod.TTMSFNCMapsRectangle).FBounds);
      };
    };
    this.Area = function () {
      var Result = 0.0;
      Result = pas["WEBLib.TMSFNCMapsCommonTypes"].MeasureArea(pas["WEBLib.TMSFNCMapsCommonTypes"].BoundsRectangle(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsBoundsRec.$clone(this.FBounds.GetToRec())));
      return Result;
    };
    this.ContainsPoint = function (ACoordinate) {
      var Result = false;
      Result = pas["WEBLib.TMSFNCMapsCommonTypes"].IsPointInArea(ACoordinate.Latitude,ACoordinate.Longitude,pas["WEBLib.TMSFNCMapsCommonTypes"].BoundsRectangle(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsBoundsRec.$clone(this.FBounds.GetToRec())));
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("Bounds",2,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsBounds"],"FBounds","SetBounds");
  });
  rtl.createClass(this,"TTMSFNCMapsRectangles",this.TTMSFNCMapsCustomPolygons,function () {
    this.GetItem$3 = function (Index) {
      var Result = null;
      Result = this.GetItem$2(Index);
      return Result;
    };
    this.SetItem$3 = function (Index, Value) {
      this.SetItem$2(Index,Value);
    };
    this.CreateItemClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCMapsRectangle;
      return Result;
    };
    this.Add$3 = function () {
      var Result = null;
      Result = $mod.TTMSFNCMapsCustomPolygons.Add$2.call(this);
      return Result;
    };
    this.Insert$3 = function (Index) {
      var Result = null;
      Result = $mod.TTMSFNCMapsCustomPolygons.Insert$2.call(this,Index);
      return Result;
    };
    this.ToCoordinateArray = function () {
      var Result = [];
      var I = 0;
      var arr = [];
      Result = rtl.arraySetLength(Result,[],this.GetCount());
      for (var $l = 0, $end = this.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        arr = rtl.arraySetLength(arr,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,2);
        arr[0].$assign(this.GetItem$3(I).FBounds.FNorthEast.GetToRec());
        arr[1].$assign(this.GetItem$3(I).FBounds.FSouthWest.GetToRec());
        Result[I] = rtl.arrayRef(arr);
      };
      return Result;
    };
  });
  rtl.createClass(this,"TTMSFNCMapsCircle",this.TTMSFNCMapsCustomPolygon,function () {
    this.$init = function () {
      $mod.TTMSFNCMapsCustomPolygon.$init.call(this);
      this.FRadius = 0.0;
      this.FCenter = null;
    };
    this.$final = function () {
      this.FCenter = undefined;
      $mod.TTMSFNCMapsCustomPolygon.$final.call(this);
    };
    this.SetRadius = function (Value) {
      if (this.FRadius !== Value) {
        this.FRadius = Value;
        this.UpdatePolyElement();
      };
    };
    this.SetCenter = function (Value) {
      if (this.FCenter !== Value) {
        this.FCenter.Assign(Value);
        this.UpdatePolyElement();
      };
    };
    this.IsRadiusStored = function () {
      var Result = false;
      Result = this.FRadius !== 10000;
      return Result;
    };
    this.DoCenterChanged = function (Sender) {
      this.UpdatePolyElement();
    };
    this.Create$1 = function (ACollection) {
      $mod.TTMSFNCMapsCustomPolygon.Create$1.apply(this,arguments);
      this.FRadius = 10000;
      this.FCenter = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinate.$create("Create$1");
      this.FCenter.FOnChange = rtl.createCallback(this,"DoCenterChanged");
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FCenter");
      $mod.TTMSFNCMapsPolyElement.Destroy.call(this);
    };
    this.Assign = function (Source) {
      $mod.TTMSFNCMapsCustomPolygon.Assign.apply(this,arguments);
      if ($mod.TTMSFNCMapsCircle.isPrototypeOf(Source)) {
        this.FRadius = rtl.as(Source,$mod.TTMSFNCMapsCircle).FRadius;
        this.FCenter.Assign(rtl.as(Source,$mod.TTMSFNCMapsCircle).FCenter);
      };
    };
    this.Area = function () {
      var Result = 0.0;
      Result = pas["WEBLib.TMSFNCMapsCommonTypes"].MeasureArea(pas["WEBLib.TMSFNCMapsCommonTypes"].CreateCircle(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(this.FCenter.GetToRec()),this.FRadius));
      return Result;
    };
    this.ContainsPoint = function (ACoordinate) {
      var Result = false;
      Result = pas["WEBLib.TMSFNCMapsCommonTypes"].IsPointInArea(ACoordinate.Latitude,ACoordinate.Longitude,pas["WEBLib.TMSFNCMapsCommonTypes"].CreateCircle(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(this.FCenter.GetToRec()),this.FRadius));
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("Center",2,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinate"],"FCenter","SetCenter");
    $r.addProperty("Radius",14,rtl.double,"FRadius","SetRadius",{stored: "IsRadiusStored"});
  });
  rtl.createClass(this,"TTMSFNCMapsCircles",this.TTMSFNCMapsCustomPolygons,function () {
    this.GetItem$3 = function (Index) {
      var Result = null;
      Result = this.GetItem$2(Index);
      return Result;
    };
    this.SetItem$3 = function (Index, Value) {
      this.SetItem$2(Index,Value);
    };
    this.CreateItemClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCMapsCircle;
      return Result;
    };
    this.Add$3 = function () {
      var Result = null;
      Result = $mod.TTMSFNCMapsCustomPolygons.Add$2.call(this);
      return Result;
    };
    this.Insert$3 = function (Index) {
      var Result = null;
      Result = $mod.TTMSFNCMapsCustomPolygons.Insert$2.call(this,Index);
      return Result;
    };
    this.ToCoordinateArray = function () {
      var Result = [];
      var I = 0;
      var arr = [];
      Result = rtl.arraySetLength(Result,[],this.GetCount());
      for (var $l = 0, $end = this.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        arr = rtl.arraySetLength(arr,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,1);
        arr[0].$assign(this.GetItem$3(I).FCenter.GetToRec());
        Result[I] = rtl.arrayRef(arr);
      };
      return Result;
    };
  });
  rtl.createClass(this,"TTMSFNCMapsHeadLink",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FOwner = null;
      this.FURL = "";
      this.FEnabled = false;
      this.FRel = "";
      this.FDefer = false;
      this.FCharSet = "";
      this.FKind = 0;
      this.FType = "";
      this.FContent = null;
      this.FAsync = false;
    };
    this.$final = function () {
      this.FOwner = undefined;
      this.FContent = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.SetURL = function (Value) {
      if (this.FURL !== Value) {
        this.FURL = Value;
        this.UpdateHeadLink();
      };
    };
    this.IsURLStored = function () {
      var Result = false;
      Result = this.FURL !== "";
      return Result;
    };
    this.SetEnabled = function (Value) {
      if (this.FEnabled !== Value) {
        this.FEnabled = Value;
        this.UpdateHeadLink();
      };
    };
    this.SetContent = function (Value) {
      if (this.FContent !== Value) {
        this.FContent.Assign(Value);
        this.UpdateHeadLink();
      };
    };
    this.SetAsync = function (Value) {
      if (this.FAsync !== Value) {
        this.FAsync = Value;
        this.UpdateHeadLink();
      };
    };
    this.SetCharSet = function (Value) {
      if (this.FCharSet !== Value) {
        this.FCharSet = Value;
        this.UpdateHeadLink();
      };
    };
    this.SetDefer = function (Value) {
      if (this.FDefer !== Value) {
        this.FDefer = Value;
        this.UpdateHeadLink();
      };
    };
    this.SetRel = function (Value) {
      if (this.FRel !== Value) {
        this.FRel = Value;
        this.UpdateHeadLink();
      };
    };
    this.SetType = function (Value) {
      if (this.FType !== Value) {
        this.FType = Value;
        this.UpdateHeadLink();
      };
    };
    this.SetKind = function (Value) {
      if (this.FKind !== Value) {
        this.FKind = Value;
        this.UpdateHeadLink();
      };
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      if (ACollection != null) this.FOwner = rtl.as(this.FCollection,$mod.TTMSFNCMapsHeadLinks).FOwner$1;
      this.FURL = "";
      this.FEnabled = true;
      this.FType = "";
      this.FCharSet = "";
      this.FContent = pas.Classes.TStringList.$create("Create$1");
      this.FContent.FOnChange = rtl.createCallback(this,"HeadLinkChanged");
      this.FRel = "";
      this.FDefer = false;
      this.FAsync = false;
      this.FKind = $mod.TTMSFNCMapsLinkKind.mlkScript;
      this.UpdateHeadLink();
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCMapsHeadLink.isPrototypeOf(Source)) {
        this.FURL = rtl.as(Source,$mod.TTMSFNCMapsHeadLink).FURL;
        this.FEnabled = rtl.as(Source,$mod.TTMSFNCMapsHeadLink).FEnabled;
        this.FType = rtl.as(Source,$mod.TTMSFNCMapsHeadLink).FType;
        this.FCharSet = rtl.as(Source,$mod.TTMSFNCMapsHeadLink).FCharSet;
        this.FContent.Assign(rtl.as(Source,$mod.TTMSFNCMapsHeadLink).FContent);
        this.FRel = rtl.as(Source,$mod.TTMSFNCMapsHeadLink).FRel;
        this.FDefer = rtl.as(Source,$mod.TTMSFNCMapsHeadLink).FDefer;
        this.FAsync = rtl.as(Source,$mod.TTMSFNCMapsHeadLink).FAsync;
        this.FKind = rtl.as(Source,$mod.TTMSFNCMapsHeadLink).FKind;
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FContent");
      pas.Classes.TCollectionItem.Destroy.call(this);
      this.UpdateHeadLink();
    };
    this.HeadLinkChanged = function (Sender) {
      this.UpdateHeadLink();
    };
    this.UpdateHeadLink = function () {
      if (this.FOwner.IsDesignTime()) this.FOwner.ReInitialize();
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("URL",14,rtl.string,"FURL","SetURL",{stored: "IsURLStored"});
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled",{Default: true});
    $r.addProperty("Type",2,rtl.string,"FType","SetType");
    $r.addProperty("CharSet",2,rtl.string,"FCharSet","SetCharSet");
    $r.addProperty("Content",2,pas.Classes.$rtti["TStringList"],"FContent","SetContent");
    $r.addProperty("Rel",2,rtl.string,"FRel","SetRel");
    $r.addProperty("Defer",2,rtl.boolean,"FDefer","SetDefer");
    $r.addProperty("Async",2,rtl.boolean,"FAsync","SetAsync");
    $r.addProperty("Kind",2,$mod.$rtti["TTMSFNCMapsLinkKind"],"FKind","SetKind");
  });
  rtl.createClass(this,"TTMSFNCMapsHeadLinks",pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection,function () {
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
      Result = $mod.TTMSFNCMapsHeadLink;
      return Result;
    };
    this.GetOwner = function () {
      var Result = null;
      Result = this.FOwner$1;
      return Result;
    };
    this.Create$3 = function (AOwner) {
      pas.Classes.TOwnedCollection.Create$2.call(this,AOwner,$mod.TTMSFNCMapsHeadLink);
      this.FOwner$1 = AOwner;
      return this;
    };
    this.Clear$1 = function () {
      var l = null;
      var ci = null;
      l = this.FOwner$1;
      if (l != null) l.BeginUpdate();
      if (this.GetCount() > 0) {
        while (this.GetCount() > 0) {
          ci = this.GetItem$1(this.GetCount() - 1);
          ci = rtl.freeLoc(ci);
        };
      };
      if (l != null) l.EndUpdate();
    };
    this.Add$1 = function () {
      var Result = null;
      Result = pas.Classes.TCollection.Add.call(this);
      return Result;
    };
    this.AddScript = function (AURL) {
      var Result = null;
      Result = pas.Classes.TCollection.Add.call(this);
      Result.SetKind($mod.TTMSFNCMapsLinkKind.mlkScript);
      Result.SetURL(AURL);
      return Result;
    };
    this.AddLink = function (AURL) {
      var Result = null;
      Result = pas.Classes.TCollection.Add.call(this);
      Result.SetKind($mod.TTMSFNCMapsLinkKind.mlkLink);
      Result.SetURL(AURL);
      return Result;
    };
    this.AddStyleSheetLink = function (AURL) {
      var Result = null;
      Result = pas.Classes.TCollection.Add.call(this);
      Result.SetKind($mod.TTMSFNCMapsLinkKind.mlkLink);
      Result.SetURL(AURL);
      Result.SetRel("stylesheet");
      return Result;
    };
    this.AddStyle = function (AStyle) {
      var Result = null;
      Result = pas.Classes.TCollection.Add.call(this);
      Result.SetKind($mod.TTMSFNCMapsLinkKind.mlkStyle);
      Result.FContent.Assign(AStyle);
      return Result;
    };
    this.Insert$1 = function (Index) {
      var Result = null;
      Result = pas.Classes.TCollection.Insert.call(this,Index);
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$3",2,[["AOwner",$mod.$rtti["TTMSFNCCustomMaps"]]]);
  });
  rtl.createClass(this,"TTMSFNCMapsOptions",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FDefaultLongitude = 0.0;
      this.FDefaultLatitude = 0.0;
      this.FOnChange = null;
      this.FConsole = false;
      this.FDefaultZoomLevel = 0.0;
      this.FShowZoomControl = false;
      this.FShowMapTypeControl = false;
      this.FLocale = "";
      this.FZoomOnDblClick = false;
      this.FZoomOnWheelScroll = false;
      this.FPanning = false;
      this.FBackgroundColor = 0;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.IsDefaultLatitudeStored = function () {
      var Result = false;
      Result = this.FDefaultLatitude !== 40.689247;
      return Result;
    };
    this.IsDefaultLongitudeStored = function () {
      var Result = false;
      Result = this.FDefaultLongitude !== -74.044502;
      return Result;
    };
    this.SetDefaultLatitude = function (Value) {
      if (this.FDefaultLatitude !== Value) {
        this.FDefaultLatitude = Value;
        this.Changed();
      };
    };
    this.SetDefaultLongitude = function (Value) {
      if (this.FDefaultLongitude !== Value) {
        this.FDefaultLongitude = Value;
        this.Changed();
      };
    };
    this.SetConsole = function (Value) {
      if (this.FConsole !== Value) {
        this.FConsole = Value;
        this.Changed();
      };
    };
    this.SetDefaultZoomLevel = function (Value) {
      if (this.FDefaultZoomLevel !== Value) {
        this.FDefaultZoomLevel = Value;
        this.Changed();
      };
    };
    this.SetShowMapTypeControl = function (Value) {
      if (this.FShowMapTypeControl !== Value) {
        this.FShowMapTypeControl = Value;
        this.Changed();
      };
    };
    this.SetShowZoomControl = function (Value) {
      if (this.FShowZoomControl !== Value) {
        this.FShowZoomControl = Value;
        this.Changed();
      };
    };
    this.IsLocaleStored = function () {
      var Result = false;
      Result = this.FLocale !== pas["WEBLib.TMSFNCMapsCommonTypes"].DEFAULT_LOCALE;
      return Result;
    };
    this.SetLocale = function (Value) {
      if (this.FLocale !== Value) {
        this.FLocale = Value;
        this.Changed();
      };
    };
    this.SetZoomOnDblClick = function (Value) {
      if (this.FZoomOnDblClick !== Value) {
        this.FZoomOnDblClick = Value;
        this.Changed();
      };
    };
    this.SetPanning = function (Value) {
      if (this.FPanning !== Value) {
        this.FPanning = Value;
        this.Changed();
      };
    };
    this.SetZoomOnWheelScroll = function (Value) {
      if (this.FZoomOnWheelScroll !== Value) {
        this.FZoomOnWheelScroll = Value;
        this.Changed();
      };
    };
    this.SetBackgroundColor = function (Value) {
      if (this.FBackgroundColor !== Value) {
        this.FBackgroundColor = Value;
        this.Changed();
      };
    };
    this.Changed = function () {
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCMapsOptions.isPrototypeOf(Source)) {
        this.FDefaultLongitude = rtl.as(Source,$mod.TTMSFNCMapsOptions).FDefaultLongitude;
        this.FDefaultLatitude = rtl.as(Source,$mod.TTMSFNCMapsOptions).FDefaultLatitude;
        this.FConsole = rtl.as(Source,$mod.TTMSFNCMapsOptions).FConsole;
        this.FShowZoomControl = rtl.as(Source,$mod.TTMSFNCMapsOptions).FShowZoomControl;
        this.FShowMapTypeControl = rtl.as(Source,$mod.TTMSFNCMapsOptions).FShowMapTypeControl;
        this.FZoomOnDblClick = rtl.as(Source,$mod.TTMSFNCMapsOptions).FZoomOnDblClick;
        this.FZoomOnWheelScroll = rtl.as(Source,$mod.TTMSFNCMapsOptions).FZoomOnWheelScroll;
        this.FPanning = rtl.as(Source,$mod.TTMSFNCMapsOptions).FPanning;
      } else pas.Classes.TPersistent.Assign.apply(this,arguments);
    };
    this.Create$1 = function () {
      this.FZoomOnDblClick = true;
      this.FDefaultLatitude = 40.689247;
      this.FDefaultLongitude = -74.044502;
      this.FDefaultZoomLevel = 12;
      this.FShowZoomControl = true;
      this.FShowMapTypeControl = true;
      this.FLocale = pas["WEBLib.TMSFNCMapsCommonTypes"].DEFAULT_LOCALE;
      this.FZoomOnWheelScroll = true;
      this.FPanning = true;
      return this;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addProperty("Console",2,rtl.boolean,"FConsole","SetConsole",{Default: false});
    $r.addProperty("Locale",14,rtl.string,"FLocale","SetLocale",{stored: "IsLocaleStored"});
    $r.addProperty("DefaultLatitude",14,rtl.double,"FDefaultLatitude","SetDefaultLatitude",{stored: "IsDefaultLatitudeStored"});
    $r.addProperty("DefaultLongitude",14,rtl.double,"FDefaultLongitude","SetDefaultLongitude",{stored: "IsDefaultLongitudeStored"});
    $r.addProperty("DefaultZoomLevel",2,rtl.double,"FDefaultZoomLevel","SetDefaultZoomLevel");
    $r.addProperty("ShowZoomControl",2,rtl.boolean,"FShowZoomControl","SetShowZoomControl",{Default: true});
    $r.addProperty("ShowMapTypeControl",2,rtl.boolean,"FShowMapTypeControl","SetShowMapTypeControl",{Default: true});
    $r.addProperty("ZoomOnDblClick",2,rtl.boolean,"FZoomOnDblClick","SetZoomOnDblClick",{Default: true});
    $r.addProperty("ZoomOnWheelScroll",2,rtl.boolean,"FZoomOnWheelScroll","SetZoomOnWheelScroll",{Default: true});
    $r.addProperty("Panning",2,rtl.boolean,"FPanning","SetPanning",{Default: true});
  });
  this.$rtti.$MethodVar("TTMSFNCMapsGetDefaultHTMLMessageEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ADefaultHTMLMessage",rtl.string,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCMapsCustomizePolyElementEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ACustomizePolyElement",rtl.string,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCMapsCustomizeMarkerEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ACustomizeMarker",rtl.string,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCMapsCustomizePopupEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ACustomizePopup",rtl.string,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCMapsCustomizeOptionsEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ACustomizeOptions",rtl.string,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCMapsCustomizeMapEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ACustomizeMap",rtl.string,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCMapsCustomizeGlobalVariablesEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ACustomizeGlobalVariables",rtl.string,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCMapsCustomizeJavaScriptEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ACustomizeJavaScript",rtl.string,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCMapsCustomizeCSSEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ACustomizeCSS",rtl.string,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCMapsCustomizeHeadLinksEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AList",this.$rtti["TTMSFNCMapsLinksList"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCMapsCustomizeLocalAccessFileNameEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AFileName",rtl.string,1]]), methodkind: 0});
  this.$rtti.$DynArray("TTMSFNCMapsMarkersArray",{eltype: this.$rtti["TTMSFNCMapsMarker"]});
  rtl.createClass(this,"TTMSFNCMapsEventData",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FEvent = "";
      this.FCoordinate = null;
      this.FEventName = "";
      this.FX = 0.0;
      this.FY = 0.0;
      this.FID = "";
      this.FPolyElement = null;
      this.FMarker = null;
      this.FCustomData = "";
    };
    this.$final = function () {
      this.FCoordinate = undefined;
      this.FPolyElement = undefined;
      this.FMarker = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.Create$1 = function () {
      this.FEvent = "";
      this.FCoordinate = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinate.$create("Create$1");
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FCoordinate");
      pas.System.TObject.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addProperty("ID",0,rtl.string,"FID","FID");
    $r.addProperty("EventName",0,rtl.string,"FEventName","FEventName");
    $r.addProperty("Coordinate",0,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinate"],"FCoordinate","");
    $r.addProperty("X",0,rtl.double,"FX","FX");
    $r.addProperty("Y",0,rtl.double,"FY","FY");
  });
  rtl.createClass(this,"TTMSFNCMapsGeoJSONEventData",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FJSONValue = null;
      this.FPolygon = [];
      this.FPolyline = [];
      this.FPoint = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$new();
    };
    this.$final = function () {
      this.FJSONValue = undefined;
      this.FPolygon = undefined;
      this.FPolyline = undefined;
      this.FPoint = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.Create$1 = function () {
      this.FJSONValue = null;
      return this;
    };
    this.Destroy = function () {
      pas.System.TObject.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
  });
  this.$rtti.$MethodVar("TTMSFNCMapsGeoJSONObjectEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AEventData",this.$rtti["TTMSFNCMapsGeoJSONEventData"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCMapsBaseEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AEventData",this.$rtti["TTMSFNCMapsEventData"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCMapsGetCenterCoordinateEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ACoordinate",pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinateRec"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCMapsGetBoundsEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ABounds",pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsBoundsRec"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCMapsGetZoomLevelEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AZoomLevel",rtl.double]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCMapsRouteCalculatorWayPointEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AMarker",this.$rtti["TTMSFNCMapsMarker"]],["ASegment",pas["WEBLib.TMSFNCRouteCalculator"].$rtti["TTMSFNCRouteCalculatorSegment"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCMapsRouteCalculatorPolylineEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["APolyline",this.$rtti["TTMSFNCMapsPolyline"]],["ASegment",pas["WEBLib.TMSFNCRouteCalculator"].$rtti["TTMSFNCRouteCalculatorSegment"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCMapsRouteCalculatorDeletePolylineEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ACanDelete",rtl.boolean,1],["APolyline",this.$rtti["TTMSFNCMapsPolyline"]],["ASegment",pas["WEBLib.TMSFNCRouteCalculator"].$rtti["TTMSFNCRouteCalculatorSegment"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCMapsRouteCalculatorDeleteMarkerEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ACanDelete",rtl.boolean,1],["AMarker",this.$rtti["TTMSFNCMapsMarker"]],["ASegment",pas["WEBLib.TMSFNCRouteCalculator"].$rtti["TTMSFNCRouteCalculatorSegment"]]]), methodkind: 0});
  this.$rtti.$ClassRef("TTMSFNCMapsOptionsClass",{instancetype: this.$rtti["TTMSFNCMapsOptions"]});
  this.$rtti.$ClassRef("TTMSFNCMapsMarkersClass",{instancetype: this.$rtti["TTMSFNCMapsMarkers"]});
  this.$rtti.$Class("TTMSFNCMapsElementContainers");
  this.$rtti.$ClassRef("TTMSFNCMapsElementContainersClass",{instancetype: this.$rtti["TTMSFNCMapsElementContainers"]});
  this.$rtti.$Class("TTMSFNCMapsLabels");
  this.$rtti.$ClassRef("TTMSFNCMapsLabelsClass",{instancetype: this.$rtti["TTMSFNCMapsLabels"]});
  this.$rtti.$ClassRef("TTMSFNCMapsHeadLinksClass",{instancetype: this.$rtti["TTMSFNCMapsHeadLinks"]});
  this.$rtti.$ClassRef("TTMSFNCMapsRectanglesClass",{instancetype: this.$rtti["TTMSFNCMapsRectangles"]});
  this.$rtti.$ClassRef("TTMSFNCMapsCirclesClass",{instancetype: this.$rtti["TTMSFNCMapsCircles"]});
  this.$rtti.$ClassRef("TTMSFNCMapsPolylinesClass",{instancetype: this.$rtti["TTMSFNCMapsPolylines"]});
  this.$rtti.$ClassRef("TTMSFNCMapsPolygonsClass",{instancetype: this.$rtti["TTMSFNCMapsPolygons"]});
  this.$rtti.$Class("TTMSFNCMapsElementActions");
  this.$rtti.$Class("TTMSFNCMapsElementContainer");
  this.TTMSFNCMapsHTMLEvent = {"0": "heClick", heClick: 0, "1": "heDblClick", heDblClick: 1, "2": "heKeyPress", heKeyPress: 2, "3": "heKeyDown", heKeyDown: 3, "4": "heKeyUp", heKeyUp: 4, "5": "heMouseDown", heMouseDown: 5, "6": "heMouseMove", heMouseMove: 6, "7": "heMouseUp", heMouseUp: 7, "8": "heMouseEnter", heMouseEnter: 8, "9": "heMouseLeave", heMouseLeave: 9, "10": "heBlur", heBlur: 10, "11": "heFocus", heFocus: 11, "12": "heChange", heChange: 12, "13": "heSelect", heSelect: 13, "14": "heCustom", heCustom: 14, "15": "heNone", heNone: 15};
  this.$rtti.$Enum("TTMSFNCMapsHTMLEvent",{minvalue: 0, maxvalue: 15, ordtype: 1, enumtype: this.TTMSFNCMapsHTMLEvent});
  this.TTMSFNCMapsPosition = {"0": "poCustom", poCustom: 0, "1": "poTopLeft", poTopLeft: 1, "2": "poTopCenter", poTopCenter: 2, "3": "poTopRight", poTopRight: 3, "4": "poCenterLeft", poCenterLeft: 4, "5": "poCenterCenter", poCenterCenter: 5, "6": "poBottomLeft", poBottomLeft: 6, "7": "poBottomCenter", poBottomCenter: 7, "8": "poBottomRight", poBottomRight: 8, "9": "poCoordinate", poCoordinate: 9, "10": "poBounds", poBounds: 10};
  this.$rtti.$Enum("TTMSFNCMapsPosition",{minvalue: 0, maxvalue: 10, ordtype: 1, enumtype: this.TTMSFNCMapsPosition});
  this.TTMSFNCMapsPositionType = {"0": "ptCoordinate", ptCoordinate: 0, "1": "ptBounds", ptBounds: 1};
  this.$rtti.$Enum("TTMSFNCMapsPositionType",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TTMSFNCMapsPositionType});
  this.TTMSFNCMapsReturnValue = {"0": "rvNone", rvNone: 0, "1": "rvValue", rvValue: 1, "2": "rvChecked", rvChecked: 2, "3": "rvInnerHTML", rvInnerHTML: 3, "4": "rvInnerText", rvInnerText: 4, "5": "rvSelectedIndex", rvSelectedIndex: 5};
  this.$rtti.$Enum("TTMSFNCMapsReturnValue",{minvalue: 0, maxvalue: 5, ordtype: 1, enumtype: this.TTMSFNCMapsReturnValue});
  this.TTMSFNCMapsLabelType = {"0": "ltLabel", ltLabel: 0, "1": "ltBalloon", ltBalloon: 1};
  this.$rtti.$Enum("TTMSFNCMapsLabelType",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TTMSFNCMapsLabelType});
  rtl.createClass(this,"TTMSFNCMapsElementAction",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FHTMLElementID = "";
      this.FElementEvent = 0;
      this.FTag = 0;
      this.FEnabled = false;
      this.FName = "";
      this.FOnExecute = null;
      this.FCustomEvent = "";
      this.FEventReturnValue = 0;
      this.FOwner = null;
    };
    this.$final = function () {
      this.FOnExecute = undefined;
      this.FOwner = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.SetHTMLElementID = function (Value) {
      if (this.FHTMLElementID !== Value) {
        this.FHTMLElementID = Value;
        this.UpdateAction();
      };
    };
    this.SetName = function (Value) {
      this.FName = Value;
    };
    this.SetElementEvent = function (Value) {
      if (this.FElementEvent !== Value) {
        this.FElementEvent = Value;
        this.UpdateAction();
      };
    };
    this.SetEnabled = function (Value) {
      if (this.FEnabled !== Value) {
        this.FEnabled = Value;
        this.UpdateAction();
      };
    };
    this.SetCustomEvent = function (Value) {
      if (this.FCustomEvent !== Value) {
        this.FCustomEvent = Value;
        this.UpdateAction();
      };
    };
    this.SetEventReturnValue = function (Value) {
      if (this.FEventReturnValue !== Value) {
        this.FEventReturnValue = Value;
        this.UpdateAction();
      };
    };
    this.UpdateAction = function () {
      if (this.FOwner != null) this.FOwner.UpdateElementContainer();
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      if (ACollection != null) this.FOwner = rtl.as(this.FCollection,$mod.TTMSFNCMapsElementActions).FOwner$1;
      this.FTag = 0;
      this.FName = "Action" + pas.SysUtils.IntToStr(this.GetIndex());
      this.FEnabled = true;
      this.FElementEvent = $mod.TTMSFNCMapsHTMLEvent.heClick;
      this.FHTMLElementID = "";
      this.FCustomEvent = "";
      this.FEventReturnValue = $mod.TTMSFNCMapsReturnValue.rvNone;
      return this;
    };
    this.Destroy = function () {
      pas.Classes.TCollectionItem.Destroy.call(this);
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCMapsElementAction.isPrototypeOf(Source)) {
        this.FEnabled = rtl.as(Source,$mod.TTMSFNCMapsElementAction).FEnabled;
        this.FElementEvent = rtl.as(Source,$mod.TTMSFNCMapsElementAction).FElementEvent;
        this.FHTMLElementID = rtl.as(Source,$mod.TTMSFNCMapsElementAction).FHTMLElementID;
        this.FTag = rtl.as(Source,$mod.TTMSFNCMapsElementAction).FTag;
        this.FCustomEvent = rtl.as(Source,$mod.TTMSFNCMapsElementAction).FCustomEvent;
        this.FEventReturnValue = rtl.as(Source,$mod.TTMSFNCMapsElementAction).FEventReturnValue;
        this.FName = rtl.as(Source,$mod.TTMSFNCMapsElementAction).FName;
        this.FTag = rtl.as(Source,$mod.TTMSFNCMapsElementAction).FTag;
        this.FOnExecute = rtl.as(Source,$mod.TTMSFNCMapsElementAction).FOnExecute;
      };
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled",{Default: true});
    $r.addProperty("Event",2,$mod.$rtti["TTMSFNCMapsHTMLEvent"],"FElementEvent","SetElementEvent",{Default: $mod.TTMSFNCMapsHTMLEvent.heClick});
    $r.addProperty("CustomEvent",2,rtl.string,"FCustomEvent","SetCustomEvent");
    $r.addProperty("EventReturnValue",2,$mod.$rtti["TTMSFNCMapsReturnValue"],"FEventReturnValue","SetEventReturnValue",{Default: $mod.TTMSFNCMapsReturnValue.rvNone});
    $r.addProperty("HTMLElementID",2,rtl.string,"FHTMLElementID","SetHTMLElementID");
    $r.addProperty("Name",2,rtl.string,"FName","SetName");
    $r.addProperty("Tag",0,rtl.longint,"FTag","FTag",{Default: 0});
    $r.addProperty("OnExecute",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnExecute","FOnExecute");
  });
  rtl.createClass(this,"TTMSFNCMapsElementActions",pas.Classes.TOwnedCollection,function () {
    this.$init = function () {
      pas.Classes.TOwnedCollection.$init.call(this);
      this.FOwner$1 = null;
    };
    this.$final = function () {
      this.FOwner$1 = undefined;
      pas.Classes.TOwnedCollection.$final.call(this);
    };
    this.GetItems = function (AIndex) {
      var Result = null;
      Result = this.GetItem(AIndex);
      return Result;
    };
    this.SetItems = function (AIndex, Value) {
      this.SetItem(AIndex,Value);
    };
    this.GetAction = function (AName) {
      var Result = null;
      Result = this.GetActionByName(AName);
      return Result;
    };
    this.Create$3 = function (AOwner) {
      pas.Classes.TOwnedCollection.Create$2.call(this,AOwner,$mod.TTMSFNCMapsElementAction);
      this.FOwner$1 = AOwner;
      return this;
    };
    this.Add$1 = function () {
      var Result = null;
      Result = pas.Classes.TCollection.Add.call(this);
      return Result;
    };
    this.Insert$1 = function (AIndex) {
      var Result = null;
      Result = pas.Classes.TCollection.Insert.call(this,AIndex);
      return Result;
    };
    this.GetActionByName = function (AName) {
      var Result = null;
      var i = 0;
      Result = null;
      for (var $l = 0, $end = this.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        if (pas.SysUtils.CompareText(AName,this.GetItems(i).FName) === 0) {
          Result = this.GetItems(i);
          break;
        };
      };
      return Result;
    };
    this.GetByName = function (AName) {
      var Result = null;
      Result = this.GetActionByName(AName);
      if (!(Result != null)) throw pas.SysUtils.Exception.$create("Create$1",["Action " + AName + " not found"]);
      return Result;
    };
    this.FindByName = function (AName) {
      var Result = null;
      Result = this.GetActionByName(AName);
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$3",2,[["AOwner",$mod.$rtti["TTMSFNCMapsElementContainer"]]]);
  });
  rtl.createClass(this,"TTMSFNCMapsLabel",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FOwner = null;
      this.FReload = false;
      this.FID$1 = "";
      this.FText = "";
      this.FDataPointer = null;
      this.FDataBoolean = false;
      this.FDataObject = null;
      this.FDataString = "";
      this.FDataInteger = 0;
      this.FRecreate = false;
      this.FCoordinate = null;
      this.FVisible = false;
      this.FBorderColor = 0;
      this.FFont = null;
      this.FBackgroundColor = 0;
      this.FBorderWidth = 0;
      this.FBounds = null;
      this.FPosition = 0;
      this.FLabelType = 0;
    };
    this.$final = function () {
      this.FOwner = undefined;
      this.FDataObject = undefined;
      this.FCoordinate = undefined;
      this.FFont = undefined;
      this.FBounds = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.GetID = function () {
      var Result = "";
      if ((this.FID$1 === "") || this.FRecreate) this.FID$1 = pas["WEBLib.TMSFNCTypes"].CreateNewGUID();
      this.FRecreate = false;
      Result = this.FID$1;
      return Result;
    };
    this.SetText = function (Value) {
      if (this.FText !== Value) {
        this.FText = Value;
        this.UpdateLabel();
      };
    };
    this.SetCoordinate = function (Value) {
      if (this.FCoordinate !== Value) {
        this.FCoordinate.Assign(Value);
        this.UpdateLabel();
      };
    };
    this.SetVisible = function (Value) {
      if (this.FVisible !== Value) {
        this.FVisible = Value;
        this.UpdateLabel();
      };
    };
    this.SetBackgroundColor = function (Value) {
      if (this.FBackgroundColor !== Value) {
        this.FBackgroundColor = Value;
        this.UpdateLabel();
      };
    };
    this.SetBorderColor = function (Value) {
      if (this.FBorderColor !== Value) {
        this.FBorderColor = Value;
        this.UpdateLabel();
      };
    };
    this.SetBorderWidth = function (Value) {
      if (this.FBorderWidth !== Value) {
        this.FBorderWidth = Value;
        this.UpdateLabel();
      };
    };
    this.SetFont = function (Value) {
      this.FFont.Assign(Value);
    };
    this.SetBounds = function (Value) {
      if (this.FBounds !== Value) {
        this.FBounds.Assign(Value);
        this.UpdateLabel();
      };
    };
    this.SetPosition = function (Value) {
      if (this.FPosition !== Value) {
        this.FPosition = Value;
        this.UpdateLabel();
      };
    };
    this.SetLabelType = function (Value) {
      if (this.FLabelType !== Value) {
        this.FLabelType = Value;
        this.UpdateLabel();
      };
    };
    this.UpdateLabel = function () {
      this.FReload = true;
      if (this.FOwner != null) this.FOwner.UpdateElementContainers();
    };
    this.LabelChanged = function (Sender) {
      this.UpdateLabel();
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      if (ACollection != null) this.FOwner = rtl.as(this.FCollection,$mod.TTMSFNCMapsLabels).FOwner$1;
      this.FText = "";
      this.FCoordinate = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinate.$create("Create$1");
      this.FCoordinate.FOnChange = rtl.createCallback(this,"LabelChanged");
      this.FBounds = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsBounds.$create("Create$1");
      this.FBounds.FOnChange = rtl.createCallback(this,"LabelChanged");
      this.FVisible = true;
      this.FBackgroundColor = -1;
      this.FBorderColor = -1;
      this.FBorderWidth = 2;
      this.FFont = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFont.$create("Create$2");
      this.FFont.SetSize(14);
      this.FFont.SetName("Roboto");
      this.FFont.FOnChanged = rtl.createCallback(this,"LabelChanged");
      this.FPosition = $mod.TTMSFNCMapsPositionType.ptCoordinate;
      this.FLabelType = $mod.TTMSFNCMapsLabelType.ltLabel;
      this.UpdateLabel();
      return this;
    };
    this.Assign = function (Source) {
      pas.Classes.TPersistent.Assign.apply(this,arguments);
      if ($mod.TTMSFNCMapsLabel.isPrototypeOf(Source)) {
        this.FText = rtl.as(Source,$mod.TTMSFNCMapsLabel).FText;
        this.FCoordinate.Assign(rtl.as(Source,$mod.TTMSFNCMapsLabel).FCoordinate);
        this.FBounds.Assign(rtl.as(Source,$mod.TTMSFNCMapsLabel).FBounds);
        this.FVisible = rtl.as(Source,$mod.TTMSFNCMapsLabel).FVisible;
        this.FBackgroundColor = rtl.as(Source,$mod.TTMSFNCMapsLabel).FBackgroundColor;
        this.FBorderColor = rtl.as(Source,$mod.TTMSFNCMapsLabel).FBorderColor;
        this.FBorderWidth = rtl.as(Source,$mod.TTMSFNCMapsLabel).FBorderWidth;
        this.FFont.Assign(rtl.as(Source,$mod.TTMSFNCMapsLabel).FFont);
        this.FPosition = rtl.as(Source,$mod.TTMSFNCMapsLabel).FPosition;
        this.FLabelType = rtl.as(Source,$mod.TTMSFNCMapsLabel).FLabelType;
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FCoordinate");
      rtl.free(this,"FBounds");
      rtl.free(this,"FFont");
      pas.Classes.TCollectionItem.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("ID",1,rtl.string,"GetID","");
    $r.addProperty("Text",2,rtl.string,"FText","SetText");
    $r.addProperty("Coordinate",2,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinate"],"FCoordinate","SetCoordinate");
    $r.addProperty("Bounds",2,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsBounds"],"FBounds","SetBounds");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible");
    $r.addProperty("BackgroundColor",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FBackgroundColor","SetBackgroundColor",{Default: -1});
    $r.addProperty("BorderColor",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FBorderColor","SetBorderColor",{Default: -1});
    $r.addProperty("BorderWidth",2,rtl.longint,"FBorderWidth","SetBorderWidth",{Default: 2});
    $r.addProperty("Font",2,pas["WEBLib.TMSFNCGraphicsTypes"].$rtti["TTMSFNCGraphicsFont"],"FFont","SetFont");
    $r.addProperty("Position",2,$mod.$rtti["TTMSFNCMapsPositionType"],"FPosition","SetPosition",{Default: $mod.TTMSFNCMapsPositionType.ptCoordinate});
    $r.addProperty("LabelType",2,$mod.$rtti["TTMSFNCMapsLabelType"],"FLabelType","SetLabelType",{Default: $mod.TTMSFNCMapsLabelType.ltLabel});
  });
  rtl.createClass(this,"TTMSFNCMapsLabels",pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection,function () {
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
    this.GetItemByID = function (ID) {
      var Result = null;
      var I = 0;
      var c = null;
      Result = null;
      for (var $l = 0, $end = this.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        c = this.GetItem$1(I);
        if (c.GetID() === ID) {
          Result = c;
          break;
        };
      };
      return Result;
    };
    this.CreateItemClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCMapsLabel;
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
    this.Clear$1 = function () {
      var l = null;
      var ci = null;
      l = this.FOwner$1;
      if (l != null) l.BeginUpdate();
      if (this.GetCount() > 0) {
        while (this.GetCount() > 0) {
          ci = this.GetItem$1(this.GetCount() - 1);
          ci = rtl.freeLoc(ci);
        };
      };
      if (l != null) l.EndUpdate();
    };
    this.Recreate = function () {
      var I = 0;
      for (var $l = 0, $end = this.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        this.GetItem$1(I).FRecreate = true;
      };
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
    $r.addMethod("Create$3",2,[["AOwner",$mod.$rtti["TTMSFNCCustomMaps"]]]);
  });
  rtl.createClass(this,"TTMSFNCMapsElementContainer",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FReload = false;
      this.FID$1 = "";
      this.FDataBoolean = false;
      this.FDataString = "";
      this.FDataObject = null;
      this.FDataInteger = 0;
      this.FDataPointer = null;
      this.FHTML = null;
      this.FRecreate = false;
      this.FVisible = false;
      this.FActions = null;
      this.FPosition = 0;
      this.FHTMLElementID = "";
      this.FHTMLElementClassName = "";
      this.FUseDefaultStyle = false;
      this.FScript = null;
      this.FStyle = null;
      this.FMargins = null;
      this.FCoordinate = null;
      this.FBounds = null;
      this.FLabelType = 0;
      this.FOwner = null;
    };
    this.$final = function () {
      this.FDataObject = undefined;
      this.FHTML = undefined;
      this.FActions = undefined;
      this.FScript = undefined;
      this.FStyle = undefined;
      this.FMargins = undefined;
      this.FCoordinate = undefined;
      this.FBounds = undefined;
      this.FOwner = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.SetHTML = function (Value) {
      if (this.FHTML !== Value) {
        this.FHTML.Assign(Value);
        this.UpdateElementContainer();
      };
    };
    this.GetID = function () {
      var Result = "";
      if ((this.FID$1 === "") || this.FRecreate) this.FID$1 = pas["WEBLib.TMSFNCTypes"].CreateNewGUID();
      this.FRecreate = false;
      Result = this.FID$1;
      return Result;
    };
    this.SetVisible = function (Value) {
      if (this.FVisible !== Value) {
        this.FVisible = Value;
        this.UpdateElementContainer();
      };
    };
    this.SetActions = function (Value) {
      if (this.FActions !== Value) {
        this.FActions.Assign(Value);
      };
    };
    this.SetPosition = function (Value) {
      if (this.FPosition !== Value) {
        this.FPosition = Value;
        this.UpdateElementContainer();
      };
    };
    this.SetHTMLElementClassName = function (Value) {
      if (this.FHTMLElementClassName !== Value) {
        this.FHTMLElementClassName = Value;
        this.UpdateElementContainer();
      };
    };
    this.SetHTMLElementID = function (Value) {
      if (this.FHTMLElementID !== Value) {
        this.FHTMLElementID = Value;
        this.UpdateElementContainer();
      };
    };
    this.SetUseDefaultStyle = function (Value) {
      if (this.FUseDefaultStyle !== Value) {
        this.FUseDefaultStyle = Value;
        this.UpdateElementContainer();
      };
    };
    this.GetHTMLAsBase64 = function () {
      var Result = "";
      Result = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.Encode64(this.FHTML.GetTextStr(),false);
      return Result;
    };
    this.SetStyle = function (Value) {
      if (this.FStyle !== Value) {
        this.FStyle.Assign(Value);
        this.UpdateElementContainer();
      };
    };
    this.SetScript = function (Value) {
      if (this.FScript !== Value) {
        this.FScript.Assign(Value);
        this.UpdateElementContainer();
      };
    };
    this.GetScriptAsBase64 = function () {
      var Result = "";
      Result = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.Encode64(this.FScript.GetTextStr(),false);
      return Result;
    };
    this.GetStyleAsBase64 = function () {
      var Result = "";
      Result = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.Encode64(this.FStyle.GetTextStr(),false);
      return Result;
    };
    this.SetMargins = function (Value) {
      if (this.FMargins !== Value) {
        this.FMargins.Assign(Value);
        this.UpdateElementContainer();
      };
    };
    this.SetCoordinate = function (Value) {
      if (this.FCoordinate !== Value) {
        this.FCoordinate.Assign(Value);
        this.UpdateElementContainer();
      };
    };
    this.SetBounds = function (Value) {
      if (this.FBounds !== Value) {
        this.FBounds = Value;
        this.UpdateElementContainer();
      };
    };
    this.SetLabelType = function (Value) {
      if (this.FLabelType !== Value) {
        this.FLabelType = Value;
        this.UpdateElementContainer();
      };
    };
    this.UpdateElementContainer = function () {
      this.FReload = true;
      if (this.FOwner != null) this.FOwner.UpdateElementContainers();
    };
    this.ElementContainerChanged = function (Sender) {
      this.UpdateElementContainer();
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      if (ACollection != null) this.FOwner = rtl.as(this.FCollection,$mod.TTMSFNCMapsElementContainers).FOwner$1;
      this.FCoordinate = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinate.$create("Create$1");
      this.FCoordinate.FOnChange = rtl.createCallback(this,"ElementContainerChanged");
      this.FBounds = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsBounds.$create("Create$1");
      this.FBounds.FOnChange = rtl.createCallback(this,"ElementContainerChanged");
      this.FHTML = pas.Classes.TStringList.$create("Create$1");
      this.FHTML.FOnChange = rtl.createCallback(this,"ElementContainerChanged");
      this.FVisible = true;
      this.FActions = $mod.TTMSFNCMapsElementActions.$create("Create$3",[this]);
      this.FPosition = $mod.TTMSFNCMapsPosition.poTopLeft;
      this.FHTMLElementID = "ElementContainer" + pas.SysUtils.IntToStr(this.GetIndex());
      this.FHTMLElementClassName = "";
      this.FUseDefaultStyle = true;
      this.FStyle = pas.Classes.TStringList.$create("Create$1");
      this.FStyle.FOnChange = rtl.createCallback(this,"ElementContainerChanged");
      this.FScript = pas.Classes.TStringList.$create("Create$1");
      this.FScript.FOnChange = rtl.createCallback(this,"ElementContainerChanged");
      this.FMargins = pas["WEBLib.TMSFNCTypes"].TTMSFNCMargins.$create("Create$1");
      this.FMargins.SetTop(10);
      this.FMargins.SetLeft(10);
      this.FMargins.SetRight(10);
      this.FMargins.SetBottom(10);
      this.FMargins.FOnChange = rtl.createCallback(this,"ElementContainerChanged");
      this.FLabelType = $mod.TTMSFNCMapsLabelType.ltLabel;
      this.UpdateElementContainer();
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCMapsElementContainer.isPrototypeOf(Source)) {
        this.FID$1 = rtl.as(Source,$mod.TTMSFNCMapsElementContainer).GetID();
        this.FHTML.Assign(rtl.as(Source,$mod.TTMSFNCMapsElementContainer).FHTML);
        this.FVisible = rtl.as(Source,$mod.TTMSFNCMapsElementContainer).FVisible;
        this.FPosition = rtl.as(Source,$mod.TTMSFNCMapsElementContainer).FPosition;
        this.FActions.Assign(rtl.as(Source,$mod.TTMSFNCMapsElementContainer).FActions);
        this.FHTMLElementID = rtl.as(Source,$mod.TTMSFNCMapsElementContainer).FHTMLElementID;
        this.FHTMLElementClassName = rtl.as(Source,$mod.TTMSFNCMapsElementContainer).FHTMLElementClassName;
        this.FUseDefaultStyle = rtl.as(Source,$mod.TTMSFNCMapsElementContainer).FUseDefaultStyle;
        this.FStyle.Assign(rtl.as(Source,$mod.TTMSFNCMapsElementContainer).FStyle);
        this.FScript.Assign(rtl.as(Source,$mod.TTMSFNCMapsElementContainer).FScript);
        this.FMargins.Assign(rtl.as(Source,$mod.TTMSFNCMapsElementContainer).FMargins);
        this.FCoordinate.Assign(rtl.as(Source,$mod.TTMSFNCMapsElementContainer).FCoordinate);
        this.FBounds.Assign(rtl.as(Source,$mod.TTMSFNCMapsElementContainer).FBounds);
        this.FLabelType = rtl.as(Source,$mod.TTMSFNCMapsElementContainer).FLabelType;
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FHTML");
      rtl.free(this,"FActions");
      rtl.free(this,"FStyle");
      rtl.free(this,"FScript");
      rtl.free(this,"FMargins");
      rtl.free(this,"FCoordinate");
      rtl.free(this,"FBounds");
      this.UpdateElementContainer();
      pas.Classes.TCollectionItem.Destroy.call(this);
    };
    this.AddAction = function (AHTMLElementID, AEvent) {
      var Result = null;
      this.FOwner.BeginUpdate();
      Result = this.FActions.Add$1();
      Result.SetHTMLElementID(AHTMLElementID);
      Result.SetElementEvent(AEvent);
      this.FOwner.EndUpdate();
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("ID",1,rtl.string,"GetID","");
    $r.addProperty("HTML",2,pas.Classes.$rtti["TStringList"],"FHTML","SetHTML");
    $r.addProperty("HTMLAsBase64",1,rtl.string,"GetHTMLAsBase64","");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("Actions",2,$mod.$rtti["TTMSFNCMapsElementActions"],"FActions","SetActions");
    $r.addProperty("Coordinate",2,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsCoordinate"],"FCoordinate","SetCoordinate");
    $r.addProperty("Bounds",2,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsBounds"],"FBounds","SetBounds");
    $r.addProperty("Position",2,$mod.$rtti["TTMSFNCMapsPosition"],"FPosition","SetPosition",{Default: $mod.TTMSFNCMapsPosition.poTopLeft});
    $r.addProperty("HTMLElementID",2,rtl.string,"FHTMLElementID","SetHTMLElementID");
    $r.addProperty("HTMLElementClassName",2,rtl.string,"FHTMLElementClassName","SetHTMLElementClassName");
    $r.addProperty("UseDefaultStyle",2,rtl.boolean,"FUseDefaultStyle","SetUseDefaultStyle",{Default: true});
    $r.addProperty("Style",2,pas.Classes.$rtti["TStringList"],"FStyle","SetStyle");
    $r.addProperty("StyleAsBase64",1,rtl.string,"GetStyleAsBase64","");
    $r.addProperty("Script",2,pas.Classes.$rtti["TStringList"],"FScript","SetScript");
    $r.addProperty("ScriptAsBase64",1,rtl.string,"GetScriptAsBase64","");
    $r.addProperty("Margins",2,pas["WEBLib.TMSFNCTypes"].$rtti["TTMSFNCMargins"],"FMargins","SetMargins");
    $r.addProperty("LabelType",2,$mod.$rtti["TTMSFNCMapsLabelType"],"FLabelType","SetLabelType",{Default: $mod.TTMSFNCMapsLabelType.ltLabel});
  });
  rtl.createClass(this,"TTMSFNCMapsElementContainers",pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection,function () {
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
    this.GetItemByID = function (ID) {
      var Result = null;
      var I = 0;
      var c = null;
      Result = null;
      for (var $l = 0, $end = this.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        c = this.GetItem$1(I);
        if (c.GetID() === ID) {
          Result = c;
          break;
        };
      };
      return Result;
    };
    this.CreateItemClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCMapsElementContainer;
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
    this.Clear$1 = function () {
      var l = null;
      var ci = null;
      l = this.FOwner$1;
      if (l != null) l.BeginUpdate();
      if (this.GetCount() > 0) {
        while (this.GetCount() > 0) {
          ci = this.GetItem$1(this.GetCount() - 1);
          ci = rtl.freeLoc(ci);
        };
      };
      if (l != null) l.EndUpdate();
    };
    this.Recreate = function () {
      var I = 0;
      for (var $l = 0, $end = this.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        this.GetItem$1(I).FRecreate = true;
      };
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
    $r.addMethod("Create$3",2,[["AOwner",$mod.$rtti["TTMSFNCCustomMaps"]]]);
  });
  rtl.createClass(this,"TTMSFNCCustomMaps",pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser,function () {
    this.$init = function () {
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.$init.call(this);
      this.FMapEventData = null;
      this.FRouteCalculator = null;
      this.FRouteCalculatorMarker = null;
      this.FRouteCalculatorDragMarker = null;
      this.FRouteCalculatorDragStarted = false;
      this.FRouteCalculatorPolyline = null;
      this.FRouteCalculatorSelectedPolyline = null;
      this.FRouteCalculatorDragX = 0.0;
      this.FRouteCalculatorDragY = 0.0;
      this.FRouteCalculatorDragLat = 0.0;
      this.FRouteCalculatorDragLon = 0.0;
      this.FMapInitialized = false;
      this.FUpdateCount$1 = 0;
      this.FMaps = null;
      this.FMapsInstance = null;
      this.FMapsProperties = null;
      this.FService = 0;
      this.FAPIKey = "";
      this.FOptions = null;
      this.FOnCustomizeJavaScript = null;
      this.FOnCustomizeMap = null;
      this.FOnCustomizeGlobalVariables = null;
      this.FOnCustomizeMarker = null;
      this.FOnCustomizePopup = null;
      this.FOnCustomizeOptions = null;
      this.FOnCustomizePolyElement = null;
      this.FOnMapTypeChanged = null;
      this.FOnZoomChanged = null;
      this.FOnMapClick = null;
      this.FOnMapDblClick = null;
      this.FOnMapMouseUp = null;
      this.FOnMapMouseDown = null;
      this.FOnMapMouseMove = null;
      this.FOnMapMouseEnter = null;
      this.FOnMapMouseLeave = null;
      this.FOnMarkerClick = null;
      this.FOnMarkerRightClick = null;
      this.FOnMarkerDblClick = null;
      this.FOnMarkerMouseUp = null;
      this.FOnMarkerMouseDown = null;
      this.FOnMarkerMouseEnter = null;
      this.FOnMarkerMouseLeave = null;
      this.FOnPolyElementClick = null;
      this.FOnPolyElementRightClick = null;
      this.FOnPolyElementDblClick = null;
      this.FOnPolyElementMouseUp = null;
      this.FOnPolyElementMouseDown = null;
      this.FOnPolyElementMouseEnter = null;
      this.FOnPolyElementMouseLeave = null;
      this.FOnCustomEvent = null;
      this.FOnMapInitialized = null;
      this.FMarkers = null;
      this.FPolygons = null;
      this.FPolylines = null;
      this.FCircles = null;
      this.FRectangles = null;
      this.FOnCustomizeCSS = null;
      this.FOnGetDefaultHTMLMessage = null;
      this.FLocalFileAccess = false;
      this.FOnGetCenterCoordinate = null;
      this.FOnGetBoundsCoordinate = null;
      this.FOnGetZoomLevel = null;
      this.FOnCreateGPXTrack = null;
      this.FOnCreateGPXSegment = null;
      this.FOnCreateGeoJSONObject = null;
      this.FOnRouteCalculatorWayPointAdded = null;
      this.FOnRouteCalculatorWayPointUpdated = null;
      this.FOnRouteCalculatorPolylineAdded = null;
      this.FOnRouteCalculatorPolylineUpdated = null;
      this.FRouteCalculatorSelectedMarker = null;
      this.FOnRouteCalculatorDeletePolylineEvent = null;
      this.FOnRouteCalculatorAfterDeletePolylineEvent = null;
      this.FOnRouteCalculatorAfterDeleteMarkerEvent = null;
      this.FOnRouteCalculatorDeleteMarkerEvent = null;
      this.FOnMapMoveEnd = null;
      this.FOnMapMoveStart = null;
      this.FOnCustomizeHeadLinks = null;
      this.FOnMapRightClick = null;
      this.FElementContainers = null;
      this.FHeadLinks = null;
      this.FOnCustomizeLocalAccessFileName = null;
      this.FLibraryLocation = 0;
      this.FLabels = null;
    };
    this.$final = function () {
      this.FRouteCalculator = undefined;
      this.FRouteCalculatorMarker = undefined;
      this.FRouteCalculatorDragMarker = undefined;
      this.FRouteCalculatorPolyline = undefined;
      this.FRouteCalculatorSelectedPolyline = undefined;
      rtl.setIntfP(this,"FMaps",null);
      rtl.setIntfP(this,"FMapsInstance",null);
      rtl.setIntfP(this,"FMapsProperties",null);
      this.FOptions = undefined;
      this.FOnCustomizeJavaScript = undefined;
      this.FOnCustomizeMap = undefined;
      this.FOnCustomizeGlobalVariables = undefined;
      this.FOnCustomizeMarker = undefined;
      this.FOnCustomizePopup = undefined;
      this.FOnCustomizeOptions = undefined;
      this.FOnCustomizePolyElement = undefined;
      this.FOnMapTypeChanged = undefined;
      this.FOnZoomChanged = undefined;
      this.FOnMapClick = undefined;
      this.FOnMapDblClick = undefined;
      this.FOnMapMouseUp = undefined;
      this.FOnMapMouseDown = undefined;
      this.FOnMapMouseMove = undefined;
      this.FOnMapMouseEnter = undefined;
      this.FOnMapMouseLeave = undefined;
      this.FOnMarkerClick = undefined;
      this.FOnMarkerRightClick = undefined;
      this.FOnMarkerDblClick = undefined;
      this.FOnMarkerMouseUp = undefined;
      this.FOnMarkerMouseDown = undefined;
      this.FOnMarkerMouseEnter = undefined;
      this.FOnMarkerMouseLeave = undefined;
      this.FOnPolyElementClick = undefined;
      this.FOnPolyElementRightClick = undefined;
      this.FOnPolyElementDblClick = undefined;
      this.FOnPolyElementMouseUp = undefined;
      this.FOnPolyElementMouseDown = undefined;
      this.FOnPolyElementMouseEnter = undefined;
      this.FOnPolyElementMouseLeave = undefined;
      this.FOnCustomEvent = undefined;
      this.FOnMapInitialized = undefined;
      this.FMarkers = undefined;
      this.FPolygons = undefined;
      this.FPolylines = undefined;
      this.FCircles = undefined;
      this.FRectangles = undefined;
      this.FOnCustomizeCSS = undefined;
      this.FOnGetDefaultHTMLMessage = undefined;
      this.FOnGetCenterCoordinate = undefined;
      this.FOnGetBoundsCoordinate = undefined;
      this.FOnGetZoomLevel = undefined;
      this.FOnCreateGPXTrack = undefined;
      this.FOnCreateGPXSegment = undefined;
      this.FOnCreateGeoJSONObject = undefined;
      this.FOnRouteCalculatorWayPointAdded = undefined;
      this.FOnRouteCalculatorWayPointUpdated = undefined;
      this.FOnRouteCalculatorPolylineAdded = undefined;
      this.FOnRouteCalculatorPolylineUpdated = undefined;
      this.FRouteCalculatorSelectedMarker = undefined;
      this.FOnRouteCalculatorDeletePolylineEvent = undefined;
      this.FOnRouteCalculatorAfterDeletePolylineEvent = undefined;
      this.FOnRouteCalculatorAfterDeleteMarkerEvent = undefined;
      this.FOnRouteCalculatorDeleteMarkerEvent = undefined;
      this.FOnMapMoveEnd = undefined;
      this.FOnMapMoveStart = undefined;
      this.FOnCustomizeHeadLinks = undefined;
      this.FOnMapRightClick = undefined;
      this.FElementContainers = undefined;
      this.FHeadLinks = undefined;
      this.FOnCustomizeLocalAccessFileName = undefined;
      this.FLabels = undefined;
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.$final.call(this);
    };
    this.SetService = function (Value) {
      if (this.FService !== Value) {
        this.DestroyMap();
        this.FService = Value;
        if ((this.FRouteCalculator != null) && !(this.FService in rtl.createSet($mod.TTMSFNCMapsService.msGoogleMaps,$mod.TTMSFNCMapsService.msOpenLayers,$mod.TTMSFNCMapsService.msHere,$mod.TTMSFNCMapsService.msMapBox,$mod.TTMSFNCMapsService.msTomTom,$mod.TTMSFNCMapsService.msBingMaps))) throw pas.SysUtils.Exception.$create("Create$1",["The TTMSFNCRouteCalculator is not compatible with the selected mapping service."]);
        this.SetMapInitialized(false);
        this.InitializeMap();
      };
    };
    this.SetAPIKey = function (Value) {
      if (this.FAPIKey !== Value) {
        this.FAPIKey = Value;
        this.SetMapInitialized(false);
        this.InitializeHTML();
      };
    };
    this.SetOptions = function (Value) {
      this.FOptions.Assign(Value);
    };
    this.SetMarkers = function (Value) {
      this.FMarkers.Assign(Value);
    };
    this.SetPolylines = function (Value) {
      this.FPolylines.Assign(Value);
    };
    this.SetPolygons = function (Value) {
      this.FPolygons.Assign(Value);
    };
    this.SetRectangles = function (Value) {
      this.FRectangles.Assign(Value);
    };
    this.SetCircles = function (Value) {
      this.FCircles.Assign(Value);
    };
    this.SetMapInitialized = function (Value) {
      if (this.FMapInitialized && !Value) this.ExecuteJavaScript("ResetMap();",null,false);
      this.FMapInitialized = Value;
    };
    this.SetLocalFileAccess = function (Value) {
      if (this.FLocalFileAccess !== Value) {
        this.FLocalFileAccess = Value;
        this.FMapInitialized = false;
        this.InitializeHTML();
      };
    };
    this.SetRouteCalculator = function (Value) {
      this.FRouteCalculator = Value;
      if ((this.FRouteCalculator != null) && !(this.FRouteCalculator.FOnCalculateRoute != null)) this.FRouteCalculator.FOnCalculateRoute = rtl.createCallback(this,"RouteCalculatorDoCalculateRoute");
    };
    this.SetElementContainers = function (Value) {
      this.FElementContainers.Assign(Value);
    };
    this.SetHeadLinks = function (Value) {
      this.FHeadLinks.Assign(Value);
    };
    this.SetLibraryLocation = function (Value) {
      if (this.FLibraryLocation !== Value) {
        this.FLibraryLocation = Value;
        this.FMapInitialized = false;
        this.InitializeHTML();
      };
    };
    this.SetLabels = function (Value) {
      this.FLabels.Assign(Value);
    };
    this.GetMarkersClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCMapsMarkers;
      return Result;
    };
    this.GetElementContainersClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCMapsElementContainers;
      return Result;
    };
    this.GetLabelsClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCMapsLabels;
      return Result;
    };
    this.GetHeadLinksClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCMapsHeadLinks;
      return Result;
    };
    this.GetRectanglesClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCMapsRectangles;
      return Result;
    };
    this.GetCirclesClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCMapsCircles;
      return Result;
    };
    this.GetPolygonsClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCMapsPolygons;
      return Result;
    };
    this.GetPolylinesClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCMapsPolylines;
      return Result;
    };
    this.GetOptionsClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCMapsOptions;
      return Result;
    };
    this.ParseEvent = function (AValue) {
      var Result = false;
      var s = "";
      var cd = "";
      var b = false;
      var ed = null;
      var p = 0;
      var pcd = 0;
      s = AValue;
      b = pas.System.Pos($impl.EVENTDATAPREFIX,s) === 1;
      Result = b;
      if (b) {
        p = pas.System.Pos($impl.EVENTDATAPREFIX,s);
        pcd = pas.System.Pos($impl.CUSTOMDATAPREFIX,s);
        if (pcd > 0) {
          cd = pas.System.Copy(s,pcd + $impl.CUSTOMDATAPREFIX.length,s.length - pcd - 1);
          s = pas.System.Copy(s,p + $impl.EVENTDATAPREFIX.length,pcd - $impl.EVENTDATAPREFIX.length - 1);
        } else {
          s = pas.System.Copy(s,p + $impl.EVENTDATAPREFIX.length,s.length - 1);
          cd = "";
        };
        if (cd !== "") cd = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.URLDecode(cd,true);
        s = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.URLDecode(s,true);
        ed = $mod.TTMSFNCMapsEventData.$create("Create$1");
        try {
          pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.FromJSON.call(ed,s);
          ed.FCustomData = cd;
          if (ed.FID !== "") {
            if (pas.System.Pos("Marker",ed.FEventName) > 0) ed.FMarker = this.GetMarkerByID(ed.FID);
            if (pas.System.Pos("PolyElement",ed.FEventName) > 0) ed.FPolyElement = this.GetPolyElementByID(ed.FID);
          };
          if (ed.FEventName === "Initialized") {
            this.SetMapInitialized(true);
            this.DoMapInitialized();
          } else if (ed.FEventName === "MapTypeChanged") {
            this.DoMapTypeChanged(ed)}
           else if (ed.FEventName === "ZoomChanged") {
            this.DoZoomChanged(ed)}
           else if (ed.FEventName === "MapMoveStart") {
            this.DoMapMoveStart(ed)}
           else if (ed.FEventName === "MapMoveEnd") {
            this.DoMapMoveEnd(ed)}
           else if (ed.FEventName === "MapClick") {
            this.DoMapClick(ed)}
           else if (ed.FEventName === "MapRightClick") {
            this.DoMapRightClick(ed)}
           else if (ed.FEventName === "MapKeyDown") {
            this.DoMapKeyDown(ed)}
           else if (ed.FEventName === "MapDblClick") {
            this.DoMapDblClick(ed)}
           else if (ed.FEventName === "MapMouseMove") {
            this.DoMapMouseMove(ed)}
           else if (ed.FEventName === "MapMouseDown") {
            this.DoMapMouseDown(ed)}
           else if (ed.FEventName === "MapMouseUp") {
            this.DoMapMouseUp(ed)}
           else if (ed.FEventName === "MapMouseEnter") {
            this.DoMapMouseEnter(ed)}
           else if (ed.FEventName === "MapMouseLeave") {
            this.DoMapMouseLeave(ed)}
           else if (ed.FEventName === "MarkerClick") {
            this.DoMarkerClick(ed)}
           else if (ed.FEventName === "MarkerRightClick") {
            this.DoMarkerRightClick(ed)}
           else if (ed.FEventName === "MarkerDblClick") {
            this.DoMarkerDblClick(ed)}
           else if (ed.FEventName === "MarkerMouseDown") {
            this.DoMarkerMouseDown(ed)}
           else if (ed.FEventName === "MarkerMouseUp") {
            this.DoMarkerMouseUp(ed)}
           else if (ed.FEventName === "MarkerMouseEnter") {
            this.DoMarkerMouseEnter(ed)}
           else if (ed.FEventName === "MarkerMouseLeave") {
            this.DoMarkerMouseLeave(ed)}
           else if (ed.FEventName === "PolyElementClick") {
            this.DoPolyElementClick(ed)}
           else if (ed.FEventName === "PolyElementRightClick") {
            this.DoPolyElementRightClick(ed)}
           else if (ed.FEventName === "PolyElementDblClick") {
            this.DoPolyElementDblClick(ed)}
           else if (ed.FEventName === "PolyElementMouseDown") {
            this.DoPolyElementMouseDown(ed)}
           else if (ed.FEventName === "PolyElementMouseUp") {
            this.DoPolyElementMouseUp(ed)}
           else if (ed.FEventName === "PolyElementMouseEnter") {
            this.DoPolyElementMouseEnter(ed)}
           else if (ed.FEventName === "PolyElementMouseLeave") {
            this.DoPolyElementMouseLeave(ed)}
           else {
            this.CallCustomEvent(ed);
          };
        } finally {
          ed = rtl.freeLoc(ed);
        };
      };
      return Result;
    };
    this.ParseScript = function (AValue) {
      var Result = "";
      Result = AValue;
      if (Result === "null") {
        Result = "";
        return Result;
      };
      Result = pas.SysUtils.StringReplace(Result,"[","",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
      Result = pas.SysUtils.StringReplace(Result,"]","",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
      Result = pas.SysUtils.StringReplace(Result,'"',"",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
      return Result;
    };
    this.InternalLoadGPX = function (AText, AAutoDisplay, AZoomToBounds, AStrokeWidth, AStrokeColor, ADisplayElevation, ADisplayTimeStamps, AMinSecondsBetweenTimeStamps) {
      var Result = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXRec.$new();
      var AElevationColors = [];
      AElevationColors = rtl.arraySetLength(AElevationColors,$mod.TTMSFNCMapsGPXColorRec,1);
      AElevationColors[0].Color = AStrokeColor;
      Result.$assign(this.InternalLoadGPX$1(AText,AAutoDisplay,AZoomToBounds,AStrokeWidth,rtl.arrayRef(AElevationColors),ADisplayElevation,ADisplayTimeStamps,AMinSecondsBetweenTimeStamps));
      return Result;
    };
    this.InternalLoadGPX$1 = function (AText, AAutoDisplay, AZoomToBounds, AStrokeWidth, AElevationColors, ADisplayElevation, ADisplayTimeStamps, AMinSecondsBetweenTimeStamps) {
      var Result = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXRec.$new();
      var xmldoc = null;
      var I = 0;
      var J = 0;
      var K = 0;
      var L = 0;
      var iNode = null;
      var nNode = null;
      var sNode = null;
      var snlat = null;
      var snlng = null;
      var cNode = null;
      var pNode = null;
      var eNode = null;
      var v = 0.0;
      var parentNode = null;
      var gpx11 = false;
      var cnt = 0;
      var cntTr = 0;
      var cntSeg = 0;
      var allpath = [];
      var arr = [];
      var nodeName = "";
      var timeStamp = "";
      var ele = 0.0;
      var maxHeight = 0.0;
      var minHeight = 0.0;
      var divHeight = 0.0;
      var heightFound = false;
      var p = null;
      var prevColor = 0;
      var clr = $mod.TTMSFNCMapsGPXColorRec.$new();
      var clrs = [];
      var startTime = 0.0;
      var endTime = 0.0;
      var grade = 0;
      var prevGrade = 0;
      var gradeCount = 0;
      var trackEventData = null;
      var segmentEventData = null;
      var parser = new DOMParser();
      xmldoc = parser.parseFromString(AText, 'text/xml');
      parentNode = xmldoc.documentElement;
      gpx11 = false;
      cntTr = -1;
      minHeight = 0;
      maxHeight = 0;
      endTime = 0;
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
            if (nNode != null) Result.Tracks[cntTr].Name = nNode.nodeName;
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
                        eNode = $impl.FindDOMNode(pNode,"ele");
                        if (eNode != null) {
                          ele = 0;
                          if (pas["WEBLib.TMSFNCMapsCommonTypes"].TryStrToFloatDot(eNode.firstChild.nodeValue,{get: function () {
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
                        eNode = $impl.FindDOMNode(pNode,"time");
                        if (eNode != null) {
                          timeStamp = eNode.firstChild.nodeValue;
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
      if (AAutoDisplay) {
        if (rtl.length(AElevationColors) > 0) {
          clrs = rtl.arraySetLength(clrs,$mod.TTMSFNCMapsGPXColorRec,rtl.length(AElevationColors));
          clrs = rtl.arrayRef(AElevationColors);
        } else {
          clrs = rtl.arraySetLength(clrs,$mod.TTMSFNCMapsGPXColorRec,5);
          clr.Color = 0;
          clrs[0].$assign(clr);
          clr.Color = 32768;
          clrs[1].$assign(clr);
          clr.Color = 65535;
          clrs[2].$assign(clr);
          clr.Color = 42495;
          clrs[3].$assign(clr);
          clr.Color = 255;
          clrs[4].$assign(clr);
        };
        this.SetColor(clrs[0].Color);
        prevColor = this.FColor;
        grade = 0;
        prevGrade = grade;
        this.BeginUpdate();
        for (var $l = 0, $end = rtl.length(Result.Tracks) - 1; $l <= $end; $l++) {
          I = $l;
          for (var $l1 = 0, $end1 = rtl.length(Result.Tracks[I].Segments) - 1; $l1 <= $end1; $l1++) {
            J = $l1;
            if (ADisplayElevation || ADisplayTimeStamps) {
              for (var $l2 = 0, $end2 = rtl.length(Result.Tracks[I].Segments[J]) - 1; $l2 <= $end2; $l2++) {
                K = $l2;
                if (ADisplayTimeStamps && (AMinSecondsBetweenTimeStamps > 0)) {
                  startTime = Result.Tracks[I].Segments[J][K].TimeStamp;
                  if ((startTime !== endTime) && (startTime !== 0) && (pas.DateUtils.SecondsBetween(startTime,endTime) > AMinSecondsBetweenTimeStamps)) {
                    endTime = startTime;
                    this.AddMarker(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(Result.Tracks[I].Segments[J][K + 1]),pas.SysUtils.DateTimeToStr(endTime,false),"");
                  };
                };
                if (ADisplayElevation) {
                  gradeCount = 5;
                  if (rtl.length(clrs) > 1) gradeCount = rtl.length(clrs);
                  divHeight = (maxHeight - minHeight) / gradeCount;
                  grade = 0;
                  for (var $l3 = 0, $end3 = gradeCount - 1; $l3 <= $end3; $l3++) {
                    L = $l3;
                    if (Result.Tracks[I].Segments[J][K].Elevation > (minHeight + (divHeight * L))) grade = L;
                  };
                  arr = rtl.arraySetLength(arr,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,rtl.length(arr) + 1);
                  arr[rtl.length(arr) - 1].$assign(Result.Tracks[I].Segments[J][K]);
                  if (rtl.length(clrs) > 1) {
                    this.SetColor(clrs[grade].Color)}
                   else this.SetColor(pas["WEBLib.TMSFNCGraphicsTypes"].Lighter(clrs[0].Color,grade * Math.round(100 / gradeCount)));
                  if ((grade !== prevGrade) || (K === (rtl.length(Result.Tracks[I].Segments[J]) - 2))) {
                    prevGrade = grade;
                    arr = rtl.arraySetLength(arr,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,rtl.length(arr) + 1);
                    arr[rtl.length(arr) - 1].$assign(Result.Tracks[I].Segments[J][K + 1]);
                    p = this.AddPolyline(rtl.arrayRef(arr),false);
                    p.SetStrokeColor(this.FColor);
                    p.SetStrokeWidth(AStrokeWidth);
                    arr = rtl.arraySetLength(arr,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,0);
                    arr = [];
                  };
                };
              };
            } else {
              p = this.AddPolyline(rtl.arrayRef(Result.Tracks[I].Segments[J]),false);
              p.SetStrokeColor(this.FColor);
              p.SetStrokeWidth(AStrokeWidth);
            };
          };
        };
        this.EndUpdate();
        if (AZoomToBounds) this.ZoomToBounds(rtl.arrayRef(allpath));
      };
      return Result;
    };
    this.InternalLoadGeoJSON = function (AText, AAutoDisplay, AZoomToBounds) {
      var $Self = this;
      var Result = $mod.TTMSFNCMapsGeoJSONRec.$new();
      var jv = null;
      var jvv = null;
      var ja = null;
      var f = 0;
      var I = 0;
      var J = 0;
      var coords = [];
      var minlon = 0.0;
      var maxlon = 0.0;
      var minlat = 0.0;
      var maxlat = 0.0;
      var lon = 0.0;
      var lat = 0.0;
      var typeid = "";
      var featname = "";
      var path = [];
      var allpath = [];
      var p = null;
      function AddCoords(arr) {
        coords[rtl.length(coords) - 1] = rtl.arraySetLength(coords[rtl.length(coords) - 1],pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,rtl.length(coords[rtl.length(coords) - 1]) + 1);
        if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(arr) in rtl.createSet(2,3)) {
          lon = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValueAsDouble(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(arr,0));
          lat = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValueAsDouble(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(arr,1));
          coords[rtl.length(coords) - 1][rtl.length(coords[rtl.length(coords) - 1]) - 1].Longitude = lon;
          coords[rtl.length(coords) - 1][rtl.length(coords[rtl.length(coords) - 1]) - 1].Latitude = lat;
          if (lon > maxlon) maxlon = lon;
          if (lon < minlon) minlon = lon;
          if (lat > maxlat) maxlat = lat;
          if (lat < minlat) minlat = lat;
        };
      };
      function AddCoordArray() {
        coords = rtl.arraySetLength(coords,[],rtl.length(coords) + 1);
      };
      function ParseFeature(AValue) {
        var l = 0;
        var j = 0;
        var k = 0;
        var m = 0;
        var jp = null;
        var geojsondata = null;
        var jaf = null;
        var jac = null;
        var jacc = null;
        var geoJSONEventData = null;
        coords = rtl.arraySetLength(coords,[],0);
        jp = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(AValue,"name");
        if (!(jp != null)) jp = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(AValue,"properties");
        if (jp != null) featname = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(jp,"name");
        jp = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(AValue,"geometry");
        if (jp != null) {
          geojsondata = jp;
          typeid = pas.SysUtils.UpperCase(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(jp,"type"));
          if ((typeid === "POLYGON") || (typeid === "MULTIPOLYGON") || (typeid === "LINESTRING") || (typeid === "MULTILINESTRING") || (typeid === "POINT")) {
            jp = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jp,"coordinates");
            if ((jp != null) && pas["WEBLib.JSON"].TJSONArray.isPrototypeOf(jp)) {
              jaf = rtl.as(jp,pas["WEBLib.JSON"].TJSONArray);
              if ((pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jaf) in rtl.createSet(2,3)) && !pas["WEBLib.JSON"].TJSONArray.isPrototypeOf(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jaf,0))) {
                AddCoords(jaf);
              } else {
                for (var $l = 0, $end = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jaf) - 1; $l <= $end; $l++) {
                  l = $l;
                  jac = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jaf,l),pas["WEBLib.JSON"].TJSONArray);
                  AddCoordArray();
                  if ((pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jac) in rtl.createSet(2,3)) && !pas["WEBLib.JSON"].TJSONArray.isPrototypeOf(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jac,0))) {
                    AddCoords(jac);
                  } else {
                    for (var $l1 = 0, $end1 = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(jac) - 1; $l1 <= $end1; $l1++) {
                      j = $l1;
                      if (pas["WEBLib.JSON"].TJSONArray.isPrototypeOf(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jac,j))) {
                        jacc = rtl.as(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(jac,j),pas["WEBLib.JSON"].TJSONArray);
                        AddCoords(jacc);
                      };
                    };
                  };
                };
              };
            };
            path = rtl.arraySetLength(path,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,0);
            for (var $l2 = 0, $end2 = rtl.length(coords[0]) - 1; $l2 <= $end2; $l2++) {
              k = $l2;
              path = rtl.arraySetLength(path,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,rtl.length(path) + 1);
              path[rtl.length(path) - 1].$assign(pas["WEBLib.TMSFNCMapsCommonTypes"].CreateCoordinate(coords[0][k].Latitude,coords[0][k].Longitude));
              allpath = rtl.arraySetLength(allpath,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,rtl.length(allpath) + 1);
              allpath[rtl.length(allpath) - 1].$assign(pas["WEBLib.TMSFNCMapsCommonTypes"].CreateCoordinate(coords[0][k].Latitude,coords[0][k].Longitude));
            };
            geoJSONEventData = $mod.TTMSFNCMapsGeoJSONEventData.$create("Create$1");
            geoJSONEventData.FJSONValue = geojsondata;
            if (typeid === "POINT") {
              Result.Points = rtl.arraySetLength(Result.Points,$mod.TTMSFNCMapsPointRec,rtl.length(Result.Points) + 1);
              Result.Points[rtl.length(Result.Points) - 1].Coordinate.$assign(path[0]);
              Result.Points[rtl.length(Result.Points) - 1].Name = featname;
              geoJSONEventData.FPoint.$assign(Result.Points[rtl.length(Result.Points) - 1].Coordinate);
            } else if ((typeid === "LINESTRING") || (typeid === "MULTILINESTRING")) {
              Result.Polylines = rtl.arraySetLength(Result.Polylines,$mod.TTMSFNCMapsPolyElementRec,rtl.length(Result.Polylines) + 1);
              Result.Polylines[rtl.length(Result.Polylines) - 1].Coordinates = rtl.arrayRef(path);
              Result.Polylines[rtl.length(Result.Polylines) - 1].Name = featname;
              geoJSONEventData.FPolyline = Result.Polylines[rtl.length(Result.Polylines) - 1].Coordinates;
            } else {
              Result.Polygons = rtl.arraySetLength(Result.Polygons,$mod.TTMSFNCMapsPolyElementRec,rtl.length(Result.Polygons) + 1);
              Result.Polygons[rtl.length(Result.Polygons) - 1].Coordinates = rtl.arrayRef(path);
              Result.Polygons[rtl.length(Result.Polygons) - 1].Name = featname;
              for (var $l3 = 1, $end3 = rtl.length(coords) - 1; $l3 <= $end3; $l3++) {
                m = $l3;
                Result.Polygons[rtl.length(Result.Polygons) - 1].Holes = rtl.arraySetLength(Result.Polygons[rtl.length(Result.Polygons) - 1].Holes,[],rtl.length(Result.Polygons[rtl.length(Result.Polygons) - 1].Holes) + 1);
                Result.Polygons[rtl.length(Result.Polygons) - 1].Holes[m - 1] = rtl.arrayRef(coords[m]);
              };
              geoJSONEventData.FPolygon = Result.Polygons[rtl.length(Result.Polygons) - 1].Coordinates;
            };
            try {
              $Self.DoCreateGeoJSONObject(geoJSONEventData);
            } finally {
              geoJSONEventData = rtl.freeLoc(geoJSONEventData);
            };
          };
        };
      };
      jv = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.ParseJSON(AText);
      if (jv != null) {
        try {
          jvv = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(jv,"features");
          minlon = +1000;
          maxlon = -1000;
          minlat = +1000;
          maxlat = -1000;
          if ((jvv != null) && pas["WEBLib.JSON"].TJSONArray.isPrototypeOf(jvv)) {
            ja = rtl.as(jvv,pas["WEBLib.JSON"].TJSONArray);
            for (var $l = 0, $end = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(ja) - 1; $l <= $end; $l++) {
              f = $l;
              ParseFeature(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(ja,f));
            };
          } else ParseFeature(jv);
        } finally {
          jv = rtl.freeLoc(jv);
        };
        if (AAutoDisplay) {
          for (var $l1 = 0, $end1 = rtl.length(Result.Points) - 1; $l1 <= $end1; $l1++) {
            I = $l1;
            this.AddMarker(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(Result.Points[I].Coordinate),"","");
          };
          for (var $l2 = 0, $end2 = rtl.length(Result.Polylines) - 1; $l2 <= $end2; $l2++) {
            I = $l2;
            this.AddPolyline(Result.Polylines[I].Coordinates,false);
          };
          for (var $l3 = 0, $end3 = rtl.length(Result.Polygons) - 1; $l3 <= $end3; $l3++) {
            I = $l3;
            p = this.AddPolygon(Result.Polygons[I].Coordinates,false);
            for (var $l4 = 0, $end4 = rtl.length(Result.Polygons[I].Holes) - 1; $l4 <= $end4; $l4++) {
              J = $l4;
              p.AddHole(rtl.arrayRef(Result.Polygons[I].Holes[J]));
            };
          };
          if (AZoomToBounds) this.ZoomToBounds(rtl.arrayRef(allpath));
        };
      };
      return Result;
    };
    this.GetCustomGlobalVariables = function () {
      var Result = "";
      Result = "";
      return Result;
    };
    this.GetLocalAccessFileName = function () {
      var Result = "";
      Result = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.AddBackslash(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetTempPath()) + pas["WEBLib.TMSFNCTypes"].CreateNewGUID() + ".html";
      this.DoCustomizeLocalAccessFileName({get: function () {
          return Result;
        }, set: function (v) {
          Result = v;
        }});
      return Result;
    };
    this.GetCustomFunctions = function () {
      var Result = "";
      Result = "";
      return Result;
    };
    this.GetCustomOptions = function () {
      var Result = "";
      Result = "";
      return Result;
    };
    this.GetCustomMap = function () {
      var Result = "";
      Result = "";
      return Result;
    };
    this.GetAddCustomObjects = function () {
      var Result = "";
      Result = "";
      return Result;
    };
    this.RouteCalculatorCheck = function () {
      var Result = false;
      if ((this.FRouteCalculator != null) && this.FRouteCalculator.FActive && (this.FService in rtl.createSet($mod.TTMSFNCMapsService.msGoogleMaps,$mod.TTMSFNCMapsService.msOpenLayers,$mod.TTMSFNCMapsService.msHere,$mod.TTMSFNCMapsService.msMapBox,$mod.TTMSFNCMapsService.msTomTom,$mod.TTMSFNCMapsService.msBingMaps))) {
        Result = true}
       else Result = false;
      return Result;
    };
    this.GetRouteCalculatorStartMarker = function () {
      var Result = "";
      if (this.RouteCalculatorCheck()) {
        if (this.FRouteCalculator.FOptions.FPolyline.FStartMarker === "") {
          Result = pas["WEBLib.TMSFNCRouteCalculator"].DEFAULTSTARTMARKER}
         else Result = this.FRouteCalculator.FOptions.FPolyline.FStartMarker;
      } else Result = "";
      return Result;
    };
    this.GetRouteCalculatorEndMarker = function () {
      var Result = "";
      if (this.RouteCalculatorCheck()) {
        if (this.FRouteCalculator.FOptions.FPolyline.FEndMarker === "") {
          Result = pas["WEBLib.TMSFNCRouteCalculator"].DEFAULTENDMARKER}
         else Result = this.FRouteCalculator.FOptions.FPolyline.FEndMarker;
      } else Result = "";
      return Result;
    };
    this.GetRouteCalculatorWayPointMarker = function () {
      var Result = "";
      if (this.RouteCalculatorCheck()) {
        if (this.FRouteCalculator.FOptions.FPolyline.FWayPointMarker === "") {
          Result = pas["WEBLib.TMSFNCRouteCalculator"].DEFAULTWAYPOINTMARKER}
         else Result = this.FRouteCalculator.FOptions.FPolyline.FWayPointMarker;
      } else Result = "";
      return Result;
    };
    this.GetRouteCalculatorAddWayPointMarker = function () {
      var Result = "";
      if (this.RouteCalculatorCheck()) {
        if (this.FRouteCalculator.FOptions.FPolyline.FAddWayPointMarker === "") {
          Result = pas["WEBLib.TMSFNCRouteCalculator"].DEFAULTADDWAYPOINTMARKER}
         else Result = this.FRouteCalculator.FOptions.FPolyline.FAddWayPointMarker;
      } else Result = "";
      return Result;
    };
    this.GetRouteCalculatorSelectedWayPointMarker = function () {
      var Result = "";
      if (this.RouteCalculatorCheck()) {
        if (this.FRouteCalculator.FOptions.FPolyline.FAddWayPointMarker === "") {
          Result = pas["WEBLib.TMSFNCRouteCalculator"].DEFAULTSELECTEDWAYPOINTMARKER}
         else Result = this.FRouteCalculator.FOptions.FPolyline.FSelectedWayPointMarker;
      } else Result = "";
      return Result;
    };
    this.RouteCalculatorClearSelected = function () {
      if (this.FRouteCalculatorSelectedPolyline != null) {
        this.FRouteCalculatorSelectedPolyline.SetStrokeColor(this.FRouteCalculator.FOptions.FPolyline.FStrokeColor);
        this.FRouteCalculatorSelectedPolyline = null;
      };
      if (this.FRouteCalculatorSelectedMarker != null) {
        if (this.FRouteCalculatorSelectedMarker.FDataString === $mod.ROUTECALCULATORMARKER) {
          this.FRouteCalculatorSelectedMarker.SetIconURL(this.GetRouteCalculatorWayPointMarker())}
         else if (this.FRouteCalculatorSelectedMarker.FDataString === $mod.ROUTECALCULATORSTARTMARKER) {
          this.FRouteCalculatorSelectedMarker.SetIconURL(this.GetRouteCalculatorStartMarker())}
         else if (this.FRouteCalculatorSelectedMarker.FDataString === $mod.ROUTECALCULATORENDMARKER) this.FRouteCalculatorSelectedMarker.SetIconURL(this.GetRouteCalculatorEndMarker());
        this.FRouteCalculatorSelectedMarker = null;
      };
    };
    this.SetName = function (NewName) {
      this.DestroyMap();
      this.FMapInitialized = false;
      pas["WEBLib.Controls"].TCustomControl.SetName.apply(this,arguments);
      if (this.FUpdateCount$1 > 0) return;
      this.InitializeMap();
    };
    this.Notification = function (AComponent, Operation) {
      pas["WEBLib.Menus"].TWebCustomControl.Notification.apply(this,arguments);
      if ((Operation === pas.Classes.TOperation.opRemove) && (AComponent === this.FRouteCalculator)) this.FRouteCalculator = null;
    };
    this.Loaded = function () {
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.Loaded.call(this);
      this.BeginUpdate();
      this.EndUpdate();
    };
    this.DestroyMap = function () {
      this.RemoveStyles();
      this.RemoveScripts();
    };
    this.DoMapInitialized = function () {
      if (this.FOnMapInitialized != null) this.FOnMapInitialized(this);
    };
    this.DoCustomizeLocalAccessFileName = function (AFileName) {
      if (this.FOnCustomizeLocalAccessFileName != null) this.FOnCustomizeLocalAccessFileName(this,AFileName);
    };
    this.DoGetZoomLevel = function (AValue) {
      var z = 0.0;
      if (AValue === "null") return;
      if (pas["WEBLib.TMSFNCMapsCommonTypes"].TryStrToFloatDot(AValue,{get: function () {
          return z;
        }, set: function (v) {
          z = v;
        }})) {
        if (this.FOnGetZoomLevel != null) this.FOnGetZoomLevel(this,z);
      };
    };
    this.DoGetCenterCoordinate = function (AValue) {
      var c = null;
      var v = "";
      if (AValue === "null") return;
      v = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.URLDecode(AValue,true);
      c = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinate.$create("Create$1");
      try {
        pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.FromJSON.call(c,v);
        if (this.FOnGetCenterCoordinate != null) this.FOnGetCenterCoordinate(this,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(c.GetToRec()));
      } finally {
        c = rtl.freeLoc(c);
      };
    };
    this.DoGetBounds = function (AValue) {
      var c = null;
      var v = "";
      if (AValue === "null") return;
      v = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.URLDecode(AValue,true);
      c = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsBounds.$create("Create$1");
      try {
        pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.FromJSON.call(c,v);
        if (this.FOnGetBoundsCoordinate != null) this.FOnGetBoundsCoordinate(this,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsBoundsRec.$clone(c.GetToRec()));
      } finally {
        c = rtl.freeLoc(c);
      };
    };
    this.DoZoomChanged = function (AEventData) {
      if (this.FOnZoomChanged != null) this.FOnZoomChanged(this,AEventData);
    };
    this.DoMapTypeChanged = function (AEventData) {
      if (this.FOnMapTypeChanged != null) this.FOnMapTypeChanged(this,AEventData);
    };
    this.DoMapMoveStart = function (AEventData) {
      if (this.FOnMapMoveStart != null) this.FOnMapMoveStart(this,AEventData);
    };
    this.DoMapMoveEnd = function (AEventData) {
      if (this.FOnMapMoveEnd != null) this.FOnMapMoveEnd(this,AEventData);
    };
    this.DoMapClick = function (AEventData) {
      var $Self = this;
      function GetRouteStartMarker() {
        var Result = null;
        var I = 0;
        Result = null;
        for (var $l = 0, $end = $Self.FMarkers.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          if ($Self.FMarkers.GetItem$1(I).FDataString === $mod.ROUTECALCULATORSTARTMARKER) {
            Result = $Self.FMarkers.GetItem$1(I);
            return Result;
          };
        };
        return Result;
      };
      function GetRouteMarkerCount() {
        var Result = 0;
        var I = 0;
        Result = 0;
        for (var $l = 0, $end = $Self.FMarkers.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          if (($Self.FMarkers.GetItem$1(I).FDataString === $mod.ROUTECALCULATORMARKER) || ($Self.FMarkers.GetItem$1(I).FDataString === $mod.ROUTECALCULATORSTARTMARKER) || ($Self.FMarkers.GetItem$1(I).FDataString === $mod.ROUTECALCULATORENDMARKER)) Result = Result + 1;
        };
        return Result;
      };
      function GetRoute() {
        var Result = null;
        var I = 0;
        Result = null;
        for (var $l = 0, $end = $Self.FRouteCalculator.FRoutes.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          if ($Self.FRouteCalculator.FRoutes.GetItem$1(I).FDataString === $mod.ROUTECALCULATORROUTE) {
            Result = $Self.FRouteCalculator.FRoutes.GetItem$1(I);
            return Result;
          };
        };
        return Result;
      };
      var m = null;
      var r = null;
      if (this.RouteCalculatorCheck()) {
        this.RouteCalculatorClearSelected();
        m = GetRouteStartMarker();
        if (!(m != null)) {
          m = this.AddMarker(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(AEventData.FCoordinate.GetToRec()),"","");
          m.SetIconURL(this.GetRouteCalculatorStartMarker());
          m.FDataString = $mod.ROUTECALCULATORSTARTMARKER;
        } else if (GetRouteMarkerCount() === 1) {
          this.FRouteCalculator.CalculateRoute$1(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(m.FCoordinate.GetToRec()),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(AEventData.FCoordinate.GetToRec()),null,null,"",null);
        } else {
          r = GetRoute();
          if (r != null) this.FRouteCalculator.AddRouteSegment$1(r,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(AEventData.FCoordinate.GetToRec()),null,"",null);
        };
      };
      if (this.FOnMapClick != null) this.FOnMapClick($Self,AEventData);
    };
    this.DoMapRightClick = function (AEventData) {
      if (this.FOnMapRightClick != null) this.FOnMapRightClick(this,AEventData);
    };
    this.DoMapKeyDown = function (AEventData) {
      var key = 0;
      var k = 0;
      key = 0;
      if (pas.SysUtils.TryStrToInt(AEventData.FCustomData,{get: function () {
          return key;
        }, set: function (v) {
          key = v;
        }})) {
        k = key;
        this.DoKeyPressed({get: function () {
            return k;
          }, set: function (v) {
            k = v;
          }});
      };
    };
    this.DoMapDblClick = function (AEventData) {
      if (this.FOnMapDblClick != null) this.FOnMapDblClick(this,AEventData);
    };
    this.DoMapMouseUp = function (AEventData) {
      if (this.RouteCalculatorCheck()) {
        this.RouteCalculatorMarkerMoved(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(AEventData.FCoordinate.GetToRec()));
        this.RouteCalculatorPolylineMoved(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(AEventData.FCoordinate.GetToRec()));
      };
      if (this.FOnMapMouseUp != null) this.FOnMapMouseUp(this,AEventData);
    };
    this.DoMapMouseDown = function (AEventData) {
      this.ExecuteJavaScript($mod.GETFOCUSMAP + "()",null,false);
      if (this.RouteCalculatorCheck()) this.RouteCalculatorClearSelected();
      if (this.FOnMapMouseDown != null) this.FOnMapMouseDown(this,AEventData);
    };
    this.DoMapMouseMove = function (AEventData) {
      if (this.RouteCalculatorCheck()) {
        if ((AEventData.FX !== this.FRouteCalculatorDragX) || (AEventData.FY !== this.FRouteCalculatorDragY) || (AEventData.FCoordinate.FLatitude !== this.FRouteCalculatorDragLat) || (AEventData.FCoordinate.FLongitude !== this.FRouteCalculatorDragLon)) {
          this.FRouteCalculatorDragX = AEventData.FX;
          this.FRouteCalculatorDragY = AEventData.FY;
          this.FRouteCalculatorDragLat = AEventData.FCoordinate.FLatitude;
          this.FRouteCalculatorDragLon = AEventData.FCoordinate.FLongitude;
          if (this.FRouteCalculatorPolyline != null) {
            this.FOptions.SetPanning(false);
            this.FRouteCalculatorDragStarted = true;
            if (this.FRouteCalculatorDragMarker != null) {
              this.BeginUpdate();
              this.FRouteCalculatorDragMarker.FCoordinate.SetLatitude(AEventData.FCoordinate.FLatitude);
              this.FRouteCalculatorDragMarker.FCoordinate.SetLongitude(AEventData.FCoordinate.FLongitude);
              this.EndUpdate();
            } else {
              this.BeginUpdate();
              this.FRouteCalculatorDragMarker = this.AddMarker(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(AEventData.FCoordinate.GetToRec()),"","");
              this.FRouteCalculatorDragMarker.SetIconURL(this.GetRouteCalculatorAddWayPointMarker());
              this.FRouteCalculatorDragMarker.FDataString = $mod.ROUTECALCULATORDRAGMARKER;
              this.EndUpdate();
            };
          };
          if (this.FRouteCalculatorMarker != null) {
            this.FOptions.SetPanning(false);
            this.FRouteCalculatorDragStarted = true;
            this.BeginUpdate();
            this.FRouteCalculatorMarker.FCoordinate.SetLatitude(AEventData.FCoordinate.FLatitude);
            this.FRouteCalculatorMarker.FCoordinate.SetLongitude(AEventData.FCoordinate.FLongitude);
            this.EndUpdate();
          };
        };
      };
      if (this.FOnMapMouseMove != null) this.FOnMapMouseMove(this,AEventData);
    };
    this.DoMapMouseEnter = function (AEventData) {
      if (this.FOnMapMouseEnter != null) this.FOnMapMouseEnter(this,AEventData);
    };
    this.DoMapMouseLeave = function (AEventData) {
      if (this.FOnMapMouseLeave != null) this.FOnMapMouseLeave(this,AEventData);
    };
    this.DoMarkerClick = function (AEventData) {
      if (this.RouteCalculatorCheck()) {
        this.RouteCalculatorClearSelected();
        if (AEventData.FMarker != null) {
          if ((AEventData.FMarker.FDataString === $mod.ROUTECALCULATORMARKER) || (AEventData.FMarker.FDataString === $mod.ROUTECALCULATORSTARTMARKER) || (AEventData.FMarker.FDataString === $mod.ROUTECALCULATORENDMARKER)) {
            this.FRouteCalculatorSelectedMarker = AEventData.FMarker;
            this.FRouteCalculatorSelectedMarker.SetIconURL(this.GetRouteCalculatorSelectedWayPointMarker());
            this.FRouteCalculatorSelectedMarker.FRecreate = true;
          };
        };
      };
      if (this.FOnMarkerClick != null) this.FOnMarkerClick(this,AEventData);
    };
    this.DoMarkerRightClick = function (AEventData) {
      if (this.FOnMarkerRightClick != null) this.FOnMarkerRightClick(this,AEventData);
    };
    this.DoMarkerDblClick = function (AEventData) {
      if (this.FOnMarkerDblClick != null) this.FOnMarkerDblClick(this,AEventData);
    };
    this.DoMarkerMouseUp = function (AEventData) {
      if (this.RouteCalculatorCheck()) {
        this.RouteCalculatorMarkerMoved(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(AEventData.FCoordinate.GetToRec()));
        this.RouteCalculatorPolylineMoved(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(AEventData.FCoordinate.GetToRec()));
      };
      if (this.FOnMarkerMouseUp != null) this.FOnMarkerMouseUp(this,AEventData);
    };
    this.DoMarkerMouseDown = function (AEventData) {
      if (this.RouteCalculatorCheck()) {
        this.RouteCalculatorClearSelected();
        if (AEventData.FMarker != null) {
          this.FOptions.SetPanning(false);
          this.FRouteCalculatorMarker = AEventData.FMarker;
          this.FRouteCalculatorPolyline = null;
          this.FRouteCalculatorDragStarted = false;
        };
      };
      if (this.FOnMarkerMouseDown != null) this.FOnMarkerMouseDown(this,AEventData);
    };
    this.DoMarkerMouseEnter = function (AEventData) {
      if (this.FOnMarkerMouseEnter != null) this.FOnMarkerMouseEnter(this,AEventData);
    };
    this.DoMarkerMouseLeave = function (AEventData) {
      if (this.FOnMarkerMouseLeave != null) this.FOnMarkerMouseLeave(this,AEventData);
    };
    this.DoPolyElementClick = function (AEventData) {
      if (this.RouteCalculatorCheck()) {
        if (AEventData.FPolyElement.FDataString === $mod.ROUTECALCULATORSEGMENT) {
          this.RouteCalculatorClearSelected();
          if (AEventData.FPolyElement != null) {
            this.FRouteCalculatorSelectedPolyline = AEventData.FPolyElement;
            this.FRouteCalculatorSelectedPolyline.SetStrokeColor(this.FRouteCalculator.FOptions.FPolyline.FSelectedStrokeColor);
            this.FRouteCalculatorSelectedPolyline.FRecreate = true;
          };
        };
      };
      if (this.FOnPolyElementClick != null) this.FOnPolyElementClick(this,AEventData);
    };
    this.DoPolyElementRightClick = function (AEventData) {
      if (this.FOnPolyElementRightClick != null) this.FOnPolyElementRightClick(this,AEventData);
    };
    this.DoPolyElementDblClick = function (AEventData) {
      if (this.FOnPolyElementDblClick != null) this.FOnPolyElementDblClick(this,AEventData);
    };
    this.DoPolyElementMouseUp = function (AEventData) {
      if (this.RouteCalculatorCheck()) {
        this.RouteCalculatorMarkerMoved(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(AEventData.FCoordinate.GetToRec()));
        this.RouteCalculatorPolylineMoved(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(AEventData.FCoordinate.GetToRec()));
      };
      if (this.FOnPolyElementMouseUp != null) this.FOnPolyElementMouseUp(this,AEventData);
    };
    this.DoPolyElementMouseDown = function (AEventData) {
      if (this.RouteCalculatorCheck()) {
        this.RouteCalculatorClearSelected();
        if (AEventData.FPolyElement != null) {
          this.FOptions.SetPanning(false);
          this.FRouteCalculatorPolyline = AEventData.FPolyElement;
          this.FRouteCalculatorMarker = null;
          this.FRouteCalculatorDragStarted = false;
        };
      };
      if (this.FOnPolyElementMouseDown != null) this.FOnPolyElementMouseDown(this,AEventData);
    };
    this.DoPolyElementMouseEnter = function (AEventData) {
      if (this.FOnPolyElementMouseEnter != null) this.FOnPolyElementMouseEnter(this,AEventData);
    };
    this.DoPolyElementMouseLeave = function (AEventData) {
      if (this.FOnPolyElementMouseLeave != null) this.FOnPolyElementMouseLeave(this,AEventData);
    };
    this.DoCreateGPXTrack = function (AEventData) {
      if (this.FOnCreateGPXTrack != null) this.FOnCreateGPXTrack(this,AEventData);
    };
    this.DoCreateGPXSegment = function (AEventData) {
      if (this.FOnCreateGPXSegment != null) this.FOnCreateGPXSegment(this,AEventData);
    };
    this.DoCreateGeoJSONObject = function (AEventData) {
      if (this.FOnCreateGeoJSONObject != null) this.FOnCreateGeoJSONObject(this,AEventData);
    };
    this.DoCustomEvent = function (AEventData) {
      if (this.FOnCustomEvent != null) this.FOnCustomEvent(this,AEventData);
    };
    this.DoCustomizeMap = function (ACustomizeMap) {
      if (this.FOnCustomizeMap != null) this.FOnCustomizeMap(this,ACustomizeMap);
    };
    this.DoCustomizeGlobalVariables = function (ACustomizeGlobalVariables) {
      if (this.FOnCustomizeGlobalVariables != null) this.FOnCustomizeGlobalVariables(this,ACustomizeGlobalVariables);
    };
    this.DoCustomizeMarker = function (ACustomizeMarker) {
      if (this.FOnCustomizeMarker != null) this.FOnCustomizeMarker(this,ACustomizeMarker);
    };
    this.DoCustomizePopup = function (ACustomizePopup) {
      if (this.FOnCustomizePopup != null) this.FOnCustomizePopup(this,ACustomizePopup);
    };
    this.DoCustomizeOptions = function (ACustomizeOptions) {
      if (this.FOnCustomizeOptions != null) this.FOnCustomizeOptions(this,ACustomizeOptions);
    };
    this.DoCustomizePolyElement = function (ACustomizePolyElement) {
      if (this.FOnCustomizePolyElement != null) this.FOnCustomizePolyElement(this,ACustomizePolyElement);
    };
    this.DoCustomizeJavaScript = function (ACustomizeJavaScript) {
      if (this.FOnCustomizeJavaScript != null) this.FOnCustomizeJavaScript(this,ACustomizeJavaScript);
    };
    this.DoCustomizeHeadLinks = function (AList) {
      if (this.FOnCustomizeHeadLinks != null) this.FOnCustomizeHeadLinks(this,AList);
    };
    this.DoCustomizeCSS = function (ACustomizeCSS) {
      if (this.FOnCustomizeCSS != null) this.FOnCustomizeCSS(this,ACustomizeCSS);
    };
    this.DoGetDefaultHTMLMessage = function (AMessage) {
      if (this.FOnGetDefaultHTMLMessage != null) this.FOnGetDefaultHTMLMessage(this,AMessage);
    };
    this.DoRouteCalculatorWayPointAdded = function (AMarker, ASegment) {
      if (this.FOnRouteCalculatorWayPointAdded != null) this.FOnRouteCalculatorWayPointAdded(this,AMarker,ASegment);
    };
    this.DoRouteCalculatorWayPointUpdated = function (AMarker, ASegment) {
      if (this.FOnRouteCalculatorWayPointUpdated != null) this.FOnRouteCalculatorWayPointUpdated(this,AMarker,ASegment);
    };
    this.DoRouteCalculatorPolylineAdded = function (APolyline, ASegment) {
      if (this.FOnRouteCalculatorPolylineAdded != null) this.FOnRouteCalculatorPolylineAdded(this,APolyline,ASegment);
    };
    this.DoRouteCalculatorPolylineUpdated = function (APolyline, ASegment) {
      if (this.FOnRouteCalculatorPolylineUpdated != null) this.FOnRouteCalculatorPolylineUpdated(this,APolyline,ASegment);
    };
    this.DoRouteCalculatorBeforeDeletePolyline = function (ACanDelete, APolyline, ASegment) {
      if (this.FOnRouteCalculatorDeletePolylineEvent != null) this.FOnRouteCalculatorDeletePolylineEvent(this,ACanDelete,APolyline,ASegment);
    };
    this.DoRouteCalculatorAfterDeletePolyline = function () {
      if (this.FOnRouteCalculatorAfterDeletePolylineEvent != null) this.FOnRouteCalculatorAfterDeletePolylineEvent(this);
    };
    this.DoRouteCalculatorBeforeDeleteMarker = function (ACanDelete, AMarker, ASegment) {
      if (this.FOnRouteCalculatorDeleteMarkerEvent != null) this.FOnRouteCalculatorDeleteMarkerEvent(this,ACanDelete,AMarker,ASegment);
    };
    this.DoRouteCalculatorAfterDeleteMarker = function () {
      if (this.FOnRouteCalculatorAfterDeleteMarkerEvent != null) this.FOnRouteCalculatorAfterDeleteMarkerEvent(this);
    };
    this.CallCustomEvent = function (AEventData) {
      var I = 0;
      var J = 0;
      var ActionEventFound = false;
      ActionEventFound = false;
      for (var $l = 0, $end = this.FElementContainers.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        for (var $l1 = 0, $end1 = this.FElementContainers.GetItem$1(I).FActions.GetCount() - 1; $l1 <= $end1; $l1++) {
          J = $l1;
          if (this.FElementContainers.GetItem$1(I).FActions.GetItems(J).FOnExecute != null) {
            if (this.FElementContainers.GetItem$1(I).FActions.GetItems(J).FHTMLElementID === AEventData.FID) {
              if (((this.FElementContainers.GetItem$1(I).FActions.GetItems(J).FElementEvent === $mod.TTMSFNCMapsHTMLEvent.heClick) && (AEventData.FEventName === $mod.ACTIONCLICKEVENT)) || ((this.FElementContainers.GetItem$1(I).FActions.GetItems(J).FElementEvent === $mod.TTMSFNCMapsHTMLEvent.heDblClick) && (AEventData.FEventName === $mod.ACTIONDBLCLICKEVENT)) || ((this.FElementContainers.GetItem$1(I).FActions.GetItems(J).FElementEvent === $mod.TTMSFNCMapsHTMLEvent.heKeyPress) && (AEventData.FEventName === $mod.ACTIONKEYPRESSEVENT)) || ((this.FElementContainers.GetItem$1(I).FActions.GetItems(J).FElementEvent === $mod.TTMSFNCMapsHTMLEvent.heKeyDown) && (AEventData.FEventName === $mod.ACTIONKEYDOWNEVENT)) || ((this.FElementContainers.GetItem$1(I).FActions.GetItems(J).FElementEvent === $mod.TTMSFNCMapsHTMLEvent.heKeyUp) && (AEventData.FEventName === $mod.ACTIONKEYUPEVENT)) || ((this.FElementContainers.GetItem$1(I).FActions.GetItems(J).FElementEvent === $mod.TTMSFNCMapsHTMLEvent.heMouseDown) && (AEventData.FEventName === $mod.ACTIONMOUSEDOWNEVENT)) || ((this.FElementContainers.GetItem$1(I).FActions.GetItems(J).FElementEvent === $mod.TTMSFNCMapsHTMLEvent.heMouseMove) && (AEventData.FEventName === $mod.ACTIONMOUSEMOVEEVENT)) || ((this.FElementContainers.GetItem$1(I).FActions.GetItems(J).FElementEvent === $mod.TTMSFNCMapsHTMLEvent.heMouseUp) && (AEventData.FEventName === $mod.ACTIONMOUSEUPEVENT)) || ((this.FElementContainers.GetItem$1(I).FActions.GetItems(J).FElementEvent === $mod.TTMSFNCMapsHTMLEvent.heMouseEnter) && (AEventData.FEventName === $mod.ACTIONMOUSEENTEREVENT)) || ((this.FElementContainers.GetItem$1(I).FActions.GetItems(J).FElementEvent === $mod.TTMSFNCMapsHTMLEvent.heMouseLeave) && (AEventData.FEventName === $mod.ACTIONMOUSELEAVEEVENT)) || ((this.FElementContainers.GetItem$1(I).FActions.GetItems(J).FElementEvent === $mod.TTMSFNCMapsHTMLEvent.heBlur) && (AEventData.FEventName === $mod.ACTIONBLUREVENT)) || ((this.FElementContainers.GetItem$1(I).FActions.GetItems(J).FElementEvent === $mod.TTMSFNCMapsHTMLEvent.heFocus) && (AEventData.FEventName === $mod.ACTIONFOCUSEVENT)) || ((this.FElementContainers.GetItem$1(I).FActions.GetItems(J).FElementEvent === $mod.TTMSFNCMapsHTMLEvent.heChange) && (AEventData.FEventName === $mod.ACTIONCHANGEEVENT)) || ((this.FElementContainers.GetItem$1(I).FActions.GetItems(J).FElementEvent === $mod.TTMSFNCMapsHTMLEvent.heSelect) && (AEventData.FEventName === $mod.ACTIONSELECTEVENT)) || ((this.FElementContainers.GetItem$1(I).FActions.GetItems(J).FElementEvent === $mod.TTMSFNCMapsHTMLEvent.heCustom) && (AEventData.FEventName === $mod.ACTIONCUSTOMEVENT))) {
                ActionEventFound = true;
                this.FElementContainers.GetItem$1(I).FActions.GetItems(J).FOnExecute(this,AEventData);
              };
            };
          };
        };
      };
      if (!ActionEventFound) this.DoCustomEvent(AEventData);
    };
    this.BeforeNavigate = function (Params) {
      Params.Cancel = this.ParseEvent(Params.URL);
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.BeforeNavigate.apply(this,arguments);
    };
    this.OptionsChanged = function (Sender) {
      this.InitializeHTML();
      this.UpdateOptions();
    };
    this.Initialized = function () {
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.Initialized.call(this);
      this.FMapInitialized = false;
      this.InitializeMap();
    };
    this.InitializeMap = function () {
      var MapsServiceGoogleMaps = null;
      var MapsServiceHere = null;
      var MapsServiceTomTom = null;
      var MapsServiceAzureMaps = null;
      var MapsServiceBingMaps = null;
      var MapsServiceOpenLayers = null;
      var MapsServiceLeaflet = null;
      var MapsServiceMapBox = null;
      var MapsServiceMapKit = null;
      try {
        if ((this.FUpdateCount$1 > 0) || this.IsDestroying() || this.FMapInitialized) return;
        rtl.setIntfP(this,"FMaps",null);
        rtl.setIntfP(this,"FMapsInstance",null);
        var $tmp = this.FService;
        if ($tmp === $mod.TTMSFNCMapsService.msGoogleMaps) {
          if ($mod.TTMSFNCMapsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCMapsServiceGoogleMaps),{get: function () {
              return MapsServiceGoogleMaps;
            }, set: function (v) {
              MapsServiceGoogleMaps = rtl.setIntfL(MapsServiceGoogleMaps,v);
            }})) rtl.setIntfP(this,"FMaps",MapsServiceGoogleMaps.CreateMaps(),true);
        } else if ($tmp === $mod.TTMSFNCMapsService.msHere) {
          if ($mod.TTMSFNCMapsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCMapsServiceHere),{get: function () {
              return MapsServiceHere;
            }, set: function (v) {
              MapsServiceHere = rtl.setIntfL(MapsServiceHere,v);
            }})) rtl.setIntfP(this,"FMaps",MapsServiceHere.CreateMaps(),true);
        } else if ($tmp === $mod.TTMSFNCMapsService.msTomTom) {
          if ($mod.TTMSFNCMapsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCMapsServiceTomTom),{get: function () {
              return MapsServiceTomTom;
            }, set: function (v) {
              MapsServiceTomTom = rtl.setIntfL(MapsServiceTomTom,v);
            }})) rtl.setIntfP(this,"FMaps",MapsServiceTomTom.CreateMaps(),true);
        } else if ($tmp === $mod.TTMSFNCMapsService.msAzureMaps) {
          if ($mod.TTMSFNCMapsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCMapsServiceAzureMaps),{get: function () {
              return MapsServiceAzureMaps;
            }, set: function (v) {
              MapsServiceAzureMaps = rtl.setIntfL(MapsServiceAzureMaps,v);
            }})) rtl.setIntfP(this,"FMaps",MapsServiceAzureMaps.CreateMaps(),true);
        } else if ($tmp === $mod.TTMSFNCMapsService.msBingMaps) {
          if ($mod.TTMSFNCMapsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCMapsServiceBingMaps),{get: function () {
              return MapsServiceBingMaps;
            }, set: function (v) {
              MapsServiceBingMaps = rtl.setIntfL(MapsServiceBingMaps,v);
            }})) rtl.setIntfP(this,"FMaps",MapsServiceBingMaps.CreateMaps(),true);
        } else if ($tmp === $mod.TTMSFNCMapsService.msOpenLayers) {
          if ($mod.TTMSFNCMapsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCMapsServiceOpenLayers),{get: function () {
              return MapsServiceOpenLayers;
            }, set: function (v) {
              MapsServiceOpenLayers = rtl.setIntfL(MapsServiceOpenLayers,v);
            }})) rtl.setIntfP(this,"FMaps",MapsServiceOpenLayers.CreateMaps(),true);
        } else if ($tmp === $mod.TTMSFNCMapsService.msLeaflet) {
          if ($mod.TTMSFNCMapsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCMapsServiceLeaflet),{get: function () {
              return MapsServiceLeaflet;
            }, set: function (v) {
              MapsServiceLeaflet = rtl.setIntfL(MapsServiceLeaflet,v);
            }})) rtl.setIntfP(this,"FMaps",MapsServiceLeaflet.CreateMaps(),true);
        } else if ($tmp === $mod.TTMSFNCMapsService.msMapBox) {
          if ($mod.TTMSFNCMapsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCMapsServiceMapBox),{get: function () {
              return MapsServiceMapBox;
            }, set: function (v) {
              MapsServiceMapBox = rtl.setIntfL(MapsServiceMapBox,v);
            }})) rtl.setIntfP(this,"FMaps",MapsServiceMapBox.CreateMaps(),true);
        } else if ($tmp === $mod.TTMSFNCMapsService.msMapKit) {
          if ($mod.TTMSFNCMapsPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCMapsServiceMapKit),{get: function () {
              return MapsServiceMapKit;
            }, set: function (v) {
              MapsServiceMapKit = rtl.setIntfL(MapsServiceMapKit,v);
            }})) rtl.setIntfP(this,"FMaps",MapsServiceMapKit.CreateMaps(),true);
        };
        if ((this.FMaps != null) && pas.SysUtils.Supports$1(this.FMaps,rtl.getIntfGUIDR($mod.ITMSFNCCustomMapsInstance),{p: this, get: function () {
            return this.p.FMapsInstance;
          }, set: function (v) {
            this.p.FMapsInstance = v;
          }})) this.FMapsInstance.SetMapsProperties(this.FMapsProperties);
        this.InitializeHTML();
      } finally {
        rtl._Release(MapsServiceGoogleMaps);
        rtl._Release(MapsServiceHere);
        rtl._Release(MapsServiceTomTom);
        rtl._Release(MapsServiceAzureMaps);
        rtl._Release(MapsServiceBingMaps);
        rtl._Release(MapsServiceOpenLayers);
        rtl._Release(MapsServiceLeaflet);
        rtl._Release(MapsServiceMapBox);
        rtl._Release(MapsServiceMapKit);
        rtl._Release(this.FMapsInstance);
      };
    };
    this.InitializeHTML = function () {
      var v = false;
      if ((this.FUpdateCount$1 > 0) || this.IsDestroying() || this.FMapInitialized) return;
      this.LoadStyles();
      v = false;
      this.LoadScripts(true);
      this.LoadScripts(false);
      this.LoadHTML(this.GetHTML());
    };
    this.LoadScripts = function (AHead) {
      var l = null;
      var I = 0;
      var lk = null;
      var dcl = "";
      var id = "";
      var src = "";
      var tp = "";
      var t = "";
      var cs = "";
      var rl = "";
      var ct = "";
      var asc = false;
      var def = false;
      var h = false;
      var e = null;
      if (this.MapReady()) {
        dcl = $mod.DEBUGCONSOLELINK;
        h = AHead;
        e = this.GetElementHandle();
        l = $mod.TTMSFNCMapsLinksList.$create("Create$2");
        try {
          if (h) {
            this.GetHeadLinks(l,true)}
           else this.GetBodyLinks(l,true,true);
          for (var $l = 0, $end = l.GetCount() - 1; $l <= $end; $l++) {
            I = $l;
            lk = l.GetItem$1(I);
            id = "WEBLib.TMSFNCMaps." + pas.SysUtils.StringReplace(this.FMaps.GetIdentifier()," ","",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll)) + ".";
            src = lk.FURL;
            tp = lk.FType;
            cs = lk.FCharSet;
            def = lk.FDefer;
            asc = lk.FAsync;
            rl = lk.FRel;
            ct = lk.FContent;
            var $tmp = lk.FKind;
            if ($tmp === $mod.TTMSFNCMapsLinkKind.mlkLink) {
              t = "LINK"}
             else if ($tmp === $mod.TTMSFNCMapsLinkKind.mlkScript) t = "SCRIPT";
            if (h) {
              id = id + t + "HEAD" + pas.SysUtils.IntToStr(I)}
             else id = id + t + "BODY" + pas.SysUtils.IntToStr(I);
            var exScript = document.getElementById(id) || document.querySelector('script[src="' + src + '"]') || document.querySelector('link[href="' + src + '"]');
            if (!exScript){
                        var s = document.createElement(t);
                        s.id = id;
            
                        if (tp != ''){
                          s.type = tp;
                        }
            
                        if (t == 'LINK'){
                          if (rl != ''){
                            s.rel = rl;
                          }
                          if (src != ''){
                            s.href = src;
                          }
                        }
                        else{
                          s.defer = def;
                          s.async = asc;
                          if (src != ''){
                            s.src = src;
                          }
                        }
            
                        s.innerHTML = ct;
            
                        if (e && e.ownerDocument) {
                          if (h){
                            e.ownerDocument.head.appendChild(s);
                          }
                          else{
                            e.ownerDocument.body.appendChild(s);
                          }
                        }else{
                          if (h){
                            document.head.appendChild(s);
                          }
                          else{
                            document.body.appendChild(s);
                          }
                        }
                      };
          };
        } finally {
          l = rtl.freeLoc(l);
        };
        if (this.FOptions.FConsole && h) {
          var exScript = document.getElementById("WEBLib.TMSFNCMaps.Console");
                  if (exScript){
                    return;
                  }
          
                  var s = document.createElement("script");
                  s.id = "WEBLib.TMSFNCMaps.Console";
                  s.src = dcl;
                  document.head.appendChild(s);
        };
      };
    };
    this.RemoveScripts = function () {
      var I = 0;
      var t = "";
      var id = "";
      var l = null;
      var lk = null;
      if (this.FMaps != null) {
        l = $mod.TTMSFNCMapsLinksList.$create("Create$2");
        this.GetHeadLinks(l,false);
        try {
          for (var $l = 0, $end = l.GetCount() - 1; $l <= $end; $l++) {
            I = $l;
            lk = l.GetItem$1(I);
            id = "WEBLib.TMSFNCMaps." + pas.SysUtils.StringReplace(this.FMaps.GetIdentifier()," ","",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll)) + ".";
            var $tmp = lk.FKind;
            if ($tmp === $mod.TTMSFNCMapsLinkKind.mlkLink) {
              t = "LINK"}
             else if ($tmp === $mod.TTMSFNCMapsLinkKind.mlkScript) t = "SCRIPT";
            id = id + t + "HEAD" + pas.SysUtils.IntToStr(I);
            var exScript = document.getElementById(id);
            if (exScript){
              exScript.parentNode.removeChild(exScript);
            };
          };
          l.Clear();
          this.GetBodyLinks(l,false,false);
          for (var $l1 = 0, $end1 = l.GetCount() - 1; $l1 <= $end1; $l1++) {
            I = $l1;
            lk = l.GetItem$1(I);
            id = "WEBLib.TMSFNCMaps." + pas.SysUtils.StringReplace(this.FMaps.GetIdentifier()," ","",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll)) + ".";
            var $tmp1 = lk.FKind;
            if ($tmp1 === $mod.TTMSFNCMapsLinkKind.mlkLink) {
              t = "LINK"}
             else if ($tmp1 === $mod.TTMSFNCMapsLinkKind.mlkScript) t = "SCRIPT";
            id = id + t + "BODY" + pas.SysUtils.IntToStr(I);
            var exScript = document.getElementById(id);
            if (exScript){
              exScript.parentNode.removeChild(exScript);
            };
          };
          this.FMaps.RemoveScripts();
        } finally {
          l = rtl.freeLoc(l);
        };
      };
      var exScript = document.getElementById("WEBLib.TMSFNCMaps.Console");
      if (exScript){
        exScript.parentNode.removeChild(exScript);
      };
    };
    this.LoadStyles = function () {
      var sc = "";
      var e = null;
      if (this.MapReady()) {
        e = this.GetElementHandle();
        sc = this.GetHeadStyle();
        var exScript = document.getElementById("WEBLib.TMSFNCMaps.Styles");
              if (exScript){
                return;
              }
        
              var s = document.createElement("style");
              s.id = "WEBLib.TMSFNCMaps.Styles";
              s.innerHTML = sc;
        
              if (e && e.ownerDocument){
                e.ownerDocument.head.appendChild(s);
              }else{
                document.head.appendChild(s);
              };
      };
    };
    this.RemoveStyles = function () {
      if (this.FMaps != null) {
        var exScript = document.getElementById("WEBLib.TMSFNCMaps.Styles");
        if (exScript){
           exScript.parentNode.removeChild(exScript);
        };
      };
    };
    this.CreateClasses = function () {
      var $ir = rtl.createIntfRefs();
      try {
        pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.CreateClasses.call(this);
        pas.SysUtils.Supports$1($ir.ref(1,rtl.queryIntfT(this,pas.System.IUnknown)),rtl.getIntfGUIDR($mod.ITMSFNCCustomMapsProperties),{p: this, get: function () {
            return this.p.FMapsProperties;
          }, set: function (v) {
            this.p.FMapsProperties = v;
          }});
        this.FOptions = this.GetOptionsClass().$create("Create$1");
        this.FOptions.FOnChange = rtl.createCallback(this,"OptionsChanged");
      } finally {
        $ir.free();
        rtl._Release(this.FMapsProperties);
      };
    };
    this.GetLinks = function (AList, AIncludeContent, ACheckReady) {
      var acf = "";
      var cf = "";
      var s = "";
      var a = "";
      var m = "";
      var cm = "";
      var cmm = "";
      var gv = "";
      var am = "";
      var em = "";
      var apl = "";
      var dl = "";
      var c = "";
      if (ACheckReady && !this.MapReady()) return;
      if (AIncludeContent) {
        s = s + this.GetGlobalVariables() + $mod.LB + $mod.LB;
        gv = this.GetCustomGlobalVariables();
        if (gv !== "") s = s + gv + $mod.LB + $mod.LB;
        s = s + this.GetCommunicationLayer() + $mod.LB + $mod.LB;
        cf = this.GetCustomFunctions();
        if (cf !== "") s = s + cf + $mod.LB + $mod.LB;
        s = s + this.GetShowPopupFunction() + $mod.LB + $mod.LB;
        s = s + this.GetClosePopupFunction() + $mod.LB + $mod.LB;
        s = s + this.GetAddOrUpdateMarkerFunction() + $mod.LB + $mod.LB;
        s = s + this.GetDeleteMarkerFunction() + $mod.LB + $mod.LB;
        s = s + this.GetAddOrUpdateElementContainerFunction() + $mod.LB + $mod.LB;
        s = s + this.GetDeleteElementContainerFunction() + $mod.LB + $mod.LB;
        s = s + this.GetAddOrUpdatePolyElementFunction() + $mod.LB + $mod.LB;
        s = s + this.GetDeletePolyElementFunction() + $mod.LB + $mod.LB;
        s = s + this.GetZoomToBoundsFunction() + $mod.LB + $mod.LB;
        s = s + this.GetSetCenterCoordinateFunction() + $mod.LB + $mod.LB;
        s = s + this.GetSetZoomLevelFunction() + $mod.LB + $mod.LB;
        s = s + this.GetGetCenterCoordinateFunction() + $mod.LB + $mod.LB;
        s = s + this.GetGetLatLonToXYFunction() + $mod.LB + $mod.LB;
        s = s + this.GetGetXYToLatLonFunction() + $mod.LB + $mod.LB;
        s = s + this.GetGetBoundsFunction() + $mod.LB + $mod.LB;
        s = s + this.GetGetZoomLevelFunction() + $mod.LB + $mod.LB;
        s = s + this.GetUpdateOptions() + $mod.LB + $mod.LB;
        s = s + this.GetWaitForMapInitialized() + $mod.LB + $mod.LB;
        s = s + "function " + $impl.LOADMAPFUNC + "(){" + $mod.LB;
        m = this.FMaps.GetInitializeMap();
        if (m !== "") s = s + m + $mod.LB + $mod.LB;
        a = this.FMaps.GetInitializeEvents();
        a = a + $mod.LB + $mod.LB + $mod.MAPID + ".addEventListener('keydown', MapKeyDown);" + $mod.LB;
        if (a !== "") s = s + a + $mod.LB + $mod.LB;
        dl = this.FMaps.GetDelayLoadEvent();
        if (dl !== "") s = s + dl + $mod.LB + $mod.LB;
        cm = "";
        this.DoCustomizeMap({get: function () {
            return cm;
          }, set: function (v) {
            cm = v;
          }});
        if (cm !== "") s = s + cm + $mod.LB + $mod.LB;
        cmm = this.GetCustomMap();
        if (cmm !== "") s = s + cmm + $mod.LB + $mod.LB;
        am = this.GetAddMarkers();
        if (am !== "") s = s + am + $mod.LB;
        em = this.GetAddElementContainers();
        if (em !== "") s = s + em + $mod.LB;
        apl = this.GetAddPolyElements();
        if (apl !== "") s = s + apl + $mod.LB;
        acf = this.GetAddCustomObjects();
        if (acf !== "") s = s + acf + $mod.LB;
        s = s + this.GetCallInitialize() + $mod.LB;
        if (dl !== "") s = s + "})" + $mod.LB;
        s = s + "}" + $mod.LB + $mod.LB;
        c = "";
        this.DoCustomizeJavaScript({get: function () {
            return c;
          }, set: function (v) {
            c = v;
          }});
        if (c !== "") s = s + c + $mod.LB;
      } else s = "Include";
      if (s !== "") AList.Add$1($mod.TTMSFNCMapsLink.$create("CreateScript",["","text/javascript","",s,false,false]));
    };
    this.GetBodyLinks = function (AList, AIncludeContent, ACheckReady) {
      if (ACheckReady && !this.MapReady()) return;
      this.GetLinks(AList,AIncludeContent,ACheckReady);
    };
    this.GetHeadLinks = function (AList, ACheckReady) {
      var I = 0;
      if (ACheckReady && !this.MapReady()) return;
      for (var $l = 0, $end = this.FHeadLinks.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        if (this.FHeadLinks.GetItem$1(I).FEnabled) {
          var $tmp = this.FHeadLinks.GetItem$1(I).FKind;
          if ($tmp === $mod.TTMSFNCMapsLinkKind.mlkLink) {
            AList.Add$1($mod.TTMSFNCMapsLink.$create("CreateLink",[this.FHeadLinks.GetItem$1(I).FURL,this.FHeadLinks.GetItem$1(I).FType,this.FHeadLinks.GetItem$1(I).FRel]))}
           else if ($tmp === $mod.TTMSFNCMapsLinkKind.mlkScript) {
            AList.Add$1($mod.TTMSFNCMapsLink.$create("CreateScript",[this.FHeadLinks.GetItem$1(I).FURL,this.FHeadLinks.GetItem$1(I).FType,this.FHeadLinks.GetItem$1(I).FCharSet,this.FHeadLinks.GetItem$1(I).FContent.GetTextStr(),this.FHeadLinks.GetItem$1(I).FDefer,this.FHeadLinks.GetItem$1(I).FAsync]))}
           else if ($tmp === $mod.TTMSFNCMapsLinkKind.mlkStyle) AList.Add$1($mod.TTMSFNCMapsLink.$create("Create$1",[this.FHeadLinks.GetItem$1(I).FKind,this.FHeadLinks.GetItem$1(I).FURL,"","","",this.FHeadLinks.GetItem$1(I).FContent.GetTextStr(),false,false]));
        };
      };
      this.FMaps.GetHeadLinks(AList);
      this.DoCustomizeHeadLinks(AList);
    };
    this.UpdateElementContainers = function () {
      if (!this.FMapInitialized || this.IsDestroying() || (this.FUpdateCount$1 > 0)) return;
      this.ExecuteJavaScript($mod.GETELEMENTCONTAINERARRAYVAR,rtl.createCallback(this,"DoUpdateElementContainers"),true);
    };
    this.DoUpdateElementContainers = function (AValue) {
      var I = 0;
      var j = 0;
      var ma = "";
      var sl = null;
      var s = "";
      var c = null;
      if (!this.FMapInitialized || this.IsDestroying() || (this.FUpdateCount$1 > 0)) return;
      ma = this.ParseScript(AValue);
      sl = pas.Classes.TStringList.$create("Create$1");
      c = $mod.TTMSFNCMapsElementContainers.$create("Create$3",[null]);
      c.Assign(this.FElementContainers);
      this.SyncLabels(c);
      try {
        pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.Split(",",ma,sl,false);
        s = "function updateAllElementContainers(){" + $mod.LB;
        for (var $l = 0, $end = c.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          j = sl.IndexOf(c.GetItem$1(I).GetID());
          if ((j === -1) || c.GetItem$1(I).FReload) {
            c.GetItem$1(I).FReload = false;
            s = s + $mod.ADDORUPDATEELEMENTCONTAINERFUNCTION + "(" + pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON$1.call(c.GetItem$1(I)) + ");" + $mod.LB;
          };
          if (j !== -1) sl.Delete(j);
        };
        s = s + "}updateAllElementContainers();";
        this.ExecuteJavaScript(s,null,true);
        s = "function deleteAllElementContainers(){" + $mod.LB;
        for (var $l1 = 0, $end1 = sl.GetCount() - 1; $l1 <= $end1; $l1++) {
          I = $l1;
          s = s + $mod.DELETEELEMENTCONTAINERFUNCTION + '({"ID": "' + sl.Get(I) + '"});' + $mod.LB;
        };
        s = s + "}deleteAllElementContainers();";
        this.ExecuteJavaScript(s,null,true);
      } finally {
        c = rtl.freeLoc(c);
        sl = rtl.freeLoc(sl);
      };
    };
    this.UpdateMarkers = function () {
      if (!this.FMapInitialized || this.IsDestroying() || (this.FUpdateCount$1 > 0)) return;
      this.ExecuteJavaScript($mod.GETMARKERARRAYVAR,rtl.createCallback(this,"DoUpdateMarkers"),true);
    };
    this.DoUpdateMarkers = function (AValue) {
      var I = 0;
      var j = 0;
      var ma = "";
      var sl = null;
      var s = "";
      if (!this.FMapInitialized || this.IsDestroying() || (this.FUpdateCount$1 > 0)) return;
      ma = this.ParseScript(AValue);
      sl = pas.Classes.TStringList.$create("Create$1");
      try {
        pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.Split(",",ma,sl,false);
        s = "function updateAllMarkers(){" + $mod.LB;
        for (var $l = 0, $end = this.FMarkers.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          j = sl.IndexOf(this.FMarkers.GetItem$1(I).GetID());
          if ((j === -1) || this.FMarkers.GetItem$1(I).FReload) {
            this.FMarkers.GetItem$1(I).FReload = false;
            s = s + $mod.ADDORUPDATEMARKERFUNCTION + "(" + pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON$1.call(this.FMarkers.GetItem$1(I)) + ");" + $mod.LB;
          };
          if (j !== -1) sl.Delete(j);
        };
        s = s + "}updateAllMarkers();";
        this.ExecuteJavaScript(s,null,true);
        s = "function deleteAllMarkers(){" + $mod.LB;
        for (var $l1 = 0, $end1 = sl.GetCount() - 1; $l1 <= $end1; $l1++) {
          I = $l1;
          s = s + $mod.DELETEMARKERFUNCTION + '({"ID": "' + sl.Get(I) + '"});' + $mod.LB;
        };
        s = s + "}deleteAllMarkers();";
        this.ExecuteJavaScript(s,null,true);
      } finally {
        sl = rtl.freeLoc(sl);
      };
    };
    this.UpdatePolyElements = function () {
      if (!this.FMapInitialized || this.IsDestroying() || (this.FUpdateCount$1 > 0)) return;
      this.ExecuteJavaScript($mod.GETPOLYELEMENTARRAYVAR,rtl.createCallback(this,"DoUpdatePolyElements"),true);
    };
    this.DoUpdatePolyElements = function (AValue) {
      var I = 0;
      var J = 0;
      var K = 0;
      var sl = null;
      var ma = "";
      var arr = [];
      var s = "";
      if (!this.FMapInitialized || this.IsDestroying() || (this.FUpdateCount$1 > 0)) return;
      arr = rtl.arraySetLength(arr,"",1);
      arr[0] = "Coordinates";
      ma = this.ParseScript(AValue);
      sl = pas.Classes.TStringList.$create("Create$1");
      try {
        pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.Split(",",ma,sl,false);
        s = "function updateAllPolygons(){" + $mod.LB;
        for (var $l = 0, $end = this.FPolygons.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          J = sl.IndexOf(this.FPolygons.GetItem$2(I).GetID());
          if ((J === -1) || this.FPolygons.GetItem$2(I).FReload) {
            this.FPolygons.GetItem$2(I).FReload = false;
            s = s + $mod.INITIALIZECOORDINATEARRAY + "();" + $mod.LB;
            s = s + $mod.ADDCOORDINATESTOARRAY + "(" + pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON$1.call(this.FPolygons.GetItem$2(I).FCoordinates) + ");" + $mod.LB;
            s = s + $mod.INITIALIZEHOLESARRAY + "();" + $mod.LB;
            for (var $l1 = 0, $end1 = this.FPolygons.GetItem$2(I).FHoles.GetCount() - 1; $l1 <= $end1; $l1++) {
              K = $l1;
              s = s + $mod.ADDHOLESTOARRAY + '(["' + this.FPolygons.GetItem$2(I).FHoles.GetItem$1(K).GetID() + '",' + pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON$1.call(this.FPolygons.GetItem$2(I).FHoles.GetItem$1(K).FCoordinates) + "]);" + $mod.LB;
            };
            s = s + $mod.ADDORUPDATEPOLYELEMENTFUNCTION + "(" + pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON.call(this.FPolygons.GetItem$2(I),rtl.arrayRef(arr)) + ");" + $mod.LB;
            s = s + $mod.INITIALIZECOORDINATEARRAY + "();" + $mod.LB;
          };
          if (J !== -1) sl.Delete(J);
        };
        s = s + "}updateAllPolygons();";
        this.ExecuteJavaScript(s,null,true);
        s = "function updateAllRectangles(){" + $mod.LB;
        for (var $l2 = 0, $end2 = this.FRectangles.GetCount() - 1; $l2 <= $end2; $l2++) {
          I = $l2;
          J = sl.IndexOf(this.FRectangles.GetItem$3(I).GetID());
          if ((J === -1) || this.FRectangles.GetItem$3(I).FReload) {
            this.FRectangles.GetItem$3(I).FReload = false;
            s = s + $mod.INITIALIZECOORDINATEARRAY + "();" + $mod.LB;
            s = s + $mod.ADDCOORDINATESTOARRAY + "(" + pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON$1.call(this.FRectangles.GetItem$3(I).FCoordinates) + ");" + $mod.LB;
            s = s + $mod.ADDORUPDATEPOLYELEMENTFUNCTION + "(" + pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON.call(this.FRectangles.GetItem$3(I),rtl.arrayRef(arr)) + ");" + $mod.LB;
            s = s + $mod.INITIALIZECOORDINATEARRAY + "();" + $mod.LB;
          };
          if (J !== -1) sl.Delete(J);
        };
        s = s + "}updateAllRectangles();";
        this.ExecuteJavaScript(s,null,true);
        s = "function updateAllCircles(){" + $mod.LB;
        for (var $l3 = 0, $end3 = this.FCircles.GetCount() - 1; $l3 <= $end3; $l3++) {
          I = $l3;
          J = sl.IndexOf(this.FCircles.GetItem$3(I).GetID());
          if ((J === -1) || this.FCircles.GetItem$3(I).FReload) {
            this.FCircles.GetItem$3(I).FReload = false;
            s = s + $mod.INITIALIZECOORDINATEARRAY + "();" + $mod.LB;
            s = s + $mod.ADDCOORDINATESTOARRAY + "(" + pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON$1.call(this.FCircles.GetItem$3(I).FCoordinates) + ");" + $mod.LB;
            s = s + $mod.ADDORUPDATEPOLYELEMENTFUNCTION + "(" + pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON.call(this.FCircles.GetItem$3(I),rtl.arrayRef(arr)) + ");" + $mod.LB;
            s = s + $mod.INITIALIZECOORDINATEARRAY + "();" + $mod.LB;
          };
          if (J !== -1) sl.Delete(J);
        };
        s = s + "}updateAllCircles();";
        this.ExecuteJavaScript(s,null,true);
        s = "function updateAllPolylines(){" + $mod.LB;
        for (var $l4 = 0, $end4 = this.FPolylines.GetCount() - 1; $l4 <= $end4; $l4++) {
          I = $l4;
          J = sl.IndexOf(this.FPolylines.GetItem$2(I).GetID());
          if ((J === -1) || this.FPolylines.GetItem$2(I).FReload) {
            this.FPolylines.GetItem$2(I).FReload = false;
            s = s + $mod.INITIALIZECOORDINATEARRAY + "();" + $mod.LB;
            s = s + $mod.ADDCOORDINATESTOARRAY + "(" + pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON$1.call(this.FPolylines.GetItem$2(I).FCoordinates) + ");" + $mod.LB;
            s = s + $mod.ADDORUPDATEPOLYELEMENTFUNCTION + "(" + pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON.call(this.FPolylines.GetItem$2(I),rtl.arrayRef(arr)) + ");" + $mod.LB;
            s = s + $mod.INITIALIZECOORDINATEARRAY + "();" + $mod.LB;
          };
          if (J !== -1) sl.Delete(J);
        };
        s = s + "}updateAllPolylines();";
        this.ExecuteJavaScript(s,null,true);
        s = "function deleteAllPolyElements(){" + $mod.LB;
        for (var $l5 = 0, $end5 = sl.GetCount() - 1; $l5 <= $end5; $l5++) {
          I = $l5;
          s = s + $mod.DELETEPOLYELEMENTFUNCTION + '({"ID": "' + sl.Get(I) + '"});' + $mod.LB;
        };
        s = s + "}deleteAllPolyElements();";
        this.ExecuteJavaScript(s,null,true);
      } finally {
        sl = rtl.freeLoc(sl);
      };
    };
    this.DoCloseAllPopups = function (AValue) {
      var I = 0;
      var sl = null;
      var ma = "";
      ma = this.ParseScript(AValue);
      sl = pas.Classes.TStringList.$create("Create$1");
      try {
        pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.Split(",",ma,sl,false);
        for (var $l = 0, $end = sl.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          this.ClosePopup(sl.Get(I));
        };
      } finally {
        sl = rtl.freeLoc(sl);
      };
    };
    this.SyncLabels = function (ACollection) {
      var l = null;
      var el = null;
      var I = 0;
      var style = "";
      for (var $l = 0, $end = this.FLabels.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        l = this.FLabels.GetItem$1(I);
        el = ACollection.Add$1();
        el.SetHTMLElementID("ElementContainerLabel" + pas.SysUtils.IntToStr(I));
        el.SetVisible(l.FVisible);
        el.FHTML.SetTextStr(l.FText);
        el.SetLabelType(l.FLabelType);
        el.FCoordinate.Assign(l.FCoordinate);
        el.FBounds.Assign(l.FBounds);
        if (l.FPosition === $mod.TTMSFNCMapsPositionType.ptCoordinate) {
          el.SetPosition($mod.TTMSFNCMapsPosition.poCoordinate)}
         else if (l.FPosition === $mod.TTMSFNCMapsPositionType.ptBounds) el.SetPosition($mod.TTMSFNCMapsPosition.poBounds);
        style = "";
        if (l.FBackgroundColor !== -1) {
          style = style + "background-color:" + pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.ColorToHTML(l.FBackgroundColor) + ";";
          style = style + "padding:5px;border-radius:5px;";
        } else {
          style = style + "text-shadow:-1px -1px 0 rgba(255,255,255, 0.5),1px -1px 0 rgba(255,255,255, 0.5),-1px 1px 0 rgba(255,255,255, 0.5),1px 1px 0 rgba(255,255,255, 0.5);";
        };
        if (l.FBorderColor !== -1) {
          style = style + "border-color: " + pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.ColorToHTML(l.FBorderColor) + ";";
          if (l.FBorderWidth > 0) {
            style = style + "border-style:solid;";
            style = style + "border-width:" + pas.SysUtils.IntToStr(l.FBorderWidth) + "px;";
          };
        };
        if (l.FFont.FColor !== -1) {
          style = style + "color:" + pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.ColorToHTML(l.FFont.FColor) + ";";
        };
        if (l.FFont.FName !== "") {
          style = style + 'font-family:"' + l.FFont.FName + '";';
        } else {
          style = style + 'font-family:"Roboto";';
        };
        style = style + "font-size:" + pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.FloatToStrDot(l.FFont.FSize) + "px;";
        el.FStyle.SetTextStr("." + el.FHTMLElementID + "{" + style + "}");
        el.SetHTMLElementClassName(el.FHTMLElementID);
        el.SetUseDefaultStyle(false);
      };
    };
    this.UpdateOptions = function () {
      if (!this.FMapInitialized || this.IsDestroying() || (this.FUpdateCount$1 > 0)) return;
      this.ExecuteJavaScript($mod.UPDATEOPTIONSFUNCTION + "(" + pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON$1.call(this.FOptions) + ")",null,false);
    };
    this.DoKeyPressed = function (Key) {
      var ASegment = null;
      var CanDelete = false;
      if (Key.get() === 46) {
        if (this.RouteCalculatorCheck()) {
          CanDelete = true;
          if (this.FRouteCalculatorSelectedMarker != null) {
            if ((this.FRouteCalculatorSelectedMarker.FDataPointer != null) && pas["WEBLib.TMSFNCRouteCalculator"].TTMSFNCRouteCalculatorSegment.isPrototypeOf(this.FRouteCalculatorSelectedMarker.FDataPointer)) {
              ASegment = rtl.as(this.FRouteCalculatorSelectedMarker.FDataPointer,pas["WEBLib.TMSFNCRouteCalculator"].TTMSFNCRouteCalculatorSegment);
              if (ASegment != null) {
                this.DoRouteCalculatorBeforeDeleteMarker({get: function () {
                    return CanDelete;
                  }, set: function (v) {
                    CanDelete = v;
                  }},this.FRouteCalculatorSelectedMarker,ASegment);
                if (CanDelete) {
                  this.RouteCalculatorDeleteMarker(this.FRouteCalculatorSelectedMarker,true);
                  this.DoRouteCalculatorAfterDeleteMarker();
                };
              };
              this.RouteCalculatorClearSelected();
            };
          } else if (this.FRouteCalculatorSelectedPolyline != null) {
            if ((this.FRouteCalculatorSelectedPolyline.FDataPointer != null) && pas["WEBLib.TMSFNCRouteCalculator"].TTMSFNCRouteCalculatorSegment.isPrototypeOf(this.FRouteCalculatorSelectedPolyline.FDataPointer)) {
              ASegment = rtl.as(this.FRouteCalculatorSelectedPolyline.FDataPointer,pas["WEBLib.TMSFNCRouteCalculator"].TTMSFNCRouteCalculatorSegment);
              if (ASegment != null) {
                this.DoRouteCalculatorBeforeDeletePolyline({get: function () {
                    return CanDelete;
                  }, set: function (v) {
                    CanDelete = v;
                  }},this.FRouteCalculatorSelectedPolyline,ASegment);
                if (CanDelete) {
                  this.RouteCalculatorDeletePolyline(this.FRouteCalculatorSelectedPolyline,true);
                  this.DoRouteCalculatorAfterDeletePolyline();
                };
              };
              this.RouteCalculatorClearSelected();
            };
          };
        };
      };
    };
    this.RouteCalculatorMarkerMoved = function (ACoordinate) {
      var ASegment = null;
      var ps = null;
      if (this.RouteCalculatorCheck()) {
        this.FOptions.SetPanning(true);
        if (this.FRouteCalculatorDragStarted && (this.FRouteCalculatorMarker != null)) {
          this.FRouteCalculatorDragStarted = false;
          this.FOptions.SetPanning(true);
          this.FRouteCalculatorMarker.FCoordinate.SetLatitude(ACoordinate.Latitude);
          this.FRouteCalculatorMarker.FCoordinate.SetLongitude(ACoordinate.Longitude);
          if ((this.FRouteCalculatorMarker.FDataPointer != null) && pas["WEBLib.TMSFNCRouteCalculator"].TTMSFNCRouteCalculatorSegment.isPrototypeOf(this.FRouteCalculatorMarker.FDataPointer)) {
            ASegment = rtl.as(this.FRouteCalculatorMarker.FDataPointer,pas["WEBLib.TMSFNCRouteCalculator"].TTMSFNCRouteCalculatorSegment);
            if (ASegment != null) {
              if (!this.FRouteCalculatorMarker.FDataBoolean) {
                this.FRouteCalculator.UpdateRouteSegment$1(ASegment,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(ASegment.FStartCoordinate.GetToRec()),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(this.FRouteCalculatorMarker.FCoordinate.GetToRec()),null,"",null)}
               else {
                this.FRouteCalculator.UpdateRouteSegment$1(ASegment,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(this.FRouteCalculatorMarker.FCoordinate.GetToRec()),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(ASegment.FEndCoordinate.GetToRec()),null,"",null);
                ps = ASegment.GetPreviousSegment();
                if (ps != null) this.FRouteCalculator.UpdateRouteSegment$1(ps,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(ps.FStartCoordinate.GetToRec()),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(this.FRouteCalculatorMarker.FCoordinate.GetToRec()),null,"",null);
              };
            };
          };
        };
        this.FRouteCalculatorMarker = null;
      };
    };
    this.RouteCalculatorPolylineMoved = function (ACoordinate) {
      var ASegment = null;
      var ar = [];
      if (this.RouteCalculatorCheck()) {
        this.FOptions.SetPanning(true);
        if (this.FRouteCalculatorDragStarted && (this.FRouteCalculatorPolyline != null)) {
          this.FRouteCalculatorDragStarted = false;
          this.FOptions.SetPanning(true);
          if ((this.FRouteCalculatorPolyline.FDataPointer != null) && pas["WEBLib.TMSFNCRouteCalculator"].TTMSFNCRouteCalculatorSegment.isPrototypeOf(this.FRouteCalculatorPolyline.FDataPointer)) {
            ASegment = rtl.as(this.FRouteCalculatorPolyline.FDataPointer,pas["WEBLib.TMSFNCRouteCalculator"].TTMSFNCRouteCalculatorSegment);
            if (ASegment != null) {
              ar = rtl.arraySetLength(ar,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,1);
              ar[0].$assign(ACoordinate);
              this.FRouteCalculator.AddWayPointsToSegment(ASegment,rtl.arrayRef(ar),null,"",null);
            };
          };
        };
        this.FRouteCalculatorPolyline = null;
        if (this.FRouteCalculatorDragMarker != null) {
          rtl.free(this,"FRouteCalculatorDragMarker");
          this.FRouteCalculatorDragMarker = null;
        };
      };
    };
    this.RouteCalculatorDoCalculateRoute = function (Sender, ARoute) {
      this.RouteCalculatorPlotRoute(ARoute);
    };
    this.HandleDoMapEventData = function (Event) {
      var Result = false;
      var s = "";
      s = Event.detail;
      this.ParseEvent(s);
      Result = true;
      return Result;
    };
    this.BindEvents = function () {
      var eh = null;
      if (this.GetElementBindHandle() != null) {
        this.GetMethodPointers();
        eh = this.GetElementBindHandle();
        eh.addEventListener($impl.MAPEVENTDATA,this.FMapEventData);
      };
    };
    this.UnbindEvents = function () {
      var eh = null;
      if (this.GetElementBindHandle() != null) {
        eh = this.GetElementBindHandle();
        eh.removeEventListener($impl.MAPEVENTDATA,this.FMapEventData);
      };
    };
    this.ClearMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.ClearMethodPointers.call(this);
      this.FMapEventData = null;
    };
    this.GetMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.GetMethodPointers.call(this);
      if (this.FMapEventData === null) this.FMapEventData = rtl.createCallback(this,"HandleDoMapEventData");
    };
    this.CheckInstances = function () {
      var I = 0;
      var Instances = 0;
      Instances = 0;
      for (var $l = 0, $end = this.FOwner.GetComponentCount() - 1; $l <= $end; $l++) {
        I = $l;
        if ($mod.TTMSFNCCustomMaps.isPrototypeOf(this.FOwner.GetComponent(I))) {
          if (rtl.as(this.FOwner.GetComponent(I),$mod.TTMSFNCCustomMaps).FService === this.FService) Instances += 1;
        };
      };
      if (Instances > 1) throw pas.SysUtils.Exception.$create("Create$1",["Only one instance of " + this.$classname + " with service " + pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.GetEnumName($mod.$rtti["TTMSFNCMapsService"],this.FService) + " allowed!"]);
    };
    this.CanLoadDefaultHTML = function () {
      var Result = false;
      Result = false;
      return Result;
    };
    this.GetDefaultLatitude = function () {
      var Result = "";
      Result = pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(this.FOptions.FDefaultLatitude);
      return Result;
    };
    this.GetDefaultLongitude = function () {
      var Result = "";
      Result = pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(this.FOptions.FDefaultLongitude);
      return Result;
    };
    this.GetDefaultZoomLevel = function () {
      var Result = "";
      Result = pas.SysUtils.FloatToStr(this.FOptions.FDefaultZoomLevel);
      return Result;
    };
    this.GetAPIKey = function () {
      var Result = "";
      Result = this.FAPIKey;
      return Result;
    };
    this.GetBackgroundColor = function () {
      var Result = 0;
      Result = this.FOptions.FBackgroundColor;
      return Result;
    };
    this.GetLocale = function (AMode) {
      var Result = "";
      Result = pas["WEBLib.TMSFNCMapsCommonTypes"].ParseLocale(this.FOptions.FLocale,AMode);
      return Result;
    };
    this.GetShowZoomControl = function () {
      var Result = false;
      Result = this.FOptions.FShowZoomControl;
      return Result;
    };
    this.GetShowMapTypeControl = function () {
      var Result = false;
      Result = this.FOptions.FShowMapTypeControl;
      return Result;
    };
    this.GetZoomOnDblClick = function () {
      var Result = false;
      Result = this.FOptions.FZoomOnDblClick;
      return Result;
    };
    this.GetPanning = function () {
      var Result = false;
      Result = this.FOptions.FPanning;
      return Result;
    };
    this.GetMapID = function () {
      var Result = "";
      Result = "";
      return Result;
    };
    this.GetTilt = function () {
      var Result = 0.0;
      Result = 0;
      return Result;
    };
    this.GetHeading = function () {
      var Result = 0.0;
      Result = 0;
      return Result;
    };
    this.GetZoomOnWheelScroll = function () {
      var Result = false;
      Result = this.FOptions.FZoomOnWheelScroll;
      return Result;
    };
    this.GetPolyElementByID = function (AID) {
      var Result = null;
      var pl = null;
      var pg = null;
      var r = null;
      var c = null;
      Result = null;
      pl = this.FPolylines.GetItemByID(AID);
      pg = this.FPolygons.GetItemByID(AID);
      r = this.FRectangles.GetItemByID(AID);
      c = this.FCircles.GetItemByID(AID);
      if (pl != null) Result = pl;
      if (pg != null) Result = pg;
      if (r != null) Result = r;
      if (c != null) Result = c;
      return Result;
    };
    this.GetMarkerByID = function (AID) {
      var Result = null;
      Result = this.FMarkers.GetItemByID(AID);
      return Result;
    };
    this.GetElementContainerByID = function (AID) {
      var Result = null;
      Result = this.FElementContainers.GetItemByID(AID);
      return Result;
    };
    this.GetCommunicationLayer = function () {
      var $Self = this;
      var Result = "";
      function GetWindowsComm() {
        var Result = "";
        if ($Self.IsDesignTime()) {
          Result = "window.location = v;";
        } else {
          Result = "  if (!window.chrome || !window.chrome.webview || !window.chrome.webview.hostObjects || !window.chrome.webview.hostObjects.sync) {" + $mod.LB + "    return;" + $mod.LB + "  }" + $mod.LB + "  var obj = window.chrome.webview.hostObjects.sync.bridge;" + $mod.LB + "  if (obj) {" + $mod.LB + "    obj.ObjectMessage = v;" + $mod.LB + "  }else{" + "\r" + "    window.location = v;" + $mod.LB + "  }";
        };
        return Result;
      };
      Result = "var sendObjectMessage = function(parameters, customdata = undefined) {" + $mod.LB + '  var v = "' + $impl.EVENTDATAPREFIX + '" + parameters;' + $mod.LB + "  if (customdata) {" + $mod.LB + '    v = v + "' + $impl.CUSTOMDATAPREFIX + '" + customdata;' + $mod.LB + "  }" + $mod.LB + '  var event = new CustomEvent("' + $impl.MAPEVENTDATA + '", {detail: v});' + $mod.LB + "  if (!" + $mod.MAPCOMPONENT + "){" + $mod.LB + "  " + $mod.MAPCOMPONENT + ' = document.getElementById("' + this.GetID() + '");' + $mod.LB + "  }" + $mod.LB + "  " + $mod.MAPCOMPONENT + ".dispatchEvent(event);" + $mod.LB + "};";
      return Result;
    };
    this.GetZoomToBoundsFunction = function () {
      var Result = "";
      Result = "";
      if (!(this.FMaps != null)) return Result;
      Result = "function " + $mod.ZOOMTOBOUNDSFUNCTION + "(" + $mod.PARAMSNAME + "){" + $mod.LB + this.FMaps.GetZoomToBounds() + $mod.LB + "}";
      return Result;
    };
    this.GetSetCenterCoordinateFunction = function () {
      var Result = "";
      Result = "";
      if (!(this.FMaps != null)) return Result;
      Result = "function " + $mod.SETCENTERCOORDINATEFUNCTION + "(" + $mod.PARAMSNAME + "){" + $mod.LB + this.FMaps.GetSetCenterCoordinate() + $mod.LB + "}";
      return Result;
    };
    this.GetGetCenterCoordinateFunction = function () {
      var Result = "";
      Result = "";
      if (!(this.FMaps != null)) return Result;
      Result = "function " + $mod.GETCENTERCOORDINATEFUNCTION + "(){" + $mod.LB + "  var jsonObj = getDefaultCoordinateObject();" + $mod.LB + this.FMaps.GetGetCenterCoordinate() + $mod.LB + "  return JSON.stringify(jsonObj);" + $mod.LB + "}";
      return Result;
    };
    this.GetGetLatLonToXYFunction = function () {
      var Result = "";
      Result = "";
      if (!(this.FMaps != null)) return Result;
      Result = "function " + $mod.GETLATLONTOXYFUNCTION + "(" + $mod.PARAMSNAME + "){" + $mod.LB + "  var jsonObj = getDefaultPointObject();" + $mod.LB + this.FMaps.GetLatLonToXY() + $mod.LB + "  return JSON.stringify(jsonObj);" + $mod.LB + "}";
      return Result;
    };
    this.GetGetXYToLatLonFunction = function () {
      var Result = "";
      Result = "";
      if (!(this.FMaps != null)) return Result;
      Result = "function " + $mod.GETXYTOLATLONFUNCTION + "(" + $mod.PARAMSNAME + "){" + $mod.LB + "  var jsonObj = getDefaultCoordinateObject();" + $mod.LB + this.FMaps.GetXYToLatLon() + $mod.LB + "  return JSON.stringify(jsonObj);" + $mod.LB + "}";
      return Result;
    };
    this.GetGetBoundsFunction = function () {
      var Result = "";
      Result = "";
      if (!(this.FMaps != null)) return Result;
      Result = "function " + $mod.GETBOUNDSFUNCTION + "(){" + $mod.LB + "  var jsonObj = getDefaultBoundsObject();" + $mod.LB + this.FMaps.GetGetBounds() + $mod.LB + "  return JSON.stringify(jsonObj);" + $mod.LB + "}";
      return Result;
    };
    this.GetSetZoomLevelFunction = function () {
      var Result = "";
      Result = "";
      if (!(this.FMaps != null)) return Result;
      Result = "function " + $mod.SETZOOMLEVELFUNCTION + "(" + $mod.PARAMSNAME + "){" + $mod.LB + this.FMaps.GetSetZoomLevel() + $mod.LB + "}";
      return Result;
    };
    this.GetGetZoomLevelFunction = function () {
      var Result = "";
      Result = "";
      if (!(this.FMaps != null)) return Result;
      Result = "function " + $mod.GETZOOMLEVELFUNCTION + "(){" + $mod.LB + "  var z;" + $mod.LB + this.FMaps.GetGetZoomLevel() + $mod.LB + "  return z;" + $mod.LB + "}";
      return Result;
    };
    this.GetUpdateOptions = function () {
      var Result = "";
      var m = "";
      var cm = "";
      Result = "";
      if (!(this.FMaps != null)) return Result;
      m = "";
      this.DoCustomizeOptions({get: function () {
          return m;
        }, set: function (v) {
          m = v;
        }});
      Result = "function " + $mod.UPDATEOPTIONSFUNCTION + "(" + $mod.PARAMSNAME + "){" + $mod.LB;
      if (m !== "") Result = Result + m + $mod.LB + $mod.LB;
      cm = this.GetCustomOptions();
      if (cm !== "") Result = Result + cm + $mod.LB + $mod.LB;
      Result = Result + this.FMaps.GetUpdateOptions() + $mod.LB + "}";
      return Result;
    };
    this.GetAddOrUpdateMarkerFunction = function () {
      var Result = "";
      var m = "";
      Result = "";
      if (!(this.FMaps != null)) return Result;
      m = "";
      this.DoCustomizeMarker({get: function () {
          return m;
        }, set: function (v) {
          m = v;
        }});
      Result = "function " + $mod.ADDORUPDATEMARKERFUNCTION + "(" + $mod.PARAMSNAME + "){" + $mod.LB + "  var " + $mod.MARKERVAR + " = " + $mod.MARKERARRAYVAR + "[" + $mod.PARAMSNAME + '["ID"]];' + $mod.LB + "  if (" + $mod.MARKERVAR + "){" + $mod.LB + "   }" + this.FMaps.GetAddOrUpdateMarker() + $mod.LB + $mod.LB;
      if (m !== "") Result = Result + m + $mod.LB + $mod.LB;
      Result = Result + "  if (" + $mod.MARKERVAR + "){" + $mod.LB + "    " + $mod.MARKERARRAYVAR + "[" + $mod.PARAMSNAME + '["ID"]] = ' + $mod.MARKERVAR + ";" + $mod.LB + "  }" + $mod.LB + "}";
      return Result;
    };
    this.GetAddOrUpdateElementContainerFunction = function () {
      var Result = "";
      Result = "function updateElementPositions(){" + $mod.LB + "  for (var key in " + $mod.ELEMENTCONTAINERARRAYVAR + "){" + $mod.LB + "    var v = key;" + $mod.LB + "    var it = " + $mod.ELEMENTCONTAINERARRAYVAR + "[v];" + $mod.LB + "    var obj = it[0];" + $mod.LB + '    var posType = obj.getAttribute("data-position");' + $mod.LB + "    if (posType == 9){ " + $mod.LB + '      var lat = parseFloat(obj.getAttribute("data-latitude"));' + $mod.LB + '      var lon = parseFloat(obj.getAttribute("data-longitude"));' + $mod.LB + "      var xy = " + $mod.GETLATLONTOXYFUNCTION + '({"Latitude": lat, "Longitude": lon})' + $mod.LB + '      var labeltype = obj.getAttribute("data-labeltype");' + $mod.LB + "      var tadapt = 0;" + $mod.LB + "      var tailheight = 0;" + $mod.LB + "      if (labeltype == 1) {" + $mod.LB + "        tailheight = 10;" + $mod.LB + "        tadapt = (obj.offsetHeight + tailheight);" + $mod.LB + '        obj.classList.add("tmsfncmaps_sb");' + $mod.LB + "      } else { " + $mod.LB + '        obj.classList.remove("tmsfncmaps_sb");' + $mod.LB + "      }" + $mod.LB + "      var xyObj;" + $mod.LB + '      if (typeof xy == "string")' + $mod.LB + "        xyObj = JSON.parse(xy);" + $mod.LB + "      else" + $mod.LB + "        xyObj = xy;" + $mod.LB + '      obj.style.margin = (xyObj.Y - tadapt) + "px 0px 0px " + (xyObj.X - (obj.offsetWidth / 2)) + "px";' + $mod.LB + '      obj.style.cursor = "default";' + $mod.LB + "    }" + $mod.LB + "    if (posType == 10){ " + $mod.LB + '      var nelat = parseFloat(obj.getAttribute("data-ne-latitude"));' + $mod.LB + '      var nelon = parseFloat(obj.getAttribute("data-ne-longitude"));' + $mod.LB + '      var swlat = parseFloat(obj.getAttribute("data-sw-latitude"));' + $mod.LB + '      var swlon = parseFloat(obj.getAttribute("data-sw-longitude"));' + $mod.LB + "      var xyne = " + $mod.GETLATLONTOXYFUNCTION + '({"Latitude": nelat, "Longitude": nelon})' + $mod.LB + "      var xysw = " + $mod.GETLATLONTOXYFUNCTION + '({"Latitude": swlat, "Longitude": swlon})' + $mod.LB + "      var xyneObj;" + $mod.LB + '      if (typeof xyne == "string")' + $mod.LB + "        xyneObj = JSON.parse(xyne);" + $mod.LB + "      else" + $mod.LB + "        xyneObj = xyne;" + $mod.LB + "      var xyswObj;" + $mod.LB + '      if (typeof xysw == "string")' + $mod.LB + "        xyswObj = JSON.parse(xysw);" + $mod.LB + "      else" + $mod.LB + "        xyswObj = xysw;" + $mod.LB + '      obj.style.margin = xyneObj.Y + "px 0px 0px " + xyswObj.X + "px";' + $mod.LB + "      var top = xyneObj.Y;" + $mod.LB + "      var right = xyneObj.X;" + $mod.LB + "      var bottom = xyswObj.Y;" + $mod.LB + "      var left = xyswObj.X;" + $mod.LB + "      var width = right - left;" + $mod.LB + "      var height = bottom - top;" + $mod.LB + "      if (left > right) {" + $mod.LB + "        width = right - left;" + $mod.LB + "      }" + $mod.LB + "      if (top > bottom) {" + $mod.LB + "        height = bottom - top;" + $mod.LB + "      }" + $mod.LB + "      obj.style.width = width;" + $mod.LB + "      obj.style.height = height;" + $mod.LB + '      obj.style.overflow = "hidden";' + $mod.LB + '      obj.style.cursor = "default";' + $mod.LB + "    }" + $mod.LB + "  }" + $mod.LB + "}" + $mod.LB + "setInterval(updateElementPositions, 1);" + $mod.LB + "function " + $mod.ADDORUPDATEELEMENTCONTAINERFUNCTION + "(" + $mod.PARAMSNAME + "){" + $mod.LB + "  var " + $mod.ELEMENTCONTAINERVAR + " = " + $mod.ELEMENTCONTAINERARRAYVAR + "[" + $mod.PARAMSNAME + '["ID"]];' + $mod.LB + "  if (!" + $mod.ELEMENTCONTAINERVAR + "){" + $mod.LB + "    " + $mod.ELEMENTCONTAINERVAR + " = [];" + $mod.LB + "    " + $mod.ELEMENTCONTAINERVAR + '.push(document.createElement("div"));' + $mod.LB + "    " + $mod.ELEMENTCONTAINERVAR + "[0].id = " + $mod.PARAMSNAME + '["HTMLElementID"];' + $mod.LB + "    " + $mod.ELEMENTCONTAINERVAR + "[0].className = " + $mod.PARAMSNAME + '["HTMLElementClassName"];' + $mod.LB + "    " + $mod.ELEMENTCONTAINERVAR + '.push(document.createElement("style"));' + $mod.LB + "    " + $mod.ELEMENTCONTAINERVAR + "[1].id = " + $mod.PARAMSNAME + '["HTMLElementID"] + "Style";' + $mod.LB + "    var elementStyle = atob(" + $mod.PARAMSNAME + '["StyleAsBase64"]);' + $mod.LB + "    " + $mod.ELEMENTCONTAINERVAR + "[1].innerHTML = elementStyle;" + $mod.LB + "    " + $mod.ELEMENTCONTAINERVAR + '.push(document.createElement("script"));' + $mod.LB + "    " + $mod.ELEMENTCONTAINERVAR + "[2].id = " + $mod.PARAMSNAME + '["HTMLElementID"] + "Script";' + $mod.LB + "    var elementScript = atob(" + $mod.PARAMSNAME + '["ScriptAsBase64"]);' + $mod.LB + "    " + $mod.ELEMENTCONTAINERVAR + "[2].innerHTML = elementScript;" + $mod.LB + "    document.head.appendChild(" + $mod.ELEMENTCONTAINERVAR + "[2]);" + $mod.LB + "    document.head.appendChild(" + $mod.ELEMENTCONTAINERVAR + "[1]);" + $mod.LB + "    " + this.GetID() + ".appendChild(" + $mod.ELEMENTCONTAINERVAR + "[0]);" + $mod.LB + "  }" + $mod.LB + '    var  elementPosition = "";' + $mod.LB + "    switch (" + $mod.PARAMSNAME + '["Position"]){' + $mod.LB + "      case 1:" + $mod.LB + '        elementPosition = "top: 0; left: 0;";' + $mod.LB + "        break;" + $mod.LB + "      case 2:" + $mod.LB + '        elementPosition = "top: 0; left: 50%; transform: translate(-50%, 0);";' + $mod.LB + "        break;" + $mod.LB + "      case 3:" + $mod.LB + '        elementPosition = "top: 0; right: 0;";' + $mod.LB + "        break;" + $mod.LB + "      case 4:" + $mod.LB + '        elementPosition = "top: 50%; left: 0;";' + $mod.LB + "        break;" + $mod.LB + "      case 5:" + $mod.LB + '        elementPosition = "position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%);";' + $mod.LB + "        break;" + $mod.LB + "      case 6:" + $mod.LB + '        elementPosition = "bottom: 0; left: 0;";' + $mod.LB + "        break;" + $mod.LB + "      case 7:" + $mod.LB + '        elementPosition = "bottom: 0; left: 50%; transform: translate(-50%, 0);"' + $mod.LB + "        break;" + $mod.LB + "      case 8:" + $mod.LB + '        elementPosition = "bottom: 0; right: 0;";' + $mod.LB + "        break;" + $mod.LB + "      case 9:" + $mod.LB + '        elementPosition = "top: 0; left: 0;";' + $mod.LB + "        break;" + $mod.LB + "      case 10:" + $mod.LB + '        elementPosition = "top: 0; left: 0;";' + $mod.LB + "        break;" + $mod.LB + "    }" + $mod.LB + "    " + $mod.ELEMENTCONTAINERVAR + '[0].setAttribute("data-latitude", ' + $mod.PARAMSNAME + '["Coordinate"]["Latitude"]);' + $mod.LB + "    " + $mod.ELEMENTCONTAINERVAR + '[0].setAttribute("data-longitude", ' + $mod.PARAMSNAME + '["Coordinate"]["Longitude"]);' + $mod.LB + "    " + $mod.ELEMENTCONTAINERVAR + '[0].setAttribute("data-position", ' + $mod.PARAMSNAME + '["Position"]);' + $mod.LB + "    " + $mod.ELEMENTCONTAINERVAR + '[0].setAttribute("data-labeltype", ' + $mod.PARAMSNAME + '["LabelType"]);' + $mod.LB + "    " + $mod.ELEMENTCONTAINERVAR + '[0].setAttribute("data-alignment", ' + $mod.PARAMSNAME + '["Alignment"]);' + $mod.LB + "    " + $mod.ELEMENTCONTAINERVAR + '[0].setAttribute("data-ne-latitude", ' + $mod.PARAMSNAME + '["Bounds"]["NorthEast"]["Latitude"]);' + $mod.LB + "    " + $mod.ELEMENTCONTAINERVAR + '[0].setAttribute("data-ne-longitude", ' + $mod.PARAMSNAME + '["Bounds"]["NorthEast"]["Longitude"]);' + $mod.LB + "    " + $mod.ELEMENTCONTAINERVAR + '[0].setAttribute("data-sw-latitude", ' + $mod.PARAMSNAME + '["Bounds"]["SouthWest"]["Latitude"]);' + $mod.LB + "    " + $mod.ELEMENTCONTAINERVAR + '[0].setAttribute("data-sw-longitude", ' + $mod.PARAMSNAME + '["Bounds"]["SouthWest"]["Longitude"]);' + $mod.LB + '    elementPosition += "margin-top: " + ' + $mod.PARAMSNAME + '["Margins"]["Top"] + "px;";' + $mod.LB + '    elementPosition += "margin-left: " + ' + $mod.PARAMSNAME + '["Margins"]["Left"] + "px;";' + $mod.LB + '    elementPosition += "margin-bottom: " + ' + $mod.PARAMSNAME + '["Margins"]["Bottom"] + "px;";' + $mod.LB + '    elementPosition += "margin-right: " + ' + $mod.PARAMSNAME + '["Margins"]["Right"] + "px;";' + $mod.LB + '    var cssText = "z-index: 9999;";' + $mod.LB + "    if (" + $mod.PARAMSNAME + '["UseDefaultStyle"]){' + $mod.LB + '      cssText += "border-radius: 5px; padding: 5px; min-height: 50px; min-width: 50px;" + ' + '        "background-color: white; font-size: 14px; font-family: Roboto;" +' + '        "text-align: center; color: grey;line-height: 18px; overflow: hidden;" + elementPosition;' + $mod.LB + "    }" + $mod.LB + '    cssText += "position: absolute;" + elementPosition;' + $mod.LB + "    " + $mod.ELEMENTCONTAINERVAR + "[0].style.cssText = cssText;" + $mod.LB + "    if (! " + $mod.PARAMSNAME + '["Visible"])' + $mod.LB + "      " + $mod.ELEMENTCONTAINERVAR + '[0].style.display = "none";' + $mod.LB + "    else" + $mod.LB + "      " + $mod.ELEMENTCONTAINERVAR + '[0].style.display = "";' + $mod.LB + "    var elementHTML = atob(" + $mod.PARAMSNAME + '["HTMLAsBase64"]);' + $mod.LB + "    " + $mod.ELEMENTCONTAINERVAR + "[0].innerHTML = elementHTML;" + $mod.LB + "    var elementStyle = atob(" + $mod.PARAMSNAME + '["StyleAsBase64"]);' + $mod.LB + "    " + $mod.ELEMENTCONTAINERVAR + "[1].innerHTML = elementStyle;" + $mod.LB + "    var elementScript = atob(" + $mod.PARAMSNAME + '["ScriptAsBase64"]);' + $mod.LB + "    " + $mod.ELEMENTCONTAINERVAR + "[2].innerHTML = elementScript;" + $mod.LB;
      Result = Result + "    var customControl = null;" + $mod.LB + "    for (i = 0; i < " + $mod.PARAMSNAME + '["Actions"].length; i++){' + $mod.LB + "      if (" + $mod.PARAMSNAME + '["Actions"][i]["Enabled"]){' + $mod.LB + "        customControl = document.getElementById(" + $mod.PARAMSNAME + '["Actions"][i]["HTMLElementID"]);' + $mod.LB + "        if (customControl){" + $mod.LB + "          switch (" + $mod.PARAMSNAME + '["Actions"][i]["Event"]){' + $mod.LB + "            case 0:" + $mod.LB + "              switch (" + $mod.PARAMSNAME + '["Actions"][i]["EventReturnValue"]){' + $mod.LB + "                case 0:" + $mod.LB + '                  customControl.addEventListener("click", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONCLICKEVENT + '", this.id), null);});' + $mod.LB + "                  break;" + $mod.LB + "                case 1:" + $mod.LB + '                  customControl.addEventListener("click", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONCLICKEVENT + '", this.id), this.value);});' + $mod.LB + "                  break;" + $mod.LB + "                case 2:" + $mod.LB + '                  customControl.addEventListener("click", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONCLICKEVENT + '", this.id), this.checked);});' + $mod.LB + "                  break;" + $mod.LB + "                case 3:" + $mod.LB + '                  customControl.addEventListener("click", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONCLICKEVENT + '", this.id), this.innerHTML);});' + $mod.LB + "                  break;" + $mod.LB + "                case 4:" + $mod.LB + '                  customControl.addEventListener("click", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONCLICKEVENT + '", this.id), this.innerText);});' + $mod.LB + "                  break;" + $mod.LB + "                case 5:" + $mod.LB + '                  customControl.addEventListener("click", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONCLICKEVENT + '", this.id), this.selectedIndex);});' + $mod.LB + "                  break;" + $mod.LB + "              }" + $mod.LB + "              break;" + $mod.LB + "            case 1:" + $mod.LB + "              switch (" + $mod.PARAMSNAME + '["Actions"][i]["EventReturnValue"]){' + $mod.LB + "                case 0:" + $mod.LB + '                  customControl.addEventListener("dblclick", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONDBLCLICKEVENT + '", this.id), null);});' + $mod.LB + "                  break;" + $mod.LB + "                case 1:" + $mod.LB + '                  customControl.addEventListener("dblclick", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONDBLCLICKEVENT + '", this.id), this.value);});' + $mod.LB + "                  break;" + $mod.LB + "                case 2:" + $mod.LB + '                  customControl.addEventListener("dblclick", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONDBLCLICKEVENT + '", this.id), this.checked);});' + $mod.LB + "                  break;" + $mod.LB + "                case 3:" + $mod.LB + '                  customControl.addEventListener("dblclick", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONDBLCLICKEVENT + '", this.id), this.innerHTML);});' + $mod.LB + "                  break;" + $mod.LB + "                case 4:" + $mod.LB + '                  customControl.addEventListener("dblclick", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONDBLCLICKEVENT + '", this.id), this.innerText);});' + $mod.LB + "                  break;" + $mod.LB + "                case 5:" + $mod.LB + '                  customControl.addEventListener("dblclick", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONDBLCLICKEVENT + '", this.id), this.selectedIndex);});' + $mod.LB + "                  break;" + $mod.LB + "              }" + $mod.LB + "              break;" + $mod.LB + "            case 2:" + $mod.LB + "              switch (" + $mod.PARAMSNAME + '["Actions"][i]["EventReturnValue"]){' + $mod.LB + "                case 0:" + $mod.LB + '                  customControl.addEventListener("keypress", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONKEYPRESSEVENT + '", this.id), null);});' + $mod.LB + "                  break;" + $mod.LB + "                case 1:" + $mod.LB + '                  customControl.addEventListener("keypress", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONKEYPRESSEVENT + '", this.id), this.value);});' + $mod.LB + "                  break;" + $mod.LB + "                case 2:" + $mod.LB + '                  customControl.addEventListener("keypress", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONKEYPRESSEVENT + '", this.id), this.checked);});' + $mod.LB + "                  break;" + $mod.LB + "                case 3:" + $mod.LB + '                  customControl.addEventListener("keypress", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONKEYPRESSEVENT + '", this.id), this.innerHTML);});' + $mod.LB + "                  break;" + $mod.LB + "                case 4:" + $mod.LB + '                  customControl.addEventListener("keypress", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONKEYPRESSEVENT + '", this.id), this.innerText);});' + $mod.LB + "                  break;" + $mod.LB + "                case 5:" + $mod.LB + '                  customControl.addEventListener("keypress", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONKEYPRESSEVENT + '", this.id), this.selectedIndex);});' + $mod.LB + "                  break;" + $mod.LB + "              }" + $mod.LB + "              break;" + $mod.LB + "            case 3:" + $mod.LB + "              switch (" + $mod.PARAMSNAME + '["Actions"][i]["EventReturnValue"]){' + $mod.LB + "                case 0:" + $mod.LB + '                  customControl.addEventListener("keydown", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONKEYDOWNEVENT + '", this.id), null);});' + $mod.LB + "                  break;" + $mod.LB + "                case 1:" + $mod.LB + '                  customControl.addEventListener("keydown", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONKEYDOWNEVENT + '", this.id), this.value);});' + $mod.LB + "                  break;" + $mod.LB + "                case 2:" + $mod.LB + '                  customControl.addEventListener("keydown", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONKEYDOWNEVENT + '", this.id), this.checked);});' + $mod.LB + "                  break;" + $mod.LB + "                case 3:" + $mod.LB + '                  customControl.addEventListener("keydown", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONKEYDOWNEVENT + '", this.id), this.innerHTML);});' + $mod.LB + "                  break;" + $mod.LB + "                case 4:" + $mod.LB + '                  customControl.addEventListener("keydown", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONKEYDOWNEVENT + '", this.id), this.innerText);});' + $mod.LB + "                  break;" + $mod.LB + "                case 5:" + $mod.LB + '                  customControl.addEventListener("keydown", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONKEYDOWNEVENT + '", this.id), this.selectedIndex);});' + $mod.LB + "                  break;" + $mod.LB + "              }" + $mod.LB + "              break;" + $mod.LB + "            case 4:" + $mod.LB + "              switch (" + $mod.PARAMSNAME + '["Actions"][i]["EventReturnValue"]){' + $mod.LB + "                case 0:" + $mod.LB + '                  customControl.addEventListener("keyup", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONKEYUPEVENT + '", this.id), null);});' + $mod.LB + "                  break;" + $mod.LB + "                case 1:" + $mod.LB + '                  customControl.addEventListener("keyup", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONKEYUPEVENT + '", this.id), this.value);});' + $mod.LB + "                  break;" + $mod.LB + "                case 2:" + $mod.LB + '                  customControl.addEventListener("keyup", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONKEYUPEVENT + '", this.id), this.checked);});' + $mod.LB + "                  break;" + $mod.LB + "                case 3:" + $mod.LB + '                  customControl.addEventListener("keyup", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONKEYUPEVENT + '", this.id), this.innerHTML);});' + $mod.LB + "                  break;" + $mod.LB + "                case 4:" + $mod.LB + '                  customControl.addEventListener("keyup", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONKEYUPEVENT + '", this.id), this.innerText);});' + $mod.LB + "                  break;" + $mod.LB + "                case 5:" + $mod.LB + '                  customControl.addEventListener("keyup", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONKEYUPEVENT + '", this.id), this.selectedIndex);});' + $mod.LB + "                  break;" + $mod.LB + "              }" + $mod.LB + "              break;" + $mod.LB + "            case 5:" + $mod.LB + "              switch (" + $mod.PARAMSNAME + '["Actions"][i]["EventReturnValue"]){' + $mod.LB + "                case 0:" + $mod.LB + '                  customControl.addEventListener("mousedown", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSEDOWNEVENT + '", this.id), null);});' + $mod.LB + "                  break;" + $mod.LB + "                case 1:" + $mod.LB + '                  customControl.addEventListener("mousedown", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSEDOWNEVENT + '", this.id), this.value);});' + $mod.LB + "                  break;" + $mod.LB + "                case 2:" + $mod.LB + '                  customControl.addEventListener("mousedown", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSEDOWNEVENT + '", this.id), this.checked);});' + $mod.LB + "                  break;" + $mod.LB + "                case 3:" + $mod.LB + '                  customControl.addEventListener("mousedown", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSEDOWNEVENT + '", this.id), this.innerHTML);});' + $mod.LB + "                  break;" + $mod.LB + "                case 4:" + $mod.LB + '                  customControl.addEventListener("mousedown", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSEDOWNEVENT + '", this.id), this.innerText);});' + $mod.LB + "                  break;" + $mod.LB + "                case 5:" + $mod.LB + '                  customControl.addEventListener("mousedown", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSEDOWNEVENT + '", this.id), this.selectedIndex);});' + $mod.LB + "                  break;" + $mod.LB + "              }" + $mod.LB + "              break;" + $mod.LB + "            case 6:" + $mod.LB + "              switch (" + $mod.PARAMSNAME + '["Actions"][i]["EventReturnValue"]){' + $mod.LB + "                case 0:" + $mod.LB + '                  customControl.addEventListener("mousemove", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSEMOVEEVENT + '", this.id), null);});' + $mod.LB + "                  break;" + $mod.LB + "                case 1:" + $mod.LB + '                  customControl.addEventListener("mousemove", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSEMOVEEVENT + '", this.id), this.value);});' + $mod.LB + "                  break;" + $mod.LB + "                case 2:" + $mod.LB + '                  customControl.addEventListener("mousemove", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSEMOVEEVENT + '", this.id), this.checked);});' + $mod.LB + "                  break;" + $mod.LB + "                case 3:" + $mod.LB + '                  customControl.addEventListener("mousemove", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSEMOVEEVENT + '", this.id), this.innerHTML);});' + $mod.LB + "                  break;" + $mod.LB + "                case 4:" + $mod.LB + '                  customControl.addEventListener("mousemove", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSEMOVEEVENT + '", this.id), this.innerText);});' + $mod.LB + "                  break;" + $mod.LB + "                case 5:" + $mod.LB + '                  customControl.addEventListener("mousemove", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSEMOVEEVENT + '", this.id), this.selectedIndex);});' + $mod.LB + "                  break;" + $mod.LB + "              }" + $mod.LB + "              break;" + $mod.LB + "            case 7:" + $mod.LB + "              switch (" + $mod.PARAMSNAME + '["Actions"][i]["EventReturnValue"]){' + $mod.LB + "                case 0:" + $mod.LB + '                  customControl.addEventListener("mouseup", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSEUPEVENT + '", this.id), null);});' + $mod.LB + "                  break;" + $mod.LB + "                case 1:" + $mod.LB + '                  customControl.addEventListener("mouseup", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSEUPEVENT + '", this.id), this.value);});' + $mod.LB + "                  break;" + $mod.LB + "                case 2:" + $mod.LB + '                  customControl.addEventListener("mouseup", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSEUPEVENT + '", this.id), this.checked);});' + $mod.LB + "                  break;" + $mod.LB + "                case 3:" + $mod.LB + '                  customControl.addEventListener("mouseup", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSEUPEVENT + '", this.id), this.innerHTML);});' + $mod.LB + "                  break;" + $mod.LB + "                case 4:" + $mod.LB + '                  customControl.addEventListener("mouseup", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSEUPEVENT + '", this.id), this.innerText);});' + $mod.LB + "                  break;" + $mod.LB + "                case 5:" + $mod.LB + '                  customControl.addEventListener("mouseup", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSEUPEVENT + '", this.id), this.selectedIndex);});' + $mod.LB + "                  break;" + $mod.LB + "              }" + $mod.LB + "              break;" + $mod.LB + "            case 8:" + $mod.LB + "              switch (" + $mod.PARAMSNAME + '["Actions"][i]["EventReturnValue"]){' + $mod.LB + "                case 0:" + $mod.LB + '                  customControl.addEventListener("mouseenter", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSEENTEREVENT + '", this.id), null);});' + $mod.LB + "                  break;" + $mod.LB + "                case 1:" + $mod.LB + '                  customControl.addEventListener("mouseenter", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSEENTEREVENT + '", this.id), this.value);});' + $mod.LB + "                  break;" + $mod.LB + "                case 2:" + $mod.LB + '                  customControl.addEventListener("mouseenter", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSEENTEREVENT + '", this.id), this.checked);});' + $mod.LB + "                  break;" + $mod.LB + "                case 3:" + $mod.LB + '                  customControl.addEventListener("mouseenter", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSEENTEREVENT + '", this.id), this.innerHTML);});' + $mod.LB + "                  break;" + $mod.LB + "                case 4:" + $mod.LB + '                  customControl.addEventListener("mouseenter", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSEENTEREVENT + '", this.id), this.innerText);});' + $mod.LB + "                  break;" + $mod.LB + "                case 5:" + $mod.LB + '                  customControl.addEventListener("mouseenter", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSEENTEREVENT + '", this.id), this.selectedIndex);});' + $mod.LB + "                  break;" + $mod.LB + "              }" + $mod.LB + "              break;" + $mod.LB + "            case 9:" + $mod.LB + "              switch (" + $mod.PARAMSNAME + '["Actions"][i]["EventReturnValue"]){' + $mod.LB + "                case 0:" + $mod.LB + '                  customControl.addEventListener("mouseleave", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSELEAVEEVENT + '", this.id), null);});' + $mod.LB + "                  break;" + $mod.LB + "                case 1:" + $mod.LB + '                  customControl.addEventListener("mouseleave", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSELEAVEEVENT + '", this.id), this.value);});' + $mod.LB + "                  break;" + $mod.LB + "                case 2:" + $mod.LB + '                  customControl.addEventListener("mouseleave", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSELEAVEEVENT + '", this.id), this.checked);});' + $mod.LB + "                  break;" + $mod.LB + "                case 3:" + $mod.LB + '                  customControl.addEventListener("mouseleave", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSELEAVEEVENT + '", this.id), this.innerHTML);});' + $mod.LB + "                  break;" + $mod.LB + "                case 4:" + $mod.LB + '                  customControl.addEventListener("mouseleave", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSELEAVEEVENT + '", this.id), this.innerText);});' + $mod.LB + "                  break;" + $mod.LB + "                case 5:" + $mod.LB + '                  customControl.addEventListener("mouseleave", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONMOUSELEAVEEVENT + '", this.id), this.selectedIndex);});' + $mod.LB + "                  break;" + $mod.LB + "              }" + $mod.LB + "              break;" + $mod.LB + "            case 10:" + $mod.LB + "              switch (" + $mod.PARAMSNAME + '["Actions"][i]["EventReturnValue"]){' + $mod.LB + "                case 0:" + $mod.LB + '                  customControl.addEventListener("blur", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONBLUREVENT + '", this.id), null);});' + $mod.LB + "                  break;" + $mod.LB + "                case 1:" + $mod.LB + '                  customControl.addEventListener("blur", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONBLUREVENT + '", this.id), this.value);});' + $mod.LB + "                  break;" + $mod.LB + "                case 2:" + $mod.LB + '                  customControl.addEventListener("blur", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONBLUREVENT + '", this.id), this.checked);});' + $mod.LB + "                  break;" + $mod.LB + "                case 3:" + $mod.LB + '                  customControl.addEventListener("blur", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONBLUREVENT + '", this.id), this.innerHTML);});' + $mod.LB + "                  break;" + $mod.LB + "                case 4:" + $mod.LB + '                  customControl.addEventListener("blur", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONBLUREVENT + '", this.id), this.innerText);});' + $mod.LB + "                  break;" + $mod.LB + "                case 5:" + $mod.LB + '                  customControl.addEventListener("blur", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONBLUREVENT + '", this.id), this.selectedIndex);});' + $mod.LB + "                  break;" + $mod.LB + "              }" + $mod.LB + "              break;" + $mod.LB + "            case 11:" + $mod.LB + "              switch (" + $mod.PARAMSNAME + '["Actions"][i]["EventReturnValue"]){' + $mod.LB + "                case 0:" + $mod.LB + '                  customControl.addEventListener("focus", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONFOCUSEVENT + '", this.id), null);});' + $mod.LB + "                  break;" + $mod.LB + "                case 1:" + $mod.LB + '                  customControl.addEventListener("focus", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONFOCUSEVENT + '", this.id), this.value);});' + $mod.LB + "                  break;" + $mod.LB + "                case 2:" + $mod.LB + '                  customControl.addEventListener("focus", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONFOCUSEVENT + '", this.id), this.checked);});' + $mod.LB + "                  break;" + $mod.LB + "                case 3:" + $mod.LB + '                  customControl.addEventListener("focus", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONFOCUSEVENT + '", this.id), this.innerHTML);});' + $mod.LB + "                  break;" + $mod.LB + "                case 4:" + $mod.LB + '                  customControl.addEventListener("focus", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONFOCUSEVENT + '", this.id), this.innerText);});' + $mod.LB + "                  break;" + $mod.LB + "                case 5:" + $mod.LB + '                  customControl.addEventListener("focus", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONFOCUSEVENT + '", this.id), this.selectedIndex);});' + $mod.LB + "                  break;" + $mod.LB + "              }" + $mod.LB + "              break;" + $mod.LB + "            case 12:" + $mod.LB + "              switch (" + $mod.PARAMSNAME + '["Actions"][i]["EventReturnValue"]){' + $mod.LB + "                case 0:" + $mod.LB + '                  customControl.addEventListener("change", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONCHANGEEVENT + '", this.id), null);});' + $mod.LB + "                  break;" + $mod.LB + "                case 1:" + $mod.LB + '                  customControl.addEventListener("change", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONCHANGEEVENT + '", this.id), this.value);});' + $mod.LB + "                  break;" + $mod.LB + "                case 2:" + $mod.LB + '                  customControl.addEventListener("change", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONCHANGEEVENT + '", this.id), this.checked);});' + $mod.LB + "                  break;" + $mod.LB + "                case 3:" + $mod.LB + '                  customControl.addEventListener("change", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONCHANGEEVENT + '", this.id), this.innerHTML);});' + $mod.LB + "                  break;" + $mod.LB + "                case 4:" + $mod.LB + '                  customControl.addEventListener("change", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONCHANGEEVENT + '", this.id), this.innerText);});' + $mod.LB + "                  break;" + $mod.LB + "                case 5:" + $mod.LB + '                  customControl.addEventListener("change", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONCHANGEEVENT + '", this.id), this.selectedIndex);});' + $mod.LB + "                  break;" + $mod.LB + "              }" + $mod.LB + "              break;" + $mod.LB + "            case 13:" + $mod.LB + "              switch (" + $mod.PARAMSNAME + '["Actions"][i]["EventReturnValue"]){' + $mod.LB + "                case 0:" + $mod.LB + '                  customControl.addEventListener("select", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONSELECTEVENT + '", this.id), null);});' + $mod.LB + "                  break;" + $mod.LB + "                case 1:" + $mod.LB + '                  customControl.addEventListener("select", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONSELECTEVENT + '", this.id), this.value);});' + $mod.LB + "                  break;" + $mod.LB + "                case 2:" + $mod.LB + '                  customControl.addEventListener("select", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONSELECTEVENT + '", this.id), this.checked);});' + $mod.LB + "                  break;" + $mod.LB + "                case 3:" + $mod.LB + '                  customControl.addEventListener("select", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONSELECTEVENT + '", this.id), this.innerHTML);});' + $mod.LB + "                  break;" + $mod.LB + "                case 4:" + $mod.LB + '                  customControl.addEventListener("select", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONSELECTEVENT + '", this.id), this.innerText);});' + $mod.LB + "                  break;" + $mod.LB + "                case 5:" + $mod.LB + '                  customControl.addEventListener("select", function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONSELECTEVENT + '", this.id), this.selectedIndex);});' + $mod.LB + "                  break;" + $mod.LB + "              }" + $mod.LB + "              break;" + $mod.LB + "            case 14:" + $mod.LB + "              switch (" + $mod.PARAMSNAME + '["Actions"][i]["EventReturnValue"]){' + $mod.LB + "                case 0:" + $mod.LB + "                  customControl.addEventListener(" + $mod.PARAMSNAME + '["Actions"][i]["CustomEvent"], function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONCUSTOMEVENT + '", this.id), null);});' + $mod.LB + "                  break;" + $mod.LB + "                case 1:" + $mod.LB + "                  customControl.addEventListener(" + $mod.PARAMSNAME + '["Actions"][i]["CustomEvent"], function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONCUSTOMEVENT + '", this.id), this.value);});' + $mod.LB + "                  break;" + $mod.LB + "                case 2:" + $mod.LB + "                  customControl.addEventListener(" + $mod.PARAMSNAME + '["Actions"][i]["CustomEvent"], function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONCUSTOMEVENT + '", this.id), this.checked);});' + $mod.LB + "                  break;" + $mod.LB + "                case 3:" + $mod.LB + "                  customControl.addEventListener(" + $mod.PARAMSNAME + '["Actions"][i]["CustomEvent"], function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONCUSTOMEVENT + '", this.id), this.innerHTML);});' + $mod.LB + "                  break;" + $mod.LB + "                case 4:" + $mod.LB + "                  customControl.addEventListener(" + $mod.PARAMSNAME + '["Actions"][i]["CustomEvent"], function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONCUSTOMEVENT + '", this.id), this.innerText);});' + $mod.LB + "                  break;" + $mod.LB + "                case 5:" + $mod.LB + "                  customControl.addEventListener(" + $mod.PARAMSNAME + '["Actions"][i]["CustomEvent"], function(event){' + $mod.GETSENDEVENT + '(parseEvent(event, "' + $mod.ACTIONCUSTOMEVENT + '", this.id), this.selectedIndex);});' + $mod.LB + "                  break;" + $mod.LB + "              }" + $mod.LB + "              break;" + $mod.LB + "          }" + $mod.LB + "        }" + $mod.LB + "      }" + $mod.LB + "    }" + $mod.LB;
      Result = Result + "  if (" + $mod.ELEMENTCONTAINERVAR + "){" + $mod.LB + "    " + $mod.ELEMENTCONTAINERARRAYVAR + "[" + $mod.PARAMSNAME + '["ID"]] = ' + $mod.ELEMENTCONTAINERVAR + ";" + $mod.LB + "  }" + $mod.LB + "}";
      return Result;
    };
    this.GetShowPopupFunction = function () {
      var Result = "";
      var m = "";
      Result = "";
      if (!(this.FMaps != null)) return Result;
      m = "";
      this.DoCustomizePopup({get: function () {
          return m;
        }, set: function (v) {
          m = v;
        }});
      Result = "function " + $mod.SHOWPOPUPFUNCTION + "(" + $mod.PARAMSNAME + "){" + $mod.LB + "  var " + $mod.POPUPVAR + " = " + $mod.POPUPARRAYVAR + "[" + $mod.PARAMSNAME + '["ID"]];' + $mod.LB + this.FMaps.GetShowPopup() + $mod.LB + $mod.LB;
      if (m !== "") Result = Result + m + $mod.LB + $mod.LB;
      Result = Result + "  if (" + $mod.POPUPVAR + "){" + $mod.LB + "    " + $mod.POPUPARRAYVAR + "[" + $mod.PARAMSNAME + '["ID"]] = ' + $mod.POPUPVAR + ";" + $mod.LB + "  }" + $mod.LB + "}";
      return Result;
    };
    this.GetClosePopupFunction = function () {
      var Result = "";
      Result = "";
      if (!(this.FMaps != null)) return Result;
      Result = "function " + $mod.CLOSEPOPUPFUNCTION + "(" + $mod.PARAMSNAME + "){" + $mod.LB + "  var " + $mod.POPUPVAR + " = " + $mod.POPUPARRAYVAR + "[" + $mod.PARAMSNAME + '["ID"]];' + $mod.LB + this.FMaps.GetClosePopup() + $mod.LB + $mod.LB + "  if (" + $mod.POPUPVAR + "){" + $mod.LB + "    delete " + $mod.POPUPARRAYVAR + "[" + $mod.PARAMSNAME + '["ID"]];' + $mod.LB + "    " + $mod.POPUPVAR + " = null;" + $mod.LB + "  }" + $mod.LB + "}";
      return Result;
    };
    this.GetDeleteMarkerFunction = function () {
      var Result = "";
      Result = "";
      if (!(this.FMaps != null)) return Result;
      Result = "function " + $mod.DELETEMARKERFUNCTION + "(" + $mod.PARAMSNAME + "){" + $mod.LB + "  var " + $mod.MARKERVAR + " = " + $mod.MARKERARRAYVAR + "[" + $mod.PARAMSNAME + '["ID"]];' + $mod.LB + this.FMaps.GetDeleteMarker() + $mod.LB + $mod.LB + "  if (" + $mod.MARKERVAR + "){" + $mod.LB + "    delete " + $mod.MARKERARRAYVAR + "[" + $mod.PARAMSNAME + '["ID"]];' + $mod.LB + "    " + $mod.MARKERVAR + " = null;" + $mod.LB + "  }" + $mod.LB + "}";
      return Result;
    };
    this.GetAddMarkers = function () {
      var Result = "";
      var I = 0;
      Result = "";
      for (var $l = 0, $end = this.FMarkers.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        Result = Result + "  " + $mod.ADDORUPDATEMARKERFUNCTION + "(" + pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON$1.call(this.FMarkers.GetItem$1(I)) + ");" + $mod.LB;
      };
      return Result;
    };
    this.GetDeleteElementContainerFunction = function () {
      var Result = "";
      Result = "";
      if (!(this.FMaps != null)) return Result;
      Result = "function " + $mod.DELETEELEMENTCONTAINERFUNCTION + "(" + $mod.PARAMSNAME + "){" + $mod.LB + "  var " + $mod.ELEMENTCONTAINERVAR + " = " + $mod.ELEMENTCONTAINERARRAYVAR + "[" + $mod.PARAMSNAME + '["ID"]];' + $mod.LB + "  if (" + $mod.ELEMENTCONTAINERVAR + "){" + $mod.LB + "    " + this.GetID() + ".removeChild(" + $mod.ELEMENTCONTAINERVAR + "[0]);" + $mod.LB + "    document.head.removeChild(" + $mod.ELEMENTCONTAINERVAR + "[1]);" + $mod.LB + "    document.head.removeChild(" + $mod.ELEMENTCONTAINERVAR + "[2]);" + $mod.LB + "    delete " + $mod.ELEMENTCONTAINERARRAYVAR + "[" + $mod.PARAMSNAME + '["ID"]];' + $mod.LB + "    " + $mod.ELEMENTCONTAINERVAR + " = null;" + $mod.LB + "  }" + $mod.LB + "}";
      return Result;
    };
    this.GetAddElementContainers = function () {
      var Result = "";
      var I = 0;
      var arr = [];
      var c = null;
      Result = "";
      arr = rtl.arraySetLength(arr,"",3);
      arr[0] = "HTML";
      arr[1] = "Script";
      arr[2] = "Style";
      c = $mod.TTMSFNCMapsElementContainers.$create("Create$3",[null]);
      try {
        c.Assign(this.FElementContainers);
        this.SyncLabels(c);
        for (var $l = 0, $end = c.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          Result = Result + "  " + $mod.ADDORUPDATEELEMENTCONTAINERFUNCTION + "(" + pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON.call(c.GetItem$1(I),rtl.arrayRef(arr)) + ");" + $mod.LB;
        };
      } finally {
        c = rtl.freeLoc(c);
      };
      return Result;
    };
    this.GetAddOrUpdatePolyElementFunction = function () {
      var Result = "";
      var p = "";
      Result = "";
      if (!(this.FMaps != null)) return Result;
      p = "";
      this.DoCustomizePolyElement({get: function () {
          return p;
        }, set: function (v) {
          p = v;
        }});
      Result = "function " + $mod.ADDORUPDATEPOLYELEMENTFUNCTION + "(" + $mod.PARAMSNAME + "){" + $mod.LB + "  var " + $mod.POLYELEMENTVAR + " = " + $mod.POLYELEMENTARRAYVAR + "[" + $mod.PARAMSNAME + '["ID"]];' + $mod.LB + this.FMaps.GetAddOrUpdatePolyElement() + $mod.LB + $mod.LB;
      if (p !== "") Result = Result + p + $mod.LB + $mod.LB;
      Result = Result + "  if (" + $mod.POLYELEMENTVAR + "){" + $mod.LB + "    " + $mod.POLYELEMENTARRAYVAR + "[" + $mod.PARAMSNAME + '["ID"]] = ' + $mod.POLYELEMENTVAR + ";" + $mod.LB + "  }" + $mod.LB + "}";
      return Result;
    };
    this.GetDeletePolyElementFunction = function () {
      var Result = "";
      Result = "";
      if (!(this.FMaps != null)) return Result;
      Result = "function " + $mod.DELETEPOLYELEMENTFUNCTION + "(" + $mod.PARAMSNAME + "){" + $mod.LB + "  var " + $mod.POLYELEMENTVAR + " = " + $mod.POLYELEMENTARRAYVAR + "[" + $mod.PARAMSNAME + '["ID"]];' + $mod.LB + this.FMaps.GetDeletePolyElement() + $mod.LB + $mod.LB + "  if (" + $mod.POLYELEMENTVAR + "){" + $mod.LB + "    delete " + $mod.POLYELEMENTARRAYVAR + "[" + $mod.PARAMSNAME + '["ID"]];' + $mod.LB + "    " + $mod.POLYELEMENTVAR + " = null;" + $mod.LB + "  }" + $mod.LB + "}";
      return Result;
    };
    this.InternalGetAddPolyElements = function (AElements) {
      var Result = "";
      var I = 0;
      var K = 0;
      var C = 0;
      var arr = [];
      Result = "";
      arr = rtl.arraySetLength(arr,"",1);
      arr[0] = "Coordinates";
      for (var $l = 0, $end = AElements.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        Result = Result + $mod.INITIALIZECOORDINATEARRAY + "();" + $mod.LB;
        for (var $l1 = 0, $end1 = AElements.GetItem$1(I).FCoordinates.GetCount() - 1; $l1 <= $end1; $l1++) {
          C = $l1;
          Result = Result + $mod.ADDCOORDINATETOARRAY + "(" + pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON$1.call(AElements.GetItem$1(I).FCoordinates.GetItem$1(C)) + ");" + $mod.LB;
        };
        Result = Result + $mod.INITIALIZEHOLESARRAY + "();" + $mod.LB;
        for (var $l2 = 0, $end2 = AElements.GetItem$1(I).FHoles.GetCount() - 1; $l2 <= $end2; $l2++) {
          C = $l2;
          for (var $l3 = AElements.GetItem$1(I).FHoles.GetItem$1(C).FCoordinates.GetCount() - 1; $l3 >= 0; $l3--) {
            K = $l3;
            Result = Result + $mod.ADDHOLETOARRAY + '(["' + AElements.GetItem$1(I).FHoles.GetItem$1(C).GetID() + '",' + pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON$1.call(AElements.GetItem$1(I).FHoles.GetItem$1(C).FCoordinates.GetItem$1(K)) + "]);" + $mod.LB;
          };
        };
        Result = Result + "  " + $mod.ADDORUPDATEPOLYELEMENTFUNCTION + "(" + pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON.call(AElements.GetItem$1(I),rtl.arrayRef(arr)) + ");" + $mod.LB;
      };
      return Result;
    };
    this.GetAddPolyElements = function () {
      var Result = "";
      var apl = "";
      var apg = "";
      var apc = "";
      var apr = "";
      Result = "";
      apl = this.InternalGetAddPolyElements(this.FPolygons);
      if (apl !== "") Result = Result + apl + $mod.LB;
      apr = this.InternalGetAddPolyElements(this.FRectangles);
      if (apr !== "") Result = Result + apr + $mod.LB;
      apc = this.InternalGetAddPolyElements(this.FCircles);
      if (apc !== "") Result = Result + apc + $mod.LB;
      apg = this.InternalGetAddPolyElements(this.FPolylines);
      if (apg !== "") Result = Result + apg + $mod.LB;
      return Result;
    };
    this.GetGlobalVariables = function () {
      var Result = "";
      var m = "";
      var o = "";
      var c = "";
      var b = "";
      var ci = "";
      var p = "";
      var co = null;
      var obj = null;
      var bo = null;
      var cir = null;
      var po = null;
      Result = "";
      if (!(this.FMaps != null)) return Result;
      co = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinate.$create("Create$3",[0,0]);
      try {
        c = pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON$1.call(co);
      } finally {
        co = rtl.freeLoc(co);
      };
      po = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsBasePoint.$create("Create$1");
      try {
        p = pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON$1.call(po);
      } finally {
        po = rtl.freeLoc(po);
      };
      obj = $mod.TTMSFNCMapsEventData.$create("Create$1");
      try {
        o = pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON$1.call(obj);
      } finally {
        obj = rtl.freeLoc(obj);
      };
      bo = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsBounds.$create("Create$2",[pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(pas["WEBLib.TMSFNCMapsCommonTypes"].CreateCoordinate(0,0)),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(pas["WEBLib.TMSFNCMapsCommonTypes"].CreateCoordinate(0,0))]);
      try {
        b = pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON$1.call(bo);
      } finally {
        bo = rtl.freeLoc(bo);
      };
      cir = $mod.TTMSFNCMapsCircle.$create("Create$1",[null]);
      try {
        ci = pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON$1.call(cir);
      } finally {
        cir = rtl.freeLoc(cir);
      };
      m = "";
      this.DoCustomizeGlobalVariables({get: function () {
          return m;
        }, set: function (v) {
          m = v;
        }});
      if (m !== "") Result = Result + m + $mod.LB;
      Result = Result + this.FMaps.GetGlobalVariables() + $mod.LB;
      Result = Result + "var " + $mod.MAPCOMPONENT + " = null;" + $mod.LB + "var " + $mod.MAPBOUNDS + ";" + $mod.LB + "var " + $mod.MAPOPTIONS + ";" + $mod.LB + "var " + $mod.MAPVAR + " = null;" + $mod.LB + "var " + $mod.MARKERARRAYVAR + " = {};" + $mod.LB + "var " + $mod.ELEMENTCONTAINERARRAYVAR + " = {};" + $mod.LB + "var " + $mod.POPUPARRAYVAR + " = {};" + $mod.LB + "var " + $mod.POLYELEMENTARRAYVAR + " = {};" + $mod.LB + "var " + $mod.COORDINATEARRAYVAR + ";" + $mod.LB + "var " + $mod.HOLEARRAYVAR + " = {};" + $mod.LB + "var MapCallBackFlag = false;" + $mod.LB + $mod.LB + "function " + $mod.INITIALIZECOORDINATEARRAY + "(){" + $mod.LB + "  " + $mod.COORDINATEARRAYVAR + " = " + this.FMaps.GetInitializeCoordinateArray() + $mod.LB + "}" + $mod.LB + $mod.LB + "function " + $mod.INITIALIZEHOLESARRAY + "(){" + $mod.LB + "  " + $mod.HOLEARRAYVAR + " = " + this.FMaps.GetInitializeHolesArray() + $mod.LB + "}" + $mod.LB + $mod.LB + "function " + $mod.ADDCOORDINATETOARRAY + "(" + $mod.PARAMSNAME + "){" + $mod.LB + "  " + this.FMaps.GetAddCoordinateToArray() + $mod.LB + "}" + $mod.LB + $mod.LB + "function " + $mod.ADDHOLETOARRAY + "(" + $mod.PARAMSNAME + "){" + $mod.LB + "  " + this.FMaps.GetAddHoleToArray() + $mod.LB + "}" + $mod.LB + $mod.LB + "function " + $mod.ADDCOORDINATESTOARRAY + "(" + $mod.PARAMSNAME + "){" + $mod.LB + "  for (var i=0; i < " + $mod.PARAMSNAME + ".length; i++){" + $mod.LB + "    " + $mod.ADDCOORDINATETOARRAY + '({"Latitude": ' + $mod.PARAMSNAME + '[i]["Latitude"], "Longitude": ' + $mod.PARAMSNAME + '[i]["Longitude"]});' + $mod.LB + "  }" + $mod.LB + "}" + $mod.LB + $mod.LB + "function " + $mod.ADDHOLESTOARRAY + "(" + $mod.PARAMSNAME + "){" + $mod.LB + "  for (var i=" + $mod.PARAMSNAME + "[1].length - 1; i >= 0; i--){" + $mod.LB + "    " + $mod.ADDHOLETOARRAY + "([" + $mod.PARAMSNAME + "[0]" + ', {"Latitude": ' + $mod.PARAMSNAME + '[1][i]["Latitude"], "Longitude": ' + $mod.PARAMSNAME + '[1][i]["Longitude"]}]);' + $mod.LB + "  }" + $mod.LB + "}" + $mod.LB + $mod.LB + "function MapKeyDown(event){" + $mod.LB + "  var r = {'EventName': 'MapKeyDown'};" + $mod.LB + "  " + $mod.GETSENDEVENT + "(r, event.keyCode);" + $mod.LB + "}" + $mod.LB + "function ResetMap(){" + $mod.LB + $mod.MAPID + ".removeEventListener('keydown', MapKeyDown)" + $mod.LB + this.FMaps.GetResetMap() + $mod.LB + "  " + $mod.MAPVAR + " = null;" + $mod.LB + "}" + $mod.LB + "function MapCallBack(){" + $mod.LB + "  MapCallBackFlag = true;" + $mod.LB + "}" + $mod.LB + $mod.LB + "function " + $mod.GETMARKERARRAYVAR + "{" + $mod.LB + "  var arr = [];" + $mod.LB + "  for (var key in " + $mod.MARKERARRAYVAR + "){" + $mod.LB + "    var v = key;" + $mod.LB + "    arr.push(v);" + $mod.LB + "  }" + $mod.LB + "  return arr.toString();" + $mod.LB + "}" + $mod.LB + $mod.LB + "function " + $mod.GETELEMENTCONTAINERARRAYVAR + "{" + $mod.LB + "  var arr = [];" + $mod.LB + "  for (var key in " + $mod.ELEMENTCONTAINERARRAYVAR + "){" + $mod.LB + "    var v = key;" + $mod.LB + "    arr.push(v);" + $mod.LB + "  }" + $mod.LB + "  return arr.toString();" + $mod.LB + "}" + $mod.LB + $mod.LB + "function " + $mod.GETPOPUPARRAYVAR + "{" + $mod.LB + "  var arr = [];" + $mod.LB + "  for (var key in " + $mod.POPUPARRAYVAR + "){" + $mod.LB + "    var v = key;" + $mod.LB + "    arr.push(v);" + $mod.LB + "  }" + $mod.LB + "  return arr.toString();" + $mod.LB + "}" + $mod.LB + $mod.LB + "function " + $mod.GETPOLYELEMENTARRAYVAR + "{" + $mod.LB + "  var arr = [];" + $mod.LB + "  for (var key in " + $mod.POLYELEMENTARRAYVAR + "){" + $mod.LB + "    var v = key;" + $mod.LB + "    arr.push(v);" + $mod.LB + "  }" + $mod.LB + "  return arr.toString();" + $mod.LB + "}" + $mod.LB + $mod.LB + "function " + $mod.GETFOCUSMAP + "(){" + $mod.LB + "  if (document.activeElement != " + $mod.MAPID + "){" + $mod.LB + "    " + $mod.MAPID + ".focus();" + $mod.LB + "  }" + $mod.LB + "}" + $mod.LB + $mod.LB + "function " + $mod.GETSENDEVENT + "(" + $mod.PARAMSNAME + ", customdata = undefined){" + $mod.LB + "  var jsonObj = getDefaultEventDataObject();" + $mod.LB + "  if (" + $mod.PARAMSNAME + '["ID"]){' + $mod.LB + '    jsonObj["ID"] = ' + $mod.PARAMSNAME + '["ID"];' + $mod.LB + "  }" + $mod.LB + "  if (" + $mod.PARAMSNAME + '["X"]){' + $mod.LB + '    jsonObj["X"] = ' + $mod.PARAMSNAME + '["X"];' + $mod.LB + "  }" + $mod.LB + "  if (" + $mod.PARAMSNAME + '["Y"]){' + $mod.LB + '    jsonObj["Y"] = ' + $mod.PARAMSNAME + '["Y"];' + $mod.LB + "  }" + $mod.LB + "  if (" + $mod.PARAMSNAME + '["EventName"]){' + $mod.LB + '    jsonObj["EventName"] = ' + $mod.PARAMSNAME + '["EventName"];' + $mod.LB + "  }" + $mod.LB + "  if (" + $mod.PARAMSNAME + '["Coordinate"]){' + $mod.LB + '    jsonObj["Coordinate"]["Latitude"] = ' + $mod.PARAMSNAME + '["Coordinate"]["Latitude"];' + $mod.LB + '    jsonObj["Coordinate"]["Longitude"] = ' + $mod.PARAMSNAME + '["Coordinate"]["Longitude"];' + $mod.LB + "  }" + $mod.LB + "  var cd = undefined;" + $mod.LB + "  if (customdata) {" + $mod.LB + "    cd = encodeURIComponent(JSON.stringify(customdata));" + $mod.LB + "  }" + $mod.LB + "  sendObjectMessage(JSON.stringify(jsonObj), cd); " + $mod.LB + "}" + $mod.LB + $mod.LB + "function toRGBA(c, o){" + $mod.LB + "  c = c.replace('#','');" + $mod.LB + "  r = parseInt(c.substring(0,2), 16);" + $mod.LB + "  g = parseInt(c.substring(2,4), 16);" + $mod.LB + "  b = parseInt(c.substring(4,6), 16);" + $mod.LB + "  result = 'rgba('+r+','+g+','+b+','+o+')';" + $mod.LB + "  return result;" + $mod.LB + "}" + $mod.LB + $mod.LB + "function getDefaultEventDataObject(){" + $mod.LB + "  return " + o + $mod.LB + "}" + $mod.LB + $mod.LB + "function getDefaultCoordinateObject(){" + $mod.LB + "  return " + c + $mod.LB + "}" + $mod.LB + $mod.LB + "function getDefaultPointObject(){" + $mod.LB + "  return " + p + $mod.LB + "}" + $mod.LB + $mod.LB + "function getDefaultBoundsObject(){" + $mod.LB + "  return " + b + $mod.LB + "}" + $mod.LB + $mod.LB + "function getDefaultCircleObject(){" + $mod.LB + "  return " + ci + $mod.LB + "}" + $mod.LB + $mod.LB + "function calculateCoordinate(ACoordinate, ABearing, ADistance, AReverse) {" + $mod.LB + "  var a = 0.0;" + $mod.LB + "  var ad = 0.0;" + $mod.LB + "  var r = 0.0;" + $mod.LB + "  var a1 = 0.0;" + $mod.LB + "  var sina2 = 0.0;" + $mod.LB + "  var a2 = 0.0;" + $mod.LB + "  var y = 0.0;" + $mod.LB + "  var x = 0.0;" + $mod.LB + "  var d1 = 0.0;" + $mod.LB + "  var d2 = 0.0;" + $mod.LB + "  r = 6371000;" + $mod.LB + "  a = ADistance / r;" + $mod.LB + "  ad = ABearing * (Math.PI / 180);" + $mod.LB + '  var lat1 = ACoordinate["Latitude"];' + $mod.LB + '  var lng1 = ACoordinate["Longitude"];' + $mod.LB + "  a1 = lat1 * (Math.PI / 180);" + $mod.LB + "  d1 = lng1 * (Math.PI / 180);" + $mod.LB + "  sina2 = (Math.sin(a1) * Math.cos(a)) + (Math.cos(a1) * Math.sin(a) * Math.cos(ad));" + $mod.LB + "  a2 = Math.asin(sina2);" + $mod.LB + "  y = Math.sin(ad) * Math.sin(a) * Math.cos(a1);" + $mod.LB + "  x = Math.cos(a) - (Math.sin(a1) * sina2);" + $mod.LB + "  d2 = d1 + Math.atan2(y,x);" + $mod.LB + "  var lat = a2 * (180 / Math.PI);" + $mod.LB + "  var lon = d2 * (180 / Math.PI);" + $mod.LB + "  if (AReverse == true) {" + $mod.LB + "    return [lon, lat];" + $mod.LB + "  }else{" + $mod.LB + "    return [lat, lon];" + $mod.LB + "  }" + $mod.LB + "};" + $mod.LB + $mod.LB + "function createCircle(ACenter, ARadius, AReverse) {" + $mod.LB + "  var Result = [];" + $mod.LB + "  for (var I = 0; I <= 100; I++) {" + $mod.LB + "    Result.push(calculateCoordinate(ACenter, (I * -360) / 100, ARadius, AReverse));" + $mod.LB + "  };" + $mod.LB + "  return Result;" + $mod.LB + "};";
      return Result;
    };
    this.GetCallInitialize = function () {
      var Result = "";
      Result = "  var jsonObj = getDefaultEventDataObject();" + $mod.LB + '  jsonObj["EventName"] = "Initialized";' + $mod.LB + "  sendObjectMessage(JSON.stringify(jsonObj));";
      return Result;
    };
    this.GetWaitForMapInitialized = function () {
      var Result = "";
      Result = "";
      if (!(this.FMaps != null)) return Result;
      Result = "function " + $impl.WAITFORMAPINITIALIZEDFUNC + "(){" + $mod.LB + "  if (" + this.FMaps.GetMapsServiceCheck() + ") {" + $mod.LB + "    setTimeout(" + $impl.WAITFORMAPINITIALIZEDFUNC + ", 200);" + $mod.LB + "  } else if (!" + $mod.MAPVAR + ") {" + $mod.LB + "    " + $impl.LOADMAPFUNC + "();" + $mod.LB + "  }" + $mod.LB + "};" + $mod.LB + $impl.WAITFORMAPINITIALIZEDFUNC + "();";
      return Result;
    };
    this.GetDefaultHTML = function () {
      var Result = "";
      var m = "";
      Result = "  <style>" + $mod.LB + "  #notfound {" + $mod.LB + "    background: #d7ebf6;" + $mod.LB + "    padding: 0;" + $mod.LB + "    border: #000000;" + $mod.LB + "    width: 100%;" + $mod.LB + "    height: 100%;" + $mod.LB + "    margin: 0;" + $mod.LB + "    padding: 0;" + $mod.LB + "    border: solid #211b19;" + $mod.LB + "    border-width: thin;" + $mod.LB + "    overflow:hidden;" + $mod.LB + "    display:block;" + $mod.LB + "    -webkit-box-sizing: border-box;" + $mod.LB + "            box-sizing: border-box;" + $mod.LB + "    position: relative;" + $mod.LB + "  }" + $mod.LB + "  #notfound .notfound {" + $mod.LB + "    position: absolute;" + $mod.LB + "    left: 50%;" + $mod.LB + "    top: 50%;" + $mod.LB + "    -webkit-transform: translate(-50%, -50%);" + $mod.LB + "        -ms-transform: translate(-50%, -50%);" + $mod.LB + "            transform: translate(-50%, -50%);" + $mod.LB + "  }" + $mod.LB + "  .notfound {" + $mod.LB + "    max-width: 520px;" + $mod.LB + "    width: 100%;" + $mod.LB + "    line-height: 1.4;" + $mod.LB + "    text-align: center;" + $mod.LB + "  }" + $mod.LB + "  .notfound .notfound-404 {" + $mod.LB + "    position: relative;" + $mod.LB + "    height: 200px;" + $mod.LB + "    margin: 0px auto 20px;" + $mod.LB + "    z-index: -1;" + $mod.LB + "  }" + $mod.LB + "  .notfound .notfound-404 h2 {" + $mod.LB + "    font-family: 'Montserrat', sans-serif;" + $mod.LB + "    font-size: 28px;" + $mod.LB + "    font-weight: 400;" + $mod.LB + "    text-transform: uppercase;" + $mod.LB + "    color: #211b19;" + $mod.LB + "    background: #d7ebf6;" + $mod.LB + "    padding: 10px 5px;" + $mod.LB + "    margin: auto;" + $mod.LB + "    display: inline-block;" + $mod.LB + "    position: absolute;" + $mod.LB + "    bottom: 0px;" + $mod.LB + "    left: 0;" + $mod.LB + "    right: 0;" + $mod.LB + "  }" + $mod.LB + "  @media only screen and (max-width: 767px) {" + $mod.LB + "    .notfound .notfound-404 h1 {" + $mod.LB + "      font-size: 148px;" + $mod.LB + "    }" + $mod.LB + "  }" + $mod.LB + "  @media only screen and (max-width: 480px) {" + $mod.LB + "    .notfound .notfound-404 {" + $mod.LB + "      height: 148px;" + $mod.LB + "      margin: 0px auto 10px;" + $mod.LB + "    }" + $mod.LB + "    .notfound .notfound-404 h1 {" + $mod.LB + "      font-size: 86px;" + $mod.LB + "    }" + $mod.LB + "    .notfound .notfound-404 h2 {" + $mod.LB + "      font-size: 16px;" + $mod.LB + "    }" + $mod.LB + "    .notfound a {" + $mod.LB + "      padding: 7px 15px;" + $mod.LB + "      font-size: 14px;" + $mod.LB + "    }" + $mod.LB + "  }" + $mod.LB + " </style>" + $mod.LB + '  <div id="notfound">' + $mod.LB + '    <div class="notfound">' + $mod.LB + '      <div class="notfound-404">' + $mod.LB;
      m = "";
      if (!this.MapReady()) {
        if (this.FMaps != null) {
          m = this.FMaps.GetIdentifier() + " can't be displayed - please verify if API key is set!"}
         else m = "Map can't be initialized - please verify if correct Service is set!";
      };
      this.DoGetDefaultHTMLMessage({get: function () {
          return m;
        }, set: function (v) {
          m = v;
        }});
      Result = Result + "        <h2>" + m + "</h2>" + $mod.LB;
      Result = Result + "      </div>" + $mod.LB + "    </div>" + $mod.LB + "  </div>" + $mod.LB;
      return Result;
    };
    this.MapReady = function () {
      var Result = false;
      Result = (this.FMaps != null) && (this.FMapsInstance != null) && (this.FMapsProperties != null) && this.FMaps.IsValid();
      return Result;
    };
    this.GetVersionNr = function () {
      var Result = 0;
      Result = pas["WEBLib.TMSFNCUtils"].MakeLong(pas["WEBLib.TMSFNCUtils"].MakeWord(0,1),pas["WEBLib.TMSFNCUtils"].MakeWord(6,2));
      return Result;
    };
    this.GetDocURL = function () {
      var Result = "";
      Result = $mod.TTMSFNCMapsDocURL;
      return Result;
    };
    this.GetTipsURL = function () {
      var Result = "";
      Result = $mod.TTMSFNCMapsTipsURL;
      return Result;
    };
    this.Maps = function () {
      var Result = null;
      var $ok = false;
      try {
        Result = rtl.setIntfL(Result,this.FMaps);
        $ok = true;
      } finally {
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.ParseLinks = function (AList) {
      var Result = "";
      var I = 0;
      var lk = null;
      Result = "";
      for (var $l = 0, $end = AList.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        lk = AList.GetItem$1(I);
        var $tmp = lk.FKind;
        if ($tmp === $mod.TTMSFNCMapsLinkKind.mlkLink) {
          Result = Result + "<link"}
         else if ($tmp === $mod.TTMSFNCMapsLinkKind.mlkScript) {
          Result = Result + "<script"}
         else if ($tmp === $mod.TTMSFNCMapsLinkKind.mlkStyle) Result = Result + "<style";
        if (lk.FURL !== "") {
          var $tmp1 = lk.FKind;
          if ($tmp1 === $mod.TTMSFNCMapsLinkKind.mlkLink) {
            Result = Result + ' href="'}
           else if ($tmp1 === $mod.TTMSFNCMapsLinkKind.mlkScript) Result = Result + ' src="';
          Result = Result + lk.FURL + '"';
        };
        if (lk.FType !== "") Result = Result + ' type="' + lk.FType + '"';
        if (lk.FCharSet !== "") Result = Result + ' charset="' + lk.FCharSet + '"';
        if (lk.FRel !== "") Result = Result + ' rel="' + lk.FRel + '"';
        if (lk.FAsync) Result = Result + " async";
        if (lk.FDefer) Result = Result + " defer";
        Result = Result + ">";
        if (lk.FContent !== "") Result = Result + $mod.LB + lk.FContent;
        var $tmp2 = lk.FKind;
        if ($tmp2 === $mod.TTMSFNCMapsLinkKind.mlkLink) {
          Result = Result + $mod.LB + "</link>"}
         else if ($tmp2 === $mod.TTMSFNCMapsLinkKind.mlkScript) {
          Result = Result + $mod.LB + "</script>"}
         else if ($tmp2 === $mod.TTMSFNCMapsLinkKind.mlkStyle) Result = Result + $mod.LB + "</style>";
        if (I < (AList.GetCount() - 1)) Result = Result + $mod.LB;
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
    this.GetAPIVersion = function () {
      var Result = "";
      Result = "";
      return Result;
    };
    this.GetHeadStyle = function () {
      var Result = "";
      var m = "";
      var hs = "";
      Result = "";
      if (!(this.FMaps != null)) return Result;
      hs = "";
      this.DoCustomizeCSS({get: function () {
          return hs;
        }, set: function (v) {
          hs = v;
        }});
      Result = "#" + $mod.MAPID + " {" + $mod.LB + "  height: 100%;" + $mod.LB + "  margin: 0;" + $mod.LB + "  padding: 0;" + $mod.LB + "  overflow: hidden;" + $mod.LB + "}";
      Result = Result + "  .tmsfncmaps_sb:after {" + $mod.LB + '   content: "";' + $mod.LB + "  \tposition: absolute;" + $mod.LB + "   left: 50%;" + $mod.LB + "  \twidth: 10px;" + $mod.LB + "  \theight: 10px;" + $mod.LB + "   margin-left: -5px;" + "  \tborder-left: inherit;" + $mod.LB + "  \tborder-top: inherit;" + $mod.LB + "  \tbackground-color: inherit;" + $mod.LB + "  \tdisplay: block;" + $mod.LB + "  \ttransform: rotate(-135deg);" + $mod.LB + "  }";
      if (hs !== "") Result = Result + $mod.LB + hs;
      m = this.FMaps.GetHeadStyle();
      if (m !== "") Result = Result + $mod.LB + m;
      return Result;
    };
    this.GetBody = function () {
      var Result = "";
      Result = '<div id="' + $mod.MAPID + '" style="height:100%; width:100%" tabindex="0"></div>';
      return Result;
    };
    this.Assign = function (Source) {
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.Assign.apply(this,arguments);
      if ($mod.TTMSFNCCustomMaps.isPrototypeOf(Source)) {
        this.FService = rtl.as(Source,$mod.TTMSFNCCustomMaps).FService;
        this.FOptions.Assign(rtl.as(Source,$mod.TTMSFNCCustomMaps).FOptions);
        this.FAPIKey = rtl.as(Source,$mod.TTMSFNCCustomMaps).FAPIKey;
        this.FMarkers.Assign(rtl.as(Source,$mod.TTMSFNCCustomMaps).FMarkers);
        this.FElementContainers.Assign(rtl.as(Source,$mod.TTMSFNCCustomMaps).FElementContainers);
        this.FLabels.Assign(rtl.as(Source,$mod.TTMSFNCCustomMaps).FLabels);
        this.FPolylines.Assign(rtl.as(Source,$mod.TTMSFNCCustomMaps).FPolylines);
        this.FPolygons.Assign(rtl.as(Source,$mod.TTMSFNCCustomMaps).FPolygons);
        this.FCircles.Assign(rtl.as(Source,$mod.TTMSFNCCustomMaps).FCircles);
        this.FRectangles.Assign(rtl.as(Source,$mod.TTMSFNCCustomMaps).FRectangles);
        this.FHeadLinks.Assign(rtl.as(Source,$mod.TTMSFNCCustomMaps).FHeadLinks);
      };
    };
    this.Create$1 = function (AOwner) {
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.Create$1.apply(this,arguments);
      if ((this.GetID() === "") && this.IsDesigning()) this.SetID(this.GetNewName());
      this.FMarkers = this.GetMarkersClass().$create("Create$3",[this]);
      this.FElementContainers = this.GetElementContainersClass().$create("Create$3",[this]);
      this.FLabels = this.GetLabelsClass().$create("Create$3",[this]);
      this.FPolygons = this.GetPolygonsClass().$create("Create$3",[this]);
      this.FRectangles = this.GetRectanglesClass().$create("Create$3",[this]);
      this.FCircles = this.GetCirclesClass().$create("Create$3",[this]);
      this.FPolylines = this.GetPolylinesClass().$create("Create$3",[this]);
      this.FHeadLinks = this.GetHeadLinksClass().$create("Create$3",[this]);
      this.CheckInstances();
      return this;
    };
    this.Destroy = function () {
      this.DestroyMap();
      this.SetMapInitialized(false);
      rtl.free(this,"FOptions");
      rtl.free(this,"FMarkers");
      rtl.free(this,"FElementContainers");
      rtl.free(this,"FLabels");
      rtl.free(this,"FPolygons");
      rtl.free(this,"FCircles");
      rtl.free(this,"FRectangles");
      rtl.free(this,"FPolylines");
      rtl.free(this,"FHeadLinks");
      rtl.setIntfP(this,"FMaps",null);
      rtl.setIntfP(this,"FMapsInstance",null);
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.Destroy.call(this);
    };
    this.BeginUpdate = function () {
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControlBase.BeginUpdate.call(this);
      this.FUpdateCount$1 += 1;
    };
    this.EndUpdate = function () {
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControlBase.EndUpdate.call(this);
      this.FUpdateCount$1 -= 1;
      if (this.FUpdateCount$1 === 0) {
        if (!this.FMapInitialized) this.InitializeMap();
        this.UpdatePolyElements();
        this.UpdateMarkers();
        this.UpdateElementContainers();
        this.UpdateOptions();
      };
    };
    this.ReInitialize = function () {
      this.SetMapInitialized(false);
      this.InitializeHTML();
    };
    this.ConnectMarkers = function (AMarkersArray) {
      var I = 0;
      var arr = [];
      this.BeginUpdate();
      if (rtl.length(AMarkersArray) <= 1) return;
      for (var $l = 0, $end = rtl.length(AMarkersArray) - 2; $l <= $end; $l++) {
        I = $l;
        arr = rtl.arraySetLength(arr,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,rtl.length(arr) + 1);
        arr[rtl.length(arr) - 1].$assign(AMarkersArray[I].FCoordinate.GetToRec());
        arr = rtl.arraySetLength(arr,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,rtl.length(arr) + 1);
        arr[rtl.length(arr) - 1].$assign(AMarkersArray[I + 1].FCoordinate.GetToRec());
      };
      arr = rtl.arraySetLength(arr,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,rtl.length(arr) + 1);
      arr[rtl.length(arr) - 1].$assign(AMarkersArray[rtl.length(AMarkersArray) - 1].FCoordinate.GetToRec());
      arr = rtl.arraySetLength(arr,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec,rtl.length(arr) + 1);
      arr[rtl.length(arr) - 1].$assign(AMarkersArray[0].FCoordinate.GetToRec());
      this.AddPolyline(rtl.arrayRef(arr),false);
      this.EndUpdate();
    };
    this.ClearMarkers = function () {
      this.BeginUpdate();
      this.FMarkers.Clear$1();
      this.EndUpdate();
    };
    this.ClearElementContainers = function () {
      this.BeginUpdate();
      this.FElementContainers.Clear$1();
      this.EndUpdate();
    };
    this.ClearLabels = function () {
      this.BeginUpdate();
      this.FLabels.Clear$1();
      this.EndUpdate();
    };
    this.ClearHeadLinks = function () {
      this.BeginUpdate();
      this.FHeadLinks.Clear$1();
      this.EndUpdate();
    };
    this.Clear = function () {
      this.BeginUpdate();
      this.ClearMarkers();
      this.ClearPolygons();
      this.ClearCircles();
      this.ClearLabels();
      this.ClearElementContainers();
      this.ClearRectangles();
      this.ClearPolylines();
      this.EndUpdate();
    };
    this.ClearPolylines = function () {
      this.BeginUpdate();
      this.FPolylines.Clear$1();
      this.EndUpdate();
    };
    this.ClearPolygons = function () {
      this.BeginUpdate();
      this.FPolygons.Clear$1();
      this.EndUpdate();
    };
    this.ClearCircles = function () {
      this.BeginUpdate();
      this.FCircles.Clear$1();
      this.EndUpdate();
    };
    this.ClearRectangles = function () {
      this.BeginUpdate();
      this.FRectangles.Clear$1();
      this.EndUpdate();
    };
    this.UpdateControlAfterResize = function () {
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.UpdateControlAfterResize.call(this);
      if (!this.FMapInitialized || this.IsDestroying() || (this.FUpdateCount$1 > 0)) return;
      if (this.FService === $mod.TTMSFNCMapsService.msOpenLayers) this.ExecuteJavaScript($mod.MAPVAR + ".updateSize()",rtl.createCallback(this,"DoUpdateMarkers"),false);
    };
    this.ZoomToBounds = function (ACoordinates) {
      this.ZoomToBounds$3(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsBoundsRec.$clone(pas["WEBLib.TMSFNCMapsCommonTypes"].CreateBounds$1(rtl.arrayRef(ACoordinates))));
    };
    this.ZoomToBounds$1 = function (ACoordinates) {
      this.ZoomToBounds$3(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsBoundsRec.$clone(pas["WEBLib.TMSFNCMapsCommonTypes"].CreateBounds$2(rtl.arrayRef(ACoordinates))));
    };
    this.ZoomToBounds$2 = function (ACoordinates) {
      this.ZoomToBounds$3(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsBoundsRec.$clone(pas["WEBLib.TMSFNCMapsCommonTypes"].CreateBounds$3(rtl.arrayRef(ACoordinates))));
    };
    this.ZoomToBounds$3 = function (ABounds) {
      this.ZoomToBounds$4(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(ABounds.NorthEast),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(ABounds.SouthWest));
    };
    this.ZoomToBounds$4 = function (ANorthEast, ASouthWest) {
      var b = null;
      if (this.FMapInitialized && this.MapReady()) {
        b = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsBounds.$create("Create$2",[pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(ANorthEast),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(ASouthWest)]);
        try {
          this.ExecuteJavaScript($mod.ZOOMTOBOUNDSFUNCTION + "(" + pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON$1.call(b) + ")",null,false);
        } finally {
          b = rtl.freeLoc(b);
        };
      };
    };
    this.GetZoomLevel = function () {
      if (this.FMapInitialized && this.MapReady()) this.ExecuteJavaScript($mod.GETZOOMLEVELFUNCTION + "()",rtl.createCallback(this,"DoGetZoomLevel"),false);
    };
    this.GetCenterCoordinate = function () {
      if (this.FMapInitialized && this.MapReady()) this.ExecuteJavaScript($mod.GETCENTERCOORDINATEFUNCTION + "()",rtl.createCallback(this,"DoGetCenterCoordinate"),false);
    };
    this.GetBounds = function () {
      if (this.FMapInitialized && this.MapReady()) this.ExecuteJavaScript($mod.GETBOUNDSFUNCTION + "()",rtl.createCallback(this,"DoGetBounds"),false);
    };
    this.SetCenterCoordinate = function (ACoordinate) {
      var b = null;
      if (this.FMapInitialized && this.MapReady()) {
        b = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinate.$create("Create$2",[pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(ACoordinate)]);
        try {
          this.ExecuteJavaScript($mod.SETCENTERCOORDINATEFUNCTION + "(" + pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON$1.call(b) + ")",null,false);
        } finally {
          b = rtl.freeLoc(b);
        };
      };
    };
    this.SetCenterCoordinate$1 = function (ALatitude, ALongitude) {
      this.SetCenterCoordinate(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(pas["WEBLib.TMSFNCMapsCommonTypes"].CreateCoordinate(ALatitude,ALongitude)));
    };
    this.SetZoomLevel = function (AZoomLevel) {
      if (this.FMapInitialized && this.MapReady()) this.ExecuteJavaScript($mod.SETZOOMLEVELFUNCTION + "(" + pas["WEBLib.TMSFNCMapsCommonTypes"].FloatToStrDot(AZoomLevel) + ")",null,false);
    };
    this.LatLonToXY = function (ACoordinate) {
      var Result = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsAnchorPointRec.$new();
      var b = null;
      var p = null;
      var s = "";
      Result.X = 0;
      Result.Y = 0;
      if (this.FMapInitialized && this.MapReady()) {
        b = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinate.$create("Create$3",[ACoordinate.Latitude,ACoordinate.Longitude]);
        p = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsAnchorPoint.$create("Create$1");
        p.SetX(0);
        p.SetY(0);
        try {
          s = this.ExecuteJavaScriptSync($mod.GETLATLONTOXYFUNCTION + "(" + pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON$1.call(b) + ")");
          if ((s !== "") && (s !== "null")) {
            pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.FromJSON.call(p,s);
            Result.X = p.FX;
            Result.Y = p.FY;
          };
        } finally {
          b = rtl.freeLoc(b);
          p = rtl.freeLoc(p);
        };
      };
      return Result;
    };
    this.LatLonToXY$1 = function (ALatitude, ALongitude) {
      var Result = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsAnchorPointRec.$new();
      Result.$assign(this.LatLonToXY(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(pas["WEBLib.TMSFNCMapsCommonTypes"].CreateCoordinate(ALatitude,ALongitude))));
      return Result;
    };
    this.CoordinateToXY = function (ACoordinate) {
      var Result = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsAnchorPointRec.$new();
      Result.$assign(this.LatLonToXY(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(ACoordinate)));
      return Result;
    };
    this.XYToLatLon = function (AX, AY) {
      var Result = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$new();
      var b = null;
      var c = null;
      var s = "";
      Result.$assign(pas["WEBLib.TMSFNCMapsCommonTypes"].DefaultCoordinate());
      if (this.FMapInitialized && this.MapReady()) {
        c = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinate.$create("Create$1");
        b = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsAnchorPoint.$create("Create$1");
        b.SetX(AX);
        b.SetY(AY);
        try {
          s = this.ExecuteJavaScriptSync($mod.GETXYTOLATLONFUNCTION + "(" + pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON$1.call(b) + ")");
          if ((s !== "") && (s !== "null")) {
            pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.FromJSON.call(c,s);
            Result.Latitude = c.FLatitude;
            Result.Longitude = c.FLongitude;
          };
        } finally {
          b = rtl.freeLoc(b);
          c = rtl.freeLoc(c);
        };
      };
      return Result;
    };
    this.XYToCoordinate = function (AX, AY) {
      var Result = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$new();
      Result.$assign(this.XYToLatLon(AX,AY));
      return Result;
    };
    this.GetHTML = function () {
      var Result = "";
      var hs = "";
      var bs = "";
      var l = null;
      Result = "";
      if (!this.MapReady()) {
        Result = this.GetDefaultHTML();
        return Result;
      };
      Result = this.GetBody();
      return Result;
    };
    this.LoadGPXFromStream = function (AStream, AAutoDisplay, AZoomToBounds, AStrokeWidth, AStrokeColor, ADisplayElevation, ADisplayTimeStamps, AMinSecondsBetweenTimeStamps) {
      var Result = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXRec.$new();
      var s = null;
      s = pas.Classes.TStringStream.$create("Create$2",[""]);
      try {
        AStream.SetPosition(0);
        s.CopyFrom(AStream,AStream.GetSize());
        Result.$assign(this.LoadGPXFromText(s.GetDataString(),AAutoDisplay,AZoomToBounds,AStrokeWidth,AStrokeColor,ADisplayElevation,ADisplayTimeStamps,AMinSecondsBetweenTimeStamps));
      } finally {
        s = rtl.freeLoc(s);
      };
      return Result;
    };
    this.LoadGPXFromStream$1 = function (AStream, AAutoDisplay, AZoomToBounds, AStrokeWidth, AElevationColors, ADisplayElevation, ADisplayTimeStamps, AMinSecondsBetweenTimeStamps) {
      var Result = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXRec.$new();
      var s = null;
      s = pas.Classes.TStringStream.$create("Create$2",[""]);
      try {
        AStream.SetPosition(0);
        s.CopyFrom(AStream,AStream.GetSize());
        Result.$assign(this.LoadGPXFromText$1(s.GetDataString(),AAutoDisplay,AZoomToBounds,AStrokeWidth,rtl.arrayRef(AElevationColors),ADisplayElevation,ADisplayTimeStamps,AMinSecondsBetweenTimeStamps));
      } finally {
        s = rtl.freeLoc(s);
      };
      return Result;
    };
    this.LoadGPXFromText = function (AText, AAutoDisplay, AZoomToBounds, AStrokeWidth, AStrokeColor, ADisplayElevation, ADisplayTimeStamps, AMinSecondsBetweenTimeStamps) {
      var Result = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXRec.$new();
      Result.$assign(this.InternalLoadGPX(AText,AAutoDisplay,AZoomToBounds,AStrokeWidth,AStrokeColor,ADisplayElevation,ADisplayTimeStamps,AMinSecondsBetweenTimeStamps));
      return Result;
    };
    this.LoadGPXFromText$1 = function (AText, AAutoDisplay, AZoomToBounds, AStrokeWidth, AElevationColors, ADisplayElevation, ADisplayTimeStamps, AMinSecondsBetweenTimeStamps) {
      var Result = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXRec.$new();
      Result.$assign(this.InternalLoadGPX$1(AText,AAutoDisplay,AZoomToBounds,AStrokeWidth,rtl.arrayRef(AElevationColors),ADisplayElevation,ADisplayTimeStamps,AMinSecondsBetweenTimeStamps));
      return Result;
    };
    this.SaveToGPXStream = function (ACoordinates, AStream) {
      this.SaveToGPXStream$1(rtl.arrayRef(ACoordinates),AStream,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(pas["WEBLib.TMSFNCMapsCommonTypes"].DefaultGPXMetaData()));
    };
    this.SaveToGPXStream$1 = function (ACoordinates, AStream, AMetaData) {
      var ss = null;
      ss = pas.Classes.TStringStream.$create("Create$2",[this.SaveToGPXText$1(rtl.arrayRef(ACoordinates),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(AMetaData))]);
      try {
        AStream.CopyFrom(ss,ss.GetSize());
      } finally {
        ss = rtl.freeLoc(ss);
      };
    };
    this.SaveToGPXFile = function (ACoordinates, AFileName) {
      this.SaveToGPXFile$1(rtl.arrayRef(ACoordinates),AFileName,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(pas["WEBLib.TMSFNCMapsCommonTypes"].DefaultGPXMetaData()));
    };
    this.SaveToGPXFile$1 = function (ACoordinates, AFileName, AMetaData) {
      var sl = null;
      sl = pas.Classes.TStringList.$create("Create$1");
      try {
        sl.SetTextStr(this.SaveToGPXText$1(rtl.arrayRef(ACoordinates),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(AMetaData)));
        sl.SaveToFile(AFileName);
      } finally {
        sl = rtl.freeLoc(sl);
      };
    };
    this.SaveToGPXText = function (ACoordinates) {
      var Result = "";
      Result = pas["WEBLib.TMSFNCMapsCommonTypes"].SaveToGPX(rtl.arrayRef(ACoordinates),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(pas["WEBLib.TMSFNCMapsCommonTypes"].DefaultGPXMetaData()),true,true,"");
      return Result;
    };
    this.SaveToGPXText$1 = function (ACoordinates, AMetaData) {
      var Result = "";
      Result = pas["WEBLib.TMSFNCMapsCommonTypes"].SaveToGPX(rtl.arrayRef(ACoordinates),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsGPXMetaData.$clone(AMetaData),true,true,"");
      return Result;
    };
    this.LoadGeoJSONFromStream = function (AStream, AAutoDisplay, AZoomToBounds) {
      var Result = $mod.TTMSFNCMapsGeoJSONRec.$new();
      var s = null;
      s = pas.Classes.TStringStream.$create("Create$2",[""]);
      try {
        AStream.SetPosition(0);
        s.CopyFrom(AStream,AStream.GetSize());
        Result.$assign(this.LoadGeoJSONFromText(s.GetDataString(),AAutoDisplay,AZoomToBounds));
      } finally {
        s = rtl.freeLoc(s);
      };
      return Result;
    };
    this.LoadGeoJSONFromText = function (AText, AAutoDisplay, AZoomToBounds) {
      var Result = $mod.TTMSFNCMapsGeoJSONRec.$new();
      Result.$assign(this.InternalLoadGeoJSON(AText,AAutoDisplay,AZoomToBounds));
      return Result;
    };
    this.AddMarker = function (ACoordinate, ATitle, AIconURL) {
      var Result = null;
      Result = this.AddMarker$1(ACoordinate.Latitude,ACoordinate.Longitude,ATitle,AIconURL);
      return Result;
    };
    this.AddMarker$1 = function (ALatitude, ALongitude, ATitle, AIconURL) {
      var Result = null;
      this.BeginUpdate();
      Result = this.FMarkers.Add$1();
      Result.SetTitle(ATitle);
      Result.FCoordinate.SetLongitude(ALongitude);
      Result.FCoordinate.SetLatitude(ALatitude);
      Result.SetIconURL(AIconURL);
      this.EndUpdate();
      return Result;
    };
    this.AddPolyline = function (ACoordinates, AClose) {
      var Result = null;
      var I = 0;
      var co = null;
      Result = null;
      if (rtl.length(ACoordinates) === 0) return Result;
      this.BeginUpdate();
      Result = this.FPolylines.Add$2();
      for (var $l = 0, $end = rtl.length(ACoordinates) - 1; $l <= $end; $l++) {
        I = $l;
        co = Result.FCoordinates.Add$1();
        co.FCoordinate.SetLongitude(ACoordinates[I].Longitude);
        co.FCoordinate.SetLatitude(ACoordinates[I].Latitude);
      };
      if (AClose) {
        co = Result.FCoordinates.Add$1();
        co.Assign(Result.FCoordinates.GetItem$1(0));
      };
      this.EndUpdate();
      return Result;
    };
    this.AddPolygon = function (ACoordinates, AClose) {
      var Result = null;
      var I = 0;
      var co = null;
      Result = null;
      if (rtl.length(ACoordinates) === 0) return Result;
      this.BeginUpdate();
      Result = this.FPolygons.Add$2();
      for (var $l = 0, $end = rtl.length(ACoordinates) - 1; $l <= $end; $l++) {
        I = $l;
        co = Result.FCoordinates.Add$1();
        co.FCoordinate.SetLongitude(ACoordinates[I].Longitude);
        co.FCoordinate.SetLatitude(ACoordinates[I].Latitude);
      };
      if (AClose) {
        co = Result.FCoordinates.Add$1();
        co.Assign(Result.FCoordinates.GetItem$1(0));
      };
      this.EndUpdate();
      return Result;
    };
    this.AddCircle = function (ACenter, ARadius) {
      var Result = null;
      this.BeginUpdate();
      Result = this.FCircles.Add$3();
      Result.FCenter.SetToRec(ACenter);
      Result.SetRadius(ARadius);
      this.EndUpdate();
      return Result;
    };
    this.AddRectangle = function (ABounds) {
      var Result = null;
      this.BeginUpdate();
      Result = this.FRectangles.Add$3();
      Result.FBounds.SetToRec(ABounds);
      this.EndUpdate();
      return Result;
    };
    this.ShowPopup = function (ACoordinate, AText, AOffsetX, AOffsetY, APanMap) {
      var Result = "";
      var p = null;
      p = $mod.TTMSFNCMapsPopup.$create("Create$1");
      try {
        Result = p.GetID();
        p.FText = AText;
        p.FOffsetX = AOffsetX;
        p.FOffsetY = AOffsetY;
        p.FCoordinate.SetToRec(ACoordinate);
        p.FPanMap = APanMap;
        this.ExecuteJavaScript($mod.SHOWPOPUPFUNCTION + "(" + pas["WEBLib.TMSFNCTypes"].TTMSFNCObjectHelper.ToJSON$1.call(p) + ")",null,false);
      } finally {
        p = rtl.freeLoc(p);
      };
      return Result;
    };
    this.ShowPopup$1 = function (ALatitude, ALongitude, AText, AOffsetX, AOffsetY, APanMap) {
      var Result = "";
      Result = this.ShowPopup(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(pas["WEBLib.TMSFNCMapsCommonTypes"].CreateCoordinate(ALatitude,ALongitude)),AText,AOffsetX,AOffsetY,APanMap);
      return Result;
    };
    this.AddElementContainer = function (AHTML, AStyle, AScript, APosition, AHTMLElementID) {
      var Result = null;
      this.BeginUpdate();
      Result = this.FElementContainers.Add$1();
      if (AHTML != null) Result.FHTML.Assign(AHTML);
      if (AStyle != null) Result.FStyle.Assign(AStyle);
      if (AScript != null) Result.FScript.Assign(AScript);
      Result.SetPosition(APosition);
      if (AHTMLElementID !== "") Result.SetHTMLElementID(AHTMLElementID);
      this.EndUpdate();
      return Result;
    };
    this.AddHeadLink = function (AURL, AKind, ARel) {
      var Result = null;
      this.BeginUpdate();
      Result = this.FHeadLinks.Add$1();
      Result.SetURL(AURL);
      Result.SetKind(AKind);
      Result.SetRel(ARel);
      this.EndUpdate();
      return Result;
    };
    this.AddLabel = function (ACoordinate, AText, AFontColor, ABackgroundColor) {
      var Result = null;
      Result = this.AddLabel$3(ACoordinate.Latitude,ACoordinate.Longitude,AText,AFontColor,ABackgroundColor);
      return Result;
    };
    this.AddLabel$1 = function (ABounds, AText, AFontColor, ABackgroundColor) {
      var Result = null;
      Result = this.AddLabel$2(ABounds.NorthEast.Latitude,ABounds.NorthEast.Longitude,ABounds.SouthWest.Latitude,ABounds.SouthWest.Longitude,AText,AFontColor,ABackgroundColor);
      return Result;
    };
    this.AddLabel$2 = function (ANorthEastLatitude, ANorthEastLongitude, ASouthWestLatitude, ASouthWestLongitude, AText, AFontColor, ABackgroundColor) {
      var Result = null;
      this.BeginUpdate();
      Result = this.FLabels.Add$1();
      Result.SetText(AText);
      Result.FBounds.FNorthEast.SetLongitude(ANorthEastLongitude);
      Result.FBounds.FNorthEast.SetLatitude(ANorthEastLatitude);
      Result.FBounds.FSouthWest.SetLongitude(ASouthWestLongitude);
      Result.FBounds.FSouthWest.SetLatitude(ASouthWestLatitude);
      Result.SetBackgroundColor(ABackgroundColor);
      Result.FFont.SetColor(AFontColor);
      Result.SetPosition($mod.TTMSFNCMapsPositionType.ptBounds);
      this.EndUpdate();
      return Result;
    };
    this.AddLabel$3 = function (ALatitude, ALongitude, AText, AFontColor, ABackgroundColor) {
      var Result = null;
      this.BeginUpdate();
      Result = this.FLabels.Add$1();
      Result.SetText(AText);
      Result.FCoordinate.SetLongitude(ALongitude);
      Result.FCoordinate.SetLatitude(ALatitude);
      Result.SetBackgroundColor(ABackgroundColor);
      Result.FFont.SetColor(AFontColor);
      Result.SetPosition($mod.TTMSFNCMapsPositionType.ptCoordinate);
      this.EndUpdate();
      return Result;
    };
    this.ClosePopup = function (AID) {
      this.ExecuteJavaScript($mod.CLOSEPOPUPFUNCTION + '({"ID": "' + AID + '"})',null,false);
    };
    this.CloseAllPopups = function () {
      this.ExecuteJavaScript($mod.GETPOPUPARRAYVAR,rtl.createCallback(this,"DoCloseAllPopups"),false);
    };
    this.RouteCalculatorPlotRoute = function (ARoute) {
      var $Self = this;
      function SegmentExists(ASegment) {
        var Result = null;
        var I = 0;
        Result = null;
        for (var $l = 0, $end = $Self.FPolylines.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          if ($Self.FPolylines.GetItem$2(I).FDataPointer === ASegment) {
            Result = $Self.FPolylines.GetItem$2(I);
            break;
          };
        };
        return Result;
      };
      function WayPointExists(ASegment) {
        var Result = null;
        var I = 0;
        Result = null;
        for (var $l = 0, $end = $Self.FMarkers.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          if (($Self.FMarkers.GetItem$1(I).FDataPointer === ASegment) && ($Self.FMarkers.GetItem$1(I).FDataString !== $mod.ROUTECALCULATORENDMARKER)) {
            Result = $Self.FMarkers.GetItem$1(I);
            break;
          };
        };
        return Result;
      };
      function GetStartMarker() {
        var Result = null;
        var I = 0;
        Result = null;
        for (var $l = 0, $end = $Self.FMarkers.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          if ($Self.FMarkers.GetItem$1(I).FDataString === $mod.ROUTECALCULATORSTARTMARKER) {
            Result = $Self.FMarkers.GetItem$1(I);
            break;
          };
        };
        return Result;
      };
      function GetEndMarker() {
        var Result = null;
        var I = 0;
        Result = null;
        for (var $l = 0, $end = $Self.FMarkers.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          if ($Self.FMarkers.GetItem$1(I).FDataString === $mod.ROUTECALCULATORENDMARKER) {
            Result = $Self.FMarkers.GetItem$1(I);
            break;
          };
        };
        return Result;
      };
      function ConfigMarker(AMarker, ARoute, AIndex) {
        if (AIndex === 0) {
          AMarker.SetIconURL($Self.GetRouteCalculatorStartMarker());
          AMarker.FDataString = $mod.ROUTECALCULATORSTARTMARKER;
          AMarker.FDataBoolean = true;
          AMarker.FDataPointer = ARoute.FSegments.GetItem$1(AIndex);
        } else if (AIndex === ARoute.FSegments.GetCount()) {
          AMarker.SetIconURL($Self.GetRouteCalculatorEndMarker());
          AMarker.FDataString = $mod.ROUTECALCULATORENDMARKER;
          AMarker.FDataBoolean = false;
          AMarker.FDataPointer = ARoute.FSegments.GetItem$1(AIndex - 1);
        } else {
          AMarker.SetIconURL($Self.GetRouteCalculatorWayPointMarker());
          AMarker.FDataString = $mod.ROUTECALCULATORMARKER;
          AMarker.FDataBoolean = true;
          AMarker.FDataPointer = ARoute.FSegments.GetItem$1(AIndex);
        };
      };
      var p = null;
      var ci = null;
      var pl = [];
      var wp = [];
      var m = null;
      var I = 0;
      var K = 0;
      var pRecreate = false;
      this.BeginUpdate();
      ARoute.FDataString = $mod.ROUTECALCULATORROUTE;
      wp = ARoute.GetWayPoints();
      for (var $l = 0, $end = ARoute.FSegments.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        p = SegmentExists(ARoute.FSegments.GetItem$1(I));
        pl = ARoute.FSegments.GetItem$1(I).GetPolyline();
        if (p != null) {
          pRecreate = false;
          if (p.FCoordinates.GetCount() !== rtl.length(pl)) {
            pRecreate = true}
           else for (var $l1 = 0, $end1 = rtl.length(pl) - 1; $l1 <= $end1; $l1++) {
            K = $l1;
            if ((p.FCoordinates.GetItem$1(K).GetLatitude() !== pl[K].Latitude) || (p.FCoordinates.GetItem$1(K).GetLongitude() !== pl[K].Longitude)) {
              pRecreate = true;
              break;
            };
          };
          if (pRecreate) {
            p.FCoordinates.Clear$1();
            for (var $l2 = 0, $end2 = rtl.length(pl) - 1; $l2 <= $end2; $l2++) {
              K = $l2;
              ci = p.FCoordinates.Add$1();
              ci.SetLatitude(pl[K].Latitude);
              ci.SetLongitude(pl[K].Longitude);
            };
            p.FRecreate = true;
            this.DoRouteCalculatorPolylineUpdated(p,ARoute.FSegments.GetItem$1(I));
          };
        } else {
          p = this.AddPolyline(rtl.arrayRef(pl),false);
          p.FDataString = $mod.ROUTECALCULATORSEGMENT;
          p.SetStrokeWidth(this.FRouteCalculator.FOptions.FPolyline.FStrokeWidth);
          p.SetStrokeColor(this.FRouteCalculator.FOptions.FPolyline.FStrokeColor);
          this.DoRouteCalculatorPolylineAdded(p,ARoute.FSegments.GetItem$1(I));
        };
        p.FDataPointer = ARoute.FSegments.GetItem$1(I);
        if (I === 0) {
          m = GetStartMarker()}
         else m = WayPointExists(ARoute.FSegments.GetItem$1(I));
        if (m != null) {
          if ((m.GetLatitude() !== wp[I].Latitude) || (m.GetLongitude() !== wp[I].Longitude)) {
            m.SetLatitude(wp[I].Latitude);
            m.SetLongitude(wp[I].Longitude);
            m.FRecreate = true;
            ConfigMarker(m,ARoute,I);
            this.DoRouteCalculatorWayPointUpdated(m,ARoute.FSegments.GetItem$1(I));
          };
        } else {
          m = this.AddMarker(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(ARoute.FSegments.GetItem$1(I).FStartCoordinate.GetToRec()),"","");
          ConfigMarker(m,ARoute,I);
          this.DoRouteCalculatorWayPointAdded(m,ARoute.FSegments.GetItem$1(I));
        };
      };
      if (ARoute.FSegments.GetCount() > 0) {
        m = GetEndMarker();
        I = rtl.length(wp) - 1;
        if (m != null) {
          if ((m.GetLatitude() !== wp[I].Latitude) || (m.GetLongitude() !== wp[I].Longitude)) {
            m.SetLatitude(wp[I].Latitude);
            m.SetLongitude(wp[I].Longitude);
            m.FRecreate = true;
            ConfigMarker(m,ARoute,ARoute.FSegments.GetCount());
            this.DoRouteCalculatorWayPointUpdated(m,ARoute.FSegments.GetItem$1(ARoute.FSegments.GetCount() - 1));
          };
        } else {
          m = this.AddMarker(pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(ARoute.FSegments.GetItem$1(ARoute.FSegments.GetCount() - 1).FEndCoordinate.GetToRec()),"","");
          ConfigMarker(m,ARoute,ARoute.FSegments.GetCount());
          this.DoRouteCalculatorWayPointAdded(m,ARoute.FSegments.GetItem$1(ARoute.FSegments.GetCount() - 1));
        };
      };
      this.EndUpdate();
    };
    this.RouteCalculatorPlotRoutes = function () {
      var I = 0;
      if (this.RouteCalculatorCheck()) {
        this.BeginUpdate();
        for (var $l = 0, $end = this.FRouteCalculator.FRoutes.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          this.RouteCalculatorPlotRoute(this.FRouteCalculator.FRoutes.GetItem$1(I));
        };
        this.EndUpdate();
      };
    };
    this.RouteCalculatorClearRoutes = function () {
      var I = 0;
      var p = null;
      var m = null;
      if (this.RouteCalculatorCheck()) {
        this.BeginUpdate();
        for (var $l = this.FPolylines.GetCount() - 1; $l >= 0; $l--) {
          I = $l;
          p = this.FPolylines.GetItem$2(I);
          if (p.FDataString === $mod.ROUTECALCULATORSEGMENT) p = rtl.freeLoc(p);
        };
        for (var $l1 = this.FMarkers.GetCount() - 1; $l1 >= 0; $l1--) {
          I = $l1;
          m = this.FMarkers.GetItem$1(I);
          if ((m.FDataString === $mod.ROUTECALCULATORMARKER) || (m.FDataString === $mod.ROUTECALCULATORSTARTMARKER) || (m.FDataString === $mod.ROUTECALCULATORENDMARKER)) m = rtl.freeLoc(m);
        };
        this.EndUpdate();
      };
    };
    this.RouteCalculatorDeletePolyline = function (APolyline, AUpdateRoute) {
      var Segment = null;
      if (!this.RouteCalculatorCheck()) return;
      if (!(APolyline != null)) return;
      if ((APolyline.FDataPointer != null) && pas["WEBLib.TMSFNCRouteCalculator"].TTMSFNCRouteCalculatorSegment.isPrototypeOf(APolyline.FDataPointer)) {
        Segment = rtl.as(APolyline.FDataPointer,pas["WEBLib.TMSFNCRouteCalculator"].TTMSFNCRouteCalculatorSegment);
        if (Segment != null) {
          this.FRouteCalculator.DeleteRouteSegment(Segment,null);
          if (AUpdateRoute) {
            this.RouteCalculatorClearRoutes();
            this.RouteCalculatorPlotRoutes();
          };
        };
      };
    };
    this.RouteCalculatorDeleteMarker = function (AMarker, AUpdateRoute) {
      var Segment = null;
      var ps = null;
      var ec = pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$new();
      if (!this.RouteCalculatorCheck()) return;
      if (!(AMarker != null)) return;
      if ((AMarker.FDataPointer != null) && pas["WEBLib.TMSFNCRouteCalculator"].TTMSFNCRouteCalculatorSegment.isPrototypeOf(AMarker.FDataPointer)) {
        Segment = rtl.as(AMarker.FDataPointer,pas["WEBLib.TMSFNCRouteCalculator"].TTMSFNCRouteCalculatorSegment);
        if (Segment != null) {
          if ((AMarker.FDataString !== $mod.ROUTECALCULATORMARKER) && (AMarker.FDataString !== "")) {
            this.FRouteCalculator.DeleteRouteSegment(Segment,null)}
           else {
            ps = Segment.GetPreviousSegment();
            if (ps != null) {
              ec.$assign(Segment.FEndCoordinate.GetToRec());
              Segment = rtl.freeLoc(Segment);
              this.FRouteCalculator.UpdateRouteSegment$1(ps,pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(ps.FStartCoordinate.GetToRec()),pas["WEBLib.TMSFNCMapsCommonTypes"].TTMSFNCMapsCoordinateRec.$clone(ec),null,"",null);
            };
          };
          if (AUpdateRoute) {
            this.RouteCalculatorClearRoutes();
            this.RouteCalculatorPlotRoutes();
          };
        };
      };
    };
    this.RouteCalculatorDeleteSelectedPolyline = function (AUpdateRoute) {
      if (this.FRouteCalculatorSelectedPolyline != null) {
        this.RouteCalculatorDeletePolyline(this.FRouteCalculatorSelectedPolyline,AUpdateRoute);
        this.FRouteCalculatorSelectedPolyline = null;
      };
    };
    this.RouteCalculatorDeleteSelectedMarker = function (AUpdateRoute) {
      if (this.FRouteCalculatorSelectedMarker != null) {
        this.RouteCalculatorDeleteMarker(this.FRouteCalculatorSelectedMarker,AUpdateRoute);
        this.FRouteCalculatorSelectedMarker = null;
      };
    };
    rtl.addIntf(this,$mod.ITMSFNCCustomMapsProperties);
    rtl.addIntf(this,pas["WEBLib.TMSFNCGraphics"].ITMSFNCGraphicsExport);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas["WEBLib.TMSFNCStyles"].ITMSFNCAdaptToStyle);
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
  });
  rtl.createClass(this,"TTMSFNCCustomMapsInterfacedObject",pas.System.TInterfacedObject,function () {
    this.$init = function () {
      pas.System.TInterfacedObject.$init.call(this);
      this.FMapsProperties = null;
    };
    this.$final = function () {
      rtl.setIntfP(this,"FMapsProperties",null);
      pas.System.TInterfacedObject.$final.call(this);
    };
    this.GetMapsProperties = function () {
      var Result = null;
      var $ok = false;
      try {
        Result = rtl.setIntfL(Result,this.FMapsProperties);
        $ok = true;
      } finally {
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.SetMapsProperties = function (Value) {
      rtl.setIntfP(this,"FMapsProperties",Value);
    };
    this.Destroy = function () {
      rtl.setIntfP(this,"FMapsProperties",null);
      pas.System.TObject.Destroy.call(this);
    };
    rtl.addIntf(this,$mod.ITMSFNCCustomMapsInstance);
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TTMSFNCMapsList",pas.Classes.TList,function () {
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
  rtl.createClass(this,"TTMSFNCMapsFactoryService",pas.System.TInterfacedObject,function () {
    this.$init = function () {
      pas.System.TInterfacedObject.$init.call(this);
      this.FMaps = null;
    };
    this.$final = function () {
      this.FMaps = undefined;
      pas.System.TInterfacedObject.$final.call(this);
    };
    this.CreateMaps = function () {
      var Result = null;
      var $ok = false;
      try {
        Result = rtl.setIntfL(Result,this.DoCreateMaps(),true);
        this.FMaps.Add(Result);
        $ok = true;
      } finally {
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.DestroyMaps = function (AMaps) {
      this.FMaps.Remove(AMaps);
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FMaps = $mod.TTMSFNCMapsList.$create("Create$1");
      return this;
    };
    this.Destroy = function () {
      pas.SysUtils.FreeAndNil({p: this, get: function () {
          return this.p.FMaps;
        }, set: function (v) {
          this.p.FMaps = v;
        }});
      pas.System.TObject.Destroy.call(this);
    };
    rtl.addIntf(this,$mod.ITMSFNCMapsService);
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TTMSFNCMaps",this.TTMSFNCCustomMaps,function () {
    this.RegisterRuntimeClasses = function () {
      pas.Classes.RegisterClass($mod.TTMSFNCMaps);
      pas.Classes.RegisterClass($mod.TTMSFNCMapsMarker);
      pas.Classes.RegisterClass($mod.TTMSFNCMapsPolyElement);
      pas.Classes.RegisterClass($mod.TTMSFNCMapsPolyline);
      pas.Classes.RegisterClass($mod.TTMSFNCMapsPolygon);
    };
    this.Navigate = function () {
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.Navigate.call(this);
    };
    this.Navigate$1 = function (AURL) {
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.Navigate$1.call(this,AURL);
    };
    this.ExecuteJavaScript = function (AScript, ACompleteEvent, AImmediate) {
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.ExecuteJavaScript.call(this,AScript,ACompleteEvent,AImmediate);
    };
    this.ExecuteJavaScriptSync = function (AScript) {
      var Result = "";
      Result = pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.ExecuteJavaScriptSync.call(this,AScript);
      return Result;
    };
    this.LoadHTML = function (AHTML) {
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.LoadHTML.call(this,AHTML);
    };
    this.LoadFile = function (AFile) {
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.LoadFile.call(this,AFile);
    };
    this.Initialize = function () {
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.Initialize.call(this);
    };
    this.DeInitialize = function () {
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.DeInitialize.call(this);
    };
    this.GoForward = function () {
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.GoForward.call(this);
    };
    this.GoBack = function () {
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.GoBack.call(this);
    };
    this.Reload = function () {
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.Reload.call(this);
    };
    this.StopLoading = function () {
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.StopLoading.call(this);
    };
    this.AddBridge = function (ABridgeName, ABridgeObject) {
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.AddBridge.call(this,ABridgeName,ABridgeObject);
    };
    this.RemoveBridge = function (ABridgeName) {
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.RemoveBridge.call(this,ABridgeName);
    };
    this.CaptureScreenShot = function () {
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.CaptureScreenShot.call(this);
    };
    this.GetBridgeCommunicationLayer = function (ABridgeName) {
      var Result = "";
      Result = pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.GetBridgeCommunicationLayer.call(this,ABridgeName);
      return Result;
    };
    this.NativeEnvironment = function () {
      var Result = null;
      Result = pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.NativeEnvironment.call(this);
      return Result;
    };
    this.NativeBrowser = function () {
      var Result = null;
      Result = pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.NativeBrowser.call(this);
      return Result;
    };
    this.IsFMXBrowser = function () {
      var Result = false;
      Result = pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.IsFMXBrowser.call(this);
      return Result;
    };
    this.CanGoBack = function () {
      var Result = false;
      Result = pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.CanGoBack.call(this);
      return Result;
    };
    this.CanGoForward = function () {
      var Result = false;
      Result = pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.CanGoForward.call(this);
      return Result;
    };
    this.ClearCache = function () {
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.ClearCache.call(this);
    };
    this.ShowDebugConsole = function () {
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser.ShowDebugConsole.call(this);
    };
    rtl.addIntf(this,$mod.ITMSFNCCustomMapsProperties);
    rtl.addIntf(this,pas["WEBLib.TMSFNCGraphics"].ITMSFNCGraphicsExport);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas["WEBLib.TMSFNCStyles"].ITMSFNCAdaptToStyle);
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("OnCustomizeLocalAccessFileName",0,$mod.$rtti["TTMSFNCMapsCustomizeLocalAccessFileNameEvent"],"FOnCustomizeLocalAccessFileName","FOnCustomizeLocalAccessFileName");
    $r.addProperty("RouteCalculator",2,pas["WEBLib.TMSFNCRouteCalculator"].$rtti["TTMSFNCRouteCalculator"],"FRouteCalculator","SetRouteCalculator");
    $r.addProperty("OnCaptureScreenShot",0,pas["WEBLib.TMSFNCWebBrowser"].$rtti["TTMSFNCCustomWebBrowserCaptureScreenShot"],"FOnCaptureScreenShot","FOnCaptureScreenShot");
    $r.addProperty("OnCustomizeCSS",0,$mod.$rtti["TTMSFNCMapsCustomizeCSSEvent"],"FOnCustomizeCSS","FOnCustomizeCSS");
    $r.addProperty("OnCustomizeJavaScript",0,$mod.$rtti["TTMSFNCMapsCustomizeJavaScriptEvent"],"FOnCustomizeJavaScript","FOnCustomizeJavaScript");
    $r.addProperty("OnCustomizeMap",0,$mod.$rtti["TTMSFNCMapsCustomizeMapEvent"],"FOnCustomizeMap","FOnCustomizeMap");
    $r.addProperty("OnCustomizeGlobalVariables",0,$mod.$rtti["TTMSFNCMapsCustomizeGlobalVariablesEvent"],"FOnCustomizeGlobalVariables","FOnCustomizeGlobalVariables");
    $r.addProperty("OnCustomizeMarker",0,$mod.$rtti["TTMSFNCMapsCustomizeMarkerEvent"],"FOnCustomizeMarker","FOnCustomizeMarker");
    $r.addProperty("OnCustomizePopup",0,$mod.$rtti["TTMSFNCMapsCustomizePopupEvent"],"FOnCustomizePopup","FOnCustomizePopup");
    $r.addProperty("OnCustomizeHeadLinks",0,$mod.$rtti["TTMSFNCMapsCustomizeHeadLinksEvent"],"FOnCustomizeHeadLinks","FOnCustomizeHeadLinks");
    $r.addProperty("OnCustomizeOptions",0,$mod.$rtti["TTMSFNCMapsCustomizeOptionsEvent"],"FOnCustomizeOptions","FOnCustomizeOptions");
    $r.addProperty("OnCustomizePolyElement",0,$mod.$rtti["TTMSFNCMapsCustomizePolyElementEvent"],"FOnCustomizePolyElement","FOnCustomizePolyElement");
    $r.addProperty("OnGetDefaultHTMLMessage",0,$mod.$rtti["TTMSFNCMapsGetDefaultHTMLMessageEvent"],"FOnGetDefaultHTMLMessage","FOnGetDefaultHTMLMessage");
    $r.addProperty("OnZoomChanged",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnZoomChanged","FOnZoomChanged");
    $r.addProperty("OnMapTypeChanged",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnMapTypeChanged","FOnMapTypeChanged");
    $r.addProperty("OnMapMoveStart",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnMapMoveStart","FOnMapMoveStart");
    $r.addProperty("OnMapMoveEnd",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnMapMoveEnd","FOnMapMoveEnd");
    $r.addProperty("OnMapClick",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnMapClick","FOnMapClick");
    $r.addProperty("OnMapDblClick",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnMapDblClick","FOnMapDblClick");
    $r.addProperty("OnMapMouseUp",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnMapMouseUp","FOnMapMouseUp");
    $r.addProperty("OnMapMouseDown",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnMapMouseDown","FOnMapMouseDown");
    $r.addProperty("OnMapMouseMove",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnMapMouseMove","FOnMapMouseMove");
    $r.addProperty("OnMapMouseEnter",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnMapMouseEnter","FOnMapMouseEnter");
    $r.addProperty("OnMapMouseLeave",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnMapMouseLeave","FOnMapMouseLeave");
    $r.addProperty("OnMarkerClick",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnMarkerClick","FOnMarkerClick");
    $r.addProperty("OnMarkerRightClick",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnMarkerRightClick","FOnMarkerRightClick");
    $r.addProperty("OnMarkerDblClick",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnMarkerDblClick","FOnMarkerDblClick");
    $r.addProperty("OnMarkerMouseUp",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnMarkerMouseUp","FOnMarkerMouseUp");
    $r.addProperty("OnMarkerMouseDown",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnMarkerMouseDown","FOnMarkerMouseDown");
    $r.addProperty("OnMarkerMouseEnter",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnMarkerMouseEnter","FOnMarkerMouseEnter");
    $r.addProperty("OnMarkerMouseLeave",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnMarkerMouseLeave","FOnMarkerMouseLeave");
    $r.addProperty("OnPolyElementClick",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnPolyElementClick","FOnPolyElementClick");
    $r.addProperty("OnPolyElementDblClick",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnPolyElementDblClick","FOnPolyElementDblClick");
    $r.addProperty("OnPolyElementMouseUp",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnPolyElementMouseUp","FOnPolyElementMouseUp");
    $r.addProperty("OnPolyElementMouseDown",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnPolyElementMouseDown","FOnPolyElementMouseDown");
    $r.addProperty("OnPolyElementMouseEnter",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnPolyElementMouseEnter","FOnPolyElementMouseEnter");
    $r.addProperty("OnPolyElementMouseLeave",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnPolyElementMouseLeave","FOnPolyElementMouseLeave");
    $r.addProperty("OnCustomEvent",0,$mod.$rtti["TTMSFNCMapsBaseEvent"],"FOnCustomEvent","FOnCustomEvent");
    $r.addProperty("OnMapInitialized",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMapInitialized","FOnMapInitialized");
    $r.addProperty("OnGetCenterCoordinate",0,$mod.$rtti["TTMSFNCMapsGetCenterCoordinateEvent"],"FOnGetCenterCoordinate","FOnGetCenterCoordinate");
    $r.addProperty("OnGetBounds",0,$mod.$rtti["TTMSFNCMapsGetBoundsEvent"],"FOnGetBoundsCoordinate","FOnGetBoundsCoordinate");
    $r.addProperty("OnGetZoomLevel",0,$mod.$rtti["TTMSFNCMapsGetZoomLevelEvent"],"FOnGetZoomLevel","FOnGetZoomLevel");
    $r.addProperty("OnCreateGPXTrack",0,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsGPXTrackEvent"],"FOnCreateGPXTrack","FOnCreateGPXTrack");
    $r.addProperty("OnCreateGPXSegment",0,pas["WEBLib.TMSFNCMapsCommonTypes"].$rtti["TTMSFNCMapsGPXSegmentEvent"],"FOnCreateGPXSegment","FOnCreateGPXSegment");
    $r.addProperty("OnCreateGeoJSONObject",0,$mod.$rtti["TTMSFNCMapsGeoJSONObjectEvent"],"FOnCreateGeoJSONObject","FOnCreateGeoJSONObject");
    $r.addProperty("OnRouteCalculatorWayPointAdded",0,$mod.$rtti["TTMSFNCMapsRouteCalculatorWayPointEvent"],"FOnRouteCalculatorWayPointAdded","FOnRouteCalculatorWayPointAdded");
    $r.addProperty("OnRouteCalculatorWayPointUpdated",0,$mod.$rtti["TTMSFNCMapsRouteCalculatorWayPointEvent"],"FOnRouteCalculatorWayPointUpdated","FOnRouteCalculatorWayPointUpdated");
    $r.addProperty("OnRouteCalculatorPolylineAdded",0,$mod.$rtti["TTMSFNCMapsRouteCalculatorPolylineEvent"],"FOnRouteCalculatorPolylineAdded","FOnRouteCalculatorPolylineAdded");
    $r.addProperty("OnRouteCalculatorPolylineUpdated",0,$mod.$rtti["TTMSFNCMapsRouteCalculatorPolylineEvent"],"FOnRouteCalculatorPolylineUpdated","FOnRouteCalculatorPolylineUpdated");
    $r.addProperty("OnRouteCalculatorBeforeDeletePolyline",0,$mod.$rtti["TTMSFNCMapsRouteCalculatorDeletePolylineEvent"],"FOnRouteCalculatorDeletePolylineEvent","FOnRouteCalculatorDeletePolylineEvent");
    $r.addProperty("OnRouteCalculatorAfterDeletePolyline",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnRouteCalculatorAfterDeletePolylineEvent","FOnRouteCalculatorAfterDeletePolylineEvent");
    $r.addProperty("OnRouteCalculatorBeforeDeleteMarker",0,$mod.$rtti["TTMSFNCMapsRouteCalculatorDeleteMarkerEvent"],"FOnRouteCalculatorDeleteMarkerEvent","FOnRouteCalculatorDeleteMarkerEvent");
    $r.addProperty("OnRouteCalculatorAfterDeleteMarker",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnRouteCalculatorAfterDeleteMarkerEvent","FOnRouteCalculatorAfterDeleteMarkerEvent");
    $r.addProperty("APIKey",2,rtl.string,"FAPIKey","SetAPIKey");
    $r.addProperty("Polylines",2,$mod.$rtti["TTMSFNCMapsPolylines"],"FPolylines","SetPolylines");
    $r.addProperty("Polygons",2,$mod.$rtti["TTMSFNCMapsPolygons"],"FPolygons","SetPolygons");
    $r.addProperty("Circles",2,$mod.$rtti["TTMSFNCMapsCircles"],"FCircles","SetCircles");
    $r.addProperty("Rectangles",2,$mod.$rtti["TTMSFNCMapsRectangles"],"FRectangles","SetRectangles");
    $r.addProperty("Markers",2,$mod.$rtti["TTMSFNCMapsMarkers"],"FMarkers","SetMarkers");
    $r.addProperty("ElementContainers",2,$mod.$rtti["TTMSFNCMapsElementContainers"],"FElementContainers","SetElementContainers");
    $r.addProperty("Labels",2,$mod.$rtti["TTMSFNCMapsLabels"],"FLabels","SetLabels");
    $r.addProperty("HeadLinks",2,$mod.$rtti["TTMSFNCMapsHeadLinks"],"FHeadLinks","SetHeadLinks");
    $r.addProperty("Options",2,$mod.$rtti["TTMSFNCMapsOptions"],"FOptions","SetOptions");
    $r.addProperty("Service",2,$mod.$rtti["TTMSFNCMapsService"],"FService","SetService",{Default: $mod.TTMSFNCMapsService.msGoogleMaps});
    $r.addProperty("Version",1,rtl.string,"GetVersion","");
    $r.addProperty("LocalFileAccess",2,rtl.boolean,"FLocalFileAccess","SetLocalFileAccess",{Default: false});
    $r.addProperty("DesigntimeEnabled",2,rtl.boolean,"FDesigntimeEnabled","SetDesigntimeEnabled",{Default: true});
  });
  rtl.createClass(this,"TTMSFNCMapsPlatformServicesService",pas.System.TObject,function () {
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
  rtl.createClass(this,"TTMSFNCMapsPlatformServicesList",pas.contnrs.TObjectList,function () {
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
  rtl.createClass(this,"TTMSFNCMapsPlatformServices",pas.System.TObject,function () {
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
      pas.SysUtils.FreeAndNil({p: $mod.TTMSFNCMapsPlatformServices, get: function () {
          return this.p.FCurrent;
        }, set: function (v) {
          this.p.FCurrent = v;
        }});
      $mod.TTMSFNCMapsPlatformServices.FCurrentReleased = true;
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FServicesList = $mod.TTMSFNCMapsPlatformServicesList.$create("Create$2");
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
            }})) this.FServicesList.Add$1($mod.TTMSFNCMapsPlatformServicesService.$create("Create$1",[pas.SysUtils.GUIDToString(AServiceGUID),AService]));
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
      if ((this.FCurrent === null) && !this.FCurrentReleased) $mod.TTMSFNCMapsPlatformServices.FCurrent = $mod.TTMSFNCMapsPlatformServices.$create("Create$1");
      Result = this.FCurrent;
      return Result;
    };
  });
  $mod.$implcode = function () {
    $impl.EVENTDATAPREFIX = "jsevent://";
    $impl.CUSTOMDATAPREFIX = "customdata://";
    $impl.LOADMAPFUNC = "loadMap";
    $impl.WAITFORMAPINITIALIZEDFUNC = "waitForMapInitialized";
    $impl.MAPEVENTDATA = "JSEVENT";
    rtl.createClass($impl,"TTMSFNCMapsRouteCalculatorOpen",pas["WEBLib.TMSFNCRouteCalculator"].TTMSFNCRouteCalculator,function () {
      rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
      rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
      rtl.addIntf(this,pas.System.IUnknown);
    });
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
    $impl.FindDOMNode = function (ANode, ANodeName) {
      var Result = null;
      var I = 0;
      var rNode = null;
      Result = null;
      for (var $l = 0, $end = ANode.childNodes.length - 1; $l <= $end; $l++) {
        I = $l;
        rNode = ANode.childNodes.item(I);
        if (rNode.nodeName === ANodeName) Result = rNode;
      };
      return Result;
    };
    $impl.NodeToString = function (ANode) {
      var Result = "";
      Result = "";
      if (!(ANode != null)) return Result;
      Result = ANode.firstChild.nodeValue;
      return Result;
    };
  };
  $mod.$init = function () {
    $mod.TTMSFNCMapsPlatformServices.FCurrentReleased = false;
    pas["WEBLib.TMSFNCMaps.GoogleMaps"].RegisterGoogleMapsService();
    pas["WEBLib.TMSFNCMaps.Here"].RegisterHereService();
    pas["WEBLib.TMSFNCMaps.BingMaps"].RegisterBingMapsService();
    pas["WEBLib.TMSFNCMaps.AzureMaps"].RegisterAzureMapsService();
    pas["WEBLib.TMSFNCMaps.TomTom"].RegisterTomTomService();
    pas["WEBLib.TMSFNCMaps.OpenLayers"].RegisterOpenLayersService();
    pas["WEBLib.TMSFNCMaps.Leaflet"].RegisterLeafletService();
    pas["WEBLib.TMSFNCMaps.MapBox"].RegisterMapBoxService();
    pas["WEBLib.TMSFNCMaps.MapKit"].RegisterMapKitService();
  };
},["Math","WEBLib.TMSFNCPersistence","WEBLib.TMSFNCUtils","WEBLib.TMSFNCGraphics","WEBLib.TMSFNCMaps.GoogleMaps","WEBLib.TMSFNCMaps.Here","WEBLib.TMSFNCMaps.BingMaps","WEBLib.TMSFNCMaps.TomTom","WEBLib.TMSFNCMaps.AzureMaps","WEBLib.TMSFNCMaps.OpenLayers","WEBLib.TMSFNCMaps.Leaflet","WEBLib.TMSFNCMaps.MapBox","WEBLib.TMSFNCMaps.MapKit","SysUtils"]);
//# sourceMappingURL=WEBLib.TMSFNCMaps.js.map
