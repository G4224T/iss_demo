rtl.module("TimeSpan",["System"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  rtl.recNewT(this,"TTimeSpan",function () {
    this.FTicks = 0;
    this.FMinValue = 0;
    this.FMaxValue = 0;
    this.FZero = 0;
    this.cIntLengthShift = 52 - 1;
    this.MillisecondsPerTick = 0.0001;
    this.SecondsPerTick = 1e-7;
    this.MinutesPerTick = 1.6666666666666667E-9;
    this.HoursPerTick = 2.7777777777777777E-11;
    this.DaysPerTick = 1.1574074074074074E-12;
    this.MillisPerSecond = 1000;
    this.MillisPerMinute = 60 * 1000;
    this.MillisPerHour = 60 * 60000;
    this.MillisPerDay = 24 * 3600000;
    this.MaxSeconds = 922337203685;
    this.MinSeconds = -922337203685;
    this.MaxMilliseconds = 922337203685477;
    this.MinMilliseconds = -922337203685477;
    this.TicksPerMillisecond = 10000;
    this.TicksPerSecond = 1000 * 10000;
    this.TicksPerMinute = 60 * 10000000;
    this.TicksPerHour = 60 * 600000000;
    this.TicksPerDay = 24 * 36000000000;
    this.$eq = function (b) {
      return this.FTicks === b.FTicks;
    };
    this.$assign = function (s) {
      this.FTicks = s.FTicks;
      return this;
    };
    this.GetDays = function () {
      var Result = 0;
      Result = rtl.trunc(this.FTicks / 864000000000) & 0xFFFFFFFF;
      return Result;
    };
    this.GetHours = function () {
      var Result = 0;
      Result = (rtl.trunc(this.FTicks / 36000000000) % 24) & 0xFFFFFFFF;
      return Result;
    };
    this.GetMinutes = function () {
      var Result = 0;
      Result = (rtl.trunc(this.FTicks / 600000000) % 60) & 0xFFFFFFFF;
      return Result;
    };
    this.GetSeconds = function () {
      var Result = 0;
      Result = (rtl.trunc(this.FTicks / 10000000) % 60) & 0xFFFFFFFF;
      return Result;
    };
    this.GetMilliseconds = function () {
      var Result = 0;
      Result = (rtl.trunc(this.FTicks / 10000) % 1000) & 0xFFFFFFFF;
      return Result;
    };
    this.GetTotalDays = function () {
      var Result = 0.0;
      Result = this.FTicks * 1.1574074074074074E-12;
      return Result;
    };
    this.GetTotalHours = function () {
      var Result = 0.0;
      Result = this.FTicks * 2.7777777777777777E-11;
      return Result;
    };
    this.GetTotalMinutes = function () {
      var Result = 0.0;
      Result = this.FTicks * 1.6666666666666667E-9;
      return Result;
    };
    this.GetTotalSeconds = function () {
      var Result = 0.0;
      Result = this.FTicks * 1E-7;
      return Result;
    };
    this.GetTotalMilliseconds = function () {
      var Result = 0.0;
      Result = 1E-4;
      Result = this.FTicks * Result;
      if (Result > 922337203685477) {
        Result = 922337203685477}
       else if (Result < -922337203685477) Result = -922337203685477;
      return Result;
    };
    this.GetScaledInterval = function (AValue, AScale) {
      var Result = $mod.TTimeSpan.$new();
      var lNewValue = 0.0;
      if (isNaN(AValue)) throw pas.SysUtils.EArgumentException.$create("Create$1",[rtl.getResStr($mod,"STimespanValueCannotBeNan")]);
      lNewValue = AValue * AScale;
      if (AValue >= 0.0) {
        lNewValue = lNewValue + 0.5}
       else lNewValue = lNewValue - 0.5;
      if ((lNewValue > 922337203685477) || (lNewValue < -922337203685477)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr($mod,"STimespanElementTooLong")]);
      Result.$assign($mod.TTimeSpan.$new().Create(pas.System.Trunc(lNewValue) * 10000));
      return Result;
    };
    this.get_MaxValue = function () {
      var Result = $mod.TTimeSpan.$new();
      Result.FTicks = $mod.TTimeSpan.FMaxValue;
      return Result;
    };
    this.get_MinValue = function () {
      var Result = $mod.TTimeSpan.$new();
      Result.FTicks = $mod.TTimeSpan.FMinValue;
      return Result;
    };
    this.get_Zero = function () {
      var Result = $mod.TTimeSpan.$new();
      Result.FTicks = $mod.TTimeSpan.FZero;
      return Result;
    };
    this.Create = function (ATicks) {
      this.FTicks = ATicks;
      return this;
    };
    this.Create$1 = function (AHours, AMinutes, ASeconds) {
      this.FTicks = (AHours * 3600) + (AMinutes * 60) + ASeconds;
      if ((this.FTicks > 922337203685) || (this.FTicks < -922337203685)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr($mod,"STimespanTooLong")]);
      this.FTicks = this.FTicks * 10000000;
      return this;
    };
    this.Create$2 = function (ADays, AHours, AMinutes, ASeconds) {
      this.Create$3(ADays,AHours,AMinutes,ASeconds,0);
      return this;
    };
    this.Create$3 = function (ADays, AHours, AMinutes, ASeconds, AMilliseconds) {
      var lTicks = 0;
      lTicks = (((ADays * 86400) + (AHours * 3600) + (AMinutes * 60) + ASeconds) * 1000) + AMilliseconds;
      if ((lTicks > 922337203685477) || (lTicks < -922337203685477)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr($mod,"STimespanTooLong")]);
      this.FTicks = lTicks * 10000;
      return this;
    };
    this.Add = function (ATimeSpan) {
      var Result = $mod.TTimeSpan.$new();
      var lNewTicks = 0;
      lNewTicks = this.FTicks + ATimeSpan.FTicks;
      if ((Math.floor(this.FTicks / 2251799813685248) === Math.floor(ATimeSpan.FTicks / 2251799813685248)) && (Math.floor(this.FTicks / 2251799813685248) !== Math.floor(lNewTicks / 2251799813685248))) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr($mod,"STimespanTooLong")]);
      Result.$assign($mod.TTimeSpan.$new().Create(lNewTicks));
      return Result;
    };
    this.Duration = function () {
      var Result = $mod.TTimeSpan.$new();
      if (this.FTicks === this.get_MinValue().FTicks) throw pas.SysUtils.EIntOverflow.$create("Create$1",[rtl.getResStr($mod,"SInvalidTimespanDuration")]);
      if (this.FTicks < 0) {
        Result.$assign($mod.TTimeSpan.$new().Create(-this.FTicks))}
       else Result.$assign($mod.TTimeSpan.$new().Create(this.FTicks));
      return Result;
    };
    this.Negate = function () {
      var Result = $mod.TTimeSpan.$new();
      if (this.FTicks === this.get_MinValue().FTicks) throw pas.SysUtils.EIntOverflow.$create("Create$1",[rtl.getResStr($mod,"SCannotNegateTimespan")]);
      Result.$assign($mod.TTimeSpan.$new().Create(-this.FTicks));
      return Result;
    };
    this.Subtract = function (ATimeSpan) {
      var Result = $mod.TTimeSpan.$new();
      var lNewTicks = 0;
      lNewTicks = this.FTicks - ATimeSpan.FTicks;
      if ((Math.floor(this.FTicks / 2251799813685248) !== Math.floor(ATimeSpan.FTicks / 2251799813685248)) && (Math.floor(this.FTicks / 2251799813685248) !== Math.floor(lNewTicks / 2251799813685248))) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr($mod,"STimespanTooLong")]);
      Result.$assign($mod.TTimeSpan.$new().Create(lNewTicks));
      return Result;
    };
    this.ToString = function () {
      var Result = "";
      var lFormat = "";
      var lDays = 0;
      var lSecondTicks = 0;
      var lTicks = 0;
      lFormat = "%1:.2d:%2:.2d:%3:.2d";
      lDays = rtl.trunc(this.FTicks / 864000000000);
      lTicks = this.FTicks % 864000000000;
      if (this.FTicks < 0) lTicks = -lTicks;
      if (lDays !== 0) lFormat = "%0:d." + lFormat;
      lSecondTicks = lTicks % 10000000;
      if (lSecondTicks !== 0) lFormat = lFormat + ".%4:.7d";
      Result = pas.SysUtils.TStringHelper.Format(lFormat,pas.System.VarRecs(19,lDays,19,rtl.trunc(lTicks / 36000000000) % 24,19,rtl.trunc(lTicks / 600000000) % 60,19,rtl.trunc(lTicks / 10000000) % 60,19,lSecondTicks));
      return Result;
    };
    this.FromDays = function (AValue) {
      var Result = $mod.TTimeSpan.$new();
      Result.$assign($mod.TTimeSpan.GetScaledInterval(AValue,86400000));
      return Result;
    };
    this.FromHours = function (AValue) {
      var Result = $mod.TTimeSpan.$new();
      Result.$assign($mod.TTimeSpan.GetScaledInterval(AValue,3600000));
      return Result;
    };
    this.FromMinutes = function (AValue) {
      var Result = $mod.TTimeSpan.$new();
      Result.$assign($mod.TTimeSpan.GetScaledInterval(AValue,60000));
      return Result;
    };
    this.FromSeconds = function (AValue) {
      var Result = $mod.TTimeSpan.$new();
      Result.$assign($mod.TTimeSpan.GetScaledInterval(AValue,1000));
      return Result;
    };
    this.FromMilliseconds = function (AValue) {
      var Result = $mod.TTimeSpan.$new();
      Result.$assign($mod.TTimeSpan.GetScaledInterval(AValue,1));
      return Result;
    };
    this.FromTicks = function (AValue) {
      var Result = $mod.TTimeSpan.$new();
      Result.$assign($mod.TTimeSpan.$new().Create(AValue));
      return Result;
    };
    this.Subtract$1 = function (ADateTimeLeft, ADateTimeRight) {
      var Result = $mod.TTimeSpan.$new();
      Result.$assign($mod.TTimeSpan.$new().Create(pas.System.Trunc(pas.SysUtils.TimeStampToMSecs(pas.SysUtils.DateTimeToTimeStamp(ADateTimeLeft)) - pas.SysUtils.TimeStampToMSecs(pas.SysUtils.DateTimeToTimeStamp(ADateTimeRight))) * 10000));
      return Result;
    };
    this.Parse = function (AValue) {
      var Result = $mod.TTimeSpan.$new();
      var lParser = $impl.TTimeSpanParser.$new();
      Result.$assign($mod.TTimeSpan.$new().Create(lParser.Convert(AValue)));
      return Result;
    };
    this.TryParse = function (AValue, ATimeSpan) {
      var Result = false;
      var lTicks = 0;
      var lParser = $impl.TTimeSpanParser.$new();
      Result = lParser.TryConvert(AValue,{get: function () {
          return lTicks;
        }, set: function (v) {
          lTicks = v;
        }}) === $impl.TTimeSpanParser.TParseError.peNone;
      if (Result) {
        ATimeSpan.$assign($mod.TTimeSpan.$new().Create(lTicks))}
       else ATimeSpan.$assign($mod.TTimeSpan.get_Zero());
      return Result;
    };
    var $r = $mod.$rtti.$Record("TTimeSpan",{});
    $r.addMethod("Create",2,[["ATicks",rtl.nativeint]]);
    $r.addMethod("Create$1",2,[["AHours",rtl.longint,2],["AMinutes",rtl.longint,2],["ASeconds",rtl.longint,2]]);
    $r.addMethod("Create$2",2,[["ADays",rtl.longint,2],["AHours",rtl.longint,2],["AMinutes",rtl.longint,2],["ASeconds",rtl.longint,2]]);
    $r.addMethod("Create$3",2,[["ADays",rtl.longint,2],["AHours",rtl.longint,2],["AMinutes",rtl.longint,2],["ASeconds",rtl.longint,2],["AMilliseconds",rtl.longint,2]]);
    $r.addMethod("Add",1,[["ATimeSpan",$r,2]],$r);
    $r.addMethod("Duration",1,[],$r);
    $r.addMethod("Negate",1,[],$r);
    $r.addMethod("Subtract",1,[["ATimeSpan",$r,2]],$r);
    $r.addMethod("ToString",1,[],rtl.string);
    $r.addMethod("FromDays",5,[["AValue",rtl.double,2]],$r,1);
    $r.addMethod("FromHours",5,[["AValue",rtl.double,2]],$r,1);
    $r.addMethod("FromMinutes",5,[["AValue",rtl.double,2]],$r,1);
    $r.addMethod("FromSeconds",5,[["AValue",rtl.double,2]],$r,1);
    $r.addMethod("FromMilliseconds",5,[["AValue",rtl.double,2]],$r,1);
    $r.addMethod("FromTicks",5,[["AValue",rtl.nativeint,2]],$r,1);
    $r.addMethod("Subtract$1",5,[["ADateTimeLeft",pas.System.$rtti["TDateTime"],2],["ADateTimeRight",pas.System.$rtti["TDateTime"],2]],$r,1);
    $r.addMethod("Parse",5,[["AValue",rtl.string,2]],$r,1);
    $r.addMethod("TryParse",5,[["AValue",rtl.string,2],["ATimeSpan",$r,4]],rtl.boolean,1);
    $r.addProperty("Ticks",0,rtl.nativeint,"FTicks","");
    $r.addProperty("Days",1,rtl.longint,"GetDays","");
    $r.addProperty("Hours",1,rtl.longint,"GetHours","");
    $r.addProperty("Minutes",1,rtl.longint,"GetMinutes","");
    $r.addProperty("Seconds",1,rtl.longint,"GetSeconds","");
    $r.addProperty("Milliseconds",1,rtl.longint,"GetMilliseconds","");
    $r.addProperty("TotalDays",1,rtl.double,"GetTotalDays","");
    $r.addProperty("TotalHours",1,rtl.double,"GetTotalHours","");
    $r.addProperty("TotalMinutes",1,rtl.double,"GetTotalMinutes","");
    $r.addProperty("TotalSeconds",1,rtl.double,"GetTotalSeconds","");
    $r.addProperty("TotalMilliseconds",1,rtl.double,"GetTotalMilliseconds","");
    $r.addProperty("MinValue",1,$r,"get_MinValue","");
    $r.addProperty("MaxValue",1,$r,"get_MaxValue","");
    $r.addProperty("Zero",1,$r,"get_Zero","");
  },true);
  $mod.$implcode = function () {
    rtl.recNewT($impl,"TTimeSpanParser",function () {
      this.TParseError = {"0": "peNone", peNone: 0, "1": "peFormat", peFormat: 1, "2": "peOverflow", peOverflow: 2, "3": "peOverflowHMS", peOverflowHMS: 3};
      $mod.$rtti.$Enum("TTimeSpanParser.TParseError",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TParseError});
      this.FStr = "";
      this.FPos = 0;
      this.$eq = function (b) {
        return (this.FStr === b.FStr) && (this.FPos === b.FPos);
      };
      this.$assign = function (s) {
        this.FStr = s.FStr;
        this.FPos = s.FPos;
        return this;
      };
      this.CurrentChar = function () {
        var Result = "";
        if ((this.FPos >= 1) && (this.FPos <= this.FStr.length)) {
          Result = this.FStr.charAt(this.FPos - 1)}
         else Result = "\x00";
        return Result;
      };
      this.NextChar = function () {
        var Result = "";
        if (this.FPos <= this.FStr.length) this.FPos += 1;
        Result = this.CurrentChar();
        return Result;
      };
      this.NextNonDigit = function () {
        var Result = "";
        var lCount = 0;
        for (var $l = this.FPos, $end = this.FStr.length; $l <= $end; $l++) {
          lCount = $l;
          Result = this.FStr.charAt(lCount - 1);
          if ((Result < "0") || (Result > "9")) return Result;
        };
        Result = "\x00";
        return Result;
      };
      this.Convert = function (AValue) {
        var Result = 0;
        Result = 0;
        var $tmp = this.TryConvert(AValue,{get: function () {
            return Result;
          }, set: function (v) {
            Result = v;
          }});
        if ($tmp === $impl.TTimeSpanParser.TParseError.peFormat) {
          throw pas.SysUtils.Exception.$create("Create$1",[rtl.getResStr($mod,"SInvalidTimespanFormat")])}
         else if ($tmp === $impl.TTimeSpanParser.TParseError.peOverflow) {
          throw pas.SysUtils.EIntOverflow.$create("Create$1",[rtl.getResStr($mod,"STimespanTooLong")])}
         else if ($tmp === $impl.TTimeSpanParser.TParseError.peOverflowHMS) throw pas.SysUtils.EIntOverflow.$create("Create$1",[rtl.getResStr($mod,"STimespanElementTooLong")]);
        return Result;
      };
      this.TryConvert = function (AString, AValue) {
        var Result = 0;
        var lDays = 0;
        var lIsNegative = false;
        var lTicks = 0;
        var lTimeVal = 0;
        lTicks = 0;
        AValue.set(0);
        this.FStr = AString;
        this.FPos = 1;
        this.SkipWhite();
        lIsNegative = false;
        if (this.CurrentChar() === "-") {
          lIsNegative = true;
          this.NextChar();
        };
        if (this.NextNonDigit() === ":") {
          Result = this.ConvertTime({get: function () {
              return lTicks;
            }, set: function (v) {
              lTicks = v;
            }});
          if (Result !== $impl.TTimeSpanParser.TParseError.peNone) return Result;
        } else {
          Result = this.NextInt(0xa2e3ff,{get: function () {
              return lDays;
            }, set: function (v) {
              lDays = v;
            }});
          if (Result !== $impl.TTimeSpanParser.TParseError.peNone) return Result;
          lTicks = lDays * 864000000000;
          if (this.CurrentChar() === ".") {
            this.NextChar();
            Result = this.ConvertTime({get: function () {
                return lTimeVal;
              }, set: function (v) {
                lTimeVal = v;
              }});
            if (Result !== $impl.TTimeSpanParser.TParseError.peNone) return Result;
            lTicks = lTicks + lTimeVal;
          };
        };
        if (lIsNegative) {
          lTicks = -lTicks;
          if (lTicks > 0) return $impl.TTimeSpanParser.TParseError.peOverflow;
        } else if (lTicks < 0) return $impl.TTimeSpanParser.TParseError.peOverflow;
        this.SkipWhite();
        if (this.FPos <= this.FStr.length) return $impl.TTimeSpanParser.TParseError.peFormat;
        AValue.set(lTicks);
        Result = $impl.TTimeSpanParser.TParseError.peNone;
        return Result;
      };
      this.NextInt = function (AMaxValue, AValue) {
        var Result = 0;
        var lChar = "";
        var lStartPos = 0;
        AValue.set(0);
        lStartPos = this.FPos;
        lChar = this.CurrentChar();
        while ((lChar >= "0") && (lChar <= "9")) {
          if ((AValue.get() & 0xF0000000) !== 0) return $impl.TTimeSpanParser.TParseError.peOverflow;
          AValue.set((AValue.get() * 10) + (lChar.charCodeAt() - 0x30));
          if (AValue.get() < 0) return $impl.TTimeSpanParser.TParseError.peOverflow;
          lChar = this.NextChar();
        };
        if (this.FPos === lStartPos) return $impl.TTimeSpanParser.TParseError.peFormat;
        if (AValue.get() > AMaxValue) return $impl.TTimeSpanParser.TParseError.peOverflow;
        Result = $impl.TTimeSpanParser.TParseError.peNone;
        return Result;
      };
      this.ConvertTime = function (ATime) {
        var Result = 0;
        var lChar = "";
        var lPart = 0;
        ATime.set(0);
        Result = this.NextInt(23,{get: function () {
            return lPart;
          }, set: function (v) {
            lPart = v;
          }});
        if (Result !== $impl.TTimeSpanParser.TParseError.peNone) {
          if (Result === $impl.TTimeSpanParser.TParseError.peOverflow) Result = $impl.TTimeSpanParser.TParseError.peOverflowHMS;
          return Result;
        };
        ATime.set(lPart * 36000000000);
        if (this.CurrentChar() !== ":") return $impl.TTimeSpanParser.TParseError.peFormat;
        this.NextChar();
        Result = this.NextInt(59,{get: function () {
            return lPart;
          }, set: function (v) {
            lPart = v;
          }});
        if (Result !== $impl.TTimeSpanParser.TParseError.peNone) {
          if (Result === $impl.TTimeSpanParser.TParseError.peOverflow) Result = $impl.TTimeSpanParser.TParseError.peOverflowHMS;
          return Result;
        };
        ATime.set(ATime.get() + (lPart * 600000000));
        if (this.CurrentChar() === ":") {
          if (this.NextChar() !== ".") {
            Result = this.NextInt(59,{get: function () {
                return lPart;
              }, set: function (v) {
                lPart = v;
              }});
            if (Result !== $impl.TTimeSpanParser.TParseError.peNone) {
              if (Result === $impl.TTimeSpanParser.TParseError.peOverflow) Result = $impl.TTimeSpanParser.TParseError.peOverflowHMS;
              return Result;
            };
            ATime.set(ATime.get() + (lPart * 10000000));
          };
          if (this.CurrentChar() === ".") {
            lChar = this.NextChar();
            lPart = 10000000;
            while ((lPart > 1) && (lChar >= "0") && (lChar <= "9")) {
              lPart = rtl.trunc(lPart / 10);
              ATime.set(ATime.get() + ((lChar.charCodeAt() - 0x30) * lPart));
              lChar = this.NextChar();
            };
          };
        };
        Result = $impl.TTimeSpanParser.TParseError.peNone;
        return Result;
      };
      this.SkipWhite = function () {
        var lChar = "";
        lChar = this.CurrentChar();
        while ((lChar === " ") || (lChar === "\t")) lChar = this.NextChar();
      };
      var $r = $mod.$rtti.$Record("TTimeSpanParser",{});
      $r.addMethod("CurrentChar",1,[],rtl.char);
      $r.addMethod("NextChar",1,[],rtl.char);
      $r.addMethod("NextNonDigit",1,[],rtl.char);
      $r.addMethod("Convert",1,[["AValue",rtl.string,2]],rtl.nativeint);
      $r.addMethod("TryConvert",1,[["AString",rtl.string,2],["AValue",rtl.nativeint,4]],$mod.$rtti["TTimeSpanParser.TParseError"]);
      $r.addMethod("NextInt",1,[["AMaxValue",rtl.longint],["AValue",rtl.longint,4]],$mod.$rtti["TTimeSpanParser.TParseError"]);
      $r.addMethod("ConvertTime",1,[["ATime",rtl.nativeint,4]],$mod.$rtti["TTimeSpanParser.TParseError"]);
      $r.addMethod("SkipWhite",0,[]);
    });
    $mod.$resourcestrings = {SCannotNegateTimespan: {org: "Negating the minimum value of a Timespan is invalid"}, SInvalidTimespanDuration: {org: "The duration cannot be returned because the absolute value exceeds the value of TTimeSpan.MaxValue"}, SInvalidTimespanFormat: {org: "Invalid Timespan format"}, STimespanElementTooLong: {org: "Timespan element too long"}, STimespanTooLong: {org: "Timespan too long"}, STimespanValueCannotBeNan: {org: "Value cannot be NaN"}};
  };
  $mod.$init = function () {
    (function () {
      $mod.TTimeSpan.FMinValue = 9007199254740991;
      $mod.TTimeSpan.FMaxValue = -9007199254740991;
    })();
  };
},["SysUtils","Math"]);
//# sourceMappingURL=TimeSpan.js.map
