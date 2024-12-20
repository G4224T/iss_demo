rtl.module("WEBLib.TMSFNCGraphicsTypes",["System","Classes","Types","WEBLib.TMSFNCTypes","WEBLib.Graphics"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.FPC_FULLVERSION = 0;
  this.PathScale = 1E-4;
  this.PathFontSize = 1E-2;
  this.PathPosition = 1E-3;
  this.PathAngle = 1E-4;
  this.gcAliceblue = 0xFFF8F0;
  this.gcAntiquewhite = 0xD7EBFA;
  this.gcAqua = 0xFFFF00;
  this.gcAquamarine = 0xD4FF7F;
  this.gcAzure = 0xFFFFF0;
  this.gcBeige = 0xDCF5F5;
  this.gcBisque = 0xC4E4FF;
  this.gcBlack = 0x0;
  this.gcBlanchedalmond = 0xCDEBFF;
  this.gcBlue = 0xFF0000;
  this.gcBlueviolet = 0xE22B8A;
  this.gcBrown = 0x2A2AA5;
  this.gcBurlywood = 0x87B8DE;
  this.gcCadetblue = 0xA09E5F;
  this.gcChartreuse = 0xFF7F;
  this.gcChocolate = 0x1E69D2;
  this.gcCoral = 0x507FFF;
  this.gcCornflowerblue = 0xED9564;
  this.gcCornsilk = 0xDCF8FF;
  this.gcCrimson = 0x3C14DC;
  this.gcCyan = 0xFFFF00;
  this.gcDarkblue = 0x8B0000;
  this.gcDarkcyan = 0x8B8B00;
  this.gcDarkgoldenrod = 0xB86B8;
  this.gcDarkgray = 0xA9A9A9;
  this.gcDarkgreen = 0x6400;
  this.gcDarkgrey = 0xA9A9A9;
  this.gcDarkkhaki = 0x6BB7BD;
  this.gcDarkmagenta = 0x8B008B;
  this.gcDarkolivegreen = 0x2F6B55;
  this.gcDarkorange = 0x8CFF;
  this.gcDarkorchid = 0xCC3299;
  this.gcDarkred = 0x8B;
  this.gcDarksalmon = 0x7A96E9;
  this.gcDarkseagreen = 0x8FBC8F;
  this.gcDarkslateblue = 0x8B3D48;
  this.gcDarkslategray = 0x4F4F2F;
  this.gcDarkslategrey = 0x4F4F2F;
  this.gcDarkturquoise = 0xD1CE00;
  this.gcDarkviolet = 0xD30094;
  this.gcDeeppink = 0x9314FF;
  this.gcDeepskyblue = 0xFFBF00;
  this.gcDimgray = 0x696969;
  this.gcDimgrey = 0x696969;
  this.gcDodgerblue = 0xFF901E;
  this.gcFirebrick = 0x2222B2;
  this.gcFloralwhite = 0xF0FAFF;
  this.gcForestgreen = 0x228B22;
  this.gcFuchsia = 0xFF00FF;
  this.gcGainsboro = 0xDCDCDC;
  this.gcGhostwhite = 0xFFF8F8;
  this.gcGold = 0xD7FF;
  this.gcGoldenrod = 0x20A5DA;
  this.gcGray = 0x808080;
  this.gcGreen = 0x8000;
  this.gcGreenyellow = 0x2FFFAD;
  this.gcGrey = 0x808080;
  this.gcHoneydew = 0xF0FFF0;
  this.gcHotpink = 0xB469FF;
  this.gcIndianred = 0x5C5CCD;
  this.gcIndigo = 0x82004B;
  this.gcIvory = 0xF0FFFF;
  this.gcKhaki = 0x8CE6F0;
  this.gcLavender = 0xFAE6E6;
  this.gcLavenderblush = 0xF5F0FF;
  this.gcLawngreen = 0xFC7C;
  this.gcLemonchiffon = 0xCDFAFF;
  this.gcLightblue = 0xE6D8AD;
  this.gcLightcoral = 0x8080F0;
  this.gcLightcyan = 0xFFFFE0;
  this.gcLightgoldenrodyellow = 0xD2FAFA;
  this.gcLightgray = 0xD3D3D3;
  this.gcLightgreen = 0x90EE90;
  this.gcLightgrey = 0xD3D3D3;
  this.gcLightpink = 0xC1B6FF;
  this.gcLightsalmon = 0x7AA0FF;
  this.gcLightseagreen = 0xAAB220;
  this.gcLightskyblue = 0xFACE87;
  this.gcLightslategray = 0x998877;
  this.gcLightslategrey = 0x998877;
  this.gcLightsteelblue = 0xDEC4B0;
  this.gcLightyellow = 0xE0FFFF;
  this.gcLtGray = 0xC0C0C0;
  this.gcMedGray = 0xA4A0A0;
  this.gcDkGray = 0x808080;
  this.gcMoneyGreen = 0xC0DCC0;
  this.gcLegacySkyBlue = 0xF0CAA6;
  this.gcCream = 0xF0FBFF;
  this.gcLime = 0xFF00;
  this.gcLimegreen = 0x32CD32;
  this.gcLinen = 0xE6F0FA;
  this.gcMagenta = 0xFF00FF;
  this.gcMaroon = 0x80;
  this.gcMediumaquamarine = 0xAACD66;
  this.gcMediumblue = 0xCD0000;
  this.gcMediumorchid = 0xD355BA;
  this.gcMediumpurple = 0xDB7093;
  this.gcMediumseagreen = 0x71B33C;
  this.gcMediumslateblue = 0xEE687B;
  this.gcMediumspringgreen = 0x9AFA00;
  this.gcMediumturquoise = 0xCCD148;
  this.gcMediumvioletred = 0x8515C7;
  this.gcMidnightblue = 0x701919;
  this.gcMintcream = 0xFAFFF5;
  this.gcMistyrose = 0xE1E4FF;
  this.gcMoccasin = 0xB5E4FF;
  this.gcNavajowhite = 0xADDEFF;
  this.gcNavy = 0x800000;
  this.gcOldlace = 0xE6F5FD;
  this.gcOlive = 0x8080;
  this.gcOlivedrab = 0x238E6B;
  this.gcOrange = 0xA5FF;
  this.gcOrangered = 0x45FF;
  this.gcOrchid = 0xD670DA;
  this.gcPalegoldenrod = 0xAAE8EE;
  this.gcPalegreen = 0x98FB98;
  this.gcPaleturquoise = 0xEEEEAF;
  this.gcPalevioletred = 0x9370DB;
  this.gcPapayawhip = 0xD5EFFF;
  this.gcPeachpuff = 0xB9DAFF;
  this.gcPeru = 0x3F85CD;
  this.gcPink = 0xCBC0FF;
  this.gcPlum = 0xDDA0DD;
  this.gcPowderblue = 0xE6E0B0;
  this.gcPurple = 0x800080;
  this.gcRed = 0xFF;
  this.gcRosybrown = 0x8F8FBC;
  this.gcRoyalblue = 0xE16941;
  this.gcSaddlebrown = 0x13458B;
  this.gcSalmon = 0x7280FA;
  this.gcSandybrown = 0x60A4F4;
  this.gcSeagreen = 0x578B2E;
  this.gcSeashell = 0xEEF5FF;
  this.gcSienna = 0x2D52A0;
  this.gcSilver = 0xC0C0C0;
  this.gcSkyblue = 0xEBCE87;
  this.gcSlateblue = 0xCD5A6A;
  this.gcSlategray = 0x908070;
  this.gcSlategrey = 0x908070;
  this.gcSnow = 0xFAFAFF;
  this.gcSpringgreen = 0x7FFF00;
  this.gcSteelblue = 0xB48246;
  this.gcTan = 0x8CB4D2;
  this.gcTeal = 0x808000;
  this.gcThistle = 0xD8BFD8;
  this.gcTomato = 0x4763FF;
  this.gcTurquoise = 0xD0E040;
  this.gcViolet = 0xEE82EE;
  this.gcWheat = 0xB3DEF5;
  this.gcWhite = 0xFFFFFF;
  this.gcWhitesmoke = 0xF5F5F5;
  this.gcYellow = 0xFFFF;
  this.gcYellowgreen = 0x32CD9A;
  this.gcNull = -1;
  rtl.recNewT(this,"TTMSFNCGraphicsColorEntry",function () {
    this.Value = 0;
    this.Name = "";
    this.$eq = function (b) {
      return (this.Value === b.Value) && (this.Name === b.Name);
    };
    this.$assign = function (s) {
      this.Value = s.Value;
      this.Name = s.Name;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCGraphicsColorEntry",{});
    $r.addField("Value",pas["WEBLib.Graphics"].$rtti["TColor"]);
    $r.addField("Name",rtl.string);
  });
  this.TMSFNCGraphicsColorCount = 154;
  this.TTMSFNCGraphicsStrokeKind = {"0": "gskNone", gskNone: 0, "1": "gskSolid", gskSolid: 1, "2": "gskDash", gskDash: 2, "3": "gskDot", gskDot: 3, "4": "gskDashDot", gskDashDot: 4, "5": "gskDashDotDot", gskDashDotDot: 5};
  this.$rtti.$Enum("TTMSFNCGraphicsStrokeKind",{minvalue: 0, maxvalue: 5, ordtype: 1, enumtype: this.TTMSFNCGraphicsStrokeKind});
  this.TTMSFNCGraphicsTextureMode = {"0": "gtmOriginal", gtmOriginal: 0, "1": "gtmFit", gtmFit: 1, "2": "gtmStretch", gtmStretch: 2, "3": "gtmCenter", gtmCenter: 3, "4": "gtmTile", gtmTile: 4};
  this.$rtti.$Enum("TTMSFNCGraphicsTextureMode",{minvalue: 0, maxvalue: 4, ordtype: 1, enumtype: this.TTMSFNCGraphicsTextureMode});
  this.TTMSFNCGraphicsFillKind = {"0": "gfkNone", gfkNone: 0, "1": "gfkSolid", gfkSolid: 1, "2": "gfkGradient", gfkGradient: 2, "3": "gfkTexture", gfkTexture: 3};
  this.$rtti.$Enum("TTMSFNCGraphicsFillKind",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TTMSFNCGraphicsFillKind});
  this.TTMSFNCGraphicsFillGradientMode = {"0": "gfgmDefault", gfgmDefault: 0, "1": "gfgmCollection", gfgmCollection: 1};
  this.$rtti.$Enum("TTMSFNCGraphicsFillGradientMode",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TTMSFNCGraphicsFillGradientMode});
  this.TTMSFNCGraphicsFillGradientType = {"0": "gfgtLinear", gfgtLinear: 0, "1": "gfgtRadial", gfgtRadial: 1};
  this.$rtti.$Enum("TTMSFNCGraphicsFillGradientType",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TTMSFNCGraphicsFillGradientType});
  this.TTMSFNCGraphicsFillOrientation = {"0": "gfoHorizontal", gfoHorizontal: 0, "1": "gfoVertical", gfoVertical: 1, "2": "gfoCustom", gfoCustom: 2};
  this.$rtti.$Enum("TTMSFNCGraphicsFillOrientation",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TTMSFNCGraphicsFillOrientation});
  this.TTMSFNCGraphicsTextAlign = {"0": "gtaCenter", gtaCenter: 0, "1": "gtaLeading", gtaLeading: 1, "2": "gtaTrailing", gtaTrailing: 2};
  this.$rtti.$Enum("TTMSFNCGraphicsTextAlign",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TTMSFNCGraphicsTextAlign});
  this.TTMSFNCGraphicsTextTrimming = {"0": "gttNone", gttNone: 0, "1": "gttCharacter", gttCharacter: 1, "2": "gttWord", gttWord: 2};
  this.$rtti.$Enum("TTMSFNCGraphicsTextTrimming",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TTMSFNCGraphicsTextTrimming});
  this.TTMSFNCGraphicsSide = {"0": "gsLeft", gsLeft: 0, "1": "gsTop", gsTop: 1, "2": "gsRight", gsRight: 2, "3": "gsBottom", gsBottom: 3};
  this.$rtti.$Enum("TTMSFNCGraphicsSide",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TTMSFNCGraphicsSide});
  this.$rtti.$Set("TTMSFNCGraphicsSides",{comptype: this.$rtti["TTMSFNCGraphicsSide"]});
  this.TTMSFNCGraphicsTextQuality = {"0": "gtqDefault", gtqDefault: 0, "1": "gtqAntiAliasing", gtqAntiAliasing: 1, "2": "gtqClearType", gtqClearType: 2};
  this.$rtti.$Enum("TTMSFNCGraphicsTextQuality",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TTMSFNCGraphicsTextQuality});
  this.AllSides = rtl.createSet(this.TTMSFNCGraphicsSide.gsLeft,this.TTMSFNCGraphicsSide.gsTop,this.TTMSFNCGraphicsSide.gsRight,this.TTMSFNCGraphicsSide.gsBottom);
  this.Epsilon = 1E-40;
  rtl.recNewT(this,"TTMSFNCGraphicsMatrix",function () {
    this.m11 = 0.0;
    this.m12 = 0.0;
    this.m13 = 0.0;
    this.m21 = 0.0;
    this.m22 = 0.0;
    this.m23 = 0.0;
    this.m31 = 0.0;
    this.m32 = 0.0;
    this.m33 = 0.0;
    this.$eq = function (b) {
      return (this.m11 === b.m11) && (this.m12 === b.m12) && (this.m13 === b.m13) && (this.m21 === b.m21) && (this.m22 === b.m22) && (this.m23 === b.m23) && (this.m31 === b.m31) && (this.m32 === b.m32) && (this.m33 === b.m33);
    };
    this.$assign = function (s) {
      this.m11 = s.m11;
      this.m12 = s.m12;
      this.m13 = s.m13;
      this.m21 = s.m21;
      this.m22 = s.m22;
      this.m23 = s.m23;
      this.m31 = s.m31;
      this.m32 = s.m32;
      this.m33 = s.m33;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCGraphicsMatrix",{});
    $r.addField("m11",rtl.double);
    $r.addField("m12",rtl.double);
    $r.addField("m13",rtl.double);
    $r.addField("m21",rtl.double);
    $r.addField("m22",rtl.double);
    $r.addField("m23",rtl.double);
    $r.addField("m31",rtl.double);
    $r.addField("m32",rtl.double);
    $r.addField("m33",rtl.double);
  });
  this.$rtti.$Class("TTMSFNCGraphicsStroke");
  this.$rtti.$Class("TTMSFNCGraphicsFill");
  this.$rtti.$Class("TTMSFNCGraphicsFont");
  rtl.createClass(this,"TTMSFNCGraphicsSaveState",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FSaveDC = 0;
      this.FFont = null;
      this.FStroke = null;
      this.FFill = null;
      this.FCustomSaveDC = 0;
    };
    this.$final = function () {
      this.FFont = undefined;
      this.FStroke = undefined;
      this.FFill = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetStroke = function (Value) {
      this.FStroke.Assign(Value);
    };
    this.SetFill = function (Value) {
      this.FFill.Assign(Value);
    };
    this.SetFont = function (Value) {
      this.FFont.AssignSource(Value);
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FFill = $mod.TTMSFNCGraphicsFill.$create("Create$1",[$mod.TTMSFNCGraphicsFillKind.gfkSolid,16777215,8421504,-1,-1]);
      this.FStroke = $mod.TTMSFNCGraphicsStroke.$create("Create$1",[$mod.TTMSFNCGraphicsStrokeKind.gskSolid,12632256]);
      this.FFont = $mod.TTMSFNCGraphicsFont.$create("Create$2");
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FFill");
      rtl.free(this,"FStroke");
      rtl.free(this,"FFont");
      pas.System.TObject.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
  });
  rtl.createClass(this,"TTMSFNCGraphicsFillGradientItem",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FColor = 0;
      this.FPosition = 0.0;
      this.FOpacity = 0.0;
    };
    this.IsPositionStored = function () {
      var Result = false;
      Result = this.FPosition !== 0.0;
      return Result;
    };
    this.SetColor = function (Value) {
      rtl.rc(Value,-9007199254740991,9007199254740991);
      if (this.FColor !== Value) {
        this.FColor = rtl.rc(Value,-9007199254740991,9007199254740991);
        this.UpdateGradient();
      };
    };
    this.SetPosition = function (Value) {
      if (this.FPosition !== Value) {
        this.FPosition = Value;
        this.UpdateGradient();
      };
    };
    this.IsOpacityStored = function () {
      var Result = false;
      Result = this.FOpacity !== 1.0;
      return Result;
    };
    this.SetOpacity = function (Value) {
      if (this.FOpacity !== Value) {
        this.FOpacity = Value;
        this.UpdateGradient();
      };
    };
    this.UpdateGradient = function () {
      if ($mod.TTMSFNCGraphicsFillGradientItems.isPrototypeOf(this.FCollection)) rtl.as(this.FCollection,$mod.TTMSFNCGraphicsFillGradientItems).UpdateGradient();
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      this.FColor = 16777215;
      this.FPosition = 0.0;
      this.FOpacity = 1.0;
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCGraphicsFillGradientItem.isPrototypeOf(Source)) {
        this.FColor = rtl.rc(rtl.as(Source,$mod.TTMSFNCGraphicsFillGradientItem).FColor,-9007199254740991,9007199254740991);
        this.FOpacity = rtl.as(Source,$mod.TTMSFNCGraphicsFillGradientItem).FOpacity;
        this.FPosition = rtl.as(Source,$mod.TTMSFNCGraphicsFillGradientItem).FPosition;
      } else pas.Classes.TPersistent.Assign.apply(this,arguments);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("Opacity",14,rtl.double,"FOpacity","SetOpacity",{stored: "IsOpacityStored"});
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor",{Default: 16777215});
    $r.addProperty("Position",14,rtl.double,"FPosition","SetPosition",{stored: "IsPositionStored"});
  });
  this.$rtti.$Class("TTMSFNCCustomGraphicsFill");
  rtl.createClass(this,"TTMSFNCGraphicsFillGradientItems",pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection,function () {
    this.$init = function () {
      pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection.$init.call(this);
      this.FOwner$1 = null;
    };
    this.$final = function () {
      this.FOwner$1 = undefined;
      pas["WEBLib.TMSFNCTypes"].TTMSFNCOwnedCollection.$final.call(this);
    };
    this.GetItemEx = function (Index) {
      rtl.rc(Index,-2147483648,2147483647);
      var Result = null;
      Result = this.GetItem(Index);
      return Result;
    };
    this.SetItemEx = function (Index, Value) {
      rtl.rc(Index,-2147483648,2147483647);
      pas.Classes.TCollection.SetItem.call(this,Index,Value);
    };
    this.UpdateGradient = function () {
      if (this.FOwner$1 != null) this.FOwner$1.Changed();
    };
    this.GetGradientClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCGraphicsFillGradientItem;
      return Result;
    };
    this.Create$3 = function (AOwner) {
      pas.Classes.TOwnedCollection.Create$2.call(this,AOwner,this.GetGradientClass());
      this.FOwner$1 = AOwner;
      return this;
    };
    this.Add$1 = function () {
      var Result = null;
      Result = pas.Classes.TCollection.Add.call(this);
      return Result;
    };
    this.Insert$1 = function (index) {
      rtl.rc(index,-2147483648,2147483647);
      var Result = null;
      Result = pas.Classes.TCollection.Insert.call(this,index);
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$3",2,[["AOwner",$mod.$rtti["TTMSFNCCustomGraphicsFill"]]]);
  });
  rtl.createClass(this,"TTMSFNCCustomGraphicsFill",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FUpdateCount = 0;
      this.FOnChanged = null;
      this.FOrientation = 0;
      this.FKind = 0;
      this.FDefaultKind = 0;
      this.FColor = 0;
      this.FDefaultColor = 0;
      this.FColorTo = 0;
      this.FColorMirror = 0;
      this.FColorMirrorTo = 0;
      this.FDefaultColorTo = 0;
      this.FDefaultColorMirror = 0;
      this.FDefaultColorMirrorTo = 0;
      this.FOpacity = 0.0;
      this.FTexture = null;
      this.FTextureMode = 0;
      this.FGradientMode = 0;
      this.FGradientItems = null;
      this.FGradientType = 0;
      this.FGradientAngle = 0.0;
      this.FGradientCenterPoint = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      this.FGradientCenterColor = 0;
      this.FGradientMatrix = $mod.TTMSFNCGraphicsMatrix.$new();
    };
    this.$final = function () {
      this.FOnChanged = undefined;
      this.FTexture = undefined;
      this.FGradientItems = undefined;
      this.FGradientCenterPoint = undefined;
      this.FGradientMatrix = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetKind = function (Value) {
      rtl.rc(Value,0,3);
      if (this.FKind !== Value) {
        this.FKind = rtl.rc(Value,0,3);
        this.Changed();
      };
    };
    this.SetOrientation = function (Value) {
      rtl.rc(Value,0,2);
      if (this.FOrientation !== Value) {
        this.FOrientation = rtl.rc(Value,0,2);
        this.Changed();
      };
    };
    this.SetColor = function (Value) {
      rtl.rc(Value,-9007199254740991,9007199254740991);
      if (this.FColor !== Value) {
        this.FColor = rtl.rc(Value,-9007199254740991,9007199254740991);
        if (this.FColor === -1) {
          this.FColor = -1}
         else if (this.FColor === 536870912) this.FColor = 15790320;
        this.Changed();
      };
    };
    this.SetColorTo = function (Value) {
      rtl.rc(Value,-9007199254740991,9007199254740991);
      if (this.FColorTo !== Value) {
        this.FColorTo = rtl.rc(Value,-9007199254740991,9007199254740991);
        if (this.FColorTo === -1) {
          this.FColorTo = -1}
         else if (this.FColorTo === 536870912) this.FColorTo = 15790320;
        this.Changed();
      };
    };
    this.SetColorMirror = function (Value) {
      rtl.rc(Value,-9007199254740991,9007199254740991);
      if (this.FColorMirror !== Value) {
        this.FColorMirror = rtl.rc(Value,-9007199254740991,9007199254740991);
        if (this.FColorMirror === -1) {
          this.FColorMirror = -1}
         else if (this.FColorMirror === 536870912) this.FColorMirror = 15790320;
        this.Changed();
      };
    };
    this.SetColorMirrorTo = function (Value) {
      rtl.rc(Value,-9007199254740991,9007199254740991);
      if (this.FColorMirrorTo !== Value) {
        this.FColorMirrorTo = rtl.rc(Value,-9007199254740991,9007199254740991);
        if (this.FColorMirrorTo === -1) {
          this.FColorMirrorTo = -1}
         else if (this.FColorMirrorTo === 536870912) this.FColorMirrorTo = 15790320;
        this.Changed();
      };
    };
    this.SetOpacity = function (Value) {
      if (this.FOpacity !== Value) {
        this.FOpacity = Value;
        this.Changed();
      };
    };
    this.IsOpacityStored = function () {
      var Result = false;
      Result = this.FOpacity !== 1;
      return Result;
    };
    this.SetTexture = function (Value) {
      if (this.FTexture !== Value) {
        this.FTexture.Assign(Value);
        this.Changed();
      };
    };
    this.SetTextureMode = function (Value) {
      rtl.rc(Value,0,4);
      if (this.FTextureMode !== Value) {
        this.FTextureMode = rtl.rc(Value,0,4);
        this.Changed();
      };
    };
    this.SetGradientItems = function (Value) {
      this.FGradientItems.Assign(Value);
    };
    this.SetGradientMode = function (Value) {
      rtl.rc(Value,0,1);
      if (this.FGradientMode !== Value) {
        this.FGradientMode = rtl.rc(Value,0,1);
        this.Changed();
      };
    };
    this.SetGradientType = function (Value) {
      rtl.rc(Value,0,1);
      if (this.FGradientType !== Value) {
        this.FGradientType = rtl.rc(Value,0,1);
        this.Changed();
      };
    };
    this.IsGradientAngleStored = function () {
      var Result = false;
      Result = this.FGradientAngle !== 0;
      return Result;
    };
    this.SetGradientAngle = function (Value) {
      if (this.FGradientAngle !== Value) {
        this.FGradientAngle = Value;
        this.Changed();
      };
    };
    this.SetGradientCenterPoint = function (Value) {
      this.FGradientCenterPoint.$assign(Value);
      this.Changed();
    };
    this.SetGradientCenterColor = function (Value) {
      rtl.rc(Value,-9007199254740991,9007199254740991);
      if (this.FGradientCenterColor !== Value) {
        this.FGradientCenterColor = rtl.rc(Value,-9007199254740991,9007199254740991);
        this.Changed();
      };
    };
    this.IsColorStored = function () {
      var Result = false;
      Result = this.FColor !== this.FDefaultColor;
      return Result;
    };
    this.IsKindStored = function () {
      var Result = false;
      Result = this.FKind !== this.FDefaultKind;
      return Result;
    };
    this.IsColorMirrorStored = function () {
      var Result = false;
      Result = this.FColorMirror !== this.FDefaultColorMirror;
      return Result;
    };
    this.IsColorMirrorToStored = function () {
      var Result = false;
      Result = this.FColorMirrorTo !== this.FDefaultColorMirrorTo;
      return Result;
    };
    this.IsColorToStored = function () {
      var Result = false;
      Result = this.FColorTo !== this.FDefaultColorTo;
      return Result;
    };
    this.Changed = function () {
      if ((this.FOnChanged != null) && (this.FUpdateCount === 0)) this.FOnChanged(this);
    };
    this.TextureChanged = function (Sender) {
      this.Changed();
    };
    this.Create$1 = function (AKind, AColor, AColorTo, AColorMirror, AColorMirrorTo) {
      rtl.rc(AKind,0,3);
      rtl.rc(AColor,-9007199254740991,9007199254740991);
      rtl.rc(AColorTo,-9007199254740991,9007199254740991);
      rtl.rc(AColorMirror,-9007199254740991,9007199254740991);
      rtl.rc(AColorMirrorTo,-9007199254740991,9007199254740991);
      this.FGradientItems = $mod.TTMSFNCGraphicsFillGradientItems.$create("Create$3",[this]);
      this.FKind = rtl.rc(AKind,0,3);
      this.FDefaultKind = rtl.rc(AKind,0,3);
      this.FGradientMatrix.$assign($mod.MatrixIdentity());
      this.FGradientCenterColor = -1;
      this.FGradientMode = rtl.rc($mod.TTMSFNCGraphicsFillGradientMode.gfgmDefault,0,1);
      this.FGradientAngle = 0.0;
      this.FGradientCenterPoint.$assign(pas["WEBLib.TMSFNCTypes"].PointF(0,0));
      this.FGradientType = rtl.rc($mod.TTMSFNCGraphicsFillGradientType.gfgtLinear,0,1);
      this.FColor = rtl.rc(AColor,-9007199254740991,9007199254740991);
      this.FDefaultColor = rtl.rc(AColor,-9007199254740991,9007199254740991);
      this.FOpacity = 1;
      this.FOrientation = rtl.rc($mod.TTMSFNCGraphicsFillOrientation.gfoVertical,0,2);
      this.FColorTo = rtl.rc(AColorTo,-9007199254740991,9007199254740991);
      this.FColorMirror = rtl.rc(AColorMirror,-9007199254740991,9007199254740991);
      this.FColorMirrorTo = rtl.rc(AColorMirrorTo,-9007199254740991,9007199254740991);
      this.FDefaultColorTo = rtl.rc(AColorTo,-9007199254740991,9007199254740991);
      this.FDefaultColorMirror = rtl.rc(AColorMirror,-9007199254740991,9007199254740991);
      this.FDefaultColorMirrorTo = rtl.rc(AColorMirrorTo,-9007199254740991,9007199254740991);
      this.FTextureMode = rtl.rc($mod.TTMSFNCGraphicsTextureMode.gtmStretch,0,4);
      this.FTexture = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
      this.FTexture.FOnChange = rtl.createCallback(this,"TextureChanged");
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FTexture");
      rtl.free(this,"FGradientItems");
      pas.System.TObject.Destroy.call(this);
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCCustomGraphicsFill.isPrototypeOf(Source)) {
        this.FColor = rtl.rc(rtl.as(Source,$mod.TTMSFNCCustomGraphicsFill).FColor,-9007199254740991,9007199254740991);
        this.FColorTo = rtl.rc(rtl.as(Source,$mod.TTMSFNCCustomGraphicsFill).FColorTo,-9007199254740991,9007199254740991);
        this.FColorMirror = rtl.rc(rtl.as(Source,$mod.TTMSFNCCustomGraphicsFill).FColorMirror,-9007199254740991,9007199254740991);
        this.FColorMirrorTo = rtl.rc(rtl.as(Source,$mod.TTMSFNCCustomGraphicsFill).FColorMirrorTo,-9007199254740991,9007199254740991);
        this.FKind = rtl.rc(rtl.as(Source,$mod.TTMSFNCCustomGraphicsFill).FKind,0,3);
        this.FOrientation = rtl.rc(rtl.as(Source,$mod.TTMSFNCCustomGraphicsFill).FOrientation,0,2);
        this.FOpacity = rtl.as(Source,$mod.TTMSFNCCustomGraphicsFill).FOpacity;
        this.FTexture.Assign(rtl.as(Source,$mod.TTMSFNCCustomGraphicsFill).FTexture);
        this.FTextureMode = rtl.rc(rtl.as(Source,$mod.TTMSFNCCustomGraphicsFill).FTextureMode,0,4);
        this.FGradientMode = rtl.rc(rtl.as(Source,$mod.TTMSFNCCustomGraphicsFill).FGradientMode,0,1);
        this.FGradientAngle = rtl.as(Source,$mod.TTMSFNCCustomGraphicsFill).FGradientAngle;
        this.FGradientCenterPoint.$assign(rtl.as(Source,$mod.TTMSFNCCustomGraphicsFill).FGradientCenterPoint);
        this.FGradientItems.Assign(rtl.as(Source,$mod.TTMSFNCCustomGraphicsFill).FGradientItems);
        this.FGradientType = rtl.rc(rtl.as(Source,$mod.TTMSFNCCustomGraphicsFill).FGradientType,0,1);
        this.FGradientCenterColor = rtl.rc(rtl.as(Source,$mod.TTMSFNCCustomGraphicsFill).FGradientCenterColor,-9007199254740991,9007199254740991);
      } else if ($mod.TTMSFNCCustomGraphicsStroke.isPrototypeOf(Source)) {
        this.FColor = rtl.rc(rtl.as(Source,$mod.TTMSFNCCustomGraphicsStroke).FColor,-9007199254740991,9007199254740991);
        this.FColorTo = -1;
        this.FColorMirror = -1;
        this.FColorMirrorTo = -1;
        this.FKind = rtl.rc($mod.TTMSFNCGraphicsFillKind.gfkSolid,0,3);
        this.FOrientation = rtl.rc($mod.TTMSFNCGraphicsFillOrientation.gfoVertical,0,2);
        this.FOpacity = 1;
      };
      this.Changed();
    };
    this.BeginUpdate = function () {
      this.FUpdateCount += 1;
    };
    this.EndUpdate = function () {
      this.FUpdateCount -= 1;
      this.Changed();
    };
    this.ClearGradientItems = function () {
      this.FGradientItems.Clear();
    };
    this.AddGradientItem = function (AColor, APosition, AOpacity) {
      rtl.rc(AColor,-9007199254740991,9007199254740991);
      var Result = null;
      Result = this.FGradientItems.Add$1();
      Result.SetColor(AColor);
      Result.SetPosition(APosition);
      Result.SetOpacity(AOpacity);
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AKind",$mod.$rtti["TTMSFNCGraphicsFillKind"],2],["AColor",pas["WEBLib.Graphics"].$rtti["TColor"],2],["AColorTo",pas["WEBLib.Graphics"].$rtti["TColor"],2],["AColorMirror",pas["WEBLib.Graphics"].$rtti["TColor"],2],["AColorMirrorTo",pas["WEBLib.Graphics"].$rtti["TColor"],2]]);
  });
  rtl.createClass(this,"TTMSFNCGraphicsFill",this.TTMSFNCCustomGraphicsFill,function () {
    var $r = this.$rtti;
    $r.addProperty("OnChanged",0,pas.Classes.$rtti["TNotifyEvent"],"FOnChanged","FOnChanged");
    $r.addProperty("Kind",14,$mod.$rtti["TTMSFNCGraphicsFillKind"],"FKind","SetKind",{stored: "IsKindStored"});
    $r.addProperty("Orientation",2,$mod.$rtti["TTMSFNCGraphicsFillOrientation"],"FOrientation","SetOrientation",{Default: $mod.TTMSFNCGraphicsFillOrientation.gfoVertical});
    $r.addProperty("Color",14,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor",{stored: "IsColorStored"});
    $r.addProperty("ColorTo",14,pas["WEBLib.Graphics"].$rtti["TColor"],"FColorTo","SetColorTo",{stored: "IsColorToStored"});
    $r.addProperty("ColorMirror",14,pas["WEBLib.Graphics"].$rtti["TColor"],"FColorMirror","SetColorMirror",{stored: "IsColorMirrorStored"});
    $r.addProperty("ColorMirrorTo",14,pas["WEBLib.Graphics"].$rtti["TColor"],"FColorMirrorTo","SetColorMirrorTo",{stored: "IsColorMirrorToStored"});
    $r.addProperty("TextureMode",2,$mod.$rtti["TTMSFNCGraphicsTextureMode"],"FTextureMode","SetTextureMode",{Default: $mod.TTMSFNCGraphicsTextureMode.gtmStretch});
    $r.addProperty("Texture",2,pas["WEBLib.TMSFNCTypes"].$rtti["TTMSFNCBitmap"],"FTexture","SetTexture");
  });
  rtl.createClass(this,"TTMSFNCGraphicsFont",pas["WEBLib.Graphics"].TFont,function () {
    this.$init = function () {
      pas["WEBLib.Graphics"].TFont.$init.call(this);
      this.FUpdateCount = 0;
      this.FOnChanged = null;
    };
    this.$final = function () {
      this.FOnChanged = undefined;
      pas["WEBLib.Graphics"].TFont.$final.call(this);
    };
    this.DoChanged = function (Sender) {
      if ((this.FOnChanged != null) && (this.FUpdateCount === 0)) this.FOnChanged(this);
    };
    this.Create$2 = function () {
      pas["WEBLib.Graphics"].TFont.Create$1.call(this);
      this.SetHeight(-11);
      this.FOnChange = rtl.createCallback(this,"DoChanged");
      return this;
    };
    this.Assign = function (Source) {
      pas["WEBLib.Graphics"].TFont.Assign.call(this,Source);
      this.DoChanged(this);
    };
    this.AssignSource = function (Source) {
      this.Assign(Source);
    };
    this.BeginUpdate = function () {
      this.FUpdateCount += 1;
    };
    this.EndUpdate = function () {
      this.FUpdateCount -= 1;
      this.DoChanged(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$2",2,[]);
  });
  this.TTMSFNCAppearanceGlobalFontType = {"0": "aftNone", aftNone: 0, "1": "aftColor", aftColor: 1, "2": "aftSize", aftSize: 2, "3": "aftName", aftName: 3, "4": "aftScale", aftScale: 4, "5": "aftStyle", aftStyle: 5};
  this.$rtti.$Enum("TTMSFNCAppearanceGlobalFontType",{minvalue: 0, maxvalue: 5, ordtype: 1, enumtype: this.TTMSFNCAppearanceGlobalFontType});
  rtl.createInterface(this,"ITMSFNCAppearanceGlobalFont","{85CF4F6B-3FF9-4CB7-AD6A-7FC477ED5462}",["SetFonts"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("SetFonts",0,[["ASetType",$mod.$rtti["TTMSFNCAppearanceGlobalFontType"]]]);
  });
  rtl.createClass(this,"TTMSFNCAppearanceGlobalFont",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FOwner = null;
      this.FColor = 0;
      this.FSize = 0.0;
      this.FName = "";
      this.FScale = 0.0;
      this.FOldScale = 0.0;
      this.FStyle = {};
    };
    this.$final = function () {
      this.FOwner = undefined;
      this.FStyle = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetColor = function (Value) {
      rtl.rc(Value,-9007199254740991,9007199254740991);
      if (this.FColor !== Value) {
        this.FColor = rtl.rc(Value,-9007199254740991,9007199254740991);
        this.SetFonts($mod.TTMSFNCAppearanceGlobalFontType.aftColor);
      };
    };
    this.SetSize = function (Value) {
      if (this.FSize !== Value) {
        this.FSize = Value;
        this.SetFonts($mod.TTMSFNCAppearanceGlobalFontType.aftSize);
      };
    };
    this.SetName = function (Value) {
      if (this.FName !== Value) {
        this.FName = Value;
        this.SetFonts($mod.TTMSFNCAppearanceGlobalFontType.aftName);
      };
    };
    this.SetScale = function (Value) {
      if (this.FScale !== Value) {
        this.FOldScale = this.FScale;
        this.FScale = Value;
        this.SetFonts($mod.TTMSFNCAppearanceGlobalFontType.aftScale);
      };
    };
    this.SetStyle = function (Value) {
      if (rtl.neSet(this.FStyle,Value)) {
        this.FStyle = rtl.refSet(Value);
        this.SetFonts($mod.TTMSFNCAppearanceGlobalFontType.aftStyle);
      };
    };
    this.SetFonts = function (ASetType) {
      rtl.rc(ASetType,0,5);
      var fi = null;
      try {
        if (pas.SysUtils.Supports$3(this.FOwner,$mod.ITMSFNCAppearanceGlobalFont.$guid,{get: function () {
            return fi;
          }, set: function (v) {
            fi = v;
          }})) fi.SetFonts(ASetType);
      } finally {
        rtl._Release(fi);
      };
    };
    this.Create$1 = function (AOwner) {
      this.FOwner = AOwner;
      this.FColor = -1;
      this.FSize = 0;
      this.FScale = 1;
      this.FName = "";
      return this;
    };
    this.Destroy = function () {
      pas.System.TObject.Destroy.call(this);
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCAppearanceGlobalFont.isPrototypeOf(Source)) {
        this.SetColor(rtl.as(Source,$mod.TTMSFNCAppearanceGlobalFont).FColor);
        this.SetSize(rtl.as(Source,$mod.TTMSFNCAppearanceGlobalFont).FSize);
        this.SetName(rtl.as(Source,$mod.TTMSFNCAppearanceGlobalFont).FName);
        this.SetScale(rtl.as(Source,$mod.TTMSFNCAppearanceGlobalFont).FScale);
        this.SetStyle(rtl.refSet(rtl.as(Source,$mod.TTMSFNCAppearanceGlobalFont).FStyle));
      } else pas.Classes.TPersistent.Assign.apply(this,arguments);
    };
    this.ApplyChange = function (AFont, ASetType) {
      rtl.rc(ASetType,0,5);
      if (AFont != null) {
        var $tmp = ASetType;
        if ($tmp === $mod.TTMSFNCAppearanceGlobalFontType.aftColor) {
          AFont.SetColor(this.FColor)}
         else if ($tmp === $mod.TTMSFNCAppearanceGlobalFontType.aftSize) {
          AFont.SetSize(Math.round(this.FSize))}
         else if ($tmp === $mod.TTMSFNCAppearanceGlobalFontType.aftName) {
          AFont.SetName(this.FName)}
         else if ($tmp === $mod.TTMSFNCAppearanceGlobalFontType.aftScale) {
          AFont.SetHeight(Math.round((AFont.FHeight * this.FScale) / this.FOldScale));
        } else if ($tmp === $mod.TTMSFNCAppearanceGlobalFontType.aftStyle) AFont.SetStyle(rtl.refSet(this.FStyle));
      };
    };
    this.GetOldScale = function () {
      var Result = 0.0;
      Result = this.FOldScale;
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TPersistent"]]]);
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor",{Default: -1});
    $r.addProperty("Size",2,rtl.double,"FSize","SetSize");
    $r.addProperty("Name",2,rtl.string,"FName","SetName");
    $r.addProperty("Scale",2,rtl.double,"FScale","SetScale");
    $r.addProperty("Style",2,pas["WEBLib.Graphics"].$rtti["TFontStyles"],"FStyle","SetStyle");
  });
  rtl.createClass(this,"TTMSFNCCustomGraphicsStroke",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FUpdateCount = 0;
      this.FOnChanged = null;
      this.FKind = 0;
      this.FColor = 0;
      this.FWidth = 0.0;
      this.FOpacity = 0.0;
      this.FDefaultKind = 0;
      this.FDefaultColor = 0;
    };
    this.$final = function () {
      this.FOnChanged = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetKind = function (Value) {
      rtl.rc(Value,0,5);
      if (this.FKind !== Value) {
        this.FKind = rtl.rc(Value,0,5);
        this.Changed();
      };
    };
    this.SetColor = function (Value) {
      rtl.rc(Value,-9007199254740991,9007199254740991);
      if (this.FColor !== Value) {
        this.FColor = rtl.rc(Value,-9007199254740991,9007199254740991);
        if (this.FColor === -1) {
          this.FColor = -1}
         else if (this.FColor === 536870912) this.FColor = 15790320;
        this.Changed();
      };
    };
    this.SetWidth = function (Value) {
      if (this.FWidth !== Value) {
        this.FWidth = Value;
        this.Changed();
      };
    };
    this.SetOpacity = function (Value) {
      if (this.FOpacity !== Value) {
        this.FOpacity = Value;
        this.Changed();
      };
    };
    this.IsOpacityStored = function () {
      var Result = false;
      Result = this.FOpacity !== 1;
      return Result;
    };
    this.IsWidthStored = function () {
      var Result = false;
      Result = this.FWidth !== 1;
      return Result;
    };
    this.IsKindStored = function () {
      var Result = false;
      Result = this.FKind !== this.FDefaultKind;
      return Result;
    };
    this.IsColorStored = function () {
      var Result = false;
      Result = this.FColor !== this.FDefaultColor;
      return Result;
    };
    this.Changed = function () {
      if ((this.FOnChanged != null) && (this.FUpdateCount === 0)) this.FOnChanged(this);
    };
    this.Create$1 = function (AKind, AColor) {
      rtl.rc(AKind,0,5);
      rtl.rc(AColor,-9007199254740991,9007199254740991);
      this.FKind = rtl.rc(AKind,0,5);
      this.FDefaultKind = rtl.rc(AKind,0,5);
      this.FColor = rtl.rc(AColor,-9007199254740991,9007199254740991);
      this.FDefaultColor = rtl.rc(AColor,-9007199254740991,9007199254740991);
      this.FOpacity = 1;
      this.FWidth = 1;
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCCustomGraphicsStroke.isPrototypeOf(Source)) {
        this.FColor = rtl.rc(rtl.as(Source,$mod.TTMSFNCCustomGraphicsStroke).FColor,-9007199254740991,9007199254740991);
        this.FKind = rtl.rc(rtl.as(Source,$mod.TTMSFNCCustomGraphicsStroke).FKind,0,5);
        this.FOpacity = rtl.as(Source,$mod.TTMSFNCCustomGraphicsStroke).FOpacity;
        this.FWidth = rtl.as(Source,$mod.TTMSFNCCustomGraphicsStroke).FWidth;
      } else if ($mod.TTMSFNCCustomGraphicsFill.isPrototypeOf(Source)) {
        this.FColor = rtl.rc(rtl.as(Source,$mod.TTMSFNCCustomGraphicsFill).FColor,-9007199254740991,9007199254740991);
        this.FKind = rtl.rc($mod.TTMSFNCGraphicsStrokeKind.gskSolid,0,5);
        this.FOpacity = 1;
        this.FWidth = 1;
      };
      this.Changed();
    };
    this.BeginUpdate = function () {
      this.FUpdateCount += 1;
    };
    this.EndUpdate = function () {
      this.FUpdateCount -= 1;
      this.Changed();
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AKind",$mod.$rtti["TTMSFNCGraphicsStrokeKind"],2],["AColor",pas["WEBLib.Graphics"].$rtti["TColor"],2]]);
  });
  rtl.createClass(this,"TTMSFNCGraphicsStroke",this.TTMSFNCCustomGraphicsStroke,function () {
    var $r = this.$rtti;
    $r.addProperty("OnChanged",0,pas.Classes.$rtti["TNotifyEvent"],"FOnChanged","FOnChanged");
    $r.addProperty("Kind",14,$mod.$rtti["TTMSFNCGraphicsStrokeKind"],"FKind","SetKind",{stored: "IsKindStored"});
    $r.addProperty("Color",14,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor",{stored: "IsColorStored"});
    $r.addProperty("Width",14,rtl.double,"FWidth","SetWidth",{stored: "IsWidthStored"});
  });
  this.$rtti.$DynArray("TTMSFNCGraphicsPathPolygon",{eltype: pas["WEBLib.TMSFNCTypes"].$rtti["TPointF"]});
  this.TTMSFNCGraphicsPathPointKind = {"0": "gppMoveTo", gppMoveTo: 0, "1": "gppLineTo", gppLineTo: 1, "2": "gppCurveTo", gppCurveTo: 2, "3": "gppClose", gppClose: 3};
  this.$rtti.$Enum("TTMSFNCGraphicsPathPointKind",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TTMSFNCGraphicsPathPointKind});
  this.TTMSFNCGraphicsPathCubicBezier$clone = function (a) {
    var b = [];
    b.length = 4;
    for (var c = 0; c < 4; c++) b[c] = pas["WEBLib.TMSFNCTypes"].TPointF.$clone(a[c]);
    return b;
  };
  this.$rtti.$StaticArray("TTMSFNCGraphicsPathCubicBezier",{dims: [4], eltype: pas["WEBLib.TMSFNCTypes"].$rtti["TPointF"]});
  rtl.recNewT(this,"TTMSFNCGraphicsPathPoint",function () {
    this.Kind = 0;
    this.$new = function () {
      var r = Object.create(this);
      r.Point = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      return r;
    };
    this.$eq = function (b) {
      return (this.Kind === b.Kind) && this.Point.$eq(b.Point);
    };
    this.$assign = function (s) {
      this.Kind = s.Kind;
      this.Point.$assign(s.Point);
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCGraphicsPathPoint",{});
    $r.addField("Kind",$mod.$rtti["TTMSFNCGraphicsPathPointKind"]);
    $r.addField("Point",pas["WEBLib.TMSFNCTypes"].$rtti["TPointF"]);
  });
  this.TTMSFNCGraphicsPathDrawMode = {"0": "pdmPolygon", pdmPolygon: 0, "1": "pdmPolyline", pdmPolyline: 1, "2": "pdmPath", pdmPath: 2};
  this.$rtti.$Enum("TTMSFNCGraphicsPathDrawMode",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TTMSFNCGraphicsPathDrawMode});
  rtl.createClass(this,"TTMSFNCGraphicsPathPoints",pas.Classes.TList,function () {
    this.GetItem = function (Index) {
      rtl.rc(Index,-2147483648,2147483647);
      var Result = $mod.TTMSFNCGraphicsPathPoint.$new();
      Result.$assign(rtl.getObject(this.Get(Index)));
      return Result;
    };
    this.SetItem = function (Index, Value) {
      rtl.rc(Index,-2147483648,2147483647);
      var v = $mod.TTMSFNCGraphicsPathPoint.$new();
      v.$assign(Value);
      this.Put(Index,v);
    };
  });
  rtl.createClass(this,"TTMSFNCGraphicsPath",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FStartPoint = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      this.FClippable = false;
      this.FPoints = null;
    };
    this.$final = function () {
      this.FStartPoint = undefined;
      this.FPoints = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.CalculateBezierCoefficients = function (Bezier, AX, BX, CX, AY, BY, CY) {
      CX.set(3 * (Bezier[1].X - Bezier[0].X));
      CY.set(3 * (Bezier[1].Y - Bezier[0].Y));
      BX.set((3 * (Bezier[2].X - Bezier[1].X)) - CX.get());
      BY.set((3 * (Bezier[2].Y - Bezier[1].Y)) - CY.get());
      AX.set(Bezier[3].X - Bezier[0].X - CX.get() - BX.get());
      AY.set(Bezier[3].Y - Bezier[0].Y - CY.get() - BY.get());
    };
    this.GetCount = function () {
      var Result = 0;
      Result = rtl.rc(this.FPoints.GetCount(),-2147483648,2147483647);
      return Result;
    };
    this.GetPoint = function (AIndex) {
      rtl.rc(AIndex,-2147483648,2147483647);
      var Result = $mod.TTMSFNCGraphicsPathPoint.$new();
      Result.$assign(this.FPoints.GetItem(AIndex));
      return Result;
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FPoints = $mod.TTMSFNCGraphicsPathPoints.$create("Create$1");
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FPoints");
      pas.System.TObject.Destroy.call(this);
    };
    this.Assign = function (Source) {
      var I = 0;
      if ($mod.TTMSFNCGraphicsPath.isPrototypeOf(Source)) {
        this.FPoints.SetCount(Source.GetCount());
        for (var $l = 0, $end = Source.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          this.FPoints.SetItem(I,Source.GetPoint(I));
        };
      } else pas.Classes.TPersistent.Assign.apply(this,arguments);
    };
    this.LastPoint = function () {
      var Result = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      if (this.GetCount() > 0) {
        Result.$assign(this.FPoints.GetItem(this.FPoints.GetCount() - 1).Point)}
       else {
        Result.$assign(pas["WEBLib.TMSFNCTypes"].PointF(0,0));
      };
      return Result;
    };
    this.IsPointVisible = function (P) {
      var Result = false;
      var pt = [];
      pt = rtl.arraySetLength(pt,pas["WEBLib.TMSFNCTypes"].TPointF,0);
      this.FlattenToPolygon({get: function () {
          return pt;
        }, set: function (v) {
          pt = v;
        }},0.25);
      Result = $mod.PointInPoly(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(P),rtl.arrayRef(pt));
      return Result;
    };
    this.IsRectVisible = function (R) {
      var Result = false;
      var pt = [];
      pt = rtl.arraySetLength(pt,pas["WEBLib.TMSFNCTypes"].TPointF,0);
      this.FlattenToPolygon({get: function () {
          return pt;
        }, set: function (v) {
          pt = v;
        }},0.25);
      Result = $mod.PolyInRect(rtl.arrayRef(pt),pas["WEBLib.TMSFNCTypes"].TRectF.$clone(R));
      return Result;
    };
    this.PointOnBezier = function (StartPoint, AX, BX, CX, AY, BY, CY, T) {
      var Result = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      var SquareT = 0.0;
      var CubeT = 0.0;
      SquareT = T * T;
      CubeT = SquareT * T;
      Result.X = (AX * CubeT) + (BX * SquareT) + (CX * T) + StartPoint.X;
      Result.Y = (AY * CubeT) + (BY * SquareT) + (CY * T) + StartPoint.Y;
      return Result;
    };
    this.CreateBezier = function (Bezier, PointCount) {
      rtl.rc(PointCount,-2147483648,2147483647);
      var Result = [];
      var AX = 0.0;
      var BX = 0.0;
      var CX = 0.0;
      var AY = 0.0;
      var BY = 0.0;
      var CY = 0.0;
      var DT = 0.0;
      var T = 0.0;
      var I = 0;
      if (PointCount === 0) return Result;
      DT = 1 / ((1 * PointCount) - 1);
      T = 0;
      Result = rtl.arraySetLength(Result,pas["WEBLib.TMSFNCTypes"].TPointF,PointCount);
      this.CalculateBezierCoefficients(Bezier,{get: function () {
          return AX;
        }, set: function (v) {
          AX = v;
        }},{get: function () {
          return BX;
        }, set: function (v) {
          BX = v;
        }},{get: function () {
          return CX;
        }, set: function (v) {
          CX = v;
        }},{get: function () {
          return AY;
        }, set: function (v) {
          AY = v;
        }},{get: function () {
          return BY;
        }, set: function (v) {
          BY = v;
        }},{get: function () {
          return CY;
        }, set: function (v) {
          CY = v;
        }});
      for (var $l = 0, $end = PointCount - 1; $l <= $end; $l++) {
        I = $l;
        rtl.rcArrR(Result,I).$assign(this.PointOnBezier(Bezier[0],AX,BX,CX,AY,BY,CY,T));
        T = T + DT;
      };
      return Result;
    };
    var SmallAmount = 0.001;
    this.GetBounds = function () {
      var Result = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
      var I = 0;
      var pt = $mod.TTMSFNCGraphicsPathPoint.$new();
      if (this.FPoints.GetCount() < 1) return pas["WEBLib.TMSFNCTypes"].RectF(0,0,0,0);
      Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(0xFFFF,0xFFFF,-0xFFFF,-0xFFFF));
      for (var $l = 0, $end = this.FPoints.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        pt.$assign(this.FPoints.GetItem(I));
        if (pt.Kind === $mod.TTMSFNCGraphicsPathPointKind.gppClose) continue;
        if (pt.Point.X < Result.Left) Result.Left = pt.Point.X;
        if (pt.Point.X > Result.Right) Result.Right = pt.Point.X;
        if (pt.Point.Y < Result.Top) Result.Top = pt.Point.Y;
        if (pt.Point.Y > Result.Bottom) Result.Bottom = pt.Point.Y;
      };
      if (pas.Math.SameValue(Result.Right - Result.Left,0,1E-3)) Result.Right = Result.Left + 1E-3;
      if (pas.Math.SameValue(Result.Bottom - Result.Top,0,1E-3)) Result.Bottom = Result.Top + 1E-3;
      return Result;
    };
    this.IsClippable = function () {
      var Result = false;
      Result = this.FClippable;
      return Result;
    };
    this.MoveTo = function (P) {
      var pt = $mod.TTMSFNCGraphicsPathPoint.$new();
      pt.Kind = rtl.rc($mod.TTMSFNCGraphicsPathPointKind.gppMoveTo,0,3);
      pt.Point.$assign(P);
      this.FPoints.Add($mod.TTMSFNCGraphicsPathPoint.$clone(pt));
      this.FStartPoint.$assign(this.FPoints.GetItem(this.FPoints.GetCount() - 1).Point);
    };
    this.LineTo = function (P) {
      var pt = $mod.TTMSFNCGraphicsPathPoint.$new();
      pt.Kind = rtl.rc($mod.TTMSFNCGraphicsPathPointKind.gppLineTo,0,3);
      pt.Point.$assign(P);
      this.FPoints.Add($mod.TTMSFNCGraphicsPathPoint.$clone(pt));
      if ((P.X === this.FStartPoint.X) && (P.Y === this.FStartPoint.Y)) this.FClippable = true;
    };
    this.CurveTo = function (ControlPoint1, ControlPoint2, EndPoint) {
      var pt = $mod.TTMSFNCGraphicsPathPoint.$new();
      pt.Kind = rtl.rc($mod.TTMSFNCGraphicsPathPointKind.gppCurveTo,0,3);
      pt.Point.$assign(ControlPoint1);
      this.FPoints.Add($mod.TTMSFNCGraphicsPathPoint.$clone(pt));
      pt.Kind = rtl.rc($mod.TTMSFNCGraphicsPathPointKind.gppCurveTo,0,3);
      pt.Point.$assign(ControlPoint2);
      this.FPoints.Add($mod.TTMSFNCGraphicsPathPoint.$clone(pt));
      pt.Kind = rtl.rc($mod.TTMSFNCGraphicsPathPointKind.gppCurveTo,0,3);
      pt.Point.$assign(EndPoint);
      this.FPoints.Add($mod.TTMSFNCGraphicsPathPoint.$clone(pt));
    };
    this.SmoothCurveTo = function (ControlPoint2, EndPoint) {
      var ControlPoint1 = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      if (this.GetCount() > 2) {
        ControlPoint1.X = this.LastPoint().X + (this.LastPoint().X - this.FPoints.GetItem(this.FPoints.GetCount() - 2).Point.X);
        ControlPoint1.Y = this.LastPoint().Y + (this.LastPoint().Y - this.FPoints.GetItem(this.FPoints.GetCount() - 2).Point.Y);
      } else ControlPoint1.$assign(ControlPoint2);
      this.CurveTo(ControlPoint1,ControlPoint2,EndPoint);
    };
    var OneThird = 1 / 3;
    var TwoThirds = 2 / 3;
    this.QuadCurveTo = function (ControlPoint, EndPoint) {
      var LP = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      var CP1 = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      var CP2 = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      LP.$assign(this.LastPoint());
      CP1.X = (0.33333333333333331 * LP.X) + (0.66666666666666663 * ControlPoint.X);
      CP1.Y = (0.33333333333333331 * LP.Y) + (0.66666666666666663 * ControlPoint.Y);
      CP2.X = (0.66666666666666663 * ControlPoint.X) + (0.33333333333333331 * EndPoint.X);
      CP2.Y = (0.66666666666666663 * ControlPoint.Y) + (0.33333333333333331 * EndPoint.Y);
      this.CurveTo(CP1,CP2,EndPoint);
    };
    this.AddPolygon = function (APolygon) {
      var I = 0;
      for (var $l = 0, $end = rtl.length(APolygon) - 1; $l <= $end; $l++) {
        I = $l;
        this.LineTo(rtl.rcArrR(APolygon,I));
      };
    };
    this.ClosePath = function () {
      var pt = $mod.TTMSFNCGraphicsPathPoint.$new();
      pt.Kind = rtl.rc($mod.TTMSFNCGraphicsPathPointKind.gppClose,0,3);
      pt.Point.$assign(this.FStartPoint);
      this.FPoints.Add($mod.TTMSFNCGraphicsPathPoint.$clone(pt));
      this.FClippable = true;
    };
    this.AddLine = function (StartPoint, EndPoint) {
      if (this.GetCount() === 0) {
        this.MoveTo(StartPoint)}
       else this.LineTo(StartPoint);
      this.LineTo(EndPoint);
    };
    this.AddEllipse = function (ARect) {
      var CX = 0.0;
      var CY = 0.0;
      var PX = 0.0;
      var PY = 0.0;
      var c = 0.0;
      c = 0.5522847498;
      CX = (ARect.Left + ARect.Right) / 2;
      CY = (ARect.Top + ARect.Bottom) / 2;
      PX = c * ((ARect.Right - ARect.Left) / 2);
      PY = c * ((ARect.Bottom - ARect.Top) / 2);
      this.MoveTo(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Left,CY));
      this.CurveTo(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Left,CY - PY),pas["WEBLib.TMSFNCTypes"].PointF(CX - PX,ARect.Top),pas["WEBLib.TMSFNCTypes"].PointF(CX,ARect.Top));
      this.CurveTo(pas["WEBLib.TMSFNCTypes"].PointF(CX + PX,ARect.Top),pas["WEBLib.TMSFNCTypes"].PointF(ARect.Right,CY - PY),pas["WEBLib.TMSFNCTypes"].PointF(ARect.Right,CY));
      this.CurveTo(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Right,CY + PY),pas["WEBLib.TMSFNCTypes"].PointF(CX + PX,ARect.Bottom),pas["WEBLib.TMSFNCTypes"].PointF(CX,ARect.Bottom));
      this.CurveTo(pas["WEBLib.TMSFNCTypes"].PointF(CX - PX,ARect.Bottom),pas["WEBLib.TMSFNCTypes"].PointF(ARect.Left,CY + PY),pas["WEBLib.TMSFNCTypes"].PointF(ARect.Left,CY));
      this.FClippable = true;
    };
    this.AddRectangle = function (ARect, ARoundingX, ARoundingY) {
      var c = {};
      if ((ARoundingX === 0.0) && (ARoundingY === 0.0)) {
        this.MoveTo(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Left,ARect.Top));
        this.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Right,ARect.Top));
        this.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Right,ARect.Bottom));
        this.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Left,ARect.Bottom));
      } else {
        c = rtl.createSet($mod.TTMSFNCGraphicsCorner.gcTopLeft,$mod.TTMSFNCGraphicsCorner.gcTopRight,$mod.TTMSFNCGraphicsCorner.gcBottomLeft,$mod.TTMSFNCGraphicsCorner.gcBottomRight);
        if ($mod.TTMSFNCGraphicsCorner.gcBottomLeft in c) {
          this.MoveTo(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Left + ARoundingX,ARect.Bottom));
          this.AddArc(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Left + ARoundingX,ARect.Bottom - ARoundingY),pas["WEBLib.TMSFNCTypes"].PointF(ARoundingX,ARoundingY),-270,90);
          this.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Left,ARect.Bottom - ARoundingY));
        } else {
          this.MoveTo(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Left,ARect.Bottom));
        };
        if ($mod.TTMSFNCGraphicsCorner.gcTopLeft in c) {
          this.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Left,ARect.Top + ARoundingY));
          this.AddArc(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Left + ARoundingX,ARect.Top + ARoundingY),pas["WEBLib.TMSFNCTypes"].PointF(ARoundingX,ARoundingY),-180,90);
          this.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Left + ARoundingX,ARect.Top));
        } else this.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Left,ARect.Top));
        if ($mod.TTMSFNCGraphicsCorner.gcTopRight in c) {
          this.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Right - ARoundingX,ARect.Top));
          this.AddArc(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Right - ARoundingX,ARect.Top + ARoundingY),pas["WEBLib.TMSFNCTypes"].PointF(ARoundingX,ARoundingY),-90,90);
          this.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Right,ARect.Top + ARoundingY));
        } else this.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Right,ARect.Top));
        if ($mod.TTMSFNCGraphicsCorner.gcBottomRight in c) {
          this.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Right,ARect.Bottom - ARoundingY));
          this.AddArc(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Right - ARoundingX,ARect.Bottom - ARoundingY),pas["WEBLib.TMSFNCTypes"].PointF(ARoundingX,ARoundingY),0,90);
          this.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Right - ARoundingX,ARect.Bottom));
        } else this.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Right,ARect.Bottom));
        if ($mod.TTMSFNCGraphicsCorner.gcBottomLeft in c) {
          this.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Left + ARoundingX,ARect.Bottom))}
         else this.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Left,ARect.Bottom));
      };
      this.ClosePath();
      this.FClippable = true;
    };
    var BezierArcAngleEpsilon = 0.01;
    var MinSweepAngle = 1E-10;
    this.AddArc = function (Center, Radius, StartAngle, SweepAngle) {
      var UseMoveTo = false;
      var I = 0;
      var F = 0.0;
      var TotalSweep = 0.0;
      var LocalSweep = 0.0;
      var PrevSweep = 0.0;
      var Done = false;
      StartAngle = pas.Math.DegToRad(StartAngle);
      SweepAngle = pas.Math.DegToRad(SweepAngle);
      I = rtl.rc(pas.System.Trunc(StartAngle / (2 * Math.PI)),-2147483648,2147483647);
      F = StartAngle - (I * 2 * Math.PI);
      StartAngle = F;
      if (SweepAngle >= (2 * Math.PI)) SweepAngle = 2 * Math.PI;
      if (SweepAngle <= (-2 * Math.PI)) SweepAngle = -2 * Math.PI;
      if (Math.abs(SweepAngle) < 1E-10) return;
      TotalSweep = 0;
      Done = false;
      UseMoveTo = true;
      do {
        if (SweepAngle < 0) {
          PrevSweep = TotalSweep;
          LocalSweep = -Math.PI / 2;
          TotalSweep = TotalSweep - (Math.PI / 2);
          if (TotalSweep <= (SweepAngle + 0.01)) {
            LocalSweep = SweepAngle - PrevSweep;
            Done = true;
          };
        } else {
          PrevSweep = TotalSweep;
          LocalSweep = Math.PI / 2;
          TotalSweep = TotalSweep + (Math.PI / 2);
          if (TotalSweep >= (SweepAngle - 0.01)) {
            LocalSweep = SweepAngle - PrevSweep;
            Done = true;
          };
        };
        $impl.DrawArcWithBezier(this,Center.X,Center.Y,Radius.X,Radius.Y,StartAngle,LocalSweep,UseMoveTo);
        UseMoveTo = false;
        StartAngle = StartAngle + LocalSweep;
      } while (!Done);
    };
    this.AddPath = function (APath) {
      var I = 0;
      this.FPoints.SetCapacity(this.FPoints.GetCount() + APath.GetCount());
      for (var $l = 0, $end = APath.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        this.FPoints.Add($mod.TTMSFNCGraphicsPathPoint.$clone(APath.GetPoint(I)));
      };
    };
    this.ApplyMatrix = function (AMatrix) {
      var I = 0;
      var pt = $mod.TTMSFNCGraphicsPathPoint.$new();
      if (this.FPoints.GetCount() > 0) {
        for (var $l = 0, $end = this.FPoints.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          if (this.FPoints.GetItem(I).Kind in rtl.createSet($mod.TTMSFNCGraphicsPathPointKind.gppMoveTo,$mod.TTMSFNCGraphicsPathPointKind.gppLineTo,$mod.TTMSFNCGraphicsPathPointKind.gppCurveTo)) {
            pt.$assign(this.FPoints.GetItem(I));
            pt.Point.$assign($mod.MatrixMultiply$1(pt.Point,AMatrix));
            this.FPoints.SetItem(I,pt);
          };
        };
      };
    };
    this.Clear = function () {
      this.FPoints.Clear();
    };
    this.Flatten = function (Flatness) {
      var J = 0;
      var I = 0;
      var BPts = [];
      var B = rtl.arraySetLength(null,pas["WEBLib.TMSFNCTypes"].TPointF,4);
      var F = 0.0;
      var Len = 0.0;
      var SegCount = 0;
      var OldPathData = null;
      var CurPoint = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      var x = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      if (this.FPoints.GetCount() > 0) {
        F = Math.max(Flatness,0.05);
        OldPathData = $mod.TTMSFNCGraphicsPathPoints.$create("Create$1");
        try {
          OldPathData.SetCount(this.FPoints.GetCount());
          for (var $l = 0, $end = this.FPoints.GetCount() - 1; $l <= $end; $l++) {
            J = $l;
            OldPathData.Add($mod.TTMSFNCGraphicsPathPoint.$clone(this.FPoints.GetItem(J)));
          };
          this.FPoints.Clear();
          J = 0;
          while (J < OldPathData.GetCount()) {
            var $tmp = OldPathData.GetItem(J).Kind;
            if ($tmp === $mod.TTMSFNCGraphicsPathPointKind.gppMoveTo) {
              this.MoveTo(OldPathData.GetItem(J).Point);
              CurPoint.$assign(OldPathData.GetItem(J).Point);
            } else if ($tmp === $mod.TTMSFNCGraphicsPathPointKind.gppLineTo) {
              this.LineTo(OldPathData.GetItem(J).Point);
              CurPoint.$assign(OldPathData.GetItem(J).Point);
            } else if ($tmp === $mod.TTMSFNCGraphicsPathPointKind.gppCurveTo) {
              B[0].$assign(CurPoint);
              B[1].$assign(OldPathData.GetItem(J).Point);
              J += 1;
              B[2].$assign(OldPathData.GetItem(J).Point);
              J += 1;
              B[3].$assign(OldPathData.GetItem(J).Point);
              BPts = this.CreateBezier(B,6);
              Len = 0;
              for (var $l1 = 0, $end1 = rtl.length(BPts) - 1 - 1; $l1 <= $end1; $l1++) {
                I = $l1;
                x.X = rtl.rcArrR(BPts,I).X - rtl.rcArrR(BPts,I + 1).X;
                x.Y = rtl.rcArrR(BPts,I).Y - rtl.rcArrR(BPts,I + 1).Y;
                Len = Len + pas["WEBLib.TMSFNCTypes"].GetPointLength(x);
              };
              SegCount = rtl.rc(Math.round(Len / F),-2147483648,2147483647);
              if (SegCount < 2) {
                this.LineTo(B[3])}
               else {
                BPts = this.CreateBezier(B,SegCount);
                for (var $l2 = 0, $end2 = rtl.length(BPts) - 1; $l2 <= $end2; $l2++) {
                  I = $l2;
                  this.LineTo(rtl.rcArrR(BPts,I));
                };
                CurPoint.$assign(OldPathData.GetItem(J).Point);
              };
            } else if ($tmp === $mod.TTMSFNCGraphicsPathPointKind.gppClose) this.ClosePath();
            J += 1;
          };
        } finally {
          OldPathData = rtl.freeLoc(OldPathData);
        };
      };
    };
    this.FlattenToPolygon = function (Polygon, Flatness) {
      var $Self = this;
      function AddPoint(P) {
        if ((rtl.length(Polygon.get()) > 0) && pas.Math.SameValue(P.X,rtl.rcArrR(Polygon.get(),rtl.length(Polygon.get()) - 1).X,1E-3) && pas.Math.SameValue(P.Y,rtl.rcArrR(Polygon.get(),rtl.length(Polygon.get()) - 1).Y,1E-3)) return;
        Polygon.set(rtl.arraySetLength(Polygon.get(),pas["WEBLib.TMSFNCTypes"].TPointF,rtl.length(Polygon.get()) + 1));
        rtl.rcArrR(Polygon.get(),rtl.length(Polygon.get()) - 1).$assign(P);
      };
      var J = 0;
      var I = 0;
      var BPts = [];
      var B = rtl.arraySetLength(null,pas["WEBLib.TMSFNCTypes"].TPointF,4);
      var SP = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      var CurPoint = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      var X = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
      var F = 0.0;
      var Len = 0.0;
      var SegCount = 0;
      Polygon.set(rtl.arraySetLength(Polygon.get(),pas["WEBLib.TMSFNCTypes"].TPointF,0));
      if (this.FPoints.GetCount() > 0) {
        F = Math.max(Flatness,0.05);
        J = 0;
        while (J < this.FPoints.GetCount()) {
          var $tmp = this.FPoints.GetItem(J).Kind;
          if ($tmp === $mod.TTMSFNCGraphicsPathPointKind.gppMoveTo) {
            AddPoint(this.FPoints.GetItem(J).Point);
            CurPoint.$assign(this.FPoints.GetItem(J).Point);
            SP.$assign(CurPoint);
          } else if ($tmp === $mod.TTMSFNCGraphicsPathPointKind.gppLineTo) {
            AddPoint(this.FPoints.GetItem(J).Point);
            CurPoint.$assign(this.FPoints.GetItem(J).Point);
          } else if ($tmp === $mod.TTMSFNCGraphicsPathPointKind.gppCurveTo) {
            B[0].$assign(CurPoint);
            B[1].$assign(this.FPoints.GetItem(J).Point);
            J += 1;
            B[2].$assign(this.FPoints.GetItem(J).Point);
            J += 1;
            B[3].$assign(this.FPoints.GetItem(J).Point);
            BPts = this.CreateBezier(B,6);
            Len = 0;
            for (var $l = 0, $end = rtl.length(BPts) - 1 - 1; $l <= $end; $l++) {
              I = $l;
              X.X = rtl.rcArrR(BPts,I).X - rtl.rcArrR(BPts,I + 1).X;
              X.Y = rtl.rcArrR(BPts,I).Y - rtl.rcArrR(BPts,I + 1).Y;
              Len = Len + pas["WEBLib.TMSFNCTypes"].GetPointLength(X);
            };
            SegCount = rtl.rc(Math.round(Len / F),-2147483648,2147483647);
            if (SegCount < 2) {
              AddPoint(B[0]);
              AddPoint(B[3]);
            } else {
              BPts = this.CreateBezier(B,SegCount);
              for (var $l1 = 0, $end1 = rtl.length(BPts) - 1; $l1 <= $end1; $l1++) {
                I = $l1;
                AddPoint(rtl.rcArrR(BPts,I));
              };
            };
            CurPoint.$assign(this.FPoints.GetItem(J).Point);
          } else if ($tmp === $mod.TTMSFNCGraphicsPathPointKind.gppClose) {
            AddPoint(SP);
          };
          J += 1;
        };
      };
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
  });
  rtl.createClass(this,"TTMSFNCGraphicsColorObject",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FColor = 0;
    };
    this.Create$1 = function (AColor) {
      rtl.rc(AColor,-9007199254740991,9007199254740991);
      this.FColor = rtl.rc(AColor,-9007199254740991,9007199254740991);
      return this;
    };
  });
  this.TTMSFNCGraphicsModifyRectMode = {"0": "gcrmNone", gcrmNone: 0, "1": "gcrmExpandAll", gcrmExpandAll: 1, "2": "gcrmShrinkAll", gcrmShrinkAll: 2, "3": "gcrmShiftRightAndExpandHeight", gcrmShiftRightAndExpandHeight: 3, "4": "gcrmShiftDownAndExpandWidth", gcrmShiftDownAndExpandWidth: 4, "5": "gcrmShiftRightAndShrinkHeight", gcrmShiftRightAndShrinkHeight: 5, "6": "gcrmShiftRightDown", gcrmShiftRightDown: 6, "7": "gcrmShiftRightUp", gcrmShiftRightUp: 7, "8": "gcrmShiftLeftUp", gcrmShiftLeftUp: 8, "9": "gcrmShiftLeftDown", gcrmShiftLeftDown: 9, "10": "gcrmShiftUpAndExpandWidth", gcrmShiftUpAndExpandWidth: 10, "11": "gcrmShiftLeftAndExpandHeight", gcrmShiftLeftAndExpandHeight: 11};
  this.$rtti.$Enum("TTMSFNCGraphicsModifyRectMode",{minvalue: 0, maxvalue: 11, ordtype: 1, enumtype: this.TTMSFNCGraphicsModifyRectMode});
  this.TTMSFNCGraphicsModifyPointMode = {"0": "gcpmNone", gcpmNone: 0, "1": "gcpmLeftUp", gcpmLeftUp: 1, "2": "gcpmRightDown", gcpmRightDown: 2, "3": "gcpmLeftDown", gcpmLeftDown: 3, "4": "gcpmRightUp", gcpmRightUp: 4};
  this.$rtti.$Enum("TTMSFNCGraphicsModifyPointMode",{minvalue: 0, maxvalue: 4, ordtype: 1, enumtype: this.TTMSFNCGraphicsModifyPointMode});
  this.TTMSFNCGraphicsExpanderState = {"0": "gesCollapsed", gesCollapsed: 0, "1": "gesExpanded", gesExpanded: 1};
  this.$rtti.$Enum("TTMSFNCGraphicsExpanderState",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TTMSFNCGraphicsExpanderState});
  this.TTMSFNCGraphicsCompactState = {"0": "gcsCollapsed", gcsCollapsed: 0, "1": "gcsExpanded", gcsExpanded: 1};
  this.$rtti.$Enum("TTMSFNCGraphicsCompactState",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TTMSFNCGraphicsCompactState});
  this.TTMSFNCGraphicsCorner = {"0": "gcTopLeft", gcTopLeft: 0, "1": "gcTopRight", gcTopRight: 1, "2": "gcBottomLeft", gcBottomLeft: 2, "3": "gcBottomRight", gcBottomRight: 3};
  this.$rtti.$Enum("TTMSFNCGraphicsCorner",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TTMSFNCGraphicsCorner});
  this.$rtti.$Set("TTMSFNCGraphicsCorners",{comptype: this.$rtti["TTMSFNCGraphicsCorner"]});
  this.ModifyRect = function (ARect, ARectMode) {
    var Result = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
    Result.$assign(ARect);
    var $tmp = ARectMode;
    if ($tmp === $mod.TTMSFNCGraphicsModifyRectMode.gcrmExpandAll) {
      Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(pas.System.Int(Result.Left) - 0.5,pas.System.Int(Result.Top) - 0.5,pas.System.Int(Result.Right) + 0.5,pas.System.Int(Result.Bottom) + 0.5))}
     else if ($tmp === $mod.TTMSFNCGraphicsModifyRectMode.gcrmShrinkAll) {
      Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(pas.System.Int(Result.Left) + 0.5,pas.System.Int(Result.Top) + 0.5,pas.System.Int(Result.Right) - 0.5,pas.System.Int(Result.Bottom) - 0.5))}
     else if ($tmp === $mod.TTMSFNCGraphicsModifyRectMode.gcrmShiftRightAndExpandHeight) {
      Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(pas.System.Int(Result.Left) + 0.5,pas.System.Int(Result.Top) - 0.5,pas.System.Int(Result.Right) + 0.5,pas.System.Int(Result.Bottom) + 0.5))}
     else if ($tmp === $mod.TTMSFNCGraphicsModifyRectMode.gcrmShiftRightDown) {
      Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(pas.System.Int(Result.Left) + 0.5,pas.System.Int(Result.Top) + 0.5,pas.System.Int(Result.Right) + 0.5,pas.System.Int(Result.Bottom) + 0.5))}
     else if ($tmp === $mod.TTMSFNCGraphicsModifyRectMode.gcrmShiftRightAndShrinkHeight) {
      Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(pas.System.Int(Result.Left) + 0.5,pas.System.Int(Result.Top) + 0.5,pas.System.Int(Result.Right) + 0.5,pas.System.Int(Result.Bottom) - 0.5))}
     else if ($tmp === $mod.TTMSFNCGraphicsModifyRectMode.gcrmShiftDownAndExpandWidth) {
      Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(pas.System.Int(Result.Left) - 0.5,pas.System.Int(Result.Top) + 0.5,pas.System.Int(Result.Right) + 0.5,pas.System.Int(Result.Bottom) + 0.5))}
     else if ($tmp === $mod.TTMSFNCGraphicsModifyRectMode.gcrmShiftUpAndExpandWidth) {
      Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(pas.System.Int(Result.Left) - 0.5,pas.System.Int(Result.Top) - 0.5,pas.System.Int(Result.Right) + 0.5,pas.System.Int(Result.Bottom) - 0.5))}
     else if ($tmp === $mod.TTMSFNCGraphicsModifyRectMode.gcrmShiftRightUp) {
      Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(pas.System.Int(Result.Left) + 0.5,pas.System.Int(Result.Top) - 0.5,pas.System.Int(Result.Right) + 0.5,pas.System.Int(Result.Bottom) - 0.5))}
     else if ($tmp === $mod.TTMSFNCGraphicsModifyRectMode.gcrmShiftLeftUp) {
      Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(pas.System.Int(Result.Left) - 0.5,pas.System.Int(Result.Top) - 0.5,pas.System.Int(Result.Right) - 0.5,pas.System.Int(Result.Bottom) - 0.5))}
     else if ($tmp === $mod.TTMSFNCGraphicsModifyRectMode.gcrmShiftLeftDown) {
      Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(pas.System.Int(Result.Left) - 0.5,pas.System.Int(Result.Top) + 0.5,pas.System.Int(Result.Right) - 0.5,pas.System.Int(Result.Bottom) + 0.5))}
     else if ($tmp === $mod.TTMSFNCGraphicsModifyRectMode.gcrmShiftLeftAndExpandHeight) Result.$assign(pas["WEBLib.TMSFNCTypes"].RectF(pas.System.Int(Result.Left) - 0.5,pas.System.Int(Result.Top) - 0.5,pas.System.Int(Result.Right) - 0.5,pas.System.Int(Result.Bottom) + 0.5));
    return Result;
  };
  this.ModifyPoint = function (APoint, APointMode) {
    var Result = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
    Result.$assign(APoint);
    var $tmp = APointMode;
    if ($tmp === $mod.TTMSFNCGraphicsModifyPointMode.gcpmRightDown) {
      Result.$assign(pas["WEBLib.TMSFNCTypes"].PointF(pas.System.Int(Result.X) + 0.5,pas.System.Int(Result.Y) + 0.5))}
     else if ($tmp === $mod.TTMSFNCGraphicsModifyPointMode.gcpmLeftUp) {
      Result.$assign(pas["WEBLib.TMSFNCTypes"].PointF(pas.System.Int(Result.X) - 0.5,pas.System.Int(Result.Y) - 0.5))}
     else if ($tmp === $mod.TTMSFNCGraphicsModifyPointMode.gcpmRightUp) {
      Result.$assign(pas["WEBLib.TMSFNCTypes"].PointF(pas.System.Int(Result.X) + 0.5,pas.System.Int(Result.Y) - 0.5))}
     else if ($tmp === $mod.TTMSFNCGraphicsModifyPointMode.gcpmLeftDown) Result.$assign(pas["WEBLib.TMSFNCTypes"].PointF(pas.System.Int(Result.X) - 0.5,pas.System.Int(Result.Y) + 0.5));
    return Result;
  };
  this.MakeGraphicsColor = function (ARed, AGreen, ABlue) {
    rtl.rc(ARed,0,255);
    rtl.rc(AGreen,0,255);
    rtl.rc(ABlue,0,255);
    var Result = 0;
    Result = rtl.rc(pas["WEBLib.Graphics"].RGB(ARed,AGreen,ABlue),-9007199254740991,9007199254740991);
    return Result;
  };
  this.Lighter = function (AColor, APercent) {
    rtl.rc(AColor,-9007199254740991,9007199254740991);
    rtl.rc(APercent,0,255);
    var Result = 0;
    var r = 0;
    var g = 0;
    var b = 0;
    AColor = rtl.rc(pas["WEBLib.Graphics"].ColorToRGB(AColor),-9007199254740991,9007199254740991);
    r = rtl.rc(pas["WEBLib.Graphics"].GetRValue(AColor),0,255);
    g = rtl.rc(pas["WEBLib.Graphics"].GetGValue(AColor),0,255);
    b = rtl.rc(pas["WEBLib.Graphics"].GetBValue(AColor),0,255);
    r = rtl.rc(r + Math.min(255,pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.MulDivInt(255 - r,APercent,100)),0,255);
    g = rtl.rc(g + Math.min(255,pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.MulDivInt(255 - g,APercent,100)),0,255);
    b = rtl.rc(b + Math.min(255,pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.MulDivInt(255 - b,APercent,100)),0,255);
    Result = rtl.rc($mod.MakeGraphicsColor(r,g,b),-9007199254740991,9007199254740991);
    return Result;
  };
  this.Darker = function (AColor, APercent) {
    rtl.rc(AColor,-9007199254740991,9007199254740991);
    rtl.rc(APercent,0,255);
    var Result = 0;
    var r = 0;
    var g = 0;
    var b = 0;
    AColor = rtl.rc(pas["WEBLib.Graphics"].ColorToRGB(AColor),-9007199254740991,9007199254740991);
    r = rtl.rc(pas["WEBLib.Graphics"].GetRValue(AColor),0,255);
    g = rtl.rc(pas["WEBLib.Graphics"].GetGValue(AColor),0,255);
    b = rtl.rc(pas["WEBLib.Graphics"].GetBValue(AColor),0,255);
    r = rtl.rc(r - Math.max(0,pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.MulDivInt(255 - r,APercent,100)),0,255);
    g = rtl.rc(g - Math.max(0,pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.MulDivInt(255 - g,APercent,100)),0,255);
    b = rtl.rc(b - Math.max(0,pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.MulDivInt(255 - b,APercent,100)),0,255);
    Result = rtl.rc($mod.MakeGraphicsColor(r,g,b),-9007199254740991,9007199254740991);
    return Result;
  };
  this.Blend = function (AColor1, AColor2, ALevel) {
    var Result = 0;
    var c1 = 0;
    var c2 = 0;
    var r = 0;
    var g = 0;
    var b = 0;
    var v1 = 0;
    var v2 = 0;
    ALevel = Math.round(2.55 * ALevel);
    c1 = pas["WEBLib.Graphics"].ColorToRGB(AColor1);
    c2 = pas["WEBLib.Graphics"].ColorToRGB(AColor2);
    v1 = c1 & 255;
    v2 = c2 & 255;
    r = Math.max(0,Math.min(255,((ALevel * (v1 - v2)) >>> 8) + v2));
    v1 = Math.floor(c1 / 256) & 255;
    v2 = Math.floor(c2 / 256) & 255;
    g = Math.max(0,Math.min(255,((ALevel * (v1 - v2)) >>> 8) + v2));
    v1 = Math.floor(c1 / 65536) & 255;
    v2 = Math.floor(c2 / 65536) & 255;
    b = Math.max(0,Math.min(255,((ALevel * (v1 - v2)) >>> 8) + v2));
    Result = (b << 16) + (g << 8) + r;
    return Result;
  };
  this.ColorLookup = function () {
    var Result = null;
    Result = $impl.FColorLookup;
    return Result;
  };
  this.PointInPoly = function (APoint, APolygon) {
    var Result = false;
    var minX = 0.0;
    var maxX = 0.0;
    var minY = 0.0;
    var maxY = 0.0;
    var I = 0;
    var J = 0;
    var q = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
    var pt = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
    var ptn = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
    var inside = false;
    var chk = false;
    var calc = 0.0;
    var chkc = false;
    Result = false;
    if (rtl.length(APolygon) === 0) return Result;
    minX = APolygon[0].X;
    maxX = APolygon[0].X;
    minY = APolygon[0].Y;
    maxY = APolygon[0].Y;
    for (var $l = 1, $end = rtl.length(APolygon) - 1; $l <= $end; $l++) {
      I = $l;
      q.$assign(APolygon[I]);
      minX = Math.min(q.X,minX);
      maxX = Math.max(q.X,maxX);
      minY = Math.min(q.Y,minY);
      maxY = Math.max(q.Y,maxY);
    };
    if ((APoint.X < minX) || (APoint.X > maxX) || (APoint.Y < minY) || (APoint.Y > maxY)) {
      Result = false;
      return Result;
    };
    inside = false;
    J = rtl.length(APolygon) - 1;
    for (var $l1 = 0, $end1 = rtl.length(APolygon) - 1; $l1 <= $end1; $l1++) {
      I = $l1;
      pt.$assign(APolygon[I]);
      ptn.$assign(APolygon[J]);
      chk = (pt.Y > APoint.Y) !== (ptn.Y > APoint.Y);
      if ((ptn.Y - pt.Y) !== 0) {
        calc = (((ptn.X - pt.X) * (APoint.Y - pt.Y)) / (ptn.Y - pt.Y)) + pt.X;
        chkc = APoint.X < calc;
        if (chk && chkc) inside = !inside;
      };
      J = I;
    };
    Result = inside;
    return Result;
  };
  this.RectInPoly = function (ARect, APolygon) {
    var Result = false;
    Result = $mod.PointInPoly(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Left,ARect.Top)),rtl.arrayRef(APolygon)) || $mod.PointInPoly(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Right,ARect.Top)),rtl.arrayRef(APolygon)) || $mod.PointInPoly(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Left,ARect.Bottom)),rtl.arrayRef(APolygon)) || $mod.PointInPoly(pas["WEBLib.TMSFNCTypes"].TPointF.$clone(pas["WEBLib.TMSFNCTypes"].PointF(ARect.Right,ARect.Bottom)),rtl.arrayRef(APolygon));
    return Result;
  };
  this.PolyInRect = function (APolygon, ARect) {
    var Result = false;
    var I = 0;
    Result = false;
    for (var $l = 0, $end = rtl.length(APolygon) - 1; $l <= $end; $l++) {
      I = $l;
      if (pas["WEBLib.TMSFNCTypes"].PtInRectEx(ARect,APolygon[I])) {
        Result = true;
        return Result;
      };
    };
    return Result;
  };
  this.DrawGradient = function (ACanvas, AColor, AColorTo, ARect, ARounding, ACorners, ADirection) {
    rtl.rc(AColor,-9007199254740991,9007199254740991);
    rtl.rc(AColorTo,-9007199254740991,9007199254740991);
    var diffr = 0;
    var startr = 0;
    var endr = 0;
    var diffg = 0;
    var startg = 0;
    var endg = 0;
    var diffb = 0;
    var startb = 0;
    var endb = 0;
    var si = 0;
    var rstepr = 0.0;
    var rstepg = 0.0;
    var rstepb = 0.0;
    var rstepw = 0.0;
    var i = 0;
    var stepw = 0;
    var oldp = 0;
    var oldb = 0;
    var Steps = 0;
    var R = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
    var dr = pas["WEBLib.TMSFNCTypes"].TRectF.$new();
    var iend = 0.0;
    var a = 0.0;
    var oldps = 0;
    var oldbs = 0;
    R.$assign(ARect);
    if (ADirection) {
      Steps = rtl.rc(Math.round(R.Right - R.Left),-2147483648,2147483647)}
     else Steps = rtl.rc(Math.round(R.Bottom - R.Top),-2147483648,2147483647);
    if (Steps === 0) Steps = 1;
    AColor = rtl.rc(pas["WEBLib.Graphics"].ColorToRGB(AColor),-9007199254740991,9007199254740991);
    AColorTo = rtl.rc(pas["WEBLib.Graphics"].ColorToRGB(AColorTo),-9007199254740991,9007199254740991);
    startr = rtl.rc(AColor & 0xFF,-2147483648,2147483647);
    startg = rtl.rc(Math.floor((AColor & 0xFF00) / 256),-2147483648,2147483647);
    startb = rtl.rc(Math.floor((AColor & 0xFF0000) / 65536),-2147483648,2147483647);
    endr = rtl.rc(AColorTo & 0xFF,-2147483648,2147483647);
    endg = rtl.rc(Math.floor((AColorTo & 0xFF00) / 256),-2147483648,2147483647);
    endb = rtl.rc(Math.floor((AColorTo & 0xFF0000) / 65536),-2147483648,2147483647);
    diffr = rtl.rc(endr - startr,-2147483648,2147483647);
    diffg = rtl.rc(endg - startg,-2147483648,2147483647);
    diffb = rtl.rc(endb - startb,-2147483648,2147483647);
    rstepr = diffr / Steps;
    rstepg = diffg / Steps;
    rstepb = diffb / Steps;
    if (ADirection) {
      rstepw = (R.Right - R.Left) / Steps}
     else rstepw = (R.Bottom - R.Top) / Steps;
    oldb = rtl.rc(ACanvas.FBrush.FColor,-9007199254740991,9007199254740991);
    oldbs = rtl.rc(ACanvas.FBrush.FStyle,0,7);
    oldp = rtl.rc(ACanvas.FPen.FColor,-9007199254740991,9007199254740991);
    oldps = rtl.rc(ACanvas.FPen.FStyle,0,8);
    ACanvas.FPen.FStyle = rtl.rc(pas["WEBLib.Graphics"].TPenStyle.psSolid,0,8);
    ACanvas.FBrush.FStyle = rtl.rc(pas["WEBLib.Graphics"].TBrushStyle.bsSolid,0,7);
    for (var $l = 0, $end = Steps - 1; $l <= $end; $l++) {
      i = $l;
      endr = rtl.rc(startr + Math.round(rstepr * i),-2147483648,2147483647);
      endg = rtl.rc(startg + Math.round(rstepg * i),-2147483648,2147483647);
      endb = rtl.rc(startb + Math.round(rstepb * i),-2147483648,2147483647);
      stepw = rtl.rc(Math.round(i * rstepw),0,65535);
      ACanvas.FPen.SetColor(endr + (endg << 8) + (endb << 16));
      ACanvas.FBrush.FColor = rtl.rc(ACanvas.FPen.FColor,-9007199254740991,9007199254740991);
      if (ADirection) {
        si = rtl.rc(pas.System.Trunc(rstepw),-2147483648,2147483647);
        iend = R.Left + stepw + si;
        iend = Math.min(iend,R.Right);
        dr.$assign(R);
        if ((i <= ARounding) && (($mod.TTMSFNCGraphicsCorner.gcTopLeft in ACorners) || ($mod.TTMSFNCGraphicsCorner.gcBottomLeft in ACorners))) {
          a = Math.sqrt(Math.pow(ARounding,2) - Math.pow(ARounding - i,2));
          if ($mod.TTMSFNCGraphicsCorner.gcTopLeft in ACorners) dr.Top = dr.Top + Math.round(ARounding - a);
          if ($mod.TTMSFNCGraphicsCorner.gcBottomLeft in ACorners) dr.Bottom = dr.Bottom - Math.round(ARounding - a);
        } else if ((i >= (Steps - ARounding)) && (($mod.TTMSFNCGraphicsCorner.gcBottomRight in ACorners) || ($mod.TTMSFNCGraphicsCorner.gcTopRight in ACorners))) {
          a = Math.sqrt(Math.pow(ARounding,2) - Math.pow(ARounding - (Steps - i),2));
          if ($mod.TTMSFNCGraphicsCorner.gcTopRight in ACorners) dr.Top = dr.Top + Math.round(ARounding - a);
          if ($mod.TTMSFNCGraphicsCorner.gcBottomRight in ACorners) dr.Bottom = dr.Bottom - Math.round(ARounding - a);
        };
        ACanvas.Rectangle(dr.Left + stepw,dr.Top,iend,dr.Bottom);
      } else {
        si = rtl.rc(pas.System.Trunc(rstepw),-2147483648,2147483647);
        iend = R.Top + stepw + si;
        iend = Math.min(iend,R.Bottom);
        dr.$assign(R);
        if ((i <= ARounding) && (($mod.TTMSFNCGraphicsCorner.gcTopLeft in ACorners) || ($mod.TTMSFNCGraphicsCorner.gcTopRight in ACorners))) {
          a = Math.sqrt(Math.pow(ARounding,2) - Math.pow(ARounding - i,2));
          if ($mod.TTMSFNCGraphicsCorner.gcTopLeft in ACorners) dr.Left = dr.Left + Math.round(ARounding - a);
          if ($mod.TTMSFNCGraphicsCorner.gcTopRight in ACorners) dr.Right = dr.Right - Math.round(ARounding - a);
        } else if ((i >= (Steps - ARounding)) && (($mod.TTMSFNCGraphicsCorner.gcBottomLeft in ACorners) || ($mod.TTMSFNCGraphicsCorner.gcBottomRight in ACorners))) {
          a = Math.sqrt(Math.pow(ARounding,2) - Math.pow(ARounding - (Steps - i),2));
          if ($mod.TTMSFNCGraphicsCorner.gcBottomLeft in ACorners) dr.Left = dr.Left + Math.round(ARounding - a);
          if ($mod.TTMSFNCGraphicsCorner.gcBottomRight in ACorners) dr.Right = dr.Right - Math.round(ARounding - a);
        };
        ACanvas.Rectangle(dr.Left,dr.Top + stepw,dr.Right,iend);
      };
    };
    ACanvas.FBrush.FColor = rtl.rc(oldb,-9007199254740991,9007199254740991);
    ACanvas.FBrush.FStyle = rtl.rc(oldbs,0,7);
    ACanvas.FPen.SetColor(oldp);
    ACanvas.FPen.FStyle = rtl.rc(oldps,0,8);
  };
  this.IsMatrixEmpty = function (AMatrix) {
    var Result = false;
    Result = (AMatrix.m11 === 0) && (AMatrix.m12 === 0) && (AMatrix.m13 === 0) && (AMatrix.m21 === 0) && (AMatrix.m22 === 0) && (AMatrix.m23 === 0) && (AMatrix.m31 === 0) && (AMatrix.m32 === 0) && (AMatrix.m33 === 0);
    return Result;
  };
  this.MatrixEmpty = function () {
    var Result = $mod.TTMSFNCGraphicsMatrix.$new();
    Result.m11 = 0;
    Result.m12 = 0;
    Result.m13 = 0;
    Result.m21 = 0;
    Result.m22 = 0;
    Result.m23 = 0;
    Result.m31 = 0;
    Result.m32 = 0;
    Result.m33 = 0;
    return Result;
  };
  this.MatrixIdentity = function () {
    var Result = $mod.TTMSFNCGraphicsMatrix.$new();
    Result.m11 = 1;
    Result.m12 = 0;
    Result.m13 = 0;
    Result.m21 = 0;
    Result.m22 = 1;
    Result.m23 = 0;
    Result.m31 = 0;
    Result.m32 = 0;
    Result.m33 = 1;
    return Result;
  };
  this.MatrixCreateRotation = function (AAngle) {
    var Result = $mod.TTMSFNCGraphicsMatrix.$new();
    var S = 0.0;
    var C = 0.0;
    S = Math.sin(AAngle);
    C = Math.cos(AAngle);
    Result.$assign($mod.MatrixIdentity());
    Result.m11 = C;
    Result.m12 = S;
    Result.m21 = -S;
    Result.m22 = C;
    return Result;
  };
  this.MatrixCreateScaling = function (AScaleX, AScaleY) {
    var Result = $mod.TTMSFNCGraphicsMatrix.$new();
    Result.$assign($mod.MatrixIdentity());
    Result.m11 = AScaleX;
    Result.m22 = AScaleY;
    return Result;
  };
  this.MatrixCreateTranslation = function (ADeltaX, ADeltaY) {
    var Result = $mod.TTMSFNCGraphicsMatrix.$new();
    Result.$assign($mod.MatrixIdentity());
    Result.m31 = ADeltaX;
    Result.m32 = ADeltaY;
    return Result;
  };
  this.MatrixMultiply = function (AMatrix1, AMatrix2) {
    var Result = $mod.TTMSFNCGraphicsMatrix.$new();
    Result.m11 = (AMatrix1.m11 * AMatrix2.m11) + (AMatrix1.m12 * AMatrix2.m21) + (AMatrix1.m13 * AMatrix2.m31);
    Result.m12 = (AMatrix1.m11 * AMatrix2.m12) + (AMatrix1.m12 * AMatrix2.m22) + (AMatrix1.m13 * AMatrix2.m32);
    Result.m13 = (AMatrix1.m11 * AMatrix2.m13) + (AMatrix1.m12 * AMatrix2.m23) + (AMatrix1.m13 * AMatrix2.m33);
    Result.m21 = (AMatrix1.m21 * AMatrix2.m11) + (AMatrix1.m22 * AMatrix2.m21) + (AMatrix1.m23 * AMatrix2.m31);
    Result.m22 = (AMatrix1.m21 * AMatrix2.m12) + (AMatrix1.m22 * AMatrix2.m22) + (AMatrix1.m23 * AMatrix2.m32);
    Result.m23 = (AMatrix1.m21 * AMatrix2.m13) + (AMatrix1.m22 * AMatrix2.m23) + (AMatrix1.m23 * AMatrix2.m33);
    Result.m31 = (AMatrix1.m31 * AMatrix2.m11) + (AMatrix1.m32 * AMatrix2.m21) + (AMatrix1.m33 * AMatrix2.m31);
    Result.m32 = (AMatrix1.m31 * AMatrix2.m12) + (AMatrix1.m32 * AMatrix2.m22) + (AMatrix1.m33 * AMatrix2.m32);
    Result.m33 = (AMatrix1.m31 * AMatrix2.m13) + (AMatrix1.m32 * AMatrix2.m23) + (AMatrix1.m33 * AMatrix2.m33);
    return Result;
  };
  this.MatrixMultiply$1 = function (APoint, AMatrix) {
    var Result = pas["WEBLib.TMSFNCTypes"].TPointF.$new();
    Result.X = (APoint.X * AMatrix.m11) + (APoint.Y * AMatrix.m21) + AMatrix.m31;
    Result.Y = (APoint.X * AMatrix.m12) + (APoint.Y * AMatrix.m22) + AMatrix.m32;
    return Result;
  };
  $mod.$implcode = function () {
    $impl.FColorLookup = null;
    $impl.DrawArcWithBezier = function (Path, CenterX, CenterY, RadiusX, RadiusY, StartAngle, SweepRange, UseMoveTo) {
      var Coord = [];
      var Pts = [];
      var A = 0.0;
      var X = 0.0;
      var Y = 0.0;
      var C = 0.0;
      var B = 0.0;
      var CC = 0.0;
      var SS = 0.0;
      var I = 0;
      if (SweepRange === 0) {
        if (UseMoveTo) {
          if (Path.FPoints.GetCount() < 1) {
            Path.MoveTo(pas["WEBLib.TMSFNCTypes"].PointF(CenterX + (RadiusX * Math.cos(StartAngle)),CenterY - (RadiusY * Math.sin(StartAngle))))}
           else Path.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(CenterX + (RadiusX * Math.cos(StartAngle)),CenterY - (RadiusY * Math.sin(StartAngle))));
        };
        Path.LineTo(pas["WEBLib.TMSFNCTypes"].PointF(CenterX + (RadiusX * Math.cos(StartAngle)),CenterY - (RadiusY * Math.sin(StartAngle))));
        return;
      };
      B = Math.sin(SweepRange / 2);
      C = Math.cos(SweepRange / 2);
      A = 1 - C;
      X = (A * 4) / 3;
      Y = B - ((X * C) / B);
      SS = Math.sin(StartAngle + (SweepRange / 2));
      CC = Math.cos(StartAngle + (SweepRange / 2));
      Coord = rtl.arraySetLength(Coord,pas["WEBLib.TMSFNCTypes"].TPointF,4);
      Coord[0].$assign(pas["WEBLib.TMSFNCTypes"].PointF(C,-B));
      Coord[1].$assign(pas["WEBLib.TMSFNCTypes"].PointF(C + X,-Y));
      Coord[2].$assign(pas["WEBLib.TMSFNCTypes"].PointF(C + X,Y));
      Coord[3].$assign(pas["WEBLib.TMSFNCTypes"].PointF(C,B));
      Pts = rtl.arraySetLength(Pts,pas["WEBLib.TMSFNCTypes"].TPointF,4);
      for (I = 0; I <= 3; I++) {
        rtl.rcArrR(Pts,I).$assign(pas["WEBLib.TMSFNCTypes"].PointF(CenterX + (RadiusX * ((rtl.rcArrR(Coord,I).X * CC) - (rtl.rcArrR(Coord,I).Y * SS))),CenterY + (RadiusY * ((rtl.rcArrR(Coord,I).X * SS) + (rtl.rcArrR(Coord,I).Y * CC)))));
      };
      if (UseMoveTo) {
        if (Path.FPoints.GetCount() < 1) {
          Path.MoveTo(Pts[0])}
         else Path.LineTo(Pts[0]);
      };
      Path.CurveTo(Pts[1],Pts[2],Pts[3]);
    };
    $impl.DestroyColorLookup = function () {
      var I = 0;
      var obj = null;
      for (var $l = 0, $end = $impl.FColorLookup.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        obj = $impl.FColorLookup.GetObject(I);
        obj = rtl.freeLoc(obj);
      };
      rtl.free($impl,"FColorLookup");
    };
  };
  $mod.$init = function () {
    $impl.FColorLookup = pas.Classes.TStringList.$create("Create$1");
    $impl.FColorLookup.AddObject("aliceblue",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[16775408]));
    $impl.FColorLookup.AddObject("antiquewhite",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[14150650]));
    $impl.FColorLookup.AddObject("aqua",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[16776960]));
    $impl.FColorLookup.AddObject("aquamarine",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[13959039]));
    $impl.FColorLookup.AddObject("azure",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[16777200]));
    $impl.FColorLookup.AddObject("beige",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[14480885]));
    $impl.FColorLookup.AddObject("bisque",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[12903679]));
    $impl.FColorLookup.AddObject("black",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[0]));
    $impl.FColorLookup.AddObject("blanchedalmond",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[13495295]));
    $impl.FColorLookup.AddObject("blue",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[16711680]));
    $impl.FColorLookup.AddObject("blueviolet",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[14822282]));
    $impl.FColorLookup.AddObject("brown",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[2763429]));
    $impl.FColorLookup.AddObject("burlywood",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[8894686]));
    $impl.FColorLookup.AddObject("cadetblue",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[10526303]));
    $impl.FColorLookup.AddObject("chartreuse",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[65407]));
    $impl.FColorLookup.AddObject("chocolate",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[1993170]));
    $impl.FColorLookup.AddObject("coral",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[5275647]));
    $impl.FColorLookup.AddObject("cornflowerblue",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[15570276]));
    $impl.FColorLookup.AddObject("cornsilk",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[14481663]));
    $impl.FColorLookup.AddObject("crimson",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[3937500]));
    $impl.FColorLookup.AddObject("cyan",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[16776960]));
    $impl.FColorLookup.AddObject("darkblue",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[9109504]));
    $impl.FColorLookup.AddObject("darkcyan",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[9145088]));
    $impl.FColorLookup.AddObject("darkgoldenrod",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[755384]));
    $impl.FColorLookup.AddObject("darkgray",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[11119017]));
    $impl.FColorLookup.AddObject("darkgreen",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[25600]));
    $impl.FColorLookup.AddObject("darkgrey",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[11119017]));
    $impl.FColorLookup.AddObject("darkkhaki",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[7059389]));
    $impl.FColorLookup.AddObject("darkmagenta",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[9109643]));
    $impl.FColorLookup.AddObject("darkolivegreen",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[3107669]));
    $impl.FColorLookup.AddObject("darkorange",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[36095]));
    $impl.FColorLookup.AddObject("darkorchid",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[13382297]));
    $impl.FColorLookup.AddObject("darkred",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[139]));
    $impl.FColorLookup.AddObject("darksalmon",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[8034025]));
    $impl.FColorLookup.AddObject("darkseagreen",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[9419919]));
    $impl.FColorLookup.AddObject("darkslateblue",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[9125192]));
    $impl.FColorLookup.AddObject("darkslategray",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[5197615]));
    $impl.FColorLookup.AddObject("darkslategrey",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[5197615]));
    $impl.FColorLookup.AddObject("darkturquoise",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[13749760]));
    $impl.FColorLookup.AddObject("darkviolet",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[13828244]));
    $impl.FColorLookup.AddObject("deeppink",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[9639167]));
    $impl.FColorLookup.AddObject("deepskyblue",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[16760576]));
    $impl.FColorLookup.AddObject("dimgray",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[6908265]));
    $impl.FColorLookup.AddObject("dimgrey",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[6908265]));
    $impl.FColorLookup.AddObject("dodgerblue",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[16748574]));
    $impl.FColorLookup.AddObject("firebrick",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[2237106]));
    $impl.FColorLookup.AddObject("floralwhite",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[15792895]));
    $impl.FColorLookup.AddObject("forestgreen",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[2263842]));
    $impl.FColorLookup.AddObject("fuchsia",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[16711935]));
    $impl.FColorLookup.AddObject("gainsboro",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[14474460]));
    $impl.FColorLookup.AddObject("ghostwhite",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[16775416]));
    $impl.FColorLookup.AddObject("gold",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[55295]));
    $impl.FColorLookup.AddObject("goldenrod",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[2139610]));
    $impl.FColorLookup.AddObject("gray",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[8421504]));
    $impl.FColorLookup.AddObject("green",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[32768]));
    $impl.FColorLookup.AddObject("greenyellow",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[3145645]));
    $impl.FColorLookup.AddObject("grey",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[8421504]));
    $impl.FColorLookup.AddObject("honeydew",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[15794160]));
    $impl.FColorLookup.AddObject("hotpink",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[11823615]));
    $impl.FColorLookup.AddObject("indianred",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[6053069]));
    $impl.FColorLookup.AddObject("indigo",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[8519755]));
    $impl.FColorLookup.AddObject("ivory",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[15794175]));
    $impl.FColorLookup.AddObject("khaki",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[9234160]));
    $impl.FColorLookup.AddObject("lavender",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[16443110]));
    $impl.FColorLookup.AddObject("lavenderblush",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[16118015]));
    $impl.FColorLookup.AddObject("lawngreen",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[64636]));
    $impl.FColorLookup.AddObject("lemonchiffon",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[13499135]));
    $impl.FColorLookup.AddObject("lightblue",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[15128749]));
    $impl.FColorLookup.AddObject("lightcoral",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[8421616]));
    $impl.FColorLookup.AddObject("lightcyan",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[16777184]));
    $impl.FColorLookup.AddObject("lightgoldenrodyellow",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[13826810]));
    $impl.FColorLookup.AddObject("lightgray",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[13882323]));
    $impl.FColorLookup.AddObject("lightgreen",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[9498256]));
    $impl.FColorLookup.AddObject("lightgrey",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[13882323]));
    $impl.FColorLookup.AddObject("lightpink",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[12695295]));
    $impl.FColorLookup.AddObject("lightsalmon",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[8036607]));
    $impl.FColorLookup.AddObject("lightseagreen",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[11186720]));
    $impl.FColorLookup.AddObject("lightskyblue",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[16436871]));
    $impl.FColorLookup.AddObject("lightslategray",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[10061943]));
    $impl.FColorLookup.AddObject("lightslategrey",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[10061943]));
    $impl.FColorLookup.AddObject("lightsteelblue",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[14599344]));
    $impl.FColorLookup.AddObject("lightyellow",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[14745599]));
    $impl.FColorLookup.AddObject("lime",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[65280]));
    $impl.FColorLookup.AddObject("limegreen",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[3329330]));
    $impl.FColorLookup.AddObject("linen",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[15134970]));
    $impl.FColorLookup.AddObject("magenta",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[16711935]));
    $impl.FColorLookup.AddObject("maroon",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[128]));
    $impl.FColorLookup.AddObject("mediumaquamarine",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[11193702]));
    $impl.FColorLookup.AddObject("mediumblue",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[13434880]));
    $impl.FColorLookup.AddObject("mediumorchid",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[13850042]));
    $impl.FColorLookup.AddObject("mediumpurple",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[14381203]));
    $impl.FColorLookup.AddObject("mediumseagreen",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[7451452]));
    $impl.FColorLookup.AddObject("mediumslateblue",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[15624315]));
    $impl.FColorLookup.AddObject("mediumspringgreen",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[10156544]));
    $impl.FColorLookup.AddObject("mediumturquoise",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[13422920]));
    $impl.FColorLookup.AddObject("mediumvioletred",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[8721863]));
    $impl.FColorLookup.AddObject("midnightblue",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[7346457]));
    $impl.FColorLookup.AddObject("mintcream",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[16449525]));
    $impl.FColorLookup.AddObject("mistyrose",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[14804223]));
    $impl.FColorLookup.AddObject("moccasin",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[11920639]));
    $impl.FColorLookup.AddObject("navajowhite",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[11394815]));
    $impl.FColorLookup.AddObject("navy",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[8388608]));
    $impl.FColorLookup.AddObject("oldlace",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[15136253]));
    $impl.FColorLookup.AddObject("olive",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[32896]));
    $impl.FColorLookup.AddObject("olivedrab",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[2330219]));
    $impl.FColorLookup.AddObject("orange",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[42495]));
    $impl.FColorLookup.AddObject("orangered",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[17919]));
    $impl.FColorLookup.AddObject("orchid",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[14053594]));
    $impl.FColorLookup.AddObject("palegoldenrod",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[11200750]));
    $impl.FColorLookup.AddObject("palegreen",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[10025880]));
    $impl.FColorLookup.AddObject("paleturquoise",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[15658671]));
    $impl.FColorLookup.AddObject("palevioletred",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[9662683]));
    $impl.FColorLookup.AddObject("papayawhip",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[14020607]));
    $impl.FColorLookup.AddObject("peachpuff",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[12180223]));
    $impl.FColorLookup.AddObject("peru",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[4163021]));
    $impl.FColorLookup.AddObject("pink",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[13353215]));
    $impl.FColorLookup.AddObject("plum",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[14524637]));
    $impl.FColorLookup.AddObject("powderblue",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[15130800]));
    $impl.FColorLookup.AddObject("purple",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[8388736]));
    $impl.FColorLookup.AddObject("red",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[255]));
    $impl.FColorLookup.AddObject("rosybrown",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[9408444]));
    $impl.FColorLookup.AddObject("royalblue",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[14772545]));
    $impl.FColorLookup.AddObject("saddlebrown",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[1262987]));
    $impl.FColorLookup.AddObject("salmon",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[7504122]));
    $impl.FColorLookup.AddObject("sandybrown",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[6333684]));
    $impl.FColorLookup.AddObject("seagreen",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[5737262]));
    $impl.FColorLookup.AddObject("seashell",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[15660543]));
    $impl.FColorLookup.AddObject("sienna",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[2970272]));
    $impl.FColorLookup.AddObject("skyblue",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[15453831]));
    $impl.FColorLookup.AddObject("slateblue",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[13458026]));
    $impl.FColorLookup.AddObject("slategray",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[9470064]));
    $impl.FColorLookup.AddObject("slategrey",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[9470064]));
    $impl.FColorLookup.AddObject("snow",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[16448255]));
    $impl.FColorLookup.AddObject("springgreen",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[8388352]));
    $impl.FColorLookup.AddObject("steelblue",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[11829830]));
    $impl.FColorLookup.AddObject("violet",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[15631086]));
    $impl.FColorLookup.AddObject("thistle",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[14204888]));
    $impl.FColorLookup.AddObject("tan",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[9221330]));
    $impl.FColorLookup.AddObject("tomato",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[4678655]));
    $impl.FColorLookup.AddObject("turquoise",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[13688896]));
    $impl.FColorLookup.AddObject("wheat",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[11788021]));
    $impl.FColorLookup.AddObject("whitesmoke",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[16119285]));
    $impl.FColorLookup.AddObject("yellowgreen",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[3329434]));
    $impl.FColorLookup.AddObject("red",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[255]));
    $impl.FColorLookup.AddObject("black",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[0]));
    $impl.FColorLookup.AddObject("blue",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[16711680]));
    $impl.FColorLookup.AddObject("green",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[32768]));
    $impl.FColorLookup.AddObject("aqua",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[16776960]));
    $impl.FColorLookup.AddObject("yellow",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[65535]));
    $impl.FColorLookup.AddObject("fuchsia",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[16711935]));
    $impl.FColorLookup.AddObject("white",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[16777215]));
    $impl.FColorLookup.AddObject("lime",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[65280]));
    $impl.FColorLookup.AddObject("silver",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[12632256]));
    $impl.FColorLookup.AddObject("gray",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[8421504]));
    $impl.FColorLookup.AddObject("olive",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[32896]));
    $impl.FColorLookup.AddObject("navy",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[8388608]));
    $impl.FColorLookup.AddObject("purple",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[8388736]));
    $impl.FColorLookup.AddObject("teal",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[8421376]));
    $impl.FColorLookup.AddObject("orange",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[42495]));
    $impl.FColorLookup.AddObject("maroon",$mod.TTMSFNCGraphicsColorObject.$create("Create$1",[128]));
    $impl.FColorLookup.Sort();
  };
},["WEBLib.TMSFNCUtils","SysUtils","Math"]);
//# sourceMappingURL=WEBLib.TMSFNCGraphicsTypes.js.map
