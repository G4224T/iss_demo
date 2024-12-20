rtl.module("WEBLib.TMSFNCGraphics",["System","Classes","WEBLib.TMSFNCGraphicsTypes","WEBLib.Graphics","JS","WEBLib.TMSFNCBitmapContainer","Types","WEBLib.TMSFNCTypes"],function () {
  "use strict";
  var $mod = this;
  this.$rtti.$Class("TTMSFNCGraphics");
  rtl.createClass(this,"TTMSFNCGraphicsContext",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FGraphics = null;
    };
    this.$final = function () {
      this.FGraphics = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.GetCanvas = function () {
      var Result = null;
      Result = null;
      if (this.GetGraphics() != null) Result = this.GetGraphics().GetCanvas();
      return Result;
    };
    this.GetGraphics = function () {
      var Result = null;
      Result = this.FGraphics;
      return Result;
    };
    this.Create$1 = function (AGraphics) {
      this.FGraphics = AGraphics;
      return this;
    };
    this.ConvertToPath = function (APath, Flatness) {
      var Result = null;
      var J = 0;
      var I = 0;
      var BPts = [];
      var B = rtl.arraySetLength(null,pas["WEBLib.TMSFNCTypes"].TPointF,4);
      var F = 0.0;
      var Len = 0.0;
      var SegCount = 0;
      var CurPoint = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      var x = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      Result = this.CreatePath();
      if (APath.GetCount() > 0) {
        F = Math.max(Flatness,0.05);
        J = 0;
        while (J < APath.GetCount()) {
          var $tmp = APath.GetPoint(J).Kind;
          if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsPathPointKind.gppMoveTo) {
            this.PathOpen(Result);
            this.PathMoveTo(Result,pas["WEBLib.TMSFNCTypes"].TPointF.$clone(APath.GetPoint(J).Point));
            CurPoint.$assign(APath.GetPoint(J).Point);
          } else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsPathPointKind.gppLineTo) {
            this.PathLineTo(Result,pas["WEBLib.TMSFNCTypes"].TPointF.$clone(APath.GetPoint(J).Point));
            CurPoint.$assign(APath.GetPoint(J).Point);
          } else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsPathPointKind.gppCurveTo) {
            B[0].$assign(CurPoint);
            B[1].$assign(APath.GetPoint(J).Point);
            J += 1;
            B[2].$assign(APath.GetPoint(J).Point);
            J += 1;
            B[3].$assign(APath.GetPoint(J).Point);
            BPts = APath.CreateBezier(B,6);
            Len = 0;
            for (var $l = 0, $end = rtl.length(BPts) - 1 - 1; $l <= $end; $l++) {
              I = $l;
              x.X = BPts[I].X - BPts[I + 1].X;
              x.Y = BPts[I].Y - BPts[I + 1].Y;
              Len = Len + pas["WEBLib.TMSFNCTypes"].GetPointLength(x);
            };
            SegCount = Math.round(Len / F);
            if (SegCount < 2) {
              this.PathLineTo(Result,pas["WEBLib.TMSFNCTypes"].TPointF.$clone(B[3]))}
             else {
              BPts = APath.CreateBezier(B,SegCount);
              for (var $l1 = 0, $end1 = rtl.length(BPts) - 1; $l1 <= $end1; $l1++) {
                I = $l1;
                this.PathLineTo(Result,pas["WEBLib.TMSFNCTypes"].TPointF.$clone(BPts[I]));
              };
              CurPoint.$assign(APath.GetPoint(J).Point);
            };
          } else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsPathPointKind.gppClose) this.PathClose(Result);
          J += 1;
        };
      };
      return Result;
    };
  });
  this.$rtti.$ClassRef("TTMSFNCGraphicsContextClass",{instancetype: this.$rtti["TTMSFNCGraphicsContext"]});
  rtl.createClass(this,"TTMSFNCGraphics",pas.System.TObject,function () {
    this.DefaultSelectionFillColor = 0;
    this.DefaultTextFontColor = 0;
    this.DefaultPopupFillColor = 0;
    this.DefaultPopupStrokeColor = 0;
    this.DefaultButtonStrokeColorFocused = 0;
    this.DefaultButtonFillColorFocused = 0;
    this.DefaultButtonStrokeColorDisabled = 0;
    this.DefaultButtonFillColorDisabled = 0;
    this.DefaultButtonStrokeColor = 0;
    this.DefaultButtonFillColor = 0;
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FActiveCanvas = null;
      this.FBlockUpdate = 0;
      this.FNative = false;
      this.FContextNative = null;
      this.FContextGeneral = null;
      this.FBitmap = null;
      this.FFill = null;
      this.FStroke = null;
      this.FFont = null;
      this.FHighlightColor = 0;
      this.FOptimizedHTMLDrawing = false;
      this.FHighlightTextColor = 0;
      this.FHighlightFontStyles = {};
      this.FURLUnderline = false;
      this.FURLColor = 0;
      this.FBitmapContainer = null;
    };
    this.$final = function () {
      this.FActiveCanvas = undefined;
      this.FContextNative = undefined;
      this.FContextGeneral = undefined;
      this.FBitmap = undefined;
      this.FFill = undefined;
      this.FStroke = undefined;
      this.FFont = undefined;
      this.FHighlightFontStyles = undefined;
      this.FBitmapContainer = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.GetCanvas = function () {
      var Result = null;
      Result = this.FActiveCanvas;
      return Result;
    };
    this.GetContext = function () {
      var Result = null;
      if (this.FNative) {
        Result = this.FContextNative}
       else Result = this.FContextGeneral;
      return Result;
    };
    this.FontChanged = function (Sender) {
      this.SetFont(rtl.as(Sender,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFont));
    };
    this.FillChanged = function (Sender) {
      this.SetFill(rtl.as(Sender,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFill));
    };
    this.StrokeChanged = function (Sender) {
      this.SetStroke(rtl.as(Sender,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStroke));
    };
    this.InitializeDefaultAppearance = function () {
      this.FURLColor = 16711680;
      this.FURLUnderline = true;
      this.SetFill(this.FFill);
      this.SetStroke(this.FStroke);
      this.SetFont(this.FFont);
    };
    this.InternalDrawBitmapPartSync = function (ASourceLeft, ASourceTop, ASourceRight, ASourceBottom, ADestinationLeft, ADestinationTop, ADestinationRight, ADestinationBottom, ABitmap, AAspectRatio, AStretch, ACenter, ACropping) {
      var $Self = this;
      var Result = null;
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var rs = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      Result = null;
      r.$assign(pas["WEBLib.TMSFNCTypes"].RectF(ADestinationLeft,ADestinationTop,ADestinationRight,ADestinationBottom));
      rs.$assign(pas["WEBLib.TMSFNCTypes"].RectF(ASourceLeft,ASourceTop,ASourceRight,ASourceBottom));
      if (pas["WEBLib.TMSFNCTypes"].RectIsEmpty(r) || pas["WEBLib.TMSFNCTypes"].RectIsEmpty(rs)) return Result;
      if (!this.HasSVG(ABitmap)) {
        Result = new Promise(function (AResolve, AReject) {
          var bmp = null;
          var g = null;
          g = $mod.TTMSFNCGraphics.$create("CreateBitmapCanvas",[Math.round(ASourceRight - ASourceLeft),Math.round(ASourceBottom - ASourceTop),$Self.FNative,true]);
          try {
            g.BeginScene();
            g.DrawBitmap(-ASourceLeft,-ASourceTop,-ASourceLeft + g.FBitmap.GetWidth(),-ASourceTop + g.FBitmap.GetHeight(),ABitmap,false,false,false,false);
            g.EndScene();
            bmp = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
            bmp.Assign(g.FBitmap);
            AResolve(bmp);
          } finally {
            g = rtl.freeLoc(g);
          };
        });
      };
      return Result;
    };
    this.InternalCalculateText = function (AText, ARect, AWordWrapping, ASupportHTML) {
      var Result = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var a = "";
      var s = "";
      var fa = "";
      var XSize = 0.0;
      var YSize = 0.0;
      var hl = 0;
      var ml = 0;
      var hr = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var cr = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var lc = 0;
      var AControlID = "";
      var AControlType = "";
      var AControlValue = "";
      Result.$assign(ARect);
      if (Math.round(Result.Right - Result.Left) <= 0) {
        Result.Bottom = Result.Top;
        return Result;
      };
      if (AText !== "") {
        if (ASupportHTML && ((pas.System.Pos("</",AText) > 0) || (pas.System.Pos("/>",AText) > 0) || (pas.System.Pos("<BR>",pas.SysUtils.UpperCase(AText)) > 0))) {
          hr.$assign(pas["WEBLib.TMSFNCTypes"].RectF(0,0,0,0));
          XSize = 0;
          YSize = 0;
          hl = -1;
          ml = -1;
          fa = "";
          s = "";
          a = "";
          lc = 0;
          cr.$assign(pas["WEBLib.TMSFNCTypes"].RectF(0,0,0,0));
          AControlID = "";
          AControlValue = "";
          AControlType = "";
          pas["WEBLib.TMSFNCHTMLEngine"].HTMLDrawEx$1(this,AText,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),0,0,-1,-1,0,false,true,false,false,false,false,AWordWrapping,false,"",1.0,this.FURLColor,-1,-1,-1,{get: function () {
              return a;
            }, set: function (v) {
              a = v;
            }},{get: function () {
              return s;
            }, set: function (v) {
              s = v;
            }},{get: function () {
              return fa;
            }, set: function (v) {
              fa = v;
            }},{get: function () {
              return XSize;
            }, set: function (v) {
              XSize = v;
            }},{get: function () {
              return YSize;
            }, set: function (v) {
              YSize = v;
            }},{get: function () {
              return hl;
            }, set: function (v) {
              hl = v;
            }},{get: function () {
              return ml;
            }, set: function (v) {
              ml = v;
            }},hr,cr,{get: function () {
              return AControlID;
            }, set: function (v) {
              AControlID = v;
            }},{get: function () {
              return AControlValue;
            }, set: function (v) {
              AControlValue = v;
            }},{get: function () {
              return AControlType;
            }, set: function (v) {
              AControlType = v;
            }},{get: function () {
              return lc;
            }, set: function (v) {
              lc = v;
            }},0,this.FBitmapContainer,1,this.FURLUnderline,this.FHighlightColor,this.FHighlightTextColor,rtl.refSet(this.FHighlightFontStyles));
          YSize = YSize + 1;
          Result.Right = Result.Left + XSize;
          Result.Bottom = Result.Top + YSize;
        } else {
          Result.$assign(this.GetContext().CalculateText(AText,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),AWordWrapping));
          Result.Bottom = Result.Bottom + 1;
        };
      } else {
        Result.Right = Result.Left;
        Result.Bottom = Result.Top;
      };
      return Result;
    };
    this.InternalDrawText = function (ARect, AText, AControlID, AControlValue, AControlType, AWordWrapping, AHorizontalAlign, AVerticalAlign, ATrimming, AAngle, AMinWidth, AMinHeight, ASupportHTML, ATestAnchor, AX, AY) {
      var Result = "";
      var a = "";
      var s = "";
      var fa = "";
      var XSize = 0.0;
      var YSize = 0.0;
      var hl = 0;
      var ml = 0;
      var hr = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var cr = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var xs = 0.0;
      var ys = 0.0;
      var lc = 0;
      var htmlr = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var isanchor = false;
      var st = null;
      var oldc = 0;
      oldc = this.GetContext().GetFillColor();
      this.GetContext().SetFillColor(this.FFont.FColor);
      if ((AMinHeight > -1) && ((ARect.Bottom - ARect.Top) < AMinHeight)) ARect.Bottom = ARect.Top + AMinHeight;
      if ((AMinWidth > -1) && ((ARect.Right - ARect.Left) < AMinWidth)) ARect.Right = ARect.Left + AMinWidth;
      ARect.$assign(this.GetContext().SetTextAngle(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),AAngle));
      Result = "";
      if (((pas.System.Pos("</",AText) > 0) || (pas.System.Pos("/>",AText) > 0) || (pas.System.Pos("<BR>",pas.SysUtils.UpperCase(AText)) > 0)) && ASupportHTML) {
        hr.$assign(pas["WEBLib.TMSFNCTypes"].RectF(0,0,0,0));
        XSize = 0;
        YSize = 0;
        hl = -1;
        ml = -1;
        fa = "";
        s = "";
        a = "";
        lc = 0;
        cr.$assign(pas["WEBLib.TMSFNCTypes"].RectF(0,0,0,0));
        AControlID.set("");
        AControlValue.set("");
        AControlType.set("");
        pas["WEBLib.TMSFNCHTMLEngine"].HTMLDrawEx$1(this,AText,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),0,0,-1,-1,0,false,true,false,false,false,false,AWordWrapping,false,"",1.0,this.FURLColor,-1,-1,-1,{get: function () {
            return a;
          }, set: function (v) {
            a = v;
          }},{get: function () {
            return s;
          }, set: function (v) {
            s = v;
          }},{get: function () {
            return fa;
          }, set: function (v) {
            fa = v;
          }},{get: function () {
            return XSize;
          }, set: function (v) {
            XSize = v;
          }},{get: function () {
            return YSize;
          }, set: function (v) {
            YSize = v;
          }},{get: function () {
            return hl;
          }, set: function (v) {
            hl = v;
          }},{get: function () {
            return ml;
          }, set: function (v) {
            ml = v;
          }},hr,cr,AControlID,AControlValue,AControlType,{get: function () {
            return lc;
          }, set: function (v) {
            lc = v;
          }},0,this.FBitmapContainer,1,this.FURLUnderline,this.FHighlightColor,this.FHighlightTextColor,rtl.refSet(this.FHighlightFontStyles));
        YSize = YSize + 1;
        XSize = XSize + 1;
        if ((AWordWrapping && (lc <= 1)) || !AWordWrapping) {
          xs = ARect.Left;
          ys = ARect.Top;
          var $tmp = AHorizontalAlign;
          if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter) {
            xs = xs + ((ARect.Right - ARect.Left - XSize) / 2)}
           else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaTrailing) xs = (ARect.Left + (ARect.Right - ARect.Left)) - XSize;
          var $tmp1 = AVerticalAlign;
          if ($tmp1 === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter) {
            ys = ys + ((ARect.Bottom - ARect.Top - YSize) / 2)}
           else if ($tmp1 === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaTrailing) ys = (ys + (ARect.Bottom - ARect.Top)) - YSize;
          htmlr.$assign(pas["WEBLib.TMSFNCTypes"].RectF(xs,ys,xs + XSize,ys + YSize));
        } else htmlr.$assign(ARect);
        st = this.SaveState(true);
        this.ClipRect(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect));
        isanchor = pas["WEBLib.TMSFNCHTMLEngine"].HTMLDrawEx$1(this,AText,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(htmlr),Math.round(AX),Math.round(AY),-1,-1,0,ATestAnchor,false,false,false,false,false,AWordWrapping,false,"",1.0,this.FURLColor,-1,-1,-1,{get: function () {
            return a;
          }, set: function (v) {
            a = v;
          }},{get: function () {
            return s;
          }, set: function (v) {
            s = v;
          }},{get: function () {
            return fa;
          }, set: function (v) {
            fa = v;
          }},{get: function () {
            return XSize;
          }, set: function (v) {
            XSize = v;
          }},{get: function () {
            return YSize;
          }, set: function (v) {
            YSize = v;
          }},{get: function () {
            return hl;
          }, set: function (v) {
            hl = v;
          }},{get: function () {
            return ml;
          }, set: function (v) {
            ml = v;
          }},hr,cr,AControlID,AControlValue,AControlType,{get: function () {
            return lc;
          }, set: function (v) {
            lc = v;
          }},0,this.FBitmapContainer,1,this.FURLUnderline,this.FHighlightColor,this.FHighlightTextColor,rtl.refSet(this.FHighlightFontStyles));
        this.RestoreState(st,true);
        if (isanchor) Result = a;
      } else if (!ATestAnchor) this.GetContext().DrawText(AText,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),AWordWrapping,AHorizontalAlign,AVerticalAlign,ATrimming,AAngle);
      this.GetContext().ResetTextAngle(AAngle);
      this.GetContext().SetFillColor(oldc);
      return Result;
    };
    this.DrawTexture = function (ARect, ATexture, ATextureMode) {
      var LR = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var R = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var IR = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var I = 0;
      var J = 0;
      if (pas["WEBLib.TMSFNCTypes"].IsBitmapEmpty(ATexture)) return;
      LR.$assign(ARect);
      var $tmp = ATextureMode;
      if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextureMode.gtmOriginal) {
        R.$assign(pas["WEBLib.TMSFNCTypes"].RectF(ARect.Left,ARect.Top,ARect.Left + ATexture.GetWidth(),ARect.Top + ATexture.GetHeight()));
        pas["WEBLib.TMSFNCTypes"].IntersectRectEx$1(IR,LR,R);
        this.DrawBitmapPart$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,IR.Right - IR.Left,IR.Bottom - IR.Top)),pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(R.Left,R.Top,R.Left + (IR.Right - IR.Left),R.Top + (IR.Bottom - IR.Top))),ATexture,false,false,false,false);
      } else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextureMode.gtmFit) {
        R.$assign(pas["WEBLib.TMSFNCTypes"].RectF(0,0,ATexture.GetWidth(),ATexture.GetHeight()));
        R.$assign(pas["WEBLib.TMSFNCTypes"].RectSnapToPixelEx(pas["WEBLib.TMSFNCTypes"].RectFitIntoEx$1(R,ARect),1,false));
        this.DrawBitmapPart$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,ATexture.GetWidth(),ATexture.GetHeight())),pas["WEBLib.TMSFNCTypes"].TRectF.$clone(R),ATexture,false,true,false,false);
      } else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextureMode.gtmStretch) {
        this.DrawBitmapPart$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,ATexture.GetWidth(),ATexture.GetHeight())),pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),ATexture,false,true,false,false)}
       else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextureMode.gtmTile) {
        for (var $l = 0, $end = pas.System.Trunc((LR.Right - LR.Left) / ATexture.GetWidth()) + 1; $l <= $end; $l++) {
          I = $l;
          for (var $l1 = 0, $end1 = pas.System.Trunc((LR.Bottom - LR.Top) / ATexture.GetHeight()) + 1; $l1 <= $end1; $l1++) {
            J = $l1;
            R.$assign(pas["WEBLib.TMSFNCTypes"].RectF(LR.Left,LR.Top,LR.Left + ATexture.GetWidth(),LR.Top + ATexture.GetHeight()));
            pas["WEBLib.TMSFNCTypes"].OffsetRectEx$1(R,I * ATexture.GetWidth(),J * ATexture.GetHeight());
            pas["WEBLib.TMSFNCTypes"].IntersectRectEx$1(IR,LR,R);
            if (pas["WEBLib.TMSFNCTypes"].IntersectRectEx(IR,R)) this.DrawBitmap$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(R.Left,R.Top,R.Left + (IR.Right - IR.Left),R.Top + (IR.Bottom - IR.Top))),ATexture,false,false,false,false);
          };
        };
      } else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextureMode.gtmCenter) {
        R.$assign(pas["WEBLib.TMSFNCTypes"].RectF(0,0,ATexture.GetWidth(),ATexture.GetHeight()));
        R.$assign(pas["WEBLib.TMSFNCTypes"].RectSnapToPixelEx(pas["WEBLib.TMSFNCTypes"].RectCenterAtEx(R,ARect),1,false));
        this.DrawBitmapPart$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,ATexture.GetWidth(),ATexture.GetHeight())),pas["WEBLib.TMSFNCTypes"].TRectF.$clone(R),ATexture,true,false,true,false);
      };
    };
    this.DrawSVG = function (ABitmap, ARect) {
      var Result = false;
      Result = false;
      return Result;
    };
    this.HasSVG = function (ABitmap) {
      var Result = false;
      Result = false;
      return Result;
    };
    var TTMSFNCGraphicsColorToGrayscale = {"0": "ctgLightness", ctgLightness: 0, "1": "ctgAverage", ctgAverage: 1, "2": "ctgLuminosity", ctgLuminosity: 2};
    this.ConvertBitmapToGrayScale = function (ABitmap) {
      var $Self = this;
      function MinColor(A, B, C) {
        var Result = 0;
        Result = Math.min(A,Math.min(B,C));
        return Result;
      };
      function MaxColor(A, B, C) {
        var Result = 0;
        Result = Math.max(A,Math.max(B,C));
        return Result;
      };
      function ColorToGray(AColor, AMode) {
        var Result = 0;
        var R = 0;
        var G = 0;
        var B = 0;
        var X = 0;
        var A = 0;
        var $tmp = AMode;
        if ($tmp === TTMSFNCGraphicsColorToGrayscale.ctgLightness) {
          X = rtl.trunc((MaxColor(R,G,B) + MinColor(R,G,B)) / 2)}
         else if ($tmp === TTMSFNCGraphicsColorToGrayscale.ctgAverage) {
          X = rtl.trunc((R + G + B) / 3)}
         else if ($tmp === TTMSFNCGraphicsColorToGrayscale.ctgLuminosity) {
          X = Math.round((0.21 * R) + (0.71 * G) + (0.07 * B))}
         else {
          X = 0;
        };
        return Result;
      };
      var I = 0;
      var J = 0;
      if ((ABitmap != null) && !pas["WEBLib.TMSFNCTypes"].IsBitmapEmpty(ABitmap)) {
        for (var $l = 0, $end = ABitmap.GetWidth() - 1; $l <= $end; $l++) {
          I = $l;
          for (var $l1 = 0, $end1 = ABitmap.GetHeight() - 1; $l1 <= $end1; $l1++) {
            J = $l1;
          };
        };
      };
    };
    this.Create$1 = function (ACanvas, ANative) {
      this.FNative = ANative;
      this.FActiveCanvas = ACanvas;
      if (!ANative) {
        this.FContextGeneral = pas["WEBLib.TMSFNCGraphics.General"].TTMSFNCGraphicsContextGeneral.$create("Create$1",[this]);
        this.FContextGeneral.SetSize(1,1);
      } else {
        this.FContextNative = pas["WEBLib.TMSFNCGraphics.WEB"].GetNativeContextClass().$create("Create$1",[this]);
        this.FContextNative.SetSize(1,1);
      };
      this.FFill = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFill.$create("Create$1",[pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid,16777215,8421504,-1,-1]);
      this.FFill.FOnChanged = rtl.createCallback(this,"FillChanged");
      this.FStroke = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStroke.$create("Create$1",[pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid,12632256]);
      this.FStroke.FOnChanged = rtl.createCallback(this,"StrokeChanged");
      this.FFont = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFont.$create("Create$2");
      this.FFont.FOnChanged = rtl.createCallback(this,"FontChanged");
      this.FHighlightColor = 16711680;
      this.FHighlightTextColor = 16777215;
      this.FHighlightFontStyles = {};
      this.InitializeDefaultAppearance();
      return this;
    };
    this.CreateNative = function (ACanvas) {
      this.Create$1(ACanvas,true);
      return this;
    };
    this.CreateBitmapCanvas = function (AWidth, AHeight, ANative, AHighDPI) {
      this.FNative = ANative;
      this.FBitmap = pas["WEBLib.Graphics"].TBitmap.$create("Create$3");
      this.FBitmap.SetWidth(AWidth);
      this.FBitmap.SetHeight(AHeight);
      this.FActiveCanvas = this.FBitmap.GetCanvas();
      if (!ANative) {
        this.FContextGeneral = pas["WEBLib.TMSFNCGraphics.General"].TTMSFNCGraphicsContextGeneral.$create("Create$1",[this]);
        this.FContextGeneral.SetSize(AWidth,AHeight);
      } else {
        this.FContextNative = pas["WEBLib.TMSFNCGraphics.WEB"].GetNativeContextClass().$create("Create$1",[this]);
        this.FContextNative.SetSize(AWidth,AHeight);
      };
      this.FFill = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFill.$create("Create$1",[pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid,16777215,8421504,-1,-1]);
      this.FFill.FOnChanged = rtl.createCallback(this,"FillChanged");
      this.FStroke = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStroke.$create("Create$1",[pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid,12632256]);
      this.FStroke.FOnChanged = rtl.createCallback(this,"StrokeChanged");
      this.FFont = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFont.$create("Create$2");
      this.FFont.FOnChanged = rtl.createCallback(this,"FontChanged");
      this.InitializeDefaultAppearance();
      return this;
    };
    this.CreateNativeBitmapCanvas = function (AWidth, AHeight) {
      this.CreateBitmapCanvas(AWidth,AHeight,true,true);
      return this;
    };
    this.Destroy = function () {
      if (this.FContextNative != null) {
        rtl.free(this,"FContextNative");
        this.FContextNative = null;
      };
      if (this.FContextGeneral != null) {
        rtl.free(this,"FContextGeneral");
        this.FContextGeneral = null;
      };
      if (this.FFont != null) {
        rtl.free(this,"FFont");
        this.FFont = null;
      };
      if (this.FFill != null) {
        this.FFill.FOnChanged = null;
        rtl.free(this,"FFill");
        this.FFill = null;
      };
      if (this.FStroke != null) {
        this.FStroke.FOnChanged = null;
        rtl.free(this,"FStroke");
        this.FStroke = null;
      };
      this.FBitmapContainer = null;
      if (this.FBitmap != null) {
        rtl.free(this,"FBitmap");
        this.FBitmap = null;
      };
      pas.System.TObject.Destroy.call(this);
    };
    this.GetMatrix = function () {
      var Result = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsMatrix.$new();
      Result.$assign(this.GetContext().GetMatrix());
      return Result;
    };
    this.StartSpecialPen = function () {
      this.GetContext().StartSpecialPen();
    };
    this.StopSpecialPen = function () {
      this.GetContext().StopSpecialPen();
    };
    this.BeginPrinting = function () {
      this.GetContext().BeginPrinting();
    };
    this.EndPrinting = function () {
      this.GetContext().EndPrinting();
    };
    this.BeginScene = function () {
      this.GetContext().BeginScene();
    };
    this.EndScene = function () {
      this.GetContext().EndScene();
    };
    this.SetMatrix = function (AMatrix) {
      this.GetContext().SetMatrix(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsMatrix.$clone(AMatrix));
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCGraphics.isPrototypeOf(Source)) {
        this.FFill.BeginUpdate();
        this.FFill.Assign(rtl.as(Source,$mod.TTMSFNCGraphics).FFill);
        this.FFill.EndUpdate();
        this.FStroke.BeginUpdate();
        this.FStroke.Assign(rtl.as(Source,$mod.TTMSFNCGraphics).FStroke);
        this.FStroke.EndUpdate();
        this.FFont.BeginUpdate();
        this.FFont.AssignSource(rtl.as(Source,$mod.TTMSFNCGraphics).FFont);
        this.FFont.EndUpdate();
      };
    };
    this.SetFill = function (AFill) {
      if (this.FBlockUpdate > 0) return;
      this.FBlockUpdate += 1;
      this.GetContext().SetFill(AFill);
      this.FFill.Assign(AFill);
      this.FBlockUpdate -= 1;
    };
    this.SetStroke = function (AStroke) {
      if (this.FBlockUpdate > 0) return;
      this.FBlockUpdate += 1;
      this.GetContext().SetStroke(AStroke);
      this.FStroke.Assign(AStroke);
      this.FBlockUpdate -= 1;
    };
    this.RestoreState = function (AState, ACanvasOnly) {
      if (!ACanvasOnly) {
        this.SetFill(AState.FFill);
        this.SetStroke(AState.FStroke);
        this.SetFont(AState.FFont);
      };
      this.GetContext().RestoreState(AState);
      AState = rtl.freeLoc(AState);
    };
    this.SetFillKind = function (AKind) {
      if (this.FBlockUpdate > 0) return;
      this.FBlockUpdate += 1;
      this.GetContext().SetFillKind(AKind);
      this.FFill.SetKind(AKind);
      this.FBlockUpdate -= 1;
    };
    this.SetFillColor = function (AColor) {
      if (this.FBlockUpdate > 0) return;
      this.FBlockUpdate += 1;
      this.GetContext().SetFillColor(AColor);
      this.FFill.SetColor(AColor);
      this.FBlockUpdate -= 1;
    };
    this.SetFontColor = function (AColor) {
      if (this.FBlockUpdate > 0) return;
      this.FBlockUpdate += 1;
      this.GetContext().SetFontColor(AColor);
      this.FFont.SetColor(AColor);
      this.FBlockUpdate -= 1;
    };
    this.SetFontName = function (AName) {
      if (this.FBlockUpdate > 0) return;
      this.FBlockUpdate += 1;
      this.GetContext().SetFontName(AName);
      this.FFont.SetName(AName);
      this.FBlockUpdate -= 1;
    };
    this.SetFont = function (AFont) {
      if (this.FBlockUpdate > 0) return;
      this.FBlockUpdate += 1;
      this.GetContext().SetFont(AFont);
      this.FFont.AssignSource(AFont);
      this.FBlockUpdate -= 1;
    };
    this.SetFontSize = function (ASize) {
      if (this.FBlockUpdate > 0) return;
      this.FBlockUpdate += 1;
      this.GetContext().SetFontSize(ASize);
      this.FFont.SetSize(ASize);
      this.FBlockUpdate -= 1;
    };
    this.SetFontStyles = function (AStyle) {
      if (this.FBlockUpdate > 0) return;
      this.FBlockUpdate += 1;
      this.GetContext().SetFontStyles(rtl.refSet(AStyle));
      this.FFont.SetStyle(rtl.refSet(AStyle));
      this.FBlockUpdate -= 1;
    };
    this.SetStrokeKind = function (AKind) {
      if (this.FBlockUpdate > 0) return;
      this.FBlockUpdate += 1;
      this.GetContext().SetStrokeKind(AKind);
      this.FStroke.SetKind(AKind);
      this.FBlockUpdate -= 1;
    };
    this.SetStrokeColor = function (AColor) {
      if (this.FBlockUpdate > 0) return;
      this.FBlockUpdate += 1;
      this.GetContext().SetStrokeColor(AColor);
      this.FStroke.SetColor(AColor);
      this.FBlockUpdate -= 1;
    };
    this.SetStrokeWidth = function (AWidth) {
      if (this.FBlockUpdate > 0) return;
      this.FBlockUpdate += 1;
      this.GetContext().SetStrokeWidth(AWidth);
      this.FStroke.SetWidth(AWidth);
      this.FBlockUpdate -= 1;
    };
    this.DrawLine = function (AFromPoint, AToPoint, AModifyPointModeFrom, AModifyPointModeTo) {
      this.DrawLine$1(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToPointF(AFromPoint)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToPointF(AToPoint)),AModifyPointModeFrom,AModifyPointModeTo);
    };
    this.DrawLine$1 = function (AFromPoint, AToPoint, AModifyPointModeFrom, AModifyPointModeTo) {
      if ((this.FStroke.FColor !== -1) && (this.FStroke.FKind !== pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskNone)) this.GetContext().DrawLine(this.FStroke,pas["WEBLib.TMSFNCTypes"].TPointF.$clone(AFromPoint),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(AToPoint),AModifyPointModeFrom,AModifyPointModeTo);
    };
    this.DrawFocusRectangle = function (ALeft, ATop, ARight, ABottom, AColor, AModifyRectMode) {
      this.DrawFocusRectangle$1(pas.Types.TRect.$clone(pas.Types.Rect(ALeft,ATop,ARight,ABottom)),AColor,AModifyRectMode);
    };
    this.DrawFocusRectangle$1 = function (ARect, AColor, AModifyRectMode) {
      this.DrawFocusRectangle$3(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ARect)),AColor,AModifyRectMode);
    };
    this.DrawFocusRectangle$2 = function (ALeft, ATop, ARight, ABottom, AColor, AModifyRectMode) {
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      r.$assign(pas["WEBLib.TMSFNCTypes"].RectF(ALeft,ATop,ARight,ABottom));
      this.GetContext().DrawFocusRectangle(this.FStroke,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),AColor,AModifyRectMode);
    };
    this.DrawFocusRectangle$3 = function (ARect, AColor, AModifyRectMode) {
      this.DrawFocusRectangle$2(ARect.Left,ARect.Top,ARect.Right,ARect.Bottom,AColor,AModifyRectMode);
    };
    this.DrawFocusPath = function (APath, AColor) {
      this.GetContext().DrawFocusPath(this.FStroke,APath,AColor);
    };
    this.DrawPolygon = function (APolygon) {
      var pth = null;
      if (((this.FFill.FColor !== -1) && (this.FFill.FKind !== pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkNone)) || (this.FFill.FKind === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkTexture)) {
        var $tmp = this.FFill.FKind;
        if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkTexture) {
          pth = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsPath.$create("Create$1");
          try {
            pth.AddPolygon(APolygon);
            this.DrawTexture(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pth.GetBounds()),this.FFill.FTexture,this.FFill.FTextureMode);
          } finally {
            pth = rtl.freeLoc(pth);
          };
        } else {
          this.GetContext().FillPolygon(this.FFill,rtl.arrayRef(APolygon));
        };
      };
      if ((this.FStroke.FColor !== -1) && (this.FStroke.FKind !== pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskNone)) this.GetContext().DrawPolygon(this.FStroke,rtl.arrayRef(APolygon));
    };
    this.DrawPolyline = function (APolyline) {
      if ((this.FFill.FColor !== -1) && (this.FFill.FKind !== pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkNone)) this.GetContext().FillPolyline(this.FFill,rtl.arrayRef(APolyline));
      if ((this.FStroke.FColor !== -1) && (this.FStroke.FKind !== pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskNone)) this.GetContext().DrawPolyline(this.FStroke,rtl.arrayRef(APolyline));
    };
    this.DrawPath = function (APath, APathMode) {
      if (((this.FFill.FColor !== -1) && (this.FFill.FKind !== pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkNone)) || (this.FFill.FKind === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkTexture)) {
        var $tmp = this.FFill.FKind;
        if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkTexture) {
          this.DrawTexture(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(APath.GetBounds()),this.FFill.FTexture,this.FFill.FTextureMode)}
         else {
          this.GetContext().FillPath(this.FFill,APath,APathMode);
        };
      };
      if ((this.FStroke.FColor !== -1) && (this.FStroke.FKind !== pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskNone)) this.GetContext().DrawPath(this.FStroke,APath,APathMode);
    };
    this.DrawArc = function (Center, Radius, StartAngle, SweepAngle) {
      var pth = null;
      if ((this.FFill.FColor !== -1) && (this.FFill.FKind !== pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkNone)) {
        var $tmp = this.FFill.FKind;
        if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkTexture) {
          pth = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsPath.$create("Create$1");
          try {
            pth.AddArc(Center,Radius,StartAngle,SweepAngle);
            this.DrawTexture(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pth.GetBounds()),this.FFill.FTexture,this.FFill.FTextureMode);
          } finally {
            pth = rtl.freeLoc(pth);
          };
        } else {
          this.GetContext().FillArc(this.FFill,pas["WEBLib.TMSFNCTypes"].TPointF.$clone(Center),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(Radius),StartAngle,SweepAngle);
        };
      };
      if ((this.FStroke.FColor !== -1) && (this.FStroke.FKind !== pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskNone)) this.GetContext().DrawArc(this.FStroke,pas["WEBLib.TMSFNCTypes"].TPointF.$clone(Center),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(Radius),StartAngle,SweepAngle);
    };
    this.DrawArc$1 = function (Center, Radius, StartAngle, SweepAngle) {
      this.DrawArc(pas["WEBLib.TMSFNCTypes"].ConvertToPointF(Center),pas["WEBLib.TMSFNCTypes"].ConvertToPointF(Radius),StartAngle,SweepAngle);
    };
    this.DrawRectangle = function (ALeft, ATop, ARight, ABottom, AModifyRectMode) {
      this.DrawRectangle$1(ALeft,ATop,ARight,ABottom,pas["WEBLib.TMSFNCGraphicsTypes"].AllSides,AModifyRectMode);
    };
    this.DrawRectangle$1 = function (ALeft, ATop, ARight, ABottom, ASides, AModifyRectMode) {
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var pth = null;
      r.$assign(pas["WEBLib.TMSFNCTypes"].RectF(ALeft,ATop,ARight,ABottom));
      if (((this.FFill.FColor !== -1) && (this.FFill.FKind !== pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkNone)) || (this.FFill.FKind === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkTexture)) {
        var $tmp = this.FFill.FKind;
        if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkTexture) {
          pth = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsPath.$create("Create$1");
          try {
            pth.AddRectangle(r,0.0,0.0);
            this.DrawTexture(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),this.FFill.FTexture,this.FFill.FTextureMode);
          } finally {
            pth = rtl.freeLoc(pth);
          };
        } else {
          this.GetContext().FillRect(this.FFill,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),AModifyRectMode);
        };
      };
      if ((this.FStroke.FColor !== -1) && (this.FStroke.FKind !== pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskNone)) this.GetContext().DrawRect(this.FStroke,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),rtl.refSet(ASides),AModifyRectMode);
    };
    this.DrawEllipse = function (ALeft, ATop, ARight, ABottom, AModifyRectMode) {
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var pth = null;
      r.$assign(pas["WEBLib.TMSFNCTypes"].RectF(ALeft,ATop,ARight,ABottom));
      if (((this.FFill.FColor !== -1) && (this.FFill.FKind !== pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkNone)) || (this.FFill.FKind === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkTexture)) {
        var $tmp = this.FFill.FKind;
        if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkTexture) {
          pth = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsPath.$create("Create$1");
          try {
            pth.AddEllipse(r);
            this.DrawTexture(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),this.FFill.FTexture,this.FFill.FTextureMode);
          } finally {
            pth = rtl.freeLoc(pth);
          };
        } else {
          this.GetContext().FillEllipse(this.FFill,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),AModifyRectMode);
        };
      };
      if ((this.FStroke.FColor !== -1) && (this.FStroke.FKind !== pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskNone)) this.GetContext().DrawEllipse(this.FStroke,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),AModifyRectMode);
    };
    this.DrawRectangle$2 = function (ARect, AModifyRectMode) {
      this.DrawRectangle(ARect.Left,ARect.Top,ARect.Right,ARect.Bottom,AModifyRectMode);
    };
    this.DrawRectangle$3 = function (ARect, ASides, AModifyRectMode) {
      this.DrawRectangle$1(ARect.Left,ARect.Top,ARect.Right,ARect.Bottom,rtl.refSet(ASides),AModifyRectMode);
    };
    this.DrawRectangle$4 = function (ALeft, ATop, ARight, ABottom, AModifyRectMode) {
      this.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(ALeft,ATop,ARight,ABottom)),AModifyRectMode);
    };
    this.DrawRectangle$5 = function (ALeft, ATop, ARight, ABottom, ASides, AModifyRectMode) {
      this.DrawRectangle$3(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(ALeft,ATop,ARight,ABottom)),rtl.refSet(ASides),AModifyRectMode);
    };
    this.DrawEllipse$1 = function (ALeft, ATop, ARight, ABottom, AModifyRectMode) {
      this.DrawEllipse$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(ALeft,ATop,ARight,ABottom)),AModifyRectMode);
    };
    this.DrawRectangle$6 = function (ARect, AModifyRectMode) {
      this.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ARect)),AModifyRectMode);
    };
    this.DrawRectangle$7 = function (ARect, ASides, AModifyRectMode) {
      this.DrawRectangle$3(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ARect)),rtl.refSet(ASides),AModifyRectMode);
    };
    this.DrawRoundRectangle = function (ALeft, ATop, ARight, ABottom, ARounding, ACorners, AModifyRectMode) {
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var rc = 0.0;
      var pth = null;
      r.$assign(pas["WEBLib.TMSFNCTypes"].RectF(ALeft,ATop,ARight,ABottom));
      if (((this.FFill.FColor !== -1) && (this.FFill.FKind !== pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkNone)) || (this.FFill.FKind === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkTexture)) {
        var $tmp = this.FFill.FKind;
        if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkTexture) {
          pth = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsPath.$create("Create$1");
          try {
            rc = ARounding;
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
            this.DrawTexture(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),this.FFill.FTexture,this.FFill.FTextureMode);
          } finally {
            pth = rtl.freeLoc(pth);
          };
        } else {
          this.GetContext().FillRoundRect(this.FFill,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),ARounding,rtl.refSet(ACorners),AModifyRectMode);
        };
      };
      if ((this.FStroke.FColor !== -1) && (this.FStroke.FKind !== pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskNone)) this.GetContext().DrawRoundRect(this.FStroke,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),ARounding,rtl.refSet(ACorners),AModifyRectMode);
    };
    this.DrawRoundRectangle$1 = function (ARect, ARounding, ACorners, AModifyRectMode) {
      this.DrawRoundRectangle(ARect.Left,ARect.Top,ARect.Right,ARect.Bottom,ARounding,rtl.refSet(ACorners),AModifyRectMode);
    };
    this.DrawRoundRectangle$2 = function (ALeft, ATop, ARight, ABottom, ARounding, ACorners, AModifyRectMode) {
      this.DrawRoundRectangle$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(ALeft,ATop,ARight,ABottom)),ARounding,rtl.refSet(ACorners),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
    };
    this.DrawRoundRectangle$3 = function (ARect, ARounding, ACorners, AModifyRectMode) {
      this.DrawRoundRectangle$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ARect)),ARounding,rtl.refSet(ACorners),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
    };
    this.DrawEllipse$2 = function (ARect, AModifyRectMode) {
      this.DrawEllipse(ARect.Left,ARect.Top,ARect.Right,ARect.Bottom,AModifyRectMode);
    };
    this.DrawBitmapPart = function (ASourceLeft, ASourceTop, ASourceRight, ASourceBottom, ADestinationLeft, ADestinationTop, ADestinationRight, ADestinationBottom, ABitmap, AAspectRatio, AStretch, ACenter, ACropping) {
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var rs = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var g = null;
      var bmp = null;
      r.$assign(pas["WEBLib.TMSFNCTypes"].RectF(ADestinationLeft,ADestinationTop,ADestinationRight,ADestinationBottom));
      rs.$assign(pas["WEBLib.TMSFNCTypes"].RectF(ASourceLeft,ASourceTop,ASourceRight,ASourceBottom));
      if (pas["WEBLib.TMSFNCTypes"].RectIsEmpty(r) || pas["WEBLib.TMSFNCTypes"].RectIsEmpty(rs)) return;
      if (!this.DrawSVG(ABitmap,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r))) {
        g = $mod.TTMSFNCGraphics.$create("CreateBitmapCanvas",[Math.round(ASourceRight - ASourceLeft),Math.round(ASourceBottom - ASourceTop),this.FNative,true]);
        try {
          g.BeginScene();
          g.DrawBitmap(-ASourceLeft,-ASourceTop,-ASourceLeft + g.FBitmap.GetWidth(),-ASourceTop + g.FBitmap.GetHeight(),ABitmap,false,false,false,false);
          g.EndScene();
          bmp = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
          try {
            bmp.Assign(g.FBitmap);
            this.DrawBitmap$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),bmp,AAspectRatio,AStretch,ACenter,ACropping);
          } finally {
            bmp = rtl.freeLoc(bmp);
          };
        } finally {
          g = rtl.freeLoc(g);
        };
      };
    };
    this.DrawBitmapPart$1 = function (ASourceRect, ADestinationRect, ABitmap, AAspectRatio, AStretch, ACenter, ACropping) {
      this.DrawBitmapPart(ASourceRect.Left,ASourceRect.Top,ASourceRect.Right,ASourceRect.Bottom,ADestinationRect.Left,ADestinationRect.Top,ADestinationRect.Right,ADestinationRect.Bottom,ABitmap,AAspectRatio,AStretch,ACenter,ACropping);
    };
    this.DrawBitmap = function (ALeft, ATop, ARight, ABottom, ABitmap, AAspectRatio, AStretch, ACenter, ACropping) {
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      if (!(ABitmap != null)) return;
      r.$assign(pas["WEBLib.TMSFNCTypes"].RectF(ALeft,ATop,ARight,ABottom));
      r.$assign(this.GetBitmapDrawRectangle$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),ABitmap,AAspectRatio,AStretch,ACenter,ACropping));
      if (!this.DrawSVG(ABitmap,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r))) this.GetContext().DrawBitmap(pas["WEBLib.TMSFNCTypes"].BitmapToDrawBitmap(ABitmap),pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,ABitmap.GetWidth(),ABitmap.GetHeight())),pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),1);
    };
    this.DrawBitmap$1 = function (ARect, ABitmap, AAspectRatio, AStretch, ACenter, ACropping) {
      this.DrawBitmap(ARect.Left,ARect.Top,ARect.Right,ARect.Bottom,ABitmap,AAspectRatio,AStretch,ACenter,ACropping);
    };
    this.DrawEllipse$3 = function (ARect, AModifyRectMode) {
      this.DrawEllipse$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ARect)),AModifyRectMode);
    };
    this.DrawBitmapPart$2 = function (ASourceLeft, ASourceTop, ASourceRight, ASourceBottom, ADestinationLeft, ADestinationTop, ADestinationRight, ADestinationBottom, ABitmap, AAspectRatio, AStretch, ACenter, ACropping) {
      this.DrawBitmapPart$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(ASourceLeft,ASourceTop,ASourceRight,ASourceBottom)),pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(ADestinationLeft,ADestinationTop,ADestinationRight,ADestinationBottom)),ABitmap,AAspectRatio,AStretch,ACenter,ACropping);
    };
    this.DrawBitmapPart$3 = function (ASourceRect, ADestinationRect, ABitmap, AAspectRatio, AStretch, ACenter, ACropping) {
      this.DrawBitmapPart$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ASourceRect)),pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ADestinationRect)),ABitmap,AAspectRatio,AStretch,ACenter,ACropping);
    };
    this.DrawBitmap$2 = function (ALeft, ATop, ARight, ABottom, ABitmap, AAspectRatio, AStretch, ACenter, ACropping) {
      this.DrawBitmap$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(ALeft,ATop,ARight,ABottom)),ABitmap,AAspectRatio,AStretch,ACenter,ACropping);
    };
    this.DrawBitmap$3 = function (ARect, ABitmap, AAspectRatio, AStretch, ACenter, ACropping) {
      this.DrawBitmap$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ARect)),ABitmap,AAspectRatio,AStretch,ACenter,ACropping);
    };
    this.DrawBitmap$4 = function (ALeft, ATop, ABitmap) {
      this.DrawBitmap$3(pas.Types.TRect.$clone(pas.Types.Rect(ALeft,ATop,ALeft + ABitmap.GetWidth(),ATop + ABitmap.GetHeight())),ABitmap,true,false,true,false);
    };
    this.DrawBitmap$5 = function (ALeft, ATop, ABitmap) {
      this.DrawBitmap$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(ALeft,ATop,ALeft + ABitmap.GetWidth(),ATop + ABitmap.GetHeight())),ABitmap,true,false,true,false);
    };
    this.DrawCheckBox = function (ARect, AChecked, AFocused, AEnabled, AScaleFactor) {
      var c = 0;
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      r.$assign(ARect);
      pas["WEBLib.TMSFNCTypes"].InflateRectEx(r,-1,-1);
      if (AEnabled) {
        if (AFocused) {
          c = 11829830}
         else c = 0;
      } else c = 11119017;
      this.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
      if (AEnabled) {
        this.FFill.SetColor(pas["WEBLib.TMSFNCGraphicsTypes"].Lighter(13882323,85))}
       else this.FFill.SetColor(13882323);
      this.FStroke.SetWidth(1);
      this.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
      this.FStroke.SetColor(c);
      this.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
      pas["WEBLib.TMSFNCTypes"].InflateRectEx(r,-(r.Right - r.Left) / 5,-(r.Bottom - r.Top) / 5);
      this.FStroke.SetWidth(2);
      this.FStroke.SetColor(c);
      if (AChecked) {
        this.DrawLine$1(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(r.Left,r.Top)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(r.Right - 1,r.Bottom - 1)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
        this.DrawLine$1(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(r.Right - 1,r.Top)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(r.Left,r.Bottom - 1)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
      };
    };
    this.DrawButton = function (ARect, ADown, AFocused, AEnabled, AAdaptToStyle, AScaleFactor) {
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      r.$assign(ARect);
      this.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
      this.FStroke.SetWidth(1);
      this.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
      if (AAdaptToStyle) {
        if (AEnabled) {
          if (!AFocused) {
            this.FStroke.SetColor($mod.TTMSFNCGraphics.DefaultButtonStrokeColor);
            this.FFill.SetColor($mod.TTMSFNCGraphics.DefaultButtonFillColor);
          } else {
            this.FStroke.SetColor($mod.TTMSFNCGraphics.DefaultButtonStrokeColorFocused);
            this.FFill.SetColor($mod.TTMSFNCGraphics.DefaultButtonFillColorFocused);
          };
        } else {
          this.FStroke.SetColor($mod.TTMSFNCGraphics.DefaultButtonStrokeColorDisabled);
          this.FFill.SetColor($mod.TTMSFNCGraphics.DefaultButtonFillColorDisabled);
        };
      } else {
        if (AEnabled) {
          if (!AFocused) {
            this.FStroke.SetColor(11119017);
            this.FFill.SetColor(pas["WEBLib.TMSFNCGraphicsTypes"].MakeGraphicsColor(225,225,225));
          } else {
            this.FStroke.SetColor(pas["WEBLib.TMSFNCGraphicsTypes"].MakeGraphicsColor(60,127,177));
            this.FFill.SetColor(pas["WEBLib.TMSFNCGraphicsTypes"].MakeGraphicsColor(229,241,251));
          };
        } else {
          this.FStroke.SetColor(11119017);
          this.FFill.SetColor(13882323);
        };
      };
      this.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
      pas["WEBLib.TMSFNCTypes"].InflateRectEx(r,-1,-1);
      this.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkNone);
      if (!ADown) {
        this.FStroke.SetColor(this.FFill.FColor)}
       else this.FStroke.SetColor(pas["WEBLib.TMSFNCGraphicsTypes"].Lighter(this.FStroke.FColor,40));
      this.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
    };
    this.DrawCloseButton = function (ARect, ADown, AFocused, AEnabled, AAdaptToStyle, AScaleFactor) {
      var bmp = null;
      var bmpa = null;
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var g = null;
      this.DrawButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),ADown,AFocused,AEnabled,AAdaptToStyle,AScaleFactor);
      if (AAdaptToStyle) {
        bmpa = pas["WEBLib.Graphics"].TBitmap.$create("Create$3");
        bmpa.SetSize(Math.round(16 * AScaleFactor),Math.round(16 * AScaleFactor));
        g = $mod.TTMSFNCGraphics.$create("Create$1",[bmpa.GetCanvas(),false]);
        try {
          g.BeginScene();
          g.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
          g.FStroke.SetColor($mod.TTMSFNCGraphics.DefaultSelectionFillColor);
          g.FStroke.SetWidth(2);
          g.DrawLine$1(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(3 * AScaleFactor,3 * AScaleFactor)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(12 * AScaleFactor,12 * AScaleFactor)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
          g.DrawLine$1(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(3 * AScaleFactor,12 * AScaleFactor)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(12 * AScaleFactor,3 * AScaleFactor)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
        } finally {
          g.EndScene();
          g = rtl.freeLoc(g);
        };
        try {
          r.$assign(ARect);
          bmp = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
          try {
            bmp.Assign(bmpa);
            this.DrawBitmap$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),bmp,true,false,true,false);
          } finally {
            bmp = rtl.freeLoc(bmp);
          };
        } finally {
          bmpa = rtl.freeLoc(bmpa);
        };
      } else {
        bmp = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.CreateFromResource($mod.TMSFNCGRAPHICSCLOSESVG);
        try {
          r.$assign(ARect);
          pas["WEBLib.TMSFNCTypes"].InflateRectEx(r,-6 * AScaleFactor,-6 * AScaleFactor);
          this.DrawBitmap$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),bmp,true,false,true,false);
        } finally {
          bmp = rtl.freeLoc(bmp);
        };
      };
    };
    this.DrawExpanderButton = function (ARect, AState, ADown, AFocused, AEnabled, AAdaptToStyle, AScaleFactor) {
      var bmpa = null;
      var bmp = null;
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var g = null;
      this.DrawButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),ADown,AFocused,AEnabled,AAdaptToStyle,AScaleFactor);
      if (AAdaptToStyle) {
        bmpa = pas["WEBLib.Graphics"].TBitmap.$create("Create$3");
        bmpa.SetSize(Math.round(16 * AScaleFactor),Math.round(16 * AScaleFactor));
        g = $mod.TTMSFNCGraphics.$create("Create$1",[bmpa.GetCanvas(),false]);
        try {
          g.BeginScene();
          g.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
          g.FStroke.SetWidth(2);
          g.FStroke.SetColor($mod.TTMSFNCGraphics.DefaultSelectionFillColor);
          var $tmp = AState;
          if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsExpanderState.gesCollapsed) {
            g.DrawLine$1(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(5 * AScaleFactor,6 * AScaleFactor)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(8 * AScaleFactor,9 * AScaleFactor)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
            g.DrawLine$1(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(8 * AScaleFactor,9 * AScaleFactor)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(11 * AScaleFactor,6 * AScaleFactor)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
          } else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsExpanderState.gesExpanded) {
            g.DrawLine$1(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(5 * AScaleFactor,9 * AScaleFactor)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(8 * AScaleFactor,6 * AScaleFactor)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
            g.DrawLine$1(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(8 * AScaleFactor,6 * AScaleFactor)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(11 * AScaleFactor,9 * AScaleFactor)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
          };
        } finally {
          g.EndScene();
          g = rtl.freeLoc(g);
        };
        if (bmpa != null) {
          try {
            r.$assign(ARect);
            bmp = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
            try {
              bmp.Assign(bmpa);
              this.DrawBitmap$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),bmp,true,false,true,false);
            } finally {
              bmp = rtl.freeLoc(bmp);
            };
          } finally {
            bmpa = rtl.freeLoc(bmpa);
          };
        };
      } else {
        var $tmp1 = AState;
        if ($tmp1 === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsExpanderState.gesCollapsed) {
          bmp = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.CreateFromResource($mod.TMSFNCGRAPHICSDOWNSVG)}
         else if ($tmp1 === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsExpanderState.gesExpanded) {
          bmp = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.CreateFromResource($mod.TMSFNCGRAPHICSUPSVG)}
         else {
          bmp = null;
        };
        if (bmp != null) {
          try {
            r.$assign(ARect);
            pas["WEBLib.TMSFNCTypes"].InflateRectEx(r,-4 * AScaleFactor,-4 * AScaleFactor);
            this.DrawBitmap$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),bmp,true,false,true,false);
          } finally {
            bmp = rtl.freeLoc(bmp);
          };
        };
      };
    };
    this.DrawCompactButton = function (ARect, AState, ADown, AFocused, AEnabled, AAdaptToStyle, AScaleFactor) {
      var bmpa = null;
      var bmp = null;
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var g = null;
      this.DrawButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),ADown,AFocused,AEnabled,AAdaptToStyle,AScaleFactor);
      if (AAdaptToStyle) {
        bmpa = pas["WEBLib.Graphics"].TBitmap.$create("Create$3");
        bmpa.SetSize(Math.round(16 * AScaleFactor),Math.round(16 * AScaleFactor));
        g = $mod.TTMSFNCGraphics.$create("Create$1",[bmpa.GetCanvas(),false]);
        try {
          g.BeginScene();
          g.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
          g.FStroke.SetWidth(2);
          g.FStroke.SetColor($mod.TTMSFNCGraphics.DefaultSelectionFillColor);
          var $tmp = AState;
          if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCompactState.gcsCollapsed) {
            g.DrawLine$1(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(6 * AScaleFactor,5 * AScaleFactor)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(9 * AScaleFactor,8 * AScaleFactor)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
            g.DrawLine$1(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(9 * AScaleFactor,8 * AScaleFactor)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(6 * AScaleFactor,11 * AScaleFactor)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
          } else if ($tmp === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCompactState.gcsExpanded) {
            g.DrawLine$1(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(9 * AScaleFactor,5 * AScaleFactor)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(6 * AScaleFactor,8 * AScaleFactor)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
            g.DrawLine$1(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(6 * AScaleFactor,8 * AScaleFactor)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(9 * AScaleFactor,11 * AScaleFactor)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
          };
        } finally {
          g.EndScene();
          g = rtl.freeLoc(g);
        };
        if (bmpa != null) {
          try {
            r.$assign(ARect);
            bmp = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
            try {
              bmp.Assign(bmpa);
              this.DrawBitmap$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),bmp,true,false,true,false);
            } finally {
              bmp = rtl.freeLoc(bmp);
            };
          } finally {
            bmpa = rtl.freeLoc(bmpa);
          };
        };
      } else {
        var $tmp1 = AState;
        if ($tmp1 === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCompactState.gcsCollapsed) {
          bmp = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.CreateFromResource($mod.TMSFNCGRAPHICSRIGHTSVG)}
         else if ($tmp1 === pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsCompactState.gcsExpanded) {
          bmp = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.CreateFromResource($mod.TMSFNCGRAPHICSLEFTSVG)}
         else {
          bmp = null;
        };
        if (bmp != null) {
          try {
            r.$assign(ARect);
            pas["WEBLib.TMSFNCTypes"].InflateRectEx(r,-4 * AScaleFactor,-4 * AScaleFactor);
            this.DrawBitmap$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),bmp,true,false,true,false);
          } finally {
            bmp = rtl.freeLoc(bmp);
          };
        };
      };
    };
    this.DrawDropDownButton = function (ARect, ADown, AFocused, AEnabled, ACenter, AAdaptToStyle, AScaleFactor) {
      var bmp = null;
      var bmpa = null;
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var g = null;
      this.DrawButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),ADown,AFocused,AEnabled,AAdaptToStyle,1.0);
      if (AAdaptToStyle) {
        bmpa = pas["WEBLib.Graphics"].TBitmap.$create("Create$3");
        bmpa.SetSize(Math.round(7 * AScaleFactor),Math.round(7 * AScaleFactor));
        g = $mod.TTMSFNCGraphics.$create("Create$1",[bmpa.GetCanvas(),false]);
        try {
          g.BeginScene();
          g.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
          g.FStroke.SetColor($mod.TTMSFNCGraphics.DefaultSelectionFillColor);
          g.DrawLine$1(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(0,1 * AScaleFactor)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(6 * AScaleFactor,1 * AScaleFactor)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
          g.DrawLine$1(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(0,2 * AScaleFactor)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(6 * AScaleFactor,2 * AScaleFactor)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
          g.DrawLine$1(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(1 * AScaleFactor,3 * AScaleFactor)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(5 * AScaleFactor,3 * AScaleFactor)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
          g.DrawLine$1(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(2 * AScaleFactor,4 * AScaleFactor)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(4 * AScaleFactor,4 * AScaleFactor)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
          g.DrawLine$1(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(3 * AScaleFactor,5 * AScaleFactor)),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(3 * AScaleFactor,5 * AScaleFactor)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
        } finally {
          g.EndScene();
          g = rtl.freeLoc(g);
        };
        try {
          if (((ARect.Right - bmpa.GetWidth() - (10 * AScaleFactor)) > ARect.Left) && !ACenter) {
            r.$assign(pas["WEBLib.TMSFNCTypes"].RectF(ARect.Right - bmpa.GetWidth() - (10 * AScaleFactor),ARect.Top,ARect.Right,ARect.Bottom))}
           else r.$assign(ARect);
          bmp = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
          try {
            bmp.Assign(bmpa);
            this.DrawBitmap$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),bmp,true,false,true,false);
          } finally {
            bmp = rtl.freeLoc(bmp);
          };
        } finally {
          bmpa = rtl.freeLoc(bmpa);
        };
      } else {
        bmp = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
        bmp.LoadFromResource($mod.TMSFNCGRAPHICSEXPANDSVG);
        try {
          if (!ACenter) {
            r.$assign(pas["WEBLib.TMSFNCTypes"].RectF(ARect.Right - (16 * AScaleFactor),ARect.Top,ARect.Right - (2 * AScaleFactor),ARect.Bottom));
            pas["WEBLib.TMSFNCTypes"].InflateRectEx(r,-2 * AScaleFactor,-2 * AScaleFactor);
          } else {
            r.$assign(ARect);
            pas["WEBLib.TMSFNCTypes"].InflateRectEx(r,-4 * AScaleFactor,-4 * AScaleFactor);
          };
          this.DrawBitmap$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),bmp,true,false,true,false);
        } finally {
          bmp = rtl.freeLoc(bmp);
        };
      };
    };
    this.DrawRadioButton = function (ARect, AChecked, AFocused, AEnabled, AScaleFactor) {
      var c = 0;
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      r.$assign(ARect);
      pas["WEBLib.TMSFNCTypes"].InflateRectEx(r,-1,-1);
      if (AEnabled) {
        if (AFocused) {
          c = 11829830}
         else c = 0;
      } else c = 11119017;
      this.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
      if (AEnabled) {
        this.FFill.SetColor(pas["WEBLib.TMSFNCGraphicsTypes"].Lighter(13882323,85))}
       else this.FFill.SetColor(13882323);
      this.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
      this.FStroke.SetWidth(1);
      this.FStroke.SetColor(c);
      this.DrawEllipse$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
      pas["WEBLib.TMSFNCTypes"].InflateRectEx(r,-(r.Right - r.Left) / 5,-(r.Bottom - r.Top) / 5);
      this.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
      this.FFill.SetColor(c);
      if (AChecked) {
        this.DrawEllipse$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
      };
    };
    this.DrawProgressBar = function (ARect, AValue, AFormat, AMax, AColor, ATextColor, AShowText, AEnabled, AScaleFactor) {
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var rp = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var v = 0.0;
      var tc = 0;
      var fc = 0;
      r.$assign(ARect);
      rp.$assign(r);
      fc = this.FFill.FColor;
      if (AEnabled) {
        this.FFill.SetColor(pas["WEBLib.TMSFNCGraphicsTypes"].Lighter(13882323,75))}
       else this.FFill.SetColor(13882323);
      this.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
      this.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
      this.FStroke.SetColor(11119017);
      this.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
      v = Math.max(0,Math.min(AValue,AMax));
      if ((v >= 0) && (v <= AMax) && (AMax > 0)) {
        pas["WEBLib.TMSFNCTypes"].InflateRectEx(rp,-1,-1);
        rp.Right = rp.Left + (((rp.Right - r.Left) * v) / AMax);
        this.FFill.SetColor(AColor);
        this.FStroke.SetColor(this.FFill.FColor);
        this.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(rp),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
        if (AShowText) {
          tc = this.FFont.FColor;
          this.FFont.SetColor(ATextColor);
          this.DrawText$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),pas.SysUtils.Format(AFormat,pas.System.VarRecs(3,(v / AMax) * 100)),false,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextTrimming.gttNone,0,-1,-1,true,false,-1,-1);
          this.FFont.SetColor(tc);
        };
      };
      this.FFill.SetColor(fc);
    };
    this.DrawCheckBox$1 = function (ARect, AChecked, AFocused, AEnabled, AScaleFactor) {
      this.DrawCheckBox(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ARect)),AChecked,AFocused,AEnabled,AScaleFactor);
    };
    this.DrawButton$1 = function (ARect, ADown, AFocused, AEnabled, AAdaptToStyle, AScaleFactor) {
      this.DrawButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ARect)),ADown,AFocused,AEnabled,AAdaptToStyle,AScaleFactor);
    };
    this.DrawCloseButton$1 = function (ARect, ADown, AFocused, AEnabled, AAdaptToStyle, AScaleFactor) {
      this.DrawCloseButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ARect)),ADown,AFocused,AEnabled,AAdaptToStyle,AScaleFactor);
    };
    this.DrawExpanderButton$1 = function (ARect, AState, ADown, AFocused, AEnabled, AAdaptToStyle, AScaleFactor) {
      this.DrawExpanderButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ARect)),AState,ADown,AFocused,AEnabled,AAdaptToStyle,AScaleFactor);
    };
    this.DrawCompactButton$1 = function (ARect, AState, ADown, AFocused, AEnabled, AAdaptToStyle, AScaleFactor) {
      this.DrawCompactButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ARect)),AState,ADown,AFocused,AEnabled,AAdaptToStyle,AScaleFactor);
    };
    this.DrawDropDownButton$1 = function (ARect, ADown, AFocused, AEnabled, ACenter, AAdaptToStyle, AScaleFactor) {
      this.DrawDropDownButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ARect)),ADown,AFocused,AEnabled,ACenter,AAdaptToStyle,AScaleFactor);
    };
    this.DrawRadioButton$1 = function (ARect, AChecked, AFocused, AEnabled, AScaleFactor) {
      this.DrawRadioButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ARect)),AChecked,AFocused,AEnabled,AScaleFactor);
    };
    this.DrawProgressBar$1 = function (ARect, AValue, AFormat, AMax, AColor, ATextColor, AShowText, AEnabled, AScaleFactor) {
      this.DrawProgressBar(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ARect)),AValue,AFormat,AMax,AColor,ATextColor,AShowText,AEnabled,AScaleFactor);
    };
    this.DrawBitmapWithName = function (ALeft, ATop, ARight, ABottom, ABitmapName, AApplyScale, AScale, AAspectRatio, AStretch, ACenter, ACropping) {
      var b = null;
      b = this.$class.GetBitmapFromBitmapContainer(this.FBitmapContainer,ABitmapName,AApplyScale,AScale);
      if (b != null) this.DrawBitmap(ALeft,ATop,ARight,ABottom,b,AAspectRatio,AStretch,ACenter,ACropping);
    };
    this.DrawBitmapWithName$1 = function (ARect, ABitmapName, AApplyScale, AScale, AAspectRatio, AStretch, ACenter, ACropping) {
      var b = null;
      b = this.$class.GetBitmapFromBitmapContainer(this.FBitmapContainer,ABitmapName,AApplyScale,AScale);
      if (b != null) this.DrawBitmap$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),b,AAspectRatio,AStretch,ACenter,ACropping);
    };
    this.DrawScaledBitmap = function (ARect, ABitmaps, AScale, AAspectRatio, AStretch, ACenter, ACropping) {
      var b = null;
      var bmp = null;
      if (ABitmaps != null) {
        if (AScale > 0) {
          b = ABitmaps.GetItemByScale(AScale)}
         else b = ABitmaps.GetItemByScale(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetDPIScale(null,-1));
        if (b != null) {
          if ((b.FBitmap != null) && !pas["WEBLib.TMSFNCTypes"].IsBitmapEmpty(b.FBitmap)) {
            this.DrawBitmap$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),b.FBitmap,AAspectRatio,AStretch,ACenter,ACropping)}
           else {
            bmp = this.$class.GetBitmapFromBitmapContainer(this.FBitmapContainer,b.FBitmapName,true,AScale);
            if ((bmp != null) && !pas["WEBLib.TMSFNCTypes"].IsBitmapEmpty(bmp)) {
              this.DrawBitmap$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),bmp,AAspectRatio,AStretch,ACenter,ACropping)}
             else this.DrawBitmapWithName$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),b.FBitmapName,false,b.FScale,AAspectRatio,AStretch,ACenter,ACropping);
          };
        };
      };
    };
    this.DrawScaledBitmap$1 = function (ALeft, ATop, ARight, ABottom, ABitmaps, AScale, AAspectRatio, AStretch, ACenter, ACropping) {
      var b = null;
      var bmp = null;
      if (ABitmaps != null) {
        if (AScale > 0) {
          b = ABitmaps.GetItemByScale(AScale)}
         else b = ABitmaps.GetItemByScale(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetDPIScale(null,-1));
        if (b != null) {
          if ((b.FBitmap != null) && !pas["WEBLib.TMSFNCTypes"].IsBitmapEmpty(b.FBitmap)) {
            this.DrawBitmap(ALeft,ATop,ARight,ABottom,b.FBitmap,AAspectRatio,AStretch,ACenter,ACropping)}
           else {
            bmp = this.$class.GetBitmapFromBitmapContainer(this.FBitmapContainer,b.FBitmapName,true,AScale);
            if ((bmp != null) && !pas["WEBLib.TMSFNCTypes"].IsBitmapEmpty(bmp)) {
              this.DrawBitmap(ALeft,ATop,ARight,ABottom,bmp,AAspectRatio,AStretch,ACenter,ACropping)}
             else this.DrawBitmapWithName(ALeft,ATop,ARight,ABottom,b.FBitmapName,false,b.FScale,AAspectRatio,AStretch,ACenter,ACropping);
          };
        };
      };
    };
    this.DrawBitmapWithName$2 = function (ALeft, ATop, ARight, ABottom, ABitmapName, AApplyScale, AScale, AAspectRatio, AStretch, ACenter, ACropping) {
      this.DrawBitmapWithName$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(ALeft,ATop,ARight,ABottom)),ABitmapName,AApplyScale,AScale,AAspectRatio,AStretch,ACenter,ACropping);
    };
    this.DrawBitmapWithName$3 = function (ARect, ABitmapName, AApplyScale, AScale, AAspectRatio, AStretch, ACenter, ACropping) {
      this.DrawBitmapWithName$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ARect)),ABitmapName,AApplyScale,AScale,AAspectRatio,AStretch,ACenter,ACropping);
    };
    this.DrawScaledBitmap$2 = function (ARect, ABitmaps, AScale, AAspectRatio, AStretch, ACenter, ACropping) {
      this.DrawScaledBitmap(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ARect)),ABitmaps,AScale,AAspectRatio,AStretch,ACenter,ACropping);
    };
    this.DrawScaledBitmap$3 = function (ALeft, ATop, ARight, ABottom, ABitmaps, AScale, AAspectRatio, AStretch, ACenter, ACropping) {
      this.DrawScaledBitmap(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(ALeft,ATop,ARight,ABottom)),ABitmaps,AScale,AAspectRatio,AStretch,ACenter,ACropping);
    };
    this.GetBitmapDrawRectangle = function (ALeft, ATop, ARight, ABottom, ABitmap, AAspectRatio, AStretch, ACenter, ACropping) {
      var Result = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var bmp = null;
      var rdest = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var w = 0.0;
      var h = 0.0;
      var x = 0.0;
      var y = 0.0;
      Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(0,0,0,0));
      bmp = ABitmap;
      if (bmp != null) {
        x = 0;
        y = 0;
        w = 0;
        h = 0;
        this.$class.GetAspectSize({get: function () {
            return w;
          }, set: function (v) {
            w = v;
          }},{get: function () {
            return h;
          }, set: function (v) {
            h = v;
          }},bmp.GetWidth(),bmp.GetHeight(),ARight - ALeft,ABottom - ATop,AAspectRatio,AStretch,ACropping);
        if (ACenter || ACropping) {
          x = Math.round((ARight - ALeft - w) / 2);
          y = Math.round((ABottom - ATop - h) / 2);
        };
        rdest.$assign(pas["WEBLib.TMSFNCTypes"].RectF(ALeft + x,ATop + y,ALeft + x + w,ATop + y + h));
        Result.$assign(rdest);
      };
      return Result;
    };
    this.GetBitmapDrawRectangle$1 = function (ARect, ABitmap, AAspectRatio, AStretch, ACenter, ACropping) {
      var Result = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      Result.$assign(this.GetBitmapDrawRectangle(ARect.Left,ARect.Top,ARect.Right,ARect.Bottom,ABitmap,AAspectRatio,AStretch,ACenter,ACropping));
      return Result;
    };
    this.GetBitmapDrawRectangle$2 = function (ALeft, ATop, ARight, ABottom, ABitmap, AAspectRatio, AStretch, ACenter, ACropping) {
      var Result = pas.Types.TRect.$new();
      Result.$assign(pas["WEBLib.TMSFNCTypes"].ConvertToRect(this.GetBitmapDrawRectangle$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(ALeft,ATop,ARight,ABottom)),ABitmap,AAspectRatio,AStretch,ACenter,ACropping)));
      return Result;
    };
    this.GetBitmapDrawRectangle$3 = function (ARect, ABitmap, AAspectRatio, AStretch, ACenter, ACropping) {
      var Result = pas.Types.TRect.$new();
      Result.$assign(pas["WEBLib.TMSFNCTypes"].ConvertToRect(this.GetBitmapDrawRectangle$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ARect)),ABitmap,AAspectRatio,AStretch,ACenter,ACropping)));
      return Result;
    };
    this.ClipRect = function (ARect) {
      this.GetContext().ClipRect(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect));
    };
    this.DrawBitmapPartSync = async function (ASourceLeft, ASourceTop, ASourceRight, ASourceBottom, ADestinationLeft, ADestinationTop, ADestinationRight, ADestinationBottom, ABitmap, AAspectRatio, AStretch, ACenter, ACropping) {
      var Result = null;
      Result = await this.InternalDrawBitmapPartSync(ASourceLeft,ASourceTop,ASourceRight,ASourceBottom,ADestinationLeft,ADestinationTop,ADestinationRight,ADestinationBottom,ABitmap,AAspectRatio,AStretch,ACenter,ACropping);
      return Result;
    };
    this.CalculateTextSize = function (AText, ARect, AWordWrapping, ASupportHTML) {
      var Result = pas["WEBLib.TMSFNCTypes"].TSizeF.$new();
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      r.$assign(this.CalculateText(AText,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),AWordWrapping,ASupportHTML));
      Result.cx = r.Right - r.Left;
      Result.cy = r.Bottom - r.Top;
      return Result;
    };
    this.CalculateTextWidth = function (AText, ARect, AWordWrapping, ASupportHTML) {
      var Result = 0.0;
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      r.$assign(this.CalculateText(AText,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),AWordWrapping,ASupportHTML));
      Result = r.Right - r.Left;
      return Result;
    };
    this.CalculateTextHeight = function (AText, ARect, AWordWrapping, ASupportHTML) {
      var Result = 0.0;
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      r.$assign(this.CalculateText(AText,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),AWordWrapping,ASupportHTML));
      Result = r.Bottom - r.Top;
      return Result;
    };
    var arr$1 = ["<BR>","<BR/>"];
    this.CalculateText = function (AText, ARect, AWordWrapping, ASupportHTML) {
      var Result = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var lst = null;
      var i = 0;
      var l = 0;
      var p = 0;
      var b = false;
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var y = 0.0;
      Result.$assign(ARect);
      b = this.FOptimizedHTMLDrawing && pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.IsHTML(AText);
      if (b) {
        for (i = 0; i <= 1; i++) {
          p = pas.System.Pos(arr$1[i],pas.SysUtils.UpperCase(AText));
          l = arr$1[i].length;
        };
        if ((p > 0) && (l > 0)) {
          lst = pas.Classes.TStringList.$create("Create$1");
          try {
            lst.SetLineBreak(pas.System.Copy(AText,p,l));
            lst.SetTextStr(AText);
            y = 0;
            for (var $l = 0, $end = lst.GetCount() - 1; $l <= $end; $l++) {
              i = $l;
              r.$assign(this.InternalCalculateText(lst.Get(i),pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),AWordWrapping,ASupportHTML));
              y = y + (r.Bottom - r.Top);
            };
            Result.Bottom = Result.Top + y;
          } finally {
            lst = rtl.freeLoc(lst);
          };
        } else b = false;
      };
      if (!b) Result.$assign(this.InternalCalculateText(AText,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),AWordWrapping,ASupportHTML));
      return Result;
    };
    this.CalculateTextSize$1 = function (AText) {
      var Result = pas["WEBLib.TMSFNCTypes"].TSizeF.$new();
      Result.$assign(this.CalculateTextSize(AText,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,10000,10000)),false,true));
      return Result;
    };
    this.CalculateTextWidth$1 = function (AText) {
      var Result = 0.0;
      Result = this.CalculateTextWidth(AText,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,10000,10000)),false,true);
      return Result;
    };
    this.CalculateTextHeight$1 = function (AText) {
      var Result = 0.0;
      Result = this.CalculateTextHeight(AText,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,10000,10000)),false,true);
      return Result;
    };
    this.CalculateText$1 = function (AText) {
      var Result = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      Result.$assign(this.CalculateText(AText,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,10000,10000)),false,true));
      return Result;
    };
    this.ClipRect$1 = function (ARect) {
      this.ClipRect$1(pas.Types.TRect.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRect$1(ARect)));
    };
    this.CalculateTextSize$2 = function (AText, ARect, AWordWrapping, ASupportHTML) {
      var Result = pas.Types.TSize.$new();
      Result.$assign(pas["WEBLib.TMSFNCTypes"].ConvertToSize(this.CalculateTextSize(AText,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ARect)),AWordWrapping,ASupportHTML)));
      return Result;
    };
    this.CalculateTextWidth$2 = function (AText, ARect, AWordWrapping, ASupportHTML) {
      var Result = 0;
      Result = Math.round(this.CalculateTextWidth(AText,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ARect)),AWordWrapping,ASupportHTML));
      return Result;
    };
    this.CalculateTextHeight$2 = function (AText, ARect, AWordWrapping, ASupportHTML) {
      var Result = 0;
      Result = Math.round(this.CalculateTextHeight(AText,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ARect)),AWordWrapping,ASupportHTML));
      return Result;
    };
    this.CalculateText$2 = function (AText, ARect, AWordWrapping, ASupportHTML) {
      var Result = pas.Types.TRect.$new();
      Result.$assign(pas["WEBLib.TMSFNCTypes"].ConvertToRect(this.CalculateText(AText,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ARect)),AWordWrapping,ASupportHTML)));
      return Result;
    };
    this.CalculateTextSizeInt = function (AText) {
      var Result = pas.Types.TSize.$new();
      Result.$assign(pas["WEBLib.TMSFNCTypes"].ConvertToSize(this.CalculateTextSize$1(AText)));
      return Result;
    };
    this.CalculateTextWidthInt = function (AText) {
      var Result = 0;
      Result = Math.round(this.CalculateTextWidth$1(AText));
      return Result;
    };
    this.CalculateTextHeightInt = function (AText) {
      var Result = 0;
      Result = Math.round(this.CalculateTextHeight$1(AText));
      return Result;
    };
    this.CalculateTextInt = function (AText) {
      var Result = pas.Types.TRect.$new();
      Result.$assign(pas["WEBLib.TMSFNCTypes"].ConvertToRect(this.CalculateText$1(AText)));
      return Result;
    };
    this.DrawText = function (APoint, AText, AAngle, ASupportHTML, ATestAnchor, AX, AY) {
      var Result = "";
      var AControlID = "";
      var AControlValue = "";
      var AControlType = "";
      AControlID = "";
      AControlValue = "";
      AControlType = "";
      Result = this.DrawText$5(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(APoint.X,APoint.Y,APoint.X + 10000,APoint.Y + 10000)),AText,{get: function () {
          return AControlID;
        }, set: function (v) {
          AControlID = v;
        }},{get: function () {
          return AControlValue;
        }, set: function (v) {
          AControlValue = v;
        }},{get: function () {
          return AControlType;
        }, set: function (v) {
          AControlType = v;
        }},false,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaLeading,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaLeading,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextTrimming.gttNone,AAngle,-1,-1,ASupportHTML,ATestAnchor,AX,AY);
      return Result;
    };
    this.DrawText$1 = function (ARect, AText, AWordWrapping, AHorizontalAlign, AVerticalAlign, ATrimming, AAngle, AMinWidth, AMinHeight, ASupportHTML, ATestAnchor, AX, AY) {
      var Result = "";
      var AControlID = "";
      var AControlValue = "";
      var AControlType = "";
      AControlID = "";
      AControlValue = "";
      AControlType = "";
      Result = this.DrawText$5(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),AText,{get: function () {
          return AControlID;
        }, set: function (v) {
          AControlID = v;
        }},{get: function () {
          return AControlValue;
        }, set: function (v) {
          AControlValue = v;
        }},{get: function () {
          return AControlType;
        }, set: function (v) {
          AControlType = v;
        }},AWordWrapping,AHorizontalAlign,AVerticalAlign,ATrimming,AAngle,AMinWidth,AMinHeight,ASupportHTML,ATestAnchor,AX,AY);
      return Result;
    };
    this.DrawText$2 = function (ALeft, ATop, ARight, ABottom, AText, AWordWrapping, AHorizontalAlign, AVerticalAlign, ATrimming, AAngle, AMinWidth, AMinHeight, ASupportHTML, ATestAnchor, AX, AY) {
      var Result = "";
      var AControlID = "";
      var AControlValue = "";
      var AControlType = "";
      AControlID = "";
      AControlValue = "";
      AControlType = "";
      Result = this.DrawText$5(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(ALeft,ATop,ARight,ABottom)),AText,{get: function () {
          return AControlID;
        }, set: function (v) {
          AControlID = v;
        }},{get: function () {
          return AControlValue;
        }, set: function (v) {
          AControlValue = v;
        }},{get: function () {
          return AControlType;
        }, set: function (v) {
          AControlType = v;
        }},AWordWrapping,AHorizontalAlign,AVerticalAlign,ATrimming,AAngle,AMinWidth,AMinHeight,ASupportHTML,ATestAnchor,AX,AY);
      return Result;
    };
    this.DrawText$3 = function (ARect, AText, AWordWrapping, AHorizontalAlign, AVerticalAlign, ATrimming, AAngle, AMinWidth, AMinHeight, ASupportHTML, ATestAnchor, AX, AY) {
      var Result = "";
      var AControlID = "";
      var AControlValue = "";
      var AControlType = "";
      AControlID = "";
      AControlValue = "";
      AControlType = "";
      Result = this.DrawText$5(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ARect)),AText,{get: function () {
          return AControlID;
        }, set: function (v) {
          AControlID = v;
        }},{get: function () {
          return AControlValue;
        }, set: function (v) {
          AControlValue = v;
        }},{get: function () {
          return AControlType;
        }, set: function (v) {
          AControlType = v;
        }},AWordWrapping,AHorizontalAlign,AVerticalAlign,ATrimming,AAngle,AMinWidth,AMinHeight,ASupportHTML,ATestAnchor,AX,AY);
      return Result;
    };
    this.DrawText$4 = function (ALeft, ATop, ARight, ABottom, AText, AWordWrapping, AHorizontalAlign, AVerticalAlign, ATrimming, AAngle, AMinWidth, AMinHeight, ASupportHTML, ATestAnchor, AX, AY) {
      var Result = "";
      var AControlID = "";
      var AControlValue = "";
      var AControlType = "";
      AControlID = "";
      AControlValue = "";
      AControlType = "";
      Result = this.DrawText$5(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(ALeft,ATop,ARight,ABottom)),AText,{get: function () {
          return AControlID;
        }, set: function (v) {
          AControlID = v;
        }},{get: function () {
          return AControlValue;
        }, set: function (v) {
          AControlValue = v;
        }},{get: function () {
          return AControlType;
        }, set: function (v) {
          AControlType = v;
        }},AWordWrapping,AHorizontalAlign,AVerticalAlign,ATrimming,AAngle,AMinWidth,AMinHeight,ASupportHTML,ATestAnchor,AX,AY);
      return Result;
    };
    var arr = ["<BR>","<BR/>"];
    this.DrawText$5 = function (ARect, AText, AControlID, AControlValue, AControlType, AWordWrapping, AHorizontalAlign, AVerticalAlign, ATrimming, AAngle, AMinWidth, AMinHeight, ASupportHTML, ATestAnchor, AX, AY) {
      var Result = "";
      var lst = null;
      var i = 0;
      var l = 0;
      var p = 0;
      var b = false;
      var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var rd = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      rd.$assign(ARect);
      b = !ATestAnchor && this.FOptimizedHTMLDrawing;
      b = b && pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.IsHTML(AText);
      if (b) {
        for (i = 0; i <= 1; i++) {
          p = pas.System.Pos(arr[i],pas.SysUtils.UpperCase(AText));
          l = arr[i].length;
        };
        if ((p > 0) && (l > 0)) {
          lst = pas.Classes.TStringList.$create("Create$1");
          try {
            lst.SetLineBreak(pas.System.Copy(AText,p,l));
            lst.SetTextStr(AText);
            for (var $l = 0, $end = lst.GetCount() - 1; $l <= $end; $l++) {
              i = $l;
              r.$assign(this.CalculateText(lst.Get(i),pas["WEBLib.TMSFNCTypes"].TRectF.$clone(rd),AWordWrapping,ASupportHTML));
              this.InternalDrawText(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(r.Left,r.Top,r.Right + 1,r.Bottom)),lst.Get(i),AControlID,AControlValue,AControlType,AWordWrapping,AHorizontalAlign,AVerticalAlign,ATrimming,AAngle,AMinWidth,AMinHeight,ASupportHTML,ATestAnchor,AX,AY);
              rd.Top = rd.Top + (r.Bottom - r.Top);
              rd.Bottom = rd.Bottom + (r.Bottom - r.Top);
            };
          } finally {
            lst = rtl.freeLoc(lst);
          };
        } else b = false;
      };
      if (!b) {
        Result = this.InternalDrawText(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),AText,AControlID,AControlValue,AControlType,AWordWrapping,AHorizontalAlign,AVerticalAlign,ATrimming,AAngle,AMinWidth,AMinHeight,ASupportHTML,ATestAnchor,AX,AY);
      };
      return Result;
    };
    this.DrawText$6 = function (ALeft, ATop, ARight, ABottom, AText, AControlID, AControlValue, AControlType, AWordWrapping, AHorizontalAlign, AVerticalAlign, ATrimming, AAngle, AMinWidth, AMinHeight, ASupportHTML, ATestAnchor, AX, AY) {
      var Result = "";
      Result = this.DrawText$5(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(ALeft,ATop,ARight,ABottom)),AText,AControlID,AControlValue,AControlType,AWordWrapping,AHorizontalAlign,AVerticalAlign,ATrimming,AAngle,AMinWidth,AMinHeight,ASupportHTML,ATestAnchor,AX,AY);
      return Result;
    };
    this.DrawText$7 = function (ARect, AText, AControlID, AControlValue, AControlType, AWordWrapping, AHorizontalAlign, AVerticalAlign, ATrimming, AAngle, AMinWidth, AMinHeight, ASupportHTML, ATestAnchor, AX, AY) {
      var Result = "";
      Result = this.DrawText$5(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ARect)),AText,AControlID,AControlValue,AControlType,AWordWrapping,AHorizontalAlign,AVerticalAlign,ATrimming,AAngle,AMinWidth,AMinHeight,ASupportHTML,ATestAnchor,AX,AY);
      return Result;
    };
    this.DrawText$8 = function (ALeft, ATop, ARight, ABottom, AText, AControlID, AControlValue, AControlType, AWordWrapping, AHorizontalAlign, AVerticalAlign, ATrimming, AAngle, AMinWidth, AMinHeight, ASupportHTML, ATestAnchor, AX, AY) {
      var Result = "";
      Result = this.DrawText$5(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(ALeft,ATop,ARight,ABottom)),AText,AControlID,AControlValue,AControlType,AWordWrapping,AHorizontalAlign,AVerticalAlign,ATrimming,AAngle,AMinWidth,AMinHeight,ASupportHTML,ATestAnchor,AX,AY);
      return Result;
    };
    this.SaveState = function (ACanvasOnly) {
      var Result = null;
      Result = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsSaveState.$create("Create$1");
      if (!ACanvasOnly) {
        Result.FFill.Assign(this.FFill);
        Result.FStroke.Assign(this.FStroke);
        Result.FFont.AssignSource(this.FFont);
      };
      this.GetContext().SaveState(Result);
      return Result;
    };
    this.ApplyHilight = function (AText, AHilight, ATag, ADoCase) {
      var Result = "";
      Result = pas["WEBLib.TMSFNCHTMLEngine"].HiLight(AText,AHilight,ATag,ADoCase,false);
      return Result;
    };
    this.GetBitmapFromBitmapContainer = function (ABitmapContainer, AName, AApplyScale, AScale) {
      var Result = null;
      Result = null;
      if ((ABitmapContainer != null) && (AName !== "")) {
        if (AApplyScale) {
          if (AScale > 0) {
            Result = ABitmapContainer.FindBitmap$1(AName + "_" + pas.SysUtils.FloatToStr(AScale))}
           else Result = ABitmapContainer.FindBitmap$1(AName + "_" + pas.SysUtils.FloatToStr(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetDPIScale(null,-1)));
        };
        if (!(Result != null)) Result = ABitmapContainer.FindBitmap$1(AName);
      };
      return Result;
    };
    this.GetScaledBitmap = function (ABitmaps, AScale, ABitmapContainer) {
      var Result = null;
      var b = null;
      var bmp = null;
      Result = null;
      if (ABitmaps != null) {
        if (AScale > 0) {
          b = ABitmaps.GetItemByScale(AScale)}
         else b = ABitmaps.GetItemByScale(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetDPIScale(null,-1));
        if (b != null) {
          if ((b.FBitmap != null) && !pas["WEBLib.TMSFNCTypes"].IsBitmapEmpty(b.FBitmap)) {
            Result = b.FBitmap}
           else {
            bmp = this.GetBitmapFromBitmapContainer(ABitmapContainer,b.FBitmapName,true,AScale);
            if ((bmp != null) && !pas["WEBLib.TMSFNCTypes"].IsBitmapEmpty(bmp)) {
              Result = bmp}
             else {
              bmp = this.GetBitmapFromBitmapContainer(ABitmapContainer,b.FBitmapName,false,0);
              if ((bmp != null) && !pas["WEBLib.TMSFNCTypes"].IsBitmapEmpty(bmp)) Result = bmp;
            };
          };
        };
      };
      return Result;
    };
    this.GetAspectSize = function (AWidth, AHeight, AOriginalWidth, AOriginalHeight, ANewWidth, ANewHeight, AAspectRatio, AStretch, ACropping) {
      var arc = 0.0;
      var ar = 0.0;
      if (AAspectRatio) {
        if ((AOriginalWidth > 0) && (AOriginalHeight > 0) && (ANewWidth > 0) && (ANewHeight > 0)) {
          if ((AOriginalWidth < ANewWidth) && (AOriginalHeight < ANewHeight) && !AStretch) {
            AWidth.set(AOriginalWidth);
            AHeight.set(AOriginalHeight);
          } else {
            if ((AOriginalWidth / AOriginalHeight) < (ANewWidth / ANewHeight)) {
              AHeight.set(ANewHeight);
              AWidth.set((ANewHeight * AOriginalWidth) / AOriginalHeight);
            } else {
              AWidth.set(ANewWidth);
              AHeight.set((ANewWidth * AOriginalHeight) / AOriginalWidth);
            };
          };
        } else {
          AWidth.set(0);
          AHeight.set(0);
        };
      } else {
        if (AStretch) {
          AWidth.set(ANewWidth);
          AHeight.set(ANewHeight);
        } else {
          AWidth.set(AOriginalWidth);
          AHeight.set(AOriginalHeight);
          if (ACropping) {
            if ((AWidth.get() >= AHeight.get()) && (AWidth.get() > 0)) {
              AHeight.set((AOriginalWidth / AWidth.get()) * AHeight.get());
              AWidth.set(AOriginalWidth);
            } else if ((AHeight.get() >= AWidth.get()) && (AHeight.get() > 0)) {
              AWidth.set((AOriginalHeight / AHeight.get()) * AWidth.get());
              AHeight.set(AOriginalHeight);
            };
            if (AHeight.get() === 0) {
              ar = 1}
             else ar = AWidth.get() / AHeight.get();
            if (AOriginalHeight === 0) {
              arc = 1}
             else arc = AOriginalWidth / AOriginalHeight;
            if ((ar < 1) || (arc > ar)) {
              AHeight.set(AOriginalWidth / ar);
              AWidth.set(AOriginalWidth);
            } else {
              AWidth.set(ar * AOriginalHeight);
              AHeight.set(AOriginalHeight);
            };
          };
        };
      };
    };
    this.DrawSample = function (ACanvas, ARect) {
      var g = null;
      g = $mod.TTMSFNCGraphics.$create("Create$1",[ACanvas,false]);
      try {
        g.FFont.SetName("Courier New");
        g.FFont.SetSize(20);
        g.FFont.SetColor(16777215);
        g.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkGradient);
        g.FFill.SetColor(36095);
        g.FFill.SetColorTo(11829830);
        g.FStroke.SetColor(9109504);
        g.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
        g.DrawText$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ARect),"Sample",false,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextTrimming.gttNone,0,-1,-1,true,false,-1,-1);
      } finally {
        g = rtl.freeLoc(g);
      };
    };
    this.SetDefaultGraphicColors = function () {
      $mod.TTMSFNCGraphics.DefaultPopupFillColor = 16777215;
      $mod.TTMSFNCGraphics.DefaultPopupStrokeColor = 12632256;
      $mod.TTMSFNCGraphics.DefaultButtonFillColor = pas["WEBLib.TMSFNCGraphicsTypes"].MakeGraphicsColor(225,225,225);
      $mod.TTMSFNCGraphics.DefaultButtonStrokeColor = 11119017;
      $mod.TTMSFNCGraphics.DefaultTextFontColor = 0;
      $mod.TTMSFNCGraphics.DefaultSelectionFillColor = 0;
      $mod.TTMSFNCGraphics.DefaultButtonFillColorFocused = pas["WEBLib.TMSFNCGraphicsTypes"].MakeGraphicsColor(229,241,251);
      $mod.TTMSFNCGraphics.DefaultButtonStrokeColorFocused = pas["WEBLib.TMSFNCGraphicsTypes"].MakeGraphicsColor(60,127,177);
      $mod.TTMSFNCGraphics.DefaultButtonStrokeColorDisabled = 11119017;
      $mod.TTMSFNCGraphics.DefaultButtonFillColorDisabled = 13882323;
    };
    this.PointInCircle = function (APoint, ACenter, ARadius) {
      var Result = false;
      if (ARadius > 0) {
        Result = (pas.System.Sqr$1((APoint.X - ACenter.X) / ARadius) + pas.System.Sqr$1((APoint.Y - ACenter.Y) / ARadius)) <= 1}
       else Result = false;
      return Result;
    };
    this.PointInPath = function (APoint, APath) {
      var Result = false;
      Result = APath.IsPointVisible(APoint);
      return Result;
    };
    this.PointInPath$1 = function (APoint, APath) {
      var Result = false;
      Result = this.PointInPath(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToPointF(APoint)),APath);
      return Result;
    };
    this.PointInPolygon = function (APoint, APolygon) {
      var Result = false;
      Result = pas["WEBLib.TMSFNCGraphicsTypes"].PointInPoly(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(APoint),rtl.arrayRef(APolygon));
      return Result;
    };
    this.PointInPolygon$1 = function (APoint, APolygon) {
      var Result = false;
      Result = this.PointInPolygon(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToPointF(APoint)),rtl.arrayRef(APolygon));
      return Result;
    };
    this.PointInRect = function (APoint, ARect) {
      var Result = false;
      Result = pas["WEBLib.TMSFNCTypes"].PtInRectEx(ARect,APoint);
      return Result;
    };
    this.PointInRect$1 = function (APoint, ARect) {
      var Result = false;
      Result = this.PointInRect(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToPointF(APoint)),pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].ConvertToRectF(ARect)));
      return Result;
    };
    this.GetColorRed = function (AColor) {
      var Result = 0;
      AColor = pas["WEBLib.Graphics"].ColorToRGB(AColor);
      Result = pas["WEBLib.Graphics"].GetRValue(AColor);
      return Result;
    };
    this.GetColorGreen = function (AColor) {
      var Result = 0;
      AColor = pas["WEBLib.Graphics"].ColorToRGB(AColor);
      Result = pas["WEBLib.Graphics"].GetGValue(AColor);
      return Result;
    };
    this.GetColorBlue = function (AColor) {
      var Result = 0;
      AColor = pas["WEBLib.Graphics"].ColorToRGB(AColor);
      Result = pas["WEBLib.Graphics"].GetBValue(AColor);
      return Result;
    };
    var HTMLHexColor = "#RRGGBB";
    var HexDigit = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    this.ColorToHTML = function (AColor) {
      var Result = "";
      var c = 0;
      var i = 0;
      i = 1;
      c = pas["WEBLib.Graphics"].ColorToRGB(AColor);
      Result = HTMLHexColor;
      Result = rtl.setCharAt(Result,(1 + i) - 1,HexDigit[this.GetColorRed(c) >>> 4]);
      Result = rtl.setCharAt(Result,(2 + i) - 1,HexDigit[this.GetColorRed(c) & 0xF]);
      Result = rtl.setCharAt(Result,(3 + i) - 1,HexDigit[this.GetColorGreen(c) >>> 4]);
      Result = rtl.setCharAt(Result,(4 + i) - 1,HexDigit[this.GetColorGreen(c) & 0xF]);
      Result = rtl.setCharAt(Result,(5 + i) - 1,HexDigit[this.GetColorBlue(c) >>> 4]);
      Result = rtl.setCharAt(Result,(6 + i) - 1,HexDigit[this.GetColorBlue(c) & 0xF]);
      return Result;
    };
    this.HTMLToColor = function (AHTML) {
      var Result = 0;
      var r = 0;
      var g = 0;
      var b = 0;
      Result = -1;
      if (AHTML === "") return Result;
      if (AHTML.length === 4) {
        r = pas.SysUtils.StrToInt("$" + pas.System.Copy(AHTML,2,1) + pas.System.Copy(AHTML,2,1));
        g = pas.SysUtils.StrToInt("$" + pas.System.Copy(AHTML,3,1) + pas.System.Copy(AHTML,3,1));
        b = pas.SysUtils.StrToInt("$" + pas.System.Copy(AHTML,4,1) + pas.System.Copy(AHTML,4,1));
      } else {
        r = pas.SysUtils.StrToInt("$" + pas.System.Copy(AHTML,2,2));
        g = pas.SysUtils.StrToInt("$" + pas.System.Copy(AHTML,4,2));
        b = pas.SysUtils.StrToInt("$" + pas.System.Copy(AHTML,6,2));
      };
      Result = pas["WEBLib.Graphics"].RGB(r,g,b);
      return Result;
    };
    this.TextToColor = function (AText) {
      var Result = 0;
      var i = 0;
      var s = "";
      var c = null;
      s = AText;
      s = pas.SysUtils.LowerCase(s);
      if (pas.System.Pos("cl",s) === 1) pas.System.Delete({get: function () {
          return s;
        }, set: function (v) {
          s = v;
        }},1,2);
      if (pas.System.Pos("cla",s) === 1) pas.System.Delete({get: function () {
          return s;
        }, set: function (v) {
          s = v;
        }},1,3);
      if (pas.System.Pos("gc",s) === 1) pas.System.Delete({get: function () {
          return s;
        }, set: function (v) {
          s = v;
        }},1,2);
      Result = 0;
      c = pas["WEBLib.TMSFNCGraphicsTypes"].ColorLookup();
      if (c != null) {
        i = c.IndexOf(pas.SysUtils.LowerCase(s));
        if ((i >= 0) && (i <= (c.GetCount() - 1))) Result = c.GetObject(i).FColor;
      };
      return Result;
    };
  });
  rtl.createInterface(this,"ITMSFNCGraphicsExport","{481CA803-8B50-4545-B212-57AC0D065D09}",["Export"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("Export",0,[["AGraphics",$mod.$rtti["TTMSFNCGraphics"]],["ARect",pas["WEBLib.TMSFNCTypes"].$rtti["TRectF"]]]);
  });
  this.TMSFNCGRAPHICSCLOSE = "data:image/PNG;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJ" + "cEhZcwAACxIAAAsSAdLdfvwAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuOWwzfk4AAABVSURBVDhPYxh+" + "QBSI/0OYWAFIThjCxA5ACmAYHeCTQwHYFGITwwuQNSBjkgBFmkGAIgNAGv5BaZINQdYMA0Qbgk0zDBBlCCiR4FMA" + "khOCMIcJYGAAAHvVMBv6PIFYAAAAAElFTkSuQmCC";
  this.TMSFNCGRAPHICSDOWN = "data:image/PNG;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBA" + "JqcGAAAAGdJREFUOI3tzjsOwjAURNGDUqSgTxU5K2AVrJtswjUsgHSR0qdxAZZFPrS+3ZvRzBsqf9MUtBtazJk+oM" + "e0VTriiZCFX8nbpENMgfARjsn74vKj5IFruhfc8d6zIF9S/Hyk5HS4spMVeFcOjszaOwMAAAAASUVORK5CYII=";
  this.TMSFNCGRAPHICSDOWN2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAA" + "RnQU1BAACxjwv8YQUAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMT" + "ZEaa/1AAAAdElEQVQ4T6XMsQ2AMBBD0UxBBwyA2L9jCWpY5bCLSJfgSFgUr+AHX4mIX2R0yOiQ0SGjQ8Ud5q7RCl" + "vX5IEDLlhS4/gGvuV/5YEJTuCAR+qYjW/N/81Hko8Mx/QKST0yHJOMCYfDMcnokNEho0NGh4zfRXkAxSYKjdpwcI" + "UAAAAASUVORK5CYII=";
  this.TMSFNCGRAPHICSUP = "data:image/PNG;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJq" + "cGAAAAEZJREFUOI3tjLEJACAMwLLo5EM+rTjpXV7g0oI4tYKbgYwJfJ6Txet4iu6Jxk10TTSuQACidzKAIrGik24ZpC" + "PeJ8ky+DhZ1JENPrPndiwAAAAASUVORK5CYII=";
  this.TMSFNCGRAPHICSUP2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARn" + "QU1BAACxjwv8YQUAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa" + "/1AAAAcklEQVQ4T6XMMQ6AMAiF4S46eSEvremk5/IC+GggKfE1ER2+gZ9AEZFfaMygMYPGDBozaOyshu0aGo0eXmb4" + "hEbw42qGTx4B/HiHCWYYPgmDOWEDPfbmT46uNWEwC/THTp/oLvQwfEFjBo0ZNGbQ+J6UG5Y9CmuVGrAsAAAAAElFTkS" + "uQmCC";
  this.TMSFNCGRAPHICSPIN = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARnQ" + "U1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1" + "AAABKklEQVQ4T2PAB0JDQ5mjoqIEgUxGiAiRIDo6WiY8PHwdEGvW19czQYUJA6AGhbCwsO9Aek1ISIiZvb09C1QKPwB" + "qaAbi/1DNJ4HYiqDNIE1ADZ9AGqGa/wLp6xERESZAaVQ/AyUUgDgIiOdCbQFrQsL/gPgxUM4OFACSQMYdIP4FFPwNxH" + "+gpqNoAortAYayHNSfjAwgNwMFvaCaMTQA8W+g+M7IyEgNiLuQAMgUoNsDgYruoWkCOe1gcHCwHlQpJgA6wwCo6DySJ" + "hD+BDQwCaoEEwA1SQAVzQLiq0BcBMRXgBhk25PAwEBJqDJUkJaWxgr0QzoQbwYqdABGNCeQrQPSDKTv44w3oFPEgYqm" + "Amk9UNqECjMCxWSBeAeUjx1ANWAkZCSD0AADAwDRpKHlJfOjAwAAAABJRU5ErkJggg==";
  this.TMSFNCGRAPHICSPIN2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARn" + "QU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa" + "/1AAAA/UlEQVQ4T33Su2oCQRTGcddLYWmlQhTLCBIsQgoLSW2nj2Bj7yv4DGkCeYOQxiaBNJapbCI2ooU+gY3gbf1/" + "w47MjosHfsvM7DlzY1JhGN6TQQGBM2bEOgke8IU60tGY4SYlqWGHT7wgC/PPT/SNoFDxH1owKyclWyrawsYJczwj8J" + "O1tR4+oFX8OGONtpLLWGCPA47Q7H78ogqd06yoPXeg4qQCTfaDR1x3ZxuapYsl3NDWJnjCtUjcThNTuKHL6cPNM2yj" + "hHfMMMQ/tNoGuoNYkeiTwwBjvCKPBlS8QuzFWPoU8QadQ29TY3qbFXxH/Ru2oYKbhww7kSdMXQD8wIToOQZE/AAAAA" + "BJRU5ErkJggg==";
  this.TMSFNCGRAPHICSRIGHT = "data:image/PNG;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMB" + "AJqcGAAAAFNJREFUOI3tzzsSQFAQRNFDqSezHUuwYBJLsBuhEomE4/ll3HBq+nY1PxENRrS5xzK4L1jPSiISesxP" + "JcORJJqwU9xthjrX/ko4mpBQocN0tf1rbDeZDIfcSud0AAAAAElFTkSuQmCC";
  this.TMSFNCGRAPHICSLEFT = "data:image/PNG;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBA" + "JqcGAAAAEpJREFUOI3lzKENgEAQAMEJBkkIDdDTSxp6gqMyCkB8IQgMFdwZAutn+U19Bi84MUbxhZrBawSXB+8RDD" + "MaDkyvmQyZyYYuOvh6N24uDUKEV//MAAAAAElFTkSuQmCC";
  this.TMSFNCGRAPHICSEXPAND = "data:image/PNG;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOvwAADr8" + "BOAVTJAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4zjOaXUAAAACVJREFUGFdj+P//P07MEBYW9h8Xxi" + "8JAjglYACnBAzglMAEDAwARZ1DA4NRF38AAAAASUVORK5CYII=";
  this.TMSFNCGRAPHICSEXPANDSVG = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d" + "3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTJweC" + "IgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTIgMTIiIHZlcnNpb249IjEuMSI+CjxnIGlkPSJzdXJmYWNlMSI+CjxwYXRoI" + "HN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIg" + "ZD0iTSAxMS44Mzk4NDQgMi44ODY3MTkgQyAxMS42Mjg5MDYgMi42NzU3ODEgMTEuMjgxMjUgMi42NzU3ODEgMTEuMDcwMzEyIDI" + "uODg2NzE5IEwgNiA3Ljk1NzAzMSBMIDAuOTI5Njg4IDIuODg2NzE5IEMgMC43MTg3NSAyLjY3NTc4MSAwLjM3MTA5NCAyLjY3NT" + "c4MSAwLjE2MDE1NiAyLjg4NjcxOSBDIC0wLjA1NDY4NzUgMy4xMDE1NjIgLTAuMDU0Njg3NSAzLjQ0NTMxMiAwLjE2MDE1NiAzL" + "jY2MDE1NiBMIDUuNjEzMjgxIDkuMTEzMjgxIEMgNS43MTQ4NDQgOS4yMTQ4NDQgNS44NTU0NjkgOS4yNzM0MzggNiA5LjI3MzQz" + "OCBDIDYuMTQ0NTMxIDkuMjczNDM4IDYuMjg1MTU2IDkuMjE0ODQ0IDYuMzg2NzE5IDkuMTEzMjgxIEwgMTEuODM5ODQ0IDMuNjY" + "wMTU2IEMgMTIuMDU0Njg4IDMuNDQ1MzEyIDEyLjA1NDY4OCAzLjEwMTU2MiAxMS44Mzk4NDQgMi44ODY3MTkgWiBNIDExLjgzOT" + "g0NCAyLjg4NjcxOSAiLz4KPC9nPgo8L3N2Zz4K";
  this.TMSFNCGRAPHICSDOWNSVG = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d" + "3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTJweC" + "IgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTIgMTIiIHZlcnNpb249IjEuMSI+CjxnIGlkPSJzdXJmYWNlMSI+CjxwYXRoI" + "HN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIg" + "ZD0iTSAxMS44Mzk4NDQgMi44ODY3MTkgQyAxMS42Mjg5MDYgMi42NzU3ODEgMTEuMjgxMjUgMi42NzU3ODEgMTEuMDcwMzEyIDI" + "uODg2NzE5IEwgNiA3Ljk1NzAzMSBMIDAuOTI5Njg4IDIuODg2NzE5IEMgMC43MTg3NSAyLjY3NTc4MSAwLjM3MTA5NCAyLjY3NT" + "c4MSAwLjE2MDE1NiAyLjg4NjcxOSBDIC0wLjA1NDY4NzUgMy4xMDE1NjIgLTAuMDU0Njg3NSAzLjQ0NTMxMiAwLjE2MDE1NiAzL" + "jY2MDE1NiBMIDUuNjEzMjgxIDkuMTEzMjgxIEMgNS43MTQ4NDQgOS4yMTQ4NDQgNS44NTU0NjkgOS4yNzM0MzggNiA5LjI3MzQz" + "OCBDIDYuMTQ0NTMxIDkuMjczNDM4IDYuMjg1MTU2IDkuMjE0ODQ0IDYuMzg2NzE5IDkuMTEzMjgxIEwgMTEuODM5ODQ0IDMuNjY" + "wMTU2IEMgMTIuMDU0Njg4IDMuNDQ1MzEyIDEyLjA1NDY4OCAzLjEwMTU2MiAxMS44Mzk4NDQgMi44ODY3MTkgWiBNIDExLjgzOT" + "g0NCAyLjg4NjcxOSAiLz4KPC9nPgo8L3N2Zz4K";
  this.TMSFNCGRAPHICSUPSVG = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3" + "dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTJweCI" + "gaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTIgMTIiIHZlcnNpb249IjEuMSI+CjxnIGlkPSJzdXJmYWNlMSI+CjxwYXRoIH" + "N0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZ" + "D0iTSAxMS44Mzk4NDQgOC4zMzk4NDQgTCA2LjM4NjcxOSAyLjg4NjcxOSBDIDYuMjg1MTU2IDIuNzg1MTU2IDYuMTQ0NTMxIDIu" + "NzI2NTYyIDYgMi43MjY1NjIgQyA1Ljg1NTQ2OSAyLjcyNjU2MiA1LjcxNDg0NCAyLjc4NTE1NiA1LjYxMzI4MSAyLjg4NjcxOSB" + "MIDAuMTYwMTU2IDguMzM5ODQ0IEMgLTAuMDU0Njg3NSA4LjU1NDY4OCAtMC4wNTQ2ODc1IDguODk4NDM4IDAuMTYwMTU2IDkuMT" + "EzMjgxIEMgMC4zNzEwOTQgOS4zMjQyMTkgMC43MTg3NSA5LjMyNDIxOSAwLjkyOTY4OCA5LjExMzI4MSBMIDYgNC4wNDI5NjkgT" + "CAxMS4wNzAzMTIgOS4xMTMyODEgQyAxMS4xNzU3ODEgOS4yMTg3NSAxMS4zMTY0MDYgOS4yNzM0MzggMTEuNDUzMTI1IDkuMjcz" + "NDM4IEMgMTEuNTkzNzUgOS4yNzM0MzggMTEuNzM0Mzc1IDkuMjE4NzUgMTEuODM5ODQ0IDkuMTEzMjgxIEMgMTIuMDU0Njg4IDg" + "uODk4NDM4IDEyLjA1NDY4OCA4LjU1NDY4OCAxMS44Mzk4NDQgOC4zMzk4NDQgWiBNIDExLjgzOTg0NCA4LjMzOTg0NCAiLz4KPC" + "9nPgo8L3N2Zz4K";
  this.TMSFNCGRAPHICSRIGHTSVG = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3" + "dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTJweCI" + "gaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTIgMTIiIHZlcnNpb249IjEuMSI+CjxnIGlkPSJzdXJmYWNlMSI+CjxwYXRoIH" + "N0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZ" + "D0iTSA5LjExMzI4MSA1LjYxMzI4MSBMIDMuNjYwMTU2IDAuMTYwMTU2IEMgMy40NDUzMTIgLTAuMDU0Njg3NSAzLjEwMTU2MiAt" + "MC4wNTQ2ODc1IDIuODg2NzE5IDAuMTYwMTU2IEMgMi42NzU3ODEgMC4zNzEwOTQgMi42NzU3ODEgMC43MTg3NSAyLjg4NjcxOSA" + "wLjkyOTY4OCBMIDcuOTU3MDMxIDYgTCAyLjg4NjcxOSAxMS4wNzAzMTIgQyAyLjY3NTc4MSAxMS4yODEyNSAyLjY3NTc4MSAxMS" + "42Mjg5MDYgMi44ODY3MTkgMTEuODM5ODQ0IEMgMi45OTIxODggMTEuOTQ1MzEyIDMuMTMyODEyIDEyIDMuMjczNDM4IDEyIEMgM" + "y40MTQwNjIgMTIgMy41NTA3ODEgMTEuOTQ1MzEyIDMuNjYwMTU2IDExLjgzOTg0NCBMIDkuMTEzMjgxIDYuMzg2NzE5IEMgOS4y" + "MTQ4NDQgNi4yODUxNTYgOS4yNzM0MzggNi4xNDQ1MzEgOS4yNzM0MzggNiBDIDkuMjczNDM4IDUuODU1NDY5IDkuMjE0ODQ0IDU" + "uNzE0ODQ0IDkuMTEzMjgxIDUuNjEzMjgxIFogTSA5LjExMzI4MSA1LjYxMzI4MSAiLz4KPC9nPgo8L3N2Zz4K";
  this.TMSFNCGRAPHICSLEFTSVG = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3" + "dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTJweCI" + "gaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTIgMTIiIHZlcnNpb249IjEuMSI+CjxnIGlkPSJzdXJmYWNlMSI+CjxwYXRoIH" + "N0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZ" + "D0iTSA0LjA0Mjk2OSA2IEwgOS4xMTMyODEgMC45Mjk2ODggQyA5LjMyNDIxOSAwLjcxODc1IDkuMzI0MjE5IDAuMzcxMDk0IDku" + "MTEzMjgxIDAuMTYwMTU2IEMgOC44OTg0MzggLTAuMDU0Njg3NSA4LjU1NDY4OCAtMC4wNTQ2ODc1IDguMzM5ODQ0IDAuMTYwMTU" + "2IEwgMi44ODY3MTkgNS42MTMyODEgQyAyLjc4NTE1NiA1LjcxNDg0NCAyLjcyNjU2MiA1Ljg1NTQ2OSAyLjcyNjU2MiA2IEMgMi" + "43MjY1NjIgNi4xNDQ1MzEgMi43ODUxNTYgNi4yODUxNTYgMi44ODY3MTkgNi4zODY3MTkgTCA4LjMzOTg0NCAxMS44Mzk4NDQgQ" + "yA4LjQ0OTIxOSAxMS45NDUzMTIgOC41ODU5MzggMTIgOC43MjY1NjIgMTIgQyA4Ljg2NzE4OCAxMiA5LjAwNzgxMiAxMS45NDUz" + "MTIgOS4xMTMyODEgMTEuODM5ODQ0IEMgOS4zMjQyMTkgMTEuNjI4OTA2IDkuMzI0MjE5IDExLjI4MTI1IDkuMTEzMjgxIDExLjA" + "3MDMxMiBaIE0gNC4wNDI5NjkgNiAiLz4KPC9nPgo8L3N2Zz4K";
  this.TMSFNCGRAPHICSCLOSESVG = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciI" + "HhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB2aWV3" + "Qm94PSIwIDAgMTIgMTIiIHZlcnNpb249IjEuMSI+CjxnIGlkPSJzdXJmYWNlMSI+CjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU" + "7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSA3LjA2MjUgNiBMIDExLj" + "c4MTI1IDEuMjgxMjUgQyAxMi4wNzQyMTkgMC45ODgyODEgMTIuMDc0MjE5IDAuNTExNzE5IDExLjc4MTI1IDAuMjE4NzUgQyAxM" + "S40ODgyODEgLTAuMDc0MjE4OCAxMS4wMTE3MTkgLTAuMDc0MjE4OCAxMC43MTg3NSAwLjIxODc1IEwgNiA0LjkzNzUgTCAxLjI4" + "MTI1IDAuMjE4NzUgQyAwLjk4ODI4MSAtMC4wNzQyMTg4IDAuNTExNzE5IC0wLjA3NDIxODggMC4yMTg3NSAwLjIxODc1IEMgLTA" + "uMDc0MjE4OCAwLjUxMTcxOSAtMC4wNzQyMTg4IDAuOTg4MjgxIDAuMjE4NzUgMS4yODEyNSBMIDQuOTM3NSA2IEwgMC4yMTg3NS" + "AxMC43MTg3NSBDIC0wLjA3NDIxODggMTEuMDExNzE5IC0wLjA3NDIxODggMTEuNDg4MjgxIDAuMjE4NzUgMTEuNzgxMjUgQyAwL" + "jM2NzE4OCAxMS45MjU3ODEgMC41NTg1OTQgMTIgMC43NSAxMiBDIDAuOTQxNDA2IDEyIDEuMTMyODEyIDExLjkyNTc4MSAxLjI4" + "MTI1IDExLjc4MTI1IEwgNiA3LjA2MjUgTCAxMC43MTg3NSAxMS43ODEyNSBDIDEwLjg2NzE4OCAxMS45MjU3ODEgMTEuMDU4NTk" + "0IDEyIDExLjI1IDEyIEMgMTEuNDQxNDA2IDEyIDExLjYzMjgxMiAxMS45MjU3ODEgMTEuNzgxMjUgMTEuNzgxMjUgQyAxMi4wNz" + "QyMTkgMTEuNDg4MjgxIDEyLjA3NDIxOSAxMS4wMTE3MTkgMTEuNzgxMjUgMTAuNzE4NzUgWiBNIDcuMDYyNSA2ICIvPgo8L2c+C" + "jwvc3ZnPgo=";
  $mod.$init = function () {
    pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.CreateFromResource($mod.TMSFNCGRAPHICSCLOSE);
    pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.CreateFromResource($mod.TMSFNCGRAPHICSDOWN);
    pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.CreateFromResource($mod.TMSFNCGRAPHICSRIGHT);
    pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.CreateFromResource($mod.TMSFNCGRAPHICSLEFT);
    pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.CreateFromResource($mod.TMSFNCGRAPHICSEXPAND);
    pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.CreateFromResource($mod.TMSFNCGRAPHICSPIN);
    pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.CreateFromResource($mod.TMSFNCGRAPHICSPIN2);
    pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.CreateFromResource($mod.TMSFNCGRAPHICSDOWN);
    pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.CreateFromResource($mod.TMSFNCGRAPHICSDOWN2);
    pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.CreateFromResource($mod.TMSFNCGRAPHICSUP);
    pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.CreateFromResource($mod.TMSFNCGRAPHICSUP2);
    pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.CreateFromResource($mod.TMSFNCGRAPHICSEXPANDSVG);
    pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.CreateFromResource($mod.TMSFNCGRAPHICSUPSVG);
    pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.CreateFromResource($mod.TMSFNCGRAPHICSRIGHTSVG);
    pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.CreateFromResource($mod.TMSFNCGRAPHICSLEFTSVG);
    pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.CreateFromResource($mod.TMSFNCGRAPHICSDOWNSVG);
    pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.CreateFromResource($mod.TMSFNCGRAPHICSCLOSESVG);
  };
},["SysUtils","Math","WEBLib.TMSFNCUtils","WEBLib.TMSFNCHTMLEngine","WEBLib.TMSFNCGraphics.General","WEBLib.TMSFNCGraphics.WEB"]);
//# sourceMappingURL=WEBLib.TMSFNCGraphics.js.map
