rtl.module("WEBLib.TMSFNCBitmapContainer",["System","Classes","WEBLib.TMSFNCTypes","WEBLib.TMSFNCCustomComponent","WEBLib.Controls"],function () {
  "use strict";
  var $mod = this;
  this.MAJ_VER = 1;
  this.MIN_VER = 0;
  this.REL_VER = 0;
  this.BLD_VER = 0;
  this.$rtti.$Class("TTMSFNCBitmapContainer");
  this.$rtti.$Class("TTMSFNCBitmapItem");
  rtl.createInterface(this,"ITMSFNCBitmapContainer","{ED26710D-395F-4971-8AC9-A31083BF2A3C}",["SetBitmapContainer","GetBitmapContainer"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("SetBitmapContainer",0,[["Value",$mod.$rtti["TTMSFNCBitmapContainer"],2]]);
    $r.addMethod("GetBitmapContainer",1,[],$mod.$rtti["TTMSFNCBitmapContainer"]);
    $r.addProperty("BitmapContainer",3,$mod.$rtti["TTMSFNCBitmapContainer"],"GetBitmapContainer","SetBitmapContainer");
  });
  rtl.createInterface(this,"ITMSFNCBitmapContainerGetItem","{98F65D59-B40C-4574-AF9C-3CA68E86AE10}",["ItemCount","GetItem"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("ItemCount",1,[],rtl.longint);
    $r.addMethod("GetItem",1,[["AIndex",rtl.longint]],$mod.$rtti["TTMSFNCBitmapItem"]);
  });
  rtl.createClass(this,"TTMSFNCBitmapItem",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FBitmap = null;
      this.FTag = 0;
      this.FName = "";
    };
    this.$final = function () {
      this.FBitmap = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.SetBitmap = function (Value) {
      this.FBitmap.Assign(Value);
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      this.FBitmap = pas["WEBLib.TMSFNCTypes"].TTMSFNCBitmap.$create("Create$3");
      this.FBitmap.FOnChange = rtl.createCallback(this,"DoBitmapChanged");
      this.FName = "Item" + pas.SysUtils.IntToStr(this.FCollection.GetCount());
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FBitmap");
      pas.Classes.TCollectionItem.Destroy.call(this);
    };
    this.DoBitmapChanged = function (Sender) {
      if ($mod.TTMSFNCBitmapCollection.isPrototypeOf(this.FCollection)) {
        if (rtl.as(this.FCollection,$mod.TTMSFNCBitmapCollection).FOwner$1 != null) rtl.as(this.FCollection,$mod.TTMSFNCBitmapCollection).FOwner$1.DoBitmapChanged(this);
      };
    };
    this.Assign = function (Source) {
      this.FName = rtl.as(Source,$mod.TTMSFNCBitmapItem).FName;
      this.FTag = rtl.as(Source,$mod.TTMSFNCBitmapItem).FTag;
      this.FBitmap.Assign(rtl.as(Source,$mod.TTMSFNCBitmapItem).FBitmap);
    };
    this.GetDisplayName = function () {
      var Result = "";
      if (this.FName !== "") {
        Result = this.FName}
       else Result = "";
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("Bitmap",2,pas["WEBLib.TMSFNCTypes"].$rtti["TTMSFNCBitmap"],"FBitmap","SetBitmap");
    $r.addProperty("Name",0,rtl.string,"FName","FName");
    $r.addProperty("Tag",0,rtl.nativeint,"FTag","FTag");
  });
  rtl.createClass(this,"TTMSFNCBitmapCollection",pas.Classes.TOwnedCollection,function () {
    this.$init = function () {
      pas.Classes.TOwnedCollection.$init.call(this);
      this.FOwner$1 = null;
    };
    this.$final = function () {
      this.FOwner$1 = undefined;
      pas.Classes.TOwnedCollection.$final.call(this);
    };
    this.GetItemEx = function (Index) {
      var Result = null;
      Result = this.GetItem(Index);
      return Result;
    };
    this.SetItemEx = function (Index, Value) {
      pas.Classes.TCollection.SetItem.call(this,Index,Value);
    };
    this.GetBitmapItemClass = function () {
      var Result = null;
      Result = $mod.TTMSFNCBitmapItem;
      return Result;
    };
    this.Create$3 = function (AOwner) {
      pas.Classes.TOwnedCollection.Create$2.call(this,AOwner,this.GetBitmapItemClass());
      this.FOwner$1 = AOwner;
      return this;
    };
    this.Add$1 = function () {
      var Result = null;
      Result = pas.Classes.TCollection.Add.call(this);
      return Result;
    };
    this.Insert$1 = function (index) {
      var Result = null;
      Result = pas.Classes.TCollection.Insert.call(this,index);
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$3",2,[["AOwner",$mod.$rtti["TTMSFNCBitmapContainer"]]]);
  });
  rtl.createClass(this,"TControlList",pas.Classes.TList,function () {
  });
  rtl.createClass(this,"TTMSFNCBitmapContainer",pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent,function () {
    this.$init = function () {
      pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent.$init.call(this);
      this.FControls$1 = null;
      this.FItems = null;
      this.FOnBitmapChanged = null;
    };
    this.$final = function () {
      this.FControls$1 = undefined;
      this.FItems = undefined;
      this.FOnBitmapChanged = undefined;
      pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent.$final.call(this);
    };
    this.SetItems = function (Value) {
      this.FItems.Assign(Value);
    };
    this.GetBitmapName = function (AIndex) {
      var Result = "";
      Result = "";
      if ((AIndex >= 0) && (AIndex <= (this.GetItems().GetCount() - 1))) Result = this.GetItems().GetItemEx(AIndex).FName;
      return Result;
    };
    this.GetBitmap = function (AIndex) {
      var Result = null;
      Result = null;
      if ((AIndex >= 0) && (AIndex <= (this.GetItems().GetCount() - 1))) Result = this.GetItems().GetItemEx(AIndex).FBitmap;
      return Result;
    };
    this.GetItems = function () {
      var Result = null;
      Result = this.FItems;
      return Result;
    };
    this.GetInstance = function () {
      var Result = 0;
      Result = pas["WEBLib.TMSFNCTypes"].HInstance();
      return Result;
    };
    this.GetVersion = function () {
      var Result = "";
      Result = this.$class.GetVersionNumber(1,0,0,0);
      return Result;
    };
    this.CreateItems = function () {
      var Result = null;
      Result = $mod.TTMSFNCBitmapCollection.$create("Create$3",[this]);
      return Result;
    };
    this.RegisterRuntimeClasses = function () {
      pas.Classes.RegisterClass($mod.TTMSFNCBitmapContainer);
    };
    this.Notification = function (AComponent, Operation) {
      var i = 0;
      pas.Classes.TComponent.Notification.apply(this,arguments);
      if ((Operation === pas.Classes.TOperation.opRemove) && (this.FControls$1 != null)) {
        for (var $l = this.FControls$1.GetCount() - 1; $l >= 0; $l--) {
          i = $l;
          if (this.FControls$1.Get(i) == AComponent) this.FControls$1.Delete(i);
        };
      };
    };
    this.DoBitmapChanged = function (Sender) {
      var f = null;
      var I = 0;
      f = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetParentForm(this);
      if (f != null) {
        for (var $l = 0, $end = f.GetControlsCount() - 1; $l <= $end; $l++) {
          I = $l;
          if (pas["WEBLib.Controls"].TWinControl.isPrototypeOf(f.GetControls(I))) this.InvalidateMembers(rtl.as(f.GetControls(I),pas["WEBLib.Controls"].TWinControl));
        };
      };
      if (this.FOnBitmapChanged != null) this.FOnBitmapChanged(this);
    };
    this.InvalidateMembers = function (AControl) {
      var I = 0;
      if (!(AControl != null)) return;
      if (pas.TypInfo.GetPropInfo$2(AControl,"BitmapContainer") != null) AControl.Invalidate();
      for (var $l = 0, $end = AControl.GetControlsCount() - 1; $l <= $end; $l++) {
        I = $l;
        if (pas["WEBLib.Controls"].TWinControl.isPrototypeOf(AControl.GetControls(I))) this.InvalidateMembers(rtl.as(AControl.GetControls(I),pas["WEBLib.Controls"].TWinControl));
      };
    };
    this.Create$5 = function () {
      this.Create$1(null);
      return this;
    };
    this.Create$1 = function (AOwner) {
      pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent.Create$1.apply(this,arguments);
      this.FItems = this.CreateItems();
      this.FControls$1 = $mod.TControlList.$create("Create$1");
      return this;
    };
    this.Destroy = function () {
      pas.SysUtils.FreeAndNil({p: this, get: function () {
          return this.p.FControls$1;
        }, set: function (v) {
          this.p.FControls$1 = v;
        }});
      rtl.free(this,"FItems");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCBitmapContainer.isPrototypeOf(Source)) {
        this.FItems.Assign(rtl.as(Source,$mod.TTMSFNCBitmapContainer).GetItems());
      } else pas["WEBLib.Controls"].TControl.Assign.apply(this,arguments);
    };
    this.Changed = function () {
      var i = 0;
      for (var $l = 0, $end = this.FControls$1.GetCount() - 1; $l <= $end; $l++) i = $l;
    };
    this.RegisterControl = function (AControl) {
      this.FControls$1.Add(AControl);
    };
    this.FindBitmap = function (i, ABitmap) {
      if ((i >= 0) && (i <= (this.GetItems().GetCount() - 1))) ABitmap.Assign(this.GetItems().GetItemEx(i).FBitmap);
    };
    this.GetItem = function (AIndex) {
      var Result = null;
      Result = null;
      if ((AIndex >= 0) && (AIndex <= (this.ItemCount() - 1))) Result = this.GetItems().GetItemEx(AIndex);
      return Result;
    };
    this.FindBitmap$1 = function (s) {
      var Result = null;
      var i = 0;
      Result = null;
      s = pas.SysUtils.UpperCase(s);
      i = 1;
      while (i <= this.GetItems().GetCount()) {
        if (pas.SysUtils.UpperCase(this.GetItems().GetItemEx(i - 1).FName) === s) {
          Result = this.GetItems().GetItemEx(i - 1).FBitmap;
          break;
        };
        i += 1;
      };
      return Result;
    };
    this.ItemCount = function () {
      var Result = 0;
      Result = this.GetItems().GetCount();
      return Result;
    };
    this.RandomBitmapName = function () {
      var Result = "";
      Result = this.GetBitmapName(pas.System.Random(this.ItemCount()));
      return Result;
    };
    this.RandomBitmap = function () {
      var Result = null;
      Result = this.GetBitmap(pas.System.Random(this.ItemCount()));
      return Result;
    };
    this.AddFromURL = function (URL, BitmapName) {
      var bmpi = null;
      bmpi = this.GetItems().Add$1();
      bmpi.FBitmap.LoadFromURL(URL,null);
      bmpi.FName = BitmapName;
    };
    this.AddFromResource = function (ResourceName, BitmapName, AInstance) {
      var bmpi = null;
      bmpi = this.GetItems().Add$1();
      bmpi.FBitmap.LoadFromResource$1(ResourceName,AInstance);
      bmpi.FName = BitmapName;
    };
    this.AddFromResource$1 = function (ResourceName, BitmapName) {
      this.AddFromResource(ResourceName,BitmapName,this.GetInstance());
    };
    this.AddFromFile = function (FileName, BitmapName) {
      var bmpi = null;
      bmpi = this.GetItems().Add$1();
      bmpi.FBitmap.LoadFromFile(FileName,null);
      bmpi.FName = BitmapName;
    };
    rtl.addIntf(this,$mod.ITMSFNCBitmapContainerGetItem);
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$5",2,[]);
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
    $r.addProperty("Items",3,$mod.$rtti["TTMSFNCBitmapCollection"],"GetItems","SetItems");
    $r.addProperty("Version",1,rtl.string,"GetVersion","");
    $r.addProperty("OnBitmapChanged",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnBitmapChanged","FOnBitmapChanged");
    $r.attr = [pas.Classes.ComponentPlatformsAttribute,"Create$1",[0]];
  });
},["TypInfo","WEBLib.Forms","SysUtils","WEBLib.TMSFNCUtils"]);
//# sourceMappingURL=WEBLib.TMSFNCBitmapContainer.js.map
