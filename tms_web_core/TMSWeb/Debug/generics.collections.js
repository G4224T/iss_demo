rtl.module("Generics.Collections",["System","Classes","SysUtils","RTLConsts","Types","JS","Generics.Strings","Generics.Defaults"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  $mod.$rtti.$Class("TEnumerator<Generics.Collections.TPair<Generics.Collections.TDictionary.TKey,Generics.Collections.TDictionary.TValue>>");
  $mod.$rtti.$Class("TEnumerable<Generics.Collections.TPair<Generics.Collections.TDictionary.TKey,Generics.Collections.TDictionary.TValue>>");
  $mod.$rtti.$Class("TEnumerator<Generics.Collections.TPair<Generics.Collections.TObjectDictionary.TKey,Generics.Collections.TObjectDictionary.TValue>>");
  $mod.$rtti.$Class("TEnumerable<Generics.Collections.TPair<Generics.Collections.TObjectDictionary.TKey,Generics.Collections.TObjectDictionary.TValue>>");
  $mod.$rtti.$Class("TEnumerator<Generics.Collections.TPair<System.Longint,Generics.Collections.TPair<System.Double,System.Double>>>");
  $mod.$rtti.$Class("TEnumerable<Generics.Collections.TPair<System.Longint,Generics.Collections.TPair<System.Double,System.Double>>>");
  $mod.$rtti.$Class("TEnumerator<System.Longint>");
  $mod.$rtti.$Class("TEnumerator<Generics.Collections.TPair<System.Double,System.Double>>");
  $mod.$rtti.$Class("TEnumerable<Generics.Collections.TPair<System.Double,System.Double>>");
  $mod.$rtti.$Class("TEnumerable<System.Longint>");
  $mod.$rtti.$Class("TDictionary<System.Longint,Generics.Collections.TPair<System.Double,System.Double>>");
  $mod.$rtti.$Class("TEnumerator<Generics.Collections.TPair<System.String,System.TObject>>");
  $mod.$rtti.$Class("TEnumerable<Generics.Collections.TPair<System.String,System.TObject>>");
  $mod.$rtti.$Class("TEnumerator<System.String>");
  $mod.$rtti.$Class("TEnumerator<System.TObject>");
  $mod.$rtti.$Class("TEnumerable<System.TObject>");
  $mod.$rtti.$Class("TEnumerable<System.String>");
  $mod.$rtti.$Class("TDictionary<System.String,System.TObject>");
  $mod.$rtti.$Class("TCustomArrayHelper<System.TObject>");
  $mod.$rtti.$Class("TArrayHelper<System.TObject>");
  $mod.$rtti.$Class("TCustomList<System.TObject>");
  $mod.$rtti.$Class("TCustomListEnumerator<System.TObject>");
  $mod.$rtti.$Class("TList<System.TObject>");
  $mod.$rtti.$Class("TObjectList<System.TObject>");
  $mod.$rtti.$Class("TCustomArrayHelper<System.String>");
  $mod.$rtti.$Class("TArrayHelper<System.String>");
  $mod.$rtti.$Class("TCustomList<System.String>");
  $mod.$rtti.$Class("TCustomListEnumerator<System.String>");
  $mod.$rtti.$Class("TList<System.String>");
  $mod.$rtti.$Class("TCustomArrayHelper<System.Longint>");
  $mod.$rtti.$Class("TArrayHelper<System.Longint>");
  $mod.$rtti.$Class("TCustomList<System.Longint>");
  $mod.$rtti.$Class("TCustomListEnumerator<System.Longint>");
  $mod.$rtti.$Class("TList<System.Longint>");
  $mod.$rtti.$Class("TEnumerator<System.Double>");
  $mod.$rtti.$Class("TEnumerable<System.Double>");
  $mod.$rtti.$Class("TCustomArrayHelper<System.Double>");
  $mod.$rtti.$Class("TArrayHelper<System.Double>");
  $mod.$rtti.$Class("TCustomList<System.Double>");
  $mod.$rtti.$Class("TCustomListEnumerator<System.Double>");
  $mod.$rtti.$Class("TList<System.Double>");
  $mod.$rtti.$Class("TEnumerator<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>");
  $mod.$rtti.$Class("TEnumerable<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>");
  $mod.$rtti.$Class("TCustomArrayHelper<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>");
  $mod.$rtti.$Class("TArrayHelper<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>");
  $mod.$rtti.$Class("TCustomList<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>");
  $mod.$rtti.$Class("TCustomListEnumerator<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>");
  $mod.$rtti.$Class("TList<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>");
  $mod.$rtti.$Class("TObjectList<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>");
  $mod.$rtti.$Class("TEnumerator<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  $mod.$rtti.$Class("TEnumerable<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  $mod.$rtti.$Class("TCustomArrayHelper<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  $mod.$rtti.$Class("TArrayHelper<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  $mod.$rtti.$Class("TCustomList<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  $mod.$rtti.$Class("TCustomListEnumerator<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  $mod.$rtti.$Class("TList<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  $mod.$rtti.$Class("TObjectList<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  $mod.$rtti.$Class("TEnumerator<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>");
  $mod.$rtti.$Class("TEnumerable<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>");
  $mod.$rtti.$Class("TCustomArrayHelper<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>");
  $mod.$rtti.$Class("TArrayHelper<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>");
  $mod.$rtti.$Class("TCustomList<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>");
  $mod.$rtti.$Class("TCustomListEnumerator<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>");
  $mod.$rtti.$Class("TList<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>");
  $mod.$rtti.$Class("TObjectList<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>");
  $mod.$rtti.$Class("TEnumerator<Generics.Collections.TPair<System.String,System.String>>");
  $mod.$rtti.$Class("TEnumerable<Generics.Collections.TPair<System.String,System.String>>");
  $mod.$rtti.$Class("TDictionary<System.String,System.String>");
  $mod.$rtti.$Class("TEnumerator<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>");
  $mod.$rtti.$Class("TEnumerable<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>");
  $mod.$rtti.$Class("TCustomArrayHelper<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>");
  $mod.$rtti.$Class("TArrayHelper<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>");
  $mod.$rtti.$Class("TCustomList<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>");
  $mod.$rtti.$Class("TCustomListEnumerator<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>");
  $mod.$rtti.$Class("TList<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>");
  $mod.$rtti.$Class("TObjectList<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>");
  this.TCollectionNotification = {"0": "cnAdded", cnAdded: 0, "1": "cnRemoved", cnRemoved: 1, "2": "cnExtracted", cnExtracted: 2};
  this.$rtti.$Enum("TCollectionNotification",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TCollectionNotification});
  rtl.recNewT(this,"TBinarySearchResult",function () {
    this.FoundIndex = 0;
    this.CandidateIndex = 0;
    this.CompareResult = 0;
    this.$eq = function (b) {
      return (this.FoundIndex === b.FoundIndex) && (this.CandidateIndex === b.CandidateIndex) && (this.CompareResult === b.CompareResult);
    };
    this.$assign = function (s) {
      this.FoundIndex = s.FoundIndex;
      this.CandidateIndex = s.CandidateIndex;
      this.CompareResult = s.CompareResult;
      return this;
    };
    var $r = $mod.$rtti.$Record("TBinarySearchResult",{});
    $r.addField("FoundIndex",rtl.nativeint);
    $r.addField("CandidateIndex",rtl.nativeint);
    $r.addField("CompareResult",rtl.nativeint);
  });
  this.TDirection = {"0": "FromBeginning", FromBeginning: 0, "1": "fromEnd", fromEnd: 1};
  this.$rtti.$Enum("TDirection",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TDirection});
  rtl.createClass(this,"EDictionary",pas.SysUtils.Exception,function () {
  });
  rtl.createClass(this,"TEnumerator$G12",pas.System.TObject,function () {
    this.MoveNext = function () {
      var Result = false;
      Result = this.DoMoveNext();
      return Result;
    };
  },"TEnumerator<Generics.Collections.TPair<Generics.Collections.TDictionary.TKey,Generics.Collections.TDictionary.TValue>>");
  rtl.createClass(this,"TEnumerable$G11",pas.System.TObject,function () {
    this.GetEnumerator = function () {
      var Result = null;
      Result = this.DoGetEnumerator();
      return Result;
    };
    this.ToArray = function () {
      var Result = [];
      var LEnumerator = null;
      Result = [];
      LEnumerator = this.GetEnumerator();
      try {
        while (LEnumerator.MoveNext()) Result.push($mod.TPair$G1.$clone(LEnumerator.DoGetCurrent()));
      } finally {
        LEnumerator = rtl.freeLoc(LEnumerator);
      };
      return Result;
    };
  },"TEnumerable<Generics.Collections.TPair<Generics.Collections.TDictionary.TKey,Generics.Collections.TDictionary.TValue>>");
  this.TDictionaryOwnership = {"0": "doOwnsKeys", doOwnsKeys: 0, "1": "doOwnsValues", doOwnsValues: 1};
  this.$rtti.$Enum("TDictionaryOwnership",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TDictionaryOwnership});
  this.$rtti.$Set("TDictionaryOwnerships",{comptype: this.$rtti["TDictionaryOwnership"]});
  rtl.createClass(this,"TEnumerator$G15",pas.System.TObject,function () {
    this.MoveNext = function () {
      var Result = false;
      Result = this.DoMoveNext();
      return Result;
    };
  },"TEnumerator<Generics.Collections.TPair<Generics.Collections.TObjectDictionary.TKey,Generics.Collections.TObjectDictionary.TValue>>");
  rtl.createClass(this,"TEnumerable$G14",pas.System.TObject,function () {
    this.GetEnumerator = function () {
      var Result = null;
      Result = this.DoGetEnumerator();
      return Result;
    };
    this.ToArray = function () {
      var Result = [];
      var LEnumerator = null;
      Result = [];
      LEnumerator = this.GetEnumerator();
      try {
        while (LEnumerator.MoveNext()) Result.push($mod.TPair$G2.$clone(LEnumerator.DoGetCurrent()));
      } finally {
        LEnumerator = rtl.freeLoc(LEnumerator);
      };
      return Result;
    };
  },"TEnumerable<Generics.Collections.TPair<Generics.Collections.TObjectDictionary.TKey,Generics.Collections.TObjectDictionary.TValue>>");
  rtl.recNewT(this,"TPair$G3",function () {
    this.Key = 0.0;
    this.Value = 0.0;
    this.$eq = function (b) {
      return (this.Key === b.Key) && (this.Value === b.Value);
    };
    this.$assign = function (s) {
      this.Key = s.Key;
      this.Value = s.Value;
      return this;
    };
    this.Create = function (AKey, AValue) {
      this.Key = AKey;
      this.Value = AValue;
      return this;
    };
    var $r = $mod.$rtti.$Record("TPair<System.Double,System.Double>",{});
    $r.addField("Key",rtl.double);
    $r.addField("Value",rtl.double);
    $r.addMethod("Create",2,[["AKey",rtl.double,2],["AValue",rtl.double,2]]);
  });
  rtl.recNewT(this,"TPair$G4",function () {
    this.Key = 0;
    this.$new = function () {
      var r = Object.create(this);
      r.Value = $mod.TPair$G3.$new();
      return r;
    };
    this.$eq = function (b) {
      return (this.Key === b.Key) && this.Value.$eq(b.Value);
    };
    this.$assign = function (s) {
      this.Key = s.Key;
      this.Value.$assign(s.Value);
      return this;
    };
    this.Create = function (AKey, AValue) {
      this.Key = AKey;
      this.Value.$assign(AValue);
      return this;
    };
    var $r = $mod.$rtti.$Record("TPair<System.Longint,Generics.Collections.TPair<System.Double,System.Double>>",{});
    $r.addField("Key",rtl.longint);
    $r.addField("Value",$mod.$rtti["TPair<System.Double,System.Double>"]);
    $r.addMethod("Create",2,[["AKey",rtl.longint,2],["AValue",$mod.$rtti["TPair<System.Double,System.Double>"],2]]);
  });
  rtl.createClass(this,"TEnumerator$G18",pas.System.TObject,function () {
    this.MoveNext = function () {
      var Result = false;
      Result = this.DoMoveNext();
      return Result;
    };
  },"TEnumerator<Generics.Collections.TPair<System.Longint,Generics.Collections.TPair<System.Double,System.Double>>>");
  rtl.createClass(this,"TEnumerable$G17",pas.System.TObject,function () {
    this.GetEnumerator = function () {
      var Result = null;
      Result = this.DoGetEnumerator();
      return Result;
    };
    this.ToArray = function () {
      var Result = [];
      var LEnumerator = null;
      Result = [];
      LEnumerator = this.GetEnumerator();
      try {
        while (LEnumerator.MoveNext()) Result.push($mod.TPair$G4.$clone(LEnumerator.DoGetCurrent()));
      } finally {
        LEnumerator = rtl.freeLoc(LEnumerator);
      };
      return Result;
    };
  },"TEnumerable<Generics.Collections.TPair<System.Longint,Generics.Collections.TPair<System.Double,System.Double>>>");
  rtl.createClass(this,"TEnumerator$G19",pas.System.TObject,function () {
    this.MoveNext = function () {
      var Result = false;
      Result = this.DoMoveNext();
      return Result;
    };
  },"TEnumerator<System.Longint>");
  rtl.createClass(this,"TEnumerator$G20",pas.System.TObject,function () {
    this.MoveNext = function () {
      var Result = false;
      Result = this.DoMoveNext();
      return Result;
    };
  },"TEnumerator<Generics.Collections.TPair<System.Double,System.Double>>");
  rtl.createClass(this,"TEnumerable$G18",pas.System.TObject,function () {
    this.GetEnumerator = function () {
      var Result = null;
      Result = this.DoGetEnumerator();
      return Result;
    };
    this.ToArray = function () {
      var Result = [];
      var LEnumerator = null;
      Result = [];
      LEnumerator = this.GetEnumerator();
      try {
        while (LEnumerator.MoveNext()) Result.push($mod.TPair$G3.$clone(LEnumerator.DoGetCurrent()));
      } finally {
        LEnumerator = rtl.freeLoc(LEnumerator);
      };
      return Result;
    };
  },"TEnumerable<Generics.Collections.TPair<System.Double,System.Double>>");
  rtl.createClass(this,"TEnumerable$G19",pas.System.TObject,function () {
    this.GetEnumerator = function () {
      var Result = null;
      Result = this.DoGetEnumerator();
      return Result;
    };
    this.ToArray = function () {
      var Result = [];
      var LEnumerator = null;
      Result = [];
      LEnumerator = this.GetEnumerator();
      try {
        while (LEnumerator.MoveNext()) Result.push(LEnumerator.DoGetCurrent());
      } finally {
        LEnumerator = rtl.freeLoc(LEnumerator);
      };
      return Result;
    };
  },"TEnumerable<System.Longint>");
  this.$rtti.$MethodVar("TCollectionNotifyEvent<System.Longint>",{procsig: rtl.newTIProcSig([["ASender",pas.System.$rtti["TObject"]],["AItem",rtl.longint,2],["AAction",this.$rtti["TCollectionNotification"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TCollectionNotifyEvent<Generics.Collections.TPair<System.Double,System.Double>>",{procsig: rtl.newTIProcSig([["ASender",pas.System.$rtti["TObject"]],["AItem",this.$rtti["TPair<System.Double,System.Double>"],2],["AAction",this.$rtti["TCollectionNotification"]]]), methodkind: 0});
  rtl.createClass(this,"TDictionary$G2",this.TEnumerable$G17,function () {
    rtl.createClass(this,"TPairEnumerator",$mod.TEnumerator$G18,function () {
      this.$init = function () {
        $mod.TEnumerator$G18.$init.call(this);
        this.FIter = null;
        this.FVal = null;
      };
      this.$final = function () {
        this.FIter = undefined;
        this.FVal = undefined;
        $mod.TEnumerator$G18.$final.call(this);
      };
      this.GetCurrent = function () {
        var Result = $mod.TPair$G4.$new();
        Result.$assign(this.DoGetCurrent());
        return Result;
      };
      this.DoGetCurrent = function () {
        var Result = $mod.TPair$G4.$new();
        var A = [];
        A = this.FVal.value;
        Result.$assign($mod.TPair$G4.$new());
        Result.Create(rtl.trunc(A[0]),rtl.getObject(A[1]));
        return Result;
      };
      this.DoMoveNext = function () {
        var Result = false;
        this.FVal = this.FIter.next();
        Result = !this.FVal.done;
        return Result;
      };
      this.Create$1 = function (ADictionary) {
        this.FIter = ADictionary.FMap.entries();
        return this;
      };
      this.MoveNext$1 = function () {
        var Result = false;
        Result = this.DoMoveNext();
        return Result;
      };
    },"TDictionary<System.Longint,Generics.Collections.TPair<System.Double,System.Double>>.TPairEnumerator");
    rtl.createClass(this,"TKeyEnumerator",$mod.TEnumerator$G19,function () {
      this.$init = function () {
        $mod.TEnumerator$G19.$init.call(this);
        this.FIter = null;
        this.FVal = null;
      };
      this.$final = function () {
        this.FIter = undefined;
        this.FVal = undefined;
        $mod.TEnumerator$G19.$final.call(this);
      };
      this.GetCurrent = function () {
        var Result = 0;
        Result = this.DoGetCurrent();
        return Result;
      };
      this.DoGetCurrent = function () {
        var Result = 0;
        Result = rtl.trunc(this.FVal.value);
        return Result;
      };
      this.DoMoveNext = function () {
        var Result = false;
        this.FVal = this.FIter.next();
        Result = !this.FVal.done;
        return Result;
      };
      this.Create$1 = function (AIter) {
        this.FIter = AIter;
        return this;
      };
      this.Create$2 = function (ADictionary) {
        this.Create$1(ADictionary.FMap.keys());
        return this;
      };
      this.MoveNext$1 = function () {
        var Result = false;
        Result = this.DoMoveNext();
        return Result;
      };
    },"TDictionary<System.Longint,Generics.Collections.TPair<System.Double,System.Double>>.TKeyEnumerator");
    rtl.createClass(this,"TValueEnumerator",$mod.TEnumerator$G20,function () {
      this.$init = function () {
        $mod.TEnumerator$G20.$init.call(this);
        this.FIter = null;
        this.FVal = null;
      };
      this.$final = function () {
        this.FIter = undefined;
        this.FVal = undefined;
        $mod.TEnumerator$G20.$final.call(this);
      };
      this.GetCurrent = function () {
        var Result = $mod.TPair$G3.$new();
        Result.$assign(this.DoGetCurrent());
        return Result;
      };
      this.DoGetCurrent = function () {
        var Result = $mod.TPair$G3.$new();
        Result.$assign(rtl.getObject(this.FVal.value));
        return Result;
      };
      this.DoMoveNext = function () {
        var Result = false;
        this.FVal = this.FIter.next();
        Result = !this.FVal.done;
        return Result;
      };
      this.Create$1 = function (AIter) {
        this.FIter = AIter;
        return this;
      };
      this.Create$2 = function (ADictionary) {
        this.Create$1(ADictionary.FMap.values());
        return this;
      };
      this.MoveNext$1 = function () {
        var Result = false;
        Result = this.DoMoveNext();
        return Result;
      };
    },"TDictionary<System.Longint,Generics.Collections.TPair<System.Double,System.Double>>.TValueEnumerator");
    rtl.createClass(this,"TValueCollection",$mod.TEnumerable$G18,function () {
      this.$init = function () {
        $mod.TEnumerable$G18.$init.call(this);
        this.FMap = null;
      };
      this.$final = function () {
        this.FMap = undefined;
        $mod.TEnumerable$G18.$final.call(this);
      };
      this.GetCount = function () {
        var Result = 0;
        Result = this.FMap.size;
        return Result;
      };
      this.DoGetEnumerator = function () {
        var Result = null;
        Result = $mod.TDictionary$G2.TValueEnumerator.$create("Create$1",[this.FMap.values()]);
        return Result;
      };
      this.Create$1 = function (ADictionary) {
        this.FMap = ADictionary.FMap;
        return this;
      };
      this.GetEnumerator$1 = function () {
        var Result = null;
        Result = this.DoGetEnumerator();
        return Result;
      };
      this.ToArray = function () {
        var Result = [];
        var I = 0;
        var P = $mod.TPair$G3.$new();
        Result = rtl.arraySetLength(Result,$mod.TPair$G3,this.FMap.size);
        var $in = this.GetEnumerator$1();
        try {
          while ($in.MoveNext$1()) {
            P = $in.GetCurrent();
            Result[I].$assign(P);
            I += 1;
          }
        } finally {
          $in = rtl.freeLoc($in)
        };
        return Result;
      };
    },"TDictionary<System.Longint,Generics.Collections.TPair<System.Double,System.Double>>.TValueCollection");
    rtl.createClass(this,"TKeyCollection",$mod.TEnumerable$G19,function () {
      this.$init = function () {
        $mod.TEnumerable$G19.$init.call(this);
        this.FMap = null;
      };
      this.$final = function () {
        this.FMap = undefined;
        $mod.TEnumerable$G19.$final.call(this);
      };
      this.GetCount = function () {
        var Result = 0;
        Result = this.FMap.size;
        return Result;
      };
      this.DoGetEnumerator = function () {
        var Result = null;
        Result = this.GetEnumerator$1();
        return Result;
      };
      this.Create$1 = function (ADictionary) {
        this.FMap = ADictionary.FMap;
        return this;
      };
      this.GetEnumerator$1 = function () {
        var Result = null;
        Result = $mod.TDictionary$G2.TKeyEnumerator.$create("Create$1",[this.FMap.keys()]);
        return Result;
      };
      this.ToArray = function () {
        var Result = [];
        Result = $mod.TEnumerable$G19.ToArray.call(this);
        return Result;
      };
    },"TDictionary<System.Longint,Generics.Collections.TPair<System.Double,System.Double>>.TKeyCollection");
    this.$init = function () {
      $mod.TEnumerable$G17.$init.call(this);
      this.FMap = null;
      this.FComparer = null;
      this.FOnKeyNotify = null;
      this.FOnValueNotify = null;
      this.FKeyCollection = null;
      this.FValueCollection = null;
    };
    this.$final = function () {
      this.FMap = undefined;
      rtl.setIntfP(this,"FComparer",null);
      this.FOnKeyNotify = undefined;
      this.FOnValueNotify = undefined;
      this.FKeyCollection = undefined;
      this.FValueCollection = undefined;
      $mod.TEnumerable$G17.$final.call(this);
    };
    this.GetEffectiveKey = function (Key) {
      var Result = 0;
      var it = null;
      var v = null;
      if (!(this.FComparer != null)) return Key;
      it = this.FMap.keys();
      v = it.next();
      while (!v.done) {
        Result = rtl.trunc(v.value);
        if (this.FComparer.Compare(Result,Key) === 0) return Result;
        v = it.next();
      };
      Result = Key;
      return Result;
    };
    this.GetItem = function (Key) {
      var Result = $mod.TPair$G3.$new();
      var V = undefined;
      V = this.FMap.get(this.GetEffectiveKey(Key));
      if (pas.JS.isUndefined(V)) throw $mod.EDictionary.$create("Create$1",[rtl.getResStr($mod,"SErrDictKeyNotFound")]);
      Result.$assign(rtl.getObject(V));
      return Result;
    };
    this.SetItem = function (Key, Value) {
      var V = undefined;
      V = this.FMap.get(this.GetEffectiveKey(Key));
      if (!pas.JS.isUndefined(V)) this.ValueNotify(rtl.getObject(V),$mod.TCollectionNotification.cnRemoved);
      this.FMap.set(Key,$mod.TPair$G3.$clone(Value));
      this.ValueNotify(Value,$mod.TCollectionNotification.cnAdded);
    };
    this.DoAdd = function (Key, Value) {
      this.FMap.set(this.GetEffectiveKey(Key),$mod.TPair$G3.$clone(Value));
      this.KeyNotify(Key,$mod.TCollectionNotification.cnAdded);
      this.ValueNotify(Value,$mod.TCollectionNotification.cnAdded);
    };
    this.DoRemove = function (Key, Notification) {
      var Result = $mod.TPair$G3.$new();
      var V = undefined;
      var K = 0;
      K = this.GetEffectiveKey(Key);
      V = this.FMap.get(K);
      if (!pas.JS.isUndefined(V)) {
        this.FMap.delete(K);
        Result.$assign(rtl.getObject(V));
        this.KeyNotify(Key,Notification);
        this.ValueNotify(Result,Notification);
      };
      return Result;
    };
    this.GetCount = function () {
      var Result = 0;
      Result = this.FMap.size;
      return Result;
    };
    this.CanClearMap = function () {
      var Result = false;
      Result = (this.FOnKeyNotify === null) && (this.FOnValueNotify === null);
      return Result;
    };
    this.DoGetEnumerator = function () {
      var Result = null;
      Result = this.TPairEnumerator.$create("Create$1",[this]);
      return Result;
    };
    this.PairNotify = function (Key, Value, Action) {
      this.KeyNotify(Key,Action);
      this.ValueNotify(Value,Action);
    };
    this.KeyNotify = function (Key, Action) {
      if (this.FOnKeyNotify != null) this.FOnKeyNotify(this,Key,Action);
    };
    this.ValueNotify = function (Value, Action) {
      if (this.FOnValueNotify != null) this.FOnValueNotify(this,Value,Action);
    };
    this.Create$1 = function (ACapacity) {
      this.FMap = new Map();
      if (ACapacity > 0) ;
      return this;
    };
    this.Create$2 = function (Collection) {
      var aPair = $mod.TPair$G4.$new();
      this.Create$1(0);
      var $in = Collection.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          aPair = $in.DoGetCurrent();
          this.Add(aPair.Key,aPair.Value);
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
      return this;
    };
    this.Create$3 = function (AComparer) {
      this.Create$1(0);
      rtl.setIntfP(this,"FComparer",AComparer);
      return this;
    };
    this.Destroy = function () {
      pas.SysUtils.FreeAndNil({p: this, get: function () {
          return this.p.FKeyCollection;
        }, set: function (v) {
          this.p.FKeyCollection = v;
        }});
      pas.SysUtils.FreeAndNil({p: this, get: function () {
          return this.p.FValueCollection;
        }, set: function (v) {
          this.p.FValueCollection = v;
        }});
      this.Clear();
      this.FMap = null;
      pas.System.TObject.Destroy.call(this);
    };
    this.Add = function (Key, Value) {
      if (this.FMap.has(this.GetEffectiveKey(Key))) throw $mod.EDictionary.$create("Create$1",[rtl.getResStr($mod,"SErrDictDuplicateKey")]);
      this.DoAdd(Key,Value);
    };
    this.Remove = function (Key) {
      this.DoRemove(Key,$mod.TCollectionNotification.cnRemoved);
    };
    this.ExtractPair = function (Key) {
      var Result = $mod.TPair$G4.$new();
      var K = 0;
      Result.$assign($mod.TPair$G4.$new());
      K = this.GetEffectiveKey(Key);
      if (this.FMap.has(K)) {
        Result.Create(Key,rtl.getObject(this.FMap.get(K)));
        this.FMap.delete(K);
      } else Result.Create(Key,$mod.TPair$G3.$new());
      return Result;
    };
    this.Clear = function () {
      var Iter = null;
      var IVal = null;
      var A = [];
      var K = 0;
      var V = $mod.TPair$G3.$new();
      if (this.CanClearMap()) {
        this.FMap.clear()}
       else {
        Iter = this.FMap.entries();
        do {
          IVal = Iter.next();
          if (!IVal.done) {
            A = IVal.value;
            K = rtl.trunc(A[0]);
            V.$assign(rtl.getObject(A[1]));
            this.FMap.delete(K);
            this.PairNotify(K,$mod.TPair$G3.$clone(V),$mod.TCollectionNotification.cnRemoved);
          };
        } while (!IVal.done);
      };
    };
    this.TryGetValue = function (Key, Value) {
      var Result = false;
      var K = 0;
      K = this.GetEffectiveKey(Key);
      Result = this.FMap.has(K);
      if (Result) Value.$assign(rtl.getObject(this.FMap.get(K)));
      return Result;
    };
    this.AddOrSetValue = function (Key, Value) {
      var k = 0;
      k = this.GetEffectiveKey(Key);
      if (!this.FMap.has(k)) {
        this.DoAdd(Key,Value)}
       else this.SetItem(k,Value);
    };
    this.ContainsKey = function (Key) {
      var Result = false;
      Result = this.FMap.has(this.GetEffectiveKey(Key));
      return Result;
    };
    this.ContainsValue = function (Value) {
      var Result = false;
      var It = null;
      var Res = null;
      Result = false;
      It = this.FMap.values();
      do {
        Res = It.next();
        if (!Res.done) Result = Value.$eq(rtl.getObject(Res.value));
      } while (!(Result || Res.done));
      return Result;
    };
    this.ToArray = function () {
      var Result = [];
      Result = $mod.TEnumerable$G17.ToArray.call(this);
      return Result;
    };
    this.GetKeys = function () {
      var Result = null;
      if (this.FKeyCollection === null) this.FKeyCollection = this.TKeyCollection.$create("Create$1",[this]);
      Result = this.FKeyCollection;
      return Result;
    };
    this.GetValues = function () {
      var Result = null;
      if (this.FValueCollection === null) this.FValueCollection = this.TValueCollection.$create("Create$1",[this]);
      Result = this.FValueCollection;
      return Result;
    };
    this.GetEnumerator$1 = function () {
      var Result = null;
      Result = this.TPairEnumerator.$create("Create$1",[this]);
      return Result;
    };
  },"TDictionary<System.Longint,Generics.Collections.TPair<System.Double,System.Double>>");
  rtl.recNewT(this,"TPair$G5",function () {
    this.Key = "";
    this.Value = null;
    this.$eq = function (b) {
      return (this.Key === b.Key) && (this.Value === b.Value);
    };
    this.$assign = function (s) {
      this.Key = s.Key;
      this.Value = s.Value;
      return this;
    };
    this.Create = function (AKey, AValue) {
      this.Key = AKey;
      this.Value = AValue;
      return this;
    };
    var $r = $mod.$rtti.$Record("TPair<System.String,System.TObject>",{});
    $r.addField("Key",rtl.string);
    $r.addField("Value",pas.System.$rtti["TObject"]);
    $r.addMethod("Create",2,[["AKey",rtl.string,2],["AValue",pas.System.$rtti["TObject"],2]]);
  });
  rtl.createClass(this,"TEnumerator$G21",pas.System.TObject,function () {
    this.MoveNext = function () {
      var Result = false;
      Result = this.DoMoveNext();
      return Result;
    };
  },"TEnumerator<Generics.Collections.TPair<System.String,System.TObject>>");
  rtl.createClass(this,"TEnumerable$G20",pas.System.TObject,function () {
    this.GetEnumerator = function () {
      var Result = null;
      Result = this.DoGetEnumerator();
      return Result;
    };
    this.ToArray = function () {
      var Result = [];
      var LEnumerator = null;
      Result = [];
      LEnumerator = this.GetEnumerator();
      try {
        while (LEnumerator.MoveNext()) Result.push($mod.TPair$G5.$clone(LEnumerator.DoGetCurrent()));
      } finally {
        LEnumerator = rtl.freeLoc(LEnumerator);
      };
      return Result;
    };
  },"TEnumerable<Generics.Collections.TPair<System.String,System.TObject>>");
  rtl.createClass(this,"TEnumerator$G22",pas.System.TObject,function () {
    this.MoveNext = function () {
      var Result = false;
      Result = this.DoMoveNext();
      return Result;
    };
  },"TEnumerator<System.String>");
  rtl.createClass(this,"TEnumerator$G23",pas.System.TObject,function () {
    this.MoveNext = function () {
      var Result = false;
      Result = this.DoMoveNext();
      return Result;
    };
  },"TEnumerator<System.TObject>");
  rtl.createClass(this,"TEnumerable$G21",pas.System.TObject,function () {
    this.GetEnumerator = function () {
      var Result = null;
      Result = this.DoGetEnumerator();
      return Result;
    };
    this.ToArray = function () {
      var Result = [];
      var LEnumerator = null;
      Result = [];
      LEnumerator = this.GetEnumerator();
      try {
        while (LEnumerator.MoveNext()) Result.push(LEnumerator.DoGetCurrent());
      } finally {
        LEnumerator = rtl.freeLoc(LEnumerator);
      };
      return Result;
    };
  },"TEnumerable<System.TObject>");
  rtl.createClass(this,"TEnumerable$G22",pas.System.TObject,function () {
    this.GetEnumerator = function () {
      var Result = null;
      Result = this.DoGetEnumerator();
      return Result;
    };
    this.ToArray = function () {
      var Result = [];
      var LEnumerator = null;
      Result = [];
      LEnumerator = this.GetEnumerator();
      try {
        while (LEnumerator.MoveNext()) Result.push(LEnumerator.DoGetCurrent());
      } finally {
        LEnumerator = rtl.freeLoc(LEnumerator);
      };
      return Result;
    };
  },"TEnumerable<System.String>");
  this.$rtti.$MethodVar("TCollectionNotifyEvent<System.String>",{procsig: rtl.newTIProcSig([["ASender",pas.System.$rtti["TObject"]],["AItem",rtl.string,2],["AAction",this.$rtti["TCollectionNotification"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TCollectionNotifyEvent<System.TObject>",{procsig: rtl.newTIProcSig([["ASender",pas.System.$rtti["TObject"]],["AItem",pas.System.$rtti["TObject"],2],["AAction",this.$rtti["TCollectionNotification"]]]), methodkind: 0});
  rtl.createClass(this,"TDictionary$G3",this.TEnumerable$G20,function () {
    rtl.createClass(this,"TPairEnumerator",$mod.TEnumerator$G21,function () {
      this.$init = function () {
        $mod.TEnumerator$G21.$init.call(this);
        this.FIter = null;
        this.FVal = null;
      };
      this.$final = function () {
        this.FIter = undefined;
        this.FVal = undefined;
        $mod.TEnumerator$G21.$final.call(this);
      };
      this.GetCurrent = function () {
        var Result = $mod.TPair$G5.$new();
        Result.$assign(this.DoGetCurrent());
        return Result;
      };
      this.DoGetCurrent = function () {
        var Result = $mod.TPair$G5.$new();
        var A = [];
        A = this.FVal.value;
        Result.$assign($mod.TPair$G5.$new());
        Result.Create("" + A[0],rtl.getObject(A[1]));
        return Result;
      };
      this.DoMoveNext = function () {
        var Result = false;
        this.FVal = this.FIter.next();
        Result = !this.FVal.done;
        return Result;
      };
      this.Create$1 = function (ADictionary) {
        this.FIter = ADictionary.FMap.entries();
        return this;
      };
      this.MoveNext$1 = function () {
        var Result = false;
        Result = this.DoMoveNext();
        return Result;
      };
    },"TDictionary<System.String,System.TObject>.TPairEnumerator");
    rtl.createClass(this,"TKeyEnumerator",$mod.TEnumerator$G22,function () {
      this.$init = function () {
        $mod.TEnumerator$G22.$init.call(this);
        this.FIter = null;
        this.FVal = null;
      };
      this.$final = function () {
        this.FIter = undefined;
        this.FVal = undefined;
        $mod.TEnumerator$G22.$final.call(this);
      };
      this.GetCurrent = function () {
        var Result = "";
        Result = this.DoGetCurrent();
        return Result;
      };
      this.DoGetCurrent = function () {
        var Result = "";
        Result = "" + this.FVal.value;
        return Result;
      };
      this.DoMoveNext = function () {
        var Result = false;
        this.FVal = this.FIter.next();
        Result = !this.FVal.done;
        return Result;
      };
      this.Create$1 = function (AIter) {
        this.FIter = AIter;
        return this;
      };
      this.Create$2 = function (ADictionary) {
        this.Create$1(ADictionary.FMap.keys());
        return this;
      };
      this.MoveNext$1 = function () {
        var Result = false;
        Result = this.DoMoveNext();
        return Result;
      };
    },"TDictionary<System.String,System.TObject>.TKeyEnumerator");
    rtl.createClass(this,"TValueEnumerator",$mod.TEnumerator$G23,function () {
      this.$init = function () {
        $mod.TEnumerator$G23.$init.call(this);
        this.FIter = null;
        this.FVal = null;
      };
      this.$final = function () {
        this.FIter = undefined;
        this.FVal = undefined;
        $mod.TEnumerator$G23.$final.call(this);
      };
      this.GetCurrent = function () {
        var Result = null;
        Result = this.DoGetCurrent();
        return Result;
      };
      this.DoGetCurrent = function () {
        var Result = null;
        Result = rtl.getObject(this.FVal.value);
        return Result;
      };
      this.DoMoveNext = function () {
        var Result = false;
        this.FVal = this.FIter.next();
        Result = !this.FVal.done;
        return Result;
      };
      this.Create$1 = function (AIter) {
        this.FIter = AIter;
        return this;
      };
      this.Create$2 = function (ADictionary) {
        this.Create$1(ADictionary.FMap.values());
        return this;
      };
      this.MoveNext$1 = function () {
        var Result = false;
        Result = this.DoMoveNext();
        return Result;
      };
    },"TDictionary<System.String,System.TObject>.TValueEnumerator");
    rtl.createClass(this,"TValueCollection",$mod.TEnumerable$G21,function () {
      this.$init = function () {
        $mod.TEnumerable$G21.$init.call(this);
        this.FMap = null;
      };
      this.$final = function () {
        this.FMap = undefined;
        $mod.TEnumerable$G21.$final.call(this);
      };
      this.GetCount = function () {
        var Result = 0;
        Result = this.FMap.size;
        return Result;
      };
      this.DoGetEnumerator = function () {
        var Result = null;
        Result = $mod.TDictionary$G3.TValueEnumerator.$create("Create$1",[this.FMap.values()]);
        return Result;
      };
      this.Create$1 = function (ADictionary) {
        this.FMap = ADictionary.FMap;
        return this;
      };
      this.GetEnumerator$1 = function () {
        var Result = null;
        Result = this.DoGetEnumerator();
        return Result;
      };
      this.ToArray = function () {
        var Result = [];
        var I = 0;
        var P = null;
        Result = rtl.arraySetLength(Result,null,this.FMap.size);
        var $in = this.GetEnumerator$1();
        try {
          while ($in.MoveNext$1()) {
            P = $in.GetCurrent();
            Result[I] = P;
            I += 1;
          }
        } finally {
          $in = rtl.freeLoc($in)
        };
        return Result;
      };
    },"TDictionary<System.String,System.TObject>.TValueCollection");
    rtl.createClass(this,"TKeyCollection",$mod.TEnumerable$G22,function () {
      this.$init = function () {
        $mod.TEnumerable$G22.$init.call(this);
        this.FMap = null;
      };
      this.$final = function () {
        this.FMap = undefined;
        $mod.TEnumerable$G22.$final.call(this);
      };
      this.GetCount = function () {
        var Result = 0;
        Result = this.FMap.size;
        return Result;
      };
      this.DoGetEnumerator = function () {
        var Result = null;
        Result = this.GetEnumerator$1();
        return Result;
      };
      this.Create$1 = function (ADictionary) {
        this.FMap = ADictionary.FMap;
        return this;
      };
      this.GetEnumerator$1 = function () {
        var Result = null;
        Result = $mod.TDictionary$G3.TKeyEnumerator.$create("Create$1",[this.FMap.keys()]);
        return Result;
      };
      this.ToArray = function () {
        var Result = [];
        Result = $mod.TEnumerable$G22.ToArray.call(this);
        return Result;
      };
    },"TDictionary<System.String,System.TObject>.TKeyCollection");
    this.$init = function () {
      $mod.TEnumerable$G20.$init.call(this);
      this.FMap = null;
      this.FComparer = null;
      this.FOnKeyNotify = null;
      this.FOnValueNotify = null;
      this.FKeyCollection = null;
      this.FValueCollection = null;
    };
    this.$final = function () {
      this.FMap = undefined;
      rtl.setIntfP(this,"FComparer",null);
      this.FOnKeyNotify = undefined;
      this.FOnValueNotify = undefined;
      this.FKeyCollection = undefined;
      this.FValueCollection = undefined;
      $mod.TEnumerable$G20.$final.call(this);
    };
    this.GetEffectiveKey = function (Key) {
      var Result = "";
      var it = null;
      var v = null;
      if (!(this.FComparer != null)) return Key;
      it = this.FMap.keys();
      v = it.next();
      while (!v.done) {
        Result = "" + v.value;
        if (this.FComparer.Compare(Result,Key) === 0) return Result;
        v = it.next();
      };
      Result = Key;
      return Result;
    };
    this.GetItem = function (Key) {
      var Result = null;
      var V = undefined;
      V = this.FMap.get(this.GetEffectiveKey(Key));
      if (pas.JS.isUndefined(V)) throw $mod.EDictionary.$create("Create$1",[rtl.getResStr($mod,"SErrDictKeyNotFound")]);
      Result = rtl.getObject(V);
      return Result;
    };
    this.SetItem = function (Key, Value) {
      var V = undefined;
      V = this.FMap.get(this.GetEffectiveKey(Key));
      if (!pas.JS.isUndefined(V)) this.ValueNotify(rtl.getObject(V),$mod.TCollectionNotification.cnRemoved);
      this.FMap.set(Key,Value);
      this.ValueNotify(Value,$mod.TCollectionNotification.cnAdded);
    };
    this.DoAdd = function (Key, Value) {
      this.FMap.set(this.GetEffectiveKey(Key),Value);
      this.KeyNotify(Key,$mod.TCollectionNotification.cnAdded);
      this.ValueNotify(Value,$mod.TCollectionNotification.cnAdded);
    };
    this.DoRemove = function (Key, Notification) {
      var Result = null;
      var V = undefined;
      var K = "";
      K = this.GetEffectiveKey(Key);
      V = this.FMap.get(K);
      if (!pas.JS.isUndefined(V)) {
        this.FMap.delete(K);
        Result = rtl.getObject(V);
        this.KeyNotify(Key,Notification);
        this.ValueNotify(Result,Notification);
      };
      return Result;
    };
    this.GetCount = function () {
      var Result = 0;
      Result = this.FMap.size;
      return Result;
    };
    this.CanClearMap = function () {
      var Result = false;
      Result = (this.FOnKeyNotify === null) && (this.FOnValueNotify === null);
      return Result;
    };
    this.DoGetEnumerator = function () {
      var Result = null;
      Result = this.TPairEnumerator.$create("Create$1",[this]);
      return Result;
    };
    this.PairNotify = function (Key, Value, Action) {
      this.KeyNotify(Key,Action);
      this.ValueNotify(Value,Action);
    };
    this.KeyNotify = function (Key, Action) {
      if (this.FOnKeyNotify != null) this.FOnKeyNotify(this,Key,Action);
    };
    this.ValueNotify = function (Value, Action) {
      if (this.FOnValueNotify != null) this.FOnValueNotify(this,Value,Action);
    };
    this.Create$1 = function (ACapacity) {
      this.FMap = new Map();
      if (ACapacity > 0) ;
      return this;
    };
    this.Create$2 = function (Collection) {
      var aPair = $mod.TPair$G5.$new();
      this.Create$1(0);
      var $in = Collection.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          aPair = $in.DoGetCurrent();
          this.Add(aPair.Key,aPair.Value);
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
      return this;
    };
    this.Create$3 = function (AComparer) {
      this.Create$1(0);
      rtl.setIntfP(this,"FComparer",AComparer);
      return this;
    };
    this.Destroy = function () {
      pas.SysUtils.FreeAndNil({p: this, get: function () {
          return this.p.FKeyCollection;
        }, set: function (v) {
          this.p.FKeyCollection = v;
        }});
      pas.SysUtils.FreeAndNil({p: this, get: function () {
          return this.p.FValueCollection;
        }, set: function (v) {
          this.p.FValueCollection = v;
        }});
      this.Clear();
      this.FMap = null;
      pas.System.TObject.Destroy.call(this);
    };
    this.Add = function (Key, Value) {
      if (this.FMap.has(this.GetEffectiveKey(Key))) throw $mod.EDictionary.$create("Create$1",[rtl.getResStr($mod,"SErrDictDuplicateKey")]);
      this.DoAdd(Key,Value);
    };
    this.Remove = function (Key) {
      this.DoRemove(Key,$mod.TCollectionNotification.cnRemoved);
    };
    this.ExtractPair = function (Key) {
      var Result = $mod.TPair$G5.$new();
      var K = "";
      Result.$assign($mod.TPair$G5.$new());
      K = this.GetEffectiveKey(Key);
      if (this.FMap.has(K)) {
        Result.Create(Key,rtl.getObject(this.FMap.get(K)));
        this.FMap.delete(K);
      } else Result.Create(Key,null);
      return Result;
    };
    this.Clear = function () {
      var Iter = null;
      var IVal = null;
      var A = [];
      var K = "";
      var V = null;
      if (this.CanClearMap()) {
        this.FMap.clear()}
       else {
        Iter = this.FMap.entries();
        do {
          IVal = Iter.next();
          if (!IVal.done) {
            A = IVal.value;
            K = "" + A[0];
            V = rtl.getObject(A[1]);
            this.FMap.delete(K);
            this.PairNotify(K,V,$mod.TCollectionNotification.cnRemoved);
          };
        } while (!IVal.done);
      };
    };
    this.TryGetValue = function (Key, Value) {
      var Result = false;
      var K = "";
      K = this.GetEffectiveKey(Key);
      Result = this.FMap.has(K);
      if (Result) Value.set(rtl.getObject(this.FMap.get(K)));
      return Result;
    };
    this.AddOrSetValue = function (Key, Value) {
      var k = "";
      k = this.GetEffectiveKey(Key);
      if (!this.FMap.has(k)) {
        this.DoAdd(Key,Value)}
       else this.SetItem(k,Value);
    };
    this.ContainsKey = function (Key) {
      var Result = false;
      Result = this.FMap.has(this.GetEffectiveKey(Key));
      return Result;
    };
    this.ContainsValue = function (Value) {
      var Result = false;
      var It = null;
      var Res = null;
      Result = false;
      It = this.FMap.values();
      do {
        Res = It.next();
        if (!Res.done) Result = Value === rtl.getObject(Res.value);
      } while (!(Result || Res.done));
      return Result;
    };
    this.ToArray = function () {
      var Result = [];
      Result = $mod.TEnumerable$G20.ToArray.call(this);
      return Result;
    };
    this.GetKeys = function () {
      var Result = null;
      if (this.FKeyCollection === null) this.FKeyCollection = this.TKeyCollection.$create("Create$1",[this]);
      Result = this.FKeyCollection;
      return Result;
    };
    this.GetValues = function () {
      var Result = null;
      if (this.FValueCollection === null) this.FValueCollection = this.TValueCollection.$create("Create$1",[this]);
      Result = this.FValueCollection;
      return Result;
    };
    this.GetEnumerator$1 = function () {
      var Result = null;
      Result = this.TPairEnumerator.$create("Create$1",[this]);
      return Result;
    };
  },"TDictionary<System.String,System.TObject>");
  rtl.createClass(this,"TCustomArrayHelper$G12",pas.System.TObject,function () {
    this.Sort = function (AValues, AComparer) {
      this.Sort$1(AValues,AComparer,0,rtl.length(AValues.get()));
    };
    this.Sort$1 = function (AValues, AComparer, AIndex, ACount) {
      if (ACount <= 1) return;
      this.QuickSort(AValues,AIndex,(AIndex + ACount) - 1,AComparer);
    };
    this.BinarySearch$2 = function (AValues, AItem, AFoundIndex, AComparer) {
      var Result = false;
      Result = this.BinarySearch$1(AValues,AItem,AFoundIndex,AComparer,0,rtl.length(AValues));
      return Result;
    };
    this.BinarySearch$3 = function (AValues, AItem, ASearchResult, AComparer) {
      var Result = false;
      Result = this.BinarySearch(AValues,AItem,ASearchResult,AComparer,0,rtl.length(AValues));
      return Result;
    };
  },"TCustomArrayHelper<System.TObject>");
  rtl.createClass(this,"TArrayHelper$G11",this.TCustomArrayHelper$G12,function () {
    this.QuickSort = function (AValues, ALeft, ARight, AComparer) {
      var I = 0;
      var J = 0;
      var P = null;
      var Q = null;
      if (((ARight - ALeft) <= 0) || (rtl.length(AValues.get()) === 0)) return;
      do {
        I = ALeft;
        J = ARight;
        P = AValues.get()[ALeft + Math.floor((ARight - ALeft) / 2)];
        do {
          while (AComparer.Compare(AValues.get()[I],P) < 0) I += 1;
          while (AComparer.Compare(AValues.get()[J],P) > 0) J -= 1;
          if (I <= J) {
            if (I !== J) {
              Q = AValues.get()[I];
              AValues.get()[I] = AValues.get()[J];
              AValues.get()[J] = Q;
            };
            I += 1;
            J -= 1;
          };
        } while (!(I > J));
        if ((J - ALeft) < (ARight - I)) {
          if (ALeft < J) this.QuickSort(AValues,ALeft,J,AComparer);
          ALeft = I;
        } else {
          if (I < ARight) this.QuickSort(AValues,I,ARight,AComparer);
          ARight = J;
        };
      } while (!(ALeft >= ARight));
    };
    this.BinarySearch = function (AValues, AItem, ASearchResult, AComparer, AIndex, ACount) {
      var Result = false;
      var imin = 0;
      var imax = 0;
      var imid = 0;
      var ilo = 0;
      imin = AIndex;
      imax = (AIndex + ACount) - 1;
      ilo = imid * imid;
      imid = ilo * imid;
      while (imin < imax) {
        imid = rtl.trunc((imax + imin) / 2);
        ASearchResult.CompareResult = AComparer.Compare(AValues[imid],AItem);
        if (ASearchResult.CompareResult < 0) {
          imin = imid + 1}
         else {
          if (ASearchResult.CompareResult === 0) {
            ASearchResult.FoundIndex = imid;
            ASearchResult.CandidateIndex = imid;
            return true;
          };
          imax = imid;
        };
      };
      Result = imax === imin;
      if (Result) {
        ASearchResult.CompareResult = AComparer.Compare(AValues[imin],AItem);
        ASearchResult.CandidateIndex = imin;
        Result = ASearchResult.CompareResult === 0;
        if (Result) {
          ASearchResult.FoundIndex = imin}
         else ASearchResult.FoundIndex = -1;
      } else {
        ASearchResult.CompareResult = 0;
        ASearchResult.FoundIndex = -1;
        ASearchResult.CandidateIndex = -1;
      };
      return Result;
    };
    this.BinarySearch$1 = function (AValues, AItem, AFoundIndex, AComparer, AIndex, ACount) {
      var Result = false;
      var imin = 0;
      var imax = 0;
      var imid = 0;
      var LCompare = 0;
      imin = AIndex;
      imax = (AIndex + ACount) - 1;
      while (imin < imax) {
        imid = rtl.trunc((imin + imax) / 2);
        LCompare = AComparer.Compare(AValues[imid],AItem);
        if (LCompare < 0) {
          imin = imid + 1}
         else {
          if (LCompare === 0) {
            AFoundIndex.set(imid);
            return true;
          };
          imax = imid;
        };
      };
      LCompare = AComparer.Compare(AValues[imin],AItem);
      Result = (imax === imin) && (LCompare === 0);
      if (Result) {
        AFoundIndex.set(imin)}
       else AFoundIndex.set(-1);
      return Result;
    };
  },"TArrayHelper<System.TObject>");
  rtl.createClass(this,"TCustomList$G10",this.TEnumerable$G21,function () {
    this.$init = function () {
      $mod.TEnumerable$G21.$init.call(this);
      this.FOnNotify = null;
      this.FLength = 0;
      this.FItems = [];
    };
    this.$final = function () {
      this.FOnNotify = undefined;
      this.FItems = undefined;
      $mod.TEnumerable$G21.$final.call(this);
    };
    this.GetCapacity = function () {
      var Result = 0;
      Result = rtl.length(this.FItems);
      return Result;
    };
    this.PrepareAddingItem = function () {
      var Result = 0;
      if (this.FLength === rtl.length(this.FItems)) this.FItems.push(null);
      Result = this.FLength;
      this.FLength += 1;
      return Result;
    };
    this.PrepareAddingRange = function (ACount) {
      var Result = 0;
      var l = 0;
      if (ACount < 0) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      if (ACount === 0) return this.FLength - 1;
      for (var $l = rtl.length(this.FItems) + 1, $end = this.FLength + ACount; $l <= $end; $l++) {
        l = $l;
        this.FItems.push(null);
      };
      Result = this.FLength;
      this.FLength += ACount;
      return Result;
    };
    this.Notify = function (AValue, ACollectionNotification) {
      if (this.FOnNotify != null) this.FOnNotify(this,AValue,ACollectionNotification);
    };
    this.DoRemove = function (AIndex, ACollectionNotification) {
      var Result = null;
      if ((AIndex < 0) || (AIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      Result = this.FItems[AIndex];
      this.FLength -= 1;
      this.FItems[AIndex] = null;
      this.FItems.splice(AIndex,1);
      this.Notify(Result,ACollectionNotification);
      return Result;
    };
    this.GetCount = function () {
      var Result = 0;
      Result = this.FLength;
      return Result;
    };
    var $r = this.$rtti;
    $mod.$rtti.$DynArray("TCustomList<System.TObject>.FItems$a",{eltype: pas.System.$rtti["TObject"]});
  },"TCustomList<System.TObject>");
  rtl.createClass(this,"TCustomListEnumerator$G8",this.TEnumerator$G23,function () {
    this.$init = function () {
      $mod.TEnumerator$G23.$init.call(this);
      this.FList = null;
      this.FIndex = 0;
    };
    this.$final = function () {
      this.FList = undefined;
      $mod.TEnumerator$G23.$final.call(this);
    };
    this.DoMoveNext = function () {
      var Result = false;
      this.FIndex += 1;
      Result = (this.FList.FLength > 0) && (this.FIndex < this.FList.FLength);
      return Result;
    };
    this.DoGetCurrent = function () {
      var Result = null;
      Result = this.GetCurrent();
      return Result;
    };
    this.GetCurrent = function () {
      var Result = null;
      Result = this.FList.FItems[this.FIndex];
      return Result;
    };
    this.Create$1 = function (AList) {
      pas.System.TObject.Create.call(this);
      this.FIndex = -1;
      this.FList = AList;
      return this;
    };
  },"TCustomListEnumerator<System.TObject>");
  rtl.createClass(this,"TList$G3",this.TCustomList$G10,function () {
    rtl.createClass(this,"TEnumerator",$mod.TCustomListEnumerator$G8,function () {
    },"TList<System.TObject>.TEnumerator");
    this.$init = function () {
      $mod.TCustomList$G10.$init.call(this);
      this.FComparer = null;
    };
    this.$final = function () {
      rtl.setIntfP(this,"FComparer",null);
      $mod.TCustomList$G10.$final.call(this);
    };
    this.SameValue = function (Left, Right) {
      var Result = false;
      if (this.FComparer != null) {
        Result = this.FComparer.Compare(Left,Right) === 0}
       else Result = Left === Right;
      return Result;
    };
    this.SetCapacity = function (AValue) {
      if (AValue < this.FLength) this.SetCount(AValue);
      this.FItems = rtl.arraySetLength(this.FItems,null,AValue);
    };
    this.SetCount = function (AValue) {
      if (AValue < 0) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      if (AValue > this.GetCapacity()) {
        this.SetCapacity(AValue)}
       else if (AValue < this.FLength) this.DeleteRange(AValue,this.FLength - AValue);
      this.FLength = AValue;
    };
    this.InitializeList = function () {
    };
    this.InternalInsert = function (AIndex, AValue) {
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      this.FItems.splice(AIndex,0,AValue);
      this.FLength += 1;
      this.FItems[AIndex] = AValue;
      this.Notify(AValue,$mod.TCollectionNotification.cnAdded);
    };
    this.DoGetEnumerator = function () {
      var Result = null;
      Result = this.GetEnumerator$1();
      return Result;
    };
    this.GetItem = function (AIndex) {
      var Result = null;
      if ((AIndex < 0) || (AIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      Result = this.FItems[AIndex];
      return Result;
    };
    this.SetItem = function (AIndex, AValue) {
      if ((AIndex < 0) || (AIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      this.Notify(this.FItems[AIndex],$mod.TCollectionNotification.cnRemoved);
      this.FItems[AIndex] = AValue;
      this.Notify(AValue,$mod.TCollectionNotification.cnAdded);
    };
    this.GetEnumerator$1 = function () {
      var Result = null;
      Result = this.TEnumerator.$create("Create$1",[this]);
      return Result;
    };
    this.Create$1 = function () {
      this.InitializeList();
      return this;
    };
    this.Create$2 = function (AComparer) {
      this.InitializeList();
      rtl.setIntfP(this,"FComparer",AComparer);
      return this;
    };
    this.Create$3 = function (ACollection) {
      var LItem = null;
      this.Create$1();
      var $in = ACollection.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LItem = $in.DoGetCurrent();
          this.Add(LItem);
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
      return this;
    };
    this.Destroy = function () {
      this.SetCapacity(0);
    };
    this.Add = function (AValue) {
      var Result = 0;
      Result = this.PrepareAddingItem();
      this.FItems[Result] = AValue;
      this.Notify(AValue,$mod.TCollectionNotification.cnAdded);
      return Result;
    };
    this.AddRange = function (AValues) {
      this.InsertRange(this.FLength,AValues);
    };
    this.AddRange$1 = function (AEnumerable) {
      var LValue = null;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.GetCurrent();
          this.Add(LValue);
        }
      } finally {
        rtl._Release($in)
      };
    };
    this.AddRange$2 = function (AEnumerable) {
      var LValue = null;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.DoGetCurrent();
          this.Add(LValue);
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
    };
    this.Insert = function (AIndex, AValue) {
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      this.InternalInsert(AIndex,AValue);
    };
    this.InsertRange = function (AIndex, AValues) {
      var LLength = 0;
      var i = 0;
      var LValue = null;
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      LLength = rtl.length(AValues);
      if (LLength === 0) return;
      if (AIndex !== this.PrepareAddingRange(LLength)) {
        for (var $l = AIndex, $end = this.FLength - LLength - 1; $l <= $end; $l++) {
          i = $l;
          this.FItems[i + LLength] = this.FItems[i];
        };
        for (var $l1 = 0, $end1 = LLength - 1; $l1 <= $end1; $l1++) {
          i = $l1;
          this.FItems[AIndex + i] = null;
        };
      };
      for (var $l2 = 0, $end2 = LLength - 1; $l2 <= $end2; $l2++) {
        i = $l2;
        LValue = AValues[i];
        this.FItems[i + AIndex] = LValue;
        this.Notify(LValue,$mod.TCollectionNotification.cnAdded);
      };
    };
    this.InsertRange$1 = function (AIndex, AEnumerable) {
      var LValue = null;
      var i = 0;
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      i = 0;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.GetCurrent();
          this.InternalInsert(AIndex + i,LValue);
          i += 1;
        }
      } finally {
        rtl._Release($in)
      };
    };
    this.InsertRange$2 = function (AIndex, AEnumerable) {
      var LValue = null;
      var i = 0;
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      i = 0;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.DoGetCurrent();
          this.InternalInsert(AIndex + i,LValue);
          i += 1;
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
    };
    this.Remove = function (AValue) {
      var Result = 0;
      Result = this.IndexOf(AValue);
      if (Result >= 0) this.DoRemove(Result,$mod.TCollectionNotification.cnRemoved);
      return Result;
    };
    this.RemoveItem = function (AValue, Direction) {
      var Result = 0;
      if (Direction === $mod.TDirection.fromEnd) {
        Result = this.LastIndexOf(AValue)}
       else Result = this.IndexOf(AValue);
      if (Result >= 0) this.DoRemove(Result,$mod.TCollectionNotification.cnRemoved);
      return Result;
    };
    this.Delete = function (AIndex) {
      this.DoRemove(AIndex,$mod.TCollectionNotification.cnRemoved);
    };
    this.DeleteRange = function (AIndex, ACount) {
      var LDeleted = [];
      var i = 0;
      if (ACount === 0) return;
      if ((ACount < 0) || (AIndex < 0) || ((AIndex + ACount) > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      LDeleted = this.FItems.splice(AIndex,this.FLength);
      this.FLength -= ACount;
      for (var $l = 0, $end = rtl.length(LDeleted) - 1; $l <= $end; $l++) {
        i = $l;
        this.Notify(LDeleted[i],$mod.TCollectionNotification.cnRemoved);
      };
    };
    this.ExtractIndex = function (AIndex) {
      var Result = null;
      Result = this.DoRemove(AIndex,$mod.TCollectionNotification.cnExtracted);
      return Result;
    };
    this.Extract = function (AValue) {
      var Result = null;
      var LIndex = 0;
      LIndex = this.IndexOf(AValue);
      if (LIndex < 0) {
        Result = null}
       else Result = this.DoRemove(LIndex,$mod.TCollectionNotification.cnExtracted);
      return Result;
    };
    this.Exchange = function (AIndex1, AIndex2) {
      var LTemp = null;
      LTemp = this.FItems[AIndex1];
      this.FItems[AIndex1] = this.FItems[AIndex2];
      this.FItems[AIndex2] = LTemp;
    };
    this.Move = function (AIndex, ANewIndex) {
      var Arr = null;
      var LTemp = undefined;
      var i = 0;
      if (ANewIndex === AIndex) return;
      if ((ANewIndex < 0) || (ANewIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      Arr = this.FItems;
      LTemp = Arr[AIndex];
      if (AIndex < ANewIndex) {
        for (var $l = AIndex, $end = ANewIndex - 1; $l <= $end; $l++) {
          i = $l;
          Arr[i] = Arr[i + 1];
        }}
       else for (var $l1 = AIndex, $end1 = ANewIndex + 1; $l1 >= $end1; $l1--) {
        i = $l1;
        Arr[i] = Arr[i - 1];
      };
      Arr[ANewIndex] = LTemp;
    };
    this.First = function () {
      var Result = null;
      Result = this.GetItem(0);
      return Result;
    };
    this.Last = function () {
      var Result = null;
      Result = this.GetItem(this.FLength - 1);
      return Result;
    };
    this.Clear = function () {
      this.SetCount(0);
      this.SetCapacity(0);
    };
    this.Contains = function (AValue) {
      var Result = false;
      Result = this.IndexOf(AValue) >= 0;
      return Result;
    };
    this.IndexOf = function (AValue) {
      var Result = 0;
      var i = 0;
      for (var $l = 0, $end = this.FLength - 1; $l <= $end; $l++) {
        i = $l;
        if (this.SameValue(AValue,this.FItems[i])) return i;
      };
      Result = -1;
      return Result;
    };
    this.LastIndexOf = function (AValue) {
      var Result = 0;
      var i = 0;
      for (var $l = this.FLength - 1; $l >= 0; $l--) {
        i = $l;
        if (this.SameValue(AValue,this.FItems[i])) return i;
      };
      Result = -1;
      return Result;
    };
    this.Reverse = function () {
      var a = 0;
      var b = 0;
      var LTemp = null;
      a = 0;
      b = this.FLength - 1;
      while (a < b) {
        LTemp = this.FItems[a];
        this.FItems[a] = this.FItems[b];
        this.FItems[b] = LTemp;
        a += 1;
        b -= 1;
      };
    };
    this.TrimExcess = function () {
      this.SetCapacity(this.FLength);
    };
    this.Sort = function () {
      $mod.TArrayHelper$G11.Sort$1({p: this, get: function () {
          return this.p.FItems;
        }, set: function (v) {
          this.p.FItems = v;
        }},this.FComparer,0,this.FLength);
    };
    this.Sort$1 = function (AComparer) {
      $mod.TArrayHelper$G11.Sort$1({p: this, get: function () {
          return this.p.FItems;
        }, set: function (v) {
          this.p.FItems = v;
        }},AComparer,0,this.FLength);
    };
    this.BinarySearch = function (AItem, AIndex) {
      var Result = false;
      Result = $mod.TArrayHelper$G11.BinarySearch$1(this.FItems,AItem,AIndex,this.FComparer,0,this.FLength);
      return Result;
    };
    this.BinarySearch$1 = function (AItem, AIndex, AComparer) {
      var Result = false;
      Result = $mod.TArrayHelper$G11.BinarySearch$1(this.FItems,AItem,AIndex,AComparer,0,this.FLength);
      return Result;
    };
  },"TList<System.TObject>");
  rtl.createClass(this,"TObjectList$G1",this.TList$G3,function () {
    this.$init = function () {
      $mod.TList$G3.$init.call(this);
      this.FObjectsOwner = false;
    };
    this.Notify = function (aValue, Action) {
      $mod.TCustomList$G10.Notify.call(this,aValue,Action);
      if (this.FObjectsOwner && (Action === $mod.TCollectionNotification.cnRemoved)) aValue = rtl.freeLoc(aValue);
    };
    this.Create$4 = function (aOwnsObjects) {
      $mod.TList$G3.Create$1.call(this);
      this.FObjectsOwner = aOwnsObjects;
      return this;
    };
    this.Create$5 = function (AComparer, aOwnsObjects) {
      $mod.TList$G3.Create$2.call(this,AComparer);
      this.FObjectsOwner = aOwnsObjects;
      return this;
    };
    this.Create$6 = function (aCollection, aOwnsObjects) {
      $mod.TList$G3.Create$3.call(this,aCollection);
      this.FObjectsOwner = aOwnsObjects;
      return this;
    };
  },"TObjectList<System.TObject>");
  rtl.createClass(this,"TCustomArrayHelper$G13",pas.System.TObject,function () {
    this.Sort = function (AValues, AComparer) {
      this.Sort$1(AValues,AComparer,0,rtl.length(AValues.get()));
    };
    this.Sort$1 = function (AValues, AComparer, AIndex, ACount) {
      if (ACount <= 1) return;
      this.QuickSort(AValues,AIndex,(AIndex + ACount) - 1,AComparer);
    };
    this.BinarySearch$2 = function (AValues, AItem, AFoundIndex, AComparer) {
      var Result = false;
      Result = this.BinarySearch$1(AValues,AItem,AFoundIndex,AComparer,0,rtl.length(AValues));
      return Result;
    };
    this.BinarySearch$3 = function (AValues, AItem, ASearchResult, AComparer) {
      var Result = false;
      Result = this.BinarySearch(AValues,AItem,ASearchResult,AComparer,0,rtl.length(AValues));
      return Result;
    };
  },"TCustomArrayHelper<System.String>");
  rtl.createClass(this,"TArrayHelper$G12",this.TCustomArrayHelper$G13,function () {
    this.QuickSort = function (AValues, ALeft, ARight, AComparer) {
      var I = 0;
      var J = 0;
      var P = "";
      var Q = "";
      if (((ARight - ALeft) <= 0) || (rtl.length(AValues.get()) === 0)) return;
      do {
        I = ALeft;
        J = ARight;
        P = AValues.get()[ALeft + Math.floor((ARight - ALeft) / 2)];
        do {
          while (AComparer.Compare(AValues.get()[I],P) < 0) I += 1;
          while (AComparer.Compare(AValues.get()[J],P) > 0) J -= 1;
          if (I <= J) {
            if (I !== J) {
              Q = AValues.get()[I];
              AValues.get()[I] = AValues.get()[J];
              AValues.get()[J] = Q;
            };
            I += 1;
            J -= 1;
          };
        } while (!(I > J));
        if ((J - ALeft) < (ARight - I)) {
          if (ALeft < J) this.QuickSort(AValues,ALeft,J,AComparer);
          ALeft = I;
        } else {
          if (I < ARight) this.QuickSort(AValues,I,ARight,AComparer);
          ARight = J;
        };
      } while (!(ALeft >= ARight));
    };
    this.BinarySearch = function (AValues, AItem, ASearchResult, AComparer, AIndex, ACount) {
      var Result = false;
      var imin = 0;
      var imax = 0;
      var imid = 0;
      var ilo = 0;
      imin = AIndex;
      imax = (AIndex + ACount) - 1;
      ilo = imid * imid;
      imid = ilo * imid;
      while (imin < imax) {
        imid = rtl.trunc((imax + imin) / 2);
        ASearchResult.CompareResult = AComparer.Compare(AValues[imid],AItem);
        if (ASearchResult.CompareResult < 0) {
          imin = imid + 1}
         else {
          if (ASearchResult.CompareResult === 0) {
            ASearchResult.FoundIndex = imid;
            ASearchResult.CandidateIndex = imid;
            return true;
          };
          imax = imid;
        };
      };
      Result = imax === imin;
      if (Result) {
        ASearchResult.CompareResult = AComparer.Compare(AValues[imin],AItem);
        ASearchResult.CandidateIndex = imin;
        Result = ASearchResult.CompareResult === 0;
        if (Result) {
          ASearchResult.FoundIndex = imin}
         else ASearchResult.FoundIndex = -1;
      } else {
        ASearchResult.CompareResult = 0;
        ASearchResult.FoundIndex = -1;
        ASearchResult.CandidateIndex = -1;
      };
      return Result;
    };
    this.BinarySearch$1 = function (AValues, AItem, AFoundIndex, AComparer, AIndex, ACount) {
      var Result = false;
      var imin = 0;
      var imax = 0;
      var imid = 0;
      var LCompare = 0;
      imin = AIndex;
      imax = (AIndex + ACount) - 1;
      while (imin < imax) {
        imid = rtl.trunc((imin + imax) / 2);
        LCompare = AComparer.Compare(AValues[imid],AItem);
        if (LCompare < 0) {
          imin = imid + 1}
         else {
          if (LCompare === 0) {
            AFoundIndex.set(imid);
            return true;
          };
          imax = imid;
        };
      };
      LCompare = AComparer.Compare(AValues[imin],AItem);
      Result = (imax === imin) && (LCompare === 0);
      if (Result) {
        AFoundIndex.set(imin)}
       else AFoundIndex.set(-1);
      return Result;
    };
  },"TArrayHelper<System.String>");
  rtl.createClass(this,"TCustomList$G11",this.TEnumerable$G22,function () {
    this.$init = function () {
      $mod.TEnumerable$G22.$init.call(this);
      this.FOnNotify = null;
      this.FLength = 0;
      this.FItems = [];
    };
    this.$final = function () {
      this.FOnNotify = undefined;
      this.FItems = undefined;
      $mod.TEnumerable$G22.$final.call(this);
    };
    this.GetCapacity = function () {
      var Result = 0;
      Result = rtl.length(this.FItems);
      return Result;
    };
    this.PrepareAddingItem = function () {
      var Result = 0;
      if (this.FLength === rtl.length(this.FItems)) this.FItems.push("");
      Result = this.FLength;
      this.FLength += 1;
      return Result;
    };
    this.PrepareAddingRange = function (ACount) {
      var Result = 0;
      var l = 0;
      if (ACount < 0) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      if (ACount === 0) return this.FLength - 1;
      for (var $l = rtl.length(this.FItems) + 1, $end = this.FLength + ACount; $l <= $end; $l++) {
        l = $l;
        this.FItems.push("");
      };
      Result = this.FLength;
      this.FLength += ACount;
      return Result;
    };
    this.Notify = function (AValue, ACollectionNotification) {
      if (this.FOnNotify != null) this.FOnNotify(this,AValue,ACollectionNotification);
    };
    this.DoRemove = function (AIndex, ACollectionNotification) {
      var Result = "";
      if ((AIndex < 0) || (AIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      Result = this.FItems[AIndex];
      this.FLength -= 1;
      this.FItems[AIndex] = "";
      this.FItems.splice(AIndex,1);
      this.Notify(Result,ACollectionNotification);
      return Result;
    };
    this.GetCount = function () {
      var Result = 0;
      Result = this.FLength;
      return Result;
    };
    var $r = this.$rtti;
    $mod.$rtti.$DynArray("TCustomList<System.String>.FItems$a",{eltype: rtl.string});
  },"TCustomList<System.String>");
  rtl.createClass(this,"TCustomListEnumerator$G9",this.TEnumerator$G22,function () {
    this.$init = function () {
      $mod.TEnumerator$G22.$init.call(this);
      this.FList = null;
      this.FIndex = 0;
    };
    this.$final = function () {
      this.FList = undefined;
      $mod.TEnumerator$G22.$final.call(this);
    };
    this.DoMoveNext = function () {
      var Result = false;
      this.FIndex += 1;
      Result = (this.FList.FLength > 0) && (this.FIndex < this.FList.FLength);
      return Result;
    };
    this.DoGetCurrent = function () {
      var Result = "";
      Result = this.GetCurrent();
      return Result;
    };
    this.GetCurrent = function () {
      var Result = "";
      Result = this.FList.FItems[this.FIndex];
      return Result;
    };
    this.Create$1 = function (AList) {
      pas.System.TObject.Create.call(this);
      this.FIndex = -1;
      this.FList = AList;
      return this;
    };
  },"TCustomListEnumerator<System.String>");
  rtl.createClass(this,"TList$G4",this.TCustomList$G11,function () {
    rtl.createClass(this,"TEnumerator",$mod.TCustomListEnumerator$G9,function () {
    },"TList<System.String>.TEnumerator");
    this.$init = function () {
      $mod.TCustomList$G11.$init.call(this);
      this.FComparer = null;
    };
    this.$final = function () {
      rtl.setIntfP(this,"FComparer",null);
      $mod.TCustomList$G11.$final.call(this);
    };
    this.SameValue = function (Left, Right) {
      var Result = false;
      if (this.FComparer != null) {
        Result = this.FComparer.Compare(Left,Right) === 0}
       else Result = Left === Right;
      return Result;
    };
    this.SetCapacity = function (AValue) {
      if (AValue < this.FLength) this.SetCount(AValue);
      this.FItems = rtl.arraySetLength(this.FItems,"",AValue);
    };
    this.SetCount = function (AValue) {
      if (AValue < 0) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      if (AValue > this.GetCapacity()) {
        this.SetCapacity(AValue)}
       else if (AValue < this.FLength) this.DeleteRange(AValue,this.FLength - AValue);
      this.FLength = AValue;
    };
    this.InitializeList = function () {
    };
    this.InternalInsert = function (AIndex, AValue) {
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      this.FItems.splice(AIndex,0,AValue);
      this.FLength += 1;
      this.FItems[AIndex] = AValue;
      this.Notify(AValue,$mod.TCollectionNotification.cnAdded);
    };
    this.DoGetEnumerator = function () {
      var Result = null;
      Result = this.GetEnumerator$1();
      return Result;
    };
    this.GetItem = function (AIndex) {
      var Result = "";
      if ((AIndex < 0) || (AIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      Result = this.FItems[AIndex];
      return Result;
    };
    this.SetItem = function (AIndex, AValue) {
      if ((AIndex < 0) || (AIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      this.Notify(this.FItems[AIndex],$mod.TCollectionNotification.cnRemoved);
      this.FItems[AIndex] = AValue;
      this.Notify(AValue,$mod.TCollectionNotification.cnAdded);
    };
    this.GetEnumerator$1 = function () {
      var Result = null;
      Result = this.TEnumerator.$create("Create$1",[this]);
      return Result;
    };
    this.Create$1 = function () {
      this.InitializeList();
      return this;
    };
    this.Create$2 = function (AComparer) {
      this.InitializeList();
      rtl.setIntfP(this,"FComparer",AComparer);
      return this;
    };
    this.Create$3 = function (ACollection) {
      var LItem = "";
      this.Create$1();
      var $in = ACollection.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LItem = $in.DoGetCurrent();
          this.Add(LItem);
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
      return this;
    };
    this.Destroy = function () {
      this.SetCapacity(0);
    };
    this.Add = function (AValue) {
      var Result = 0;
      Result = this.PrepareAddingItem();
      this.FItems[Result] = AValue;
      this.Notify(AValue,$mod.TCollectionNotification.cnAdded);
      return Result;
    };
    this.AddRange = function (AValues) {
      this.InsertRange(this.FLength,AValues);
    };
    this.AddRange$1 = function (AEnumerable) {
      var LValue = "";
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.GetCurrent();
          this.Add(LValue);
        }
      } finally {
        rtl._Release($in)
      };
    };
    this.AddRange$2 = function (AEnumerable) {
      var LValue = "";
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.DoGetCurrent();
          this.Add(LValue);
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
    };
    this.Insert = function (AIndex, AValue) {
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      this.InternalInsert(AIndex,AValue);
    };
    this.InsertRange = function (AIndex, AValues) {
      var LLength = 0;
      var i = 0;
      var LValue = "";
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      LLength = rtl.length(AValues);
      if (LLength === 0) return;
      if (AIndex !== this.PrepareAddingRange(LLength)) {
        for (var $l = AIndex, $end = this.FLength - LLength - 1; $l <= $end; $l++) {
          i = $l;
          this.FItems[i + LLength] = this.FItems[i];
        };
        for (var $l1 = 0, $end1 = LLength - 1; $l1 <= $end1; $l1++) {
          i = $l1;
          this.FItems[AIndex + i] = "";
        };
      };
      for (var $l2 = 0, $end2 = LLength - 1; $l2 <= $end2; $l2++) {
        i = $l2;
        LValue = AValues[i];
        this.FItems[i + AIndex] = LValue;
        this.Notify(LValue,$mod.TCollectionNotification.cnAdded);
      };
    };
    this.InsertRange$1 = function (AIndex, AEnumerable) {
      var LValue = "";
      var i = 0;
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      i = 0;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.GetCurrent();
          this.InternalInsert(AIndex + i,LValue);
          i += 1;
        }
      } finally {
        rtl._Release($in)
      };
    };
    this.InsertRange$2 = function (AIndex, AEnumerable) {
      var LValue = "";
      var i = 0;
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      i = 0;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.DoGetCurrent();
          this.InternalInsert(AIndex + i,LValue);
          i += 1;
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
    };
    this.Remove = function (AValue) {
      var Result = 0;
      Result = this.IndexOf(AValue);
      if (Result >= 0) this.DoRemove(Result,$mod.TCollectionNotification.cnRemoved);
      return Result;
    };
    this.RemoveItem = function (AValue, Direction) {
      var Result = 0;
      if (Direction === $mod.TDirection.fromEnd) {
        Result = this.LastIndexOf(AValue)}
       else Result = this.IndexOf(AValue);
      if (Result >= 0) this.DoRemove(Result,$mod.TCollectionNotification.cnRemoved);
      return Result;
    };
    this.Delete = function (AIndex) {
      this.DoRemove(AIndex,$mod.TCollectionNotification.cnRemoved);
    };
    this.DeleteRange = function (AIndex, ACount) {
      var LDeleted = [];
      var i = 0;
      if (ACount === 0) return;
      if ((ACount < 0) || (AIndex < 0) || ((AIndex + ACount) > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      LDeleted = this.FItems.splice(AIndex,this.FLength);
      this.FLength -= ACount;
      for (var $l = 0, $end = rtl.length(LDeleted) - 1; $l <= $end; $l++) {
        i = $l;
        this.Notify(LDeleted[i],$mod.TCollectionNotification.cnRemoved);
      };
    };
    this.ExtractIndex = function (AIndex) {
      var Result = "";
      Result = this.DoRemove(AIndex,$mod.TCollectionNotification.cnExtracted);
      return Result;
    };
    this.Extract = function (AValue) {
      var Result = "";
      var LIndex = 0;
      LIndex = this.IndexOf(AValue);
      if (LIndex < 0) {
        Result = ""}
       else Result = this.DoRemove(LIndex,$mod.TCollectionNotification.cnExtracted);
      return Result;
    };
    this.Exchange = function (AIndex1, AIndex2) {
      var LTemp = "";
      LTemp = this.FItems[AIndex1];
      this.FItems[AIndex1] = this.FItems[AIndex2];
      this.FItems[AIndex2] = LTemp;
    };
    this.Move = function (AIndex, ANewIndex) {
      var Arr = null;
      var LTemp = undefined;
      var i = 0;
      if (ANewIndex === AIndex) return;
      if ((ANewIndex < 0) || (ANewIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      Arr = this.FItems;
      LTemp = Arr[AIndex];
      if (AIndex < ANewIndex) {
        for (var $l = AIndex, $end = ANewIndex - 1; $l <= $end; $l++) {
          i = $l;
          Arr[i] = Arr[i + 1];
        }}
       else for (var $l1 = AIndex, $end1 = ANewIndex + 1; $l1 >= $end1; $l1--) {
        i = $l1;
        Arr[i] = Arr[i - 1];
      };
      Arr[ANewIndex] = LTemp;
    };
    this.First = function () {
      var Result = "";
      Result = this.GetItem(0);
      return Result;
    };
    this.Last = function () {
      var Result = "";
      Result = this.GetItem(this.FLength - 1);
      return Result;
    };
    this.Clear = function () {
      this.SetCount(0);
      this.SetCapacity(0);
    };
    this.Contains = function (AValue) {
      var Result = false;
      Result = this.IndexOf(AValue) >= 0;
      return Result;
    };
    this.IndexOf = function (AValue) {
      var Result = 0;
      var i = 0;
      for (var $l = 0, $end = this.FLength - 1; $l <= $end; $l++) {
        i = $l;
        if (this.SameValue(AValue,this.FItems[i])) return i;
      };
      Result = -1;
      return Result;
    };
    this.LastIndexOf = function (AValue) {
      var Result = 0;
      var i = 0;
      for (var $l = this.FLength - 1; $l >= 0; $l--) {
        i = $l;
        if (this.SameValue(AValue,this.FItems[i])) return i;
      };
      Result = -1;
      return Result;
    };
    this.Reverse = function () {
      var a = 0;
      var b = 0;
      var LTemp = "";
      a = 0;
      b = this.FLength - 1;
      while (a < b) {
        LTemp = this.FItems[a];
        this.FItems[a] = this.FItems[b];
        this.FItems[b] = LTemp;
        a += 1;
        b -= 1;
      };
    };
    this.TrimExcess = function () {
      this.SetCapacity(this.FLength);
    };
    this.Sort = function () {
      $mod.TArrayHelper$G12.Sort$1({p: this, get: function () {
          return this.p.FItems;
        }, set: function (v) {
          this.p.FItems = v;
        }},this.FComparer,0,this.FLength);
    };
    this.Sort$1 = function (AComparer) {
      $mod.TArrayHelper$G12.Sort$1({p: this, get: function () {
          return this.p.FItems;
        }, set: function (v) {
          this.p.FItems = v;
        }},AComparer,0,this.FLength);
    };
    this.BinarySearch = function (AItem, AIndex) {
      var Result = false;
      Result = $mod.TArrayHelper$G12.BinarySearch$1(this.FItems,AItem,AIndex,this.FComparer,0,this.FLength);
      return Result;
    };
    this.BinarySearch$1 = function (AItem, AIndex, AComparer) {
      var Result = false;
      Result = $mod.TArrayHelper$G12.BinarySearch$1(this.FItems,AItem,AIndex,AComparer,0,this.FLength);
      return Result;
    };
  },"TList<System.String>");
  rtl.createClass(this,"TCustomArrayHelper$G14",pas.System.TObject,function () {
    this.Sort = function (AValues, AComparer) {
      this.Sort$1(AValues,AComparer,0,rtl.length(AValues.get()));
    };
    this.Sort$1 = function (AValues, AComparer, AIndex, ACount) {
      if (ACount <= 1) return;
      this.QuickSort(AValues,AIndex,(AIndex + ACount) - 1,AComparer);
    };
    this.BinarySearch$2 = function (AValues, AItem, AFoundIndex, AComparer) {
      var Result = false;
      Result = this.BinarySearch$1(AValues,AItem,AFoundIndex,AComparer,0,rtl.length(AValues));
      return Result;
    };
    this.BinarySearch$3 = function (AValues, AItem, ASearchResult, AComparer) {
      var Result = false;
      Result = this.BinarySearch(AValues,AItem,ASearchResult,AComparer,0,rtl.length(AValues));
      return Result;
    };
  },"TCustomArrayHelper<System.Longint>");
  rtl.createClass(this,"TArrayHelper$G13",this.TCustomArrayHelper$G14,function () {
    this.QuickSort = function (AValues, ALeft, ARight, AComparer) {
      var I = 0;
      var J = 0;
      var P = 0;
      var Q = 0;
      if (((ARight - ALeft) <= 0) || (rtl.length(AValues.get()) === 0)) return;
      do {
        I = ALeft;
        J = ARight;
        P = AValues.get()[ALeft + Math.floor((ARight - ALeft) / 2)];
        do {
          while (AComparer.Compare(AValues.get()[I],P) < 0) I += 1;
          while (AComparer.Compare(AValues.get()[J],P) > 0) J -= 1;
          if (I <= J) {
            if (I !== J) {
              Q = AValues.get()[I];
              AValues.get()[I] = AValues.get()[J];
              AValues.get()[J] = Q;
            };
            I += 1;
            J -= 1;
          };
        } while (!(I > J));
        if ((J - ALeft) < (ARight - I)) {
          if (ALeft < J) this.QuickSort(AValues,ALeft,J,AComparer);
          ALeft = I;
        } else {
          if (I < ARight) this.QuickSort(AValues,I,ARight,AComparer);
          ARight = J;
        };
      } while (!(ALeft >= ARight));
    };
    this.BinarySearch = function (AValues, AItem, ASearchResult, AComparer, AIndex, ACount) {
      var Result = false;
      var imin = 0;
      var imax = 0;
      var imid = 0;
      var ilo = 0;
      imin = AIndex;
      imax = (AIndex + ACount) - 1;
      ilo = imid * imid;
      imid = ilo * imid;
      while (imin < imax) {
        imid = rtl.trunc((imax + imin) / 2);
        ASearchResult.CompareResult = AComparer.Compare(AValues[imid],AItem);
        if (ASearchResult.CompareResult < 0) {
          imin = imid + 1}
         else {
          if (ASearchResult.CompareResult === 0) {
            ASearchResult.FoundIndex = imid;
            ASearchResult.CandidateIndex = imid;
            return true;
          };
          imax = imid;
        };
      };
      Result = imax === imin;
      if (Result) {
        ASearchResult.CompareResult = AComparer.Compare(AValues[imin],AItem);
        ASearchResult.CandidateIndex = imin;
        Result = ASearchResult.CompareResult === 0;
        if (Result) {
          ASearchResult.FoundIndex = imin}
         else ASearchResult.FoundIndex = -1;
      } else {
        ASearchResult.CompareResult = 0;
        ASearchResult.FoundIndex = -1;
        ASearchResult.CandidateIndex = -1;
      };
      return Result;
    };
    this.BinarySearch$1 = function (AValues, AItem, AFoundIndex, AComparer, AIndex, ACount) {
      var Result = false;
      var imin = 0;
      var imax = 0;
      var imid = 0;
      var LCompare = 0;
      imin = AIndex;
      imax = (AIndex + ACount) - 1;
      while (imin < imax) {
        imid = rtl.trunc((imin + imax) / 2);
        LCompare = AComparer.Compare(AValues[imid],AItem);
        if (LCompare < 0) {
          imin = imid + 1}
         else {
          if (LCompare === 0) {
            AFoundIndex.set(imid);
            return true;
          };
          imax = imid;
        };
      };
      LCompare = AComparer.Compare(AValues[imin],AItem);
      Result = (imax === imin) && (LCompare === 0);
      if (Result) {
        AFoundIndex.set(imin)}
       else AFoundIndex.set(-1);
      return Result;
    };
  },"TArrayHelper<System.Longint>");
  rtl.createClass(this,"TCustomList$G12",this.TEnumerable$G19,function () {
    this.$init = function () {
      $mod.TEnumerable$G19.$init.call(this);
      this.FOnNotify = null;
      this.FLength = 0;
      this.FItems = [];
    };
    this.$final = function () {
      this.FOnNotify = undefined;
      this.FItems = undefined;
      $mod.TEnumerable$G19.$final.call(this);
    };
    this.GetCapacity = function () {
      var Result = 0;
      Result = rtl.length(this.FItems);
      return Result;
    };
    this.PrepareAddingItem = function () {
      var Result = 0;
      if (this.FLength === rtl.length(this.FItems)) this.FItems.push(-2147483648);
      Result = this.FLength;
      this.FLength += 1;
      return Result;
    };
    this.PrepareAddingRange = function (ACount) {
      var Result = 0;
      var l = 0;
      if (ACount < 0) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      if (ACount === 0) return this.FLength - 1;
      for (var $l = rtl.length(this.FItems) + 1, $end = this.FLength + ACount; $l <= $end; $l++) {
        l = $l;
        this.FItems.push(-2147483648);
      };
      Result = this.FLength;
      this.FLength += ACount;
      return Result;
    };
    this.Notify = function (AValue, ACollectionNotification) {
      if (this.FOnNotify != null) this.FOnNotify(this,AValue,ACollectionNotification);
    };
    this.DoRemove = function (AIndex, ACollectionNotification) {
      var Result = 0;
      if ((AIndex < 0) || (AIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      Result = this.FItems[AIndex];
      this.FLength -= 1;
      this.FItems[AIndex] = -2147483648;
      this.FItems.splice(AIndex,1);
      this.Notify(Result,ACollectionNotification);
      return Result;
    };
    this.GetCount = function () {
      var Result = 0;
      Result = this.FLength;
      return Result;
    };
    var $r = this.$rtti;
    $mod.$rtti.$DynArray("TCustomList<System.Longint>.FItems$a",{eltype: rtl.longint});
  },"TCustomList<System.Longint>");
  rtl.createClass(this,"TCustomListEnumerator$G10",this.TEnumerator$G19,function () {
    this.$init = function () {
      $mod.TEnumerator$G19.$init.call(this);
      this.FList = null;
      this.FIndex = 0;
    };
    this.$final = function () {
      this.FList = undefined;
      $mod.TEnumerator$G19.$final.call(this);
    };
    this.DoMoveNext = function () {
      var Result = false;
      this.FIndex += 1;
      Result = (this.FList.FLength > 0) && (this.FIndex < this.FList.FLength);
      return Result;
    };
    this.DoGetCurrent = function () {
      var Result = 0;
      Result = this.GetCurrent();
      return Result;
    };
    this.GetCurrent = function () {
      var Result = 0;
      Result = this.FList.FItems[this.FIndex];
      return Result;
    };
    this.Create$1 = function (AList) {
      pas.System.TObject.Create.call(this);
      this.FIndex = -1;
      this.FList = AList;
      return this;
    };
  },"TCustomListEnumerator<System.Longint>");
  rtl.createClass(this,"TList$G5",this.TCustomList$G12,function () {
    rtl.createClass(this,"TEnumerator",$mod.TCustomListEnumerator$G10,function () {
    },"TList<System.Longint>.TEnumerator");
    this.$init = function () {
      $mod.TCustomList$G12.$init.call(this);
      this.FComparer = null;
    };
    this.$final = function () {
      rtl.setIntfP(this,"FComparer",null);
      $mod.TCustomList$G12.$final.call(this);
    };
    this.SameValue = function (Left, Right) {
      var Result = false;
      if (this.FComparer != null) {
        Result = this.FComparer.Compare(Left,Right) === 0}
       else Result = Left === Right;
      return Result;
    };
    this.SetCapacity = function (AValue) {
      if (AValue < this.FLength) this.SetCount(AValue);
      this.FItems = rtl.arraySetLength(this.FItems,0,AValue);
    };
    this.SetCount = function (AValue) {
      if (AValue < 0) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      if (AValue > this.GetCapacity()) {
        this.SetCapacity(AValue)}
       else if (AValue < this.FLength) this.DeleteRange(AValue,this.FLength - AValue);
      this.FLength = AValue;
    };
    this.InitializeList = function () {
    };
    this.InternalInsert = function (AIndex, AValue) {
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      this.FItems.splice(AIndex,0,AValue);
      this.FLength += 1;
      this.FItems[AIndex] = AValue;
      this.Notify(AValue,$mod.TCollectionNotification.cnAdded);
    };
    this.DoGetEnumerator = function () {
      var Result = null;
      Result = this.GetEnumerator$1();
      return Result;
    };
    this.GetItem = function (AIndex) {
      var Result = 0;
      if ((AIndex < 0) || (AIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      Result = this.FItems[AIndex];
      return Result;
    };
    this.SetItem = function (AIndex, AValue) {
      if ((AIndex < 0) || (AIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      this.Notify(this.FItems[AIndex],$mod.TCollectionNotification.cnRemoved);
      this.FItems[AIndex] = AValue;
      this.Notify(AValue,$mod.TCollectionNotification.cnAdded);
    };
    this.GetEnumerator$1 = function () {
      var Result = null;
      Result = this.TEnumerator.$create("Create$1",[this]);
      return Result;
    };
    this.Create$1 = function () {
      this.InitializeList();
      return this;
    };
    this.Create$2 = function (AComparer) {
      this.InitializeList();
      rtl.setIntfP(this,"FComparer",AComparer);
      return this;
    };
    this.Create$3 = function (ACollection) {
      var LItem = 0;
      this.Create$1();
      var $in = ACollection.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LItem = $in.DoGetCurrent();
          this.Add(LItem);
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
      return this;
    };
    this.Destroy = function () {
      this.SetCapacity(0);
    };
    this.Add = function (AValue) {
      var Result = 0;
      Result = this.PrepareAddingItem();
      this.FItems[Result] = AValue;
      this.Notify(AValue,$mod.TCollectionNotification.cnAdded);
      return Result;
    };
    this.AddRange = function (AValues) {
      this.InsertRange(this.FLength,AValues);
    };
    this.AddRange$1 = function (AEnumerable) {
      var LValue = 0;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.GetCurrent();
          this.Add(LValue);
        }
      } finally {
        rtl._Release($in)
      };
    };
    this.AddRange$2 = function (AEnumerable) {
      var LValue = 0;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.DoGetCurrent();
          this.Add(LValue);
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
    };
    this.Insert = function (AIndex, AValue) {
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      this.InternalInsert(AIndex,AValue);
    };
    this.InsertRange = function (AIndex, AValues) {
      var LLength = 0;
      var i = 0;
      var LValue = 0;
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      LLength = rtl.length(AValues);
      if (LLength === 0) return;
      if (AIndex !== this.PrepareAddingRange(LLength)) {
        for (var $l = AIndex, $end = this.FLength - LLength - 1; $l <= $end; $l++) {
          i = $l;
          this.FItems[i + LLength] = this.FItems[i];
        };
        for (var $l1 = 0, $end1 = LLength - 1; $l1 <= $end1; $l1++) {
          i = $l1;
          this.FItems[AIndex + i] = -2147483648;
        };
      };
      for (var $l2 = 0, $end2 = LLength - 1; $l2 <= $end2; $l2++) {
        i = $l2;
        LValue = AValues[i];
        this.FItems[i + AIndex] = LValue;
        this.Notify(LValue,$mod.TCollectionNotification.cnAdded);
      };
    };
    this.InsertRange$1 = function (AIndex, AEnumerable) {
      var LValue = 0;
      var i = 0;
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      i = 0;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.GetCurrent();
          this.InternalInsert(AIndex + i,LValue);
          i += 1;
        }
      } finally {
        rtl._Release($in)
      };
    };
    this.InsertRange$2 = function (AIndex, AEnumerable) {
      var LValue = 0;
      var i = 0;
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      i = 0;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.DoGetCurrent();
          this.InternalInsert(AIndex + i,LValue);
          i += 1;
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
    };
    this.Remove = function (AValue) {
      var Result = 0;
      Result = this.IndexOf(AValue);
      if (Result >= 0) this.DoRemove(Result,$mod.TCollectionNotification.cnRemoved);
      return Result;
    };
    this.RemoveItem = function (AValue, Direction) {
      var Result = 0;
      if (Direction === $mod.TDirection.fromEnd) {
        Result = this.LastIndexOf(AValue)}
       else Result = this.IndexOf(AValue);
      if (Result >= 0) this.DoRemove(Result,$mod.TCollectionNotification.cnRemoved);
      return Result;
    };
    this.Delete = function (AIndex) {
      this.DoRemove(AIndex,$mod.TCollectionNotification.cnRemoved);
    };
    this.DeleteRange = function (AIndex, ACount) {
      var LDeleted = [];
      var i = 0;
      if (ACount === 0) return;
      if ((ACount < 0) || (AIndex < 0) || ((AIndex + ACount) > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      LDeleted = this.FItems.splice(AIndex,this.FLength);
      this.FLength -= ACount;
      for (var $l = 0, $end = rtl.length(LDeleted) - 1; $l <= $end; $l++) {
        i = $l;
        this.Notify(LDeleted[i],$mod.TCollectionNotification.cnRemoved);
      };
    };
    this.ExtractIndex = function (AIndex) {
      var Result = 0;
      Result = this.DoRemove(AIndex,$mod.TCollectionNotification.cnExtracted);
      return Result;
    };
    this.Extract = function (AValue) {
      var Result = 0;
      var LIndex = 0;
      LIndex = this.IndexOf(AValue);
      if (LIndex < 0) {
        Result = -2147483648}
       else Result = this.DoRemove(LIndex,$mod.TCollectionNotification.cnExtracted);
      return Result;
    };
    this.Exchange = function (AIndex1, AIndex2) {
      var LTemp = 0;
      LTemp = this.FItems[AIndex1];
      this.FItems[AIndex1] = this.FItems[AIndex2];
      this.FItems[AIndex2] = LTemp;
    };
    this.Move = function (AIndex, ANewIndex) {
      var Arr = null;
      var LTemp = undefined;
      var i = 0;
      if (ANewIndex === AIndex) return;
      if ((ANewIndex < 0) || (ANewIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      Arr = this.FItems;
      LTemp = Arr[AIndex];
      if (AIndex < ANewIndex) {
        for (var $l = AIndex, $end = ANewIndex - 1; $l <= $end; $l++) {
          i = $l;
          Arr[i] = Arr[i + 1];
        }}
       else for (var $l1 = AIndex, $end1 = ANewIndex + 1; $l1 >= $end1; $l1--) {
        i = $l1;
        Arr[i] = Arr[i - 1];
      };
      Arr[ANewIndex] = LTemp;
    };
    this.First = function () {
      var Result = 0;
      Result = this.GetItem(0);
      return Result;
    };
    this.Last = function () {
      var Result = 0;
      Result = this.GetItem(this.FLength - 1);
      return Result;
    };
    this.Clear = function () {
      this.SetCount(0);
      this.SetCapacity(0);
    };
    this.Contains = function (AValue) {
      var Result = false;
      Result = this.IndexOf(AValue) >= 0;
      return Result;
    };
    this.IndexOf = function (AValue) {
      var Result = 0;
      var i = 0;
      for (var $l = 0, $end = this.FLength - 1; $l <= $end; $l++) {
        i = $l;
        if (this.SameValue(AValue,this.FItems[i])) return i;
      };
      Result = -1;
      return Result;
    };
    this.LastIndexOf = function (AValue) {
      var Result = 0;
      var i = 0;
      for (var $l = this.FLength - 1; $l >= 0; $l--) {
        i = $l;
        if (this.SameValue(AValue,this.FItems[i])) return i;
      };
      Result = -1;
      return Result;
    };
    this.Reverse = function () {
      var a = 0;
      var b = 0;
      var LTemp = 0;
      a = 0;
      b = this.FLength - 1;
      while (a < b) {
        LTemp = this.FItems[a];
        this.FItems[a] = this.FItems[b];
        this.FItems[b] = LTemp;
        a += 1;
        b -= 1;
      };
    };
    this.TrimExcess = function () {
      this.SetCapacity(this.FLength);
    };
    this.Sort = function () {
      $mod.TArrayHelper$G13.Sort$1({p: this, get: function () {
          return this.p.FItems;
        }, set: function (v) {
          this.p.FItems = v;
        }},this.FComparer,0,this.FLength);
    };
    this.Sort$1 = function (AComparer) {
      $mod.TArrayHelper$G13.Sort$1({p: this, get: function () {
          return this.p.FItems;
        }, set: function (v) {
          this.p.FItems = v;
        }},AComparer,0,this.FLength);
    };
    this.BinarySearch = function (AItem, AIndex) {
      var Result = false;
      Result = $mod.TArrayHelper$G13.BinarySearch$1(this.FItems,AItem,AIndex,this.FComparer,0,this.FLength);
      return Result;
    };
    this.BinarySearch$1 = function (AItem, AIndex, AComparer) {
      var Result = false;
      Result = $mod.TArrayHelper$G13.BinarySearch$1(this.FItems,AItem,AIndex,AComparer,0,this.FLength);
      return Result;
    };
  },"TList<System.Longint>");
  rtl.createClass(this,"TEnumerator$G24",pas.System.TObject,function () {
    this.MoveNext = function () {
      var Result = false;
      Result = this.DoMoveNext();
      return Result;
    };
  },"TEnumerator<System.Double>");
  rtl.createClass(this,"TEnumerable$G23",pas.System.TObject,function () {
    this.GetEnumerator = function () {
      var Result = null;
      Result = this.DoGetEnumerator();
      return Result;
    };
    this.ToArray = function () {
      var Result = [];
      var LEnumerator = null;
      Result = [];
      LEnumerator = this.GetEnumerator();
      try {
        while (LEnumerator.MoveNext()) Result.push(LEnumerator.DoGetCurrent());
      } finally {
        LEnumerator = rtl.freeLoc(LEnumerator);
      };
      return Result;
    };
  },"TEnumerable<System.Double>");
  this.$rtti.$MethodVar("TCollectionNotifyEvent<System.Double>",{procsig: rtl.newTIProcSig([["ASender",pas.System.$rtti["TObject"]],["AItem",rtl.double,2],["AAction",this.$rtti["TCollectionNotification"]]]), methodkind: 0});
  rtl.createClass(this,"TCustomArrayHelper$G15",pas.System.TObject,function () {
    this.Sort = function (AValues, AComparer) {
      this.Sort$1(AValues,AComparer,0,rtl.length(AValues.get()));
    };
    this.Sort$1 = function (AValues, AComparer, AIndex, ACount) {
      if (ACount <= 1) return;
      this.QuickSort(AValues,AIndex,(AIndex + ACount) - 1,AComparer);
    };
    this.BinarySearch$2 = function (AValues, AItem, AFoundIndex, AComparer) {
      var Result = false;
      Result = this.BinarySearch$1(AValues,AItem,AFoundIndex,AComparer,0,rtl.length(AValues));
      return Result;
    };
    this.BinarySearch$3 = function (AValues, AItem, ASearchResult, AComparer) {
      var Result = false;
      Result = this.BinarySearch(AValues,AItem,ASearchResult,AComparer,0,rtl.length(AValues));
      return Result;
    };
  },"TCustomArrayHelper<System.Double>");
  rtl.createClass(this,"TArrayHelper$G14",this.TCustomArrayHelper$G15,function () {
    this.QuickSort = function (AValues, ALeft, ARight, AComparer) {
      var I = 0;
      var J = 0;
      var P = 0.0;
      var Q = 0.0;
      if (((ARight - ALeft) <= 0) || (rtl.length(AValues.get()) === 0)) return;
      do {
        I = ALeft;
        J = ARight;
        P = AValues.get()[ALeft + Math.floor((ARight - ALeft) / 2)];
        do {
          while (AComparer.Compare(AValues.get()[I],P) < 0) I += 1;
          while (AComparer.Compare(AValues.get()[J],P) > 0) J -= 1;
          if (I <= J) {
            if (I !== J) {
              Q = AValues.get()[I];
              AValues.get()[I] = AValues.get()[J];
              AValues.get()[J] = Q;
            };
            I += 1;
            J -= 1;
          };
        } while (!(I > J));
        if ((J - ALeft) < (ARight - I)) {
          if (ALeft < J) this.QuickSort(AValues,ALeft,J,AComparer);
          ALeft = I;
        } else {
          if (I < ARight) this.QuickSort(AValues,I,ARight,AComparer);
          ARight = J;
        };
      } while (!(ALeft >= ARight));
    };
    this.BinarySearch = function (AValues, AItem, ASearchResult, AComparer, AIndex, ACount) {
      var Result = false;
      var imin = 0;
      var imax = 0;
      var imid = 0;
      var ilo = 0;
      imin = AIndex;
      imax = (AIndex + ACount) - 1;
      ilo = imid * imid;
      imid = ilo * imid;
      while (imin < imax) {
        imid = rtl.trunc((imax + imin) / 2);
        ASearchResult.CompareResult = AComparer.Compare(AValues[imid],AItem);
        if (ASearchResult.CompareResult < 0) {
          imin = imid + 1}
         else {
          if (ASearchResult.CompareResult === 0) {
            ASearchResult.FoundIndex = imid;
            ASearchResult.CandidateIndex = imid;
            return true;
          };
          imax = imid;
        };
      };
      Result = imax === imin;
      if (Result) {
        ASearchResult.CompareResult = AComparer.Compare(AValues[imin],AItem);
        ASearchResult.CandidateIndex = imin;
        Result = ASearchResult.CompareResult === 0;
        if (Result) {
          ASearchResult.FoundIndex = imin}
         else ASearchResult.FoundIndex = -1;
      } else {
        ASearchResult.CompareResult = 0;
        ASearchResult.FoundIndex = -1;
        ASearchResult.CandidateIndex = -1;
      };
      return Result;
    };
    this.BinarySearch$1 = function (AValues, AItem, AFoundIndex, AComparer, AIndex, ACount) {
      var Result = false;
      var imin = 0;
      var imax = 0;
      var imid = 0;
      var LCompare = 0;
      imin = AIndex;
      imax = (AIndex + ACount) - 1;
      while (imin < imax) {
        imid = rtl.trunc((imin + imax) / 2);
        LCompare = AComparer.Compare(AValues[imid],AItem);
        if (LCompare < 0) {
          imin = imid + 1}
         else {
          if (LCompare === 0) {
            AFoundIndex.set(imid);
            return true;
          };
          imax = imid;
        };
      };
      LCompare = AComparer.Compare(AValues[imin],AItem);
      Result = (imax === imin) && (LCompare === 0);
      if (Result) {
        AFoundIndex.set(imin)}
       else AFoundIndex.set(-1);
      return Result;
    };
  },"TArrayHelper<System.Double>");
  rtl.createClass(this,"TCustomList$G13",this.TEnumerable$G23,function () {
    this.$init = function () {
      $mod.TEnumerable$G23.$init.call(this);
      this.FOnNotify = null;
      this.FLength = 0;
      this.FItems = [];
    };
    this.$final = function () {
      this.FOnNotify = undefined;
      this.FItems = undefined;
      $mod.TEnumerable$G23.$final.call(this);
    };
    this.GetCapacity = function () {
      var Result = 0;
      Result = rtl.length(this.FItems);
      return Result;
    };
    this.PrepareAddingItem = function () {
      var Result = 0;
      if (this.FLength === rtl.length(this.FItems)) this.FItems.push(0.0);
      Result = this.FLength;
      this.FLength += 1;
      return Result;
    };
    this.PrepareAddingRange = function (ACount) {
      var Result = 0;
      var l = 0;
      if (ACount < 0) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      if (ACount === 0) return this.FLength - 1;
      for (var $l = rtl.length(this.FItems) + 1, $end = this.FLength + ACount; $l <= $end; $l++) {
        l = $l;
        this.FItems.push(0.0);
      };
      Result = this.FLength;
      this.FLength += ACount;
      return Result;
    };
    this.Notify = function (AValue, ACollectionNotification) {
      if (this.FOnNotify != null) this.FOnNotify(this,AValue,ACollectionNotification);
    };
    this.DoRemove = function (AIndex, ACollectionNotification) {
      var Result = 0.0;
      if ((AIndex < 0) || (AIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      Result = this.FItems[AIndex];
      this.FLength -= 1;
      this.FItems[AIndex] = 0.0;
      this.FItems.splice(AIndex,1);
      this.Notify(Result,ACollectionNotification);
      return Result;
    };
    this.GetCount = function () {
      var Result = 0;
      Result = this.FLength;
      return Result;
    };
    var $r = this.$rtti;
    $mod.$rtti.$DynArray("TCustomList<System.Double>.FItems$a",{eltype: rtl.double});
  },"TCustomList<System.Double>");
  rtl.createClass(this,"TCustomListEnumerator$G11",this.TEnumerator$G24,function () {
    this.$init = function () {
      $mod.TEnumerator$G24.$init.call(this);
      this.FList = null;
      this.FIndex = 0;
    };
    this.$final = function () {
      this.FList = undefined;
      $mod.TEnumerator$G24.$final.call(this);
    };
    this.DoMoveNext = function () {
      var Result = false;
      this.FIndex += 1;
      Result = (this.FList.FLength > 0) && (this.FIndex < this.FList.FLength);
      return Result;
    };
    this.DoGetCurrent = function () {
      var Result = 0.0;
      Result = this.GetCurrent();
      return Result;
    };
    this.GetCurrent = function () {
      var Result = 0.0;
      Result = this.FList.FItems[this.FIndex];
      return Result;
    };
    this.Create$1 = function (AList) {
      pas.System.TObject.Create.call(this);
      this.FIndex = -1;
      this.FList = AList;
      return this;
    };
  },"TCustomListEnumerator<System.Double>");
  rtl.createClass(this,"TList$G6",this.TCustomList$G13,function () {
    rtl.createClass(this,"TEnumerator",$mod.TCustomListEnumerator$G11,function () {
    },"TList<System.Double>.TEnumerator");
    this.$init = function () {
      $mod.TCustomList$G13.$init.call(this);
      this.FComparer = null;
    };
    this.$final = function () {
      rtl.setIntfP(this,"FComparer",null);
      $mod.TCustomList$G13.$final.call(this);
    };
    this.SameValue = function (Left, Right) {
      var Result = false;
      if (this.FComparer != null) {
        Result = this.FComparer.Compare(Left,Right) === 0}
       else Result = Left === Right;
      return Result;
    };
    this.SetCapacity = function (AValue) {
      if (AValue < this.FLength) this.SetCount(AValue);
      this.FItems = rtl.arraySetLength(this.FItems,0.0,AValue);
    };
    this.SetCount = function (AValue) {
      if (AValue < 0) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      if (AValue > this.GetCapacity()) {
        this.SetCapacity(AValue)}
       else if (AValue < this.FLength) this.DeleteRange(AValue,this.FLength - AValue);
      this.FLength = AValue;
    };
    this.InitializeList = function () {
    };
    this.InternalInsert = function (AIndex, AValue) {
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      this.FItems.splice(AIndex,0,AValue);
      this.FLength += 1;
      this.FItems[AIndex] = AValue;
      this.Notify(AValue,$mod.TCollectionNotification.cnAdded);
    };
    this.DoGetEnumerator = function () {
      var Result = null;
      Result = this.GetEnumerator$1();
      return Result;
    };
    this.GetItem = function (AIndex) {
      var Result = 0.0;
      if ((AIndex < 0) || (AIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      Result = this.FItems[AIndex];
      return Result;
    };
    this.SetItem = function (AIndex, AValue) {
      if ((AIndex < 0) || (AIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      this.Notify(this.FItems[AIndex],$mod.TCollectionNotification.cnRemoved);
      this.FItems[AIndex] = AValue;
      this.Notify(AValue,$mod.TCollectionNotification.cnAdded);
    };
    this.GetEnumerator$1 = function () {
      var Result = null;
      Result = this.TEnumerator.$create("Create$1",[this]);
      return Result;
    };
    this.Create$1 = function () {
      this.InitializeList();
      return this;
    };
    this.Create$2 = function (AComparer) {
      this.InitializeList();
      rtl.setIntfP(this,"FComparer",AComparer);
      return this;
    };
    this.Create$3 = function (ACollection) {
      var LItem = 0.0;
      this.Create$1();
      var $in = ACollection.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LItem = $in.DoGetCurrent();
          this.Add(LItem);
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
      return this;
    };
    this.Destroy = function () {
      this.SetCapacity(0);
    };
    this.Add = function (AValue) {
      var Result = 0;
      Result = this.PrepareAddingItem();
      this.FItems[Result] = AValue;
      this.Notify(AValue,$mod.TCollectionNotification.cnAdded);
      return Result;
    };
    this.AddRange = function (AValues) {
      this.InsertRange(this.FLength,AValues);
    };
    this.AddRange$1 = function (AEnumerable) {
      var LValue = 0.0;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.GetCurrent();
          this.Add(LValue);
        }
      } finally {
        rtl._Release($in)
      };
    };
    this.AddRange$2 = function (AEnumerable) {
      var LValue = 0.0;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.DoGetCurrent();
          this.Add(LValue);
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
    };
    this.Insert = function (AIndex, AValue) {
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      this.InternalInsert(AIndex,AValue);
    };
    this.InsertRange = function (AIndex, AValues) {
      var LLength = 0;
      var i = 0;
      var LValue = 0.0;
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      LLength = rtl.length(AValues);
      if (LLength === 0) return;
      if (AIndex !== this.PrepareAddingRange(LLength)) {
        for (var $l = AIndex, $end = this.FLength - LLength - 1; $l <= $end; $l++) {
          i = $l;
          this.FItems[i + LLength] = this.FItems[i];
        };
        for (var $l1 = 0, $end1 = LLength - 1; $l1 <= $end1; $l1++) {
          i = $l1;
          this.FItems[AIndex + i] = 0.0;
        };
      };
      for (var $l2 = 0, $end2 = LLength - 1; $l2 <= $end2; $l2++) {
        i = $l2;
        LValue = AValues[i];
        this.FItems[i + AIndex] = LValue;
        this.Notify(LValue,$mod.TCollectionNotification.cnAdded);
      };
    };
    this.InsertRange$1 = function (AIndex, AEnumerable) {
      var LValue = 0.0;
      var i = 0;
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      i = 0;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.GetCurrent();
          this.InternalInsert(AIndex + i,LValue);
          i += 1;
        }
      } finally {
        rtl._Release($in)
      };
    };
    this.InsertRange$2 = function (AIndex, AEnumerable) {
      var LValue = 0.0;
      var i = 0;
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      i = 0;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.DoGetCurrent();
          this.InternalInsert(AIndex + i,LValue);
          i += 1;
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
    };
    this.Remove = function (AValue) {
      var Result = 0;
      Result = this.IndexOf(AValue);
      if (Result >= 0) this.DoRemove(Result,$mod.TCollectionNotification.cnRemoved);
      return Result;
    };
    this.RemoveItem = function (AValue, Direction) {
      var Result = 0;
      if (Direction === $mod.TDirection.fromEnd) {
        Result = this.LastIndexOf(AValue)}
       else Result = this.IndexOf(AValue);
      if (Result >= 0) this.DoRemove(Result,$mod.TCollectionNotification.cnRemoved);
      return Result;
    };
    this.Delete = function (AIndex) {
      this.DoRemove(AIndex,$mod.TCollectionNotification.cnRemoved);
    };
    this.DeleteRange = function (AIndex, ACount) {
      var LDeleted = [];
      var i = 0;
      if (ACount === 0) return;
      if ((ACount < 0) || (AIndex < 0) || ((AIndex + ACount) > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      LDeleted = this.FItems.splice(AIndex,this.FLength);
      this.FLength -= ACount;
      for (var $l = 0, $end = rtl.length(LDeleted) - 1; $l <= $end; $l++) {
        i = $l;
        this.Notify(LDeleted[i],$mod.TCollectionNotification.cnRemoved);
      };
    };
    this.ExtractIndex = function (AIndex) {
      var Result = 0.0;
      Result = this.DoRemove(AIndex,$mod.TCollectionNotification.cnExtracted);
      return Result;
    };
    this.Extract = function (AValue) {
      var Result = 0.0;
      var LIndex = 0;
      LIndex = this.IndexOf(AValue);
      if (LIndex < 0) {
        Result = 0.0}
       else Result = this.DoRemove(LIndex,$mod.TCollectionNotification.cnExtracted);
      return Result;
    };
    this.Exchange = function (AIndex1, AIndex2) {
      var LTemp = 0.0;
      LTemp = this.FItems[AIndex1];
      this.FItems[AIndex1] = this.FItems[AIndex2];
      this.FItems[AIndex2] = LTemp;
    };
    this.Move = function (AIndex, ANewIndex) {
      var Arr = null;
      var LTemp = undefined;
      var i = 0;
      if (ANewIndex === AIndex) return;
      if ((ANewIndex < 0) || (ANewIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      Arr = this.FItems;
      LTemp = Arr[AIndex];
      if (AIndex < ANewIndex) {
        for (var $l = AIndex, $end = ANewIndex - 1; $l <= $end; $l++) {
          i = $l;
          Arr[i] = Arr[i + 1];
        }}
       else for (var $l1 = AIndex, $end1 = ANewIndex + 1; $l1 >= $end1; $l1--) {
        i = $l1;
        Arr[i] = Arr[i - 1];
      };
      Arr[ANewIndex] = LTemp;
    };
    this.First = function () {
      var Result = 0.0;
      Result = this.GetItem(0);
      return Result;
    };
    this.Last = function () {
      var Result = 0.0;
      Result = this.GetItem(this.FLength - 1);
      return Result;
    };
    this.Clear = function () {
      this.SetCount(0);
      this.SetCapacity(0);
    };
    this.Contains = function (AValue) {
      var Result = false;
      Result = this.IndexOf(AValue) >= 0;
      return Result;
    };
    this.IndexOf = function (AValue) {
      var Result = 0;
      var i = 0;
      for (var $l = 0, $end = this.FLength - 1; $l <= $end; $l++) {
        i = $l;
        if (this.SameValue(AValue,this.FItems[i])) return i;
      };
      Result = -1;
      return Result;
    };
    this.LastIndexOf = function (AValue) {
      var Result = 0;
      var i = 0;
      for (var $l = this.FLength - 1; $l >= 0; $l--) {
        i = $l;
        if (this.SameValue(AValue,this.FItems[i])) return i;
      };
      Result = -1;
      return Result;
    };
    this.Reverse = function () {
      var a = 0;
      var b = 0;
      var LTemp = 0.0;
      a = 0;
      b = this.FLength - 1;
      while (a < b) {
        LTemp = this.FItems[a];
        this.FItems[a] = this.FItems[b];
        this.FItems[b] = LTemp;
        a += 1;
        b -= 1;
      };
    };
    this.TrimExcess = function () {
      this.SetCapacity(this.FLength);
    };
    this.Sort = function () {
      $mod.TArrayHelper$G14.Sort$1({p: this, get: function () {
          return this.p.FItems;
        }, set: function (v) {
          this.p.FItems = v;
        }},this.FComparer,0,this.FLength);
    };
    this.Sort$1 = function (AComparer) {
      $mod.TArrayHelper$G14.Sort$1({p: this, get: function () {
          return this.p.FItems;
        }, set: function (v) {
          this.p.FItems = v;
        }},AComparer,0,this.FLength);
    };
    this.BinarySearch = function (AItem, AIndex) {
      var Result = false;
      Result = $mod.TArrayHelper$G14.BinarySearch$1(this.FItems,AItem,AIndex,this.FComparer,0,this.FLength);
      return Result;
    };
    this.BinarySearch$1 = function (AItem, AIndex, AComparer) {
      var Result = false;
      Result = $mod.TArrayHelper$G14.BinarySearch$1(this.FItems,AItem,AIndex,AComparer,0,this.FLength);
      return Result;
    };
  },"TList<System.Double>");
  rtl.createClass(this,"TEnumerator$G25",pas.System.TObject,function () {
    this.$initSpec = function () {
    };
    this.MoveNext = function () {
      var Result = false;
      Result = this.DoMoveNext();
      return Result;
    };
  },"TEnumerator<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>");
  rtl.createClass(this,"TEnumerable$G24",pas.System.TObject,function () {
    this.$initSpec = function () {
    };
    this.GetEnumerator = function () {
      var Result = null;
      Result = this.DoGetEnumerator();
      return Result;
    };
    this.ToArray = function () {
      var Result = [];
      var LEnumerator = null;
      Result = [];
      LEnumerator = this.GetEnumerator();
      try {
        while (LEnumerator.MoveNext()) Result.push(LEnumerator.DoGetCurrent());
      } finally {
        LEnumerator = rtl.freeLoc(LEnumerator);
      };
      return Result;
    };
  },"TEnumerable<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>");
  this.$rtti.$MethodVar("TCollectionNotifyEvent<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>",{init: function () {
      this.procsig = rtl.newTIProcSig([["ASender",pas.System.$rtti["TObject"]],["AItem",pas["WEBLib.TMSFNCPersistence"].$rtti["TTMSFNCObjectReference"],2],["AAction",$mod.$rtti["TCollectionNotification"]]]);
    }, methodkind: 0});
  rtl.createClass(this,"TCustomArrayHelper$G16",pas.System.TObject,function () {
    this.$initSpec = function () {
    };
    this.Sort = function (AValues, AComparer) {
      this.Sort$1(AValues,AComparer,0,rtl.length(AValues.get()));
    };
    this.Sort$1 = function (AValues, AComparer, AIndex, ACount) {
      if (ACount <= 1) return;
      this.QuickSort(AValues,AIndex,(AIndex + ACount) - 1,AComparer);
    };
    this.BinarySearch$2 = function (AValues, AItem, AFoundIndex, AComparer) {
      var Result = false;
      Result = this.BinarySearch$1(AValues,AItem,AFoundIndex,AComparer,0,rtl.length(AValues));
      return Result;
    };
    this.BinarySearch$3 = function (AValues, AItem, ASearchResult, AComparer) {
      var Result = false;
      Result = this.BinarySearch(AValues,AItem,ASearchResult,AComparer,0,rtl.length(AValues));
      return Result;
    };
  },"TCustomArrayHelper<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>");
  rtl.createClass(this,"TArrayHelper$G15",this.TCustomArrayHelper$G16,function () {
    this.$initSpec = function () {
    };
    this.QuickSort = function (AValues, ALeft, ARight, AComparer) {
      var I = 0;
      var J = 0;
      var P = null;
      var Q = null;
      if (((ARight - ALeft) <= 0) || (rtl.length(AValues.get()) === 0)) return;
      do {
        I = ALeft;
        J = ARight;
        P = AValues.get()[ALeft + Math.floor((ARight - ALeft) / 2)];
        do {
          while (AComparer.Compare(AValues.get()[I],P) < 0) I += 1;
          while (AComparer.Compare(AValues.get()[J],P) > 0) J -= 1;
          if (I <= J) {
            if (I !== J) {
              Q = AValues.get()[I];
              AValues.get()[I] = AValues.get()[J];
              AValues.get()[J] = Q;
            };
            I += 1;
            J -= 1;
          };
        } while (!(I > J));
        if ((J - ALeft) < (ARight - I)) {
          if (ALeft < J) this.QuickSort(AValues,ALeft,J,AComparer);
          ALeft = I;
        } else {
          if (I < ARight) this.QuickSort(AValues,I,ARight,AComparer);
          ARight = J;
        };
      } while (!(ALeft >= ARight));
    };
    this.BinarySearch = function (AValues, AItem, ASearchResult, AComparer, AIndex, ACount) {
      var Result = false;
      var imin = 0;
      var imax = 0;
      var imid = 0;
      var ilo = 0;
      imin = AIndex;
      imax = (AIndex + ACount) - 1;
      ilo = imid * imid;
      imid = ilo * imid;
      while (imin < imax) {
        imid = rtl.trunc((imax + imin) / 2);
        ASearchResult.CompareResult = AComparer.Compare(AValues[imid],AItem);
        if (ASearchResult.CompareResult < 0) {
          imin = imid + 1}
         else {
          if (ASearchResult.CompareResult === 0) {
            ASearchResult.FoundIndex = imid;
            ASearchResult.CandidateIndex = imid;
            return true;
          };
          imax = imid;
        };
      };
      Result = imax === imin;
      if (Result) {
        ASearchResult.CompareResult = AComparer.Compare(AValues[imin],AItem);
        ASearchResult.CandidateIndex = imin;
        Result = ASearchResult.CompareResult === 0;
        if (Result) {
          ASearchResult.FoundIndex = imin}
         else ASearchResult.FoundIndex = -1;
      } else {
        ASearchResult.CompareResult = 0;
        ASearchResult.FoundIndex = -1;
        ASearchResult.CandidateIndex = -1;
      };
      return Result;
    };
    this.BinarySearch$1 = function (AValues, AItem, AFoundIndex, AComparer, AIndex, ACount) {
      var Result = false;
      var imin = 0;
      var imax = 0;
      var imid = 0;
      var LCompare = 0;
      imin = AIndex;
      imax = (AIndex + ACount) - 1;
      while (imin < imax) {
        imid = rtl.trunc((imin + imax) / 2);
        LCompare = AComparer.Compare(AValues[imid],AItem);
        if (LCompare < 0) {
          imin = imid + 1}
         else {
          if (LCompare === 0) {
            AFoundIndex.set(imid);
            return true;
          };
          imax = imid;
        };
      };
      LCompare = AComparer.Compare(AValues[imin],AItem);
      Result = (imax === imin) && (LCompare === 0);
      if (Result) {
        AFoundIndex.set(imin)}
       else AFoundIndex.set(-1);
      return Result;
    };
  },"TArrayHelper<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>");
  rtl.createClass(this,"TCustomList$G14",this.TEnumerable$G24,function () {
    this.$initSpec = function () {
      var $r = this.$rtti;
      $mod.$rtti.$DynArray("TCustomList<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>.FItems$a",{eltype: pas["WEBLib.TMSFNCPersistence"].$rtti["TTMSFNCObjectReference"]});
    };
    this.$init = function () {
      $mod.TEnumerable$G24.$init.call(this);
      this.FOnNotify = null;
      this.FLength = 0;
      this.FItems = [];
    };
    this.$final = function () {
      this.FOnNotify = undefined;
      this.FItems = undefined;
      $mod.TEnumerable$G24.$final.call(this);
    };
    this.GetCapacity = function () {
      var Result = 0;
      Result = rtl.length(this.FItems);
      return Result;
    };
    this.PrepareAddingItem = function () {
      var Result = 0;
      if (this.FLength === rtl.length(this.FItems)) this.FItems.push(null);
      Result = this.FLength;
      this.FLength += 1;
      return Result;
    };
    this.PrepareAddingRange = function (ACount) {
      var Result = 0;
      var l = 0;
      if (ACount < 0) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      if (ACount === 0) return this.FLength - 1;
      for (var $l = rtl.length(this.FItems) + 1, $end = this.FLength + ACount; $l <= $end; $l++) {
        l = $l;
        this.FItems.push(null);
      };
      Result = this.FLength;
      this.FLength += ACount;
      return Result;
    };
    this.Notify = function (AValue, ACollectionNotification) {
      if (this.FOnNotify != null) this.FOnNotify(this,AValue,ACollectionNotification);
    };
    this.DoRemove = function (AIndex, ACollectionNotification) {
      var Result = null;
      if ((AIndex < 0) || (AIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      Result = this.FItems[AIndex];
      this.FLength -= 1;
      this.FItems[AIndex] = null;
      this.FItems.splice(AIndex,1);
      this.Notify(Result,ACollectionNotification);
      return Result;
    };
    this.GetCount = function () {
      var Result = 0;
      Result = this.FLength;
      return Result;
    };
  },"TCustomList<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>");
  rtl.createClass(this,"TCustomListEnumerator$G12",this.TEnumerator$G25,function () {
    this.$initSpec = function () {
    };
    this.$init = function () {
      $mod.TEnumerator$G25.$init.call(this);
      this.FList = null;
      this.FIndex = 0;
    };
    this.$final = function () {
      this.FList = undefined;
      $mod.TEnumerator$G25.$final.call(this);
    };
    this.DoMoveNext = function () {
      var Result = false;
      this.FIndex += 1;
      Result = (this.FList.FLength > 0) && (this.FIndex < this.FList.FLength);
      return Result;
    };
    this.DoGetCurrent = function () {
      var Result = null;
      Result = this.GetCurrent();
      return Result;
    };
    this.GetCurrent = function () {
      var Result = null;
      Result = this.FList.FItems[this.FIndex];
      return Result;
    };
    this.Create$1 = function (AList) {
      pas.System.TObject.Create.call(this);
      this.FIndex = -1;
      this.FList = AList;
      return this;
    };
  },"TCustomListEnumerator<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>");
  rtl.createClass(this,"TList$G7",this.TCustomList$G14,function () {
    this.$initSpec = function () {
      rtl.createClass(this,"TEnumerator",$mod.TCustomListEnumerator$G12,function () {
      },"TList<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>.TEnumerator");
    };
    this.$init = function () {
      $mod.TCustomList$G14.$init.call(this);
      this.FComparer = null;
    };
    this.$final = function () {
      rtl.setIntfP(this,"FComparer",null);
      $mod.TCustomList$G14.$final.call(this);
    };
    this.SameValue = function (Left, Right) {
      var Result = false;
      if (this.FComparer != null) {
        Result = this.FComparer.Compare(Left,Right) === 0}
       else Result = Left === Right;
      return Result;
    };
    this.SetCapacity = function (AValue) {
      if (AValue < this.FLength) this.SetCount(AValue);
      this.FItems = rtl.arraySetLength(this.FItems,null,AValue);
    };
    this.SetCount = function (AValue) {
      if (AValue < 0) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      if (AValue > this.GetCapacity()) {
        this.SetCapacity(AValue)}
       else if (AValue < this.FLength) this.DeleteRange(AValue,this.FLength - AValue);
      this.FLength = AValue;
    };
    this.InitializeList = function () {
    };
    this.InternalInsert = function (AIndex, AValue) {
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      this.FItems.splice(AIndex,0,AValue);
      this.FLength += 1;
      this.FItems[AIndex] = AValue;
      this.Notify(AValue,$mod.TCollectionNotification.cnAdded);
    };
    this.DoGetEnumerator = function () {
      var Result = null;
      Result = this.GetEnumerator$1();
      return Result;
    };
    this.GetItem = function (AIndex) {
      var Result = null;
      if ((AIndex < 0) || (AIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      Result = this.FItems[AIndex];
      return Result;
    };
    this.SetItem = function (AIndex, AValue) {
      if ((AIndex < 0) || (AIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      this.Notify(this.FItems[AIndex],$mod.TCollectionNotification.cnRemoved);
      this.FItems[AIndex] = AValue;
      this.Notify(AValue,$mod.TCollectionNotification.cnAdded);
    };
    this.GetEnumerator$1 = function () {
      var Result = null;
      Result = this.TEnumerator.$create("Create$1",[this]);
      return Result;
    };
    this.Create$1 = function () {
      this.InitializeList();
      return this;
    };
    this.Create$2 = function (AComparer) {
      this.InitializeList();
      rtl.setIntfP(this,"FComparer",AComparer);
      return this;
    };
    this.Create$3 = function (ACollection) {
      var LItem = null;
      this.Create$1();
      var $in = ACollection.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LItem = $in.DoGetCurrent();
          this.Add(LItem);
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
      return this;
    };
    this.Destroy = function () {
      this.SetCapacity(0);
    };
    this.Add = function (AValue) {
      var Result = 0;
      Result = this.PrepareAddingItem();
      this.FItems[Result] = AValue;
      this.Notify(AValue,$mod.TCollectionNotification.cnAdded);
      return Result;
    };
    this.AddRange = function (AValues) {
      this.InsertRange(this.FLength,AValues);
    };
    this.AddRange$1 = function (AEnumerable) {
      var LValue = null;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.GetCurrent();
          this.Add(LValue);
        }
      } finally {
        rtl._Release($in)
      };
    };
    this.AddRange$2 = function (AEnumerable) {
      var LValue = null;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.DoGetCurrent();
          this.Add(LValue);
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
    };
    this.Insert = function (AIndex, AValue) {
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      this.InternalInsert(AIndex,AValue);
    };
    this.InsertRange = function (AIndex, AValues) {
      var LLength = 0;
      var i = 0;
      var LValue = null;
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      LLength = rtl.length(AValues);
      if (LLength === 0) return;
      if (AIndex !== this.PrepareAddingRange(LLength)) {
        for (var $l = AIndex, $end = this.FLength - LLength - 1; $l <= $end; $l++) {
          i = $l;
          this.FItems[i + LLength] = this.FItems[i];
        };
        for (var $l1 = 0, $end1 = LLength - 1; $l1 <= $end1; $l1++) {
          i = $l1;
          this.FItems[AIndex + i] = null;
        };
      };
      for (var $l2 = 0, $end2 = LLength - 1; $l2 <= $end2; $l2++) {
        i = $l2;
        LValue = AValues[i];
        this.FItems[i + AIndex] = LValue;
        this.Notify(LValue,$mod.TCollectionNotification.cnAdded);
      };
    };
    this.InsertRange$1 = function (AIndex, AEnumerable) {
      var LValue = null;
      var i = 0;
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      i = 0;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.GetCurrent();
          this.InternalInsert(AIndex + i,LValue);
          i += 1;
        }
      } finally {
        rtl._Release($in)
      };
    };
    this.InsertRange$2 = function (AIndex, AEnumerable) {
      var LValue = null;
      var i = 0;
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      i = 0;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.DoGetCurrent();
          this.InternalInsert(AIndex + i,LValue);
          i += 1;
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
    };
    this.Remove = function (AValue) {
      var Result = 0;
      Result = this.IndexOf(AValue);
      if (Result >= 0) this.DoRemove(Result,$mod.TCollectionNotification.cnRemoved);
      return Result;
    };
    this.RemoveItem = function (AValue, Direction) {
      var Result = 0;
      if (Direction === $mod.TDirection.fromEnd) {
        Result = this.LastIndexOf(AValue)}
       else Result = this.IndexOf(AValue);
      if (Result >= 0) this.DoRemove(Result,$mod.TCollectionNotification.cnRemoved);
      return Result;
    };
    this.Delete = function (AIndex) {
      this.DoRemove(AIndex,$mod.TCollectionNotification.cnRemoved);
    };
    this.DeleteRange = function (AIndex, ACount) {
      var LDeleted = [];
      var i = 0;
      if (ACount === 0) return;
      if ((ACount < 0) || (AIndex < 0) || ((AIndex + ACount) > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      LDeleted = this.FItems.splice(AIndex,this.FLength);
      this.FLength -= ACount;
      for (var $l = 0, $end = rtl.length(LDeleted) - 1; $l <= $end; $l++) {
        i = $l;
        this.Notify(LDeleted[i],$mod.TCollectionNotification.cnRemoved);
      };
    };
    this.ExtractIndex = function (AIndex) {
      var Result = null;
      Result = this.DoRemove(AIndex,$mod.TCollectionNotification.cnExtracted);
      return Result;
    };
    this.Extract = function (AValue) {
      var Result = null;
      var LIndex = 0;
      LIndex = this.IndexOf(AValue);
      if (LIndex < 0) {
        Result = null}
       else Result = this.DoRemove(LIndex,$mod.TCollectionNotification.cnExtracted);
      return Result;
    };
    this.Exchange = function (AIndex1, AIndex2) {
      var LTemp = null;
      LTemp = this.FItems[AIndex1];
      this.FItems[AIndex1] = this.FItems[AIndex2];
      this.FItems[AIndex2] = LTemp;
    };
    this.Move = function (AIndex, ANewIndex) {
      var Arr = null;
      var LTemp = undefined;
      var i = 0;
      if (ANewIndex === AIndex) return;
      if ((ANewIndex < 0) || (ANewIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      Arr = this.FItems;
      LTemp = Arr[AIndex];
      if (AIndex < ANewIndex) {
        for (var $l = AIndex, $end = ANewIndex - 1; $l <= $end; $l++) {
          i = $l;
          Arr[i] = Arr[i + 1];
        }}
       else for (var $l1 = AIndex, $end1 = ANewIndex + 1; $l1 >= $end1; $l1--) {
        i = $l1;
        Arr[i] = Arr[i - 1];
      };
      Arr[ANewIndex] = LTemp;
    };
    this.First = function () {
      var Result = null;
      Result = this.GetItem(0);
      return Result;
    };
    this.Last = function () {
      var Result = null;
      Result = this.GetItem(this.FLength - 1);
      return Result;
    };
    this.Clear = function () {
      this.SetCount(0);
      this.SetCapacity(0);
    };
    this.Contains = function (AValue) {
      var Result = false;
      Result = this.IndexOf(AValue) >= 0;
      return Result;
    };
    this.IndexOf = function (AValue) {
      var Result = 0;
      var i = 0;
      for (var $l = 0, $end = this.FLength - 1; $l <= $end; $l++) {
        i = $l;
        if (this.SameValue(AValue,this.FItems[i])) return i;
      };
      Result = -1;
      return Result;
    };
    this.LastIndexOf = function (AValue) {
      var Result = 0;
      var i = 0;
      for (var $l = this.FLength - 1; $l >= 0; $l--) {
        i = $l;
        if (this.SameValue(AValue,this.FItems[i])) return i;
      };
      Result = -1;
      return Result;
    };
    this.Reverse = function () {
      var a = 0;
      var b = 0;
      var LTemp = null;
      a = 0;
      b = this.FLength - 1;
      while (a < b) {
        LTemp = this.FItems[a];
        this.FItems[a] = this.FItems[b];
        this.FItems[b] = LTemp;
        a += 1;
        b -= 1;
      };
    };
    this.TrimExcess = function () {
      this.SetCapacity(this.FLength);
    };
    this.Sort = function () {
      $mod.TArrayHelper$G15.Sort$1({p: this, get: function () {
          return this.p.FItems;
        }, set: function (v) {
          this.p.FItems = v;
        }},this.FComparer,0,this.FLength);
    };
    this.Sort$1 = function (AComparer) {
      $mod.TArrayHelper$G15.Sort$1({p: this, get: function () {
          return this.p.FItems;
        }, set: function (v) {
          this.p.FItems = v;
        }},AComparer,0,this.FLength);
    };
    this.BinarySearch = function (AItem, AIndex) {
      var Result = false;
      Result = $mod.TArrayHelper$G15.BinarySearch$1(this.FItems,AItem,AIndex,this.FComparer,0,this.FLength);
      return Result;
    };
    this.BinarySearch$1 = function (AItem, AIndex, AComparer) {
      var Result = false;
      Result = $mod.TArrayHelper$G15.BinarySearch$1(this.FItems,AItem,AIndex,AComparer,0,this.FLength);
      return Result;
    };
  },"TList<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>");
  rtl.createClass(this,"TObjectList$G2",this.TList$G7,function () {
    this.$initSpec = function () {
    };
    this.$init = function () {
      $mod.TList$G7.$init.call(this);
      this.FObjectsOwner = false;
    };
    this.Notify = function (aValue, Action) {
      $mod.TCustomList$G14.Notify.call(this,aValue,Action);
      if (this.FObjectsOwner && (Action === $mod.TCollectionNotification.cnRemoved)) aValue = rtl.freeLoc(aValue);
    };
    this.Create$4 = function (aOwnsObjects) {
      $mod.TList$G7.Create$1.call(this);
      this.FObjectsOwner = aOwnsObjects;
      return this;
    };
    this.Create$5 = function (AComparer, aOwnsObjects) {
      $mod.TList$G7.Create$2.call(this,AComparer);
      this.FObjectsOwner = aOwnsObjects;
      return this;
    };
    this.Create$6 = function (aCollection, aOwnsObjects) {
      $mod.TList$G7.Create$3.call(this,aCollection);
      this.FObjectsOwner = aOwnsObjects;
      return this;
    };
  },"TObjectList<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>");
  rtl.createClass(this,"TEnumerator$G26",pas.System.TObject,function () {
    this.$initSpec = function () {
    };
    this.MoveNext = function () {
      var Result = false;
      Result = this.DoMoveNext();
      return Result;
    };
  },"TEnumerator<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  rtl.createClass(this,"TEnumerable$G25",pas.System.TObject,function () {
    this.$initSpec = function () {
    };
    this.GetEnumerator = function () {
      var Result = null;
      Result = this.DoGetEnumerator();
      return Result;
    };
    this.ToArray = function () {
      var Result = [];
      var LEnumerator = null;
      Result = [];
      LEnumerator = this.GetEnumerator();
      try {
        while (LEnumerator.MoveNext()) Result.push(LEnumerator.DoGetCurrent());
      } finally {
        LEnumerator = rtl.freeLoc(LEnumerator);
      };
      return Result;
    };
  },"TEnumerable<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  this.$rtti.$MethodVar("TCollectionNotifyEvent<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>",{init: function () {
      this.procsig = rtl.newTIProcSig([["ASender",pas.System.$rtti["TObject"]],["AItem",pas["WEBLib.TMSFNCPersistence"].$rtti["TTMSFNCJSONToClassProperty"],2],["AAction",$mod.$rtti["TCollectionNotification"]]]);
    }, methodkind: 0});
  rtl.createClass(this,"TCustomArrayHelper$G17",pas.System.TObject,function () {
    this.$initSpec = function () {
    };
    this.Sort = function (AValues, AComparer) {
      this.Sort$1(AValues,AComparer,0,rtl.length(AValues.get()));
    };
    this.Sort$1 = function (AValues, AComparer, AIndex, ACount) {
      if (ACount <= 1) return;
      this.QuickSort(AValues,AIndex,(AIndex + ACount) - 1,AComparer);
    };
    this.BinarySearch$2 = function (AValues, AItem, AFoundIndex, AComparer) {
      var Result = false;
      Result = this.BinarySearch$1(AValues,AItem,AFoundIndex,AComparer,0,rtl.length(AValues));
      return Result;
    };
    this.BinarySearch$3 = function (AValues, AItem, ASearchResult, AComparer) {
      var Result = false;
      Result = this.BinarySearch(AValues,AItem,ASearchResult,AComparer,0,rtl.length(AValues));
      return Result;
    };
  },"TCustomArrayHelper<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  rtl.createClass(this,"TArrayHelper$G16",this.TCustomArrayHelper$G17,function () {
    this.$initSpec = function () {
    };
    this.QuickSort = function (AValues, ALeft, ARight, AComparer) {
      var I = 0;
      var J = 0;
      var P = null;
      var Q = null;
      if (((ARight - ALeft) <= 0) || (rtl.length(AValues.get()) === 0)) return;
      do {
        I = ALeft;
        J = ARight;
        P = AValues.get()[ALeft + Math.floor((ARight - ALeft) / 2)];
        do {
          while (AComparer.Compare(AValues.get()[I],P) < 0) I += 1;
          while (AComparer.Compare(AValues.get()[J],P) > 0) J -= 1;
          if (I <= J) {
            if (I !== J) {
              Q = AValues.get()[I];
              AValues.get()[I] = AValues.get()[J];
              AValues.get()[J] = Q;
            };
            I += 1;
            J -= 1;
          };
        } while (!(I > J));
        if ((J - ALeft) < (ARight - I)) {
          if (ALeft < J) this.QuickSort(AValues,ALeft,J,AComparer);
          ALeft = I;
        } else {
          if (I < ARight) this.QuickSort(AValues,I,ARight,AComparer);
          ARight = J;
        };
      } while (!(ALeft >= ARight));
    };
    this.BinarySearch = function (AValues, AItem, ASearchResult, AComparer, AIndex, ACount) {
      var Result = false;
      var imin = 0;
      var imax = 0;
      var imid = 0;
      var ilo = 0;
      imin = AIndex;
      imax = (AIndex + ACount) - 1;
      ilo = imid * imid;
      imid = ilo * imid;
      while (imin < imax) {
        imid = rtl.trunc((imax + imin) / 2);
        ASearchResult.CompareResult = AComparer.Compare(AValues[imid],AItem);
        if (ASearchResult.CompareResult < 0) {
          imin = imid + 1}
         else {
          if (ASearchResult.CompareResult === 0) {
            ASearchResult.FoundIndex = imid;
            ASearchResult.CandidateIndex = imid;
            return true;
          };
          imax = imid;
        };
      };
      Result = imax === imin;
      if (Result) {
        ASearchResult.CompareResult = AComparer.Compare(AValues[imin],AItem);
        ASearchResult.CandidateIndex = imin;
        Result = ASearchResult.CompareResult === 0;
        if (Result) {
          ASearchResult.FoundIndex = imin}
         else ASearchResult.FoundIndex = -1;
      } else {
        ASearchResult.CompareResult = 0;
        ASearchResult.FoundIndex = -1;
        ASearchResult.CandidateIndex = -1;
      };
      return Result;
    };
    this.BinarySearch$1 = function (AValues, AItem, AFoundIndex, AComparer, AIndex, ACount) {
      var Result = false;
      var imin = 0;
      var imax = 0;
      var imid = 0;
      var LCompare = 0;
      imin = AIndex;
      imax = (AIndex + ACount) - 1;
      while (imin < imax) {
        imid = rtl.trunc((imin + imax) / 2);
        LCompare = AComparer.Compare(AValues[imid],AItem);
        if (LCompare < 0) {
          imin = imid + 1}
         else {
          if (LCompare === 0) {
            AFoundIndex.set(imid);
            return true;
          };
          imax = imid;
        };
      };
      LCompare = AComparer.Compare(AValues[imin],AItem);
      Result = (imax === imin) && (LCompare === 0);
      if (Result) {
        AFoundIndex.set(imin)}
       else AFoundIndex.set(-1);
      return Result;
    };
  },"TArrayHelper<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  rtl.createClass(this,"TCustomList$G15",this.TEnumerable$G25,function () {
    this.$initSpec = function () {
      var $r = this.$rtti;
      $mod.$rtti.$DynArray("TCustomList<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>.FItems$a",{eltype: pas["WEBLib.TMSFNCPersistence"].$rtti["TTMSFNCJSONToClassProperty"]});
    };
    this.$init = function () {
      $mod.TEnumerable$G25.$init.call(this);
      this.FOnNotify = null;
      this.FLength = 0;
      this.FItems = [];
    };
    this.$final = function () {
      this.FOnNotify = undefined;
      this.FItems = undefined;
      $mod.TEnumerable$G25.$final.call(this);
    };
    this.GetCapacity = function () {
      var Result = 0;
      Result = rtl.length(this.FItems);
      return Result;
    };
    this.PrepareAddingItem = function () {
      var Result = 0;
      if (this.FLength === rtl.length(this.FItems)) this.FItems.push(null);
      Result = this.FLength;
      this.FLength += 1;
      return Result;
    };
    this.PrepareAddingRange = function (ACount) {
      var Result = 0;
      var l = 0;
      if (ACount < 0) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      if (ACount === 0) return this.FLength - 1;
      for (var $l = rtl.length(this.FItems) + 1, $end = this.FLength + ACount; $l <= $end; $l++) {
        l = $l;
        this.FItems.push(null);
      };
      Result = this.FLength;
      this.FLength += ACount;
      return Result;
    };
    this.Notify = function (AValue, ACollectionNotification) {
      if (this.FOnNotify != null) this.FOnNotify(this,AValue,ACollectionNotification);
    };
    this.DoRemove = function (AIndex, ACollectionNotification) {
      var Result = null;
      if ((AIndex < 0) || (AIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      Result = this.FItems[AIndex];
      this.FLength -= 1;
      this.FItems[AIndex] = null;
      this.FItems.splice(AIndex,1);
      this.Notify(Result,ACollectionNotification);
      return Result;
    };
    this.GetCount = function () {
      var Result = 0;
      Result = this.FLength;
      return Result;
    };
  },"TCustomList<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  rtl.createClass(this,"TCustomListEnumerator$G13",this.TEnumerator$G26,function () {
    this.$initSpec = function () {
    };
    this.$init = function () {
      $mod.TEnumerator$G26.$init.call(this);
      this.FList = null;
      this.FIndex = 0;
    };
    this.$final = function () {
      this.FList = undefined;
      $mod.TEnumerator$G26.$final.call(this);
    };
    this.DoMoveNext = function () {
      var Result = false;
      this.FIndex += 1;
      Result = (this.FList.FLength > 0) && (this.FIndex < this.FList.FLength);
      return Result;
    };
    this.DoGetCurrent = function () {
      var Result = null;
      Result = this.GetCurrent();
      return Result;
    };
    this.GetCurrent = function () {
      var Result = null;
      Result = this.FList.FItems[this.FIndex];
      return Result;
    };
    this.Create$1 = function (AList) {
      pas.System.TObject.Create.call(this);
      this.FIndex = -1;
      this.FList = AList;
      return this;
    };
  },"TCustomListEnumerator<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  rtl.createClass(this,"TList$G8",this.TCustomList$G15,function () {
    this.$initSpec = function () {
      rtl.createClass(this,"TEnumerator",$mod.TCustomListEnumerator$G13,function () {
      },"TList<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>.TEnumerator");
    };
    this.$init = function () {
      $mod.TCustomList$G15.$init.call(this);
      this.FComparer = null;
    };
    this.$final = function () {
      rtl.setIntfP(this,"FComparer",null);
      $mod.TCustomList$G15.$final.call(this);
    };
    this.SameValue = function (Left, Right) {
      var Result = false;
      if (this.FComparer != null) {
        Result = this.FComparer.Compare(Left,Right) === 0}
       else Result = Left === Right;
      return Result;
    };
    this.SetCapacity = function (AValue) {
      if (AValue < this.FLength) this.SetCount(AValue);
      this.FItems = rtl.arraySetLength(this.FItems,null,AValue);
    };
    this.SetCount = function (AValue) {
      if (AValue < 0) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      if (AValue > this.GetCapacity()) {
        this.SetCapacity(AValue)}
       else if (AValue < this.FLength) this.DeleteRange(AValue,this.FLength - AValue);
      this.FLength = AValue;
    };
    this.InitializeList = function () {
    };
    this.InternalInsert = function (AIndex, AValue) {
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      this.FItems.splice(AIndex,0,AValue);
      this.FLength += 1;
      this.FItems[AIndex] = AValue;
      this.Notify(AValue,$mod.TCollectionNotification.cnAdded);
    };
    this.DoGetEnumerator = function () {
      var Result = null;
      Result = this.GetEnumerator$1();
      return Result;
    };
    this.GetItem = function (AIndex) {
      var Result = null;
      if ((AIndex < 0) || (AIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      Result = this.FItems[AIndex];
      return Result;
    };
    this.SetItem = function (AIndex, AValue) {
      if ((AIndex < 0) || (AIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      this.Notify(this.FItems[AIndex],$mod.TCollectionNotification.cnRemoved);
      this.FItems[AIndex] = AValue;
      this.Notify(AValue,$mod.TCollectionNotification.cnAdded);
    };
    this.GetEnumerator$1 = function () {
      var Result = null;
      Result = this.TEnumerator.$create("Create$1",[this]);
      return Result;
    };
    this.Create$1 = function () {
      this.InitializeList();
      return this;
    };
    this.Create$2 = function (AComparer) {
      this.InitializeList();
      rtl.setIntfP(this,"FComparer",AComparer);
      return this;
    };
    this.Create$3 = function (ACollection) {
      var LItem = null;
      this.Create$1();
      var $in = ACollection.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LItem = $in.DoGetCurrent();
          this.Add(LItem);
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
      return this;
    };
    this.Destroy = function () {
      this.SetCapacity(0);
    };
    this.Add = function (AValue) {
      var Result = 0;
      Result = this.PrepareAddingItem();
      this.FItems[Result] = AValue;
      this.Notify(AValue,$mod.TCollectionNotification.cnAdded);
      return Result;
    };
    this.AddRange = function (AValues) {
      this.InsertRange(this.FLength,AValues);
    };
    this.AddRange$1 = function (AEnumerable) {
      var LValue = null;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.GetCurrent();
          this.Add(LValue);
        }
      } finally {
        rtl._Release($in)
      };
    };
    this.AddRange$2 = function (AEnumerable) {
      var LValue = null;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.DoGetCurrent();
          this.Add(LValue);
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
    };
    this.Insert = function (AIndex, AValue) {
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      this.InternalInsert(AIndex,AValue);
    };
    this.InsertRange = function (AIndex, AValues) {
      var LLength = 0;
      var i = 0;
      var LValue = null;
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      LLength = rtl.length(AValues);
      if (LLength === 0) return;
      if (AIndex !== this.PrepareAddingRange(LLength)) {
        for (var $l = AIndex, $end = this.FLength - LLength - 1; $l <= $end; $l++) {
          i = $l;
          this.FItems[i + LLength] = this.FItems[i];
        };
        for (var $l1 = 0, $end1 = LLength - 1; $l1 <= $end1; $l1++) {
          i = $l1;
          this.FItems[AIndex + i] = null;
        };
      };
      for (var $l2 = 0, $end2 = LLength - 1; $l2 <= $end2; $l2++) {
        i = $l2;
        LValue = AValues[i];
        this.FItems[i + AIndex] = LValue;
        this.Notify(LValue,$mod.TCollectionNotification.cnAdded);
      };
    };
    this.InsertRange$1 = function (AIndex, AEnumerable) {
      var LValue = null;
      var i = 0;
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      i = 0;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.GetCurrent();
          this.InternalInsert(AIndex + i,LValue);
          i += 1;
        }
      } finally {
        rtl._Release($in)
      };
    };
    this.InsertRange$2 = function (AIndex, AEnumerable) {
      var LValue = null;
      var i = 0;
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      i = 0;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.DoGetCurrent();
          this.InternalInsert(AIndex + i,LValue);
          i += 1;
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
    };
    this.Remove = function (AValue) {
      var Result = 0;
      Result = this.IndexOf(AValue);
      if (Result >= 0) this.DoRemove(Result,$mod.TCollectionNotification.cnRemoved);
      return Result;
    };
    this.RemoveItem = function (AValue, Direction) {
      var Result = 0;
      if (Direction === $mod.TDirection.fromEnd) {
        Result = this.LastIndexOf(AValue)}
       else Result = this.IndexOf(AValue);
      if (Result >= 0) this.DoRemove(Result,$mod.TCollectionNotification.cnRemoved);
      return Result;
    };
    this.Delete = function (AIndex) {
      this.DoRemove(AIndex,$mod.TCollectionNotification.cnRemoved);
    };
    this.DeleteRange = function (AIndex, ACount) {
      var LDeleted = [];
      var i = 0;
      if (ACount === 0) return;
      if ((ACount < 0) || (AIndex < 0) || ((AIndex + ACount) > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      LDeleted = this.FItems.splice(AIndex,this.FLength);
      this.FLength -= ACount;
      for (var $l = 0, $end = rtl.length(LDeleted) - 1; $l <= $end; $l++) {
        i = $l;
        this.Notify(LDeleted[i],$mod.TCollectionNotification.cnRemoved);
      };
    };
    this.ExtractIndex = function (AIndex) {
      var Result = null;
      Result = this.DoRemove(AIndex,$mod.TCollectionNotification.cnExtracted);
      return Result;
    };
    this.Extract = function (AValue) {
      var Result = null;
      var LIndex = 0;
      LIndex = this.IndexOf(AValue);
      if (LIndex < 0) {
        Result = null}
       else Result = this.DoRemove(LIndex,$mod.TCollectionNotification.cnExtracted);
      return Result;
    };
    this.Exchange = function (AIndex1, AIndex2) {
      var LTemp = null;
      LTemp = this.FItems[AIndex1];
      this.FItems[AIndex1] = this.FItems[AIndex2];
      this.FItems[AIndex2] = LTemp;
    };
    this.Move = function (AIndex, ANewIndex) {
      var Arr = null;
      var LTemp = undefined;
      var i = 0;
      if (ANewIndex === AIndex) return;
      if ((ANewIndex < 0) || (ANewIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      Arr = this.FItems;
      LTemp = Arr[AIndex];
      if (AIndex < ANewIndex) {
        for (var $l = AIndex, $end = ANewIndex - 1; $l <= $end; $l++) {
          i = $l;
          Arr[i] = Arr[i + 1];
        }}
       else for (var $l1 = AIndex, $end1 = ANewIndex + 1; $l1 >= $end1; $l1--) {
        i = $l1;
        Arr[i] = Arr[i - 1];
      };
      Arr[ANewIndex] = LTemp;
    };
    this.First = function () {
      var Result = null;
      Result = this.GetItem(0);
      return Result;
    };
    this.Last = function () {
      var Result = null;
      Result = this.GetItem(this.FLength - 1);
      return Result;
    };
    this.Clear = function () {
      this.SetCount(0);
      this.SetCapacity(0);
    };
    this.Contains = function (AValue) {
      var Result = false;
      Result = this.IndexOf(AValue) >= 0;
      return Result;
    };
    this.IndexOf = function (AValue) {
      var Result = 0;
      var i = 0;
      for (var $l = 0, $end = this.FLength - 1; $l <= $end; $l++) {
        i = $l;
        if (this.SameValue(AValue,this.FItems[i])) return i;
      };
      Result = -1;
      return Result;
    };
    this.LastIndexOf = function (AValue) {
      var Result = 0;
      var i = 0;
      for (var $l = this.FLength - 1; $l >= 0; $l--) {
        i = $l;
        if (this.SameValue(AValue,this.FItems[i])) return i;
      };
      Result = -1;
      return Result;
    };
    this.Reverse = function () {
      var a = 0;
      var b = 0;
      var LTemp = null;
      a = 0;
      b = this.FLength - 1;
      while (a < b) {
        LTemp = this.FItems[a];
        this.FItems[a] = this.FItems[b];
        this.FItems[b] = LTemp;
        a += 1;
        b -= 1;
      };
    };
    this.TrimExcess = function () {
      this.SetCapacity(this.FLength);
    };
    this.Sort = function () {
      $mod.TArrayHelper$G16.Sort$1({p: this, get: function () {
          return this.p.FItems;
        }, set: function (v) {
          this.p.FItems = v;
        }},this.FComparer,0,this.FLength);
    };
    this.Sort$1 = function (AComparer) {
      $mod.TArrayHelper$G16.Sort$1({p: this, get: function () {
          return this.p.FItems;
        }, set: function (v) {
          this.p.FItems = v;
        }},AComparer,0,this.FLength);
    };
    this.BinarySearch = function (AItem, AIndex) {
      var Result = false;
      Result = $mod.TArrayHelper$G16.BinarySearch$1(this.FItems,AItem,AIndex,this.FComparer,0,this.FLength);
      return Result;
    };
    this.BinarySearch$1 = function (AItem, AIndex, AComparer) {
      var Result = false;
      Result = $mod.TArrayHelper$G16.BinarySearch$1(this.FItems,AItem,AIndex,AComparer,0,this.FLength);
      return Result;
    };
  },"TList<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  rtl.createClass(this,"TObjectList$G3",this.TList$G8,function () {
    this.$initSpec = function () {
    };
    this.$init = function () {
      $mod.TList$G8.$init.call(this);
      this.FObjectsOwner = false;
    };
    this.Notify = function (aValue, Action) {
      $mod.TCustomList$G15.Notify.call(this,aValue,Action);
      if (this.FObjectsOwner && (Action === $mod.TCollectionNotification.cnRemoved)) aValue = rtl.freeLoc(aValue);
    };
    this.Create$4 = function (aOwnsObjects) {
      $mod.TList$G8.Create$1.call(this);
      this.FObjectsOwner = aOwnsObjects;
      return this;
    };
    this.Create$5 = function (AComparer, aOwnsObjects) {
      $mod.TList$G8.Create$2.call(this,AComparer);
      this.FObjectsOwner = aOwnsObjects;
      return this;
    };
    this.Create$6 = function (aCollection, aOwnsObjects) {
      $mod.TList$G8.Create$3.call(this,aCollection);
      this.FObjectsOwner = aOwnsObjects;
      return this;
    };
  },"TObjectList<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  rtl.createClass(this,"TEnumerator$G27",pas.System.TObject,function () {
    this.$initSpec = function () {
    };
    this.MoveNext = function () {
      var Result = false;
      Result = this.DoMoveNext();
      return Result;
    };
  },"TEnumerator<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>");
  rtl.createClass(this,"TEnumerable$G26",pas.System.TObject,function () {
    this.$initSpec = function () {
    };
    this.GetEnumerator = function () {
      var Result = null;
      Result = this.DoGetEnumerator();
      return Result;
    };
    this.ToArray = function () {
      var Result = [];
      var LEnumerator = null;
      Result = [];
      LEnumerator = this.GetEnumerator();
      try {
        while (LEnumerator.MoveNext()) Result.push(LEnumerator.DoGetCurrent());
      } finally {
        LEnumerator = rtl.freeLoc(LEnumerator);
      };
      return Result;
    };
  },"TEnumerable<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>");
  this.$rtti.$MethodVar("TCollectionNotifyEvent<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>",{init: function () {
      this.procsig = rtl.newTIProcSig([["ASender",pas.System.$rtti["TObject"]],["AItem",pas["WEBLib.TMSFNCPersistence"].$rtti["TTMSFNCJSONToClassItem"],2],["AAction",$mod.$rtti["TCollectionNotification"]]]);
    }, methodkind: 0});
  rtl.createClass(this,"TCustomArrayHelper$G18",pas.System.TObject,function () {
    this.$initSpec = function () {
    };
    this.Sort = function (AValues, AComparer) {
      this.Sort$1(AValues,AComparer,0,rtl.length(AValues.get()));
    };
    this.Sort$1 = function (AValues, AComparer, AIndex, ACount) {
      if (ACount <= 1) return;
      this.QuickSort(AValues,AIndex,(AIndex + ACount) - 1,AComparer);
    };
    this.BinarySearch$2 = function (AValues, AItem, AFoundIndex, AComparer) {
      var Result = false;
      Result = this.BinarySearch$1(AValues,AItem,AFoundIndex,AComparer,0,rtl.length(AValues));
      return Result;
    };
    this.BinarySearch$3 = function (AValues, AItem, ASearchResult, AComparer) {
      var Result = false;
      Result = this.BinarySearch(AValues,AItem,ASearchResult,AComparer,0,rtl.length(AValues));
      return Result;
    };
  },"TCustomArrayHelper<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>");
  rtl.createClass(this,"TArrayHelper$G17",this.TCustomArrayHelper$G18,function () {
    this.$initSpec = function () {
    };
    this.QuickSort = function (AValues, ALeft, ARight, AComparer) {
      var I = 0;
      var J = 0;
      var P = null;
      var Q = null;
      if (((ARight - ALeft) <= 0) || (rtl.length(AValues.get()) === 0)) return;
      do {
        I = ALeft;
        J = ARight;
        P = AValues.get()[ALeft + Math.floor((ARight - ALeft) / 2)];
        do {
          while (AComparer.Compare(AValues.get()[I],P) < 0) I += 1;
          while (AComparer.Compare(AValues.get()[J],P) > 0) J -= 1;
          if (I <= J) {
            if (I !== J) {
              Q = AValues.get()[I];
              AValues.get()[I] = AValues.get()[J];
              AValues.get()[J] = Q;
            };
            I += 1;
            J -= 1;
          };
        } while (!(I > J));
        if ((J - ALeft) < (ARight - I)) {
          if (ALeft < J) this.QuickSort(AValues,ALeft,J,AComparer);
          ALeft = I;
        } else {
          if (I < ARight) this.QuickSort(AValues,I,ARight,AComparer);
          ARight = J;
        };
      } while (!(ALeft >= ARight));
    };
    this.BinarySearch = function (AValues, AItem, ASearchResult, AComparer, AIndex, ACount) {
      var Result = false;
      var imin = 0;
      var imax = 0;
      var imid = 0;
      var ilo = 0;
      imin = AIndex;
      imax = (AIndex + ACount) - 1;
      ilo = imid * imid;
      imid = ilo * imid;
      while (imin < imax) {
        imid = rtl.trunc((imax + imin) / 2);
        ASearchResult.CompareResult = AComparer.Compare(AValues[imid],AItem);
        if (ASearchResult.CompareResult < 0) {
          imin = imid + 1}
         else {
          if (ASearchResult.CompareResult === 0) {
            ASearchResult.FoundIndex = imid;
            ASearchResult.CandidateIndex = imid;
            return true;
          };
          imax = imid;
        };
      };
      Result = imax === imin;
      if (Result) {
        ASearchResult.CompareResult = AComparer.Compare(AValues[imin],AItem);
        ASearchResult.CandidateIndex = imin;
        Result = ASearchResult.CompareResult === 0;
        if (Result) {
          ASearchResult.FoundIndex = imin}
         else ASearchResult.FoundIndex = -1;
      } else {
        ASearchResult.CompareResult = 0;
        ASearchResult.FoundIndex = -1;
        ASearchResult.CandidateIndex = -1;
      };
      return Result;
    };
    this.BinarySearch$1 = function (AValues, AItem, AFoundIndex, AComparer, AIndex, ACount) {
      var Result = false;
      var imin = 0;
      var imax = 0;
      var imid = 0;
      var LCompare = 0;
      imin = AIndex;
      imax = (AIndex + ACount) - 1;
      while (imin < imax) {
        imid = rtl.trunc((imin + imax) / 2);
        LCompare = AComparer.Compare(AValues[imid],AItem);
        if (LCompare < 0) {
          imin = imid + 1}
         else {
          if (LCompare === 0) {
            AFoundIndex.set(imid);
            return true;
          };
          imax = imid;
        };
      };
      LCompare = AComparer.Compare(AValues[imin],AItem);
      Result = (imax === imin) && (LCompare === 0);
      if (Result) {
        AFoundIndex.set(imin)}
       else AFoundIndex.set(-1);
      return Result;
    };
  },"TArrayHelper<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>");
  rtl.createClass(this,"TCustomList$G16",this.TEnumerable$G26,function () {
    this.$initSpec = function () {
      var $r = this.$rtti;
      $mod.$rtti.$DynArray("TCustomList<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>.FItems$a",{eltype: pas["WEBLib.TMSFNCPersistence"].$rtti["TTMSFNCJSONToClassItem"]});
    };
    this.$init = function () {
      $mod.TEnumerable$G26.$init.call(this);
      this.FOnNotify = null;
      this.FLength = 0;
      this.FItems = [];
    };
    this.$final = function () {
      this.FOnNotify = undefined;
      this.FItems = undefined;
      $mod.TEnumerable$G26.$final.call(this);
    };
    this.GetCapacity = function () {
      var Result = 0;
      Result = rtl.length(this.FItems);
      return Result;
    };
    this.PrepareAddingItem = function () {
      var Result = 0;
      if (this.FLength === rtl.length(this.FItems)) this.FItems.push(null);
      Result = this.FLength;
      this.FLength += 1;
      return Result;
    };
    this.PrepareAddingRange = function (ACount) {
      var Result = 0;
      var l = 0;
      if (ACount < 0) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      if (ACount === 0) return this.FLength - 1;
      for (var $l = rtl.length(this.FItems) + 1, $end = this.FLength + ACount; $l <= $end; $l++) {
        l = $l;
        this.FItems.push(null);
      };
      Result = this.FLength;
      this.FLength += ACount;
      return Result;
    };
    this.Notify = function (AValue, ACollectionNotification) {
      if (this.FOnNotify != null) this.FOnNotify(this,AValue,ACollectionNotification);
    };
    this.DoRemove = function (AIndex, ACollectionNotification) {
      var Result = null;
      if ((AIndex < 0) || (AIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      Result = this.FItems[AIndex];
      this.FLength -= 1;
      this.FItems[AIndex] = null;
      this.FItems.splice(AIndex,1);
      this.Notify(Result,ACollectionNotification);
      return Result;
    };
    this.GetCount = function () {
      var Result = 0;
      Result = this.FLength;
      return Result;
    };
  },"TCustomList<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>");
  rtl.createClass(this,"TCustomListEnumerator$G14",this.TEnumerator$G27,function () {
    this.$initSpec = function () {
    };
    this.$init = function () {
      $mod.TEnumerator$G27.$init.call(this);
      this.FList = null;
      this.FIndex = 0;
    };
    this.$final = function () {
      this.FList = undefined;
      $mod.TEnumerator$G27.$final.call(this);
    };
    this.DoMoveNext = function () {
      var Result = false;
      this.FIndex += 1;
      Result = (this.FList.FLength > 0) && (this.FIndex < this.FList.FLength);
      return Result;
    };
    this.DoGetCurrent = function () {
      var Result = null;
      Result = this.GetCurrent();
      return Result;
    };
    this.GetCurrent = function () {
      var Result = null;
      Result = this.FList.FItems[this.FIndex];
      return Result;
    };
    this.Create$1 = function (AList) {
      pas.System.TObject.Create.call(this);
      this.FIndex = -1;
      this.FList = AList;
      return this;
    };
  },"TCustomListEnumerator<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>");
  rtl.createClass(this,"TList$G9",this.TCustomList$G16,function () {
    this.$initSpec = function () {
      rtl.createClass(this,"TEnumerator",$mod.TCustomListEnumerator$G14,function () {
      },"TList<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>.TEnumerator");
    };
    this.$init = function () {
      $mod.TCustomList$G16.$init.call(this);
      this.FComparer = null;
    };
    this.$final = function () {
      rtl.setIntfP(this,"FComparer",null);
      $mod.TCustomList$G16.$final.call(this);
    };
    this.SameValue = function (Left, Right) {
      var Result = false;
      if (this.FComparer != null) {
        Result = this.FComparer.Compare(Left,Right) === 0}
       else Result = Left === Right;
      return Result;
    };
    this.SetCapacity = function (AValue) {
      if (AValue < this.FLength) this.SetCount(AValue);
      this.FItems = rtl.arraySetLength(this.FItems,null,AValue);
    };
    this.SetCount = function (AValue) {
      if (AValue < 0) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      if (AValue > this.GetCapacity()) {
        this.SetCapacity(AValue)}
       else if (AValue < this.FLength) this.DeleteRange(AValue,this.FLength - AValue);
      this.FLength = AValue;
    };
    this.InitializeList = function () {
    };
    this.InternalInsert = function (AIndex, AValue) {
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      this.FItems.splice(AIndex,0,AValue);
      this.FLength += 1;
      this.FItems[AIndex] = AValue;
      this.Notify(AValue,$mod.TCollectionNotification.cnAdded);
    };
    this.DoGetEnumerator = function () {
      var Result = null;
      Result = this.GetEnumerator$1();
      return Result;
    };
    this.GetItem = function (AIndex) {
      var Result = null;
      if ((AIndex < 0) || (AIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      Result = this.FItems[AIndex];
      return Result;
    };
    this.SetItem = function (AIndex, AValue) {
      if ((AIndex < 0) || (AIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      this.Notify(this.FItems[AIndex],$mod.TCollectionNotification.cnRemoved);
      this.FItems[AIndex] = AValue;
      this.Notify(AValue,$mod.TCollectionNotification.cnAdded);
    };
    this.GetEnumerator$1 = function () {
      var Result = null;
      Result = this.TEnumerator.$create("Create$1",[this]);
      return Result;
    };
    this.Create$1 = function () {
      this.InitializeList();
      return this;
    };
    this.Create$2 = function (AComparer) {
      this.InitializeList();
      rtl.setIntfP(this,"FComparer",AComparer);
      return this;
    };
    this.Create$3 = function (ACollection) {
      var LItem = null;
      this.Create$1();
      var $in = ACollection.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LItem = $in.DoGetCurrent();
          this.Add(LItem);
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
      return this;
    };
    this.Destroy = function () {
      this.SetCapacity(0);
    };
    this.Add = function (AValue) {
      var Result = 0;
      Result = this.PrepareAddingItem();
      this.FItems[Result] = AValue;
      this.Notify(AValue,$mod.TCollectionNotification.cnAdded);
      return Result;
    };
    this.AddRange = function (AValues) {
      this.InsertRange(this.FLength,AValues);
    };
    this.AddRange$1 = function (AEnumerable) {
      var LValue = null;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.GetCurrent();
          this.Add(LValue);
        }
      } finally {
        rtl._Release($in)
      };
    };
    this.AddRange$2 = function (AEnumerable) {
      var LValue = null;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.DoGetCurrent();
          this.Add(LValue);
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
    };
    this.Insert = function (AIndex, AValue) {
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      this.InternalInsert(AIndex,AValue);
    };
    this.InsertRange = function (AIndex, AValues) {
      var LLength = 0;
      var i = 0;
      var LValue = null;
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      LLength = rtl.length(AValues);
      if (LLength === 0) return;
      if (AIndex !== this.PrepareAddingRange(LLength)) {
        for (var $l = AIndex, $end = this.FLength - LLength - 1; $l <= $end; $l++) {
          i = $l;
          this.FItems[i + LLength] = this.FItems[i];
        };
        for (var $l1 = 0, $end1 = LLength - 1; $l1 <= $end1; $l1++) {
          i = $l1;
          this.FItems[AIndex + i] = null;
        };
      };
      for (var $l2 = 0, $end2 = LLength - 1; $l2 <= $end2; $l2++) {
        i = $l2;
        LValue = AValues[i];
        this.FItems[i + AIndex] = LValue;
        this.Notify(LValue,$mod.TCollectionNotification.cnAdded);
      };
    };
    this.InsertRange$1 = function (AIndex, AEnumerable) {
      var LValue = null;
      var i = 0;
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      i = 0;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.GetCurrent();
          this.InternalInsert(AIndex + i,LValue);
          i += 1;
        }
      } finally {
        rtl._Release($in)
      };
    };
    this.InsertRange$2 = function (AIndex, AEnumerable) {
      var LValue = null;
      var i = 0;
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      i = 0;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.DoGetCurrent();
          this.InternalInsert(AIndex + i,LValue);
          i += 1;
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
    };
    this.Remove = function (AValue) {
      var Result = 0;
      Result = this.IndexOf(AValue);
      if (Result >= 0) this.DoRemove(Result,$mod.TCollectionNotification.cnRemoved);
      return Result;
    };
    this.RemoveItem = function (AValue, Direction) {
      var Result = 0;
      if (Direction === $mod.TDirection.fromEnd) {
        Result = this.LastIndexOf(AValue)}
       else Result = this.IndexOf(AValue);
      if (Result >= 0) this.DoRemove(Result,$mod.TCollectionNotification.cnRemoved);
      return Result;
    };
    this.Delete = function (AIndex) {
      this.DoRemove(AIndex,$mod.TCollectionNotification.cnRemoved);
    };
    this.DeleteRange = function (AIndex, ACount) {
      var LDeleted = [];
      var i = 0;
      if (ACount === 0) return;
      if ((ACount < 0) || (AIndex < 0) || ((AIndex + ACount) > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      LDeleted = this.FItems.splice(AIndex,this.FLength);
      this.FLength -= ACount;
      for (var $l = 0, $end = rtl.length(LDeleted) - 1; $l <= $end; $l++) {
        i = $l;
        this.Notify(LDeleted[i],$mod.TCollectionNotification.cnRemoved);
      };
    };
    this.ExtractIndex = function (AIndex) {
      var Result = null;
      Result = this.DoRemove(AIndex,$mod.TCollectionNotification.cnExtracted);
      return Result;
    };
    this.Extract = function (AValue) {
      var Result = null;
      var LIndex = 0;
      LIndex = this.IndexOf(AValue);
      if (LIndex < 0) {
        Result = null}
       else Result = this.DoRemove(LIndex,$mod.TCollectionNotification.cnExtracted);
      return Result;
    };
    this.Exchange = function (AIndex1, AIndex2) {
      var LTemp = null;
      LTemp = this.FItems[AIndex1];
      this.FItems[AIndex1] = this.FItems[AIndex2];
      this.FItems[AIndex2] = LTemp;
    };
    this.Move = function (AIndex, ANewIndex) {
      var Arr = null;
      var LTemp = undefined;
      var i = 0;
      if (ANewIndex === AIndex) return;
      if ((ANewIndex < 0) || (ANewIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      Arr = this.FItems;
      LTemp = Arr[AIndex];
      if (AIndex < ANewIndex) {
        for (var $l = AIndex, $end = ANewIndex - 1; $l <= $end; $l++) {
          i = $l;
          Arr[i] = Arr[i + 1];
        }}
       else for (var $l1 = AIndex, $end1 = ANewIndex + 1; $l1 >= $end1; $l1--) {
        i = $l1;
        Arr[i] = Arr[i - 1];
      };
      Arr[ANewIndex] = LTemp;
    };
    this.First = function () {
      var Result = null;
      Result = this.GetItem(0);
      return Result;
    };
    this.Last = function () {
      var Result = null;
      Result = this.GetItem(this.FLength - 1);
      return Result;
    };
    this.Clear = function () {
      this.SetCount(0);
      this.SetCapacity(0);
    };
    this.Contains = function (AValue) {
      var Result = false;
      Result = this.IndexOf(AValue) >= 0;
      return Result;
    };
    this.IndexOf = function (AValue) {
      var Result = 0;
      var i = 0;
      for (var $l = 0, $end = this.FLength - 1; $l <= $end; $l++) {
        i = $l;
        if (this.SameValue(AValue,this.FItems[i])) return i;
      };
      Result = -1;
      return Result;
    };
    this.LastIndexOf = function (AValue) {
      var Result = 0;
      var i = 0;
      for (var $l = this.FLength - 1; $l >= 0; $l--) {
        i = $l;
        if (this.SameValue(AValue,this.FItems[i])) return i;
      };
      Result = -1;
      return Result;
    };
    this.Reverse = function () {
      var a = 0;
      var b = 0;
      var LTemp = null;
      a = 0;
      b = this.FLength - 1;
      while (a < b) {
        LTemp = this.FItems[a];
        this.FItems[a] = this.FItems[b];
        this.FItems[b] = LTemp;
        a += 1;
        b -= 1;
      };
    };
    this.TrimExcess = function () {
      this.SetCapacity(this.FLength);
    };
    this.Sort = function () {
      $mod.TArrayHelper$G17.Sort$1({p: this, get: function () {
          return this.p.FItems;
        }, set: function (v) {
          this.p.FItems = v;
        }},this.FComparer,0,this.FLength);
    };
    this.Sort$1 = function (AComparer) {
      $mod.TArrayHelper$G17.Sort$1({p: this, get: function () {
          return this.p.FItems;
        }, set: function (v) {
          this.p.FItems = v;
        }},AComparer,0,this.FLength);
    };
    this.BinarySearch = function (AItem, AIndex) {
      var Result = false;
      Result = $mod.TArrayHelper$G17.BinarySearch$1(this.FItems,AItem,AIndex,this.FComparer,0,this.FLength);
      return Result;
    };
    this.BinarySearch$1 = function (AItem, AIndex, AComparer) {
      var Result = false;
      Result = $mod.TArrayHelper$G17.BinarySearch$1(this.FItems,AItem,AIndex,AComparer,0,this.FLength);
      return Result;
    };
  },"TList<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>");
  rtl.createClass(this,"TObjectList$G4",this.TList$G9,function () {
    this.$initSpec = function () {
    };
    this.$init = function () {
      $mod.TList$G9.$init.call(this);
      this.FObjectsOwner = false;
    };
    this.Notify = function (aValue, Action) {
      $mod.TCustomList$G16.Notify.call(this,aValue,Action);
      if (this.FObjectsOwner && (Action === $mod.TCollectionNotification.cnRemoved)) aValue = rtl.freeLoc(aValue);
    };
    this.Create$4 = function (aOwnsObjects) {
      $mod.TList$G9.Create$1.call(this);
      this.FObjectsOwner = aOwnsObjects;
      return this;
    };
    this.Create$5 = function (AComparer, aOwnsObjects) {
      $mod.TList$G9.Create$2.call(this,AComparer);
      this.FObjectsOwner = aOwnsObjects;
      return this;
    };
    this.Create$6 = function (aCollection, aOwnsObjects) {
      $mod.TList$G9.Create$3.call(this,aCollection);
      this.FObjectsOwner = aOwnsObjects;
      return this;
    };
  },"TObjectList<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>");
  rtl.recNewT(this,"TPair$G6",function () {
    this.Key = "";
    this.Value = "";
    this.$eq = function (b) {
      return (this.Key === b.Key) && (this.Value === b.Value);
    };
    this.$assign = function (s) {
      this.Key = s.Key;
      this.Value = s.Value;
      return this;
    };
    this.Create = function (AKey, AValue) {
      this.Key = AKey;
      this.Value = AValue;
      return this;
    };
    var $r = $mod.$rtti.$Record("TPair<System.String,System.String>",{});
    $r.addField("Key",rtl.string);
    $r.addField("Value",rtl.string);
    $r.addMethod("Create",2,[["AKey",rtl.string,2],["AValue",rtl.string,2]]);
  });
  rtl.createClass(this,"TEnumerator$G28",pas.System.TObject,function () {
    this.MoveNext = function () {
      var Result = false;
      Result = this.DoMoveNext();
      return Result;
    };
  },"TEnumerator<Generics.Collections.TPair<System.String,System.String>>");
  rtl.createClass(this,"TEnumerable$G27",pas.System.TObject,function () {
    this.GetEnumerator = function () {
      var Result = null;
      Result = this.DoGetEnumerator();
      return Result;
    };
    this.ToArray = function () {
      var Result = [];
      var LEnumerator = null;
      Result = [];
      LEnumerator = this.GetEnumerator();
      try {
        while (LEnumerator.MoveNext()) Result.push($mod.TPair$G6.$clone(LEnumerator.DoGetCurrent()));
      } finally {
        LEnumerator = rtl.freeLoc(LEnumerator);
      };
      return Result;
    };
  },"TEnumerable<Generics.Collections.TPair<System.String,System.String>>");
  rtl.createClass(this,"TDictionary$G4",this.TEnumerable$G27,function () {
    rtl.createClass(this,"TPairEnumerator",$mod.TEnumerator$G28,function () {
      this.$init = function () {
        $mod.TEnumerator$G28.$init.call(this);
        this.FIter = null;
        this.FVal = null;
      };
      this.$final = function () {
        this.FIter = undefined;
        this.FVal = undefined;
        $mod.TEnumerator$G28.$final.call(this);
      };
      this.GetCurrent = function () {
        var Result = $mod.TPair$G6.$new();
        Result.$assign(this.DoGetCurrent());
        return Result;
      };
      this.DoGetCurrent = function () {
        var Result = $mod.TPair$G6.$new();
        var A = [];
        A = this.FVal.value;
        Result.$assign($mod.TPair$G6.$new());
        Result.Create("" + A[0],"" + A[1]);
        return Result;
      };
      this.DoMoveNext = function () {
        var Result = false;
        this.FVal = this.FIter.next();
        Result = !this.FVal.done;
        return Result;
      };
      this.Create$1 = function (ADictionary) {
        this.FIter = ADictionary.FMap.entries();
        return this;
      };
      this.MoveNext$1 = function () {
        var Result = false;
        Result = this.DoMoveNext();
        return Result;
      };
    },"TDictionary<System.String,System.String>.TPairEnumerator");
    rtl.createClass(this,"TKeyEnumerator",$mod.TEnumerator$G22,function () {
      this.$init = function () {
        $mod.TEnumerator$G22.$init.call(this);
        this.FIter = null;
        this.FVal = null;
      };
      this.$final = function () {
        this.FIter = undefined;
        this.FVal = undefined;
        $mod.TEnumerator$G22.$final.call(this);
      };
      this.GetCurrent = function () {
        var Result = "";
        Result = this.DoGetCurrent();
        return Result;
      };
      this.DoGetCurrent = function () {
        var Result = "";
        Result = "" + this.FVal.value;
        return Result;
      };
      this.DoMoveNext = function () {
        var Result = false;
        this.FVal = this.FIter.next();
        Result = !this.FVal.done;
        return Result;
      };
      this.Create$1 = function (AIter) {
        this.FIter = AIter;
        return this;
      };
      this.Create$2 = function (ADictionary) {
        this.Create$1(ADictionary.FMap.keys());
        return this;
      };
      this.MoveNext$1 = function () {
        var Result = false;
        Result = this.DoMoveNext();
        return Result;
      };
    },"TDictionary<System.String,System.String>.TKeyEnumerator");
    rtl.createClass(this,"TValueEnumerator",$mod.TEnumerator$G22,function () {
      this.$init = function () {
        $mod.TEnumerator$G22.$init.call(this);
        this.FIter = null;
        this.FVal = null;
      };
      this.$final = function () {
        this.FIter = undefined;
        this.FVal = undefined;
        $mod.TEnumerator$G22.$final.call(this);
      };
      this.GetCurrent = function () {
        var Result = "";
        Result = this.DoGetCurrent();
        return Result;
      };
      this.DoGetCurrent = function () {
        var Result = "";
        Result = "" + this.FVal.value;
        return Result;
      };
      this.DoMoveNext = function () {
        var Result = false;
        this.FVal = this.FIter.next();
        Result = !this.FVal.done;
        return Result;
      };
      this.Create$1 = function (AIter) {
        this.FIter = AIter;
        return this;
      };
      this.Create$2 = function (ADictionary) {
        this.Create$1(ADictionary.FMap.values());
        return this;
      };
      this.MoveNext$1 = function () {
        var Result = false;
        Result = this.DoMoveNext();
        return Result;
      };
    },"TDictionary<System.String,System.String>.TValueEnumerator");
    rtl.createClass(this,"TValueCollection",$mod.TEnumerable$G22,function () {
      this.$init = function () {
        $mod.TEnumerable$G22.$init.call(this);
        this.FMap = null;
      };
      this.$final = function () {
        this.FMap = undefined;
        $mod.TEnumerable$G22.$final.call(this);
      };
      this.GetCount = function () {
        var Result = 0;
        Result = this.FMap.size;
        return Result;
      };
      this.DoGetEnumerator = function () {
        var Result = null;
        Result = $mod.TDictionary$G4.TValueEnumerator.$create("Create$1",[this.FMap.values()]);
        return Result;
      };
      this.Create$1 = function (ADictionary) {
        this.FMap = ADictionary.FMap;
        return this;
      };
      this.GetEnumerator$1 = function () {
        var Result = null;
        Result = this.DoGetEnumerator();
        return Result;
      };
      this.ToArray = function () {
        var Result = [];
        var I = 0;
        var P = "";
        Result = rtl.arraySetLength(Result,"",this.FMap.size);
        var $in = this.GetEnumerator$1();
        try {
          while ($in.MoveNext$1()) {
            P = $in.GetCurrent();
            Result[I] = P;
            I += 1;
          }
        } finally {
          $in = rtl.freeLoc($in)
        };
        return Result;
      };
    },"TDictionary<System.String,System.String>.TValueCollection");
    rtl.createClass(this,"TKeyCollection",$mod.TEnumerable$G22,function () {
      this.$init = function () {
        $mod.TEnumerable$G22.$init.call(this);
        this.FMap = null;
      };
      this.$final = function () {
        this.FMap = undefined;
        $mod.TEnumerable$G22.$final.call(this);
      };
      this.GetCount = function () {
        var Result = 0;
        Result = this.FMap.size;
        return Result;
      };
      this.DoGetEnumerator = function () {
        var Result = null;
        Result = this.GetEnumerator$1();
        return Result;
      };
      this.Create$1 = function (ADictionary) {
        this.FMap = ADictionary.FMap;
        return this;
      };
      this.GetEnumerator$1 = function () {
        var Result = null;
        Result = $mod.TDictionary$G4.TKeyEnumerator.$create("Create$1",[this.FMap.keys()]);
        return Result;
      };
      this.ToArray = function () {
        var Result = [];
        Result = $mod.TEnumerable$G22.ToArray.call(this);
        return Result;
      };
    },"TDictionary<System.String,System.String>.TKeyCollection");
    this.$init = function () {
      $mod.TEnumerable$G27.$init.call(this);
      this.FMap = null;
      this.FComparer = null;
      this.FOnKeyNotify = null;
      this.FOnValueNotify = null;
      this.FKeyCollection = null;
      this.FValueCollection = null;
    };
    this.$final = function () {
      this.FMap = undefined;
      rtl.setIntfP(this,"FComparer",null);
      this.FOnKeyNotify = undefined;
      this.FOnValueNotify = undefined;
      this.FKeyCollection = undefined;
      this.FValueCollection = undefined;
      $mod.TEnumerable$G27.$final.call(this);
    };
    this.GetEffectiveKey = function (Key) {
      var Result = "";
      var it = null;
      var v = null;
      if (!(this.FComparer != null)) return Key;
      it = this.FMap.keys();
      v = it.next();
      while (!v.done) {
        Result = "" + v.value;
        if (this.FComparer.Compare(Result,Key) === 0) return Result;
        v = it.next();
      };
      Result = Key;
      return Result;
    };
    this.GetItem = function (Key) {
      var Result = "";
      var V = undefined;
      V = this.FMap.get(this.GetEffectiveKey(Key));
      if (pas.JS.isUndefined(V)) throw $mod.EDictionary.$create("Create$1",[rtl.getResStr($mod,"SErrDictKeyNotFound")]);
      Result = "" + V;
      return Result;
    };
    this.SetItem = function (Key, Value) {
      var V = undefined;
      V = this.FMap.get(this.GetEffectiveKey(Key));
      if (!pas.JS.isUndefined(V)) this.ValueNotify("" + V,$mod.TCollectionNotification.cnRemoved);
      this.FMap.set(Key,Value);
      this.ValueNotify(Value,$mod.TCollectionNotification.cnAdded);
    };
    this.DoAdd = function (Key, Value) {
      this.FMap.set(this.GetEffectiveKey(Key),Value);
      this.KeyNotify(Key,$mod.TCollectionNotification.cnAdded);
      this.ValueNotify(Value,$mod.TCollectionNotification.cnAdded);
    };
    this.DoRemove = function (Key, Notification) {
      var Result = "";
      var V = undefined;
      var K = "";
      K = this.GetEffectiveKey(Key);
      V = this.FMap.get(K);
      if (!pas.JS.isUndefined(V)) {
        this.FMap.delete(K);
        Result = "" + V;
        this.KeyNotify(Key,Notification);
        this.ValueNotify(Result,Notification);
      };
      return Result;
    };
    this.GetCount = function () {
      var Result = 0;
      Result = this.FMap.size;
      return Result;
    };
    this.CanClearMap = function () {
      var Result = false;
      Result = (this.FOnKeyNotify === null) && (this.FOnValueNotify === null);
      return Result;
    };
    this.DoGetEnumerator = function () {
      var Result = null;
      Result = this.TPairEnumerator.$create("Create$1",[this]);
      return Result;
    };
    this.PairNotify = function (Key, Value, Action) {
      this.KeyNotify(Key,Action);
      this.ValueNotify(Value,Action);
    };
    this.KeyNotify = function (Key, Action) {
      if (this.FOnKeyNotify != null) this.FOnKeyNotify(this,Key,Action);
    };
    this.ValueNotify = function (Value, Action) {
      if (this.FOnValueNotify != null) this.FOnValueNotify(this,Value,Action);
    };
    this.Create$1 = function (ACapacity) {
      this.FMap = new Map();
      if (ACapacity > 0) ;
      return this;
    };
    this.Create$2 = function (Collection) {
      var aPair = $mod.TPair$G6.$new();
      this.Create$1(0);
      var $in = Collection.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          aPair = $in.DoGetCurrent();
          this.Add(aPair.Key,aPair.Value);
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
      return this;
    };
    this.Create$3 = function (AComparer) {
      this.Create$1(0);
      rtl.setIntfP(this,"FComparer",AComparer);
      return this;
    };
    this.Destroy = function () {
      pas.SysUtils.FreeAndNil({p: this, get: function () {
          return this.p.FKeyCollection;
        }, set: function (v) {
          this.p.FKeyCollection = v;
        }});
      pas.SysUtils.FreeAndNil({p: this, get: function () {
          return this.p.FValueCollection;
        }, set: function (v) {
          this.p.FValueCollection = v;
        }});
      this.Clear();
      this.FMap = null;
      pas.System.TObject.Destroy.call(this);
    };
    this.Add = function (Key, Value) {
      if (this.FMap.has(this.GetEffectiveKey(Key))) throw $mod.EDictionary.$create("Create$1",[rtl.getResStr($mod,"SErrDictDuplicateKey")]);
      this.DoAdd(Key,Value);
    };
    this.Remove = function (Key) {
      this.DoRemove(Key,$mod.TCollectionNotification.cnRemoved);
    };
    this.ExtractPair = function (Key) {
      var Result = $mod.TPair$G6.$new();
      var K = "";
      Result.$assign($mod.TPair$G6.$new());
      K = this.GetEffectiveKey(Key);
      if (this.FMap.has(K)) {
        Result.Create(Key,"" + this.FMap.get(K));
        this.FMap.delete(K);
      } else Result.Create(Key,"");
      return Result;
    };
    this.Clear = function () {
      var Iter = null;
      var IVal = null;
      var A = [];
      var K = "";
      var V = "";
      if (this.CanClearMap()) {
        this.FMap.clear()}
       else {
        Iter = this.FMap.entries();
        do {
          IVal = Iter.next();
          if (!IVal.done) {
            A = IVal.value;
            K = "" + A[0];
            V = "" + A[1];
            this.FMap.delete(K);
            this.PairNotify(K,V,$mod.TCollectionNotification.cnRemoved);
          };
        } while (!IVal.done);
      };
    };
    this.TryGetValue = function (Key, Value) {
      var Result = false;
      var K = "";
      K = this.GetEffectiveKey(Key);
      Result = this.FMap.has(K);
      if (Result) Value.set("" + this.FMap.get(K));
      return Result;
    };
    this.AddOrSetValue = function (Key, Value) {
      var k = "";
      k = this.GetEffectiveKey(Key);
      if (!this.FMap.has(k)) {
        this.DoAdd(Key,Value)}
       else this.SetItem(k,Value);
    };
    this.ContainsKey = function (Key) {
      var Result = false;
      Result = this.FMap.has(this.GetEffectiveKey(Key));
      return Result;
    };
    this.ContainsValue = function (Value) {
      var Result = false;
      var It = null;
      var Res = null;
      Result = false;
      It = this.FMap.values();
      do {
        Res = It.next();
        if (!Res.done) Result = Value === ("" + Res.value);
      } while (!(Result || Res.done));
      return Result;
    };
    this.ToArray = function () {
      var Result = [];
      Result = $mod.TEnumerable$G27.ToArray.call(this);
      return Result;
    };
    this.GetKeys = function () {
      var Result = null;
      if (this.FKeyCollection === null) this.FKeyCollection = this.TKeyCollection.$create("Create$1",[this]);
      Result = this.FKeyCollection;
      return Result;
    };
    this.GetValues = function () {
      var Result = null;
      if (this.FValueCollection === null) this.FValueCollection = this.TValueCollection.$create("Create$1",[this]);
      Result = this.FValueCollection;
      return Result;
    };
    this.GetEnumerator$1 = function () {
      var Result = null;
      Result = this.TPairEnumerator.$create("Create$1",[this]);
      return Result;
    };
  },"TDictionary<System.String,System.String>");
  rtl.createClass(this,"TEnumerator$G29",pas.System.TObject,function () {
    this.$initSpec = function () {
    };
    this.MoveNext = function () {
      var Result = false;
      Result = this.DoMoveNext();
      return Result;
    };
  },"TEnumerator<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>");
  rtl.createClass(this,"TEnumerable$G28",pas.System.TObject,function () {
    this.$initSpec = function () {
    };
    this.GetEnumerator = function () {
      var Result = null;
      Result = this.DoGetEnumerator();
      return Result;
    };
    this.ToArray = function () {
      var Result = [];
      var LEnumerator = null;
      Result = [];
      LEnumerator = this.GetEnumerator();
      try {
        while (LEnumerator.MoveNext()) Result.push(LEnumerator.DoGetCurrent());
      } finally {
        LEnumerator = rtl.freeLoc(LEnumerator);
      };
      return Result;
    };
  },"TEnumerable<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>");
  this.$rtti.$MethodVar("TCollectionNotifyEvent<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>",{init: function () {
      this.procsig = rtl.newTIProcSig([["ASender",pas.System.$rtti["TObject"]],["AItem",pas["WEBLib.TMSFNCWebBrowser"].$rtti["TTMSFNCWebBrowserContextMenuItem"],2],["AAction",$mod.$rtti["TCollectionNotification"]]]);
    }, methodkind: 0});
  rtl.createClass(this,"TCustomArrayHelper$G19",pas.System.TObject,function () {
    this.$initSpec = function () {
    };
    this.Sort = function (AValues, AComparer) {
      this.Sort$1(AValues,AComparer,0,rtl.length(AValues.get()));
    };
    this.Sort$1 = function (AValues, AComparer, AIndex, ACount) {
      if (ACount <= 1) return;
      this.QuickSort(AValues,AIndex,(AIndex + ACount) - 1,AComparer);
    };
    this.BinarySearch$2 = function (AValues, AItem, AFoundIndex, AComparer) {
      var Result = false;
      Result = this.BinarySearch$1(AValues,AItem,AFoundIndex,AComparer,0,rtl.length(AValues));
      return Result;
    };
    this.BinarySearch$3 = function (AValues, AItem, ASearchResult, AComparer) {
      var Result = false;
      Result = this.BinarySearch(AValues,AItem,ASearchResult,AComparer,0,rtl.length(AValues));
      return Result;
    };
  },"TCustomArrayHelper<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>");
  rtl.createClass(this,"TArrayHelper$G18",this.TCustomArrayHelper$G19,function () {
    this.$initSpec = function () {
    };
    this.QuickSort = function (AValues, ALeft, ARight, AComparer) {
      var I = 0;
      var J = 0;
      var P = null;
      var Q = null;
      if (((ARight - ALeft) <= 0) || (rtl.length(AValues.get()) === 0)) return;
      do {
        I = ALeft;
        J = ARight;
        P = AValues.get()[ALeft + Math.floor((ARight - ALeft) / 2)];
        do {
          while (AComparer.Compare(AValues.get()[I],P) < 0) I += 1;
          while (AComparer.Compare(AValues.get()[J],P) > 0) J -= 1;
          if (I <= J) {
            if (I !== J) {
              Q = AValues.get()[I];
              AValues.get()[I] = AValues.get()[J];
              AValues.get()[J] = Q;
            };
            I += 1;
            J -= 1;
          };
        } while (!(I > J));
        if ((J - ALeft) < (ARight - I)) {
          if (ALeft < J) this.QuickSort(AValues,ALeft,J,AComparer);
          ALeft = I;
        } else {
          if (I < ARight) this.QuickSort(AValues,I,ARight,AComparer);
          ARight = J;
        };
      } while (!(ALeft >= ARight));
    };
    this.BinarySearch = function (AValues, AItem, ASearchResult, AComparer, AIndex, ACount) {
      var Result = false;
      var imin = 0;
      var imax = 0;
      var imid = 0;
      var ilo = 0;
      imin = AIndex;
      imax = (AIndex + ACount) - 1;
      ilo = imid * imid;
      imid = ilo * imid;
      while (imin < imax) {
        imid = rtl.trunc((imax + imin) / 2);
        ASearchResult.CompareResult = AComparer.Compare(AValues[imid],AItem);
        if (ASearchResult.CompareResult < 0) {
          imin = imid + 1}
         else {
          if (ASearchResult.CompareResult === 0) {
            ASearchResult.FoundIndex = imid;
            ASearchResult.CandidateIndex = imid;
            return true;
          };
          imax = imid;
        };
      };
      Result = imax === imin;
      if (Result) {
        ASearchResult.CompareResult = AComparer.Compare(AValues[imin],AItem);
        ASearchResult.CandidateIndex = imin;
        Result = ASearchResult.CompareResult === 0;
        if (Result) {
          ASearchResult.FoundIndex = imin}
         else ASearchResult.FoundIndex = -1;
      } else {
        ASearchResult.CompareResult = 0;
        ASearchResult.FoundIndex = -1;
        ASearchResult.CandidateIndex = -1;
      };
      return Result;
    };
    this.BinarySearch$1 = function (AValues, AItem, AFoundIndex, AComparer, AIndex, ACount) {
      var Result = false;
      var imin = 0;
      var imax = 0;
      var imid = 0;
      var LCompare = 0;
      imin = AIndex;
      imax = (AIndex + ACount) - 1;
      while (imin < imax) {
        imid = rtl.trunc((imin + imax) / 2);
        LCompare = AComparer.Compare(AValues[imid],AItem);
        if (LCompare < 0) {
          imin = imid + 1}
         else {
          if (LCompare === 0) {
            AFoundIndex.set(imid);
            return true;
          };
          imax = imid;
        };
      };
      LCompare = AComparer.Compare(AValues[imin],AItem);
      Result = (imax === imin) && (LCompare === 0);
      if (Result) {
        AFoundIndex.set(imin)}
       else AFoundIndex.set(-1);
      return Result;
    };
  },"TArrayHelper<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>");
  rtl.createClass(this,"TCustomList$G17",this.TEnumerable$G28,function () {
    this.$initSpec = function () {
      var $r = this.$rtti;
      $mod.$rtti.$DynArray("TCustomList<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>.FItems$a",{eltype: pas["WEBLib.TMSFNCWebBrowser"].$rtti["TTMSFNCWebBrowserContextMenuItem"]});
    };
    this.$init = function () {
      $mod.TEnumerable$G28.$init.call(this);
      this.FOnNotify = null;
      this.FLength = 0;
      this.FItems = [];
    };
    this.$final = function () {
      this.FOnNotify = undefined;
      this.FItems = undefined;
      $mod.TEnumerable$G28.$final.call(this);
    };
    this.GetCapacity = function () {
      var Result = 0;
      Result = rtl.length(this.FItems);
      return Result;
    };
    this.PrepareAddingItem = function () {
      var Result = 0;
      if (this.FLength === rtl.length(this.FItems)) this.FItems.push(null);
      Result = this.FLength;
      this.FLength += 1;
      return Result;
    };
    this.PrepareAddingRange = function (ACount) {
      var Result = 0;
      var l = 0;
      if (ACount < 0) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      if (ACount === 0) return this.FLength - 1;
      for (var $l = rtl.length(this.FItems) + 1, $end = this.FLength + ACount; $l <= $end; $l++) {
        l = $l;
        this.FItems.push(null);
      };
      Result = this.FLength;
      this.FLength += ACount;
      return Result;
    };
    this.Notify = function (AValue, ACollectionNotification) {
      if (this.FOnNotify != null) this.FOnNotify(this,AValue,ACollectionNotification);
    };
    this.DoRemove = function (AIndex, ACollectionNotification) {
      var Result = null;
      if ((AIndex < 0) || (AIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      Result = this.FItems[AIndex];
      this.FLength -= 1;
      this.FItems[AIndex] = null;
      this.FItems.splice(AIndex,1);
      this.Notify(Result,ACollectionNotification);
      return Result;
    };
    this.GetCount = function () {
      var Result = 0;
      Result = this.FLength;
      return Result;
    };
  },"TCustomList<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>");
  rtl.createClass(this,"TCustomListEnumerator$G15",this.TEnumerator$G29,function () {
    this.$initSpec = function () {
    };
    this.$init = function () {
      $mod.TEnumerator$G29.$init.call(this);
      this.FList = null;
      this.FIndex = 0;
    };
    this.$final = function () {
      this.FList = undefined;
      $mod.TEnumerator$G29.$final.call(this);
    };
    this.DoMoveNext = function () {
      var Result = false;
      this.FIndex += 1;
      Result = (this.FList.FLength > 0) && (this.FIndex < this.FList.FLength);
      return Result;
    };
    this.DoGetCurrent = function () {
      var Result = null;
      Result = this.GetCurrent();
      return Result;
    };
    this.GetCurrent = function () {
      var Result = null;
      Result = this.FList.FItems[this.FIndex];
      return Result;
    };
    this.Create$1 = function (AList) {
      pas.System.TObject.Create.call(this);
      this.FIndex = -1;
      this.FList = AList;
      return this;
    };
  },"TCustomListEnumerator<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>");
  rtl.createClass(this,"TList$G10",this.TCustomList$G17,function () {
    this.$initSpec = function () {
      rtl.createClass(this,"TEnumerator",$mod.TCustomListEnumerator$G15,function () {
      },"TList<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>.TEnumerator");
    };
    this.$init = function () {
      $mod.TCustomList$G17.$init.call(this);
      this.FComparer = null;
    };
    this.$final = function () {
      rtl.setIntfP(this,"FComparer",null);
      $mod.TCustomList$G17.$final.call(this);
    };
    this.SameValue = function (Left, Right) {
      var Result = false;
      if (this.FComparer != null) {
        Result = this.FComparer.Compare(Left,Right) === 0}
       else Result = Left === Right;
      return Result;
    };
    this.SetCapacity = function (AValue) {
      if (AValue < this.FLength) this.SetCount(AValue);
      this.FItems = rtl.arraySetLength(this.FItems,null,AValue);
    };
    this.SetCount = function (AValue) {
      if (AValue < 0) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      if (AValue > this.GetCapacity()) {
        this.SetCapacity(AValue)}
       else if (AValue < this.FLength) this.DeleteRange(AValue,this.FLength - AValue);
      this.FLength = AValue;
    };
    this.InitializeList = function () {
    };
    this.InternalInsert = function (AIndex, AValue) {
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      this.FItems.splice(AIndex,0,AValue);
      this.FLength += 1;
      this.FItems[AIndex] = AValue;
      this.Notify(AValue,$mod.TCollectionNotification.cnAdded);
    };
    this.DoGetEnumerator = function () {
      var Result = null;
      Result = this.GetEnumerator$1();
      return Result;
    };
    this.GetItem = function (AIndex) {
      var Result = null;
      if ((AIndex < 0) || (AIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      Result = this.FItems[AIndex];
      return Result;
    };
    this.SetItem = function (AIndex, AValue) {
      if ((AIndex < 0) || (AIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      this.Notify(this.FItems[AIndex],$mod.TCollectionNotification.cnRemoved);
      this.FItems[AIndex] = AValue;
      this.Notify(AValue,$mod.TCollectionNotification.cnAdded);
    };
    this.GetEnumerator$1 = function () {
      var Result = null;
      Result = this.TEnumerator.$create("Create$1",[this]);
      return Result;
    };
    this.Create$1 = function () {
      this.InitializeList();
      return this;
    };
    this.Create$2 = function (AComparer) {
      this.InitializeList();
      rtl.setIntfP(this,"FComparer",AComparer);
      return this;
    };
    this.Create$3 = function (ACollection) {
      var LItem = null;
      this.Create$1();
      var $in = ACollection.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LItem = $in.DoGetCurrent();
          this.Add(LItem);
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
      return this;
    };
    this.Destroy = function () {
      this.SetCapacity(0);
    };
    this.Add = function (AValue) {
      var Result = 0;
      Result = this.PrepareAddingItem();
      this.FItems[Result] = AValue;
      this.Notify(AValue,$mod.TCollectionNotification.cnAdded);
      return Result;
    };
    this.AddRange = function (AValues) {
      this.InsertRange(this.FLength,AValues);
    };
    this.AddRange$1 = function (AEnumerable) {
      var LValue = null;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.GetCurrent();
          this.Add(LValue);
        }
      } finally {
        rtl._Release($in)
      };
    };
    this.AddRange$2 = function (AEnumerable) {
      var LValue = null;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.DoGetCurrent();
          this.Add(LValue);
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
    };
    this.Insert = function (AIndex, AValue) {
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      this.InternalInsert(AIndex,AValue);
    };
    this.InsertRange = function (AIndex, AValues) {
      var LLength = 0;
      var i = 0;
      var LValue = null;
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      LLength = rtl.length(AValues);
      if (LLength === 0) return;
      if (AIndex !== this.PrepareAddingRange(LLength)) {
        for (var $l = AIndex, $end = this.FLength - LLength - 1; $l <= $end; $l++) {
          i = $l;
          this.FItems[i + LLength] = this.FItems[i];
        };
        for (var $l1 = 0, $end1 = LLength - 1; $l1 <= $end1; $l1++) {
          i = $l1;
          this.FItems[AIndex + i] = null;
        };
      };
      for (var $l2 = 0, $end2 = LLength - 1; $l2 <= $end2; $l2++) {
        i = $l2;
        LValue = AValues[i];
        this.FItems[i + AIndex] = LValue;
        this.Notify(LValue,$mod.TCollectionNotification.cnAdded);
      };
    };
    this.InsertRange$1 = function (AIndex, AEnumerable) {
      var LValue = null;
      var i = 0;
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      i = 0;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.GetCurrent();
          this.InternalInsert(AIndex + i,LValue);
          i += 1;
        }
      } finally {
        rtl._Release($in)
      };
    };
    this.InsertRange$2 = function (AIndex, AEnumerable) {
      var LValue = null;
      var i = 0;
      if ((AIndex < 0) || (AIndex > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      i = 0;
      var $in = AEnumerable.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          LValue = $in.DoGetCurrent();
          this.InternalInsert(AIndex + i,LValue);
          i += 1;
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
    };
    this.Remove = function (AValue) {
      var Result = 0;
      Result = this.IndexOf(AValue);
      if (Result >= 0) this.DoRemove(Result,$mod.TCollectionNotification.cnRemoved);
      return Result;
    };
    this.RemoveItem = function (AValue, Direction) {
      var Result = 0;
      if (Direction === $mod.TDirection.fromEnd) {
        Result = this.LastIndexOf(AValue)}
       else Result = this.IndexOf(AValue);
      if (Result >= 0) this.DoRemove(Result,$mod.TCollectionNotification.cnRemoved);
      return Result;
    };
    this.Delete = function (AIndex) {
      this.DoRemove(AIndex,$mod.TCollectionNotification.cnRemoved);
    };
    this.DeleteRange = function (AIndex, ACount) {
      var LDeleted = [];
      var i = 0;
      if (ACount === 0) return;
      if ((ACount < 0) || (AIndex < 0) || ((AIndex + ACount) > this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      LDeleted = this.FItems.splice(AIndex,this.FLength);
      this.FLength -= ACount;
      for (var $l = 0, $end = rtl.length(LDeleted) - 1; $l <= $end; $l++) {
        i = $l;
        this.Notify(LDeleted[i],$mod.TCollectionNotification.cnRemoved);
      };
    };
    this.ExtractIndex = function (AIndex) {
      var Result = null;
      Result = this.DoRemove(AIndex,$mod.TCollectionNotification.cnExtracted);
      return Result;
    };
    this.Extract = function (AValue) {
      var Result = null;
      var LIndex = 0;
      LIndex = this.IndexOf(AValue);
      if (LIndex < 0) {
        Result = null}
       else Result = this.DoRemove(LIndex,$mod.TCollectionNotification.cnExtracted);
      return Result;
    };
    this.Exchange = function (AIndex1, AIndex2) {
      var LTemp = null;
      LTemp = this.FItems[AIndex1];
      this.FItems[AIndex1] = this.FItems[AIndex2];
      this.FItems[AIndex2] = LTemp;
    };
    this.Move = function (AIndex, ANewIndex) {
      var Arr = null;
      var LTemp = undefined;
      var i = 0;
      if (ANewIndex === AIndex) return;
      if ((ANewIndex < 0) || (ANewIndex >= this.FLength)) throw pas.SysUtils.EArgumentOutOfRangeException.$create("Create$1",[rtl.getResStr(pas["Generics.Strings"],"SArgumentOutOfRange")]);
      Arr = this.FItems;
      LTemp = Arr[AIndex];
      if (AIndex < ANewIndex) {
        for (var $l = AIndex, $end = ANewIndex - 1; $l <= $end; $l++) {
          i = $l;
          Arr[i] = Arr[i + 1];
        }}
       else for (var $l1 = AIndex, $end1 = ANewIndex + 1; $l1 >= $end1; $l1--) {
        i = $l1;
        Arr[i] = Arr[i - 1];
      };
      Arr[ANewIndex] = LTemp;
    };
    this.First = function () {
      var Result = null;
      Result = this.GetItem(0);
      return Result;
    };
    this.Last = function () {
      var Result = null;
      Result = this.GetItem(this.FLength - 1);
      return Result;
    };
    this.Clear = function () {
      this.SetCount(0);
      this.SetCapacity(0);
    };
    this.Contains = function (AValue) {
      var Result = false;
      Result = this.IndexOf(AValue) >= 0;
      return Result;
    };
    this.IndexOf = function (AValue) {
      var Result = 0;
      var i = 0;
      for (var $l = 0, $end = this.FLength - 1; $l <= $end; $l++) {
        i = $l;
        if (this.SameValue(AValue,this.FItems[i])) return i;
      };
      Result = -1;
      return Result;
    };
    this.LastIndexOf = function (AValue) {
      var Result = 0;
      var i = 0;
      for (var $l = this.FLength - 1; $l >= 0; $l--) {
        i = $l;
        if (this.SameValue(AValue,this.FItems[i])) return i;
      };
      Result = -1;
      return Result;
    };
    this.Reverse = function () {
      var a = 0;
      var b = 0;
      var LTemp = null;
      a = 0;
      b = this.FLength - 1;
      while (a < b) {
        LTemp = this.FItems[a];
        this.FItems[a] = this.FItems[b];
        this.FItems[b] = LTemp;
        a += 1;
        b -= 1;
      };
    };
    this.TrimExcess = function () {
      this.SetCapacity(this.FLength);
    };
    this.Sort = function () {
      $mod.TArrayHelper$G18.Sort$1({p: this, get: function () {
          return this.p.FItems;
        }, set: function (v) {
          this.p.FItems = v;
        }},this.FComparer,0,this.FLength);
    };
    this.Sort$1 = function (AComparer) {
      $mod.TArrayHelper$G18.Sort$1({p: this, get: function () {
          return this.p.FItems;
        }, set: function (v) {
          this.p.FItems = v;
        }},AComparer,0,this.FLength);
    };
    this.BinarySearch = function (AItem, AIndex) {
      var Result = false;
      Result = $mod.TArrayHelper$G18.BinarySearch$1(this.FItems,AItem,AIndex,this.FComparer,0,this.FLength);
      return Result;
    };
    this.BinarySearch$1 = function (AItem, AIndex, AComparer) {
      var Result = false;
      Result = $mod.TArrayHelper$G18.BinarySearch$1(this.FItems,AItem,AIndex,AComparer,0,this.FLength);
      return Result;
    };
  },"TList<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>");
  rtl.createClass(this,"TObjectList$G5",this.TList$G10,function () {
    this.$initSpec = function () {
    };
    this.$init = function () {
      $mod.TList$G10.$init.call(this);
      this.FObjectsOwner = false;
    };
    this.Notify = function (aValue, Action) {
      $mod.TCustomList$G17.Notify.call(this,aValue,Action);
      if (this.FObjectsOwner && (Action === $mod.TCollectionNotification.cnRemoved)) aValue = rtl.freeLoc(aValue);
    };
    this.Create$4 = function (aOwnsObjects) {
      $mod.TList$G10.Create$1.call(this);
      this.FObjectsOwner = aOwnsObjects;
      return this;
    };
    this.Create$5 = function (AComparer, aOwnsObjects) {
      $mod.TList$G10.Create$2.call(this,AComparer);
      this.FObjectsOwner = aOwnsObjects;
      return this;
    };
    this.Create$6 = function (aCollection, aOwnsObjects) {
      $mod.TList$G10.Create$3.call(this,aCollection);
      this.FObjectsOwner = aOwnsObjects;
      return this;
    };
  },"TObjectList<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>");
  $mod.$implcode = function () {
    $mod.$resourcestrings = {SErrDictKeyNotFound: {org: "Key value not found"}, SErrDictDuplicateKey: {org: "Duplicate key value"}};
  };
},[]);
//# sourceMappingURL=generics.collections.js.map
