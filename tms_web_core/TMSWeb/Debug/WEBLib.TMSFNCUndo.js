rtl.module("WEBLib.TMSFNCUndo",["System","Classes","WEBLib.TMSFNCTypes"],function () {
  "use strict";
  var $mod = this;
  rtl.createClass(this,"TTMSFNCUndoStackItem",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FActionName = "";
      this.FState = null;
      this.FObj = null;
    };
    this.$final = function () {
      this.FState = undefined;
      this.FObj = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.call(this,ACollection);
      this.FState = pas.Classes.TMemoryStream.$create("Create");
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FState");
      pas.Classes.TCollectionItem.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
  });
  rtl.createClass(this,"TTMSFNCUndoManager",pas.Classes.TCollection,function () {
    this.$init = function () {
      pas.Classes.TCollection.$init.call(this);
      this.FCurrent = 0;
      this.FObject = null;
      this.FMaxStackCount = 0;
    };
    this.$final = function () {
      this.FObject = undefined;
      pas.Classes.TCollection.$final.call(this);
    };
    this.GetStackItem = function (Index) {
      var Result = null;
      Result = null;
      if ((Index > -1) && (Index < this.GetCount())) Result = this.GetItem(Index);
      return Result;
    };
    this.NextUndoAction = function () {
      var Result = "";
      Result = "";
      if ((this.FCurrent > -1) && (this.FCurrent < this.GetCount())) Result = this.GetItem(this.FCurrent).FActionName;
      return Result;
    };
    this.NextRedoAction = function () {
      var Result = "";
      Result = "";
      if ((this.FCurrent >= -1) && (this.FCurrent < (this.GetCount() - 1))) Result = this.GetItem(this.FCurrent + 1).FActionName;
      return Result;
    };
    this.CanUndo = function () {
      var Result = false;
      Result = (this.FCurrent > 0) && (this.GetCount() > 0);
      return Result;
    };
    this.CanRedo = function () {
      var Result = false;
      Result = (this.FCurrent < (this.GetCount() - 1)) && (this.GetCount() > 0);
      return Result;
    };
    this.Undo = function () {
      var p = null;
      try {
        if ((this.FCurrent > 0) && (this.FCurrent <= this.GetCount())) {
          var $with = this.GetItem(this.FCurrent - 1);
          $with.FState.SetPosition(0);
          if (pas.SysUtils.Supports$3(this.FObject,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence.$guid,{get: function () {
              return p;
            }, set: function (v) {
              p = v;
            }})) {
            p.LoadSettingsFromStream($with.FState)}
           else pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.LoadSettingsFromStream(this.FObject,$with.FState);
          this.FCurrent -= 1;
        };
      } finally {
        rtl._Release(p);
      };
    };
    this.Redo = function () {
      var p = null;
      try {
        if ((this.FCurrent >= -1) && (this.FCurrent < (this.GetCount() - 1))) {
          var $with = this.GetItem(this.FCurrent + 1);
          $with.FState.SetPosition(0);
          if (pas.SysUtils.Supports$3(this.FObject,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence.$guid,{get: function () {
              return p;
            }, set: function (v) {
              p = v;
            }})) {
            p.LoadSettingsFromStream($with.FState)}
           else pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.LoadSettingsFromStream(this.FObject,$with.FState);
          this.FCurrent += 1;
        };
      } finally {
        rtl._Release(p);
      };
    };
    this.ClearUndoStack = function () {
      this.Clear();
      this.FCurrent = -1;
      this.PushState("");
    };
    this.PushState = function (AActionName) {
      var p = null;
      var it = null;
      try {
        while (this.FCurrent < (this.GetCount() - 1)) {
          it = this.GetItem(this.GetCount() - 1);
          it = rtl.freeLoc(it);
        };
        var $with = this.Add();
        $with.FActionName = AActionName;
        if (pas.SysUtils.Supports$3(this.FObject,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence.$guid,{get: function () {
            return p;
          }, set: function (v) {
            p = v;
          }})) {
          p.SaveSettingsToStream($with.FState,false)}
         else pas["WEBLib.TMSFNCPersistence"].TTMSFNCPersistence.SaveSettingsToStream(this.FObject,$with.FState);
        this.FCurrent += 1;
        if (this.GetCount() > this.FMaxStackCount) {
          this.Delete(0);
          this.FCurrent -= 1;
        };
      } finally {
        rtl._Release(p);
      };
    };
    this.Create$2 = function (AObject) {
      pas.Classes.TCollection.Create$1.call(this,$mod.TTMSFNCUndoStackItem);
      this.FObject = AObject;
      this.FMaxStackCount = 20;
      this.FCurrent = -1;
      return this;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$2",2,[["AObject",pas.System.$rtti["TObject"]]]);
  });
},["SysUtils","WEBLib.TMSFNCPersistence"]);
//# sourceMappingURL=WEBLib.TMSFNCUndo.js.map
