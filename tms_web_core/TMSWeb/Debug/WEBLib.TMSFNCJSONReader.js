rtl.module("WEBLib.TMSFNCJSONReader",["System","Classes","SysUtils","WEBLib.TMSFNCTypes"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  rtl.createClass(this,"TTMSFNCJSONStreamReader",pas.System.TObject,function () {
    rtl.createClass(this,"EInvalidJsonInput",pas.SysUtils.Exception,function () {
      this.Create$2 = function () {
        pas.SysUtils.Exception.Create$1.call(this,"Invalid JSON Input");
        return this;
      };
    },"TTMSFNCJSONStreamReader.EInvalidJsonInput");
    rtl.createClass(this,"EInternalError",pas.SysUtils.Exception,function () {
      this.Create$2 = function () {
        pas.SysUtils.Exception.Create$1.call(this,"JSON stream reader internal error");
        return this;
      };
    },"TTMSFNCJSONStreamReader.EInternalError");
    rtl.createClass(this,"EEndOfInputReached",pas.SysUtils.Exception,function () {
      this.Create$2 = function () {
        pas.SysUtils.Exception.Create$1.call(this,"End of JSON input reached.");
        return this;
      };
    },"TTMSFNCJSONStreamReader.EEndOfInputReached");
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FStream = null;
      this.FReadStream = null;
    };
    this.$final = function () {
      this.FStream = undefined;
      this.FReadStream = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.Create$1 = function (aStream) {
      this.FStream = aStream;
      this.FReadStream = pas.Classes.TStringStream.$create("Create$3",["",pas.Classes.TEncoding.GetANSI(),true]);
      this.FReadStream.CopyFrom(this.FStream,this.FStream.GetSize());
      this.FReadStream.SetPosition(0);
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FReadStream");
      pas.System.TObject.Destroy.call(this);
    };
    this.NextChar = function () {
      var Result = "";
      if (this.Eof()) throw this.EEndOfInputReached.$create("Create$2");
      Result = this.ReadChar();
      return Result;
    };
    this.PeekChar = function () {
      var Result = "";
      var p = 0;
      p = this.FReadStream.GetPosition();
      Result = this.ReadChar();
      this.FReadStream.SetPosition(p);
      return Result;
    };
    this.ReadChar = function () {
      var Result = "";
      var i = 0;
      var s = "";
      Result = "\x00";
      i = 1;
      if (this.FReadStream.GetPosition() < this.FReadStream.GetSize()) {
        s = this.FReadStream.ReadString(1);
        if ((s !== "") && pas.System.Assigned(s)) Result = s.charAt(i - 1);
      };
      return Result;
    };
    this.Backup = function (c) {
      this.FReadStream.SetPosition(this.FReadStream.GetPosition() - 1);
    };
    this.MoveNext = function (Count) {
      this.FReadStream.SetPosition(this.FReadStream.GetPosition() + Count);
    };
    this.Eof = function () {
      var Result = false;
      Result = this.FReadStream.GetPosition() === this.FReadStream.GetSize();
      return Result;
    };
  });
  this.TTMSFNCJSONToken = {"0": "jstoBeginObject", jstoBeginObject: 0, "1": "jstoEndObject", jstoEndObject: 1, "2": "jstoBeginArray", jstoBeginArray: 2, "3": "jstoEndArray", jstoEndArray: 3, "4": "jstoName", jstoName: 4, "5": "jstoBoolean", jstoBoolean: 5, "6": "jstoNull", jstoNull: 6, "7": "jstoText", jstoText: 7, "8": "jstoNumber", jstoNumber: 8, "9": "jstoEOF", jstoEOF: 9};
  this.$rtti.$Enum("TTMSFNCJSONToken",{minvalue: 0, maxvalue: 9, ordtype: 1, enumtype: this.TTMSFNCJSONToken});
  rtl.createClass(this,"TTMSFNCJSONReader",pas.System.TObject,function () {
    this.TTMSFNCJSONState = {"0": "jstNone", jstNone: 0, "1": "jstBeginObject", jstBeginObject: 1, "2": "jstEndObject", jstEndObject: 2, "3": "jstBeginArray", jstBeginArray: 3, "4": "jstEndArray", jstEndArray: 4, "5": "jstTrue", jstTrue: 5, "6": "jstFalse", jstFalse: 6, "7": "jstNull", jstNull: 7, "8": "jstDoubleQuoted", jstDoubleQuoted: 8, "9": "jstBuffered", jstBuffered: 9, "10": "jstDoubleQuotedName", jstDoubleQuotedName: 10, "11": "jstInt64", jstInt64: 11, "12": "jstNumber", jstNumber: 12, "13": "jstEOF", jstEOF: 13};
    $mod.$rtti.$Enum("TTMSFNCJSONReader.TTMSFNCJSONState",{minvalue: 0, maxvalue: 13, ordtype: 1, enumtype: this.TTMSFNCJSONState});
    this.TTMSFNCJSONNumberState = {"0": "jnstNone", jnstNone: 0, "1": "jnstSign", jnstSign: 1, "2": "jnstDigit", jnstDigit: 2, "3": "jnstDecimal", jnstDecimal: 3, "4": "jnstFraction", jnstFraction: 4, "5": "jnstExpE", jnstExpE: 5, "6": "jnstExpSign", jnstExpSign: 6, "7": "jnstExpDigit", jnstExpDigit: 7};
    $mod.$rtti.$Enum("TTMSFNCJSONReader.TTMSFNCJSONNumberState",{minvalue: 0, maxvalue: 7, ordtype: 1, enumtype: this.TTMSFNCJSONNumberState});
    this.TTMSFNCJSONScope = {"0": "jscEmptyDocument", jscEmptyDocument: 0, "1": "jscEmptyArray", jscEmptyArray: 1, "2": "jscEmptyObject", jscEmptyObject: 2, "3": "jscNonEmptyDocument", jscNonEmptyDocument: 3, "4": "jscNonEmptyArray", jscNonEmptyArray: 4, "5": "jscNonEmptyObject", jscNonEmptyObject: 5, "6": "jscDanglingName", jscDanglingName: 6};
    $mod.$rtti.$Enum("TTMSFNCJSONReader.TTMSFNCJSONScope",{minvalue: 0, maxvalue: 6, ordtype: 1, enumtype: this.TTMSFNCJSONScope});
    rtl.createClass(this,"EInvalidStateException",pas.SysUtils.Exception,function () {
      this.Create$2 = function (AState) {
        pas.SysUtils.Exception.CreateFmt.call(this,"Invalid Json parser state. Expected state: %d",pas.System.VarRecs(0,AState));
        return this;
      };
    },"TTMSFNCJSONReader.EInvalidStateException");
    rtl.createClass(this,"EUnterminatedArray",pas.SysUtils.Exception,function () {
      this.Create$2 = function () {
        pas.SysUtils.Exception.Create$1.call(this,"Unterminated array");
        return this;
      };
    },"TTMSFNCJSONReader.EUnterminatedArray");
    rtl.createClass(this,"EUnterminatedObject",pas.SysUtils.Exception,function () {
      this.Create$2 = function () {
        pas.SysUtils.Exception.Create$1.call(this,"Unterminated object");
        return this;
      };
    },"TTMSFNCJSONReader.EUnterminatedObject");
    rtl.createClass(this,"ENameExpected",pas.SysUtils.Exception,function () {
      this.Create$2 = function () {
        pas.SysUtils.Exception.Create$1.call(this,"Name expected");
        return this;
      };
    },"TTMSFNCJSONReader.ENameExpected");
    rtl.createClass(this,"EColonExpected",pas.SysUtils.Exception,function () {
      this.Create$2 = function () {
        pas.SysUtils.Exception.Create$1.call(this,"Colon expected");
        return this;
      };
    },"TTMSFNCJSONReader.EColonExpected");
    rtl.createClass(this,"EReaderClosed",pas.SysUtils.Exception,function () {
      this.Create$2 = function () {
        pas.SysUtils.Exception.Create$1.call(this,"Reader already closed");
        return this;
      };
    },"TTMSFNCJSONReader.EReaderClosed");
    rtl.createClass(this,"EMultipleRootNotAllowed",pas.SysUtils.Exception,function () {
      this.Create$2 = function () {
        pas.SysUtils.Exception.Create$1.call(this,"Multiple root values not allowed");
        return this;
      };
    },"TTMSFNCJSONReader.EMultipleRootNotAllowed");
    rtl.createClass(this,"EExpectedValue",pas.SysUtils.Exception,function () {
      this.Create$2 = function () {
        pas.SysUtils.Exception.Create$1.call(this,"Value expected but invalid character found");
        return this;
      };
    },"TTMSFNCJSONReader.EExpectedValue");
    rtl.createClass(this,"EObjectOrArrayExpected",pas.SysUtils.Exception,function () {
      this.Create$2 = function () {
        pas.SysUtils.Exception.Create$1.call(this,"Object or array expected as top-level value");
        return this;
      };
    },"TTMSFNCJSONReader.EObjectOrArrayExpected");
    rtl.createClass(this,"ETooManyDepthLevels",pas.SysUtils.Exception,function () {
      this.Create$2 = function () {
        pas.SysUtils.Exception.Create$1.call(this,"Maximum level of nested structured reached.");
        return this;
      };
    },"TTMSFNCJSONReader.ETooManyDepthLevels");
    rtl.createClass(this,"EInvalidEscaped",pas.SysUtils.Exception,function () {
      this.Create$2 = function () {
        pas.SysUtils.Exception.Create$1.call(this,"Invalid escaped sequence");
        return this;
      };
    },"TTMSFNCJSONReader.EInvalidEscaped");
    this.MaxNumberBuffer = 255;
    this.MaxStackSize = 255;
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FReader = null;
      this.FStack = rtl.arraySetLength(null,0,256);
      this.FStackSize = 0;
      this.FPeeked = 0;
      this.FPeekedInt64 = 0;
      this.FPeekedNumber = rtl.arraySetLength(null,"",256);
      this.FPeekedString = "";
    };
    this.$final = function () {
      this.FReader = undefined;
      this.FStack = undefined;
      this.FPeekedNumber = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.NextPeek = function () {
      var Result = 0;
      if (this.FPeeked === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone) this.FPeeked = this.DoPeek();
      Result = this.FPeeked;
      return Result;
    };
    this.CheckState = function (State) {
      if (this.NextPeek() !== State) throw this.EInvalidStateException.$create("Create$2",[State]);
    };
    this.SkipChar = function () {
      this.FReader.MoveNext(1);
      while (this.FReader.PeekChar().charCodeAt() in $impl.Wspace) this.FReader.MoveNext(1);
    };
    this.IsLiteral = function (C) {
      var Result = false;
      Result = !pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.CharInSet(C,pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.CreateCharSet("/\\;#{}[]:,' \r\n\f\t"));
      return Result;
    };
    this.IsDigit = function (C) {
      var Result = false;
      Result = (C <= "ÿ") && pas["WEBLib.TMSFNCTypes"].CharIsNumber(C);
      return Result;
    };
    this.DoPeek = function () {
      var Result = 0;
      var FPeekStack = 0;
      var C = "";
      FPeekStack = this.FStack[this.FStackSize - 1];
      if (FPeekStack === $mod.TTMSFNCJSONReader.TTMSFNCJSONScope.jscEmptyArray) {
        this.FStack[this.FStackSize - 1] = $mod.TTMSFNCJSONReader.TTMSFNCJSONScope.jscNonEmptyArray}
       else if (FPeekStack === $mod.TTMSFNCJSONReader.TTMSFNCJSONScope.jscNonEmptyArray) {
        C = this.NextNonWhitespace();
        var $tmp = C;
        if ($tmp === "]") {
          while (this.FReader.PeekChar().charCodeAt() in $impl.Wspace) this.FReader.MoveNext(1);
          this.SkipChar();
          this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstEndArray;
          return this.FPeeked;
        } else if ($tmp === ",") {
          this.SkipChar()}
         else {
          throw this.EUnterminatedArray.$create("Create$2");
        };
      } else if (FPeekStack in rtl.createSet($mod.TTMSFNCJSONReader.TTMSFNCJSONScope.jscEmptyObject,$mod.TTMSFNCJSONReader.TTMSFNCJSONScope.jscNonEmptyObject)) {
        this.FStack[this.FStackSize - 1] = $mod.TTMSFNCJSONReader.TTMSFNCJSONScope.jscDanglingName;
        if (FPeekStack === $mod.TTMSFNCJSONReader.TTMSFNCJSONScope.jscNonEmptyObject) {
          C = this.NextNonWhitespace();
          var $tmp1 = C;
          if ($tmp1 === "}") {
            while (this.FReader.PeekChar().charCodeAt() in $impl.Wspace) this.FReader.MoveNext(1);
            this.SkipChar();
            this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstEndObject;
            return this.FPeeked;
          } else if ($tmp1 === ",") {
            this.SkipChar()}
           else {
            throw this.EUnterminatedObject.$create("Create$2");
          };
        };
        C = this.NextNonWhitespace();
        var $tmp2 = C;
        if ($tmp2 === '"') {
          this.SkipChar();
          this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstDoubleQuotedName;
          return this.FPeeked;
        } else if ($tmp2 === "}") {
          if (FPeekStack !== $mod.TTMSFNCJSONReader.TTMSFNCJSONScope.jscNonEmptyObject) {
            this.SkipChar();
            this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstEndObject;
            return this.FPeeked;
          } else throw this.ENameExpected.$create("Create$2")}
         else {
          throw this.ENameExpected.$create("Create$2");
        };
      } else if (FPeekStack === $mod.TTMSFNCJSONReader.TTMSFNCJSONScope.jscDanglingName) {
        this.FStack[this.FStackSize - 1] = $mod.TTMSFNCJSONReader.TTMSFNCJSONScope.jscNonEmptyObject;
        C = this.NextNonWhitespace();
        if (C === ":") {
          this.SkipChar()}
         else throw this.EColonExpected.$create("Create$2");
      } else if (FPeekStack === $mod.TTMSFNCJSONReader.TTMSFNCJSONScope.jscEmptyDocument) {
        this.FStack[this.FStackSize - 1] = $mod.TTMSFNCJSONReader.TTMSFNCJSONScope.jscNonEmptyDocument}
       else if (FPeekStack === $mod.TTMSFNCJSONReader.TTMSFNCJSONScope.jscNonEmptyDocument) {
        if (this.SkipWhitespaceUntilEnd()) {
          this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstEOF;
          return this.FPeeked;
        } else throw this.EMultipleRootNotAllowed.$create("Create$2");
      };
      C = this.NextNonWhitespace();
      var $tmp3 = C;
      if ($tmp3 === "]") {
        if (FPeekStack === $mod.TTMSFNCJSONReader.TTMSFNCJSONScope.jscEmptyArray) {
          this.SkipChar();
          this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstEndArray;
          return this.FPeeked;
        } else throw this.EExpectedValue.$create("Create$2")}
       else if ($tmp3 === '"') {
        if (this.FStackSize === 1) throw this.EObjectOrArrayExpected.$create("Create$2");
        this.SkipChar();
        this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstDoubleQuoted;
        return this.FPeeked;
      } else if ($tmp3 === "[") {
        this.SkipChar();
        this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstBeginArray;
        return this.FPeeked;
      } else if ($tmp3 === "{") {
        this.SkipChar();
        this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstBeginObject;
        return this.FPeeked;
      };
      if (this.FStackSize === 1) throw this.EObjectOrArrayExpected.$create("Create$2");
      Result = this.PeekKeyword();
      if (Result !== $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone) return Result;
      Result = this.PeekNumber();
      if (Result !== $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone) return Result;
      throw this.EExpectedValue.$create("Create$2");
      return Result;
    };
    this.PushScope = function (Scope) {
      if (this.FStackSize > 255) throw this.ETooManyDepthLevels.$create("Create$2");
      this.FStack[this.FStackSize] = Scope;
      this.FStackSize += 1;
    };
    this.NextNonWhitespace = function () {
      var Result = "";
      var s = "";
      var p = 0;
      p = this.FReader.FReadStream.GetPosition();
      Result = "\x00";
      s = this.ReadChar();
      do {
        if ((s > " ") || !(s.charCodeAt() in $impl.Wspace)) {
          this.FReader.FReadStream.SetPosition(p);
          return s;
        };
        s = this.ReadChar();
      } while (!this.FReader.Eof());
      this.FReader.FReadStream.SetPosition(p);
      return Result;
    };
    this.ReadChar = function () {
      var Result = "";
      Result = this.FReader.ReadChar();
      return Result;
    };
    this.PeekKeyword = function () {
      var Result = 0;
      var $tmp = this.FReader.PeekChar();
      if (($tmp === "t") || ($tmp === "T")) {
        this.FReader.MoveNext(1);
        var $tmp1 = this.FReader.NextChar();
        if (($tmp1 === "r") || ($tmp1 === "R")) {
          var $tmp2 = this.FReader.NextChar();
          if (($tmp2 === "u") || ($tmp2 === "U")) {
            var $tmp3 = this.FReader.NextChar();
            if (($tmp3 === "e") || ($tmp3 === "E")) if (this.FReader.Eof() || !this.IsLiteral(this.FReader.PeekChar())) return $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstTrue;
          };
        };
      } else if (($tmp === "f") || ($tmp === "F")) {
        this.FReader.MoveNext(1);
        var $tmp4 = this.FReader.NextChar();
        if (($tmp4 === "a") || ($tmp4 === "A")) {
          var $tmp5 = this.FReader.NextChar();
          if (($tmp5 === "l") || ($tmp5 === "L")) {
            var $tmp6 = this.FReader.NextChar();
            if (($tmp6 === "s") || ($tmp6 === "S")) {
              var $tmp7 = this.FReader.NextChar();
              if (($tmp7 === "e") || ($tmp7 === "E")) if (this.FReader.Eof() || !this.IsLiteral(this.FReader.PeekChar())) return $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstFalse;
            };
          };
        };
      } else if (($tmp === "n") || ($tmp === "N")) {
        this.FReader.MoveNext(1);
        var $tmp8 = this.FReader.NextChar();
        if (($tmp8 === "u") || ($tmp8 === "U")) {
          var $tmp9 = this.FReader.NextChar();
          if (($tmp9 === "l") || ($tmp9 === "L")) {
            var $tmp10 = this.FReader.NextChar();
            if (($tmp10 === "l") || ($tmp10 === "L")) if (this.FReader.Eof() || !this.IsLiteral(this.FReader.PeekChar())) return $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNull;
          };
        };
      } else {
        return $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone;
      };
      throw this.EExpectedValue.$create("Create$2");
      return Result;
    };
    var MinIncompleteInteger = rtl.trunc(-9007199254740991 / 10);
    this.PeekNumber = function () {
      var Result = 0;
      var Last = 0;
      var Negative = false;
      var FitsInInt64 = false;
      var Value = 0;
      var NewValue = 0;
      var C = "";
      var BufIndex = 0;
      C = this.FReader.PeekChar();
      if ((C !== "-") && !this.IsDigit(C)) return $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone;
      Negative = false;
      FitsInInt64 = true;
      Last = $mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstNone;
      BufIndex = 0;
      Value = -1;
      do {
        if (BufIndex >= 255) throw this.EExpectedValue.$create("Create$2");
        C = this.FReader.NextChar();
        this.FPeekedNumber[BufIndex] = C;
        BufIndex += 1;
        var $tmp = C;
        if ($tmp === "-") {
          if (Last === $mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstNone) {
            Negative = true;
            Last = $mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstSign;
            continue;
          } else if (Last === $mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstExpE) {
            Last = $mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstExpSign;
            continue;
          } else throw this.EExpectedValue.$create("Create$2")}
         else if ($tmp === "+") {
          if (Last === $mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstExpE) {
            Last = $mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstExpSign;
            continue;
          } else throw this.EExpectedValue.$create("Create$2")}
         else if (($tmp === "e") || ($tmp === "E")) {
          if (Last in rtl.createSet($mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstDigit,$mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstFraction)) {
            Last = $mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstExpE;
            continue;
          } else throw this.EExpectedValue.$create("Create$2")}
         else if ($tmp === ".") {
          if (Last === $mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstDigit) {
            Last = $mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstDecimal;
            continue;
          } else throw this.EExpectedValue.$create("Create$2")}
         else {
          if (!this.IsDigit(C)) if (!this.IsLiteral(C)) {
            this.FReader.Backup(C);
            BufIndex -= 1;
            break;
          } else throw this.EExpectedValue.$create("Create$2");
          if (Last in rtl.createSet($mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstSign,$mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstNone)) {
            Value = -(C.charCodeAt() - 48);
            Last = $mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstDigit;
          } else if (Last === $mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstDigit) {
            if (Value === 0) throw this.EExpectedValue.$create("Create$2");
            NewValue = (Value * 10) - (C.charCodeAt() - 48);
            FitsInInt64 = FitsInInt64 && ((Value > -900719925474099) || ((Value === -900719925474099) && (NewValue < Value)));
            Value = NewValue;
          } else if (Last === $mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstDecimal) {
            Last = $mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstFraction}
           else if (Last in rtl.createSet($mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstExpE,$mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstExpSign)) Last = $mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstExpDigit;
        };
      } while (!false);
      if ((Last === $mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstDigit) && FitsInInt64 && ((Value !== -9007199254740991) || Negative)) {
        if (Negative) {
          this.FPeekedInt64 = Value}
         else this.FPeekedInt64 = -Value;
        return $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstInt64;
      } else if (Last in rtl.createSet($mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstDigit,$mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstFraction,$mod.TTMSFNCJSONReader.TTMSFNCJSONNumberState.jnstExpDigit)) {
        this.FPeekedNumber[BufIndex] = "\x00";
        return $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNumber;
      } else throw this.EExpectedValue.$create("Create$2");
      return Result;
    };
    this.InternalReadQuoted = function (BuildString) {
      var Result = "";
      var pc = "";
      var c = "";
      var s = "";
      Result = "";
      s = "";
      pc = "";
      while (!this.FReader.Eof()) {
        c = this.ReadChar();
        if ((c === '"') && (pc !== "\\")) {
          break}
         else s = s + c;
        pc = c;
      };
      if (BuildString) Result = s;
      return Result;
    };
    this.ReadQuoted = function () {
      var Result = "";
      Result = this.InternalReadQuoted(true);
      return Result;
    };
    this.SkipQuoted = function () {
      this.InternalReadQuoted(false);
    };
    this.SkipWhitespaceUntilEnd = function () {
      var Result = false;
      var s = "";
      var p = 0;
      p = this.FReader.FReadStream.GetPosition();
      Result = true;
      s = this.ReadChar();
      do {
        if ((s > " ") || !(s.charCodeAt() in $impl.Wspace)) {
          this.FReader.FReadStream.SetPosition(p);
          return false;
        };
        s = this.ReadChar();
      } while (!this.FReader.Eof());
      this.FReader.FReadStream.SetPosition(p);
      return Result;
    };
    this.Create$1 = function (AStream) {
      pas.System.TObject.Create.call(this);
      this.FReader = $mod.TTMSFNCJSONStreamReader.$create("Create$1",[AStream]);
      this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone;
      this.FStack[0] = $mod.TTMSFNCJSONReader.TTMSFNCJSONScope.jscEmptyDocument;
      this.FStackSize = 1;
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FReader");
      pas.System.TObject.Destroy.call(this);
    };
    this.ReadBeginArray = function () {
      this.CheckState($mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstBeginArray);
      this.PushScope($mod.TTMSFNCJSONReader.TTMSFNCJSONScope.jscEmptyArray);
      this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone;
    };
    this.ReadEndArray = function () {
      this.CheckState($mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstEndArray);
      this.FStackSize -= 1;
      this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone;
    };
    this.ReadBeginObject = function () {
      this.CheckState($mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstBeginObject);
      this.PushScope($mod.TTMSFNCJSONReader.TTMSFNCJSONScope.jscEmptyObject);
      this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone;
    };
    this.ReadEndObject = function () {
      this.CheckState($mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstEndObject);
      this.FStackSize -= 1;
      this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone;
    };
    this.PeekName = function () {
      var Result = "";
      var p = 0;
      p = this.FReader.FReadStream.GetPosition();
      Result = this.ReadQuoted();
      this.FReader.FReadStream.SetPosition(p);
      return Result;
    };
    this.ReadName = function () {
      var Result = "";
      this.CheckState($mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstDoubleQuotedName);
      this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone;
      Result = this.ReadQuoted();
      return Result;
    };
    this.ReadString = function () {
      var Result = "";
      var $tmp = this.NextPeek();
      if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstDoubleQuoted) {
        Result = this.ReadQuoted()}
       else if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstInt64) {
        Result = pas.SysUtils.IntToStr(this.FPeekedInt64)}
       else if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNumber) {
        Result = $impl.ArrayOfCharToString(this.FPeekedNumber.slice(0))}
       else if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstBuffered) {
        Result = this.FPeekedString}
       else {
        throw this.EInvalidStateException.$create("Create$2",[$mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstDoubleQuoted]);
      };
      this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone;
      Result = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.UnescapeString(Result);
      return Result;
    };
    this.ReadBoolean = function () {
      var Result = false;
      var $tmp = this.NextPeek();
      if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstTrue) {
        Result = true}
       else if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstFalse) {
        Result = false}
       else {
        throw this.EInvalidStateException.$create("Create$2",[$mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstTrue]);
      };
      this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone;
      return Result;
    };
    this.ReadDouble = function () {
      var Result = 0.0;
      var $tmp = this.NextPeek();
      if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstInt64) {
        this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone;
        return this.FPeekedInt64;
      } else if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNumber) {
        if (pas.SysUtils.TryStrToFloat$2($impl.ArrayOfCharToString(this.FPeekedNumber.slice(0)),{get: function () {
            return Result;
          }, set: function (v) {
            Result = v;
          }})) {
          this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone;
          return Result;
        } else this.FPeekedString = $impl.ArrayOfCharToString(this.FPeekedNumber.slice(0));
      } else if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstDoubleQuoted) {
        this.FPeekedString = this.ReadQuoted()}
       else if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstBuffered) {}
      else {
        throw this.EInvalidStateException.$create("Create$2",[$mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNumber]);
      };
      this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstBuffered;
      Result = pas.SysUtils.StrToFloat(this.FPeekedString);
      this.FPeekedString = "";
      this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone;
      return Result;
    };
    this.ReadInt64 = function () {
      var Result = 0;
      var AsDouble = 0.0;
      var $tmp = this.NextPeek();
      if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstInt64) {
        this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone;
        return this.FPeekedInt64;
      } else if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNumber) {
        if (pas.SysUtils.TryStrToInt64($impl.ArrayOfCharToString(this.FPeekedNumber.slice(0)),{get: function () {
            return Result;
          }, set: function (v) {
            Result = v;
          }})) {
          this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone;
          return Result;
        } else this.FPeekedString = $impl.ArrayOfCharToString(this.FPeekedNumber.slice(0));
      } else if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstDoubleQuoted) {
        this.FPeekedString = this.ReadQuoted();
        if (pas.SysUtils.TryStrToInt64(this.FPeekedString,{get: function () {
            return Result;
          }, set: function (v) {
            Result = v;
          }})) {
          this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone;
          return Result;
        };
      } else if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstBuffered) {}
      else {
        throw this.EInvalidStateException.$create("Create$2",[$mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstInt64]);
      };
      this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstBuffered;
      AsDouble = pas.SysUtils.StrToFloat(this.FPeekedString);
      Result = Math.round(AsDouble);
      if (AsDouble !== Result) throw this.EInvalidStateException.$create("Create$2",[$mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstInt64]);
      this.FPeekedString = "";
      this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone;
      return Result;
    };
    this.ReadInteger = function () {
      var Result = 0;
      var AsDouble = 0.0;
      var $tmp = this.NextPeek();
      if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstInt64) {
        Result = this.FPeekedInt64 & 0xFFFFFFFF;
        if (Result !== this.FPeekedInt64) throw this.EInvalidStateException.$create("Create$2",[$mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstInt64]);
        this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone;
        return Result;
      } else if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNumber) {
        if (pas.SysUtils.TryStrToInt($impl.ArrayOfCharToString(this.FPeekedNumber.slice(0)),{get: function () {
            return Result;
          }, set: function (v) {
            Result = v;
          }})) {
          this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone;
          return Result;
        } else this.FPeekedString = $impl.ArrayOfCharToString(this.FPeekedNumber.slice(0));
      } else if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstDoubleQuoted) {
        this.FPeekedString = this.ReadQuoted();
        if (pas.SysUtils.TryStrToInt(this.FPeekedString,{get: function () {
            return Result;
          }, set: function (v) {
            Result = v;
          }})) {
          this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone;
          return Result;
        };
      } else if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstBuffered) {}
      else {
        throw this.EInvalidStateException.$create("Create$2",[$mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstInt64]);
      };
      this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstBuffered;
      AsDouble = pas.SysUtils.StrToFloat(this.FPeekedString);
      Result = Math.round(AsDouble);
      if (AsDouble !== Result) throw this.EInvalidStateException.$create("Create$2",[$mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstInt64]);
      this.FPeekedString = "";
      this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone;
      return Result;
    };
    this.SkipValue = function () {
      var Count = 0;
      Count = 0;
      do {
        var $tmp = this.NextPeek();
        if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstBeginArray) {
          this.PushScope($mod.TTMSFNCJSONReader.TTMSFNCJSONScope.jscEmptyArray);
          Count += 1;
        } else if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstBeginObject) {
          this.PushScope($mod.TTMSFNCJSONReader.TTMSFNCJSONScope.jscEmptyObject);
          Count += 1;
        } else if (($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstEndArray) || ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstEndObject)) {
          this.FStackSize -= 1;
          Count -= 1;
        } else if (($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstDoubleQuoted) || ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstDoubleQuotedName)) this.SkipQuoted();
        this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone;
      } while (!(Count <= 0));
    };
    this.ReadNull = function () {
      this.CheckState($mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNull);
      this.FPeeked = $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNone;
    };
    this.HasNext = function () {
      var Result = false;
      Result = !(this.NextPeek() in rtl.createSet($mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstEndObject,$mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstEndArray));
      return Result;
    };
    this.Peek = function () {
      var Result = 0;
      var $tmp = this.NextPeek();
      if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstBeginObject) {
        Result = $mod.TTMSFNCJSONToken.jstoBeginObject}
       else if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstEndObject) {
        Result = $mod.TTMSFNCJSONToken.jstoEndObject}
       else if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstBeginArray) {
        Result = $mod.TTMSFNCJSONToken.jstoBeginArray}
       else if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstEndArray) {
        Result = $mod.TTMSFNCJSONToken.jstoEndArray}
       else if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstDoubleQuotedName) {
        Result = $mod.TTMSFNCJSONToken.jstoName}
       else if (($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstTrue) || ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstFalse)) {
        Result = $mod.TTMSFNCJSONToken.jstoBoolean}
       else if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNull) {
        Result = $mod.TTMSFNCJSONToken.jstoNull}
       else if (($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstDoubleQuoted) || ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstBuffered)) {
        Result = $mod.TTMSFNCJSONToken.jstoText}
       else if (($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstInt64) || ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstNumber)) {
        Result = $mod.TTMSFNCJSONToken.jstoNumber}
       else if ($tmp === $mod.TTMSFNCJSONReader.TTMSFNCJSONState.jstEOF) {
        Result = $mod.TTMSFNCJSONToken.jstoEOF}
       else {
        Result = $mod.TTMSFNCJSONToken.jstoEOF;
      };
      return Result;
    };
    this.IsNull = function () {
      var Result = false;
      Result = this.Peek() === $mod.TTMSFNCJSONToken.jstoNull;
      return Result;
    };
    this.Eof = function () {
      var Result = false;
      Result = this.Peek() === $mod.TTMSFNCJSONToken.jstoEOF;
      return Result;
    };
    var $r = this.$rtti;
    $mod.$rtti.$StaticArray("TTMSFNCJSONReader.FStack$a",{dims: [256], eltype: $mod.$rtti["TTMSFNCJSONReader.TTMSFNCJSONScope"]});
    $mod.$rtti.$StaticArray("TTMSFNCJSONReader.FPeekedNumber$a",{dims: [256], eltype: rtl.char});
  });
  $mod.$implcode = function () {
    $mod.$rtti.$Set("Wspace$a",{comptype: rtl.byte});
    $impl.Wspace = rtl.createSet(0x20,0xA,0xD,0x9,0xC);
    $impl.ArrayOfCharToString = function (AArray) {
      var Result = "";
      var I = 0;
      Result = "";
      for (var $l = 0, $end = rtl.length(AArray) - 1; $l <= $end; $l++) {
        I = $l;
        if (AArray[I] === "\x00") break;
        Result = Result + AArray[I];
      };
      return Result;
    };
  };
},["WEBLib.TMSFNCUtils"]);
//# sourceMappingURL=WEBLib.TMSFNCJSONReader.js.map
