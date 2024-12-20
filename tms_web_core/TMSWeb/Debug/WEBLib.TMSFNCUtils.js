rtl.module("WEBLib.TMSFNCUtils",["System","Classes","SysUtils","Types","WEBLib.Graphics","WEBLib.TMSFNCTypes","WEBLib.Controls","WEBLib.Forms","JS","WEBLib.Dialogs","WEBLib.JSON","Web"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.PthDel = "/";
  this.FPC_FULLVERSION = 0;
  this.$rtti.$DynArray("TTMSFNCUtilsCharSet",{eltype: rtl.char});
  rtl.recNewT(this,"TTMSFNCUtilsFile",function () {
    this.Data = null;
    this.Name = "";
    this.$eq = function (b) {
      return (this.Data === b.Data) && (this.Name === b.Name);
    };
    this.$assign = function (s) {
      this.Data = s.Data;
      this.Name = s.Name;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCUtilsFile",{});
    $r.addField("Data",pas.JS.$rtti["TJSUint8Array"]);
    $r.addField("Name",rtl.string);
  });
  this.$rtti.$MethodVar("TTMSFNCUtilsLoadFileCompleteEvent",{procsig: rtl.newTIProcSig([["AFile",this.$rtti["TTMSFNCUtilsFile"],2]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCUtilsFileCallBackEvent",{procsig: rtl.newTIProcSig([["AFile",rtl.string,2],["AResult",rtl.boolean,2]]), methodkind: 0});
  rtl.createClass(this,"TTMSFNCUtils",pas.System.TObject,function () {
    this.GetTimeZoneInfo = function (ABias, ABiasDay, AIsDaylight) {
      var bias = 0;
      var biasday = 0;
      var isDaylight = false;
      Date.prototype.stdTimezoneOffset = function () {
              var jan = new Date(this.getFullYear(), 0, 1);
              var jul = new Date(this.getFullYear(), 6, 1);
              return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
          }
      
          Date.prototype.isDstObserved = function () {
              return this.getTimezoneOffset() < this.stdTimezoneOffset();
          }
          var dt = new Date();
          bias = dt.getTimezoneOffset();
          biasday = dt.stdTimezoneOffset();
          isDaylight = dt.isDstObserved();
      ABias.set(bias);
      ABiasDay.set(biasday);
      AIsDaylight.set(isDaylight);
    };
    this.OpenURL = function (AURL) {
      window.open(AURL, '_blank');
    };
    this.OpenFile = function (AFile, AControlReference) {
    };
    this.GetFonts = function (FontList) {
      FontList.BeginUpdate();
      FontList.Add("Arial");
      FontList.Add("Tahoma");
      FontList.Add("SimSun");
      FontList.Add("Arial Unicode MS");
      FontList.Add("Helvetica");
      FontList.Add("Times New Roman");
      FontList.Add("Times");
      FontList.Add("Courier New");
      FontList.Add("Courier");
      FontList.Add("Verdana");
      FontList.Add("Georgia");
      FontList.Add("Palatino");
      FontList.Add("Garamond");
      FontList.Add("Bookman");
      FontList.Add("Comic Sans MS");
      FontList.Add("Trebuchet MS");
      FontList.Add("Arial Black");
      FontList.Add("Impact");
      FontList.Add("Roboto");
      FontList.Sort();
      FontList.EndUpdate();
    };
    this.SetFontSize = function (AFont, ASize, AScaleFactor) {
      AFont.SetSize(Math.round((ASize / 96) * 72));
    };
    this.ScaleForCurrentDPI = function (AForm) {
      if (AForm != null) ;
    };
    this.ScaleForDPI = function (AControl, ADPI) {
    };
    this.GetHInstance = function () {
      var Result = 0;
      Result = pas["WEBLib.TMSFNCTypes"].HInstance();
      return Result;
    };
    this.IsHTMLUnicode = function (AValue) {
      var Result = false;
      Result = this.IsHTML(AValue);
      return Result;
    };
    this.IsHTML = function (AValue) {
      var Result = false;
      Result = (pas.System.Pos("</",AValue) > 0) || (pas.System.Pos("/>",AValue) > 0) || (pas.System.Pos("<BR>",pas.SysUtils.UpperCase(AValue)) > 0);
      return Result;
    };
    this.GetDocumentsPath = function () {
      var Result = "";
      Result = "";
      return Result;
    };
    this.GetAppPath = function () {
      var Result = "";
      Result = "file://";
      return Result;
    };
    this.GetTempPath = function () {
      var Result = "";
      Result = "";
      return Result;
    };
    this.GetMousePos = function () {
      var Result = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      var p = pas.Types.TPoint.$new();
      Result.$assign(pas["WEBLib.TMSFNCTypes"].PointF(-1,-1));
      p.$assign(pas["WEBLib.Controls"].GetMousePos());
      Result.$assign(pas["WEBLib.TMSFNCTypes"].PointF(p.x,p.y));
      return Result;
    };
    this.IsHighDPIScale = function (AOwner, ADefaultDPI) {
      var Result = false;
      Result = this.GetDPIScale(AOwner,ADefaultDPI) > 1;
      return Result;
    };
    this.GetDPIScale = function (AOwner, ADefaultDPI) {
      var Result = 0.0;
      Result = 1.0;
      return Result;
    };
    this.AddBackslash = function (AValue) {
      var Result = "";
      if ((AValue.length >= 1) && (AValue.charAt(AValue.length - 1) !== $mod.PthDel)) {
        Result = AValue + $mod.PthDel}
       else Result = AValue;
      return Result;
    };
    this.AddForwardslash = function (AValue) {
      var Result = "";
      if ((AValue.length >= 1) && (AValue.charAt(AValue.length - 1) !== "/")) {
        Result = AValue + "/"}
       else Result = AValue;
      return Result;
    };
    this.GetResourceStream = function (AResourceName) {
      var Result = null;
      Result = this.GetResourceStream$1(AResourceName,this.GetHInstance());
      return Result;
    };
    this.GetResourceStream$1 = function (AResourceName, AInstance) {
      rtl.rc(AInstance,0,9007199254740991);
      var Result = null;
      Result = null;
      return Result;
    };
    this.Clone = function (AComponent) {
      var Result = null;
      Result = null;
      throw pas.SysUtils.Exception.$create("Create$1",["Implement Clone"]);
      return Result;
    };
    this.HTMLStrip = function (AHTML) {
      var Result = "";
      var TagPos = 0;
      Result = "";
      while (pas.System.Pos("<BR>",pas.SysUtils.UpperCase(AHTML)) > 0) AHTML = pas.SysUtils.StringReplace(AHTML,"<BR>",String.fromCharCode(13) + String.fromCharCode(10),rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfIgnoreCase));
      while (pas.System.Pos("<HR>",pas.SysUtils.UpperCase(AHTML)) > 0) AHTML = pas.SysUtils.StringReplace(AHTML,"<HR>",String.fromCharCode(13) + String.fromCharCode(10),rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfIgnoreCase));
      TagPos = 0;
      while (this.VarPos("<",AHTML,{get: function () {
          return TagPos;
        }, set: function (v) {
          rtl.rc(v,-2147483648,2147483647);
          TagPos = v;
        }}) > 0) {
        Result = Result + pas.System.Copy(AHTML,1,TagPos - 1);
        if (this.VarPos(">",AHTML,{get: function () {
            return TagPos;
          }, set: function (v) {
            rtl.rc(v,-2147483648,2147483647);
            TagPos = v;
          }}) > 0) {
          pas.System.Delete({get: function () {
              return AHTML;
            }, set: function (v) {
              AHTML = v;
            }},1,TagPos)}
         else break;
      };
      Result = Result + AHTML;
      return Result;
    };
    this.VarPos = function (ASubValue, AValue, AResult) {
      rtl.rc(AResult.get(),-2147483648,2147483647);
      var Result = 0;
      AResult.set(pas.System.Pos(ASubValue,AValue));
      Result = rtl.rc(AResult.get(),-2147483648,2147483647);
      return Result;
    };
    this.VarPosNoCase = function (ASubValue, AValue, AResult) {
      rtl.rc(AResult.get(),-2147483648,2147483647);
      var Result = 0;
      AResult.set(pas.System.Pos(pas.SysUtils.UpperCase(ASubValue),pas.SysUtils.UpperCase(AValue)));
      Result = rtl.rc(AResult.get(),-2147483648,2147483647);
      return Result;
    };
    this.CharInStr = function (s, Index) {
      var Result = "";
      Result = "\x00";
      if ((Index > 0) && (Index <= s.length)) {
        Result = s.charAt(Index - 1);
      };
      return Result;
    };
    this.HexStrToBytes = function (AValue) {
      var Result = [];
      var il = 0;
      var idx = 0;
      var b = [];
      Result = [];
      b = rtl.arraySetLength(b,0,rtl.trunc(AValue.length / 2));
      il = 1;
      idx = 0;
      while (il <= AValue.length) {
        b[idx] = pas.SysUtils.StrToInt("$" + AValue.charAt(il - 1) + AValue.charAt((il + 1) - 1));
        il = il + 2;
        idx = idx + 1;
      };
      Result = rtl.arrayRef(b);
      return Result;
    };
    this.URLDecode = function (AURL, ATrim) {
      var Result = "";
      if (AURL === "") {
        Result = "";
        return Result;
      };
      Result = decodeURIComponent(AURL);
      return Result;
    };
    this.URLEncode = function (AURL) {
      var Result = "";
      Result = encodeURIComponent(AURL);
      return Result;
    };
    this.EnDeCrypt = function (AValue) {
      var Result = "";
      var r = "";
      var i = 0;
      var c = "";
      var b = 0;
      r = "";
      for (var $l = 1, $end = AValue.length; $l <= $end; $l++) {
        i = $l;
        b = AValue.charCodeAt(i - 1);
        b = (b & 0xE0) + ((b & 0x1F) ^ 5);
        c = String.fromCharCode(b);
        r = r + c;
      };
      Result = r;
      return Result;
    };
    this.SaveBitmapToHexStr = function (ABitmap) {
      var Result = "";
      var ms = null;
      var s = "";
      var img = null;
      var ss = null;
      ms = pas.Classes.TMemoryStream.$create("Create");
      try {
        s = "";
        if (!ABitmap.Empty()) {
          img = ABitmap.Image();
          var canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          var dataURL = canvas.toDataURL("image/png");
          s = dataURL;
          ss = pas.Classes.TStringStream.$create("Create$2",[s]);
          try {
            s = this.SaveStreamToHexStr(ss);
          } finally {
            ss = rtl.freeLoc(ss);
          };
        };
        Result = s;
      } finally {
        ms = rtl.freeLoc(ms);
      };
      return Result;
    };
    this.SaveStreamToHexStr = function (AStream) {
      var Result = "";
      var s = "";
      var K = 0;
      var bt = [];
      s = "";
      AStream.SetPosition(0);
      for (var $l = 1, $end = AStream.GetSize(); $l <= $end; $l++) {
        K = $l;
        bt = rtl.arraySetLength(bt,0,1);
        AStream.Read({get: function () {
            return bt;
          }, set: function (v) {
            bt = v;
          }},1);
        s = s + pas.SysUtils.IntToHex(bt[0],2);
      };
      Result = s;
      return Result;
    };
    this.SaveBitmapToBase64 = function (ABitmap, AURL) {
      var Result = "";
      var ms = null;
      var s = "";
      var img = null;
      var ss = null;
      ms = pas.Classes.TMemoryStream.$create("Create");
      try {
        s = "";
        if (!ABitmap.Empty()) {
          img = ABitmap.Image();
          var canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          var dataURL = canvas.toDataURL("image/png");
          s = dataURL;
        };
        Result = s;
      } finally {
        ms = rtl.freeLoc(ms);
      };
      return Result;
    };
    this.SaveStreamToBase64 = function (AStream, AURL) {
      var Result = "";
      var s = "";
      var K = 0;
      var bt = [];
      var a = [];
      s = "";
      AStream.SetPosition(0);
      for (var $l = 1, $end = AStream.GetSize(); $l <= $end; $l++) {
        K = $l;
        bt = rtl.arraySetLength(bt,0,1);
        AStream.Read({get: function () {
            return bt;
          }, set: function (v) {
            bt = v;
          }},1);
        a = rtl.arraySetLength(a,0,rtl.length(a) + 1);
        a[rtl.length(a) - 1] = bt[0];
      };
      Result = $mod.TTMSFNCUtils.Encode64$1(a,AURL);
      return Result;
    };
    this.CreateBitmapFromHexStr = function (AHexStr) {
      var Result = null;
      Result = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
      this.LoadBitmapFromHexStr(AHexStr,Result);
      return Result;
    };
    this.CreateBitmapFromBase64 = function (ABase64, AURL) {
      var Result = null;
      Result = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
      this.LoadBitmapFromBase64(ABase64,Result,AURL);
      return Result;
    };
    this.MulDivInt = function (nNumber, nNumerator, nDenominator) {
      var $Self = this;
      var Result = 0;
      function MathRound(AValue) {
        var Result = 0;
        if (AValue >= 0) {
          Result = pas.System.Trunc(AValue + 0.5)}
         else Result = pas.System.Trunc(AValue - 0.5);
        return Result;
      };
      if (nDenominator === 0) {
        Result = -1}
       else Result = MathRound((nNumber * nNumerator) / nDenominator);
      return Result;
    };
    this.MulDivSingle = function (nNumber, nNumerator, nDenominator) {
      var Result = 0.0;
      if (nDenominator === 0) {
        Result = -1}
       else Result = (nNumber * nNumerator) / nDenominator;
      return Result;
    };
    var Measure = ["Bytes","KB","MB","GB","TB"];
    this.FormatBytesAsString = function (ASize) {
      var Result = "";
      var NewSize = 0.0;
      var i = 0;
      Result = "";
      if (ASize > -1) {
        i = 0;
        NewSize = ASize;
        while (NewSize >= 1024) {
          NewSize = NewSize / 1024;
          i += 1;
        };
        var $tmp = i;
        if ($tmp === 0) {
          Result = pas.SysUtils.FloatToStr(NewSize)}
         else if (($tmp === 1) || ($tmp === 2) || ($tmp === 3) || ($tmp === 4)) {
          Result = pas.SysUtils.FormatFloat("0.00",NewSize)}
         else {
          Result = pas.SysUtils.FloatToStr(NewSize);
        };
        Result = Result + " " + Measure[i];
      };
      return Result;
    };
    this.GetImageType = function (AData, AResetPosition) {
      var Result = "";
      Result = "";
      throw pas.SysUtils.Exception.$create("Create$1",["Implement GetImageType"]);
      return Result;
    };
    this.LoadBitmapFromHexStr = function (AHexStr, ABitmap) {
      var sst = null;
      var sb = null;
      var bst = null;
      var M = 0;
      var bt = [];
      var hx = "";
      sst = pas.Classes.TStringStream.$create("Create$2",[AHexStr]);
      bst = pas.Classes.TBytesStream.$create("Create");
      try {
        for (var $l = 1, $end = rtl.trunc(sst.GetSize() / 2); $l <= $end; $l++) {
          M = $l;
          bt = this.HexStrToBytes(sst.ReadString(2));
          bst.Write(bt,rtl.length(bt));
        };
        bst.SetPosition(0);
        hx = "";
        sb = pas.Classes.TStringStream.$create("Create$2",[""]);
        try {
          sb.CopyFrom(bst,bst.GetSize());
          hx = sb.GetDataString();
        } finally {
          sb = rtl.freeLoc(sb);
        };
        if (!(pas.System.Pos(";base64,",hx) > 0)) {
          ABitmap.LoadFromStream(bst);
        } else {
          ABitmap.LoadFromResource(hx);
        };
      } finally {
        sst = rtl.freeLoc(sst);
        bst = rtl.freeLoc(bst);
      };
    };
    this.LoadStreamFromHexStr = function (AHexStr, AStream) {
      var sst = null;
      var bst = null;
      var M = 0;
      var bt = [];
      sst = pas.Classes.TStringStream.$create("Create$2",[AHexStr]);
      bst = pas.Classes.TBytesStream.$create("Create");
      try {
        for (var $l = 1, $end = rtl.trunc(sst.GetSize() / 2); $l <= $end; $l++) {
          M = $l;
          bt = this.HexStrToBytes(sst.ReadString(2));
          bst.Write(bt,rtl.length(bt));
        };
        bst.SetPosition(0);
        AStream.CopyFrom(bst,bst.GetSize());
      } finally {
        sst = rtl.freeLoc(sst);
        bst = rtl.freeLoc(bst);
      };
    };
    this.LoadBitmapFromBase64 = function (ABase64, ABitmap, AURL) {
      var s = "";
      s = ABase64;
      if (!(pas.System.Pos(";base64,",s) > 0)) s = "data:image/png;base64," + s;
      ABitmap.LoadFromResource(s);
    };
    this.LoadStreamFromBase64 = function (ABase64, AStream, AURL) {
      var b = [];
      b = $mod.TTMSFNCUtils.Decode64ToBytes(ABase64,AURL);
      AStream.Write(b,rtl.length(b));
    };
    this.ConvertBitmapToJPEGStream = function (ABitmap, AQuality, ABackgroundColor) {
      var Result = null;
      Result = null;
      throw pas.SysUtils.Exception.$create("Create$1",["ConvertBitmapToJPEGStream"]);
      return Result;
    };
    this.Split = function (ADelimiter, AInput, AStrings, AClearEmptyStrings) {
      rtl.rcc(ADelimiter,0,65535);
      var C = 0;
      AStrings.Clear();
      AStrings.SetDelimiter(ADelimiter);
      AStrings.FStrictDelimiter = true;
      AStrings.SetDelimitedText(AInput);
      if (AClearEmptyStrings) {
        for (var $l = AStrings.GetCount() - 1; $l >= 0; $l--) {
          C = $l;
          if (AStrings.Get(C) === "") AStrings.Delete(C);
        };
      };
    };
    this.Log = function (AMessage) {
      var m = "";
      m = AMessage;
      console.log(m);
    };
    this.EpochToDateTime = function (AEpoch) {
      var Result = 0.0;
      var dw = 0;
      dw = pas.SysUtils.StrToInt(AEpoch);
      Result = pas.DateUtils.UnixToDateTime(dw);
      return Result;
    };
    this.SplitURL = function (AURL, AHost, APath, AQuery, APort) {
      rtl.rc(APort.get(),-2147483648,2147483647);
      var p = 0;
      var off = 0;
      var portVal = 0;
      p = rtl.rc(pas.System.Pos("?",AURL),-2147483648,2147483647);
      if (p > 0) {
        AQuery.set(pas.System.Copy(AURL,p + 1,AURL.length));
        AURL = pas.System.Copy(AURL,0,p - 1);
      } else AQuery.set("");
      if (pas.System.Pos("http",pas.SysUtils.LowerCase(AURL)) === 0) AURL = "https://" + AURL;
      off = 9;
      p = rtl.rc(pas.System.Pos$1("/",AURL,off),-2147483648,2147483647);
      if (p > 0) {
        APath.set(pas.System.Copy(AURL,p,AURL.length));
        AURL = pas.System.Copy(AURL,0,p - 1);
      } else APath.set("");
      p = rtl.rc(pas.System.Pos$1(":",AURL,off),-2147483648,2147483647);
      if (p > 0) {
        portVal = 0;
        pas.SysUtils.TryStrToInt(pas.System.Copy(AURL,p + 1,AURL.length),{get: function () {
            return portVal;
          }, set: function (v) {
            rtl.rc(v,-2147483648,2147483647);
            portVal = v;
          }});
        APort.set(portVal);
        AURL = pas.SysUtils.TStringHelper.Substring$1.call({get: function () {
            return AURL;
          }, set: function (v) {
            AURL = v;
          }},0,p - 1);
      } else APort.set(0);
      AHost.set(AURL);
    };
    this.PlayAudio = function (AAudioBase64) {
      var b64 = "";
      try {
        b64 = AAudioBase64;
        try {
          var snd = new Audio("data:audio/wav;base64," + b64);
          snd.play();
        } finally {
        };
      } finally {
      };
    };
    this.DateTimeToISO = function (ADateTime, AAddDelimiters, AAddMilliSeconds) {
      var $Self = this;
      var Result = "";
      var da = 0;
      var mo = 0;
      var ye = 0;
      var ho = 0;
      var mi = 0;
      var se = 0;
      var ms = 0;
      var dd = "";
      var td = "";
      var msec = "";
      function IntToZStr(i, l) {
        var Result = "";
        var Res = "";
        Res = pas.SysUtils.IntToStr(i);
        while (Res.length < l) Res = "0" + Res;
        Result = Res;
        return Result;
      };
      if (AAddDelimiters) {
        dd = "-";
        td = ":";
      };
      pas.SysUtils.DecodeDate(ADateTime,{get: function () {
          return ye;
        }, set: function (v) {
          ye = v;
        }},{get: function () {
          return mo;
        }, set: function (v) {
          mo = v;
        }},{get: function () {
          return da;
        }, set: function (v) {
          da = v;
        }});
      pas.SysUtils.DecodeTime(ADateTime,{get: function () {
          return ho;
        }, set: function (v) {
          ho = v;
        }},{get: function () {
          return mi;
        }, set: function (v) {
          mi = v;
        }},{get: function () {
          return se;
        }, set: function (v) {
          se = v;
        }},{get: function () {
          return ms;
        }, set: function (v) {
          ms = v;
        }});
      if (AAddMilliSeconds) msec = "." + IntToZStr(ms,3) + "Z";
      Result = IntToZStr(ye,4) + dd + IntToZStr(mo,2) + dd + IntToZStr(da,2) + "T" + IntToZStr(ho,2) + td + IntToZStr(mi,2) + td + IntToZStr(se,2) + msec;
      return Result;
    };
    this.DateToISO = function (ADate, AAddDelimiters) {
      var $Self = this;
      var Result = "";
      var da = 0;
      var mo = 0;
      var ye = 0;
      var dd = "";
      function IntToZStr(i, l) {
        var Result = "";
        var Res = "";
        Res = pas.SysUtils.IntToStr(i);
        while (Res.length < l) Res = "0" + Res;
        Result = Res;
        return Result;
      };
      if (AAddDelimiters) dd = "-";
      pas.SysUtils.DecodeDate(ADate,{get: function () {
          return ye;
        }, set: function (v) {
          ye = v;
        }},{get: function () {
          return mo;
        }, set: function (v) {
          mo = v;
        }},{get: function () {
          return da;
        }, set: function (v) {
          da = v;
        }});
      Result = IntToZStr(ye,4) + dd + IntToZStr(mo,2) + dd + IntToZStr(da,2);
      return Result;
    };
    var STimePrefix = "T";
    this.ISOToDateTime = function (AISOString, AIsUTC) {
      var $Self = this;
      var Result = 0.0;
      var TimeString = "";
      var DateString = "";
      var TimePosition = 0;
      var SignPosition = 0;
      var da = 0;
      var mo = 0;
      var ye = 0;
      var ho = 0;
      var mi = 0;
      var se = 0;
      var HourOffset = 0;
      var MinuteOffset = 0;
      var err = 0;
      var sign = "";
      var s = "";
      var dt = 0.0;
      var dtt = 0.0;
      function AdjustDateTime(ADate, AHourOffset, AMinuteOffset) {
        var Result = 0.0;
        var AdjustDT = 0.0;
        var BiasLocal = 0;
        var BiasTime = 0;
        var BiasHour = 0;
        var BiasMins = 0;
        var BiasDT = 0.0;
        Result = ADate;
        if (AIsUTC) {
          if ((AHourOffset !== 0) || (AMinuteOffset !== 0)) {
            AdjustDT = pas.SysUtils.EncodeTime(Math.abs(AHourOffset),Math.abs(AMinuteOffset),0,0);
            if (((AHourOffset * 60) + AMinuteOffset) > 0) {
              Result = Result - AdjustDT}
             else Result = Result + AdjustDT;
          };
        } else {
          var dt = new Date();
          BiasLocal = dt.getTimezoneOffset();
          BiasTime = (AHourOffset * 60) + AMinuteOffset;
          if ((BiasLocal + BiasTime) === 0) return Result;
          BiasLocal = BiasLocal + BiasTime;
          BiasHour = rtl.trunc(Math.abs(BiasLocal) / 60);
          BiasMins = Math.abs(BiasLocal) % 60;
          BiasDT = pas.SysUtils.EncodeTime(BiasHour,BiasMins,0,0);
          if (BiasLocal > 0) {
            Result = Result - BiasDT}
           else Result = Result + BiasDT;
        };
        return Result;
      };
      Result = 0;
      s = AISOString;
      HourOffset = 0;
      MinuteOffset = 0;
      TimePosition = pas.System.Pos(STimePrefix,s);
      if (TimePosition >= 0) {
        DateString = pas.System.Copy(s,0,TimePosition);
        TimeString = pas.System.Copy(s,TimePosition + 1,s.length);
      };
      pas.System.val$5(pas.System.Copy(s,1,4),{get: function () {
          return ye;
        }, set: function (v) {
          ye = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      if (err > 0) return Result;
      pas.System.val$5(pas.System.Copy(s,6,2),{get: function () {
          return mo;
        }, set: function (v) {
          mo = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      if (err > 0) return Result;
      pas.System.val$5(pas.System.Copy(s,9,2),{get: function () {
          return da;
        }, set: function (v) {
          da = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      if (err > 0) return Result;
      pas.System.val$5(pas.System.Copy(s,12,2),{get: function () {
          return ho;
        }, set: function (v) {
          ho = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      if (err > 0) return Result;
      pas.System.val$5(pas.System.Copy(s,15,2),{get: function () {
          return mi;
        }, set: function (v) {
          mi = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      if (err > 0) return Result;
      pas.System.val$5(pas.System.Copy(s,18,2),{get: function () {
          return se;
        }, set: function (v) {
          se = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      if (err > 0) return Result;
      if (ye < 1) ye = 1;
      if (mo < 1) mo = 1;
      if (da < 1) da = 1;
      if (pas.System.Pos(".",s) > 0) {
        SignPosition = 24}
       else SignPosition = 20;
      if (s.length > SignPosition) {
        sign = pas.System.Copy(s,SignPosition,1);
        if ((sign === "-") || (sign === "+")) {
          pas.System.val$6(pas.System.Copy(s,SignPosition + 1,2),{get: function () {
              return HourOffset;
            }, set: function (v) {
              HourOffset = v;
            }},{get: function () {
              return err;
            }, set: function (v) {
              err = v;
            }});
          if (err > 0) return Result;
          pas.System.val$6(pas.System.Copy(s,SignPosition + 4,2),{get: function () {
              return MinuteOffset;
            }, set: function (v) {
              MinuteOffset = v;
            }},{get: function () {
              return err;
            }, set: function (v) {
              err = v;
            }});
          if (err > 0) return Result;
          if (sign === "-") {
            HourOffset = HourOffset * -1;
            MinuteOffset = MinuteOffset * -1;
          };
        };
      };
      if (pas.SysUtils.TryEncodeDate(ye,mo,da,{get: function () {
          return dt;
        }, set: function (v) {
          dt = v;
        }}) && pas.SysUtils.TryEncodeTime(ho,mi,se,0,{get: function () {
          return dtt;
        }, set: function (v) {
          dtt = v;
        }})) {
        Result = dt + dtt;
        Result = AdjustDateTime(Result,HourOffset,MinuteOffset);
      };
      return Result;
    };
    this.ISOToDate = function (AISOString) {
      var Result = 0.0;
      var da = 0;
      var mo = 0;
      var ye = 0;
      var err = 0;
      var s = "";
      s = AISOString;
      pas.System.val$5(pas.System.Copy(s,1,4),{get: function () {
          return ye;
        }, set: function (v) {
          ye = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      pas.System.val$5(pas.System.Copy(s,6,2),{get: function () {
          return mo;
        }, set: function (v) {
          mo = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      pas.System.val$5(pas.System.Copy(s,9,2),{get: function () {
          return da;
        }, set: function (v) {
          da = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      if (ye < 1) ye = 1;
      if (mo < 1) mo = 1;
      if (da < 1) da = 1;
      Result = pas.SysUtils.EncodeDate(ye,mo,da) + pas.SysUtils.EncodeTime(0,0,0,0);
      return Result;
    };
    this.DateTimeToUTC = function (ADateTime) {
      var $Self = this;
      var Result = "";
      var da = 0;
      var mo = 0;
      var ye = 0;
      var ho = 0;
      var mi = 0;
      var se = 0;
      var ms = 0;
      var bias = 0;
      var biasday = 0;
      var isDayLight = false;
      function IntToZStr(i, l) {
        var Result = "";
        var Res = "";
        Res = pas.SysUtils.IntToStr(i);
        while (Res.length < l) Res = "0" + Res;
        Result = Res;
        return Result;
      };
      bias = 0;
      biasday = 0;
      isDayLight = false;
      this.GetTimeZoneInfo({get: function () {
          return bias;
        }, set: function (v) {
          bias = v;
        }},{get: function () {
          return biasday;
        }, set: function (v) {
          biasday = v;
        }},{get: function () {
          return isDayLight;
        }, set: function (v) {
          isDayLight = v;
        }});
      pas.SysUtils.DecodeDate(ADateTime,{get: function () {
          return ye;
        }, set: function (v) {
          ye = v;
        }},{get: function () {
          return mo;
        }, set: function (v) {
          mo = v;
        }},{get: function () {
          return da;
        }, set: function (v) {
          da = v;
        }});
      pas.SysUtils.DecodeTime(ADateTime,{get: function () {
          return ho;
        }, set: function (v) {
          ho = v;
        }},{get: function () {
          return mi;
        }, set: function (v) {
          mi = v;
        }},{get: function () {
          return se;
        }, set: function (v) {
          se = v;
        }},{get: function () {
          return ms;
        }, set: function (v) {
          ms = v;
        }});
      Result = pas.SysUtils.IntToStr(ye) + "-" + IntToZStr(mo,2) + "-" + IntToZStr(da,2) + "T" + IntToZStr(ho,2) + ":" + IntToZStr(mi,2) + ":" + IntToZStr(se,2);
      if (isDayLight) {
        if (bias <= 0) {
          Result = Result + "+" + IntToZStr(rtl.trunc((-bias - biasday) / 60),2) + ":00"}
         else Result = Result + "-" + IntToZStr(rtl.trunc((bias + biasday) / 60),2) + ":00";
      } else {
        if (bias !== 0) {
          if (bias <= 0) {
            Result = Result + "+" + IntToZStr(rtl.trunc(-bias / 60),2) + ":00"}
           else Result = Result + "-" + IntToZStr(rtl.trunc(bias / 60),2) + ":00";
        } else Result = Result + "+00:00";
      };
      return Result;
    };
    var UnixStartDate = 25569;
    this.DateTimeToMilliSeconds = function (ADateTime) {
      var Result = 0;
      var bias = 0;
      var biasday = 0;
      var isDayLight = false;
      bias = 0;
      biasday = 0;
      isDayLight = false;
      this.GetTimeZoneInfo({get: function () {
          return bias;
        }, set: function (v) {
          bias = v;
        }},{get: function () {
          return biasday;
        }, set: function (v) {
          biasday = v;
        }},{get: function () {
          return isDayLight;
        }, set: function (v) {
          isDayLight = v;
        }});
      if (isDayLight) {
        Result = pas.DateUtils.MilliSecondsBetween(pas.DateUtils.IncHour(ADateTime,rtl.trunc((bias + biasday) / 60)),UnixStartDate)}
       else Result = pas.DateUtils.MilliSecondsBetween(pas.DateUtils.IncHour(ADateTime,rtl.trunc(bias / 60)),UnixStartDate);
      return Result;
    };
    this.GetMimeType = function (AFile) {
      var Result = "";
      var e = "";
      e = pas.SysUtils.ExtractFileExt(AFile);
      e = pas.SysUtils.LowerCase(pas.SysUtils.Trim(e));
      if ((e !== "") && (e.charAt(0) === ".")) e = pas.System.Copy(e,2,e.length - 1);
      Result = "";
      if ($impl.FMimeTypes != null) Result = $impl.FMimeTypes.GetValue(e);
      if (Result === "") Result = "application/octet-stream";
      return Result;
    };
    this.GetMimeType$1 = function (AData, AResetPosition) {
      var Result = "";
      Result = "";
      throw pas.SysUtils.Exception.$create("Create$1",["Implement GetMimeType"]);
      return Result;
    };
    this.GetFileExtension = function (AMime) {
      var Result = "";
      var I = 0;
      var e = "";
      e = pas.SysUtils.LowerCase(AMime);
      Result = "";
      if ($impl.FMimeTypes != null) {
        for (var $l = 0, $end = $impl.FMimeTypes.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          if ($impl.FMimeTypes.GetValueFromIndex(I) === e) {
            Result = $impl.FMimeTypes.GetName(I);
            return Result;
          };
        };
      };
      return Result;
    };
    this.FileToBase64 = function (AFile) {
      var Result = "";
      var s = "";
      function uint8ToString(buf) {
        var i, length, out = '';
        for (i = 0, length = buf.length; i < length; i += 1) {
            out += String.fromCharCode(buf[i]);
        }
        return out;
      }
      s = btoa(uint8ToString(AFile.Data));
      Result = s;
      return Result;
    };
    this.LoadFile = function (AFile, ALoadFileComplete) {
      var f = null;
      var c = null;
      var ua = null;
      if (1 < 0) $mod.CreateUploadFile("file",ua);
      f = AFile;
      c = ALoadFileComplete;
      var reader = new FileReader();
      
          reader.onload = function(e) {
            var s = new Uint8Array(reader.result);
            var fn = pas["WEBLib.TMSFNCUtils"].CreateUploadFile(f.name, s);
            if (c){
              c(fn);
            }
          }
      
          reader.readAsArrayBuffer(f);
    };
    this.Decode64 = function (AValue, AURL) {
      var Result = "";
      var s = "";
      Result = "";
      if (AValue.length === 0) return Result;
      s = AValue;
      if (AURL) {
        s = s + pas.System.StringOfChar("=",s.length % 4);
        s = pas.SysUtils.StringReplace(s,"-","+",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
        s = pas.SysUtils.StringReplace(s,"_","/",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
      };
      function b64DecodeUnicode(str) {
        var binary_string = window.atob(str);
        return binary_string;
      }
      return b64DecodeUnicode(s);
      return Result;
    };
    this.Encode64 = function (AValue, AURL) {
      var Result = "";
      var s = "";
      var v = "";
      Result = "";
      if (AValue.length === 0) return Result;
      v = AValue;
      function b64EncodeUnicode(str) {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
            function toSolidBytes(match, p1) {
                return String.fromCharCode('0x' + p1);
        }));
      }
      s = b64EncodeUnicode(v);
      if (AURL) {
        s = pas.SysUtils.StringReplace(s,"+","-",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll,pas.SysUtils.TStringReplaceFlag.rfIgnoreCase));
        s = pas.SysUtils.StringReplace(s,"/","_",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll,pas.SysUtils.TStringReplaceFlag.rfIgnoreCase));
        s = pas.SysUtils.StringReplace(s,"=","",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll,pas.SysUtils.TStringReplaceFlag.rfIgnoreCase));
      };
      Result = s;
      return Result;
    };
    this.Encode64$1 = function (AValue, AURL) {
      var Result = "";
      var s = "";
      var v = [];
      Result = "";
      if (rtl.length(AValue) === 0) return Result;
      v = rtl.arrayRef(AValue);
      s = "";
      function _arrayBufferToBase64( buffer ) {
              var binary = '';
              var bytes = new Uint8Array( buffer );
              var len = bytes.byteLength;
              for (var i = 0; i < len; i++) {
                  binary += String.fromCharCode( bytes[ i ] );
              }
              return window.btoa( binary );
          }
      
          s = _arrayBufferToBase64(v);
      if (AURL) {
        s = pas.SysUtils.StringReplace(s,"+","-",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll,pas.SysUtils.TStringReplaceFlag.rfIgnoreCase));
        s = pas.SysUtils.StringReplace(s,"/","_",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll,pas.SysUtils.TStringReplaceFlag.rfIgnoreCase));
        s = pas.SysUtils.StringReplace(s,"=","",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll,pas.SysUtils.TStringReplaceFlag.rfIgnoreCase));
      };
      Result = s;
      return Result;
    };
    this.GetJSONProp = function (AJSONValue, APropertyName) {
      var Result = "";
      var v = null;
      Result = "";
      v = this.GetJSONValue(AJSONValue,APropertyName);
      if ((v != null) && !pas["WEBLib.JSON"].TJSONNull.isPrototypeOf(v)) Result = v.GetStrValue();
      return Result;
    };
    this.GetJSONValueAsBoolean = function (AJSONValue) {
      var Result = false;
      Result = false;
      if (AJSONValue != null) {
        Result = pas["WEBLib.JSON"].TJSONTrue.isPrototypeOf(AJSONValue);
      };
      return Result;
    };
    this.GetJSONValueAsString = function (AJSONValue) {
      var Result = "";
      Result = "";
      if (AJSONValue != null) {
        Result = AJSONValue.ToString();
      };
      return Result;
    };
    this.GetJSONValue = function (AJSONValue, APropertyName) {
      var Result = null;
      Result = null;
      try {
        if (pas["WEBLib.JSON"].TJSONObject.isPrototypeOf(AJSONValue)) {
          Result = rtl.as(AJSONValue,pas["WEBLib.JSON"].TJSONObject).GetValue$1(APropertyName);
        };
      } catch ($e) {
      };
      return Result;
    };
    this.FindJSONValue = function (AJSONValue, APath) {
      var Result = null;
      Result = null;
      try {
        if (AJSONValue != null) {
          Result = this.GetJSONValue(AJSONValue,APath);
        };
      } catch ($e) {
      };
      return Result;
    };
    this.GetJSONDoubleValue = function (AJSONValue, APropertyName) {
      var Result = 0.0;
      Result = this.GetJSONValueAsDouble(this.GetJSONValue(AJSONValue,APropertyName));
      return Result;
    };
    this.GetJSONValueAsDouble = function (AJSONValue) {
      var Result = 0.0;
      var v = null;
      Result = 0;
      v = AJSONValue;
      if ((v != null) && pas["WEBLib.JSON"].TJSONNumber.isPrototypeOf(v)) {
        Result = rtl.as(v,pas["WEBLib.JSON"].TJSONNumber).FDouble;
      };
      return Result;
    };
    this.GetJSONIntegerValue = function (AJSONValue, APropertyName) {
      var Result = 0;
      Result = this.GetJSONValueAsInteger(this.GetJSONValue(AJSONValue,APropertyName));
      return Result;
    };
    this.GetJSONValueAsInteger = function (AJSONValue) {
      var Result = 0;
      var v = null;
      Result = 0;
      v = AJSONValue;
      if ((v != null) && pas["WEBLib.JSON"].TJSONNumber.isPrototypeOf(v)) {
        Result = rtl.as(v,pas["WEBLib.JSON"].TJSONNumber).FInt;
      };
      return Result;
    };
    this.IsJSONTrue = function (AJSONValue) {
      var Result = false;
      Result = false;
      if (AJSONValue != null) Result = AJSONValue.GetStrValue() === "true";
      return Result;
    };
    this.IsJSONFalse = function (AJSONValue) {
      var Result = false;
      Result = false;
      if (AJSONValue != null) Result = AJSONValue.GetStrValue() === "false";
      return Result;
    };
    this.GetJSONArraySize = function (AJSONArray) {
      var Result = 0;
      Result = AJSONArray.GetCount();
      return Result;
    };
    this.GetJSONArrayItem = function (AJSONArray, AIndex) {
      var Result = null;
      Result = null;
      if ((AIndex >= 0) && (AIndex <= (this.GetJSONArraySize(AJSONArray) - 1))) {
        Result = AJSONArray.GetItem(AIndex);
      };
      return Result;
    };
    this.GetJSONObjectSize = function (AJSONObject) {
      var Result = 0;
      Result = AJSONObject.GetCount();
      return Result;
    };
    this.GetJSONObjectItem = function (AJSONObject, AIndex) {
      var Result = null;
      Result = null;
      if ((AIndex >= 0) && (AIndex <= (this.GetJSONObjectSize(AJSONObject) - 1))) {
        Result = AJSONObject.GetItem(AIndex);
      };
      return Result;
    };
    this.GetJSONObjectName = function (AJSONObject, AIndex) {
      var Result = "";
      var p = null;
      Result = "";
      if ((AIndex >= 0) && (AIndex <= (this.GetJSONObjectSize(AJSONObject) - 1))) {
        p = AJSONObject.Get$1(AIndex);
        if (p != null) Result = p.fjs.GetStrValue();
      };
      return Result;
    };
    this.ParseJSON = function (AJSON) {
      var Result = null;
      Result = pas["WEBLib.JSON"].TJSONObject.ParseJSONValue(AJSON);
      return Result;
    };
    this.IsJSON = function (AJSON) {
      var Result = false;
      var v = null;
      v = this.ParseJSON(AJSON);
      Result = false;
      if (v != null) {
        Result = true;
        v = rtl.freeLoc(v);
      };
      return Result;
    };
    this.StrToFloatDot = function (AValue) {
      var Result = 0.0;
      var d = "";
      var t = "";
      t = pas.SysUtils.FormatSettings.ThousandSeparator;
      d = pas.SysUtils.FormatSettings.DecimalSeparator;
      pas.SysUtils.FormatSettings.DecimalSeparator = ".";
      pas.SysUtils.FormatSettings.ThousandSeparator = ",";
      Result = pas.SysUtils.StrToFloat(AValue);
      pas.SysUtils.FormatSettings.ThousandSeparator = t;
      pas.SysUtils.FormatSettings.DecimalSeparator = d;
      return Result;
    };
    this.FloatToStrDot = function (AValue) {
      var Result = "";
      var d = "";
      var t = "";
      t = pas.SysUtils.FormatSettings.ThousandSeparator;
      d = pas.SysUtils.FormatSettings.DecimalSeparator;
      pas.SysUtils.FormatSettings.DecimalSeparator = ".";
      pas.SysUtils.FormatSettings.ThousandSeparator = ",";
      Result = pas.SysUtils.FloatToStr(AValue);
      pas.SysUtils.FormatSettings.ThousandSeparator = t;
      pas.SysUtils.FormatSettings.DecimalSeparator = d;
      return Result;
    };
    this.TryStrToFloatDot = function (AValue, AResult) {
      var Result = false;
      var d = "";
      var t = "";
      t = pas.SysUtils.FormatSettings.ThousandSeparator;
      d = pas.SysUtils.FormatSettings.DecimalSeparator;
      pas.SysUtils.FormatSettings.DecimalSeparator = ".";
      pas.SysUtils.FormatSettings.ThousandSeparator = ",";
      Result = pas.SysUtils.TryStrToFloat$2(AValue,AResult);
      pas.SysUtils.FormatSettings.ThousandSeparator = t;
      pas.SysUtils.FormatSettings.DecimalSeparator = d;
      return Result;
    };
    this.Decode64ToBytes = function (AValue, AURL) {
      var Result = [];
      var s = "";
      var ss = null;
      Result = [];
      if (AValue.length === 0) return Result;
      s = AValue;
      if (AURL) {
        s = s + pas.System.StringOfChar("=",s.length % 4);
        s = pas.SysUtils.StringReplace(s,"-","+",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
        s = pas.SysUtils.StringReplace(s,"_","/",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
      };
      function b64DecodeUnicode(str) {
        var binary_string = window.atob(str);
        return binary_string;
      }
      s = b64DecodeUnicode(s);
      ss = pas.Classes.TStringStream.$create("Create$3",["",pas.Classes.TEncoding.GetUTF8(),true]);
      try {
        ss.WriteString(s);
        Result = pas["WEBLib.TMSFNCTypes"].TTMSFNCMemoryStream.GetBytes.call(ss);
      } finally {
        ss = rtl.freeLoc(ss);
      };
      return Result;
    };
    this.MatchStrEx = function (AValue1, AValue2, ACaseSensitive) {
      var Result = false;
      var ch = "";
      var lastop = "";
      var sep = 0;
      var cp = 0;
      var res = false;
      var newres = false;
      var CharArray = [];
      AValue1 = pas.SysUtils.Trim(AValue1);
      AValue1 = this.StripLogicSpaces(AValue1);
      sep = rtl.rc(-1,-2147483648,2147483647);
      if ($mod.TTMSFNCUtils.VarPos("=",AValue1,{get: function () {
          return sep;
        }, set: function (v) {
          rtl.rc(v,-2147483648,2147483647);
          sep = v;
        }}) === 1) pas.System.Delete({get: function () {
          return AValue1;
        }, set: function (v) {
          AValue1 = v;
        }},sep,1);
      lastop = "\x00";
      res = true;
      CharArray = rtl.arraySetLength(CharArray,"",5);
      CharArray[0] = "(";
      CharArray[1] = ";";
      CharArray[2] = "^";
      CharArray[3] = "&";
      CharArray[4] = "|";
      if (AValue1 === "") {
        Result = AValue2 === "";
        return Result;
      };
      if ((AValue1 !== "*") && (AValue2 === "")) {
        Result = false;
        return Result;
      };
      do {
        ch = rtl.rcc(this.FirstChar(rtl.arrayRef(CharArray),AValue1,{get: function () {
            return sep;
          }, set: function (v) {
            rtl.rc(v,-2147483648,2147483647);
            sep = v;
          }}),0,65535);
        if (ch !== "\x00") {
          if ((AValue1.length > 0) && (rtl.rcCharAt(AValue1,0) === "(") && (pas.System.Pos("(",AValue1) > 0)) {
            cp = rtl.rc(this.ClosingParenthesis(AValue1),-2147483648,2147483647);
            newres = this.MatchStrEx(pas.System.Copy(AValue1,2,cp - 2),AValue2,ACaseSensitive);
            pas.System.Delete({get: function () {
                return AValue1;
              }, set: function (v) {
                AValue1 = v;
              }},1,cp);
          } else {
            newres = this.MatchStr(pas.System.Copy(AValue1,1,sep - 1),AValue2,ACaseSensitive);
            pas.System.Delete({get: function () {
                return AValue1;
              }, set: function (v) {
                AValue1 = v;
              }},1,sep);
          };
          if (lastop === "\x00") {
            res = newres}
           else {
            var $tmp = lastop;
            if (($tmp === ";") || ($tmp === "^") || ($tmp === "|")) {
              res = res || newres}
             else if ($tmp === "&") res = res && newres;
          };
          lastop = rtl.rcc(ch,0,65535);
        };
      } while (!(ch === "\x00"));
      newres = this.MatchStr(AValue1,AValue2,ACaseSensitive);
      if (lastop === "\x00") {
        res = newres}
       else {
        var $tmp1 = lastop;
        if (($tmp1 === ";") || ($tmp1 === "^") || ($tmp1 === "|")) {
          res = res || newres}
         else if ($tmp1 === "&") res = res && newres;
      };
      Result = res;
      return Result;
    };
    this.MatchStr = function (AValue1, AValue2, ACaseSensitive) {
      var Result = false;
      if (ACaseSensitive) {
        Result = this.Matches(AValue1,AValue2)}
       else Result = this.Matches(pas["WEBLib.TMSFNCTypes"].AnsiUpperCase(AValue1),pas["WEBLib.TMSFNCTypes"].AnsiUpperCase(AValue2));
      return Result;
    };
    this.StripLogicSpaces = function (AValue) {
      var Result = "";
      var i = 0;
      var k = 0;
      var q = 0;
      q = 0;
      i = 1;
      k = AValue.length;
      Result = "";
      while (i <= k) {
        if (AValue.charAt(i - 1) === '"') q += 1;
        if (AValue.charAt(i - 1) === " ") {
          if (pas.System.Odd(q)) Result = Result + AValue.charAt(i - 1);
        } else Result = Result + AValue.charAt(i - 1);
        i += 1;
      };
      return Result;
    };
    this.FirstChar = function (ACharset, AValue, spos) {
      var Result = "";
      var i = 0;
      var q = 0;
      var j = 0;
      j = 0;
      i = 1;
      q = 0;
      spos.set(-1);
      Result = "\x00";
      while (i <= AValue.length) {
        if (AValue.charAt(i - j - 1) === '"') q += 1;
        if (this.CharInSet(AValue.charAt(i - j - 1),rtl.arrayRef(ACharset)) && !pas.System.Odd(q)) {
          spos.set(i);
          Result = AValue.charAt(i - j - 1);
          break;
        };
        i += 1;
      };
      return Result;
    };
    this.CharInSet = function (ch, ACharSet) {
      var Result = false;
      var j = 0;
      Result = false;
      for (var $l = 0, $end = rtl.length(ACharSet) - 1; $l <= $end; $l++) {
        j = $l;
        if (ch === ACharSet[j]) {
          Result = true;
          break;
        };
      };
      return Result;
    };
    this.AddCharSet = function (ACharSet1, ACharSet2) {
      var Result = [];
      var l = 0;
      var j = 0;
      l = rtl.length(ACharSet1) + rtl.length(ACharSet2);
      Result = rtl.arraySetLength(Result,"",l);
      l = 0;
      for (var $l = 0, $end = rtl.length(ACharSet1) - 1; $l <= $end; $l++) {
        j = $l;
        Result[l] = ACharSet1[j];
        l += 1;
      };
      for (var $l1 = 0, $end1 = rtl.length(ACharSet2) - 1; $l1 <= $end1; $l1++) {
        j = $l1;
        Result[l] = ACharSet2[j];
        l += 1;
      };
      return Result;
    };
    this.SubCharSet = function (ACharSet1, ACharSet2) {
      var Result = [];
      var i = 0;
      var j = 0;
      var l = 0;
      var found = false;
      l = 0;
      Result = rtl.arraySetLength(Result,"",l);
      for (var $l = 0, $end = rtl.length(ACharSet1) - 1; $l <= $end; $l++) {
        i = $l;
        found = false;
        for (var $l1 = 0, $end1 = rtl.length(ACharSet2) - 1; $l1 <= $end1; $l1++) {
          j = $l1;
          if (ACharSet1[i] === ACharSet2[j]) {
            found = true;
            break;
          };
        };
        if (!found) {
          l += 1;
          Result = rtl.arraySetLength(Result,"",l);
          Result[l - 1] = ACharSet1[i];
        };
      };
      return Result;
    };
    this.IsLetterOrDigit = function (AChar) {
      var Result = false;
      Result = $mod.TTMSFNCUtils.CharInSet(AChar,this.NumericCharSet()) || $mod.TTMSFNCUtils.CharInSet(AChar,this.AlphaCharSet());
      return Result;
    };
    this.AlphaCharSet = function () {
      var Result = [];
      var i = 0;
      var ch = "";
      Result = rtl.arraySetLength(Result,"",52);
      i = 0;
      for (var $l = 97; $l <= 122; $l++) {
        ch = String.fromCharCode($l);
        Result[i] = ch;
        i += 1;
      };
      for (var $l1 = 65; $l1 <= 90; $l1++) {
        ch = String.fromCharCode($l1);
        Result[i] = ch;
        i += 1;
      };
      return Result;
    };
    this.NumericCharSet = function () {
      var Result = [];
      var ch = "";
      var i = 0;
      Result = rtl.arraySetLength(Result,"",10);
      i = 0;
      for (var $l = 48; $l <= 57; $l++) {
        ch = String.fromCharCode($l);
        Result[i] = ch;
        i += 1;
      };
      return Result;
    };
    this.CreateCharSet = function (AValue) {
      var Result = [];
      var i = 0;
      Result = rtl.arraySetLength(Result,"",AValue.length);
      for (var $l = 1, $end = AValue.length; $l <= $end; $l++) {
        i = $l;
        Result[i - 1] = this.CharInStr(AValue,i);
      };
      return Result;
    };
    this.IsDate = function (AValue, ADate) {
      var Result = false;
      var su = "";
      var ts = "";
      var da = 0;
      var mo = 0;
      var ye = 0;
      var ho = 0;
      var mi = 0;
      var se = 0;
      var err = 0;
      var dp = 0;
      var mp = 0;
      var yp = 0;
      var vp = 0;
      Result = false;
      ts = "";
      su = pas.SysUtils.UpperCase(pas.SysUtils.FormatSettings.ShortDateFormat);
      dp = pas.System.Pos("D",su);
      mp = pas.System.Pos("M",su);
      yp = pas.System.Pos("Y",su);
      da = 0;
      mo = 0;
      ye = 0;
      ho = 0;
      mi = 0;
      se = 0;
      vp = -1;
      if ($mod.TTMSFNCUtils.VarPos(pas.SysUtils.FormatSettings.DateSeparator,AValue,{get: function () {
          return vp;
        }, set: function (v) {
          vp = v;
        }}) > 0) {
        su = pas.System.Copy(AValue,1,vp - 1);
        if ((dp < mp) && (dp < yp)) {
          pas.System.val$5(su,{get: function () {
              return da;
            }, set: function (v) {
              da = v;
            }},{get: function () {
              return err;
            }, set: function (v) {
              err = v;
            }})}
         else if ((mp < dp) && (mp < yp)) {
          pas.System.val$5(su,{get: function () {
              return mo;
            }, set: function (v) {
              mo = v;
            }},{get: function () {
              return err;
            }, set: function (v) {
              err = v;
            }})}
         else if ((yp < mp) && (yp < dp)) pas.System.val$5(su,{get: function () {
            return ye;
          }, set: function (v) {
            ye = v;
          }},{get: function () {
            return err;
          }, set: function (v) {
            err = v;
          }});
        if (err !== 0) return Result;
        pas.System.Delete({get: function () {
            return AValue;
          }, set: function (v) {
            AValue = v;
          }},1,vp);
        if ($mod.TTMSFNCUtils.VarPos(pas.SysUtils.FormatSettings.DateSeparator,AValue,{get: function () {
            return vp;
          }, set: function (v) {
            vp = v;
          }}) > 0) {
          su = pas.System.Copy(AValue,1,vp - 1);
          if (((dp > mp) && (dp < yp)) || ((dp > yp) && (dp < mp))) {
            pas.System.val$5(su,{get: function () {
                return da;
              }, set: function (v) {
                da = v;
              }},{get: function () {
                return err;
              }, set: function (v) {
                err = v;
              }})}
           else if (((mp > dp) && (mp < yp)) || ((mp > yp) && (mp < dp))) {
            pas.System.val$5(su,{get: function () {
                return mo;
              }, set: function (v) {
                mo = v;
              }},{get: function () {
                return err;
              }, set: function (v) {
                err = v;
              }})}
           else if (((yp > mp) && (yp < dp)) || ((yp > dp) && (yp < mp))) pas.System.val$5(su,{get: function () {
              return ye;
            }, set: function (v) {
              ye = v;
            }},{get: function () {
              return err;
            }, set: function (v) {
              err = v;
            }});
          if (err !== 0) return Result;
          pas.System.Delete({get: function () {
              return AValue;
            }, set: function (v) {
              AValue = v;
            }},1,vp);
          AValue = pas.SysUtils.Trim(AValue);
          if ($mod.TTMSFNCUtils.VarPos(" ",AValue,{get: function () {
              return vp;
            }, set: function (v) {
              vp = v;
            }}) > 0) {
            ts = pas.System.Copy(AValue,vp,AValue.length);
            AValue = pas.System.Copy(AValue,1,vp - 1);
          };
          if ((dp > mp) && (dp > yp)) {
            pas.System.val$5(AValue,{get: function () {
                return da;
              }, set: function (v) {
                da = v;
              }},{get: function () {
                return err;
              }, set: function (v) {
                err = v;
              }})}
           else if ((mp > dp) && (mp > yp)) {
            pas.System.val$5(AValue,{get: function () {
                return mo;
              }, set: function (v) {
                mo = v;
              }},{get: function () {
                return err;
              }, set: function (v) {
                err = v;
              }})}
           else if ((yp > mp) && (yp > dp)) pas.System.val$5(AValue,{get: function () {
              return ye;
            }, set: function (v) {
              ye = v;
            }},{get: function () {
              return err;
            }, set: function (v) {
              err = v;
            }});
          if (err !== 0) return Result;
          if (da > 31) return Result;
          if (mo > 12) return Result;
          if (ts !== "") {
            if ($mod.TTMSFNCUtils.VarPos(pas.SysUtils.FormatSettings.TimeSeparator,ts,{get: function () {
                return vp;
              }, set: function (v) {
                vp = v;
              }}) > 0) {
              su = pas.System.Copy(ts,1,vp - 1);
              pas.System.val$5(su,{get: function () {
                  return ho;
                }, set: function (v) {
                  ho = v;
                }},{get: function () {
                  return err;
                }, set: function (v) {
                  err = v;
                }});
              if (err !== 0) return Result;
              if (ho > 23) return Result;
              pas.System.Delete({get: function () {
                  return ts;
                }, set: function (v) {
                  ts = v;
                }},1,vp);
              if ($mod.TTMSFNCUtils.VarPos(pas.SysUtils.FormatSettings.TimeSeparator,ts,{get: function () {
                  return vp;
                }, set: function (v) {
                  vp = v;
                }}) > 0) {
                su = pas.System.Copy(ts,1,vp - 1);
                pas.System.val$5(su,{get: function () {
                    return mi;
                  }, set: function (v) {
                    mi = v;
                  }},{get: function () {
                    return err;
                  }, set: function (v) {
                    err = v;
                  }});
                if (err !== 0) return Result;
                pas.System.Delete({get: function () {
                    return ts;
                  }, set: function (v) {
                    ts = v;
                  }},1,vp);
                pas.System.val$5(ts,{get: function () {
                    return se;
                  }, set: function (v) {
                    se = v;
                  }},{get: function () {
                    return err;
                  }, set: function (v) {
                    err = v;
                  }});
                if (err !== 0) return Result;
                if (se > 60) return Result;
              } else {
                pas.System.val$5(su,{get: function () {
                    return mi;
                  }, set: function (v) {
                    mi = v;
                  }},{get: function () {
                    return err;
                  }, set: function (v) {
                    err = v;
                  }});
                if (err !== 0) return Result;
              };
              if (mi > 59) return Result;
              Result = true;
            };
          } else Result = true;
          try {
            ADate.set(pas.SysUtils.EncodeDate(ye,mo,da) + pas.SysUtils.EncodeTime(ho,mi,se,0));
          } catch ($e) {
            Result = false;
          };
        };
      };
      return Result;
    };
    this.IPos = function (su, s) {
      var Result = 0;
      Result = pas.System.Pos(pas.SysUtils.UpperCase(su),pas.SysUtils.UpperCase(s));
      return Result;
    };
    this.UnFixMarkup = function (su, SpecialChars, SpecialCharsOnly) {
      var Result = "";
      var i = 0;
      if (!SpecialCharsOnly) {
        while (pas.System.Pos("&lt;",su) > 0) {
          this.TagReplaceString("&lt;","<",{get: function () {
              return su;
            }, set: function (v) {
              su = v;
            }});
        };
        while (pas.System.Pos("&gt;",su) > 0) {
          this.TagReplaceString("&gt;",">",{get: function () {
              return su;
            }, set: function (v) {
              su = v;
            }});
        };
        while (pas.System.Pos("&amp;",su) > 0) {
          this.TagReplaceString("&amp;","&",{get: function () {
              return su;
            }, set: function (v) {
              su = v;
            }});
        };
        while (pas.System.Pos("&quot;",su) > 0) {
          this.TagReplaceString("&quot;",'"',{get: function () {
              return su;
            }, set: function (v) {
              su = v;
            }});
        };
      };
      if (SpecialChars) {
        for (i = 4; i <= 92; i++) {
          while (pas.System.Pos($impl.HTMLSpecialChar[i - 1],su) > 0) {
            this.TagReplaceString($impl.HTMLSpecialChar[i - 1],$impl.HTMLEncodedChar[i - 1],{get: function () {
                return su;
              }, set: function (v) {
                su = v;
              }});
          };
        };
      };
      Result = su;
      return Result;
    };
    this.FixMarkup = function (su, SpecialChars) {
      var Result = "";
      var i = 0;
      var res = "";
      var ch = "";
      while (pas.System.Pos("&",su) > 0) {
        this.TagReplaceString("&","*amp;",{get: function () {
            return su;
          }, set: function (v) {
            su = v;
          }});
      };
      while (pas.System.Pos("*amp;",su) > 0) {
        this.TagReplaceString("*amp;","&amp;",{get: function () {
            return su;
          }, set: function (v) {
            su = v;
          }});
      };
      while (pas.System.Pos('"',su) > 0) {
        this.TagReplaceString('"',"&quot;",{get: function () {
            return su;
          }, set: function (v) {
            su = v;
          }});
      };
      while (pas.System.Pos("<",su) > 0) {
        this.TagReplaceString("<","&lt;",{get: function () {
            return su;
          }, set: function (v) {
            su = v;
          }});
      };
      while (pas.System.Pos(">",su) > 0) {
        this.TagReplaceString(">","&gt;",{get: function () {
            return su;
          }, set: function (v) {
            su = v;
          }});
      };
      if (SpecialChars) {
        for (i = 4; i <= 92; i++) {
          while (pas.System.Pos($impl.HTMLEncodedChar[i - 1],su) > 0) {
            this.TagReplaceString($impl.HTMLEncodedChar[i - 1],$impl.HTMLSpecialChar[i - 1],{get: function () {
                return su;
              }, set: function (v) {
                su = v;
              }});
          };
        };
        res = "";
        for (var $l = 1, $end = su.length; $l <= $end; $l++) {
          i = $l;
          ch = this.CharInStr(su,i);
          if (ch.charCodeAt() > 256) {
            res = res + "&#" + pas.SysUtils.IntToStr(ch.charCodeAt()) + ";"}
           else res = res + ch;
        };
        su = res;
      };
      Result = su;
      return Result;
    };
    this.TagReplaceString = function (Srch, Repl, Dest) {
      var Result = false;
      var i = 0;
      i = this.IPos(Srch,Dest.get());
      if (i > 0) {
        Result = true;
        pas.System.Delete(Dest,i,Srch.length);
        Dest.set(pas.System.Copy(Dest.get(),1,i - 1) + Repl + pas.System.Copy(Dest.get(),i,Dest.get().length));
      } else Result = false;
      return Result;
    };
    var larger = ">";
    var smaller = "<";
    var logand = "&";
    var logor = "^";
    var asterix = "*";
    var qmark = "?";
    var negation = "!";
    this.Matches = function (s0a, s1a) {
      var Result = false;
      var matching = false;
      var done = false;
      var len = 0;
      var lastchar = "";
      var s0 = 0;
      var s1 = 0;
      var s2 = 0;
      var s3 = 0;
      var oksmaller = false;
      var oklarger = false;
      var negflag = false;
      var compstr = "";
      var flag1 = false;
      var flag2 = false;
      var flag3 = false;
      var equal = false;
      var n1 = 0.0;
      var n2 = 0.0;
      var code1 = 0;
      var code2 = 0;
      var dt1 = 0.0;
      var dt2 = 0.0;
      var q = 0;
      var i = 0;
      i = 0;
      oksmaller = true;
      oklarger = true;
      flag1 = false;
      flag2 = false;
      flag3 = false;
      negflag = false;
      equal = false;
      s2 = rtl.rc(pas.System.Pos(larger,s0a),-2147483648,2147483647);
      if (s2 !== 0) {
        s2 += 1;
        if (rtl.rcCharAt(s0a,s2 - i - 1) === "=") {
          equal = true;
          s2 += 1;
        };
        while (rtl.rcCharAt(s0a,s2 - i - 1) === " ") s2 += 1;
        s3 = rtl.rc(s2,-2147483648,2147483647);
        len = 0;
        lastchar = "\x00";
        q = 0;
        while (((s2 - i) <= s0a.length) && (rtl.rcCharAt(s0a,s2 - i - 1) !== " ") && (s2 <= s0a.length) && (pas.System.Odd(q) || ((rtl.rcCharAt(s0a,s2 - i - 1) !== "&") && (rtl.rcCharAt(s0a,s2 - i - 1) !== "|")))) {
          if (rtl.rcCharAt(s0a,s2 - i - 1) === '"') q += 1;
          if ((len === 0) && (rtl.rcCharAt(s0a,s2 - i - 1) === '"')) {
            s3 += 1}
           else len += 1;
          lastchar = rtl.rcc(rtl.rcCharAt(s0a,s2 - i - 1),0,65535);
          s2 += 1;
          if (((s2 - i) <= s0a.length) && (rtl.rcCharAt(s0a,s2 - i - 1) === " ") && pas.System.Odd(q)) {
            lastchar = rtl.rcc(rtl.rcCharAt(s0a,s2 - i - 1),0,65535);
            s2 += 1;
          };
        };
        if ((len > 0) && (lastchar === '"')) len -= 1;
        compstr = pas.System.Copy(s0a,s3,len);
        pas.System.val$8($mod.TTMSFNCUtils.StripThousandSep(s1a),{get: function () {
            return n1;
          }, set: function (v) {
            n1 = v;
          }},{get: function () {
            return code1;
          }, set: function (v) {
            rtl.rc(v,-2147483648,2147483647);
            code1 = v;
          }});
        pas.System.val$8($mod.TTMSFNCUtils.StripThousandSep(compstr),{get: function () {
            return n2;
          }, set: function (v) {
            n2 = v;
          }},{get: function () {
            return code2;
          }, set: function (v) {
            rtl.rc(v,-2147483648,2147483647);
            code2 = v;
          }});
        dt2 = 0;
        if ($mod.TTMSFNCUtils.IsDate(compstr,{get: function () {
            return dt2;
          }, set: function (v) {
            dt2 = v;
          }})) code2 = 1;
        dt1 = 0;
        if ($mod.TTMSFNCUtils.IsDate(s1a,{get: function () {
            return dt1;
          }, set: function (v) {
            dt1 = v;
          }})) code1 = 1;
        if ((code1 === 0) && (code2 === 0)) {
          if (equal) {
            oklarger = n1 >= n2}
           else oklarger = n1 > n2;
        } else {
          if ($mod.TTMSFNCUtils.IsDate(compstr,{get: function () {
              return dt2;
            }, set: function (v) {
              dt2 = v;
            }}) && $mod.TTMSFNCUtils.IsDate(s1a,{get: function () {
              return dt1;
            }, set: function (v) {
              dt1 = v;
            }})) {
            if (equal) {
              oklarger = dt1 >= dt2}
             else oklarger = dt1 > dt2;
          } else {
            if (equal) {
              oklarger = pas.SysUtils.CompareStr(compstr,s1a) <= 0}
             else oklarger = pas.SysUtils.CompareStr(compstr,s1a) < 0;
          };
        };
        flag1 = true;
      };
      equal = false;
      s2 = rtl.rc(pas.System.Pos(smaller,s0a),-2147483648,2147483647);
      if (s2 !== 0) {
        s2 += 1;
        if (rtl.rcCharAt(s0a,s2 - i - 1) === "=") {
          equal = true;
          s2 += 1;
        };
        lastchar = "\x00";
        while (((s2 - i) <= s0a.length) && (rtl.rcCharAt(s0a,s2 - i - 1) === " ")) s2 += 1;
        s3 = rtl.rc(s2,-2147483648,2147483647);
        len = 0;
        q = 0;
        while (((s2 - i) <= s0a.length) && (rtl.rcCharAt(s0a,s2 - i - 1) !== " ") && (s2 <= s0a.length) && (pas.System.Odd(q) || ((rtl.rcCharAt(s0a,s2 - i - 1) !== "&") && (rtl.rcCharAt(s0a,s2 - i - 1) !== "|")))) {
          if (rtl.rcCharAt(s0a,s2 - i - 1) === '"') q += 1;
          if ((len === 0) && (rtl.rcCharAt(s0a,s2 - i - 1) === '"')) {
            s3 += 1}
           else len += 1;
          lastchar = rtl.rcc(rtl.rcCharAt(s0a,s2 - i - 1),0,65535);
          s2 += 1;
        };
        if ((len > 0) && (lastchar === '"')) len -= 1;
        compstr = pas.System.Copy(s0a,s3,len);
        pas.System.val$8($mod.TTMSFNCUtils.StripThousandSep(s1a),{get: function () {
            return n1;
          }, set: function (v) {
            n1 = v;
          }},{get: function () {
            return code1;
          }, set: function (v) {
            rtl.rc(v,-2147483648,2147483647);
            code1 = v;
          }});
        pas.System.val$8($mod.TTMSFNCUtils.StripThousandSep(compstr),{get: function () {
            return n2;
          }, set: function (v) {
            n2 = v;
          }},{get: function () {
            return code2;
          }, set: function (v) {
            rtl.rc(v,-2147483648,2147483647);
            code2 = v;
          }});
        if ($mod.TTMSFNCUtils.IsDate(compstr,{get: function () {
            return dt2;
          }, set: function (v) {
            dt2 = v;
          }})) code2 = 1;
        if ($mod.TTMSFNCUtils.IsDate(s1a,{get: function () {
            return dt1;
          }, set: function (v) {
            dt1 = v;
          }})) code1 = 1;
        if ((code1 === 0) && (code2 === 0)) {
          if (equal) {
            oksmaller = n1 <= n2}
           else oksmaller = n1 < n2;
        } else {
          if ($mod.TTMSFNCUtils.IsDate(compstr,{get: function () {
              return dt2;
            }, set: function (v) {
              dt2 = v;
            }}) && $mod.TTMSFNCUtils.IsDate(s1a,{get: function () {
              return dt1;
            }, set: function (v) {
              dt1 = v;
            }})) {
            if (equal) {
              oksmaller = dt1 <= dt2}
             else oksmaller = dt1 < dt2;
          } else {
            if (equal) {
              oksmaller = pas.SysUtils.CompareStr(compstr,s1a) >= 0}
             else oksmaller = pas.SysUtils.CompareStr(compstr,s1a) > 0;
          };
        };
        flag2 = true;
      };
      s2 = rtl.rc(pas.System.Pos(negation,s0a),-2147483648,2147483647);
      if (s2 !== 0) {
        s2 += 1;
        while (rtl.rcCharAt(s0a,s2 - i - 1) === " ") s2 += 1;
        s3 = rtl.rc(s2,-2147483648,2147483647);
        len = 0;
        lastchar = "\x00";
        q = 0;
        while ((rtl.rcCharAt(s0a,s2 - i - 1) !== " ") && (s2 <= s0a.length) && (pas.System.Odd(q) || ((rtl.rcCharAt(s0a,s2 - i - 1) !== "&") && (rtl.rcCharAt(s0a,s2 - i - 1) !== "|")))) {
          if (rtl.rcCharAt(s0a,s2 - i - 1) === '"') q += 1;
          if ((len === 0) && (rtl.rcCharAt(s0a,s2 - i - 1) === '"')) {
            s3 += 1}
           else len += 1;
          lastchar = rtl.rcc(rtl.rcCharAt(s0a,s2 - i - 1),0,65535);
          s2 += 1;
        };
        if ((len > 0) && (lastchar === '"')) len -= 1;
        compstr = pas.System.Copy(s0a,s3,len);
        flag3 = true;
      };
      if (flag3) {
        if (pas.System.Pos(larger,s0a) === 0) flag1 = flag3;
        if (pas.System.Pos(smaller,s0a) === 0) flag2 = flag3;
      };
      if (pas.System.Pos(logor,s0a) !== 0) if (flag1 || flag2) {
        Result = oksmaller || oklarger;
        return Result;
      };
      if (pas.System.Pos(logand,s0a) !== 0) if (flag1 && flag2) {
        Result = oksmaller && oklarger;
        return Result;
      };
      if (((pas.System.Pos(larger,s0a) !== 0) && oklarger) || ((pas.System.Pos(smaller,s0a) !== 0) && oksmaller)) {
        Result = true;
        return Result;
      };
      s0 = 1;
      s1 = 1;
      done = (s0a === "") || (s1a === "");
      matching = true;
      while (!done && matching) {
        var $tmp = rtl.rcCharAt(s0a,s0 - i - 1);
        if ($tmp === qmark) {
          matching = s1 <= s1a.length;
          if (matching) {
            s0 += 1;
            s1 += 1;
          };
        } else if ($tmp === negation) {
          negflag = true;
          s0 += 1;
        } else if ($tmp === '"') {
          s0 += 1;
        } else if ($tmp === asterix) {
          do {
            s0 += 1;
          } while (!(((s0 - i) > s0a.length) || (rtl.rcCharAt(s0a,s0 - i - 1) !== asterix)));
          len = rtl.rc(s1a.length - s1,-2147483648,2147483647);
          s1 += len;
          matching = this.Matches(pas.System.Copy(s0a,s0,s0a.length),pas.System.Copy(s1a,s1,s1a.length));
          while ((len >= 0) && !matching) {
            s1 -= 1;
            len -= 1;
            matching = this.Matches(pas.System.Copy(s0a,s0,s0a.length),pas.System.Copy(s1a,s1,s1a.length));
          };
          if (matching) {
            s0 = rtl.rc(s0a.length + 1,-2147483648,2147483647);
            s1 = rtl.rc(s1a.length + 1,-2147483648,2147483647);
          };
        } else {
          if ((s0 <= s0a.length) && (s1 <= s1a.length)) {
            matching = rtl.rcCharAt(s0a,s0 - i - 1) === rtl.rcCharAt(s1a,s1 - i - 1)}
           else matching = false;
          if (matching) {
            s0 += 1;
            s1 += 1;
          };
        };
        done = (s0 > s0a.length) && (s1 > s1a.length);
      };
      if (negflag) {
        Result = !matching}
       else Result = matching;
      return Result;
    };
    this.StripThousandSep = function (ps) {
      var Result = "";
      while (pas.System.Pos(pas.SysUtils.FormatSettings.ThousandSeparator,ps) > 0) pas.System.Delete({get: function () {
          return ps;
        }, set: function (v) {
          ps = v;
        }},pas.System.Pos(pas.SysUtils.FormatSettings.ThousandSeparator,ps),1);
      Result = ps;
      return Result;
    };
    this.ClosingParenthesis = function (s1) {
      var Result = 0;
      var i = 0;
      var j = 0;
      var k = 0;
      var r = 0;
      r = 0;
      j = 0;
      k = 0;
      i = 1;
      while (i <= s1.length) {
        if (s1.charAt(i - 1) === ")") k += 1;
        if (s1.charAt(i - 1) === "(") j += 1;
        if ((s1.charAt(i - 1) === ")") && (j === k)) {
          r = i;
          break;
        };
        i += 1;
      };
      Result = r;
      return Result;
    };
    this.GetMarkupIndex = function (Markup) {
      var Result = 0;
      Result = this.IndexOfTextInArray(Markup,$impl.HTMLSpecialChar);
      return Result;
    };
    this.GetSpecialChar = function (Value) {
      var Result = "";
      Result = $impl.HTMLEncodedChar[Value - 1];
      return Result;
    };
    this.IndexOfTextInArray = function (AText, AValues) {
      var Result = 0;
      var I = 0;
      Result = -1;
      for (var $l = 0, $end = rtl.length(AValues) - 1; $l <= $end; $l++) {
        I = $l;
        if (pas.SysUtils.SameText(AText,AValues[I])) {
          if ((pas.System.Pos("cute",AText) > 0) || (pas.System.Pos("grave",AText) > 0) || (pas.System.Pos("uml",AText) > 0) || (pas.System.Pos("circ",AText) > 0) || (pas.System.Pos("tilde",AText) > 0) || (pas.System.Pos("ring",AText) > 0) || (pas.System.Pos("cedil",AText) > 0)) {
            if (AText === AValues[I]) {
              Result = I;
              break;
            };
          } else {
            Result = I;
            break;
          };
        };
      };
      return Result;
    };
    this.GetParentForm = function (AControl) {
      var Result = null;
      var c = null;
      Result = null;
      c = AControl;
      if (!(c != null)) return Result;
      if (pas["WEBLib.Forms"].TCustomForm.isPrototypeOf(c.FParent)) {
        Result = rtl.as(c.FParent,pas["WEBLib.Forms"].TCustomForm)}
       else Result = this.GetParentForm(c.FParent);
      return Result;
    };
    this.GetOwnerForm = function (AComponent) {
      var Result = null;
      var c = null;
      Result = null;
      c = AComponent;
      if (!(c != null)) return Result;
      if (pas["WEBLib.Forms"].TCustomForm.isPrototypeOf(c.FOwner)) {
        Result = rtl.as(c.FOwner,pas["WEBLib.Forms"].TCustomForm)}
       else Result = this.GetOwnerForm(c.FOwner);
      return Result;
    };
    this.Message = function (AMessage) {
      var Result = 0;
      Result = $mod.TTMSFNCUtils.Message$1(AMessage,pas["WEBLib.Dialogs"].TMsgDlgType.mtInformation,rtl.createSet(pas["WEBLib.Dialogs"].TMsgDlgBtn.mbOK),0);
      return Result;
    };
    this.Message$1 = function (AMessage, ADialogType, AButtons, AHelpContext) {
      var Result = 0;
      Result = 0;
      if (((pas["WEBLib.Dialogs"].TMsgDlgBtn.mbOK in AButtons) && (pas["WEBLib.Dialogs"].TMsgDlgBtn.mbCancel in AButtons)) || ((pas["WEBLib.Dialogs"].TMsgDlgBtn.mbYes in AButtons) && (pas["WEBLib.Dialogs"].TMsgDlgBtn.mbNo in AButtons))) {
        if (window.confirm(AMessage))
        {
          return 1
        }
        else
        {
          return 2
        };
      } else {
        window.alert(AMessage);
        return 1;
      };
      return Result;
    };
    this.SelectFile = function (AFileName, ADefaultFolder, AFilter, ACallBack) {
      var Result = false;
      Result = true;
      if (ACallBack != null) ACallBack(AFileName.get(),Result);
      return Result;
    };
    this.SaveFile = function (AFileName, AFilter, ACallBack) {
      var Result = false;
      Result = true;
      return Result;
    };
    this.EscapeString = function (AValue) {
      var $Self = this;
      var Result = "";
      var res = "";
      var ch = "";
      var i = 0;
      function EscapeSpecialChar(ch, s) {
        var Result = false;
        var i = 0;
        Result = false;
        s.set("");
        for (i = 1; i <= 7; i++) {
          if (ch === $impl.JSONSpecialChar[i - 1]) {
            s.set($impl.JSONEncodedSpecialChar[i - 1]);
            Result = true;
            break;
          };
        };
        return Result;
      };
      Result = "";
      for (var $l = 1, $end = AValue.length; $l <= $end; $l++) {
        i = $l;
        ch = this.CharInStr(AValue,i);
        if (ch > "") {
          Result = Result + "\\u" + pas.SysUtils.IntToHex(ch.charCodeAt(),4)}
         else {
          res = "";
          if (EscapeSpecialChar(ch,{get: function () {
              return res;
            }, set: function (v) {
              res = v;
            }})) {
            Result = Result + res}
           else Result = Result + ch;
        };
      };
      return Result;
    };
    this.UnescapeString = function (AValue) {
      var Result = "";
      var i = 0;
      var j = 0;
      var c = 0;
      var o = 0;
      var s = "";
      var x = 0;
      s = rtl.strSetLength(s,AValue.length);
      o = 0;
      i = 1;
      j = 1;
      while (i <= AValue.length) {
        if (AValue.charAt(i - o - 1) === "\\") {
          if (i < AValue.length) {
            if (AValue.charAt((i + 1) - o - 1) === "\\") {
              x = j - o;
              s = rtl.setCharAt(s,x - 1,"\\");
              i += 2;
            } else if (AValue.charAt((i + 1) - o - 1) === "/") {
              x = j - o;
              s = rtl.setCharAt(s,x - 1,"/");
              i += 2;
            } else if (AValue.charAt((i + 1) - o - 1) === "b") {
              x = j - o;
              s = rtl.setCharAt(s,x - 1,"\b");
              i += 2;
            } else if (AValue.charAt((i + 1) - o - 1) === "f") {
              x = j - o;
              s = rtl.setCharAt(s,x - 1,"\f");
              i += 2;
            } else if (AValue.charAt((i + 1) - o - 1) === "n") {
              x = j - o;
              s = rtl.setCharAt(s,x - 1,"\n");
              i += 2;
            } else if (AValue.charAt((i + 1) - o - 1) === "r") {
              x = j - o;
              s = rtl.setCharAt(s,x - 1,"\r");
              i += 2;
            } else if (AValue.charAt((i + 1) - o - 1) === "t") {
              x = j - o;
              s = rtl.setCharAt(s,x - 1,"\t");
              i += 2;
            } else if (AValue.charAt((i + 1) - o - 1) === '"') {
              x = j - o;
              s = rtl.setCharAt(s,x - 1,'"');
              i += 2;
            } else if ((AValue.charAt((i + 1) - o - 1) === "u") && ((i + 1 + 4) <= AValue.length) && pas.SysUtils.TryStrToInt("$" + pas.System.Copy(AValue,i + 2,4),{get: function () {
                return c;
              }, set: function (v) {
                c = v;
              }})) {
              i += 6;
              x = j - o;
              s = rtl.setCharAt(s,x - 1,String.fromCharCode(c));
            } else throw pas.SysUtils.Exception.$create("CreateFmt",["Invalid code at position %s",pas.System.VarRecs(18,pas.SysUtils.IntToStr(i))]);
          } else throw pas.SysUtils.Exception.$create("Create$1",["Unexpected end of string"]);
        } else {
          x = j - o;
          s = rtl.setCharAt(s,x - 1,AValue.charAt(i - o - 1));
          i += 1;
        };
        j += 1;
      };
      s = rtl.strSetLength(s,j - 1);
      Result = s;
      return Result;
    };
    this.DownloadImage = function (AURL) {
      var Result = null;
      Result = null;
      return Result;
    };
    var CSVSeparators = [",",";","#","\t","|","@","*","-","+","&"];
    this.GetBestDelimiter = function (ALine1, Aline2) {
      var Result = "";
      var I = 0;
      var parts1 = 0;
      var parts2 = 0;
      var maxParts = 0;
      var maxBackup = 0;
      var Del = "";
      var DelBackup = "";
      var SplitChar = "";
      var s = null;
      Del = "\x00";
      DelBackup = ",";
      parts2 = -1;
      maxParts = 0;
      maxBackup = 0;
      for (I = 1; I <= 10; I++) {
        SplitChar = CSVSeparators[I - 1];
        s = pas.Classes.TStringList.$create("Create$1");
        try {
          $mod.TTMSFNCUtils.Split(SplitChar,ALine1,s,false);
          parts1 = s.GetCount();
          if (Aline2 !== "") {
            $mod.TTMSFNCUtils.Split(SplitChar,Aline2,s,false);
            parts2 = s.GetCount();
          };
          if (SplitChar !== pas.SysUtils.FormatSettings.DecimalSeparator) {
            if ((parts2 > 0) && (parts1 === parts2)) {
              if (parts1 > maxParts) {
                Del = SplitChar;
                maxParts = parts1;
              };
            } else {
              if (parts1 > maxBackup) {
                DelBackup = SplitChar;
                maxBackup = parts1;
              };
            };
          };
        } finally {
          s = rtl.freeLoc(s);
        };
      };
      if (Del !== "\x00") {
        Result = Del}
       else Result = DelBackup;
      return Result;
    };
  });
  this.TTMSFNCClipBoardFormat = {"0": "cfText", cfText: 0, "1": "cfRTF", cfRTF: 1, "2": "cfHTML", cfHTML: 2, "3": "cfBitmap", cfBitmap: 3, "4": "cfBitmapWin", cfBitmapWin: 4, "5": "cfStream", cfStream: 5, "6": "cfRichTextStream", cfRichTextStream: 6};
  this.$rtti.$Enum("TTMSFNCClipBoardFormat",{minvalue: 0, maxvalue: 6, ordtype: 1, enumtype: this.TTMSFNCClipBoardFormat});
  rtl.createClass(this,"TTMSFNCClipBoard",pas.System.TObject,function () {
    this.FClipboardData = "";
    this.HasFormat = function (AFormat) {
      rtl.rc(AFormat,0,6);
      var Result = false;
      Result = true;
      return Result;
    };
    this.HasContent = function () {
      var Result = false;
      Result = this.HasFormat($mod.TTMSFNCClipBoardFormat.cfText) || this.HasFormat($mod.TTMSFNCClipBoardFormat.cfRTF) || this.HasFormat($mod.TTMSFNCClipBoardFormat.cfBitmap) || this.HasFormat($mod.TTMSFNCClipBoardFormat.cfBitmapWin) || this.HasFormat($mod.TTMSFNCClipBoardFormat.cfRichTextStream) || this.HasFormat($mod.TTMSFNCClipBoardFormat.cfStream);
      return Result;
    };
    this.Clear = function () {
    };
    this.SetText = function (AText) {
      $mod.TTMSFNCClipBoard.FClipboardData = AText;
      const element = document.createElement('textarea');
      element.value = AText;
      document.body.appendChild(element);
      element.focus();
      element.setSelectionRange(0, element.value.length);
      document.execCommand('copy');
      document.body.removeChild(element);
    };
    this.GetText = function () {
      var Result = "";
      Result = this.FClipboardData;
      return Result;
    };
    this.SetStream = function (AStream) {
      throw pas.SysUtils.Exception.$create("Create$1",["SetStream not supported"]);
    };
    this.GetStream = function () {
      var Result = null;
      Result = null;
      throw pas.SysUtils.Exception.$create("Create$1",["GetStream not supported"]);
      return Result;
    };
    this.SetBitmap = function (ABitmap) {
      throw pas.SysUtils.Exception.$create("Create$1",["SetBitmap not supported"]);
    };
    this.GetBitmap = function () {
      var Result = null;
      Result = null;
      throw pas.SysUtils.Exception.$create("Create$1",["GetBitmap not supported"]);
      return Result;
    };
    this.SetRichTextStream = function (AStream) {
      throw pas.SysUtils.Exception.$create("Create$1",["SetRichTextStream not supported"]);
    };
    this.GetRichTextStream = function () {
      var Result = null;
      Result = null;
      throw pas.SysUtils.Exception.$create("Create$1",["GetRichTextStream not supported"]);
      return Result;
    };
    this.SetRTF = function (ARTF) {
      throw pas.SysUtils.Exception.$create("Create$1",["SetRTF not supported"]);
    };
    this.GetRTF = function () {
      var Result = "";
      Result = "";
      throw pas.SysUtils.Exception.$create("Create$1",["GetRTF not supported"]);
      return Result;
    };
    this.SetHTML = function (AHTML) {
      throw pas.SysUtils.Exception.$create("Create$1",["SetHTML not supported"]);
    };
    this.GetHTML = function () {
      var Result = "";
      Result = "";
      throw pas.SysUtils.Exception.$create("Create$1",["GetHTML not supported"]);
      return Result;
    };
  });
  this.Hiword = function (L) {
    var Result = 0;
    Result = rtl.lw(L >>> 16);
    return Result;
  };
  this.LoWord = function (L) {
    var Result = 0;
    Result = L & 0xFFFF;
    return Result;
  };
  this.MakeWord = function (b1, b2) {
    var Result = 0;
    Result = b1 | (b2 << 8);
    return Result;
  };
  this.MakeLong = function (i1, i2) {
    var Result = 0;
    Result = i1 | (i2 << 16);
    return Result;
  };
  this.CreateUploadFile = function (AName, AData) {
    var Result = $mod.TTMSFNCUtilsFile.$new();
    Result.Data = AData;
    Result.Name = AName;
    return Result;
  };
  this.ExtractFileNameEx = function (AFile) {
    var Result = "";
    Result = AFile.Name;
    return Result;
  };
  this.GetMimeTypeEx = function (AFile) {
    var Result = "";
    Result = $mod.TTMSFNCUtils.GetMimeType(AFile.Name);
    return Result;
  };
  this.CF_FNCSTREAM = 0;
  this.CF_FNCRICHTEXTSTREAM = 0;
  this.CF_FNCRTF = 0;
  this.CF_FNCBITMAP = 0;
  this.CF_FNCHTML = 0;
  $mod.$implcode = function () {
    $impl.HTMLNumSpecialChar = 92;
    $impl.JSONNumSpecialChar = 7;
    $mod.$rtti.$StaticArray("HTMLEncodedChar$a",{dims: [92], eltype: rtl.string});
    $impl.HTMLEncodedChar = ["&","<",">",'"'," ","é","è","ë","ê","ó","ò","ö","ô","í","ì","ï","î","ú","ù","ü","û","á","à","ä","â","É","È","Ë","Ê","Ó","Ò","Ö","Ô","Í","Ì","Ï","Î","Ú","Ù","Ü","Û","Á","À","Ä","Â","ç","Ç","ø","Ø","å","Å","©","®","€","«","»","ã","Ã","õ","Õ","™","§","¶","ß","£","$","§","‰","¶","'","¥","¤","¢","±","¡","°","ý","Ý","¼","½","¾","Æ","æ","Ñ","ñ","Ð","´","µ","¶","·","²","³"];
    $mod.$rtti.$StaticArray("HTMLSpecialChar$a",{dims: [92], eltype: rtl.string});
    $impl.HTMLSpecialChar = ["amp;","lt;","gt;","quot;","&nbsp;","&eacute;","&egrave;","&euml;","&ecirc;","&oacute;","&ograve;","&ouml;","&ocirc;","&iacute;","&igrave;","&iuml;","&icirc;","&uacute;","&ugrave;","&uuml;","&ucirc;","&aacute;","&agrave;","&auml;","&acirc;","&Eacute;","&Egrave;","&Euml;","&Ecirc;","&Oacute;","&Ograve;","&Ouml;","&Ocirc;","&Iacute;","&Igrave;","&Iuml;","&Icirc;","&Uacute;","&Ugrave;","&Uuml;","&Ucirc;","&Aacute;","&Agrave;","&Auml;","&Acirc;","&ccedil;","&Ccedil;","&oslash;","&Oslash;","&aring;","&Aring;","&copy;","&reg;","&euro;","&laquo;","&raquo;","&atilde;","&Atilde;","&otilde;","&Otilde","&trade;","&sect;","&para;","&szlig;","&pound;","&#36;","&sect;","&permil;","&para;","&#39;","&yen;","&curren;","&cent;","&plusmn;","&iexcl;","&deg;","&#x00FD;","&#221;","&frac14;","&frac12;","&frac34;","&AElig;","&aelig;","&Ntilde;","&ntilde;","&ETH;","&acute;","&micro;","&para;","&middot","&sup2;","&sup3;"];
    $mod.$rtti.$StaticArray("JSONSpecialChar$a",{dims: [7], eltype: rtl.char});
    $impl.JSONSpecialChar = ['"',"\\","\b","\f","\n","\r","\t"];
    $mod.$rtti.$StaticArray("JSONEncodedSpecialChar$a",{dims: [7], eltype: rtl.string});
    $impl.JSONEncodedSpecialChar = ["\\u0022","\\u005C","\\u0008","\\u000C","\\u000A","\\u000D","\\u0009"];
    $impl.FMimeTypes = null;
    $impl.RegisterMimeTypes = function () {
      function AddType(AExt, AMimeType) {
        $impl.FMimeTypes.Add(AExt + $impl.FMimeTypes.GetNameValueSeparator() + AMimeType);
      };
      AddType("ez","application/andrew-inset");
      AddType("aw","application/applixware");
      AddType("atom","application/atom+xml");
      AddType("atomcat","application/atomcat+xml");
      AddType("atomsvc","application/atomsvc+xml");
      AddType("bson","application/bson");
      AddType("ccxml","application/ccxml+xml");
      AddType("cdmia","application/cdmi-capability");
      AddType("cdmic","application/cdmi-container");
      AddType("cdmid","application/cdmi-domain");
      AddType("cdmio","application/cdmi-object");
      AddType("cdmiq","application/cdmi-queue");
      AddType("cu","application/cu-seeme");
      AddType("davmount","application/davmount+xml");
      AddType("dbk","application/docbook+xml");
      AddType("dssc","application/dssc+der");
      AddType("xdssc","application/dssc+xml");
      AddType("ecma","application/ecmascript");
      AddType("emma","application/emma+xml");
      AddType("epub","application/epub+zip");
      AddType("exi","application/exi");
      AddType("pfr","application/font-tdpfr");
      AddType("gml","application/gml+xml");
      AddType("gpx","application/gpx+xml");
      AddType("gxf","application/gxf");
      AddType("stk","application/hyperstudio");
      AddType("ink","application/inkml+xml");
      AddType("inkml","application/inkml+xml");
      AddType("ipfix","application/ipfix");
      AddType("jar","application/java-archive");
      AddType("ser","application/java-serialized-object");
      AddType("class","application/java-vm");
      AddType("js","application/javascript");
      AddType("json","application/json");
      AddType("jsonml","application/jsonml+json");
      AddType("lostxml","application/lost+xml");
      AddType("hqx","application/mac-binhex40");
      AddType("cpt","application/mac-compactpro");
      AddType("mads","application/mads+xml");
      AddType("mrc","application/marc");
      AddType("mrcx","application/marcxml+xml");
      AddType("ma","application/mathematica");
      AddType("nb","application/mathematica");
      AddType("mb","application/mathematica");
      AddType("mathml","application/mathml+xml");
      AddType("mbox","application/mbox");
      AddType("mscml","application/mediaservercontrol+xml");
      AddType("metalink","application/metalink+xml");
      AddType("meta4","application/metalink4+xml");
      AddType("mets","application/mets+xml");
      AddType("mods","application/mods+xml");
      AddType("m21","application/mp21");
      AddType("mp21","application/mp21");
      AddType("mp4s","application/mp4");
      AddType("doc","application/msword");
      AddType("dot","application/msword");
      AddType("mxf","application/mxf");
      AddType("bin","application/octet-stream");
      AddType("bpk","application/octet-stream");
      AddType("class","application/octet-stream");
      AddType("deploy","application/octet-stream");
      AddType("dist","application/octet-stream");
      AddType("distz","application/octet-stream");
      AddType("dmg","application/octet-stream");
      AddType("dms","application/octet-stream");
      AddType("dump","application/octet-stream");
      AddType("elc","application/octet-stream");
      AddType("iso","application/octet-stream");
      AddType("lha","application/octet-stream");
      AddType("lrf","application/octet-stream");
      AddType("lzh","application/octet-stream");
      AddType("mar","application/octet-stream");
      AddType("pkg","application/octet-stream");
      AddType("so","application/octet-stream");
      AddType("oda","application/oda");
      AddType("opf","application/oebps-package+xml");
      AddType("ogx","application/ogg");
      AddType("omdoc","application/omdoc+xml");
      AddType("onetoc","application/onenote");
      AddType("onetoc2","application/onenote");
      AddType("onetmp","application/onenote");
      AddType("onepkg","application/onenote");
      AddType("oxps","application/oxps");
      AddType("xer","application/patch-ops-error+xml");
      AddType("pdf","application/pdf");
      AddType("pgp","application/pgp-encrypted");
      AddType("asc","application/pgp-signature");
      AddType("sig","application/pgp-signature");
      AddType("prf","application/pics-rules");
      AddType("p10","application/pkcs10");
      AddType("p7m","application/pkcs7-mime");
      AddType("p7c","application/pkcs7-mime");
      AddType("p7s","application/pkcs7-signature");
      AddType("p8","application/pkcs8");
      AddType("ac","application/pkix-attr-cert");
      AddType("cer","application/pkix-cert");
      AddType("crl","application/pkix-crl");
      AddType("pkipath","application/pkix-pkipath");
      AddType("pki","application/pkixcmp");
      AddType("pls","application/pls+xml");
      AddType("ai","application/postscript");
      AddType("eps","application/postscript");
      AddType("ps","application/postscript");
      AddType("cww","application/prs.cww");
      AddType("pskcxml","application/pskc+xml");
      AddType("rdf","application/rdf+xml");
      AddType("rif","application/reginfo+xml");
      AddType("rnc","application/relax-ng-compact-syntax");
      AddType("rl","application/resource-lists+xml");
      AddType("rld","application/resource-lists-diff+xml");
      AddType("rs","application/rls-services+xml");
      AddType("gbr","application/rpki-ghostbusters");
      AddType("mft","application/rpki-manifest");
      AddType("roa","application/rpki-roa");
      AddType("rsd","application/rsd+xml");
      AddType("rss","application/rss+xml");
      AddType("rtf","application/rtf");
      AddType("sbml","application/sbml+xml");
      AddType("scq","application/scvp-cv-request");
      AddType("scs","application/scvp-cv-response");
      AddType("spq","application/scvp-vp-request");
      AddType("spp","application/scvp-vp-response");
      AddType("sdp","application/sdp");
      AddType("setpay","application/set-payment-initiation");
      AddType("setreg","application/set-registration-initiation");
      AddType("shf","application/shf+xml");
      AddType("smi","application/smil+xml");
      AddType("smil","application/smil+xml");
      AddType("soap","application/soap+xml");
      AddType("rq","application/sparql-query");
      AddType("srx","application/sparql-results+xml");
      AddType("gram","application/srgs");
      AddType("grxml","application/srgs+xml");
      AddType("sru","application/sru+xml");
      AddType("ssdl","application/ssdl+xml");
      AddType("ssml","application/ssml+xml");
      AddType("tei","application/tei+xml");
      AddType("teicorpus","application/tei+xml");
      AddType("tfi","application/thraud+xml");
      AddType("tsd","application/timestamped-data");
      AddType("plb","application/vnd.3gpp.pic-bw-large");
      AddType("psb","application/vnd.3gpp.pic-bw-small");
      AddType("pvb","application/vnd.3gpp.pic-bw-var");
      AddType("tcap","application/vnd.3gpp2.tcap");
      AddType("pwn","application/vnd.3m.post-it-notes");
      AddType("aso","application/vnd.accpac.simply.aso");
      AddType("imp","application/vnd.accpac.simply.imp");
      AddType("acu","application/vnd.acucobol");
      AddType("atc","application/vnd.acucorp");
      AddType("acutc","application/vnd.acucorp");
      AddType("air","application/vnd.adobe.air-application-installer-package+zip");
      AddType("fcdt","application/vnd.adobe.formscentral.fcdt");
      AddType("fxp","application/vnd.adobe.fxp");
      AddType("fxpl","application/vnd.adobe.fxp");
      AddType("xdp","application/vnd.adobe.xdp+xml");
      AddType("xfdf","application/vnd.adobe.xfdf");
      AddType("ahead","application/vnd.ahead.space");
      AddType("azf","application/vnd.airzip.filesecure.azf");
      AddType("azs","application/vnd.airzip.filesecure.azs");
      AddType("azw","application/vnd.amazon.ebook");
      AddType("acc","application/vnd.americandynamics.acc");
      AddType("ami","application/vnd.amiga.ami");
      AddType("apk","application/vnd.android.package-archive");
      AddType("cii","application/vnd.anser-web-certificate-issue-initiation");
      AddType("fti","application/vnd.anser-web-funds-transfer-initiation");
      AddType("atx","application/vnd.antix.game-component");
      AddType("mpkg","application/vnd.apple.installer+xml");
      AddType("m3u8","application/vnd.apple.mpegurl");
      AddType("swi","application/vnd.aristanetworks.swi");
      AddType("iota","application/vnd.astraea-software.iota");
      AddType("aep","application/vnd.audiograph");
      AddType("mpm","application/vnd.blueice.multipass");
      AddType("bmi","application/vnd.bmi");
      AddType("rep","application/vnd.businessobjects");
      AddType("cdxml","application/vnd.chemdraw+xml");
      AddType("mmd","application/vnd.chipnuts.karaoke-mmd");
      AddType("cdy","application/vnd.cinderella");
      AddType("cla","application/vnd.claymore");
      AddType("rp9","application/vnd.cloanto.rp9");
      AddType("c4g","application/vnd.clonk.c4group");
      AddType("c4d","application/vnd.clonk.c4group");
      AddType("c4f","application/vnd.clonk.c4group");
      AddType("c4p","application/vnd.clonk.c4group");
      AddType("c4u","application/vnd.clonk.c4group");
      AddType("c11amc","application/vnd.cluetrust.cartomobile-config");
      AddType("c11amz","application/vnd.cluetrust.cartomobile-config-pkg");
      AddType("csp","application/vnd.commonspace");
      AddType("cdbcmsg","application/vnd.contact.cmsg");
      AddType("cmc","application/vnd.cosmocaller");
      AddType("clkx","application/vnd.crick.clicker");
      AddType("clkk","application/vnd.crick.clicker.keyboard");
      AddType("clkp","application/vnd.crick.clicker.palette");
      AddType("clkt","application/vnd.crick.clicker.template");
      AddType("clkw","application/vnd.crick.clicker.wordbank");
      AddType("wbs","application/vnd.criticaltools.wbs+xml");
      AddType("pml","application/vnd.ctc-posml");
      AddType("ppd","application/vnd.cups-ppd");
      AddType("car","application/vnd.curl.car");
      AddType("pcurl","application/vnd.curl.pcurl");
      AddType("dart","application/vnd.dart");
      AddType("rdz","application/vnd.data-vision.rdz");
      AddType("uvf","application/vnd.dece.data");
      AddType("uvvf","application/vnd.dece.data");
      AddType("uvd","application/vnd.dece.data");
      AddType("uvvd","application/vnd.dece.data");
      AddType("uvt","application/vnd.dece.ttml+xml");
      AddType("uvvt","application/vnd.dece.ttml+xml");
      AddType("uvx","application/vnd.dece.unspecified");
      AddType("uvvx","application/vnd.dece.unspecified");
      AddType("uvz","application/vnd.dece.zip");
      AddType("uvvz","application/vnd.dece.zip");
      AddType("fe_launch","application/vnd.denovo.fcselayout-link");
      AddType("dna","application/vnd.dna");
      AddType("mlp","application/vnd.dolby.mlp");
      AddType("dpg","application/vnd.dpgraph");
      AddType("dfac","application/vnd.dreamfactory");
      AddType("kpxx","application/vnd.ds-keypoint");
      AddType("ait","application/vnd.dvb.ait");
      AddType("svc","application/vnd.dvb.service");
      AddType("geo","application/vnd.dynageo");
      AddType("mag","application/vnd.ecowin.chart");
      AddType("nml","application/vnd.enliven");
      AddType("esf","application/vnd.epson.esf");
      AddType("msf","application/vnd.epson.msf");
      AddType("qam","application/vnd.epson.quickanime");
      AddType("slt","application/vnd.epson.salt");
      AddType("ssf","application/vnd.epson.ssf");
      AddType("es3","application/vnd.eszigno3+xml");
      AddType("et3","application/vnd.eszigno3+xml");
      AddType("ez2","application/vnd.ezpix-album");
      AddType("ez3","application/vnd.ezpix-package");
      AddType("fdf","application/vnd.fdf");
      AddType("mseed","application/vnd.fdsn.mseed");
      AddType("seed","application/vnd.fdsn.seed");
      AddType("dataless","application/vnd.fdsn.seed");
      AddType("json","application/vnd.firedac.json");
      AddType("xml","application/vnd.firedac.xml");
      AddType("bin","application/vnd.firedac.bin");
      AddType("gph","application/vnd.flographit");
      AddType("ftc","application/vnd.fluxtime.clip");
      AddType("fm","application/vnd.framemaker");
      AddType("frame","application/vnd.framemaker");
      AddType("maker","application/vnd.framemaker");
      AddType("book","application/vnd.framemaker");
      AddType("fnc","application/vnd.frogans.fnc");
      AddType("ltf","application/vnd.frogans.ltf");
      AddType("fsc","application/vnd.fsc.weblaunch");
      AddType("oas","application/vnd.fujitsu.oasys");
      AddType("oa2","application/vnd.fujitsu.oasys2");
      AddType("oa3","application/vnd.fujitsu.oasys3");
      AddType("fg5","application/vnd.fujitsu.oasysgp");
      AddType("bh2","application/vnd.fujitsu.oasysprs");
      AddType("ddd","application/vnd.fujixerox.ddd");
      AddType("xdw","application/vnd.fujixerox.docuworks");
      AddType("xbd","application/vnd.fujixerox.docuworks.binder");
      AddType("fzs","application/vnd.fuzzysheet");
      AddType("txd","application/vnd.genomatix.tuxedo");
      AddType("ggb","application/vnd.geogebra.file");
      AddType("ggt","application/vnd.geogebra.tool");
      AddType("gex","application/vnd.geometry-explorer");
      AddType("gre","application/vnd.geometry-explorer");
      AddType("gxt","application/vnd.geonext");
      AddType("g2w","application/vnd.geoplan");
      AddType("g3w","application/vnd.geospace");
      AddType("gmx","application/vnd.gmx");
      AddType("kml","application/vnd.google-earth.kml+xml");
      AddType("kmz","application/vnd.google-earth.kmz");
      AddType("gqf","application/vnd.grafeq");
      AddType("gqs","application/vnd.grafeq");
      AddType("gac","application/vnd.groove-account");
      AddType("ghf","application/vnd.groove-help");
      AddType("gim","application/vnd.groove-identity-message");
      AddType("grv","application/vnd.groove-injector");
      AddType("gtm","application/vnd.groove-tool-message");
      AddType("tpl","application/vnd.groove-tool-template");
      AddType("vcg","application/vnd.groove-vcard");
      AddType("hal","application/vnd.hal+xml");
      AddType("zmm","application/vnd.handheld-entertainment+xml");
      AddType("hbci","application/vnd.hbci");
      AddType("les","application/vnd.hhe.lesson-player");
      AddType("hpgl","application/vnd.hp-hpgl");
      AddType("hpid","application/vnd.hp-hpid");
      AddType("hps","application/vnd.hp-hps");
      AddType("jlt","application/vnd.hp-jlyt");
      AddType("pcl","application/vnd.hp-pcl");
      AddType("pclxl","application/vnd.hp-pclxl");
      AddType("sfd-hdstx","application/vnd.hydrostatix.sof-data");
      AddType("mpy","application/vnd.ibm.minipay");
      AddType("afp","application/vnd.ibm.modcap");
      AddType("listafp","application/vnd.ibm.modcap");
      AddType("list3820","application/vnd.ibm.modcap");
      AddType("irm","application/vnd.ibm.rights-management");
      AddType("sc","application/vnd.ibm.secure-container");
      AddType("icc","application/vnd.iccprofile");
      AddType("icm","application/vnd.iccprofile");
      AddType("igl","application/vnd.igloader");
      AddType("ivp","application/vnd.immervision-ivp");
      AddType("ivu","application/vnd.immervision-ivu");
      AddType("igm","application/vnd.insors.igm");
      AddType("xpw","application/vnd.intercon.formnet");
      AddType("xpx","application/vnd.intercon.formnet");
      AddType("i2g","application/vnd.intergeo");
      AddType("qbo","application/vnd.intu.qbo");
      AddType("qfx","application/vnd.intu.qfx");
      AddType("rcprofile","application/vnd.ipunplugged.rcprofile");
      AddType("irp","application/vnd.irepository.package+xml");
      AddType("xpr","application/vnd.is-xpr");
      AddType("fcs","application/vnd.isac.fcs");
      AddType("jam","application/vnd.jam");
      AddType("rms","application/vnd.jcp.javame.midlet-rms");
      AddType("jisp","application/vnd.jisp");
      AddType("joda","application/vnd.joost.joda-archive");
      AddType("ktz","application/vnd.kahootz");
      AddType("ktr","application/vnd.kahootz");
      AddType("karbon","application/vnd.kde.karbon");
      AddType("chrt","application/vnd.kde.kchart");
      AddType("kfo","application/vnd.kde.kformula");
      AddType("flw","application/vnd.kde.kivio");
      AddType("kon","application/vnd.kde.kontour");
      AddType("kpr","application/vnd.kde.kpresenter");
      AddType("kpt","application/vnd.kde.kpresenter");
      AddType("ksp","application/vnd.kde.kspread");
      AddType("kwd","application/vnd.kde.kword");
      AddType("kwt","application/vnd.kde.kword");
      AddType("htke","application/vnd.kenameaapp");
      AddType("kia","application/vnd.kidspiration");
      AddType("kne","application/vnd.kinar");
      AddType("knp","application/vnd.kinar");
      AddType("skp","application/vnd.koan");
      AddType("skd","application/vnd.koan");
      AddType("skt","application/vnd.koan");
      AddType("skm","application/vnd.koan");
      AddType("sse","application/vnd.kodak-descriptor");
      AddType("lasxml","application/vnd.las.las+xml");
      AddType("lbd","application/vnd.llamagraphics.life-balance.desktop");
      AddType("lbe","application/vnd.llamagraphics.life-balance.exchange+xml");
      AddType("123","application/vnd.lotus-1-2-3");
      AddType("apr","application/vnd.lotus-approach");
      AddType("pre","application/vnd.lotus-freelance");
      AddType("nsf","application/vnd.lotus-notes");
      AddType("org","application/vnd.lotus-organizer");
      AddType("scm","application/vnd.lotus-screencam");
      AddType("lwp","application/vnd.lotus-wordpro");
      AddType("portpkg","application/vnd.macports.portpkg");
      AddType("mcd","application/vnd.mcd");
      AddType("mc1","application/vnd.medcalcdata");
      AddType("cdkey","application/vnd.mediastation.cdkey");
      AddType("mwf","application/vnd.mfer");
      AddType("mfm","application/vnd.mfmp");
      AddType("flo","application/vnd.micrografx.flo");
      AddType("igx","application/vnd.micrografx.igx");
      AddType("mif","application/vnd.mif");
      AddType("daf","application/vnd.mobius.daf");
      AddType("dis","application/vnd.mobius.dis");
      AddType("mbk","application/vnd.mobius.mbk");
      AddType("mqy","application/vnd.mobius.mqy");
      AddType("msl","application/vnd.mobius.msl");
      AddType("plc","application/vnd.mobius.plc");
      AddType("txf","application/vnd.mobius.txf");
      AddType("mpn","application/vnd.mophun.application");
      AddType("mpc","application/vnd.mophun.certificate");
      AddType("xul","application/vnd.mozilla.xul+xml");
      AddType("cil","application/vnd.ms-artgalry");
      AddType("cab","application/vnd.ms-cab-compressed");
      AddType("xls","application/vnd.ms-excel");
      AddType("xlm","application/vnd.ms-excel");
      AddType("xla","application/vnd.ms-excel");
      AddType("xlc","application/vnd.ms-excel");
      AddType("xlt","application/vnd.ms-excel");
      AddType("xlw","application/vnd.ms-excel");
      AddType("xlam","application/vnd.ms-excel.addin.macroenabled.12");
      AddType("xlsb","application/vnd.ms-excel.sheet.binary.macroenabled.12");
      AddType("xlsm","application/vnd.ms-excel.sheet.macroenabled.12");
      AddType("xltm","application/vnd.ms-excel.template.macroenabled.12");
      AddType("eot","application/vnd.ms-fontobject");
      AddType("chm","application/vnd.ms-htmlhelp");
      AddType("ims","application/vnd.ms-ims");
      AddType("lrm","application/vnd.ms-lrm");
      AddType("thmx","application/vnd.ms-officetheme");
      AddType("cat","application/vnd.ms-pki.seccat");
      AddType("stl","application/vnd.ms-pki.stl");
      AddType("ppt","application/vnd.ms-powerpoint");
      AddType("pps","application/vnd.ms-powerpoint");
      AddType("pot","application/vnd.ms-powerpoint");
      AddType("ppam","application/vnd.ms-powerpoint.addin.macroenabled.12");
      AddType("pptm","application/vnd.ms-powerpoint.presentation.macroenabled.12");
      AddType("sldm","application/vnd.ms-powerpoint.slide.macroenabled.12");
      AddType("ppsm","application/vnd.ms-powerpoint.slideshow.macroenabled.12");
      AddType("potm","application/vnd.ms-powerpoint.template.macroenabled.12");
      AddType("mpp","application/vnd.ms-project");
      AddType("mpt","application/vnd.ms-project");
      AddType("docm","application/vnd.ms-word.document.macroenabled.12");
      AddType("dotm","application/vnd.ms-word.template.macroenabled.12");
      AddType("wps","application/vnd.ms-works");
      AddType("wks","application/vnd.ms-works");
      AddType("wcm","application/vnd.ms-works");
      AddType("wdb","application/vnd.ms-works");
      AddType("wpl","application/vnd.ms-wpl");
      AddType("xps","application/vnd.ms-xpsdocument");
      AddType("mseq","application/vnd.mseq");
      AddType("mus","application/vnd.musician");
      AddType("msty","application/vnd.muvee.style");
      AddType("taglet","application/vnd.mynfc");
      AddType("nlu","application/vnd.neurolanguage.nlu");
      AddType("ntf","application/vnd.nitf");
      AddType("nitf","application/vnd.nitf");
      AddType("nnd","application/vnd.noblenet-directory");
      AddType("nns","application/vnd.noblenet-sealer");
      AddType("nnw","application/vnd.noblenet-web");
      AddType("ngdat","application/vnd.nokia.n-gage.data");
      AddType("n-gage","application/vnd.nokia.n-gage.symbian.install");
      AddType("rpst","application/vnd.nokia.radio-preset");
      AddType("rpss","application/vnd.nokia.radio-presets");
      AddType("edm","application/vnd.novadigm.edm");
      AddType("edx","application/vnd.novadigm.edx");
      AddType("FExt","application/vnd.novadigm.FExt");
      AddType("odc","application/vnd.oasis.opendocument.chart");
      AddType("otc","application/vnd.oasis.opendocument.chart-template");
      AddType("odb","application/vnd.oasis.opendocument.database");
      AddType("odf","application/vnd.oasis.opendocument.formula");
      AddType("odft","application/vnd.oasis.opendocument.formula-template");
      AddType("odg","application/vnd.oasis.opendocument.graphics");
      AddType("otg","application/vnd.oasis.opendocument.graphics-template");
      AddType("odi","application/vnd.oasis.opendocument.image");
      AddType("oti","application/vnd.oasis.opendocument.image-template");
      AddType("odp","application/vnd.oasis.opendocument.presentation");
      AddType("otp","application/vnd.oasis.opendocument.presentation-template");
      AddType("ods","application/vnd.oasis.opendocument.spreadsheet");
      AddType("ots","application/vnd.oasis.opendocument.spreadsheet-template");
      AddType("odt","application/vnd.oasis.opendocument.text");
      AddType("odm","application/vnd.oasis.opendocument.text-master");
      AddType("ott","application/vnd.oasis.opendocument.text-template");
      AddType("oth","application/vnd.oasis.opendocument.text-web");
      AddType("xo","application/vnd.olpc-sugar");
      AddType("dd2","application/vnd.oma.dd2+xml");
      AddType("oxt","application/vnd.openofficeorg.extension");
      AddType("pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation");
      AddType("sldx","application/vnd.openxmlformats-officedocument.presentationml.slide");
      AddType("ppsx","application/vnd.openxmlformats-officedocument.presentationml.slideshow");
      AddType("potx","application/vnd.openxmlformats-officedocument.presentationml.template");
      AddType("xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
      AddType("xltx","application/vnd.openxmlformats-officedocument.spreadsheetml.template");
      AddType("docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document");
      AddType("dotx","application/vnd.openxmlformats-officedocument.wordprocessingml.template");
      AddType("mgp","application/vnd.osgeo.mapguide.package");
      AddType("dp","application/vnd.osgi.dp");
      AddType("esa","application/vnd.osgi.subsystem");
      AddType("pdb","application/vnd.palm");
      AddType("pqa","application/vnd.palm");
      AddType("oprc","application/vnd.palm");
      AddType("paw","application/vnd.pawaafile");
      AddType("str","application/vnd.pg.format");
      AddType("ei6","application/vnd.pg.osasli");
      AddType("efif","application/vnd.picsel");
      AddType("wg","application/vnd.pmi.widget");
      AddType("plf","application/vnd.pocketlearn");
      AddType("pbd","application/vnd.powerbuilder6");
      AddType("box","application/vnd.previewsystems.box");
      AddType("mgz","application/vnd.proteus.magazine");
      AddType("qps","application/vnd.publishare-delta-tree");
      AddType("ptid","application/vnd.pvi.ptid1");
      AddType("qxd","application/vnd.quark.quarkxpress");
      AddType("qxt","application/vnd.quark.quarkxpress");
      AddType("qwd","application/vnd.quark.quarkxpress");
      AddType("qwt","application/vnd.quark.quarkxpress");
      AddType("qxl","application/vnd.quark.quarkxpress");
      AddType("qxb","application/vnd.quark.quarkxpress");
      AddType("bed","application/vnd.realvnc.bed");
      AddType("mxl","application/vnd.recordare.musicxml");
      AddType("musicxml","application/vnd.recordare.musicxml+xml");
      AddType("cryptonote","application/vnd.rig.cryptonote");
      AddType("cod","application/vnd.rim.cod");
      AddType("rm","application/vnd.rn-realmedia");
      AddType("rmvb","application/vnd.rn-realmedia-vbr");
      AddType("link66","application/vnd.route66.link66+xml");
      AddType("st","application/vnd.sailingtracker.track");
      AddType("see","application/vnd.seemail");
      AddType("sema","application/vnd.sema");
      AddType("semd","application/vnd.semd");
      AddType("semf","application/vnd.semf");
      AddType("ifm","application/vnd.shana.informed.formdata");
      AddType("itp","application/vnd.shana.informed.formtemplate");
      AddType("iif","application/vnd.shana.informed.interchange");
      AddType("ipk","application/vnd.shana.informed.package");
      AddType("twd","application/vnd.simtech-mindmapper");
      AddType("twds","application/vnd.simtech-mindmapper");
      AddType("mmf","application/vnd.smaf");
      AddType("teacher","application/vnd.smart.teacher");
      AddType("sdkm","application/vnd.solent.sdkm+xml");
      AddType("sdkd","application/vnd.solent.sdkm+xml");
      AddType("dxp","application/vnd.spotfire.dxp");
      AddType("sfs","application/vnd.spotfire.sfs");
      AddType("sdc","application/vnd.stardivision.calc");
      AddType("sda","application/vnd.stardivision.draw");
      AddType("sdd","application/vnd.stardivision.impress");
      AddType("smf","application/vnd.stardivision.math");
      AddType("sdw","application/vnd.stardivision.writer");
      AddType("vor","application/vnd.stardivision.writer");
      AddType("sgl","application/vnd.stardivision.writer-global");
      AddType("smzip","application/vnd.stepmania.package");
      AddType("sm","application/vnd.stepmania.stepchart");
      AddType("sxc","application/vnd.sun.xml.calc");
      AddType("stc","application/vnd.sun.xml.calc.template");
      AddType("sxd","application/vnd.sun.xml.draw");
      AddType("std","application/vnd.sun.xml.draw.template");
      AddType("sxi","application/vnd.sun.xml.impress");
      AddType("sti","application/vnd.sun.xml.impress.template");
      AddType("sxm","application/vnd.sun.xml.math");
      AddType("sxw","application/vnd.sun.xml.writer");
      AddType("sxg","application/vnd.sun.xml.writer.global");
      AddType("stw","application/vnd.sun.xml.writer.template");
      AddType("sus","application/vnd.sus-calendar");
      AddType("susp","application/vnd.sus-calendar");
      AddType("svd","application/vnd.svd");
      AddType("sis","application/vnd.symbian.install");
      AddType("sisx","application/vnd.symbian.install");
      AddType("xsm","application/vnd.syncml+xml");
      AddType("bdm","application/vnd.syncml.dm+wbxml");
      AddType("xdm","application/vnd.syncml.dm+xml");
      AddType("tao","application/vnd.tao.intent-module-archive");
      AddType("pcap","application/vnd.tcpdump.pcap");
      AddType("cap","application/vnd.tcpdump.pcap");
      AddType("dmp","application/vnd.tcpdump.pcap");
      AddType("tmo","application/vnd.tmobile-livetv");
      AddType("tpt","application/vnd.trid.tpt");
      AddType("mxs","application/vnd.triscape.mxs");
      AddType("tra","application/vnd.trueapp");
      AddType("ufd","application/vnd.ufdl");
      AddType("ufdl","application/vnd.ufdl");
      AddType("utz","application/vnd.uiq.theme");
      AddType("umj","application/vnd.umajin");
      AddType("unityweb","application/vnd.unity");
      AddType("uoml","application/vnd.uoml+xml");
      AddType("vcx","application/vnd.vcx");
      AddType("vsd","application/vnd.visio");
      AddType("vst","application/vnd.visio");
      AddType("vss","application/vnd.visio");
      AddType("vsw","application/vnd.visio");
      AddType("vis","application/vnd.visionary");
      AddType("vsf","application/vnd.vsf");
      AddType("wbxml","application/vnd.wap.wbxml");
      AddType("wmlc","application/vnd.wap.wmlc");
      AddType("wmlsc","application/vnd.wap.wmlscriptc");
      AddType("wtb","application/vnd.webturbo");
      AddType("nbp","application/vnd.wolfram.player");
      AddType("wpd","application/vnd.wordperfect");
      AddType("wqd","application/vnd.wqd");
      AddType("stf","application/vnd.wt.stf");
      AddType("xar","application/vnd.xara");
      AddType("xfdl","application/vnd.xfdl");
      AddType("hvd","application/vnd.yamaha.hv-dic");
      AddType("hvs","application/vnd.yamaha.hv-script");
      AddType("hvp","application/vnd.yamaha.hv-voice");
      AddType("osf","application/vnd.yamaha.openscoreformat");
      AddType("osfpvg","application/vnd.yamaha.openscoreformat.osfpvg+xml");
      AddType("saf","application/vnd.yamaha.smaf-audio");
      AddType("spf","application/vnd.yamaha.smaf-phrase");
      AddType("cmp","application/vnd.yellowriver-custom-menu");
      AddType("zir","application/vnd.zul");
      AddType("zirz","application/vnd.zul");
      AddType("zaz","application/vnd.zzazz.deck+xml");
      AddType("vxml","application/voicexml+xml");
      AddType("wgt","application/widget");
      AddType("hlp","application/winhlp");
      AddType("wsdl","application/wsdl+xml");
      AddType("wspolicy","application/wspolicy+xml");
      AddType("7z","application/x-7z-compressed");
      AddType("abw","application/x-abiword");
      AddType("ace","application/x-ace-compressed");
      AddType("dmg","application/x-apple-diskimage");
      AddType("aab","application/x-authorware-bin");
      AddType("x32","application/x-authorware-bin");
      AddType("u32","application/x-authorware-bin");
      AddType("vox","application/x-authorware-bin");
      AddType("aam","application/x-authorware-map");
      AddType("aas","application/x-authorware-seg");
      AddType("bcpio","application/x-bcpio");
      AddType("torrent","application/x-bittorrent");
      AddType("blb","application/x-blorb");
      AddType("blorb","application/x-blorb");
      AddType("bz","application/x-bzip");
      AddType("bz2","application/x-bzip2");
      AddType("boz","application/x-bzip2");
      AddType("cbr","application/x-cbr");
      AddType("cba","application/x-cbr");
      AddType("cbt","application/x-cbr");
      AddType("cbz","application/x-cbr");
      AddType("cb7","application/x-cbr");
      AddType("vcd","application/x-cdlink");
      AddType("cfs","application/x-cfs-compressed");
      AddType("chat","application/x-chat");
      AddType("pgn","application/x-chess-pgn");
      AddType("nsc","application/x-conference");
      AddType("cpio","application/x-cpio");
      AddType("csh","application/x-csh");
      AddType("deb","application/x-debian-package");
      AddType("udeb","application/x-debian-package");
      AddType("dgc","application/x-dgc-compressed");
      AddType("dir","application/x-director");
      AddType("dcr","application/x-director");
      AddType("dxr","application/x-director");
      AddType("cst","application/x-director");
      AddType("cct","application/x-director");
      AddType("cxt","application/x-director");
      AddType("w3d","application/x-director");
      AddType("fgd","application/x-director");
      AddType("swa","application/x-director");
      AddType("wad","application/x-doom");
      AddType("ncx","application/x-dtbncx+xml");
      AddType("dtb","application/x-dtbook+xml");
      AddType("res","application/x-dtbresource+xml");
      AddType("dvi","application/x-dvi");
      AddType("evy","application/x-envoy");
      AddType("eva","application/x-eva");
      AddType("bdf","application/x-font-bdf");
      AddType("gsf","application/x-font-ghostscript");
      AddType("psf","application/x-font-linux-psf");
      AddType("otf","application/x-font-otf");
      AddType("pcf","application/x-font-pcf");
      AddType("snf","application/x-font-snf");
      AddType("ttf","application/x-font-ttf");
      AddType("ttc","application/x-font-ttf");
      AddType("pfa","application/x-font-type1");
      AddType("pfb","application/x-font-type1");
      AddType("pfm","application/x-font-type1");
      AddType("afm","application/x-font-type1");
      AddType("woff","application/x-font-woff");
      AddType("arc","application/x-freearc");
      AddType("spl","application/x-futuresplash");
      AddType("gca","application/x-gca-compressed");
      AddType("ulx","application/x-glulx");
      AddType("gnumeric","application/x-gnumeric");
      AddType("gramps","application/x-gramps-xml");
      AddType("gtar","application/x-gtar");
      AddType("hdf","application/x-hdf");
      AddType("install","application/x-install-instructions");
      AddType("iso","application/x-iso9660-image");
      AddType("jnlp","application/x-java-jnlp-file");
      AddType("latex","application/x-latex");
      AddType("lzh","application/x-lzh-compressed");
      AddType("lha","application/x-lzh-compressed");
      AddType("mie","application/x-mie");
      AddType("prc","application/x-mobipocket-ebook");
      AddType("mobi","application/x-mobipocket-ebook");
      AddType("application","application/x-ms-application");
      AddType("lnk","application/x-ms-shortcut");
      AddType("wmd","application/x-ms-wmd");
      AddType("wmz","application/x-ms-wmz");
      AddType("xbap","application/x-ms-xbap");
      AddType("mdb","application/x-msaccess");
      AddType("obd","application/x-msbinder");
      AddType("crd","application/x-mscardfile");
      AddType("clp","application/x-msclip");
      AddType("exe","application/x-msdownload");
      AddType("dll","application/x-msdownload");
      AddType("com","application/x-msdownload");
      AddType("bat","application/x-msdownload");
      AddType("msi","application/x-msdownload");
      AddType("mvb","application/x-msmediaview");
      AddType("m13","application/x-msmediaview");
      AddType("m14","application/x-msmediaview");
      AddType("wmf","application/x-msmetafile");
      AddType("wmz","application/x-msmetafile");
      AddType("emf","application/x-msmetafile");
      AddType("emz","application/x-msmetafile");
      AddType("mny","application/x-msmoney");
      AddType("pub","application/x-mspublisher");
      AddType("scd","application/x-msschedule");
      AddType("trm","application/x-msterminal");
      AddType("wri","application/x-mswrite");
      AddType("nc","application/x-netcdf");
      AddType("cdf","application/x-netcdf");
      AddType("nzb","application/x-nzb");
      AddType("p12","application/x-pkcs12");
      AddType("pfx","application/x-pkcs12");
      AddType("p7b","application/x-pkcs7-certificates");
      AddType("spc","application/x-pkcs7-certificates");
      AddType("p7r","application/x-pkcs7-certreqresp");
      AddType("rar","application/x-rar-compressed");
      AddType("ris","application/x-research-info-systems");
      AddType("sh","application/x-sh");
      AddType("shar","application/x-shar");
      AddType("swf","application/x-shockwave-flash");
      AddType("xap","application/x-silverlight-app");
      AddType("sql","application/x-sql");
      AddType("sit","application/x-stuffit");
      AddType("sitx","application/x-stuffitx");
      AddType("srt","application/x-subrip");
      AddType("sv4cpio","application/x-sv4cpio");
      AddType("sv4crc","application/x-sv4crc");
      AddType("t3","application/x-t3vm-image");
      AddType("gam","application/x-tads");
      AddType("tar","application/x-tar");
      AddType("tcl","application/x-tcl");
      AddType("tex","application/x-tex");
      AddType("tfm","application/x-tex-tfm");
      AddType("texinfo","application/x-texinfo");
      AddType("texi","application/x-texinfo");
      AddType("obj","application/x-tgif");
      AddType("ustar","application/x-ustar");
      AddType("src","application/x-wais-source");
      AddType("der","application/x-x509-ca-cert");
      AddType("crt","application/x-x509-ca-cert");
      AddType("fig","application/x-xfig");
      AddType("xlf","application/x-xliff+xml");
      AddType("xpi","application/x-xpinstall");
      AddType("xz","application/x-xz");
      AddType("z1","application/x-zmachine");
      AddType("z2","application/x-zmachine");
      AddType("z3","application/x-zmachine");
      AddType("z4","application/x-zmachine");
      AddType("z5","application/x-zmachine");
      AddType("z6","application/x-zmachine");
      AddType("z7","application/x-zmachine");
      AddType("z8","application/x-zmachine");
      AddType("xaml","application/xaml+xml");
      AddType("xdf","application/xcap-diff+xml");
      AddType("xenc","application/xenc+xml");
      AddType("xhtml","application/xhtml+xml");
      AddType("xht","application/xhtml+xml");
      AddType("xml","application/xml");
      AddType("xsl","application/xml");
      AddType("dtd","application/xml-dtd");
      AddType("xop","application/xop+xml");
      AddType("xpl","application/xproc+xml");
      AddType("xslt","application/xslt+xml");
      AddType("xspf","application/xspf+xml");
      AddType("mxml","application/xv+xml");
      AddType("xhvml","application/xv+xml");
      AddType("xvml","application/xv+xml");
      AddType("xvm","application/xv+xml");
      AddType("yang","application/yang");
      AddType("yin","application/yin+xml");
      AddType("zip","application/zip");
      AddType("adp","audio/adpcm");
      AddType("au","audio/basic");
      AddType("snd","audio/basic");
      AddType("mid","audio/midi");
      AddType("midi","audio/midi");
      AddType("kar","audio/midi");
      AddType("rmi","audio/midi");
      AddType("mp4a","audio/mp4");
      AddType("mpga","audio/mpeg");
      AddType("mp2","audio/mpeg");
      AddType("mp2a","audio/mpeg");
      AddType("mp3","audio/mpeg");
      AddType("m2a","audio/mpeg");
      AddType("m3a","audio/mpeg");
      AddType("oga","audio/ogg");
      AddType("ogg","audio/ogg");
      AddType("spx","audio/ogg");
      AddType("s3m","audio/s3m");
      AddType("sil","audio/silk");
      AddType("uva","audio/vnd.dece.audio");
      AddType("uvva","audio/vnd.dece.audio");
      AddType("eol","audio/vnd.digital-winds");
      AddType("dra","audio/vnd.dra");
      AddType("dts","audio/vnd.dts");
      AddType("dtshd","audio/vnd.dts.hd");
      AddType("lvp","audio/vnd.lucent.voice");
      AddType("pya","audio/vnd.ms-playready.media.pya");
      AddType("ecelp4800","audio/vnd.nuera.ecelp4800");
      AddType("ecelp7470","audio/vnd.nuera.ecelp7470");
      AddType("ecelp9600","audio/vnd.nuera.ecelp9600");
      AddType("rip","audio/vnd.rip");
      AddType("weba","audio/webm");
      AddType("aac","audio/aac");
      AddType("aif","audio/x-aiff");
      AddType("aiff","audio/x-aiff");
      AddType("aifc","audio/x-aiff");
      AddType("caf","audio/x-caf");
      AddType("flac","audio/x-flac");
      AddType("mka","audio/x-matroska");
      AddType("m3u","audio/x-mpegurl");
      AddType("wax","audio/x-ms-wax");
      AddType("wma","audio/x-ms-wma");
      AddType("ram","audio/x-pn-realaudio");
      AddType("ra","audio/x-pn-realaudio");
      AddType("rmp","audio/x-pn-realaudio-plugin");
      AddType("wav","audio/x-wav");
      AddType("xm","audio/xm");
      AddType("cdx","chemical/x-cdx");
      AddType("cif","chemical/x-cif");
      AddType("cmdf","chemical/x-cmdf");
      AddType("cml","chemical/x-cml");
      AddType("csml","chemical/x-csml");
      AddType("xyz","chemical/x-xyz");
      AddType("bmp","image/bmp");
      AddType("cgm","image/cgm");
      AddType("g3","image/g3fax");
      AddType("gif","image/gif");
      AddType("ief","image/ief");
      AddType("jpeg","image/jpeg");
      AddType("jpg","image/jpeg");
      AddType("jpe","image/jpeg");
      AddType("ktx","image/ktx");
      AddType("png","image/png");
      AddType("btif","image/prs.btif");
      AddType("sgi","image/sgi");
      AddType("svg","image/svg+xml");
      AddType("svgz","image/svg+xml");
      AddType("tiff","image/tiff");
      AddType("tif","image/tiff");
      AddType("psd","image/vnd.adobe.photoshop");
      AddType("uvi","image/vnd.dece.graphic");
      AddType("uvvi","image/vnd.dece.graphic");
      AddType("uvg","image/vnd.dece.graphic");
      AddType("uvvg","image/vnd.dece.graphic");
      AddType("sub","image/vnd.dvb.subtitle");
      AddType("djvu","image/vnd.djvu");
      AddType("djv","image/vnd.djvu");
      AddType("dwg","image/vnd.dwg");
      AddType("dxf","image/vnd.dxf");
      AddType("fbs","image/vnd.fastbidsheet");
      AddType("fpx","image/vnd.fpx");
      AddType("fst","image/vnd.fst");
      AddType("mmr","image/vnd.fujixerox.edmics-mmr");
      AddType("rlc","image/vnd.fujixerox.edmics-rlc");
      AddType("mdi","image/vnd.ms-modi");
      AddType("wdp","image/vnd.ms-photo");
      AddType("npx","image/vnd.net-fpx");
      AddType("wbmp","image/vnd.wap.wbmp");
      AddType("xif","image/vnd.xiff");
      AddType("webp","image/webp");
      AddType("3ds","image/x-3ds");
      AddType("ras","image/x-cmu-raster");
      AddType("cmx","image/x-cmx");
      AddType("fh","image/x-freehand");
      AddType("fhc","image/x-freehand");
      AddType("fh4","image/x-freehand");
      AddType("fh5","image/x-freehand");
      AddType("fh7","image/x-freehand");
      AddType("ico","image/x-icon");
      AddType("sid","image/x-mrsid-image");
      AddType("pcx","image/x-pcx");
      AddType("pic","image/x-pict");
      AddType("pct","image/x-pict");
      AddType("pnm","image/x-portable-anymap");
      AddType("pbm","image/x-portable-bitmap");
      AddType("pgm","image/x-portable-graymap");
      AddType("ppm","image/x-portable-pixmap");
      AddType("rgb","image/x-rgb");
      AddType("tga","image/x-tga");
      AddType("xbm","image/x-xbitmap");
      AddType("xpm","image/x-xpixmap");
      AddType("xwd","image/x-xwindowdump");
      AddType("eml","message/rfc822");
      AddType("mime","message/rfc822");
      AddType("igs","model/iges");
      AddType("iges","model/iges");
      AddType("msh","model/mesh");
      AddType("mesh","model/mesh");
      AddType("silo","model/mesh");
      AddType("dae","model/vnd.collada+xml");
      AddType("dwf","model/vnd.dwf");
      AddType("gdl","model/vnd.gdl");
      AddType("gtw","model/vnd.gtw");
      AddType("mts","model/vnd.mts");
      AddType("vtu","model/vnd.vtu");
      AddType("wrl","model/vrml");
      AddType("vrml","model/vrml");
      AddType("x3db","model/x3d+binary");
      AddType("x3dbz","model/x3d+binary");
      AddType("x3dv","model/x3d+vrml");
      AddType("x3dvz","model/x3d+vrml");
      AddType("x3d","model/x3d+xml");
      AddType("x3dz","model/x3d+xml");
      AddType("appcache","text/cache-manifest");
      AddType("ics","text/calendar");
      AddType("ifb","text/calendar");
      AddType("cmd","text/cmd");
      AddType("css","text/css");
      AddType("csv","text/csv");
      AddType("html","text/html");
      AddType("htm","text/html");
      AddType("n3","text/n3");
      AddType("txt","text/plain");
      AddType("text","text/plain");
      AddType("conf","text/plain");
      AddType("def","text/plain");
      AddType("list","text/plain");
      AddType("log","text/plain");
      AddType("in","text/plain");
      AddType("js","text/plain");
      AddType("dsc","text/prs.lines.tag");
      AddType("rtx","text/richtext");
      AddType("sgml","text/sgml");
      AddType("sgm","text/sgml");
      AddType("tsv","text/tab-separated-values");
      AddType("t","text/troff");
      AddType("tr","text/troff");
      AddType("roff","text/troff");
      AddType("man","text/troff");
      AddType("me","text/troff");
      AddType("ms","text/troff");
      AddType("ttl","text/turtle");
      AddType("uri","text/uri-list");
      AddType("uris","text/uri-list");
      AddType("urls","text/uri-list");
      AddType("vcard","text/vcard");
      AddType("curl","text/vnd.curl");
      AddType("dcurl","text/vnd.curl.dcurl");
      AddType("scurl","text/vnd.curl.scurl");
      AddType("mcurl","text/vnd.curl.mcurl");
      AddType("sub","text/vnd.dvb.subtitle");
      AddType("fly","text/vnd.fly");
      AddType("flx","text/vnd.fmi.flexstor");
      AddType("gv","text/vnd.graphviz");
      AddType("3dml","text/vnd.in3d.3dml");
      AddType("spot","text/vnd.in3d.spot");
      AddType("jad","text/vnd.sun.j2me.app-descriptor");
      AddType("wml","text/vnd.wap.wml");
      AddType("wmls","text/vnd.wap.wmlscript");
      AddType("s","text/x-asm");
      AddType("asm","text/x-asm");
      AddType("c","text/x-c");
      AddType("cc","text/x-c");
      AddType("cxx","text/x-c");
      AddType("cpp","text/x-c");
      AddType("h","text/x-c");
      AddType("hh","text/x-c");
      AddType("dic","text/x-c");
      AddType("f","text/x-fortran");
      AddType("for","text/x-fortran");
      AddType("f77","text/x-fortran");
      AddType("f90","text/x-fortran");
      AddType("java","text/x-java-source");
      AddType("opml","text/x-opml");
      AddType("p","text/x-pascal");
      AddType("pas","text/x-pascal");
      AddType("nfo","text/x-nfo");
      AddType("etx","text/x-setext");
      AddType("sfv","text/x-sfv");
      AddType("uu","text/x-uuencode");
      AddType("vcs","text/x-vcalendar");
      AddType("vcf","text/x-vcard");
      AddType("xml","text/xml");
      AddType("xsl","text/xml");
      AddType("dtd","text/xml-dtd");
      AddType("3gp","video/3gpp");
      AddType("3g2","video/3gpp2");
      AddType("h261","video/h261");
      AddType("h263","video/h263");
      AddType("h264","video/h264");
      AddType("jpgv","video/jpeg");
      AddType("jpm","video/jpm");
      AddType("jpgm","video/jpm");
      AddType("mj2","video/mj2");
      AddType("mjp2","video/mj2");
      AddType("mp4","video/mp4");
      AddType("mp4v","video/mp4");
      AddType("mpg4","video/mp4");
      AddType("mpeg","video/mpeg");
      AddType("mpg","video/mpeg");
      AddType("mpe","video/mpeg");
      AddType("m1v","video/mpeg");
      AddType("m2v","video/mpeg");
      AddType("ogv","video/ogg");
      AddType("qt","video/quicktime");
      AddType("mov","video/quicktime");
      AddType("uvh","video/vnd.dece.hd");
      AddType("uvvh","video/vnd.dece.hd");
      AddType("uvm","video/vnd.dece.mobile");
      AddType("uvvm","video/vnd.dece.mobile");
      AddType("uvp","video/vnd.dece.pd");
      AddType("uvvp","video/vnd.dece.pd");
      AddType("uvs","video/vnd.dece.sd");
      AddType("uvvs","video/vnd.dece.sd");
      AddType("uvv","video/vnd.dece.video");
      AddType("uvvv","video/vnd.dece.video");
      AddType("dvb","video/vnd.dvb.file");
      AddType("fvt","video/vnd.fvt");
      AddType("mxu","video/vnd.mpegurl");
      AddType("m4u","video/vnd.mpegurl");
      AddType("pyv","video/vnd.ms-playready.media.pyv");
      AddType("uvu","video/vnd.uvvu.mp4");
      AddType("uvvu","video/vnd.uvvu.mp4");
      AddType("viv","video/vnd.vivo");
      AddType("webm","video/webm");
      AddType("f4v","video/x-f4v");
      AddType("fli","video/x-fli");
      AddType("flv","video/x-flv");
      AddType("m4v","video/x-m4v");
      AddType("mkv","video/x-matroska");
      AddType("mk3d","video/x-matroska");
      AddType("mks","video/x-matroska");
      AddType("mng","video/x-mng");
      AddType("asf","video/x-ms-asf");
      AddType("asx","video/x-ms-asf");
      AddType("vob","video/x-ms-vob");
      AddType("wm","video/x-ms-wm");
      AddType("wmv","video/x-ms-wmv");
      AddType("wmx","video/x-ms-wmx");
      AddType("wvx","video/x-ms-wvx");
      AddType("avi","video/x-msvideo");
      AddType("movie","video/x-sgi-movie");
      AddType("smv","video/x-smv");
      AddType("ice","x-conference/x-cooltalk");
    };
  };
  $mod.$init = function () {
    $impl.FMimeTypes = pas.Classes.TStringList.$create("Create$1");
    $impl.RegisterMimeTypes();
  };
},["DateUtils"]);
//# sourceMappingURL=WEBLib.TMSFNCUtils.js.map
