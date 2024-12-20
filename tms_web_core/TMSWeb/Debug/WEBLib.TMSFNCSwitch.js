rtl.module("WEBLib.TMSFNCSwitch",["System","Classes","Types","WEBLib.ExtCtrls","WEBLib.Controls","WEBLib.TMSFNCCustomControl","WEBLib.TMSFNCGraphics","WEBLib.TMSFNCGraphicsTypes","WEBLib.TMSFNCTypes"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.MAJ_VER = 1;
  this.MIN_VER = 0;
  this.REL_VER = 3;
  this.BLD_VER = 0;
  this.TTMSFNCCustomSwitchOrientation = {"0": "soHorizontal", soHorizontal: 0, "1": "soVertical", soVertical: 1};
  this.$rtti.$Enum("TTMSFNCCustomSwitchOrientation",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TTMSFNCCustomSwitchOrientation});
  this.TTMSFNCCustomSwitchState = {"0": "ssOff", ssOff: 0, "1": "ssOn", ssOn: 1};
  this.$rtti.$Enum("TTMSFNCCustomSwitchState",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TTMSFNCCustomSwitchState});
  this.TTMSFNCCustomSwitchLayout = {"0": "sloSimple", sloSimple: 0, "1": "sloExtended", sloExtended: 1};
  this.$rtti.$Enum("TTMSFNCCustomSwitchLayout",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TTMSFNCCustomSwitchLayout});
  rtl.createClass(this,"TTMSFNCCustomSwitchAppearanceOff",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FOnChange = null;
      this.FFill = null;
      this.FStroke = null;
      this.FText = "";
      this.FFont = null;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      this.FFill = undefined;
      this.FStroke = undefined;
      this.FFont = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetFill = function (Value) {
      this.FFill.Assign(Value);
    };
    this.SetStroke = function (Value) {
      this.FStroke.Assign(Value);
    };
    this.SetText = function (Value) {
      if (this.FText !== Value) {
        this.FText = Value;
        this.Changed();
      };
    };
    this.IsTextStored = function () {
      var Result = false;
      Result = this.FText !== "Off";
      return Result;
    };
    this.SetFont = function (Value) {
      this.FFont.AssignSource(Value);
    };
    this.Changed = function () {
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.FillChanged = function (Sender) {
      this.Changed();
    };
    this.StrokeChanged = function (Sender) {
      this.Changed();
    };
    this.FontChanged = function (Sender) {
      this.Changed();
    };
    this.Create$1 = function () {
      this.FFill = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFill.$create("Create$1",[pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid,16777215,8421504,-1,-1]);
      this.FFill.FOnChanged = rtl.createCallback(this,"FillChanged");
      this.FStroke = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStroke.$create("Create$1",[pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid,12632256]);
      this.FStroke.FOnChanged = rtl.createCallback(this,"StrokeChanged");
      this.FFont = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFont.$create("Create$2");
      this.FFont.FOnChanged = rtl.createCallback(this,"FontChanged");
      this.FText = "Off";
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FFill");
      rtl.free(this,"FStroke");
      rtl.free(this,"FFont");
      pas.System.TObject.Destroy.call(this);
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCCustomSwitchAppearanceOff.isPrototypeOf(Source)) {
        this.FFill.Assign(rtl.as(Source,$mod.TTMSFNCCustomSwitchAppearanceOff).FFill);
        this.FStroke.Assign(rtl.as(Source,$mod.TTMSFNCCustomSwitchAppearanceOff).FStroke);
        this.FFont.AssignSource(rtl.as(Source,$mod.TTMSFNCCustomSwitchAppearanceOff).FFont);
        this.FText = rtl.as(Source,$mod.TTMSFNCCustomSwitchAppearanceOff).FText;
      } else pas.Classes.TPersistent.Assign.apply(this,arguments);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addProperty("Fill",2,pas["WEBLib.TMSFNCGraphicsTypes"].$rtti["TTMSFNCGraphicsFill"],"FFill","SetFill");
    $r.addProperty("Stroke",2,pas["WEBLib.TMSFNCGraphicsTypes"].$rtti["TTMSFNCGraphicsStroke"],"FStroke","SetStroke");
    $r.addProperty("Font",2,pas["WEBLib.TMSFNCGraphicsTypes"].$rtti["TTMSFNCGraphicsFont"],"FFont","SetFont");
    $r.addProperty("Text",14,rtl.string,"FText","SetText",{stored: "IsTextStored"});
    $r.addProperty("OnChange",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnChange","FOnChange");
  });
  rtl.createClass(this,"TTMSFNCCustomSwitchAppearanceOn",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FOnChange = null;
      this.FFill = null;
      this.FStroke = null;
      this.FText = "";
      this.FFont = null;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      this.FFill = undefined;
      this.FStroke = undefined;
      this.FFont = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetFill = function (Value) {
      this.FFill.Assign(Value);
    };
    this.SetStroke = function (Value) {
      this.FStroke.Assign(Value);
    };
    this.SetText = function (Value) {
      if (this.FText !== Value) {
        this.FText = Value;
        this.Changed();
      };
    };
    this.IsTextStored = function () {
      var Result = false;
      Result = this.FText !== "On";
      return Result;
    };
    this.SetFont = function (Value) {
      this.FFont.AssignSource(Value);
    };
    this.Changed = function () {
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.FillChanged = function (Sender) {
      this.Changed();
    };
    this.StrokeChanged = function (Sender) {
      this.Changed();
    };
    this.FontChanged = function (Sender) {
      this.Changed();
    };
    this.Create$1 = function () {
      this.FFill = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFill.$create("Create$1",[pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid,16748574,8421504,-1,-1]);
      this.FFill.FOnChanged = rtl.createCallback(this,"FillChanged");
      this.FStroke = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStroke.$create("Create$1",[pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid,12632256]);
      this.FStroke.FOnChanged = rtl.createCallback(this,"StrokeChanged");
      this.FFont = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFont.$create("Create$2");
      this.FFont.FOnChanged = rtl.createCallback(this,"FontChanged");
      this.FText = "On";
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FFill");
      rtl.free(this,"FStroke");
      rtl.free(this,"FFont");
      pas.System.TObject.Destroy.call(this);
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCCustomSwitchAppearanceOn.isPrototypeOf(Source)) {
        this.FFill.Assign(rtl.as(Source,$mod.TTMSFNCCustomSwitchAppearanceOn).FFill);
        this.FStroke.Assign(rtl.as(Source,$mod.TTMSFNCCustomSwitchAppearanceOn).FStroke);
        this.FFont.AssignSource(rtl.as(Source,$mod.TTMSFNCCustomSwitchAppearanceOn).FFont);
        this.FText = rtl.as(Source,$mod.TTMSFNCCustomSwitchAppearanceOn).FText;
      } else pas.Classes.TPersistent.Assign.apply(this,arguments);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addProperty("Fill",2,pas["WEBLib.TMSFNCGraphicsTypes"].$rtti["TTMSFNCGraphicsFill"],"FFill","SetFill");
    $r.addProperty("Stroke",2,pas["WEBLib.TMSFNCGraphicsTypes"].$rtti["TTMSFNCGraphicsStroke"],"FStroke","SetStroke");
    $r.addProperty("Font",2,pas["WEBLib.TMSFNCGraphicsTypes"].$rtti["TTMSFNCGraphicsFont"],"FFont","SetFont");
    $r.addProperty("Text",14,rtl.string,"FText","SetText",{stored: "IsTextStored"});
    $r.addProperty("OnChange",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnChange","FOnChange");
  });
  rtl.createClass(this,"TTMSFNCCustomSwitchButtonAppearance",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FOnChange = null;
      this.FFill = null;
      this.FStroke = null;
      this.FMargin = 0.0;
      this.FOffFill = null;
      this.FOffStroke = null;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      this.FFill = undefined;
      this.FStroke = undefined;
      this.FOffFill = undefined;
      this.FOffStroke = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetFill = function (Value) {
      this.FFill.Assign(Value);
    };
    this.SetStroke = function (Value) {
      this.FStroke.Assign(Value);
    };
    this.SetMargin = function (Value) {
      if (this.FMargin !== Value) {
        this.FMargin = Value;
        this.Changed();
      };
    };
    this.IsMarginStored = function () {
      var Result = false;
      Result = this.FMargin !== 3.0;
      return Result;
    };
    this.SetOffFill = function (Value) {
      this.FOffFill.Assign(Value);
    };
    this.SetOffStroke = function (Value) {
      this.FOffStroke.Assign(Value);
    };
    this.Changed = function () {
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.FillChanged = function (Sender) {
      this.Changed();
    };
    this.StrokeChanged = function (Sender) {
      this.Changed();
    };
    this.Create$1 = function () {
      this.FMargin = 3;
      this.FFill = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFill.$create("Create$1",[pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid,16777215,8421504,-1,-1]);
      this.FFill.FOnChanged = rtl.createCallback(this,"FillChanged");
      this.FOffFill = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFill.$create("Create$1",[pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid,16777215,8421504,-1,-1]);
      this.FOffFill.FOnChanged = rtl.createCallback(this,"FillChanged");
      this.FStroke = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStroke.$create("Create$1",[pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid,12632256]);
      this.FStroke.FOnChanged = rtl.createCallback(this,"StrokeChanged");
      this.FOffStroke = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStroke.$create("Create$1",[pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid,12632256]);
      this.FOffStroke.FOnChanged = rtl.createCallback(this,"StrokeChanged");
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FFill");
      rtl.free(this,"FStroke");
      rtl.free(this,"FOffFill");
      rtl.free(this,"FOffStroke");
      pas.System.TObject.Destroy.call(this);
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCCustomSwitchButtonAppearance.isPrototypeOf(Source)) {
        this.FFill.Assign(rtl.as(Source,$mod.TTMSFNCCustomSwitchButtonAppearance).FFill);
        this.FOffFill.Assign(rtl.as(Source,$mod.TTMSFNCCustomSwitchButtonAppearance).FOffFill);
        this.FStroke.Assign(rtl.as(Source,$mod.TTMSFNCCustomSwitchButtonAppearance).FStroke);
        this.FOffStroke.Assign(rtl.as(Source,$mod.TTMSFNCCustomSwitchButtonAppearance).FOffStroke);
        this.FMargin = rtl.as(Source,$mod.TTMSFNCCustomSwitchButtonAppearance).FMargin;
      } else pas.Classes.TPersistent.Assign.apply(this,arguments);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addProperty("Margin",14,rtl.double,"FMargin","SetMargin",{stored: "IsMarginStored"});
    $r.addProperty("OffFill",2,pas["WEBLib.TMSFNCGraphicsTypes"].$rtti["TTMSFNCGraphicsFill"],"FOffFill","SetOffFill");
    $r.addProperty("OffStroke",2,pas["WEBLib.TMSFNCGraphicsTypes"].$rtti["TTMSFNCGraphicsStroke"],"FOffStroke","SetOffStroke");
    $r.addProperty("Fill",2,pas["WEBLib.TMSFNCGraphicsTypes"].$rtti["TTMSFNCGraphicsFill"],"FFill","SetFill");
    $r.addProperty("Stroke",2,pas["WEBLib.TMSFNCGraphicsTypes"].$rtti["TTMSFNCGraphicsStroke"],"FStroke","SetStroke");
    $r.addProperty("OnChange",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnChange","FOnChange");
  });
  this.$rtti.$MethodVar("TTMSFNCCustomSwitchBeforeDrawSwitchEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AGraphics",pas["WEBLib.TMSFNCGraphics"].$rtti["TTMSFNCGraphics"]],["ARect",pas["WEBLib.TMSFNCTypes"].$rtti["TRectF"]],["ASwitchState",this.$rtti["TTMSFNCCustomSwitchState"]],["AAllow",rtl.boolean,1],["ADefaultDraw",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCCustomSwitchAfterDrawSwitchEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AGraphics",pas["WEBLib.TMSFNCGraphics"].$rtti["TTMSFNCGraphics"]],["ARect",pas["WEBLib.TMSFNCTypes"].$rtti["TRectF"]],["ASwitchState",this.$rtti["TTMSFNCCustomSwitchState"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCCustomSwitchBeforeDrawSwitchButtonEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AGraphics",pas["WEBLib.TMSFNCGraphics"].$rtti["TTMSFNCGraphics"]],["ARect",pas["WEBLib.TMSFNCTypes"].$rtti["TRectF"]],["ASwitchState",this.$rtti["TTMSFNCCustomSwitchState"]],["AAllow",rtl.boolean,1],["ADefaultDraw",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCCustomSwitchAfterDrawSwitchButtonEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AGraphics",pas["WEBLib.TMSFNCGraphics"].$rtti["TTMSFNCGraphics"]],["ARect",pas["WEBLib.TMSFNCTypes"].$rtti["TRectF"]],["ASwitchState",this.$rtti["TTMSFNCCustomSwitchState"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCCustomSwitchStateChangeEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ASwitchState",this.$rtti["TTMSFNCCustomSwitchState"]]]), methodkind: 0});
  rtl.createClass(this,"TTMSFNCCustomSwitch",pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.$init.call(this);
      this.FButtonPos = 0.0;
      this.FPosTo = 0.0;
      this.FMouseDown = false;
      this.FMouseDownButton = false;
      this.FOrientation = 0;
      this.FAppearanceOff = null;
      this.FAppearanceOn = null;
      this.FButtonAppearance = null;
      this.FRounded = false;
      this.FLayout = 0;
      this.FSwitchState = 0;
      this.FSwitchTimer = null;
      this.FAnimationFactor = 0;
      this.FDoAnimation = false;
      this.FOnAfterDrawSwitch = null;
      this.FOnAfterDrawSwitchButton = null;
      this.FOnBeforeDrawSwitch = null;
      this.FOnBeforeDrawSwitchButton = null;
      this.FOnStateChange = null;
      this.FOnChange = null;
      this.FGlobalFont = null;
    };
    this.$final = function () {
      this.FAppearanceOff = undefined;
      this.FAppearanceOn = undefined;
      this.FButtonAppearance = undefined;
      this.FSwitchTimer = undefined;
      this.FOnAfterDrawSwitch = undefined;
      this.FOnAfterDrawSwitchButton = undefined;
      this.FOnBeforeDrawSwitch = undefined;
      this.FOnBeforeDrawSwitchButton = undefined;
      this.FOnStateChange = undefined;
      this.FOnChange = undefined;
      this.FGlobalFont = undefined;
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.$final.call(this);
    };
    this.SetOrientation = function (Value) {
      if (this.FOrientation !== Value) {
        this.FOrientation = Value;
        if (rtl.eqSet(rtl.intersectSet(this.FComponentState,rtl.createSet(pas.Classes.TComponentStateItem.csLoading,pas.Classes.TComponentStateItem.csUpdating)),{})) {
          this.SetBounds(this.GetLeft(),this.GetTop(),this.GetHeight(),this.GetWidth());
        };
        this.Changed();
      };
    };
    this.SetAppearanceOff = function (Value) {
      this.FAppearanceOff.Assign(Value);
    };
    this.SetAppearanceOn = function (Value) {
      this.FAppearanceOn.Assign(Value);
    };
    this.SetButtonAppearance = function (Value) {
      this.FButtonAppearance.Assign(Value);
    };
    this.SetRounded = function (Value) {
      if (this.FRounded !== Value) {
        this.FRounded = Value;
        this.Changed();
      };
    };
    this.SetChecked = function (Value) {
      if (Value) {
        this.SetSwitchState($mod.TTMSFNCCustomSwitchState.ssOn)}
       else this.SetSwitchState($mod.TTMSFNCCustomSwitchState.ssOff);
    };
    this.SetLayout = function (Value) {
      if (this.FLayout !== Value) {
        this.FLayout = Value;
        this.Changed();
      };
    };
    this.SetSwitchState = function (Value) {
      if (this.FSwitchState !== Value) {
        this.FSwitchState = Value;
        var $tmp = Value;
        if ($tmp === $mod.TTMSFNCCustomSwitchState.ssOn) {
          this.FPosTo = this.GetButtonOnPos();
          this.FButtonPos = this.GetButtonOnPos();
        } else if ($tmp === $mod.TTMSFNCCustomSwitchState.ssOff) {
          this.FPosTo = this.GetButtonOffPos();
          this.FButtonPos = this.GetButtonOffPos();
        };
        this.DoStateChange(Value);
        this.Changed();
      };
    };
    this.SetAnimationFactor = function (Value) {
      if (this.FAnimationFactor !== Value) {
        this.FAnimationFactor = Value;
        this.Changed();
      };
    };
    this.GetChecked = function () {
      var Result = false;
      Result = false;
      var $tmp = this.FSwitchState;
      if ($tmp === $mod.TTMSFNCCustomSwitchState.ssOff) {
        Result = false}
       else if ($tmp === $mod.TTMSFNCCustomSwitchState.ssOn) Result = true;
      return Result;
    };
    this.SetGlobalFont = function (Value) {
      this.FGlobalFont.Assign(Value);
    };
    this.ChangeDPIScale = function (M, D) {
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.ChangeDPIScale.apply(this,arguments);
      this.FAppearanceOff.FFont.SetHeight(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.MulDivInt(this.FAppearanceOff.FFont.FHeight,M,D));
      this.FAppearanceOn.FFont.SetHeight(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.MulDivInt(this.FAppearanceOn.FFont.FHeight,M,D));
    };
    this.ApplyStyle = function () {
      var c = 0;
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.ApplyStyle.call(this);
      c = -1;
      if (pas["WEBLib.TMSFNCStyles"].TTMSFNCStyles.GetStyleBackgroundFillColor({get: function () {
          return c;
        }, set: function (v) {
          c = v;
        }})) {
        this.FAppearanceOff.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
        this.FAppearanceOff.FFill.SetColor(c);
        this.FButtonAppearance.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
        this.FButtonAppearance.FFill.SetColor(c);
      };
      c = -1;
      if (pas["WEBLib.TMSFNCStyles"].TTMSFNCStyles.GetStyleSelectionFillColorTo({get: function () {
          return c;
        }, set: function (v) {
          c = v;
        }})) {
        this.FAppearanceOn.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
        this.FAppearanceOn.FFill.SetColor(c);
      };
      c = -1;
      if (pas["WEBLib.TMSFNCStyles"].TTMSFNCStyles.GetStyleTextFontColor({get: function () {
          return c;
        }, set: function (v) {
          c = v;
        }})) {
        this.FAppearanceOn.FFont.SetColor(c);
        this.FAppearanceOff.FFont.SetColor(c);
      };
      c = -1;
      if (pas["WEBLib.TMSFNCStyles"].TTMSFNCStyles.GetStyleLineFillColor({get: function () {
          return c;
        }, set: function (v) {
          c = v;
        }})) {
        this.FAppearanceOff.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
        this.FAppearanceOff.FStroke.SetColor(c);
        this.FAppearanceOn.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
        this.FAppearanceOn.FStroke.SetColor(c);
        this.FButtonAppearance.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
        this.FButtonAppearance.FStroke.SetColor(c);
      };
      c = -1;
      if (pas["WEBLib.TMSFNCStyles"].TTMSFNCStyles.GetStyleDefaultButtonFillColor({get: function () {
          return c;
        }, set: function (v) {
          c = v;
        }})) {
        this.FButtonAppearance.FOffFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
        this.FButtonAppearance.FOffFill.SetColor(c);
      };
      c = -1;
      if (pas["WEBLib.TMSFNCStyles"].TTMSFNCStyles.GetStyleDefaultButtonStrokeColor({get: function () {
          return c;
        }, set: function (v) {
          c = v;
        }})) {
        this.FButtonAppearance.FOffStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
        this.FButtonAppearance.FOffStroke.SetColor(c);
      };
    };
    this.ResetToDefaultStyle = function () {
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.ResetToDefaultStyle.call(this);
      this.FAppearanceOff.FFill.SetColor(16777215);
      this.FAppearanceOn.FFill.SetColor(16748574);
      this.FAppearanceOn.FFont.SetColor(0);
      this.FAppearanceOff.FFont.SetColor(0);
      this.FAppearanceOff.FStroke.SetColor(12632256);
      this.FAppearanceOn.FStroke.SetColor(12632256);
      this.FButtonAppearance.FFill.SetColor(16777215);
      this.FButtonAppearance.FStroke.SetColor(12632256);
    };
    this.GetVersion = function () {
      var Result = "";
      Result = this.$class.GetVersionNumber(1,0,3,0);
      return Result;
    };
    this.Draw = function (AGraphics, ARect) {
      this.DrawSwitchBackground(AGraphics,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect));
      this.DrawSwitchButton(AGraphics,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect));
    };
    this.DrawSwitchBackground = function (AGraphics, ARect) {
      var round = 0.0;
      var ang = 0.0;
      var ctrlW = 0.0;
      var rText = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var b = false;
      var df = false;
      var pos = 0.0;
      ctrlW = 0;
      var $tmp = this.FOrientation;
      if ($tmp === $mod.TTMSFNCCustomSwitchOrientation.soHorizontal) {
        ctrlW = ARect.Right - ARect.Left}
       else if ($tmp === $mod.TTMSFNCCustomSwitchOrientation.soVertical) ctrlW = ARect.Bottom - ARect.Top;
      ang = 0;
      if (this.FOrientation === $mod.TTMSFNCCustomSwitchOrientation.soVertical) ang = -90;
      if (this.FRounded) {
        round = 0;
        var $tmp1 = this.FOrientation;
        if ($tmp1 === $mod.TTMSFNCCustomSwitchOrientation.soHorizontal) {
          round = (ARect.Bottom - ARect.Top) / 2}
         else if ($tmp1 === $mod.TTMSFNCCustomSwitchOrientation.soVertical) round = (ARect.Right - ARect.Left) / 2;
      } else round = 1;
      if (this.FButtonPos < (ctrlW / 2)) {
        AGraphics.FFill.Assign(this.FAppearanceOff.FFill);
        AGraphics.FStroke.Assign(this.FAppearanceOff.FStroke);
      } else {
        AGraphics.FFill.Assign(this.FAppearanceOn.FFill);
        AGraphics.FStroke.Assign(this.FAppearanceOn.FStroke);
      };
      b = true;
      df = true;
      this.DoBeforeDrawSwitch(AGraphics,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),this.FSwitchState,{get: function () {
          return b;
        }, set: function (v) {
          b = v;
        }},{get: function () {
          return df;
        }, set: function (v) {
          df = v;
        }});
      if (b) {
        if (df) {
          AGraphics.DrawRoundRectangle$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),round - 1,rtl.createSet(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcTopLeft,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcTopRight,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcBottomLeft,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcBottomRight),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
          if (this.FLayout === $mod.TTMSFNCCustomSwitchLayout.sloExtended) {
            pos = this.GetButtonOnPos();
            if (this.FButtonPos !== pos) {
              rText.$assign(this.GetOffTextRect());
              AGraphics.FFont.AssignSource(this.FAppearanceOff.FFont);
              AGraphics.DrawText$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(rText),this.FAppearanceOff.FText,false,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextTrimming.gttNone,ang,-1,-1,true,false,-1,-1);
            };
            pos = this.GetButtonOffPos();
            if (this.FButtonPos !== pos) {
              rText.$assign(this.GetOnTextRect());
              AGraphics.FFont.AssignSource(this.FAppearanceOn.FFont);
              AGraphics.DrawText$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(rText),this.FAppearanceOn.FText,false,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextTrimming.gttNone,ang,-1,-1,true,false,-1,-1);
            };
          };
        };
        this.DoAfterDrawSwitch(AGraphics,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),this.FSwitchState);
      };
    };
    this.DrawSwitchButton = function (AGraphics, ARect) {
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var round = 0.0;
      var ctrlW = 0.0;
      var b = false;
      var df = false;
      ctrlW = 0;
      var $tmp = this.FOrientation;
      if ($tmp === $mod.TTMSFNCCustomSwitchOrientation.soHorizontal) {
        ctrlW = ARect.Right - ARect.Left}
       else if ($tmp === $mod.TTMSFNCCustomSwitchOrientation.soVertical) ctrlW = ARect.Bottom - ARect.Top;
      if (this.FButtonPos < (ctrlW / 2)) {
        AGraphics.FFill.Assign(this.FButtonAppearance.FOffFill);
        AGraphics.FStroke.Assign(this.FButtonAppearance.FOffStroke);
      } else {
        AGraphics.FFill.Assign(this.FButtonAppearance.FFill);
        AGraphics.FStroke.Assign(this.FButtonAppearance.FStroke);
      };
      r.$assign(this.GetSwitchButtonRect());
      round = this.FButtonAppearance.FMargin + 1;
      if (this.FRounded) {
        var $tmp1 = this.FOrientation;
        if ($tmp1 === $mod.TTMSFNCCustomSwitchOrientation.soHorizontal) {
          round = (ARect.Bottom - ARect.Top) / 2}
         else if ($tmp1 === $mod.TTMSFNCCustomSwitchOrientation.soVertical) round = (ARect.Right - ARect.Left) / 2;
      };
      b = true;
      df = true;
      this.DoBeforeDrawSwtichButton(AGraphics,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),this.FSwitchState,{get: function () {
          return b;
        }, set: function (v) {
          b = v;
        }},{get: function () {
          return df;
        }, set: function (v) {
          df = v;
        }});
      if (b) {
        if (df) AGraphics.DrawRoundRectangle$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),round - this.FButtonAppearance.FMargin - 1,rtl.createSet(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcTopLeft,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcTopRight,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcBottomLeft,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcBottomRight),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmNone);
        this.DoAfterDrawSwitchButton(AGraphics,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),this.FSwitchState);
      };
    };
    this.HandleMouseDown = function (Button, Shift, X, Y) {
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControlBaseCommon.HandleMouseDown.apply(this,arguments);
      r.$assign(this.GetSwitchButtonRect());
      if (pas["WEBLib.TMSFNCTypes"].PtInRectEx(r,pas["WEBLib.TMSFNCTypes"].PointF(X,Y))) {
        this.FMouseDown = true;
        this.CaptureEx();
      } else this.FMouseDownButton = true;
    };
    this.HandleMouseUp = function (Button, Shift, X, Y) {
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControlBaseCommon.HandleMouseUp.apply(this,arguments);
      if (this.FMouseDown) {
        var $tmp = this.FOrientation;
        if ($tmp === $mod.TTMSFNCCustomSwitchOrientation.soHorizontal) {
          if (X > (this.GetWidth() / 2)) {
            this.FPosTo = this.GetButtonOnPos();
            this.FSwitchState = $mod.TTMSFNCCustomSwitchState.ssOn;
            this.DoStateChange($mod.TTMSFNCCustomSwitchState.ssOn);
          } else {
            this.FPosTo = this.GetButtonOffPos();
            this.FSwitchState = $mod.TTMSFNCCustomSwitchState.ssOff;
            this.DoStateChange($mod.TTMSFNCCustomSwitchState.ssOff);
          };
        } else if ($tmp === $mod.TTMSFNCCustomSwitchOrientation.soVertical) {
          if (Y < (this.GetHeight() / 2)) {
            this.FPosTo = this.GetButtonOnPos();
            this.FSwitchState = $mod.TTMSFNCCustomSwitchState.ssOn;
            this.DoStateChange($mod.TTMSFNCCustomSwitchState.ssOn);
          } else {
            this.FPosTo = this.GetButtonOffPos();
            this.FSwitchState = $mod.TTMSFNCCustomSwitchState.ssOff;
            this.DoStateChange($mod.TTMSFNCCustomSwitchState.ssOff);
          };
        };
        this.FDoAnimation = true;
        this.FMouseDown = false;
        this.ReleaseCaptureEx();
        this.Changed();
      } else if (this.FMouseDownButton) {
        var $tmp1 = this.FSwitchState;
        if ($tmp1 === $mod.TTMSFNCCustomSwitchState.ssOff) {
          this.FSwitchState = $mod.TTMSFNCCustomSwitchState.ssOn;
          this.FPosTo = this.GetButtonOnPos();
          this.DoStateChange($mod.TTMSFNCCustomSwitchState.ssOn);
        } else if ($tmp1 === $mod.TTMSFNCCustomSwitchState.ssOn) {
          this.FSwitchState = $mod.TTMSFNCCustomSwitchState.ssOff;
          this.FPosTo = this.GetButtonOffPos();
          this.DoStateChange($mod.TTMSFNCCustomSwitchState.ssOff);
        };
        this.FDoAnimation = true;
        this.FMouseDownButton = false;
        this.Changed();
      };
    };
    this.HandleMouseMove = function (Shift, X, Y) {
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControlBaseCommon.HandleMouseMove.apply(this,arguments);
      if (this.FMouseDown && (this.FLayout === $mod.TTMSFNCCustomSwitchLayout.sloExtended)) {
        this.FButtonPos = this.CalculateButtonPosition(X,Y);
        this.Invalidate();
      };
    };
    this.DoBeforeDrawSwitch = function (AGraphics, ARect, ASwitchState, AAllow, ADefaultDraw) {
      if (this.FOnBeforeDrawSwitch != null) this.FOnBeforeDrawSwitch(this,AGraphics,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),ASwitchState,AAllow,ADefaultDraw);
    };
    this.DoAfterDrawSwitch = function (AGraphics, ARect, ASwitchState) {
      if (this.FOnAfterDrawSwitch != null) this.FOnAfterDrawSwitch(this,AGraphics,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),ASwitchState);
    };
    this.DoBeforeDrawSwtichButton = function (AGraphics, ARect, ASwitchState, AAllow, ADefaultDraw) {
      if (this.FOnBeforeDrawSwitchButton != null) this.FOnBeforeDrawSwitchButton(this,AGraphics,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),ASwitchState,AAllow,ADefaultDraw);
    };
    this.DoAfterDrawSwitchButton = function (AGraphics, ARect, ASwitchState) {
      if (this.FOnAfterDrawSwitchButton != null) this.FOnAfterDrawSwitchButton(this,AGraphics,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),ASwitchState);
    };
    this.DoStateChange = function (ASwitchState) {
      if (this.FOnStateChange != null) this.FOnStateChange(this,ASwitchState);
    };
    this.DoSwitchTimer = function (Sender) {
      var currPos = 0.0;
      var d = 0.0;
      var anim = false;
      if (this.FMouseDown) return;
      if (this.FDoAnimation) {
        d = Math.abs(this.FButtonPos - this.FPosTo) / this.FAnimationFactor;
        currPos = this.FButtonPos;
        anim = $impl.AnimateDouble({get: function () {
            return currPos;
          }, set: function (v) {
            currPos = v;
          }},{p: this, get: function () {
            return this.p.FPosTo;
          }, set: function (v) {
            this.p.FPosTo = v;
          }},d,0.01);
        if (anim) {
          this.FButtonPos = currPos;
          this.Invalidate();
        } else this.FDoAnimation = false;
      };
    };
    this.UpdateControlAfterResize = function () {
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.UpdateControlAfterResize.call(this);
      this.FButtonPos = this.GetButtonPos();
      this.FPosTo = this.GetButtonOffPos();
    };
    this.AppearanceChanged = function (Sender) {
      this.Changed();
    };
    this.Changed = function () {
      if (this.FOnChange != null) this.FOnChange(this);
      this.Invalidate();
    };
    this.GetSwitchButtonRect = function () {
      var Result = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var btnW = 0.0;
      var btn = 0.0;
      var infl = 0.0;
      btnW = 0;
      var $tmp = this.FOrientation;
      if ($tmp === $mod.TTMSFNCCustomSwitchOrientation.soHorizontal) {
        btnW = this.GetControlRect().Bottom - this.GetContentRect().Top}
       else if ($tmp === $mod.TTMSFNCCustomSwitchOrientation.soVertical) btnW = this.GetContentRect().Right - this.GetContentRect().Left;
      btn = btnW / 2;
      infl = this.FButtonAppearance.FMargin + (this.FButtonAppearance.FStroke.FWidth / 2);
      var $tmp1 = this.FOrientation;
      if ($tmp1 === $mod.TTMSFNCCustomSwitchOrientation.soHorizontal) {
        Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(this.FButtonPos - btn,this.GetContentRect().Top,this.FButtonPos + btn,this.GetControlRect().Bottom))}
       else if ($tmp1 === $mod.TTMSFNCCustomSwitchOrientation.soVertical) Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(this.GetContentRect().Left,this.FButtonPos - btn,this.GetContentRect().Right,this.FButtonPos + btn));
      pas["WEBLib.TMSFNCTypes"].InflateRectEx(Result,-infl,-infl);
      return Result;
    };
    this.CalculateButtonPosition = function (AX, AY) {
      var Result = 0.0;
      var ind = 0.0;
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var rb = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      Result = -1;
      rb.$assign(this.GetSwitchButtonRect());
      ind = this.FButtonAppearance.FMargin + (this.FButtonAppearance.FStroke.FWidth / 2) + ((rb.Right - rb.Left) / 2);
      r.$assign(this.GetControlRect());
      var $tmp = this.FOrientation;
      if ($tmp === $mod.TTMSFNCCustomSwitchOrientation.soHorizontal) {
        if ((r.Left + ind) >= AX) {
          Result = r.Left + ind}
         else if ((r.Right - ind) <= AX) {
          Result = r.Right - ind}
         else Result = AX;
      } else if ($tmp === $mod.TTMSFNCCustomSwitchOrientation.soVertical) {
        if ((r.Top + ind) >= AY) {
          Result = r.Top + ind}
         else if ((r.Bottom - ind) <= AY) {
          Result = r.Bottom - ind}
         else Result = AY;
      };
      return Result;
    };
    this.GetButtonPos = function () {
      var Result = 0.0;
      Result = 0;
      var $tmp = this.FSwitchState;
      if ($tmp === $mod.TTMSFNCCustomSwitchState.ssOff) {
        Result = this.GetButtonOffPos()}
       else if ($tmp === $mod.TTMSFNCCustomSwitchState.ssOn) Result = this.GetButtonOnPos();
      return Result;
    };
    this.GetButtonOffPos = function () {
      var Result = 0.0;
      var rb = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var ind = 0.0;
      Result = 0;
      rb.$assign(this.GetSwitchButtonRect());
      ind = this.FButtonAppearance.FMargin + (this.FButtonAppearance.FStroke.FWidth / 2) + ((rb.Right - rb.Left) / 2);
      var $tmp = this.FOrientation;
      if ($tmp === $mod.TTMSFNCCustomSwitchOrientation.soHorizontal) {
        Result = this.GetControlRect().Left + ind}
       else if ($tmp === $mod.TTMSFNCCustomSwitchOrientation.soVertical) Result = this.GetControlRect().Bottom - ind;
      return Result;
    };
    this.GetButtonOnPos = function () {
      var Result = 0.0;
      var rb = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var ind = 0.0;
      Result = 0;
      rb.$assign(this.GetSwitchButtonRect());
      ind = this.FButtonAppearance.FMargin + (this.FButtonAppearance.FStroke.FWidth / 2) + ((rb.Right - rb.Left) / 2);
      var $tmp = this.FOrientation;
      if ($tmp === $mod.TTMSFNCCustomSwitchOrientation.soHorizontal) {
        Result = this.GetControlRect().Right - ind}
       else if ($tmp === $mod.TTMSFNCCustomSwitchOrientation.soVertical) Result = this.GetControlRect().Top + ind;
      return Result;
    };
    this.GetOffTextRect = function () {
      var Result = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var rbtn = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var btnW = 0.0;
      Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(0,0,0,0));
      rbtn.$assign(this.GetSwitchButtonRect());
      var $tmp = this.FOrientation;
      if ($tmp === $mod.TTMSFNCCustomSwitchOrientation.soHorizontal) {
        btnW = rbtn.Right - rbtn.Left;
        Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(rbtn.Right,this.GetControlRect().Top,rbtn.Right + (this.GetControlRect().Right - btnW),this.GetControlRect().Bottom));
      } else if ($tmp === $mod.TTMSFNCCustomSwitchOrientation.soVertical) {
        btnW = this.GetControlRect().Bottom - this.GetControlRect().Top - (rbtn.Bottom - rbtn.Top);
        Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(this.GetControlRect().Left,rbtn.Top - btnW,this.GetControlRect().Right,rbtn.Top));
      };
      return Result;
    };
    this.GetOnTextRect = function () {
      var Result = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var rbtn = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var ctrlW = 0.0;
      Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(0,0,0,0));
      rbtn.$assign(this.GetSwitchButtonRect());
      var $tmp = this.FOrientation;
      if ($tmp === $mod.TTMSFNCCustomSwitchOrientation.soHorizontal) {
        ctrlW = this.GetControlRect().Right - this.GetControlRect().Left - (rbtn.Right - rbtn.Left);
        Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(rbtn.Left - ctrlW,this.GetControlRect().Top,rbtn.Left,this.GetControlRect().Bottom));
      } else if ($tmp === $mod.TTMSFNCCustomSwitchOrientation.soVertical) {
        ctrlW = this.GetControlRect().Bottom - this.GetControlRect().Top - (rbtn.Bottom - rbtn.Top);
        Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(this.GetControlRect().Left,rbtn.Bottom,this.GetControlRect().Right,rbtn.Bottom + ctrlW));
      };
      return Result;
    };
    this.SetFonts = function (ASetType) {
      this.BeginUpdate();
      this.FGlobalFont.ApplyChange(this.FAppearanceOff.FFont,ASetType);
      this.FGlobalFont.ApplyChange(this.FAppearanceOn.FFont,ASetType);
      this.EndUpdate();
    };
    this.Create$1 = function (AOwner) {
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.Create$1.apply(this,arguments);
      this.FMouseDown = false;
      this.FSwitchState = $mod.TTMSFNCCustomSwitchState.ssOff;
      this.FAnimationFactor = 8;
      this.FMouseDownButton = false;
      this.FAppearanceOff = $mod.TTMSFNCCustomSwitchAppearanceOff.$create("Create$1");
      this.FAppearanceOff.FOnChange = rtl.createCallback(this,"AppearanceChanged");
      this.FAppearanceOn = $mod.TTMSFNCCustomSwitchAppearanceOn.$create("Create$1");
      this.FAppearanceOn.FOnChange = rtl.createCallback(this,"AppearanceChanged");
      this.FButtonAppearance = $mod.TTMSFNCCustomSwitchButtonAppearance.$create("Create$1");
      this.FButtonAppearance.FOnChange = rtl.createCallback(this,"AppearanceChanged");
      this.FButtonPos = this.GetButtonOffPos();
      this.FPosTo = this.GetButtonOffPos();
      this.SetWidth(75);
      this.SetHeight(25);
      this.FFill.SetColor(-1);
      this.FStroke.SetColor(-1);
      this.FDoAnimation = false;
      this.FGlobalFont = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCAppearanceGlobalFont.$create("Create$1",[this]);
      this.FSwitchTimer = pas["WEBLib.ExtCtrls"].TTimer.$create("Create$1",[this]);
      this.FSwitchTimer.SetInterval(10);
      this.FSwitchTimer.FOnTimer = rtl.createCallback(this,"DoSwitchTimer");
      this.FSwitchTimer.SetEnabled(true);
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FGlobalFont");
      rtl.free(this,"FAppearanceOff");
      rtl.free(this,"FAppearanceOn");
      rtl.free(this,"FButtonAppearance");
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.Destroy.call(this);
    };
    rtl.addIntf(this,pas["WEBLib.TMSFNCGraphicsTypes"].ITMSFNCAppearanceGlobalFont);
    rtl.addIntf(this,pas["WEBLib.TMSFNCGraphics"].ITMSFNCGraphicsExport);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas["WEBLib.TMSFNCStyles"].ITMSFNCAdaptToStyle);
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
  });
  rtl.createClass(this,"TTMSFNCSwitch",this.TTMSFNCCustomSwitch,function () {
    rtl.addIntf(this,pas["WEBLib.TMSFNCGraphicsTypes"].ITMSFNCAppearanceGlobalFont);
    rtl.addIntf(this,pas["WEBLib.TMSFNCGraphics"].ITMSFNCGraphicsExport);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas["WEBLib.TMSFNCStyles"].ITMSFNCAdaptToStyle);
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("AppearanceOff",2,$mod.$rtti["TTMSFNCCustomSwitchAppearanceOff"],"FAppearanceOff","SetAppearanceOff");
    $r.addProperty("AppearanceOn",2,$mod.$rtti["TTMSFNCCustomSwitchAppearanceOn"],"FAppearanceOn","SetAppearanceOn");
    $r.addProperty("ButtonAppearance",2,$mod.$rtti["TTMSFNCCustomSwitchButtonAppearance"],"FButtonAppearance","SetButtonAppearance");
    $r.addProperty("AnimationFactor",2,rtl.longint,"FAnimationFactor","SetAnimationFactor",{Default: 15});
    $r.addProperty("State",2,$mod.$rtti["TTMSFNCCustomSwitchState"],"FSwitchState","SetSwitchState",{Default: $mod.TTMSFNCCustomSwitchState.ssOff});
    $r.addProperty("Layout",2,$mod.$rtti["TTMSFNCCustomSwitchLayout"],"FLayout","SetLayout",{Default: $mod.TTMSFNCCustomSwitchLayout.sloSimple});
    $r.addProperty("Orientation",2,$mod.$rtti["TTMSFNCCustomSwitchOrientation"],"FOrientation","SetOrientation",{Default: $mod.TTMSFNCCustomSwitchOrientation.soHorizontal});
    $r.addProperty("Rounded",2,rtl.boolean,"FRounded","SetRounded",{Default: false});
    $r.addProperty("GlobalFont",2,pas["WEBLib.TMSFNCGraphicsTypes"].$rtti["TTMSFNCAppearanceGlobalFont"],"FGlobalFont","SetGlobalFont");
    $r.addProperty("OnBeforeDrawSwitch",0,$mod.$rtti["TTMSFNCCustomSwitchBeforeDrawSwitchEvent"],"FOnBeforeDrawSwitch","FOnBeforeDrawSwitch");
    $r.addProperty("OnAfterDrawSwitch",0,$mod.$rtti["TTMSFNCCustomSwitchAfterDrawSwitchEvent"],"FOnAfterDrawSwitch","FOnAfterDrawSwitch");
    $r.addProperty("OnBeforeDrawSwitchButton",0,$mod.$rtti["TTMSFNCCustomSwitchBeforeDrawSwitchButtonEvent"],"FOnBeforeDrawSwitchButton","FOnBeforeDrawSwitchButton");
    $r.addProperty("OnAfterDrawSwitchButton",0,$mod.$rtti["TTMSFNCCustomSwitchAfterDrawSwitchButtonEvent"],"FOnAfterDrawSwitchButton","FOnAfterDrawSwitchButton");
    $r.addProperty("OnStateChange",0,$mod.$rtti["TTMSFNCCustomSwitchStateChangeEvent"],"FOnStateChange","FOnStateChange");
    $r.addProperty("OnChange",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnChange","FOnChange");
    $r.attr = [pas.Classes.ComponentPlatformsAttribute,"Create$1",[0]];
  });
  $mod.$implcode = function () {
    $impl.AnimateDouble = function (Start, Stop, Delta, Margin) {
      var Result = false;
      Result = true;
      if ((Start.get() > (Stop.get() - Margin)) && (Start.get() < (Stop.get() + Margin))) {
        Start.set(Stop.get());
        Result = false;
      } else {
        Delta = Math.max(Margin,Delta);
        if (Start.get() < Stop.get()) {
          Start.set(Start.get() + Delta)}
         else Start.set(Start.get() - Delta);
      };
      return Result;
    };
  };
},["Math","WEBLib.TMSFNCStyles","WEBLib.TMSFNCUtils"]);
//# sourceMappingURL=WEBLib.TMSFNCSwitch.js.map
