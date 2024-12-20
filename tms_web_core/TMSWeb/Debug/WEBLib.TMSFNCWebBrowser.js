rtl.module("WEBLib.TMSFNCWebBrowser",["System","Types","WEBLib.TMSFNCCustomControl","WEBLib.TMSFNCGraphics","WEBLib.TMSFNCUtils","WEBLib.TMSFNCTypes","Classes","TypInfo","Generics.Collections","contnrs","WEBLib.Menus","WEBLib.StdCtrls","WEBLib.Forms","WEBLib.Controls"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.MAJ_VER = 1;
  this.MIN_VER = 1;
  this.REL_VER = 6;
  this.BLD_VER = 1;
  this.DESIGNTIMEMESSAGE = "Selectable/Draggable area (only active at designtime)";
  this.IID_ITMSFNCCustomWebBrowserGUID = "{F74562D0-56C7-4ED2-B01B-8C9C16DD9361}";
  this.IID_ITMSFNCCustomWebBrowserExGUID = "{6B5D75C1-B5EC-463D-A602-1FFB97C8668C}";
  this.IID_ITMSFNCCustomWebBrowserContextMenuGUID = "{04BD0560-104B-4D3B-8CB1-45628D16CB0D}";
  this.IID_ITMSFNCCustomWebBrowserBridgeGUID = "{AC2934EC-9397-4A99-8E0A-1EF58803C8EA}";
  this.IID_ITMSFNCCustomWebBrowserSettingsGUID = "{25142510-A807-4635-BAE7-CB261D00137E}";
  this.IID_ITMSFNCCustomWebBrowserCookiesGUID = "{A50ABF08-0A6F-4877-AC92-FC834CF36AE6}";
  this.IID_ITMSFNCCustomWebBrowserServiceGUID = "{4B7A5FE1-A889-47C6-B40F-A611BB6266E6}";
  this.IID_ITMSFNCCustomWebBrowserPrintGUID = "{56EFC9E8-CD92-4FAC-B79C-084BF3DB0FBD}";
  this.IID_ITMSFNCCustomWebBrowserEdgeGUID = "{BAA1AC1A-4392-4496-A595-47388CC6A083}";
  this.IID_ITMSFNCCustomWebBrowserInfoGUID = "{307CE047-ED5D-4B5C-87EF-0237EC695C08}";
  this.IID_ITMSFNCCustomWebBrowser = pas.System.TGuid.$clone({D1: 0xF74562D0, D2: 0x56C7, D3: 0x4ED2, D4: [0xB0,0x1B,0x8C,0x9C,0x16,0xDD,0x93,0x61]});
  this.IID_ITMSFNCCustomWebBrowserBridge = pas.System.TGuid.$clone({D1: 0xAC2934EC, D2: 0x9397, D3: 0x4A99, D4: [0x8E,0x0A,0x1E,0xF5,0x88,0x03,0xC8,0xEA]});
  this.IID_ITMSFNCCustomWebBrowserSettings = pas.System.TGuid.$clone({D1: 0x25142510, D2: 0xA807, D3: 0x4635, D4: [0xBA,0xE7,0xCB,0x26,0x1D,0x00,0x13,0x7E]});
  this.IID_ITMSFNCCustomWebBrowserCookies = pas.System.TGuid.$clone({D1: 0xA50ABF08, D2: 0x0A6F, D3: 0x4877, D4: [0xAC,0x92,0xFC,0x83,0x4C,0xF3,0x6A,0xE6]});
  this.IID_ITMSFNCCustomWebBrowserService = pas.System.TGuid.$clone({D1: 0x4B7A5FE1, D2: 0xA889, D3: 0x47C6, D4: [0xB4,0x0F,0xA6,0x11,0xBB,0x62,0x66,0xE6]});
  this.IID_ITMSFNCCustomWebBrowserEx = pas.System.TGuid.$clone({D1: 0x6B5D75C1, D2: 0xB5EC, D3: 0x463D, D4: [0xA6,0x02,0x1F,0xFB,0x97,0xC8,0x66,0x8C]});
  this.IID_ITMSFNCCustomWebBrowserEdge = pas.System.TGuid.$clone({D1: 0xBAA1AC1A, D2: 0x4392, D3: 0x4496, D4: [0xA5,0x95,0x47,0x38,0x8C,0xC6,0xA0,0x83]});
  this.IID_ITMSFNCCustomWebBrowserContextMenu = pas.System.TGuid.$clone({D1: 0x04BD0560, D2: 0x104B, D3: 0x4D3B, D4: [0x8C,0xB1,0x45,0x62,0x8D,0x16,0xCB,0x0D]});
  this.IID_ITMSFNCCustomWebBrowserPrint = pas.System.TGuid.$clone({D1: 0x56EFC9E8, D2: 0xCD92, D3: 0x4FAC, D4: [0xB7,0x9C,0x08,0x4B,0xF3,0xDB,0x0F,0xBD]});
  this.$rtti.$RefToProcVar("TTMSFNCWebBrowserJavaScriptCompleteEvent",{procsig: rtl.newTIProcSig([["AValue",rtl.string,2]])});
  this.TTMSFNCWebBrowserContextMenuType = {"0": "mtPage", mtPage: 0, "1": "mtImage", mtImage: 1, "2": "mtSelectedText", mtSelectedText: 2, "3": "mtAudio", mtAudio: 3, "4": "mtVideo", mtVideo: 4, "5": "mtSubMenu", mtSubMenu: 5};
  this.$rtti.$Enum("TTMSFNCWebBrowserContextMenuType",{minvalue: 0, maxvalue: 5, ordtype: 1, enumtype: this.TTMSFNCWebBrowserContextMenuType});
  this.TTMSFNCWebBrowserContextMenuItemKind = {"0": "ikCommand", ikCommand: 0, "1": "ikCheckBox", ikCheckBox: 1, "2": "ikRadioButton", ikRadioButton: 2, "3": "ikSeperator", ikSeperator: 3, "4": "ikSubMenu", ikSubMenu: 4};
  this.$rtti.$Enum("TTMSFNCWebBrowserContextMenuItemKind",{minvalue: 0, maxvalue: 4, ordtype: 1, enumtype: this.TTMSFNCWebBrowserContextMenuItemKind});
  this.TTMSFNCWebBrowserPrintOrientation = {"0": "poPortrait", poPortrait: 0, "1": "poLandscape", poLandscape: 1};
  this.$rtti.$Enum("TTMSFNCWebBrowserPrintOrientation",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TTMSFNCWebBrowserPrintOrientation});
  this.$rtti.$Class("TTMSFNCWebBrowserSystemContextMenuItem");
  this.$rtti.$Class("TTMSFNCWebBrowserCustomContextMenuItem");
  this.TTMSFNCWebBrowserSameSiteType = {"0": "sstNone", sstNone: 0, "1": "sstLax", sstLax: 1, "2": "sstSameSite", sstSameSite: 2};
  this.$rtti.$Enum("TTMSFNCWebBrowserSameSiteType",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TTMSFNCWebBrowserSameSiteType});
  rtl.recNewT(this,"TTMSFNCWebBrowserCookie",function () {
    this.Path = "";
    this.Name = "";
    this.Expires = 0.0;
    this.Domain = "";
    this.Secure = false;
    this.HTTPOnly = false;
    this.Value = "";
    this.Session = false;
    this.SameSite = 0;
    this.$eq = function (b) {
      return (this.Path === b.Path) && (this.Name === b.Name) && (this.Expires === b.Expires) && (this.Domain === b.Domain) && (this.Secure === b.Secure) && (this.HTTPOnly === b.HTTPOnly) && (this.Value === b.Value) && (this.Session === b.Session) && (this.SameSite === b.SameSite);
    };
    this.$assign = function (s) {
      this.Path = s.Path;
      this.Name = s.Name;
      this.Expires = s.Expires;
      this.Domain = s.Domain;
      this.Secure = s.Secure;
      this.HTTPOnly = s.HTTPOnly;
      this.Value = s.Value;
      this.Session = s.Session;
      this.SameSite = s.SameSite;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCWebBrowserCookie",{});
    $r.addField("Path",rtl.string);
    $r.addField("Name",rtl.string);
    $r.addField("Expires",pas.System.$rtti["TDateTime"]);
    $r.addField("Domain",rtl.string);
    $r.addField("Secure",rtl.boolean);
    $r.addField("HTTPOnly",rtl.boolean);
    $r.addField("Value",rtl.string);
    $r.addField("Session",rtl.boolean);
    $r.addField("SameSite",$mod.$rtti["TTMSFNCWebBrowserSameSiteType"]);
  });
  this.$rtti.$Class("TTMSFNCCustomWebBrowser");
  this.TTMSFNCWebBrowserLogSeverityLevel = {"0": "lslUnknown", lslUnknown: 0, "1": "lslVerbose", lslVerbose: 1, "2": "lslInfo", lslInfo: 2, "3": "lslWarning", lslWarning: 3, "4": "lslError", lslError: 4};
  this.$rtti.$Enum("TTMSFNCWebBrowserLogSeverityLevel",{minvalue: 0, maxvalue: 4, ordtype: 1, enumtype: this.TTMSFNCWebBrowserLogSeverityLevel});
  rtl.recNewT(this,"TTMSFNCWebBrowserLogEntry",function () {
    this.Level = 0;
    this.Text = "";
    this.Url = "";
    this.LineNumber = 0;
    this.TimeStamp = 0.0;
    this.$eq = function (b) {
      return (this.Level === b.Level) && (this.Text === b.Text) && (this.Url === b.Url) && (this.LineNumber === b.LineNumber) && (this.TimeStamp === b.TimeStamp);
    };
    this.$assign = function (s) {
      this.Level = s.Level;
      this.Text = s.Text;
      this.Url = s.Url;
      this.LineNumber = s.LineNumber;
      this.TimeStamp = s.TimeStamp;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCWebBrowserLogEntry",{});
    $r.addField("Level",$mod.$rtti["TTMSFNCWebBrowserLogSeverityLevel"]);
    $r.addField("Text",rtl.string);
    $r.addField("Url",rtl.string);
    $r.addField("LineNumber",rtl.longint);
    $r.addField("TimeStamp",pas.System.$rtti["TDateTime"]);
  });
  this.TTMSFNCWebBrowserDownloadInterruptReason = {"0": "dirNone", dirNone: 0, "1": "dirFileFailed", dirFileFailed: 1, "2": "dirFileAccessDenied", dirFileAccessDenied: 2, "3": "dirFileNoSpace", dirFileNoSpace: 3, "4": "dirFileNameTooLong", dirFileNameTooLong: 4, "5": "dirFileTooLarge", dirFileTooLarge: 5, "6": "dirFileMalicious", dirFileMalicious: 6, "7": "dirFileTransientError", dirFileTransientError: 7, "8": "dirFileBlockedByPolicy", dirFileBlockedByPolicy: 8, "9": "dirFileSecurityCheckFailed", dirFileSecurityCheckFailed: 9, "10": "dirFileTooShort", dirFileTooShort: 10, "11": "dirFileHasMismatch", dirFileHasMismatch: 11, "12": "dirNetworkFailed", dirNetworkFailed: 12, "13": "dirNetworkTimeout", dirNetworkTimeout: 13, "14": "dirNetworkDisconnected", dirNetworkDisconnected: 14, "15": "dirNetworkServerDown", dirNetworkServerDown: 15, "16": "dirNetworkInvalidRequest", dirNetworkInvalidRequest: 16, "17": "dirServerFailed", dirServerFailed: 17, "18": "dirServerNoRange", dirServerNoRange: 18, "19": "dirServerBadContent", dirServerBadContent: 19, "20": "dirServerUnauthorized", dirServerUnauthorized: 20, "21": "dirServerCertificateProblem", dirServerCertificateProblem: 21, "22": "dirServerForbidden", dirServerForbidden: 22, "23": "dirServerUnexpectedResponse", dirServerUnexpectedResponse: 23, "24": "dirServerContentLengthMismatch", dirServerContentLengthMismatch: 24, "25": "dirServerCrossOriginRedirect", dirServerCrossOriginRedirect: 25, "26": "dirUserCanceled", dirUserCanceled: 26, "27": "dirUserShutdown", dirUserShutdown: 27, "28": "dirUserPaused", dirUserPaused: 28, "29": "dirDownloadProcessCrashed", dirDownloadProcessCrashed: 29};
  this.$rtti.$Enum("TTMSFNCWebBrowserDownloadInterruptReason",{minvalue: 0, maxvalue: 29, ordtype: 1, enumtype: this.TTMSFNCWebBrowserDownloadInterruptReason});
  this.TTMSFNCWebBrowserDownloadState = {"0": "dsInProgress", dsInProgress: 0, "1": "dsInterrupted", dsInterrupted: 1, "2": "dsCompleted", dsCompleted: 2, "3": "dsCancelled", dsCancelled: 3};
  this.$rtti.$Enum("TTMSFNCWebBrowserDownloadState",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TTMSFNCWebBrowserDownloadState});
  rtl.createClass(this,"TTMSFNCWebBrowserDownload",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FOwner = null;
      this.FDataPointer = null;
      this.FDataBoolean = false;
      this.FDataString = "";
      this.FDataObject = null;
      this.FDataInteger = 0;
      this.FInterruptReason = 0;
      this.FCanResume = false;
      this.FState = 0;
      this.FBytesReceived = 0;
      this.FMimeType = "";
      this.FURI = "";
      this.FTotalBytes = 0;
      this.FResultFilePath = "";
      this.FInternalOperationInterface = null;
    };
    this.$final = function () {
      this.FOwner = undefined;
      this.FDataObject = undefined;
      rtl.setIntfP(this,"FInternalOperationInterface",null);
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.SetResultFilePath = function (Value) {
      if (this.FResultFilePath !== Value) this.FResultFilePath = Value;
    };
    this.SetURI = function (Value) {
      if (this.FURI !== Value) this.FURI = Value;
    };
    this.SetTotalBytes = function (Value) {
      if (this.FTotalBytes !== Value) this.FTotalBytes = Value;
    };
    this.SetBytesReceived = function (Value) {
      if (this.FBytesReceived !== Value) this.FBytesReceived = Value;
    };
    this.SetState = function (Value) {
      if (this.FState !== Value) this.FState = Value;
    };
    this.SetInterruptReason = function (Value) {
      if (this.FInterruptReason !== Value) this.FInterruptReason = Value;
    };
    this.SetMimeType = function (Value) {
      if (this.FMimeType !== Value) this.FMimeType = Value;
    };
    this.SetCanResume = function (Value) {
      if (this.FCanResume !== Value) this.FCanResume = Value;
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      if ($mod.TTMSFNCWebBrowserDownloads.isPrototypeOf(this.FCollection)) this.FOwner = rtl.as(this.FCollection,$mod.TTMSFNCWebBrowserDownloads).FOwner$1;
      return this;
    };
    this.Destroy = function () {
      pas.Classes.TCollectionItem.Destroy.call(this);
    };
    this.Cancel = function () {
      if (this.FOwner != null) this.FOwner.CancelDownload(this);
    };
    this.Pause = function () {
      if (this.FOwner != null) this.FOwner.PauseDownload(this);
    };
    this.Resume = function () {
      if (this.FOwner != null) this.FOwner.ResumeDownload(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
  });
  rtl.createClass(this,"TTMSFNCWebBrowserDownloads",pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection,function () {
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
      Result = $mod.TTMSFNCWebBrowserDownload;
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
    this.ClearFinishedDownloads = function () {
      var I = 0;
      I = 0;
      while (I < this.GetCount()) {
        if (this.GetItem$1(I).FState === $mod.TTMSFNCWebBrowserDownloadState.dsCompleted) {
          this.Delete(I)}
         else I += 1;
      };
    };
    this.GetDownloadByURI = function (AURI) {
      var Result = null;
      var I = 0;
      Result = null;
      for (var $l = this.GetCount() - 1; $l >= 0; $l--) {
        I = $l;
        if (this.GetItem$1(I).FURI === AURI) {
          Result = this.GetItem$1(I);
          break;
        };
      };
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$3",2,[["AOwner",$mod.$rtti["TTMSFNCCustomWebBrowser"]]]);
  });
  rtl.recNewT(this,"TTMSFNCWebBrowserTargetItem",function () {
    this.Kind = 0;
    this.URI = "";
    this.SelectionText = "";
    this.LinkText = "";
    this.$eq = function (b) {
      return (this.Kind === b.Kind) && (this.URI === b.URI) && (this.SelectionText === b.SelectionText) && (this.LinkText === b.LinkText);
    };
    this.$assign = function (s) {
      this.Kind = s.Kind;
      this.URI = s.URI;
      this.SelectionText = s.SelectionText;
      this.LinkText = s.LinkText;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCWebBrowserTargetItem",{});
    $r.addField("Kind",$mod.$rtti["TTMSFNCWebBrowserContextMenuType"]);
    $r.addField("URI",rtl.string);
    $r.addField("SelectionText",rtl.string);
    $r.addField("LinkText",rtl.string);
  });
  this.$rtti.$Class("TTMSFNCWebBrowserContextMenuItem");
  rtl.createClass(this,"TTMSFNCWebBrowserContextMenuItemList",pas["Generics.Collections"].TObjectList$G5,function () {
  });
  rtl.createClass(this,"TTMSFNCWebBrowserContextMenuItem",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FParentItem = null;
      this.FName = "";
      this.FText = "";
      this.FChildren = null;
      this.FCommandId = 0;
      this.FEnabled = false;
      this.FShortcutKeyDescription = "";
      this.FKind = 0;
      this.FChecked = false;
      this.FOriginalIndex = 0;
      this.FInternalObject = null;
      this.FDataPointer = null;
      this.FDataBoolean = false;
      this.FDataString = "";
      this.FDataObject = null;
      this.FDataInteger = 0;
      this.FIcon = null;
      this.FEventHandlerObject = null;
    };
    this.$final = function () {
      this.FParentItem = undefined;
      this.FChildren = undefined;
      this.FInternalObject = undefined;
      this.FDataObject = undefined;
      this.FIcon = undefined;
      this.FEventHandlerObject = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetShortcutKeyDescription = function (Value) {
      this.FShortcutKeyDescription = Value;
    };
    this.Create$1 = function () {
      this.FKind = $mod.TTMSFNCWebBrowserContextMenuItemKind.ikCommand;
      this.FEnabled = true;
      this.FOriginalIndex = -1;
      this.FChildren = $mod.TTMSFNCWebBrowserContextMenuItemList.$create("Create$4",[true]);
      this.FIcon = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
      return this;
    };
    this.Destroy = function () {
      if (this.FEventHandlerObject != null) pas.SysUtils.FreeAndNil({p: this, get: function () {
          return this.p.FEventHandlerObject;
        }, set: function (v) {
          this.p.FEventHandlerObject = v;
        }});
      rtl.free(this,"FIcon");
      rtl.free(this,"FChildren");
      pas.System.TObject.Destroy.call(this);
    };
    this.AsCustom = function () {
      var Result = null;
      if ($mod.TTMSFNCWebBrowserCustomContextMenuItem.isPrototypeOf(this)) {
        Result = this}
       else Result = null;
      return Result;
    };
    this.AsSystem = function () {
      var Result = null;
      if ($mod.TTMSFNCWebBrowserSystemContextMenuItem.isPrototypeOf(this)) {
        Result = this}
       else if ($mod.TTMSFNCWebBrowserCustomContextMenuItem.isPrototypeOf(this)) {
        Result = this}
       else Result = null;
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
  });
  rtl.createClass(this,"TTMSFNCWebBrowserSystemContextMenuItem",this.TTMSFNCWebBrowserContextMenuItem,function () {
    this.GetName = function () {
      var Result = "";
      Result = this.FName;
      return Result;
    };
    this.GetText = function () {
      var Result = "";
      Result = this.FText;
      return Result;
    };
    this.GetChildren = function () {
      var Result = null;
      Result = this.FChildren;
      return Result;
    };
    this.GetKind = function () {
      var Result = 0;
      Result = this.FKind;
      return Result;
    };
    this.GetChecked = function () {
      var Result = false;
      Result = this.FChecked;
      return Result;
    };
    this.GetEnabled = function () {
      var Result = false;
      Result = this.FEnabled;
      return Result;
    };
    this.GetIcon = function () {
      var Result = null;
      Result = this.FIcon;
      return Result;
    };
    this.GetParentItem = function () {
      var Result = null;
      Result = this.FParentItem;
      return Result;
    };
  });
  rtl.createClass(this,"TTMSFNCWebBrowserCustomContextMenuItem",this.TTMSFNCWebBrowserContextMenuItem,function () {
    this.GetParentItem = function () {
      var Result = null;
      Result = this.FParentItem;
      return Result;
    };
  });
  rtl.recNewT(this,"TTMSFNCWebBrowserPrintSettings",function () {
    this.Orientation = 0;
    this.ScaleFactor = 0.0;
    this.PageWidth = 0;
    this.PageHeight = 0;
    this.MarginLeft = 0;
    this.MarginTop = 0;
    this.MarginRight = 0;
    this.MarginBottom = 0;
    this.PrintBackgrounds = false;
    this.PrintSelectionOnly = false;
    this.PrintHeaderAndFooter = false;
    this.HeaderTitle = "";
    this.FooterURI = "";
    this.$eq = function (b) {
      return (this.Orientation === b.Orientation) && (this.ScaleFactor === b.ScaleFactor) && (this.PageWidth === b.PageWidth) && (this.PageHeight === b.PageHeight) && (this.MarginLeft === b.MarginLeft) && (this.MarginTop === b.MarginTop) && (this.MarginRight === b.MarginRight) && (this.MarginBottom === b.MarginBottom) && (this.PrintBackgrounds === b.PrintBackgrounds) && (this.PrintSelectionOnly === b.PrintSelectionOnly) && (this.PrintHeaderAndFooter === b.PrintHeaderAndFooter) && (this.HeaderTitle === b.HeaderTitle) && (this.FooterURI === b.FooterURI);
    };
    this.$assign = function (s) {
      this.Orientation = s.Orientation;
      this.ScaleFactor = s.ScaleFactor;
      this.PageWidth = s.PageWidth;
      this.PageHeight = s.PageHeight;
      this.MarginLeft = s.MarginLeft;
      this.MarginTop = s.MarginTop;
      this.MarginRight = s.MarginRight;
      this.MarginBottom = s.MarginBottom;
      this.PrintBackgrounds = s.PrintBackgrounds;
      this.PrintSelectionOnly = s.PrintSelectionOnly;
      this.PrintHeaderAndFooter = s.PrintHeaderAndFooter;
      this.HeaderTitle = s.HeaderTitle;
      this.FooterURI = s.FooterURI;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCWebBrowserPrintSettings",{});
    $r.addField("Orientation",$mod.$rtti["TTMSFNCWebBrowserPrintOrientation"]);
    $r.addField("ScaleFactor",rtl.double);
    $r.addField("PageWidth",rtl.longint);
    $r.addField("PageHeight",rtl.longint);
    $r.addField("MarginLeft",rtl.longint);
    $r.addField("MarginTop",rtl.longint);
    $r.addField("MarginRight",rtl.longint);
    $r.addField("MarginBottom",rtl.longint);
    $r.addField("PrintBackgrounds",rtl.boolean);
    $r.addField("PrintSelectionOnly",rtl.boolean);
    $r.addField("PrintHeaderAndFooter",rtl.boolean);
    $r.addField("HeaderTitle",rtl.string);
    $r.addField("FooterURI",rtl.string);
  });
  this.$rtti.$MethodVar("TTMSFNCWebBrowserOnGetContextMenu",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ATarget",this.$rtti["TTMSFNCWebBrowserTargetItem"]],["AContextMenu",pas["Generics.Collections"].$rtti["TObjectList<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCWebBrowserOnGetPopupMenuForContextMenu",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ATarget",this.$rtti["TTMSFNCWebBrowserTargetItem"]],["APopupMenu",pas["WEBLib.Menus"].$rtti["TPopupMenu"],1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCWebBrowserOnCustomContextMenuItemSelected",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ASelectedItem",this.$rtti["TTMSFNCWebBrowserCustomContextMenuItem"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCWebBrowserOnGetCookies",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ACookies",this.$rtti["TTMSFNCWebBrowserCookie"],8]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCWebBrowserOnGetPrintPDFStream",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AStream",pas.Classes.$rtti["TMemoryStream"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCWebBrowserOnGetDevTools",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AEventName",rtl.string],["AJSONResponse",rtl.string]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCWebBrowserOnDownloadStarted",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ADownload",this.$rtti["TTMSFNCWebBrowserDownload"]],["ASilent",rtl.boolean,1],["APause",rtl.boolean,1],["AResume",rtl.boolean,1],["ACancel",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCWebBrowserOnDownloadStateChanged",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ADownload",this.$rtti["TTMSFNCWebBrowserDownload"]],["AState",this.$rtti["TTMSFNCWebBrowserDownloadState"]],["APause",rtl.boolean,1],["AResume",rtl.boolean,1],["ACancel",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCWebBrowserOnDownloadBytesChanged",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ADownload",this.$rtti["TTMSFNCWebBrowserDownload"]],["ABytesReceived",rtl.nativeint],["APause",rtl.boolean,1],["AResume",rtl.boolean,1],["ACancel",rtl.boolean,1]]), methodkind: 0});
  rtl.createInterface(this,"ITMSFNCCustomWebBrowserBridge","{0CEE3A9E-4BA1-3920-B581-8DB710E7FC63}",["GetObjectMessage","SetObjectMessage"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetObjectMessage",1,[],rtl.string);
    $r.addMethod("SetObjectMessage",0,[["AValue",rtl.string,2]]);
    $r.addProperty("ObjectMessage",3,rtl.string,"GetObjectMessage","SetObjectMessage");
  });
  rtl.createInterface(this,"ITMSFNCCustomWebBrowser","{F2DC1BCC-EBBB-322E-9FCD-AA591C266AF6}",["SetFocus","ClearFocus","SetUserAgent","SetURL","SetExternalBrowser","SetEnableContextMenu","SetEnableShowDebugConsole","SetEnableAcceleratorKeys","SetCacheFolderName","SetAutoClearCache","SetCacheFolder","Navigate","Navigate$1","LoadHTML","LoadFile","GoForward","GoBack","Reload","Close","StopLoading","AddBridge","RemoveBridge","UpdateBounds","CaptureScreenShot","UpdateVisible","UpdateEnabled","BeforeChangeParent","Initialize","DeInitialize","ClearCache","ShowDebugConsole","GetUserAgent","GetURL","GetExternalBrowser","GetEnableContextMenu","GetEnableShowDebugConsole","GetEnableAcceleratorKeys","ExecuteJavaScript","NativeEnvironment","NativeBrowser","GetBrowserInstance","CanGoBack","CanGoForward","NativeDialog","IsFMXBrowser","GetCacheFolderName","GetAutoClearCache","GetCacheFolder","UpdateContentFromControl"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("SetFocus",0,[]);
    $r.addMethod("ClearFocus",0,[]);
    $r.addMethod("SetUserAgent",0,[["AValue",rtl.string,2]]);
    $r.addMethod("SetURL",0,[["AValue",rtl.string,2]]);
    $r.addMethod("SetExternalBrowser",0,[["AValue",rtl.boolean,2]]);
    $r.addMethod("SetEnableContextMenu",0,[["AValue",rtl.boolean,2]]);
    $r.addMethod("SetEnableShowDebugConsole",0,[["AValue",rtl.boolean,2]]);
    $r.addMethod("SetEnableAcceleratorKeys",0,[["AValue",rtl.boolean,2]]);
    $r.addMethod("SetCacheFolderName",0,[["Value",rtl.string,2]]);
    $r.addMethod("SetAutoClearCache",0,[["Value",rtl.boolean,2]]);
    $r.addMethod("SetCacheFolder",0,[["Value",rtl.string,2]]);
    $r.addMethod("Navigate",0,[["AURL",rtl.string,2]]);
    $r.addMethod("Navigate$1",0,[]);
    $r.addMethod("LoadHTML",0,[["AHTML",rtl.string]]);
    $r.addMethod("LoadFile",0,[["AFile",rtl.string]]);
    $r.addMethod("GoForward",0,[]);
    $r.addMethod("GoBack",0,[]);
    $r.addMethod("Reload",0,[]);
    $r.addMethod("Close",0,[]);
    $r.addMethod("StopLoading",0,[]);
    $r.addMethod("AddBridge",0,[["ABridgeName",rtl.string],["ABridgeObject",pas.System.$rtti["TObject"]]]);
    $r.addMethod("RemoveBridge",0,[["ABridgeName",rtl.string]]);
    $r.addMethod("UpdateBounds",0,[]);
    $r.addMethod("CaptureScreenShot",0,[]);
    $r.addMethod("UpdateVisible",0,[]);
    $r.addMethod("UpdateEnabled",0,[]);
    $r.addMethod("BeforeChangeParent",0,[]);
    $r.addMethod("Initialize",0,[]);
    $r.addMethod("DeInitialize",0,[]);
    $r.addMethod("ClearCache",0,[]);
    $r.addMethod("ShowDebugConsole",0,[]);
    $r.addMethod("GetUserAgent",1,[],rtl.string);
    $r.addMethod("GetURL",1,[],rtl.string);
    $r.addMethod("GetExternalBrowser",1,[],rtl.boolean);
    $r.addMethod("GetEnableContextMenu",1,[],rtl.boolean);
    $r.addMethod("GetEnableShowDebugConsole",1,[],rtl.boolean);
    $r.addMethod("GetEnableAcceleratorKeys",1,[],rtl.boolean);
    $r.addMethod("ExecuteJavaScript",0,[["AScript",rtl.string],["ACompleteEvent",$mod.$rtti["TTMSFNCWebBrowserJavaScriptCompleteEvent"]],["ACallback",pas["WEBLib.Controls"].$rtti["TNotifyEvent"]]]);
    $r.addMethod("NativeEnvironment",1,[],rtl.pointer);
    $r.addMethod("NativeBrowser",1,[],rtl.pointer);
    $r.addMethod("GetBrowserInstance",1,[],pas.System.$rtti["IUnknown"]);
    $r.addMethod("CanGoBack",1,[],rtl.boolean);
    $r.addMethod("CanGoForward",1,[],rtl.boolean);
    $r.addMethod("NativeDialog",1,[],rtl.pointer);
    $r.addMethod("IsFMXBrowser",1,[],rtl.boolean);
    $r.addMethod("GetCacheFolderName",1,[],rtl.string);
    $r.addMethod("GetAutoClearCache",1,[],rtl.boolean);
    $r.addMethod("GetCacheFolder",1,[],rtl.string);
    $r.addMethod("UpdateContentFromControl",0,[]);
    $r.addProperty("UserAgent",3,rtl.string,"GetUserAgent","SetUserAgent");
    $r.addProperty("CacheFolderName",3,rtl.string,"GetCacheFolderName","SetCacheFolderName");
    $r.addProperty("CacheFolder",3,rtl.string,"GetCacheFolder","SetCacheFolder");
    $r.addProperty("AutoClearCache",3,rtl.boolean,"GetAutoClearCache","SetAutoClearCache");
    $r.addProperty("URL",3,rtl.string,"GetURL","SetURL");
    $r.addProperty("ExternalBrowser",3,rtl.boolean,"GetExternalBrowser","SetExternalBrowser");
    $r.addProperty("EnableContextMenu",3,rtl.boolean,"GetEnableContextMenu","SetEnableContextMenu");
    $r.addProperty("EnableShowDebugConsole",3,rtl.boolean,"GetEnableShowDebugConsole","SetEnableShowDebugConsole");
    $r.addProperty("EnableAcceleratorKeys",3,rtl.boolean,"GetEnableAcceleratorKeys","SetEnableAcceleratorKeys");
  });
  rtl.createInterface(this,"ITMSFNCCustomWebBrowserEx","{8D11B65D-5FD3-31BE-9803-0C2BD556F796}",["OpenTaskManagerWindow","NavigateWithData","NavigateWithData$1"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("OpenTaskManagerWindow",0,[]);
    $r.addMethod("NavigateWithData",0,[["AURI",rtl.string],["AMethod",rtl.string],["ABody",rtl.string],["AHeaders",pas.Classes.$rtti["TStrings"]]]);
    $r.addMethod("NavigateWithData$1",0,[["AURI",rtl.string],["AMethod",rtl.string],["ABodyStream",pas.Classes.$rtti["TStream"]],["AHeaders",pas.Classes.$rtti["TStrings"]]]);
  });
  rtl.createInterface(this,"ITMSFNCCustomWebBrowserInfo","{4B6C1AF4-53E3-3A08-87B3-6CDA3666F02B}",["GetDocumentTitle","GetContainsFullScreenElement","GetParentWindowHandle","GetBrowserVersion","GetUserDataFolder"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetDocumentTitle",1,[],rtl.string);
    $r.addMethod("GetContainsFullScreenElement",1,[],rtl.boolean);
    $r.addMethod("GetParentWindowHandle",1,[],rtl.longword);
    $r.addMethod("GetBrowserVersion",1,[],rtl.string);
    $r.addMethod("GetUserDataFolder",1,[],rtl.string);
  });
  rtl.createInterface(this,"ITMSFNCCustomWebBrowserSettings","{DADB434D-F3CB-3D7B-8858-35B4E5564FE1}",["GetEnableScript","SetEnableScript","GetAllowExternalDrop","SetAllowExternalDrop"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetEnableScript",1,[],rtl.boolean);
    $r.addMethod("SetEnableScript",0,[["Value",rtl.boolean,2]]);
    $r.addMethod("GetAllowExternalDrop",1,[],rtl.boolean);
    $r.addMethod("SetAllowExternalDrop",0,[["Value",rtl.boolean,2]]);
    $r.addProperty("EnableScript",3,rtl.boolean,"GetEnableScript","SetEnableScript");
    $r.addProperty("AllowExternalDrop",3,rtl.boolean,"GetAllowExternalDrop","SetAllowExternalDrop");
  });
  rtl.createInterface(this,"ITMSFNCCustomWebBrowserCookies","{501A5DD4-98B1-3786-800C-0250AF23920B}",["GetCookies","AddCookie","DeleteAllCookies","DeleteCookie"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetCookies",0,[["AURI",rtl.string]]);
    $r.addMethod("AddCookie",0,[["ACookie",$mod.$rtti["TTMSFNCWebBrowserCookie"]]]);
    $r.addMethod("DeleteAllCookies",0,[]);
    $r.addMethod("DeleteCookie",0,[["AName",rtl.string],["ADomain",rtl.string],["APath",rtl.string]]);
  });
  rtl.createInterface(this,"ITMSFNCCustomWebBrowserEdge","{4173F47C-7313-30BF-BDE0-5F3F267AE08B}",["SubscribeDevtools","CallDevToolsProtocolMethod","EnableDevToolDomain","DisableDevToolDomain","SetupStartDomains","CancelDownload","PauseDownload","ResumeDownload"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("SubscribeDevtools",0,[["AEventName",rtl.string]]);
    $r.addMethod("CallDevToolsProtocolMethod",0,[["AMethodName",rtl.string],["AParametersAsJSON",rtl.string]]);
    $r.addMethod("EnableDevToolDomain",0,[["AEventName",rtl.string],["AJSONParameters",rtl.string]]);
    $r.addMethod("DisableDevToolDomain",0,[["ADomain",rtl.string]]);
    $r.addMethod("SetupStartDomains",0,[]);
    $r.addMethod("CancelDownload",0,[["ADownload",$mod.$rtti["TTMSFNCWebBrowserDownload"]]]);
    $r.addMethod("PauseDownload",0,[["ADownload",$mod.$rtti["TTMSFNCWebBrowserDownload"]]]);
    $r.addMethod("ResumeDownload",0,[["ADownload",$mod.$rtti["TTMSFNCWebBrowserDownload"]]]);
  });
  rtl.createInterface(this,"ITMSFNCCustomWebBrowserContextMenu","{F93E2638-F291-3D44-9EAA-87685DF51222}",[],pas.System.IUnknown,function () {
  });
  rtl.createInterface(this,"ITMSFNCCustomWebBrowserPrint","{40179B8E-2779-3CB7-86EF-8F60D51DEE56}",["ShowPrintUI","Print","Print$1","PrintToPDFStream","PrintToPDFStream$1","PrintToPDF","PrintToPDF$1"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("ShowPrintUI",0,[]);
    $r.addMethod("Print",0,[]);
    $r.addMethod("Print$1",0,[["APrintSettings",$mod.$rtti["TTMSFNCWebBrowserPrintSettings"]]]);
    $r.addMethod("PrintToPDFStream",0,[["APrintSettings",$mod.$rtti["TTMSFNCWebBrowserPrintSettings"]]]);
    $r.addMethod("PrintToPDFStream$1",0,[]);
    $r.addMethod("PrintToPDF",0,[["AFileName",rtl.string],["APrintSettings",$mod.$rtti["TTMSFNCWebBrowserPrintSettings"]]]);
    $r.addMethod("PrintToPDF$1",0,[["AFileName",rtl.string]]);
  });
  rtl.createInterface(this,"ITMSFNCWebBrowserService","{A3BF9EAB-0660-34CC-BAEE-343863F8694D}",["CreateWebBrowser","DeleteCookies","DestroyWebBrowser"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("CreateWebBrowser",1,[["AValue",$mod.$rtti["TTMSFNCCustomWebBrowser"],2]],$mod.$rtti["ITMSFNCCustomWebBrowser"]);
    $r.addMethod("DeleteCookies",0,[]);
    $r.addMethod("DestroyWebBrowser",0,[["AValue",$mod.$rtti["ITMSFNCCustomWebBrowser"],2]]);
  });
  rtl.recNewT(this,"TTMSFNCCustomWebBrowserNavigateCompleteParams",function () {
    this.URL = "";
    this.Success = false;
    this.ErrorCode = 0;
    this.$eq = function (b) {
      return (this.URL === b.URL) && (this.Success === b.Success) && (this.ErrorCode === b.ErrorCode);
    };
    this.$assign = function (s) {
      this.URL = s.URL;
      this.Success = s.Success;
      this.ErrorCode = s.ErrorCode;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCCustomWebBrowserNavigateCompleteParams",{});
    $r.addField("URL",rtl.string);
    $r.addField("Success",rtl.boolean);
    $r.addField("ErrorCode",rtl.longint);
  });
  rtl.recNewT(this,"TTMSFNCCustomWebBrowserBeforeNavigateParams",function () {
    this.URL = "";
    this.Cancel = false;
    this.$eq = function (b) {
      return (this.URL === b.URL) && (this.Cancel === b.Cancel);
    };
    this.$assign = function (s) {
      this.URL = s.URL;
      this.Cancel = s.Cancel;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCCustomWebBrowserBeforeNavigateParams",{});
    $r.addField("URL",rtl.string);
    $r.addField("Cancel",rtl.boolean);
  });
  rtl.recNewT(this,"TTMSFNCCustomWebBrowserFrameNavigateCompleteParams",function () {
    this.URL = "";
    this.Success = false;
    this.ErrorCode = 0;
    this.$eq = function (b) {
      return (this.URL === b.URL) && (this.Success === b.Success) && (this.ErrorCode === b.ErrorCode);
    };
    this.$assign = function (s) {
      this.URL = s.URL;
      this.Success = s.Success;
      this.ErrorCode = s.ErrorCode;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCCustomWebBrowserFrameNavigateCompleteParams",{});
    $r.addField("URL",rtl.string);
    $r.addField("Success",rtl.boolean);
    $r.addField("ErrorCode",rtl.longint);
  });
  rtl.recNewT(this,"TTMSFNCCustomWebBrowserBeforeFrameNavigateParams",function () {
    this.URL = "";
    this.Cancel = false;
    this.$eq = function (b) {
      return (this.URL === b.URL) && (this.Cancel === b.Cancel);
    };
    this.$assign = function (s) {
      this.URL = s.URL;
      this.Cancel = s.Cancel;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCCustomWebBrowserBeforeFrameNavigateParams",{});
    $r.addField("URL",rtl.string);
    $r.addField("Cancel",rtl.boolean);
  });
  rtl.recNewT(this,"TTMSFNCWebBrowserNewWindowRequestedParams",function () {
    this.URL = "";
    this.Handled = false;
    this.IsUserInitiated = false;
    this.$eq = function (b) {
      return (this.URL === b.URL) && (this.Handled === b.Handled) && (this.IsUserInitiated === b.IsUserInitiated);
    };
    this.$assign = function (s) {
      this.URL = s.URL;
      this.Handled = s.Handled;
      this.IsUserInitiated = s.IsUserInitiated;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCWebBrowserNewWindowRequestedParams",{});
    $r.addField("URL",rtl.string);
    $r.addField("Handled",rtl.boolean);
    $r.addField("IsUserInitiated",rtl.boolean);
  });
  this.TTMSFNCWebBrowserPermissionKind = {"0": "pkUnknown", pkUnknown: 0, "1": "pkMicrophone", pkMicrophone: 1, "2": "pkCamera", pkCamera: 2, "3": "pkGeolocation", pkGeolocation: 3, "4": "pkNotifications", pkNotifications: 4, "5": "pkOtherSensors", pkOtherSensors: 5, "6": "pkClipboardRead", pkClipboardRead: 6};
  this.$rtti.$Enum("TTMSFNCWebBrowserPermissionKind",{minvalue: 0, maxvalue: 6, ordtype: 1, enumtype: this.TTMSFNCWebBrowserPermissionKind});
  this.TTMSFNCWebBrowserPermissionState = {"0": "psDefault", psDefault: 0, "1": "psAllow", psAllow: 1, "2": "psDeny", psDeny: 2};
  this.$rtti.$Enum("TTMSFNCWebBrowserPermissionState",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TTMSFNCWebBrowserPermissionState});
  rtl.recNewT(this,"TTMSFNCWebBrowserPermissionRequestedParams",function () {
    this.State = 0;
    this.URL = "";
    this.PermissionKind = 0;
    this.IsUserInitiated = false;
    this.$eq = function (b) {
      return (this.State === b.State) && (this.URL === b.URL) && (this.PermissionKind === b.PermissionKind) && (this.IsUserInitiated === b.IsUserInitiated);
    };
    this.$assign = function (s) {
      this.State = s.State;
      this.URL = s.URL;
      this.PermissionKind = s.PermissionKind;
      this.IsUserInitiated = s.IsUserInitiated;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCWebBrowserPermissionRequestedParams",{});
    $r.addField("State",$mod.$rtti["TTMSFNCWebBrowserPermissionState"]);
    $r.addField("URL",rtl.string);
    $r.addField("PermissionKind",$mod.$rtti["TTMSFNCWebBrowserPermissionKind"]);
    $r.addField("IsUserInitiated",rtl.boolean);
  });
  this.TTMSFNCWebBrowserProcessFailedKind = {"0": "pfkBrowserProcessExited", pfkBrowserProcessExited: 0, "1": "pfkRenderProcessExited", pfkRenderProcessExited: 1, "2": "pfkRenderProcessUnresponsive", pfkRenderProcessUnresponsive: 2, "3": "pfkFrameRenderProcessExited", pfkFrameRenderProcessExited: 3, "4": "pfkUtilityProcessExited", pfkUtilityProcessExited: 4, "5": "pfkSandboxHelperProcessExited", pfkSandboxHelperProcessExited: 5, "6": "pfkGpuProcessExited", pfkGpuProcessExited: 6, "7": "pfkPpapiPluginProcessExited", pfkPpapiPluginProcessExited: 7, "8": "pfkPpapiBrokerProcessExited", pfkPpapiBrokerProcessExited: 8, "9": "pfkUnknownProcessExited", pfkUnknownProcessExited: 9};
  this.$rtti.$Enum("TTMSFNCWebBrowserProcessFailedKind",{minvalue: 0, maxvalue: 9, ordtype: 1, enumtype: this.TTMSFNCWebBrowserProcessFailedKind});
  rtl.recNewT(this,"TTMSFNCWebBrowserProcessFailedParams",function () {
    this.ProcessFailedKind = 0;
    this.$eq = function (b) {
      return this.ProcessFailedKind === b.ProcessFailedKind;
    };
    this.$assign = function (s) {
      this.ProcessFailedKind = s.ProcessFailedKind;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCWebBrowserProcessFailedParams",{});
    $r.addField("ProcessFailedKind",$mod.$rtti["TTMSFNCWebBrowserProcessFailedKind"]);
  });
  this.TTMSFNCWebBrowserScriptDialogKind = {"0": "sdkAlert", sdkAlert: 0, "1": "sdkConfirm", sdkConfirm: 1, "2": "sdkPrompt", sdkPrompt: 2, "3": "sdkBeforeUnload", sdkBeforeUnload: 3, "4": "sdkUnknown", sdkUnknown: 4};
  this.$rtti.$Enum("TTMSFNCWebBrowserScriptDialogKind",{minvalue: 0, maxvalue: 4, ordtype: 1, enumtype: this.TTMSFNCWebBrowserScriptDialogKind});
  rtl.recNewT(this,"TTMSFNCWebBrowserScriptDialogOpeningParams",function () {
    this.URL = "";
    this.ResultText = "";
    this.Accept = false;
    this.DialogMessage = "";
    this.DialogKind = 0;
    this.DefaultText = "";
    this.$eq = function (b) {
      return (this.URL === b.URL) && (this.ResultText === b.ResultText) && (this.Accept === b.Accept) && (this.DialogMessage === b.DialogMessage) && (this.DialogKind === b.DialogKind) && (this.DefaultText === b.DefaultText);
    };
    this.$assign = function (s) {
      this.URL = s.URL;
      this.ResultText = s.ResultText;
      this.Accept = s.Accept;
      this.DialogMessage = s.DialogMessage;
      this.DialogKind = s.DialogKind;
      this.DefaultText = s.DefaultText;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCWebBrowserScriptDialogOpeningParams",{});
    $r.addField("URL",rtl.string);
    $r.addField("ResultText",rtl.string);
    $r.addField("Accept",rtl.boolean);
    $r.addField("DialogMessage",rtl.string);
    $r.addField("DialogKind",$mod.$rtti["TTMSFNCWebBrowserScriptDialogKind"]);
    $r.addField("DefaultText",rtl.string);
  });
  rtl.recNewT(this,"TTMSFNCWebBrowserSourceChangedParams",function () {
    this.IsNewDocument = false;
    this.$eq = function (b) {
      return this.IsNewDocument === b.IsNewDocument;
    };
    this.$assign = function (s) {
      this.IsNewDocument = s.IsNewDocument;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCWebBrowserSourceChangedParams",{});
    $r.addField("IsNewDocument",rtl.boolean);
  });
  rtl.recNewT(this,"TTMSFNCWebBrowserWebMessageReceivedParams",function () {
    this.Source = "";
    this.WebMessageAsJSON = "";
    this.$eq = function (b) {
      return (this.Source === b.Source) && (this.WebMessageAsJSON === b.WebMessageAsJSON);
    };
    this.$assign = function (s) {
      this.Source = s.Source;
      this.WebMessageAsJSON = s.WebMessageAsJSON;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCWebBrowserWebMessageReceivedParams",{});
    $r.addField("Source",rtl.string);
    $r.addField("WebMessageAsJSON",rtl.string);
  });
  rtl.recNewT(this,"TTMSFNCWebBrowserWebResourceRequest",function () {
    this.URL = "";
    this.Method = "";
    this.$eq = function (b) {
      return (this.URL === b.URL) && (this.Method === b.Method);
    };
    this.$assign = function (s) {
      this.URL = s.URL;
      this.Method = s.Method;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCWebBrowserWebResourceRequest",{});
    $r.addField("URL",rtl.string);
    $r.addField("Method",rtl.string);
  });
  this.TTMSFNCWebBrowserWebResourceContext = {"0": "wrcAll", wrcAll: 0, "1": "wrcDocument", wrcDocument: 1, "2": "wrcStylesheet", wrcStylesheet: 2, "3": "wrcImage", wrcImage: 3, "4": "wrcMedia", wrcMedia: 4, "5": "wrcFont", wrcFont: 5, "6": "wrcScript", wrcScript: 6, "7": "wrcXMLHTTPRequest", wrcXMLHTTPRequest: 7, "8": "wrcFetch", wrcFetch: 8, "9": "wrcTextTrack", wrcTextTrack: 9, "10": "wrcEventSource", wrcEventSource: 10, "11": "wrcWebSocket", wrcWebSocket: 11, "12": "wrcManifest", wrcManifest: 12, "13": "wrcSignedExchange", wrcSignedExchange: 13, "14": "wrcPing", wrcPing: 14, "15": "wrcCSPViolationReport", wrcCSPViolationReport: 15, "16": "wrcOther", wrcOther: 16};
  this.$rtti.$Enum("TTMSFNCWebBrowserWebResourceContext",{minvalue: 0, maxvalue: 16, ordtype: 1, enumtype: this.TTMSFNCWebBrowserWebResourceContext});
  rtl.recNewT(this,"TTMSFNCWebBrowserWebResourceRequestedParams",function () {
    this.ResourceContext = 0;
    this.$new = function () {
      var r = Object.create(this);
      r.Request = $mod.TTMSFNCWebBrowserWebResourceRequest.$new();
      return r;
    };
    this.$eq = function (b) {
      return this.Request.$eq(b.Request) && (this.ResourceContext === b.ResourceContext);
    };
    this.$assign = function (s) {
      this.Request.$assign(s.Request);
      this.ResourceContext = s.ResourceContext;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCWebBrowserWebResourceRequestedParams",{});
    $r.addField("Request",$mod.$rtti["TTMSFNCWebBrowserWebResourceRequest"]);
    $r.addField("ResourceContext",$mod.$rtti["TTMSFNCWebBrowserWebResourceContext"]);
  });
  this.$rtti.$MethodVar("TTMSFNCCustomWebBrowserNavigateComplete",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Params",this.$rtti["TTMSFNCCustomWebBrowserNavigateCompleteParams"],1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCCustomWebBrowserBeforeNavigate",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Params",this.$rtti["TTMSFNCCustomWebBrowserBeforeNavigateParams"],1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCCustomWebBrowserCaptureScreenShot",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AScreenShot",pas["WEBLib.TMSFNCTypes"].$rtti["TTMSFNCBitmap"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCCustomWebBrowserOnExecuteSuccessful",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ASuccessful",rtl.boolean]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCCustomWebBrowserOnGetConsoleMessage",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ALogEntry",this.$rtti["TTMSFNCWebBrowserLogEntry"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCWebBrowserFrameNavigateComplete",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Params",this.$rtti["TTMSFNCCustomWebBrowserFrameNavigateCompleteParams"],1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCWebBrowserBeforeFrameNavigate",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Params",this.$rtti["TTMSFNCCustomWebBrowserBeforeFrameNavigateParams"],1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCWebBrowserNewWindowRequested",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Params",this.$rtti["TTMSFNCWebBrowserNewWindowRequestedParams"],1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCWebBrowserPermissionRequested",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Params",this.$rtti["TTMSFNCWebBrowserPermissionRequestedParams"],1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCWebBrowserProcessFailed",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Params",this.$rtti["TTMSFNCWebBrowserProcessFailedParams"],1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCWebBrowserScriptDialogOpening",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Params",this.$rtti["TTMSFNCWebBrowserScriptDialogOpeningParams"],1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCWebBrowserSourceChanged",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Params",this.$rtti["TTMSFNCWebBrowserSourceChangedParams"],1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCWebBrowserWebMessageReceivedChanged",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Params",this.$rtti["TTMSFNCWebBrowserWebMessageReceivedParams"],1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCWebBrowserWebResourceRequested",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Params",this.$rtti["TTMSFNCWebBrowserWebResourceRequestedParams"],1]]), methodkind: 0});
  rtl.createClass(this,"TTMSFNCCustomWebBrowserSettings",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FOwner = null;
      this.FAllowExternalDrop = false;
      this.FEnableScript = false;
      this.FEnableAcceleratorKeys = false;
      this.FEnableContextMenu = false;
      this.FEnableShowDebugConsole = false;
      this.FUsePopupMenuAsContextMenu = false;
    };
    this.$final = function () {
      this.FOwner = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.GetEnableAcceleratorKeys = function () {
      var Result = false;
      Result = this.FEnableAcceleratorKeys;
      if ((this.FOwner != null) && this.FOwner.FInitialized) Result = this.FOwner.GetEnableAcceleratorKeys();
      return Result;
    };
    this.GetEnableContextMenu = function () {
      var Result = false;
      Result = this.FEnableContextMenu;
      if ((this.FOwner != null) && this.FOwner.FInitialized) Result = this.FOwner.GetEnableContextMenu();
      return Result;
    };
    this.GetEnableScript = function () {
      var Result = false;
      var s = null;
      try {
        if ((this.FOwner != null) && this.FOwner.FInitialized) {
          if (this.FOwner != null) {
            s = rtl.setIntfL(s,this.FOwner.GetSettingsI(),true);
            if (s != null) this.FEnableScript = s.GetEnableScript();
          };
        };
        Result = this.FEnableScript;
      } finally {
        rtl._Release(s);
      };
      return Result;
    };
    this.GetEnableShowDebugConsole = function () {
      var Result = false;
      Result = this.FEnableShowDebugConsole;
      if ((this.FOwner != null) && this.FOwner.FInitialized) Result = this.FOwner.GetEnableShowDebugConsole();
      return Result;
    };
    this.SetEnableAcceleratorKeys = function (Value) {
      this.FEnableAcceleratorKeys = Value;
      if (this.FOwner != null) this.FOwner.SetEnabledAcceleratorKeys(Value);
    };
    this.SetEnableContextMenu = function (Value) {
      this.FEnableContextMenu = Value;
      if (this.FOwner != null) this.FOwner.SetEnableContextMenu(Value);
    };
    this.SetEnableShowDebugConsole = function (Value) {
      this.FEnableShowDebugConsole = Value;
      if (this.FOwner != null) this.FOwner.SetEnableShowDebugConsole(Value);
    };
    this.SetEnableScript = function (Value) {
      var s = null;
      try {
        this.FEnableScript = Value;
        if (this.FOwner != null) {
          s = rtl.setIntfL(s,this.FOwner.GetSettingsI(),true);
          if (s != null) s.SetEnableScript(Value);
        };
      } finally {
        rtl._Release(s);
      };
    };
    this.GetUsePopupMenuAsContextMenu = function () {
      var Result = false;
      Result = this.FUsePopupMenuAsContextMenu;
      return Result;
    };
    this.SetUsePopupMenuAsContextMenu = function (Value) {
      this.FUsePopupMenuAsContextMenu = Value;
    };
    this.GetAllowExternalDrop = function () {
      var Result = false;
      var s = null;
      try {
        Result = this.FAllowExternalDrop;
        if ((this.FOwner != null) && (this.FOwner.FWebBrowser != null)) {
          if (this.FOwner.FWebBrowser.QueryInterface($mod.IID_ITMSFNCCustomWebBrowserSettings,{get: function () {
              return s;
            }, set: function (v) {
              s = v;
            }}) === 0) Result = s.GetAllowExternalDrop();
        };
      } finally {
        rtl._Release(s);
      };
      return Result;
    };
    this.SetAllowExternalDrop = function (Value) {
      var s = null;
      try {
        this.FAllowExternalDrop = Value;
        if ((this.FOwner != null) && (this.FOwner.FWebBrowser != null)) {
          if (this.FOwner.FWebBrowser.QueryInterface($mod.IID_ITMSFNCCustomWebBrowserSettings,{get: function () {
              return s;
            }, set: function (v) {
              s = v;
            }}) === 0) s.SetAllowExternalDrop(this.FAllowExternalDrop);
        };
      } finally {
        rtl._Release(s);
      };
    };
    this.ApplySettings = function () {
      this.SetEnableAcceleratorKeys(this.FEnableAcceleratorKeys);
      this.SetEnableContextMenu(this.FEnableContextMenu);
      this.SetEnableShowDebugConsole(this.FEnableShowDebugConsole);
      this.SetAllowExternalDrop(this.FAllowExternalDrop);
    };
    this.Create$1 = function (AOwner) {
      pas.System.TObject.Create.call(this);
      this.FEnableScript = true;
      this.FEnableContextMenu = true;
      this.FEnableAcceleratorKeys = true;
      this.FEnableShowDebugConsole = true;
      this.FAllowExternalDrop = true;
      this.FOwner = AOwner;
      return this;
    };
    this.Destroy = function () {
      pas.System.TObject.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",$mod.$rtti["TTMSFNCCustomWebBrowser"]]]);
  });
  rtl.createClass(this,"TTMSFNCWebBrowserSettings",this.TTMSFNCCustomWebBrowserSettings,function () {
    var $r = this.$rtti;
    $r.addProperty("EnableContextMenu",3,rtl.boolean,"GetEnableContextMenu","SetEnableContextMenu");
    $r.addProperty("EnableShowDebugConsole",3,rtl.boolean,"GetEnableShowDebugConsole","SetEnableShowDebugConsole");
    $r.addProperty("EnableAcceleratorKeys",3,rtl.boolean,"GetEnableAcceleratorKeys","SetEnableAcceleratorKeys");
    $r.addProperty("AllowExternalDrop",3,rtl.boolean,"GetAllowExternalDrop","SetAllowExternalDrop");
    $r.addProperty("UsePopupMenuAsContextMenu",3,rtl.boolean,"GetUsePopupMenuAsContextMenu","SetUsePopupMenuAsContextMenu");
  });
  rtl.createClass(this,"TTMSFNCCustomWebBrowser",pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.$init.call(this);
      this.FInitializeEventCalled = false;
      this.FDesigntimeEnabled = false;
      this.FCanDestroyDispatch = false;
      this.FSyncValue = "";
      this.FSyncValueExecuted = false;
      this.FThreadDone = false;
      this.FReady = false;
      this.FInitialized = false;
      this.FWebBrowser = null;
      this.FURL = "";
      this.FExternalBrowser = false;
      this.FEnableShowDebugConsole = false;
      this.FEnableAcceleratorKeys = false;
      this.FEnableContextMenu = false;
      this.FOnNavigateComplete = null;
      this.FOnBeforeNavigate = null;
      this.FOnHardwareButtonClicked = null;
      this.FOnInitialized = null;
      this.FOnCloseForm = null;
      this.FOnDocumentComplete = null;
      this.FOnCaptureScreenShot = null;
      this.FSettings = null;
      this.FOnGetContextMenu = null;
      this.FOnGetCookies = null;
      this.FOnGetPrintPDFStream = null;
      this.FOnPrintedToPDF = null;
      this.FOnPrinted = null;
      this.FOnCustomContextMenuItemSelected = null;
      this.FOnGetPopupMenuForContextMenu = null;
      this.FOnDevToolsSubscribedEvent = null;
      this.FOnDevToolsMethodCompleted = null;
      this.FOnGetConsoleMessage = null;
      this.FOnDownloadStarted = null;
      this.FDownloads = null;
      this.FOnDownloadStateChanged = null;
      this.FOnDownloadBytesReceivedChanged = null;
      this.FOnContainsFullScreenElementChanged = null;
      this.FOnDocumentTitleChanged = null;
      this.FOnFrameNavigateComplete = null;
      this.FOnBeforeFrameNavigate = null;
      this.FOnHistoryChanged = null;
      this.FOnNewWindowRequested = null;
      this.FOnPermissionRequested = null;
      this.FOnProcessFailed = null;
      this.FOnScriptDialogOpening = null;
      this.FOnSourceChanged = null;
      this.FOnWebMessageReceived = null;
      this.FOnWebResourceRequested = null;
      this.FOnWindowCloseRequested = null;
      this.FOnZoomFactorChanged = null;
    };
    this.$final = function () {
      rtl.setIntfP(this,"FWebBrowser",null);
      this.FOnNavigateComplete = undefined;
      this.FOnBeforeNavigate = undefined;
      this.FOnHardwareButtonClicked = undefined;
      this.FOnInitialized = undefined;
      this.FOnCloseForm = undefined;
      this.FOnDocumentComplete = undefined;
      this.FOnCaptureScreenShot = undefined;
      this.FSettings = undefined;
      this.FOnGetContextMenu = undefined;
      this.FOnGetCookies = undefined;
      this.FOnGetPrintPDFStream = undefined;
      this.FOnPrintedToPDF = undefined;
      this.FOnPrinted = undefined;
      this.FOnCustomContextMenuItemSelected = undefined;
      this.FOnGetPopupMenuForContextMenu = undefined;
      this.FOnDevToolsSubscribedEvent = undefined;
      this.FOnDevToolsMethodCompleted = undefined;
      this.FOnGetConsoleMessage = undefined;
      this.FOnDownloadStarted = undefined;
      this.FDownloads = undefined;
      this.FOnDownloadStateChanged = undefined;
      this.FOnDownloadBytesReceivedChanged = undefined;
      this.FOnContainsFullScreenElementChanged = undefined;
      this.FOnDocumentTitleChanged = undefined;
      this.FOnFrameNavigateComplete = undefined;
      this.FOnBeforeFrameNavigate = undefined;
      this.FOnHistoryChanged = undefined;
      this.FOnNewWindowRequested = undefined;
      this.FOnPermissionRequested = undefined;
      this.FOnProcessFailed = undefined;
      this.FOnScriptDialogOpening = undefined;
      this.FOnSourceChanged = undefined;
      this.FOnWebMessageReceived = undefined;
      this.FOnWebResourceRequested = undefined;
      this.FOnWindowCloseRequested = undefined;
      this.FOnZoomFactorChanged = undefined;
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.$final.call(this);
    };
    this.GetURL = function () {
      var Result = "";
      if (this.FWebBrowser !== null) {
        Result = this.FWebBrowser.GetURL()}
       else Result = this.FURL;
      return Result;
    };
    this.SetURL = function (Value) {
      this.FURL = Value;
      if (this.FWebBrowser != null) {
        this.FWebBrowser.SetURL(Value);
        if (this.CanCreateBrowser() && (Value !== "")) this.Navigate();
      };
    };
    this.GetExternalBrowser = function () {
      var Result = false;
      if (this.FWebBrowser !== null) {
        Result = this.FWebBrowser.GetExternalBrowser()}
       else Result = this.FExternalBrowser;
      return Result;
    };
    this.SetExternalBrowser = function (Value) {
      this.FExternalBrowser = Value;
      if (this.FWebBrowser != null) this.FWebBrowser.SetExternalBrowser(Value);
    };
    this.GetEnableContextMenu = function () {
      var Result = false;
      if (this.FWebBrowser !== null) {
        Result = this.FWebBrowser.GetEnableContextMenu()}
       else Result = this.FEnableContextMenu;
      return Result;
    };
    this.GetEnableShowDebugConsole = function () {
      var Result = false;
      if (this.FWebBrowser !== null) {
        Result = this.FWebBrowser.GetEnableShowDebugConsole()}
       else Result = this.FEnableShowDebugConsole;
      return Result;
    };
    this.SetEnableContextMenu = function (Value) {
      this.FEnableContextMenu = Value;
      if (this.FSettings != null) this.FSettings.FEnableContextMenu = Value;
      if (this.FWebBrowser != null) this.FWebBrowser.SetEnableContextMenu(Value);
    };
    this.SetEnableShowDebugConsole = function (Value) {
      this.FEnableShowDebugConsole = Value;
      if (this.FWebBrowser != null) this.FWebBrowser.SetEnableShowDebugConsole(Value);
    };
    this.GetCacheFolder = function () {
      var Result = "";
      Result = "";
      if (this.FWebBrowser != null) Result = this.FWebBrowser.GetCacheFolder();
      return Result;
    };
    this.GetCacheFolderName = function () {
      var Result = "";
      Result = "";
      if (this.FWebBrowser != null) Result = this.FWebBrowser.GetCacheFolderName();
      return Result;
    };
    this.GetAutoClearCache = function () {
      var Result = false;
      Result = false;
      if (this.FWebBrowser != null) Result = this.FWebBrowser.GetAutoClearCache();
      return Result;
    };
    this.SetCacheFolder = function (Value) {
      if (this.FWebBrowser != null) this.FWebBrowser.SetCacheFolder(Value);
    };
    this.SetCacheFolderName = function (Value) {
      if (this.FWebBrowser != null) this.FWebBrowser.SetCacheFolderName(Value);
    };
    this.SetAutoClearCache = function (Value) {
      if (this.FWebBrowser != null) this.FWebBrowser.SetAutoClearCache(Value);
    };
    this.SetDesigntimeEnabled = function (Value) {
      this.FDesigntimeEnabled = Value;
      if (this.IsDesigning()) {
        if (this.FDesigntimeEnabled && !this.FInitialized) {
          this.Initialize()}
         else this.DeInitialize();
      };
    };
    this.GetEnableAcceleratorKeys = function () {
      var Result = false;
      if (this.FWebBrowser !== null) {
        Result = this.FWebBrowser.GetEnableAcceleratorKeys()}
       else Result = this.FEnableAcceleratorKeys;
      return Result;
    };
    this.SetEnabledAcceleratorKeys = function (Value) {
      this.FEnableAcceleratorKeys = Value;
      if (this.FWebBrowser != null) this.FWebBrowser.SetEnableAcceleratorKeys(Value);
    };
    this.GetUserAgent = function () {
      var Result = "";
      Result = "";
      if (this.FWebBrowser != null) Result = this.FWebBrowser.GetUserAgent();
      return Result;
    };
    this.SetUserAgent = function (Value) {
      if (this.FWebBrowser != null) this.FWebBrowser.SetUserAgent(Value);
    };
    this.DoExecuteJavaScriptSync = function (AValue) {
      this.FSyncValue = AValue;
      this.FSyncValueExecuted = true;
    };
    this.SetSettings = function (Value) {
      this.FSettings.Assign(Value);
    };
    this.GetSettingsI = function () {
      var Result = null;
      var s = null;
      var $ok = false;
      try {
        Result = rtl.setIntfL(Result,null);
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface($mod.IID_ITMSFNCCustomWebBrowserSettings,{get: function () {
              return s;
            }, set: function (v) {
              s = v;
            }}) === 0) Result = rtl.setIntfL(Result,s);
        };
        $ok = true;
      } finally {
        rtl._Release(s);
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.GetDocURL = function () {
      var Result = "";
      Result = pas["WEBLib.TMSFNCTypes"].TTMSFNCBaseDocURL + "tmsfnccore/components/ttmsfncwebbrowser";
      return Result;
    };
    this.GetVersion = function () {
      var Result = "";
      Result = this.$class.GetVersionNumber(1,1,6,1);
      return Result;
    };
    this.CanCreateBrowser = function () {
      var Result = false;
      Result = true;
      return Result;
    };
    this.CanBeVisible = function () {
      var Result = false;
      Result = true;
      return Result;
    };
    this.CheckIdentifier = function () {
      var Result = false;
      Result = false;
      return Result;
    };
    this.DeleteCookies = function () {
      var WebBrowserService = null;
      try {
        if ($mod.TTMSFNCWebBrowserPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCWebBrowserService),{get: function () {
            return WebBrowserService;
          }, set: function (v) {
            WebBrowserService = rtl.setIntfL(WebBrowserService,v);
          }})) WebBrowserService.DeleteCookies();
      } finally {
        rtl._Release(WebBrowserService);
      };
    };
    this.UpdateElement = function () {
      pas["WEBLib.Controls"].TControl.UpdateElement.call(this);
      if (this.GetElementHandle() != null) this.GetElementHandle().style.setProperty("overflow","auto");
    };
    this.DoEnter = function () {
      pas["WEBLib.Controls"].TControl.DoEnter.call(this);
      if (this.FWebBrowser != null) this.FWebBrowser.SetFocus();
    };
    this.DoExit = function () {
      pas["WEBLib.Controls"].TControl.DoExit.call(this);
      if (this.FWebBrowser != null) this.FWebBrowser.ClearFocus();
    };
    this.ChangeDPIScale = function (M, D) {
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.ChangeDPIScale.apply(this,arguments);
      if (this.FWebBrowser != null) this.FWebBrowser.UpdateBounds();
    };
    this.CreateClasses = function () {
    };
    this.DoDocumentComplete = function () {
      if (this.FOnDocumentComplete != null) this.FOnDocumentComplete(this);
    };
    this.CheckApplicationInitialized = function () {
      this.ExecuteJavaScript("document.readyState",rtl.createCallback(this,"DoCheckReadyState"),false);
    };
    this.DoCheckReadyState = function (AValue) {
      if (pas.SysUtils.LowerCase(pas.SysUtils.StringReplace(AValue,'"',"",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll))) === "complete") {
        if (this.CheckIdentifier()) {
          this.ExecuteJavaScript("window.TMSWEBCoreClientIdentifier",rtl.createCallback(this,"DoCheckIdentifier"),false)}
         else this.FReady = true;
      };
    };
    this.DoCheckIdentifier = function (AValue) {
      if (pas.SysUtils.LowerCase(pas.SysUtils.StringReplace(AValue,'"',"",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll))) === "unknown") this.FReady = true;
    };
    this.DoHardwareButtonClicked = function () {
      if (this.FOnHardwareButtonClicked != null) this.FOnHardwareButtonClicked(this);
    };
    this.DoCloseForm = function () {
      if (this.FOnCloseForm != null) this.FOnCloseForm(this);
    };
    this.DoCaptureScreenShot = function (AScreenShot) {
      if (this.FOnCaptureScreenShot != null) this.FOnCaptureScreenShot(this,AScreenShot);
    };
    this.BeforeNavigate = function (Params) {
      if (this.FOnBeforeNavigate != null) this.FOnBeforeNavigate(this,Params);
    };
    this.NavigateComplete = function (Params) {
      if (this.FOnNavigateComplete != null) this.FOnNavigateComplete(this,Params);
    };
    this.Initialized = function () {
      this.FInitialized = true;
      if (this.FSettings != null) this.FSettings.ApplySettings();
      if ((this.FOnInitialized != null) && !this.FInitializeEventCalled) {
        this.FInitializeEventCalled = true;
        this.FOnInitialized(this);
      };
    };
    this.SetParent = function (Value) {
      if (this.FWebBrowser != null) this.FWebBrowser.BeforeChangeParent();
      pas["WEBLib.Controls"].TControl.SetParent.apply(this,arguments);
      this.Initialize();
      this.BeginUpdate();
      this.EndUpdate();
    };
    this.SetEnabled = function (Value) {
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControlBaseCommon.SetEnabled.apply(this,arguments);
      if (this.FWebBrowser != null) this.FWebBrowser.UpdateEnabled();
    };
    this.DoKeyPressed = function (Key) {
    };
    this.Draw = function (AGraphics, ARect) {
      var s = "";
      var sz = 0.0;
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.Draw.apply(this,arguments);
      if (this.IsDesigning()) {
        AGraphics.FFont.SetSize(12);
        AGraphics.FFont.SetName("Montserrat");
        s = $mod.DESIGNTIMEMESSAGE;
        sz = AGraphics.CalculateTextHeight$1(s);
        AGraphics.DrawText$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(this.ScalePaintValue(5),this.ScalePaintValue(5),this.GetWidth() - this.ScalePaintValue(5),sz + this.ScalePaintValue(5))),s,false,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaLeading,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextTrimming.gttNone,0,-1,-1,true,false,-1,-1);
      };
    };
    this.Loaded = function () {
      pas["WEBLib.Controls"].TCustomControl.Loaded.call(this);
      this.Initialize();
      if (this.FWebBrowser != null) this.FWebBrowser.UpdateBounds();
      if ((this.FOnInitialized != null) && this.FInitialized && !this.FInitializeEventCalled) {
        this.FInitializeEventCalled = true;
        this.FOnInitialized(this);
      };
    };
    this.Navigate = function () {
      this.FReady = false;
      if (this.FWebBrowser != null) this.FWebBrowser.Navigate$1();
    };
    this.Navigate$1 = function (AURL) {
      this.FReady = false;
      if (this.FWebBrowser != null) this.FWebBrowser.Navigate(AURL);
    };
    this.ExecuteJavaScript = function (AScript, ACompleteEvent, AImmediate) {
      if (this.FWebBrowser != null) {
        if (AImmediate && this.FInitialized) {
          this.FWebBrowser.ExecuteJavaScript(AScript,ACompleteEvent,null)}
         else {
          this.FWebBrowser.ExecuteJavaScript(AScript,ACompleteEvent,null);
        };
      };
    };
    this.ExecuteJavaScriptSync = function (AScript) {
      var Result = "";
      Result = "";
      if (this.FWebBrowser != null) {
        this.FSyncValue = "";
        this.FSyncValueExecuted = false;
        this.FWebBrowser.ExecuteJavaScript(AScript,rtl.createCallback(this,"DoExecuteJavaScriptSync"),null);
        Result = this.FSyncValue;
      };
      return Result;
    };
    this.LoadHTML = function (AHTML) {
      if (this.FWebBrowser != null) this.FWebBrowser.LoadHTML(AHTML);
    };
    this.LoadFile = function (AFile) {
      if (this.FWebBrowser != null) this.FWebBrowser.LoadFile(AFile);
    };
    this.Initialize = function () {
      if ((this.IsDesigning() && this.FDesigntimeEnabled) || !this.IsDesigning()) {
        if (this.FWebBrowser != null) this.FWebBrowser.Initialize();
      };
    };
    this.DeInitialize = function () {
      this.FInitialized = false;
      this.FInitializeEventCalled = false;
      if (this.FWebBrowser != null) this.FWebBrowser.DeInitialize();
    };
    this.GoForward = function () {
      if (this.FWebBrowser != null) this.FWebBrowser.GoForward();
    };
    this.GoBack = function () {
      if (this.FWebBrowser != null) this.FWebBrowser.GoBack();
    };
    this.Reload = function () {
      if (this.FWebBrowser != null) this.FWebBrowser.Reload();
    };
    this.StopLoading = function () {
      if (this.FWebBrowser != null) this.FWebBrowser.StopLoading();
    };
    this.AddBridge = function (ABridgeName, ABridgeObject) {
      if (this.FWebBrowser != null) {
        this.FWebBrowser.RemoveBridge(ABridgeName);
        this.FWebBrowser.AddBridge(ABridgeName,ABridgeObject);
      };
    };
    this.RemoveBridge = function (ABridgeName) {
      if (this.FWebBrowser != null) this.FWebBrowser.RemoveBridge(ABridgeName);
    };
    this.CaptureScreenShot = function () {
      if (this.FWebBrowser != null) this.FWebBrowser.CaptureScreenShot();
    };
    this.ShowDebugConsole = function () {
      if (this.FWebBrowser != null) this.FWebBrowser.ShowDebugConsole();
    };
    var LB = "\r";
    this.GetBridgeCommunicationLayer = function (ABridgeName) {
      var Result = "";
      Result = "var send" + ABridgeName + "ObjectMessage = function(parameters) {" + LB + "  var v = parameters;" + LB + '  var event = new CustomEvent("' + ABridgeName + '", {detail: v});' + LB + "  " + this.GetID() + ".dispatchEvent(event);" + LB + "};";
      return Result;
    };
    this.NativeEnvironment = function () {
      var Result = null;
      Result = null;
      if (this.FWebBrowser != null) Result = this.FWebBrowser.NativeEnvironment();
      return Result;
    };
    this.NativeBrowser = function () {
      var Result = null;
      Result = null;
      if (this.FWebBrowser != null) Result = this.FWebBrowser.NativeBrowser();
      return Result;
    };
    this.IsFMXBrowser = function () {
      var Result = false;
      Result = false;
      if (this.FWebBrowser != null) Result = this.FWebBrowser.IsFMXBrowser();
      return Result;
    };
    this.CanGoBack = function () {
      var Result = false;
      Result = false;
      if (this.FWebBrowser != null) Result = this.FWebBrowser.CanGoBack();
      return Result;
    };
    this.CanGoForward = function () {
      var Result = false;
      Result = false;
      if (this.FWebBrowser != null) Result = this.FWebBrowser.CanGoForward();
      return Result;
    };
    this.DoGetContextMenuItemEvent = function (ATarget, AContextMenu) {
      if (this.FOnGetContextMenu != null) this.FOnGetContextMenu(this,$mod.TTMSFNCWebBrowserTargetItem.$clone(ATarget),AContextMenu);
    };
    this.DoGetPopupMenuForContextMenu = function (ATarget, APopUpMenu) {
      if (this.FOnGetPopupMenuForContextMenu != null) this.FOnGetPopupMenuForContextMenu(this,$mod.TTMSFNCWebBrowserTargetItem.$clone(ATarget),APopUpMenu);
    };
    this.DoCustomContextMenuItemSelected = function (ASelectedItem) {
      if (this.FOnCustomContextMenuItemSelected != null) this.FOnCustomContextMenuItemSelected(this,ASelectedItem);
    };
    this.InitialPrintSettings = function () {
      var Result = $mod.TTMSFNCWebBrowserPrintSettings.$new();
      Result.Orientation = $mod.TTMSFNCWebBrowserPrintOrientation.poPortrait;
      Result.ScaleFactor = 0;
      Result.PageWidth = 0;
      Result.PageHeight = 0;
      Result.MarginLeft = 0;
      Result.MarginRight = 0;
      Result.MarginTop = 0;
      Result.MarginBottom = 0;
      Result.PrintBackgrounds = false;
      Result.PrintSelectionOnly = false;
      Result.PrintHeaderAndFooter = false;
      Result.HeaderTitle = "";
      Result.FooterURI = "";
      return Result;
    };
    this.DoGetPrintPDFStream = function (AStream) {
      if (this.FOnGetPrintPDFStream != null) this.FOnGetPrintPDFStream(this,AStream);
    };
    this.DoGetCookies = function (ACookies) {
      if (this.FOnGetCookies != null) this.FOnGetCookies(this,ACookies);
    };
    this.DoPrintedToPDF = function (ASuccesfull) {
      if (this.FOnPrintedToPDF != null) this.FOnPrintedToPDF(this,ASuccesfull);
    };
    this.DoPrinted = function (APrinterStatus) {
      if (this.FOnPrinted != null) this.FOnPrinted(this,APrinterStatus);
    };
    this.OpenTaskManager = function () {
      var iX = null;
      try {
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface($mod.IID_ITMSFNCCustomWebBrowserEx,{get: function () {
              return iX;
            }, set: function (v) {
              iX = v;
            }}) === 0) iX.OpenTaskManagerWindow();
        };
      } finally {
        rtl._Release(iX);
      };
    };
    this.GetCookies = function (AURI) {
      var ic = null;
      try {
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface($mod.IID_ITMSFNCCustomWebBrowserCookies,{get: function () {
              return ic;
            }, set: function (v) {
              ic = v;
            }}) === 0) ic.GetCookies(AURI);
        };
      } finally {
        rtl._Release(ic);
      };
    };
    this.AddCookie = function (ACookie) {
      var ic = null;
      try {
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface($mod.IID_ITMSFNCCustomWebBrowserCookies,{get: function () {
              return ic;
            }, set: function (v) {
              ic = v;
            }}) === 0) ic.AddCookie($mod.TTMSFNCWebBrowserCookie.$clone(ACookie));
        };
      } finally {
        rtl._Release(ic);
      };
    };
    this.DeleteAllCookies = function () {
      var ic = null;
      try {
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface($mod.IID_ITMSFNCCustomWebBrowserCookies,{get: function () {
              return ic;
            }, set: function (v) {
              ic = v;
            }}) === 0) ic.DeleteAllCookies();
        };
      } finally {
        rtl._Release(ic);
      };
    };
    this.DeleteCookie = function (AName, ADomain, APath) {
      var ic = null;
      try {
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface($mod.IID_ITMSFNCCustomWebBrowserCookies,{get: function () {
              return ic;
            }, set: function (v) {
              ic = v;
            }}) === 0) ic.DeleteCookie(AName,ADomain,APath);
        };
      } finally {
        rtl._Release(ic);
      };
    };
    this.ShowPrintUI = function () {
      var ip = null;
      try {
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface($mod.IID_ITMSFNCCustomWebBrowserPrint,{get: function () {
              return ip;
            }, set: function (v) {
              ip = v;
            }}) === 0) {
            ip.ShowPrintUI();
          };
        };
      } finally {
        rtl._Release(ip);
      };
    };
    this.Print = function (APrintSettings) {
      var ip = null;
      try {
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface($mod.IID_ITMSFNCCustomWebBrowserPrint,{get: function () {
              return ip;
            }, set: function (v) {
              ip = v;
            }}) === 0) ip.Print$1($mod.TTMSFNCWebBrowserPrintSettings.$clone(APrintSettings));
        };
      } finally {
        rtl._Release(ip);
      };
    };
    this.Print$1 = function () {
      var ip = null;
      try {
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface($mod.IID_ITMSFNCCustomWebBrowserPrint,{get: function () {
              return ip;
            }, set: function (v) {
              ip = v;
            }}) === 0) ip.Print();
        };
      } finally {
        rtl._Release(ip);
      };
    };
    this.PrintToPDFStream = function (APrintSettings) {
      var ip = null;
      try {
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface($mod.IID_ITMSFNCCustomWebBrowserPrint,{get: function () {
              return ip;
            }, set: function (v) {
              ip = v;
            }}) === 0) ip.PrintToPDFStream($mod.TTMSFNCWebBrowserPrintSettings.$clone(APrintSettings));
        };
      } finally {
        rtl._Release(ip);
      };
    };
    this.PrintToPDFStream$1 = function () {
      var ip = null;
      try {
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface($mod.IID_ITMSFNCCustomWebBrowserPrint,{get: function () {
              return ip;
            }, set: function (v) {
              ip = v;
            }}) === 0) ip.PrintToPDFStream$1();
        };
      } finally {
        rtl._Release(ip);
      };
    };
    this.PrintToPDF = function (AFileName, APrintSettings) {
      var ip = null;
      try {
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface($mod.IID_ITMSFNCCustomWebBrowserPrint,{get: function () {
              return ip;
            }, set: function (v) {
              ip = v;
            }}) === 0) ip.PrintToPDF(AFileName,$mod.TTMSFNCWebBrowserPrintSettings.$clone(APrintSettings));
        };
      } finally {
        rtl._Release(ip);
      };
    };
    this.PrintToPDF$1 = function (AFileName) {
      var ip = null;
      try {
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface($mod.IID_ITMSFNCCustomWebBrowserPrint,{get: function () {
              return ip;
            }, set: function (v) {
              ip = v;
            }}) === 0) ip.PrintToPDF$1(AFileName);
        };
      } finally {
        rtl._Release(ip);
      };
    };
    this.NavigateWithData = function (AURI, AMethod, ABody, AHeaders) {
      var iX = null;
      try {
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface($mod.IID_ITMSFNCCustomWebBrowserEx,{get: function () {
              return iX;
            }, set: function (v) {
              iX = v;
            }}) === 0) iX.NavigateWithData(AURI,AMethod,ABody,AHeaders);
        };
      } finally {
        rtl._Release(iX);
      };
    };
    this.NavigateWithData$1 = function (AURI, AMethod, ABodyStream, AHeaders) {
      var iX = null;
      try {
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface($mod.IID_ITMSFNCCustomWebBrowserEx,{get: function () {
              return iX;
            }, set: function (v) {
              iX = v;
            }}) === 0) iX.NavigateWithData$1(AURI,AMethod,ABodyStream,AHeaders);
        };
      } finally {
        rtl._Release(iX);
      };
    };
    this.ClearCache = function () {
      if (this.FWebBrowser != null) this.FWebBrowser.ClearCache();
    };
    this.SubscribeDevtools = function (AEventName) {
      var ie = null;
      try {
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface($mod.IID_ITMSFNCCustomWebBrowserEdge,{get: function () {
              return ie;
            }, set: function (v) {
              ie = v;
            }}) === 0) ie.SubscribeDevtools(AEventName);
        };
      } finally {
        rtl._Release(ie);
      };
    };
    this.CallDevToolsProtocolMethod = function (AMethodName, AParametersAsJSON) {
      var ie = null;
      try {
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface($mod.IID_ITMSFNCCustomWebBrowserEdge,{get: function () {
              return ie;
            }, set: function (v) {
              ie = v;
            }}) === 0) ie.CallDevToolsProtocolMethod(AMethodName,AParametersAsJSON);
        };
      } finally {
        rtl._Release(ie);
      };
    };
    this.DoDevToolsMethodCompleted = function (AEventName, AJSONResponse) {
      if (this.FOnDevToolsMethodCompleted != null) this.FOnDevToolsMethodCompleted(this,AEventName,AJSONResponse);
    };
    this.DoDevToolsSubscribedEvent = function (AEventName, AJSONResponse) {
      if (this.FOnDevToolsSubscribedEvent != null) this.FOnDevToolsSubscribedEvent(this,AEventName,AJSONResponse);
    };
    this.DoGetConsoleMessage = function (ALogEntry) {
      if (this.FOnGetConsoleMessage != null) this.FOnGetConsoleMessage(this,$mod.TTMSFNCWebBrowserLogEntry.$clone(ALogEntry));
    };
    this.SetupStartDomains = function () {
      var ie = null;
      try {
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface($mod.IID_ITMSFNCCustomWebBrowserEdge,{get: function () {
              return ie;
            }, set: function (v) {
              ie = v;
            }}) === 0) ie.SetupStartDomains();
        };
      } finally {
        rtl._Release(ie);
      };
    };
    this.DoDownloadStarted = function (ADownload, ASilent, APause, AResume, ACancel) {
      if (this.FOnDownloadStarted != null) this.FOnDownloadStarted(this,ADownload,ASilent,APause,AResume,ACancel);
    };
    this.DoDownloadStateChanged = function (ADownload, AState, APause, AResume, ACancel) {
      if (this.FOnDownloadStateChanged != null) this.FOnDownloadStateChanged(this,ADownload,AState,APause,AResume,ACancel);
    };
    this.DoDownloadBytesReceivedChanged = function (ADownload, ABytesReceived, APause, AResume, ACancel) {
      if (this.FOnDownloadBytesReceivedChanged != null) this.FOnDownloadBytesReceivedChanged(this,ADownload,ABytesReceived,APause,AResume,ACancel);
    };
    this.CancelDownload = function (ADownload) {
      var ie = null;
      try {
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface($mod.IID_ITMSFNCCustomWebBrowserEdge,{get: function () {
              return ie;
            }, set: function (v) {
              ie = v;
            }}) === 0) ie.CancelDownload(ADownload);
        };
      } finally {
        rtl._Release(ie);
      };
    };
    this.PauseDownload = function (ADownload) {
      var ie = null;
      try {
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface($mod.IID_ITMSFNCCustomWebBrowserEdge,{get: function () {
              return ie;
            }, set: function (v) {
              ie = v;
            }}) === 0) ie.PauseDownload(ADownload);
        };
      } finally {
        rtl._Release(ie);
      };
    };
    this.ResumeDownload = function (ADownload) {
      var ie = null;
      try {
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface($mod.IID_ITMSFNCCustomWebBrowserEdge,{get: function () {
              return ie;
            }, set: function (v) {
              ie = v;
            }}) === 0) ie.ResumeDownload(ADownload);
        };
      } finally {
        rtl._Release(ie);
      };
    };
    this.GetDownloadInterruptReasonText = function (ADownloadInterruptReason) {
      var Result = "";
      var $tmp = ADownloadInterruptReason;
      if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirNone) {
        Result = "None"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirFileFailed) {
        Result = "File Failed"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirFileAccessDenied) {
        Result = "File Access Denied"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirFileNoSpace) {
        Result = "File No Space"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirFileNameTooLong) {
        Result = "File Name Too Long"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirFileTooLarge) {
        Result = "File Too Large"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirFileMalicious) {
        Result = "File Malicious"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirFileTransientError) {
        Result = "File Transient Error"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirFileBlockedByPolicy) {
        Result = "File Blocked By Policy"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirFileSecurityCheckFailed) {
        Result = "File Security Check Failed"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirFileTooShort) {
        Result = "File Too Short"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirFileHasMismatch) {
        Result = "File Has Mismatch"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirNetworkFailed) {
        Result = "Network Failed"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirNetworkTimeout) {
        Result = "Network Timeout"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirNetworkDisconnected) {
        Result = "Network Disconnected"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirNetworkServerDown) {
        Result = "Network Server Down"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirNetworkInvalidRequest) {
        Result = "Network Invalid Request"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirServerFailed) {
        Result = "Server Failed"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirServerNoRange) {
        Result = "Server No Range"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirServerBadContent) {
        Result = "Server Bad Content"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirServerUnauthorized) {
        Result = "Server Unauthorized"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirServerCertificateProblem) {
        Result = "Server Certificate Problem"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirServerForbidden) {
        Result = "Server Forbidden"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirServerUnexpectedResponse) {
        Result = "Server Unexpected Response"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirServerContentLengthMismatch) {
        Result = "Server Content Length Mismatch"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirServerCrossOriginRedirect) {
        Result = "Server Cross Origin Redirect"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirUserCanceled) {
        Result = "User Canceled"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirUserShutdown) {
        Result = "User Shutdown"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirUserPaused) {
        Result = "User Paused"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadInterruptReason.dirDownloadProcessCrashed) Result = "Download Process Crashed";
      return Result;
    };
    this.GetDownloadStateText = function (ADownloadState) {
      var Result = "";
      var $tmp = ADownloadState;
      if ($tmp === $mod.TTMSFNCWebBrowserDownloadState.dsInProgress) {
        Result = "In Progress"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadState.dsInterrupted) {
        Result = "Interrupted"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadState.dsCompleted) {
        Result = "Completed"}
       else if ($tmp === $mod.TTMSFNCWebBrowserDownloadState.dsCancelled) Result = "Cancelled";
      return Result;
    };
    this.GetDocumentTitle = function () {
      var Result = "";
      var ii = null;
      try {
        Result = "";
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface(rtl.getIntfGUIDR($mod.ITMSFNCCustomWebBrowserInfo),{get: function () {
              return ii;
            }, set: function (v) {
              ii = v;
            }}) === 0) Result = ii.GetDocumentTitle();
        };
      } finally {
        rtl._Release(ii);
      };
      return Result;
    };
    this.GetContainsFullScreenElement = function () {
      var Result = false;
      var ii = null;
      try {
        Result = false;
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface($mod.IID_ITMSFNCCustomWebBrowserEx,{get: function () {
              return ii;
            }, set: function (v) {
              ii = v;
            }}) === 0) Result = ii.GetContainsFullScreenElement();
        };
      } finally {
        rtl._Release(ii);
      };
      return Result;
    };
    this.GetParentWindowHandle = function () {
      var Result = 0;
      var ii = null;
      try {
        Result = 0;
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface(rtl.getIntfGUIDR($mod.ITMSFNCCustomWebBrowserInfo),{get: function () {
              return ii;
            }, set: function (v) {
              ii = v;
            }}) === 0) Result = ii.GetParentWindowHandle();
        };
      } finally {
        rtl._Release(ii);
      };
      return Result;
    };
    this.GetBrowserVersion = function () {
      var Result = "";
      var ii = null;
      try {
        Result = "";
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface(rtl.getIntfGUIDR($mod.ITMSFNCCustomWebBrowserInfo),{get: function () {
              return ii;
            }, set: function (v) {
              ii = v;
            }}) === 0) Result = ii.GetBrowserVersion();
        };
      } finally {
        rtl._Release(ii);
      };
      return Result;
    };
    this.GetUserDataFolder = function () {
      var Result = "";
      var ii = null;
      try {
        Result = "";
        if (this.FWebBrowser != null) {
          if (this.FWebBrowser.QueryInterface(rtl.getIntfGUIDR($mod.ITMSFNCCustomWebBrowserInfo),{get: function () {
              return ii;
            }, set: function (v) {
              ii = v;
            }}) === 0) Result = ii.GetUserDataFolder();
        };
      } finally {
        rtl._Release(ii);
      };
      return Result;
    };
    this.DoContainsFullScreenElementChanged = function () {
      if (this.FOnContainsFullScreenElementChanged != null) this.FOnContainsFullScreenElementChanged(this);
    };
    this.DoDocumentTitleChanged = function () {
      if (this.FOnDocumentTitleChanged != null) this.FOnDocumentTitleChanged(this);
    };
    this.DoBeforeFrameNavigate = function (Params) {
      if (this.FOnBeforeFrameNavigate != null) this.FOnBeforeFrameNavigate(this,Params);
    };
    this.DoFrameNavigationComplete = function (Params) {
      if (this.FOnFrameNavigateComplete != null) this.FOnFrameNavigateComplete(this,Params);
    };
    this.DoHistoryChanged = function () {
      if (this.FOnHistoryChanged != null) this.FOnHistoryChanged(this);
    };
    this.DoNewWindowRequested = function (Params) {
      if (this.FOnNewWindowRequested != null) this.FOnNewWindowRequested(this,Params);
    };
    this.DoPermissionRequested = function (Params) {
      if (this.FOnPermissionRequested != null) this.FOnPermissionRequested(this,Params);
    };
    this.DoProcessFailed = function (Params) {
      if (this.FOnProcessFailed != null) this.FOnProcessFailed(this,Params);
    };
    this.DoScriptDialogOpening = function (Params) {
      if (this.FOnScriptDialogOpening != null) this.FOnScriptDialogOpening(this,Params);
    };
    this.DoSourceChanged = function (Params) {
      if (this.FOnSourceChanged != null) this.FOnSourceChanged(this,Params);
    };
    this.DoWebMessageReceived = function (Params) {
      if (this.FOnWebMessageReceived != null) this.FOnWebMessageReceived(this,Params);
    };
    this.DoWebResourceRequested = function (Params) {
      if (this.FOnWebResourceRequested != null) this.FOnWebResourceRequested(this,Params);
    };
    this.DoWindowCloseRequested = function () {
      if (this.FOnWindowCloseRequested != null) this.FOnWindowCloseRequested(this);
    };
    this.DoZoomFactorChanged = function () {
      if (this.FOnZoomFactorChanged != null) this.FOnZoomFactorChanged(this);
    };
    this.CanRecreate = function () {
      var Result = false;
      Result = true;
      return Result;
    };
    this.CanLoadDefaultHTML = function () {
      var Result = false;
      Result = true;
      return Result;
    };
    this.Create$1 = function (AOwner) {
      var WebBrowserService = null;
      try {
        pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.Create$1.apply(this,arguments);
        this.FSettings = $mod.TTMSFNCWebBrowserSettings.$create("Create$1",[this]);
        this.FCanDestroyDispatch = true;
        this.FDesigntimeEnabled = true;
        this.FDownloads = $mod.TTMSFNCWebBrowserDownloads.$create("Create$3",[this]);
        this.FExternalBrowser = false;
        this.FEnableShowDebugConsole = true;
        this.FEnableContextMenu = true;
        this.FEnableAcceleratorKeys = true;
        this.CreateClasses();
        if (this.CanCreateBrowser()) if ($mod.TTMSFNCWebBrowserPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCWebBrowserService),{get: function () {
            return WebBrowserService;
          }, set: function (v) {
            WebBrowserService = rtl.setIntfL(WebBrowserService,v);
          }})) rtl.setIntfP(this,"FWebBrowser",WebBrowserService.CreateWebBrowser(this),true);
        this.SetWidth(500);
        this.SetHeight(350);
      } finally {
        rtl._Release(WebBrowserService);
      };
      return this;
    };
    this.Destroy = function () {
      var WebBrowserService = null;
      try {
        if (this.CanCreateBrowser() && $mod.TTMSFNCWebBrowserPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCWebBrowserService),{get: function () {
            return WebBrowserService;
          }, set: function (v) {
            WebBrowserService = rtl.setIntfL(WebBrowserService,v);
          }})) WebBrowserService.DestroyWebBrowser(this.FWebBrowser);
        if (this.FDownloads != null) rtl.free(this,"FDownloads");
        if (this.FWebBrowser != null) {
          this.FWebBrowser.DeInitialize();
          rtl.setIntfP(this,"FWebBrowser",null);
        };
        pas.SysUtils.FreeAndNil({p: this, get: function () {
            return this.p.FSettings;
          }, set: function (v) {
            this.p.FSettings = v;
          }});
        pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.Destroy.call(this);
      } finally {
        rtl._Release(WebBrowserService);
      };
    };
    this.UpdateControlAfterResize = function () {
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.UpdateControlAfterResize.call(this);
      if (this.FWebBrowser != null) this.FWebBrowser.UpdateBounds();
    };
    rtl.addIntf(this,pas["WEBLib.TMSFNCGraphics"].ITMSFNCGraphicsExport);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas["WEBLib.TMSFNCStyles"].ITMSFNCAdaptToStyle);
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
  });
  rtl.createClass(this,"TTMSFNCWebBrowserList",pas.Classes.TList,function () {
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
  rtl.createClass(this,"TTMSFNCWebBrowserFactoryService",pas.System.TInterfacedObject,function () {
    this.$init = function () {
      pas.System.TInterfacedObject.$init.call(this);
      this.FWebBrowsers = null;
    };
    this.$final = function () {
      this.FWebBrowsers = undefined;
      pas.System.TInterfacedObject.$final.call(this);
    };
    this.DoRemoveWebBrowser = function (AValue) {
      if ((this.FWebBrowsers !== null) && (AValue !== null)) this.FWebBrowsers.Remove(AValue);
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FWebBrowsers = $mod.TTMSFNCWebBrowserList.$create("Create$1");
      return this;
    };
    this.Destroy = function () {
      pas.SysUtils.FreeAndNil({p: this, get: function () {
          return this.p.FWebBrowsers;
        }, set: function (v) {
          this.p.FWebBrowsers = v;
        }});
      pas.System.TObject.Destroy.call(this);
    };
    this.CreateWebBrowser = function (AValue) {
      var Result = null;
      var $ok = false;
      try {
        Result = rtl.setIntfL(Result,this.DoCreateWebBrowser(AValue),true);
        this.FWebBrowsers.Add(Result);
        $ok = true;
      } finally {
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.DestroyWebBrowser = function (AValue) {
      this.DoRemoveWebBrowser(AValue);
    };
    rtl.addIntf(this,$mod.ITMSFNCWebBrowserService);
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TTMSFNCWebBrowser",this.TTMSFNCCustomWebBrowser,function () {
    this.Navigate = function () {
      $mod.TTMSFNCCustomWebBrowser.Navigate.call(this);
    };
    this.Navigate$1 = function (AURL) {
      $mod.TTMSFNCCustomWebBrowser.Navigate$1.call(this,AURL);
    };
    this.ExecuteJavaScript = function (AScript, ACompleteEvent, AImmediate) {
      $mod.TTMSFNCCustomWebBrowser.ExecuteJavaScript.call(this,AScript,ACompleteEvent,AImmediate);
    };
    this.ExecuteJavaScriptSync = function (AScript) {
      var Result = "";
      Result = $mod.TTMSFNCCustomWebBrowser.ExecuteJavaScriptSync.call(this,AScript);
      return Result;
    };
    this.LoadHTML = function (AHTML) {
      $mod.TTMSFNCCustomWebBrowser.LoadHTML.call(this,AHTML);
    };
    this.LoadFile = function (AFile) {
      $mod.TTMSFNCCustomWebBrowser.LoadFile.call(this,AFile);
    };
    this.Initialize = function () {
      $mod.TTMSFNCCustomWebBrowser.Initialize.call(this);
    };
    this.DeInitialize = function () {
      $mod.TTMSFNCCustomWebBrowser.DeInitialize.call(this);
    };
    this.GoForward = function () {
      $mod.TTMSFNCCustomWebBrowser.GoForward.call(this);
    };
    this.GoBack = function () {
      $mod.TTMSFNCCustomWebBrowser.GoBack.call(this);
    };
    this.Reload = function () {
      $mod.TTMSFNCCustomWebBrowser.Reload.call(this);
    };
    this.StopLoading = function () {
      $mod.TTMSFNCCustomWebBrowser.StopLoading.call(this);
    };
    this.ShowDebugConsole = function () {
      $mod.TTMSFNCCustomWebBrowser.ShowDebugConsole.call(this);
    };
    this.AddBridge = function (ABridgeName, ABridgeObject) {
      $mod.TTMSFNCCustomWebBrowser.AddBridge.call(this,ABridgeName,ABridgeObject);
    };
    this.RemoveBridge = function (ABridgeName) {
      $mod.TTMSFNCCustomWebBrowser.RemoveBridge.call(this,ABridgeName);
    };
    this.CaptureScreenShot = function () {
      $mod.TTMSFNCCustomWebBrowser.CaptureScreenShot.call(this);
    };
    this.GetBridgeCommunicationLayer = function (ABridgeName) {
      var Result = "";
      Result = $mod.TTMSFNCCustomWebBrowser.GetBridgeCommunicationLayer.call(this,ABridgeName);
      return Result;
    };
    this.NativeEnvironment = function () {
      var Result = null;
      Result = $mod.TTMSFNCCustomWebBrowser.NativeEnvironment.call(this);
      return Result;
    };
    this.NativeBrowser = function () {
      var Result = null;
      Result = $mod.TTMSFNCCustomWebBrowser.NativeBrowser.call(this);
      return Result;
    };
    this.IsFMXBrowser = function () {
      var Result = false;
      Result = $mod.TTMSFNCCustomWebBrowser.IsFMXBrowser.call(this);
      return Result;
    };
    this.CanGoBack = function () {
      var Result = false;
      Result = $mod.TTMSFNCCustomWebBrowser.CanGoBack.call(this);
      return Result;
    };
    this.CanGoForward = function () {
      var Result = false;
      Result = $mod.TTMSFNCCustomWebBrowser.CanGoForward.call(this);
      return Result;
    };
    this.ClearCache = function () {
      $mod.TTMSFNCCustomWebBrowser.ClearCache.call(this);
    };
    rtl.addIntf(this,pas["WEBLib.TMSFNCGraphics"].ITMSFNCGraphicsExport);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas["WEBLib.TMSFNCStyles"].ITMSFNCAdaptToStyle);
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("OnInitialized",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnInitialized","FOnInitialized");
    $r.addProperty("URL",3,rtl.string,"GetURL","SetURL");
    $r.addProperty("OnBeforeNavigate",0,$mod.$rtti["TTMSFNCCustomWebBrowserBeforeNavigate"],"FOnBeforeNavigate","FOnBeforeNavigate");
    $r.addProperty("OnNavigateComplete",0,$mod.$rtti["TTMSFNCCustomWebBrowserNavigateComplete"],"FOnNavigateComplete","FOnNavigateComplete");
    $r.addProperty("OnHardwareButtonClicked",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnHardwareButtonClicked","FOnHardwareButtonClicked");
    $r.addProperty("OnCaptureScreenShot",0,$mod.$rtti["TTMSFNCCustomWebBrowserCaptureScreenShot"],"FOnCaptureScreenShot","FOnCaptureScreenShot");
    $r.addProperty("OnDocumentComplete",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDocumentComplete","FOnDocumentComplete");
    $r.addProperty("Version",1,rtl.string,"GetVersion","");
    $r.addProperty("DesigntimeEnabled",2,rtl.boolean,"FDesigntimeEnabled","SetDesigntimeEnabled",{Default: true});
    $r.attr = [pas.Classes.ComponentPlatformsAttribute,"Create$1",[0]];
  });
  this.$rtti.$Class("TTMSFNCWebBrowserPopup");
  rtl.createClass(this,"TTMSFNCWebBrowserPopupForm",pas["WEBLib.Forms"].TCustomForm,function () {
    this.$init = function () {
      pas["WEBLib.Forms"].TCustomForm.$init.call(this);
      this.FWebBrowserPopup = null;
    };
    this.$final = function () {
      this.FWebBrowserPopup = undefined;
      pas["WEBLib.Forms"].TCustomForm.$final.call(this);
    };
    this.UpdateBackGround = function () {
      var wb = null;
      if (this.FWebBrowserPopup != null) {
        wb = this.FWebBrowserPopup.FWebBrowser;
        if (wb != null) {
          if (this.FWebBrowserPopup.FFullScreen) {
            wb.SetBounds(0,0,this.GetWidth(),this.GetHeight());
          } else {
            var $tmp = this.FPosition;
            if (($tmp === pas["WEBLib.Forms"].TPosition.poScreenCenter) || ($tmp === pas["WEBLib.Forms"].TPosition.poDesktopCenter) || ($tmp === pas["WEBLib.Forms"].TPosition.poMainFormCenter) || ($tmp === pas["WEBLib.Forms"].TPosition.poOwnerFormCenter)) {
              wb.SetBounds(rtl.trunc((this.GetWidth() - this.FWebBrowserPopup.FWidth) / 2),rtl.trunc((this.GetHeight() - this.FWebBrowserPopup.FHeight) / 2),this.FWebBrowserPopup.FWidth,this.FWebBrowserPopup.FHeight);
            } else {
              wb.SetBounds(this.FWebBrowserPopup.FL,this.FWebBrowserPopup.FT,this.FWebBrowserPopup.FWidth,this.FWebBrowserPopup.FHeight);
            };
          };
        };
      };
    };
    this.SetBounds = function (ALeft, ATop, AWidth, AHeight) {
      pas["WEBLib.Forms"].TCustomForm.SetBounds.apply(this,arguments);
      this.UpdateBackGround();
    };
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.$rtti.$ClassRef("TTMSFNCCustomWebBrowserClass",{instancetype: this.$rtti["TTMSFNCCustomWebBrowser"]});
  rtl.createClass(this,"TTMSFNCWebBrowserPopup",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FModal = false;
      this.FWebBrowserForm = null;
      this.FWebBrowser = null;
      this.FOnNavigateComplete = null;
      this.FOnBeforeNavigate = null;
      this.FURL = "";
      this.FPosition = 0;
      this.FWidth = 0;
      this.FHeight = 0;
      this.FT = 0;
      this.FL = 0;
      this.FFullScreen = false;
      this.FCloseButton = false;
      this.FOnClose = null;
      this.FCloseButtonText = "";
      this.FExternalBrowser = false;
    };
    this.$final = function () {
      this.FWebBrowserForm = undefined;
      this.FWebBrowser = undefined;
      this.FOnNavigateComplete = undefined;
      this.FOnBeforeNavigate = undefined;
      this.FOnClose = undefined;
      pas.Classes.TComponent.$final.call(this);
    };
    this.ButtonClose = function (Sender) {
      this.Close(1);
    };
    this.FormClose = function (Sender, Action) {
      if (this.FModal) {
        Action.set(pas["WEBLib.Forms"].TCloseAction.caFree);
      } else Action.set(pas["WEBLib.Forms"].TCloseAction.caFree);
      this.FWebBrowserForm = null;
      this.FWebBrowser = null;
      if (this.FOnClose != null) this.FOnClose(this);
    };
    this.CloseForm = function (Sender) {
      this.Close(1);
    };
    this.DoBeforeNavigate = function (Sender, Params) {
      if (this.FOnBeforeNavigate != null) this.FOnBeforeNavigate(this,Params);
    };
    this.DoNavigateComplete = function (Sender, Params) {
      if (this.FOnNavigateComplete != null) this.FOnNavigateComplete(this,Params);
    };
    this.InitializeWebBrowser = function (AWebBrowser) {
    };
    this.GetWebBrowserClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCCustomWebBrowser;
      return Result;
    };
    this.Create$1 = function (AOwner) {
      pas.Classes.TComponent.Create$1.apply(this,arguments);
      this.FPosition = pas["WEBLib.Forms"].TPosition.poScreenCenter;
      this.FFullScreen = false;
      this.FWidth = 640;
      this.FHeight = 480;
      this.FL = 0;
      this.FT = 0;
      this.FExternalBrowser = false;
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) this.FCloseButtonText = "Close";
      return this;
    };
    this.Destroy = function () {
      if (this.FWebBrowser != null) {
        rtl.free(this,"FWebBrowser");
        this.FWebBrowser = null;
      };
      pas.Classes.TComponent.Destroy.call(this);
    };
    this.Open = function (AModal) {
      var Result = 0;
      var b = null;
      try {
        this.FModal = AModal;
        this.FWebBrowserForm = $mod.TTMSFNCWebBrowserPopupForm.$create("CreateNew",[pas["WEBLib.Forms"].Application,0]);
        this.FWebBrowserForm.FWebBrowserPopup = this;
        this.FWebBrowserForm.FOnClose = rtl.createCallback(this,"FormClose");
        this.FWebBrowserForm.SetPosition(this.FPosition);
        this.FWebBrowserForm.SetLeft(this.FL);
        this.FWebBrowserForm.SetTop(this.FT);
        this.FWebBrowserForm.SetWidth(this.FWidth);
        this.FWebBrowserForm.SetHeight(this.FHeight);
        this.FWebBrowser = this.GetWebBrowserClass().$create("Create$1",[this]);
        this.FWebBrowser.SetExternalBrowser(this.FExternalBrowser);
        this.FWebBrowser.FOnCloseForm = rtl.createCallback(this,"CloseForm");
        this.FWebBrowser.FOnBeforeNavigate = rtl.createCallback(this,"DoBeforeNavigate");
        this.FWebBrowser.FOnNavigateComplete = rtl.createCallback(this,"DoNavigateComplete");
        this.InitializeWebBrowser(this.FWebBrowser);
        this.FWebBrowser.SetURL(this.FURL);
        this.FWebBrowser.SetControlAlignment(pas["WEBLib.TMSFNCCustomControl"].TTMSFNCControlAlignment.caClient);
        this.FWebBrowser.SetParent(this.FWebBrowserForm);
        this.FWebBrowser.SetLeft(this.FL);
        this.FWebBrowser.SetTop(this.FT);
        this.FWebBrowser.SetWidth(this.FWidth);
        this.FWebBrowser.SetHeight(this.FHeight);
        if (this.FCloseButton) {
          b = pas["WEBLib.StdCtrls"].TButton.$create("Create$1",[this.FWebBrowserForm]);
          b.SetParent(this.FWebBrowserForm);
          b.SetCaption(this.FCloseButtonText);
          b.FOnClick = rtl.createCallback(this,"ButtonClose");
          b.SetAlign(pas["WEBLib.Controls"].TAlign.alTop);
        };
        if (this.FExternalBrowser) {
          if (this.FWebBrowser != null) {
            rtl.free(this,"FWebBrowser");
            this.FWebBrowser = null;
          };
          if (this.FWebBrowserForm != null) {
            rtl.free(this,"FWebBrowserForm");
            this.FWebBrowserForm = null;
          };
          Result = 1;
          return Result;
        };
        if (this.FModal) {
          Result = this.FWebBrowserForm.ShowModal();
        } else {
          this.FWebBrowserForm.Show$1();
          Result = 1;
        };
      } finally {
      };
      return Result;
    };
    this.Open$1 = function (AURL, AModal) {
      var Result = 0;
      this.FURL = AURL;
      Result = this.Open(AModal);
      return Result;
    };
    this.Close = function (AModalResult) {
      if (this.FWebBrowserForm != null) {
        if (this.FModal) {
          this.FWebBrowserForm.SetModalResult(AModalResult)}
         else {
          if (this.FWebBrowserForm != null) this.FWebBrowserForm.Close();
        };
      };
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
    $r.addProperty("OnBeforeNavigate",0,$mod.$rtti["TTMSFNCCustomWebBrowserBeforeNavigate"],"FOnBeforeNavigate","FOnBeforeNavigate");
    $r.addProperty("OnNavigateComplete",0,$mod.$rtti["TTMSFNCCustomWebBrowserNavigateComplete"],"FOnNavigateComplete","FOnNavigateComplete");
    $r.addProperty("URL",0,rtl.string,"FURL","FURL");
    $r.addProperty("Position",0,pas["WEBLib.Forms"].$rtti["TPosition"],"FPosition","FPosition",{Default: pas["WEBLib.Forms"].TPosition.poScreenCenter});
    $r.addProperty("FullScreen",0,rtl.boolean,"FFullScreen","FFullScreen",{Default: false});
    $r.addProperty("Width",0,rtl.longint,"FWidth","FWidth",{Default: 640});
    $r.addProperty("Height",0,rtl.longint,"FHeight","FHeight",{Default: 480});
    $r.addProperty("Left",0,rtl.longint,"FL","FL",{Default: 0});
    $r.addProperty("Top",0,rtl.longint,"FT","FT",{Default: 0});
    $r.addProperty("CloseButton",0,rtl.boolean,"FCloseButton","FCloseButton",{Default: false});
    $r.addProperty("CloseButtonText",0,rtl.string,"FCloseButtonText","FCloseButtonText");
    $r.addProperty("OnClose",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClose","FOnClose");
    $r.attr = [pas.Classes.ComponentPlatformsAttribute,"Create$1",[0]];
  });
  rtl.createClass(this,"TTMSFNCWebBrowserPlatformServicesService",pas.System.TObject,function () {
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
  rtl.createClass(this,"TTMSFNCWebBrowserPlatformServicesList",pas.contnrs.TObjectList,function () {
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
  rtl.createClass(this,"TTMSFNCWebBrowserPlatformServices",pas.System.TObject,function () {
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
      pas.SysUtils.FreeAndNil({p: $mod.TTMSFNCWebBrowserPlatformServices, get: function () {
          return this.p.FCurrent;
        }, set: function (v) {
          this.p.FCurrent = v;
        }});
      $mod.TTMSFNCWebBrowserPlatformServices.FCurrentReleased = true;
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FServicesList = $mod.TTMSFNCWebBrowserPlatformServicesList.$create("Create$2");
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
            }})) this.FServicesList.Add$1($mod.TTMSFNCWebBrowserPlatformServicesService.$create("Create$1",[pas.SysUtils.GUIDToString(AServiceGUID),AService]));
        };
      } finally {
        rtl._Release(LService);
      };
    };
    this.RemovePlatformService = function (AServiceGUID) {
      this.FServicesList.RemoveByGUID(pas.SysUtils.GUIDToString(AServiceGUID));
    };
    this.Count = function () {
      var Result = 0;
      Result = this.FServicesList.GetCount();
      return Result;
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
      if ((this.FCurrent === null) && !this.FCurrentReleased) $mod.TTMSFNCWebBrowserPlatformServices.FCurrent = $mod.TTMSFNCWebBrowserPlatformServices.$create("Create$1");
      Result = this.FCurrent;
      return Result;
    };
  });
  $mod.$implcode = function () {
    $impl.FTrial = 0;
    $impl.Hiword = function (L) {
      var Result = 0;
      Result = rtl.lw(L >>> 16);
      return Result;
    };
    $impl.LoWord = function (L) {
      var Result = 0;
      Result = L & 0xFFFF;
      return Result;
    };
    $impl.MakeWord = function (b1, b2) {
      var Result = 0;
      Result = b1 | (b2 << 8);
      return Result;
    };
    $impl.MakeLong = function (i1, i2) {
      var Result = 0;
      Result = i1 | (i2 << 16);
      return Result;
    };
  };
  $mod.$init = function () {
    $mod.TTMSFNCWebBrowserPlatformServices.FCurrentReleased = false;
    pas["WEBLib.TMSFNCWebBrowser.WEB"].RegisterWebBrowserService();
  };
},["SysUtils","WEBLib.TMSFNCGraphicsTypes","WEBLib.TMSFNCWebBrowser.WEB"]);
//# sourceMappingURL=WEBLib.TMSFNCWebBrowser.js.map
