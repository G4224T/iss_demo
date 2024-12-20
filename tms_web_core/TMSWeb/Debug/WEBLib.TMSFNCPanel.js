rtl.module("WEBLib.TMSFNCPanel",["System","Classes","WEBLib.TMSFNCCustomControl","Types","WEBLib.TMSFNCTypes","WEBLib.Controls","WEBLib.TMSFNCBitmapContainer","WEBLib.TMSFNCGraphics","WEBLib.TMSFNCPopup","WEBLib.TMSFNCGraphicsTypes","TypInfo"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.MAJ_VER = 1;
  this.MIN_VER = 0;
  this.REL_VER = 2;
  this.BLD_VER = 1;
  this.MINSECTIONHEIGHT = 16;
  this.$rtti.$Class("TTMSFNCCustomPanel");
  this.TTMSFNCPanelButton = {"0": "pbCompact", pbCompact: 0, "1": "pbClose", pbClose: 1, "2": "pbExpander", pbExpander: 2, "3": "pbDropDown", pbDropDown: 3};
  this.$rtti.$Enum("TTMSFNCPanelButton",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TTMSFNCPanelButton});
  this.$rtti.$Set("TTMSFNCPanelButtons",{comptype: this.$rtti["TTMSFNCPanelButton"]});
  this.TTMSFNCPanelCloseAction = {"0": "pcaNone", pcaNone: 0, "1": "pcaFree", pcaFree: 1, "2": "pcaHide", pcaHide: 2};
  this.$rtti.$Enum("TTMSFNCPanelCloseAction",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TTMSFNCPanelCloseAction});
  this.TTMSFNCPanelDropDownAction = {"0": "pddaNone", pddaNone: 0, "1": "pddaPopup", pddaPopup: 1};
  this.$rtti.$Enum("TTMSFNCPanelDropDownAction",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TTMSFNCPanelDropDownAction});
  this.TTMSFNCPanelExpandAction = {"0": "peaNone", peaNone: 0, "1": "peaExpand", peaExpand: 1};
  this.$rtti.$Enum("TTMSFNCPanelExpandAction",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TTMSFNCPanelExpandAction});
  this.TTMSFNCPanelCompactAction = {"0": "pcNone", pcNone: 0, "1": "pcCompact", pcCompact: 1};
  this.$rtti.$Enum("TTMSFNCPanelCompactAction",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TTMSFNCPanelCompactAction});
  rtl.createClass(this,"TTMSFNCPanelElement",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FOnChanged = null;
      this.FText = "";
      this.FSize = 0.0;
      this.FWordWrapping = false;
      this.FVerticalTextAlign = 0;
      this.FHorizontalTextAlign = 0;
      this.FTrimming = 0;
      this.FFont = null;
      this.FShowButtons = false;
      this.FButtons = {};
      this.FVisible = false;
      this.FButtonSpacing = 0.0;
      this.FButtonSize = 0.0;
      this.FFill = null;
      this.FStroke = null;
      this.FStretchText = false;
      this.FDropDownControl = null;
      this.FDropDownHeight = 0.0;
      this.FDropDownWidth = 0.0;
    };
    this.$final = function () {
      this.FOnChanged = undefined;
      this.FFont = undefined;
      this.FButtons = undefined;
      this.FFill = undefined;
      this.FStroke = undefined;
      this.FDropDownControl = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetText = function (Value) {
      if (this.FText !== Value) {
        this.FText = Value;
        this.Changed();
      };
    };
    this.IsSizeStored = function () {
      var Result = false;
      Result = this.FSize !== 28;
      return Result;
    };
    this.SetSize = function (Value) {
      if (this.FSize !== Value) {
        this.FSize = Value;
        this.Changed();
      };
    };
    this.SetHorizontalTextAlign = function (Value) {
      if (this.FHorizontalTextAlign !== Value) {
        this.FHorizontalTextAlign = Value;
        this.Changed();
      };
    };
    this.SetVerticalTextAlign = function (Value) {
      if (this.FVerticalTextAlign !== Value) {
        this.FVerticalTextAlign = Value;
        this.Changed();
      };
    };
    this.SetWordWrapping = function (Value) {
      if (this.FWordWrapping !== Value) {
        this.FWordWrapping = Value;
        this.Changed();
      };
    };
    this.SetTrimming = function (Value) {
      if (this.FTrimming !== Value) {
        this.FTrimming = Value;
        this.Changed();
      };
    };
    this.SetFont = function (Value) {
      this.FFont.AssignSource(Value);
    };
    this.SetButtons = function (Value) {
      if (rtl.neSet(this.FButtons,Value)) {
        this.FButtons = rtl.refSet(Value);
        this.Changed();
      };
    };
    this.SetShowButtons = function (Value) {
      if (this.FShowButtons !== Value) {
        this.FShowButtons = Value;
        this.Changed();
      };
    };
    this.SetVisible = function (Value) {
      if (this.FVisible !== Value) {
        this.FVisible = Value;
        this.Changed();
      };
    };
    this.IsButtonSizeStored = function () {
      var Result = false;
      Result = this.FButtonSize !== 20;
      return Result;
    };
    this.IsButtonSpacingStored = function () {
      var Result = false;
      Result = this.FButtonSpacing !== 4;
      return Result;
    };
    this.SetButtonSize = function (Value) {
      if (this.FButtonSize !== Value) {
        this.FButtonSize = Value;
        this.Changed();
      };
    };
    this.SetButtonSpacing = function (Value) {
      if (this.FButtonSpacing !== Value) {
        this.FButtonSpacing = Value;
        this.Changed();
      };
    };
    this.SetFill = function (Value) {
      this.FFill.Assign(Value);
    };
    this.SetStroke = function (Value) {
      this.FStroke.Assign(Value);
    };
    this.SetStretchText = function (Value) {
      if (this.FStretchText !== Value) {
        this.FStretchText = Value;
        this.Changed();
      };
    };
    this.SetDropDownControl = function (Value) {
      if (Value === null) {
        if (this.FDropDownControl != null) this.FDropDownControl.SetVisible(true);
      };
      this.FDropDownControl = Value;
      if (this.FDropDownControl != null) {
        this.FDropDownControl.SetVisible(false);
        this.FDropDownWidth = this.FDropDownControl.GetWidth();
        this.FDropDownHeight = this.FDropDownControl.GetHeight();
      };
    };
    this.IsDropDownHeightStored = function () {
      var Result = false;
      Result = this.FDropDownHeight !== 120;
      return Result;
    };
    this.IsDropDownWidthStored = function () {
      var Result = false;
      Result = this.FDropDownWidth !== 100;
      return Result;
    };
    this.ChangeDPIScale = function (M, D) {
      this.FSize = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.MulDivSingle(this.FSize,M,D);
      this.FFont.SetHeight(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.MulDivInt(this.FFont.FHeight,M,D));
      this.FButtonSpacing = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.MulDivSingle(this.FButtonSpacing,M,D);
      this.FButtonSize = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.MulDivSingle(this.FButtonSize,M,D);
      this.FDropDownHeight = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.MulDivSingle(this.FDropDownHeight,M,D);
      this.FDropDownWidth = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.MulDivSingle(this.FDropDownWidth,M,D);
    };
    this.Changed = function () {
      if (this.FOnChanged != null) this.FOnChanged(this);
    };
    this.FontChanged = function (Sender) {
      this.Changed();
    };
    this.FillChanged = function (Sender) {
      this.Changed();
    };
    this.StrokeChanged = function (Sender) {
      this.Changed();
    };
    this.IsHTML = function () {
      var Result = false;
      Result = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.IsHTML(this.FText);
      return Result;
    };
    this.Create$1 = function () {
      this.FSize = 28;
      this.FVisible = true;
      this.FStretchText = true;
      this.FHorizontalTextAlign = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter;
      this.FVerticalTextAlign = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter;
      this.FWordWrapping = true;
      this.FTrimming = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextTrimming.gttNone;
      this.FFont = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFont.$create("Create$2");
      this.FFont.FOnChanged = rtl.createCallback(this,"FontChanged");
      this.FShowButtons = true;
      this.FButtons = {};
      this.FButtonSpacing = 4;
      this.FButtonSize = 20;
      this.FFill = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFill.$create("Create$1",[pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid,pas["WEBLib.TMSFNCGraphicsTypes"].MakeGraphicsColor(228,228,228),8421504,-1,-1]);
      this.FFill.FOnChanged = rtl.createCallback(this,"FillChanged");
      this.FStroke = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStroke.$create("Create$1",[pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid,12632256]);
      this.FStroke.FOnChanged = rtl.createCallback(this,"StrokeChanged");
      this.FDropDownWidth = 100;
      this.FDropDownHeight = 120;
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FFont");
      rtl.free(this,"FFill");
      rtl.free(this,"FStroke");
      pas.System.TObject.Destroy.call(this);
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCPanelElement.isPrototypeOf(Source)) {
        this.FText = rtl.as(Source,$mod.TTMSFNCPanelElement).FText;
        this.FStretchText = rtl.as(Source,$mod.TTMSFNCPanelElement).FStretchText;
        this.FSize = rtl.as(Source,$mod.TTMSFNCPanelElement).FSize;
        this.FHorizontalTextAlign = rtl.as(Source,$mod.TTMSFNCPanelElement).FHorizontalTextAlign;
        this.FVerticalTextAlign = rtl.as(Source,$mod.TTMSFNCPanelElement).FVerticalTextAlign;
        this.FWordWrapping = rtl.as(Source,$mod.TTMSFNCPanelElement).FWordWrapping;
        this.FTrimming = rtl.as(Source,$mod.TTMSFNCPanelElement).FTrimming;
        this.FFont.AssignSource(rtl.as(Source,$mod.TTMSFNCPanelElement).FFont);
        this.FShowButtons = rtl.as(Source,$mod.TTMSFNCPanelElement).FShowButtons;
        this.FButtons = rtl.refSet(rtl.as(Source,$mod.TTMSFNCPanelElement).FButtons);
        this.FVisible = rtl.as(Source,$mod.TTMSFNCPanelElement).FVisible;
        this.FButtonSpacing = rtl.as(Source,$mod.TTMSFNCPanelElement).FButtonSpacing;
        this.FButtonSize = rtl.as(Source,$mod.TTMSFNCPanelElement).FButtonSize;
        this.FStretchText = rtl.as(Source,$mod.TTMSFNCPanelElement).FStretchText;
        this.FDropDownWidth = rtl.as(Source,$mod.TTMSFNCPanelElement).FDropDownWidth;
        this.FDropDownHeight = rtl.as(Source,$mod.TTMSFNCPanelElement).FDropDownHeight;
        this.FFill.Assign(rtl.as(Source,$mod.TTMSFNCPanelElement).FFill);
        this.FStroke.Assign(rtl.as(Source,$mod.TTMSFNCPanelElement).FStroke);
      };
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addProperty("StretchText",2,rtl.boolean,"FStretchText","SetStretchText",{Default: true});
    $r.addProperty("Text",2,rtl.string,"FText","SetText");
    $r.addProperty("Size",14,rtl.double,"FSize","SetSize",{stored: "IsSizeStored"});
    $r.addProperty("HorizontalTextAlign",2,pas["WEBLib.TMSFNCGraphicsTypes"].$rtti["TTMSFNCGraphicsTextAlign"],"FHorizontalTextAlign","SetHorizontalTextAlign",{Default: pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter});
    $r.addProperty("VerticalTextAlign",2,pas["WEBLib.TMSFNCGraphicsTypes"].$rtti["TTMSFNCGraphicsTextAlign"],"FVerticalTextAlign","SetVerticalTextAlign",{Default: pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter});
    $r.addProperty("WordWrapping",2,rtl.boolean,"FWordWrapping","SetWordWrapping",{Default: true});
    $r.addProperty("Trimming",2,pas["WEBLib.TMSFNCGraphicsTypes"].$rtti["TTMSFNCGraphicsTextTrimming"],"FTrimming","SetTrimming",{Default: pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextTrimming.gttNone});
    $r.addProperty("Font",2,pas["WEBLib.TMSFNCGraphicsTypes"].$rtti["TTMSFNCGraphicsFont"],"FFont","SetFont");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("Fill",2,pas["WEBLib.TMSFNCGraphicsTypes"].$rtti["TTMSFNCGraphicsFill"],"FFill","SetFill");
    $r.addProperty("Stroke",2,pas["WEBLib.TMSFNCGraphicsTypes"].$rtti["TTMSFNCGraphicsStroke"],"FStroke","SetStroke");
    $r.addProperty("ShowButtons",2,rtl.boolean,"FShowButtons","SetShowButtons",{Default: true});
    $r.addProperty("Buttons",2,$mod.$rtti["TTMSFNCPanelButtons"],"FButtons","SetButtons",{Default: {}});
    $r.addProperty("ButtonSize",14,rtl.double,"FButtonSize","SetButtonSize",{stored: "IsButtonSizeStored"});
    $r.addProperty("ButtonSpacing",14,rtl.double,"FButtonSpacing","SetButtonSpacing",{stored: "IsButtonSpacingStored"});
    $r.addProperty("DropDownControl",2,pas["WEBLib.Controls"].$rtti["TControl"],"FDropDownControl","SetDropDownControl");
    $r.addProperty("DropDownWidth",12,rtl.double,"FDropDownWidth","FDropDownWidth",{stored: "IsDropDownWidthStored"});
    $r.addProperty("DropDownHeight",12,rtl.double,"FDropDownHeight","FDropDownHeight",{stored: "IsDropDownHeightStored"});
  });
  rtl.createClass(this,"TTMSFNCPanelHeader",this.TTMSFNCPanelElement,function () {
  });
  rtl.createClass(this,"TTMSFNCPanelFooter",this.TTMSFNCPanelElement,function () {
    this.Create$1 = function () {
      $mod.TTMSFNCPanelElement.Create$1.call(this);
      this.FShowButtons = false;
      this.FVisible = false;
      return this;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: false});
    $r.addProperty("ShowButtons",2,rtl.boolean,"FShowButtons","SetShowButtons",{Default: false});
  });
  this.TTMSFNCPanelButtonState = {"0": "bsNormal", bsNormal: 0, "1": "bsHover", bsHover: 1, "2": "bsDown", bsDown: 2};
  this.$rtti.$Enum("TTMSFNCPanelButtonState",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TTMSFNCPanelButtonState});
  rtl.createClass(this,"TTMSFNCPanelButtonStates",pas.Classes.TList,function () {
    this.GetItem = function (Index) {
      var Result = 0;
      Result = this.Get(Index);
      return Result;
    };
    this.SetItem = function (Index, Value) {
      this.Put(Index,Value);
    };
  });
  rtl.recNewT(this,"TTMSFNCPanelDownButton",function () {
    this.Button = 0;
    this.Down = false;
    this.$eq = function (b) {
      return (this.Button === b.Button) && (this.Down === b.Down);
    };
    this.$assign = function (s) {
      this.Button = s.Button;
      this.Down = s.Down;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCPanelDownButton",{});
    $r.addField("Button",$mod.$rtti["TTMSFNCPanelButton"]);
    $r.addField("Down",rtl.boolean);
  });
  this.TTMSFNCPanelExpandState = {"0": "pesCollapsed", pesCollapsed: 0, "1": "pesExpanded", pesExpanded: 1};
  this.$rtti.$Enum("TTMSFNCPanelExpandState",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TTMSFNCPanelExpandState});
  this.TTMSFNCPanelCompactState = {"0": "pcsCollapsed", pcsCollapsed: 0, "1": "pcsExpanded", pcsExpanded: 1};
  this.$rtti.$Enum("TTMSFNCPanelCompactState",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TTMSFNCPanelCompactState});
  this.$rtti.$MethodVar("TTMSFNCPanelAnchorClickEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AAnchor",rtl.string]]), methodkind: 0});
  rtl.createClass(this,"TTMSFNCPanelSection",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FOwner = null;
      this.FSize = 0.0;
      this.FTag = 0;
      this.FText = "";
      this.FControl = null;
    };
    this.$final = function () {
      this.FOwner = undefined;
      this.FControl = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.SetSize = function (Value) {
      if (this.FSize !== Value) {
        this.FSize = Value;
        this.Changed$1();
      };
    };
    this.IsSizeStored = function () {
      var Result = false;
      Result = this.FSize !== 48;
      return Result;
    };
    this.SetText = function (Value) {
      if (this.FText !== Value) {
        this.FText = Value;
        this.Changed$1();
      };
    };
    this.SetControl = function (Value) {
      var i = 0;
      var Panel = null;
      if (this.FControl !== Value) {
        if (Value != null) {
          Panel = this.FOwner;
          if (Panel != null) {
            for (var $l = 0, $end = Panel.FSections.GetCount() - 1; $l <= $end; $l++) {
              i = $l;
              if (Panel.FSections.GetItem$1(i).FControl === Value) Panel.FSections.GetItem$1(i).SetControl(null);
            };
            if (Value.FParent !== Panel) Value.SetParent(Panel);
          };
        };
        this.FControl = Value;
        if (this.FControl != null) this.UpdateControlBounds();
      };
    };
    this.Changed$1 = function () {
      if (this.FOwner != null) this.FOwner.Invalidate();
    };
    this.UpdateControlBounds = function () {
      var i = 0;
      var ARect = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var Panel = null;
      var g = null;
      var h = 0.0;
      if (this.FControl != null) {
        Panel = this.FOwner;
        if (Panel != null) {
          ARect.$assign(Panel.GetSectionRect(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(Panel.GetLocalRect())));
          for (var $l = 0, $end = this.GetIndex() - 1; $l <= $end; $l++) {
            i = $l;
            ARect.Top = ARect.Top + Panel.FSections.GetItem$1(i).FSize;
          };
          g = pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.$create("CreateBitmapCanvas",[1,1,false,true]);
          g.BeginScene();
          try {
            g.FFont.AssignSource(Panel.FSectionsAppearance.FFont);
            h = Math.max(16,g.CalculateTextHeight$1(this.FText) + 4);
          } finally {
            g.EndScene();
            g = rtl.freeLoc(g);
          };
          ARect.Top = (ARect.Top + h) - 1;
          if (this.GetIndex() !== (Panel.FSections.GetCount() - 1)) ARect.Bottom = ((ARect.Top + this.FSize) - h) + 1;
          if (!pas["WEBLib.TMSFNCTypes"].EqualRectEx(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(this.FControl.GetBoundsRect()),ARect)) {
            this.FControl.SetBoundsRect(pas["WEBLib.TMSFNCTypes"].ConvertToRect(ARect));
            Panel.Invalidate();
          };
        };
      };
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      if (this.FCollection != null) this.FOwner = rtl.as(this.FCollection,$mod.TTMSFNCPanelSections).FOwner$1;
      this.FSize = 48;
      this.Changed$1();
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCPanelSection.isPrototypeOf(Source)) {
        this.FText = rtl.as(Source,$mod.TTMSFNCPanelSection).FText;
        this.FSize = rtl.as(Source,$mod.TTMSFNCPanelSection).FSize;
      };
    };
    this.Destroy = function () {
      pas.Classes.TCollectionItem.Destroy.call(this);
      this.Changed$1();
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("Text",2,rtl.string,"FText","SetText");
    $r.addProperty("Size",14,rtl.double,"FSize","SetSize",{stored: "IsSizeStored"});
    $r.addProperty("Control",2,pas["WEBLib.Controls"].$rtti["TControl"],"FControl","SetControl");
    $r.addProperty("Tag",0,rtl.nativeint,"FTag","FTag",{Default: 0});
  });
  rtl.createClass(this,"TTMSFNCPanelSections",pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection,function () {
    this.$init = function () {
      pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection.$init.call(this);
      this.FOwner$1 = null;
      this.FOnChanged = null;
    };
    this.$final = function () {
      this.FOwner$1 = undefined;
      this.FOnChanged = undefined;
      pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection.$final.call(this);
    };
    this.GetItem$1 = function (Index) {
      var Result = null;
      Result = this.GetItem(Index);
      return Result;
    };
    this.SetItem$1 = function (Index, Value) {
      pas.Classes.TCollection.SetItem.call(this,Index,Value);
    };
    this.Changed$1 = function () {
      if (this.FOnChanged != null) this.FOnChanged(this);
    };
    this.Create$3 = function (AOwner) {
      pas.Classes.TOwnedCollection.Create$2.call(this,AOwner,$mod.TTMSFNCPanelSection);
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
    $r.addMethod("Create$3",2,[["AOwner",$mod.$rtti["TTMSFNCCustomPanel"]]]);
  });
  rtl.createClass(this,"TTMSFNCPanelSectionsAppearance",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FFont = null;
      this.FFill = null;
      this.FStroke = null;
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FFont = undefined;
      this.FFill = undefined;
      this.FStroke = undefined;
      this.FOnChange = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetFill = function (Value) {
      this.FFill.Assign(Value);
    };
    this.SetFont = function (Value) {
      this.FFont.AssignSource(Value);
    };
    this.SetStroke = function (Value) {
      this.FStroke.Assign(Value);
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
    this.Assign = function (Source) {
      if ($mod.TTMSFNCPanelSectionsAppearance.isPrototypeOf(Source)) {
        this.FFill.Assign(rtl.as(Source,$mod.TTMSFNCPanelSectionsAppearance).FFill);
        this.FStroke.Assign(rtl.as(Source,$mod.TTMSFNCPanelSectionsAppearance).FStroke);
        this.FFont.AssignSource(rtl.as(Source,$mod.TTMSFNCPanelSectionsAppearance).FFont);
      };
    };
    this.Create$1 = function () {
      this.FFont = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFont.$create("Create$2");
      this.FFont.FOnChanged = rtl.createCallback(this,"FontChanged");
      this.FFill = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFill.$create("Create$1",[pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid,pas["WEBLib.TMSFNCGraphicsTypes"].MakeGraphicsColor(240,240,240),8421504,-1,-1]);
      this.FFill.FOnChanged = rtl.createCallback(this,"FillChanged");
      this.FStroke = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStroke.$create("Create$1",[pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid,12632256]);
      this.FStroke.FOnChanged = rtl.createCallback(this,"StrokeChanged");
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FFill");
      rtl.free(this,"FStroke");
      rtl.free(this,"FFont");
      pas.System.TObject.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addProperty("Font",2,pas["WEBLib.TMSFNCGraphicsTypes"].$rtti["TTMSFNCGraphicsFont"],"FFont","SetFont");
    $r.addProperty("Fill",2,pas["WEBLib.TMSFNCGraphicsTypes"].$rtti["TTMSFNCGraphicsFill"],"FFill","SetFill");
    $r.addProperty("Stroke",2,pas["WEBLib.TMSFNCGraphicsTypes"].$rtti["TTMSFNCGraphicsStroke"],"FStroke","SetStroke");
  });
  rtl.createClass(this,"TTMSFNCCustomPanel",pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.$init.call(this);
      this.FOldHeight = 0.0;
      this.FOldWidth = 0.0;
      this.FPopup = null;
      this.FExpandState = 0;
      this.FCompactState = 0;
      this.FHeaderDownButton = $mod.TTMSFNCPanelDownButton.$new();
      this.FFooterDownButton = $mod.TTMSFNCPanelDownButton.$new();
      this.FHeaderButtonStates = null;
      this.FFooterButtonStates = null;
      this.FHeaderAnchor = "";
      this.FFooterAnchor = "";
      this.FBitmapContainer = null;
      this.FHeader = null;
      this.FFooter = null;
      this.FOnHeaderDropDownButtonClick = null;
      this.FOnHeaderExpandButtonClick = null;
      this.FOnHeaderCloseButtonClick = null;
      this.FOnHeaderAnchorClick = null;
      this.FOnFooterAnchorClick = null;
      this.FOnFooterDropDownButtonClick = null;
      this.FOnFooterExpandButtonClick = null;
      this.FOnFooterCloseButtonClick = null;
      this.FCloseAction = 0;
      this.FDropDownAction = 0;
      this.FExpandAction = 0;
      this.FCompactAction = 0;
      this.FSections = null;
      this.FSectionsAppearance = null;
      this.FOnHeaderCompactButtonClick = null;
      this.FOnFooterCompactButtonClick = null;
      this.FOnInternalHeaderCompactButtonClick = null;
      this.FGlobalFont = null;
    };
    this.$final = function () {
      this.FPopup = undefined;
      this.FHeaderDownButton = undefined;
      this.FFooterDownButton = undefined;
      this.FHeaderButtonStates = undefined;
      this.FFooterButtonStates = undefined;
      this.FBitmapContainer = undefined;
      this.FHeader = undefined;
      this.FFooter = undefined;
      this.FOnHeaderDropDownButtonClick = undefined;
      this.FOnHeaderExpandButtonClick = undefined;
      this.FOnHeaderCloseButtonClick = undefined;
      this.FOnHeaderAnchorClick = undefined;
      this.FOnFooterAnchorClick = undefined;
      this.FOnFooterDropDownButtonClick = undefined;
      this.FOnFooterExpandButtonClick = undefined;
      this.FOnFooterCloseButtonClick = undefined;
      this.FSections = undefined;
      this.FSectionsAppearance = undefined;
      this.FOnHeaderCompactButtonClick = undefined;
      this.FOnFooterCompactButtonClick = undefined;
      this.FOnInternalHeaderCompactButtonClick = undefined;
      this.FGlobalFont = undefined;
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.$final.call(this);
    };
    this.GetBitmapContainer = function () {
      var Result = null;
      Result = this.FBitmapContainer;
      return Result;
    };
    this.SetBitmapContainer = function (Value) {
      this.FBitmapContainer = Value;
      this.Invalidate();
    };
    this.SetFooter = function (Value) {
      this.FFooter.Assign(Value);
    };
    this.SetHeader = function (Value) {
      this.FHeader.Assign(Value);
    };
    this.SetCloseAction = function (Value) {
      this.FCloseAction = Value;
    };
    this.SetDropDownAction = function (Value) {
      this.FDropDownAction = Value;
    };
    this.SetExpandAction = function (Value) {
      this.FExpandAction = Value;
    };
    this.SetCompactAction = function (Value) {
      this.FCompactAction = Value;
    };
    this.SetSections = function (Value) {
      this.FSections.Assign(Value);
    };
    this.SetSectionsAppearance = function (Value) {
      this.FSectionsAppearance.Assign(Value);
    };
    this.SetGlobalFont = function (Value) {
      this.FGlobalFont.Assign(Value);
    };
    this.ChangeDPIScale = function (M, D) {
      var I = 0;
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.ChangeDPIScale.apply(this,arguments);
      this.BeginUpdate();
      this.FOldHeight = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.MulDivSingle(this.FOldHeight,M,D);
      this.FOldWidth = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.MulDivSingle(this.FOldWidth,M,D);
      this.FHeader.ChangeDPIScale(M,D);
      this.FFooter.ChangeDPIScale(M,D);
      this.FSectionsAppearance.FFont.SetHeight(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.MulDivInt(this.FSectionsAppearance.FFont.FHeight,M,D));
      for (var $l = 0, $end = this.FSections.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        this.FSections.GetItem$1(I).FSize = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.MulDivSingle(this.FSections.GetItem$1(I).FSize,M,D);
        this.FSections.GetItem$1(I).UpdateControlBounds();
      };
      this.EndUpdate();
    };
    this.ApplyStyle = function () {
      var c = 0;
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.ApplyStyle.call(this);
      this.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkNone);
      this.FHeader.FStroke.SetColor(this.FStroke.FColor);
      this.FFooter.FStroke.SetColor(this.FStroke.FColor);
      c = -1;
      if (pas["WEBLib.TMSFNCStyles"].TTMSFNCStyles.GetStyleHeaderFillColor({get: function () {
          return c;
        }, set: function (v) {
          c = v;
        }})) {
        this.FHeader.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
        this.FHeader.FFill.SetColor(c);
        this.FFooter.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
        this.FFooter.FFill.SetColor(c);
      };
      c = -1;
      if (pas["WEBLib.TMSFNCStyles"].TTMSFNCStyles.GetStyleHeaderFillColorTo({get: function () {
          return c;
        }, set: function (v) {
          c = v;
        }})) {
        this.FHeader.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkGradient);
        this.FHeader.FFill.SetColorTo(c);
        this.FFooter.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkGradient);
        this.FFooter.FFill.SetColorTo(c);
      };
      c = -1;
      if (pas["WEBLib.TMSFNCStyles"].TTMSFNCStyles.GetStyleTextFontColor({get: function () {
          return c;
        }, set: function (v) {
          c = v;
        }})) {
        this.FHeader.FFont.SetColor(c);
        this.FFooter.FFont.SetColor(c);
      };
    };
    this.ResetToDefaultStyle = function () {
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.ResetToDefaultStyle.call(this);
      this.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
      this.FHeader.FStroke.SetColor(12632256);
      this.FFooter.FStroke.SetColor(12632256);
      this.BeginUpdate();
      this.FHeader.FFill.SetColor(0xF9F2EE);
      this.FHeader.FFont.SetColor(0x454545);
      this.FFooter.FFill.SetColor(0xF9F2EE);
      this.FFooter.FFont.SetColor(0x454545);
      pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.SetFontSize(this.FHeader.FFont,14,this.FPaintScaleFactor);
      this.FHeader.FFont.SetStyle(rtl.createSet(pas["WEBLib.Graphics"].TFontStyle.fsBold));
      pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.SetFontSize(this.FFooter.FFont,14,this.FPaintScaleFactor);
      this.EndUpdate();
    };
    this.GetElementRect = function (ARect, AElement) {
      var Result = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      if (AElement === this.FHeader) {
        Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(ARect.Left,ARect.Top,ARect.Right,ARect.Top + AElement.FSize))}
       else if (AElement === this.FFooter) Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(ARect.Left,ARect.Bottom - AElement.FSize,ARect.Right,ARect.Bottom));
      return Result;
    };
    this.GetTextRect = function (ARect, AElement) {
      var Result = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var x = 0.0;
      if (AElement.FStretchText) {
        x = ARect.Right}
       else x = this.GetButtonsRect(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),AElement).Left;
      if (AElement === this.FHeader) {
        Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(ARect.Left,ARect.Top,x,ARect.Top + AElement.FSize))}
       else if (AElement === this.FFooter) Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(ARect.Left,ARect.Bottom - AElement.FSize,x,ARect.Bottom));
      return Result;
    };
    this.GetSectionRect = function (ARect) {
      var Result = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      Result.$assign(ARect);
      if (this.FHeader.FVisible) Result.Top = Result.Top + this.FHeader.FSize;
      if (this.FFooter.FVisible) Result.Bottom = Result.Bottom - this.FFooter.FSize;
      return Result;
    };
    this.GetButtonsRect = function (ARect, AElement) {
      var Result = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var I = 0;
      if (AElement === this.FHeader) {
        Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(ARect.Right,ARect.Top,ARect.Right,ARect.Top + AElement.FSize))}
       else if (AElement === this.FFooter) Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(ARect.Right,ARect.Bottom - AElement.FSize,ARect.Right,ARect.Bottom));
      if (AElement.FShowButtons && rtl.neSet(AElement.FButtons,{})) {
        for (I = 0; I <= 3; I++) if ((I in AElement.FButtons) && (((I === $mod.TTMSFNCPanelButton.pbCompact) && (this.FCompactState === $mod.TTMSFNCPanelCompactState.pcsCollapsed)) || (this.FCompactState === $mod.TTMSFNCPanelCompactState.pcsExpanded))) Result.Left = Result.Left - AElement.FButtonSpacing - AElement.FButtonSize;
      };
      return Result;
    };
    this.XYToAnchor = function (X, Y, AElement) {
      var Result = "";
      var g = null;
      var ha = 0;
      var va = 0;
      Result = "";
      if (AElement.IsHTML()) {
        g = pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.$create("CreateBitmapCanvas",[1,1,false,true]);
        g.BeginScene();
        g.FOptimizedHTMLDrawing = this.FOptimizedHTMLDrawing;
        g.FBitmapContainer = this.GetBitmapContainer();
        try {
          g.FFont.Assign(AElement.FFont);
          ha = AElement.FHorizontalTextAlign;
          va = AElement.FVerticalTextAlign;
          Result = g.DrawText$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(this.GetTextRect(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(this.GetLocalRect()),AElement)),AElement.FText,AElement.FWordWrapping,ha,va,AElement.FTrimming,0,-1,-1,true,true,X,Y);
        } finally {
          g.EndScene();
          g = rtl.freeLoc(g);
        };
      };
      return Result;
    };
    this.XYToButton = function (X, Y, AElement, AButton) {
      var Result = false;
      var I = 0;
      var br = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var btnr = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      Result = false;
      if (!AElement.FShowButtons || rtl.eqSet(AElement.FButtons,{})) return Result;
      btnr.$assign(this.GetButtonsRect(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(this.GetLocalRect()),AElement));
      for (I = 0; I <= 3; I++) {
        if ((I in AElement.FButtons) && (((I === $mod.TTMSFNCPanelButton.pbCompact) && (this.FCompactState === $mod.TTMSFNCPanelCompactState.pcsCollapsed)) || (this.FCompactState === $mod.TTMSFNCPanelCompactState.pcsExpanded))) {
          br.$assign(pas["WEBLib.TMSFNCTypes"].RectF(btnr.Right - AElement.FButtonSpacing - AElement.FButtonSize,btnr.Top + ((btnr.Bottom - btnr.Top - AElement.FButtonSize) / 2),btnr.Right - AElement.FButtonSpacing,btnr.Top + ((btnr.Bottom - btnr.Top - AElement.FButtonSize) / 2) + AElement.FButtonSize));
          if (pas["WEBLib.TMSFNCTypes"].PtInRectEx(br,pas["WEBLib.TMSFNCTypes"].PointF(X,Y))) {
            AButton.set(I);
            Result = true;
            break;
          };
          btnr.Right = btnr.Right - AElement.FButtonSpacing - AElement.FButtonSize;
        };
      };
      return Result;
    };
    this.ClearButtonStates = function (AHoverOnly) {
      var Result = false;
      var I = 0;
      var st = 0;
      Result = false;
      for (var $l = 0, $end = this.FHeaderButtonStates.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        st = this.FHeaderButtonStates.GetItem(I);
        if (st !== $mod.TTMSFNCPanelButtonState.bsNormal) Result = true;
        if ((AHoverOnly && (st === $mod.TTMSFNCPanelButtonState.bsHover)) || !AHoverOnly) this.FHeaderButtonStates.SetItem(I,$mod.TTMSFNCPanelButtonState.bsNormal);
      };
      for (var $l1 = 0, $end1 = this.FFooterButtonStates.GetCount() - 1; $l1 <= $end1; $l1++) {
        I = $l1;
        st = this.FFooterButtonStates.GetItem(I);
        if (st !== $mod.TTMSFNCPanelButtonState.bsNormal) Result = true;
        if ((AHoverOnly && (st === $mod.TTMSFNCPanelButtonState.bsHover)) || !AHoverOnly) this.FFooterButtonStates.SetItem(I,$mod.TTMSFNCPanelButtonState.bsNormal);
      };
      return Result;
    };
    this.GetButtonRect = function (ARect, AElement, AButton) {
      var Result = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var I = 0;
      var br = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var btnr = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      btnr.$assign(this.GetButtonsRect(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),AElement));
      for (I = 0; I <= 3; I++) {
        if ((I in AElement.FButtons) && (((I === $mod.TTMSFNCPanelButton.pbCompact) && (this.FCompactState === $mod.TTMSFNCPanelCompactState.pcsCollapsed)) || (this.FCompactState === $mod.TTMSFNCPanelCompactState.pcsExpanded))) {
          br.$assign(pas["WEBLib.TMSFNCTypes"].RectF(Math.round(btnr.Right - AElement.FButtonSpacing - AElement.FButtonSize),Math.round(btnr.Top + ((btnr.Bottom - btnr.Top - AElement.FButtonSize) / 2)),Math.round(btnr.Right - AElement.FButtonSpacing),Math.round(btnr.Top + ((btnr.Bottom - btnr.Top - AElement.FButtonSize) / 2) + AElement.FButtonSize)));
          btnr.Right = btnr.Right - AElement.FButtonSpacing - AElement.FButtonSize;
          if (I === AButton) {
            Result.$assign(br);
          };
        };
      };
      return Result;
    };
    this.GetCollapsedHeight = function () {
      var Result = 0.0;
      Result = 0;
      if (this.FHeader.FVisible) Result = Result + this.FHeader.FSize;
      if (this.FFooter.FVisible) Result = Result + this.FFooter.FSize;
      return Result;
    };
    this.GetCollapsedWidth = function () {
      var Result = 0.0;
      Result = this.FHeader.FButtonSize + (this.FHeader.FButtonSpacing * 2);
      return Result;
    };
    this.IsAppearanceProperty = function (AObject, APropertyName, APropertyType) {
      var Result = false;
      Result = pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.IsAppearanceProperty.call(this,AObject,APropertyName,APropertyType);
      Result = Result || (APropertyName === "Header") || (APropertyName === "Footer");
      return Result;
    };
    this.Notification = function (AComponent, Operation) {
      var I = 0;
      pas["WEBLib.Menus"].TWebCustomControl.Notification.apply(this,arguments);
      if (!(pas.Classes.TComponentStateItem.csDestroying in this.FComponentState) && (Operation === pas.Classes.TOperation.opRemove) && (AComponent === this.FBitmapContainer)) this.FBitmapContainer = null;
      if (!(pas.Classes.TComponentStateItem.csDestroying in this.FComponentState) && (Operation === pas.Classes.TOperation.opRemove)) {
        for (var $l = 0, $end = this.FSections.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          if (AComponent === this.FSections.GetItem$1(I).FControl) this.FSections.GetItem$1(I).FControl = null;
        };
      };
    };
    this.FooterChanged = function (Sender) {
      this.Realign();
      this.Invalidate();
    };
    this.HeaderChanged = function (Sender) {
      this.Realign();
      this.Invalidate();
    };
    this.SectionsChanged = function (Sender) {
      this.UpdateControlBounds();
      this.Invalidate();
    };
    this.SectionsAppearanceChanged = function (Sender) {
      this.UpdateControlBounds();
      this.Invalidate();
    };
    this.Draw = function (AGraphics, ARect) {
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.Draw.apply(this,arguments);
      AGraphics.FBitmapContainer = this.GetBitmapContainer();
      this.DrawSections(AGraphics,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(this.GetSectionRect(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect))));
      this.DrawElement(AGraphics,this.FHeader,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(this.GetTextRect(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),this.FHeader)),pas["WEBLib.TMSFNCTypes"].TRectF.$clone(this.GetElementRect(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),this.FHeader)),pas["WEBLib.TMSFNCTypes"].TRectF.$clone(this.GetButtonsRect(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),this.FHeader)),this.FHeaderButtonStates);
      this.DrawElement(AGraphics,this.FFooter,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(this.GetTextRect(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),this.FFooter)),pas["WEBLib.TMSFNCTypes"].TRectF.$clone(this.GetElementRect(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),this.FFooter)),pas["WEBLib.TMSFNCTypes"].TRectF.$clone(this.GetButtonsRect(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),this.FFooter)),this.FFooterButtonStates);
    };
    this.DrawSections = function (AGraphics, ARect) {
      var i = 0;
      var sec = null;
      var y = 0.0;
      var br = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      y = 0;
      AGraphics.FFill.Assign(this.FSectionsAppearance.FFill);
      AGraphics.FStroke.Assign(this.FSectionsAppearance.FStroke);
      AGraphics.FFont.AssignSource(this.FSectionsAppearance.FFont);
      for (var $l = 0, $end = this.FSections.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        sec = this.FSections.GetItem$1(i);
        br.$assign(pas["WEBLib.TMSFNCTypes"].RectF(ARect.Left,ARect.Top + y,ARect.Right,ARect.Top + y + Math.max(16,AGraphics.CalculateTextHeight$1(sec.FText) + 4)));
        AGraphics.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(br),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShiftLeftAndExpandHeight);
        pas["WEBLib.TMSFNCTypes"].InflateRectEx(br,-2,-2);
        AGraphics.DrawText$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(br),sec.FText,false,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaLeading,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextTrimming.gttNone,0,-1,-1,true,false,-1,-1);
        y = y + sec.FSize;
      };
    };
    this.DrawElement = function (AGraphics, AElement, ATextRect, ARect, AButtonsRect, AButtonStates) {
      var tr = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var btnr = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var br = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var I = 0;
      var e = 0;
      var c = 0;
      if (!AElement.FVisible) return;
      AGraphics.FFill.Assign(AElement.FFill);
      AGraphics.FStroke.Assign(AElement.FStroke);
      AGraphics.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
      if (this.FCompactState === $mod.TTMSFNCPanelCompactState.pcsExpanded) {
        tr.$assign(ATextRect);
        pas["WEBLib.TMSFNCTypes"].InflateRectEx(tr,this.ScalePaintValue(-3),this.ScalePaintValue(-3));
        AGraphics.FFont.AssignSource(AElement.FFont);
        AGraphics.DrawText$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(tr),AElement.FText,AElement.FWordWrapping,AElement.FHorizontalTextAlign,AElement.FVerticalTextAlign,AElement.FTrimming,0,-1,-1,true,false,-1,-1);
      };
      if (AElement.FShowButtons && rtl.neSet(AElement.FButtons,{})) {
        btnr.$assign(AButtonsRect);
        for (I = 0; I <= 3; I++) {
          if ((I in AElement.FButtons) && (((I === $mod.TTMSFNCPanelButton.pbCompact) && (this.FCompactState === $mod.TTMSFNCPanelCompactState.pcsCollapsed)) || (this.FCompactState === $mod.TTMSFNCPanelCompactState.pcsExpanded))) {
            br.$assign(pas["WEBLib.TMSFNCTypes"].RectF(Math.round(btnr.Right - AElement.FButtonSpacing - AElement.FButtonSize),Math.round(btnr.Top + ((btnr.Bottom - btnr.Top - AElement.FButtonSize) / 2)),Math.round(btnr.Right - AElement.FButtonSpacing),Math.round(btnr.Top + ((btnr.Bottom - btnr.Top - AElement.FButtonSize) / 2) + AElement.FButtonSize)));
            e = this.FExpandState;
            c = this.FCompactState;
            var $tmp = I;
            if ($tmp === $mod.TTMSFNCPanelButton.pbCompact) {
              AGraphics.DrawCompactButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(br),c,AButtonStates.GetItem(I) === $mod.TTMSFNCPanelButtonState.bsDown,AButtonStates.GetItem(I) === $mod.TTMSFNCPanelButtonState.bsHover,true,this.GetAdaptToStyle(),this.FPaintScaleFactor)}
             else if ($tmp === $mod.TTMSFNCPanelButton.pbClose) {
              AGraphics.DrawCloseButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(br),AButtonStates.GetItem(I) === $mod.TTMSFNCPanelButtonState.bsDown,AButtonStates.GetItem(I) === $mod.TTMSFNCPanelButtonState.bsHover,true,this.GetAdaptToStyle(),this.FPaintScaleFactor)}
             else if ($tmp === $mod.TTMSFNCPanelButton.pbExpander) {
              AGraphics.DrawExpanderButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(br),e,AButtonStates.GetItem(I) === $mod.TTMSFNCPanelButtonState.bsDown,AButtonStates.GetItem(I) === $mod.TTMSFNCPanelButtonState.bsHover,true,this.GetAdaptToStyle(),this.FPaintScaleFactor)}
             else if ($tmp === $mod.TTMSFNCPanelButton.pbDropDown) AGraphics.DrawDropDownButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(br),AButtonStates.GetItem(I) === $mod.TTMSFNCPanelButtonState.bsDown,AButtonStates.GetItem(I) === $mod.TTMSFNCPanelButtonState.bsHover,true,true,this.GetAdaptToStyle(),this.FPaintScaleFactor);
            btnr.Right = btnr.Right - AElement.FButtonSpacing - AElement.FButtonSize;
          };
        };
      };
    };
    this.HandleMouseLeave = function () {
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControlBaseCommon.HandleMouseLeave.call(this);
      if (this.ClearButtonStates(false)) this.Invalidate();
    };
    this.UpdateControlAfterResize = function () {
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.UpdateControlAfterResize.call(this);
      this.UpdateControlBounds();
    };
    this.HandleMouseDown = function (Button, Shift, X, Y) {
      var hb = false;
      var fb = false;
      var hbtn = 0;
      var fbtn = 0;
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControlBaseCommon.HandleMouseDown.apply(this,arguments);
      this.FHeaderDownButton.Down = false;
      this.FFooterDownButton.Down = false;
      fb = false;
      hbtn = $mod.TTMSFNCPanelButton.pbClose;
      hb = this.XYToButton(X,Y,this.FHeader,{get: function () {
          return hbtn;
        }, set: function (v) {
          hbtn = v;
        }});
      if (!hb) {
        fbtn = $mod.TTMSFNCPanelButton.pbClose;
        fb = this.XYToButton(X,Y,this.FFooter,{get: function () {
            return fbtn;
          }, set: function (v) {
            fbtn = v;
          }});
        if (fb) {
          this.FFooterButtonStates.SetItem(fbtn,$mod.TTMSFNCPanelButtonState.bsDown);
          this.FFooterDownButton.Down = true;
          this.FFooterDownButton.Button = fbtn;
        };
      } else {
        this.FHeaderButtonStates.SetItem(hbtn,$mod.TTMSFNCPanelButtonState.bsDown);
        this.FHeaderDownButton.Down = true;
        this.FHeaderDownButton.Button = hbtn;
      };
      if (!hb && !fb) {
        this.FHeaderAnchor = this.XYToAnchor(X,Y,this.FHeader);
        if (this.FHeaderAnchor === "") this.FFooterAnchor = this.XYToAnchor(X,Y,this.FFooter);
      };
      if (fb || hb) this.Invalidate();
    };
    this.HandleMouseMove = function (Shift, X, Y) {
      var h = "";
      var f = "";
      var hb = false;
      var fb = false;
      var c = false;
      var hbtn = 0;
      var fbtn = 0;
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControlBaseCommon.HandleMouseMove.apply(this,arguments);
      c = false;
      hb = false;
      fb = false;
      if (!this.FHeaderDownButton.Down && !this.FFooterDownButton.Down) {
        c = this.ClearButtonStates(true);
        fb = false;
        hbtn = $mod.TTMSFNCPanelButton.pbClose;
        hb = this.XYToButton(X,Y,this.FHeader,{get: function () {
            return hbtn;
          }, set: function (v) {
            hbtn = v;
          }});
        if (!hb) {
          fbtn = $mod.TTMSFNCPanelButton.pbClose;
          fb = this.XYToButton(X,Y,this.FFooter,{get: function () {
              return fbtn;
            }, set: function (v) {
              fbtn = v;
            }});
          if (fb) this.FFooterButtonStates.SetItem(fbtn,$mod.TTMSFNCPanelButtonState.bsHover);
        } else this.FHeaderButtonStates.SetItem(hbtn,$mod.TTMSFNCPanelButtonState.bsHover);
      };
      if (!hb && !fb) {
        h = this.XYToAnchor(X,Y,this.FHeader);
        if (h === "") f = this.XYToAnchor(X,Y,this.FFooter);
        if ((h !== "") || (f !== "")) {
          this.SetControlCursor(21)}
         else this.SetControlCursor(0);
      };
      if (fb || hb || c) this.Invalidate();
    };
    this.HandleMouseUp = function (Button, Shift, X, Y) {
      var hb = false;
      var fb = false;
      var hbtn = 0;
      var fbtn = 0;
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControlBaseCommon.HandleMouseUp.apply(this,arguments);
      if ((this.FFooterAnchor === "") && (this.FHeaderAnchor === "")) {
        hbtn = $mod.TTMSFNCPanelButton.pbClose;
        hb = this.XYToButton(X,Y,this.FHeader,{get: function () {
            return hbtn;
          }, set: function (v) {
            hbtn = v;
          }});
        if (!hb) {
          fbtn = $mod.TTMSFNCPanelButton.pbClose;
          fb = this.XYToButton(X,Y,this.FFooter,{get: function () {
              return fbtn;
            }, set: function (v) {
              fbtn = v;
            }});
          if (fb && (fbtn === this.FFooterDownButton.Button) && this.FFooterDownButton.Down) {
            var $tmp = fbtn;
            if ($tmp === $mod.TTMSFNCPanelButton.pbCompact) {
              this.HandleCompactAction(this.FFooter)}
             else if ($tmp === $mod.TTMSFNCPanelButton.pbClose) {
              this.HandleCloseAction(this.FFooter)}
             else if ($tmp === $mod.TTMSFNCPanelButton.pbExpander) {
              this.HandleExpandAction(this.FHeader)}
             else if ($tmp === $mod.TTMSFNCPanelButton.pbDropDown) this.HandleDropDownAction(fbtn,this.FFooter);
          };
        } else if ((hbtn === this.FHeaderDownButton.Button) && this.FHeaderDownButton.Down) {
          var $tmp1 = hbtn;
          if ($tmp1 === $mod.TTMSFNCPanelButton.pbCompact) {
            this.HandleCompactAction(this.FHeader)}
           else if ($tmp1 === $mod.TTMSFNCPanelButton.pbClose) {
            this.HandleCloseAction(this.FHeader)}
           else if ($tmp1 === $mod.TTMSFNCPanelButton.pbExpander) {
            this.HandleExpandAction(this.FHeader)}
           else if ($tmp1 === $mod.TTMSFNCPanelButton.pbDropDown) this.HandleDropDownAction(hbtn,this.FHeader);
        };
      } else {
        if (this.FHeaderAnchor !== "") this.DoHeaderAnchorClick(this.FHeaderAnchor);
        if (this.FFooterAnchor !== "") this.DoFooterAnchorClick(this.FFooterAnchor);
      };
      this.FFooterAnchor = "";
      this.FHeaderAnchor = "";
      this.FHeaderDownButton.Down = false;
      this.FFooterDownButton.Down = false;
      if (this.ClearButtonStates(false)) this.Invalidate();
    };
    this.HandleDropDownAction = function (AButton, AElement) {
      var br = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var pt = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      var $tmp = this.FDropDownAction;
      if ($tmp === $mod.TTMSFNCPanelDropDownAction.pddaPopup) {
        if (AElement.FDropDownControl != null) {
          br.$assign(this.GetButtonRect(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(this.GetLocalRect()),AElement,AButton));
          pt.$assign(this.LocalToScreenEx(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(br.Left,br.Top + (br.Bottom - br.Top)))));
          AElement.FDropDownControl.SetWidth(Math.round(AElement.FDropDownWidth));
          AElement.FDropDownControl.SetHeight(Math.round(AElement.FDropDownHeight));
          this.FPopup.SetDropDownHeight(AElement.FDropDownHeight);
          this.FPopup.SetDropDownWidth(AElement.FDropDownWidth);
          this.FPopup.SetContentControl(AElement.FDropDownControl);
          this.FPopup.FFocusedControl = AElement.FDropDownControl;
          this.FPopup.SetPlacementControl(this);
          this.FPopup.FPlacementRectangle.SetLeft(pt.X);
          this.FPopup.FPlacementRectangle.SetTop(pt.Y);
          this.FPopup.FPlacementRectangle.SetRight(pt.X + this.FPopup.FDropDownWidth);
          this.FPopup.FPlacementRectangle.SetBottom(pt.Y + this.FPopup.FDropDownHeight);
          this.FPopup.Popup(false);
        };
      };
      if (AElement === this.FHeader) {
        this.DoHeaderDropDownButtonClick()}
       else if (AElement === this.FFooter) this.DoFooterDropDownButtonClick();
    };
    this.HandleCloseAction = function (AElement) {
      var p = null;
      var $tmp = this.FCloseAction;
      if ($tmp === $mod.TTMSFNCPanelCloseAction.pcaFree) {
        p = this;
        p = rtl.freeLoc(p);
      } else if ($tmp === $mod.TTMSFNCPanelCloseAction.pcaHide) this.SetVisible(false);
      if (AElement === this.FHeader) {
        this.DoHeaderCloseButtonClick()}
       else if (AElement === this.FFooter) this.DoFooterCloseButtonClick();
    };
    this.HandleExpandAction = function (AElement) {
      var $tmp = this.FExpandAction;
      if ($tmp === $mod.TTMSFNCPanelExpandAction.peaExpand) {
        var $tmp1 = this.FExpandState;
        if ($tmp1 === $mod.TTMSFNCPanelExpandState.pesCollapsed) {
          this.Expand(false)}
         else if ($tmp1 === $mod.TTMSFNCPanelExpandState.pesExpanded) this.Collapse(false);
      };
      if (AElement === this.FHeader) {
        this.DoHeaderExpandButtonClick()}
       else if (AElement === this.FFooter) this.DoFooterExpandButtonClick();
    };
    this.HandleCompactAction = function (AElement) {
      var $tmp = this.FCompactAction;
      if ($tmp === $mod.TTMSFNCPanelCompactAction.pcCompact) {
        var $tmp1 = this.FCompactState;
        if ($tmp1 === $mod.TTMSFNCPanelCompactState.pcsCollapsed) {
          this.Expand(true)}
         else if ($tmp1 === $mod.TTMSFNCPanelCompactState.pcsExpanded) this.Collapse(true);
      };
      if (AElement === this.FHeader) {
        this.DoHeaderCompactButtonClick()}
       else if (AElement === this.FFooter) this.DoFooterCompactButtonClick();
    };
    this.DoHeaderAnchorClick = function (AAnchor) {
      if (this.FOnHeaderAnchorClick != null) {
        this.FOnHeaderAnchorClick(this,AAnchor)}
       else pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.OpenURL(AAnchor);
    };
    this.DoHeaderCloseButtonClick = function () {
      if (this.FOnHeaderCloseButtonClick != null) this.FOnHeaderCloseButtonClick(this);
    };
    this.DoHeaderExpandButtonClick = function () {
      if (this.FOnHeaderExpandButtonClick != null) this.FOnHeaderExpandButtonClick(this);
    };
    this.DoHeaderDropDownButtonClick = function () {
      if (this.FOnHeaderDropDownButtonClick != null) this.FOnHeaderDropDownButtonClick(this);
    };
    this.DoHeaderCompactButtonClick = function () {
      if (this.FOnInternalHeaderCompactButtonClick != null) this.FOnInternalHeaderCompactButtonClick(this);
      if (this.FOnHeaderCompactButtonClick != null) this.FOnHeaderCompactButtonClick(this);
    };
    this.DoFooterAnchorClick = function (AAnchor) {
      if (this.FOnFooterAnchorClick != null) {
        this.FOnFooterAnchorClick(this,AAnchor)}
       else pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.OpenURL(AAnchor);
    };
    this.DoFooterCloseButtonClick = function () {
      if (this.FOnFooterCloseButtonClick != null) this.FOnFooterCloseButtonClick(this);
    };
    this.DoFooterExpandButtonClick = function () {
      if (this.FOnFooterExpandButtonClick != null) this.FOnFooterExpandButtonClick(this);
    };
    this.DoFooterDropDownButtonClick = function () {
      if (this.FOnFooterDropDownButtonClick != null) this.FOnFooterDropDownButtonClick(this);
    };
    this.DoFooterCompactButtonClick = function () {
      if (this.FOnFooterCompactButtonClick != null) this.FOnFooterCompactButtonClick(this);
    };
    this.UpdateControlBounds = function () {
      var I = 0;
      for (var $l = 0, $end = this.FSections.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        this.FSections.GetItem$1(I).UpdateControlBounds();
      };
    };
    this.AlignControls = function (AControl, Rect) {
      if (this.FHeader.FVisible) Rect.Top = Rect.Top + Math.round(this.FHeader.FSize);
      if (this.FFooter.FVisible) Rect.Bottom = Rect.Bottom - Math.round(this.FFooter.FSize);
      pas["WEBLib.Controls"].TControl.AlignControls.apply(this,arguments);
    };
    this.Loaded = function () {
      pas["WEBLib.Controls"].TCustomControl.Loaded.call(this);
    };
    this.SetFonts = function (ASetType) {
      this.BeginUpdate();
      this.FGlobalFont.ApplyChange(this.FHeader.FFont,ASetType);
      this.FGlobalFont.ApplyChange(this.FFooter.FFont,ASetType);
      this.FGlobalFont.ApplyChange(this.FSectionsAppearance.FFont,ASetType);
      this.EndUpdate();
    };
    this.Create$1 = function (AOwner) {
      var I = 0;
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.Create$1.apply(this,arguments);
      this.FSectionsAppearance = $mod.TTMSFNCPanelSectionsAppearance.$create("Create$1");
      this.FSectionsAppearance.FOnChange = rtl.createCallback(this,"SectionsAppearanceChanged");
      this.FSections = $mod.TTMSFNCPanelSections.$create("Create$3",[this]);
      this.FSections.FOnChanged = rtl.createCallback(this,"SectionsChanged");
      this.FFooter = $mod.TTMSFNCPanelFooter.$create("Create$1");
      if (this.IsDesignTime()) this.FFooter.SetText("Footer");
      this.FFooter.FOnChanged = rtl.createCallback(this,"FooterChanged");
      this.FHeader = $mod.TTMSFNCPanelHeader.$create("Create$1");
      if (this.IsDesignTime()) this.FHeader.SetText("Header");
      this.FHeader.FOnChanged = rtl.createCallback(this,"HeaderChanged");
      this.FHeaderButtonStates = $mod.TTMSFNCPanelButtonStates.$create("Create$1");
      for (I = 0; I <= 3; I++) this.FHeaderButtonStates.Add($mod.TTMSFNCPanelButtonState.bsNormal);
      this.FFooterButtonStates = $mod.TTMSFNCPanelButtonStates.$create("Create$1");
      for (I = 0; I <= 3; I++) this.FFooterButtonStates.Add($mod.TTMSFNCPanelButtonState.bsNormal);
      this.FCloseAction = $mod.TTMSFNCPanelCloseAction.pcaHide;
      this.FExpandAction = $mod.TTMSFNCPanelExpandAction.peaExpand;
      this.FCompactAction = $mod.TTMSFNCPanelCompactAction.pcCompact;
      this.FDropDownAction = $mod.TTMSFNCPanelDropDownAction.pddaPopup;
      this.FPopup = pas["WEBLib.TMSFNCPopup"].TTMSFNCPopup.$create("Create$1",[this]);
      this.FPopup.SetPlacement(pas["WEBLib.TMSFNCPopup"].TTMSFNCPopupPlacement.ppAbsolute);
      this.FExpandState = $mod.TTMSFNCPanelExpandState.pesExpanded;
      this.FCompactState = $mod.TTMSFNCPanelCompactState.pcsExpanded;
      this.FGlobalFont = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCAppearanceGlobalFont.$create("Create$1",[this]);
      this.SetWidth(200);
      this.SetHeight(275);
      if (this.IsDesignTime()) this.InitSample();
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FGlobalFont");
      rtl.free(this,"FHeaderButtonStates");
      rtl.free(this,"FFooterButtonStates");
      rtl.free(this,"FFooter");
      rtl.free(this,"FHeader");
      rtl.free(this,"FSections");
      rtl.free(this,"FSectionsAppearance");
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.Destroy.call(this);
    };
    this.Assign = function (Source) {
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.Assign.apply(this,arguments);
      if ($mod.TTMSFNCCustomPanel.isPrototypeOf(Source)) {
        this.FHeader.Assign(rtl.as(Source,$mod.TTMSFNCCustomPanel).FHeader);
        this.FFooter.Assign(rtl.as(Source,$mod.TTMSFNCCustomPanel).FFooter);
        this.FCloseAction = rtl.as(Source,$mod.TTMSFNCCustomPanel).FCloseAction;
        this.FDropDownAction = rtl.as(Source,$mod.TTMSFNCCustomPanel).FDropDownAction;
        this.FExpandAction = rtl.as(Source,$mod.TTMSFNCCustomPanel).FExpandAction;
        this.FCompactAction = rtl.as(Source,$mod.TTMSFNCCustomPanel).FCompactAction;
      };
    };
    this.Expand = function (ACompact) {
      if (ACompact) {
        if (this.FCompactState === $mod.TTMSFNCPanelCompactState.pcsCollapsed) {
          this.SetWidth(Math.round(this.FOldWidth));
          this.FCompactState = $mod.TTMSFNCPanelCompactState.pcsExpanded;
        };
      } else {
        if (this.FExpandState === $mod.TTMSFNCPanelExpandState.pesCollapsed) {
          this.SetHeight(Math.round(this.FOldHeight));
          this.FExpandState = $mod.TTMSFNCPanelExpandState.pesExpanded;
        };
      };
    };
    this.Collapse = function (ACompact) {
      if (ACompact) {
        if (this.FCompactState === $mod.TTMSFNCPanelCompactState.pcsExpanded) {
          this.FOldWidth = this.GetWidth();
          this.SetWidth(Math.round(this.GetCollapsedWidth()));
          this.FCompactState = $mod.TTMSFNCPanelCompactState.pcsCollapsed;
        };
      } else {
        if (this.FExpandState === $mod.TTMSFNCPanelExpandState.pesExpanded) {
          this.FOldHeight = this.GetHeight();
          this.SetHeight(Math.round(this.GetCollapsedHeight()));
          this.FExpandState = $mod.TTMSFNCPanelExpandState.pesCollapsed;
        };
      };
    };
    this.Compact = function () {
      this.Collapse(true);
    };
    this.CompactAndCollapse = function () {
      this.Collapse(false);
      this.Collapse(true);
    };
    this.Restore = function () {
      this.Expand(false);
      this.Expand(true);
    };
    this.SetBounds = function (X, Y, AWidth, AHeight) {
      pas["WEBLib.Controls"].TControl.SetBounds.call(this,X,Y,AWidth,AHeight);
      this.UpdateControlBounds();
    };
    this.InitSample = function () {
      this.ResetToDefaultStyle();
    };
    rtl.addIntf(this,pas["WEBLib.TMSFNCBitmapContainer"].ITMSFNCBitmapContainer);
    rtl.addIntf(this,pas["WEBLib.TMSFNCGraphicsTypes"].ITMSFNCAppearanceGlobalFont);
    rtl.addIntf(this,pas["WEBLib.TMSFNCGraphics"].ITMSFNCGraphicsExport);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas["WEBLib.TMSFNCStyles"].ITMSFNCAdaptToStyle);
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
  });
  rtl.createClass(this,"TTMSFNCPanel",this.TTMSFNCCustomPanel,function () {
    this.RegisterRuntimeClasses = function () {
      pas["WEBLib.TMSFNCCustomControl"].TTMSFNCCustomControl.RegisterRuntimeClasses.call(this);
      pas.Classes.RegisterClass($mod.TTMSFNCPanel);
    };
    this.GetVersion = function () {
      var Result = "";
      Result = this.$class.GetVersionNumber(1,0,2,1);
      return Result;
    };
    rtl.addIntf(this,pas["WEBLib.TMSFNCBitmapContainer"].ITMSFNCBitmapContainer);
    rtl.addIntf(this,pas["WEBLib.TMSFNCGraphicsTypes"].ITMSFNCAppearanceGlobalFont);
    rtl.addIntf(this,pas["WEBLib.TMSFNCGraphics"].ITMSFNCGraphicsExport);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas["WEBLib.TMSFNCStyles"].ITMSFNCAdaptToStyle);
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("BitmapContainer",3,pas["WEBLib.TMSFNCBitmapContainer"].$rtti["TTMSFNCBitmapContainer"],"GetBitmapContainer","SetBitmapContainer");
    $r.addProperty("Version",1,rtl.string,"GetVersion","");
    $r.addProperty("Fill",2,pas["WEBLib.TMSFNCGraphicsTypes"].$rtti["TTMSFNCGraphicsFill"],"FFill","SetFill");
    $r.addProperty("Sections",2,$mod.$rtti["TTMSFNCPanelSections"],"FSections","SetSections");
    $r.addProperty("SectionsAppearance",2,$mod.$rtti["TTMSFNCPanelSectionsAppearance"],"FSectionsAppearance","SetSectionsAppearance");
    $r.addProperty("Stroke",2,pas["WEBLib.TMSFNCGraphicsTypes"].$rtti["TTMSFNCGraphicsStroke"],"FStroke","SetStroke");
    $r.addProperty("Header",2,$mod.$rtti["TTMSFNCPanelHeader"],"FHeader","SetHeader");
    $r.addProperty("Footer",2,$mod.$rtti["TTMSFNCPanelFooter"],"FFooter","SetFooter");
    $r.addProperty("CloseAction",2,$mod.$rtti["TTMSFNCPanelCloseAction"],"FCloseAction","SetCloseAction",{Default: $mod.TTMSFNCPanelCloseAction.pcaHide});
    $r.addProperty("DropDownAction",2,$mod.$rtti["TTMSFNCPanelDropDownAction"],"FDropDownAction","SetDropDownAction",{Default: $mod.TTMSFNCPanelDropDownAction.pddaPopup});
    $r.addProperty("ExpandAction",2,$mod.$rtti["TTMSFNCPanelExpandAction"],"FExpandAction","SetExpandAction",{Default: $mod.TTMSFNCPanelExpandAction.peaExpand});
    $r.addProperty("CompactAction",2,$mod.$rtti["TTMSFNCPanelCompactAction"],"FCompactAction","SetCompactAction",{Default: $mod.TTMSFNCPanelCompactAction.pcCompact});
    $r.addProperty("GlobalFont",2,pas["WEBLib.TMSFNCGraphicsTypes"].$rtti["TTMSFNCAppearanceGlobalFont"],"FGlobalFont","SetGlobalFont");
    $r.addProperty("OnHeaderAnchorClick",0,$mod.$rtti["TTMSFNCPanelAnchorClickEvent"],"FOnHeaderAnchorClick","FOnHeaderAnchorClick");
    $r.addProperty("OnHeaderCloseButtonClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnHeaderCloseButtonClick","FOnHeaderCloseButtonClick");
    $r.addProperty("OnHeaderExpandButtonClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnHeaderExpandButtonClick","FOnHeaderExpandButtonClick");
    $r.addProperty("OnHeaderCompactButtonClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnHeaderCompactButtonClick","FOnHeaderCompactButtonClick");
    $r.addProperty("OnHeaderDropDownButtonClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnHeaderDropDownButtonClick","FOnHeaderDropDownButtonClick");
    $r.addProperty("OnFooterAnchorClick",0,$mod.$rtti["TTMSFNCPanelAnchorClickEvent"],"FOnFooterAnchorClick","FOnFooterAnchorClick");
    $r.addProperty("OnFooterCloseButtonClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnFooterCloseButtonClick","FOnFooterCloseButtonClick");
    $r.addProperty("OnFooterExpandButtonClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnFooterExpandButtonClick","FOnFooterExpandButtonClick");
    $r.addProperty("OnFooterCompactButtonClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnFooterCompactButtonClick","FOnFooterCompactButtonClick");
    $r.addProperty("OnFooterDropDownButtonClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnFooterDropDownButtonClick","FOnFooterDropDownButtonClick");
    $r.attr = [pas.Classes.ComponentPlatformsAttribute,"Create$1",[0]];
  });
  $mod.$implcode = function () {
    rtl.createClass($impl,"TControlOpen",pas["WEBLib.Controls"].TControl,function () {
      rtl.addIntf(this,pas.System.IUnknown);
    });
  };
},["Math","SysUtils","WEBLib.TMSFNCUtils","WEBLib.TMSFNCStyles","WEBLib.Graphics"]);
//# sourceMappingURL=WEBLib.TMSFNCPanel.js.map
