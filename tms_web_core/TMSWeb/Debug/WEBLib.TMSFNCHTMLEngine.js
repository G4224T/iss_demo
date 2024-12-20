rtl.module("WEBLib.TMSFNCHTMLEngine",["System","Classes","WEBLib.TMSFNCGraphics","Types","WEBLib.Graphics","WEBLib.TMSFNCTypes","WEBLib.TMSFNCBitmapContainer","WEBLib.TMSFNCGraphicsTypes"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.TMSFNCHTMLENGINE_ATTR_DELIM = '"';
  this.HTMLDrawEx = function (AGraphics, s, fr, XPos, YPos, FocusLink, HoverLink, ShadowOffset, CheckHotSpot, CheckHeight, Print, Selected, Blink, HoverStyle, WordWrap, ResFactor, URLColor, HoverColor, HoverFontColor, ShadowColor, AnchorVal, StripVal, FocusAnchor, XSize, YSize, HyperLinks, MouseLink, HoverRect, LineCount, LineSpacing, BitmapContainer, Opacity, HyperLinkUnderline, HighlightColor, HighlightTextColor, HighlightTextStyle) {
    var Result = false;
    var cr = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
    var cid = "";
    var cv = "";
    var ct = "";
    cid = "";
    cv = "";
    ct = "";
    cr.$assign(pas["WEBLib.TMSFNCTypes"].RectF(0,0,0,0));
    Result = $mod.HTMLDrawEx$1(AGraphics,s,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(fr),XPos,YPos,FocusLink,HoverLink,ShadowOffset,CheckHotSpot,CheckHeight,Print,Selected,Blink,HoverStyle,WordWrap,false,"",ResFactor,URLColor,HoverColor,HoverFontColor,ShadowColor,AnchorVal,StripVal,FocusAnchor,XSize,YSize,HyperLinks,MouseLink,HoverRect,cr,{get: function () {
        return cid;
      }, set: function (v) {
        cid = v;
      }},{get: function () {
        return cv;
      }, set: function (v) {
        cv = v;
      }},{get: function () {
        return ct;
      }, set: function (v) {
        ct = v;
      }},LineCount,LineSpacing,BitmapContainer,Opacity,HyperLinkUnderline,HighlightColor,HighlightTextColor,rtl.refSet(HighlightTextStyle));
    return Result;
  };
  var TFloatStyle = {"0": "fsNone", fsNone: 0, "1": "fsLeft", fsLeft: 1, "2": "fsRight", fsRight: 2};
  this.HTMLDrawEx$1 = function (AGraphics, s, fr, XPos, YPos, FocusLink, HoverLink, ShadowOffset, CheckHotSpot, CheckHeight, Print, Selected, Blink, HoverStyle, WordWrap, Down, DownID, ResFactor, URLColor, HoverColor, HoverFontColor, ShadowColor, AnchorVal, StripVal, FocusAnchor, XSize, YSize, HyperLinks, MouseLink, HoverRect, ControlRect, CID, CV, CT, LineCount, LineSpacing, BitmapContainer, Opacity, HyperLinkUnderline, HighlightColor, HighlightTextColor, HighlightTextStyle) {
    var Result = false;
    var su = "";
    var r = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
    var dr = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
    var hr = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
    var rr = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
    var htmlwidth = 0.0;
    var htmlheight = 0.0;
    var txtheight = 0.0;
    var ch = 0.0;
    var rh = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
    var Align = 0;
    var PIndent = 0;
    var OldFont = null;
    var OldFontColor = 0;
    var CalcFont = null;
    var CalcFontColor = 0;
    var DrawFont = null;
    var DrawFontCOlor = 0;
    var FontColor = 0;
    var OldPenColor = 0;
    var OldPenKind = 0;
    var OldCalcFont = null;
    var OldCalcFontColor = 0;
    var BkColor = 0;
    var BGColor = 0;
    var OldDrawFont = null;
    var OldDrawFontColor = 0;
    var Hotspot = false;
    var ImageHotspot = false;
    var Anchor = false;
    var OldAnchor = false;
    var MouseInAnchor = false;
    var error = false;
    var blnkKind = 0;
    var paracolor = 0;
    var pencolor = 0;
    var blnkcolor = 0;
    var hifcol = 0;
    var hibcol = 0;
    var LastAnchor = "";
    var OldAnchorVal = "";
    var LType = "";
    var IMGSize = pas.Types.TPoint.$new();
    var isSup = false;
    var isSub = false;
    var isPara = false;
    var isShad = false;
    var hlcount = 0;
    var licount = 0;
    var imgali = 0.0;
    var subh = 0.0;
    var suph = 0.0;
    var ListIndex = 0;
    var Invisible = false;
    var FoundTag = false;
    var nnFit = 0;
    var inspoint = 0;
    var hifStyles = {};
    var AltImg = 0;
    var ImgIdx = 0;
    var OldImgIdx = 0;
    var ColL = 0;
    var ColB = 0;
    var ofsx = 0;
    var newofsx = 0;
    var FHot = false;
    var floatrect = pas.Types.TRect.$new();
    var floatpt = pas.Types.TPoint.$new();
    var txtfloat = 0;
    var txtfloatbefore = 0;
    var imgfloat = 0;
    function FirstChar(sub, s) {
      var Result = 0;
      var i = 0;
      var j = 0;
      Result = -1;
      for (var $l = 1, $end = s.length; $l <= $end; $l++) {
        i = $l;
        for (var $l1 = 1, $end1 = sub.length; $l1 <= $end1; $l1++) {
          j = $l1;
          if (sub.charAt(j - 1) === s.charAt(i - 1)) {
            Result = i;
            return Result;
          };
        };
      };
      return Result;
    };
    function HTMLDrawLine(AGraphics, s, r, Calc, w, h, subh, suph, imgali, Align, PIndent, XPos, YPos, Hotspot, ImageHotSpot, OffsetX, NewOffsetX, floatrect, txtfloat) {
      var Result = "";
      var su = "";
      var Res = "";
      var TagProp = "";
      var Prop = "";
      var Tagp = "";
      var LineText = "";
      var dsu = "";
      var cr = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var ir = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var fs = {};
      var linebreak = false;
      var imgbreak = false;
      var linkbreak = false;
      var indent = 0;
      var bmpx = 0;
      var bmpy = 0;
      var imgw = 0;
      var imgh = 0;
      var err = 0;
      var sw = 0.0;
      var th = 0.0;
      var errs = 0.0;
      var rh = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var TagPos = 0;
      var SpacePos = 0;
      var o = 0;
      var l = 0;
      var bmp = null;
      var bmpcreated = false;
      var NewColor = 0;
      var TagWidth = 0;
      var TagHeight = 0;
      var WordLen = 0;
      var WordWidth = 0.0;
      var TagChar = "";
      var LengthFits = false;
      var ptf1 = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      var ptf2 = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      var imgalign = 0;
      var imgoffs = 0;
      var imgth = 0;
      var ControlType = "";
      var ControlWidth = "";
      var ControlHeight = "";
      var ControlID = "";
      var ControlValue = "";
      var ControlProp = "";
      var ControlLen = "";
      Result = "";
      LineText = "";
      WordWidth = 0;
      r.Bottom = r.Bottom - subh.get();
      w.set(0);
      sw = 0;
      linebreak = false;
      imgbreak = false;
      linkbreak = false;
      Hotspot.set(false);
      ImageHotSpot.set(false);
      cr.$assign(r);
      Res = "";
      if (!Calc) cr.Left = cr.Left + OffsetX;
      if (isPara && !Calc) {
        pencolor = AGraphics.FStroke.FColor;
        AGraphics.FStroke.SetColor(AGraphics.FFill.FColor);
        AGraphics.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkNone);
        AGraphics.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
        AGraphics.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(fr.Left,r.Top,fr.Right,r.Top + h.get())),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
      };
      while ((s.get().length > 0) && !linebreak && !imgbreak) {
        TagPos = pas.System.Pos("<",s.get());
        if (WordWrap) {
          SpacePos = pas.System.Pos(" ",s.get())}
         else SpacePos = 0;
        if ((TagPos > 0) && ((SpacePos > TagPos) || (SpacePos === 0))) {
          su = pas.System.Copy(s.get(),1,TagPos - 1)}
         else {
          if (SpacePos > 0) {
            su = pas.System.Copy(s.get(),1,SpacePos)}
           else su = s.get();
        };
        WordLen = su.length;
        while (pas.System.Pos("&nbsp;",su) > 0) {
          pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.TagReplaceString("&nbsp;"," ",{get: function () {
              return su;
            }, set: function (v) {
              su = v;
            }});
        };
        while (pas.System.Pos("&lt;",su) > 0) {
          pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.TagReplaceString("&lt;","<",{get: function () {
              return su;
            }, set: function (v) {
              su = v;
            }});
        };
        while (pas.System.Pos("&gt;",su) > 0) {
          pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.TagReplaceString("&gt;",">",{get: function () {
              return su;
            }, set: function (v) {
              su = v;
            }});
        };
        if (WordLen > 0) {
          rh.$assign(AGraphics.CalculateText(su,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,10000,10000)),false,false));
          th = rh.Bottom - rh.Top;
          if (isSub && (subh.get() < (th / 4))) subh.set(th / 4);
          if (isSup && (suph.get() < (th / 4))) suph.set(th / 4);
          if (th > h.get()) h.set(th);
          StripVal.set(StripVal.get() + su);
          if (Invisible) pas.System.Delete(s,1,WordLen);
          if (!Invisible) {
            if (!Calc) {
              if (isSup) cr.Bottom = cr.Bottom - suph.get();
              if (isSub) cr.Bottom = cr.Bottom + subh.get();
              cr.Bottom = cr.Bottom - imgali.get();
              rh.$assign(AGraphics.CalculateText(su,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,10000,10000)),false,false));
              errs = rh.Right - rh.Left;
              if (BkColor !== -1) {
                AGraphics.FFill.SetColor(BkColor);
                AGraphics.FStroke.SetColor(BkColor);
                AGraphics.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
                AGraphics.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
                rh.$assign(AGraphics.CalculateText$1("gh"));
                AGraphics.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(cr.Left,cr.Top,cr.Left + errs,cr.Top + (rh.Bottom - rh.Top))),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
              };
              BkColor = -1;
              if (isShad) {
                pas["WEBLib.TMSFNCTypes"].OffsetRectEx$1(cr,ShadowOffset,ShadowOffset);
                AGraphics.FFont.SetColor(ShadowColor);
                AGraphics.DrawText$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(cr),su,false,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaLeading,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextTrimming.gttNone,0,-1,-1,false,false,-1,-1);
                pas["WEBLib.TMSFNCTypes"].OffsetRectEx$1(cr,-ShadowOffset,-ShadowOffset);
                AGraphics.FFont.SetColor(OldFontColor);
              };
              if ((su !== "") && (su.charAt(su.length - 1) === " ") && Anchor) {
                dsu = su + "\x00"}
               else dsu = su;
              AGraphics.FFont.SetColor(FontColor);
              AGraphics.DrawText$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(cr),dsu,false,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaLeading,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextTrimming.gttNone,0,-1,-1,false,false,-1,-1);
              cr.Right = cr.Left + errs;
              if (Anchor && ((HyperLinks.get() - 1) === FocusLink)) FocusAnchor.set(LastAnchor);
              if (error) {
                AGraphics.FStroke.SetColor(255);
                AGraphics.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
                AGraphics.FStroke.SetWidth(1);
                l = Math.round((cr.Left / 2) * 2);
                if ((l % 4) === 0) {
                  o = 2}
                 else o = 0;
                while (l < cr.Right) {
                  ptf1.$assign(pas["WEBLib.TMSFNCTypes"].PointF(l,(r.Bottom + o) - 1));
                  if (o === 2) {
                    o = 0}
                   else o = 2;
                  ptf2.$assign(pas["WEBLib.TMSFNCTypes"].PointF(l + 2,(r.Bottom + o) - 1));
                  AGraphics.DrawLine$1(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(ptf1),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(ptf2),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
                  l += 2;
                };
              };
              cr.Left = cr.Right;
              cr.Right = r.Right;
              cr.Bottom = r.Bottom;
              cr.Top = r.Top;
            } else {
              cr.$assign(r);
              rh.$assign(AGraphics.CalculateText(su,pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(0,0,10000,10000)),false,false));
              cr.Right = cr.Left + (rh.Right - rh.Left);
              if ((YPos > cr.Top) && (YPos < cr.Bottom) && (XPos > w.get())) {
                nnFit = 0;
                if (nnFit === WordLen) {
                  inspoint = inspoint + WordLen}
                 else inspoint = inspoint + nnFit;
              };
              WordWidth = cr.Right - cr.Left;
              w.set(w.get() + WordWidth);
              if (((XPos - cr.Left) >= (w.get() - WordWidth)) && ((XPos - cr.Left) <= w.get()) && Anchor) {
                Hotspot.set(true);
                if (YPos > cr.Top) {
                  AnchorVal.set(LastAnchor);
                  MouseInAnchor = true;
                };
              };
            };
            LengthFits = ((w.get() + PIndent.get()) < ((r.Right - r.Left - ofsx) + 1)) || ((r.Right - r.Left - ofsx) <= WordWidth);
            LineText = LineText + su;
            if (LengthFits || !WordWrap) {
              Res = Res + pas.System.Copy(s.get(),1,WordLen);
              pas.System.Delete(s,1,WordLen);
              if (su.length >= WordLen) {
                if (pas.System.Copy(su,WordLen,1) === " ") {
                  rh.$assign(AGraphics.CalculateText$1(" "));
                  sw = rh.Right - rh.Left;
                } else sw = 0;
              } else sw = 0;
            } else {
              linebreak = true;
              w.set(w.get() - WordWidth);
            };
          };
        };
        TagPos = pas.System.Pos("<",s.get());
        if ((TagPos === 1) && (s.get().length <= 2)) s.set("");
        if (!linebreak && (TagPos === 1) && (s.get().length > 2)) {
          if ((s.get().charAt(1) === "/") && (s.get().length > 3)) {
            var $tmp = pas.System.upcase(s.get().charAt(2));
            if ($tmp === "A") {
              if ((!HoverStyle || (HoverLink === HyperLinks.get())) && !Calc) {
                AGraphics.FFont.SetStyle(rtl.diffSet(AGraphics.FFont.FStyle,rtl.createSet(pas["WEBLib.Graphics"].TFontStyle.fsUnderline)));
                if (HoverColor !== -1) BkColor = HoverColor;
                if (HoverFontColor !== -1) FontColor = HoverFontColor;
              };
              if (!Selected) FontColor = OldFontColor;
              Anchor = false;
              if (MouseInAnchor) {
                hr.Bottom = r.Bottom;
                hr.Right = r.Left + w.get();
                if (r.Top !== hr.Top) {
                  hr.Left = r.Left;
                  hr.Top = r.Top;
                };
                HoverRect.$assign(hr);
                MouseLink.set(HyperLinks.get());
                MouseInAnchor = false;
              };
              if (FocusLink === (HyperLinks.get() - 1)) {
                rr.Right = cr.Left;
                rr.Bottom = cr.Bottom - imgali.get();
                rh.$assign(AGraphics.CalculateText$1("gh"));
                rr.Top = rr.Bottom - (rh.Bottom - rh.Top);
                pas["WEBLib.TMSFNCTypes"].InflateRectEx(rr,1,0);
              };
            } else if ($tmp === "E") {
              if (!Calc) error = false;
            } else if ($tmp === "B") {
              if (s.get().charAt(3) !== ">") {
                FontColor = OldFontColor}
               else AGraphics.FFont.SetStyle(rtl.diffSet(AGraphics.FFont.FStyle,rtl.createSet(pas["WEBLib.Graphics"].TFontStyle.fsBold)));
            } else if ($tmp === "S") {
              TagChar = pas.System.upcase(s.get().charAt(3));
              if (TagChar === "U") {
                isSup = false;
                isSub = false;
              } else if (TagChar === "H") {
                isShad = false}
               else AGraphics.FFont.SetStyle(rtl.diffSet(AGraphics.FFont.FStyle,rtl.createSet(pas["WEBLib.Graphics"].TFontStyle.fsStrikeOut)));
            } else if ($tmp === "F") {
              AGraphics.FFont.SetName(OldFont.FName);
              AGraphics.FFont.SetSize(OldFont.FSize);
              if (!Calc && !Selected) {
                FontColor = OldFontColor;
                AGraphics.FFill.SetColor(BGColor);
              };
            } else if ($tmp === "H") {
              if (!Calc) {
                FontColor = hifcol;
                BkColor = hibcol;
                AGraphics.FFont.SetStyle(rtl.refSet(hifStyles));
                AGraphics.FFill.SetColor(hibcol);
              };
            } else if ($tmp === "I") {
              AGraphics.FFont.SetStyle(rtl.diffSet(AGraphics.FFont.FStyle,rtl.createSet(pas["WEBLib.Graphics"].TFontStyle.fsItalic)));
            } else if ($tmp === "L") {
              linebreak = true;
            } else if ($tmp === "O") {
              NewOffsetX.set(0);
            } else if ($tmp === "P") {
              linebreak = true;
              if (!Calc) {
                AGraphics.FFill.SetColor(paracolor);
                isPara = false;
              };
            } else if ($tmp === "U") {
              if ((s.get().charAt(3) !== ">") && (ListIndex > 0)) {
                ListIndex -= 1}
               else AGraphics.FFont.SetStyle(rtl.diffSet(AGraphics.FFont.FStyle,rtl.createSet(pas["WEBLib.Graphics"].TFontStyle.fsUnderline)));
            } else if ($tmp === "R") {}
            else if ($tmp === "Z") Invisible = false;
          } else {
            var $tmp1 = pas.System.upcase(s.get().charAt(1));
            if ($tmp1 === "A") {
              if ((FocusLink === HyperLinks.get()) && !Calc) {
                rr.Left = cr.Left;
                rr.Top = cr.Top;
              };
              HyperLinks.set(HyperLinks.get() + 1);
              if ((!HoverStyle || (HoverLink === HyperLinks.get())) && !Calc) {
                if (HyperLinkUnderline) AGraphics.FFont.SetStyle(rtl.unionSet(AGraphics.FFont.FStyle,rtl.createSet(pas["WEBLib.Graphics"].TFontStyle.fsUnderline)));
                if ((HoverColor !== -1) && !Calc) BkColor = HoverColor;
                if (HoverFontColor !== -1) FontColor = HoverFontColor;
              };
              if (!Selected && ((HoverFontColor === -1) || (HoverLink !== HyperLinks.get()) || !HoverStyle)) {
                OldFontColor = FontColor;
                FontColor = URLColor;
              };
              TagProp = pas.System.Copy(s.get(),3,pas.System.Pos(">",s.get()) - 1);
              Prop = pas.System.Copy(TagProp,pas.System.Pos('"',TagProp) + 1,TagProp.length);
              Prop = pas.System.Copy(Prop,1,pas.System.Pos('"',Prop) - 1);
              LastAnchor = Prop;
              Anchor = true;
              hr.Left = w.get();
              hr.Top = r.Top;
            } else if ($tmp1 === "B") {
              TagChar = pas.System.upcase(s.get().charAt(2));
              var $tmp2 = TagChar;
              if ($tmp2 === ">") {
                AGraphics.FFont.SetStyle(rtl.unionSet(AGraphics.FFont.FStyle,rtl.createSet(pas["WEBLib.Graphics"].TFontStyle.fsBold)))}
               else if ($tmp2 === "R") {
                linebreak = true;
                StripVal.set(StripVal.get() + "\r");
              } else if ($tmp2 === "L") {
                if (!Blink) FontColor = blnkcolor}
               else if ($tmp2 === "O") {
                bmpy = 0;
                Res = Res + pas.System.Copy(s.get(),1,pas.System.Pos(">",s.get()));
                if (!Calc && !Selected) {
                  TagProp = pas.SysUtils.UpperCase(pas.System.Copy(s.get(),6,pas.System.Pos(">",s.get()) - 1));
                  if (pas.System.Pos("BACKGROUND",TagProp) > 0) {
                    Prop = pas.System.Copy(TagProp,pas.System.Pos("BACKGROUND",TagProp) + 10,TagProp.length);
                    Prop = pas.System.Copy(Prop,pas.System.Pos('"',Prop) + 1,Prop.length);
                    Prop = pas.System.Copy(Prop,1,pas.System.Pos('"',Prop) - 1);
                    if (pas.System.Pos("IDX:",pas.SysUtils.UpperCase(Prop)) > 0) {
                      pas.System.Delete({get: function () {
                          return Prop;
                        }, set: function (v) {
                          Prop = v;
                        }},1,4);
                    };
                    bmp = null;
                    bmpcreated = false;
                    if ((pas.System.Pos(":",Prop) === 0) && (BitmapContainer != null)) {
                      bmp = BitmapContainer.FindBitmap$1(Prop);
                    };
                    if (pas.System.Pos("URL://",pas.SysUtils.UpperCase(Prop)) > 0) {
                      pas.System.Delete({get: function () {
                          return Prop;
                        }, set: function (v) {
                          Prop = v;
                        }},1,6);
                      bmp = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.CreateFromURL(Prop);
                      bmpcreated = true;
                    };
                    if (bmp != null) {
                      if (!pas["WEBLib.TMSFNCTypes"].IsBitmapEmpty(bmp) && (bmp.GetWidth() > 0) && (bmp.GetHeight() > 0)) {
                        while (bmpy < (fr.Bottom - fr.Top)) {
                          bmpx = 0;
                          while (bmpx < (fr.Right - fr.Left)) {
                            AGraphics.DrawBitmap$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(Math.round(fr.Left + bmpx),Math.round(fr.Top + bmpy),Math.round(fr.Left + bmpx) + bmp.GetWidth(),Math.round(fr.Top + bmpy) + bmp.GetHeight())),bmp,true,false,true,false);
                            bmpx = bmpx + bmp.GetWidth();
                          };
                          bmpy = bmpy + bmp.GetHeight();
                        };
                      };
                      if (bmpcreated) bmp = rtl.freeLoc(bmp);
                    };
                  };
                  if (pas.System.Pos("BGTOPLEFT",TagProp) > 0) {
                    Prop = pas.System.Copy(TagProp,pas.System.Pos("BGTOPLEFT",TagProp) + 10,TagProp.length);
                    Prop = pas.System.Copy(Prop,pas.System.Pos('"',Prop) + 1,Prop.length);
                    Prop = pas.System.Copy(Prop,1,pas.System.Pos('"',Prop) - 1);
                    bmp = null;
                    if ((pas.System.Pos(":",Prop) === 0) && (BitmapContainer != null)) {
                      bmp = BitmapContainer.FindBitmap$1(Prop);
                    };
                    if (bmp != null) {
                      if (!pas["WEBLib.TMSFNCTypes"].IsBitmapEmpty(bmp) && (bmp.GetWidth() > 0) && (bmp.GetHeight() > 0)) {
                        AGraphics.DrawBitmap$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(Math.round(fr.Left),Math.round(fr.Top + bmpy),Math.round(fr.Left) + bmp.GetWidth(),Math.round(fr.Top) + bmp.GetHeight())),bmp,true,false,true,false);
                      };
                    };
                  };
                  if (pas.System.Pos("BGTOPRIGHT",TagProp) > 0) {
                    Prop = pas.System.Copy(TagProp,pas.System.Pos("BGTOPRIGHT",TagProp) + 10,TagProp.length);
                    Prop = pas.System.Copy(Prop,pas.System.Pos('"',Prop) + 1,Prop.length);
                    Prop = pas.System.Copy(Prop,1,pas.System.Pos('"',Prop) - 1);
                    bmp = null;
                    if ((pas.System.Pos(":",Prop) === 0) && (BitmapContainer != null)) {
                      bmp = BitmapContainer.FindBitmap$1(Prop);
                    };
                    if (bmp != null) {
                      if (!pas["WEBLib.TMSFNCTypes"].IsBitmapEmpty(bmp) && (bmp.GetWidth() > 0) && (bmp.GetHeight() > 0)) {
                        AGraphics.DrawBitmap$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(Math.round(fr.Right) - bmp.GetWidth(),Math.round(fr.Top + bmpy),Math.round(fr.Right),Math.round(fr.Top) + bmp.GetHeight())),bmp,true,false,true,false);
                      };
                    };
                  };
                  if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.VarPos("BGCOLOR",TagProp,{get: function () {
                      return TagPos;
                    }, set: function (v) {
                      TagPos = v;
                    }}) > 0) {
                    Prop = pas.System.Copy(TagProp,TagPos + 5,TagProp.length);
                    Prop = pas.System.Copy(Prop,pas.System.Pos('"',Prop) + 1,Prop.length);
                    Prop = pas.System.Copy(Prop,1,pas.System.Pos('"',Prop) - 1);
                    NewColor = -1;
                    if (Prop.length > 0) {
                      if (Prop.charAt(0) === "#") {
                        NewColor = pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.HTMLToColor(Prop)}
                       else {
                        NewColor = pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.TextToColor(pas.SysUtils.LowerCase(Prop));
                      };
                    };
                    if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.VarPos("BGCOLORTO",TagProp,{get: function () {
                        return TagPos;
                      }, set: function (v) {
                        TagPos = v;
                      }}) > 0) {
                      Prop = pas.System.Copy(TagProp,TagPos + 5,TagProp.length);
                      Prop = pas.System.Copy(Prop,pas.System.Pos('"',Prop) + 1,Prop.length);
                      Prop = pas.System.Copy(Prop,1,pas.System.Pos('"',Prop) - 1);
                      Prop = "H";
                      if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.VarPos("DIR",TagProp,{get: function () {
                          return TagPos;
                        }, set: function (v) {
                          TagPos = v;
                        }}) > 0) {
                        Prop = pas.System.Copy(TagProp,TagPos + 3,TagProp.length);
                        Prop = pas.System.Copy(Prop,pas.System.Pos('"',Prop) + 1,Prop.length);
                        Prop = pas.System.Copy(Prop,1,pas.System.Pos('"',Prop) - 1);
                      };
                      AGraphics.FStroke.SetColor(NewColor);
                    } else {
                      BGColor = AGraphics.FFill.FColor;
                      AGraphics.FFill.SetColor(NewColor);
                      pencolor = AGraphics.FStroke.FColor;
                      AGraphics.FStroke.SetColor(NewColor);
                      AGraphics.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
                      AGraphics.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
                      AGraphics.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(fr.Left - 2,fr.Top,fr.Right,fr.Bottom)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
                      AGraphics.FStroke.SetColor(pencolor);
                    };
                  };
                };
              };
            } else if ($tmp1 === "E") {
              if (!Calc) error = true;
            } else if ($tmp1 === "C") {
              TagProp = pas.System.Copy(s.get(),9,pas.System.Pos(">",s.get()) - 1);
              ControlType = "";
              ControlID = "";
              ControlValue = "";
              ControlWidth = "";
              ControlHeight = "";
              ControlProp = "";
              ControlLen = "";
              $mod.ParseControl(TagProp,{get: function () {
                  return ControlType;
                }, set: function (v) {
                  ControlType = v;
                }},{get: function () {
                  return ControlID;
                }, set: function (v) {
                  ControlID = v;
                }},{get: function () {
                  return ControlValue;
                }, set: function (v) {
                  ControlValue = v;
                }},{get: function () {
                  return ControlWidth;
                }, set: function (v) {
                  ControlWidth = v;
                }},{get: function () {
                  return ControlHeight;
                }, set: function (v) {
                  ControlHeight = v;
                }},{get: function () {
                  return ControlProp;
                }, set: function (v) {
                  ControlProp = v;
                }},{get: function () {
                  return ControlLen;
                }, set: function (v) {
                  ControlLen = v;
                }});
              ch = 25;
              if (ControlHeight !== "") {
                pas.System.val$8(ControlHeight,{get: function () {
                    return ch;
                  }, set: function (v) {
                    ch = v;
                  }},{get: function () {
                    return err;
                  }, set: function (v) {
                    err = v;
                  }});
                if (err !== 0) ch = 25;
              };
              if ((ControlWidth !== "") || (ControlType === "CHECK") || (ControlType === "RADIO")) {
                pas.System.val$6(ControlWidth,{get: function () {
                    return indent;
                  }, set: function (v) {
                    indent = v;
                  }},{get: function () {
                    return err;
                  }, set: function (v) {
                    err = v;
                  }});
                if (err === 0) {
                  IMGSize.x = indent;
                  IMGSize.y = Math.round(AGraphics.CalculateTextHeight$1("gh")) + 10;
                };
                if ((ControlType === "CHECK") || (ControlType === "RADIO")) {
                  h.set(16)}
                 else h.set(23);
                if (ch > 25) h.set(ch - 2);
                if (!Calc) {
                  if ((ControlType === "EDIT") || (ControlType === "PASSWORD") || (ControlType === "MASK")) ;
                  if (ControlType === "COMBO") ;
                  if (ControlType === "CHECK") {
                    IMGSize.x = Math.round(16 * ResFactor) + 2;
                    IMGSize.y = IMGSize.x;
                    indent = IMGSize.x;
                    ir.$assign(pas["WEBLib.TMSFNCTypes"].RectF(cr.Left + 1,cr.Top + ((cr.Bottom - cr.Top - (IMGSize.y - 2)) / 2),(cr.Left + IMGSize.x) - 1,cr.Top + ((cr.Bottom - cr.Top - (IMGSize.y - 2)) / 2) + (IMGSize.y - 2)));
                    ir.$assign(pas["WEBLib.TMSFNCTypes"].RectF(Math.round(ir.Left),Math.round(ir.Top),Math.round(ir.Right),Math.round(ir.Bottom)));
                    AGraphics.DrawCheckBox(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ir),pas.SysUtils.UpperCase(ControlValue) === "TRUE",Down && (DownID === ControlID),true,1.0);
                  };
                  if (ControlType === "RADIO") {
                    IMGSize.x = Math.round(16 * ResFactor) + 2;
                    IMGSize.y = IMGSize.x;
                    indent = IMGSize.x;
                    ir.$assign(pas["WEBLib.TMSFNCTypes"].RectF(cr.Left + 1,cr.Top + ((cr.Bottom - cr.Top - (IMGSize.y - 2)) / 2),(cr.Left + IMGSize.x) - 1,cr.Top + ((cr.Bottom - cr.Top - (IMGSize.y - 2)) / 2) + (IMGSize.y - 2)));
                    ir.$assign(pas["WEBLib.TMSFNCTypes"].RectF(Math.round(ir.Left),Math.round(ir.Top),Math.round(ir.Right),Math.round(ir.Bottom)));
                    AGraphics.DrawRadioButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ir),pas.SysUtils.UpperCase(ControlValue) === "TRUE",Down && (DownID === ControlID),true,1.0);
                  };
                  if (ControlType === "BUTTON") {
                    IMGSize.y = 22;
                    ir.$assign(pas["WEBLib.TMSFNCTypes"].RectF(cr.Left + 2,cr.Top + ((cr.Bottom - cr.Top - IMGSize.y) / 2),(cr.Left + indent) - 2,cr.Top + ((cr.Bottom - cr.Top - IMGSize.y) / 2) + IMGSize.y));
                    FHot = pas["WEBLib.TMSFNCTypes"].PtInRectEx(ir,pas["WEBLib.TMSFNCTypes"].PointF(XPos,YPos));
                    ir.$assign(pas["WEBLib.TMSFNCTypes"].RectF(Math.round(ir.Left),Math.round(ir.Top),Math.round(ir.Right),Math.round(ir.Bottom)));
                    AGraphics.DrawButton(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ir),Down && (DownID === ControlID),FHot,true,true,1.0);
                    pas["WEBLib.TMSFNCTypes"].InflateRectEx(ir,-2,-2);
                    AGraphics.DrawText$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(ir),ControlValue,false,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextTrimming.gttNone,0,-1,-1,true,false,-1,-1);
                  };
                };
                if (ControlType === "BUTTON") IMGSize.y = 22;
                if (ControlType === "COMBO") IMGSize.y = 25;
                if ((ControlType === "CHECK") || (ControlType === "RADIO")) {
                  IMGSize.x = Math.round(16 * ResFactor) + 2;
                  IMGSize.y = IMGSize.x;
                };
                if ((((XPos - r.Left) > w.get()) && ((XPos - r.Left) < (w.get() + IMGSize.x)) && (YPos > cr.Top) && (YPos < (cr.Top + IMGSize.y))) || (CheckHotSpot && (CID.get() === ControlID))) {
                  ImageHotSpot.set(true);
                  AnchorVal.set("ctrl");
                  AltImg = ImgIdx;
                  ir.Left = r.Left + w.get();
                  ir.Right = ir.Left + IMGSize.x;
                  ir.Top = cr.Top;
                  ir.Bottom = cr.Top + IMGSize.y;
                  ControlRect.$assign(ir);
                  CV.set(ControlValue);
                  CID.set(ControlID);
                  CT.set(ControlType);
                };
                if (((w.get() + IMGSize.x) > (r.Right - r.Left)) && (IMGSize.x < (r.Right - r.Left))) {
                  imgbreak = true;
                } else {
                  w.set(w.get() + IMGSize.x);
                  cr.Left = cr.Left + IMGSize.x;
                  if (IMGSize.y > h.get()) h.set(IMGSize.y);
                };
              };
            } else if ($tmp1 === "H") {
              var $tmp3 = pas.System.upcase(s.get().charAt(2));
              if ($tmp3 === "R") {
                linebreak = true;
                if (!Calc) {
                  TagProp = pas.System.Copy(s.get(),4,pas.System.Pos(">",s.get()) - 1);
                  NewColor = 0;
                  if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.VarPos("COLOR",pas.SysUtils.UpperCase(TagProp),{get: function () {
                      return TagPos;
                    }, set: function (v) {
                      TagPos = v;
                    }}) > 0) {
                    Prop = pas.System.Copy(TagProp,TagPos + 5,TagProp.length);
                    Prop = pas.System.Copy(Prop,pas.System.Pos('"',Prop) + 1,Prop.length);
                    Prop = pas.System.Copy(Prop,1,pas.System.Pos('"',Prop) - 1);
                    if (Prop.length > 0) {
                      if (Prop.charAt(0) === "#") {
                        NewColor = pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.HTMLToColor(Prop)}
                       else {
                        NewColor = pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.TextToColor(pas.SysUtils.LowerCase(Prop));
                      };
                    };
                  };
                  AGraphics.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
                  pencolor = AGraphics.FStroke.FColor;
                  AGraphics.FStroke.SetColor(NewColor);
                  ptf1.$assign(pas["WEBLib.TMSFNCTypes"].PointF(r.Left,cr.Bottom + 1));
                  ptf2.$assign(pas["WEBLib.TMSFNCTypes"].PointF(r.Right,cr.Bottom + 1));
                  AGraphics.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
                  AGraphics.DrawLine$1(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(ptf1),pas["WEBLib.TMSFNCTypes"].TPointF.$clone(ptf2),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyPointMode.gcpmRightDown);
                  AGraphics.FStroke.SetColor(pencolor);
                };
              } else if ($tmp3 === "I") {
                if (!Calc) {
                  hifcol = FontColor;
                  hibcol = BkColor;
                  hifStyles = rtl.refSet(AGraphics.FFont.FStyle);
                  BkColor = HighlightColor;
                  FontColor = HighlightTextColor;
                };
                AGraphics.FFont.SetStyle(rtl.refSet(HighlightTextStyle));
              };
            } else if ($tmp1 === "I") {
              TagChar = pas.System.upcase(s.get().charAt(2));
              if (TagChar === ">") {
                AGraphics.FFont.SetStyle(rtl.unionSet(AGraphics.FFont.FStyle,rtl.createSet(pas["WEBLib.Graphics"].TFontStyle.fsItalic)))}
               else if (TagChar === "N") {
                TagProp = pas.System.Copy(s.get(),3,pas.System.Pos(">",s.get()) - 1);
                Prop = pas.System.Copy(TagProp,pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.IPos("x",TagProp) + 2,TagProp.length);
                Prop = pas.System.Copy(Prop,pas.System.Pos('"',Prop) + 1,Prop.length);
                Prop = pas.System.Copy(Prop,1,pas.System.Pos('"',Prop) - 1);
                pas.System.val$6(Prop,{get: function () {
                    return indent;
                  }, set: function (v) {
                    indent = v;
                  }},{get: function () {
                    return err;
                  }, set: function (v) {
                    err = v;
                  }});
                if (err === 0) {
                  if (indent > w.get()) {
                    w.set(indent);
                    cr.Left = fr.Left + indent;
                  };
                };
              } else if (TagChar === "M") {
                imgalign = 0;
                imgoffs = 0;
                imgfloat = TFloatStyle.fsNone;
                imgth = Math.round(AGraphics.CalculateTextHeight$1("gh"));
                ImgIdx += 1;
                ir.$assign(cr);
                TagProp = pas.System.Copy(s.get(),3,pas.System.Pos(">",s.get()) - 1);
                Prop = pas.System.Copy(TagProp,pas.System.Pos("SRC",pas.SysUtils.UpperCase(TagProp)) + 4,TagProp.length);
                Prop = pas.System.Copy(Prop,pas.System.Pos('"',Prop) + 1,Prop.length);
                Prop = pas.System.Copy(Prop,1,pas.System.Pos('"',Prop) - 1);
                TagProp = pas.SysUtils.UpperCase(TagProp);
                if ((pas.System.Pos("ALT",TagProp) > 0) && (AltImg === ImgIdx)) {
                  Prop = pas.System.Copy(TagProp,pas.System.Pos("ALT",TagProp) + 4,TagProp.length);
                  Prop = pas.System.Copy(Prop,pas.System.Pos('"',Prop) + 1,Prop.length);
                  Prop = pas.System.Copy(Prop,1,pas.System.Pos('"',Prop) - 1);
                };
                TagWidth = 0;
                TagHeight = 0;
                if (pas.System.Pos("WIDTH",TagProp) > 0) {
                  Tagp = pas.System.Copy(TagProp,pas.System.Pos("WIDTH",TagProp) + 6,TagProp.length);
                  Tagp = pas.System.Copy(Tagp,pas.System.Pos('"',Tagp) + 1,Tagp.length);
                  Tagp = pas.System.Copy(Tagp,1,pas.System.Pos('"',Tagp) - 1);
                  pas.System.val$6(Tagp,{get: function () {
                      return TagWidth;
                    }, set: function (v) {
                      TagWidth = v;
                    }},{get: function () {
                      return err;
                    }, set: function (v) {
                      err = v;
                    }});
                };
                if (pas.System.Pos("HEIGHT",TagProp) > 0) {
                  Tagp = pas.System.Copy(TagProp,pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.IPos("HEIGHT",TagProp) + 7,TagProp.length);
                  Tagp = pas.System.Copy(Tagp,pas.System.Pos('"',Tagp) + 1,Tagp.length);
                  Tagp = pas.System.Copy(Tagp,1,pas.System.Pos('"',Tagp) - 1);
                  pas.System.val$6(Tagp,{get: function () {
                      return TagHeight;
                    }, set: function (v) {
                      TagHeight = v;
                    }},{get: function () {
                      return err;
                    }, set: function (v) {
                      err = v;
                    }});
                };
                if (pas.System.Pos("ALIGN",TagProp) > 0) {
                  Tagp = pas.System.Copy(TagProp,pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.IPos("ALIGN",TagProp) + 6,TagProp.length);
                  Tagp = pas.System.Copy(Tagp,pas.System.Pos('"',Tagp) + 1,Tagp.length);
                  Tagp = pas.System.Copy(Tagp,1,pas.System.Pos('"',Tagp) - 1);
                  if (Tagp === "MIDDLE") imgalign = 1;
                  if (Tagp === "TOP") imgalign = 2;
                };
                if (pas.System.Pos("FLOAT",TagProp) > 0) {
                  Tagp = pas.System.Copy(TagProp,pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.IPos("FLOAT",TagProp) + 6,TagProp.length);
                  Tagp = pas.System.Copy(Tagp,pas.System.Pos('"',Tagp) + 1,Tagp.length);
                  Tagp = pas.System.Copy(Tagp,1,pas.System.Pos('"',Tagp) - 1);
                  if (Tagp === "LEFT") {
                    imgfloat = TFloatStyle.fsLeft;
                    ir.Left = fr.Left;
                  };
                  if (Tagp === "RIGHT") imgfloat = TFloatStyle.fsRight;
                };
                IMGSize.x = 0;
                IMGSize.y = 0;
                if (pas.System.Pos("IDX:",pas.SysUtils.UpperCase(Prop)) > 0) {
                  pas.System.Delete({get: function () {
                      return Prop;
                    }, set: function (v) {
                      Prop = v;
                    }},1,4);
                };
                bmp = null;
                bmpcreated = false;
                if ((pas.System.Pos(":",Prop) === 0) && (BitmapContainer != null)) {
                  bmp = BitmapContainer.FindBitmap$1(Prop);
                };
                if (pas.System.Pos("URL://",pas.SysUtils.UpperCase(Prop)) > 0) {
                  pas.System.Delete({get: function () {
                      return Prop;
                    }, set: function (v) {
                      Prop = v;
                    }},1,6);
                  bmp = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.CreateFromURL(Prop);
                  bmpcreated = true;
                };
                if (pas.System.Pos("DATA:",pas.SysUtils.UpperCase(Prop)) > 0) {
                  if (pas.System.Pos("BASE64,",pas.SysUtils.UpperCase(Prop)) > 0) {
                    pas.System.Delete({get: function () {
                        return Prop;
                      }, set: function (v) {
                        Prop = v;
                      }},1,pas.System.Pos("BASE64,",pas.SysUtils.UpperCase(Prop)) + 6);
                    bmp = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
                    pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.LoadBitmapFromBase64(Prop,bmp,false);
                    bmpcreated = true;
                  };
                };
                imgw = 0;
                imgh = 0;
                if (bmp != null) {
                  if (!pas["WEBLib.TMSFNCTypes"].IsBitmapEmpty(bmp)) {
                    if ((TagWidth > 0) && (TagHeight > 0)) {
                      imgw = TagWidth;
                      imgh = TagHeight;
                    };
                    if ((TagWidth > 0) && (TagHeight === 0)) {
                      imgw = TagWidth;
                      imgh = Math.round((TagWidth / bmp.GetWidth()) * bmp.GetHeight());
                    };
                    if ((TagWidth === 0) && (TagHeight > 0)) {
                      imgw = Math.round((TagHeight / bmp.GetHeight()) * bmp.GetWidth());
                      imgh = TagHeight;
                    };
                    if ((TagWidth === 0) && (TagHeight === 0)) {
                      imgw = bmp.GetWidth();
                      imgh = bmp.GetHeight();
                    };
                    if (imgfloat === TFloatStyle.fsRight) ir.Left = r.Right - imgw;
                    if (!Calc) {
                      if ((TagWidth > 0) || (TagHeight > 0)) {
                        AGraphics.DrawBitmap$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(Math.round(ir.Left),Math.round(ir.Top),Math.round(ir.Left) + imgw,Math.round(ir.Top) + imgh)),bmp,true,false,true,false);
                      } else if ((TagWidth > 0) && (TagHeight === 0)) {
                        AGraphics.DrawBitmap$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(Math.round(ir.Left),Math.round(ir.Top),Math.round(ir.Left) + TagWidth,Math.round(ir.Top) + TagHeight)),bmp,true,false,true,false);
                      } else {
                        AGraphics.DrawBitmap$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(Math.round(ir.Left),Math.round(ir.Top),Math.round(ir.Left) + bmp.GetWidth(),Math.round(ir.Top) + bmp.GetHeight())),bmp,true,false,true,false);
                      };
                    };
                    if ((TagWidth > 0) || (TagHeight > 0)) {
                      IMGSize.x = imgw;
                      IMGSize.y = imgh;
                    } else {
                      IMGSize.x = bmp.GetWidth();
                      IMGSize.y = bmp.GetHeight();
                    };
                  };
                  if (bmpcreated) bmp = rtl.freeLoc(bmp);
                };
                if (((XPos - r.Left) > w.get()) && ((XPos - r.Left) < (w.get() + IMGSize.x)) && (YPos > cr.Top) && (YPos < (cr.Top + IMGSize.y)) && Anchor) {
                  ImageHotSpot.set(true);
                  AnchorVal.set(LastAnchor);
                  AltImg = ImgIdx;
                };
                if (((w.get() + IMGSize.x) > (r.Right - r.Left)) && (IMGSize.x < (r.Right - r.Left))) {
                  imgbreak = true;
                } else {
                  w.set(w.get() + IMGSize.x + 2);
                  cr.Left = cr.Left + IMGSize.x + 2;
                  if (IMGSize.y > h.get()) h.set(IMGSize.y);
                };
                if (pas.System.Pos("ALIGN",TagProp) > 0) {
                  if (pas.System.Pos('"TOP',TagProp) > 0) {
                    rh.$assign(AGraphics.CalculateText$1("gh"));
                    imgali.set(h.get() - (rh.Bottom - rh.Top));
                  } else {
                    if (pas.System.Pos('"MIDDLE',TagProp) > 0) {
                      rh.$assign(AGraphics.CalculateText$1("gh"));
                      imgali.set((h.get() - (rh.Bottom - rh.Top)) / 2);
                    };
                  };
                };
                if (pas.System.Pos("WRAP",TagProp) > 0) {
                  rh.$assign(AGraphics.CalculateText$1("gh"));
                  h.set(rh.Bottom - rh.Top);
                  imgali.set(0);
                };
                if (imgfloat === TFloatStyle.fsLeft) {
                  rh.$assign(AGraphics.CalculateText$1("gh"));
                  imgali.set(h.get() - (rh.Bottom - rh.Top));
                  floatrect.Left = imgw;
                  floatrect.Bottom = imgh;
                  if (!Calc) {
                    rh.$assign(AGraphics.CalculateText$1("gh"));
                    h.set(rh.Bottom - rh.Top);
                  };
                };
                if (imgfloat === TFloatStyle.fsRight) {
                  rh.$assign(AGraphics.CalculateText$1("gh"));
                  imgali.set(h.get() - (rh.Bottom - rh.Top));
                  floatrect.Right = imgw;
                  floatrect.Bottom = imgh;
                  if (!Calc) {
                    rh.$assign(AGraphics.CalculateText$1("gh"));
                    h.set(rh.Bottom - rh.Top);
                  };
                  w.set(fr.Right);
                };
              };
            } else if ($tmp1 === "L") {
              NewColor = -1;
              LType = "";
              if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.VarPos(">",s.get(),{get: function () {
                  return TagPos;
                }, set: function (v) {
                  TagPos = v;
                }}) > 0) {
                TagProp = pas.SysUtils.UpperCase(pas.System.Copy(s.get(),3,TagPos - 1));
                if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.VarPos("TYPE",TagProp,{get: function () {
                    return TagPos;
                  }, set: function (v) {
                    TagPos = v;
                  }}) > 0) {
                  Prop = pas.System.Copy(TagProp,TagPos + 4,TagProp.length);
                  Prop = pas.System.Copy(Prop,pas.System.Pos('"',Prop) + 1,Prop.length);
                  Prop = pas.System.Copy(Prop,1,pas.System.Pos('"',Prop) - 1);
                  LType = Prop;
                };
                if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.VarPos("COLOR",TagProp,{get: function () {
                    return TagPos;
                  }, set: function (v) {
                    TagPos = v;
                  }}) > 0) {
                  Prop = pas.System.Copy(TagProp,TagPos + 5,TagProp.length);
                  Prop = pas.System.Copy(Prop,pas.System.Pos('"',Prop) + 1,Prop.length);
                  Prop = pas.System.Copy(Prop,1,pas.System.Pos('"',Prop) - 1);
                  if (Prop.length > 0) {
                    if (Prop.charAt(0) === "#") {
                      NewColor = pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.HTMLToColor(Prop)}
                     else NewColor = pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.TextToColor(Prop);
                  };
                };
              };
              w.set(w.get() + (12 * ListIndex));
              if (linkbreak) {
                imgbreak = true}
               else linkbreak = true;
              cr.Left = cr.Left + (12 * (ListIndex - 1));
              if (!Calc && !Invisible) {
                if (LType === "") {
                  if (NewColor !== -1) {
                    ColL = AGraphics.FFont.FColor;
                    FontColor = NewColor;
                  };
                  Prop = AGraphics.FFont.FName;
                  fs = rtl.refSet(AGraphics.FFont.FStyle);
                  AGraphics.FFont.SetStyle({});
                  if (pas.System.Odd(ListIndex)) {
                    AGraphics.DrawText$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(cr),"•",false,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaLeading,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextTrimming.gttNone,0,-1,-1,false,false,-1,-1)}
                   else AGraphics.DrawText$1(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(cr),"o",false,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaLeading,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextAlign.gtaCenter,pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsTextTrimming.gttNone,0,-1,-1,false,false,-1,-1);
                  AGraphics.FFont.SetName(Prop);
                  AGraphics.FFont.SetStyle(rtl.refSet(fs));
                  if (NewColor !== -1) FontColor = ColL;
                } else {
                  ColB = -1;
                  if (LType === "SQUARE") {
                    ColB = AGraphics.FFill.FColor;
                    AGraphics.FStroke.SetColor(NewColor);
                    AGraphics.FFill.SetColor(NewColor);
                    AGraphics.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
                    AGraphics.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
                    AGraphics.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(cr.Left,cr.Top + 2,cr.Left + 8,cr.Top + 10)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
                    AGraphics.FFill.SetColor(ColB);
                  };
                  if (LType === "CIRCLE") {
                    ColB = AGraphics.FFill.FColor;
                    AGraphics.FStroke.SetColor(NewColor);
                    AGraphics.FFill.SetColor(NewColor);
                    AGraphics.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
                    AGraphics.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
                    AGraphics.DrawEllipse$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(cr.Left,cr.Top + 2,cr.Left + 8,cr.Top + 10)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
                    AGraphics.FFill.SetColor(ColB);
                  };
                };
              };
              cr.Left = cr.Left + 12;
            } else if ($tmp1 === "U") {
              if (s.get().charAt(2) !== ">") {
                ListIndex += 1;
                linebreak = true;
              } else AGraphics.FFont.SetStyle(rtl.unionSet(AGraphics.FFont.FStyle,rtl.createSet(pas["WEBLib.Graphics"].TFontStyle.fsUnderline)));
            } else if ($tmp1 === "O") {
              TagChar = pas.System.upcase(s.get().charAt(2));
              if (TagChar === "F") {
                TagProp = pas.System.Copy(s.get(),3,pas.System.Pos(">",s.get()) - 1);
                Prop = pas.System.Copy(TagProp,pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.IPos("x",TagProp) + 2,TagProp.length);
                Prop = pas.System.Copy(Prop,pas.System.Pos('"',Prop) + 1,Prop.length);
                Prop = pas.System.Copy(Prop,1,pas.System.Pos('"',Prop) - 1);
                pas.System.val$6(Prop,NewOffsetX,{get: function () {
                    return err;
                  }, set: function (v) {
                    err = v;
                  }});
                cr.Left = NewOffsetX.get();
                w.set(NewOffsetX.get());
              };
            } else if ($tmp1 === "P") {
              if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.VarPos(">",s.get(),{get: function () {
                  return TagPos;
                }, set: function (v) {
                  TagPos = v;
                }}) > 0) {
                TagProp = pas.SysUtils.UpperCase(pas.System.Copy(s.get(),3,TagPos - 1));
                if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.VarPos("ALIGN",TagProp,{get: function () {
                    return TagPos;
                  }, set: function (v) {
                    TagPos = v;
                  }}) > 0) {
                  Prop = pas.System.Copy(TagProp,TagPos + 5,TagProp.length);
                  Prop = pas.System.Copy(Prop,pas.System.Pos('"',Prop) + 1,Prop.length);
                  Prop = pas.System.Copy(Prop,1,pas.System.Pos('"',Prop) - 1);
                  if (pas.System.Pos("RIGHT",Prop) > 0) Align.set(pas.Classes.TAlignment.taRightJustify);
                  if (pas.System.Pos("LEFT",Prop) > 0) Align.set(pas.Classes.TAlignment.taLeftJustify);
                  if (pas.System.Pos("CENTER",Prop) > 0) Align.set(pas.Classes.TAlignment.taCenter);
                };
                if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.VarPos("INDENT",TagProp,{get: function () {
                    return TagPos;
                  }, set: function (v) {
                    TagPos = v;
                  }}) > 0) {
                  Prop = pas.System.Copy(TagProp,TagPos + 6,TagProp.length);
                  Prop = pas.System.Copy(Prop,pas.System.Pos('"',Prop) + 1,Prop.length);
                  Prop = pas.System.Copy(Prop,1,pas.System.Pos('"',Prop) - 1);
                  PIndent.set($impl.IStrToInt(Prop));
                };
                if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.VarPos("FLOAT",TagProp,{get: function () {
                    return TagPos;
                  }, set: function (v) {
                    TagPos = v;
                  }}) > 0) {
                  Prop = pas.System.Copy(TagProp,TagPos + 5,TagProp.length);
                  Prop = pas.System.Copy(Prop,pas.System.Pos('"',Prop) + 1,Prop.length);
                  Prop = pas.System.Copy(Prop,1,pas.System.Pos('"',Prop) - 1);
                  if (Prop === "LEFT") txtfloat.set(TFloatStyle.fsLeft);
                  if (Prop === "RIGHT") txtfloat.set(TFloatStyle.fsRight);
                  floatpt.$assign(pas.Types.Point(Math.round(r.Left),Math.round(r.Top)));
                };
                if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.VarPos("BGCOLOR",TagProp,{get: function () {
                    return TagPos;
                  }, set: function (v) {
                    TagPos = v;
                  }}) > 0) {
                  Prop = pas.System.Copy(TagProp,TagPos + 5,TagProp.length);
                  Prop = pas.System.Copy(Prop,pas.System.Pos('"',Prop) + 1,Prop.length);
                  Prop = pas.System.Copy(Prop,1,pas.System.Pos('"',Prop) - 1);
                  NewColor = -1;
                  if (Prop.length > 0) {
                    if (Prop.charAt(0) === "#") {
                      NewColor = pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.HTMLToColor(Prop)}
                     else NewColor = pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.TextToColor(Prop);
                  };
                  if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.VarPos("BGCOLORTO",TagProp,{get: function () {
                      return TagPos;
                    }, set: function (v) {
                      TagPos = v;
                    }}) > 0) {
                    Prop = pas.System.Copy(TagProp,TagPos + 5,TagProp.length);
                    Prop = pas.System.Copy(Prop,pas.System.Pos('"',Prop) + 1,Prop.length);
                    Prop = pas.System.Copy(Prop,1,pas.System.Pos('"',Prop) - 1);
                    if (!Calc) {
                      isPara = true;
                      AGraphics.FStroke.SetColor(NewColor);
                    };
                  } else {
                    if (!Calc) {
                      isPara = true;
                      paracolor = AGraphics.FFill.FColor;
                      AGraphics.FFill.SetColor(NewColor);
                      pencolor = AGraphics.FStroke.FColor;
                      AGraphics.FStroke.SetColor(NewColor);
                      AGraphics.FFill.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFillKind.gfkSolid);
                      AGraphics.FStroke.SetKind(pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsStrokeKind.gskSolid);
                      AGraphics.DrawRectangle$2(pas["WEBLib.TMSFNCTypes"].TRectF.$clone(pas["WEBLib.TMSFNCTypes"].RectF(fr.Left,r.Top,fr.Right,r.Bottom)),pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll);
                    };
                  };
                };
              };
            } else if ($tmp1 === "F") {
              if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.VarPos(">",s.get(),{get: function () {
                  return TagPos;
                }, set: function (v) {
                  TagPos = v;
                }}) > 0) {
                TagProp = pas.SysUtils.UpperCase(pas.System.Copy(s.get(),6,TagPos - 6));
                if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.VarPos("FACE",TagProp,{get: function () {
                    return TagPos;
                  }, set: function (v) {
                    TagPos = v;
                  }}) > 0) {
                  Prop = pas.System.Copy(TagProp,TagPos + 4,TagProp.length);
                  Prop = pas.System.Copy(Prop,pas.System.Pos('"',Prop) + 1,Prop.length);
                  Prop = pas.System.Copy(Prop,1,pas.System.Pos('"',Prop) - 1);
                  AGraphics.FFont.SetName(Prop);
                };
                if ((pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.VarPos(" COLOR",TagProp,{get: function () {
                    return TagPos;
                  }, set: function (v) {
                    TagPos = v;
                  }}) > 0) && !Selected) {
                  Prop = pas.System.Copy(TagProp,TagPos + 6,TagProp.length);
                  Prop = pas.System.Copy(Prop,pas.System.Pos('"',Prop) + 1,Prop.length);
                  Prop = pas.System.Copy(Prop,1,pas.System.Pos('"',Prop) - 1);
                  if (AGraphics.FFill.FColor !== -1) {
                    OldFontColor = AGraphics.FFont.FColor}
                   else OldFontColor = 0;
                  if (Prop.length > 0) {
                    if (Prop.charAt(0) === "#") {
                      FontColor = pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.HTMLToColor(Prop)}
                     else FontColor = pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.TextToColor(Prop);
                  };
                };
                if ((pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.VarPos("BGCOLOR",TagProp,{get: function () {
                    return TagPos;
                  }, set: function (v) {
                    TagPos = v;
                  }}) > 0) && !Calc && !Selected) {
                  Prop = pas.System.Copy(TagProp,TagPos + 7,TagProp.length);
                  Prop = pas.System.Copy(Prop,pas.System.Pos('"',Prop) + 1,Prop.length);
                  Prop = pas.System.Copy(Prop,1,pas.System.Pos('"',Prop) - 1);
                  if (Prop.length > 0) {
                    if (Prop.charAt(0) === "#") {
                      BkColor = pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.HTMLToColor(Prop)}
                     else BkColor = pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.TextToColor(Prop);
                  };
                };
                if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.VarPos("STYLE",TagProp,{get: function () {
                    return TagPos;
                  }, set: function (v) {
                    TagPos = v;
                  }}) > 0) {
                  Prop = pas.System.Copy(TagProp,TagPos + 5,TagProp.length);
                  Prop = pas.System.Copy(Prop,pas.System.Pos("=",Prop) + 1,Prop.length);
                  Prop = pas.System.Copy(Prop,pas.System.Pos('"',Prop) + 1,Prop.length);
                  if (pas.System.Pos("FONT-SIZE:",pas.SysUtils.UpperCase(Prop)) > 0) {
                    pas.System.Delete({get: function () {
                        return Prop;
                      }, set: function (v) {
                        Prop = v;
                      }},1,10);
                    if (pas.System.Pos("PT",pas.SysUtils.UpperCase(Prop)) > 0) {
                      Prop = pas.SysUtils.Trim(pas.System.Copy(Prop,1,pas.System.Pos("PT",pas.SysUtils.UpperCase(Prop)) - 1));
                      pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.SetFontSize(AGraphics.FFont,$impl.IStrToInt(Prop),1);
                    };
                  };
                } else {
                  if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.VarPos("SIZE",TagProp,{get: function () {
                      return TagPos;
                    }, set: function (v) {
                      TagPos = v;
                    }}) > 0) {
                    Prop = pas.System.Copy(TagProp,TagPos + 4,TagProp.length);
                    Prop = pas.System.Copy(Prop,pas.System.Pos("=",Prop) + 1,Prop.length);
                    Prop = pas.System.Copy(Prop,pas.System.Pos('"',Prop) + 1,Prop.length);
                    Prop = pas.System.Copy(Prop,1,pas.System.Pos('"',Prop) - 1);
                    var $tmp4 = $impl.IStrToInt(Prop);
                    if ($tmp4 === 1) {
                      pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.SetFontSize(AGraphics.FFont,8,1)}
                     else if ($tmp4 === 2) {
                      pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.SetFontSize(AGraphics.FFont,10,1)}
                     else if ($tmp4 === 3) {
                      pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.SetFontSize(AGraphics.FFont,12,1)}
                     else if ($tmp4 === 4) {
                      pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.SetFontSize(AGraphics.FFont,14,1)}
                     else if ($tmp4 === 5) {
                      pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.SetFontSize(AGraphics.FFont,16,1)}
                     else {
                      pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.SetFontSize(AGraphics.FFont,$impl.IStrToInt(Prop),1);
                    };
                  };
                };
              };
            } else if ($tmp1 === "S") {
              TagChar = pas.System.upcase(s.get().charAt(2));
              if (TagChar === ">") {
                AGraphics.FFont.SetStyle(rtl.unionSet(AGraphics.FFont.FStyle,rtl.createSet(pas["WEBLib.Graphics"].TFontStyle.fsStrikeOut)))}
               else {
                if (TagChar === "H") {
                  isShad = true}
                 else {
                  if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.IPos("<SUB>",s.get()) === 1) {
                    isSub = true}
                   else if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.IPos("<SUP>",s.get()) === 1) isSup = true;
                };
              };
            } else if ($tmp1 === "R") {
              TagProp = pas.System.Copy(s.get(),3,pas.System.Pos(">",s.get()) - 1);
              Prop = pas.System.Copy(TagProp,pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.IPos("a",TagProp) + 2,TagProp.length);
              Prop = pas.System.Copy(Prop,pas.System.Pos('"',Prop) + 1,Prop.length);
              Prop = pas.System.Copy(Prop,1,pas.System.Pos('"',Prop) - 1);
            } else if ($tmp1 === "Z") Invisible = true;
          };
          if ((pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.VarPos(">",s.get(),{get: function () {
              return TagPos;
            }, set: function (v) {
              TagPos = v;
            }}) > 0) && !imgbreak) {
            Res = Res + pas.System.Copy(s.get(),1,TagPos);
            pas.System.Delete(s,1,TagPos);
          } else if (!imgbreak) pas.System.Delete(s,1,s.get().length);
        };
      };
      w.set(w.get() - sw);
      if (w.get() > XSize.get()) XSize.set(w.get() + 2);
      if ((FocusLink === (HyperLinks.get() - 1)) && Anchor && !Calc) {
        rr.Right = cr.Left;
        rr.Bottom = cr.Bottom;
        pas["WEBLib.TMSFNCTypes"].InflateRectEx(rr,1,0);
        rr.Left = r.Left + 1;
        rr.Top = rr.Bottom;
      };
      Result = Res;
      return Result;
    };
    Anchor = false;
    error = false;
    OldFont = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFont.$create("Create$2");
    OldFont.AssignSource(AGraphics.FFont);
    OldFontColor = AGraphics.FFont.FColor;
    DrawFont = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFont.$create("Create$2");
    DrawFont.AssignSource(AGraphics.FFont);
    DrawFontCOlor = AGraphics.FFont.FColor;
    CalcFont = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFont.$create("Create$2");
    CalcFont.AssignSource(AGraphics.FFont);
    CalcFontColor = AGraphics.FFont.FColor;
    OldDrawFont = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFont.$create("Create$2");
    OldDrawFont.AssignSource(AGraphics.FFont);
    OldDrawFontColor = AGraphics.FFont.FColor;
    OldCalcFont = pas["WEBLib.TMSFNCGraphicsTypes"].TTMSFNCGraphicsFont.$create("Create$2");
    OldCalcFont.AssignSource(AGraphics.FFont);
    OldCalcFontColor = AGraphics.FFont.FColor;
    blnkcolor = AGraphics.FFill.FColor;
    OldPenColor = AGraphics.FStroke.FColor;
    blnkKind = AGraphics.FFill.FKind;
    OldPenKind = AGraphics.FStroke.FKind;
    BGColor = -1;
    BkColor = -1;
    paracolor = -1;
    isPara = false;
    isShad = false;
    Invisible = false;
    ControlRect.$assign(pas["WEBLib.TMSFNCTypes"].RectF(0,0,0,0));
    CV.set("");
    CT.set("");
    if (!CheckHotSpot) CID.set("");
    ofsx = 0;
    newofsx = 0;
    txtfloat = TFloatStyle.fsNone;
    floatrect.$assign(pas.Types.Rect(0,0,0,0));
    Result = false;
    r.$assign(fr);
    Align = pas.Classes.TAlignment.taLeftJustify;
    PIndent = 0;
    XSize.set(0);
    YSize.set(0);
    HyperLinks.set(0);
    hlcount = 0;
    ListIndex = 0;
    licount = 0;
    StripVal.set("");
    FocusAnchor.set("");
    MouseLink.set(-1);
    MouseInAnchor = false;
    ImgIdx = 0;
    AltImg = -1;
    if (pas.System.Pos("&",s) > 0) {
      s = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.UnFixMarkup(s,true,true);
      do {
        FoundTag = false;
        if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.TagReplaceString("&amp;","&",{get: function () {
            return s;
          }, set: function (v) {
            s = v;
          }})) FoundTag = true;
      } while (FoundTag);
    };
    s = $impl.DBTagStrip(s);
    s = $impl.UnicodeTagStrip(s);
    s = $impl.CRLFStrip(s,true);
    inspoint = 0;
    LineCount.set(0);
    while (s.length > 0) {
      OldFont.AssignSource(OldCalcFont);
      OldFontColor = OldCalcFontColor;
      AGraphics.FFont.AssignSource(CalcFont);
      FontColor = CalcFontColor;
      OldAnchor = Anchor;
      OldAnchorVal = LastAnchor;
      suph = 0;
      subh = 0;
      imgali = 0;
      isSup = false;
      isSub = false;
      Hotspot = false;
      ImageHotspot = false;
      htmlwidth = 0;
      rh.$assign(AGraphics.CalculateText$1("gh"));
      htmlheight = rh.Bottom - rh.Top;
      txtheight = htmlheight;
      OldImgIdx = ImgIdx;
      s = pas.SysUtils.Trim(s);
      txtfloatbefore = txtfloat;
      su = HTMLDrawLine(AGraphics,{get: function () {
          return s;
        }, set: function (v) {
          s = v;
        }},pas["WEBLib.TMSFNCTypes"].TRectF.$clone(r),true,{get: function () {
          return htmlwidth;
        }, set: function (v) {
          htmlwidth = v;
        }},{get: function () {
          return htmlheight;
        }, set: function (v) {
          htmlheight = v;
        }},{get: function () {
          return subh;
        }, set: function (v) {
          subh = v;
        }},{get: function () {
          return suph;
        }, set: function (v) {
          suph = v;
        }},{get: function () {
          return imgali;
        }, set: function (v) {
          imgali = v;
        }},{get: function () {
          return Align;
        }, set: function (v) {
          Align = v;
        }},{get: function () {
          return PIndent;
        }, set: function (v) {
          PIndent = v;
        }},XPos,YPos,{get: function () {
          return Hotspot;
        }, set: function (v) {
          Hotspot = v;
        }},{get: function () {
          return ImageHotspot;
        }, set: function (v) {
          ImageHotspot = v;
        }},ofsx,{get: function () {
          return newofsx;
        }, set: function (v) {
          newofsx = v;
        }},floatrect,{get: function () {
          return txtfloat;
        }, set: function (v) {
          txtfloat = v;
        }});
      LineCount.set(LineCount.get() + 1);
      Anchor = OldAnchor;
      LastAnchor = OldAnchorVal;
      CalcFont.AssignSource(AGraphics.FFont);
      CalcFontColor = AGraphics.FFont.FColor;
      OldCalcFont.AssignSource(OldFont);
      OldCalcFontColor = OldFontColor;
      htmlheight = htmlheight + LineSpacing;
      dr.$assign(r);
      var $tmp = Align;
      if ($tmp === pas.Classes.TAlignment.taCenter) {
        if ((r.Right - r.Left - htmlwidth) > 0) dr.Left = r.Left + ((r.Right - r.Left - htmlwidth) / 2)}
       else if ($tmp === pas.Classes.TAlignment.taRightJustify) if ((r.Right - htmlwidth) > r.Left) dr.Left = r.Right - htmlwidth;
      dr.Left = dr.Left + PIndent;
      dr.Right = dr.Right + PIndent;
      dr.Bottom = dr.Top + htmlheight + subh + suph;
      if (!CheckHeight) {
        OldFont.AssignSource(OldDrawFont);
        OldFontColor = OldDrawFontColor;
        AGraphics.FFont.AssignSource(DrawFont);
        FontColor = DrawFontCOlor;
        HyperLinks.set(hlcount);
        ListIndex = licount;
        ImgIdx = OldImgIdx;
        HTMLDrawLine(AGraphics,{get: function () {
            return su;
          }, set: function (v) {
            su = v;
          }},pas["WEBLib.TMSFNCTypes"].TRectF.$clone(dr),CheckHotSpot,{get: function () {
            return htmlwidth;
          }, set: function (v) {
            htmlwidth = v;
          }},{get: function () {
            return htmlheight;
          }, set: function (v) {
            htmlheight = v;
          }},{get: function () {
            return subh;
          }, set: function (v) {
            subh = v;
          }},{get: function () {
            return suph;
          }, set: function (v) {
            suph = v;
          }},{get: function () {
            return imgali;
          }, set: function (v) {
            imgali = v;
          }},{get: function () {
            return Align;
          }, set: function (v) {
            Align = v;
          }},{get: function () {
            return PIndent;
          }, set: function (v) {
            PIndent = v;
          }},XPos,YPos,{get: function () {
            return Hotspot;
          }, set: function (v) {
            Hotspot = v;
          }},{get: function () {
            return ImageHotspot;
          }, set: function (v) {
            ImageHotspot = v;
          }},ofsx,{get: function () {
            return newofsx;
          }, set: function (v) {
            newofsx = v;
          }},floatrect,{get: function () {
            return txtfloat;
          }, set: function (v) {
            txtfloat = v;
          }});
        hlcount = HyperLinks.get();
        licount = ListIndex;
        r.Left = fr.Left + floatrect.Left;
        r.Right = fr.Right - floatrect.Right;
        if (dr.Top > floatrect.Bottom) {
          floatrect.Left = 0;
          floatrect.Right = 0;
          r.Left = fr.Left;
        };
        rh.$assign(AGraphics.CalculateText$1("gh"));
        if ((Hotspot && (YPos > (dr.Bottom - imgali - (rh.Bottom - rh.Top))) && (YPos < (dr.Bottom - imgali))) || ImageHotspot) {
          Result = true;
        };
        ofsx = newofsx;
        DrawFont.AssignSource(AGraphics.FFont);
        DrawFontCOlor = FontColor;
        OldDrawFont.AssignSource(OldFont);
        OldDrawFontColor = OldFontColor;
      };
      if ((txtfloat !== TFloatStyle.fsNone) && (txtfloat !== txtfloatbefore)) {
        r.Left = floatpt.x;
        r.Top = floatpt.y;
        txtfloat = TFloatStyle.fsNone;
      } else {
        r.Top = r.Top + htmlheight + subh + suph;
        YSize.set(YSize.get() + htmlheight + subh + suph);
      };
      if (((r.Top + txtheight) > (r.Bottom + 1)) && !CheckHeight) s = "";
    };
    if (YSize.get() === 0) {
      rh.$assign(AGraphics.CalculateText$1("gh"));
      YSize.set(rh.Bottom - rh.Top);
    };
    inspoint = inspoint >>> 1;
    AGraphics.FStroke.SetKind(OldPenKind);
    AGraphics.FFill.SetKind(blnkKind);
    AGraphics.FStroke.SetColor(OldPenColor);
    AGraphics.FFill.SetColor(blnkcolor);
    AGraphics.FFont.AssignSource(OldFont);
    OldFont = rtl.freeLoc(OldFont);
    DrawFont = rtl.freeLoc(DrawFont);
    CalcFont = rtl.freeLoc(CalcFont);
    OldDrawFont = rtl.freeLoc(OldDrawFont);
    OldCalcFont = rtl.freeLoc(OldCalcFont);
    return Result;
  };
  this.HiLight = function (s, h, tag, DoCase, FullText) {
    var Result = "";
    var hs = "";
    var l = 0;
    var k = 0;
    var m = 0;
    var IsHTML = false;
    tag = pas.SysUtils.UpperCase(tag);
    hs = pas.SysUtils.UpperCase(s);
    l = pas.System.Pos("<" + tag + ">",hs);
    while (l > 0) {
      pas.System.Delete({get: function () {
          return s;
        }, set: function (v) {
          s = v;
        }},l,tag.length + 2);
      pas.System.Delete({get: function () {
          return hs;
        }, set: function (v) {
          hs = v;
        }},l,tag.length + 2);
      l = pas.System.Pos("<" + tag + ">",hs);
    };
    l = pas.System.Pos("</" + tag + ">",hs);
    while (l > 0) {
      pas.System.Delete({get: function () {
          return s;
        }, set: function (v) {
          s = v;
        }},l,tag.length + 3);
      pas.System.Delete({get: function () {
          return hs;
        }, set: function (v) {
          hs = v;
        }},l,tag.length + 3);
      l = pas.System.Pos("</" + tag + ">",hs);
    };
    if (!DoCase) h = pas["WEBLib.TMSFNCTypes"].AnsiUpperCase(h);
    IsHTML = pas.System.Pos("</",s) > 0;
    if (IsHTML) {
      hs = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.UnFixMarkup($impl.HTMLStripAll(s),true,false)}
     else hs = s;
    if (!DoCase) hs = pas["WEBLib.TMSFNCTypes"].AnsiUpperCase(hs);
    Result = "";
    if (FullText) {
      if (h === hs) if (IsHTML) {
        s = "<" + tag + ">" + s + "</" + tag + ">"}
       else s = "<" + tag + ">" + pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.FixMarkup(s,true) + "</" + tag + ">";
    } else if (!IsHTML) {
      l = pas.System.Pos(h,hs);
      if (l > 0) {
        do {
          Result = Result + pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.FixMarkup(pas.System.Copy(s,1,l - 1),false) + "<" + tag + ">" + pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.FixMarkup(pas.System.Copy(s,l,h.length),false) + "</" + tag + ">";
          pas.System.Delete({get: function () {
              return s;
            }, set: function (v) {
              s = v;
            }},1,(l + h.length) - 1);
          pas.System.Delete({get: function () {
              return hs;
            }, set: function (v) {
              hs = v;
            }},1,(l + h.length) - 1);
          l = pas.System.Pos(h,hs);
        } while (!(l === 0));
        s = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.FixMarkup(s,false);
      };
    } else {
      l = pas.System.Pos(h,hs);
      while (l > 0) {
        pas.System.Delete({get: function () {
            return hs;
          }, set: function (v) {
            hs = v;
          }},1,(l + h.length) - 1);
        do {
          k = pas.System.Pos("<",s);
          m = pas.System.Pos("&",s);
          while (((k > 0) && (k <= l)) || ((m > 0) && (m < l))) {
            if ((k > 0) && ((m <= 0) || (k < m))) {
              Result = Result + pas.System.Copy(s,1,k - 1);
              pas.System.Delete({get: function () {
                  return s;
                }, set: function (v) {
                  s = v;
                }},1,k - 1);
              l = l - (k - 1);
              m = m - (k - 1);
              k = pas.System.Pos(">",s);
              if (k === 0) k = s.length;
              Result = Result + pas.System.Copy(s,1,k);
              pas.System.Delete({get: function () {
                  return s;
                }, set: function (v) {
                  s = v;
                }},1,k);
              m = m - k;
              k = pas.System.Pos("<",s);
            } else {
              Result = Result + pas.System.Copy(s,1,m - 1);
              pas.System.Delete({get: function () {
                  return s;
                }, set: function (v) {
                  s = v;
                }},1,m - 1);
              l = l - (m - 1) - 1;
              k = k - (m - 1);
              m = pas.System.Pos(";",s);
              l = (l - m) + 1;
              if (m === 0) m = s.length;
              Result = Result + pas.System.Copy(s,1,m);
              pas.System.Delete({get: function () {
                  return s;
                }, set: function (v) {
                  s = v;
                }},1,m);
              k = k - m;
              m = pas.System.Pos("&",s);
            };
          };
          Result = Result + pas.System.Copy(s,1,l - 1) + "<" + tag + ">";
          pas.System.Delete({get: function () {
              return s;
            }, set: function (v) {
              s = v;
            }},1,l - 1);
          k = k - (l - 1);
          m = m - (l - 1);
          l = h.length;
          while ((((k > 0) && (k <= l)) || ((m > 0) && (m <= l))) && (l > 0) && (s !== "")) {
            if ((k > 0) && ((m <= 0) || (k < m))) {
              Result = Result + pas.System.Copy(s,1,k - 1);
              pas.System.Delete({get: function () {
                  return s;
                }, set: function (v) {
                  s = v;
                }},1,k - 1);
              l = l - (k - 1);
              m = m - (k - 1);
              k = pas.System.Pos(">",s);
              if (k === 0) k = s.length;
              Result = Result + pas.System.Copy(s,1,k);
              if (pas.SysUtils.UpperCase(pas.System.Copy(s,1,6)) === "</FONT") Result = Result + "</" + tag + "><" + tag + ">";
              pas.System.Delete({get: function () {
                  return s;
                }, set: function (v) {
                  s = v;
                }},1,k);
              m = m - k;
              k = pas.System.Pos("<",s);
            } else {
              Result = Result + pas.System.Copy(s,1,m - 1);
              pas.System.Delete({get: function () {
                  return s;
                }, set: function (v) {
                  s = v;
                }},1,m - 1);
              l = l - (m - 1) - 1;
              k = k - (m - 1);
              m = pas.System.Pos(";",s);
              if (m === 0) m = s.length;
              Result = Result + pas.System.Copy(s,1,m);
              pas.System.Delete({get: function () {
                  return s;
                }, set: function (v) {
                  s = v;
                }},1,m);
              k = k - m;
              m = pas.System.Pos("&",s);
            };
          };
          if (l > 0) {
            Result = Result + pas.System.Copy(s,1,l);
            pas.System.Delete({get: function () {
                return s;
              }, set: function (v) {
                s = v;
              }},1,l);
          };
          Result = Result + "</" + tag + ">";
          l = 0;
        } while (!(l === 0));
        l = pas.System.Pos(h,hs);
      };
    };
    Result = Result + s;
    return Result;
  };
  this.UnHiLight = function (s, tag) {
    var Result = "";
    var IsHTML = false;
    var WasHTML = false;
    Result = "";
    WasHTML = pas.System.Pos("</",s) > 0;
    tag = pas.SysUtils.UpperCase(tag);
    while (pas.System.Pos("<" + tag + ">",pas.SysUtils.UpperCase(s)) > 0) s = pas.SysUtils.StringReplace(s,"<" + tag + ">","",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfIgnoreCase));
    while (pas.System.Pos("</" + tag + ">",pas.SysUtils.UpperCase(s)) > 0) s = pas.SysUtils.StringReplace(s,"</" + tag + ">","",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfIgnoreCase));
    IsHTML = pas.System.Pos("</",s) > 0;
    if (WasHTML && !IsHTML) s = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.UnFixMarkup(s,false,false);
    Result = s;
    return Result;
  };
  this.GetControlValue = function (HTML, ControlID, ControlValue) {
    var Result = false;
    var lp = 0;
    var Tag = "";
    var CType = "";
    var CID = "";
    var CV = "";
    var CW = "";
    var CH = "";
    var CP = "";
    var CL = "";
    Result = false;
    lp = 0;
    while ($impl.VarIPos("<CONTROL ",HTML,{get: function () {
        return lp;
      }, set: function (v) {
        lp = v;
      }}) > 0) {
      pas.System.Delete({get: function () {
          return HTML;
        }, set: function (v) {
          HTML = v;
        }},1,lp);
      Tag = pas.System.Copy(HTML,1,pas.System.Pos(">",HTML));
      CType = "";
      CID = "";
      CV = "";
      CW = "";
      CH = "";
      CP = "";
      CL = "";
      $mod.ParseControl(Tag,{get: function () {
          return CType;
        }, set: function (v) {
          CType = v;
        }},{get: function () {
          return CID;
        }, set: function (v) {
          CID = v;
        }},{get: function () {
          return CV;
        }, set: function (v) {
          CV = v;
        }},{get: function () {
          return CW;
        }, set: function (v) {
          CW = v;
        }},{get: function () {
          return CH;
        }, set: function (v) {
          CH = v;
        }},{get: function () {
          return CP;
        }, set: function (v) {
          CP = v;
        }},{get: function () {
          return CL;
        }, set: function (v) {
          CL = v;
        }});
      if (ControlID === CID) {
        ControlValue.set(CV);
        Result = true;
        return Result;
      };
    };
    return Result;
  };
  this.GetControlProp = function (HTML, ControlID) {
    var Result = "";
    var lp = 0;
    var Tag = "";
    var CType = "";
    var CID = "";
    var CV = "";
    var CW = "";
    var CH = "";
    var CP = "";
    var CL = "";
    Result = "";
    lp = 0;
    while ($impl.VarIPos("<CONTROL ",HTML,{get: function () {
        return lp;
      }, set: function (v) {
        lp = v;
      }}) > 0) {
      pas.System.Delete({get: function () {
          return HTML;
        }, set: function (v) {
          HTML = v;
        }},1,lp);
      Tag = pas.System.Copy(HTML,1,pas.System.Pos(">",HTML));
      CType = "";
      CID = "";
      CV = "";
      CW = "";
      CH = "";
      CP = "";
      CL = "";
      $mod.ParseControl(Tag,{get: function () {
          return CType;
        }, set: function (v) {
          CType = v;
        }},{get: function () {
          return CID;
        }, set: function (v) {
          CID = v;
        }},{get: function () {
          return CV;
        }, set: function (v) {
          CV = v;
        }},{get: function () {
          return CW;
        }, set: function (v) {
          CW = v;
        }},{get: function () {
          return CH;
        }, set: function (v) {
          CH = v;
        }},{get: function () {
          return CP;
        }, set: function (v) {
          CP = v;
        }},{get: function () {
          return CL;
        }, set: function (v) {
          CL = v;
        }});
      if (ControlID === CID) {
        Result = CP;
        return Result;
      };
    };
    return Result;
  };
  this.GetControlMaxLen = function (HTML, ControlID) {
    var Result = 0;
    var lp = 0;
    var e = 0;
    var Tag = "";
    var CType = "";
    var CID = "";
    var CV = "";
    var CW = "";
    var CH = "";
    var CP = "";
    var CL = "";
    Result = 0;
    lp = 0;
    e = 0;
    while ($impl.VarIPos("<CONTROL ",HTML,{get: function () {
        return lp;
      }, set: function (v) {
        lp = v;
      }}) > 0) {
      pas.System.Delete({get: function () {
          return HTML;
        }, set: function (v) {
          HTML = v;
        }},1,lp);
      Tag = pas.System.Copy(HTML,1,pas.System.Pos(">",HTML));
      CType = "";
      CID = "";
      CV = "";
      CW = "";
      CH = "";
      CP = "";
      CL = "";
      $mod.ParseControl(Tag,{get: function () {
          return CType;
        }, set: function (v) {
          CType = v;
        }},{get: function () {
          return CID;
        }, set: function (v) {
          CID = v;
        }},{get: function () {
          return CV;
        }, set: function (v) {
          CV = v;
        }},{get: function () {
          return CW;
        }, set: function (v) {
          CW = v;
        }},{get: function () {
          return CH;
        }, set: function (v) {
          CH = v;
        }},{get: function () {
          return CP;
        }, set: function (v) {
          CP = v;
        }},{get: function () {
          return CL;
        }, set: function (v) {
          CL = v;
        }});
      if (ControlID === CID) {
        pas.System.val$6(CL,{get: function () {
            return Result;
          }, set: function (v) {
            Result = v;
          }},{get: function () {
            return e;
          }, set: function (v) {
            e = v;
          }});
        return Result;
      };
    };
    return Result;
  };
  this.SetControlValue = function (HTML, ControlID, ControlValue) {
    var Result = false;
    var lp = 0;
    var Tag = "";
    var Temp = "";
    var CType = "";
    var CID = "";
    var CV = "";
    var CW = "";
    var CH = "";
    var CP = "";
    var CL = "";
    Result = false;
    Temp = "";
    ControlValue = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.FixMarkup(ControlValue,true);
    lp = 0;
    while ($impl.VarIPos("<CONTROL ",HTML.get(),{get: function () {
        return lp;
      }, set: function (v) {
        lp = v;
      }}) > 0) {
      Temp = Temp + pas.System.Copy(HTML.get(),1,lp);
      pas.System.Delete(HTML,1,lp);
      Tag = pas.System.Copy(HTML.get(),1,pas.System.Pos(">",HTML.get()));
      CType = "";
      CID = "";
      CV = "";
      CW = "";
      CH = "";
      CP = "";
      CL = "";
      $mod.ParseControl(Tag,{get: function () {
          return CType;
        }, set: function (v) {
          CType = v;
        }},{get: function () {
          return CID;
        }, set: function (v) {
          CID = v;
        }},{get: function () {
          return CV;
        }, set: function (v) {
          CV = v;
        }},{get: function () {
          return CW;
        }, set: function (v) {
          CW = v;
        }},{get: function () {
          return CH;
        }, set: function (v) {
          CH = v;
        }},{get: function () {
          return CP;
        }, set: function (v) {
          CP = v;
        }},{get: function () {
          return CL;
        }, set: function (v) {
          CL = v;
        }});
      if (ControlID === CID) {
        Temp = Temp + "CONTROL ID=" + $mod.TMSFNCHTMLENGINE_ATTR_DELIM + ControlID + $mod.TMSFNCHTMLENGINE_ATTR_DELIM + " VALUE=" + $mod.TMSFNCHTMLENGINE_ATTR_DELIM + ControlValue + $mod.TMSFNCHTMLENGINE_ATTR_DELIM + " WIDTH=" + $mod.TMSFNCHTMLENGINE_ATTR_DELIM + CW + $mod.TMSFNCHTMLENGINE_ATTR_DELIM + " TYPE=" + $mod.TMSFNCHTMLENGINE_ATTR_DELIM + CType + $mod.TMSFNCHTMLENGINE_ATTR_DELIM;
        if (CP !== "") Temp = Temp + " PROP=" + $mod.TMSFNCHTMLENGINE_ATTR_DELIM + pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.FixMarkup(CP,true) + $mod.TMSFNCHTMLENGINE_ATTR_DELIM;
        if (CL !== "") Temp = Temp + " MAXLEN=" + $mod.TMSFNCHTMLENGINE_ATTR_DELIM + CL + $mod.TMSFNCHTMLENGINE_ATTR_DELIM;
        Temp = Temp + ">";
        HTML.set(Temp + pas.System.Copy(HTML.get(),pas.System.Pos(">",HTML.get()) + 1,HTML.get().length));
        Result = true;
        return Result;
      };
    };
    return Result;
  };
  this.ClearRadioControls = function (HTML) {
    var Result = "";
    var lp = 0;
    var Tag = "";
    var CType = "";
    var CID = "";
    var CV = "";
    var CW = "";
    var CH = "";
    var CP = "";
    var CL = "";
    var sl = null;
    var s = "";
    Result = "";
    s = HTML;
    sl = pas.Classes.TStringList.$create("Create$1");
    lp = 0;
    while ($impl.VarIPos("<CONTROL ",HTML,{get: function () {
        return lp;
      }, set: function (v) {
        lp = v;
      }}) > 0) {
      pas.System.Delete({get: function () {
          return HTML;
        }, set: function (v) {
          HTML = v;
        }},1,lp);
      Tag = pas.System.Copy(HTML,1,pas.System.Pos(">",HTML));
      CType = "";
      CID = "";
      CV = "";
      CW = "";
      CH = "";
      CP = "";
      CL = "";
      $mod.ParseControl(Tag,{get: function () {
          return CType;
        }, set: function (v) {
          CType = v;
        }},{get: function () {
          return CID;
        }, set: function (v) {
          CID = v;
        }},{get: function () {
          return CV;
        }, set: function (v) {
          CV = v;
        }},{get: function () {
          return CW;
        }, set: function (v) {
          CW = v;
        }},{get: function () {
          return CH;
        }, set: function (v) {
          CH = v;
        }},{get: function () {
          return CP;
        }, set: function (v) {
          CP = v;
        }},{get: function () {
          return CL;
        }, set: function (v) {
          CL = v;
        }});
      if (CType === "RADIO") sl.Add(CID);
    };
    for (var $l = 0, $end = sl.GetCount() - 1; $l <= $end; $l++) {
      lp = $l;
      $mod.SetControlValue({get: function () {
          return s;
        }, set: function (v) {
          s = v;
        }},sl.Get(lp),"FALSE");
    };
    sl = rtl.freeLoc(sl);
    Result = s;
    return Result;
  };
  this.GetNextControlID = function (HTML, ControlID) {
    var Result = "";
    var lp = 0;
    var Tag = "";
    var CType = "";
    var CID = "";
    var CV = "";
    var CW = "";
    var CH = "";
    var CP = "";
    var CL = "";
    var flg = false;
    Result = "";
    flg = ControlID === "";
    lp = 0;
    while ($impl.VarIPos("<CONTROL ",HTML,{get: function () {
        return lp;
      }, set: function (v) {
        lp = v;
      }}) > 0) {
      pas.System.Delete({get: function () {
          return HTML;
        }, set: function (v) {
          HTML = v;
        }},1,lp);
      Tag = pas.System.Copy(HTML,1,pas.System.Pos(">",HTML));
      CType = "";
      CID = "";
      CV = "";
      CW = "";
      CH = "";
      CP = "";
      CL = "";
      $mod.ParseControl(Tag,{get: function () {
          return CType;
        }, set: function (v) {
          CType = v;
        }},{get: function () {
          return CID;
        }, set: function (v) {
          CID = v;
        }},{get: function () {
          return CV;
        }, set: function (v) {
          CV = v;
        }},{get: function () {
          return CW;
        }, set: function (v) {
          CW = v;
        }},{get: function () {
          return CH;
        }, set: function (v) {
          CH = v;
        }},{get: function () {
          return CP;
        }, set: function (v) {
          CP = v;
        }},{get: function () {
          return CL;
        }, set: function (v) {
          CL = v;
        }});
      if (flg && (CType !== "BUTTON") && (CType !== "CHECK") && (CType !== "RADIO")) {
        Result = CID;
        return Result;
      };
      if (ControlID === CID) flg = true;
    };
    return Result;
  };
  this.HasHTMLControl = function (HTML) {
    var Result = false;
    var lp = 0;
    lp = 0;
    Result = $impl.VarIPos("<CONTROL",HTML,{get: function () {
        return lp;
      }, set: function (v) {
        lp = v;
      }}) > 0;
    return Result;
  };
  this.ParseControl = function (Tag, ControlType, ControlID, ControlValue, ControlWidth, ControlHeight, ControlProp, ControlLen) {
    var Prop = "";
    var vp = 0;
    ControlType.set("");
    ControlWidth.set("");
    ControlHeight.set("");
    ControlValue.set("");
    ControlID.set("");
    ControlProp.set("");
    ControlLen.set("");
    vp = 0;
    if ($impl.VarIPos("TYPE=",Tag,{get: function () {
        return vp;
      }, set: function (v) {
        vp = v;
      }}) > 0) {
      Prop = pas.System.Copy(Tag,vp + 1,Tag.length);
      Prop = pas.System.Copy(Prop,pas.System.Pos($mod.TMSFNCHTMLENGINE_ATTR_DELIM,Prop) + 1,Prop.length);
      Prop = pas.System.Copy(Prop,1,pas.System.Pos($mod.TMSFNCHTMLENGINE_ATTR_DELIM,Prop) - 1);
      ControlType.set(pas.SysUtils.UpperCase(Prop));
    };
    if ($impl.VarIPos("WIDTH=",Tag,{get: function () {
        return vp;
      }, set: function (v) {
        vp = v;
      }}) > 0) {
      Prop = pas.System.Copy(Tag,vp + 1,Tag.length);
      Prop = pas.System.Copy(Prop,pas.System.Pos($mod.TMSFNCHTMLENGINE_ATTR_DELIM,Prop) + 1,Prop.length);
      Prop = pas.System.Copy(Prop,1,pas.System.Pos($mod.TMSFNCHTMLENGINE_ATTR_DELIM,Prop) - 1);
      ControlWidth.set(Prop);
    };
    if ($impl.VarIPos("HEIGHT=",Tag,{get: function () {
        return vp;
      }, set: function (v) {
        vp = v;
      }}) > 0) {
      Prop = pas.System.Copy(Tag,vp + 1,Tag.length);
      Prop = pas.System.Copy(Prop,pas.System.Pos($mod.TMSFNCHTMLENGINE_ATTR_DELIM,Prop) + 1,Prop.length);
      Prop = pas.System.Copy(Prop,1,pas.System.Pos($mod.TMSFNCHTMLENGINE_ATTR_DELIM,Prop) - 1);
      ControlHeight.set(Prop);
    };
    if ($impl.VarIPos("ID=",Tag,{get: function () {
        return vp;
      }, set: function (v) {
        vp = v;
      }}) > 0) {
      Prop = pas.System.Copy(Tag,vp + 1,Tag.length);
      Prop = pas.System.Copy(Prop,pas.System.Pos($mod.TMSFNCHTMLENGINE_ATTR_DELIM,Prop) + 1,Prop.length);
      Prop = pas.System.Copy(Prop,1,pas.System.Pos($mod.TMSFNCHTMLENGINE_ATTR_DELIM,Prop) - 1);
      ControlID.set(Prop);
    };
    if ($impl.VarIPos("VALUE=",Tag,{get: function () {
        return vp;
      }, set: function (v) {
        vp = v;
      }}) > 0) {
      Prop = pas.System.Copy(Tag,vp + 1,Tag.length);
      Prop = pas.System.Copy(Prop,pas.System.Pos($mod.TMSFNCHTMLENGINE_ATTR_DELIM,Prop) + 1,Prop.length);
      Prop = pas.System.Copy(Prop,1,pas.System.Pos($mod.TMSFNCHTMLENGINE_ATTR_DELIM,Prop) - 1);
      ControlValue.set(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.UnFixMarkup(Prop,true,false));
    };
    if ($impl.VarIPos("PROP=",Tag,{get: function () {
        return vp;
      }, set: function (v) {
        vp = v;
      }}) > 0) {
      Prop = pas.System.Copy(Tag,vp + 1,Tag.length);
      Prop = pas.System.Copy(Prop,pas.System.Pos($mod.TMSFNCHTMLENGINE_ATTR_DELIM,Prop) + 1,Prop.length);
      Prop = pas.System.Copy(Prop,1,pas.System.Pos($mod.TMSFNCHTMLENGINE_ATTR_DELIM,Prop) - 1);
      ControlProp.set(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.UnFixMarkup(Prop,true,false));
    };
    if ($impl.VarIPos("MAXLEN=",Tag,{get: function () {
        return vp;
      }, set: function (v) {
        vp = v;
      }}) > 0) {
      Prop = pas.System.Copy(Tag,vp + 1,Tag.length);
      Prop = pas.System.Copy(Prop,pas.System.Pos($mod.TMSFNCHTMLENGINE_ATTR_DELIM,Prop) + 1,Prop.length);
      Prop = pas.System.Copy(Prop,1,pas.System.Pos($mod.TMSFNCHTMLENGINE_ATTR_DELIM,Prop) - 1);
      ControlLen.set(Prop);
    };
  };
  $mod.$implcode = function () {
    $impl.VarIPos = function (su, s, Res) {
      var Result = 0;
      Res.set(pas.System.Pos(su,pas.SysUtils.UpperCase(s)));
      Result = Res.get();
      return Result;
    };
    $impl.StripPos2HTMLPos = function (s, i) {
      var Result = 0;
      var j = 0;
      var k = 0;
      var Skip = false;
      Result = 0;
      k = 1;
      Skip = false;
      for (var $l = 1, $end = s.length; $l <= $end; $l++) {
        j = $l;
        if (s.charAt(j - 1) === "<") Skip = true;
        if (k === i) {
          Result = j;
          return Result;
        };
        if (!Skip) k += 1;
        if (s.charAt(j - 1) === ">") Skip = false;
      };
      if (k === i) {
        Result = s.length + 1;
      };
      return Result;
    };
    $impl.PosFrom = function (su, s, h, DoCase, Res) {
      var Result = 0;
      var r = 0;
      Result = 0;
      Res.set(0);
      if (h > 0) pas.System.Delete({get: function () {
          return s;
        }, set: function (v) {
          s = v;
        }},1,h);
      if (DoCase) {
        r = pas.System.Pos(su,s)}
       else r = pas.System.Pos(pas["WEBLib.TMSFNCTypes"].AnsiUpperCase(su),pas["WEBLib.TMSFNCTypes"].AnsiUpperCase(s));
      if (r > 0) {
        Res.set(h + r);
        Result = Res.get();
      };
      return Result;
    };
    $impl.HTMLStripAll = function (s) {
      var Result = "";
      var TagPos = 0;
      var PTP = 0;
      Result = "";
      while (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.VarPos("<",s,{get: function () {
          return TagPos;
        }, set: function (v) {
          TagPos = v;
        }}) > 0) {
        PTP = TagPos;
        if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.VarPos(">",s,{get: function () {
            return TagPos;
          }, set: function (v) {
            TagPos = v;
          }}) > PTP) {
          Result = Result + pas.System.Copy(s,1,PTP - 1);
          pas.System.Delete({get: function () {
              return s;
            }, set: function (v) {
              s = v;
            }},1,TagPos);
        } else break;
      };
      Result = Result + s;
      return Result;
    };
    $impl.IStrToInt = function (s) {
      var Result = 0;
      var Err = 0;
      var Res = 0;
      pas.System.val$6(s,{get: function () {
          return Res;
        }, set: function (v) {
          Res = v;
        }},{get: function () {
          return Err;
        }, set: function (v) {
          Err = v;
        }});
      Result = Res;
      return Result;
    };
    $impl.DBTagStrip = function (s) {
      var Result = "";
      var i = 0;
      var j = 0;
      i = pas.System.Pos("<#",s);
      if (i > 0) {
        Result = pas.System.Copy(s,1,i - 1);
        pas.System.Delete({get: function () {
            return s;
          }, set: function (v) {
            s = v;
          }},1,i);
        j = pas.System.Pos(">",s);
        if (j > 0) pas.System.Delete({get: function () {
            return s;
          }, set: function (v) {
            s = v;
          }},j,1);
        Result = Result + s;
      } else Result = s;
      return Result;
    };
    $impl.HexVal = function (s) {
      var Result = 0;
      var i = 0;
      var j = 0;
      if (s.length < 2) {
        Result = 0;
        return Result;
      };
      if (s.charAt(0) >= "A") {
        i = (s.charCodeAt(1 - 1) - 65) + 10}
       else i = s.charCodeAt(1 - 1) - 48;
      if (s.charAt(1) >= "A") {
        j = (s.charCodeAt(2 - 1) - 65) + 10}
       else j = s.charCodeAt(2 - 1) - 48;
      Result = (i << 4) + j;
      return Result;
    };
    $impl.UnicodeTagStrip = function (s) {
      var Result = "";
      var i = 0;
      var j = 0;
      var k = 0;
      var e = 0;
      var nn = 0;
      var su = "";
      var res = "";
      var w = 0;
      var ishex = false;
      function NonNum(aval, dohex) {
        var Result = 0;
        var i = 0;
        var ofs = 0;
        if (dohex) {
          ofs = 4}
         else ofs = 3;
        Result = ofs;
        for (var $l = ofs, $end = aval.length; $l <= $end; $l++) {
          i = $l;
          if (!((aval.charAt(i - 1) >= "0") && (aval.charAt(i - 1) <= "9"))) {
            Result = i;
            break;
          };
          if (dohex && !((aval.charAt(i - 1) >= "A") && (aval.charAt(i - 1) <= "F")) && dohex && !((aval.charAt(i - 1) >= "a") && (aval.charAt(i - 1) <= "f"))) {
            Result = i;
            break;
          };
        };
        return Result;
      };
      res = "";
      do {
        i = pas.System.Pos("&#",s);
        k = pas.System.Pos("&&#",s);
        if ((k === (i - 1)) && (k !== 0)) i = 0;
        if (i > 0) {
          res = res + pas.System.Copy(s,1,i - 1);
          pas.System.Delete({get: function () {
              return s;
            }, set: function (v) {
              s = v;
            }},1,i - 1);
          ishex = pas.System.Pos("&#x",s) === 1;
          j = pas.System.Pos(";",s);
          if (j > 7) {
            nn = NonNum(s,ishex);
            j = nn;
          };
          if (j > 0) {
            if (ishex) {
              su = pas.System.Copy(s,4,j - 4);
              try {
                w = $impl.HexVal(su);
                e = 0;
              } catch ($e) {
                w = 0;
              };
            } else {
              su = pas.System.Copy(s,3,j - 3);
              pas.System.val$6(su,{get: function () {
                  return w;
                }, set: function (v) {
                  w = v;
                }},{get: function () {
                  return e;
                }, set: function (v) {
                  e = v;
                }});
            };
            if ((su.length > 0) && (su.length <= 6) && (e === 0)) {
              res = res + String.fromCharCode(w);
              pas.System.Delete({get: function () {
                  return s;
                }, set: function (v) {
                  s = v;
                }},1,j);
            };
          } else {
            res = res + "&#";
            pas.System.Delete({get: function () {
                return s;
              }, set: function (v) {
                s = v;
              }},1,2);
          };
        } else res = res + s;
      } while (!(i <= 0));
      Result = res;
      return Result;
    };
    $impl.CRLFStrip = function (s, Break) {
      var Result = "";
      var i = 0;
      Result = "";
      for (var $l = 1, $end = s.length; $l <= $end; $l++) {
        i = $l;
        if (!((s.charAt(i - 1) === "\r") || (s.charAt(i - 1) === "\n"))) {
          Result = Result + s.charAt(i - 1)}
         else if ((s.charAt(i - 1) === "\r") && Break) Result = Result + "<BR>";
      };
      return Result;
    };
    $impl.IsCJKChar = function (C) {
      var Result = false;
      Result = false;
      if (C < "✐") return Result;
      var $tmp = C.charCodeAt() & 0xFFFFFFFF;
      if ((($tmp >= 0x4E00) && ($tmp <= 0x9FFF)) || (($tmp >= 0x3400) && ($tmp <= 0x4DBF)) || (($tmp >= 0x20000) && ($tmp <= 0x2A6DF)) || (($tmp >= 0x2A700) && ($tmp <= 0x2B73F)) || (($tmp >= 0x2B740) && ($tmp <= 0x2B81F)) || (($tmp >= 0x2B820) && ($tmp <= 0x2CEAF)) || (($tmp >= 0xF900) && ($tmp <= 0xFAFF)) || (($tmp >= 0x2F800) && ($tmp <= 0x2FA1F))) Result = true;
      return Result;
    };
    $impl.PosBreak = function (A) {
      var Result = 0;
      var I = 0;
      var C = "";
      Result = 0;
      for (var $l = 1, $end = A.length; $l <= $end; $l++) {
        I = $l;
        C = A.charAt(I - 1);
        if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.CharInSet(C,pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.CreateCharSet(" ")) || $impl.IsCJKChar(C)) {
          Result = I;
          break;
        };
      };
      return Result;
    };
  };
},["SysUtils","WEBLib.TMSFNCUtils"]);
//# sourceMappingURL=WEBLib.TMSFNCHTMLEngine.js.map
