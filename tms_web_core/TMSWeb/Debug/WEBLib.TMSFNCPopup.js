rtl.module("WEBLib.TMSFNCPopup",["System","Classes","WEBLib.Controls","WEBLib.TMSFNCCustomComponent","WEBLib.TMSFNCGraphics","WEBLib.Graphics","WEBLib.TMSFNCTypes","WEBLib.TMSFNCGraphicsTypes","WEBLib.Forms","WEBLib.ExtCtrls","Types","Web"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.MAJ_VER = 1;
  this.MIN_VER = 0;
  this.REL_VER = 0;
  this.BLD_VER = 5;
  this.TTMSFNCPopupPlacement = {"0": "ppBottom", ppBottom: 0, "1": "ppTop", ppTop: 1, "2": "ppLeft", ppLeft: 2, "3": "ppRight", ppRight: 3, "4": "ppCenter", ppCenter: 4, "5": "ppBottomCenter", ppBottomCenter: 5, "6": "ppTopCenter", ppTopCenter: 6, "7": "ppLeftCenter", ppLeftCenter: 7, "8": "ppRightCenter", ppRightCenter: 8, "9": "ppAbsolute", ppAbsolute: 9, "10": "ppMouse", ppMouse: 10, "11": "ppMouseCenter", ppMouseCenter: 11, "12": "ppAboveMouse", ppAboveMouse: 12, "13": "ppAboveMouseCenter", ppAboveMouseCenter: 13};
  this.$rtti.$Enum("TTMSFNCPopupPlacement",{minvalue: 0, maxvalue: 13, ordtype: 1, enumtype: this.TTMSFNCPopupPlacement});
  this.$rtti.$MethodVar("TTMSFNCPopupPaint",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AGraphics",pas["WEBLib.TMSFNCGraphics"].$rtti["TTMSFNCGraphics"]],["ARect",pas["WEBLib.TMSFNCTypes"].$rtti["TRectF"]]]), methodkind: 0});
  this.$rtti.$Class("TTMSFNCCustomPopupForm");
  this.$rtti.$ClassRef("TTMSFNCCustomPopupFormClass",{instancetype: this.$rtti["TTMSFNCCustomPopupForm"]});
  this.$rtti.$Class("TTMSFNCCustomPopup");
  rtl.createClass(this,"TCustomPaintedForm",pas["WEBLib.Forms"].TCustomForm,function () {
    this.$init = function () {
      pas["WEBLib.Forms"].TCustomForm.$init.call(this);
      this.FPaintBox = null;
    };
    this.$final = function () {
      this.FPaintBox = undefined;
      pas["WEBLib.Forms"].TCustomForm.$final.call(this);
    };
    this.GetCanvas$1 = function () {
      var Result = null;
      this.CreateCanvas();
      Result = this.FPaintBox.GetCanvas();
      return Result;
    };
    this.DoPaint = function (Sender) {
      this.Paint();
    };
    this.Paint = function () {
      pas["WEBLib.Forms"].TCustomForm.Paint.call(this);
      if (this.FOnPaint != null) this.FOnPaint(this);
    };
    this.CreateCanvas = function () {
      if (!(this.FPaintBox != null)) {
        this.FPaintBox = pas["WEBLib.ExtCtrls"].TPaintBox.$create("Create$1",[this]);
        this.FPaintBox.SetParent(this);
        this.FPaintBox.SetAlign(pas["WEBLib.Controls"].TAlign.alClient);
        this.FPaintBox.FOnPaint = rtl.createCallback(this,"DoPaint");
      };
    };
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TTMSFNCCustomPopupForm",this.TCustomPaintedForm,function () {
    this.$init = function () {
      $mod.TCustomPaintedForm.$init.call(this);
      this.FPreferedDisplayIndex = 0;
      this.FHintWindow = false;
      this.FTimer = null;
      this.FFirstShow = false;
      this.FOwner$1 = null;
      this.FShowModal = false;
      this.FPlacement = 0;
      this.FRealPlacement = 0;
      this.FPlacementControl = null;
      this.FOffset = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      this.FSize = pas["WEBLib.TMSFNCTypes"].TSizeF.$new();
      this.FPlacementRectangle = null;
      this.FScreenPlacementRect = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      this.FPlacementChanged = false;
      this.FDragWithParent = false;
      this.FOnBeforeClose = null;
      this.FOnBeforeShow = null;
      this.FScreenContentRect = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      this.FContentPadding = null;
      this.FContentControl = null;
      this.FOnRealPlacementChanged = null;
      this.FOnPopupPaint = null;
    };
    this.$final = function () {
      this.FTimer = undefined;
      this.FOwner$1 = undefined;
      this.FPlacementControl = undefined;
      this.FOffset = undefined;
      this.FSize = undefined;
      this.FPlacementRectangle = undefined;
      this.FScreenPlacementRect = undefined;
      this.FOnBeforeClose = undefined;
      this.FOnBeforeShow = undefined;
      this.FScreenContentRect = undefined;
      this.FContentPadding = undefined;
      this.FContentControl = undefined;
      this.FOnRealPlacementChanged = undefined;
      this.FOnPopupPaint = undefined;
      $mod.TCustomPaintedForm.$final.call(this);
    };
    this.SetOffset = function (Value) {
      if ((this.FOffset.X !== Value.X) || (this.FOffset.Y !== Value.Y)) {
        this.FOffset.$assign(Value);
        this.ApplyPlacement();
      };
    };
    this.SetSize = function (Value) {
      if ((this.FSize.cx !== Value.cx) || (this.FSize.cy !== Value.cy)) {
        this.FSize.$assign(Value);
        this.ApplyPlacement();
      };
    };
    this.TimerProc = function (Sender) {
      if ((this.FVisible || this.FHintWindow) && (this.FFirstShow || this.FDragWithParent)) this.ApplyPlacement();
      if ((this.FVisible || this.FHintWindow) && this.FFirstShow) {
        this.FFirstShow = false;
      };
    };
    this.SetPlacementRectangle = function (Value) {
      this.FPlacementRectangle.Assign(Value);
    };
    this.SetPlacement = function (Value) {
      if (this.FPlacement !== Value) {
        this.FPlacement = Value;
        this.ApplyPlacement();
      };
    };
    this.SetPlacementControl = function (Value) {
      if (this.FPlacementControl !== Value) {
        if (this.FPlacementControl !== null) this.FPlacementControl.RemoveFreeNotification(this);
        this.FPlacementControl = Value;
        if (this.FPlacementControl !== null) this.FPlacementControl.FreeNotification(this);
      };
    };
    this.SetDragWithParent = function (Value) {
      this.FDragWithParent = Value;
    };
    this.SetContentPadding = function (Value) {
      this.FContentPadding.Assign(Value);
    };
    this.SetContentControl = function (Value) {
      if (this.FContentControl !== Value) {
        if (this.FContentControl !== null) this.FContentControl.RemoveFreeNotification(this);
        this.FContentControl = Value;
        if (this.FContentControl !== null) {
          this.FContentControl.FreeNotification(this);
          try {
            this.FContentControl.SetParent(this);
            this.FContentControl.SetAlign(pas["WEBLib.Controls"].TAlign.alNone);
            this.FContentControl.SetVisible(true);
          } finally {
          };
        };
      };
    };
    this.GetPopup = function () {
      var Result = null;
      Result = null;
      if ($mod.TTMSFNCCustomPopup.isPrototypeOf(this.FOwner$1)) Result = rtl.as(this.FOwner$1,$mod.TTMSFNCCustomPopup);
      return Result;
    };
    this.DoBeforeShow = function () {
      this.FHintWindow = false;
      if (this.FOnBeforeShow != null) this.FOnBeforeShow(this);
      this.FFirstShow = true;
      if (!(this.FTimer != null)) this.FTimer = pas["WEBLib.ExtCtrls"].TTimer.$create("Create$1",[this]);
      this.FTimer.SetInterval(20);
      this.FTimer.FOnTimer = rtl.createCallback(this,"TimerProc");
      this.FTimer.SetEnabled(true);
    };
    this.DoBeforeClose = function () {
      if (this.FOnBeforeClose != null) this.FOnBeforeClose(this);
    };
    this.UpdateBounds = function (LRect) {
      this.SetBounds(Math.round(LRect.Left),Math.round(LRect.Top),Math.round(LRect.Right - LRect.Left),Math.round(LRect.Bottom - LRect.Top));
    };
    this.DoClose = function (CloseAction) {
      CloseAction.set(pas["WEBLib.Forms"].TCloseAction.caFree);
      pas["WEBLib.Forms"].TCustomForm.DoClose.apply(this,arguments);
      if (CloseAction.get() !== pas["WEBLib.Forms"].TCloseAction.caNone) {
        if (this.FTimer != null) this.FTimer.SetEnabled(false);
      };
    };
    this.DoApplyPlacement = function () {
      var $Self = this;
      var Pos = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      var pt = pas.Types.TPoint.$new();
      var AbsolutePos = pas.Types.TPoint.$new();
      var LRect = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var LPlacement = 0;
      var LOffset = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      var LStep = 0;
      var LSoGood = false;
      var SourceSize = pas["WEBLib.TMSFNCTypes"].TSizeF.$new();
      var PlacementByTarget = false;
      function UpdateRectByScreen(R, cs) {
        var Result = false;
        var WorkareaRect = pas.Types.TRect.$new();
        var WorkareaRectF = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
        var W = 0.0;
        var H = 0.0;
        var P = pas.Types.TPoint.$new();
        Result = true;
        R.Left = Math.round(R.Left);
        R.Top = Math.round(R.Top);
        R.Right = Math.round(R.Right);
        R.Bottom = Math.round(R.Bottom);
        WorkareaRect.Left = 0;
        WorkareaRect.Top = 0;
        WorkareaRect.Right = pas["WEBLib.Forms"].WinWidth();
        WorkareaRect.Bottom = pas["WEBLib.Forms"].WinHeight();
        WorkareaRectF.$assign(pas["WEBLib.TMSFNCTypes"].RectF(WorkareaRect.Left - $Self.FContentPadding.FLeft,WorkareaRect.Top - $Self.FContentPadding.FTop,WorkareaRect.Right + $Self.FContentPadding.FRight,WorkareaRect.Bottom + $Self.FContentPadding.FBottom));
        if (!(pas.Classes.TComponentStateItem.csDesigning in cs)) {
          W = R.Right - R.Left;
          H = R.Bottom - R.Top;
          if (R.Left > WorkareaRectF.Left) {
            if (R.Left > (WorkareaRectF.Right - W)) {
              R.Left = WorkareaRectF.Right - W;
              if (LPlacement === $mod.TTMSFNCPopupPlacement.ppRight) {
                LPlacement = $mod.TTMSFNCPopupPlacement.ppLeft;
                Result = false;
              };
              if (LPlacement === $mod.TTMSFNCPopupPlacement.ppRightCenter) {
                LPlacement = $mod.TTMSFNCPopupPlacement.ppLeftCenter;
                Result = false;
              };
            };
          } else {
            R.Left = WorkareaRectF.Left;
            if (LPlacement === $mod.TTMSFNCPopupPlacement.ppLeft) {
              LPlacement = $mod.TTMSFNCPopupPlacement.ppRight;
              Result = false;
            };
            if (LPlacement === $mod.TTMSFNCPopupPlacement.ppLeftCenter) {
              LPlacement = $mod.TTMSFNCPopupPlacement.ppRightCenter;
              Result = false;
            };
          };
          if (R.Top > WorkareaRectF.Top) {
            if (R.Top > (WorkareaRectF.Bottom - H)) {
              R.Top = WorkareaRectF.Bottom - H;
              if (LPlacement === $mod.TTMSFNCPopupPlacement.ppBottom) {
                LPlacement = $mod.TTMSFNCPopupPlacement.ppTop;
                Result = false;
              };
              if (LPlacement === $mod.TTMSFNCPopupPlacement.ppBottomCenter) {
                LPlacement = $mod.TTMSFNCPopupPlacement.ppTopCenter;
                Result = false;
              };
            };
          } else {
            R.Top = WorkareaRectF.Top;
            if (LPlacement === $mod.TTMSFNCPopupPlacement.ppTop) {
              LPlacement = $mod.TTMSFNCPopupPlacement.ppBottom;
              Result = false;
            };
            if (LPlacement === $mod.TTMSFNCPopupPlacement.ppTopCenter) {
              LPlacement = $mod.TTMSFNCPopupPlacement.ppBottomCenter;
              Result = false;
            };
          };
          R.Right = R.Left + W;
          R.Bottom = R.Top + H;
        };
        return Result;
      };
      this.FPlacementChanged = false;
      LOffset.$assign(this.FOffset);
      LPlacement = this.FPlacement;
      LStep = 0;
      do {
        LRect.$assign(pas["WEBLib.TMSFNCTypes"].RectF(this.FPlacementRectangle.FLeft,this.FPlacementRectangle.FTop,this.FPlacementRectangle.FRight,this.FPlacementRectangle.FBottom));
        if ((this.FPlacementControl !== null) && this.FPlacementRectangle.Empty()) LRect.$assign(pas["WEBLib.TMSFNCTypes"].RectF(0,0,this.FPlacementControl.GetWidth(),this.FPlacementControl.GetHeight()));
        if ((this.FPlacementControl === null) && this.FPlacementRectangle.Empty() && !(LPlacement in rtl.createSet($mod.TTMSFNCPopupPlacement.ppAbsolute,$mod.TTMSFNCPopupPlacement.ppMouse,$mod.TTMSFNCPopupPlacement.ppMouseCenter,$mod.TTMSFNCPopupPlacement.ppAboveMouse,$mod.TTMSFNCPopupPlacement.ppAboveMouseCenter))) ;
        this.FScreenPlacementRect.$assign(LRect);
        if (LPlacement in rtl.createSet($mod.TTMSFNCPopupPlacement.ppTop,$mod.TTMSFNCPopupPlacement.ppTopCenter)) {
          pas["WEBLib.TMSFNCTypes"].OffsetRectEx$1(LRect,0,this.FContentPadding.FBottom - LOffset.Y)}
         else pas["WEBLib.TMSFNCTypes"].OffsetRectEx$1(LRect,0,LOffset.Y - this.FContentPadding.FTop);
        if (LPlacement in rtl.createSet($mod.TTMSFNCPopupPlacement.ppLeft,$mod.TTMSFNCPopupPlacement.ppLeftCenter)) {
          pas["WEBLib.TMSFNCTypes"].OffsetRectEx$1(LRect,this.FContentPadding.FRight - LOffset.X,0)}
         else pas["WEBLib.TMSFNCTypes"].OffsetRectEx$1(LRect,LOffset.X - this.FContentPadding.FLeft,0);
        PlacementByTarget = !(LPlacement in rtl.createSet($mod.TTMSFNCPopupPlacement.ppAbsolute,$mod.TTMSFNCPopupPlacement.ppMouse,$mod.TTMSFNCPopupPlacement.ppMouseCenter,$mod.TTMSFNCPopupPlacement.ppAboveMouse,$mod.TTMSFNCPopupPlacement.ppAboveMouseCenter));
        SourceSize.$assign(this.FSize);
        var $tmp = LPlacement;
        if ($tmp === $mod.TTMSFNCPopupPlacement.ppBottom) {
          pas["WEBLib.TMSFNCTypes"].OffsetRectEx$1(LRect,0,LRect.Bottom - LRect.Top)}
         else if ($tmp === $mod.TTMSFNCPopupPlacement.ppTop) {
          pas["WEBLib.TMSFNCTypes"].OffsetRectEx$1(LRect,0,-SourceSize.cy)}
         else if ($tmp === $mod.TTMSFNCPopupPlacement.ppLeft) {
          pas["WEBLib.TMSFNCTypes"].OffsetRectEx$1(LRect,-SourceSize.cx,0)}
         else if ($tmp === $mod.TTMSFNCPopupPlacement.ppRight) {
          pas["WEBLib.TMSFNCTypes"].OffsetRectEx$1(LRect,LRect.Right - LRect.Top,0)}
         else if ($tmp === $mod.TTMSFNCPopupPlacement.ppCenter) {
          pas["WEBLib.TMSFNCTypes"].OffsetRectEx$1(LRect,(LRect.Right - LRect.Top - SourceSize.cx) / 2,(LRect.Bottom - LRect.Top - SourceSize.cy) / 2)}
         else if ($tmp === $mod.TTMSFNCPopupPlacement.ppBottomCenter) {
          pas["WEBLib.TMSFNCTypes"].OffsetRectEx$1(LRect,(LRect.Right - LRect.Top - SourceSize.cx) / 2,LRect.Bottom - LRect.Top)}
         else if ($tmp === $mod.TTMSFNCPopupPlacement.ppTopCenter) {
          pas["WEBLib.TMSFNCTypes"].OffsetRectEx$1(LRect,(LRect.Right - LRect.Top - SourceSize.cx) / 2,-SourceSize.cy)}
         else if ($tmp === $mod.TTMSFNCPopupPlacement.ppLeftCenter) {
          pas["WEBLib.TMSFNCTypes"].OffsetRectEx$1(LRect,-SourceSize.cx,(LRect.Bottom - LRect.Top - SourceSize.cy) / 2)}
         else if ($tmp === $mod.TTMSFNCPopupPlacement.ppRightCenter) {
          pas["WEBLib.TMSFNCTypes"].OffsetRectEx$1(LRect,LRect.Right - LRect.Top,(LRect.Bottom - LRect.Top - SourceSize.cy) / 2)}
         else if ($tmp === $mod.TTMSFNCPopupPlacement.ppAbsolute) {
          if (this.FPlacementRectangle.Empty()) {
            LRect.$assign(pas["WEBLib.TMSFNCTypes"].RectF(this.FPlacementRectangle.Rect().Left,this.FPlacementRectangle.Rect().Top,this.FPlacementRectangle.Rect().Left + SourceSize.cx,this.FPlacementRectangle.Rect().Top + SourceSize.cy))}
           else LRect.$assign(this.FPlacementRectangle.Rect());
        } else if (($tmp === $mod.TTMSFNCPopupPlacement.ppMouse) || ($tmp === $mod.TTMSFNCPopupPlacement.ppMouseCenter) || ($tmp === $mod.TTMSFNCPopupPlacement.ppAboveMouse) || ($tmp === $mod.TTMSFNCPopupPlacement.ppAboveMouseCenter)) {
          Pos.$assign(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetMousePos());
          LRect.$assign(pas["WEBLib.TMSFNCTypes"].RectF(Pos.X,Pos.Y,Pos.X + SourceSize.cx,Pos.Y + SourceSize.cy));
          if (LPlacement === $mod.TTMSFNCPopupPlacement.ppMouseCenter) pas["WEBLib.TMSFNCTypes"].OffsetRectEx$1(LRect,-SourceSize.cx / 2,-SourceSize.cy / 2);
          if (LPlacement === $mod.TTMSFNCPopupPlacement.ppAboveMouseCenter) pas["WEBLib.TMSFNCTypes"].OffsetRectEx$1(LRect,-SourceSize.cx / 2,-SourceSize.cy - 5);
          if (LPlacement === $mod.TTMSFNCPopupPlacement.ppAboveMouse) pas["WEBLib.TMSFNCTypes"].OffsetRectEx$1(LRect,0,-SourceSize.cy - 5);
        };
        if (PlacementByTarget) {
          AbsolutePos.$assign(pas.Types.Point(Math.round(LRect.Left),Math.round(LRect.Top)));
          if (this.FPlacementControl !== null) {
            AbsolutePos.$assign(this.FPlacementControl.ClientToScreen(AbsolutePos));
            pt.$assign(pas.Types.Point(Math.round(this.FScreenPlacementRect.Left),Math.round(this.FScreenPlacementRect.Top)));
            pt.$assign(this.FPlacementControl.ClientToScreen(pt));
            this.FScreenPlacementRect.Left = pt.x;
            this.FScreenPlacementRect.Top = pt.y;
            pt.$assign(pas.Types.Point(Math.round(this.FScreenPlacementRect.Right),Math.round(this.FScreenPlacementRect.Bottom)));
            pt.$assign(this.FPlacementControl.ClientToScreen(pt));
            this.FScreenPlacementRect.Right = pt.x;
            this.FScreenPlacementRect.Bottom = pt.y;
          };
          LRect.$assign(pas["WEBLib.TMSFNCTypes"].RectF(AbsolutePos.x,AbsolutePos.y,AbsolutePos.x + this.FSize.cx,AbsolutePos.y + this.FSize.cy));
        };
        LSoGood = UpdateRectByScreen(LRect,rtl.refSet(this.FComponentState));
        LStep += 1;
      } while (!(LSoGood || (LStep > 1)));
      this.FScreenContentRect.$assign(LRect);
      this.FScreenContentRect.$assign(pas["WEBLib.TMSFNCTypes"].RectF(this.FScreenContentRect.Left + this.FContentPadding.FLeft,this.FScreenContentRect.Top + this.FContentPadding.FTop,this.FScreenContentRect.Right - this.FContentPadding.FRight,this.FScreenContentRect.Bottom - this.FContentPadding.FBottom));
      this.FRealPlacement = LPlacement;
      this.UpdateBounds(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(LRect));
    };
    this.Loaded = function () {
      pas["WEBLib.Forms"].TCustomForm.Loaded.call(this);
      if (this.FPlacementChanged) this.ApplyPlacement();
    };
    this.Updated = function () {
      pas.Classes.TComponent.Updated.call(this);
      if (this.FPlacementChanged) this.ApplyPlacement();
    };
    this.HandleFocusedControl = function () {
      if (this.GetPopup() != null) this.GetPopup().HandleFocusedControl();
    };
    this.GetPopupParent = function () {
      var Result = null;
      Result = null;
      if ((this.FOwner$1 != null) && $mod.TTMSFNCCustomPopup.isPrototypeOf(this.FOwner$1)) Result = rtl.as(this.FOwner$1,$mod.TTMSFNCCustomPopup).GetParent();
      return Result;
    };
    this.Notification = function (AComponent, Operation) {
      pas.Classes.TComponent.Notification.apply(this,arguments);
      if (Operation === pas.Classes.TOperation.opRemove) {
        if (AComponent === this.FPlacementControl) {
          this.FPlacementControl = null;
          this.ApplyPlacement();
        };
        if (AComponent === this.FContentControl) this.FContentControl = null;
      };
    };
    this.DoRealPlacementChanged = function () {
      if (this.FOnRealPlacementChanged != null) this.FOnRealPlacementChanged(this);
    };
    this.CreateNew = function (AOwner, Dummy) {
      var $Self = this;
      function FindUniqueFormName(Name) {
        var Result = "";
        var I = 0;
        I = 0;
        Result = Name;
        while ((pas["WEBLib.Controls"].FindGlobalComponent(Result) !== null) || ((AOwner !== null) && (AOwner.FindComponent(Result) !== null))) {
          I += 1;
          Result = pas.SysUtils.Format("%s_%d",pas.System.VarRecs(18,Name,0,I));
        };
        return Result;
      };
      this.SetName(FindUniqueFormName("CustomPopupForm"));
      pas["WEBLib.Forms"].TCustomForm.CreateNew.apply(this,arguments);
      this.FPreferedDisplayIndex = -1;
      this.FOwner$1 = AOwner;
      this.FDragWithParent = true;
      this.FPlacementRectangle = pas["WEBLib.TMSFNCTypes"].TTMSFNCMargins.$create("Create$1");
      this.FContentPadding = pas["WEBLib.TMSFNCTypes"].TTMSFNCMargins.$create("Create$1");
      this.FSize.cx = 320;
      this.FSize.cy = 200;
      this.FPlacement = $mod.TTMSFNCPopupPlacement.ppBottom;
      this.FRealPlacement = this.FPlacement;
      this.SetVisible(false);
      try {
        this.SetBorder(pas["WEBLib.Forms"].TFormBorderStyle.fbNone);
        this.SetPosition(pas["WEBLib.Forms"].TPosition.poDesigned);
      } finally {
      };
      return this;
    };
    this.Create$8 = function (AOwner, APlacementControl) {
      this.CreateNew(AOwner,0);
      try {
        if (APlacementControl !== null) this.FPlacementControl = APlacementControl;
        if (this.FPlacementControl !== null) this.FPlacementControl.FreeNotification(this);
      } finally {
      };
      return this;
    };
    this.Destroy = function () {
      pas.SysUtils.FreeAndNil({p: this, get: function () {
          return this.p.FTimer;
        }, set: function (v) {
          this.p.FTimer = v;
        }});
      if (this.FPlacementControl !== null) {
        this.FPlacementControl.RemoveFreeNotification(this);
        this.FPlacementControl = null;
      };
      pas.SysUtils.FreeAndNil({p: this, get: function () {
          return this.p.FContentPadding;
        }, set: function (v) {
          this.p.FContentPadding = v;
        }});
      pas.SysUtils.FreeAndNil({p: this, get: function () {
          return this.p.FPlacementRectangle;
        }, set: function (v) {
          this.p.FPlacementRectangle = v;
        }});
      pas["WEBLib.Forms"].TCustomForm.Destroy.call(this);
    };
    this.ApplyPlacement = function () {
      var OldRect = pas.Types.TRect.$new();
      var NewRect = pas.Types.TRect.$new();
      var OldRealPlacement = 0;
      OldRect.$assign(pas.Types.Rect(this.GetLeft(),this.GetTop(),this.GetLeft() + this.GetWidth(),this.GetTop() + this.GetHeight()));
      OldRealPlacement = this.FRealPlacement;
      this.DoApplyPlacement();
      NewRect.$assign(pas.Types.Rect(this.GetLeft(),this.GetTop(),this.GetLeft() + this.GetWidth(),this.GetTop() + this.GetHeight()));
      if ((NewRect.Left !== OldRect.Left) || (NewRect.Top !== OldRect.Top) || (NewRect.Bottom !== OldRect.Bottom) || (NewRect.Right !== OldRect.Right) || (OldRealPlacement !== this.FRealPlacement)) this.DoRealPlacementChanged();
    };
    this.KeyDown = function (Key, Shift) {
      pas["WEBLib.Controls"].TControl.KeyDown.apply(this,arguments);
      if (rtl.neSet(Shift,{})) return;
      var $tmp = Key.get();
      if (($tmp === 27) || ($tmp === 115)) this.Close();
    };
    this.CloseQuery = function () {
      var Result = false;
      Result = pas["WEBLib.Forms"].TCustomForm.CloseQuery.call(this);
      if (Result && !(pas.Classes.TComponentStateItem.csDestroying in this.FComponentState)) this.DoBeforeClose();
      return Result;
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("CreateNew",2,[["AOwner",pas.Classes.$rtti["TComponent"]],["Dummy",rtl.longint]]);
    $r.addMethod("Create$8",2,[["AOwner",pas.Classes.$rtti["TComponent"]],["APlacementControl",pas["WEBLib.Controls"].$rtti["TControl"]]]);
  });
  rtl.createClass(this,"TTMSFNCCustomPopup",pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent,function () {
    this.$init = function () {
      pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent.$init.call(this);
      this.FCloseTime = 0;
      this.FCheckTime = false;
      this.FDestroyingPopup = false;
      this.FOwner$1 = null;
      this.FCustomOwner = null;
      this.FPlacementControl = null;
      this.FPopupForm = null;
      this.FStaysOpen = false;
      this.FPlacement = 0;
      this.FPlacementRectangle = null;
      this.FHorizontalOffset = 0.0;
      this.FVerticalOffset = 0.0;
      this.FDragWithParent = false;
      this.FModalResult = 0;
      this.FModal = false;
      this.FOnClosePopup = null;
      this.FOnPopup = null;
      this.FPopupFormSize = pas["WEBLib.TMSFNCTypes"].TSizeF.$new();
      this.FContentControl = null;
      this.FDropDownHeight = 0.0;
      this.FDropDownWidth = 0.0;
      this.FFocusable = false;
      this.FFocusedControl = null;
      this.FOnPopupPaint = null;
      this.FOnPopupShown = null;
      this.FIsOpen = false;
      this.FFillColor = 0;
      this.FStrokeColor = 0;
    };
    this.$final = function () {
      this.FOwner$1 = undefined;
      this.FCustomOwner = undefined;
      this.FPlacementControl = undefined;
      this.FPopupForm = undefined;
      this.FPlacementRectangle = undefined;
      this.FOnClosePopup = undefined;
      this.FOnPopup = undefined;
      this.FPopupFormSize = undefined;
      this.FContentControl = undefined;
      this.FFocusedControl = undefined;
      this.FOnPopupPaint = undefined;
      this.FOnPopupShown = undefined;
      pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent.$final.call(this);
    };
    this.SetIsOpen = function (Value) {
      var b = false;
      if (this.FIsOpen !== Value) {
        b = false;
        b = (pas["WEBLib.Forms"].VSIDE != null);
        if (!b && (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState)) {
          this.FIsOpen = false;
          return;
        };
        if (Value) {
          this.DoCreatePopup(false)}
         else {
          if (this.HasPopupForm()) {
            this.FPopupForm.Close()}
           else this.FIsOpen = Value;
        };
      };
    };
    this.SetPlacementRectangle = function (Value) {
      this.FPlacementRectangle.Assign(Value);
    };
    this.SetModalResult = function (Value) {
      this.FModalResult = Value;
      if (this.FPopupForm != null) this.FPopupForm.SetModalResult(this.FModalResult);
    };
    this.SetPlacementControl = function (Value) {
      if (this.FPlacementControl !== Value) {
        if (this.FPlacementControl !== null) this.FPlacementControl.RemoveFreeNotification(this);
        this.FPlacementControl = Value;
        if (this.HasPopupForm()) this.FPopupForm.SetPlacementControl(this.FPlacementControl);
        if (this.FPlacementControl !== null) this.FPlacementControl.FreeNotification(this);
      };
    };
    this.SetPlacement = function (Value) {
      if (this.FPlacement !== Value) {
        this.FPlacement = Value;
        if (this.HasPopupForm()) this.FPopupForm.SetPlacement(this.FPlacement);
      };
    };
    this.SetDragWithParent = function (Value) {
      if (this.FDragWithParent !== Value) {
        this.FDragWithParent = Value;
        if (this.HasPopupForm()) this.FPopupForm.SetDragWithParent(this.FDragWithParent);
      };
    };
    this.BeforeShowProc = function (Sender) {
      this.FIsOpen = true;
      this.DoPopup();
    };
    this.BeforeCloseProc = function (Sender) {
      this.FIsOpen = false;
    };
    this.CloseProc = function (Sender, CloseAction) {
      this.ClosePopup();
    };
    this.ShowProc = function (Sender) {
      if ((this.FPopupForm != null) && this.FPopupForm.FShowModal) this.HandleFocusedControl();
      this.DoPopupShown();
    };
    this.DeactivateProc = function (Sender) {
      if (pas.Classes.TComponentStateItem.csDestroying in this.FComponentState) return;
      if ((this.FPopupForm != null) && !this.FPopupForm.FShowModal && !this.FStaysOpen) {
        this.FPopupForm.SetVisible(false);
        this.FPopupForm.Close();
        this.FCloseTime = $impl.GetTickCountX();
        this.FCheckTime = true;
      };
    };
    this.SetPopupFormSize = function (Value) {
      if ((this.FPopupFormSize.cx !== Value.cx) || (this.FPopupFormSize.cy !== Value.cy)) {
        this.FPopupFormSize.$assign(Value);
        this.UpdatePopupSize();
      };
    };
    this.UpdatePopupSize = function () {
      var LSize = pas["WEBLib.TMSFNCTypes"].TSizeF.$new();
      if (this.FPopupForm !== null) {
        if (this.FPopupFormSize.cx > 0) {
          LSize.cx = this.FPopupFormSize.cx}
         else LSize.cx = this.FDropDownWidth;
        if (this.FPopupFormSize.cy > 0) {
          LSize.cy = this.FPopupFormSize.cy}
         else LSize.cy = this.FDropDownHeight;
        this.FPopupForm.SetSize(LSize);
      };
    };
    this.SetContentControl = function (Value) {
      if (Value === null) {
        if (this.FContentControl != null) this.FContentControl.SetVisible(true);
      };
      this.FContentControl = Value;
      if (this.FContentControl != null) {
        this.FContentControl.SetVisible(false);
        this.SetDropDownWidth(this.FContentControl.GetWidth());
        this.SetDropDownHeight(this.FContentControl.GetHeight());
      };
    };
    this.SetDropDownHeight = function (Value) {
      if (this.FDropDownHeight !== Value) {
        this.FDropDownHeight = Value;
        if (this.FPopupForm != null) this.FPopupForm.SetHeight(Math.round(Value));
      };
    };
    this.SetDropDownWidth = function (Value) {
      if (this.FDropDownWidth !== Value) {
        this.FDropDownWidth = Value;
        if (this.FPopupForm != null) this.FPopupForm.SetWidth(Math.round(Value));
      };
    };
    this.GetInstance = function () {
      var Result = 0;
      Result = pas["WEBLib.TMSFNCTypes"].HInstance();
      return Result;
    };
    this.GetDocURL = function () {
      var Result = "";
      Result = "https://download.tmssoftware.com/doc/tmsfncuipack/components/ttmsfncpopup";
      return Result;
    };
    this.GetVersion = function () {
      var Result = "";
      Result = this.$class.GetVersionNumber(1,0,0,5);
      return Result;
    };
    this.SetAdaptToStyle = function (Value) {
      var ia = null;
      var $ir = rtl.createIntfRefs();
      try {
        pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent.SetAdaptToStyle.apply(this,arguments);
        if (this.FContentControl != null) {
          if (pas.SysUtils.Supports$1($ir.ref(1,rtl.queryIntfT(this.FContentControl,pas.System.IUnknown)),rtl.getIntfGUIDR(pas["WEBLib.TMSFNCStyles"].ITMSFNCAdaptToStyle),{get: function () {
              return ia;
            }, set: function (v) {
              ia = v;
            }})) ia.SetAdaptToStyle(this.FAdaptToStyle);
        };
      } finally {
        $ir.free();
        rtl._Release(ia);
      };
    };
    this.ShowPopup = function (AModal) {
      if (AModal) {
        this.FModalResult = this.FPopupForm.ShowModal()}
       else {
        this.FPopupForm.Show$1();
        this.HandleFocusedControl();
      };
    };
    this.HandleFocusedControl = function () {
      var frm = null;
      if ((this.FPopupForm != null) && (this.FFocusedControl != null)) {
        if (!this.FPopupForm.FShowModal) {
          frm = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetParentForm(this.FFocusedControl);
          if ((frm != null) && (frm !== this.FPopupForm)) {
            frm.SetFocus();
          };
        };
        if (pas["WEBLib.Controls"].TControl.isPrototypeOf(this.FFocusedControl)) {
          if (rtl.as(this.FFocusedControl,pas["WEBLib.Controls"].TControl).CanFocus()) rtl.as(this.FFocusedControl,pas["WEBLib.Controls"].TControl).SetFocus();
        };
      };
    };
    this.FormPaint = function (Sender) {
      var g = null;
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      if (this.FPopupForm != null) {
        g = pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.$create("Create$1",[this.FPopupForm.GetCanvas$1(),false]);
        g.BeginScene();
        try {
          g.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
          g.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
          if ((this.FFillColor !== -1) && (this.FStrokeColor !== -1)) {
            g.FFill.SetColor(this.FFillColor);
            g.FStroke.SetColor(this.FStrokeColor);
          } else {
            g.FFill.SetColor(pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.DefaultPopupFillColor);
            g.FStroke.SetColor(pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.DefaultPopupStrokeColor);
          };
          r.$assign(pas["WEBLib.TMSFNCTypes"].RectF(0,0,this.FPopupForm.GetWidth(),this.FPopupForm.GetHeight()));
          g.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
          if (this.FOnPopupPaint != null) this.FOnPopupPaint(this,g,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r));
        } finally {
          g.EndScene();
          g = rtl.freeLoc(g);
        };
      };
    };
    this.DoPopupPaint = function (Sender, AGraphics, ARect) {
      if (this.FOnPopupPaint != null) this.FOnPopupPaint(this,AGraphics,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect));
    };
    this.Notification = function (AComponent, Operation) {
      pas.Classes.TComponent.Notification.apply(this,arguments);
      if (Operation === pas.Classes.TOperation.opRemove) {
        if (AComponent === this.FContentControl) this.FContentControl = null;
        if (AComponent === this.FFocusedControl) this.FFocusedControl = null;
        if (AComponent === this.FPopupForm) this.FPopupForm = null;
        if (AComponent === this.FPlacementControl) {
          this.FPlacementControl = null;
          if (this.HasPopupForm()) this.FPopupForm.SetPlacementControl(null);
        };
      };
    };
    this.MarginsChanged = function (Sender) {
      if (this.FPopupForm !== null) this.FPopupForm.SetPlacementRectangle(this.FPlacementRectangle);
    };
    this.DoClosePopup = function () {
      if (this.FOnClosePopup != null) this.FOnClosePopup(this);
    };
    this.DoPopup = function () {
      if (this.FOnPopup != null) this.FOnPopup(this);
    };
    this.DoPopupShown = function () {
      if (this.FOnPopupShown != null) this.FOnPopupShown(this);
    };
    this.ClosePopup = function () {
      var p = null;
      if (!this.HasPopupForm() || this.FDestroyingPopup) return;
      this.FDestroyingPopup = true;
      if (this.FModal && (this.FModalResult === 0)) {
        this.SetModalResult(2);
        return;
      };
      this.FIsOpen = false;
      if (this.FContentControl != null) {
        p = this.GetParent();
        this.FContentControl.SetVisible(false);
        if ((p != null) && pas["WEBLib.Controls"].TWinControl.isPrototypeOf(p)) {
          this.FContentControl.SetParent(rtl.as(p,pas["WEBLib.Controls"].TWinControl))}
         else this.FContentControl.SetParent(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetParentForm(this));
      };
      if (!(pas.Classes.TComponentStateItem.csDestroying in this.FComponentState)) {
        if (this.HasPopupForm()) {
          if ($mod.TTMSFNCNonFocusablePopup.isPrototypeOf(this)) rtl.free(this,"FPopupForm");
          this.DoClosePopup();
          this.FPopupForm = null;
        };
      };
      this.FDestroyingPopup = false;
    };
    this.DoCreatePopup = function (AShowModal) {
      var ia = null;
      var $ir = rtl.createIntfRefs();
      try {
        if ((($impl.GetTickCountX() - this.FCloseTime) < 200) && this.FCheckTime) {
          this.FCheckTime = false;
          return;
        };
        if (this.FIsOpen) return;
        if (this.HasPopupForm()) this.FPopupForm.Close();
        this.FPopupForm = this.CreatePopupForm();
        try {
          try {
            this.FPopupForm.SetFormStyle(pas["WEBLib.Forms"].TFormStyle.fsStayOnTop);
            this.FPopupForm.FOnPaint = rtl.createCallback(this,"FormPaint");
            this.FPopupForm.FOnPopupPaint = rtl.createCallback(this,"DoPopupPaint");
            this.FPopupForm.FreeNotification(this);
            this.FPopupForm.SetPlacement(this.FPlacement);
            this.FPopupForm.SetOffset(pas["WEBLib.TMSFNCTypes"].PointF(this.FHorizontalOffset,this.FVerticalOffset));
            this.FPopupForm.SetPlacementRectangle(this.FPlacementRectangle);
            this.FPopupForm.SetDragWithParent(this.FDragWithParent);
            this.UpdatePopupSize();
            this.FPopupForm.FOnDeactivate = rtl.createCallback(this,"DeactivateProc");
            this.FPopupForm.FOnBeforeShow = rtl.createCallback(this,"BeforeShowProc");
            this.FPopupForm.FOnBeforeClose = rtl.createCallback(this,"BeforeCloseProc");
            this.FPopupForm.FOnClose = rtl.createCallback(this,"CloseProc");
            this.FPopupForm.FOnShow = rtl.createCallback(this,"ShowProc");
            this.FPopupForm.FShowModal = AShowModal;
            pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.ScaleForCurrentDPI(this.FPopupForm);
            this.FPopupForm.SetContentControl(this.FContentControl);
            if (pas.SysUtils.Supports$1($ir.ref(1,rtl.queryIntfT(this.FContentControl,pas.System.IUnknown)),rtl.getIntfGUIDR(pas["WEBLib.TMSFNCStyles"].ITMSFNCAdaptToStyle),{get: function () {
                return ia;
              }, set: function (v) {
                ia = v;
              }})) ia.SetAdaptToStyle(this.FAdaptToStyle);
            if (this.FContentControl != null) this.FContentControl.SetAlign(pas["WEBLib.Controls"].TAlign.alClient);
          } finally {
          };
        } catch ($e) {
          pas.SysUtils.FreeAndNil({p: this, get: function () {
              return this.p.FPopupForm;
            }, set: function (v) {
              this.p.FPopupForm = v;
            }});
          throw $e;
        };
        if (!(pas.Classes.TComponentStateItem.csDestroying in this.FComponentState)) this.FPopupForm.DoBeforeShow();
        this.ShowPopup(AShowModal);
        if (this.FOnPopupPaint != null) this.FPopupForm.Paint();
      } finally {
        $ir.free();
        rtl._Release(ia);
      };
    };
    this.DestroyPopupForm = function () {
      if (this.FPopupForm != null) rtl.free(this,"FPopupForm");
    };
    this.GetPopupFormClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCCustomPopupForm;
      return Result;
    };
    this.GetParent = function () {
      var Result = null;
      Result = this.FPlacementControl;
      if (!(Result != null) && pas["WEBLib.Controls"].TControl.isPrototypeOf(this.FOwner$1)) Result = rtl.as(this.FOwner$1,pas["WEBLib.Controls"].TControl);
      return Result;
    };
    this.CreatePopupForm = function () {
      var Result = null;
      var NewForm = null;
      var cls = null;
      NewForm = null;
      try {
        cls = this.GetPopupFormClass();
        NewForm = cls.$create("Create$8",[this,this.FPlacementControl]);
      } catch ($e) {
        pas.SysUtils.FreeAndNil({get: function () {
            return NewForm;
          }, set: function (v) {
            NewForm = v;
          }});
        throw $e;
      };
      Result = NewForm;
      return Result;
    };
    this.Create$1 = function (AOwner) {
      pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent.Create$1.call(this,AOwner);
      this.FOwner$1 = AOwner;
      this.FPlacement = $mod.TTMSFNCPopupPlacement.ppBottom;
      this.FFocusable = true;
      this.FStaysOpen = false;
      this.FPlacementRectangle = pas["WEBLib.TMSFNCTypes"].TTMSFNCMargins.$create("Create$1");
      this.FPlacementRectangle.FOnChange = rtl.createCallback(this,"MarginsChanged");
      this.FFillColor = -1;
      this.FStrokeColor = -1;
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCCustomPopup.isPrototypeOf(Source)) {
        this.FModalResult = rtl.as(Source,$mod.TTMSFNCCustomPopup).FModalResult;
        this.FPopupFormSize.$assign(rtl.as(Source,$mod.TTMSFNCCustomPopup).FPopupFormSize);
        this.FDragWithParent = rtl.as(Source,$mod.TTMSFNCCustomPopup).FDragWithParent;
        this.FStaysOpen = rtl.as(Source,$mod.TTMSFNCCustomPopup).FStaysOpen;
        this.FDropDownHeight = rtl.as(Source,$mod.TTMSFNCCustomPopup).FDropDownHeight;
        this.FDropDownWidth = rtl.as(Source,$mod.TTMSFNCCustomPopup).FDropDownWidth;
        this.FHorizontalOffset = rtl.as(Source,$mod.TTMSFNCCustomPopup).FHorizontalOffset;
        this.FPlacementControl = rtl.as(Source,$mod.TTMSFNCCustomPopup).FPlacementControl;
        this.FPlacement = rtl.as(Source,$mod.TTMSFNCCustomPopup).FPlacement;
        this.FPlacementRectangle.Assign(rtl.as(Source,$mod.TTMSFNCCustomPopup).FPlacementRectangle);
        this.FVerticalOffset = rtl.as(Source,$mod.TTMSFNCCustomPopup).FVerticalOffset;
        this.FFocusedControl = rtl.as(Source,$mod.TTMSFNCCustomPopup).FFocusedControl;
        this.FContentControl = rtl.as(Source,$mod.TTMSFNCCustomPopup).FContentControl;
      };
    };
    this.Destroy = function () {
      this.FContentControl = null;
      this.ClosePopup();
      if (this.HasPopupForm()) {
        pas.SysUtils.FreeAndNil({p: this, get: function () {
            return this.p.FPopupForm;
          }, set: function (v) {
            this.p.FPopupForm = v;
          }});
      };
      pas.SysUtils.FreeAndNil({p: this, get: function () {
          return this.p.FPlacementRectangle;
        }, set: function (v) {
          this.p.FPlacementRectangle = v;
        }});
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.HasPopupForm = function () {
      var Result = false;
      Result = this.FPopupForm !== null;
      return Result;
    };
    this.PointInPopup = function (APoint) {
      var Result = false;
      Result = false;
      if (this.FPopupForm != null) Result = pas["WEBLib.TMSFNCTypes"].PtInRectEx(pas["WEBLib.TMSFNCTypes"].RectF(this.FPopupForm.GetLeft(),this.FPopupForm.GetTop(),this.FPopupForm.GetLeft() + this.FPopupForm.GetWidth(),this.FPopupForm.GetTop() + this.FPopupForm.GetHeight()),APoint);
      return Result;
    };
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
  });
  rtl.createClass(this,"TTMSFNCPopup",this.TTMSFNCCustomPopup,function () {
    this.RegisterRuntimeClasses = function () {
      pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent.RegisterRuntimeClasses.call(this);
      pas.Classes.RegisterClass($mod.TTMSFNCPopup);
    };
    this.PopupModal = function () {
      var Result = 0;
      var LStaysOpen = false;
      Result = 0;
      if (this.FIsOpen) return Result;
      if (this.HasPopupForm()) this.FPopupForm.Close();
      LStaysOpen = this.FStaysOpen;
      try {
        this.FStaysOpen = true;
        this.Popup(true);
        Result = this.FModalResult;
        this.SetIsOpen(false);
      } finally {
        this.FStaysOpen = LStaysOpen;
      };
      return Result;
    };
    this.Popup = function (AShowModal) {
      this.DoCreatePopup(AShowModal);
    };
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("StaysOpen",0,rtl.boolean,"FStaysOpen","FStaysOpen",{Default: false});
    $r.addProperty("DropDownHeight",2,rtl.double,"FDropDownHeight","SetDropDownHeight");
    $r.addProperty("DropDownWidth",2,rtl.double,"FDropDownWidth","SetDropDownWidth");
    $r.addProperty("HorizontalOffset",0,rtl.double,"FHorizontalOffset","FHorizontalOffset");
    $r.addProperty("Placement",2,$mod.$rtti["TTMSFNCPopupPlacement"],"FPlacement","SetPlacement",{Default: $mod.TTMSFNCPopupPlacement.ppBottom});
    $r.addProperty("PlacementRectangle",2,pas["WEBLib.TMSFNCTypes"].$rtti["TTMSFNCMargins"],"FPlacementRectangle","SetPlacementRectangle");
    $r.addProperty("PlacementControl",2,pas["WEBLib.Controls"].$rtti["TControl"],"FPlacementControl","SetPlacementControl");
    $r.addProperty("VerticalOffset",0,rtl.double,"FVerticalOffset","FVerticalOffset");
    $r.addProperty("FocusedControl",0,pas["WEBLib.Controls"].$rtti["TControl"],"FFocusedControl","FFocusedControl");
    $r.addProperty("ContentControl",2,pas["WEBLib.Controls"].$rtti["TControl"],"FContentControl","SetContentControl");
    $r.addProperty("OnClosePopup",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClosePopup","FOnClosePopup");
    $r.addProperty("OnPopupPaint",0,$mod.$rtti["TTMSFNCPopupPaint"],"FOnPopupPaint","FOnPopupPaint");
    $r.addProperty("OnPopup",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnPopup","FOnPopup");
    $r.addProperty("OnPopupShown",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnPopupShown","FOnPopupShown");
    $r.addProperty("Version",1,rtl.string,"GetVersion","");
    $r.attr = [pas.Classes.ComponentPlatformsAttribute,"Create$1",[0]];
  });
  rtl.createClass(this,"TTMSFNCCustomNonFocusablePopupForm",this.TTMSFNCCustomPopupForm,function () {
    this.UpdateBounds = function (LRect) {
      $mod.TTMSFNCCustomPopupForm.UpdateBounds.apply(this,arguments);
    };
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TTMSFNCCustomNonFocusablePopup",this.TTMSFNCCustomPopup,function () {
    this.ActivatePreviousWindow = function () {
    };
    this.ShowPopup = function (AModal) {
      $mod.TTMSFNCCustomPopup.ShowPopup.apply(this,arguments);
      this.FIsOpen = true;
    };
    this.GetPopupFormClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCCustomNonFocusablePopupForm;
      return Result;
    };
    this.Create$1 = function (AOwner) {
      $mod.TTMSFNCCustomPopup.Create$1.apply(this,arguments);
      this.FStaysOpen = true;
      return this;
    };
    this.Destroy = function () {
      $mod.TTMSFNCCustomPopup.Destroy.call(this);
    };
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
  });
  rtl.createClass(this,"TTMSFNCNonFocusablePopup",this.TTMSFNCCustomNonFocusablePopup,function () {
    this.Deactivate = function () {
      this.ClosePopup();
    };
    this.Activate = function () {
      this.DoCreatePopup(false);
    };
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("ContentControl",2,pas["WEBLib.Controls"].$rtti["TControl"],"FContentControl","SetContentControl");
    $r.addProperty("Placement",2,$mod.$rtti["TTMSFNCPopupPlacement"],"FPlacement","SetPlacement",{Default: $mod.TTMSFNCPopupPlacement.ppBottom});
    $r.addProperty("PlacementRectangle",2,pas["WEBLib.TMSFNCTypes"].$rtti["TTMSFNCMargins"],"FPlacementRectangle","SetPlacementRectangle");
    $r.addProperty("PlacementControl",2,pas["WEBLib.Controls"].$rtti["TControl"],"FPlacementControl","SetPlacementControl");
  });
  $mod.$implcode = function () {
    $impl.GetTickCountX = function () {
      var Result = 0;
      var h = 0;
      var m = 0;
      var s = 0;
      var ms = 0;
      pas.SysUtils.DecodeTime(pas.SysUtils.Now(),{get: function () {
          return h;
        }, set: function (v) {
          h = v;
        }},{get: function () {
          return m;
        }, set: function (v) {
          m = v;
        }},{get: function () {
          return s;
        }, set: function (v) {
          s = v;
        }},{get: function () {
          return ms;
        }, set: function (v) {
          ms = v;
        }});
      Result = ms + (s * 1000) + (m * 60 * 1000) + (h * 60 * 60 * 1000);
      return Result;
    };
    rtl.createClass($impl,"TDPIControlProtected",pas["WEBLib.Controls"].TControl,function () {
      rtl.addIntf(this,pas.System.IUnknown);
    });
  };
},["SysUtils","WEBLib.TMSFNCUtils","Math","WEBLib.TMSFNCStyles"]);
//# sourceMappingURL=WEBLib.TMSFNCPopup.js.map
