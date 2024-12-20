rtl.module("WEBLib.TMSFNCGraphics.General",["System","Classes","WEBLib.TMSFNCGraphicsTypes","Types","WEBLib.Graphics","WEBLib.TMSFNCGraphics","WEBLib.TMSFNCTypes"],function () {
  "use strict";
  var $mod = this;
  rtl.createClass(this,"TTMSFNCGraphicsContextGeneral",pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphicsContext,function () {
    this.$init = function () {
      pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphicsContext.$init.call(this);
      this.FPrinting = false;
      this.FOldPenStyle = 0;
      this.FOldPenWidth = 0;
    };
    this.GetNativeCanvas = function () {
      var Result = null;
      Result = this.GetCanvas();
      return Result;
    };
    this.DrawRotatedText = function (ACanvas, ARect, AText, AAngle, AHorizontalAlign, AVerticalAlign) {
      var tw = 0.0;
      var th = 0.0;
      var so = 0;
      var s = "";
      var xs = 0.0;
      var ys = 0.0;
      var angle = 0.0;
      var ha = 0;
      var va = 0;
      var r = pas["WEBLib.Graphics"].TCanvasRectF.$new();
      s = AText;
      angle = -10 * AAngle;
      xs = ARect.Left;
      ys = ARect.Top;
      tw = ACanvas.TextWidth(s);
      th = ACanvas.TextHeight(s);
      var $tmp = AHorizontalAlign;
      if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaLeading) {
        ha = pas.Classes.TAlignment.taLeftJustify}
       else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter) {
        ha = pas.Classes.TAlignment.taCenter}
       else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaTrailing) ha = pas.Classes.TAlignment.taRightJustify;
      var $tmp1 = AVerticalAlign;
      if ($tmp1 === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter) {
        va = pas["WEBLib.Graphics"].TVerticalAlignment.taVerticalCenter}
       else if ($tmp1 === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaLeading) {
        va = pas["WEBLib.Graphics"].TVerticalAlignment.taAlignTop}
       else if ($tmp1 === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaTrailing) va = pas["WEBLib.Graphics"].TVerticalAlignment.taAlignBottom;
      r.$assign(pas["WEBLib.Graphics"].CreateCanvasRectF(ARect.Left,ARect.Top,ARect.Right,ARect.Bottom));
      ACanvas.TextRect$1(pas["WEBLib.Graphics"].TCanvasRectF.$clone(r),s,false,false,ha,va);
    };
    this.Destroy = function () {
      pas.System.TObject.Destroy.call(this);
    };
    this.GetFillColor = function () {
      var Result = 0;
      Result = this.GetCanvas().FBrush.FColor;
      return Result;
    };
    this.CalculateText = function (AText, ARect, AWordWrapping) {
      var Result = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var r = pas["WEBLib.Graphics"].TCanvasRectF.$new();
      r.$assign(pas["WEBLib.Graphics"].CreateCanvasRectF(ARect.Left,ARect.Top,ARect.Right,ARect.Bottom));
      r.$assign(this.GetCanvas().TextRect$1(pas["WEBLib.Graphics"].TCanvasRectF.$clone(r),AText,AWordWrapping,true,pas.Classes.TAlignment.taLeftJustify,pas["WEBLib.Graphics"].TVerticalAlignment.taAlignTop));
      Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(r.Left,r.Top,r.Right,r.Bottom));
      return Result;
    };
    this.SetTextAngle = function (ARect, AAngle) {
      var Result = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var ar = 0.0;
      var cx = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      var c = 0.0;
      var s = 0.0;
      var w = 0.0;
      var cw = 0.0;
      var h = 0.0;
      var ch = 0.0;
      Result.$assign(ARect);
      if (AAngle !== 0) {
        ar = pas.Math.DegToRad(AAngle);
        cx.X = Result.Left + ((Result.Right - Result.Left) / 2);
        cx.Y = Result.Top + ((Result.Bottom - Result.Top) / 2);
        this.GetCanvas().Transform(Math.cos(ar),Math.sin(ar),-Math.sin(ar),Math.cos(ar),cx.X,cx.Y);
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
      Result.$assign(pas["WEBLib.TMSFNCGraphicsTypes"].MatrixIdentity());
      return Result;
    };
    this.Render = function () {
    };
    this.PathOpen = function (APath) {
    };
    this.PathMoveTo = function (APath, APoint) {
      this.GetCanvas().PathMoveTo$1(APoint.X,APoint.Y);
    };
    this.PathLineTo = function (APath, APoint) {
      this.GetCanvas().PathLineTo$1(APoint.X,APoint.Y);
    };
    this.PathClose = function (APath) {
      this.GetCanvas().PathClose();
    };
    this.ResetTransform = function () {
      this.GetCanvas().SetTransform(1,0,0,1,0,0);
    };
    this.ResetClip = function () {
      this.RestoreState(null);
    };
    this.ScaleTransform = function (AX, AY) {
      var m = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsMatrix.$new();
      m.$assign(pas["WEBLib.TMSFNCGraphicsTypes"].MatrixCreateScaling(AX,AY));
      this.GetCanvas().Transform(m.m11,m.m12,m.m21,m.m22,m.m31,m.m32);
    };
    this.RotateTransform = function (AAngle) {
      var m = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsMatrix.$new();
      m.$assign(pas["WEBLib.TMSFNCGraphicsTypes"].MatrixCreateRotation(pas.Math.DegToRad(AAngle)));
      this.GetCanvas().Transform(m.m11,m.m12,m.m21,m.m22,m.m31,m.m32);
    };
    this.TranslateTransform = function (AX, AY) {
      var m = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsMatrix.$new();
      m.$assign(pas["WEBLib.TMSFNCGraphicsTypes"].MatrixCreateTranslation(AX,AY));
      this.GetCanvas().Transform(m.m11,m.m12,m.m21,m.m22,m.m31,m.m32);
    };
    this.SetTextQuality = function (ATextQuality) {
    };
    this.SetAntiAliasing = function (AAntiAliasing) {
    };
    this.SetShowAcceleratorChar = function (AShowAcceleratorChar) {
    };
    this.SetSize = function (AWidth, AHeight) {
    };
    this.ResetTextAngle = function (AAngle) {
      if (AAngle !== 0) this.GetCanvas().SetTransform(1,0,0,1,0,0);
    };
    this.BeginScene = function () {
      if (this.GetCanvas() != null) {
        this.GetCanvas().BeginScene();
        this.GetCanvas().Clear();
      };
    };
    this.EndScene = function () {
      this.GetCanvas().EndScene();
    };
    this.BeginPrinting = function () {
      this.FPrinting = true;
    };
    this.EndPrinting = function () {
      if (this.FPrinting) this.FPrinting = false;
    };
    this.StartSpecialPen = function () {
      this.FOldPenStyle = this.GetCanvas().FPen.FStyle;
      this.FOldPenWidth = this.GetCanvas().FPen.FWidth;
      this.GetCanvas().FPen.FStyle = pas["WEBLib.Graphics"].TPenStyle.psDot;
      this.GetCanvas().FPen.FWidth = 1;
    };
    this.StopSpecialPen = function () {
      this.GetCanvas().FPen.FStyle = this.FOldPenStyle;
      this.GetCanvas().FPen.FWidth = this.FOldPenWidth;
    };
    this.RestoreState = function (AState) {
      if (AState != null) AState.FSaveDC = 0;
      this.GetCanvas().Restore();
      this.GetCanvas().Refresh();
    };
    this.SaveState = function (AState) {
      this.GetCanvas().Refresh();
      this.GetCanvas().Save();
    };
    this.SetMatrix = function (AMatrix) {
    };
    this.SetScale = function (AScale) {
    };
    this.SetFontSize = function (ASize) {
      this.GetCanvas().FFont.SetSize(ASize);
    };
    this.SetFontColor = function (AColor) {
      this.GetCanvas().FFont.SetColor(AColor);
    };
    this.SetFontName = function (AName) {
      this.GetCanvas().FFont.SetName(AName);
    };
    this.SetFont = function (AFont) {
      this.GetCanvas().FFont.Assign(AFont);
    };
    this.SetFontStyles = function (AStyle) {
      this.GetCanvas().FFont.SetStyle(rtl.refSet(AStyle));
    };
    this.SetFill = function (AFill) {
      this.GetCanvas().FBrush.FColor = AFill.FColor;
      this.GetCanvas().FBrush.FGradient = pas["WEBLib.Graphics"].TBrushGradient.bgNone;
      this.GetCanvas().FBrush.ClearGradient();
      var $tmp = AFill.FKind;
      if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid) {
        this.GetCanvas().FBrush.FStyle = pas["WEBLib.Graphics"].TBrushStyle.bsSolid}
       else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkGradient) {
        this.GetCanvas().FBrush.ClearGradient();
        if ((AFill.FColorMirror !== -1) && (AFill.FColorMirrorTo !== -1)) {
          this.GetCanvas().FBrush.AddGradientColor(AFill.FColor,0);
          this.GetCanvas().FBrush.AddGradientColor(AFill.FColorTo,0.5);
          this.GetCanvas().FBrush.AddGradientColor(AFill.FColorMirror,0.5);
          this.GetCanvas().FBrush.AddGradientColor(AFill.FColorMirrorTo,1);
        } else {
          this.GetCanvas().FBrush.AddGradientColor(AFill.FColor,0);
          this.GetCanvas().FBrush.AddGradientColor(AFill.FColorTo,1);
        };
        var $tmp1 = AFill.FOrientation;
        if ($tmp1 === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillOrientation.gfoHorizontal) {
          this.GetCanvas().FBrush.FGradient = pas["WEBLib.Graphics"].TBrushGradient.bgLinearHorz}
         else if ($tmp1 === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillOrientation.gfoVertical) this.GetCanvas().FBrush.FGradient = pas["WEBLib.Graphics"].TBrushGradient.bgLinearVert;
      } else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkNone) this.GetCanvas().FBrush.FStyle = pas["WEBLib.Graphics"].TBrushStyle.bsClear;
    };
    this.SetFillKind = function (AKind) {
      var $tmp = AKind;
      if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkNone) {
        this.GetCanvas().FBrush.FStyle = pas["WEBLib.Graphics"].TBrushStyle.bsClear}
       else if (($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid) || ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkGradient)) this.GetCanvas().FBrush.FStyle = pas["WEBLib.Graphics"].TBrushStyle.bsSolid;
    };
    this.SetFillColor = function (AColor) {
      this.GetCanvas().FBrush.FColor = AColor;
    };
    this.SetStroke = function (AStroke) {
      this.GetCanvas().FPen.SetColor(AStroke.FColor);
      this.GetCanvas().FPen.FWidth = Math.round(AStroke.FWidth);
      var $tmp = AStroke.FKind;
      if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid) {
        this.GetCanvas().FPen.FStyle = pas["WEBLib.Graphics"].TPenStyle.psSolid}
       else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskNone) {
        this.GetCanvas().FPen.FStyle = pas["WEBLib.Graphics"].TPenStyle.psClear}
       else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskDash) {
        this.GetCanvas().FPen.FStyle = pas["WEBLib.Graphics"].TPenStyle.psDash}
       else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskDot) {
        this.GetCanvas().FPen.FStyle = pas["WEBLib.Graphics"].TPenStyle.psDot}
       else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskDashDot) {
        this.GetCanvas().FPen.FStyle = pas["WEBLib.Graphics"].TPenStyle.psDashDot}
       else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskDashDotDot) this.GetCanvas().FPen.FStyle = pas["WEBLib.Graphics"].TPenStyle.psDashDotDot;
    };
    this.SetStrokeKind = function (AKind) {
      var $tmp = AKind;
      if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskNone) {
        this.GetCanvas().FPen.FStyle = pas["WEBLib.Graphics"].TPenStyle.psClear}
       else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid) {
        this.GetCanvas().FPen.FStyle = pas["WEBLib.Graphics"].TPenStyle.psSolid}
       else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskDash) {
        this.GetCanvas().FPen.FStyle = pas["WEBLib.Graphics"].TPenStyle.psDash}
       else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskDot) {
        this.GetCanvas().FPen.FStyle = pas["WEBLib.Graphics"].TPenStyle.psDot}
       else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskDashDot) {
        this.GetCanvas().FPen.FStyle = pas["WEBLib.Graphics"].TPenStyle.psDashDot}
       else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskDashDotDot) this.GetCanvas().FPen.FStyle = pas["WEBLib.Graphics"].TPenStyle.psDashDotDot;
    };
    this.SetStrokeColor = function (AColor) {
      this.GetCanvas().FPen.SetColor(AColor);
    };
    this.SetStrokeWidth = function (AWidth) {
      this.GetCanvas().FPen.FWidth = Math.round(AWidth);
    };
    this.DrawLine = function (AStroke, AFromPoint, AToPoint, AModifyPointModeFrom, AModifyPointModeTo) {
      this.GetCanvas().MoveTo$1(AFromPoint.X,AFromPoint.Y);
      this.GetCanvas().LineTo$1(AToPoint.X,AToPoint.Y);
    };
    this.DrawPolygon = function (AStroke, APolygon) {
      var pts = [];
      var I = 0;
      var bs = 0;
      var c = 0;
      pts = rtl.arraySetLength(pts,pas["WEBLib.Graphics"].TCanvasPointF,rtl.length(APolygon));
      for (var $l = 0, $end = rtl.length(APolygon) - 1; $l <= $end; $l++) {
        I = $l;
        pts[I].$assign(pas["WEBLib.Graphics"].CreateCanvasPointF(APolygon[I].X,APolygon[I].Y));
      };
      c = this.GetCanvas().FBrush.FColor;
      bs = this.GetCanvas().FBrush.FStyle;
      this.GetCanvas().FBrush.FStyle = pas["WEBLib.Graphics"].TBrushStyle.bsClear;
      this.GetCanvas().Polygon$1(pts);
      this.GetCanvas().FBrush.FStyle = bs;
      this.GetCanvas().FBrush.FColor = c;
    };
    this.FillPolygon = function (AFill, APolygon) {
      var pts = [];
      var I = 0;
      var ps = 0;
      pts = rtl.arraySetLength(pts,pas["WEBLib.Graphics"].TCanvasPointF,rtl.length(APolygon));
      for (var $l = 0, $end = rtl.length(APolygon) - 1; $l <= $end; $l++) {
        I = $l;
        pts[I].$assign(pas["WEBLib.Graphics"].CreateCanvasPointF(APolygon[I].X,APolygon[I].Y));
      };
      ps = this.GetCanvas().FPen.FStyle;
      this.GetCanvas().FPen.FStyle = pas["WEBLib.Graphics"].TPenStyle.psClear;
      this.GetCanvas().Polygon$1(pts);
      this.GetCanvas().FPen.FStyle = ps;
    };
    this.DrawPolyline = function (AStroke, APolyline) {
      var I = 0;
      var pts = [];
      var bs = 0;
      var c = 0;
      pts = rtl.arraySetLength(pts,pas["WEBLib.Graphics"].TCanvasPointF,rtl.length(APolyline));
      for (var $l = 0, $end = rtl.length(APolyline) - 1; $l <= $end; $l++) {
        I = $l;
        pts[I].$assign(pas["WEBLib.Graphics"].CreateCanvasPointF(APolyline[I].X,APolyline[I].Y));
      };
      c = this.GetCanvas().FBrush.FColor;
      bs = this.GetCanvas().FBrush.FStyle;
      this.GetCanvas().FBrush.FStyle = pas["WEBLib.Graphics"].TBrushStyle.bsClear;
      this.GetCanvas().Polyline$1(pts);
      this.GetCanvas().FBrush.FStyle = bs;
      this.GetCanvas().FBrush.FColor = c;
    };
    this.FillPolyline = function (AFill, APolyline) {
      var pts = [];
      var I = 0;
      var ps = 0;
      pts = rtl.arraySetLength(pts,pas["WEBLib.Graphics"].TCanvasPointF,rtl.length(APolyline));
      for (var $l = 0, $end = rtl.length(APolyline) - 1; $l <= $end; $l++) {
        I = $l;
        pts[I].$assign(pas["WEBLib.Graphics"].CreateCanvasPointF(APolyline[I].X,APolyline[I].Y));
      };
      ps = this.GetCanvas().FPen.FStyle;
      this.GetCanvas().FPen.FStyle = pas["WEBLib.Graphics"].TPenStyle.psClear;
      this.GetCanvas().Polyline$1(pts);
      this.GetCanvas().FPen.FStyle = ps;
    };
    this.FillArc = function (AFill, ACenter, ARadius, AStartAngle, ASweepAngle) {
      var ps = 0;
      ps = this.GetCanvas().FPen.FStyle;
      this.GetCanvas().FPen.FStyle = pas["WEBLib.Graphics"].TPenStyle.psClear;
      this.GetCanvas().AngleArc$1(ACenter.X,ACenter.Y,ARadius.X,pas.Math.DegToRad(AStartAngle),pas.Math.DegToRad(ASweepAngle));
      this.GetCanvas().FPen.FStyle = ps;
    };
    this.DrawArc = function (AStroke, ACenter, ARadius, AStartAngle, ASweepAngle) {
      var bs = 0;
      var c = 0;
      c = this.GetCanvas().FBrush.FColor;
      bs = this.GetCanvas().FBrush.FStyle;
      this.GetCanvas().FBrush.FStyle = pas["WEBLib.Graphics"].TBrushStyle.bsClear;
      this.GetCanvas().AngleArc$1(ACenter.X,ACenter.Y,ARadius.X,pas.Math.DegToRad(AStartAngle),pas.Math.DegToRad(ASweepAngle));
      this.GetCanvas().FBrush.FStyle = bs;
      this.GetCanvas().FBrush.FColor = c;
    };
    this.FillRect = function (AFill, ARect, AModifyRectMode) {
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var c = 0;
      var bs = 0;
      var ps = 0;
      ARect.$assign(pas["WEBLib.TMSFNCGraphicsTypes"].ModifyRect(ARect,AModifyRectMode));
      r.$assign(pas["WEBLib.TMSFNCTypes"].RectF(ARect.Left,ARect.Top,ARect.Right,ARect.Bottom));
      c = -1;
      bs = pas["WEBLib.Graphics"].TBrushStyle.bsClear;
      if (AFill.FKind === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkGradient) {
        if ((AFill.FColor !== -1) && (AFill.FColorTo !== -1)) {
          if ((AFill.FColorMirror !== -1) && (AFill.FColorMirrorTo !== -1)) {
            var $tmp = AFill.FOrientation;
            if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillOrientation.gfoHorizontal) {
              pas["WEBLib.TMSFNCGraphicsTypes"].DrawGradient(this.GetCanvas(),AFill.FColor,AFill.FColorTo,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(r.Left,r.Top,r.Left + ((r.Right - r.Left) / 2),r.Bottom)),0,{},true);
              pas["WEBLib.TMSFNCGraphicsTypes"].DrawGradient(this.GetCanvas(),AFill.FColorMirror,AFill.FColorMirrorTo,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(r.Left + ((r.Right - r.Left) / 2),r.Top,r.Right,r.Bottom)),0,{},true);
            } else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillOrientation.gfoVertical) {
              pas["WEBLib.TMSFNCGraphicsTypes"].DrawGradient(this.GetCanvas(),AFill.FColor,AFill.FColorTo,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(r.Left,r.Top,r.Right,r.Top + ((r.Bottom - r.Top) / 2))),0,{},false);
              pas["WEBLib.TMSFNCGraphicsTypes"].DrawGradient(this.GetCanvas(),AFill.FColorMirror,AFill.FColorMirrorTo,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(r.Left,r.Top + ((r.Bottom - r.Top) / 2),r.Right,r.Bottom)),0,{},false);
            };
          } else pas["WEBLib.TMSFNCGraphicsTypes"].DrawGradient(this.GetCanvas(),AFill.FColor,AFill.FColorTo,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),0,{},AFill.FOrientation === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillOrientation.gfoHorizontal);
        };
        c = this.GetCanvas().FBrush.FColor;
        bs = this.GetCanvas().FBrush.FStyle;
        this.GetCanvas().FBrush.FStyle = pas["WEBLib.Graphics"].TBrushStyle.bsClear;
      };
      ps = this.GetCanvas().FPen.FStyle;
      this.GetCanvas().FPen.FStyle = pas["WEBLib.Graphics"].TPenStyle.psClear;
      if ((AFill.FColor !== -1) && (AFill.FKind === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid)) {
        this.GetCanvas().Rectangle$3(pas["WEBLib.Graphics"].CreateCanvasRectF(r.Left,r.Top,r.Right,r.Bottom));
      };
      this.GetCanvas().FPen.FStyle = ps;
      if (AFill.FKind === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkGradient) {
        this.GetCanvas().FBrush.FColor = c;
        this.GetCanvas().FBrush.FStyle = bs;
      };
    };
    this.DrawRect = function (AStroke, ARect, ASides, AModifyRectMode) {
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      ARect.$assign(pas["WEBLib.TMSFNCGraphicsTypes"].ModifyRect(ARect,AModifyRectMode));
      r.$assign(ARect);
      if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsSide.gsTop in ASides) this.DrawLine(AStroke,pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(r.Left,r.Top)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(r.Right,r.Top)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
      if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsSide.gsLeft in ASides) this.DrawLine(AStroke,pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(r.Left,r.Top)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(r.Left,r.Bottom)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
      if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsSide.gsBottom in ASides) this.DrawLine(AStroke,pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(r.Left,r.Bottom)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(r.Right,r.Bottom)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
      if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsSide.gsRight in ASides) this.DrawLine(AStroke,pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(r.Right,r.Top)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(r.Right,r.Bottom)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
    };
    this.FillRoundRect = function (AFill, ARect, ARounding, ACorners, AModifyRectMode) {
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var rg = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var c = {};
      ARect.$assign(pas["WEBLib.TMSFNCGraphicsTypes"].ModifyRect(ARect,AModifyRectMode));
      r.$assign(pas["WEBLib.TMSFNCTypes"].RectF(ARect.Left,ARect.Top,ARect.Right,ARect.Bottom));
      rg.$assign(r);
      rg.Bottom = rg.Bottom - 1;
      rg.Right = rg.Right - 1;
      if (AFill.FKind === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkGradient) {
        if ((AFill.FColor !== -1) && (AFill.FColorTo !== -1)) {
          if ((AFill.FColorMirror !== -1) && (AFill.FColorMirrorTo !== -1)) {
            var $tmp = AFill.FOrientation;
            if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillOrientation.gfoHorizontal) {
              c = {};
              if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcTopLeft in ACorners) c = rtl.unionSet(c,rtl.createSet(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcTopLeft));
              if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcBottomLeft in ACorners) c = rtl.unionSet(c,rtl.createSet(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcBottomLeft));
              pas["WEBLib.TMSFNCGraphicsTypes"].DrawGradient(this.GetCanvas(),AFill.FColor,AFill.FColorTo,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(rg.Left,rg.Top,rg.Left + ((rg.Right - rg.Left) / 2),r.Bottom)),ARounding,rtl.refSet(c),true);
              c = {};
              if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcTopRight in ACorners) c = rtl.unionSet(c,rtl.createSet(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcTopRight));
              if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcBottomRight in ACorners) c = rtl.unionSet(c,rtl.createSet(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcBottomRight));
              pas["WEBLib.TMSFNCGraphicsTypes"].DrawGradient(this.GetCanvas(),AFill.FColorMirror,AFill.FColorMirrorTo,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(rg.Left + ((rg.Right - r.Left) / 2),rg.Top,rg.Right,rg.Bottom)),ARounding,rtl.refSet(c),true);
            } else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillOrientation.gfoVertical) {
              c = {};
              if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcTopLeft in ACorners) c = rtl.unionSet(c,rtl.createSet(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcTopLeft));
              if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcTopRight in ACorners) c = rtl.unionSet(c,rtl.createSet(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcTopRight));
              pas["WEBLib.TMSFNCGraphicsTypes"].DrawGradient(this.GetCanvas(),AFill.FColor,AFill.FColorTo,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(rg.Left,rg.Top,rg.Right,rg.Top + ((rg.Bottom - rg.Top) / 2))),ARounding,rtl.refSet(c),false);
              c = {};
              if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcBottomLeft in ACorners) c = rtl.unionSet(c,rtl.createSet(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcBottomLeft));
              if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcBottomRight in ACorners) c = rtl.unionSet(c,rtl.createSet(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcBottomRight));
              pas["WEBLib.TMSFNCGraphicsTypes"].DrawGradient(this.GetCanvas(),AFill.FColorMirror,AFill.FColorMirrorTo,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(rg.Left,rg.Top + ((rg.Bottom - rg.Top) / 2),rg.Right,rg.Bottom)),ARounding,rtl.refSet(c),false);
            };
          } else pas["WEBLib.TMSFNCGraphicsTypes"].DrawGradient(this.GetCanvas(),AFill.FColor,AFill.FColorTo,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(rg),ARounding,rtl.refSet(ACorners),AFill.FOrientation === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillOrientation.gfoHorizontal);
        };
      } else if ((AFill.FColor !== -1) && (AFill.FKind === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid)) pas["WEBLib.TMSFNCGraphicsTypes"].DrawGradient(this.GetCanvas(),AFill.FColor,AFill.FColor,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),ARounding,rtl.refSet(ACorners),AFill.FOrientation === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillOrientation.gfoHorizontal);
    };
    this.DrawRoundRect = function (AStroke, ARect, ARounding, ACorners, AModifyRectMode) {
      var $Self = this;
      var r = pas["WEBLib.Graphics"].TCanvasRectF.$new();
      var rg = pas["WEBLib.Graphics"].TCanvasRectF.$new();
      var rc = 0.0;
      var cl = 0;
      var bs = 0;
      function CanvasArc(ACanvas, Center, Radius, StartAngle, SweepAngle) {
        ACanvas.AngleArc$1(Center.X,Center.Y,Radius.X,pas.Math.DegToRad(StartAngle),pas.Math.DegToRad(SweepAngle));
      };
      ARect.$assign(pas["WEBLib.TMSFNCGraphicsTypes"].ModifyRect(ARect,AModifyRectMode));
      r.$assign(pas["WEBLib.Graphics"].CreateCanvasRectF(ARect.Left,ARect.Top,ARect.Right,ARect.Bottom));
      rg.$assign(r);
      rg.Bottom = rg.Bottom - 1;
      rg.Right = rg.Right - 1;
      cl = this.GetCanvas().FBrush.FColor;
      bs = this.GetCanvas().FBrush.FStyle;
      this.GetCanvas().FBrush.FStyle = pas["WEBLib.Graphics"].TBrushStyle.bsClear;
      rc = Math.round(ARounding);
      if (rtl.eqSet(ACorners,rtl.createSet(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcTopLeft,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcTopRight,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcBottomLeft,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcBottomRight))) {
        this.GetCanvas().RoundRect$3(r,rc * 2,rc * 2)}
       else if (rtl.eqSet(ACorners,{})) {
        this.GetCanvas().Rectangle$3(r)}
       else {
        if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcBottomLeft in ACorners) {
          this.GetCanvas().MoveTo$1(r.Left + rc,r.Bottom);
          CanvasArc(this.GetCanvas(),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(r.Left + rc,r.Bottom - rc)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(rc,rc)),-270,90);
          this.GetCanvas().MoveTo$1(r.Left,r.Bottom - rc);
        } else {
          this.GetCanvas().MoveTo$1(r.Left,r.Bottom);
        };
        if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcTopLeft in ACorners) {
          this.GetCanvas().LineTo$1(r.Left,r.Top + rc);
          CanvasArc(this.GetCanvas(),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(r.Left + rc,r.Top + rc)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(rc,rc)),-180,90);
          this.GetCanvas().MoveTo$1(r.Left + rc,r.Top);
        } else this.GetCanvas().LineTo$1(r.Left,r.Top);
        if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcTopRight in ACorners) {
          this.GetCanvas().LineTo$1(r.Right - rc,r.Top);
          CanvasArc(this.GetCanvas(),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(r.Right - rc,r.Top + rc)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(rc,rc)),-90,90);
          this.GetCanvas().MoveTo$1(r.Right,r.Top + rc);
        } else this.GetCanvas().LineTo$1(r.Right,r.Top);
        if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcBottomRight in ACorners) {
          this.GetCanvas().LineTo$1(r.Right,r.Bottom - rc);
          CanvasArc(this.GetCanvas(),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(r.Right - rc,r.Bottom - rc)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(rc,rc)),0,90);
          this.GetCanvas().MoveTo$1(r.Right - rc,r.Bottom);
        } else {
          this.GetCanvas().LineTo$1(r.Right,r.Bottom);
        };
        if (pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCorner.gcBottomLeft in ACorners) {
          this.GetCanvas().LineTo$1(r.Left + rc,r.Bottom);
        } else this.GetCanvas().LineTo$1(r.Left,r.Bottom);
      };
      this.GetCanvas().FBrush.FColor = cl;
      this.GetCanvas().FBrush.FStyle = bs;
    };
    this.FillEllipse = function (AFill, ARect, AModifyRectMode) {
      var r = pas["WEBLib.Graphics"].TCanvasRectF.$new();
      var ps = 0;
      ARect.$assign(pas["WEBLib.TMSFNCGraphicsTypes"].ModifyRect(ARect,AModifyRectMode));
      r.$assign(pas["WEBLib.Graphics"].CreateCanvasRectF(ARect.Left,ARect.Top,ARect.Right,ARect.Bottom));
      ps = this.GetCanvas().FPen.FStyle;
      this.GetCanvas().FPen.FStyle = pas["WEBLib.Graphics"].TPenStyle.psClear;
      this.GetCanvas().Ellipse$3(r);
      this.GetCanvas().FPen.FStyle = ps;
    };
    this.DrawEllipse = function (AStroke, ARect, AModifyRectMode) {
      var r = pas["WEBLib.Graphics"].TCanvasRectF.$new();
      var bs = 0;
      var c = 0;
      ARect.$assign(pas["WEBLib.TMSFNCGraphicsTypes"].ModifyRect(ARect,AModifyRectMode));
      r.$assign(pas["WEBLib.Graphics"].CreateCanvasRectF(ARect.Left,ARect.Top,ARect.Right,ARect.Bottom));
      c = this.GetCanvas().FBrush.FColor;
      bs = this.GetCanvas().FBrush.FStyle;
      this.GetCanvas().FBrush.FStyle = pas["WEBLib.Graphics"].TBrushStyle.bsClear;
      this.GetCanvas().Ellipse$3(r);
      this.GetCanvas().FBrush.FStyle = bs;
      this.GetCanvas().FBrush.FColor = c;
    };
    this.DrawBitmap = function (ABitmap, ASrcRect, ADstRect, AOpacity) {
      this.GetCanvas().StretchDraw$1(pas["WEBLib.Graphics"].TCanvasRectF.$clone(pas["WEBLib.Graphics"].CreateCanvasRectF(ADstRect.Left,ADstRect.Top,ADstRect.Right,ADstRect.Bottom)),ABitmap);
    };
    this.ClipRect = function (ARect) {
      this.GetCanvas().SetClipRect(pas["WEBLib.Graphics"].CreateCanvasRectF(ARect.Left,ARect.Top,ARect.Right,ARect.Bottom));
    };
    this.ClipPath = function (APath) {
      if (APath != null) {
        this.GetCanvas().PathBegin();
        this.ConvertToPath(APath,0.25);
        this.GetCanvas().Clip();
      };
    };
    this.DrawFocusPath = function (AStroke, APath, AColor) {
      var bs = 0;
      var c = 0;
      c = this.GetCanvas().FBrush.FColor;
      bs = this.GetCanvas().FBrush.FStyle;
      this.GetCanvas().FBrush.FStyle = pas["WEBLib.Graphics"].TBrushStyle.bsClear;
      this.GetCanvas().FPen.SetColor(AColor);
      this.StartSpecialPen();
      this.DrawPath(AStroke,APath,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsPathDrawMode.pdmPolygon);
      this.StopSpecialPen();
      this.GetCanvas().FBrush.FColor = c;
      this.GetCanvas().FBrush.FStyle = bs;
    };
    this.DrawFocusRectangle = function (AStroke, ARect, AColor, AModifyRectMode) {
      var r = pas["WEBLib.Graphics"].TCanvasRectF.$new();
      var c = 0;
      var bs = 0;
      ARect.$assign(pas["WEBLib.TMSFNCGraphicsTypes"].ModifyRect(ARect,AModifyRectMode));
      r.$assign(pas["WEBLib.Graphics"].CreateCanvasRectF(ARect.Left,ARect.Top,ARect.Right,ARect.Bottom));
      c = this.GetCanvas().FBrush.FColor;
      bs = this.GetCanvas().FBrush.FStyle;
      this.GetCanvas().FBrush.FStyle = pas["WEBLib.Graphics"].TBrushStyle.bsClear;
      this.GetCanvas().FPen.SetColor(AColor);
      this.StartSpecialPen();
      this.GetCanvas().Rectangle$3(r);
      this.StopSpecialPen();
      this.GetCanvas().FBrush.FColor = c;
      this.GetCanvas().FBrush.FStyle = bs;
    };
    this.DrawText = function (AText, ARect, AWordWrapping, AHorizontalAlign, AVerticalAlign, ATrimming, AAngle) {
      var rcalc = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var rh = 0;
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var st = null;
      var c = 0;
      var bs = 0;
      c = this.GetCanvas().FBrush.FColor;
      bs = this.GetCanvas().FBrush.FStyle;
      this.GetCanvas().FBrush.FStyle = pas["WEBLib.Graphics"].TBrushStyle.bsClear;
      r.$assign(pas["WEBLib.TMSFNCTypes"].RectF(ARect.Left,ARect.Top,ARect.Right,ARect.Bottom));
      if (AWordWrapping) {
        var $tmp = AVerticalAlign;
        if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter) {
          rcalc.$assign(this.CalculateText(AText,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),AWordWrapping));
          rh = Math.round(rcalc.Bottom - rcalc.Top);
          r.Top = r.Top + Math.max(0,(r.Bottom - r.Top - rh) / 2);
          r.Bottom = Math.max(0,Math.min(Math.round(ARect.Bottom),r.Top + rh));
        } else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaTrailing) {
          rcalc.$assign(this.CalculateText(AText,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),AWordWrapping));
          rh = Math.round(rcalc.Bottom - rcalc.Top);
          r.Top = r.Bottom - rh;
          r.Bottom = r.Top + rh;
        };
      };
      if (AAngle !== 0) {
        this.DrawRotatedText(this.GetCanvas(),pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),AText,AAngle,AHorizontalAlign,AVerticalAlign)}
       else {
        st = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsSaveState.$create("Create$1");
        try {
          this.SaveState(st);
          this.ClipRect(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r));
          var $tmp1 = AHorizontalAlign;
          if ($tmp1 === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaLeading) {
            var $tmp2 = AVerticalAlign;
            if ($tmp2 === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaLeading) {
              this.GetCanvas().TextRect$1(pas["WEBLib.Graphics"].TCanvasRectF.$clone(pas["WEBLib.Graphics"].CreateCanvasRectF(r.Left,r.Top,r.Right,r.Bottom)),AText,AWordWrapping,false,pas.Classes.TAlignment.taLeftJustify,pas["WEBLib.Graphics"].TVerticalAlignment.taAlignTop)}
             else if ($tmp2 === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter) {
              this.GetCanvas().TextRect$1(pas["WEBLib.Graphics"].TCanvasRectF.$clone(pas["WEBLib.Graphics"].CreateCanvasRectF(r.Left,r.Top,r.Right,r.Bottom)),AText,AWordWrapping,false,pas.Classes.TAlignment.taLeftJustify,pas["WEBLib.Graphics"].TVerticalAlignment.taVerticalCenter)}
             else if ($tmp2 === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaTrailing) this.GetCanvas().TextRect$1(pas["WEBLib.Graphics"].TCanvasRectF.$clone(pas["WEBLib.Graphics"].CreateCanvasRectF(r.Left,r.Top,r.Right,r.Bottom)),AText,AWordWrapping,false,pas.Classes.TAlignment.taLeftJustify,pas["WEBLib.Graphics"].TVerticalAlignment.taAlignBottom);
          } else if ($tmp1 === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter) {
            var $tmp3 = AVerticalAlign;
            if ($tmp3 === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaLeading) {
              this.GetCanvas().TextRect$1(pas["WEBLib.Graphics"].TCanvasRectF.$clone(pas["WEBLib.Graphics"].CreateCanvasRectF(r.Left,r.Top,r.Right,r.Bottom)),AText,AWordWrapping,false,pas.Classes.TAlignment.taCenter,pas["WEBLib.Graphics"].TVerticalAlignment.taAlignTop)}
             else if ($tmp3 === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter) {
              this.GetCanvas().TextRect$1(pas["WEBLib.Graphics"].TCanvasRectF.$clone(pas["WEBLib.Graphics"].CreateCanvasRectF(r.Left,r.Top,r.Right,r.Bottom)),AText,AWordWrapping,false,pas.Classes.TAlignment.taCenter,pas["WEBLib.Graphics"].TVerticalAlignment.taVerticalCenter)}
             else if ($tmp3 === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaTrailing) this.GetCanvas().TextRect$1(pas["WEBLib.Graphics"].TCanvasRectF.$clone(pas["WEBLib.Graphics"].CreateCanvasRectF(r.Left,r.Top,r.Right,r.Bottom)),AText,AWordWrapping,false,pas.Classes.TAlignment.taCenter,pas["WEBLib.Graphics"].TVerticalAlignment.taAlignBottom);
          } else if ($tmp1 === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaTrailing) {
            var $tmp4 = AVerticalAlign;
            if ($tmp4 === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaLeading) {
              this.GetCanvas().TextRect$1(pas["WEBLib.Graphics"].TCanvasRectF.$clone(pas["WEBLib.Graphics"].CreateCanvasRectF(r.Left,r.Top,r.Right,r.Bottom)),AText,AWordWrapping,false,pas.Classes.TAlignment.taRightJustify,pas["WEBLib.Graphics"].TVerticalAlignment.taAlignTop)}
             else if ($tmp4 === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter) {
              this.GetCanvas().TextRect$1(pas["WEBLib.Graphics"].TCanvasRectF.$clone(pas["WEBLib.Graphics"].CreateCanvasRectF(r.Left,r.Top,r.Right,r.Bottom)),AText,AWordWrapping,false,pas.Classes.TAlignment.taRightJustify,pas["WEBLib.Graphics"].TVerticalAlignment.taVerticalCenter)}
             else if ($tmp4 === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaTrailing) this.GetCanvas().TextRect$1(pas["WEBLib.Graphics"].TCanvasRectF.$clone(pas["WEBLib.Graphics"].CreateCanvasRectF(r.Left,r.Top,r.Right,r.Bottom)),AText,AWordWrapping,false,pas.Classes.TAlignment.taRightJustify,pas["WEBLib.Graphics"].TVerticalAlignment.taAlignBottom);
          };
        } finally {
          this.RestoreState(st);
        };
      };
      this.GetCanvas().FBrush.FColor = c;
      this.GetCanvas().FBrush.FStyle = bs;
    };
    this.DrawPath = function (AStroke, APath, APathMode) {
      var p = [];
      if (APath != null) {
        if (APathMode === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsPathDrawMode.pdmPath) {
          this.GetCanvas().PathBegin();
          this.ConvertToPath(APath,0.25);
          this.GetCanvas().PathStroke();
        } else {
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
        };
      };
    };
    this.FillPath = function (AFill, APath, APathMode) {
      var p = [];
      if (APath != null) {
        if (APathMode === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsPathDrawMode.pdmPath) {
          this.GetCanvas().PathBegin();
          this.ConvertToPath(APath,0.25);
          this.GetCanvas().PathFill();
        } else {
          p = rtl.arraySetLength(p,pas["WEBLib.TMSFNCTypes"].TPointF,0);
          APath.FlattenToPolygon({get: function () {
              return p;
            }, set: function (v) {
              p = v;
            }},0.25);
          var $tmp = APathMode;
          if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsPathDrawMode.pdmPolygon) {
            this.FillPolygon(AFill,rtl.arrayRef(p))}
           else if (($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsPathDrawMode.pdmPolyline) || ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsPathDrawMode.pdmPath)) this.FillPolyline(AFill,rtl.arrayRef(p));
        };
      };
    };
  });
  this.GetNativeContextClass = function () {
    var Result = null;
    Result = $mod.TTMSFNCGraphicsContextGeneral;
    return Result;
  };
},["Math"]);
//# sourceMappingURL=WEBLib.TMSFNCGraphics.General.js.map
