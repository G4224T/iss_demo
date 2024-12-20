rtl.module("WEBLib.TMSFNCJSONWriter",["System","Classes","SysUtils","WEBLib.TMSFNCTypes"],function () {
  "use strict";
  var $mod = this;
  rtl.createClass(this,"TTMSFNCJSONStreamWriter",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FStream = null;
      this.FWriteStream = null;
    };
    this.$final = function () {
      this.FStream = undefined;
      this.FWriteStream = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.Create$1 = function (AStream) {
      this.FStream = AStream;
      this.FWriteStream = pas.Classes.TStringStream.$create("Create$3",["",pas.Classes.TEncoding.GetANSI(),true]);
      return this;
    };
    this.Destroy = function () {
      try {
        this.FWriteStream.SetPosition(0);
        this.FStream.CopyFrom(this.FWriteStream,this.FWriteStream.GetSize());
      } finally {
        rtl.free(this,"FWriteStream");
      };
      pas.System.TObject.Destroy.call(this);
    };
    this.Write = function (Value) {
      this.FWriteStream.WriteString(Value);
    };
  });
  rtl.createClass(this,"TTMSFNCJSONWriter",pas.System.TObject,function () {
    rtl.createClass(this,"ECannotWriteName",pas.SysUtils.Exception,function () {
      this.Create$2 = function () {
        pas.SysUtils.Exception.Create$1.call(this,"Cannot write name in current Json scope");
        return this;
      };
    },"TTMSFNCJSONWriter.ECannotWriteName");
    rtl.createClass(this,"EMultipleRootNotAllowed",pas.SysUtils.Exception,function () {
      this.Create$2 = function () {
        pas.SysUtils.Exception.Create$1.call(this,"Multiple root values not allowed");
        return this;
      };
    },"TTMSFNCJSONWriter.EMultipleRootNotAllowed");
    rtl.createClass(this,"EObjectOrArrayExpected",pas.SysUtils.Exception,function () {
      this.Create$2 = function () {
        pas.SysUtils.Exception.Create$1.call(this,"Object or array expected as top-level value");
        return this;
      };
    },"TTMSFNCJSONWriter.EObjectOrArrayExpected");
    rtl.createClass(this,"EInvalidNesting",pas.SysUtils.Exception,function () {
      this.Create$2 = function () {
        pas.SysUtils.Exception.Create$1.call(this,"Invalid nesting. Not all arrays/objects were properly closed.");
        return this;
      };
    },"TTMSFNCJSONWriter.EInvalidNesting");
    rtl.createClass(this,"EMissingValue",pas.SysUtils.Exception,function () {
      this.Create$2 = function () {
        pas.SysUtils.Exception.Create$1.call(this,"Json value missing");
        return this;
      };
    },"TTMSFNCJSONWriter.EMissingValue");
    rtl.createClass(this,"ETooManyDepthLevels",pas.SysUtils.Exception,function () {
      this.Create$2 = function () {
        pas.SysUtils.Exception.Create$1.call(this,"Maximum level of nested structured reached.");
        return this;
      };
    },"TTMSFNCJSONWriter.ETooManyDepthLevels");
    rtl.createClass(this,"EEmptyJson",pas.SysUtils.Exception,function () {
      this.Create$2 = function () {
        pas.SysUtils.Exception.Create$1.call(this,"Json is still empty. Cannot perform operation.");
        return this;
      };
    },"TTMSFNCJSONWriter.EEmptyJson");
    rtl.createClass(this,"EEmptyName",pas.SysUtils.Exception,function () {
      this.Create$2 = function () {
        pas.SysUtils.Exception.Create$1.call(this,"Cannot write empty name");
        return this;
      };
    },"TTMSFNCJSONWriter.EEmptyName");
    this.TTMSFNCJSONScope = {"0": "jscEmptyDocument", jscEmptyDocument: 0, "1": "jscEmptyArray", jscEmptyArray: 1, "2": "jscEmptyObject", jscEmptyObject: 2, "3": "jscNonEmptyDocument", jscNonEmptyDocument: 3, "4": "jscNonEmptyArray", jscNonEmptyArray: 4, "5": "jscNonEmptyObject", jscNonEmptyObject: 5, "6": "jscDanglingName", jscDanglingName: 6};
    $mod.$rtti.$Enum("TTMSFNCJSONWriter.TTMSFNCJSONScope",{minvalue: 0, maxvalue: 6, ordtype: 1, enumtype: this.TTMSFNCJSONScope});
    this.MaxStackSize = 255;
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FWriter = null;
      this.FStack = rtl.arraySetLength(null,0,256);
      this.FStackSize = 0;
      this.FIndent = "";
      this.FSeparator = "";
      this.FDeferredName = "";
    };
    this.$final = function () {
      this.FWriter = undefined;
      this.FStack = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.SetIndentLength = function (Value) {
      if (Value <= 0) {
        this.FIndent = "";
        this.FSeparator = ":";
      } else {
        this.FIndent = pas.System.StringOfChar(" ",Value);
        this.FSeparator = ": ";
      };
    };
    this.GetIndentLength = function () {
      var Result = 0;
      Result = this.FIndent.length;
      return Result;
    };
    this.OpenItem = function (Empty, OpenBracket) {
      var Result = null;
      this.BeforeValue(true);
      this.PushScope(Empty);
      this.FWriter.Write(OpenBracket);
      Result = this;
      return Result;
    };
    this.CloseItem = function (Empty, NonEmpty, CloseBracket) {
      var Result = null;
      var Context = 0;
      Context = this.PeekScope();
      if (!(Context in rtl.createSet(Empty,NonEmpty))) throw this.EInvalidNesting.$create("Create$2");
      if (this.FDeferredName !== "") throw this.EMissingValue.$create("Create$2");
      this.FStackSize -= 1;
      if (Context === NonEmpty) this.NewLine();
      this.FWriter.Write(CloseBracket);
      Result = this;
      return Result;
    };
    this.PushScope = function (Scope) {
      if (this.FStackSize > 255) throw this.ETooManyDepthLevels.$create("Create$2");
      this.FStack[this.FStackSize] = Scope;
      this.FStackSize += 1;
    };
    this.PeekScope = function () {
      var Result = 0;
      if (this.FStackSize === 0) throw this.EEmptyJson.$create("Create$2");
      Result = this.FStack[this.FStackSize - 1];
      return Result;
    };
    this.ReplaceTop = function (Scope) {
      if (this.FStackSize === 0) throw this.EEmptyJson.$create("Create$2");
      this.FStack[this.FStackSize - 1] = Scope;
    };
    this.WriteDeferredName = function () {
      if (this.FDeferredName !== "") {
        this.BeforeName();
        this.InternalWriteString(this.FDeferredName);
        this.FDeferredName = "";
      };
    };
    this.InternalWriteString = function (Value) {
      this.FWriter.Write('"');
      this.FWriter.Write(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.EscapeString(Value));
      this.FWriter.Write('"');
    };
    this.NewLine = function () {
      var I = 0;
      if (this.FIndent !== "") {
        this.FWriter.Write("\r\n");
        for (var $l = 1, $end = this.FStackSize - 1; $l <= $end; $l++) {
          I = $l;
          this.FWriter.Write(this.FIndent);
        };
      };
    };
    this.BeforeName = function () {
      var $tmp = this.PeekScope();
      if ($tmp === $mod.TTMSFNCJSONWriter.TTMSFNCJSONScope.jscNonEmptyObject) {
        this.FWriter.Write(",")}
       else if ($tmp === $mod.TTMSFNCJSONWriter.TTMSFNCJSONScope.jscEmptyObject) {}
      else {
        throw this.ECannotWriteName.$create("Create$2");
      };
      this.NewLine();
      this.ReplaceTop($mod.TTMSFNCJSONWriter.TTMSFNCJSONScope.jscDanglingName);
    };
    this.BeforeValue = function (Root) {
      var $tmp = this.PeekScope();
      if ($tmp === $mod.TTMSFNCJSONWriter.TTMSFNCJSONScope.jscNonEmptyDocument) {
        throw this.EMultipleRootNotAllowed.$create("Create$2")}
       else if ($tmp === $mod.TTMSFNCJSONWriter.TTMSFNCJSONScope.jscEmptyDocument) {
        if (!Root) throw this.EObjectOrArrayExpected.$create("Create$2");
        this.ReplaceTop($mod.TTMSFNCJSONWriter.TTMSFNCJSONScope.jscNonEmptyDocument);
      } else if ($tmp === $mod.TTMSFNCJSONWriter.TTMSFNCJSONScope.jscEmptyArray) {
        this.ReplaceTop($mod.TTMSFNCJSONWriter.TTMSFNCJSONScope.jscNonEmptyArray);
        this.NewLine();
      } else if ($tmp === $mod.TTMSFNCJSONWriter.TTMSFNCJSONScope.jscNonEmptyArray) {
        this.FWriter.Write(",");
        this.NewLine();
      } else if ($tmp === $mod.TTMSFNCJSONWriter.TTMSFNCJSONScope.jscDanglingName) {
        this.FWriter.Write(this.FSeparator);
        this.ReplaceTop($mod.TTMSFNCJSONWriter.TTMSFNCJSONScope.jscNonEmptyObject);
      } else {
        throw this.EInvalidNesting.$create("Create$2");
      };
    };
    this.Create$1 = function (AStream) {
      pas.System.TObject.Create.call(this);
      this.FWriter = $mod.TTMSFNCJSONStreamWriter.$create("Create$1",[AStream]);
      this.FSeparator = ":";
      this.PushScope($mod.TTMSFNCJSONWriter.TTMSFNCJSONScope.jscEmptyDocument);
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FWriter");
      pas.System.TObject.Destroy.call(this);
    };
    this.WriteBeginArray = function () {
      var Result = null;
      this.WriteDeferredName();
      Result = this.OpenItem($mod.TTMSFNCJSONWriter.TTMSFNCJSONScope.jscEmptyArray,"[");
      return Result;
    };
    this.WriteEndArray = function () {
      var Result = null;
      Result = this.CloseItem($mod.TTMSFNCJSONWriter.TTMSFNCJSONScope.jscEmptyArray,$mod.TTMSFNCJSONWriter.TTMSFNCJSONScope.jscNonEmptyArray,"]");
      return Result;
    };
    this.WriteBeginObject = function () {
      var Result = null;
      this.WriteDeferredName();
      Result = this.OpenItem($mod.TTMSFNCJSONWriter.TTMSFNCJSONScope.jscEmptyObject,"{");
      return Result;
    };
    this.WriteEndObject = function () {
      var Result = null;
      Result = this.CloseItem($mod.TTMSFNCJSONWriter.TTMSFNCJSONScope.jscEmptyObject,$mod.TTMSFNCJSONWriter.TTMSFNCJSONScope.jscNonEmptyObject,"}");
      return Result;
    };
    this.WriteName = function (Name) {
      var Result = null;
      if (Name === "") throw this.EEmptyName.$create("Create$2");
      if (this.FDeferredName !== "") throw this.EMissingValue.$create("Create$2");
      if (this.FStackSize === 0) throw this.EEmptyJson.$create("Create$2");
      this.FDeferredName = Name;
      Result = this;
      return Result;
    };
    this.WriteString = function (Value) {
      var Result = null;
      this.WriteDeferredName();
      this.BeforeValue(false);
      this.InternalWriteString(Value);
      Result = this;
      return Result;
    };
    this.WriteRawString = function (Value) {
      var Result = null;
      this.WriteDeferredName();
      this.BeforeValue(false);
      this.FWriter.Write('"');
      this.FWriter.Write(Value);
      this.FWriter.Write('"');
      Result = this;
      return Result;
    };
    this.WriteBoolean = function (Value) {
      var Result = null;
      this.WriteDeferredName();
      this.BeforeValue(false);
      if (Value) {
        this.FWriter.Write("true")}
       else this.FWriter.Write("false");
      Result = this;
      return Result;
    };
    this.WriteNull = function () {
      var Result = null;
      this.WriteDeferredName();
      this.BeforeValue(false);
      this.FWriter.Write("null");
      Result = this;
      return Result;
    };
    this.WriteDouble = function (Value) {
      var Result = null;
      this.WriteDeferredName();
      this.BeforeValue(false);
      this.FWriter.Write(pas.SysUtils.FloatToStr(Value));
      Result = this;
      return Result;
    };
    this.WriteInteger = function (Value) {
      var Result = null;
      this.WriteDeferredName();
      this.BeforeValue(false);
      this.FWriter.Write(pas.SysUtils.IntToStr(Value));
      Result = this;
      return Result;
    };
    this.Close = function () {
      if ((this.FStackSize > 1) || ((this.FStackSize === 1) && (this.PeekScope() !== $mod.TTMSFNCJSONWriter.TTMSFNCJSONScope.jscNonEmptyDocument))) throw this.EInvalidNesting.$create("Create$2");
    };
    var $r = this.$rtti;
    $mod.$rtti.$StaticArray("TTMSFNCJSONWriter.FStack$a",{dims: [256], eltype: $mod.$rtti["TTMSFNCJSONWriter.TTMSFNCJSONScope"]});
  });
},["WEBLib.TMSFNCUtils"]);
//# sourceMappingURL=WEBLib.TMSFNCJSONWriter.js.map
