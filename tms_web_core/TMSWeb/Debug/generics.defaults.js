rtl.module("Generics.Defaults",["System"],function () {
  "use strict";
  var $mod = this;
  $mod.$rtti.$Interface("IComparer<System.Longint>");
  $mod.$rtti.$Interface("IComparer<System.String>");
  $mod.$rtti.$Interface("IComparer<System.TObject>");
  $mod.$rtti.$Interface("IEnumerator<System.TObject>");
  $mod.$rtti.$Interface("IEnumerable<System.TObject>");
  $mod.$rtti.$Interface("IEnumerator<System.String>");
  $mod.$rtti.$Interface("IEnumerable<System.String>");
  $mod.$rtti.$Interface("IEnumerator<System.Longint>");
  $mod.$rtti.$Interface("IEnumerable<System.Longint>");
  $mod.$rtti.$Interface("IComparer<System.Double>");
  $mod.$rtti.$Interface("IEnumerator<System.Double>");
  $mod.$rtti.$Interface("IEnumerable<System.Double>");
  $mod.$rtti.$Interface("IComparer<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>");
  $mod.$rtti.$Interface("IEnumerator<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>");
  $mod.$rtti.$Interface("IEnumerable<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>");
  $mod.$rtti.$Interface("IComparer<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  $mod.$rtti.$Interface("IEnumerator<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  $mod.$rtti.$Interface("IEnumerable<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  $mod.$rtti.$Interface("IComparer<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>");
  $mod.$rtti.$Interface("IEnumerator<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>");
  $mod.$rtti.$Interface("IEnumerable<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>");
  $mod.$rtti.$Class("TComparer<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  $mod.$rtti.$Class("TDefaultComparer<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  $mod.$rtti.$Class("TDelegatedComparerEvents<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  $mod.$rtti.$Interface("IComparer<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>");
  $mod.$rtti.$Interface("IEnumerator<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>");
  $mod.$rtti.$Interface("IEnumerable<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>");
  rtl.createInterface(this,"IComparer$G18","{505778ED-F783-4456-9691-32F419CC5E18}",["Compare"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("Compare",1,[["Left",rtl.longint,2],["Right",rtl.longint,2]],rtl.longint);
  },"IComparer<System.Longint>");
  rtl.createInterface(this,"IComparer$G19","{505778ED-F783-4456-9691-32F419CC5E18}",["Compare"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("Compare",1,[["Left",rtl.string,2],["Right",rtl.string,2]],rtl.longint);
  },"IComparer<System.String>");
  rtl.createInterface(this,"IComparer$G20","{505778ED-F783-4456-9691-32F419CC5E18}",["Compare"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("Compare",1,[["Left",pas.System.$rtti["TObject"],2],["Right",pas.System.$rtti["TObject"],2]],rtl.longint);
  },"IComparer<System.TObject>");
  rtl.createInterface(this,"IEnumerator$G5","{8EA8CE58-C397-337B-B088-7563ADDB2494}",["GetCurrent","MoveNext","Reset"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetCurrent",1,[],pas.System.$rtti["TObject"]);
    $r.addMethod("MoveNext",1,[],rtl.boolean);
    $r.addMethod("Reset",0,[]);
    $r.addProperty("Current",1,pas.System.$rtti["TObject"],"GetCurrent","");
  },"IEnumerator<System.TObject>");
  rtl.createInterface(this,"IEnumerable$G4","{E2FFA1CE-C397-3543-95B0-3285A78D1225}",["GetEnumerator"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetEnumerator",1,[],$mod.$rtti["IEnumerator<System.TObject>"]);
  },"IEnumerable<System.TObject>");
  rtl.createInterface(this,"IEnumerator$G6","{742D446C-82CD-3563-961B-59A5E06F9EFD}",["GetCurrent","MoveNext","Reset"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetCurrent",1,[],rtl.string);
    $r.addMethod("MoveNext",1,[],rtl.boolean);
    $r.addMethod("Reset",0,[]);
    $r.addProperty("Current",1,rtl.string,"GetCurrent","");
  },"IEnumerator<System.String>");
  rtl.createInterface(this,"IEnumerable$G5","{A2E8B32C-82CD-3E79-8678-FDE8178D1227}",["GetEnumerator"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetEnumerator",1,[],$mod.$rtti["IEnumerator<System.String>"]);
  },"IEnumerable<System.String>");
  rtl.createInterface(this,"IEnumerator$G7","{BE4D2658-C397-337B-B088-7563ADDB2523}",["GetCurrent","MoveNext","Reset"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetCurrent",1,[],rtl.longint);
    $r.addMethod("MoveNext",1,[],rtl.boolean);
    $r.addMethod("Reset",0,[]);
    $r.addProperty("Current",1,rtl.longint,"GetCurrent","");
  },"IEnumerator<System.Longint>");
  rtl.createInterface(this,"IEnumerable$G6","{12A3F9CE-C397-3543-95B0-3285A78D12B5}",["GetEnumerator"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetEnumerator",1,[],$mod.$rtti["IEnumerator<System.Longint>"]);
  },"IEnumerable<System.Longint>");
  rtl.createInterface(this,"IComparer$G21","{505778ED-F783-4456-9691-32F419CC5E18}",["Compare"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("Compare",1,[["Left",rtl.double,2],["Right",rtl.double,2]],rtl.longint);
  },"IComparer<System.Double>");
  rtl.createInterface(this,"IEnumerator$G8","{FF4B346C-82CD-3563-961B-59A5E06F9D0A}",["GetCurrent","MoveNext","Reset"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetCurrent",1,[],rtl.double);
    $r.addMethod("MoveNext",1,[],rtl.boolean);
    $r.addMethod("Reset",0,[]);
    $r.addProperty("Current",1,rtl.double,"GetCurrent","");
  },"IEnumerator<System.Double>");
  rtl.createInterface(this,"IEnumerable$G7","{2D06A32C-82CD-3E79-8678-FDE8178D1135}",["GetEnumerator"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetEnumerator",1,[],$mod.$rtti["IEnumerator<System.Double>"]);
  },"IEnumerable<System.Double>");
  rtl.createInterface(this,"IComparer$G22","{505778ED-F783-4456-9691-32F419CC5E18}",["Compare"],pas.System.IUnknown,function () {
    this.$initSpec = function () {
      var $r = this.$rtti;
      $r.addMethod("Compare",1,[["Left",pas["WEBLib.TMSFNCPersistence"].$rtti["TTMSFNCObjectReference"],2],["Right",pas["WEBLib.TMSFNCPersistence"].$rtti["TTMSFNCObjectReference"],2]],rtl.longint);
    };
  },"IComparer<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>");
  rtl.createInterface(this,"IEnumerator$G9","{CB4FB947-4FC0-3EE9-9891-10C2A41DEFE5}",["GetCurrent","MoveNext","Reset"],pas.System.IUnknown,function () {
    this.$initSpec = function () {
      var $r = this.$rtti;
      $r.addMethod("GetCurrent",1,[],pas["WEBLib.TMSFNCPersistence"].$rtti["TTMSFNCObjectReference"]);
      $r.addMethod("MoveNext",1,[],rtl.boolean);
      $r.addMethod("Reset",0,[]);
      $r.addProperty("Current",1,pas["WEBLib.TMSFNCPersistence"].$rtti["TTMSFNCObjectReference"],"GetCurrent","");
    };
  },"IEnumerator<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>");
  rtl.createInterface(this,"IEnumerable$G8","{DC1D42A4-DB4C-3D87-B7B7-10D0EACDFDCD}",["GetEnumerator"],pas.System.IUnknown,function () {
    this.$initSpec = function () {
      var $r = this.$rtti;
      $r.addMethod("GetEnumerator",1,[],$mod.$rtti["IEnumerator<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>"]);
    };
  },"IEnumerable<WEBLib.TMSFNCPersistence.TTMSFNCObjectReference>");
  rtl.createInterface(this,"IComparer$G23","{505778ED-F783-4456-9691-32F419CC5E18}",["Compare"],pas.System.IUnknown,function () {
    this.$initSpec = function () {
      var $r = this.$rtti;
      $r.addMethod("Compare",1,[["Left",pas["WEBLib.TMSFNCPersistence"].$rtti["TTMSFNCJSONToClassProperty"],2],["Right",pas["WEBLib.TMSFNCPersistence"].$rtti["TTMSFNCJSONToClassProperty"],2]],rtl.longint);
    };
  },"IComparer<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  rtl.createInterface(this,"IEnumerator$G10","{138FCA5C-B9E0-37F6-AF5B-9FFF0B2C092C}",["GetCurrent","MoveNext","Reset"],pas.System.IUnknown,function () {
    this.$initSpec = function () {
      var $r = this.$rtti;
      $r.addMethod("GetCurrent",1,[],pas["WEBLib.TMSFNCPersistence"].$rtti["TTMSFNCJSONToClassProperty"]);
      $r.addMethod("MoveNext",1,[],rtl.boolean);
      $r.addMethod("Reset",0,[]);
      $r.addProperty("Current",1,pas["WEBLib.TMSFNCPersistence"].$rtti["TTMSFNCJSONToClassProperty"],"GetCurrent","");
    };
  },"IEnumerator<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  rtl.createInterface(this,"IEnumerable$G9","{146E5B59-9457-309F-8A6E-5AFF0B2DEE87}",["GetEnumerator"],pas.System.IUnknown,function () {
    this.$initSpec = function () {
      var $r = this.$rtti;
      $r.addMethod("GetEnumerator",1,[],$mod.$rtti["IEnumerator<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>"]);
    };
  },"IEnumerable<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  rtl.createInterface(this,"IComparer$G24","{505778ED-F783-4456-9691-32F419CC5E18}",["Compare"],pas.System.IUnknown,function () {
    this.$initSpec = function () {
      var $r = this.$rtti;
      $r.addMethod("Compare",1,[["Left",pas["WEBLib.TMSFNCPersistence"].$rtti["TTMSFNCJSONToClassItem"],2],["Right",pas["WEBLib.TMSFNCPersistence"].$rtti["TTMSFNCJSONToClassItem"],2]],rtl.longint);
    };
  },"IComparer<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>");
  rtl.createInterface(this,"IEnumerator$G11","{53D75BB4-08C5-3F79-9891-10C2A41DED26}",["GetCurrent","MoveNext","Reset"],pas.System.IUnknown,function () {
    this.$initSpec = function () {
      var $r = this.$rtti;
      $r.addMethod("GetCurrent",1,[],pas["WEBLib.TMSFNCPersistence"].$rtti["TTMSFNCJSONToClassItem"]);
      $r.addMethod("MoveNext",1,[],rtl.boolean);
      $r.addMethod("Reset",0,[]);
      $r.addProperty("Current",1,pas["WEBLib.TMSFNCPersistence"].$rtti["TTMSFNCJSONToClassItem"],"GetCurrent","");
    };
  },"IEnumerator<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>");
  rtl.createInterface(this,"IEnumerable$G10","{64A4E411-9450-3E17-B7B7-10D0EACDFB0E}",["GetEnumerator"],pas.System.IUnknown,function () {
    this.$initSpec = function () {
      var $r = this.$rtti;
      $r.addMethod("GetEnumerator",1,[],$mod.$rtti["IEnumerator<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>"]);
    };
  },"IEnumerable<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassItem>");
  this.$rtti.$RefToProcVar("TOnComparison<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>",{init: function () {
      this.procsig = rtl.newTIProcSig([["Left",pas["WEBLib.TMSFNCPersistence"].$rtti["TTMSFNCJSONToClassProperty"],2],["Right",pas["WEBLib.TMSFNCPersistence"].$rtti["TTMSFNCJSONToClassProperty"],2]],rtl.longint);
    }});
  rtl.createClass(this,"TComparer$G3",pas.System.TInterfacedObject,function () {
    this.$initSpec = function () {
      this.DefaultComparer = null;
    };
    this.Default = function () {
      var Result = null;
      var $ok = false;
      try {
        if ($mod.TComparer$G3.DefaultComparer === null) $mod.TComparer$G3.DefaultComparer = $mod.TDefaultComparer$G3.$create("Create");
        Result = rtl.setIntfL(Result,rtl.queryIntfT($mod.TComparer$G3.DefaultComparer,$mod.IComparer$G23),true);
        $ok = true;
      } finally {
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.Construct = function (AComparison) {
      var Result = null;
      var $ok = false;
      try {
        Result = rtl.setIntfL(Result,rtl.queryIntfT($mod.TDelegatedComparerEvents$G3.$create("Create$1",[AComparison]),$mod.IComparer$G23),true);
        $ok = true;
      } finally {
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    rtl.addIntf(this,$mod.IComparer$G23);
    rtl.addIntf(this,pas.System.IUnknown);
  },"TComparer<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  rtl.createClass(this,"TDefaultComparer$G3",this.TComparer$G3,function () {
    this.$initSpec = function () {
    };
    this.Compare = function (ALeft, ARight) {
      var Result = 0;
      if (ALeft < ARight) return -1;
      if (ALeft > ARight) return 1;
      Result = 0;
      if (ALeft === ARight) return Result;
      return Result;
    };
    rtl.addIntf(this,$mod.IComparer$G23);
    rtl.addIntf(this,pas.System.IUnknown);
  },"TDefaultComparer<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  rtl.createClass(this,"TDelegatedComparerEvents$G3",this.TComparer$G3,function () {
    this.$initSpec = function () {
    };
    this.$init = function () {
      $mod.TComparer$G3.$init.call(this);
      this.FComparison = null;
    };
    this.$final = function () {
      this.FComparison = undefined;
      $mod.TComparer$G3.$final.call(this);
    };
    this.Compare = function (ALeft, ARight) {
      var Result = 0;
      Result = this.FComparison(ALeft,ARight);
      return Result;
    };
    this.Create$1 = function (AComparison) {
      pas.System.TObject.Create.call(this);
      this.FComparison = AComparison;
      return this;
    };
    rtl.addIntf(this,$mod.IComparer$G23);
    rtl.addIntf(this,pas.System.IUnknown);
  },"TDelegatedComparerEvents<WEBLib.TMSFNCPersistence.TTMSFNCJSONToClassProperty>");
  rtl.createInterface(this,"IComparer$G25","{505778ED-F783-4456-9691-32F419CC5E18}",["Compare"],pas.System.IUnknown,function () {
    this.$initSpec = function () {
      var $r = this.$rtti;
      $r.addMethod("Compare",1,[["Left",pas["WEBLib.TMSFNCWebBrowser"].$rtti["TTMSFNCWebBrowserContextMenuItem"],2],["Right",pas["WEBLib.TMSFNCWebBrowser"].$rtti["TTMSFNCWebBrowserContextMenuItem"],2]],rtl.longint);
    };
  },"IComparer<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>");
  rtl.createInterface(this,"IEnumerator$G12","{05AFA00A-6F0C-3632-9645-DBC36EC72D79}",["GetCurrent","MoveNext","Reset"],pas.System.IUnknown,function () {
    this.$initSpec = function () {
      var $r = this.$rtti;
      $r.addMethod("GetCurrent",1,[],pas["WEBLib.TMSFNCWebBrowser"].$rtti["TTMSFNCWebBrowserContextMenuItem"]);
      $r.addMethod("MoveNext",1,[],rtl.boolean);
      $r.addMethod("Reset",0,[]);
      $r.addProperty("Current",1,pas["WEBLib.TMSFNCWebBrowser"].$rtti["TTMSFNCWebBrowserContextMenuItem"],"GetCurrent","");
    };
  },"IEnumerator<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>");
  rtl.createInterface(this,"IEnumerable$G11","{0621CD8B-DC54-349E-8253-3018E4A4AD79}",["GetEnumerator"],pas.System.IUnknown,function () {
    this.$initSpec = function () {
      var $r = this.$rtti;
      $r.addMethod("GetEnumerator",1,[],$mod.$rtti["IEnumerator<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>"]);
    };
  },"IEnumerable<WEBLib.TMSFNCWebBrowser.TTMSFNCWebBrowserContextMenuItem>");
});
//# sourceMappingURL=generics.defaults.js.map
