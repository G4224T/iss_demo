rtl.module("dateutils.helper",["System","Generics.Defaults","Generics.Collections"],function () {
  "use strict";
  var $mod = this;
  rtl.createClass(this,"TDateUtilsHelper",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FCache = null;
    };
    this.$final = function () {
      this.FCache = undefined;
      pas.System.TObject.$final.call(this);
    };
    var cJanuary = 0;
    var cDecember = 11;
    this.CalcPoints = function (AYear, AValue) {
      var Result = false;
      var lMonth = 0;
      var lDay = 0;
      var lHour = 0;
      var lDate = null;
      var lOffset = 0;
      var lOffsetNext = 0;
      var lFirst = false;
      var lDateTime = 0.0;
      lFirst = true;
      for (lMonth = 0; lMonth <= 11; lMonth++) {
        for (var $l = 1, $end = pas.SysUtils.MonthDays[+pas.SysUtils.IsLeapYear(AYear)][(lMonth + 1) - 1]; $l <= $end; $l++) {
          lDay = $l;
          for (lHour = 0; lHour <= 23; lHour++) {
            lDate = new Date(AYear,lMonth,lDay,lHour,0,0,0);
            lOffset = lDate.getTimezoneOffset();
            lDate.setHours(lDate.getHours() + 1);
            lOffsetNext = lDate.getTimezoneOffset();
            if (lOffset !== lOffsetNext) {
              lDateTime = pas.SysUtils.EncodeDate(AYear,lMonth + 1,lDay);
              if (lFirst) {
                AValue.Key = lDateTime + pas.SysUtils.EncodeTime(lHour + 1,0,0,0)}
               else AValue.Value = lDateTime + pas.SysUtils.EncodeTime(lHour,0,0,0);
              lFirst = false;
            };
          };
        };
      };
      Result = !lFirst;
      if (Result) this.FCache.Add(AYear,AValue);
      return Result;
    };
    this.Find = function (AYear, AResult) {
      var Result = false;
      Result = this.FCache.TryGetValue(AYear,AResult);
      return Result;
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FCache = pas["Generics.Collections"].TDictionary$G2.$create("Create$1",[0]);
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FCache");
      pas.System.TObject.Destroy.call(this);
    };
    this.Force = function (AYear, AValue) {
      var Result = false;
      Result = this.Find(AYear,AValue);
      if (!Result) Result = this.CalcPoints(AYear,AValue);
      return Result;
    };
  });
},["SysUtils","JS"]);
//# sourceMappingURL=dateutils.helper.js.map
