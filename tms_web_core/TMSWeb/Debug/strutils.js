rtl.module("StrUtils",["System","SysUtils","Types"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.AnsiResemblesText = function (AText, AOther) {
    var Result = false;
    if ($mod.AnsiResemblesProc != null) {
      Result = $mod.AnsiResemblesProc(AText,AOther)}
     else Result = false;
    return Result;
  };
  this.AnsiContainsText = function (AText, ASubText) {
    var Result = false;
    Result = pas.System.Pos(pas.SysUtils.UpperCase(ASubText),pas.SysUtils.UpperCase(AText)) > 0;
    return Result;
  };
  this.AnsiStartsText = function (ASubText, AText) {
    var Result = false;
    if ((AText.length >= ASubText.length) && (ASubText !== "")) {
      Result = pas.SysUtils.SameText(ASubText,pas.System.Copy(AText,1,ASubText.length))}
     else Result = false;
    return Result;
  };
  this.AnsiEndsText = function (ASubText, AText) {
    var Result = false;
    if (AText.length >= ASubText.length) {
      Result = pas.SysUtils.SameText(ASubText,$mod.RightStr(AText,ASubText.length))}
     else Result = false;
    return Result;
  };
  this.AnsiReplaceText = function (AText, AFromText, AToText) {
    var Result = "";
    Result = pas.SysUtils.StringReplace(AText,AFromText,AToText,rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll,pas.SysUtils.TStringReplaceFlag.rfIgnoreCase));
    return Result;
  };
  this.AnsiMatchText = function (AText, AValues) {
    var Result = false;
    Result = $mod.AnsiIndexText(AText,AValues) !== -1;
    return Result;
  };
  this.AnsiIndexText = function (AText, AValues) {
    var Result = 0;
    var i = 0;
    Result = -1;
    if (((rtl.length(AValues) - 1) === -1) || ((rtl.length(AValues) - 1) > 2147483647)) return Result;
    for (var $l = 0, $end = rtl.length(AValues) - 1; $l <= $end; $l++) {
      i = $l;
      if (pas.SysUtils.CompareText(AValues[i],AText) === 0) return i;
    };
    return Result;
  };
  this.StartsText = function (ASubText, AText) {
    var Result = false;
    Result = $mod.AnsiStartsText(ASubText,AText);
    return Result;
  };
  this.EndsText = function (ASubText, AText) {
    var Result = false;
    Result = $mod.AnsiEndsText(ASubText,AText);
    return Result;
  };
  this.ResemblesText = function (AText, AOther) {
    var Result = false;
    if ($mod.ResemblesProc != null) {
      Result = $mod.ResemblesProc(AText,AOther)}
     else Result = false;
    return Result;
  };
  this.ContainsText = function (AText, ASubText) {
    var Result = false;
    Result = $mod.AnsiContainsText(AText,ASubText);
    return Result;
  };
  this.MatchText = function (AText, AValues) {
    var Result = false;
    Result = $mod.AnsiMatchText(AText,AValues);
    return Result;
  };
  this.IndexText = function (AText, AValues) {
    var Result = 0;
    Result = $mod.AnsiIndexText(AText,AValues);
    return Result;
  };
  this.AnsiContainsStr = function (AText, ASubText) {
    var Result = false;
    Result = pas.System.Pos(ASubText,AText) > 0;
    return Result;
  };
  this.AnsiStartsStr = function (ASubText, AText) {
    var Result = false;
    if ((AText.length >= ASubText.length) && (ASubText !== "")) {
      Result = ASubText === pas.System.Copy(AText,1,ASubText.length)}
     else Result = false;
    return Result;
  };
  this.AnsiEndsStr = function (ASubText, AText) {
    var Result = false;
    if (AText.length >= ASubText.length) {
      Result = ASubText === $mod.RightStr(AText,ASubText.length)}
     else Result = false;
    return Result;
  };
  this.AnsiReplaceStr = function (AText, AFromText, AToText) {
    var Result = "";
    Result = pas.SysUtils.StringReplace(AText,AFromText,AToText,rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
    return Result;
  };
  this.AnsiMatchStr = function (AText, AValues) {
    var Result = false;
    Result = $mod.AnsiIndexStr(AText,AValues) !== -1;
    return Result;
  };
  this.AnsiIndexStr = function (AText, AValues) {
    var Result = 0;
    var i = 0;
    Result = -1;
    if (((rtl.length(AValues) - 1) === -1) || ((rtl.length(AValues) - 1) > 2147483647)) return Result;
    for (var $l = 0, $end = rtl.length(AValues) - 1; $l <= $end; $l++) {
      i = $l;
      if (AValues[i] === AText) return i;
    };
    return Result;
  };
  this.MatchStr = function (AText, AValues) {
    var Result = false;
    Result = $mod.IndexStr(AText,AValues) !== -1;
    return Result;
  };
  this.IndexStr = function (AText, AValues) {
    var Result = 0;
    var i = 0;
    Result = -1;
    if (((rtl.length(AValues) - 1) === -1) || ((rtl.length(AValues) - 1) > 2147483647)) return Result;
    for (var $l = 0, $end = rtl.length(AValues) - 1; $l <= $end; $l++) {
      i = $l;
      if (AValues[i] === AText) return i;
    };
    return Result;
  };
  this.ContainsStr = function (AText, ASubText) {
    var Result = false;
    Result = $mod.AnsiContainsStr(AText,ASubText);
    return Result;
  };
  this.StartsStr = function (ASubText, AText) {
    var Result = false;
    Result = $mod.AnsiStartsStr(ASubText,AText);
    return Result;
  };
  this.EndsStr = function (ASubText, AText) {
    var Result = false;
    Result = $mod.AnsiEndsStr(ASubText,AText);
    return Result;
  };
  this.DupeString = function (AText, ACount) {
    var Result = "";
    var i = 0;
    Result = "";
    for (var $l = 1, $end = ACount; $l <= $end; $l++) {
      i = $l;
      Result = Result + AText;
    };
    return Result;
  };
  this.ReverseString = function (AText) {
    var Result = "";
    var i = 0;
    var j = 0;
    Result = rtl.strSetLength(Result,AText.length);
    i = 1;
    j = AText.length;
    while (i <= j) {
      Result = rtl.setCharAt(Result,i - 1,AText.charAt(((j - i) + 1) - 1));
      i += 1;
    };
    return Result;
  };
  this.AnsiReverseString = function (AText) {
    var Result = "";
    Result = $mod.ReverseString(AText);
    return Result;
  };
  this.StuffString = function (AText, AStart, ALength, ASubText) {
    var Result = "";
    var i = 0;
    var j = 0;
    var k = 0;
    j = ASubText.length;
    i = AText.length;
    if (AStart > i) AStart = i + 1;
    k = (i + 1) - AStart;
    if (ALength > k) ALength = k;
    Result = rtl.strSetLength(Result,(i + j) - ALength);
    Result = pas.System.Copy(AText,1,AStart - 1) + pas.System.Copy(ASubText,1,j) + pas.System.Copy(AText,AStart + ALength,(i + 1) - AStart - ALength);
    return Result;
  };
  this.RandomFrom = function (AValues) {
    var Result = "";
    if ((rtl.length(AValues) - 1) === -1) return "";
    Result = AValues[pas.System.Random((rtl.length(AValues) - 1) + 1)];
    return Result;
  };
  this.IfThen = function (AValue, ATrue, AFalse) {
    var Result = "";
    if (AValue) {
      Result = ATrue}
     else Result = AFalse;
    return Result;
  };
  this.NaturalCompareText = function (S1, S2) {
    var Result = 0;
    Result = $mod.NaturalCompareText$1(S1,S2,pas.SysUtils.FormatSettings.DecimalSeparator,pas.SysUtils.FormatSettings.ThousandSeparator);
    return Result;
  };
  this.NaturalCompareText$1 = function (Str1, Str2, ADecSeparator, AThousandSeparator) {
    var Result = 0;
    var Num1 = 0.0;
    var Num2 = 0.0;
    var pStr1 = 0;
    var pStr2 = 0;
    var Len1 = 0;
    var Len2 = 0;
    var TextLen1 = 0;
    var TextLen2 = 0;
    var TextStr1 = "";
    var TextStr2 = "";
    var i = 0;
    var j = 0;
    function Sign(AValue) {
      var Result = 0;
      if (AValue < 0) {
        Result = -1}
       else if (AValue > 0) {
        Result = 1}
       else Result = 0;
      return Result;
    };
    function IsNumber(ch) {
      var Result = false;
      Result = ch.charCodeAt() in rtl.createSet(null,48,57);
      return Result;
    };
    function GetInteger(aString, pch, Len) {
      var Result = 0.0;
      Result = 0;
      while ((pch.get() <= aString.length) && IsNumber(aString.charAt(pch.get() - 1))) {
        Result = ((Result * 10) + aString.charCodeAt(pch.get() - 1)) - 48;
        Len.set(Len.get() + 1);
        pch.set(pch.get() + 1);
      };
      return Result;
    };
    function GetChars() {
      TextLen1 = 0;
      while (!(Str1.charCodeAt((pStr1 + TextLen1) - 1) in rtl.createSet(null,48,57)) && ((pStr1 + TextLen1) <= Str1.length)) TextLen1 += 1;
      TextStr1 = "";
      i = 1;
      j = 0;
      while (i <= TextLen1) {
        TextStr1 = TextStr1 + Str1.charAt((pStr1 + j) - 1);
        i += 1;
        j += 1;
      };
      TextLen2 = 0;
      while (!(Str2.charCodeAt((pStr2 + TextLen2) - 1) in rtl.createSet(null,48,57)) && ((pStr2 + TextLen2) <= Str2.length)) TextLen2 += 1;
      i = 1;
      j = 0;
      while (i <= TextLen2) {
        TextStr2 = TextStr2 + Str2.charAt((pStr2 + j) - 1);
        i += 1;
        j += 1;
      };
    };
    if ((Str1 !== "") && (Str2 !== "")) {
      pStr1 = 1;
      pStr2 = 1;
      Result = 0;
      while ((pStr1 <= Str1.length) && (pStr2 <= Str2.length)) {
        TextLen1 = 1;
        TextLen2 = 1;
        Len1 = 0;
        Len2 = 0;
        while (Str1.charAt(pStr1 - 1) === " ") {
          pStr1 += 1;
          Len1 += 1;
        };
        while (Str2.charAt(pStr2 - 1) === " ") {
          pStr2 += 1;
          Len2 += 1;
        };
        if (IsNumber(Str1.charAt(pStr1 - 1)) && IsNumber(Str2.charAt(pStr2 - 1))) {
          Num1 = GetInteger(Str1,{get: function () {
              return pStr1;
            }, set: function (v) {
              pStr1 = v;
            }},{get: function () {
              return Len1;
            }, set: function (v) {
              Len1 = v;
            }});
          Num2 = GetInteger(Str2,{get: function () {
              return pStr2;
            }, set: function (v) {
              pStr2 = v;
            }},{get: function () {
              return Len2;
            }, set: function (v) {
              Len2 = v;
            }});
          if (Num1 < Num2) {
            Result = -1}
           else if (Num1 > Num2) {
            Result = 1}
           else {
            Result = Sign(Len1 - Len2);
          };
          pStr1 -= 1;
          pStr2 -= 1;
        } else {
          GetChars();
          if (TextStr1 !== TextStr2) {
            Result = pas.SysUtils.CompareText(TextStr1,TextStr2)}
           else Result = 0;
        };
        if (Result !== 0) break;
        pStr1 += TextLen1;
        pStr2 += TextLen2;
      };
    };
    Num1 = Str1.length;
    Num2 = Str2.length;
    if ((Result === 0) && (Num1 !== Num2)) {
      if (Num1 < Num2) {
        Result = -1}
       else Result = 1;
    };
    if (ADecSeparator === "") ;
    if (AThousandSeparator === "") ;
    return Result;
  };
  this.LeftStr = function (AText, ACount) {
    var Result = "";
    Result = pas.System.Copy(AText,1,ACount);
    return Result;
  };
  this.RightStr = function (AText, ACount) {
    var Result = "";
    var j = 0;
    var l = 0;
    l = AText.length;
    j = ACount;
    if (j > l) j = l;
    Result = pas.System.Copy(AText,(l - j) + 1,j);
    return Result;
  };
  this.MidStr = function (AText, AStart, ACount) {
    var Result = "";
    if ((ACount === 0) || (AStart > AText.length)) return "";
    Result = pas.System.Copy(AText,AStart,ACount);
    return Result;
  };
  this.RightBStr = function (AText, AByteCount) {
    var Result = "";
    Result = $mod.RightStr(AText,AByteCount);
    return Result;
  };
  this.MidBStr = function (AText, AByteStart, AByteCount) {
    var Result = "";
    Result = $mod.MidStr(AText,AByteStart,AByteCount);
    return Result;
  };
  this.AnsiLeftStr = function (AText, ACount) {
    var Result = "";
    Result = pas.System.Copy(AText,1,ACount);
    return Result;
  };
  this.AnsiRightStr = function (AText, ACount) {
    var Result = "";
    Result = pas.System.Copy(AText,(AText.length - ACount) + 1,ACount);
    return Result;
  };
  this.AnsiMidStr = function (AText, AStart, ACount) {
    var Result = "";
    Result = pas.System.Copy(AText,AStart,ACount);
    return Result;
  };
  this.LeftBStr = function (AText, AByteCount) {
    var Result = "";
    Result = $mod.LeftStr(AText,AByteCount);
    return Result;
  };
  this.$rtti.$DynArray("WordDelimiters$a",{eltype: rtl.char});
  this.WordDelimiters = [];
  this.SErrAmountStrings = "Amount of search and replace strings don't match";
  this.SInvalidRomanNumeral = "%s is not a valid Roman numeral";
  this.TStringSearchOption = {"0": "soDown", soDown: 0, "1": "soMatchCase", soMatchCase: 1, "2": "soWholeWord", soWholeWord: 2};
  this.$rtti.$Enum("TStringSearchOption",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TStringSearchOption});
  this.$rtti.$Set("TStringSearchOptions",{comptype: this.$rtti["TStringSearchOption"]});
  this.PosEx = function (SubStr, S, Offset) {
    var Result = 0;
    Result = (new String(S)).indexOf(SubStr,Offset - 1) + 1;
    return Result;
  };
  this.PosEx$1 = function (SubStr, S) {
    var Result = 0;
    Result = $mod.PosEx(SubStr,S,1);
    return Result;
  };
  this.PosEx$2 = function (c, S, Offset) {
    var Result = 0;
    Result = (new String(S)).indexOf(c,Offset - 1) + 1;
    return Result;
  };
  this.StringsReplace = function (S, OldPattern, NewPattern, Flags) {
    var Result = "";
    var pc = 0;
    var pcc = 0;
    var lastpc = 0;
    var strcount = 0;
    var ResStr = "";
    var CompStr = "";
    var Found = false;
    var sc = 0;
    sc = rtl.length(OldPattern);
    if (sc !== rtl.length(NewPattern)) throw pas.SysUtils.Exception.$create("Create$1",[$mod.SErrAmountStrings]);
    sc -= 1;
    if (pas.SysUtils.TStringReplaceFlag.rfIgnoreCase in Flags) {
      CompStr = pas.SysUtils.UpperCase(S);
      for (var $l = 0, $end = sc; $l <= $end; $l++) {
        strcount = $l;
        OldPattern[strcount] = pas.SysUtils.UpperCase(OldPattern[strcount]);
      };
    } else CompStr = S;
    ResStr = "";
    pc = 1;
    pcc = 1;
    lastpc = pc + S.length;
    while (pc < lastpc) {
      Found = false;
      for (var $l1 = 0, $end1 = sc; $l1 <= $end1; $l1++) {
        strcount = $l1;
        if (pas.System.Copy(CompStr,pc,OldPattern[strcount].length) === OldPattern[strcount]) {
          ResStr = ResStr + NewPattern[strcount];
          pc = pc + OldPattern[strcount].length;
          pcc = pcc + OldPattern[strcount].length;
          Found = true;
        };
      };
      if (!Found) {
        ResStr = ResStr + S.charAt(pcc - 1);
        pc += 1;
        pcc += 1;
      } else if (!(pas.SysUtils.TStringReplaceFlag.rfReplaceAll in Flags)) {
        ResStr = ResStr + pas.System.Copy(S,pcc,(S.length - pcc) + 1);
        break;
      };
    };
    Result = ResStr;
    return Result;
  };
  this.ReplaceStr = function (AText, AFromText, AToText) {
    var Result = "";
    Result = $mod.AnsiReplaceStr(AText,AFromText,AToText);
    return Result;
  };
  this.ReplaceText = function (AText, AFromText, AToText) {
    var Result = "";
    Result = $mod.AnsiReplaceText(AText,AFromText,AToText);
    return Result;
  };
  this.$rtti.$Int("TSoundexLength",{minvalue: 1, maxvalue: 2147483647, ordtype: 5});
  this.Soundex = function (AText, ALength) {
    var Result = "";
    var S = "";
    var PS = "";
    var I = 0;
    var L = 0;
    Result = "";
    PS = "\x00";
    if (AText.length > 0) {
      Result = pas.System.upcase(AText.charAt(0));
      I = 2;
      L = AText.length;
      while ((I <= L) && (Result.length < ALength)) {
        S = $impl.SScore.charAt(AText.charCodeAt(I - 1) - 1);
        if (!(S.charCodeAt() in rtl.createSet(48,105,PS.charCodeAt()))) Result = Result + S;
        if (S !== "i") PS = S;
        I += 1;
      };
    };
    L = Result.length;
    if (L < ALength) Result = Result + pas.System.StringOfChar("0",ALength - L);
    return Result;
  };
  this.Soundex$1 = function (AText) {
    var Result = "";
    Result = $mod.Soundex(AText,4);
    return Result;
  };
  this.$rtti.$Int("TSoundexIntLength",{minvalue: 1, maxvalue: 8, ordtype: 1});
  this.SoundexInt = function (AText, ALength) {
    var Result = 0;
    var SE = "";
    var I = 0;
    Result = -1;
    SE = $mod.Soundex(AText,ALength);
    if (SE.length > 0) {
      Result = SE.charCodeAt(1 - 1) - 65;
      if (ALength > 1) {
        Result = (Result * 26) + (SE.charCodeAt(2 - 1) - 48);
        for (var $l = 3, $end = ALength; $l <= $end; $l++) {
          I = $l;
          Result = (SE.charCodeAt(I - 1) - 48) + (Result * 7);
        };
      };
      Result = ALength + (Result * 9);
    };
    return Result;
  };
  this.SoundexInt$1 = function (AText) {
    var Result = 0;
    Result = $mod.SoundexInt(AText,4);
    return Result;
  };
  this.DecodeSoundexInt = function (AValue) {
    var Result = "";
    var I = 0;
    var Len = 0;
    Result = "";
    Len = AValue % 9;
    AValue = rtl.trunc(AValue / 9);
    for (var $l = Len; $l >= 3; $l--) {
      I = $l;
      Result = String.fromCharCode(48 + (AValue % 7)) + Result;
      AValue = rtl.trunc(AValue / 7);
    };
    if (Len > 1) {
      Result = String.fromCharCode(48 + (AValue % 26)) + Result;
      AValue = rtl.trunc(AValue / 26);
    };
    Result = String.fromCharCode(65 + AValue) + Result;
    return Result;
  };
  this.SoundexWord = function (AText) {
    var Result = 0;
    var S = "";
    S = $mod.Soundex(AText,4);
    Result = S.charCodeAt(1 - 1) - 65;
    Result = ((Result * 26) + S.charCodeAt(2 - 1)) - 48;
    Result = ((Result * 7) + S.charCodeAt(3 - 1)) - 48;
    Result = ((Result * 7) + S.charCodeAt(4 - 1)) - 48;
    return Result;
  };
  this.DecodeSoundexWord = function (AValue) {
    var Result = "";
    Result = String.fromCharCode(48 + (AValue % 7));
    AValue = rtl.trunc(AValue / 7);
    Result = String.fromCharCode(48 + (AValue % 7)) + Result;
    AValue = rtl.trunc(AValue / 7);
    Result = pas.SysUtils.IntToStr(AValue % 26) + Result;
    AValue = rtl.trunc(AValue / 26);
    Result = String.fromCharCode(65 + AValue) + Result;
    return Result;
  };
  this.SoundexSimilar = function (AText, AOther, ALength) {
    var Result = false;
    Result = $mod.Soundex(AText,ALength) === $mod.Soundex(AOther,ALength);
    return Result;
  };
  this.SoundexSimilar$1 = function (AText, AOther) {
    var Result = false;
    Result = $mod.SoundexSimilar(AText,AOther,4);
    return Result;
  };
  this.SoundexCompare = function (AText, AOther, ALength) {
    var Result = 0;
    Result = pas.SysUtils.AnsiCompareStr($mod.Soundex(AText,ALength),$mod.Soundex(AOther,ALength));
    return Result;
  };
  this.SoundexCompare$1 = function (AText, AOther) {
    var Result = 0;
    Result = $mod.SoundexCompare(AText,AOther,4);
    return Result;
  };
  this.SoundexProc = function (AText, AOther) {
    var Result = false;
    Result = $mod.SoundexSimilar$1(AText,AOther);
    return Result;
  };
  this.$rtti.$ProcVar("TCompareTextProc",{procsig: rtl.newTIProcSig([["AText",rtl.string,2],["AOther",rtl.string,2]],rtl.boolean)});
  this.AnsiResemblesProc = null;
  this.ResemblesProc = null;
  this.TRomanConversionStrictness = {"0": "rcsStrict", rcsStrict: 0, "1": "rcsRelaxed", rcsRelaxed: 1, "2": "rcsDontCare", rcsDontCare: 2};
  this.$rtti.$Enum("TRomanConversionStrictness",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TRomanConversionStrictness});
  this.IsEmptyStr = function (S, EmptyChars) {
    var Result = false;
    var i = 0;
    var l = 0;
    l = S.length;
    i = 1;
    Result = true;
    while (Result && (i <= l)) {
      Result = pas.SysUtils.CharInSet(S.charAt(i - 1),EmptyChars);
      i += 1;
    };
    return Result;
  };
  this.DelSpace = function (S) {
    var Result = "";
    Result = $mod.DelChars(S," ");
    return Result;
  };
  this.DelChars = function (S, Chr) {
    var Result = "";
    var I = 0;
    var J = 0;
    Result = S;
    I = Result.length;
    while (I > 0) {
      if (Result.charAt(I - 1) === Chr) {
        J = I - 1;
        while ((J > 0) && (Result.charAt(J - 1) === Chr)) J -= 1;
        pas.System.Delete({get: function () {
            return Result;
          }, set: function (v) {
            Result = v;
          }},J + 1,I - J);
        I = J + 1;
      };
      I -= 1;
    };
    return Result;
  };
  this.DelSpace1 = function (S) {
    var Result = "";
    var I = 0;
    Result = S;
    for (var $l = Result.length; $l >= 2; $l--) {
      I = $l;
      if ((Result.charAt(I - 1) === " ") && (Result.charAt(I - 1 - 1) === " ")) pas.System.Delete({get: function () {
          return Result;
        }, set: function (v) {
          Result = v;
        }},I,1);
    };
    return Result;
  };
  this.Tab2Space = function (S, Numb) {
    var Result = "";
    var I = 0;
    I = 1;
    Result = S;
    while (I <= Result.length) if (Result.charAt(I - 1) !== String.fromCharCode(9)) {
      I += 1}
     else {
      Result = rtl.setCharAt(Result,I - 1," ");
      if (Numb > 1) pas.System.Insert(pas.System.StringOfChar(" ",Numb - 1),{get: function () {
          return Result;
        }, set: function (v) {
          Result = v;
        }},I);
      I += Numb;
    };
    return Result;
  };
  this.NPos = function (C, S, N) {
    var Result = 0;
    var i = 0;
    var p = 0;
    var k = 0;
    Result = 0;
    if (N < 1) return Result;
    k = 0;
    i = 1;
    do {
      p = pas.System.Pos(C,S);
      k += p;
      if (p > 0) pas.System.Delete({get: function () {
          return S;
        }, set: function (v) {
          S = v;
        }},1,p);
      i += 1;
    } while (!((i > N) || (p === 0)));
    if (p > 0) Result = k;
    return Result;
  };
  this.RPosEX = function (C, S, offs) {
    var Result = 0;
    Result = (new String(S)).lastIndexOf(C,offs - 1) + 1;
    return Result;
  };
  this.RPosex$1 = function (Substr, Source, offs) {
    var Result = 0;
    Result = (new String(Source)).lastIndexOf(Substr,offs - 1) + 1;
    return Result;
  };
  this.RPos = function (c, S) {
    var Result = 0;
    Result = $mod.RPosex$1(c,S,S.length);
    return Result;
  };
  this.RPos$1 = function (Substr, Source) {
    var Result = 0;
    Result = $mod.RPosex$1(Substr,Source,Source.length);
    return Result;
  };
  this.AddChar = function (C, S, N) {
    var Result = "";
    var l = 0;
    Result = S;
    l = Result.length;
    if (l < N) Result = pas.System.StringOfChar(C,N - l) + Result;
    return Result;
  };
  this.AddCharR = function (C, S, N) {
    var Result = "";
    var l = 0;
    Result = S;
    l = Result.length;
    if (l < N) Result = Result + pas.System.StringOfChar(C,N - l);
    return Result;
  };
  this.PadLeft = function (S, N) {
    var Result = "";
    Result = $mod.AddChar(" ",S,N);
    return Result;
  };
  this.PadRight = function (S, N) {
    var Result = "";
    Result = $mod.AddCharR(" ",S,N);
    return Result;
  };
  this.PadCenter = function (S, Len) {
    var Result = "";
    if (S.length < Len) {
      Result = pas.System.StringOfChar(" ",rtl.trunc(Len / 2) - rtl.trunc(S.length / 2)) + S;
      Result = Result + pas.System.StringOfChar(" ",Len - Result.length);
    } else Result = S;
    return Result;
  };
  this.Copy2Symb = function (S, Symb) {
    var Result = "";
    var p = 0;
    p = pas.System.Pos(Symb,S);
    if (p === 0) p = S.length + 1;
    Result = pas.System.Copy(S,1,p - 1);
    return Result;
  };
  this.Copy2SymbDel = function (S, Symb) {
    var Result = "";
    var p = 0;
    p = pas.System.Pos(Symb,S.get());
    if (p === 0) {
      Result = S.get();
      S.set("");
    } else {
      Result = pas.System.Copy(S.get(),1,p - 1);
      pas.System.Delete(S,1,p);
    };
    return Result;
  };
  this.Copy2Space = function (S) {
    var Result = "";
    Result = $mod.Copy2Symb(S," ");
    return Result;
  };
  this.Copy2SpaceDel = function (S) {
    var Result = "";
    Result = $mod.Copy2SymbDel(S," ");
    return Result;
  };
  this.AnsiProperCase = function (S, WordDelims) {
    var Result = "";
    var P = 0;
    var L = 0;
    Result = pas.SysUtils.LowerCase(S);
    P = 1;
    L = Result.length;
    while (P <= L) {
      while ((P <= L) && pas.SysUtils.CharInSet(Result.charAt(P - 1),WordDelims)) P += 1;
      if (P <= L) Result = rtl.setCharAt(Result,P - 1,pas.System.upcase(Result.charAt(P - 1)));
      while ((P <= L) && !pas.SysUtils.CharInSet(Result.charAt(P - 1),WordDelims)) P += 1;
    };
    return Result;
  };
  this.WordCount = function (S, WordDelims) {
    var Result = 0;
    var P = 0;
    var L = 0;
    Result = 0;
    P = 1;
    L = S.length;
    while (P <= L) {
      while ((P <= L) && pas.SysUtils.CharInSet(S.charAt(P - 1),WordDelims)) P += 1;
      if (P <= L) Result += 1;
      while ((P <= L) && !pas.SysUtils.CharInSet(S.charAt(P - 1),WordDelims)) P += 1;
    };
    return Result;
  };
  this.WordPosition = function (N, S, WordDelims) {
    var Result = 0;
    var PS = 0;
    var P = 0;
    var PE = 0;
    var Count = 0;
    Result = 0;
    Count = 0;
    PS = 1;
    PE = S.length;
    P = PS;
    while ((P <= PE) && (Count !== N)) {
      while ((P <= PE) && pas.SysUtils.CharInSet(S.charAt(P - 1),WordDelims)) P += 1;
      if (P <= PE) Count += 1;
      if (Count !== N) {
        while ((P <= PE) && !pas.SysUtils.CharInSet(S.charAt(P - 1),WordDelims)) P += 1}
       else Result = (P - PS) + 1;
    };
    return Result;
  };
  this.ExtractWord = function (N, S, WordDelims) {
    var Result = "";
    var i = 0;
    Result = $mod.ExtractWordPos(N,S,WordDelims,{get: function () {
        return i;
      }, set: function (v) {
        i = v;
      }});
    return Result;
  };
  this.ExtractWordPos = function (N, S, WordDelims, Pos) {
    var Result = "";
    var i = 0;
    var j = 0;
    var l = 0;
    j = 0;
    i = $mod.WordPosition(N,S,WordDelims);
    if (i > 2147483647) {
      Result = "";
      Pos.set(-1);
      return Result;
    };
    Pos.set(i);
    if (i !== 0) {
      j = i;
      l = S.length;
      while ((j <= l) && !pas.SysUtils.CharInSet(S.charAt(j - 1),WordDelims)) j += 1;
    };
    Result = pas.System.Copy(S,i,j - i);
    return Result;
  };
  this.ExtractDelimited = function (N, S, Delims) {
    var Result = "";
    var w = 0;
    var i = 0;
    var l = 0;
    var len = 0;
    w = 0;
    i = 1;
    l = 0;
    len = S.length;
    Result = rtl.strSetLength(Result,0);
    while ((i <= len) && (w !== N)) {
      if (pas.SysUtils.CharInSet(S.charAt(i - 1),Delims)) {
        w += 1}
       else {
        if ((N - 1) === w) {
          l += 1;
          Result = Result + S.charAt(i - 1);
        };
      };
      i += 1;
    };
    return Result;
  };
  this.ExtractSubstr = function (S, Pos, Delims) {
    var Result = "";
    var i = 0;
    var l = 0;
    i = Pos.get();
    l = S.length;
    while ((i <= l) && !pas.SysUtils.CharInSet(S.charAt(i - 1),Delims)) i += 1;
    Result = pas.System.Copy(S,Pos.get(),i - Pos.get());
    while ((i <= l) && pas.SysUtils.CharInSet(S.charAt(i - 1),Delims)) i += 1;
    if (i > 2147483647) {
      Pos.set(2147483647)}
     else Pos.set(i);
    return Result;
  };
  this.IsWordPresent = function (W, S, WordDelims) {
    var Result = false;
    var i = 0;
    var Count = 0;
    Result = false;
    Count = $mod.WordCount(S,WordDelims);
    i = 1;
    while (!Result && (i <= Count)) {
      Result = $mod.ExtractWord(i,S,WordDelims) === W;
      i += 1;
    };
    return Result;
  };
  this.FindPart = function (HelpWilds, InputStr) {
    var Result = 0;
    var Diff = 0;
    var i = 0;
    var J = 0;
    Result = 0;
    i = pas.System.Pos("?",HelpWilds);
    if (i === 0) {
      Result = pas.System.Pos(HelpWilds,InputStr)}
     else {
      Diff = InputStr.length - HelpWilds.length;
      for (var $l = 0, $end = Diff; $l <= $end; $l++) {
        i = $l;
        for (var $l1 = 1, $end1 = HelpWilds.length; $l1 <= $end1; $l1++) {
          J = $l1;
          if ((InputStr.charAt((i + J) - 1) === HelpWilds.charAt(J - 1)) || (HelpWilds.charAt(J - 1) === "?")) {
            if (J === HelpWilds.length) {
              Result = i + 1;
              return Result;
            };
          } else break;
        };
      };
    };
    return Result;
  };
  this.IsWild = function (InputStr, Wilds, IgnoreCase) {
    var Result = false;
    var i = 0;
    var MaxinputWord = 0;
    var MaxWilds = 0;
    var eos = false;
    Result = true;
    if (Wilds === InputStr) return Result;
    i = pas.System.Pos("**",Wilds);
    while (i > 0) {
      pas.System.Delete({get: function () {
          return Wilds;
        }, set: function (v) {
          Wilds = v;
        }},i,1);
      i = pas.System.Pos("**",Wilds);
    };
    if (Wilds === "*") return Result;
    MaxinputWord = InputStr.length;
    MaxWilds = Wilds.length;
    if ((MaxWilds === 0) || (MaxinputWord === 0)) {
      Result = false;
      return Result;
    };
    if (IgnoreCase) {
      InputStr = pas.SysUtils.UpperCase(InputStr);
      Wilds = pas.SysUtils.UpperCase(Wilds);
    };
    Result = $impl.isMatch(1,InputStr,Wilds,1,1,MaxinputWord,MaxWilds,{get: function () {
        return eos;
      }, set: function (v) {
        eos = v;
      }});
    return Result;
  };
  this.XorString = function (Key, Src) {
    var Result = "";
    var i = 0;
    Result = Src;
    if (Key.length > 0) for (var $l = 1, $end = Src.length; $l <= $end; $l++) {
      i = $l;
      Result = rtl.setCharAt(Result,i - 1,String.fromCharCode(Key.charCodeAt((1 + ((i - 1) % Key.length)) - 1) ^ Src.charCodeAt(i - 1)));
    };
    return Result;
  };
  this.XorEncode = function (Key, Source) {
    var Result = "";
    var i = 0;
    var C = 0;
    Result = "";
    for (var $l = 1, $end = Source.length; $l <= $end; $l++) {
      i = $l;
      if (Key.length > 0) {
        C = Key.charCodeAt((1 + ((i - 1) % Key.length)) - 1) ^ Source.charCodeAt(i - 1)}
       else C = Source.charCodeAt(i - 1);
      Result = Result + pas.SysUtils.LowerCase(pas.SysUtils.IntToHex(C,2));
    };
    return Result;
  };
  this.XorDecode = function (Key, Source) {
    var Result = "";
    var i = 0;
    var C = "";
    Result = "";
    for (var $l = 0, $end = rtl.trunc(Source.length / 2) - 1; $l <= $end; $l++) {
      i = $l;
      C = String.fromCharCode(pas.SysUtils.StrToIntDef("$" + pas.System.Copy(Source,(i * 2) + 1,2),32));
      if (Key.length > 0) C = String.fromCharCode(Key.charCodeAt((1 + (i % Key.length)) - 1) ^ C.charCodeAt());
      Result = Result + C;
    };
    return Result;
  };
  this.GetCmdLineArg = function (Switch, SwitchChars) {
    var Result = "";
    var i = 0;
    var S = "";
    i = 1;
    Result = "";
    while ((Result === "") && (i <= pas.System.ParamCount())) {
      S = pas.System.ParamStr(i);
      if ((rtl.length(SwitchChars) === 0) || (pas.SysUtils.CharInSet(S.charAt(0),SwitchChars) && (S.length > 1) && (pas.SysUtils.CompareText(pas.System.Copy(S,2,S.length - 1),Switch) === 0))) {
        i += 1;
        if (i <= pas.System.ParamCount()) Result = pas.System.ParamStr(i);
      };
      i += 1;
    };
    return Result;
  };
  this.Numb2USA = function (S) {
    var Result = "";
    var i = 0;
    var NA = 0;
    i = S.length;
    Result = S;
    NA = 0;
    while (i > 0) {
      if ((((((Result.length - i) + 1) - NA) % 3) === 0) && (i !== 1)) {
        pas.System.Insert(",",{get: function () {
            return Result;
          }, set: function (v) {
            Result = v;
          }},i);
        NA += 1;
      };
      i -= 1;
    };
    return Result;
  };
  this.Hex2Dec = function (S) {
    var Result = 0;
    var HexStr = "";
    if (pas.System.Pos("$",S) === 0) {
      HexStr = "$" + S}
     else HexStr = S;
    Result = pas.SysUtils.StrToInt(HexStr);
    return Result;
  };
  this.Dec2Numb = function (N, Len, Base) {
    var Result = "";
    var C = 0;
    var number = 0;
    if (N === 0) {
      Result = "0"}
     else {
      number = N;
      Result = "";
      while (number > 0) {
        C = number % Base;
        if (C > 9) {
          C = C + 55}
         else C = C + 48;
        Result = String.fromCharCode(C) + Result;
        number = rtl.trunc(number / Base);
      };
    };
    if (Result !== "") Result = $mod.AddChar("0",Result,Len);
    return Result;
  };
  this.Numb2Dec = function (S, Base) {
    var Result = 0;
    var i = 0;
    var P = 0;
    i = S.length;
    Result = 0;
    S = pas.SysUtils.UpperCase(S);
    P = 1;
    while (i >= 1) {
      if (S.charAt(i - 1) > "@") {
        Result = Result + ((S.charCodeAt(i - 1) - 55) * P)}
       else Result = Result + ((S.charCodeAt(i - 1) - 48) * P);
      i -= 1;
      P = P * Base;
    };
    return Result;
  };
  this.IntToBin = function (Value, Digits, Spaces) {
    var Result = "";
    var endpos = 0;
    var p = 0;
    var p2 = 0;
    var k = 0;
    Result = "";
    if (Digits > 32) Digits = 32;
    if (Spaces === 0) {
      Result = $mod.IntToBin$1(Value,Digits);
      return Result;
    };
    endpos = Digits + rtl.trunc((Digits - 1) / Spaces);
    Result = rtl.strSetLength(Result,endpos);
    p = endpos;
    p2 = 1;
    k = Spaces;
    while (p >= p2) {
      if (k === 0) {
        Result = rtl.setCharAt(Result,p - 1," ");
        p -= 1;
        k = Spaces;
      };
      Result = rtl.setCharAt(Result,p - 1,String.fromCharCode(48 + ((Value >>> 0) & 1)));
      Value = rtl.lw((Value >>> 0) >>> 1);
      p -= 1;
      k -= 1;
    };
    return Result;
  };
  this.IntToBin$1 = function (Value, Digits) {
    var Result = "";
    var p = 0;
    var p2 = 0;
    Result = "";
    if (Digits <= 0) return Result;
    Result = rtl.strSetLength(Result,Digits);
    p = Digits;
    p2 = 1;
    while ((p >= p2) && ((Value >>> 0) > 0)) {
      Result = rtl.setCharAt(Result,p - 1,String.fromCharCode(48 + ((Value >>> 0) & 1)));
      Value = rtl.lw((Value >>> 0) >>> 1);
      p -= 1;
    };
    Digits = (p - p2) + 1;
    while (Digits > 0) {
      Result = rtl.setCharAt(Result,Digits - 1,String.fromCharCode(48));
      Digits -= 1;
    };
    return Result;
  };
  this.IntToBin$2 = function (Value, Digits) {
    var Result = "";
    var p = 0;
    var p2 = 0;
    Result = "";
    if (Digits <= 0) return Result;
    Result = rtl.strSetLength(Result,Digits);
    p = Digits;
    p2 = 1;
    while ((p >= p2) && (Value > 0)) {
      Result = rtl.setCharAt(Result,p - 1,String.fromCharCode(48 + ((Value >>> 0) & 1)));
      Value = rtl.trunc(Value / 2);
      p -= 1;
    };
    Digits = (p - p2) + 1;
    while (Digits > 0) Result = rtl.setCharAt(Result,Digits - 1,"0");
    return Result;
  };
  var Arabics = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  var Romans = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
  this.IntToRoman = function (Value) {
    var Result = "";
    var i = 0;
    Result = "";
    for (var $l = 13; $l >= 1; $l--) {
      i = $l;
      while (Value >= Arabics[i - 1]) {
        Value = Value - Arabics[i - 1];
        Result = Result + Romans[i - 1];
      };
    };
    return Result;
  };
  this.TryRomanToInt = function (S, N, Strictness) {
    var Result = false;
    var i = 0;
    var Len = 0;
    var Terminated = false;
    Result = false;
    S = pas.SysUtils.UpperCase(S);
    Len = S.length;
    if (Strictness === $mod.TRomanConversionStrictness.rcsDontCare) {
      N.set($impl.RomanToIntDontCare(S));
      if (N.get() === 0) {
        Result = Len === 0;
      } else Result = true;
      return Result;
    };
    if (Len === 0) return Result;
    i = 1;
    N.set(0);
    Terminated = false;
    while ((i <= Len) && ((Strictness !== $mod.TRomanConversionStrictness.rcsStrict) || (i < 4)) && (S.charAt(i - 1) === "M")) {
      i += 1;
      N.set(N.get() + 1000);
    };
    if ((i <= Len) && (S.charAt(i - 1) === "D")) {
      i += 1;
      N.set(N.get() + 500);
    } else if (((i + 1) <= Len) && (S.charAt(i - 1) === "C")) {
      if (S.charAt((i + 1) - 1) === "M") {
        i += 2;
        N.set(N.get() + 900);
      } else if (S.charAt((i + 1) - 1) === "D") {
        i += 2;
        N.set(N.get() + 400);
      };
    };
    if ((i <= Len) && (S.charAt(i - 1) === "C")) {
      i += 1;
      N.set(N.get() + 100);
      if ((i <= Len) && (S.charAt(i - 1) === "C")) {
        i += 1;
        N.set(N.get() + 100);
      };
      if ((i <= Len) && (S.charAt(i - 1) === "C")) {
        i += 1;
        N.set(N.get() + 100);
      };
      if ((Strictness !== $mod.TRomanConversionStrictness.rcsStrict) && (i <= Len) && (S.charAt(i - 1) === "C")) {
        i += 1;
        N.set(N.get() + 100);
      };
    };
    if (((i + 1) <= Len) && (S.charAt(i - 1) === "X")) {
      if (S.charAt((i + 1) - 1) === "C") {
        i += 2;
        N.set(N.get() + 90);
      } else if (S.charAt((i + 1) - 1) === "L") {
        i += 2;
        N.set(N.get() + 40);
      };
    };
    if ((i <= Len) && (S.charAt(i - 1) === "L")) {
      i += 1;
      N.set(N.get() + 50);
    };
    if ((i <= Len) && (S.charAt(i - 1) === "X")) {
      i += 1;
      N.set(N.get() + 10);
      if ((i <= Len) && (S.charAt(i - 1) === "X")) {
        i += 1;
        N.set(N.get() + 10);
      };
      if ((i <= Len) && (S.charAt(i - 1) === "X")) {
        i += 1;
        N.set(N.get() + 10);
      };
      if ((Strictness !== $mod.TRomanConversionStrictness.rcsStrict) && (i <= Len) && (S.charAt(i - 1) === "X")) {
        i += 1;
        N.set(N.get() + 10);
      };
    };
    if (((i + 1) <= Len) && (S.charAt(i - 1) === "I")) {
      if (S.charAt((i + 1) - 1) === "X") {
        Terminated = true;
        i += 2;
        N.set(N.get() + 9);
      } else if (S.charAt((i + 1) - 1) === "V") {
        Terminated = true;
        i += 2;
        N.set(N.get() + 4);
      };
    };
    if (!Terminated && (i <= Len) && (S.charAt(i - 1) === "V")) {
      i += 1;
      N.set(N.get() + 5);
    };
    if (!Terminated && (i <= Len) && (S.charAt(i - 1) === "I")) {
      Terminated = true;
      i += 1;
      N.set(N.get() + 1);
      if ((i <= Len) && (S.charAt(i - 1) === "I")) {
        i += 1;
        N.set(N.get() + 1);
      };
      if ((i <= Len) && (S.charAt(i - 1) === "I")) {
        i += 1;
        N.set(N.get() + 1);
      };
      if ((Strictness !== $mod.TRomanConversionStrictness.rcsStrict) && (i <= Len) && (S.charAt(i - 1) === "I")) {
        i += 1;
        N.set(N.get() + 1);
      };
    };
    Result = i > Len;
    return Result;
  };
  this.RomanToInt = function (S, Strictness) {
    var Result = 0;
    if (!$mod.TryRomanToInt(S,{get: function () {
        return Result;
      }, set: function (v) {
        Result = v;
      }},Strictness)) throw pas.SysUtils.EConvertError.$create("CreateFmt",[$mod.SInvalidRomanNumeral,pas.System.VarRecs(18,S)]);
    return Result;
  };
  this.RomanToIntDef = function (S, ADefault, Strictness) {
    var Result = 0;
    if (!$mod.TryRomanToInt(S,{get: function () {
        return Result;
      }, set: function (v) {
        Result = v;
      }},Strictness)) Result = ADefault;
    return Result;
  };
  this.DigitChars = rtl.createSet(null,48,57);
  this.Brackets = rtl.createSet(40,41,91,93,123,125);
  this.StdWordDelims = rtl.unionSet(rtl.createSet(null,0,32,44,46,59,47,92,58,39,34,96),this.Brackets);
  this.StdSwitchChars = rtl.createSet(45,47);
  this.PosSet = function (c, s) {
    var Result = 0;
    Result = $mod.PosSetEx(c,s,1);
    return Result;
  };
  this.PosSet$1 = function (c, s) {
    var Result = 0;
    Result = $mod.PosSetEx$1(c,s,1);
    return Result;
  };
  this.PosSetEx = function (c, s, count) {
    var Result = 0;
    var i = 0;
    var j = 0;
    if (s === "") {
      j = 0}
     else {
      i = s.length;
      j = count;
      if (j > i) {
        Result = 0;
        return Result;
      };
      while ((j <= i) && !pas.SysUtils.CharInSet(s.charAt(j - 1),c)) j += 1;
      if (j > i) j = 0;
    };
    Result = j;
    return Result;
  };
  this.PosSetEx$1 = function (c, s, count) {
    var Result = 0;
    var cset = [];
    var i = 0;
    var l = 0;
    l = c.length;
    cset = rtl.arraySetLength(cset,"",l);
    if (l > 0) for (var $l = 1, $end = l; $l <= $end; $l++) {
      i = $l;
      cset[i - 1] = c.charAt(i - 1);
    };
    Result = $mod.PosSetEx(cset,s,count);
    return Result;
  };
  this.Removeleadingchars = function (S, CSet) {
    var I = 0;
    var J = 0;
    I = S.get().length;
    if (I > 0) {
      J = 1;
      while ((J <= I) && pas.SysUtils.CharInSet(S.get().charAt(J - 1),CSet)) J += 1;
      if (J > 1) pas.System.Delete(S,1,J - 1);
    };
  };
  this.RemoveTrailingChars = function (S, CSet) {
    var i = 0;
    var j = 0;
    i = S.get().length;
    if (i > 0) {
      j = i;
      while ((j > 0) && pas.SysUtils.CharInSet(S.get().charAt(j - 1),CSet)) j -= 1;
      if (j !== i) S.set(rtl.strSetLength(S.get(),j));
    };
  };
  this.RemovePadChars = function (S, CSet) {
    var I = 0;
    var J = 0;
    var K = 0;
    I = S.get().length;
    if (I === 0) return;
    J = I;
    while ((J > 0) && pas.SysUtils.CharInSet(S.get().charAt(J - 1),CSet)) J -= 1;
    if (J === 0) {
      S.set("");
      return;
    };
    S.set(rtl.strSetLength(S.get(),J));
    I = J;
    K = 1;
    while ((K <= I) && pas.SysUtils.CharInSet(S.get().charAt(K - 1),CSet)) K += 1;
    if (K > 1) pas.System.Delete(S,1,K - 1);
  };
  this.TrimLeftSet = function (S, CSet) {
    var Result = "";
    Result = S;
    $mod.Removeleadingchars({get: function () {
        return Result;
      }, set: function (v) {
        Result = v;
      }},CSet);
    return Result;
  };
  this.TrimRightSet = function (S, CSet) {
    var Result = "";
    Result = S;
    $mod.RemoveTrailingChars({get: function () {
        return Result;
      }, set: function (v) {
        Result = v;
      }},CSet);
    return Result;
  };
  this.TrimSet = function (S, CSet) {
    var Result = "";
    Result = S;
    $mod.RemovePadChars({get: function () {
        return Result;
      }, set: function (v) {
        Result = v;
      }},CSet);
    return Result;
  };
  this.SplitString = function (S, Delimiters) {
    var Result = [];
    Result = pas.SysUtils.TStringHelper.Split.call({get: function () {
        return S;
      }, set: function (v) {
        rtl.raiseE("EPropReadOnly");
      }},Delimiters);
    return Result;
  };
  this.$rtti.$DynArray("SizeIntArray",{eltype: rtl.nativeint});
  $mod.$implcode = function () {
    $impl.SScore = "00000000000000000000000000000000" + "00000000000000000000000000000000" + "0123012i02245501262301i2i2" + "000000" + "0123012i02245501262301i2i2" + "00000000000000000000000000000000" + "00000000000000000000000000000000" + "00000000000000000000000000000000" + "00000000000000000000000000000000" + "00000";
    $impl.Ord0 = 48;
    $impl.OrdA = 65;
    $impl.RomanValues = function (C) {
      var Result = 0;
      var $tmp = C;
      if ($tmp === "C") {
        Result = 100}
       else if ($tmp === "D") {
        Result = 500}
       else if ($tmp === "I") {
        Result = 1}
       else if ($tmp === "L") {
        Result = 50}
       else if ($tmp === "M") {
        Result = 1000}
       else if ($tmp === "V") {
        Result = 5}
       else if ($tmp === "X") {
        Result = 10}
       else {
        Result = 0;
      };
      return Result;
    };
    var RomanChars = rtl.createSet(67,68,73,76,77,86,88);
    $impl.RomanToIntDontCare = function (S) {
      var Result = 0;
      var index = "";
      var Next = "";
      var i = 0;
      var l = 0;
      var Negative = false;
      Result = 0;
      i = 0;
      Negative = (S.length > 0) && (S.charAt(0) === "-");
      if (Negative) i += 1;
      l = S.length;
      while (i < l) {
        i += 1;
        index = pas.System.upcase(S.charAt(i - 1));
        if (index.charCodeAt() in RomanChars) {
          if ((i + 1) <= l) {
            Next = pas.System.upcase(S.charAt((i + 1) - 1))}
           else Next = "\x00";
          if ((Next.charCodeAt() in RomanChars) && ($impl.RomanValues(index) < $impl.RomanValues(Next))) {
            Result += $impl.RomanValues(Next);
            Result -= $impl.RomanValues(index);
            i += 1;
          } else Result += $impl.RomanValues(index);
        } else {
          Result = 0;
          return Result;
        };
      };
      if (Negative) Result = -Result;
      return Result;
    };
    $impl.isMatch = function (level, inputstr, wilds, CWild, CinputWord, MaxInputword, maxwilds, EOS) {
      var Result = false;
      EOS.set(false);
      Result = true;
      do {
        if (wilds.charAt(CWild - 1) === "*") {
          CWild += 1;
          while (wilds.charAt(CWild - 1) === "?") {
            CWild += 1;
            CinputWord += 1;
          };
          do {
            while ((inputstr.charAt(CinputWord - 1) !== wilds.charAt(CWild - 1)) && (CinputWord <= MaxInputword)) CinputWord += 1;
            Result = $impl.isMatch(level + 1,inputstr,wilds,CWild,CinputWord,MaxInputword,maxwilds,EOS);
            if (!Result) CinputWord += 1;
          } while (!(Result || (CinputWord >= MaxInputword)));
          if (Result && EOS.get()) return Result;
          continue;
        };
        if (wilds.charAt(CWild - 1) === "?") {
          CWild += 1;
          CinputWord += 1;
          continue;
        };
        if (inputstr.charAt(CinputWord - 1) === wilds.charAt(CWild - 1)) {
          CWild += 1;
          CinputWord += 1;
          continue;
        };
        Result = false;
        return Result;
      } while (!((CinputWord > MaxInputword) || (CWild > maxwilds)));
      if ((CinputWord <= MaxInputword) || (CWild < maxwilds)) {
        Result = false}
       else if (CWild > maxwilds) {
        EOS.set(false)}
       else {
        EOS.set(wilds.charAt(CWild - 1) === "*");
        if (!EOS.get()) Result = false;
      };
      return Result;
    };
  };
  $mod.$init = function () {
    $mod.AnsiResemblesProc = $mod.SoundexProc;
    $mod.ResemblesProc = $mod.SoundexProc;
  };
},["JS"]);
//# sourceMappingURL=strutils.js.map
