rtl.module("WEBLib.TMSFNCPersistence",["System","Generics.Collections","Classes","TypInfo","Variants","SysUtils","WEBLib.TMSFNCTypes","WEBLib.TMSFNCJSONReader","WEBLib.TMSFNCJSONWriter","WEBLib.JSON"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  rtl.createInterface(this,"ITMSFNCPersistence","{363F04AF-B8A7-4C47-A2D6-8ED9C44CEFF6}",["SaveSettingsToFile","LoadSettingsFromFile","SaveSettingsToStream","LoadSettingsFromStream","CanSaveProperty","CanLoadProperty"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("SaveSettingsToFile",0,[["AFileName",rtl.string],["AAppearanceOnly",rtl.boolean]]);
    $r.addMethod("LoadSettingsFromFile",0,[["AFileName",rtl.string]]);
    $r.addMethod("SaveSettingsToStream",0,[["AStream",pas.Classes.$rtti["TStream"]],["AAppearanceOnly",rtl.boolean]]);
    $r.addMethod("LoadSettingsFromStream",0,[["AStream",pas.Classes.$rtti["TStream"]]]);
    $r.addMethod("CanSaveProperty",1,[["AObject",pas.System.$rtti["TObject"]],["APropertyName",rtl.string],["APropertyType",pas.System.$rtti["TTypeKind"]]],rtl.boolean);
    $r.addMethod("CanLoadProperty",1,[["AObject",pas.System.$rtti["TObject"]],["APropertyName",rtl.string],["APropertyType",pas.System.$rtti["TTypeKind"]]],rtl.boolean);
  });
  rtl.createInterface(this,"ITMSFNCBaseListIO","{FAB1D21E-D798-4CE0-B17B-9D75E4456AB4}",["GetItemClass"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetItemClass",1,[],pas.System.$rtti["TClass"]);
  });
  rtl.createInterface(this,"ITMSFNCBasePersistenceIO","{91DEAFC3-8932-45F4-A3ED-5AAA0C0E9250}",["CreateObject"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("CreateObject",1,[["AClassName",rtl.string,2],["ABaseClass",pas.System.$rtti["TClass"],2]],pas.System.$rtti["TObject"]);
  });
  rtl.createInterface(this,"ITMSFNCBaseCollectionIO","{90FDF257-7362-411D-B7F6-E2BEE2265016}",["AddItem"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("AddItem",1,[["AObject",pas.System.$rtti["TObject"],2]],pas.Classes.$rtti["TCollectionItem"]);
  });
  rtl.createInterface(this,"ITMSFNCPersistenceIO","{11B625F8-447A-4AE5-BB88-5ECDEA979AF7}",["NeedsObjectReference","GetObjectReference","FindObject","FixOwners"],this.ITMSFNCBasePersistenceIO,function () {
    var $r = this.$rtti;
    $r.addMethod("NeedsObjectReference",1,[["AClass",pas.System.$rtti["TClass"],2]],rtl.boolean);
    $r.addMethod("GetObjectReference",1,[["AObject",pas.System.$rtti["TObject"],2]],rtl.string);
    $r.addMethod("FindObject",1,[["AReference",rtl.string,2]],pas.System.$rtti["TObject"]);
    $r.addMethod("FixOwners",0,[["AObject",pas.System.$rtti["TObject"],2],["AObjectList",pas.System.$rtti["TObject"],2]]);
  });
  rtl.createClass(this,"ETMSFNCReaderException",pas.SysUtils.Exception,function () {
  });
  rtl.createClass(this,"TTMSFNCObjectDictionary",pas["Generics.Collections"].TDictionary$G3,function () {
  });
  rtl.createClass(this,"TTMSFNCObjectList",pas["Generics.Collections"].TObjectList$G1,function () {
  });
  rtl.createClass(this,"TTMSFNCStringList",pas["Generics.Collections"].TList$G4,function () {
  });
  rtl.createClass(this,"TTMSFNCIntegerList",pas["Generics.Collections"].TList$G5,function () {
  });
  rtl.createClass(this,"TTMSFNCDoubleList",pas["Generics.Collections"].TList$G6,function () {
  });
  this.$rtti.$DynArray("TTMSFNCObjectArray",{eltype: pas.System.$rtti["TObject"]});
  this.$rtti.$MethodVar("TTMSFNCWriterCustomWritePropertyEvent",{procsig: rtl.newTIProcSig([["AObject",pas.System.$rtti["TObject"]],["APropertyName",rtl.string],["APropertyKind",pas.System.$rtti["TTypeKind"]],["AWriter",pas["WEBLib.TMSFNCJSONWriter"].$rtti["TTMSFNCJSONWriter"]],["ACanWrite",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCWriterCustomIsAssignablePropertyEvent",{procsig: rtl.newTIProcSig([["AObject",pas.System.$rtti["TObject"]],["APropertyName",rtl.string],["AIsAssignable",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$DynArray("TTMSFNCExcludePropertyListArray",{eltype: rtl.string});
  rtl.createClass(this,"TTMSFNCWriter",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FWriter = null;
      this.FIOReference = null;
      this.FOnCustomWriteProperty = null;
      this.FRootObject = null;
      this.FExcludeProperties = [];
      this.FOnCustomIsAssignableProperty = null;
    };
    this.$final = function () {
      this.FWriter = undefined;
      this.FIOReference = undefined;
      this.FOnCustomWriteProperty = undefined;
      this.FRootObject = undefined;
      this.FExcludeProperties = undefined;
      this.FOnCustomIsAssignableProperty = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.SetRootObject = function (Value) {
      this.FRootObject = Value;
      $mod.TTMSFNCPersistence.FRootObject = this.FRootObject;
    };
    this.SetExcludeProperties = function (Value) {
      this.FExcludeProperties = rtl.arrayRef(Value);
      $mod.TTMSFNCPersistence.FExcludeProperties = rtl.arrayRef(this.FExcludeProperties);
    };
    this.SetIOReference = function (Value) {
      this.FIOReference = Value;
      $mod.TTMSFNCPersistence.FIOReference = this.FIOReference;
    };
    this.WritePropInfoValue = function (AInstance, APropInfo) {
      var cn = "";
      var pName = "";
      var en = "";
      var k = 0;
      var p = null;
      var o = null;
      var v = pas.System.TMethod.$new();
      var c = 0;
      if ($mod.TTMSFNCPersistence.IsWriteOnly(APropInfo)) {
        this.FWriter.WriteNull();
        return;
      };
      o = AInstance;
      p = APropInfo;
      k = $mod.TTMSFNCPersistence.GetPropInfoType(p);
      pName = $mod.TTMSFNCPersistence.GetPropInfoName(p);
      var $tmp = k;
      if ($tmp === pas.System.TTypeKind.tkInteger) {
        cn = $mod.TTMSFNCPersistence.GetPropInfoTypeName(p);
        if ((cn === "TAlphaColor") || (cn === "TColor") || (cn === "TGraphicsColor")) {
          if (pas.TypInfo.GetOrdProp$1(o,p) === -1) {
            this.FWriter.WriteString("gcNull")}
           else {
            c = pas.TypInfo.GetOrdProp$1(o,p);
            this.FWriter.WriteString($impl.ColorToHTMLEx(c));
          };
        } else this.FWriter.WriteInteger(pas.TypInfo.GetOrdProp$1(o,p));
      } else if (($tmp === pas.System.TTypeKind.tkChar) || ($tmp === pas.System.TTypeKind.tkString)) {
        this.FWriter.WriteString(pas.TypInfo.GetStrProp$1(o,p))}
       else if ($tmp === pas.System.TTypeKind.tkEnumeration) {
        if ($mod.TTMSFNCPersistence.GetPropInfoDataTypeInfo(p) === rtl.boolean) {
          this.FWriter.WriteBoolean(pas.TypInfo.GetOrdProp$1(o,p) != 0)}
         else this.FWriter.WriteInteger(pas.TypInfo.GetOrdProp$1(o,p))}
       else if ($tmp === pas.System.TTypeKind.tkBool) {
        this.FWriter.WriteBoolean(pas.TypInfo.GetBoolProp$1(o,p))}
       else if ($tmp === pas.System.TTypeKind.tkDouble) {
        this.FWriter.WriteDouble(pas.TypInfo.GetFloatProp$1(o,p))}
       else if ($tmp === pas.System.TTypeKind.tkSet) {
        this.FWriter.WriteInteger(pas.TypInfo.GetOrdProp$1(o,p))}
       else if ($tmp === pas.System.TTypeKind.tkMethod) {
        v.$assign(pas.TypInfo.GetMethodProp(o,p));
        if (v.Code === null) {
          this.FWriter.WriteNull()}
         else {
          if ($mod.TTMSFNCPersistence.FRootObject != null) {
            this.FWriter.WriteString($mod.TTMSFNCPersistence.FRootObject.$class.MethodName(v.Code))}
           else this.FWriter.WriteNull();
        };
      } else {
        en = $mod.TTMSFNCPersistence.GetEnumName(pas.System.$rtti["TTypeKind"],k);
        this.FWriter.WriteNull();
      };
      if (pas["WEBLib.Graphics"].TFont.isPrototypeOf(o) && (pName === "Size")) {
        this.FWriter.WriteName("IsFMX");
        this.FWriter.WriteBoolean(false);
      };
    };
    this.WriteProperties = function (AObject) {
      var ci = null;
      var a = [];
      var I = 0;
      if (AObject != null) {
        ci = AObject.$rtti;
        try {
          a = pas.TypInfo.GetPropList(ci,pas.System.tkAny,true);
          for (var $l = 0, $end = rtl.length(a) - 1; $l <= $end; $l++) {
            I = $l;
            this.WriteProperty(AObject,a[I]);
          };
        } finally {
        };
      };
    };
    this.WriteProperty = function (AObject, AProp) {
      var pName = "";
      var k = 0;
      var b = false;
      var a = false;
      var ap = false;
      var p = null;
      var o = null;
      try {
        if (!(AProp != null)) return;
        pName = $mod.TTMSFNCPersistence.GetPropInfoName(AProp);
        k = $mod.TTMSFNCPersistence.GetPropInfoType(AProp);
        b = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.IndexOfTextInArray(pName,$mod.TTMSFNCPersistence.FExcludeProperties) === -1;
        if (pas.SysUtils.Supports$3(AObject,$mod.ITMSFNCPersistence.$guid,{get: function () {
            return p;
          }, set: function (v) {
            p = v;
          }})) b = p.CanSaveProperty(AObject,pName,k);
        if (b) {
          a = true;
          if (this.FOnCustomWriteProperty != null) this.FOnCustomWriteProperty(AObject,pName,k,this.FWriter,{get: function () {
              return a;
            }, set: function (v) {
              a = v;
            }});
          if (a) {
            this.FWriter.WriteName(pName);
            if (k in rtl.createSet(pas.System.TTypeKind.tkClass)) {
              o = pas.TypInfo.GetObjectProp(AObject,pName);
              ap = $mod.TTMSFNCPersistence.IsAssignableProperty(AObject,AProp);
              if (this.FOnCustomIsAssignableProperty != null) this.FOnCustomIsAssignableProperty(AObject,pName,{get: function () {
                  return ap;
                }, set: function (v) {
                  ap = v;
                }});
              if (ap) {
                if (pas.Classes.TComponent.isPrototypeOf(o)) {
                  this.FWriter.WriteString(rtl.as(o,pas.Classes.TComponent).FName)}
                 else this.FWriter.WriteString("");
              } else this.WriteObject(o);
            } else this.WritePropInfoValue(AObject,AProp);
          };
        };
      } finally {
        rtl._Release(p);
      };
    };
    this.WriteGenericObjectList = function (AList) {
      var I = 0;
      this.FWriter.WriteBeginArray();
      for (var $l = 0, $end = AList.FLength - 1; $l <= $end; $l++) {
        I = $l;
        this.WriteSingleObject(AList.GetItem(I));
      };
      this.FWriter.WriteEndArray();
    };
    this.WriteGenericStringList = function (AList) {
      var I = 0;
      this.FWriter.WriteBeginArray();
      for (var $l = 0, $end = AList.FLength - 1; $l <= $end; $l++) {
        I = $l;
        this.FWriter.WriteString(AList.GetItem(I));
      };
      this.FWriter.WriteEndArray();
    };
    this.WriteGenericIntegerList = function (AList) {
      var I = 0;
      this.FWriter.WriteBeginArray();
      for (var $l = 0, $end = AList.FLength - 1; $l <= $end; $l++) {
        I = $l;
        this.FWriter.WriteInteger(AList.GetItem(I));
      };
      this.FWriter.WriteEndArray();
    };
    this.WriteGenericDoubleList = function (AList) {
      var I = 0;
      this.FWriter.WriteBeginArray();
      for (var $l = 0, $end = AList.FLength - 1; $l <= $end; $l++) {
        I = $l;
        this.FWriter.WriteDouble(AList.GetItem(I));
      };
      this.FWriter.WriteEndArray();
    };
    this.WriteStrings = function (AList) {
      var I = 0;
      this.FWriter.WriteBeginArray();
      for (var $l = 0, $end = AList.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        this.FWriter.WriteString(AList.Get(I));
      };
      this.FWriter.WriteEndArray();
    };
    this.WriteGenericDictionary = function (ADictionary) {
      var key = "";
      this.FWriter.WriteBeginArray();
      var $in = ADictionary.GetKeys().GetEnumerator$1();
      try {
        while ($in.MoveNext$1()) {
          key = $in.GetCurrent();
          this.FWriter.WriteBeginObject();
          this.FWriter.WriteName(key);
          this.WriteSingleObject(ADictionary.GetItem(key));
          this.FWriter.WriteEndObject();
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
      this.FWriter.WriteEndArray();
    };
    this.WriteCollection = function (ACollection) {
      var I = 0;
      this.FWriter.WriteBeginArray();
      for (var $l = 0, $end = ACollection.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        this.WriteSingleObject(ACollection.GetItem(I));
      };
      this.FWriter.WriteEndArray();
    };
    this.WriteList = function (AList) {
      var I = 0;
      this.FWriter.WriteBeginArray();
      for (var $l = 0, $end = AList.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        this.WriteSingleObject(rtl.getObject(AList.Get(I)));
      };
      this.FWriter.WriteEndArray();
    };
    this.WriteBitmap = function (ABitmap) {
      if (pas["WEBLib.TMSFNCTypes"].IsBitmapEmpty(ABitmap)) {
        this.FWriter.WriteString("");
        return;
      };
      this.FWriter.WriteString(ABitmap.GetData());
    };
    this.WriteSingleObject = function (AObject) {
      this.FWriter.WriteBeginObject();
      if ($mod.TTMSFNCPersistence.ClassTypeVariable !== "") {
        this.FWriter.WriteName($mod.TTMSFNCPersistence.ClassTypeVariable);
        this.FWriter.WriteString(AObject.$classname);
      };
      this.WriteProperties(AObject);
      this.FWriter.WriteEndObject();
    };
    this.WriteObject = function (AObject) {
      var b = null;
      try {
        if (AObject === null) {
          this.FWriter.WriteNull()}
         else {
          if ($mod.TTMSFNCPersistence.IsGenericList(AObject.$class.ClassType(),"String")) {
            this.WriteGenericStringList(AObject)}
           else if ($mod.TTMSFNCPersistence.IsGenericList(AObject.$class.ClassType(),"Integer")) {
            this.WriteGenericIntegerList(AObject)}
           else if ($mod.TTMSFNCPersistence.IsGenericList(AObject.$class.ClassType(),"Double")) {
            this.WriteGenericDoubleList(AObject)}
           else if ($mod.TTMSFNCPersistence.IsGenericList(AObject.$class.ClassType(),"")) {
            this.WriteGenericObjectList(AObject)}
           else if ($mod.TTMSFNCPersistence.IsGenericDictionary(AObject.$class.ClassType())) {
            this.WriteGenericDictionary(AObject)}
           else if ($mod.TTMSFNCPersistence.IsList(AObject.$class.ClassType())) {
            this.WriteList(AObject)}
           else if ($mod.TTMSFNCPersistence.IsCollection(AObject.$class.ClassType())) {
            this.WriteCollection(AObject)}
           else if ($mod.TTMSFNCPersistence.IsBitmap(AObject.$class.ClassType())) {
            this.WriteBitmap(AObject)}
           else if ($mod.TTMSFNCPersistence.IsDescendingClass(AObject.$class.ClassType(),["TStrings"])) {
            this.WriteStrings(AObject)}
           else {
            if ((this.FIOReference != null) && pas.SysUtils.Supports$3(this.FIOReference,$mod.ITMSFNCPersistenceIO.$guid,{get: function () {
                return b;
              }, set: function (v) {
                b = v;
              }})) {
              if (b.NeedsObjectReference(AObject.$class.ClassType())) {
                this.FWriter.WriteString(b.GetObjectReference(AObject))}
               else this.WriteSingleObject(AObject);
            } else this.WriteSingleObject(AObject);
          };
        };
      } finally {
        rtl._Release(b);
      };
    };
    this.Create$1 = function (AStream) {
      this.FWriter = pas["WEBLib.TMSFNCJSONWriter"].TTMSFNCJSONWriter.$create("Create$1",[AStream]);
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FWriter");
      pas.System.TObject.Destroy.call(this);
    };
    this.Write = function (AObject) {
      this.WriteObject(AObject);
    };
    this.WriteArray = function (AName, AArray) {
      var I = 0;
      this.FWriter.WriteBeginObject();
      this.FWriter.WriteName(AName);
      this.FWriter.WriteBeginArray();
      for (var $l = 0, $end = rtl.length(AArray) - 1; $l <= $end; $l++) {
        I = $l;
        this.WriteSingleObject(AArray[I]);
      };
      this.FWriter.WriteEndArray();
      this.FWriter.WriteEndObject();
    };
  });
  this.$rtti.$MethodVar("TTMSFNCReaderCustomReadPropertyEvent",{procsig: rtl.newTIProcSig([["AObject",pas.System.$rtti["TObject"]],["APropertyName",rtl.string],["APropertyKind",pas.System.$rtti["TTypeKind"]],["AReader",pas["WEBLib.TMSFNCJSONReader"].$rtti["TTMSFNCJSONReader"]],["ACanRead",rtl.boolean,1]]), methodkind: 0});
  rtl.createClass(this,"TTMSFNCObjectReference",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.Instance = null;
      this.Prop = null;
      this.Id = "";
    };
    this.$final = function () {
      this.Instance = undefined;
      this.Prop = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.Create$1 = function (AInstance, AProp, AId) {
      this.Instance = AInstance;
      this.Prop = AProp;
      this.Id = AId;
      return this;
    };
  });
  rtl.createClass(this,"TTMSFNCReader",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FReferences = null;
      this.FReader = null;
      this.FIOReference = null;
      this.FOnCustomReadProperty = null;
      this.FRootObject = null;
      this.FExcludeProperties = [];
      this.FOnCustomIsAssignableProperty = null;
    };
    this.$final = function () {
      this.FReferences = undefined;
      this.FReader = undefined;
      this.FIOReference = undefined;
      this.FOnCustomReadProperty = undefined;
      this.FRootObject = undefined;
      this.FExcludeProperties = undefined;
      this.FOnCustomIsAssignableProperty = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.ReadSingleObject = function (ABaseClass) {
      var Result = null;
      var cn = "";
      var b = null;
      var p = null;
      try {
        this.FReader.ReadBeginObject();
        if ($mod.TTMSFNCPersistence.ClassTypeVariable !== "") {
          if (!this.FReader.HasNext() || (this.FReader.ReadName() !== $mod.TTMSFNCPersistence.ClassTypeVariable)) throw $mod.ETMSFNCReaderException.$create("Create$1",['"' + $mod.TTMSFNCPersistence.ClassTypeVariable + '" property not found in Object descriptor.']);
          cn = this.FReader.ReadString();
        };
        if (cn === "") cn = ABaseClass.$classname;
        Result = null;
        if (this.FIOReference != null) {
          if (pas.SysUtils.Supports$3(this.FIOReference,$mod.ITMSFNCBasePersistenceIO.$guid,{get: function () {
              return b;
            }, set: function (v) {
              b = v;
            }})) {
            Result = b.CreateObject(cn,ABaseClass)}
           else if (pas.SysUtils.Supports$3(this.FIOReference,$mod.ITMSFNCPersistenceIO.$guid,{get: function () {
              return p;
            }, set: function (v) {
              p = v;
            }})) Result = p.CreateObject(cn,ABaseClass);
        };
        if (!(Result != null)) Result = $mod.TTMSFNCPersistence.CreateObject(cn,ABaseClass);
        try {
          this.ReadProperties(Result);
          this.FReader.ReadEndObject();
        } catch ($e) {
          Result = rtl.freeLoc(Result);
          throw $e;
        };
      } finally {
        rtl._Release(b);
        rtl._Release(p);
      };
      return Result;
    };
    this.SetRootObject = function (Value) {
      this.FRootObject = Value;
      $mod.TTMSFNCPersistence.FRootObject = this.FRootObject;
    };
    this.SetExcludeProperties = function (Value) {
      this.FExcludeProperties = rtl.arrayRef(Value);
      $mod.TTMSFNCPersistence.FExcludeProperties = rtl.arrayRef(this.FExcludeProperties);
    };
    this.SetIOReference = function (Value) {
      this.FIOReference = Value;
      $mod.TTMSFNCPersistence.FIOReference = this.FIOReference;
    };
    this.ReadSingleObject$1 = function (AObject) {
      this.FReader.ReadBeginObject();
      if ($mod.TTMSFNCPersistence.ClassTypeVariable !== "") {
        if (!this.FReader.HasNext() || (this.FReader.ReadName() !== $mod.TTMSFNCPersistence.ClassTypeVariable)) throw $mod.ETMSFNCReaderException.$create("Create$1",['"' + $mod.TTMSFNCPersistence.ClassTypeVariable + '" property not found in Object descriptor.']);
        this.FReader.ReadString();
      };
      try {
        this.ReadProperties(AObject);
        this.FReader.ReadEndObject();
      } catch ($e) {
        throw $e;
      };
    };
    this.ReadProperties = function (AObject) {
      var Prop = null;
      while (this.FReader.HasNext()) {
        if (!this.FReader.IsNull()) {
          Prop = null;
          if (AObject != null) Prop = pas.TypInfo.GetPropInfo$2(AObject,this.FReader.ReadName());
          if (Prop != null) {
            this.ReadProperty(AObject,Prop)}
           else this.FReader.SkipValue();
        } else this.FReader.SkipValue();
      };
    };
    this.ReadProperty = function (AObject, AProp) {
      var pName = "";
      var ct = null;
      var b = false;
      var p = null;
      var pio = null;
      var k = 0;
      var a = false;
      var ap = false;
      var o = null;
      var n = "";
      try {
        if (!(AProp != null)) return;
        k = $mod.TTMSFNCPersistence.GetPropInfoType(AProp);
        pName = $mod.TTMSFNCPersistence.GetPropInfoName(AProp);
        b = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.IndexOfTextInArray(pName,$mod.TTMSFNCPersistence.FExcludeProperties) === -1;
        if (pas.SysUtils.Supports$3(AObject,$mod.ITMSFNCPersistence.$guid,{get: function () {
            return p;
          }, set: function (v) {
            p = v;
          }})) b = p.CanLoadProperty(AObject,pName,k);
        if (b) {
          a = true;
          if (this.FOnCustomReadProperty != null) this.FOnCustomReadProperty(AObject,pName,k,this.FReader,{get: function () {
              return a;
            }, set: function (v) {
              a = v;
            }});
          if (a) {
            if (k in rtl.createSet(pas.System.TTypeKind.tkClass)) {
              ct = $mod.TTMSFNCPersistence.GetPropInfoDataTypeInfoClassType(AProp);
              if ($mod.TTMSFNCPersistence.IsGenericList(ct,"String")) {
                this.ReadGenericStringList(pas.TypInfo.GetObjectProp(AObject,pName))}
               else if ($mod.TTMSFNCPersistence.IsGenericList(ct,"Double")) {
                this.ReadGenericDoubleList(pas.TypInfo.GetObjectProp(AObject,pName))}
               else if ($mod.TTMSFNCPersistence.IsGenericList(ct,"Integer")) {
                this.ReadGenericIntegerList(pas.TypInfo.GetObjectProp(AObject,pName))}
               else if ($mod.TTMSFNCPersistence.IsGenericList(ct,"")) {
                this.ReadGenericObjectList(pas.TypInfo.GetObjectProp(AObject,pName))}
               else if ($mod.TTMSFNCPersistence.IsGenericDictionary(ct)) {
                this.ReadGenericDictionary(pas.TypInfo.GetObjectProp(AObject,pName))}
               else if ($mod.TTMSFNCPersistence.IsList(ct)) {
                this.ReadList(pas.TypInfo.GetObjectProp(AObject,pName))}
               else if ($mod.TTMSFNCPersistence.IsCollection(ct)) {
                this.ReadCollection(pas.TypInfo.GetObjectProp(AObject,pName))}
               else if ($mod.TTMSFNCPersistence.IsBitmap(ct)) {
                this.ReadBitmap(pas.TypInfo.GetObjectProp(AObject,pName))}
               else if ($mod.TTMSFNCPersistence.IsDescendingClass(ct,["TStrings"])) {
                this.ReadStrings(pas.TypInfo.GetObjectProp(AObject,pName))}
               else {
                a = false;
                if ((this.FIOReference != null) && pas.SysUtils.Supports$3(this.FIOReference,$mod.ITMSFNCPersistenceIO.$guid,{get: function () {
                    return pio;
                  }, set: function (v) {
                    pio = v;
                  }})) a = pio.NeedsObjectReference(ct);
                if (a) {
                  if (this.FReader.IsNull()) {
                    this.FReader.ReadNull();
                    pas.TypInfo.SetObjectProp(AObject,pName,null);
                  } else this.FReferences.Add($mod.TTMSFNCObjectReference.$create("Create$1",[AObject,AProp,this.FReader.ReadString()]));
                } else {
                  o = pas.TypInfo.GetObjectProp(AObject,pName);
                  ap = $mod.TTMSFNCPersistence.IsAssignableProperty(AObject,AProp);
                  if (this.FOnCustomIsAssignableProperty != null) this.FOnCustomIsAssignableProperty(AObject,pName,{get: function () {
                      return ap;
                    }, set: function (v) {
                      ap = v;
                    }});
                  if (ap) {
                    n = this.FReader.ReadString();
                    if ((this.FRootObject != null) && pas.Classes.TComponent.isPrototypeOf(this.FRootObject)) pas.TypInfo.SetObjectProp(AObject,pName,rtl.as(this.FRootObject,pas.Classes.TComponent).FindComponent(n));
                  } else this.ReadExistingObject(o);
                };
              };
            } else this.ReadPropInfoValue(AObject,AProp);
          };
        } else this.FReader.SkipValue();
      } finally {
        rtl._Release(p);
        rtl._Release(pio);
      };
    };
    this.ReadPropInfoValue = function (AInstance, APropInfo) {
      var pName = "";
      var cn = "";
      var cnv = "";
      var en = "";
      var k = 0;
      var p = null;
      var o = null;
      var i = 0;
      var s = "";
      var b = false;
      var d = 0.0;
      var ii = 0;
      var v = "";
      var m = pas.System.TMethod.$new();
      var bsz = false;
      if ($mod.TTMSFNCPersistence.IsWriteOnly(APropInfo) || this.FReader.IsNull()) {
        this.FReader.ReadNull();
        return;
      };
      o = AInstance;
      p = APropInfo;
      pName = $mod.TTMSFNCPersistence.GetPropInfoName(p);
      k = rtl.rc($mod.TTMSFNCPersistence.GetPropInfoType(p),0,20);
      var $tmp = k;
      if ($tmp === pas.System.TTypeKind.tkInteger) {
        cn = $mod.TTMSFNCPersistence.GetPropInfoTypeName(p);
        if ((cn === "TAlphaColor") || (cn === "TColor") || (cn === "TGraphicsColor")) {
          cnv = this.FReader.ReadString();
          if (!$mod.TTMSFNCPersistence.IsReadOnly(p)) {
            if (cnv === "gcNull") {
              pas.TypInfo.SetOrdProp(o,pName,-1)}
             else {
              pas.TypInfo.SetOrdProp(o,pName,$impl.HTMLToColorEx(cnv));
            };
          };
        } else {
          i = rtl.rc(this.FReader.ReadInteger(),-2147483648,2147483647);
          if (!$mod.TTMSFNCPersistence.IsReadOnly(p)) pas.TypInfo.SetOrdProp$1(o,p,i);
        };
      } else if (($tmp === pas.System.TTypeKind.tkChar) || ($tmp === pas.System.TTypeKind.tkString)) {
        s = this.FReader.ReadString();
        if (!$mod.TTMSFNCPersistence.IsReadOnly(p)) pas.TypInfo.SetStrProp$1(o,p,s);
      } else if ($tmp === pas.System.TTypeKind.tkEnumeration) {
        if ($mod.TTMSFNCPersistence.GetPropInfoDataTypeInfo(p) === rtl.boolean) {
          b = this.FReader.ReadBoolean();
          if (!$mod.TTMSFNCPersistence.IsReadOnly(p)) pas.TypInfo.SetOrdProp$1(o,p,(b ? 1 : 0));
        } else {
          i = rtl.rc(this.FReader.ReadInteger(),-2147483648,2147483647);
          if (!$mod.TTMSFNCPersistence.IsReadOnly(p)) pas.TypInfo.SetOrdProp$1(o,p,i);
        }}
       else if ($tmp === pas.System.TTypeKind.tkBool) {
        b = this.FReader.ReadBoolean();
        if (!$mod.TTMSFNCPersistence.IsReadOnly(p)) {
          pas.TypInfo.SetBoolProp$1(o,p,b);
        };
      } else if ($tmp === pas.System.TTypeKind.tkDouble) {
        d = this.FReader.ReadDouble();
        if (!$mod.TTMSFNCPersistence.IsReadOnly(p)) pas.TypInfo.SetFloatProp$1(o,p,d);
      } else if ($tmp === pas.System.TTypeKind.tkSet) {
        i = rtl.rc(this.FReader.ReadInteger(),-2147483648,2147483647);
        if (!$mod.TTMSFNCPersistence.IsReadOnly(p)) pas.TypInfo.SetOrdProp$1(o,p,i);
      } else if ($tmp === pas.System.TTypeKind.tkMethod) {
        m.Data = null;
        m.Code = null;
        if (this.FReader.IsNull()) {
          this.FReader.ReadNull()}
         else {
          if ($mod.TTMSFNCPersistence.FRootObject != null) {
            v = this.FReader.ReadString();
            m.Code = $mod.TTMSFNCPersistence.FRootObject.$class.MethodAddress(v);
            if (m.Code !== null) m.Data = $mod.TTMSFNCPersistence.FRootObject;
          } else this.FReader.ReadNull();
        };
        pas.TypInfo.SetMethodProp(o,p,m);
      } else {
        en = $mod.TTMSFNCPersistence.GetEnumName(pas.System.$rtti["TTypeKind"],k);
        this.FReader.ReadNull();
      };
      if (pas["WEBLib.Graphics"].TFont.isPrototypeOf(o) && (pName === "Size")) {
        if (this.FReader.HasNext()) {
          s = this.FReader.PeekName();
          if (s === "IsFMX") {
            this.FReader.ReadName();
            bsz = this.FReader.ReadBoolean();
            if (bsz) {
              rtl.as(o,pas["WEBLib.Graphics"].TFont).SetSize(Math.round((rtl.as(o,pas["WEBLib.Graphics"].TFont).FSize / 96) * 72));
            };
          };
        };
      };
    };
    this.ReadExistingObject = function (AObject) {
      if (AObject != null) {
        this.FReader.ReadBeginObject();
        if ($mod.TTMSFNCPersistence.ClassTypeVariable !== "") {
          if (!this.FReader.HasNext() || (this.FReader.ReadName() !== $mod.TTMSFNCPersistence.ClassTypeVariable)) throw $mod.ETMSFNCReaderException.$create("Create$1",['"' + $mod.TTMSFNCPersistence.ClassTypeVariable + '" property not found in Object descriptor.']);
          this.FReader.ReadString();
        };
        this.ReadProperties(AObject);
        this.FReader.ReadEndObject();
      } else this.FReader.ReadNull();
    };
    this.ReadGenericStringList = function (AList) {
      var obj = "";
      AList.Clear();
      this.FReader.ReadBeginArray();
      while (this.FReader.HasNext()) {
        if (!this.FReader.IsNull()) {
          obj = this.FReader.ReadString();
          AList.Add(obj);
        } else this.FReader.SkipValue();
      };
      this.FReader.ReadEndArray();
    };
    this.ReadGenericDoubleList = function (AList) {
      var obj = 0.0;
      AList.Clear();
      this.FReader.ReadBeginArray();
      while (this.FReader.HasNext()) {
        if (!this.FReader.IsNull()) {
          obj = this.FReader.ReadDouble();
          AList.Add(obj);
        } else this.FReader.SkipValue();
      };
      this.FReader.ReadEndArray();
    };
    this.ReadGenericIntegerList = function (AList) {
      var obj = 0;
      AList.Clear();
      this.FReader.ReadBeginArray();
      while (this.FReader.HasNext()) {
        if (!this.FReader.IsNull()) {
          obj = this.FReader.ReadInteger();
          AList.Add(obj);
        } else this.FReader.SkipValue();
      };
      this.FReader.ReadEndArray();
    };
    this.ReadStrings = function (AList) {
      var obj = "";
      AList.Clear();
      this.FReader.ReadBeginArray();
      while (this.FReader.HasNext()) {
        if (!this.FReader.IsNull()) {
          obj = this.FReader.ReadString();
          AList.Add(obj);
        } else this.FReader.SkipValue();
      };
      this.FReader.ReadEndArray();
    };
    this.ReadGenericObjectList = function (AList) {
      var obj = null;
      var b = null;
      var c = null;
      var i = null;
      var cl = false;
      try {
        if (pas.SysUtils.Supports$3(AList,$mod.ITMSFNCBaseListIO.$guid,{get: function () {
            return i;
          }, set: function (v) {
            i = v;
          }})) {
          c = i.GetItemClass()}
         else c = $mod.TTMSFNCPersistence.GetGenericListType(AList.$class.ClassType());
        cl = false;
        this.FReader.ReadBeginArray();
        if (!this.FReader.HasNext()) {
          AList.Clear()}
         else {
          while (this.FReader.HasNext()) {
            if (!this.FReader.IsNull()) {
              obj = this.ReadSingleObject(c);
              if (obj != null) {
                if (!cl) {
                  AList.Clear();
                  cl = true;
                };
                if ((this.FIOReference != null) && pas.SysUtils.Supports$3(this.FIOReference,$mod.ITMSFNCPersistenceIO.$guid,{get: function () {
                    return b;
                  }, set: function (v) {
                    b = v;
                  }})) b.FixOwners(obj,AList);
                AList.Add(obj);
              };
            } else this.FReader.SkipValue();
          };
        };
        this.FReader.ReadEndArray();
      } finally {
        rtl._Release(i);
        rtl._Release(b);
      };
    };
    this.ReadGenericDictionary = function (ADictionary) {
      var obj = null;
      var k = "";
      var c = null;
      var i = null;
      var cl = false;
      try {
        if (pas.SysUtils.Supports$3(ADictionary,$mod.ITMSFNCBaseListIO.$guid,{get: function () {
            return i;
          }, set: function (v) {
            i = v;
          }})) {
          c = i.GetItemClass()}
         else c = $mod.TTMSFNCPersistence.GetGenericDictionaryValueType(ADictionary.$class.ClassType());
        cl = false;
        ADictionary.Clear();
        this.FReader.ReadBeginArray();
        if (!this.FReader.HasNext()) {
          ADictionary.Clear()}
         else {
          while (this.FReader.HasNext()) {
            if (!this.FReader.IsNull()) {
              this.FReader.ReadBeginObject();
              k = this.FReader.ReadName();
              obj = this.ReadSingleObject(c);
              if (obj != null) {
                if (!cl) {
                  ADictionary.Clear();
                  cl = true;
                };
                ADictionary.Add(k,obj);
              };
              this.FReader.ReadEndObject();
            } else this.FReader.SkipValue();
          };
        };
        this.FReader.ReadEndArray();
      } finally {
        rtl._Release(i);
      };
    };
    this.ReadCollection = function (ACollection) {
      var obj = null;
      var c = null;
      var i = null;
      var ii = null;
      var cl = false;
      try {
        if (pas.SysUtils.Supports$3(ACollection,$mod.ITMSFNCBaseListIO.$guid,{get: function () {
            return i;
          }, set: function (v) {
            i = v;
          }})) {
          c = i.GetItemClass()}
         else c = ACollection.FItemClass;
        pas.SysUtils.Supports$3(ACollection,$mod.ITMSFNCBaseCollectionIO.$guid,{get: function () {
            return ii;
          }, set: function (v) {
            ii = v;
          }});
        cl = false;
        this.FReader.ReadBeginArray();
        if (!this.FReader.HasNext()) {
          ACollection.Clear()}
         else {
          while (this.FReader.HasNext()) {
            if (!this.FReader.IsNull()) {
              obj = this.ReadSingleObject(c);
              if (obj != null) {
                if (!cl) {
                  ACollection.Clear();
                  cl = true;
                };
                try {
                  if (pas.Classes.TPersistent.isPrototypeOf(obj)) {
                    if (ii != null) {
                      ii.AddItem(obj).Assign(rtl.as(obj,pas.Classes.TPersistent))}
                     else ACollection.Add().Assign(rtl.as(obj,pas.Classes.TPersistent));
                  };
                } finally {
                  obj = rtl.freeLoc(obj);
                };
              };
            } else this.FReader.SkipValue();
          };
        };
        this.FReader.ReadEndArray();
      } finally {
        rtl._Release(i);
        rtl._Release(ii);
      };
    };
    this.ReadList = function (AList) {
      var obj = null;
      var b = null;
      var c = null;
      var i = null;
      var cl = false;
      try {
        c = pas.System.TObject;
        if (pas.SysUtils.Supports$3(AList,$mod.ITMSFNCBaseListIO.$guid,{get: function () {
            return i;
          }, set: function (v) {
            i = v;
          }})) c = i.GetItemClass();
        cl = false;
        this.FReader.ReadBeginArray();
        if (!this.FReader.HasNext()) {
          AList.Clear()}
         else {
          while (this.FReader.HasNext()) {
            if (!this.FReader.IsNull()) {
              obj = this.ReadSingleObject(c);
              if (obj != null) {
                if (!cl) {
                  AList.Clear();
                  cl = true;
                };
                if ((this.FIOReference != null) && pas.SysUtils.Supports$3(this.FIOReference,$mod.ITMSFNCPersistenceIO.$guid,{get: function () {
                    return b;
                  }, set: function (v) {
                    b = v;
                  }})) b.FixOwners(obj,AList);
                AList.Add(obj);
              };
            } else this.FReader.SkipValue();
          };
        };
        this.FReader.ReadEndArray();
      } finally {
        rtl._Release(i);
        rtl._Release(b);
      };
    };
    this.ReadBitmap = function (ABitmap) {
      var s = "";
      if (this.FReader.IsNull()) return;
      s = this.FReader.ReadString();
      if (s !== "") {
        ABitmap.SetData(s);
      };
    };
    this.ReadObject = function (AObject) {
      if (AObject === null) {
        this.FReader.ReadNull()}
       else {
        if ($mod.TTMSFNCPersistence.IsGenericList(AObject.$class.ClassType(),"String")) {
          this.ReadGenericStringList(AObject)}
         else if ($mod.TTMSFNCPersistence.IsGenericList(AObject.$class.ClassType(),"Double")) {
          this.ReadGenericDoubleList(AObject)}
         else if ($mod.TTMSFNCPersistence.IsGenericList(AObject.$class.ClassType(),"Integer")) {
          this.ReadGenericIntegerList(AObject)}
         else if ($mod.TTMSFNCPersistence.IsGenericList(AObject.$class.ClassType(),"")) {
          this.ReadGenericObjectList(AObject)}
         else if ($mod.TTMSFNCPersistence.IsGenericDictionary(AObject.$class.ClassType())) {
          this.ReadGenericDictionary(AObject)}
         else if ($mod.TTMSFNCPersistence.IsList(AObject.$class.ClassType())) {
          this.ReadList(AObject)}
         else if ($mod.TTMSFNCPersistence.IsCollection(AObject.$class.ClassType())) {
          this.ReadCollection(AObject)}
         else if ($mod.TTMSFNCPersistence.IsBitmap(AObject.$class.ClassType())) {
          this.ReadBitmap(AObject)}
         else if ($mod.TTMSFNCPersistence.IsDescendingClass(AObject.$class.ClassType(),["TStrings"])) {
          this.ReadStrings(AObject)}
         else this.ReadSingleObject$1(AObject);
      };
    };
    this.Create$1 = function (AStream) {
      this.FReader = pas["WEBLib.TMSFNCJSONReader"].TTMSFNCJSONReader.$create("Create$1",[AStream]);
      this.FReferences = pas["Generics.Collections"].TObjectList$G2.$create("Create$4",[true]);
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FReader");
      rtl.free(this,"FReferences");
      pas.System.TObject.Destroy.call(this);
    };
    this.Read = function (AClass) {
      var Result = null;
      Result = this.ReadSingleObject(AClass);
      return Result;
    };
    this.Read$1 = function (AObject) {
      this.ReadObject(AObject);
    };
    this.ReadArray = function (AName) {
      var Result = [];
      var Name = "";
      this.FReader.ReadBeginObject();
      while (this.FReader.HasNext()) {
        if (!this.FReader.IsNull()) {
          Name = this.FReader.ReadName();
          if (Name === AName) {
            this.FReader.ReadBeginArray();
            while (this.FReader.HasNext()) {
              Result = rtl.arraySetLength(Result,null,rtl.length(Result) + 1);
              Result[rtl.length(Result) - 1] = this.ReadSingleObject(pas.System.TObject);
            };
            this.FReader.ReadEndArray();
          } else this.FReader.SkipValue();
        } else this.FReader.SkipValue();
      };
      return Result;
    };
    this.SolveReferences = function () {
      var b = null;
      var r = 0;
      var rf = null;
      var o = null;
      try {
        if ((this.FIOReference != null) && pas.SysUtils.Supports$3(this.FIOReference,$mod.ITMSFNCPersistenceIO.$guid,{get: function () {
            return b;
          }, set: function (v) {
            b = v;
          }})) {
          for (var $l = 0, $end = this.FReferences.FLength - 1; $l <= $end; $l++) {
            r = $l;
            rf = this.FReferences.GetItem(r);
            o = b.FindObject(rf.Id);
            pas.TypInfo.SetObjectProp$1(rf.Instance,rf.Prop,o);
          };
        };
      } finally {
        rtl._Release(b);
      };
    };
  });
  rtl.createClass(this,"TTMSFNCObjectPersistence",pas.System.TObject,function () {
    this.SaveObjectToString = function (AObject) {
      var Result = "";
      var ss = null;
      ss = pas.Classes.TStringStream.$create("Create$3",["",pas.Classes.TEncoding.GetUTF8(),true]);
      try {
        $mod.TTMSFNCPersistence.SaveSettingsToStream(AObject,ss);
        ss.SetPosition(0);
        Result = ss.GetDataString();
      } finally {
        ss = rtl.freeLoc(ss);
      };
      return Result;
    };
    this.LoadObjectFromString = function (AObject, AString) {
      var ms = null;
      ms = pas.Classes.TStringStream.$create("Create$3",[AString,pas.Classes.TEncoding.GetUTF8(),true]);
      try {
        $mod.TTMSFNCPersistence.LoadSettingsFromStream(AObject,ms);
      } finally {
        ms = rtl.freeLoc(ms);
      };
    };
  });
  rtl.createClass(this,"TTMSFNCPersistence",pas.System.TObject,function () {
    this.ClassTypeVariable = "";
    this.IgnoreExceptions = false;
    this.FOnCustomReadProperty = null;
    this.FOnCustomWriteProperty = null;
    this.FRootObject = null;
    this.FExcludeProperties = [];
    this.FIOReference = null;
    this.DoCustomReadProperty = function (AObject, APropertyName, APropertyKind, AReader, ACanRead) {
      rtl.rc(APropertyKind,0,20);
      if (this.FOnCustomReadProperty != null) this.FOnCustomReadProperty(AObject,APropertyName,APropertyKind,AReader,ACanRead);
    };
    this.DoCustomWriteProperty = function (AObject, APropertyName, APropertyKind, AWriter, ACanWrite) {
      rtl.rc(APropertyKind,0,20);
      if (this.FOnCustomWriteProperty != null) this.FOnCustomWriteProperty(AObject,APropertyName,APropertyKind,AWriter,ACanWrite);
    };
    this.SaveSettingsToFile = function (AObject, AFileName) {
      var ms = null;
      ms = pas.Classes.TMemoryStream.$create("Create");
      try {
        this.SaveSettingsToStream(AObject,ms);
        pas["WEBLib.TMSFNCTypes"].TTMSFNCMemoryStream.SaveToFile.call(ms,AFileName);
      } finally {
        ms = rtl.freeLoc(ms);
      };
    };
    this.LoadSettingsFromFile = function (AObject, AFileName) {
      var ms = null;
      ms = pas.Classes.TMemoryStream.$create("Create");
      try {
        this.LoadSettingsFromStream(AObject,ms);
      } finally {
        ms = rtl.freeLoc(ms);
      };
    };
    this.SaveSettingsToStream = function (AObject, AStream) {
      var Writer = null;
      var d = "";
      var t = "";
      Writer = $mod.TTMSFNCWriter.$create("Create$1",[AStream]);
      t = pas.SysUtils.FormatSettings.ThousandSeparator;
      d = pas.SysUtils.FormatSettings.DecimalSeparator;
      try {
        Writer.SetIOReference($mod.TTMSFNCPersistence.FIOReference);
        Writer.SetRootObject($mod.TTMSFNCPersistence.FRootObject);
        Writer.FOnCustomWriteProperty = rtl.createCallback(this,"DoCustomWriteProperty");
        pas.SysUtils.FormatSettings.DecimalSeparator = ".";
        pas.SysUtils.FormatSettings.ThousandSeparator = ",";
        Writer.Write(AObject);
      } finally {
        pas.SysUtils.FormatSettings.DecimalSeparator = d;
        pas.SysUtils.FormatSettings.ThousandSeparator = t;
        Writer = rtl.freeLoc(Writer);
      };
    };
    this.LoadSettingsFromStream = function (AObject, AStream) {
      var Reader = null;
      var d = "";
      var t = "";
      AStream.SetPosition(0);
      Reader = $mod.TTMSFNCReader.$create("Create$1",[AStream]);
      t = pas.SysUtils.FormatSettings.ThousandSeparator;
      d = pas.SysUtils.FormatSettings.DecimalSeparator;
      try {
        Reader.SetIOReference($mod.TTMSFNCPersistence.FIOReference);
        Reader.SetRootObject($mod.TTMSFNCPersistence.FRootObject);
        Reader.FOnCustomReadProperty = rtl.createCallback(this,"DoCustomReadProperty");
        pas.SysUtils.FormatSettings.DecimalSeparator = ".";
        pas.SysUtils.FormatSettings.ThousandSeparator = ",";
        Reader.Read$1(AObject);
      } finally {
        pas.SysUtils.FormatSettings.DecimalSeparator = d;
        pas.SysUtils.FormatSettings.ThousandSeparator = t;
        Reader = rtl.freeLoc(Reader);
      };
    };
    this.GetEnumValues = function (AValues, APropInfo) {
      var p = null;
      var pi = null;
      var ps = null;
      var I = 0;
      var k = 0;
      p = $impl.GetTypeInfoEx(APropInfo);
      if ((p != null) && rtl.isExt(p,rtl.tTypeInfoSet)) p = p.comptype;
      if ((p != null) && rtl.isExt(p,rtl.tTypeInfoInteger)) {
        pi = p;
        for (var $l = pi.minvalue, $end = pi.maxvalue; $l <= $end; $l++) {
          I = $l;
          AValues.Add($mod.TTMSFNCPersistence.GetEnumName(p,I));
        };
      };
    };
    this.CreateObject = function (AClassName, BaseClass) {
      var Result = null;
      var ObjType = null;
      ObjType = pas.Classes.GetClass(AClassName);
      if (ObjType === null) {
        if ($mod.TTMSFNCPersistence.IgnoreExceptions) {
          Result = null;
          return Result;
        } else throw $mod.ETMSFNCReaderException.$create("CreateFmt",['Type "%s" not found',pas.System.VarRecs(18,AClassName)]);
      };
      if (!$mod.TTMSFNCPersistence.IgnoreExceptions) {
        if (!ObjType.InheritsFrom(pas.System.TObject)) throw $mod.ETMSFNCReaderException.$create("Create$1",['Type "%s" is not an class type']);
        if (BaseClass !== null) if (!ObjType.InheritsFrom(BaseClass)) throw $mod.ETMSFNCReaderException.$create("CreateFmt",['Type "%s" does not inherit from %s',pas.System.VarRecs(18,AClassName,18,BaseClass.$classname)]);
      };
      if (ObjType.InheritsFrom(pas["WEBLib.Controls"].TCustomControl)) {
        Result = ObjType.$create("Create$1",[null])}
       else if (ObjType.InheritsFrom(pas.Classes.TComponent)) {
        Result = ObjType.$create("Create$1",[null])}
       else if (ObjType.InheritsFrom(pas.Classes.TCollectionItem)) {
        Result = ObjType.$create("Create$1",[null])}
       else if (ObjType.InheritsFrom(pas.Classes.TPersistent)) {
        Result = ObjType.$create("Create")}
       else throw $mod.ETMSFNCReaderException.$create("CreateFmt",['Type "%s" not supported',pas.System.VarRecs(18,AClassName)]);
      return Result;
    };
    this.GetPropInfoDataTypeInfo = function (APropInfo) {
      var Result = null;
      Result = null;
      if (APropInfo != null) Result = APropInfo.typeinfo;
      return Result;
    };
    this.GetPropInfoDataTypeInfoClassType = function (APropInfo) {
      var Result = null;
      var t = null;
      Result = null;
      if ((APropInfo != null) && (APropInfo.typeinfo != null)) {
        t = APropInfo.typeinfo;
        if (t.class){
          return t.class.ClassType();
        };
      };
      return Result;
    };
    this.GetPropInfoType = function (APropInfo) {
      var Result = 0;
      if (APropInfo.typeinfo != null) {
        Result = rtl.rc(APropInfo.typeinfo.kind,0,20)}
       else Result = rtl.rc(pas.System.TTypeKind.tkUnknown,0,20);
      return Result;
    };
    this.GetPropInfoName = function (APropInfo) {
      var Result = "";
      Result = APropInfo.name;
      return Result;
    };
    this.GetPropInfoTypeName = function (APropInfo) {
      var Result = "";
      Result = "";
      if (APropInfo.typeinfo != null) Result = APropInfo.typeinfo.name;
      return Result;
    };
    this.GetEnumName = function (ATypeInfo, AValue) {
      rtl.rc(AValue,-2147483648,2147483647);
      var Result = "";
      Result = ATypeInfo.enumtype[AValue];
      return Result;
    };
    this.IsWriteOnly = function (APropInfo) {
      var Result = false;
      Result = APropInfo.getter === "";
      return Result;
    };
    this.IsReadOnly = function (APropInfo) {
      var Result = false;
      Result = APropInfo.setter === "";
      return Result;
    };
    this.IsAssignableProperty = function (AObject, APropInfo) {
      var Result = false;
      var oProp = null;
      var k = 0;
      var pName = "";
      Result = false;
      k = rtl.rc(this.GetPropInfoType(APropInfo),0,20);
      if (k in rtl.createSet(pas.System.TTypeKind.tkClass)) {
        pName = this.GetPropInfoName(APropInfo);
        oProp = pas.TypInfo.GetObjectProp(AObject,pName);
        Result = ((oProp != null) && this.IsComponent(oProp.$class.ClassType())) || !(oProp != null);
      };
      return Result;
    };
    this.IsColor = function (APropertyName) {
      var Result = false;
      Result = (APropertyName === "TAlphaColor") || (APropertyName === "TColor") || (APropertyName === "TGraphicsColor");
      return Result;
    };
    this.IsStrokeKind = function (APropertyName) {
      var Result = false;
      Result = APropertyName === "TTMSFNCGraphicsStrokeKind";
      return Result;
    };
    this.IsFillKind = function (APropertyName) {
      var Result = false;
      Result = APropertyName === "TTMSFNCGraphicsFillKind";
      return Result;
    };
    this.IsDate = function (APropertyName) {
      var Result = false;
      Result = APropertyName === "TDate";
      return Result;
    };
    this.IsDateTime = function (APropertyName) {
      var Result = false;
      Result = APropertyName === "TDateTime";
      return Result;
    };
    this.IsTime = function (APropertyName) {
      var Result = false;
      Result = APropertyName === "TTime";
      return Result;
    };
    this.GetGenericListType = function (AClass) {
      var Result = null;
      var cn = "";
      var po = 0;
      var pc = 0;
      var fn = "";
      var sl = null;
      var c = 0;
      var I = 0;
      var p = null;
      if (!(AClass != null)) return pas.System.TObject;
      do {
        cn = AClass.$classname;
        if (pas.StrUtils.AnsiStartsStr("TList<",cn) || pas.StrUtils.AnsiStartsStr("TObjectList<",cn)) {
          po = rtl.rc(pas.System.Pos("<",cn),-2147483648,2147483647);
          pc = rtl.rc(pas.System.Pos(">",cn),-2147483648,2147483647);
          if ((po > 0) && (pc > 0)) {
            fn = pas.System.Copy(cn,po + 1,pc - po - 1);
            sl = pas.Classes.TStringList.$create("Create$1");
            try {
              sl.SetDelimiter(".");
              sl.SetDelimitedText(fn);
              while (sl.GetCount() > 0) {
                fn = sl.GetDelimitedText();
                p = pas.Classes.GetClass(fn);
                if (p != null) return p;
                sl.Delete(0);
              };
            } finally {
            };
          };
        };
        AClass = AClass.$ancestor;
      } while (AClass != null);
      Result = pas.System.TObject;
      return Result;
    };
    this.GetGenericDictionaryValueType = function (AClass) {
      var Result = null;
      var cn = "";
      var po = 0;
      var pc = 0;
      var poc = 0;
      var fn = "";
      var sl = null;
      var c = 0;
      var I = 0;
      var p = null;
      if (!(AClass != null)) return pas.System.TObject;
      do {
        cn = AClass.$classname;
        if (pas.StrUtils.AnsiStartsStr("TDictionary<",cn) || pas.StrUtils.AnsiStartsStr("TObjectDictionary<",cn)) {
          po = rtl.rc(pas.System.Pos("<",cn),-2147483648,2147483647);
          pc = rtl.rc(pas.System.Pos(">",cn),-2147483648,2147483647);
          if ((po > 0) && (pc > 0)) {
            fn = pas.System.Copy(cn,po + 1,pc - po - 1);
            poc = rtl.rc(pas.System.Pos(",",fn),-2147483648,2147483647);
            if (poc > 0) {
              fn = pas.System.Copy(fn,poc + 1,fn.length - poc);
              sl = pas.Classes.TStringList.$create("Create$1");
              try {
                sl.SetDelimiter(".");
                sl.SetDelimitedText(fn);
                while (sl.GetCount() > 0) {
                  fn = sl.GetDelimitedText();
                  p = pas.Classes.GetClass(fn);
                  if (p != null) return p;
                  sl.Delete(0);
                };
              } finally {
              };
            };
          };
        };
        AClass = AClass.$ancestor;
      } while (AClass != null);
      Result = pas.System.TObject;
      return Result;
    };
    this.IsGenericList = function (AClass, AType) {
      var Result = false;
      var cn = "";
      if (!(AClass != null)) return false;
      do {
        cn = AClass.$classname;
        if (pas.StrUtils.AnsiStartsStr("TList<",cn) || pas.StrUtils.AnsiStartsStr("TObjectList<",cn)) {
          if ((AType === "") || ((AType !== "") && (pas.System.Pos(pas.SysUtils.LowerCase(AType),pas.SysUtils.LowerCase(cn)) > 0)) || (pas.System.Pos(pas.SysUtils.LowerCase(AType),pas.SysUtils.LowerCase(cn)) > 0)) return true;
        };
        AClass = AClass.$ancestor;
      } while (AClass != null);
      Result = false;
      return Result;
    };
    this.IsGenericDictionary = function (AClass) {
      var Result = false;
      var cn = "";
      if (!(AClass != null)) return false;
      do {
        cn = AClass.$classname;
        if (pas.StrUtils.AnsiStartsStr("TDictionary<",cn) || pas.StrUtils.AnsiStartsStr("TObjectDictionary<",cn)) return true;
        AClass = AClass.$ancestor;
      } while (AClass != null);
      Result = false;
      return Result;
    };
    this.IsCollection = function (AClass) {
      var Result = false;
      Result = this.IsDescendingClass(AClass,["TCollection"]);
      return Result;
    };
    this.IsComponent = function (AClass) {
      var Result = false;
      Result = this.IsDescendingClass(AClass,["TComponent","TTMSFNCCustomComponent"]);
      return Result;
    };
    this.IsControl = function (AClass) {
      var Result = false;
      Result = this.IsDescendingClass(AClass,["TControl"]);
      return Result;
    };
    this.IsList = function (AClass) {
      var Result = false;
      Result = this.IsDescendingClass(AClass,["TList"]);
      return Result;
    };
    this.IsDescendingClass = function (AClass, AClassParentList) {
      var Result = false;
      var cn = "";
      var I = 0;
      if (!(AClass != null)) return false;
      do {
        cn = AClass.$classname;
        for (var $l = 0, $end = rtl.length(AClassParentList) - 1; $l <= $end; $l++) {
          I = $l;
          if (cn === rtl.rcArrR(AClassParentList,I)) return true;
        };
        AClass = AClass.$ancestor;
      } while (AClass != null);
      Result = false;
      return Result;
    };
    this.IsBitmap = function (AClass) {
      var Result = false;
      Result = this.IsDescendingClass(AClass,["TBitmap","TPicture","TTMSFNCBitmap","TGraphic"]);
      return Result;
    };
    this.IsStrings = function (AClass) {
      var Result = false;
      Result = this.IsDescendingClass(AClass,["TStrings"]);
      return Result;
    };
  });
  this.TTMSFNCJSONToClassPropertyType = {"0": "cptUndefined", cptUndefined: 0, "1": "cptString", cptString: 1, "2": "cptBoolean", cptBoolean: 2, "3": "cptDateTime", cptDateTime: 3, "4": "cptObject", cptObject: 4, "5": "cptDouble", cptDouble: 5, "6": "cptInteger", cptInteger: 6, "7": "cptInteger64", cptInteger64: 7, "8": "cptObjectArray", cptObjectArray: 8, "9": "cptStringArray", cptStringArray: 9, "10": "cptBooleanArray", cptBooleanArray: 10, "11": "cptDateTimeArray", cptDateTimeArray: 11, "12": "cptDoubleArray", cptDoubleArray: 12, "13": "cptIntegerArray", cptIntegerArray: 13, "14": "cptInteger64Array", cptInteger64Array: 14};
  this.$rtti.$Enum("TTMSFNCJSONToClassPropertyType",{minvalue: 0, maxvalue: 14, ordtype: 1, enumtype: this.TTMSFNCJSONToClassPropertyType});
  this.TTMSFNCJSONToClassBaseClass = {"0": "cbcNone", cbcNone: 0, "1": "cbcPersistent", cbcPersistent: 1};
  this.$rtti.$Enum("TTMSFNCJSONToClassBaseClass",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TTMSFNCJSONToClassBaseClass});
  rtl.recNewT(this,"TTMSFNCJSONToClassOptions",function () {
    this.SortProperties = false;
    this.DelphiCasing = false;
    this.RemoveSpecialCharacters = false;
    this.AddConstructor = false;
    this.AddDestructor = false;
    this.AddAssign = false;
    this.AddUnit = false;
    this.BaseClass = 0;
    this.AddImplementation = false;
    this.$eq = function (b) {
      return (this.SortProperties === b.SortProperties) && (this.DelphiCasing === b.DelphiCasing) && (this.RemoveSpecialCharacters === b.RemoveSpecialCharacters) && (this.AddConstructor === b.AddConstructor) && (this.AddDestructor === b.AddDestructor) && (this.AddAssign === b.AddAssign) && (this.AddUnit === b.AddUnit) && (this.BaseClass === b.BaseClass) && (this.AddImplementation === b.AddImplementation);
    };
    this.$assign = function (s) {
      this.SortProperties = s.SortProperties;
      this.DelphiCasing = s.DelphiCasing;
      this.RemoveSpecialCharacters = s.RemoveSpecialCharacters;
      this.AddConstructor = s.AddConstructor;
      this.AddDestructor = s.AddDestructor;
      this.AddAssign = s.AddAssign;
      this.AddUnit = s.AddUnit;
      this.BaseClass = s.BaseClass;
      this.AddImplementation = s.AddImplementation;
      return this;
    };
    var $r = $mod.$rtti.$Record("TTMSFNCJSONToClassOptions",{});
    $r.addField("SortProperties",rtl.boolean);
    $r.addField("DelphiCasing",rtl.boolean);
    $r.addField("RemoveSpecialCharacters",rtl.boolean);
    $r.addField("AddConstructor",rtl.boolean);
    $r.addField("AddDestructor",rtl.boolean);
    $r.addField("AddAssign",rtl.boolean);
    $r.addField("AddUnit",rtl.boolean);
    $r.addField("BaseClass",$mod.$rtti["TTMSFNCJSONToClassBaseClass"]);
    $r.addField("AddImplementation",rtl.boolean);
  });
  this.$rtti.$RefToProcVar("TTMSFNCJSONToClassExportEvent",{procsig: rtl.newTIProcSig([["APropertyName",rtl.string,1],["APropertyType",this.$rtti["TTMSFNCJSONToClassPropertyType"],1]])});
  rtl.createClass(this,"TTMSFNCJSONToClassProperty",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FName = "";
      this.FType = 0;
    };
    var a = ["and","array","as","asm","begin","case","class","const","constructor","destructor","dispinterface","div","do","downto","else","end","except","exports","file","finalization","finally","for","function","goto","if","implementation","in","inherited","initialization","inline","interface","is","label","library","mod","nil","not","object","of","or","out","packed","procedure","program","property","raise","record","repeat","resourcestring","set","shl","shr","string","then","threadvar","to","try","type","unit","until","uses","var","while","with","xor"];
    this.FixKeyWord = function (AValue) {
      var Result = "";
      Result = AValue;
      if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.IndexOfTextInArray(pas.SysUtils.UpperCase(AValue),a) !== -1) Result = "&" + AValue;
      return Result;
    };
    this.IsObject = function () {
      var Result = false;
      Result = this.FType in rtl.createSet($mod.TTMSFNCJSONToClassPropertyType.cptObject,$mod.TTMSFNCJSONToClassPropertyType.cptObjectArray,$mod.TTMSFNCJSONToClassPropertyType.cptStringArray,$mod.TTMSFNCJSONToClassPropertyType.cptBooleanArray,$mod.TTMSFNCJSONToClassPropertyType.cptDateTimeArray,$mod.TTMSFNCJSONToClassPropertyType.cptDoubleArray,$mod.TTMSFNCJSONToClassPropertyType.cptIntegerArray,$mod.TTMSFNCJSONToClassPropertyType.cptInteger64Array);
      return Result;
    };
    this.DelphiName = function (ACallBack, AOptions, AFixKeyWord) {
      var Result = "";
      var n = "";
      var s = "";
      var c = "";
      var sl = null;
      var I = 0;
      var p = "";
      var pt = 0;
      Result = "";
      if (this.FName.length > 0) {
        p = this.FName;
        pt = rtl.rc(this.FType,0,14);
        if (ACallBack != null) ACallBack({get: function () {
            return p;
          }, set: function (v) {
            p = v;
          }},{get: function () {
            return pt;
          }, set: function (v) {
            rtl.rc(v,0,14);
            pt = v;
          }});
        sl = pas.Classes.TStringList.$create("Create$1");
        try {
          if (AOptions.RemoveSpecialCharacters) {
            s = p;
            p = "";
            for (var $in = s, $l = 0, $end = $in.length - 1; $l <= $end; $l++) {
              c = $in.charAt($l);
              if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.IsLetterOrDigit(c)) {
                p = p + c}
               else p = p + "_";
            };
          };
          pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.Split("_",p,sl,false);
          for (var $l1 = 0, $end1 = sl.GetCount() - 1; $l1 <= $end1; $l1++) {
            I = $l1;
            n = sl.Get(I);
            if (n.length > 0) {
              if (AOptions.DelphiCasing) n = pas.SysUtils.UpperCase(rtl.rcCharAt(n,0)) + pas.System.Copy(n,2,n.length - 1);
            };
            Result = Result + n;
          };
          if (AFixKeyWord) Result = this.FixKeyWord(Result);
        } finally {
          sl = rtl.freeLoc(sl);
        };
      };
      return Result;
    };
    this.DelphiType = function (ACallBack, AOptions) {
      var Result = "";
      var n = "";
      var t = 0;
      Result = "";
      n = this.FName;
      t = rtl.rc(this.FType,0,14);
      if (ACallBack != null) ACallBack({get: function () {
          return n;
        }, set: function (v) {
          n = v;
        }},{get: function () {
          return t;
        }, set: function (v) {
          rtl.rc(v,0,14);
          t = v;
        }});
      var $tmp = t;
      if ($tmp === $mod.TTMSFNCJSONToClassPropertyType.cptUndefined) {
        Result = "UNDEFINED"}
       else if ($tmp === $mod.TTMSFNCJSONToClassPropertyType.cptString) {
        Result = "string"}
       else if ($tmp === $mod.TTMSFNCJSONToClassPropertyType.cptBoolean) {
        Result = "Boolean"}
       else if ($tmp === $mod.TTMSFNCJSONToClassPropertyType.cptDateTime) {
        Result = "TDateTime"}
       else if ($tmp === $mod.TTMSFNCJSONToClassPropertyType.cptObject) {
        Result = "T" + this.DelphiName(ACallBack,$mod.TTMSFNCJSONToClassOptions.$clone(AOptions),false)}
       else if ($tmp === $mod.TTMSFNCJSONToClassPropertyType.cptDouble) {
        Result = "Double"}
       else if ($tmp === $mod.TTMSFNCJSONToClassPropertyType.cptInteger) {
        Result = "Integer"}
       else if ($tmp === $mod.TTMSFNCJSONToClassPropertyType.cptInteger64) {
        Result = "Int64"}
       else if ($tmp === $mod.TTMSFNCJSONToClassPropertyType.cptObjectArray) {
        Result = "TObjectList<" + "T" + this.DelphiName(ACallBack,$mod.TTMSFNCJSONToClassOptions.$clone(AOptions),false) + ">"}
       else if ($tmp === $mod.TTMSFNCJSONToClassPropertyType.cptDoubleArray) {
        Result = "TList<Double>"}
       else if ($tmp === $mod.TTMSFNCJSONToClassPropertyType.cptStringArray) {
        Result = "TList<string>"}
       else if ($tmp === $mod.TTMSFNCJSONToClassPropertyType.cptBooleanArray) {
        Result = "TList<Boolean>"}
       else if ($tmp === $mod.TTMSFNCJSONToClassPropertyType.cptDateTimeArray) {
        Result = "TList<TDateTime>"}
       else if ($tmp === $mod.TTMSFNCJSONToClassPropertyType.cptIntegerArray) {
        Result = "TList<Integer>"}
       else if ($tmp === $mod.TTMSFNCJSONToClassPropertyType.cptInteger64Array) Result = "TList<Int64>";
      return Result;
    };
    this.Create$1 = function (AName, AType) {
      rtl.rc(AType,0,14);
      this.FName = AName;
      this.FType = rtl.rc(AType,0,14);
      return this;
    };
  });
  rtl.createClass(this,"TTMSFNCJSONToClassProperties",pas["Generics.Collections"].TObjectList$G3,function () {
  });
  rtl.createClass(this,"TTMSFNCJSONToClassItem",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FProperties = null;
      this.FParentProperty = null;
    };
    this.$final = function () {
      this.FProperties = undefined;
      this.FParentProperty = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.GetProperties = function () {
      var Result = null;
      if (!(this.FProperties != null)) this.FProperties = $mod.TTMSFNCJSONToClassProperties.$create("Create$4",[true]);
      Result = this.FProperties;
      return Result;
    };
    this.GetClassName = function (ACallBack, AOptions) {
      var Result = "";
      Result = "TMyDelphiClass";
      if (this.FParentProperty != null) Result = "T" + this.FParentProperty.DelphiName(ACallBack,$mod.TTMSFNCJSONToClassOptions.$clone(AOptions),false);
      return Result;
    };
    this.Create$1 = function (AParentProperty) {
      this.FParentProperty = AParentProperty;
      return this;
    };
    this.Destroy = function () {
      if (this.FProperties != null) rtl.free(this,"FProperties");
      pas.System.TObject.Destroy.call(this);
    };
  });
  rtl.createClass(this,"TTMSFNCJSONToClassItems",pas["Generics.Collections"].TObjectList$G4,function () {
  });
  rtl.createClass(this,"TTMSFNCJSONToClass",pas.System.TObject,function () {
    this.FClasses = null;
    this.JSONValueToClass = function (AParentProperty, AJSONValue) {
      var v = null;
      var n = "";
      var p = null;
      var sz = 0;
      var K = 0;
      var t = 0;
      var ci = null;
      if (pas["WEBLib.JSON"].TJSONObject.isPrototypeOf(AJSONValue)) {
        ci = $mod.TTMSFNCJSONToClassItem.$create("Create$1",[AParentProperty]);
        this.FClasses.Add(ci);
        sz = rtl.rc(pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONObjectSize(rtl.as(AJSONValue,pas["WEBLib.JSON"].TJSONObject)),-2147483648,2147483647);
        for (var $l = 0, $end = sz - 1; $l <= $end; $l++) {
          K = $l;
          n = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONObjectName(rtl.as(AJSONValue,pas["WEBLib.JSON"].TJSONObject),K);
          v = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONValue(AJSONValue,n);
          p = null;
          if (v != null) {
            t = rtl.rc(this.JSONValueToPropertyType(v),0,14);
            if (t !== $mod.TTMSFNCJSONToClassPropertyType.cptUndefined) {
              p = $mod.TTMSFNCJSONToClassProperty.$create("Create$1",[n,t]);
              ci.GetProperties().Add(p);
            };
          };
          this.JSONValueToClass(p,v);
        };
      } else if (pas["WEBLib.JSON"].TJSONArray.isPrototypeOf(AJSONValue)) {
        if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(rtl.as(AJSONValue,pas["WEBLib.JSON"].TJSONArray)) > 0) {
          t = rtl.rc(this.JSONValueToPropertyType(AJSONValue),0,14);
          v = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(rtl.as(AJSONValue,pas["WEBLib.JSON"].TJSONArray),0);
          if (!(AParentProperty != null) && (t !== $mod.TTMSFNCJSONToClassPropertyType.cptUndefined)) {
            ci = $mod.TTMSFNCJSONToClassItem.$create("Create$1",[null]);
            p = $mod.TTMSFNCJSONToClassProperty.$create("Create$1",["Items",t]);
            ci.GetProperties().Add(p);
            this.FClasses.Add(ci);
            AParentProperty = p;
          };
          this.JSONValueToClass(AParentProperty,v);
        } else {
          ci = $mod.TTMSFNCJSONToClassItem.$create("Create$1",[AParentProperty]);
          this.FClasses.Add(ci);
        };
      };
    };
    this.JSONValueToPropertyType = function (AJSONValue) {
      var Result = 0;
      var s = "";
      var dt = 0.0;
      var b = false;
      var v = null;
      var p = 0;
      var d = 0.0;
      var i = 0;
      var i64 = 0;
      Result = rtl.rc($mod.TTMSFNCJSONToClassPropertyType.cptUndefined,0,14);
      if (!(AJSONValue != null)) return Result;
      if (pas["WEBLib.JSON"].TJSONObject.isPrototypeOf(AJSONValue)) {
        Result = rtl.rc($mod.TTMSFNCJSONToClassPropertyType.cptObject,0,14)}
       else if (pas["WEBLib.JSON"].TJSONArray.isPrototypeOf(AJSONValue)) {
        Result = rtl.rc($mod.TTMSFNCJSONToClassPropertyType.cptObjectArray,0,14);
        if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArraySize(rtl.as(AJSONValue,pas["WEBLib.JSON"].TJSONArray)) > 0) {
          v = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.GetJSONArrayItem(rtl.as(AJSONValue,pas["WEBLib.JSON"].TJSONArray),0);
          if (v != null) {
            p = rtl.rc(this.JSONValueToPropertyType(v),0,14);
            var $tmp = p;
            if ($tmp === $mod.TTMSFNCJSONToClassPropertyType.cptString) {
              Result = rtl.rc($mod.TTMSFNCJSONToClassPropertyType.cptStringArray,0,14)}
             else if ($tmp === $mod.TTMSFNCJSONToClassPropertyType.cptBoolean) {
              Result = rtl.rc($mod.TTMSFNCJSONToClassPropertyType.cptBooleanArray,0,14)}
             else if ($tmp === $mod.TTMSFNCJSONToClassPropertyType.cptDateTime) {
              Result = rtl.rc($mod.TTMSFNCJSONToClassPropertyType.cptDateTimeArray,0,14)}
             else if ($tmp === $mod.TTMSFNCJSONToClassPropertyType.cptObject) {
              Result = rtl.rc($mod.TTMSFNCJSONToClassPropertyType.cptObjectArray,0,14)}
             else if ($tmp === $mod.TTMSFNCJSONToClassPropertyType.cptDouble) {
              Result = rtl.rc($mod.TTMSFNCJSONToClassPropertyType.cptDoubleArray,0,14)}
             else if ($tmp === $mod.TTMSFNCJSONToClassPropertyType.cptInteger) {
              Result = rtl.rc($mod.TTMSFNCJSONToClassPropertyType.cptIntegerArray,0,14)}
             else if ($tmp === $mod.TTMSFNCJSONToClassPropertyType.cptInteger64) Result = rtl.rc($mod.TTMSFNCJSONToClassPropertyType.cptInteger64Array,0,14);
          };
        };
      } else if (pas["WEBLib.JSON"].TJSONNumber.isPrototypeOf(AJSONValue)) {
        s = AJSONValue.GetStrValue();
        if (pas.SysUtils.TryStrToInt(s,{get: function () {
            return i;
          }, set: function (v) {
            rtl.rc(v,-2147483648,2147483647);
            i = v;
          }})) {
          Result = rtl.rc($mod.TTMSFNCJSONToClassPropertyType.cptInteger,0,14)}
         else if (pas.SysUtils.TryStrToInt64(s,{get: function () {
            return i64;
          }, set: function (v) {
            rtl.rc(v,-9007199254740991,9007199254740991);
            i64 = v;
          }})) {
          Result = rtl.rc($mod.TTMSFNCJSONToClassPropertyType.cptInteger64,0,14)}
         else if (!pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.TryStrToFloatDot(s,{get: function () {
            return d;
          }, set: function (v) {
            d = v;
          }})) {
          Result = rtl.rc($mod.TTMSFNCJSONToClassPropertyType.cptString,0,14)}
         else Result = rtl.rc($mod.TTMSFNCJSONToClassPropertyType.cptDouble,0,14);
      } else if (pas["WEBLib.JSON"].TJSONTrue.isPrototypeOf(AJSONValue) || pas["WEBLib.JSON"].TJSONFalse.isPrototypeOf(AJSONValue)) {
        Result = rtl.rc($mod.TTMSFNCJSONToClassPropertyType.cptBoolean,0,14)}
       else if (pas["WEBLib.JSON"].TJSONString.isPrototypeOf(AJSONValue)) {
        s = AJSONValue.GetStrValue();
        if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.TryStrToFloatDot(s,{get: function () {
            return d;
          }, set: function (v) {
            d = v;
          }})) {
          Result = rtl.rc($mod.TTMSFNCJSONToClassPropertyType.cptString,0,14)}
         else if (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.IsDate(s,{get: function () {
            return dt;
          }, set: function (v) {
            dt = v;
          }}) || (pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.ISOToDateTime(s,true) > 0) || pas.SysUtils.TryStrToDateTime(s,{get: function () {
            return dt;
          }, set: function (v) {
            dt = v;
          }})) {
          Result = rtl.rc($mod.TTMSFNCJSONToClassPropertyType.cptDateTime,0,14)}
         else if (pas.SysUtils.TryStrToBool(s,{get: function () {
            return b;
          }, set: function (v) {
            b = v;
          }})) {
          Result = rtl.rc($mod.TTMSFNCJSONToClassPropertyType.cptBoolean,0,14)}
         else Result = rtl.rc($mod.TTMSFNCJSONToClassPropertyType.cptString,0,14);
      };
      return Result;
    };
    this.ExportToDelphi = function (AJSONString, AOptions, ACallBack) {
      var $Self = this;
      var Result = "";
      var root = null;
      var I = 0;
      var K = 0;
      var c = null;
      var sl = null;
      var p = null;
      var ind = "";
      var cn = "";
      var slRendered = null;
      function SortList(AList) {
        var $ir = rtl.createIntfRefs();
        try {
          AList.Sort$1($ir.ref(1,pas["Generics.Defaults"].TComparer$G3.Construct(function (ALeft, ARight) {
            var Result = 0;
            Result = rtl.rc(pas.SysUtils.CompareText(ALeft.FName,ARight.FName),-2147483648,2147483647);
            return Result;
          })));
        } finally {
          $ir.free();
        };
      };
      root = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.ParseJSON(AJSONString);
      if (root != null) {
        try {
          $mod.TTMSFNCJSONToClass.FClasses = $mod.TTMSFNCJSONToClassItems.$create("Create$4",[true]);
          try {
            this.JSONValueToClass(null,root);
            sl = pas.Classes.TStringList.$create("Create$1");
            slRendered = pas.Classes.TStringList.$create("Create$1");
            try {
              ind = "";
              if (AOptions.AddUnit) {
                sl.Add("unit MyDelphiUnit;");
                sl.Add("");
                sl.Add("interface");
                sl.Add("");
                sl.Add("uses");
                sl.Add("  Classes, System.Generics.Collections;");
                sl.Add("");
                sl.Add("type");
                ind = "  ";
              };
              for (var $l = this.FClasses.FLength - 1; $l >= 0; $l--) {
                I = $l;
                c = this.FClasses.GetItem(I);
                cn = c.GetClassName(ACallBack,$mod.TTMSFNCJSONToClassOptions.$clone(AOptions));
                if (slRendered.IndexOf(cn) === -1) {
                  var $tmp = AOptions.BaseClass;
                  if ($tmp === $mod.TTMSFNCJSONToClassBaseClass.cbcNone) {
                    sl.Add(ind + cn + " = class")}
                   else if ($tmp === $mod.TTMSFNCJSONToClassBaseClass.cbcPersistent) sl.Add(ind + cn + " = class(TPersistent)");
                  if (AOptions.SortProperties) SortList(c.GetProperties());
                  if (c.GetProperties().FLength > 0) {
                    sl.Add(ind + "private");
                    for (var $l1 = 0, $end = c.GetProperties().FLength - 1; $l1 <= $end; $l1++) {
                      K = $l1;
                      p = c.GetProperties().GetItem(K);
                      sl.Add(ind + "  F" + p.DelphiName(ACallBack,$mod.TTMSFNCJSONToClassOptions.$clone(AOptions),false) + ": " + p.DelphiType(ACallBack,$mod.TTMSFNCJSONToClassOptions.$clone(AOptions)) + ";");
                    };
                  };
                  if (AOptions.AddConstructor || AOptions.AddDestructor || AOptions.AddAssign) {
                    sl.Add(ind + "public");
                    if (AOptions.AddAssign) {
                      var $tmp1 = AOptions.BaseClass;
                      if ($tmp1 === $mod.TTMSFNCJSONToClassBaseClass.cbcNone) {
                        sl.Add(ind + "  procedure Assign(Source: TObject);")}
                       else if ($tmp1 === $mod.TTMSFNCJSONToClassBaseClass.cbcPersistent) sl.Add(ind + "  procedure Assign(Source: TPersistent); override;");
                    };
                    if (AOptions.AddConstructor) sl.Add(ind + "  constructor Create;");
                    if (AOptions.AddDestructor) sl.Add(ind + "  destructor Destroy; override;");
                  };
                  if (c.GetProperties().FLength > 0) {
                    sl.Add(ind + "published");
                    for (var $l2 = 0, $end1 = c.GetProperties().FLength - 1; $l2 <= $end1; $l2++) {
                      K = $l2;
                      p = c.GetProperties().GetItem(K);
                      sl.Add(ind + "  property " + p.DelphiName(ACallBack,$mod.TTMSFNCJSONToClassOptions.$clone(AOptions),true) + ": " + p.DelphiType(ACallBack,$mod.TTMSFNCJSONToClassOptions.$clone(AOptions)) + " read F" + p.DelphiName(ACallBack,$mod.TTMSFNCJSONToClassOptions.$clone(AOptions),false) + " write F" + p.DelphiName(ACallBack,$mod.TTMSFNCJSONToClassOptions.$clone(AOptions),false) + ";");
                    };
                  };
                  sl.Add(ind + "end;");
                  sl.Add("");
                  slRendered.Add(cn);
                };
              };
              slRendered.Clear();
              if (AOptions.AddUnit) {
                sl.Add("implementation");
                sl.Add("");
                if (AOptions.AddImplementation) {
                  slRendered.Clear();
                  for (var $l3 = this.FClasses.FLength - 1; $l3 >= 0; $l3--) {
                    I = $l3;
                    c = this.FClasses.GetItem(I);
                    cn = c.GetClassName(ACallBack,$mod.TTMSFNCJSONToClassOptions.$clone(AOptions));
                    if (slRendered.IndexOf(cn) === -1) {
                      if (AOptions.AddConstructor || AOptions.AddDestructor || AOptions.AddAssign) {
                        sl.Add("{ " + c.GetClassName(ACallBack,$mod.TTMSFNCJSONToClassOptions.$clone(AOptions)) + " }");
                        sl.Add("");
                        if (AOptions.AddAssign) {
                          var $tmp2 = AOptions.BaseClass;
                          if ($tmp2 === $mod.TTMSFNCJSONToClassBaseClass.cbcNone) {
                            sl.Add("procedure " + cn + ".Assign(Source: TObject);")}
                           else if ($tmp2 === $mod.TTMSFNCJSONToClassBaseClass.cbcPersistent) sl.Add("procedure " + cn + ".Assign(Source: TPersistent);");
                          sl.Add("begin");
                          sl.Add("  if (Source is " + cn + ") then");
                          sl.Add("  begin");
                          for (var $l4 = 0, $end2 = c.GetProperties().FLength - 1; $l4 <= $end2; $l4++) {
                            K = $l4;
                            p = c.GetProperties().GetItem(K);
                            if (p.FType === $mod.TTMSFNCJSONToClassPropertyType.cptObject) {
                              sl.Add("    F" + p.DelphiName(ACallBack,$mod.TTMSFNCJSONToClassOptions.$clone(AOptions),false) + ".Assign((Source as " + cn + ")." + p.DelphiName(ACallBack,$mod.TTMSFNCJSONToClassOptions.$clone(AOptions),true) + ");")}
                             else if (!p.IsObject()) {
                              sl.Add("    F" + p.DelphiName(ACallBack,$mod.TTMSFNCJSONToClassOptions.$clone(AOptions),false) + " := (Source as " + cn + ")." + p.DelphiName(ACallBack,$mod.TTMSFNCJSONToClassOptions.$clone(AOptions),true) + ";")}
                             else sl.Add("    //F" + p.DelphiName(ACallBack,$mod.TTMSFNCJSONToClassOptions.$clone(AOptions),false) + " := (Source as " + cn + ")." + p.DelphiName(ACallBack,$mod.TTMSFNCJSONToClassOptions.$clone(AOptions),true) + "; //implement list copy");
                          };
                          sl.Add("  end;");
                          sl.Add("end;");
                          sl.Add("");
                        };
                        if (AOptions.AddConstructor) {
                          sl.Add("constructor " + cn + ".Create;");
                          sl.Add("begin");
                          sl.Add("  inherited;");
                          for (var $l5 = 0, $end3 = c.GetProperties().FLength - 1; $l5 <= $end3; $l5++) {
                            K = $l5;
                            p = c.GetProperties().GetItem(K);
                            if (p.IsObject()) sl.Add("  F" + p.DelphiName(ACallBack,$mod.TTMSFNCJSONToClassOptions.$clone(AOptions),false) + " := " + p.DelphiType(ACallBack,$mod.TTMSFNCJSONToClassOptions.$clone(AOptions)) + ".Create;");
                          };
                          sl.Add("end;");
                          sl.Add("");
                        };
                        if (AOptions.AddDestructor) {
                          sl.Add("destructor " + cn + ".Destroy;");
                          sl.Add("begin");
                          for (var $l6 = 0, $end4 = c.GetProperties().FLength - 1; $l6 <= $end4; $l6++) {
                            K = $l6;
                            p = c.GetProperties().GetItem(K);
                            if (p.IsObject()) sl.Add("  F" + p.DelphiName(ACallBack,$mod.TTMSFNCJSONToClassOptions.$clone(AOptions),false) + ".Free;");
                          };
                          sl.Add("  inherited;");
                          sl.Add("end;");
                          sl.Add("");
                        };
                        slRendered.Add(cn);
                      };
                    };
                  };
                };
                sl.Add("end.");
              };
              while (sl.GetCount() > 0) {
                if (sl.Get(sl.GetCount() - 1) === "") {
                  sl.Delete(sl.GetCount() - 1)}
                 else break;
              };
              Result = sl.GetTextStr();
            } finally {
              slRendered = rtl.freeLoc(slRendered);
              sl = rtl.freeLoc(sl);
            };
          } finally {
            rtl.free(this,"FClasses");
          };
        } finally {
          root = rtl.freeLoc(root);
        };
      };
      return Result;
    };
    this.ExportToDelphi$1 = function (AJSONString, ACallBack) {
      var Result = "";
      Result = this.ExportToDelphi(AJSONString,$mod.TTMSFNCJSONToClassOptions.$clone($mod.DefaultJSONToClassOptions()),ACallBack);
      return Result;
    };
    this.ExportToDelphi$2 = function (AJSONValue, AOptions, ACallBack) {
      var Result = "";
      Result = this.ExportToDelphi(AJSONValue.ToString(),$mod.TTMSFNCJSONToClassOptions.$clone(AOptions),ACallBack);
      return Result;
    };
    this.ExportToDelphi$3 = function (AJSONValue, ACallBack) {
      var Result = "";
      Result = this.ExportToDelphi(AJSONValue.ToString(),$mod.TTMSFNCJSONToClassOptions.$clone($mod.DefaultJSONToClassOptions()),ACallBack);
      return Result;
    };
    this.ExportToDelphiFromFile = function (AFileName, ACallBack) {
      var Result = "";
      Result = this.ExportToDelphiFromFile$1(AFileName,$mod.TTMSFNCJSONToClassOptions.$clone($mod.DefaultJSONToClassOptions()),ACallBack);
      return Result;
    };
    this.ExportToDelphiFromFile$1 = function (AFileName, AOptions, ACallBack) {
      var Result = "";
      var sl = null;
      sl = pas.Classes.TStringList.$create("Create$1");
      try {
        sl.LoadFromFile(AFileName);
        Result = this.ExportToDelphi(sl.GetTextStr(),$mod.TTMSFNCJSONToClassOptions.$clone(AOptions),ACallBack);
      } finally {
        sl = rtl.freeLoc(sl);
      };
      return Result;
    };
  });
  this.$rtti.$StaticArray("ExcludePropertyList$a",{dims: [53], eltype: rtl.string});
  this.ExcludePropertyList = ["Align","AllowFocus","Anchors","BevelEdges","BevelInner","BevelKind","BevelOuter","BevelWidth","BiDiMode","BitmapContainer","BorderSpacing","CanParentFocus","ClipChildren","ClipParent","Constraints","Ctl3D","DisableFocusEffect","DoubleBuffered","DragCursor","DragKind","DragMode","Enabled","EnableDragHighLight","Height","Hint","HitTest","Locked","Margins","Name","Opacity","Padding","ParentBiDiMode","ParentColor","ParentCtl3D","ParentDoubleBuffered","ParentFont","ParentShowHint","PopupMenu","Position","RotationAngle","RotationCenter","Scale","ShowHint","Size","StyleElements","StyleName","TabOrder","TabStop","Tag","Touch","TouchTargetExpansion","Visible","Width"];
  this.DefaultJSONToClassOptions = function () {
    var Result = $mod.TTMSFNCJSONToClassOptions.$new();
    Result.AddUnit = false;
    Result.AddImplementation = false;
    Result.AddConstructor = false;
    Result.AddDestructor = false;
    Result.AddAssign = false;
    Result.BaseClass = $mod.TTMSFNCJSONToClassBaseClass.cbcNone;
    Result.SortProperties = true;
    Result.DelphiCasing = true;
    Result.RemoveSpecialCharacters = true;
    return Result;
  };
  $mod.$implcode = function () {
    $impl.gcNull = -1;
    $mod.$rtti.$ClassRef("TCustomControlClass",{instancetype: pas["WEBLib.Controls"].$rtti["TCustomControl"]});
    $impl.GetTypeInfoEx = function (APropInfo) {
      var Result = null;
      Result = APropInfo.typeinfo;
      return Result;
    };
    $impl.GetColorRed = function (AColor) {
      var Result = 0;
      AColor = pas["WEBLib.Graphics"].ColorToRGB(AColor);
      Result = pas["WEBLib.Graphics"].GetRValue(AColor);
      return Result;
    };
    $impl.GetColorGreen = function (AColor) {
      var Result = 0;
      AColor = pas["WEBLib.Graphics"].ColorToRGB(AColor);
      Result = pas["WEBLib.Graphics"].GetGValue(AColor);
      return Result;
    };
    $impl.GetColorBlue = function (AColor) {
      var Result = 0;
      AColor = pas["WEBLib.Graphics"].ColorToRGB(AColor);
      Result = pas["WEBLib.Graphics"].GetBValue(AColor);
      return Result;
    };
    $impl.HTMLToColorEx = function (AHTML) {
      var Result = 0;
      function HexVal(s) {
        var Result = 0;
        var i = 0;
        var j = 0;
        var i1 = 0;
        var i2 = 0;
        if (s.length < 2) {
          Result = 0;
          return Result;
        };
        i1 = 1;
        i2 = 2;
        if (s.charAt(i1 - 1) >= "A") {
          i = (s.charCodeAt(i1 - 1) - 65) + 10}
         else i = s.charCodeAt(i1 - 1) - 48;
        if (s.charAt(i2 - 1) >= "A") {
          j = (s.charCodeAt(i2 - 1) - 65) + 10}
         else j = s.charCodeAt(i2 - 1) - 48;
        Result = (i << 4) + j;
        return Result;
      };
      var r = 0;
      var g = 0;
      var b = 0;
      r = HexVal(pas.System.Copy(AHTML,2,2));
      g = HexVal(pas.System.Copy(AHTML,4,2)) << 8;
      b = HexVal(pas.System.Copy(AHTML,6,2)) << 16;
      Result = b + g + r;
      return Result;
    };
    var HTMLHexColor = "#RRGGBB";
    var HexDigit = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    $impl.ColorToHTMLEx = function (AColor) {
      var Result = "";
      var c = 0;
      var i = 0;
      i = 1;
      c = pas["WEBLib.Graphics"].ColorToRGB(AColor);
      Result = HTMLHexColor;
      Result = rtl.setCharAt(Result,(1 + i) - 1,HexDigit[$impl.GetColorRed(c) >>> 4]);
      Result = rtl.setCharAt(Result,(2 + i) - 1,HexDigit[$impl.GetColorRed(c) & 0xF]);
      Result = rtl.setCharAt(Result,(3 + i) - 1,HexDigit[$impl.GetColorGreen(c) >>> 4]);
      Result = rtl.setCharAt(Result,(4 + i) - 1,HexDigit[$impl.GetColorGreen(c) & 0xF]);
      Result = rtl.setCharAt(Result,(5 + i) - 1,HexDigit[$impl.GetColorBlue(c) >>> 4]);
      Result = rtl.setCharAt(Result,(6 + i) - 1,HexDigit[$impl.GetColorBlue(c) & 0xF]);
      return Result;
    };
    $impl.CompareNameVal = function (Item1, Item2) {
      var Result = 0;
      Result = rtl.rc(pas.SysUtils.CompareText(Item1.FName,Item2.FName),-2147483648,2147483647);
      return Result;
    };
  };
  $mod.$init = function () {
    $mod.TTMSFNCPersistence.ClassTypeVariable = "$type";
    $mod.TTMSFNCPersistence.IgnoreExceptions = false;
  };
},["DateUtils","StrUtils","WEBLib.Controls","WEBLib.Graphics","Generics.Defaults","WEBLib.TMSFNCUtils"]);
//# sourceMappingURL=WEBLib.TMSFNCPersistence.js.map
