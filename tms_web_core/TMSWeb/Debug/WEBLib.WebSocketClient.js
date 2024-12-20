rtl.module("WEBLib.WebSocketClient",["System","Classes","JS","Web","WEBLib.Controls","SysUtils"],function () {
  "use strict";
  var $mod = this;
  this.DefaultPort = 8888;
  this.$rtti.$MethodVar("TSocketClientDataReceivedEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Origin",rtl.string],["SocketData",pas["WEBLib.Controls"].$rtti["TJSObjectRecord"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TSocketClientMessageReceivedEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AMessage",rtl.string]]), methodkind: 0});
  this.$rtti.$MethodVar("TSocketClientBinaryDataReceivedEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AData",pas.SysUtils.$rtti["TBytes"]]]), methodkind: 0});
  this.$rtti.$RefToProcVar("TDataReceivedProc",{procsig: rtl.newTIProcSig([["ABytes",pas.SysUtils.$rtti["TBytes"]]])});
  rtl.createClass(this,"TSocketClientBase",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FPort = 0;
      this.FHostName = "";
      this.FPathName = "";
      this.FWebSocket = null;
      this.FSupport = null;
      this.FOnConnect = null;
      this.FOnDisconnect = null;
      this.FOnDataReceived = null;
      this.FOnMessageReceived = null;
      this.FOnBinaryDataReceived = null;
      this.FUseSSL = false;
      this.FActive = false;
    };
    this.$final = function () {
      this.FWebSocket = undefined;
      this.FSupport = undefined;
      this.FOnConnect = undefined;
      this.FOnDisconnect = undefined;
      this.FOnDataReceived = undefined;
      this.FOnMessageReceived = undefined;
      this.FOnBinaryDataReceived = undefined;
      pas.Classes.TComponent.$final.call(this);
    };
    this.SetActive = function (Value) {
      if (this.FActive !== Value) {
        this.FActive = Value;
        if ((pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) || (pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) return;
        if (Value) {
          this.Connect()}
         else this.Disconnect();
      };
    };
    this.AfterLoadDFMValues = function () {
      pas.Classes.TComponent.AfterLoadDFMValues.call(this);
      if (this.FActive) {
        this.FActive = false;
        this.SetActive(true);
      };
    };
    this.CreateWebSockets = function () {
      var me = this;
      me.FSupport = "MozWebSocket" in window ? 'MozWebSocket' : ("WebSocket" in window ? 'WebSocket' : null);
    };
    this.DoMessage = function (AEvent) {
      var $Self = this;
      var LObjRec = pas["WEBLib.Controls"].TJSObjectRecord.$new();
      if (AEvent != null) {
        if (this.FOnDataReceived != null) {
          LObjRec.jsobject = AEvent.data;
          this.FOnDataReceived($Self,AEvent.origin,pas["WEBLib.Controls"].TJSObjectRecord.$clone(LObjRec));
        };
        if (rtl.isString(AEvent.data)) {
          if (this.FOnMessageReceived != null) this.FOnMessageReceived($Self,pas.JS.ToString(AEvent.data));
        } else {
          if (this.FOnBinaryDataReceived != null) {
            this.GetDataAsBytes(AEvent.data,function (ABytes) {
              $Self.FOnBinaryDataReceived($Self,rtl.arrayRef(ABytes));
            });
          };
        };
      };
    };
    this.DoOpen = function (AEvent) {
      if ((AEvent != null) && (this.FOnConnect != null)) this.FOnConnect(this);
    };
    this.DoClose = function (AEvent) {
      if ((AEvent != null) && (this.FOnDisconnect != null)) this.FOnDisconnect(this);
    };
    this.Create$1 = function (AOwner) {
      this.Create$5(AOwner,this.GetDefaultHostName(),this.GetDefaultPathName(),this.GetDefaultPort());
      return this;
    };
    this.Create$3 = function (AOwner, APort) {
      this.Create$5(AOwner,this.GetDefaultHostName(),this.GetDefaultPathName(),APort);
      return this;
    };
    this.Create$4 = function (AOwner, AHostName, APort) {
      this.Create$5(AOwner,AHostName,this.GetDefaultPathName(),APort);
      return this;
    };
    this.Create$5 = function (AOwner, AHostName, APathName, APort) {
      pas.Classes.TComponent.Create$1.call(this,AOwner);
      this.FUseSSL = false;
      this.FActive = false;
      this.FPort = APort;
      this.FHostName = AHostName;
      this.FPathName = APathName;
      this.DoMessage(null);
      this.DoOpen(null);
      this.DoClose(null);
      return this;
    };
    this.GetDefaultHostName = function () {
      var Result = "";
      return window.location.hostname;
      return Result;
    };
    this.GetDefaultPort = function () {
      var Result = 0;
      return window.location.port;
      return Result;
    };
    this.GetDefaultPathName = function () {
      var Result = "";
      return window.location.pathname;
      return Result;
    };
    this.SupportsWebSockets = function () {
      var Result = false;
      Result = this.FSupport != null;
      return Result;
    };
    this.GetDefaultProtocol = function () {
      var Result = "";
      return window.location.protocol;
      return Result;
    };
    this.GetWebSocketPath = function () {
      var Result = "";
      var p = "";
      var w = "";
      p = this.GetDefaultProtocol();
      if ((p === "https:") || this.FUseSSL) {
        w = "wss:"}
       else w = "ws:";
      w = w + "//" + this.FHostName + ":" + pas.SysUtils.IntToStr(this.FPort);
      w = w + this.FPathName;
      Result = w;
      return Result;
    };
    this.GetReadyState = function () {
      var Result = 0;
      if (this.FWebSocket != null) {
        var me = this;
        return me.FWebSocket.readyState;
      };
      return Result;
    };
    this.Send = function (AMessage) {
      this.FWebSocket.send(AMessage);
    };
    this.Send$1 = function (AMessage) {
      this.FWebSocket.send(AMessage);
    };
    this.Connect = function () {
      var w = "";
      this.Disconnect();
      this.CreateWebSockets();
      w = this.GetWebSocketPath();
      if (this.SupportsWebSockets()) {
        var me = this;
              me.FWebSocket = new window[me.FSupport](w);
              me.FWebSocket.onmessage = function(evt){
                me.DoMessage(evt);
              }
        
              if (me.FWebSocket.readyState==1) {
                me.DoOpen(new Event("open"));
              } else {
                me.FWebSocket.onopen = function(evt){
                  me.DoOpen(evt);
                }
              }
        
              me.FWebSocket.onclose = function(evt){
                me.DoClose(evt);
              };
      };
    };
    this.Disconnect = function () {
      if ((this.FWebSocket != null) && (this.FSupport != null)) {
        this.FWebSocket.close();
        this.FWebSocket = null;
        this.FSupport = null;
      };
    };
    this.GetDataAsBytes = function (AObject, AProc) {
      var reader = null;
      reader = new FileReader();
      reader.addEventListener('loadend', function(e)
      {
        var buffer = new Uint8Array(e.target.result);  // arraybuffer object
        AProc(buffer);
      });
      reader.readAsArrayBuffer(AObject);
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
    $r.addMethod("Create$3",2,[["AOwner",pas.Classes.$rtti["TComponent"]],["APort",rtl.longint]]);
    $r.addMethod("Create$4",2,[["AOwner",pas.Classes.$rtti["TComponent"]],["AHostName",rtl.string],["APort",rtl.longint]]);
    $r.addMethod("Create$5",2,[["AOwner",pas.Classes.$rtti["TComponent"]],["AHostName",rtl.string],["APathName",rtl.string],["APort",rtl.longint]]);
  });
  rtl.createClass(this,"TSocketClient",this.TSocketClientBase,function () {
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Active",2,rtl.boolean,"FActive","SetActive");
    $r.addProperty("Port",0,rtl.longint,"FPort","FPort",{Default: 8888});
    $r.addProperty("UseSSL",0,rtl.boolean,"FUseSSL","FUseSSL");
    $r.addProperty("HostName",0,rtl.string,"FHostName","FHostName");
    $r.addProperty("PathName",0,rtl.string,"FPathName","FPathName");
    $r.addProperty("OnConnect",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnConnect","FOnConnect");
    $r.addProperty("OnDisconnect",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDisconnect","FOnDisconnect");
    $r.addProperty("OnDataReceived",0,$mod.$rtti["TSocketClientDataReceivedEvent"],"FOnDataReceived","FOnDataReceived");
    $r.addProperty("OnMessageReceived",0,$mod.$rtti["TSocketClientMessageReceivedEvent"],"FOnMessageReceived","FOnMessageReceived");
    $r.addProperty("OnBinaryDataReceived",0,$mod.$rtti["TSocketClientBinaryDataReceivedEvent"],"FOnBinaryDataReceived","FOnBinaryDataReceived");
  });
  rtl.createClass(this,"TWebSocketClient",this.TSocketClient,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
});
//# sourceMappingURL=WEBLib.WebSocketClient.js.map
