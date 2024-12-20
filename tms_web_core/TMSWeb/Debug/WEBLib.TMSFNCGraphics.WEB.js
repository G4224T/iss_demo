rtl.module("WEBLib.TMSFNCGraphics.WEB",["System","Classes","WEBLib.TMSFNCGraphicsTypes","WEBLib.TMSFNCUtils","Types","WEBLib.TMSFNCTypes","WEBLib.TMSFNCGraphics","WEBLib.Graphics"],function () {
  "use strict";
  var $mod = this;
  rtl.createClass(this,"TTMSFNCGraphicsContextWEB",pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphicsContext,function () {
    this.$init = function () {
      pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphicsContext.$init.call(this);
      this.FActivePath = null;
      this.FScale = 0.0;
      this.FNeedsRendering = false;
      this.FFont = null;
      this.FFill = null;
      this.FStroke = null;
      this.FContextSize = pas["WEBLib.TMSFNCTypes"].TSizeF.$new();
      this.FNCanvas = null;
      this.FBitmap = null;
    };
    this.$final = function () {
      this.FActivePath = undefined;
      this.FFont = undefined;
      this.FFill = undefined;
      this.FStroke = undefined;
      this.FContextSize = undefined;
      this.FBitmap = undefined;
      pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphicsContext.$final.call(this);
    };
    this.GetNativeCanvas = function () {
      var Result = null;
      Result = this.FNCanvas;
      return Result;
    };
    this.DestroyResources = function () {
      if (this.FNCanvas != null) {
        this.RestoreContext();
        this.FNCanvas = null;
      };
      if (this.FBitmap != null) {
        rtl.free(this,"FBitmap");
        this.FBitmap = null;
      };
    };
    this.DrawTextInternal = function (AText, ARect, AWordWrap, AHorizontalAlignment, ACalculate) {
      var $Self = this;
      var Result = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var i = 0;
      var s = "";
      var sn = "";
      var l = 0;
      var w = 0.0;
      var mw = 0.0;
      var f = false;
      var tw = 0.0;
      var th = 0.0;
      var lcnt = 0;
      var rs = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var fws = 0.0;
      function ApplyFont() {
      };
      function FindNextWord(AText, APos) {
        var Result = "";
        var l = 0;
        var i = 0;
        Result = "";
        l = AText.length;
        if (APos.get() > l) return Result;
        i = APos.get();
        while (true) {
          if (((AText.charAt(i - 1) === "\n") && (AText.charAt(i - 1 - 1) === "\r")) || ((AText.charAt(i - 1) === "\r") && (AText.charAt(i - 1 - 1) === "\n")) || (AText.charAt(i - 1) === " ")) {
            if (AText.charAt(i - 1) === " ") {
              Result = pas.System.Copy(AText,APos.get(),i - (APos.get() - 1))}
             else Result = pas.System.Copy(AText,APos.get(),i - APos.get());
            break;
          } else if ((AText.charAt(i - 1) === "\n") || (AText.charAt(i - 1) === "\r") || (AText.charAt(i - 1) === " ")) {
            Result = pas.System.Copy(AText,APos.get(),i - (APos.get() - 1));
            break;
          } else if (i >= l) {
            Result = pas.System.Copy(AText,APos.get(),i - (APos.get() - 1));
            break;
          } else i += 1;
        };
        APos.set(i + 1);
        return Result;
      };
      ApplyFont();
      if (!AWordWrap) {
        if (!ACalculate) ;
      } else {
        rs.$assign(ARect);
        mw = 0;
        i = 1;
        lcnt = 0;
        fws = 0;
        tw = 0;
        s = FindNextWord(AText,{get: function () {
            return i;
          }, set: function (v) {
            i = v;
          }});
        mw = mw + w;
        if ((s.length > 0) && (s.charAt(s.length - 1) === " ")) mw = mw + fws;
        while (i <= AText.length) {
          l = s.length;
          if ((l >= 2) && (((s.charAt(l - 1) === "\n") && (s.charAt(l - 1 - 1) === "\r")) || ((s.charAt(l - 1) === "\r") && (s.charAt(l - 1 - 1) === "\n")))) {
            s = pas.System.Copy(s,1,l - 2);
            f = true;
          } else if ((l >= 1) && ((s.charAt(l - 1) === "\n") || (s.charAt(l - 1) === "\r"))) {
            s = pas.System.Copy(s,1,l - 1);
            f = true;
          } else f = false;
          sn = FindNextWord(AText,{get: function () {
              return i;
            }, set: function (v) {
              i = v;
            }});
          if (((ARect.Left + mw + w) > ARect.Right) || f) {
            if (s !== "") {
              lcnt += 1;
              if (mw > tw) tw = mw;
              if (!ACalculate) ;
              mw = 0;
            };
            s = "";
            ARect.Top = ARect.Top + th;
            if ((pas.System.Trunc(ARect.Top) > pas.System.Trunc(ARect.Bottom - th)) && !ACalculate) break;
          };
          mw = mw + w;
          if ((sn.length > 0) && (sn.charAt(sn.length - 1) === " ")) mw = mw + fws;
          s = s + sn;
        };
        if (s !== "") {
          lcnt += 1;
          if (mw > tw) tw = mw;
          if (!ACalculate) ;
        };
        Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(rs.Left,rs.Top,rs.Left + tw,rs.Top + (lcnt * th)));
      };
      return Result;
    };
    this.DrawLinearGradient = function (ARect) {
      if (!(this.FNCanvas != null)) return;
      var $tmp = this.FFill.FOrientation;
      if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillOrientation.gfoHorizontal) {}
      else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillOrientation.gfoVertical) ;
      if ((this.FFill.FColorTo !== -1) && (this.FFill.FColorMirror !== -1)) {}
      else if (this.FFill.FColorTo !== -1) ;
    };
    this.FontChanged = function (Sender) {
    };
    this.FillChanged = function (Sender) {
      if (!(this.FNCanvas != null)) return;
      this.ApplyFill();
    };
    this.StrokeChanged = function (Sender) {
      if (!(this.FNCanvas != null)) return;
      this.ApplyStroke();
    };
    this.RestoreContext = function () {
      if (!(this.FNCanvas != null)) return;
    };
    this.SaveContext = function () {
      if (!(this.FNCanvas != null)) return;
    };
    this.ApplyStroke = function () {
      if (!(this.FNCanvas != null)) return;
    };
    this.ApplyFill = function () {
      if (!(this.FNCanvas != null)) return;
      var $tmp = this.FFill.FKind;
      if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid) ;
    };
    this.Create$1 = function (AGraphics) {
      pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphicsContext.Create$1.apply(this,arguments);
      this.FScale = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetDPIScale(null,-1);
      this.FNeedsRendering = true;
      this.FContextSize.cx = 0;
      this.FContextSize.cy = 0;
      this.FFont = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFont.$create("Create$2");
      this.FFont.FOnChanged = rtl.createCallback(this,"FontChanged");
      this.FStroke = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStroke.$create("Create$1",[pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid,12632256]);
      this.FStroke.FOnChanged = rtl.createCallback(this,"StrokeChanged");
      this.FFill = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFill.$create("Create$1",[pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid,16777215,8421504,-1,-1]);
      this.FFill.FOnChanged = rtl.createCallback(this,"FillChanged");
      return this;
    };
    this.Destroy = function () {
      this.Render();
      if (this.FFont != null) {
        rtl.free(this,"FFont");
        this.FFont = null;
      };
      if (this.FFill != null) {
        rtl.free(this,"FFill");
        this.FFill = null;
      };
      if (this.FStroke != null) {
        rtl.free(this,"FStroke");
        this.FStroke = null;
      };
      this.DestroyResources();
      pas.System.TObject.Destroy.call(this);
    };
    this.GetFillColor = function () {
      var Result = 0;
      Result = this.GetGraphics().FFill.FColor;
      return Result;
    };
    this.CalculateText = function (AText, ARect, AWordWrapping) {
      var Result = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(0,0,0,0));
      if (!(this.FNCanvas != null)) return Result;
      this.SaveContext();
      Result.$assign(this.DrawTextInternal(AText,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),AWordWrapping,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaLeading,true));
      this.RestoreContext();
      return Result;
    };
    this.SetTextAngle = function (ARect, AAngle) {
      var Result = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var ar = 0.0;
      var cx = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      var w = 0.0;
      var h = 0.0;
      var c = 0.0;
      var s = 0.0;
      var cw = 0.0;
      var ch = 0.0;
      Result.$assign(ARect);
      if (!(this.FNCanvas != null)) return Result;
      if (AAngle !== 0) {
        ar = pas.Math.DegToRad(AAngle);
        cx.X = Result.Left + ((Result.Right - Result.Left) / 2);
        cx.Y = Result.Top + ((Result.Bottom - Result.Top) / 2);
        this.SaveContext();
        w = Result.Right - Result.Left;
        h = Result.Bottom - Result.Top;
        c = Math.cos(ar);
        s = Math.sin(ar);
        cw = Math.abs(w * c) + Math.abs(h * s);
        ch = Math.abs(w * s) + Math.abs(h * c);
        Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(-cw / 2,-ch / 2,cw / 2,ch / 2));
      };
      return Result;
    };
    this.CreatePath = function () {
      var Result = null;
      Result = null;
      return Result;
    };
    this.GetMatrix = function () {
      var Result = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsMatrix.$new();
      Result.$assign(pas["WEBLib.TMSFNCGraphicsTypes"].MatrixEmpty());
      return Result;
    };
    this.Render = function () {
      if (!this.FNeedsRendering) return;
      this.FNeedsRendering = false;
      this.DestroyResources();
    };
    this.PathOpen = function (APath) {
    };
    this.PathMoveTo = function (APath, APoint) {
    };
    this.PathLineTo = function (APath, APoint) {
    };
    this.PathClose = function (APath) {
    };
    this.ResetClip = function () {
      if (!(this.FNCanvas != null)) return;
      this.RestoreContext();
    };
    this.ResetTransform = function () {
      if (!(this.FNCanvas != null)) return;
      this.RestoreContext();
      this.SaveContext();
    };
    this.ScaleTransform = function (AX, AY) {
      if (!(this.FNCanvas != null)) return;
    };
    this.RotateTransform = function (AAngle) {
      if (!(this.FNCanvas != null)) return;
    };
    this.TranslateTransform = function (AX, AY) {
      if (!(this.FNCanvas != null)) return;
    };
    this.SetTextQuality = function (ATextQuality) {
    };
    this.SetAntiAliasing = function (AAntiAliasing) {
      if (!(this.FNCanvas != null)) return;
    };
    this.SetShowAcceleratorChar = function (AShowAcceleratorChar) {
    };
    this.SetSize = function (AWidth, AHeight) {
      this.FContextSize.cx = AWidth;
      this.FContextSize.cy = AHeight;
      this.DestroyResources();
      this.FBitmap = pas["WEBLib.Graphics"].TBitmap.$create("Create$3");
      this.ScaleTransform(this.FScale,this.FScale);
      this.SaveContext();
    };
    this.SetMatrix = function (AMatrix) {
    };
    this.SetScale = function (AScale) {
      this.FScale = AScale;
    };
    this.ResetTextAngle = function (AAngle) {
      if (!(this.FNCanvas != null)) return;
      if (AAngle !== 0) this.RestoreContext();
    };
    this.BeginScene = function () {
      if (!(this.FNCanvas != null)) return;
    };
    this.EndScene = function () {
      if (!(this.FNCanvas != null)) return;
      this.Render();
    };
    this.BeginPrinting = function () {
    };
    this.EndPrinting = function () {
    };
    this.StartSpecialPen = function () {
      if (!(this.FNCanvas != null)) return;
    };
    this.StopSpecialPen = function () {
      if (!(this.FNCanvas != null)) return;
    };
    this.RestoreState = function (AState) {
      if (!(this.FNCanvas != null)) return;
      this.RestoreContext();
    };
    this.SaveState = function (AState) {
      if (!(this.FNCanvas != null)) return;
      this.SaveContext();
    };
    this.SetFontSize = function (ASize) {
      if (!(this.FNCanvas != null)) return;
      this.FFont.SetSize(ASize);
    };
    this.SetFontColor = function (AColor) {
      if (!(this.FNCanvas != null)) return;
      this.FFont.SetColor(AColor);
    };
    this.SetFontName = function (AName) {
      if (!(this.FNCanvas != null)) return;
      this.FFont.SetName(AName);
    };
    this.SetFont = function (AFont) {
      if (!(this.FNCanvas != null)) return;
      this.FFont.AssignSource(AFont);
    };
    this.SetFontStyles = function (AStyle) {
      if (!(this.FNCanvas != null)) return;
      this.FFont.SetStyle(rtl.refSet(AStyle));
    };
    this.SetFill = function (AFill) {
      if (!(this.FNCanvas != null)) return;
      this.FFill.Assign(AFill);
    };
    this.SetFillKind = function (AKind) {
      if (!(this.FNCanvas != null)) return;
      this.FFill.SetKind(AKind);
    };
    this.SetFillColor = function (AColor) {
      if (!(this.FNCanvas != null)) return;
      this.FFill.SetColor(AColor);
    };
    this.SetStroke = function (AStroke) {
      if (!(this.FNCanvas != null)) return;
      this.FStroke.Assign(AStroke);
    };
    this.SetStrokeKind = function (AKind) {
      if (!(this.FNCanvas != null)) return;
      this.FStroke.SetKind(AKind);
    };
    this.SetStrokeColor = function (AColor) {
      if (!(this.FNCanvas != null)) return;
      this.FStroke.SetColor(AColor);
    };
    this.SetStrokeWidth = function (AWidth) {
      if (!(this.FNCanvas != null)) return;
      this.FStroke.SetWidth(AWidth);
    };
    this.DrawLine = function (AStroke, AFromPoint, AToPoint, AModifyPointModeFrom, AModifyPointModeTo) {
      if (!(this.FNCanvas != null)) return;
      this.SaveContext();
      this.RestoreContext();
    };
    this.DrawPolygon = function (AStroke, APolygon) {
      if (!(this.FNCanvas != null)) return;
      if (rtl.length(APolygon) === 0) return;
      this.SaveContext();
      this.ApplyStroke();
      this.RestoreContext();
    };
    this.FillPolygon = function (AFill, APolygon) {
      if (!(this.FNCanvas != null)) return;
      if (rtl.length(APolygon) === 0) return;
      this.SaveContext();
      var $tmp = AFill.FKind;
      if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid) {
        this.ApplyFill();
      } else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkGradient) {
        if (this.FActivePath != null) this.DrawLinearGradient(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(this.FActivePath.GetBounds()));
      };
      this.RestoreContext();
    };
    this.DrawPolyline = function (AStroke, APolyline) {
      if (!(this.FNCanvas != null)) return;
      if (rtl.length(APolyline) === 0) return;
      this.SaveContext();
      this.ApplyStroke();
      this.RestoreContext();
    };
    this.FillPolyline = function (AFill, APolyline) {
      if (!(this.FNCanvas != null)) return;
      if (rtl.length(APolyline) === 0) return;
      this.SaveContext();
      var $tmp = AFill.FKind;
      if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid) {
        this.ApplyFill();
      } else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkGradient) {
        if (this.FActivePath != null) this.DrawLinearGradient(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(this.FActivePath.GetBounds()));
      };
      this.RestoreContext();
    };
    this.FillArc = function (AFill, ACenter, ARadius, AStartAngle, ASweepAngle) {
      if (!(this.FNCanvas != null)) return;
      this.SaveContext();
      var $tmp = AFill.FKind;
      if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid) {
        this.ApplyFill();
      } else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkGradient) {
        this.DrawLinearGradient(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(ACenter.X - ARadius.X,ACenter.Y - ARadius.Y,ACenter.X + ARadius.X,ACenter.Y + ARadius.Y)));
      };
      this.RestoreContext();
    };
    this.DrawArc = function (AStroke, ACenter, ARadius, AStartAngle, ASweepAngle) {
      if (!(this.FNCanvas != null)) return;
      this.SaveContext();
      this.ApplyStroke();
      this.RestoreContext();
    };
    this.FillRect = function (AFill, ARect, AModifyRectMode) {
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      if (!(this.FNCanvas != null)) return;
      r.$assign(ARect);
      this.SaveContext();
      var $tmp = AFill.FKind;
      if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid) {
        this.ApplyFill();
      } else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkGradient) {
        this.DrawLinearGradient(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r));
      };
      this.RestoreContext();
    };
    this.DrawRect = function (AStroke, ARect, ASides, AModifyRectMode) {
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      if (!(this.FNCanvas != null)) return;
      r.$assign(ARect);
      if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsSide.gsTop in ASides) this.DrawLine(AStroke,pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(r.Left,r.Top)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(r.Right,r.Top)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
      if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsSide.gsLeft in ASides) this.DrawLine(AStroke,pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(r.Left,r.Top)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(r.Left,r.Bottom)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
      if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsSide.gsBottom in ASides) this.DrawLine(AStroke,pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(r.Left,r.Bottom)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(r.Right,r.Bottom)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
      if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsSide.gsRight in ASides) this.DrawLine(AStroke,pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(r.Right,r.Top)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(r.Right,r.Bottom)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
    };
    this.FillRoundRect = function (AFill, ARect, ARounding, ACorners, AModifyRectMode) {
      var pth = null;
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var rc = 0.0;
      r.$assign(ARect);
      rc = ARounding;
      pth = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsPath.$create("Create$1");
      try {
        if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcBottomLeft in ACorners) {
          pth.MoveTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Left + rc,r.Bottom));
          pth.AddArc(pas["WEBLib.TMSFNCTypes"].PointF(r.Left + rc,r.Bottom - rc),pas["WEBLib.TMSFNCTypes"].PointF(rc,rc),-270,90);
          pth.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Left,r.Bottom - rc));
        } else {
          pth.MoveTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Left,r.Bottom));
        };
        if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcTopLeft in ACorners) {
          pth.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Left,r.Top + rc));
          pth.AddArc(pas["WEBLib.TMSFNCTypes"].PointF(r.Left + rc,r.Top + rc),pas["WEBLib.TMSFNCTypes"].PointF(rc,rc),-180,90);
          pth.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Left + rc,r.Top));
        } else pth.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Left,r.Top));
        if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcTopRight in ACorners) {
          pth.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Right - rc,r.Top));
          pth.AddArc(pas["WEBLib.TMSFNCTypes"].PointF(r.Right - rc,r.Top + rc),pas["WEBLib.TMSFNCTypes"].PointF(rc,rc),-90,90);
          pth.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Right,r.Top + rc));
        } else pth.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Right,r.Top));
        if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcBottomRight in ACorners) {
          pth.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Right,r.Bottom - rc));
          pth.AddArc(pas["WEBLib.TMSFNCTypes"].PointF(r.Right - rc,r.Bottom - rc),pas["WEBLib.TMSFNCTypes"].PointF(rc,rc),0,90);
          pth.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Right - rc,r.Bottom));
        } else pth.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Right,r.Bottom));
        if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcBottomLeft in ACorners) {
          pth.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Left + rc,r.Bottom))}
         else pth.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Left,r.Bottom));
        pth.ClosePath();
        this.FillPath(this.FFill,pth,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsPathDrawMode.pdmPolygon);
      } finally {
        pth = rtl.freeLoc(pth);
      };
    };
    this.DrawRoundRect = function (AStroke, ARect, ARounding, ACorners, AModifyRectMode) {
      var pth = null;
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var rc = 0.0;
      r.$assign(ARect);
      rc = ARounding;
      pth = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsPath.$create("Create$1");
      try {
        if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcBottomLeft in ACorners) {
          pth.MoveTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Left + rc,r.Bottom));
          pth.AddArc(pas["WEBLib.TMSFNCTypes"].PointF(r.Left + rc,r.Bottom - rc),pas["WEBLib.TMSFNCTypes"].PointF(rc,rc),-270,90);
          pth.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Left,r.Bottom - rc));
        } else {
          pth.MoveTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Left,r.Bottom));
        };
        if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcTopLeft in ACorners) {
          pth.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Left,r.Top + rc));
          pth.AddArc(pas["WEBLib.TMSFNCTypes"].PointF(r.Left + rc,r.Top + rc),pas["WEBLib.TMSFNCTypes"].PointF(rc,rc),-180,90);
          pth.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Left + rc,r.Top));
        } else pth.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Left,r.Top));
        if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcTopRight in ACorners) {
          pth.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Right - rc,r.Top));
          pth.AddArc(pas["WEBLib.TMSFNCTypes"].PointF(r.Right - rc,r.Top + rc),pas["WEBLib.TMSFNCTypes"].PointF(rc,rc),-90,90);
          pth.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Right,r.Top + rc));
        } else pth.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Right,r.Top));
        if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcBottomRight in ACorners) {
          pth.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Right,r.Bottom - rc));
          pth.AddArc(pas["WEBLib.TMSFNCTypes"].PointF(r.Right - rc,r.Bottom - rc),pas["WEBLib.TMSFNCTypes"].PointF(rc,rc),0,90);
          pth.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Right - rc,r.Bottom));
        } else pth.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Right,r.Bottom));
        if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcBottomLeft in ACorners) {
          pth.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Left + rc,r.Bottom))}
         else pth.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(r.Left,r.Bottom));
        pth.ClosePath();
        this.DrawPath(this.FStroke,pth,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsPathDrawMode.pdmPolygon);
      } finally {
        pth = rtl.freeLoc(pth);
      };
    };
    this.FillEllipse = function (AFill, ARect, AModifyRectMode) {
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      if (!(this.FNCanvas != null)) return;
      r.$assign(ARect);
      this.SaveContext();
      var $tmp = AFill.FKind;
      if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid) {
        this.ApplyFill();
      } else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkGradient) {
        this.DrawLinearGradient(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r));
      };
      this.RestoreContext();
    };
    this.DrawEllipse = function (AStroke, ARect, AModifyRectMode) {
      if (!(this.FNCanvas != null)) return;
      this.SaveContext();
      this.ApplyStroke();
      this.RestoreContext();
    };
    this.DrawBitmap = function (ABitmap, ASrcRect, ADstRect, AOpacity) {
      if (!(ABitmap != null) || !(this.FNCanvas != null)) return;
      this.SaveContext();
      try {} finally {
      };
      this.RestoreContext();
    };
    this.ClipRect = function (ARect) {
      if (!(this.FNCanvas != null)) return;
      this.SaveContext();
    };
    this.ClipPath = function (APath) {
      if (!(this.FNCanvas != null)) return;
      try {
        this.SaveContext();
      } finally {
      };
    };
    this.DrawFocusPath = function (AStroke, APath, AColor) {
      if (!(this.FNCanvas != null)) return;
    };
    this.DrawFocusRectangle = function (AStroke, ARect, AColor, AModifyRectMode) {
      if (!(this.FNCanvas != null)) return;
    };
    this.DrawText = function (AText, ARect, AWordWrapping, AHorizontalAlign, AVerticalAlign, ATrimming, AAngle) {
      var R = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      if (!(this.FNCanvas != null)) return;
      this.SaveContext();
      R.$assign(this.DrawTextInternal(AText,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),AWordWrapping,AHorizontalAlign,true));
      var $tmp = AVerticalAlign;
      if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter) {
        this.DrawTextInternal(AText,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(ARect.Left,ARect.Top + ((ARect.Bottom - ARect.Top - (R.Bottom - R.Top)) / 2),ARect.Right,ARect.Top + ((ARect.Bottom - ARect.Top - (R.Bottom - R.Top)) / 2) + (R.Bottom - R.Top))),AWordWrapping,AHorizontalAlign,false)}
       else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaLeading) {
        this.DrawTextInternal(AText,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(ARect.Left,ARect.Top,ARect.Right,ARect.Top + (R.Bottom - R.Top))),AWordWrapping,AHorizontalAlign,false)}
       else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaTrailing) this.DrawTextInternal(AText,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(ARect.Left,ARect.Bottom - (R.Bottom - R.Top),ARect.Right,ARect.Bottom)),AWordWrapping,AHorizontalAlign,false);
      this.RestoreContext();
    };
    this.DrawPath = function (AStroke, APath, APathMode) {
      var p = [];
      if (APath != null) {
        this.FActivePath = APath;
        p = rtl.arraySetLength(p,pas["WEBLib.TMSFNCTypes"].TPointF,0);
        APath.FlattenToPolygon({get: function () {
            return p;
          }, set: function (v) {
            p = v;
          }},0.25);
        var $tmp = APathMode;
        if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsPathDrawMode.pdmPolygon) {
          this.DrawPolygon(AStroke,rtl.arrayRef(p))}
         else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsPathDrawMode.pdmPolyline) this.DrawPolyline(AStroke,rtl.arrayRef(p));
        this.FActivePath = null;
      };
    };
    this.FillPath = function (AFill, APath, APathMode) {
      var p = [];
      if (APath != null) {
        this.FActivePath = APath;
        p = rtl.arraySetLength(p,pas["WEBLib.TMSFNCTypes"].TPointF,0);
        APath.FlattenToPolygon({get: function () {
            return p;
          }, set: function (v) {
            p = v;
          }},0.25);
        var $tmp = APathMode;
        if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsPathDrawMode.pdmPolygon) {
          this.FillPolygon(AFill,rtl.arrayRef(p))}
         else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsPathDrawMode.pdmPolyline) this.FillPolyline(AFill,rtl.arrayRef(p));
        this.FActivePath = null;
      };
    };
  });
  this.GetNativeContextClass = function () {
    var Result = null;
    Result = $mod.TTMSFNCGraphicsContextWEB;
    return Result;
  };
},["SysUtils","Math"]);
//# sourceMappingURL=WEBLib.TMSFNCGraphics.WEB.js.map
