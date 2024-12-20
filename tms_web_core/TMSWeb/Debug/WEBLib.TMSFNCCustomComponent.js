rtl.module("WEBLib.TMSFNCCustomComponent",["System","Classes","WEBLib.Controls","WEBLib.TMSFNCTypes","WEBLib.TMSFNCPersistence","TypInfo"],function () {
  "use strict";
  var $mod = this;
  this.$rtti.$MethodVar("TTMSFNCCustomComponentCanSavePropertyEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AObject",pas.System.$rtti["TObject"]],["APropertyName",rtl.string],["APropertyType",pas.System.$rtti["TTypeKind"]],["ACanSave",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCCustomComponentCanLoadPropertyEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AObject",pas.System.$rtti["TObject"]],["APropertyName",rtl.string],["APropertyType",pas.System.$rtti["TTypeKind"]],["ACanLoad",rtl.boolean,1]]), methodkind: 0});
  rtl.createClass(this,"TTMSFNCCustomComponent",pas["WEBLib.Controls"].TCustomControl,function () {
    this.FBlockPersistenceInterface = false;
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomControl.$init.call(this);
      this.FStored = false;
      this.FDesigntimeFormPixelsPerInch = 0;
      this.FAppearancePersisting = false;
      this.FAdaptToStyle = false;
      this.FOnCanSaveProperty = null;
      this.FOnCanLoadProperty = null;
    };
    this.$final = function () {
      this.FOnCanSaveProperty = undefined;
      this.FOnCanLoadProperty = undefined;
      pas["WEBLib.Controls"].TCustomControl.$final.call(this);
    };
    this.GetVersionNumber = function (AMaj, AMin, ARel, ABld) {
      var Result = "";
      Result = "";
      return Result;
    };
    this.DoCanSaveProperty = function (AObject, APropertyName, APropertyType, ACanSave) {
      if (this.FOnCanSaveProperty != null) this.FOnCanSaveProperty(this,AObject,APropertyName,APropertyType,ACanSave);
    };
    this.DoCanLoadProperty = function (AObject, APropertyName, APropertyType, ACanLoad) {
      if (this.FOnCanLoadProperty != null) this.FOnCanLoadProperty(this,AObject,APropertyName,APropertyType,ACanLoad);
    };
    this.IsAppearanceProperty = function (AObject, APropertyName, APropertyType) {
      var Result = false;
      Result = false;
      return Result;
    };
    this.CanSaveProperty = function (AObject, APropertyName, APropertyType) {
      var Result = false;
      if ((AObject === this) && !this.FBlockPersistenceInterface) {
        Result = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.IndexOfTextInArray(APropertyName,pas["WEBLib.TMSFNCPersistence"].ExcludePropertyList) === -1}
       else Result = true;
      if (this.FAppearancePersisting) Result = Result && this.IsAppearanceProperty(AObject,APropertyName,APropertyType);
      this.DoCanSaveProperty(AObject,APropertyName,APropertyType,{get: function () {
          return Result;
        }, set: function (v) {
          Result = v;
        }});
      return Result;
    };
    this.CanLoadProperty = function (AObject, APropertyName, APropertyType) {
      var Result = false;
      if ((AObject === this) && !this.FBlockPersistenceInterface) {
        Result = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.IndexOfTextInArray(APropertyName,pas["WEBLib.TMSFNCPersistence"].ExcludePropertyList) === -1}
       else Result = true;
      this.DoCanLoadProperty(AObject,APropertyName,APropertyType,{get: function () {
          return Result;
        }, set: function (v) {
          Result = v;
        }});
      return Result;
    };
    this.GetVersion = function () {
      var Result = "";
      Result = "";
      return Result;
    };
    this.GetDocURL = function () {
      var Result = "";
      Result = pas["WEBLib.TMSFNCTypes"].TTMSFNCBaseDocURL;
      return Result;
    };
    this.GetTipsURL = function () {
      var Result = "";
      Result = pas["WEBLib.TMSFNCTypes"].TTMSFNCBaseTipsURL;
      return Result;
    };
    this.GetInstance = function () {
      var Result = 0;
      Result = pas["WEBLib.TMSFNCTypes"].HInstance();
      return Result;
    };
    this.ChangeDPIScale = function (M, D) {
    };
    this.SetAdaptToStyle = function (Value) {
      this.FAdaptToStyle = Value;
    };
    this.Paint = function () {
      var pic = null;
      var g = null;
      var r = null;
      var rc = null;
      pas["WEBLib.Controls"].TCustomControl.Paint.call(this);
      r = null;
      pic = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
      g = pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.$create("Create$1",[this.GetCanvas(),false]);
      try {
        g.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
        g.FStroke.SetColor(0);
        g.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,this.GetWidth(),this.GetHeight())),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
        rc = pas["WEBLib.DesignIntf"].GetRegisteredComponent(this.$classname);
        if (rc != null) pic.LoadFromResource(rc.FIcon);
        g.DrawBitmap$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(2,2,this.GetWidth() - 2,this.GetHeight() - 2)),pic,true,true,true,false);
      } finally {
        if (r != null) r = rtl.freeLoc(r);
        pic = rtl.freeLoc(pic);
        g = rtl.freeLoc(g);
      };
    };
    this.Loaded = function () {
      pas["WEBLib.Controls"].TCustomControl.Loaded.call(this);
      if (!(pas.Classes.TComponentStateItem.csDesigning in this.FComponentState)) this.SetVisible(false);
    };
    this.RegisterRuntimeClasses = function () {
    };
    this.Create$1 = function (AOwner) {
      var ppi = 0;
      pas["WEBLib.Controls"].TControl.Create$1.apply(this,arguments);
      ppi = 96;
      this.FDesigntimeFormPixelsPerInch = ppi;
      this.SetWidth(26);
      this.SetHeight(26);
      if (!this.IsDesigning()) this.RegisterRuntimeClasses();
      return this;
    };
    this.SetBounds = function (X, Y, AWidth, AHeight) {
      var sc = 0.0;
      sc = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetDPIScale(this,-1);
      pas["WEBLib.Controls"].TControl.SetBounds.call(this,X,Y,Math.round(26 * sc),Math.round(26 * sc));
    };
    this.BeginUpdate = function () {
      pas["WEBLib.Controls"].TControl.BeginUpdate.call(this);
    };
    this.EndUpdate = function () {
      pas["WEBLib.Controls"].TCustomControl.EndUpdate.call(this);
    };
    this.IsDesignTime = function () {
      var Result = false;
      Result = false;
      if (this.FOwner != null) Result = this.IsDesigning() && !((pas.Classes.TComponentStateItem.csReading in this.FOwner.FComponentState) || (pas.Classes.TComponentStateItem.csLoading in this.FOwner.FComponentState));
      return Result;
    };
    this.IsLoading = function () {
      var Result = false;
      Result = pas.Classes.TComponentStateItem.csLoading in this.FOwner.FComponentState;
      return Result;
    };
    this.IsReading = function () {
      var Result = false;
      Result = pas.Classes.TComponentStateItem.csReading in this.FOwner.FComponentState;
      return Result;
    };
    this.IsDesigning = function () {
      var Result = false;
      Result = (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) || (pas["WEBLib.Forms"].VSIDE != null);
      return Result;
    };
    this.IsDestroying = function () {
      var Result = false;
      Result = pas.Classes.TComponentStateItem.csDestroying in this.FComponentState;
      return Result;
    };
    this.SaveSettingsToFile = function (AFileName, AAppearanceOnly) {
      this.FAppearancePersisting = AAppearanceOnly;
      pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.SaveSettingsToFile(this,AFileName);
      this.FAppearancePersisting = false;
    };
    this.LoadSettingsFromFile = function (AFileName) {
      pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.LoadSettingsFromFile(this,AFileName);
    };
    this.SaveSettingsToStream = function (AStream, AAppearanceOnly) {
      this.FAppearancePersisting = AAppearanceOnly;
      pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.SaveSettingsToStream(this,AStream);
      this.FAppearancePersisting = false;
    };
    this.LoadSettingsFromStream = function (AStream) {
      pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.LoadSettingsFromStream(this,AStream);
    };
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("Width",3,rtl.longint,"GetWidth","SetWidth");
    $r.addProperty("Height",3,rtl.longint,"GetHeight","SetHeight");
    $r.addProperty("OnCanSaveProperty",0,$mod.$rtti["TTMSFNCCustomComponentCanSavePropertyEvent"],"FOnCanSaveProperty","FOnCanSaveProperty");
    $r.addProperty("OnCanLoadProperty",0,$mod.$rtti["TTMSFNCCustomComponentCanLoadPropertyEvent"],"FOnCanLoadProperty","FOnCanLoadProperty");
  });
  this.$rtti.$ClassRef("TTMSFNCCustomComponentClass",{instancetype: this.$rtti["TTMSFNCCustomComponent"]});
},["WEBLib.TMSFNCUtils","WEBLib.Forms","SysUtils","WEBLib.TMSFNCGraphics","WEBLib.Graphics","WEBLib.TMSFNCGraphicsTypes","Types","WEBLib.DesignIntf"]);
//# sourceMappingURL=WEBLib.TMSFNCCustomComponent.js.map
