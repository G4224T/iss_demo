rtl.module("WEBLib.TMSFNCStyles",["System","Classes","WEBLib.Graphics","WEBLib.Controls","WEBLib.Forms","WEBLib.TMSFNCTypes","WEBLib.TMSFNCCustomComponent","WEBLib.TMSFNCGraphicsTypes","JS","WEBLib.JSON"],function () {
  "use strict";
  var $mod = this;
  rtl.createInterface(this,"ITMSFNCAdaptToStyle","{3EFF288D-3927-4E86-8E9D-EF684B501C9E}",["GetAdaptToStyle","SetAdaptToStyle"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetAdaptToStyle",1,[],rtl.boolean);
    $r.addMethod("SetAdaptToStyle",0,[["Value",rtl.boolean,2]]);
    $r.addProperty("AdaptToStyle",3,rtl.boolean,"GetAdaptToStyle","SetAdaptToStyle");
  });
  rtl.createClass(this,"TTMSFNCStyles",pas.System.TObject,function () {
    this.ExtractColor = function (AValue) {
      var $Self = this;
      var Result = 0;
      var s = "";
      var s2 = "";
      var sl = null;
      var p = 0;
      var p2 = 0;
      function ParseValue(AValue) {
        var Result = 0;
        Result = pas.SysUtils.StrToInt(pas.SysUtils.Trim(pas.SysUtils.StringReplace(AValue,"rgb(","",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll))));
        return Result;
      };
      Result = -1;
      if (AValue !== "") {
        s = pas.SysUtils.LowerCase(pas.SysUtils.StringReplace(AValue," ","",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll)));
        if (pas.System.Pos("linear-gradient",s) === 1) {
          p = pas.System.Pos("rgb",s);
          if (p === 0) p = pas.System.Pos("#",s);
          p2 = pas.System.Pos$1(")",s,p);
          s2 = pas.System.Copy(s,p,(p2 - p) + 1);
          p = pas.System.Pos$1("rgb",s,p2);
          if (p === 0) p = pas.System.Pos("#",s);
          p2 = pas.System.Pos$1(")",s,p);
          Result = this.ExtractColor(s2);
        } else if (pas.System.Pos("rgb",s) === 1) {
          sl = pas.Classes.TStringList.$create("Create$1");
          try {
            sl.SetDelimiter(",");
            sl.SetDelimitedText(s);
            Result = pas["WEBLib.TMSFNCGraphicsTypes"].MakeGraphicsColor(ParseValue(sl.Get(0)),ParseValue(sl.Get(1)),ParseValue(sl.Get(2)));
          } finally {
            sl = rtl.freeLoc(sl);
          };
        } else if (pas.System.Pos("#",s) === 1) Result = pas["WEBLib.Graphics"].HexToColor(s);
      };
      return Result;
    };
    this.ExtractColorTo = function (AValue) {
      var $Self = this;
      var Result = 0;
      var s = "";
      var s3 = "";
      var sl = null;
      var p = 0;
      var p2 = 0;
      function ParseValue(AValue) {
        var Result = 0;
        Result = pas.SysUtils.StrToInt(pas.SysUtils.Trim(pas.SysUtils.StringReplace(AValue,"rgb(","",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll))));
        return Result;
      };
      Result = -1;
      if (AValue !== "") {
        s = pas.SysUtils.LowerCase(pas.SysUtils.StringReplace(AValue," ","",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll)));
        if (pas.System.Pos("linear-gradient",s) === 1) {
          p = pas.System.Pos("rgb",s);
          if (p === 0) p = pas.System.Pos("#",s);
          p2 = pas.System.Pos$1(")",s,p);
          p = pas.System.Pos$1("rgb",s,p2);
          if (p === 0) p = pas.System.Pos("#",s);
          p2 = pas.System.Pos$1(")",s,p);
          s3 = pas.System.Copy(s,p,(p2 - p) + 1);
          Result = this.ExtractColor(s3);
        } else if (pas.System.Pos("rgb",s) === 1) {
          sl = pas.Classes.TStringList.$create("Create$1");
          try {
            sl.SetDelimiter(",");
            sl.SetDelimitedText(s);
            Result = pas["WEBLib.TMSFNCGraphicsTypes"].MakeGraphicsColor(ParseValue(sl.Get(0)),ParseValue(sl.Get(1)),ParseValue(sl.Get(2)));
          } finally {
            sl = rtl.freeLoc(sl);
          };
        } else if (pas.System.Pos("#",s) === 1) Result = pas["WEBLib.Graphics"].HexToColor(s);
      };
      return Result;
    };
    this.ExtractFontName = function (AValue) {
      var Result = "";
      Result = AValue;
      return Result;
    };
    this.GetStyleBackgroundFill = function () {
      var Result = "";
      Result = this.FindCSSStyleProperty(".TMSFNCGridStyle","background");
      return Result;
    };
    this.GetStyleBackgroundStroke = function () {
      var Result = "";
      Result = this.FindCSSStyleProperty(".TMSFNCGridStyle","border-color");
      return Result;
    };
    this.GetStyleDefaultButtonFill = function () {
      var Result = "";
      Result = this.FindCSSStyleProperty(".TMSFNCButtonStyle","background");
      return Result;
    };
    this.GetStyleDefaultButtonStroke = function () {
      var Result = "";
      Result = this.FindCSSStyleProperty(".TMSFNCButtonStyle","border-color");
      return Result;
    };
    this.GetStyleEditTextColor = function () {
      var Result = "";
      Result = this.FindCSSStyleProperty(".TMSFNCEditStyle","--foreground");
      return Result;
    };
    this.GetStyleEditFill = function () {
      var Result = "";
      Result = this.FindCSSStyleProperty(".TMSFNCEditStyle","background");
      return Result;
    };
    this.GetStyleEditStroke = function () {
      var Result = "";
      Result = this.FindCSSStyleProperty(".TMSFNCStyle","border-color");
      return Result;
    };
    this.GetStyleHeaderFill = function () {
      var Result = "";
      Result = this.FindCSSStyleProperty(".TMSFNCHeaderItemStyle","background");
      return Result;
    };
    this.GetStyleHeaderStroke = function () {
      var Result = "";
      Result = this.FindCSSStyleProperty(".TMSFNCHeaderItemStyle","border-color");
      return Result;
    };
    this.GetStyleSelectionFill = function () {
      var Result = "";
      Result = this.FindCSSStyleProperty(".TMSFNCGridStyle","--selection");
      return Result;
    };
    this.GetStyleAlternativeSelectionFill = function () {
      var Result = "";
      Result = this.FindCSSStyleProperty(".TMSFNCMemoStyle","--selection");
      return Result;
    };
    this.GetStyleAlternativeBackgroundFill = function () {
      var Result = "";
      Result = this.FindCSSStyleProperty(".TMSFNCMemoStyle","background");
      return Result;
    };
    this.GetStyleAlternativeBackgroundStroke = function () {
      var Result = "";
      Result = this.FindCSSStyleProperty(".TMSFNCMemoStyle","border-color");
      return Result;
    };
    this.GetStyleFocusFill = function () {
      var Result = "";
      Result = this.FindCSSStyleProperty(".TMSFNCGridStyle","--focus");
      return Result;
    };
    this.GetStyleLineFill = function () {
      var Result = "";
      Result = this.FindCSSStyleProperty(".TMSFNCGridStyle","--linefill");
      return Result;
    };
    this.GetStyleTextFont = function () {
      var Result = "";
      Result = this.FindCSSStyleProperty(".TMSFNCHeaderItemStyle","font-family");
      return Result;
    };
    this.GetStyleTextColor = function () {
      var Result = "";
      Result = this.FindCSSStyleProperty(".TMSFNCHeaderItemStyle","color");
      return Result;
    };
    this.GetStyleAlternateBackgroundFill = function () {
      var Result = "";
      Result = this.FindCSSStyleProperty(".TMSFNCGridStyle","--alternatingrowbackground");
      return Result;
    };
    this.FindCSSStyleRule = function (ARuleName) {
      var Result = null;
      var s = "";
      var f = "";
      Result = null;
      s = ARuleName;
      f = $mod.CSSStyleFileName;
      for (var i = 0; i < document.styleSheets.length; i++){
        var fn = document.styleSheets[i].href;
        if (fn != null) {
        if (f == fn.substring(fn.lastIndexOf('/')+1)){
          var classes = document.styleSheets[i].rules || document.styleSheets[i].cssRules;
          for (var x = 0; x < classes.length; x++) {
              if (classes[x].selectorText.startsWith(s)) {
                  return classes[x];
              }
          }
         }
        }
      };
      return Result;
    };
    this.FindCSSStyleProperty = function (ARuleName, APropertyName) {
      var Result = "";
      var j = null;
      var s = "";
      var v = "";
      Result = "";
      j = this.FindCSSStyleRule(ARuleName);
      if (j != null) {
        s = APropertyName;
        v = j.style.getPropertyValue(s);
        Result = v;
      };
      return Result;
    };
    this.StyleServicesEnabled = function () {
      var Result = false;
      Result = true;
      return Result;
    };
    this.GetStyleLineFillColor = function (AColor) {
      var Result = false;
      var f = "";
      var c = 0;
      Result = false;
      if (this.StyleServicesEnabled()) {
        f = this.GetStyleLineFill();
        if (f !== "") {
          c = this.ExtractColor(f);
          AColor.set(c);
          Result = c !== -1;
        };
      };
      return Result;
    };
    this.GetStyleBackgroundFillColor = function (AColor) {
      var Result = false;
      var f = "";
      var c = 0;
      Result = false;
      if (this.StyleServicesEnabled()) {
        f = this.GetStyleBackgroundFill();
        if (f !== "") {
          c = this.ExtractColor(f);
          AColor.set(c);
          Result = c !== -1;
        };
      };
      return Result;
    };
    this.GetStyleBackgroundFillColorTo = function (AColor) {
      var Result = false;
      var f = "";
      var c = 0;
      Result = false;
      if (this.StyleServicesEnabled()) {
        f = this.GetStyleBackgroundFill();
        if (f !== "") {
          c = this.ExtractColorTo(f);
          AColor.set(c);
          Result = c !== -1;
        };
      };
      return Result;
    };
    this.GetStyleAlternativeBackgroundFillColor = function (AColor) {
      var Result = false;
      var f = "";
      var c = 0;
      Result = false;
      if (this.StyleServicesEnabled()) {
        f = this.GetStyleAlternativeBackgroundFill();
        if (f !== "") {
          c = this.ExtractColor(f);
          AColor.set(c);
          Result = c !== -1;
        };
      };
      return Result;
    };
    this.GetStyleAlternativeBackgroundFillColorTo = function (AColor) {
      var Result = false;
      var f = "";
      var c = 0;
      Result = false;
      if (this.StyleServicesEnabled()) {
        f = this.GetStyleAlternativeBackgroundFill();
        if (f !== "") {
          c = this.ExtractColorTo(f);
          AColor.set(c);
          Result = c !== -1;
        };
      };
      return Result;
    };
    this.GetStyleBackgroundStrokeColor = function (AColor) {
      var Result = false;
      var f = "";
      var c = 0;
      Result = false;
      if (this.StyleServicesEnabled()) {
        f = this.GetStyleBackgroundStroke();
        if (f !== "") {
          c = this.ExtractColor(f);
          AColor.set(c);
          Result = c !== -1;
        };
      };
      return Result;
    };
    this.GetStyleHeaderFillColor = function (AColor) {
      var Result = false;
      var f = "";
      var c = 0;
      Result = false;
      if (this.StyleServicesEnabled()) {
        f = this.GetStyleHeaderFill();
        if (f !== "") {
          c = this.ExtractColor(f);
          AColor.set(c);
          Result = c !== -1;
        };
      };
      return Result;
    };
    this.GetStyleHeaderFillColorTo = function (AColor) {
      var Result = false;
      var f = "";
      var c = 0;
      Result = false;
      if (this.StyleServicesEnabled()) {
        f = this.GetStyleHeaderFill();
        if (f !== "") {
          c = this.ExtractColorTo(f);
          AColor.set(c);
          Result = c !== -1;
        };
      };
      return Result;
    };
    this.GetStyleHeaderStrokeColor = function (AColor) {
      var Result = false;
      var f = "";
      var c = 0;
      Result = false;
      if (this.StyleServicesEnabled()) {
        f = this.GetStyleHeaderStroke();
        if (f !== "") {
          c = this.ExtractColor(f);
          AColor.set(c);
          Result = c !== -1;
        };
      };
      return Result;
    };
    this.GetStyleSelectionFillColor = function (AColor) {
      var Result = false;
      var f = "";
      var c = 0;
      Result = false;
      if (this.StyleServicesEnabled()) {
        f = this.GetStyleSelectionFill();
        if (f !== "") {
          c = this.ExtractColor(f);
          AColor.set(c);
          Result = c !== -1;
        };
      };
      return Result;
    };
    this.GetStyleSelectionFillColorTo = function (AColor) {
      var Result = false;
      var f = "";
      var c = 0;
      Result = false;
      if (this.StyleServicesEnabled()) {
        f = this.GetStyleSelectionFill();
        if (f !== "") {
          c = this.ExtractColorTo(f);
          AColor.set(c);
          Result = c !== -1;
        };
      };
      return Result;
    };
    this.GetStyleTextFontColor = function (AColor) {
      var Result = false;
      var f = "";
      var c = 0;
      Result = false;
      if (this.StyleServicesEnabled()) {
        f = this.GetStyleTextColor();
        if (f !== "") {
          c = this.ExtractColor(f);
          AColor.set(c);
          Result = c !== -1;
        };
      };
      return Result;
    };
    this.GetStyleAlternativeTextFontColor = function (AColor) {
      var Result = false;
      var f = "";
      var c = 0;
      Result = false;
      if (this.StyleServicesEnabled()) {
        f = this.GetStyleEditTextColor();
        if (f !== "") {
          c = this.ExtractColor(f);
          AColor.set(c);
          Result = c !== -1;
        };
      };
      return Result;
    };
    this.GetStyleDefaultButtonFillColor = function (AColor) {
      var Result = false;
      var f = "";
      var c = 0;
      Result = false;
      if (this.StyleServicesEnabled()) {
        f = this.GetStyleDefaultButtonFill();
        if (f !== "") {
          c = this.ExtractColor(f);
          AColor.set(c);
          Result = c !== -1;
        };
      };
      return Result;
    };
    this.GetStyleDefaultButtonStrokeColor = function (AColor) {
      var Result = false;
      var f = "";
      var c = 0;
      Result = false;
      if (this.StyleServicesEnabled()) {
        f = this.GetStyleDefaultButtonStroke();
        if (f !== "") {
          c = this.ExtractColor(f);
          AColor.set(c);
          Result = c !== -1;
        };
      };
      return Result;
    };
  });
  this.$rtti.$MethodVar("TTMSFNCStylesManagerCanLoadStyleEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AStyle",rtl.string],["AComponent",pas.Classes.$rtti["TComponent"]],["ACanLoadStyle",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCStylesManagerStyleLoadedEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AStyle",rtl.string],["AComponent",pas.Classes.$rtti["TComponent"]]]), methodkind: 0});
  this.$rtti.$DynArray("TTMSFNCStylesManagerFileArray",{eltype: rtl.string});
  this.$rtti.$DynArray("TTMSFNCStylesManagerComponentArray",{eltype: pas.Classes.$rtti["TComponent"]});
  rtl.createInterface(this,"ITMSFNCStylesManager","{88852C7F-B7B5-4FFA-BB47-6D95600CB1F3}",["GetSubComponentArray"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetSubComponentArray",1,[],$mod.$rtti["TTMSFNCStylesManagerComponentArray"]);
  });
  rtl.createClass(this,"TTMSFNCStylesManagerOptions",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FAdaptFormColor = false;
    };
    this.Create$1 = function () {
      this.FAdaptFormColor = true;
      return this;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addProperty("AdaptFormColor",0,rtl.boolean,"FAdaptFormColor","FAdaptFormColor",{Default: true});
  });
  rtl.createClass(this,"TTMSFNCStylesManager",pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent,function () {
    this.$init = function () {
      pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent.$init.call(this);
      this.FComponents$1 = [];
      this.FStyle = "";
      this.FStyleResource = "";
      this.FStyleForm = null;
      this.FOnCanLoadStyle = null;
      this.FOnStyleLoaded = null;
      this.FOptions = null;
    };
    this.$final = function () {
      this.FComponents$1 = undefined;
      this.FStyleForm = undefined;
      this.FOnCanLoadStyle = undefined;
      this.FOnStyleLoaded = undefined;
      this.FOptions = undefined;
      pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent.$final.call(this);
    };
    this.SetStyle = function (Value) {
      if (this.FStyle !== Value) {
        this.FStyle = Value;
        this.LoadStyleFromFile(this.FStyle);
      };
    };
    this.SetStyleResource = function (Value) {
      if (this.FStyleResource !== Value) {
        this.FStyleResource = Value;
        if (this.FStyleResource !== "") ;
      };
    };
    this.SetOptions = function (Value) {
      this.FOptions.Assign(Value);
    };
    this.GetDocURL = function () {
      var Result = "";
      Result = pas["WEBLib.TMSFNCTypes"].TTMSFNCBaseDocURL + "tmsfnccore/components/ttmsfncstyling";
      return Result;
    };
    this.InternalLoadStyleFromJSONValue = function (AJSONValue, AComponents) {
      var $Self = this;
      var ct = "";
      var I = 0;
      var K = 0;
      var f = null;
      var io = null;
      var s = null;
      var st = "";
      var b = false;
      var sm = null;
      var arr = [];
      function IsComponentInArray(AComponent) {
        var Result = false;
        var K = 0;
        if (((rtl.length(AComponents) > 0) && (rtl.length(AComponents) === 0)) || !(rtl.length(AComponents) > 0)) {
          Result = true}
         else {
          Result = false;
          for (var $l = 0, $end = rtl.length(AComponents) - 1; $l <= $end; $l++) {
            K = $l;
            if (AComponents[K] === AComponent) {
              Result = true;
              break;
            };
          };
        };
        return Result;
      };
      function ApplyStyleToComponent(AComponent) {
        var $ir = rtl.createIntfRefs();
        try {
          if (!(AComponent != null)) return;
          if ((AComponent.$classname === ct) && IsComponentInArray(AComponent)) {
            if (pas.SysUtils.Supports$1($ir.ref(1,rtl.queryIntfT(AComponent,pas.System.IUnknown)),rtl.getIntfGUIDR(pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence),{get: function () {
                return io;
              }, set: function (v) {
                io = v;
              }})) {
              st = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValueAsString(AJSONValue);
              b = true;
              $Self.DoCanLoadStyle(st,AComponent,{get: function () {
                  return b;
                }, set: function (v) {
                  b = v;
                }});
              if (b) {
                s = pas.Classes.TStringStream.$create("Create$3",[st,pas.Classes.TEncoding.GetANSI(),true]);
                try {
                  io.LoadSettingsFromStream(s);
                } finally {
                  s = rtl.freeLoc(s);
                };
                $Self.DoStyleLoaded(st,AComponent);
              };
            };
          };
        } finally {
          $ir.free();
          rtl._Release(io);
        };
      };
      var $ir = rtl.createIntfRefs();
      try {
        f = this.FStyleForm;
        if (!(f != null)) f = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetOwnerForm($Self);
        if (!(f != null)) return;
        if (AJSONValue != null) {
          ct = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(AJSONValue,pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.ClassTypeVariable);
          if (ct !== "") {
            for (var $l = f.GetComponentCount() - 1; $l >= 0; $l--) {
              I = $l;
              ApplyStyleToComponent(f.GetComponent(I));
              if (pas.SysUtils.Supports$1($ir.ref(1,rtl.queryIntfT(f.GetComponent(I),pas.System.IUnknown)),rtl.getIntfGUIDR($mod.ITMSFNCStylesManager),{get: function () {
                  return sm;
                }, set: function (v) {
                  sm = v;
                }})) {
                arr = sm.GetSubComponentArray();
                for (var $l1 = 0, $end = rtl.length(arr) - 1; $l1 <= $end; $l1++) {
                  K = $l1;
                  ApplyStyleToComponent(arr[K]);
                };
              };
            };
          };
        };
      } finally {
        $ir.free();
        rtl._Release(sm);
      };
    };
    this.InternalLoadStyle = function (AValue, AComponents) {
      var v = null;
      var jv = null;
      var va = null;
      var fc = null;
      var fcs = "";
      var ja = null;
      var I = 0;
      var f = null;
      var c = 0;
      v = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.ParseJSON(AValue);
      if (v != null) {
        try {
          if (this.FOptions.FAdaptFormColor) {
            fc = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(v,"FormColor");
            if (fc != null) {
              fcs = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONProp(v,"FormColor");
              f = this.FStyleForm;
              if (!(f != null)) f = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetOwnerForm(this);
              if (f != null) {
                c = pas["WEBLib.TMSFNCGraphics"].TTMSFNCGraphics.HTMLToColor(fcs);
                f.SetColor(c);
              };
            };
          };
          va = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(v,"Styles");
          if (pas["WEBLib.JSON"].TJSONArray.isPrototypeOf(va)) {
            ja = rtl.as(va,pas["WEBLib.JSON"].TJSONArray);
            for (var $l = 0, $end = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(ja) - 1; $l <= $end; $l++) {
              I = $l;
              jv = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(ja,I);
              if (jv != null) this.InternalLoadStyleFromJSONValue(jv,rtl.arrayRef(AComponents));
            };
          } else {
            if (v != null) this.InternalLoadStyleFromJSONValue(v,rtl.arrayRef(AComponents));
          };
        } finally {
          v = rtl.freeLoc(v);
        };
      };
    };
    this.DoCanLoadStyle = function (AStyle, AComponent, ACanLoadStyle) {
      if (this.FOnCanLoadStyle != null) this.FOnCanLoadStyle(this,AStyle,AComponent,ACanLoadStyle);
    };
    this.DoStyleLoaded = function (AStyle, AComponent) {
      if (this.FOnStyleLoaded != null) this.FOnStyleLoaded(this,AStyle,AComponent);
    };
    this.Create$1 = function (AOwner) {
      pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent.Create$1.apply(this,arguments);
      this.FOptions = $mod.TTMSFNCStylesManagerOptions.$create("Create$1");
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FOptions");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.LoadStyleFromText = function (AText) {
      var a = [];
      a = rtl.arraySetLength(a,null,0);
      this.InternalLoadStyle(AText,rtl.arrayRef(a));
    };
    this.LoadStyleFromStream = function (AStream) {
      var a = [];
      a = rtl.arraySetLength(a,null,0);
      this.LoadStyleFromStream$1(AStream,rtl.arrayRef(a));
    };
    this.LoadStyleFromFile = function (AFile) {
      var a = [];
      a = rtl.arraySetLength(a,null,0);
      this.LoadStyleFromFile$1(AFile,rtl.arrayRef(a));
    };
    this.LoadStyleFromText$1 = function (AText, AComponents) {
      this.InternalLoadStyle(AText,rtl.arrayRef(AComponents));
    };
    this.LoadStyleFromStream$1 = function (AStream, AComponents) {
      var ss = null;
      ss = pas.Classes.TStringStream.$create("Create$1");
      try {
        ss.LoadFromStream(AStream);
        this.InternalLoadStyle(ss.GetDataString(),rtl.arrayRef(AComponents));
      } finally {
        ss = rtl.freeLoc(ss);
      };
    };
    this.LoadStyleFromFile$1 = function (AFile, AComponents) {
      var $Self = this;
      var ss = null;
      ss = pas.Classes.TStringStream.$create("Create$1");
      try {
        this.FComponents$1 = rtl.arrayRef(AComponents);
        ss.LoadFromFile(AFile,function () {
          $Self.InternalLoadStyle(ss.GetDataString(),rtl.arrayRef(AComponents));
          ss = rtl.freeLoc(ss);
        },null);
      } finally {
      };
    };
    this.LoadStyleFromURL = function (AURL, AComponents) {
      this.LoadStyleFromFile$1(AURL,rtl.arrayRef(AComponents));
    };
    this.LoadStyleFromURL$1 = function (AURL) {
      var a = [];
      a = rtl.arraySetLength(a,null,0);
      this.LoadStyleFromFile$1(AURL,rtl.arrayRef(a));
    };
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
    $r.addProperty("Options",2,$mod.$rtti["TTMSFNCStylesManagerOptions"],"FOptions","SetOptions");
    $r.addProperty("Style",2,rtl.string,"FStyle","SetStyle");
    $r.addProperty("StyleResource",2,rtl.string,"FStyleResource","SetStyleResource");
    $r.addProperty("OnCanLoadStyle",0,$mod.$rtti["TTMSFNCStylesManagerCanLoadStyleEvent"],"FOnCanLoadStyle","FOnCanLoadStyle");
    $r.addProperty("OnStyleLoaded",0,$mod.$rtti["TTMSFNCStylesManagerStyleLoadedEvent"],"FOnStyleLoaded","FOnStyleLoaded");
    $r.attr = [pas.Classes.ComponentPlatformsAttribute,"Create$1",[0]];
  });
  this.CSSStyleFileName = "";
},["WEBLib.TMSFNCUtils","SysUtils","WEBLib.TMSFNCPersistence","WEBLib.TMSFNCGraphics"]);
//# sourceMappingURL=WEBLib.TMSFNCStyles.js.map
