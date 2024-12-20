rtl.module("WEBLib.TMSFNCCloudBase.WEB",["System"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.RegisterCloudBaseService = function () {
    if (!pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBasePlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCCloudBase"].ITMSFNCCloudBaseService),{p: $impl, get: function () {
        return this.p.CloudBaseService;
      }, set: function (v) {
        rtl.setIntfP(this.p,"CloudBaseService",v);
      }})) {
      rtl.setIntfP($impl,"CloudBaseService",rtl.queryIntfT($impl.TTMSFNCWEBCloudBaseService.$create("Create$1"),pas["WEBLib.TMSFNCCloudBase"].ITMSFNCCloudBaseService),true);
      pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBasePlatformServices.Current().AddPlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCCloudBase"].ITMSFNCCloudBaseService),$impl.CloudBaseService);
    };
  };
  this.UnRegisterCloudBaseService = function () {
    pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBasePlatformServices.Current().RemovePlatformService(rtl.getIntfGUIDR(pas["WEBLib.TMSFNCCloudBase"].ITMSFNCCloudBaseService));
  };
  $mod.$implcode = function () {
    $mod.$rtti.$Class("TTMSFNCWEBCloudBaseService");
    rtl.createClass($impl,"TTMSFNCWEBCloudBaseService",pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBaseFactoryService,function () {
      this.DoCreateCloudBase = function (AValue) {
        var Result = null;
        var $ok = false;
        try {
          Result = rtl.setIntfL(Result,rtl.queryIntfT($impl.TTMSFNCWEBCloudBase.$create("Create$1",[AValue]),pas["WEBLib.TMSFNCCloudBase"].ITMSFNCCustomCloudBase),true);
          $ok = true;
        } finally {
          if (!$ok) rtl._Release(Result);
        };
        return Result;
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCCloudBase"].ITMSFNCCloudBaseService);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    rtl.createClass($impl,"TTMSFNCCloudBaseRequestResultOpen",pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBaseRequestResult,function () {
    });
    rtl.createClass($impl,"TTMSFNCWEBCloudBase",pas.System.TInterfacedObject,function () {
      this.$init = function () {
        pas.System.TInterfacedObject.$init.call(this);
        this.FCloudBaseInstance = null;
      };
      this.$final = function () {
        this.FCloudBaseInstance = undefined;
        pas.System.TInterfacedObject.$final.call(this);
      };
      this.Create$1 = function (ACloudBaseInstance) {
        this.FCloudBaseInstance = ACloudBaseInstance;
        return this;
      };
      this.GetUploadFileSize = function (ARequest) {
        var Result = 0;
        Result = 0;
        if (ARequest.HasUploadFile()) {
          Result = ARequest.FUploadFile.Data.length;
        } else if (ARequest.HasUploadStream()) {
          ARequest.GetUploadStream().SetPosition(0);
          Result = ARequest.GetUploadStream().GetSize();
        };
        return Result;
      };
      this.ExecuteRequest = function (ARequest) {
        var $Self = this;
        var u = "";
        var up = false;
        var mt = "";
        var sz = 0;
        var head = "";
        var tail = "";
        var h = null;
        var b = [];
        function AddHeader(AName, AValue) {
          h.Add$1(pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBaseRequestHeader.$create("Create$1",[AName,AValue]));
        };
        try {
          u = ARequest.GetURL();
          mt = ARequest.GetMethodString();
          sz = this.GetUploadFileSize(ARequest);
          head = "";
          tail = "";
          h = pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBaseRequestHeaders.$create("Create$2");
          up = ARequest.HasUploadStream() || ARequest.HasUploadFile();
          if (!ARequest.FCustomHeaders && (ARequest.FMethod in rtl.createSet(pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBaseRequestMethod.rmPOST,pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBaseRequestMethod.rmPUT,pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBaseRequestMethod.rmPATCH)) && (ARequest.HasUploadStream() || ARequest.HasUploadFile())) {
            AddHeader("Content-Type","application/octet-stream");
            AddHeader("Content-Transfer-Encoding","binary");
          };
          if (ARequest.FMethod in rtl.createSet(pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBaseRequestMethod.rmPOSTMULTIPART,pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBaseRequestMethod.rmPUTMULTIPART)) {
            head = pas["WEBLib.TMSFNCCloudBase"].sRequestHeadBoundary + "\r\n";
            tail = "\r\n" + pas["WEBLib.TMSFNCCloudBase"].sRequestTailBoundary + "\r\n";
            AddHeader("Content-Type","multipart/form-data; boundary=" + pas["WEBLib.TMSFNCCloudBase"].sRequestBoundary);
          };
          if (ARequest.FMethod in rtl.createSet(pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBaseRequestMethod.rmPOSTMULTIPARTRELATED,pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBaseRequestMethod.rmPUTMULTIPARTRELATED)) {
            head = "\r\n";
            tail = "\r\n" + pas["WEBLib.TMSFNCCloudBase"].sRequestTailBoundary + "\r\n";
            AddHeader("Content-Type","multipart/related; boundary=" + pas["WEBLib.TMSFNCCloudBase"].sRequestBoundary);
          };
          var arr = [];
          if (head !== "") {
            arr.push(head);
          };
          if (ARequest.FPostData !== "") {
            arr.push(ARequest.FPostData);
          };
          if (ARequest.HasUploadFile()) {
            arr.push(ARequest.FUploadFile.Data);
            if (ARequest.FOnProgress != null) ARequest.FOnProgress(ARequest,100,true);
          } else if (ARequest.HasUploadStream()) {
            ARequest.GetUploadStream().SetPosition(0);
            b = pas["WEBLib.TMSFNCTypes"].TTMSFNCMemoryStream.GetBytes.call(ARequest.GetUploadStream());
            var byteArray = new Uint8Array(b);
            arr.push(byteArray);
            if (ARequest.FOnProgress != null) ARequest.FOnProgress(ARequest,100,true);
          };
          if (tail !== "") {
            arr.push(tail);
          };
          if (mt !== "") {
            function reqListener(e)
                    {
                      var $tmp1 = ARequest.FResultType;
            
                      if (!(ARequest.FResponseCode in pas["WEBLib.TMSFNCCloudBase"].ValidHTTPCodes)){
                        if (!this.responseType == "arrayBuffer"){
                          ARequest.FResultString = this.responseText;
                        }
                      }
                      else
                      {
                        if ($tmp1 === pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBaseRequestResultType.rrtString) {
                          ARequest.FResultString = this.responseText;
                        }
                        else if ($tmp1 === pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBaseRequestResultType.rrtFile) {
                          var byteArray = new Uint8Array(this.response);
            
                          var userAgent = navigator.userAgent.toLowerCase();
                          if (userAgent.indexOf('electron/') > -1)
                          {
                            require('fs').writeFile(ARequest.FResultFile, byteArray, (err) => {});
                          }
                          else
                          {
                            var m = pas["Classes"].TMemoryStream.$create("Create");
                            try
                            {
                              m.Write(byteArray, byteArray.length);
                              pas["WEBLib.TMSFNCTypes"].TTMSFNCMemoryStream.SaveToFile.call(m, ARequest.FResultFile);
                            }
                            finally
                            {
                              m = rtl.freeLoc(m);
                            }
                          }
                        }
                        else
                        {
                          var byteArray = new Uint8Array(this.response);
                          ARequest.FResultStream.Write(byteArray, byteArray.length);
                        }
                      }
            
                      ARequest.FDone = true;
                      if (ARequest.CheckTaskStatus()) {
                        if (ARequest.FOnProgress != null && e.total == 0) ARequest.FOnProgress(ARequest, 100, false);
                        if (ARequest.FOnComplete != null) ARequest.FOnComplete(ARequest);
                      }
                      else
                      {
                        if (ARequest.FOnCancelled != null) ARequest.FOnCancelled(ARequest);
                      }
                    }
            
                    const req = new XMLHttpRequest();
                    req.addEventListener('load', reqListener);
                    req.onreadystatechange = () => {
                      ARequest.FResponseCode = req.status;
            
                      if(req.readyState == 2){
                        // Get the raw header string
                        var headers = req.getAllResponseHeaders();
            
                        // Convert the header string into an array
                        // of individual headers
                        var arr = headers.trim().split(/[\r\n]+/);
            
                        // Create a map of header names to values
                        arr.forEach(function (line) {
                          var parts = line.split(': ');
                          var header = parts.shift();
                          var value = parts.join(': ');
                          if (value != ""){
                            ARequest.FResponseHeaders.Add$1(pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBaseRequestHeader.$create("Create$1",[header,value]));
                          }
                        });
                      }
                    };
                    req.upload.addEventListener("progress", function(event){
                      if (ARequest.CheckTaskStatus() && up && event.total > 0) {
                        if (ARequest.FOnProgress != null) ARequest.FOnProgress(ARequest, event.loaded / event.total * 100, true);
                      };
                    }, false);
                    req.onprogress = function(event){
                      if (ARequest.CheckTaskStatus() && !up && event.total > 0) {
                        ARequest.FTotalBytes = event.total;
                        ARequest.FBytesReceived = event.loaded;
                        if (ARequest.FOnProgress != null) ARequest.FOnProgress(ARequest, event.loaded / event.total * 100, false);
                      };
                    };
            
                    var $tmp1 = ARequest.FResultType;
                    if ($tmp1 === pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBaseRequestResultType.rrtStream || $tmp1 === pas["WEBLib.TMSFNCCloudBase"].TTMSFNCCloudBaseRequestResultType.rrtFile) {
                      req.responseType = 'arraybuffer';
                    }
            
                    req.open(mt, u);
            
                    for (var $l1 = 0, $end2 = ARequest.FHeaders.GetCount() - 1; $l1 <= $end2; $l1++) {
                        var I = $l1;
                        var hd = ARequest.FHeaders.GetItem$1(I);
                        req.setRequestHeader(hd.FName, hd.FValue);
                    };
            
                    for (var $l1 = 0, $end2 = h.GetCount() - 1; $l1 <= $end2; $l1++) {
                        var I = $l1;
                        var hd = h.GetItem$1(I);
                        req.setRequestHeader(hd.FName, hd.FValue);
                    };
            
                    try
                    {
                      if (arr.length > 0){
                        var b = new Blob(arr);
                        req.send(b);
                      }
                      else{
                        req.send();
                      }
                    }catch(exception){
                    };
          } else {
            if (ARequest.CheckTaskStatus()) {
              ARequest.FDone = true;
              if (ARequest.FOnComplete != null) ARequest.FOnComplete(ARequest);
            };
          };
        } finally {
        };
      };
      this.RunExternalBrowser = function (AURL, ACallBackURL, ACallBack) {
        var s = "";
        var sc = "";
        var cb = null;
        cb = ACallBack;
        s = AURL;
        sc = ACallBackURL;
        this.OAuthPopup = function(options)
            {
        
                var l, t, w, h;
                w = 800;
                h = 600;
        
                var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
                var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;
        
                var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
                var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        
                var systemZoom = width / window.screen.availWidth;
                l = (width - w) / 2 / systemZoom + dualScreenLeft
                t = (height - h) / 2 / systemZoom + dualScreenTop
        
                options.windowName = options.windowName ||  'Authentication'; // should not include space for IE
                options.windowOptions = options.windowOptions || 'location=0,status=0,left='+l+',top='+t+',width='+w+',height='+h+'';
                options.callback = options.callback || function(){ window.location.reload(); };
                var that = this;
                that._oauthWindow = window.open(options.path, options.windowName, options.windowOptions);
                that._oauthInterval = window.setInterval(function(){
                    var s, b;
                    if (that._oauthWindow && that._oauthWindow.location){
                      try{
                         s = that._oauthWindow.location.href;
                         if (!s){
                           s = that._oauthWindow.location;
                         }
        
                         b = s.indexOf(sc) != -1;
                         if (b) {
                           that._oauthWindow.close();
                           window.clearInterval(that._oauthInterval);
                           if (b){
                             options.callback(s);
                           }
                         }
                      }catch(exception){
                      }
                    }
        
                }, 1000);
            };
        
            this.OAuthPopup({
                path: s,
                callback: function(callbackURL)
                {
                  if (cb) {
                    cb(callbackURL);
                  }
                }
            });
      };
      this.CloseBrowser = function () {
      };
      rtl.addIntf(this,pas["WEBLib.TMSFNCCloudBase"].ITMSFNCCustomCloudBase);
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $impl.CloudBaseService = null;
  };
},["Classes","Types","SysUtils","WEBLib.TMSFNCCloudBase","WEBLib.TMSFNCTypes","Web"]);
//# sourceMappingURL=WEBLib.TMSFNCCloudBase.WEB.js.map
