rtl.module("WEBLib.TMSFNCCustomControl",["System","Classes","WEBLib.Controls","WEBLib.TMSFNCGraphics","WEBLib.Graphics","WEBLib.TMSFNCStyles","WEBLib.TMSFNCPersistence","WEBLib.TMSFNCUndo","Types","WEBLib.TMSFNCGraphicsTypes","WEBLib.TMSFNCTypes","TypInfo","WEBLib.Forms","WEBLib.Menus"],function () {
  "use strict";
  var $mod = this;
  this.FPC_FULLVERSION = 0;
  rtl.createClass(this,"TTMSFNCCustomDesignerForm",pas["WEBLib.Forms"].TForm,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.$rtti.$Class("TTMSFNCCustomControl");
  this.TTMSFNCControlAlignment = {"0": "caNone", caNone: 0, "1": "caTop", caTop: 1, "2": "caBottom", caBottom: 2, "3": "caLeft", caLeft: 3, "4": "caRight", caRight: 4, "5": "caClient", caClient: 5};
  this.$rtti.$Enum("TTMSFNCControlAlignment",{minvalue: 0, maxvalue: 5, ordtype: 1, enumtype: this.TTMSFNCControlAlignment});
  rtl.createClass(this,"TTMSFNCCustomControlBaseCommon",pas["WEBLib.Menus"].TWebCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Menus"].TWebCustomControl.$init.call(this);
      this.FResourceScaleFactor = 0.0;
      this.FPaintScaleFactor = 0.0;
      this.FDesigntimeFormPixelsPerInch = 0;
      this.FAllowFocus = false;
      this.FShortCutHint = "";
      this.FAllowGetChildren = false;
      this.FAdaptToStyle = false;
      this.FAdaptedToStyle = false;
      this.FTransparent = false;
      this.FBufferedPainting = false;
      this.FNativeCanvas = false;
      this.FAntiAliasing = false;
      this.FOptimizedHTMLDrawing = false;
      this.FShowAcceleratorChar = false;
      this.FTextQuality = 0;
      this.FOnInternalDblClick = null;
      this.FOnInternalMouseDown = null;
      this.FOnInternalMouseMove = null;
      this.FOnInternalMouseUp = null;
    };
    this.$final = function () {
      this.FOnInternalDblClick = undefined;
      this.FOnInternalMouseDown = undefined;
      this.FOnInternalMouseMove = undefined;
      this.FOnInternalMouseUp = undefined;
      pas["WEBLib.Menus"].TWebCustomControl.$final.call(this);
    };
    this.GetAllowFocus = function () {
      var Result = false;
      Result = this.FAllowFocus;
      return Result;
    };
    this.GetShortCutHint = function () {
      var Result = "";
      Result = this.FShortCutHint;
      return Result;
    };
    this.GetControlAlignment = function () {
      var Result = 0;
      Result = $mod.TTMSFNCControlAlignment.caNone;
      var $tmp = this.FAlign;
      if ($tmp === pas["WEBLib.Controls"].TAlign.alNone) {
        Result = $mod.TTMSFNCControlAlignment.caNone}
       else if ($tmp === pas["WEBLib.Controls"].TAlign.alTop) {
        Result = $mod.TTMSFNCControlAlignment.caTop}
       else if ($tmp === pas["WEBLib.Controls"].TAlign.alBottom) {
        Result = $mod.TTMSFNCControlAlignment.caBottom}
       else if ($tmp === pas["WEBLib.Controls"].TAlign.alLeft) {
        Result = $mod.TTMSFNCControlAlignment.caLeft}
       else if ($tmp === pas["WEBLib.Controls"].TAlign.alRight) {
        Result = $mod.TTMSFNCControlAlignment.caRight}
       else if ($tmp === pas["WEBLib.Controls"].TAlign.alClient) Result = $mod.TTMSFNCControlAlignment.caClient;
      return Result;
    };
    this.SetAllowFocus = function (Value) {
      this.FAllowFocus = Value;
    };
    this.SetControlAlignment = function (Value) {
      var $tmp = Value;
      if ($tmp === $mod.TTMSFNCControlAlignment.caNone) {
        this.SetAlign(pas["WEBLib.Controls"].TAlign.alNone)}
       else if ($tmp === $mod.TTMSFNCControlAlignment.caTop) {
        this.SetAlign(pas["WEBLib.Controls"].TAlign.alTop)}
       else if ($tmp === $mod.TTMSFNCControlAlignment.caBottom) {
        this.SetAlign(pas["WEBLib.Controls"].TAlign.alBottom)}
       else if ($tmp === $mod.TTMSFNCControlAlignment.caLeft) {
        this.SetAlign(pas["WEBLib.Controls"].TAlign.alLeft)}
       else if ($tmp === $mod.TTMSFNCControlAlignment.caRight) {
        this.SetAlign(pas["WEBLib.Controls"].TAlign.alRight)}
       else if ($tmp === $mod.TTMSFNCControlAlignment.caClient) this.SetAlign(pas["WEBLib.Controls"].TAlign.alClient);
    };
    this.SetAntiAliasing = function (Value) {
      if (this.FAntiAliasing !== Value) {
        this.FAntiAliasing = Value;
        this.Invalidate();
      };
    };
    this.SetOptimizedHTMLDrawing = function (Value) {
      if (this.FOptimizedHTMLDrawing !== Value) {
        this.FOptimizedHTMLDrawing = Value;
        this.Invalidate();
      };
    };
    this.SetShowAcceleratorChar = function (Value) {
      if (this.FShowAcceleratorChar !== Value) {
        this.FShowAcceleratorChar = Value;
        this.Invalidate();
      };
    };
    this.SetNativeCanvas = function (Value) {
      if (this.FNativeCanvas !== Value) {
        this.FNativeCanvas = Value;
        this.Invalidate();
      };
    };
    this.SetTextQuality = function (Value) {
      if (this.FTextQuality !== Value) {
        this.FTextQuality = Value;
        this.Invalidate();
      };
    };
    this.SetShortCutHint = function (Value) {
      this.FShortCutHint = Value;
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
    this.HandleDesignHitTest = function (APoint) {
      var Result = false;
      Result = false;
      return Result;
    };
    this.GetClientMousePos = function () {
      var Result = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      Result.$assign(this.ConvertScreenToClient(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetMousePos())));
      return Result;
    };
    this.ConvertScreenToClient = function (APoint) {
      var Result = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      var p = pas.Types.TPoint.$new();
      p.$assign(this.ScreenToClient(pas.Types.Point(Math.round(APoint.X),Math.round(APoint.Y))));
      Result.$assign(pas["WEBLib.TMSFNCTypes"].PointF(p.x,p.y));
      return Result;
    };
    this.ConvertClientToScreen = function (APoint) {
      var Result = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      var p = pas.Types.TPoint.$new();
      p.$assign(this.ClientToScreen(pas.Types.Point(Math.round(APoint.X),Math.round(APoint.Y))));
      Result.$assign(pas["WEBLib.TMSFNCTypes"].PointF(p.x,p.y));
      return Result;
    };
    this.GetDragObjectScreenShot = function () {
      var Result = null;
      Result = null;
      return Result;
    };
    this.GetAdaptToStyle = function () {
      var Result = false;
      Result = this.FAdaptToStyle;
      return Result;
    };
    this.SetEnabled = function (Value) {
      pas["WEBLib.Controls"].TControl.SetEnabled.apply(this,arguments);
      this.Invalidate();
    };
    this.CalcFactor = function () {
      this.FResourceScaleFactor = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetDPIScale(this,96);
      this.FPaintScaleFactor = this.FResourceScaleFactor;
    };
    this.ChangeDPIScale = function (M, D) {
    };
    this.SetDefaultGraphicColors = function () {
      var c = 0;
      c = -1;
      if (pas["WEBLib.TMSFNCStyles"].TTMSFNCStyles.GetStyleBackgroundFillColor({get: function () {
          return c;
        }, set: function (v) {
          c = v;
        }})) {
        pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.DefaultPopupFillColor = c}
       else pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.DefaultPopupFillColor = 16777215;
      c = -1;
      if (pas["WEBLib.TMSFNCStyles"].TTMSFNCStyles.GetStyleBackgroundStrokeColor({get: function () {
          return c;
        }, set: function (v) {
          c = v;
        }})) {
        pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.DefaultPopupStrokeColor = c}
       else pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.DefaultPopupStrokeColor = 12632256;
      c = -1;
      if (pas["WEBLib.TMSFNCStyles"].TTMSFNCStyles.GetStyleDefaultButtonFillColor({get: function () {
          return c;
        }, set: function (v) {
          c = v;
        }})) {
        pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.DefaultButtonFillColor = c}
       else pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.DefaultButtonFillColor = pas["WEBLib.TMSFNCGraphicsTypes"].MakeGraphicsColor(225,225,225);
      c = -1;
      if (pas["WEBLib.TMSFNCStyles"].TTMSFNCStyles.GetStyleLineFillColor({get: function () {
          return c;
        }, set: function (v) {
          c = v;
        }})) {
        pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.DefaultButtonStrokeColor = c}
       else pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.DefaultButtonStrokeColor = 11119017;
      c = -1;
      if (pas["WEBLib.TMSFNCStyles"].TTMSFNCStyles.GetStyleTextFontColor({get: function () {
          return c;
        }, set: function (v) {
          c = v;
        }})) {
        pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.DefaultTextFontColor = c}
       else pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.DefaultTextFontColor = 0;
      c = -1;
      if (pas["WEBLib.TMSFNCStyles"].TTMSFNCStyles.GetStyleSelectionFillColor({get: function () {
          return c;
        }, set: function (v) {
          c = v;
        }})) {
        pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.DefaultSelectionFillColor = c;
        pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.DefaultButtonFillColorFocused = pas["WEBLib.TMSFNCGraphicsTypes"].Blend(c,pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.DefaultButtonFillColor,25);
        pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.DefaultButtonStrokeColorFocused = pas["WEBLib.TMSFNCGraphicsTypes"].Blend(c,pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.DefaultButtonStrokeColor,30);
      } else {
        pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.DefaultSelectionFillColor = 0;
        pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.DefaultButtonFillColorFocused = pas["WEBLib.TMSFNCGraphicsTypes"].MakeGraphicsColor(229,241,251);
        pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.DefaultButtonStrokeColorFocused = pas["WEBLib.TMSFNCGraphicsTypes"].MakeGraphicsColor(60,127,177);
      };
      pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.DefaultButtonStrokeColorDisabled = 11119017;
      pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.DefaultButtonFillColorDisabled = 13882323;
    };
    this.SetAdaptToStyle = function (Value) {
      this.FAdaptToStyle = Value;
      this.InitializeStyle();
    };
    this.CancelHint = function () {
    };
    this.BeginDrag$1 = function () {
    };
    this.InitializeStyle = function () {
      this.SetDefaultGraphicColors();
      this.DestroyGraphicElements();
      if (this.GetAdaptToStyle()) {
        this.FAdaptedToStyle = true;
        this.ApplyStyle();
      } else if (this.FAdaptedToStyle) {
        this.ResetToDefaultStyle();
        this.FAdaptedToStyle = false;
      };
      this.Invalidate();
    };
    this.ApplyStyle = function () {
    };
    this.ResetToDefaultStyle = function () {
    };
    this.HandleMouseLeave = function () {
    };
    this.HandleMouseEnter = function () {
    };
    this.HandleMouseDown = function (Button, Shift, X, Y) {
    };
    this.HandleMouseMove = function (Shift, X, Y) {
    };
    this.HandleDblClick = function (X, Y) {
    };
    this.HandleMouseUp = function (Button, Shift, X, Y) {
    };
    this.HandleKeyPress = function (Key) {
    };
    this.HandleKeyDown = function (Key, Shift) {
    };
    this.HandleDialogKey = function (Key, Shift) {
    };
    this.HandleKeyUp = function (Key, Shift) {
    };
    this.HandleMouseWheel = function (Shift, WheelDelta, Handled) {
    };
    this.HandleDragOver = function (Source, Point, Accept) {
    };
    this.HandleDragDrop = function (Source, Point) {
    };
    this.Create$1 = function (AOwner) {
      var ppi = 0;
      pas["WEBLib.Controls"].TControl.Create$1.apply(this,arguments);
      ppi = 96;
      this.FDesigntimeFormPixelsPerInch = ppi;
      this.FPaintScaleFactor = 1.0;
      this.FResourceScaleFactor = 1.0;
      this.SetDefaultGraphicColors();
      this.FAdaptToStyle = false;
      this.FAdaptedToStyle = false;
      this.FTransparent = false;
      this.FNativeCanvas = false;
      this.FBufferedPainting = false;
      this.FAntiAliasing = true;
      this.FOptimizedHTMLDrawing = true;
      this.FShowAcceleratorChar = true;
      this.FTextQuality = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextQuality.gtqAntiAliasing;
      this.FAllowFocus = true;
      return this;
    };
    this.Destroy = function () {
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.SetControlMargins = function (ALeft, ATop, ARight, ABottom) {
      this.SetAlignWithMargins(true);
      this.FMargins.SetLeft(Math.round(ALeft));
      this.FMargins.SetTop(Math.round(ATop));
      this.FMargins.SetRight(Math.round(ARight));
      this.FMargins.SetBottom(Math.round(ABottom));
    };
    this.GetControlMargins = function (ALeft, ATop, ARight, ABottom) {
      if (!this.FAlignWithMargins) return;
      ALeft.set(this.FMargins.FLeft);
      ATop.set(this.FMargins.FTop);
      ARight.set(this.FMargins.FRight);
      ABottom.set(this.FMargins.FBottom);
    };
    this.ScaleResourceValue = function (Value) {
      var Result = 0;
      Result = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.MulDivInt(Value,Math.round(this.FResourceScaleFactor * 100),100);
      return Result;
    };
    this.ScaleResourceValue$1 = function (Value) {
      var Result = 0.0;
      Result = Value * this.FResourceScaleFactor;
      return Result;
    };
    this.ScalePaintValue = function (Value) {
      var Result = 0;
      Result = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.MulDivInt(Value,Math.round(this.FPaintScaleFactor * 100),100);
      return Result;
    };
    this.ScalePaintValue$1 = function (Value) {
      var Result = 0.0;
      Result = Value * this.FPaintScaleFactor;
      return Result;
    };
    rtl.addIntf(this,pas["WEBLib.TMSFNCStyles"].ITMSFNCAdaptToStyle);
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
  });
  rtl.createClass(this,"TTMSFNCCustomControlBase",this.TTMSFNCCustomControlBaseCommon,function () {
    this.$init = function () {
      $mod.TTMSFNCCustomControlBaseCommon.$init.call(this);
      this.FStored = false;
      this.FHitTest = false;
    };
    this.MouseWheel = function (Shift, WheelDelta, Handled) {
      pas["WEBLib.Controls"].TControl.MouseWheel.apply(this,arguments);
      this.HandleMouseWheel(rtl.refSet(Shift),WheelDelta,Handled);
    };
    this.DoMouseLeave = function () {
      pas["WEBLib.Controls"].TControl.DoMouseLeave.call(this);
      this.HandleMouseLeave();
    };
    this.DoMouseEnter = function () {
      pas["WEBLib.Controls"].TControl.DoMouseEnter.call(this);
      this.HandleMouseEnter();
    };
    this.GetLocalRect = function () {
      var Result = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(0,0,this.GetWidth(),this.GetHeight()));
      return Result;
    };
    this.GetHintString = function () {
      var Result = "";
      Result = "";
      return Result;
    };
    this.HasHint = function () {
      var Result = false;
      Result = false;
      return Result;
    };
    this.MouseDown = function (Button, Shift, X, Y) {
      pas["WEBLib.Controls"].TControl.MouseDown.apply(this,arguments);
      this.HandleMouseDown(Button,rtl.refSet(Shift),X,Y);
      if (this.FOnInternalMouseDown != null) this.FOnInternalMouseDown(this);
    };
    this.MouseMove = function (Shift, X, Y) {
      pas["WEBLib.Controls"].TControl.MouseMove.apply(this,arguments);
      this.HandleMouseMove(rtl.refSet(Shift),X,Y);
      if (this.FOnInternalMouseMove != null) this.FOnInternalMouseMove(this);
    };
    this.MouseUp = function (Button, Shift, X, Y) {
      pas["WEBLib.Controls"].TControl.MouseUp.apply(this,arguments);
      this.HandleMouseUp(Button,rtl.refSet(Shift),X,Y);
      if (this.FOnInternalMouseUp != null) this.FOnInternalMouseUp(this);
    };
    this.DragOver = function (Source, X, Y, State, Accept) {
      pas["WEBLib.Controls"].TControl.DragOver.apply(this,arguments);
      this.HandleDragOver(Source,pas["WEBLib.TMSFNCTypes"].PointF(X,Y),Accept);
    };
    this.KeyDown = function (Key, Shift) {
      pas["WEBLib.Controls"].TControl.KeyDown.apply(this,arguments);
      this.HandleDialogKey(Key,rtl.refSet(Shift));
      this.HandleKeyDown(Key,rtl.refSet(Shift));
      if (Key.get() === 9) ;
    };
    this.KeyPress = function (Key) {
      pas["WEBLib.Controls"].TControl.KeyPress.apply(this,arguments);
      this.HandleKeyPress(Key);
    };
    this.KeyUp = function (Key, Shift) {
      pas["WEBLib.Controls"].TControl.KeyUp.apply(this,arguments);
      this.HandleKeyUp(Key,rtl.refSet(Shift));
    };
    this.DblClick = function () {
      var pf = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      pas["WEBLib.Controls"].TControl.DblClick.call(this);
      pf.$assign(this.ConvertScreenToClient(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetMousePos())));
      this.HandleDblClick(pf.X,pf.Y);
      if (this.FOnInternalDblClick != null) this.FOnInternalDblClick(this);
    };
    this.Create$1 = function (AOwner) {
      $mod.TTMSFNCCustomControlBaseCommon.Create$1.apply(this,arguments);
      this.FHitTest = true;
      this.FStored = true;
      this.FControlStyle = rtl.unionSet(this.FControlStyle,rtl.createSet(pas["WEBLib.Controls"].TControlStyleValue.csAcceptsControls));
      return this;
    };
    this.BeginUpdate = function () {
      pas["WEBLib.Controls"].TControl.BeginUpdate.call(this);
    };
    this.EndUpdate = function () {
      pas["WEBLib.Controls"].TCustomControl.EndUpdate.call(this);
    };
    this.DragDrop = function (Source, X, Y) {
      pas["WEBLib.Controls"].TControl.DragDrop.apply(this,arguments);
      this.HandleDragDrop(Source,pas["WEBLib.TMSFNCTypes"].PointF(X,Y));
    };
    this.CanFocus = function () {
      var Result = false;
      Result = pas["WEBLib.Controls"].TControl.CanFocus.call(this);
      Result = Result && this.GetAllowFocus();
      return Result;
    };
    rtl.addIntf(this,pas["WEBLib.TMSFNCStyles"].ITMSFNCAdaptToStyle);
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
  });
  this.$rtti.$MethodVar("TTMSFNCCustomControlBeforeDrawEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AGraphics",pas["WEBLib.TMSFNCGraphics"].$rtti["TTMSFNCGraphics"]],["ARect",pas["WEBLib.TMSFNCTypes"].$rtti["TRectF"]],["ADefaultDraw",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCCustomControlAfterDrawEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AGraphics",pas["WEBLib.TMSFNCGraphics"].$rtti["TTMSFNCGraphics"]],["ARect",pas["WEBLib.TMSFNCTypes"].$rtti["TRectF"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCCustomControlCanSavePropertyEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AObject",pas.System.$rtti["TObject"]],["APropertyName",rtl.string],["APropertyType",pas.System.$rtti["TTypeKind"]],["ACanSave",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCCustomControlCanLoadPropertyEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AObject",pas.System.$rtti["TObject"]],["APropertyName",rtl.string],["APropertyType",pas.System.$rtti["TTypeKind"]],["ACanLoad",rtl.boolean,1]]), methodkind: 0});
  rtl.createClass(this,"TTMSFNCCustomControl",this.TTMSFNCCustomControlBase,function () {
    this.FBlockPersistenceInterface = false;
    this.$init = function () {
      $mod.TTMSFNCCustomControlBase.$init.call(this);
      this.FBlockInvalidate = false;
      this.FAppearancePersisting = false;
      this.FExporting = false;
      this.FExportRect = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      this.FOnBeforeDraw = null;
      this.FOnAfterDraw = null;
      this.FOnCanSaveProperty = null;
      this.FOnCanLoadProperty = null;
      this.FCheckedChk = null;
      this.FUnCheckedChk = null;
      this.FCheckedFocusChk = null;
      this.FUnCheckedFocusChk = null;
      this.FCheckedDisabledChk = null;
      this.FUnCheckedDisabledChk = null;
      this.FCheckedRd = null;
      this.FUnCheckedRd = null;
      this.FCheckedFocusRd = null;
      this.FUnCheckedFocusRd = null;
      this.FCheckedDisabledRd = null;
      this.FUnCheckedDisabledRd = null;
      this.FDownBtn = null;
      this.FNormalBtn = null;
      this.FDownFocusBtn = null;
      this.FNormalFocusBtn = null;
      this.FNormalDisabledBtn = null;
      this.FFill = null;
      this.FStroke = null;
      this.FDataPointer = null;
      this.FDataBoolean = false;
      this.FDataString = "";
      this.FDataObject = null;
      this.FDataInteger = 0;
      this.FUndoManager = null;
    };
    this.$final = function () {
      this.FExportRect = undefined;
      this.FOnBeforeDraw = undefined;
      this.FOnAfterDraw = undefined;
      this.FOnCanSaveProperty = undefined;
      this.FOnCanLoadProperty = undefined;
      this.FCheckedChk = undefined;
      this.FUnCheckedChk = undefined;
      this.FCheckedFocusChk = undefined;
      this.FUnCheckedFocusChk = undefined;
      this.FCheckedDisabledChk = undefined;
      this.FUnCheckedDisabledChk = undefined;
      this.FCheckedRd = undefined;
      this.FUnCheckedRd = undefined;
      this.FCheckedFocusRd = undefined;
      this.FUnCheckedFocusRd = undefined;
      this.FCheckedDisabledRd = undefined;
      this.FUnCheckedDisabledRd = undefined;
      this.FDownBtn = undefined;
      this.FNormalBtn = undefined;
      this.FDownFocusBtn = undefined;
      this.FNormalFocusBtn = undefined;
      this.FNormalDisabledBtn = undefined;
      this.FFill = undefined;
      this.FStroke = undefined;
      this.FDataObject = undefined;
      this.FUndoManager = undefined;
      $mod.TTMSFNCCustomControlBase.$final.call(this);
    };
    this.GetUndoManager = function () {
      var Result = null;
      if (!(this.FUndoManager != null)) this.FUndoManager = pas["WEBLib.TMSFNCUndo"].TTMSFNCUndoManager.$create("Create$2",[this]);
      Result = this.FUndoManager;
      return Result;
    };
    this.SetFill = function (Value) {
      this.FFill.Assign(Value);
    };
    this.SetStroke = function (Value) {
      this.FStroke.Assign(Value);
    };
    this.GetVersionNumber = function (AMaj, AMin, ARel, ABld) {
      var Result = "";
      Result = "";
      return Result;
    };
    this.IsAppearanceProperty = function (AObject, APropertyName, APropertyType) {
      var Result = false;
      var Prop = null;
      var pName = "";
      var cn = "";
      Result = false;
      Prop = pas.TypInfo.GetPropInfo$2(AObject,APropertyName);
      if (Prop != null) {
        pName = pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.GetPropInfoName(Prop);
        cn = pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.GetPropInfoTypeName(Prop);
        Result = (cn === "TAlphaColor") || (cn === "TColor") || (cn === "TGraphicsColor") || (cn === "TTMSFNCGraphicsFill") || (cn === "TTMSFNCGraphicsStroke") || (pas.System.Pos("Appearance",pName) > 0);
        Result = Result || (APropertyName === "Fill") || (APropertyName === "Stroke") || (APropertyName === "Font");
      };
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
    this.LocalToScreenEx = function (APoint) {
      var Result = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      var pt = pas.Types.TPoint.$new();
      pt.$assign(this.ClientToScreen(pas.Types.Point(Math.round(APoint.X),Math.round(APoint.Y))));
      Result.$assign(pas["WEBLib.TMSFNCTypes"].PointF(pt.x,pt.y));
      return Result;
    };
    this.ScreenToLocalEx = function (APoint) {
      var Result = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      var pt = pas.Types.TPoint.$new();
      pt.$assign(this.ScreenToClient(pas.Types.Point(Math.round(APoint.X),Math.round(APoint.Y))));
      Result.$assign(pas["WEBLib.TMSFNCTypes"].PointF(pt.x,pt.y));
      return Result;
    };
    this.GetContentRect = function () {
      var Result = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      Result.$assign(this.GetControlRect());
      return Result;
    };
    this.GetControlRect = function () {
      var Result = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      if (this.IsExporting()) {
        Result.$assign(this.FExportRect)}
       else Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(0,0,this.GetWidth(),this.GetHeight()));
      return Result;
    };
    this.GetLocalRect = function () {
      var Result = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      if (this.IsExporting()) {
        Result.$assign(this.FExportRect)}
       else Result.$assign($mod.TTMSFNCCustomControlBase.GetLocalRect.call(this));
      return Result;
    };
    this.IsExporting = function () {
      var Result = false;
      Result = this.FExporting;
      return Result;
    };
    this.SetColor = function (AValue) {
      pas["WEBLib.Controls"].TControl.SetColor.apply(this,arguments);
      if (this.FFill != null) this.FFill.SetColor(AValue);
      this.Invalidate();
    };
    this.ChangeDPIScale = function (M, D) {
      $mod.TTMSFNCCustomControlBaseCommon.ChangeDPIScale.apply(this,arguments);
      if (!this.IsLoading()) {
        this.CreateCheckBoxBitmaps();
        this.CreateRadioButtonBitmaps();
      };
    };
    this.RegisterRuntimeClasses = function () {
    };
    this.Export = function (AGraphics, ARect) {
      this.FExporting = true;
      this.FExportRect.$assign(ARect);
      this.BeforeExport();
      this.Draw(AGraphics,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect));
      this.FExporting = false;
      this.AfterExport();
    };
    this.BeforeExport = function () {
    };
    this.AfterExport = function () {
    };
    this.ApplyStyle = function () {
      var c = 0;
      $mod.TTMSFNCCustomControlBaseCommon.ApplyStyle.call(this);
      c = -1;
      if (pas["WEBLib.TMSFNCStyles"].TTMSFNCStyles.GetStyleBackgroundFillColor({get: function () {
          return c;
        }, set: function (v) {
          c = v;
        }})) this.FFill.SetColor(c);
      c = -1;
      if (pas["WEBLib.TMSFNCStyles"].TTMSFNCStyles.GetStyleLineFillColor({get: function () {
          return c;
        }, set: function (v) {
          c = v;
        }})) this.FStroke.SetColor(c);
    };
    this.ResetToDefaultStyle = function () {
      $mod.TTMSFNCCustomControlBaseCommon.ResetToDefaultStyle.call(this);
      this.FFill.SetColor(16777215);
      this.FStroke.SetColor(12632256);
    };
    this.DestroyGraphicElements = function () {
      if (this.FDownBtn != null) {
        rtl.free(this,"FDownBtn");
        this.FDownBtn = null;
      };
      if (this.FNormalBtn != null) {
        rtl.free(this,"FNormalBtn");
        this.FNormalBtn = null;
      };
      if (this.FDownFocusBtn != null) {
        rtl.free(this,"FDownFocusBtn");
        this.FDownFocusBtn = null;
      };
      if (this.FNormalFocusBtn != null) {
        rtl.free(this,"FNormalFocusBtn");
        this.FNormalFocusBtn = null;
      };
      if (this.FNormalDisabledBtn != null) {
        rtl.free(this,"FNormalDisabledBtn");
        this.FNormalDisabledBtn = null;
      };
      if (this.FCheckedChk != null) {
        rtl.free(this,"FCheckedChk");
        this.FCheckedChk = null;
      };
      if (this.FCheckedFocusChk != null) {
        rtl.free(this,"FCheckedFocusChk");
        this.FCheckedFocusChk = null;
      };
      if (this.FUnCheckedDisabledChk != null) {
        rtl.free(this,"FUnCheckedDisabledChk");
        this.FUnCheckedDisabledChk = null;
      };
      if (this.FCheckedDisabledChk != null) {
        rtl.free(this,"FCheckedDisabledChk");
        this.FCheckedDisabledChk = null;
      };
      if (this.FUnCheckedChk != null) {
        rtl.free(this,"FUnCheckedChk");
        this.FUnCheckedChk = null;
      };
      if (this.FUnCheckedFocusChk != null) {
        rtl.free(this,"FUnCheckedFocusChk");
        this.FUnCheckedFocusChk = null;
      };
      if (this.FCheckedRd != null) {
        rtl.free(this,"FCheckedRd");
        this.FCheckedRd = null;
      };
      if (this.FCheckedFocusRd != null) {
        rtl.free(this,"FCheckedFocusRd");
        this.FCheckedFocusRd = null;
      };
      if (this.FUnCheckedRd != null) {
        rtl.free(this,"FUnCheckedRd");
        this.FUnCheckedRd = null;
      };
      if (this.FUnCheckedFocusRd != null) {
        rtl.free(this,"FUnCheckedFocusRd");
        this.FUnCheckedFocusRd = null;
      };
      if (this.FUnCheckedDisabledRd != null) {
        rtl.free(this,"FUnCheckedDisabledRd");
        this.FUnCheckedDisabledRd = null;
      };
      if (this.FCheckedDisabledRd != null) {
        rtl.free(this,"FCheckedDisabledRd");
        this.FCheckedDisabledRd = null;
      };
    };
    this.UpdateControlAfterResize = function () {
    };
    this.CreateCheckBoxBitmaps = function () {
      var g = null;
      var bmp = null;
      var sc = 0.0;
      sc = this.FResourceScaleFactor;
      if (this.FCheckedFocusChk != null) {
        rtl.free(this,"FCheckedFocusChk");
        this.FCheckedFocusChk = null;
      };
      if (this.FUnCheckedChk != null) {
        rtl.free(this,"FUnCheckedChk");
        this.FUnCheckedChk = null;
      };
      if (this.FCheckedChk != null) {
        rtl.free(this,"FCheckedChk");
        this.FCheckedChk = null;
      };
      if (this.FUnCheckedFocusChk != null) {
        rtl.free(this,"FUnCheckedFocusChk");
        this.FUnCheckedFocusChk = null;
      };
      if (this.FUnCheckedDisabledChk != null) {
        rtl.free(this,"FUnCheckedDisabledChk");
        this.FUnCheckedDisabledChk = null;
      };
      if (this.FCheckedDisabledChk != null) {
        rtl.free(this,"FCheckedDisabledChk");
        this.FCheckedDisabledChk = null;
      };
      bmp = pas["WEBLib.Graphics"].TBitmap.$create("Create$3");
      g = pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.$create("Create$1",[bmp.GetCanvas(),false]);
      try {
        bmp.SetSize(Math.round(16 * sc),Math.round(16 * sc));
        this.FUnCheckedChk = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
        this.FUnCheckedChk.FOnChange = rtl.createCallback(this,"DoBitmapChanged");
        g.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
        g.FFill.SetColor(16777215);
        g.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
        g.FStroke.SetColor(16777215);
        g.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
        g.DrawCheckBox(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),false,false,true,1.0);
        this.FUnCheckedChk.Assign(bmp);
        this.FCheckedChk = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
        this.FCheckedChk.FOnChange = rtl.createCallback(this,"DoBitmapChanged");
        g.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
        g.FFill.SetColor(16777215);
        g.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
        g.FStroke.SetColor(16777215);
        g.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
        g.DrawCheckBox(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),true,false,true,1.0);
        this.FCheckedChk.Assign(bmp);
        this.FUnCheckedFocusChk = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
        this.FUnCheckedFocusChk.FOnChange = rtl.createCallback(this,"DoBitmapChanged");
        g.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
        g.FFill.SetColor(16777215);
        g.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
        g.FStroke.SetColor(16777215);
        g.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
        g.DrawCheckBox(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),false,true,true,1.0);
        this.FUnCheckedFocusChk.Assign(bmp);
        this.FCheckedFocusChk = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
        this.FCheckedFocusChk.FOnChange = rtl.createCallback(this,"DoBitmapChanged");
        g.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
        g.FFill.SetColor(16777215);
        g.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
        g.FStroke.SetColor(16777215);
        g.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
        g.DrawCheckBox(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),true,true,true,1.0);
        this.FCheckedFocusChk.Assign(bmp);
        this.FUnCheckedDisabledChk = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
        this.FUnCheckedDisabledChk.FOnChange = rtl.createCallback(this,"DoBitmapChanged");
        g.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
        g.FFill.SetColor(16777215);
        g.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
        g.FStroke.SetColor(16777215);
        g.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
        g.DrawCheckBox(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),false,false,false,1.0);
        this.FUnCheckedDisabledChk.Assign(bmp);
        this.FCheckedDisabledChk = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
        this.FCheckedDisabledChk.FOnChange = rtl.createCallback(this,"DoBitmapChanged");
        g.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
        g.FFill.SetColor(16777215);
        g.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
        g.FStroke.SetColor(16777215);
        g.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
        g.DrawCheckBox(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),true,false,false,1.0);
        this.FCheckedDisabledChk.Assign(bmp);
      } finally {
        g = rtl.freeLoc(g);
        bmp = rtl.freeLoc(bmp);
      };
    };
    this.CreateRadioButtonBitmaps = function () {
      var g = null;
      var bmp = null;
      var sc = 0.0;
      sc = this.FResourceScaleFactor;
      if (this.FCheckedFocusRd != null) {
        rtl.free(this,"FCheckedFocusRd");
        this.FCheckedFocusRd = null;
      };
      if (this.FUnCheckedRd != null) {
        rtl.free(this,"FUnCheckedRd");
        this.FUnCheckedRd = null;
      };
      if (this.FCheckedRd != null) {
        rtl.free(this,"FCheckedRd");
        this.FCheckedRd = null;
      };
      if (this.FUnCheckedFocusRd != null) {
        rtl.free(this,"FUnCheckedFocusRd");
        this.FUnCheckedFocusRd = null;
      };
      if (this.FUnCheckedDisabledRd != null) {
        rtl.free(this,"FUnCheckedDisabledRd");
        this.FUnCheckedDisabledRd = null;
      };
      if (this.FCheckedDisabledRd != null) {
        rtl.free(this,"FCheckedDisabledRd");
        this.FCheckedDisabledRd = null;
      };
      bmp = pas["WEBLib.Graphics"].TBitmap.$create("Create$3");
      g = pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.$create("Create$1",[bmp.GetCanvas(),false]);
      try {
        bmp.SetSize(Math.round(16 * sc),Math.round(16 * sc));
        this.FUnCheckedRd = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
        this.FUnCheckedRd.FOnChange = rtl.createCallback(this,"DoBitmapChanged");
        g.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
        g.FFill.SetColor(16777215);
        g.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
        g.FStroke.SetColor(16777215);
        g.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
        g.DrawRadioButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),false,false,true,1.0);
        this.FUnCheckedRd.Assign(bmp);
        this.FCheckedRd = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
        this.FCheckedRd.FOnChange = rtl.createCallback(this,"DoBitmapChanged");
        g.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
        g.FFill.SetColor(16777215);
        g.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
        g.FStroke.SetColor(16777215);
        g.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
        g.DrawRadioButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),true,false,true,1.0);
        this.FCheckedRd.Assign(bmp);
        this.FUnCheckedFocusRd = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
        this.FUnCheckedFocusRd.FOnChange = rtl.createCallback(this,"DoBitmapChanged");
        g.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
        g.FFill.SetColor(16777215);
        g.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
        g.FStroke.SetColor(16777215);
        g.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
        g.DrawRadioButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),false,true,true,1.0);
        this.FUnCheckedFocusRd.Assign(bmp);
        this.FCheckedFocusRd = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
        this.FCheckedFocusRd.FOnChange = rtl.createCallback(this,"DoBitmapChanged");
        g.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
        g.FFill.SetColor(16777215);
        g.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
        g.FStroke.SetColor(16777215);
        g.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
        g.DrawRadioButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),true,true,true,1.0);
        this.FCheckedFocusRd.Assign(bmp);
        this.FUnCheckedDisabledRd = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
        this.FUnCheckedDisabledRd.FOnChange = rtl.createCallback(this,"DoBitmapChanged");
        g.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
        g.FFill.SetColor(16777215);
        g.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
        g.FStroke.SetColor(16777215);
        g.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
        g.DrawRadioButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),false,false,false,1.0);
        this.FUnCheckedDisabledRd.Assign(bmp);
        this.FCheckedDisabledRd = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
        this.FCheckedDisabledRd.FOnChange = rtl.createCallback(this,"DoBitmapChanged");
        g.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
        g.FFill.SetColor(16777215);
        g.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
        g.FStroke.SetColor(16777215);
        g.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
        g.DrawRadioButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),true,false,false,1.0);
        this.FCheckedDisabledRd.Assign(bmp);
      } finally {
        g = rtl.freeLoc(g);
        bmp = rtl.freeLoc(bmp);
      };
    };
    this.CreateButtonBitmaps = function (AWidth, AHeight) {
      var g = null;
      var bmp = null;
      var sc = 0.0;
      sc = this.FResourceScaleFactor;
      if (this.FDownBtn != null) {
        rtl.free(this,"FDownBtn");
        this.FDownBtn = null;
      };
      if (this.FNormalBtn != null) {
        rtl.free(this,"FNormalBtn");
        this.FNormalBtn = null;
      };
      if (this.FDownFocusBtn != null) {
        rtl.free(this,"FDownFocusBtn");
        this.FDownFocusBtn = null;
      };
      if (this.FNormalFocusBtn != null) {
        rtl.free(this,"FNormalFocusBtn");
        this.FNormalFocusBtn = null;
      };
      if (this.FNormalDisabledBtn != null) {
        rtl.free(this,"FNormalDisabledBtn");
        this.FNormalDisabledBtn = null;
      };
      bmp = pas["WEBLib.Graphics"].TBitmap.$create("Create$3");
      g = pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.$create("Create$1",[bmp.GetCanvas(),false]);
      try {
        bmp.SetSize(Math.round(AWidth * sc),Math.round(AHeight * sc));
        this.FNormalBtn = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
        this.FNormalBtn.FOnChange = rtl.createCallback(this,"DoBitmapChanged");
        g.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
        g.FFill.SetColor(16777215);
        g.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
        g.FStroke.SetColor(16777215);
        g.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
        g.DrawButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),false,false,true,this.GetAdaptToStyle(),1.0);
        this.FNormalBtn.Assign(bmp);
        this.FDownBtn = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
        this.FDownBtn.FOnChange = rtl.createCallback(this,"DoBitmapChanged");
        g.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
        g.FFill.SetColor(16777215);
        g.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
        g.FStroke.SetColor(16777215);
        g.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
        g.DrawButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),true,false,true,this.GetAdaptToStyle(),1.0);
        this.FDownBtn.Assign(bmp);
        this.FNormalFocusBtn = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
        this.FNormalFocusBtn.FOnChange = rtl.createCallback(this,"DoBitmapChanged");
        g.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
        g.FFill.SetColor(16777215);
        g.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
        g.FStroke.SetColor(16777215);
        g.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
        g.DrawButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),true,true,true,this.GetAdaptToStyle(),1.0);
        this.FNormalFocusBtn.Assign(bmp);
        this.FDownFocusBtn = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
        this.FDownFocusBtn.FOnChange = rtl.createCallback(this,"DoBitmapChanged");
        g.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
        g.FFill.SetColor(16777215);
        g.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
        g.FStroke.SetColor(16777215);
        g.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
        g.DrawButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),false,true,true,this.GetAdaptToStyle(),1.0);
        this.FDownFocusBtn.Assign(bmp);
        this.FNormalDisabledBtn = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
        this.FNormalDisabledBtn.FOnChange = rtl.createCallback(this,"DoBitmapChanged");
        g.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
        g.FFill.SetColor(16777215);
        g.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
        g.FStroke.SetColor(16777215);
        g.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
        g.DrawButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,bmp.GetWidth(),bmp.GetHeight())),false,false,false,this.GetAdaptToStyle(),1.0);
        this.FNormalDisabledBtn.Assign(bmp);
      } finally {
        g = rtl.freeLoc(g);
        bmp = rtl.freeLoc(bmp);
      };
    };
    this.DoBeforeDraw = function (AGraphics, ARect, ADefaultDraw) {
      if (this.FOnBeforeDraw != null) this.FOnBeforeDraw(this,AGraphics,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),ADefaultDraw);
    };
    this.DoAfterDraw = function (AGraphics, ARect) {
      if (this.FOnAfterDraw != null) this.FOnAfterDraw(this,AGraphics,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect));
    };
    this.DoCanSaveProperty = function (AObject, APropertyName, APropertyType, ACanSave) {
      if (this.FOnCanSaveProperty != null) this.FOnCanSaveProperty(this,AObject,APropertyName,APropertyType,ACanSave);
    };
    this.DoCanLoadProperty = function (AObject, APropertyName, APropertyType, ACanLoad) {
      if (this.FOnCanLoadProperty != null) this.FOnCanLoadProperty(this,AObject,APropertyName,APropertyType,ACanLoad);
    };
    this.DrawBackground = function (AGraphics, ARect) {
      AGraphics.FFill.Assign(this.FFill);
      AGraphics.FFill.SetColor(this.FColor);
      AGraphics.FStroke.Assign(this.FStroke);
      AGraphics.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
    };
    this.StrokeChanged = function (Sender) {
      this.Invalidate();
    };
    this.FillChanged = function (Sender) {
      if ((this.FFill.FKind !== pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkNone) && (this.FFill.FKind !== pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkTexture) && (this.FFill.FColor !== -1)) {
        this.SetColor(this.FFill.FColor)}
       else this.SetColor(-1);
      this.Invalidate();
    };
    this.Draw = function (AGraphics, ARect) {
    };
    this.DrawControl = function () {
      var g = null;
      var gbmp = null;
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var df = false;
      var bmp = null;
      if (this.FBufferedPainting) {
        g = pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.$create("CreateBitmapCanvas",[this.GetWidth(),this.GetHeight(),this.FNativeCanvas,true]);
        g.BeginScene();
      } else g = pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.$create("Create$1",[this.GetCanvas(),this.FNativeCanvas]);
      g.FOptimizedHTMLDrawing = this.FOptimizedHTMLDrawing;
      g.GetContext().SetSize(this.GetWidth(),this.GetHeight());
      g.GetContext().SetAntiAliasing(this.FAntiAliasing);
      g.GetContext().SetShowAcceleratorChar(this.FShowAcceleratorChar);
      g.GetContext().SetTextQuality(this.FTextQuality);
      try {
        r.$assign(pas["WEBLib.TMSFNCTypes"].RectF(0,0,this.GetWidth(),this.GetHeight()));
        df = true;
        this.DoBeforeDraw(g,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),{get: function () {
            return df;
          }, set: function (v) {
            df = v;
          }});
        if (df) {
          this.DrawBackground(g,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r));
          this.Draw(g,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r));
          this.DoAfterDraw(g,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r));
        };
        if (this.FBufferedPainting) g.EndScene();
        g.GetContext().Render();
        if (this.FBufferedPainting) {
          bmp = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
          try {
            bmp.Assign(g.FBitmap);
            gbmp = pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.$create("Create$1",[this.GetCanvas(),false]);
            try {
              gbmp.GetContext().SetSize(this.GetWidth(),this.GetHeight());
              gbmp.GetContext().SetAntiAliasing(this.FAntiAliasing);
              gbmp.GetContext().SetShowAcceleratorChar(this.FShowAcceleratorChar);
              gbmp.GetContext().SetTextQuality(this.FTextQuality);
              gbmp.DrawBitmap$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),bmp,true,false,true,false);
            } finally {
              gbmp = rtl.freeLoc(gbmp);
            };
          } finally {
            bmp = rtl.freeLoc(bmp);
          };
        };
      } finally {
        g = rtl.freeLoc(g);
      };
    };
    this.DoBitmapChanged = function (Sender) {
      if (this.FBlockInvalidate) return;
      this.FBlockInvalidate = true;
      this.Invalidate();
      this.FBlockInvalidate = false;
    };
    this.CaptureEx = function () {
      this.Capture();
    };
    this.ReleaseCaptureEx = function () {
      this.ReleaseCapture();
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCCustomControl.isPrototypeOf(Source)) {
        this.FFill.Assign(rtl.as(Source,$mod.TTMSFNCCustomControl).FFill);
        this.FStroke.Assign(rtl.as(Source,$mod.TTMSFNCCustomControl).FStroke);
      } else pas["WEBLib.Controls"].TControl.Assign.apply(this,arguments);
    };
    this.Create$1 = function (AOwner) {
      $mod.TTMSFNCCustomControlBase.Create$1.apply(this,arguments);
      this.SetColor(16777215);
      this.FLinkTouchEvents = true;
      this.FAllowTouch = false;
      this.SetTabStop(true);
      this.FFill = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFill.$create("Create$1",[pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid,16777215,8421504,-1,-1]);
      this.FStroke = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStroke.$create("Create$1",[pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid,12632256]);
      this.FFill.FOnChanged = rtl.createCallback(this,"FillChanged");
      this.FStroke.FOnChanged = rtl.createCallback(this,"StrokeChanged");
      if (!this.IsDesignerForm()) this.RegisterRuntimeClasses();
      return this;
    };
    this.Destroy = function () {
      if (this.FUndoManager != null) {
        rtl.free(this,"FUndoManager");
        this.FUndoManager = null;
      };
      if (this.FDownBtn != null) {
        rtl.free(this,"FDownBtn");
        this.FDownBtn = null;
      };
      if (this.FNormalBtn != null) {
        rtl.free(this,"FNormalBtn");
        this.FNormalBtn = null;
      };
      if (this.FDownFocusBtn != null) {
        rtl.free(this,"FDownFocusBtn");
        this.FDownFocusBtn = null;
      };
      if (this.FNormalFocusBtn != null) {
        rtl.free(this,"FNormalFocusBtn");
        this.FNormalFocusBtn = null;
      };
      if (this.FNormalDisabledBtn != null) {
        rtl.free(this,"FNormalDisabledBtn");
        this.FNormalDisabledBtn = null;
      };
      if (this.FCheckedChk != null) {
        rtl.free(this,"FCheckedChk");
        this.FCheckedChk = null;
      };
      if (this.FCheckedFocusChk != null) {
        rtl.free(this,"FCheckedFocusChk");
        this.FCheckedFocusChk = null;
      };
      if (this.FUnCheckedDisabledChk != null) {
        rtl.free(this,"FUnCheckedDisabledChk");
        this.FUnCheckedDisabledChk = null;
      };
      if (this.FCheckedDisabledChk != null) {
        rtl.free(this,"FCheckedDisabledChk");
        this.FCheckedDisabledChk = null;
      };
      if (this.FUnCheckedChk != null) {
        rtl.free(this,"FUnCheckedChk");
        this.FUnCheckedChk = null;
      };
      if (this.FUnCheckedFocusChk != null) {
        rtl.free(this,"FUnCheckedFocusChk");
        this.FUnCheckedFocusChk = null;
      };
      if (this.FCheckedRd != null) {
        rtl.free(this,"FCheckedRd");
        this.FCheckedRd = null;
      };
      if (this.FCheckedFocusRd != null) {
        rtl.free(this,"FCheckedFocusRd");
        this.FCheckedFocusRd = null;
      };
      if (this.FUnCheckedRd != null) {
        rtl.free(this,"FUnCheckedRd");
        this.FUnCheckedRd = null;
      };
      if (this.FUnCheckedFocusRd != null) {
        rtl.free(this,"FUnCheckedFocusRd");
        this.FUnCheckedFocusRd = null;
      };
      if (this.FUnCheckedDisabledRd != null) {
        rtl.free(this,"FUnCheckedDisabledRd");
        this.FUnCheckedDisabledRd = null;
      };
      if (this.FCheckedDisabledRd != null) {
        rtl.free(this,"FCheckedDisabledRd");
        this.FCheckedDisabledRd = null;
      };
      rtl.free(this,"FFill");
      rtl.free(this,"FStroke");
      $mod.TTMSFNCCustomControlBaseCommon.Destroy.call(this);
    };
    this.GetCheckBoxBitmap = function (AChecked, AFocused, AEnabled) {
      var Result = null;
      if (!(this.FCheckedChk != null) || !(this.FCheckedFocusChk != null) || !(this.FUnCheckedChk != null) || !(this.FUnCheckedFocusChk != null) || !(this.FCheckedDisabledChk != null) || !(this.FUnCheckedDisabledChk != null)) this.CreateCheckBoxBitmaps();
      if (AChecked) {
        if (AEnabled) {
          if (AFocused) {
            Result = this.FCheckedFocusChk}
           else Result = this.FCheckedChk;
        } else Result = this.FCheckedDisabledChk;
      } else {
        if (AEnabled) {
          if (AFocused) {
            Result = this.FUnCheckedFocusChk}
           else Result = this.FUnCheckedChk;
        } else Result = this.FUnCheckedDisabledChk;
      };
      return Result;
    };
    this.GetRadioButtonBitmap = function (AChecked, AFocused, AEnabled) {
      var Result = null;
      if (!(this.FCheckedRd != null) || !(this.FCheckedFocusRd != null) || !(this.FUnCheckedRd != null) || !(this.FUnCheckedFocusRd != null) || !(this.FCheckedDisabledRd != null) || !(this.FUnCheckedDisabledRd != null)) this.CreateRadioButtonBitmaps();
      if (AChecked) {
        if (AEnabled) {
          if (AFocused) {
            Result = this.FCheckedFocusRd}
           else Result = this.FCheckedRd;
        } else Result = this.FCheckedDisabledRd;
      } else {
        if (AEnabled) {
          if (AFocused) {
            Result = this.FUnCheckedFocusRd}
           else Result = this.FUnCheckedRd;
        } else Result = this.FUnCheckedDisabledRd;
      };
      return Result;
    };
    this.GetButtonBitmap = function (AWidth, AHeight, ADown, AFocused, AEnabled) {
      var Result = null;
      this.CreateButtonBitmaps(AWidth,AHeight);
      if (ADown) {
        if (AEnabled) {
          if (AFocused) {
            Result = this.FDownFocusBtn}
           else Result = this.FDownBtn;
        } else Result = this.FNormalDisabledBtn;
      } else {
        if (AEnabled) {
          if (AFocused) {
            Result = this.FNormalFocusBtn}
           else Result = this.FNormalBtn;
        } else Result = this.FNormalDisabledBtn;
      };
      return Result;
    };
    this.IsDesignTime = function () {
      var Result = false;
      Result = false;
      if (this.FOwner != null) Result = this.IsDesigning() && !((pas.Classes.TComponentStateItem.csReading in this.FOwner.FComponentState) || (pas.Classes.TComponentStateItem.csLoading in this.FOwner.FComponentState));
      return Result;
    };
    this.IsLoading = function () {
      var Result = false;
      Result = false;
      if (this.FOwner != null) Result = pas.Classes.TComponentStateItem.csLoading in this.FOwner.FComponentState;
      return Result;
    };
    this.IsReading = function () {
      var Result = false;
      Result = false;
      if (this.FOwner != null) Result = pas.Classes.TComponentStateItem.csReading in this.FOwner.FComponentState;
      return Result;
    };
    this.IsDesigning = function () {
      var Result = false;
      Result = (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) || (pas["WEBLib.Forms"].VSIDE != null);
      return Result;
    };
    this.IsDesignerForm = function () {
      var Result = false;
      var frm = null;
      frm = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetOwnerForm(this);
      Result = this.IsDesigning();
      if (frm != null) Result = Result || $mod.TTMSFNCCustomDesignerForm.isPrototypeOf(frm);
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
      this.BeginUpdate();
      pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.LoadSettingsFromFile(this,AFileName);
      this.EndUpdate();
      this.Invalidate();
    };
    this.SaveSettingsToStream = function (AStream, AAppearanceOnly) {
      this.FAppearancePersisting = AAppearanceOnly;
      pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.SaveSettingsToStream(this,AStream);
      this.FAppearancePersisting = false;
    };
    this.LoadSettingsFromStream = function (AStream) {
      this.BeginUpdate();
      pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.LoadSettingsFromStream(this,AStream);
      this.EndUpdate();
      this.Invalidate();
    };
    this.DisableBackground = function () {
      this.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkNone);
      this.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskNone);
      this.SetColor(-1);
    };
    this.EnableBackground = function () {
      this.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
      this.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
    };
    this.DisableFill = function () {
      this.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkNone);
    };
    this.EnableFill = function () {
      this.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
    };
    this.DisableStroke = function () {
      this.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskNone);
    };
    this.EnableStroke = function () {
      this.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
    };
    this.Resize = function () {
      pas["WEBLib.Controls"].TCustomControl.Resize.call(this);
      this.UpdateControlAfterResize();
    };
    this.Paint = function () {
      pas["WEBLib.Controls"].TCustomControl.Paint.call(this);
      this.DrawControl();
    };
    rtl.addIntf(this,pas["WEBLib.TMSFNCGraphics"].ITMSFNCGraphicsExport);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas["WEBLib.TMSFNCStyles"].ITMSFNCAdaptToStyle);
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
    $r.addProperty("AdaptToStyle",3,rtl.boolean,"GetAdaptToStyle","SetAdaptToStyle",{Default: false});
    $r.addProperty("AllowFocus",3,rtl.boolean,"GetAllowFocus","SetAllowFocus",{Default: true});
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("DoubleBuffered",0,rtl.boolean,"FDoubleBuffered","FDoubleBuffered",{Default: false});
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor");
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled",{Default: true});
    $r.addProperty("Font",2,pas["WEBLib.Graphics"].$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("ParentDoubleBuffered",0,rtl.boolean,"FParentDoubleBuffered","FParentDoubleBuffered",{Default: true});
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop",{Default: true});
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint",{Default: false});
    $r.addProperty("Hint",2,rtl.string,"FHint","SetHint");
    $r.addProperty("TabOrder",2,rtl.longint,"FTabOrder","SetTabOrder");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnEnter",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnEnter","FOnEnter");
    $r.addProperty("OnExit",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnExit","FOnExit");
    $r.addProperty("OnKeyDown",0,pas["WEBLib.Controls"].$rtti["TKeyEvent"],"FOnKeyDown","FOnKeyDown");
    $r.addProperty("OnKeyPress",0,pas["WEBLib.Controls"].$rtti["TKeyPressEvent"],"FOnKeyPress","FOnKeyPress");
    $r.addProperty("OnKeyUp",0,pas["WEBLib.Controls"].$rtti["TKeyEvent"],"FOnKeyUp","FOnKeyUp");
    $r.addProperty("OnMouseDown",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseEnter",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMouseEnter","FOnMouseEnter");
    $r.addProperty("OnMouseLeave",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMouseLeave","FOnMouseLeave");
    $r.addProperty("OnMouseMove",0,pas["WEBLib.Controls"].$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseUp",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnMouseWheel",0,pas["WEBLib.Controls"].$rtti["TMouseWheelEvent"],"FOnMouseWheel","FOnMouseWheel");
    $r.addProperty("OnMouseWheelUp",0,pas["WEBLib.Controls"].$rtti["TMouseWheelUpDownEvent"],"FOnMouseWheelUp","FOnMouseWheelUp");
    $r.addProperty("OnMouseWheelDown",0,pas["WEBLib.Controls"].$rtti["TMouseWheelUpDownEvent"],"FOnMouseWheelDown","FOnMouseWheelDown");
    $r.addProperty("OnDragOver",0,pas["WEBLib.Controls"].$rtti["TDragOverEvent"],"FOnDragOver","FOnDragOver");
    $r.addProperty("OnDragDrop",0,pas["WEBLib.Controls"].$rtti["TDragDropEvent"],"FOnDragDrop","FOnDragDrop");
    $r.addProperty("PopupMenu",0,pas["WEBLib.Menus"].$rtti["TPopupMenu"],"FPopupMenu","FPopupMenu");
    $r.addProperty("OnResize",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnResize","FOnResize");
    $r.addProperty("ShowAcceleratorChar",2,rtl.boolean,"FShowAcceleratorChar","SetShowAcceleratorChar",{Default: true});
    $r.addProperty("OnBeforeDraw",0,$mod.$rtti["TTMSFNCCustomControlBeforeDrawEvent"],"FOnBeforeDraw","FOnBeforeDraw");
    $r.addProperty("OnAfterDraw",0,$mod.$rtti["TTMSFNCCustomControlAfterDrawEvent"],"FOnAfterDraw","FOnAfterDraw");
    $r.addProperty("OnCanSaveProperty",0,$mod.$rtti["TTMSFNCCustomControlCanSavePropertyEvent"],"FOnCanSaveProperty","FOnCanSaveProperty");
    $r.addProperty("OnCanLoadProperty",0,$mod.$rtti["TTMSFNCCustomControlCanLoadPropertyEvent"],"FOnCanLoadProperty","FOnCanLoadProperty");
  });
  this.$rtti.$ClassRef("TTMSFNCCustomControlClass",{instancetype: this.$rtti["TTMSFNCCustomControl"]});
  rtl.createClass(this,"TTMSFNCControl",this.TTMSFNCCustomControl,function () {
    this.RegisterRuntimeClasses = function () {
      $mod.TTMSFNCCustomControl.RegisterRuntimeClasses.call(this);
      pas.Classes.RegisterClass($mod.TTMSFNCControl);
    };
    rtl.addIntf(this,pas["WEBLib.TMSFNCGraphics"].ITMSFNCGraphicsExport);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas["WEBLib.TMSFNCStyles"].ITMSFNCAdaptToStyle);
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas.System.IUnknown);
  });
},["WEBLib.TMSFNCUtils","SysUtils","WEBLib.StdCtrls"]);
//# sourceMappingURL=WEBLib.TMSFNCCustomControl.js.map
