rtl.module("WEBLib.TMSFNCTypes",["System","Types","Classes","WEBLib.Graphics","SysUtils","WEBLib.Controls","Math","WEBLib.JSON"],function () {
  "use strict";
  var $mod = this;
  rtl.createInterface(this,"ITMSFNCProductInfo","{C53329EA-7B3A-4507-AD9E-88ACD6A85054}",["GetVersion","GetDocURL","GetTipsURL"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetVersion",1,[],rtl.string);
    $r.addMethod("GetDocURL",1,[],rtl.string);
    $r.addMethod("GetTipsURL",1,[],rtl.string);
  });
  this.TTMSFNCBaseDocURL = "https://download.tmssoftware.com/doc/";
  this.TTMSFNCBaseTipsURL = "https://www.tmssoftware.com/site/tmsfnccore.asp?s=faq";
  this.pidWeb = 0x1000;
  this.ssCommand = pas.Classes.TShiftState$a.ssCtrl;
  this.TMSPlatformsDesktop = 0;
  this.TMSPlatforms = 0;
  this.TMSPlatformsWeb = 0;
  this.TMSPlatformsWebDesktop = 0;
  this.KEY_CANCEL = 3;
  this.KEY_CONTROL = 17;
  this.KEY_SHIFT = 16;
  this.KEY_ESCAPE = 27;
  this.KEY_INSERT = 45;
  this.KEY_DELETE = 46;
  this.KEY_TAB = 9;
  this.KEY_SUBTRACT = 109;
  this.KEY_ADD = 107;
  this.KEY_MULTIPLY = 106;
  this.KEY_DIVIDE = 111;
  this.KEY_PRIOR = 33;
  this.KEY_NEXT = 34;
  this.KEY_UP = 38;
  this.KEY_DOWN = 40;
  this.KEY_RIGHT = 39;
  this.KEY_LEFT = 37;
  this.KEY_HOME = 36;
  this.KEY_END = 35;
  this.KEY_RETURN = 13;
  this.KEY_SPACE = 32;
  this.KEY_MENU = 18;
  this.KEY_BACK = 8;
  this.KEY_F1 = 112;
  this.KEY_F2 = 113;
  this.KEY_F3 = 114;
  this.KEY_F4 = 115;
  this.KEY_F5 = 116;
  this.KEY_F6 = 117;
  this.KEY_F7 = 118;
  this.KEY_F8 = 119;
  this.KEY_F9 = 120;
  this.KEY_F10 = 121;
  this.KEY_F11 = 122;
  this.KEY_F12 = 123;
  this.SReadError = "Stream read error";
  this.SWriteError = "Stream write error";
  this.$rtti.$RefToProcVar("TTMSFNCStreamLoadedEvent",{procsig: rtl.newTIProcSig([])});
  rtl.createHelper(this,"TTMSFNCMemoryStream",null,function () {
    this.GetBytes = function () {
      var Result = [];
      var p = 0;
      var b = [];
      p = this.GetPosition();
      this.SetPosition(0);
      b = rtl.arraySetLength(b,0,this.GetSize());
      this.Read$1(rtl.arrayRef(b),0,rtl.length(b));
      Result = rtl.arrayRef(b);
      this.SetPosition(p);
      return Result;
    };
    this.OpenFile = function (FileType) {
      var b = [];
      var s = "";
      var f = "";
      f = "tmp." + pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetFileExtension(FileType);
      b = rtl.arrayRef($mod.TTMSFNCMemoryStream.GetBytes.call(this));
      s = FileType;
      var file = new Blob([new Uint8Array(b)], {type: s});
      var fileURL = window.URL.createObjectURL(file);
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(file, f);
        return;
      }
      window.open(fileURL);
    };
    this.SaveToFile = function (FileName) {
      var s = "";
      var b = [];
      s = FileName;
      b = rtl.arrayRef($mod.TTMSFNCMemoryStream.GetBytes.call(this));
      var userAgent = navigator.userAgent.toLowerCase();
          if (userAgent.indexOf('electron/') > -1) {
            var arr = new Uint8Array(b);
            nfs.writeFileSync(s, arr);
          } else {
            var newBlob = new Blob([new Uint8Array(b)], {type: "octet/stream"})
      
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
              window.navigator.msSaveOrOpenBlob(newBlob, s);
              return;
            }
      
            const data = window.URL.createObjectURL(newBlob);
            var link = document.createElement('a');
            link.href = data;
            link.download = s;
            document.body.appendChild(link);
            link.click();
            setTimeout(function(){
             document.body.removeChild(link);
              window.URL.revokeObjectURL(data);
            }, 100);
          };
    };
  });
  rtl.recNewT(this,"TSizeF",function () {
    this.cx = 0.0;
    this.cy = 0.0;
    this.$eq = function (b) {
      return (this.cx === b.cx) && (this.cy === b.cy);
    };
    this.$assign = function (s) {
      this.cx = s.cx;
      this.cy = s.cy;
      return this;
    };
    var $r = $mod.$rtti.$Record("TSizeF",{});
    $r.addField("cx",rtl.double);
    $r.addField("cy",rtl.double);
  });
  rtl.recNewT(this,"TPointF",function () {
    this.X = 0.0;
    this.Y = 0.0;
    this.$eq = function (b) {
      return (this.X === b.X) && (this.Y === b.Y);
    };
    this.$assign = function (s) {
      this.X = s.X;
      this.Y = s.Y;
      return this;
    };
    var $r = $mod.$rtti.$Record("TPointF",{});
    $r.addField("X",rtl.double);
    $r.addField("Y",rtl.double);
  });
  rtl.recNewT(this,"TRectF",function () {
    this.Left = 0.0;
    this.Top = 0.0;
    this.Right = 0.0;
    this.Bottom = 0.0;
    this.$eq = function (b) {
      return (this.Left === b.Left) && (this.Top === b.Top) && (this.Right === b.Right) && (this.Bottom === b.Bottom);
    };
    this.$assign = function (s) {
      this.Left = s.Left;
      this.Top = s.Top;
      this.Right = s.Right;
      this.Bottom = s.Bottom;
      return this;
    };
    var $r = $mod.$rtti.$Record("TRectF",{});
    $r.addField("Left",rtl.double);
    $r.addField("Top",rtl.double);
    $r.addField("Right",rtl.double);
    $r.addField("Bottom",rtl.double);
  });
  this.$rtti.$Class("TTMSFNCBitmap");
  rtl.createClass(this,"TTMSFNCSVGImport",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FRotationAngle = 0.0;
      this.FViewRect = $mod.TRectF.$new();
      this.FGrayScale = false;
      this.FCustomFillColor = 0;
      this.FCustomStrokeColor = 0;
      this.FTintColor = 0;
      this.FCustomOpacity = 0.0;
    };
    this.$final = function () {
      this.FViewRect = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.Create$1 = function () {
      this.FRotationAngle = 0;
      this.FCustomOpacity = -1;
      this.FCustomFillColor = -1;
      this.FCustomStrokeColor = -1;
      this.FTintColor = -1;
      return this;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addProperty("GrayScale",0,rtl.boolean,"FGrayScale","FGrayScale",{Default: false});
    $r.addProperty("CustomFillColor",0,pas["WEBLib.Graphics"].$rtti["TColor"],"FCustomFillColor","FCustomFillColor");
    $r.addProperty("CustomStrokeColor",0,pas["WEBLib.Graphics"].$rtti["TColor"],"FCustomStrokeColor","FCustomStrokeColor");
    $r.addProperty("TintColor",0,pas["WEBLib.Graphics"].$rtti["TColor"],"FTintColor","FTintColor");
    $r.addProperty("CustomOpacity",0,rtl.double,"FCustomOpacity","FCustomOpacity");
    $r.addProperty("RotationAngle",0,rtl.double,"FRotationAngle","FRotationAngle");
  });
  rtl.createClass(this,"TTMSFNCBitmap",pas["WEBLib.Graphics"].TBitmap,function () {
    this.CreateFromStream = function (AStream) {
      this.Create$3();
      this.LoadFromStream(AStream);
      return this;
    };
    var $r = this.$rtti;
    $r.addMethod("CreateFromStream",2,[["AStream",pas.Classes.$rtti["TStream"],2]]);
  });
  this.$rtti.$DynArray("TTMSFNCObjectExcludePropertyListArray",{eltype: rtl.string});
  rtl.createHelper(this,"TTMSFNCObjectHelper",null,function () {
    this.ToJSONValue = function () {
      var Result = null;
      Result = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.ParseJSON($mod.TTMSFNCObjectHelper.ToJSON$1.call(this));
      return Result;
    };
    this.ToJSON = function (AExcludedProperties) {
      var Result = "";
      var s = null;
      var p = null;
      var arr = [];
      var I = 0;
      var ep = [];
      arr = rtl.arraySetLength(arr,"",rtl.length(AExcludedProperties));
      for (var $l = 0, $end = rtl.length(AExcludedProperties) - 1; $l <= $end; $l++) {
        I = $l;
        arr[I] = AExcludedProperties[I];
      };
      s = pas.Classes.TStringStream.$create("Create$3",["",pas.Classes.TEncoding.GetANSI(),true]);
      p = pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.$create("Create");
      try {
        ep = p.FExcludeProperties;
        pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.FExcludeProperties = rtl.arrayRef(arr);
        p.$class.SaveSettingsToStream(this,s);
        pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.FExcludeProperties = rtl.arrayRef(ep);
        Result = s.GetDataString();
      } finally {
        p = rtl.freeLoc(p);
        s = rtl.freeLoc(s);
      };
      return Result;
    };
    this.ToJSON$1 = function () {
      var Result = "";
      var s = null;
      s = pas.Classes.TStringStream.$create("Create$3",["",pas.Classes.TEncoding.GetANSI(),true]);
      try {
        pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.SaveSettingsToStream(this,s);
        Result = s.GetDataString();
      } finally {
        s = rtl.freeLoc(s);
      };
      return Result;
    };
    this.FromJSON = function (Value) {
      var s = null;
      var cs = "";
      var obj = null;
      s = pas.Classes.TStringStream.$create("Create$3",[Value,pas.Classes.TEncoding.GetANSI(),true]);
      try {
        obj = pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.FIOReference;
        cs = pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.ClassTypeVariable;
        pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.ClassTypeVariable = "";
        pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.FIOReference = this;
        pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.LoadSettingsFromStream(this,s);
        pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.ClassTypeVariable = cs;
        pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.FIOReference = obj;
      } finally {
        s = rtl.freeLoc(s);
      };
    };
    this.Log = function () {
      pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.Log($mod.TTMSFNCObjectHelper.ToJSON$1.call(this));
    };
    this.SaveToJSONFile = function (AFileName) {
      pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.SaveSettingsToFile(this,AFileName);
    };
    this.LoadFromJSONFile = function (AFileName) {
      pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.LoadSettingsFromFile(this,AFileName);
    };
    this.SaveToJSONStream = function (AStream) {
      pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.SaveSettingsToStream(this,AStream);
    };
    this.LoadFromJSONStream = function (AStream) {
      pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.LoadSettingsFromStream(this,AStream);
    };
  });
  rtl.createHelper(this,"TTMSFNCJSONValueHelper",null,function () {
    this.GetProperties = function (AName) {
      var Result = null;
      Result = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(this,AName);
      return Result;
    };
    this.GetAsArray = function () {
      var Result = null;
      Result = null;
      if (pas["WEBLib.JSON"].TJSONArray.isPrototypeOf(this)) Result = rtl.as(this,pas["WEBLib.JSON"].TJSONArray);
      return Result;
    };
    this.GetAsString = function () {
      var Result = "";
      Result = "";
      if (this != null) Result = this.GetStrValue();
      return Result;
    };
    this.GetAsDouble = function () {
      var Result = 0.0;
      Result = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValueAsDouble(this);
      return Result;
    };
    this.GetAsInteger = function () {
      var Result = 0;
      Result = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValueAsInteger(this);
      return Result;
    };
    this.GetAsBoolean = function () {
      var Result = false;
      Result = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValueAsBoolean(this);
      return Result;
    };
    this.Find = function (APath) {
      var Result = null;
      Result = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.FindJSONValue(this,APath);
      return Result;
    };
  });
  rtl.createHelper(this,"TTMSFNCJSONArrayHelper",null,function () {
    this.GetValues = function (AIndex) {
      var Result = null;
      Result = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(this,AIndex);
      return Result;
    };
    this.GetLength = function () {
      var Result = 0;
      Result = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(this);
      return Result;
    };
  });
  rtl.createClass(this,"TTMSFNCMargins",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FRight = 0.0;
      this.FBottom = 0.0;
      this.FTop = 0.0;
      this.FLeft = 0.0;
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetBottom = function (Value) {
      if (this.FBottom !== Value) {
        this.FBottom = Value;
        this.Changed();
      };
    };
    this.SetLeft = function (Value) {
      if (this.FLeft !== Value) {
        this.FLeft = Value;
        this.Changed();
      };
    };
    this.SetRight = function (Value) {
      if (this.FRight !== Value) {
        this.FRight = Value;
        this.Changed();
      };
    };
    this.SetTop = function (Value) {
      if (this.FTop !== Value) {
        this.FTop = Value;
        this.Changed();
      };
    };
    this.IsLeftStored = function () {
      var Result = false;
      Result = this.FLeft !== 0;
      return Result;
    };
    this.IsTopStored = function () {
      var Result = false;
      Result = this.FTop !== 0;
      return Result;
    };
    this.IsRightStored = function () {
      var Result = false;
      Result = this.FRight !== 0;
      return Result;
    };
    this.IsBottomStored = function () {
      var Result = false;
      Result = this.FBottom !== 0;
      return Result;
    };
    this.Changed = function () {
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.Create$1 = function () {
      this.FLeft = 0;
      this.FBottom = 0;
      this.FRight = 0;
      this.FTop = 0;
      return this;
    };
    this.Create$2 = function (ARect) {
      this.FLeft = ARect.Left;
      this.FBottom = ARect.Bottom;
      this.FRight = ARect.Right;
      this.FTop = ARect.Top;
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCMargins.isPrototypeOf(Source)) {
        this.FLeft = rtl.as(Source,$mod.TTMSFNCMargins).FLeft;
        this.FTop = rtl.as(Source,$mod.TTMSFNCMargins).FTop;
        this.FRight = rtl.as(Source,$mod.TTMSFNCMargins).FRight;
        this.FBottom = rtl.as(Source,$mod.TTMSFNCMargins).FBottom;
      };
    };
    this.Empty = function () {
      var Result = false;
      var r = $mod.TRectF.$new();
      r.$assign($mod.RectF(this.FLeft,this.FTop,this.FRight,this.FBottom));
      Result = $mod.RectIsEmpty(r);
      return Result;
    };
    this.Rect = function () {
      var Result = $mod.TRectF.$new();
      Result.$assign($mod.RectF(this.FLeft,this.FTop,this.FRight,this.FBottom));
      return Result;
    };
    this.PaddingRect = function (R) {
      var Result = $mod.TRectF.$new();
      Result.$assign($mod.RectF(R.Left + this.FLeft,R.Top + this.FTop,R.Right - this.FRight,R.Bottom - this.FBottom));
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addMethod("Create$2",2,[["ARect",$mod.$rtti["TRectF"],2]]);
    $r.addProperty("Left",14,rtl.double,"FLeft","SetLeft",{stored: "IsLeftStored"});
    $r.addProperty("Top",14,rtl.double,"FTop","SetTop",{stored: "IsTopStored"});
    $r.addProperty("Right",14,rtl.double,"FRight","SetRight",{stored: "IsRightStored"});
    $r.addProperty("Bottom",14,rtl.double,"FBottom","SetBottom",{stored: "IsBottomStored"});
    $r.addProperty("OnChange",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnChange","FOnChange");
  });
  rtl.createClass(this,"TTMSFNCPoint",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FY = 0.0;
      this.FX = 0.0;
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetX = function (Value) {
      if (this.FX !== Value) {
        this.FX = Value;
        this.Changed();
      };
    };
    this.SetY = function (Value) {
      if (this.FY !== Value) {
        this.FY = Value;
        this.Changed();
      };
    };
    this.IsXStored = function () {
      var Result = false;
      Result = this.FX !== 0;
      return Result;
    };
    this.IsYStored = function () {
      var Result = false;
      Result = this.FY !== 0;
      return Result;
    };
    this.Changed = function () {
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.Create$1 = function () {
      this.FX = 0;
      this.FY = 0;
      return this;
    };
    this.Create$2 = function (APoint) {
      this.FX = APoint.X;
      this.FY = APoint.Y;
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCPoint.isPrototypeOf(Source)) {
        this.FX = rtl.as(Source,$mod.TTMSFNCPoint).FX;
        this.FY = rtl.as(Source,$mod.TTMSFNCPoint).FY;
      };
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addMethod("Create$2",2,[["APoint",$mod.$rtti["TPointF"],2]]);
    $r.addProperty("X",14,rtl.double,"FX","SetX",{stored: "IsXStored"});
    $r.addProperty("Y",14,rtl.double,"FY","SetY",{stored: "IsYStored"});
    $r.addProperty("OnChange",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnChange","FOnChange");
  });
  rtl.createClass(this,"TTMSFNCScaledBitmap",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FBitmap = null;
      this.FScale = 0.0;
      this.FBitmapName = "";
    };
    this.$final = function () {
      this.FBitmap = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.IsScaleStored = function () {
      var Result = false;
      Result = this.FScale !== 1.0;
      return Result;
    };
    this.SetBitmap = function (Value) {
      if (this.FBitmap !== Value) {
        this.FBitmap.Assign(Value);
        this.Changed(false);
      };
    };
    this.SetScale = function (Value) {
      if (this.FScale !== Value) {
        this.FScale = Value;
        this.Changed(false);
      };
    };
    this.SetBitmapName = function (Value) {
      if (this.FBitmapName !== Value) {
        this.FBitmapName = Value;
        this.Changed(false);
      };
    };
    this.BitmapChanged = function (Sender) {
      this.Changed(false);
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      this.FBitmap = $mod.TTMSFNCBitmap.$create("Create$3");
      this.FBitmap.FOnChange = rtl.createCallback(this,"BitmapChanged");
      this.FScale = 1.0;
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FBitmap");
      pas.Classes.TCollectionItem.Destroy.call(this);
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCScaledBitmap.isPrototypeOf(Source)) {
        this.FBitmap.Assign(rtl.as(Source,$mod.TTMSFNCScaledBitmap).FBitmap);
        this.FBitmapName = rtl.as(Source,$mod.TTMSFNCScaledBitmap).FBitmapName;
        this.FScale = rtl.as(Source,$mod.TTMSFNCScaledBitmap).FScale;
      };
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("Bitmap",2,$mod.$rtti["TTMSFNCBitmap"],"FBitmap","SetBitmap");
    $r.addProperty("BitmapName",2,rtl.string,"FBitmapName","SetBitmapName");
    $r.addProperty("Scale",14,rtl.double,"FScale","SetScale",{stored: "IsScaleStored"});
  });
  rtl.createClass(this,"TTMSFNCScaledBitmaps",pas.Classes.TOwnedCollection,function () {
    this.$init = function () {
      pas.Classes.TOwnedCollection.$init.call(this);
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      pas.Classes.TOwnedCollection.$final.call(this);
    };
    this.GetItems = function (Index) {
      var Result = null;
      Result = this.GetItem(Index);
      return Result;
    };
    this.SetItems = function (Index, Value) {
      this.SetItem(Index,Value);
    };
    this.GetBitmap = function (Scale) {
      var Result = null;
      Result = this.GetBitmapByScale(Scale);
      return Result;
    };
    this.SetBitmap = function (Scale, Value) {
      var b = null;
      b = this.GetItemByScale(Scale);
      if (!(b != null)) b = this.Add$1(Scale);
      b.FBitmap.Assign(Value);
    };
    this.Update = function (Item) {
      pas.Classes.TCollection.Update.apply(this,arguments);
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.Create$3 = function (AOwner) {
      pas.Classes.TOwnedCollection.Create$2.call(this,AOwner,$mod.TTMSFNCScaledBitmap);
      return this;
    };
    this.Add$1 = function (Scale) {
      var Result = null;
      Result = pas.Classes.TCollection.Add.call(this);
      Result.SetScale(Scale);
      return Result;
    };
    this.AddBitmapFromResource = function (ResourceName, Scale) {
      var Result = null;
      Result = this.AddBitmapFromResource$1(ResourceName,0,Scale);
      return Result;
    };
    this.AddBitmapFromResource$1 = function (ResourceName, AInstance, Scale) {
      var Result = null;
      Result = this.Add$1(Scale);
      Result.FBitmap.LoadFromResource$1(ResourceName,AInstance);
      return Result;
    };
    this.AddBitmap = function (Bitmap, Scale) {
      var Result = null;
      Result = this.Add$1(Scale);
      Result.FBitmap.Assign(Bitmap);
      return Result;
    };
    this.AddBitmapName = function (BitmapName, Scale) {
      var Result = null;
      Result = this.Add$1(Scale);
      Result.SetBitmapName(BitmapName);
      return Result;
    };
    this.AddDrawBitmap = function (Bitmap, Scale) {
      var Result = null;
      Result = this.Add$1(Scale);
      Result.FBitmap.Assign(Bitmap);
      return Result;
    };
    this.Insert$1 = function (Index) {
      var Result = null;
      Result = pas.Classes.TCollection.Insert.call(this,Index);
      return Result;
    };
    this.Insert$2 = function (Index, Scale) {
      var Result = null;
      Result = pas.Classes.TCollection.Insert.call(this,Index);
      Result.SetScale(Scale);
      return Result;
    };
    this.GetBitmapByScale = function (Scale) {
      var Result = null;
      var it = null;
      Result = null;
      it = this.GetItemByScale(Scale);
      if (it != null) Result = it.FBitmap;
      return Result;
    };
    this.GetItemByScale = function (Scale) {
      var Result = null;
      var I = 0;
      var cl = null;
      var it = null;
      var mx = 0.0;
      Result = null;
      cl = null;
      mx = 0;
      for (var $l = 0, $end = this.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        it = this.GetItems(I);
        if (it.FScale === Scale) {
          Result = it;
          break;
        } else if ((it.FScale !== Scale) && (it.FScale > mx)) {
          cl = it;
          mx = it.FScale;
        };
      };
      if (Result === null) Result = cl;
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$3",2,[["AOwner",pas.Classes.$rtti["TPersistent"]]]);
  });
  this.TTMSFNCPictureFormat = {"0": "pfBMP", pfBMP: 0, "1": "pfGIF", pfGIF: 1, "2": "pfJPG", pfJPG: 2, "3": "pfPNG", pfPNG: 3, "4": "pfICO", pfICO: 4, "5": "pfTiff", pfTiff: 5, "6": "pfMetaFile", pfMetaFile: 6, "7": "pfNone", pfNone: 7};
  this.$rtti.$Enum("TTMSFNCPictureFormat",{minvalue: 0, maxvalue: 7, ordtype: 1, enumtype: this.TTMSFNCPictureFormat});
  rtl.createInterface(this,"ITMSFNCCustomEditor","{CC0C60B7-75F3-47CE-8A7F-8005A19F12E8}",["SetText","SetSelStart","SetSelLength","GetTextLength"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("SetText",0,[["AValue",rtl.string]]);
    $r.addMethod("SetSelStart",0,[["AValue",rtl.longint]]);
    $r.addMethod("SetSelLength",0,[["AValue",rtl.longint]]);
    $r.addMethod("GetTextLength",1,[],rtl.longint);
  });
  rtl.createClass(this,"TTMSFNCOwnedCollection",pas.Classes.TOwnedCollection,function () {
  });
  rtl.createClass(this,"TTMSFNCPersistent",pas.Classes.TPersistent,function () {
  });
  this.InflateRectEx = function (R, DX, DY) {
    R.Left = R.Left - DX;
    R.Right = R.Right + DX;
    R.Top = R.Top - DY;
    R.Bottom = R.Bottom + DY;
  };
  this.ConvertToRectF = function (Rect) {
    var Result = $mod.TRectF.$new();
    Result.Left = Rect.Left;
    Result.Top = Rect.Top;
    Result.Right = Rect.Right;
    Result.Bottom = Rect.Bottom;
    return Result;
  };
  this.ConvertToRectF$1 = function (Rect) {
    var Result = $mod.TRectF.$new();
    Result.$assign(Rect);
    return Result;
  };
  this.ConvertToRect = function (Rect) {
    var Result = pas.Types.TRect.$new();
    Result.Left = Math.round(Rect.Left);
    Result.Top = Math.round(Rect.Top);
    Result.Right = Math.round(Rect.Right);
    Result.Bottom = Math.round(Rect.Bottom);
    return Result;
  };
  this.ConvertToRect$1 = function (Rect) {
    var Result = pas.Types.TRect.$new();
    Result.$assign(Rect);
    return Result;
  };
  this.ConvertToSizeF = function (Size) {
    var Result = $mod.TSizeF.$new();
    Result.cx = Size.cx;
    Result.cy = Size.cy;
    return Result;
  };
  this.ConvertToSizeF$1 = function (Size) {
    var Result = $mod.TSizeF.$new();
    Result.$assign(Size);
    return Result;
  };
  this.ConvertToSize = function (Size) {
    var Result = pas.Types.TSize.$new();
    Result.cx = Math.round(Size.cx);
    Result.cy = Math.round(Size.cy);
    return Result;
  };
  this.ConvertToSize$1 = function (Size) {
    var Result = pas.Types.TSize.$new();
    Result.$assign(Size);
    return Result;
  };
  this.ConvertToPointF = function (Point) {
    var Result = $mod.TPointF.$new();
    Result.X = Point.x;
    Result.Y = Point.y;
    return Result;
  };
  this.ConvertToPointF$1 = function (Point) {
    var Result = $mod.TPointF.$new();
    Result.$assign(Point);
    return Result;
  };
  this.ConvertToPoint = function (Point) {
    var Result = pas.Types.TPoint.$new();
    Result.x = Math.round(Point.X);
    Result.y = Math.round(Point.Y);
    return Result;
  };
  this.ConvertToPoint$1 = function (Point) {
    var Result = pas.Types.TPoint.$new();
    Result.$assign(Point);
    return Result;
  };
  this.OffsetRectEx = function (R, DX, DY) {
    var Result = false;
    R.Left = R.Left + DX;
    R.Right = R.Right + DX;
    R.Top = R.Top + DY;
    R.Bottom = R.Bottom + DY;
    Result = true;
    return Result;
  };
  this.OffsetRectEx$1 = function (R, DX, DY) {
    var Result = false;
    R.Left = R.Left + DX;
    R.Right = R.Right + DX;
    R.Top = R.Top + DY;
    R.Bottom = R.Bottom + DY;
    Result = true;
    return Result;
  };
  this.PtInRectEx = function (Rect, P) {
    var Result = false;
    Result = (P.X >= Rect.Left) && (P.X < Rect.Right) && (P.Y >= Rect.Top) && (P.Y < Rect.Bottom);
    return Result;
  };
  this.IntersectRectEx = function (Rect1, Rect2) {
    var Result = false;
    Result = (Rect1.Left < Rect2.Right) && (Rect1.Right > Rect2.Left) && (Rect1.Top < Rect2.Bottom) && (Rect1.Bottom > Rect2.Top);
    return Result;
  };
  this.IntersectRectEx$1 = function (Rect, R1, R2) {
    var Result = false;
    var tmpRect = $mod.TRectF.$new();
    tmpRect.$assign(R1);
    if (R2.Left > R1.Left) tmpRect.Left = R2.Left;
    if (R2.Top > R1.Top) tmpRect.Top = R2.Top;
    if (R2.Right < R1.Right) tmpRect.Right = R2.Right;
    if (R2.Bottom < R1.Bottom) tmpRect.Bottom = R2.Bottom;
    Result = !$mod.RectIsEmpty(tmpRect);
    if (!Result) {
      tmpRect.Top = 0.0;
      tmpRect.Bottom = 0.0;
      tmpRect.Left = 0.0;
      tmpRect.Right = 0.0;
    };
    Rect.$assign(tmpRect);
    return Result;
  };
  this.EqualRectEx = function (R1, R2) {
    var Result = false;
    Result = (R1.Left === R2.Left) && (R1.Right === R2.Right) && (R1.Top === R2.Top) && (R1.Bottom === R2.Bottom);
    return Result;
  };
  this.EqualRectEx$1 = function (R1, R2) {
    var Result = false;
    Result = (R1.Left === R2.Left) && (R1.Right === R2.Right) && (R1.Top === R2.Top) && (R1.Bottom === R2.Bottom);
    return Result;
  };
  this.RectWidthEx = function (Rect) {
    var Result = 0;
    Result = Rect.Right - Rect.Left;
    return Result;
  };
  this.RectWidthEx$1 = function (Rect) {
    var Result = 0.0;
    Result = Rect.Right - Rect.Left;
    return Result;
  };
  this.RectHeightEx = function (Rect) {
    var Result = 0;
    Result = Rect.Bottom - Rect.Top;
    return Result;
  };
  this.RectHeightEx$1 = function (Rect) {
    var Result = 0.0;
    Result = Rect.Bottom - Rect.Top;
    return Result;
  };
  this.RectCenterEx = function (R, B) {
    var Result = pas.Types.TRect.$new();
    $mod.OffsetRectEx(R,-R.Left,-R.Top);
    $mod.OffsetRectEx(R,rtl.trunc(($mod.RectWidthEx(B) - $mod.RectWidthEx(R)) / 2),rtl.trunc(($mod.RectHeightEx(B) - $mod.RectHeightEx(R)) / 2));
    $mod.OffsetRectEx(R,B.Left,B.Top);
    Result.$assign(R);
    return Result;
  };
  this.RectCenterEx$1 = function (R, B) {
    var Result = $mod.TRectF.$new();
    $mod.OffsetRectEx$1(R,-R.Left,-R.Top);
    $mod.OffsetRectEx$1(R,Math.round(($mod.RectWidthEx$1(B) - $mod.RectWidthEx$1(R)) / 2),Math.round(($mod.RectHeightEx$1(B) - $mod.RectHeightEx$1(R)) / 2));
    $mod.OffsetRectEx$1(R,B.Left,B.Top);
    Result.$assign(R);
    return Result;
  };
  this.RectCenterAtEx = function (Rect, ADesignatedArea) {
    var Result = $mod.TRectF.$new();
    Result.$assign(Rect);
    $mod.RectCenterEx$1(Result,ADesignatedArea);
    return Result;
  };
  this.RectSnapToPixelEx = function (Rect, AScale, APlaceBetweenPixels) {
    var Result = $mod.TRectF.$new();
    var LScale = 0.0;
    var HalfPixel = 0.0;
    if (AScale <= 0) {
      LScale = 1}
     else LScale = AScale;
    Result.Left = pas.System.Trunc(Rect.Left * LScale) / LScale;
    Result.Top = pas.System.Trunc(Rect.Top * LScale) / LScale;
    Result.Right = Result.Left + (Math.round((Rect.Right - Rect.Left) * LScale) / LScale);
    Result.Bottom = Result.Top + (Math.round((Rect.Bottom - Rect.Top) * LScale) / LScale);
    if (APlaceBetweenPixels) {
      HalfPixel = 1 / (2 * LScale);
      $mod.OffsetRectEx$1(Result,HalfPixel,HalfPixel);
    };
    return Result;
  };
  this.RectFitIntoEx = function (Rect, ADesignatedArea, Ratio) {
    var Result = $mod.TRectF.$new();
    if (((ADesignatedArea.Right - ADesignatedArea.Left) <= 0) || ((ADesignatedArea.Bottom - ADesignatedArea.Top) <= 0)) {
      Ratio.set(1);
      return Rect;
    };
    if (((Rect.Right - Rect.Left) / (ADesignatedArea.Right - ADesignatedArea.Left)) > ((Rect.Bottom - Rect.Top) / (ADesignatedArea.Bottom - ADesignatedArea.Top))) {
      Ratio.set((Rect.Right - Rect.Left) / (ADesignatedArea.Right - ADesignatedArea.Left))}
     else Ratio.set((Rect.Bottom - Rect.Top) / (ADesignatedArea.Bottom - ADesignatedArea.Top));
    Result.$assign($mod.RectF(0,0,(Rect.Right - Rect.Left) / Ratio.get(),(Rect.Bottom - Rect.Top) / Ratio.get()));
    $mod.RectCenterEx$1(Result,ADesignatedArea);
    return Result;
  };
  this.RectFitIntoEx$1 = function (Rect, ADesignatedArea) {
    var Result = $mod.TRectF.$new();
    var Ratio = 0.0;
    Result.$assign($mod.RectFitIntoEx(Rect,ADesignatedArea,{get: function () {
        return Ratio;
      }, set: function (v) {
        Ratio = v;
      }}));
    return Result;
  };
  this.GetPointLength = function (Point) {
    var Result = 0.0;
    Result = Math.sqrt(pas.System.Sqr$1(Point.X) + pas.System.Sqr$1(Point.Y));
    return Result;
  };
  this.MakeRectF = function (Left, Top, Width, Height) {
    var Result = $mod.TRectF.$new();
    Result.Left = Left;
    Result.Top = Top;
    Result.Right = Left + Width;
    Result.Bottom = Top + Height;
    return Result;
  };
  this.CenterPointEx = function (R) {
    var Result = $mod.TPointF.$new();
    Result.X = ((R.Right - R.Left) / 2.0) + R.Left;
    Result.Y = ((R.Bottom - R.Top) / 2.0) + R.Top;
    return Result;
  };
  this.CompareValueEx = function (A, B, Epsilon) {
    var Result = 0;
    if (pas.Math.SameValue(A,B,Epsilon)) {
      Result = 0}
     else if (A < B) {
      Result = -1}
     else Result = 1;
    return Result;
  };
  this.RectIsEmpty = function (R) {
    var Result = false;
    Result = (R.Right < R.Left) || pas.Math.SameValue(R.Right,R.Left,0.0) || (R.Bottom < R.Top) || pas.Math.SameValue(R.Bottom,R.Top,0.0);
    return Result;
  };
  this.EmptyRect = function () {
    var Result = $mod.TRectF.$new();
    Result.$assign($mod.RectF(0,0,0,0));
    return Result;
  };
  this.RectIntersectsWithEx = function (ARect, R) {
    var Result = false;
    Result = (ARect.Left < R.Right) && (ARect.Right > R.Left) && (ARect.Top < R.Bottom) && (ARect.Bottom > R.Top);
    return Result;
  };
  this.RectF = function (Left, Top, Right, Bottom) {
    var Result = $mod.TRectF.$new();
    Result.Left = Left;
    Result.Top = Top;
    Result.Bottom = Bottom;
    Result.Right = Right;
    return Result;
  };
  this.PointF = function (X, Y) {
    var Result = $mod.TPointF.$new();
    Result.X = X;
    Result.Y = Y;
    return Result;
  };
  this.BitmapToDrawBitmap = function (ABitmap) {
    var Result = null;
    Result = null;
    if (ABitmap != null) {
      Result = ABitmap;
    };
    return Result;
  };
  this.IsBitmapEmpty = function (ABitmap) {
    var Result = false;
    var b = null;
    Result = true;
    if (ABitmap != null) {
      b = $mod.BitmapToDrawBitmap(ABitmap);
      if (b != null) {
        Result = b.Empty();
      };
    };
    return Result;
  };
  this.CharInArray = function (AChar, ACharArray) {
    var Result = false;
    var ch = "";
    var I = 0;
    Result = false;
    for (var $l = 0, $end = rtl.length(ACharArray) - 1; $l <= $end; $l++) {
      I = $l;
      ch = ACharArray[I];
      if (ch === AChar) {
        Result = true;
        return Result;
      };
    };
    return Result;
  };
  this.CharIsNumber = function (AChar) {
    var Result = false;
    Result = AChar.charCodeAt() in rtl.createSet(null,48,57);
    return Result;
  };
  this.CharIsLetter = function (AChar) {
    var Result = false;
    Result = (AChar.charCodeAt() in rtl.createSet(null,97,122)) || (AChar.charCodeAt() in rtl.createSet(null,65,90));
    return Result;
  };
  this.CharIsHex = function (AChar) {
    var Result = false;
    Result = (AChar.charCodeAt() in rtl.createSet(null,48,57)) || (AChar.charCodeAt() in rtl.createSet(null,97,102)) || (AChar.charCodeAt() in rtl.createSet(null,65,70));
    return Result;
  };
  this.CharIsLetterOrNumber = function (AChar) {
    var Result = false;
    Result = $mod.CharIsLetter(AChar) || $mod.CharIsNumber(AChar);
    return Result;
  };
  this.VarToStr = function (S) {
    var Result = "";
    Result = S;
    return Result;
  };
  this.VarToDateTime = function (S) {
    var Result = 0.0;
    Result = pas.SysUtils.StrToDateTime(S);
    return Result;
  };
  this.AnsiPos = function (Substr, S) {
    var Result = 0;
    Result = pas.System.Pos(Substr,S);
    return Result;
  };
  this.AnsiUpperCase = function (S) {
    var Result = "";
    Result = pas.SysUtils.UpperCase(S);
    return Result;
  };
  this.AnsiLowerCase = function (S) {
    var Result = "";
    Result = pas.SysUtils.LowerCase(S);
    return Result;
  };
  this.HInstance = function () {
    var Result = 0;
    Result = 0;
    return Result;
  };
  this.CreateNewGUID = function () {
    var Result = "";
    var g = pas.System.TGuid.$new();
    pas.SysUtils.CreateGUID(g);
    Result = pas.SysUtils.GUIDToString(g);
    return Result;
  };
},["WEBLib.TMSFNCUtils","WEBLib.TMSFNCPersistence","JS"]);
//# sourceMappingURL=WEBLib.TMSFNCTypes.js.map
