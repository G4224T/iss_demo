rtl.module("WEBLib.TMSFNCWebBrowser.WEB",["System"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.RegisterWebBrowserService = function () {
    if (!pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCWebBrowserPlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCWebBrowser"].ITMSFNCWebBrowserService),{p: $impl, get: function () {
        return this.p.WebBrowserService;
      }, set: function (v) {
        rtl.setIntfP(this.p,"WebBrowserService",v);
      }})) {
      rtl.setIntfP($impl,"WebBrowserService",rtl.queryIntfT($impl.TTMSFNCWEBWebBrowserService.$create("Create$1"),pas["WEBLib.TMSFNCWebBrowser"].ITMSFNCWebBrowserService),true);
      pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCWebBrowserPlatformServices.Current().AddPlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCWebBrowser"].ITMSFNCWebBrowserService),$impl.WebBrowserService);
    };
  };
  this.UnRegisterWebBrowserService = function () {
    pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCWebBrowserPlatformServices.Current().RemovePlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCWebBrowser"].ITMSFNCWebBrowserService));
  };
  $mod.$implcode = function () {
    $mod.$rtti.$Class("TTMSFNCWEBWebBrowserService");
    rtl.createClass($impl,"TTMSFNCWEBWebBrowserService",pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCWebBrowserFactoryService,function () {
      this.DoCreateWebBrowser = function (AValue) {
        var Result = null;
        var $ok = false;
        try {
          Result = rtl.setIntfL(Result,rtl.queryIntfT($impl.TTMSFNCWEBWebBrowser.$create("Create$1",[AValue]),pas["WEBLib.TMSFNCWebBrowser"].ITMSFNCCustomWebBrowser),true);
          $ok = true;
        } finally {
          if (!$ok) rtl._Release(Result);
        };
        return Result;
      };
      this.DeleteCookies = function () {
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCWebBrowser"].ITMSFNCWebBrowserService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    rtl.createClass($impl,"TTMSFNCCustomWebBrowserProtected",pas["WEBLib.TMSFNCWebBrowser"].TTMSFNCCustomWebBrowser,function () {
      rtl.addIntf(this,pas["WEBLib.TMSFNCGraphics"].ITMSFNCGraphicsExport);
      rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
      rtl.addIntf(this,pas["WEBLib.TMSFNCStyles"].ITMSFNCAdaptToStyle);
      rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    rtl.createClass($impl,"TTMSFNCWEBWebBrowser",pas.System.TInterfacedObject,function () {
      this.$init = function () {
        pas.System.TInterfacedObject.$init.call(this);
        this.FCustomObjectMessage = null;
        this.FCustomBridge = "";
        this.FCustomBridgeObject = null;
        this.FExternalBrowser = false;
        this.FURL = "";
        this.FWebControl = null;
      };
      this.$final = function () {
        this.FCustomBridgeObject = undefined;
        this.FWebControl = undefined;
        pas.System.TInterfacedObject.$final.call(this);
      };
      this.HandleDoCustomObjectMessage = function (Event) {
        var Result = false;
        var s = "";
        var t = "";
        var b = null;
        try {
          s = Event.detail;
          t = Event.type;
          if ((this.FCustomBridgeObject != null) && (t === this.FCustomBridge) && pas.SysUtils.Supports$3(this.FCustomBridgeObject,pas["WEBLib.TMSFNCWebBrowser"].ITMSFNCCustomWebBrowserBridge.$guid,{get: function () {
              return b;
            }, set: function (v) {
              b = v;
            }})) b.SetObjectMessage(s);
          Result = true;
        } finally {
          rtl._Release(b);
        };
        return Result;
      };
      this.ClearMethodPointers = function () {
        this.FCustomObjectMessage = null;
      };
      this.GetMethodPointers = function () {
        if (this.FCustomObjectMessage === null) this.FCustomObjectMessage = rtl.createCallback(this,"HandleDoCustomObjectMessage");
      };
      this.GetUserAgent = function () {
        var Result = "";
        Result = "";
        return Result;
      };
      this.SetUserAgent = function (Value) {
      };
      this.BeforeChangeParent = function () {
      };
      this.SetFocus = function () {
      };
      this.ClearFocus = function () {
      };
      this.SetCacheFolderName = function (Value) {
      };
      this.SetCacheFolder = function (Value) {
      };
      this.SetAutoClearCache = function (Value) {
      };
      this.SetURL = function (AValue) {
        this.FURL = AValue;
      };
      this.SetExternalBrowser = function (AValue) {
        this.FExternalBrowser = AValue;
      };
      this.SetEnableContextMenu = function (AValue) {
      };
      this.SetEnableShowDebugConsole = function (AValue) {
      };
      this.SetEnableAcceleratorKeys = function (AValue) {
      };
      this.ShowDebugConsole = function () {
      };
      this.Navigate = function (AURL) {
      };
      this.Navigate$1 = function () {
        this.Navigate(this.FURL);
      };
      this.LoadHTML = function (AHTML) {
        if (this.FWebControl != null) {
          if (this.FWebControl.GetElementHandle() != null) this.FWebControl.GetElementHandle().innerHTML = AHTML;
        };
      };
      this.LoadFile = function (AFile) {
      };
      this.GoForward = function () {
      };
      this.GoBack = function () {
      };
      this.Close = function () {
        this.FWebControl.DoCloseForm();
      };
      this.Reload = function () {
      };
      this.StopLoading = function () {
      };
      this.UpdateVisible = function () {
      };
      this.UpdateEnabled = function () {
      };
      this.UpdateBounds = function () {
      };
      this.Initialize = function () {
      };
      this.ClearCache = function () {
      };
      this.AddBridge = function (ABridgeName, ABridgeObject) {
        var eh = null;
        if ((this.FWebControl != null) && (this.FWebControl.GetElementBindHandle() != null) && (ABridgeName !== "") && (ABridgeObject != null)) {
          this.GetMethodPointers();
          eh = this.FWebControl.GetElementBindHandle();
          eh.addEventListener(ABridgeName,this.FCustomObjectMessage);
          this.FCustomBridge = ABridgeName;
          this.FCustomBridgeObject = ABridgeObject;
        };
      };
      this.RemoveBridge = function (ABridgeName) {
        var eh = null;
        if ((this.FWebControl != null) && (this.FWebControl.GetElementBindHandle() != null) && (ABridgeName !== "")) {
          eh = this.FWebControl.GetElementBindHandle();
          eh.removeEventListener(ABridgeName,this.FCustomObjectMessage);
          if (ABridgeName === this.FCustomBridge) {
            this.FCustomBridge = "";
            this.FCustomBridgeObject = null;
          };
        };
      };
      this.CaptureScreenShot = function () {
      };
      this.DeInitialize = function () {
      };
      this.GetExternalBrowser = function () {
        var Result = false;
        Result = this.FExternalBrowser;
        return Result;
      };
      this.GetEnableContextMenu = function () {
        var Result = false;
        Result = false;
        return Result;
      };
      this.GetEnableShowDebugConsole = function () {
        var Result = false;
        Result = false;
        return Result;
      };
      this.GetEnableAcceleratorKeys = function () {
        var Result = false;
        Result = false;
        return Result;
      };
      this.GetURL = function () {
        var Result = "";
        Result = this.FURL;
        return Result;
      };
      this.ExecuteJavascript = function (AScript, ACompleteEvent, ACallback) {
        var v = "";
        var s = "";
        var id = "";
        var ssub = "";
        var res = "";
        var sc = "";
        var sn = "";
        var ps = 0;
        var p = 0;
        var psub = 0;
        var e = null;
        id = pas.SysUtils.StringReplace(pas["WEBLib.TMSFNCTypes"].CreateNewGUID(),"{","",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
        id = pas.SysUtils.StringReplace(id,"}","",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
        id = pas.SysUtils.StringReplace(id,"-","",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
        v = "executeScript" + id;
        ssub = "function " + v + "(){" + "\r\n";
        if (pas.System.Pos("function ",AScript) === 1) {
          sc = AScript;
          ps = pas.System.Pos("function ",AScript) + 9;
          sn = pas.System.Copy(AScript,ps,pas.System.Pos("(",AScript) - ps);
          sc = pas.SysUtils.StringReplace(sc,sn + "();","",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
          ssub = ssub + " return (" + sc + ")();" + "\r\n";
        } else ssub = ssub + " return " + AScript + "\r\n";
        ssub = ssub + "}";
        e = this.FWebControl.GetElementHandle();
        var script = document.createElement('script');
            script.id = id;
            script.text = ssub;
            var ctx;
        
            if (e && e.ownerDocument) {
              e.ownerDocument.body.append(script);
              ctx = e.ownerDocument.defaultView;
            }
            else{
              document.body.append(script);
              ctx = document.body.defaultView;
            };
        s = v;
        function functionFromString(context, funcDef, funcParam) {
               try {
                  var fn = new Function("return function() {return this." + funcDef + "(" + funcParam + ")};");
                  return fn();
               } catch (e) {
                  return (function() {});
               }
            }
        
            function mainfunc (context, func, p){
              var f = functionFromString(context, func, p);
              return f.apply(context);
            }
        
            var obj;
            res = mainfunc(ctx, s, obj);
            if (res) {
              res = res.toString();
            }
            else
            {
              res = "";
            };
        if (ACompleteEvent != null) ACompleteEvent(res);
        if (ACallback != null) ACallback(this);
        var exScript = document.getElementById(id);
        if (exScript){
          exScript.parentNode.removeChild(exScript);
        };
      };
      this.BodyInnerHTML = function () {
        var Result = "";
        Result = "";
        return Result;
      };
      this.DocumentReadyState = function () {
        var Result = "";
        return Result;
      };
      this.NativeEnvironment = function () {
        var Result = null;
        Result = null;
        return Result;
      };
      this.NativeBrowser = function () {
        var Result = null;
        Result = null;
        return Result;
      };
      this.GetBrowserInstance = function () {
        var Result = null;
        var $ok = false;
        try {
          Result = rtl.setIntfL(Result,null);
          $ok = true;
        } finally {
          if (!$ok) rtl._Release(Result);
        };
        return Result;
      };
      this.NativeDialog = function () {
        var Result = null;
        Result = null;
        return Result;
      };
      this.IsFMXBrowser = function () {
        var Result = false;
        Result = true;
        return Result;
      };
      this.CanGoBack = function () {
        var Result = false;
        Result = false;
        return Result;
      };
      this.CanGoForward = function () {
        var Result = false;
        Result = false;
        return Result;
      };
      this.GetCacheFolderName = function () {
        var Result = "";
        Result = "";
        return Result;
      };
      this.GetAutoClearCache = function () {
        var Result = false;
        Result = false;
        return Result;
      };
      this.GetCacheFolder = function () {
        var Result = "";
        Result = "";
        return Result;
      };
      this.UpdateContentFromControl = function () {
      };
      this.Create$1 = function (AWebControl) {
        this.FExternalBrowser = false;
        this.FWebControl = AWebControl;
        this.ClearMethodPointers();
        if (this.FWebControl != null) this.FWebControl.Initialized();
        return this;
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCWebBrowser"].ITMSFNCCustomWebBrowser,{ExecuteJavaScript: "ExecuteJavascript"});
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $impl.WebBrowserService = null;
  };
},["Classes","SysUtils","WEBLib.Controls","WEBLib.TMSFNCWebBrowser","WEBLib.TMSFNCUtils","WEBLib.TMSFNCTypes","Web"]);
//# sourceMappingURL=WEBLib.TMSFNCWebBrowser.WEB.js.map
