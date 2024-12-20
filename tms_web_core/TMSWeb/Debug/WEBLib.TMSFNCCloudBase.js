rtl.module("WEBLib.TMSFNCCloudBase",["System","Classes","Types","WEBLib.TMSFNCCustomComponent","WEBLib.TMSFNCUtils","WEBLib.TMSFNCTypes","SysUtils","contnrs","JS"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.MAJ_VER = 1;
  this.MIN_VER = 0;
  this.REL_VER = 1;
  this.BLD_VER = 1;
  this.sRequestLineBreak = "\r\n";
  this.sRequestBoundary = "AaB03x";
  this.sRequestHeadBoundary = "--" + this.sRequestBoundary;
  this.sRequestTailBoundary = "--" + this.sRequestBoundary + "--";
  this.ValidHTTPCodes = rtl.createSet(200,201,202,204);
  this.TTMSFNCCloudBaseLocale = {"0": "cblDefault", cblDefault: 0, "1": "cblEnglish", cblEnglish: 1, "2": "cblDutch", cblDutch: 2, "3": "cblGerman", cblGerman: 3, "4": "cblFrench", cblFrench: 4, "5": "cblSpanish", cblSpanish: 5, "6": "cblItalian", cblItalian: 6, "7": "cblPortuguese", cblPortuguese: 7, "8": "cblGreek", cblGreek: 8, "9": "cblDanish", cblDanish: 9, "10": "cblRussian", cblRussian: 10, "11": "cblRomanian", cblRomanian: 11, "12": "cblSwedish", cblSwedish: 12, "13": "cblFinnish", cblFinnish: 13, "14": "cblTurkish", cblTurkish: 14, "15": "cblJapanese", cblJapanese: 15};
  this.$rtti.$Enum("TTMSFNCCloudBaseLocale",{minvalue: 0, maxvalue: 15, ordtype: 1, enumtype: this.TTMSFNCCloudBaseLocale});
  this.$rtti.$Class("TTMSFNCCustomCloudBase");
  this.$rtti.$Class("TTMSFNCCloudBaseRequest");
  this.$rtti.$Class("TTMSFNCCloudBaseRequestResult");
  this.$rtti.$MethodVar("TTMSFNCCloudBaseRequestEvent",{procsig: rtl.newTIProcSig([["ARequest",this.$rtti["TTMSFNCCloudBaseRequestResult"],2]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCCloudBaseRequestCompleteEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ARequest",this.$rtti["TTMSFNCCloudBaseRequestResult"],2]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCCloudBaseRequestRunEvent",{procsig: rtl.newTIProcSig([["ARequest",this.$rtti["TTMSFNCCloudBaseRequestResult"],2]]), methodkind: 0});
  this.$rtti.$RefToProcVar("TTMSFNCCloudBaseRequestResultStringEvent",{procsig: rtl.newTIProcSig([["AResult",rtl.string,2]])});
  this.$rtti.$RefToProcVar("TTMSFNCCloudBaseRequestResultStreamEvent",{procsig: rtl.newTIProcSig([["AResult",pas.Classes.$rtti["TMemoryStream"],2]])});
  this.$rtti.$RefToProcVar("TTMSFNCCloudBaseRequestResultEvent",{procsig: rtl.newTIProcSig([["ARequestResult",this.$rtti["TTMSFNCCloudBaseRequestResult"],2]])});
  rtl.createClass(this,"TTMSFNCCloudBaseRequestResultEventWrapper",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FCallbackRequest = null;
      this.FCallbackString = null;
      this.FCallbackStream = null;
    };
    this.$final = function () {
      this.FCallbackRequest = undefined;
      this.FCallbackString = undefined;
      this.FCallbackStream = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.Create$1 = function (ACallbackRequest, ACallbackString, ACallbackStream) {
      this.FCallbackRequest = ACallbackRequest;
      this.FCallbackString = ACallbackString;
      this.FCallbackStream = ACallbackStream;
      return this;
    };
  });
  this.$rtti.$RefToProcVar("TTMSFNCCloudBaseRequestResultProgressEvent",{procsig: rtl.newTIProcSig([["ARequestResult",this.$rtti["TTMSFNCCloudBaseRequestResult"],2],["AProgress",rtl.double]])});
  this.$rtti.$MethodVar("TTMSFNCCloudBaseLogEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ARequestResult",this.$rtti["TTMSFNCCloudBaseRequestResult"],2],["AMessage",rtl.string]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCCloudBaseRequestLogEvent",{procsig: rtl.newTIProcSig([["ARequestResult",this.$rtti["TTMSFNCCloudBaseRequestResult"],2],["AMessage",rtl.string]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCCloudBaseProgressEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ARequestResult",this.$rtti["TTMSFNCCloudBaseRequestResult"],2],["AProgress",rtl.double],["AUpload",rtl.boolean]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCCloudBaseRequestProgressEvent",{procsig: rtl.newTIProcSig([["ARequestResult",this.$rtti["TTMSFNCCloudBaseRequestResult"],2],["AProgress",rtl.double],["AUpload",rtl.boolean]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCCloudBaseCompleteEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ARequestResult",this.$rtti["TTMSFNCCloudBaseRequestResult"],2]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCCloudBaseCancelledEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ARequestResult",this.$rtti["TTMSFNCCloudBaseRequestResult"],2]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCCloudBaseStartedEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ARequestResult",this.$rtti["TTMSFNCCloudBaseRequestResult"],2]]), methodkind: 0});
  this.$rtti.$MethodVar("TTMSFNCCloudBaseExternalBrowserCallBackEvent",{procsig: rtl.newTIProcSig([["ACallbackURLResult",rtl.string,2]]), methodkind: 0});
  rtl.createInterface(this,"ITMSFNCCustomCloudBase","{F5D2BC35-639A-4EBF-8201-06B3F9EFB82D}",["GetUploadFileSize","ExecuteRequest","RunExternalBrowser","CloseBrowser"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetUploadFileSize",1,[["ARequest",$mod.$rtti["TTMSFNCCloudBaseRequest"],2]],rtl.nativeint);
    $r.addMethod("ExecuteRequest",0,[["ARequest",$mod.$rtti["TTMSFNCCloudBaseRequestResult"],2]]);
    $r.addMethod("RunExternalBrowser",0,[["AURL",rtl.string,2],["ACallBackURL",rtl.string,2],["ACallBack",$mod.$rtti["TTMSFNCCloudBaseExternalBrowserCallBackEvent"],2]]);
    $r.addMethod("CloseBrowser",0,[]);
  });
  rtl.createInterface(this,"ITMSFNCCloudBaseService","{4876E6F4-B5D4-4322-A0B9-749040C239A5}",["CreateCloudBase","DestroyCloudBase"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("CreateCloudBase",1,[["AValue",$mod.$rtti["TTMSFNCCustomCloudBase"],2]],$mod.$rtti["ITMSFNCCustomCloudBase"]);
    $r.addMethod("DestroyCloudBase",0,[["AValue",$mod.$rtti["ITMSFNCCustomCloudBase"],2]]);
  });
  rtl.createClass(this,"TTMSFNCCloudBaseRequestHeader",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FName = "";
      this.FValue = "";
    };
    this.Create$1 = function (AName, AValue) {
      this.FName = AName;
      this.FValue = AValue;
      return this;
    };
  });
  this.TTaskStatus = {"0": "Created", Created: 0, "1": "WaitingToRun", WaitingToRun: 1, "2": "Running", Running: 2, "3": "Completed", Completed: 3, "4": "WaitingForChildren", WaitingForChildren: 4, "5": "Canceled", Canceled: 5, "6": "Exception", Exception: 6};
  this.$rtti.$Enum("TTaskStatus",{minvalue: 0, maxvalue: 6, ordtype: 1, enumtype: this.TTaskStatus});
  rtl.createInterface(this,"ITask","{5A2BE42C-8E7B-468B-8D6A-2B27EAE87B55}",["GetStatus","Start","Cancel"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetStatus",1,[],$mod.$rtti["TTaskStatus"]);
    $r.addMethod("Start",0,[]);
    $r.addMethod("Cancel",0,[]);
    $r.addProperty("Status",1,$mod.$rtti["TTaskStatus"],"GetStatus","");
  });
  rtl.createClass(this,"TTask",pas.System.TInterfacedObject,function () {
    this.$init = function () {
      pas.System.TInterfacedObject.$init.call(this);
      this.FTaskStatus = 0;
      this.FRunEvent = null;
      this.FRequest = null;
    };
    this.$final = function () {
      this.FRunEvent = undefined;
      this.FRequest = undefined;
      pas.System.TInterfacedObject.$final.call(this);
    };
    this.GetStatus = function () {
      var Result = 0;
      Result = this.FTaskStatus;
      return Result;
    };
    this.Create$1 = function (ARequest, ARunEvent) {
      this.FTaskStatus = $mod.TTaskStatus.Created;
      this.FRunEvent = ARunEvent;
      this.FRequest = ARequest;
      return this;
    };
    this.Destroy = function () {
      this.FRunEvent = null;
      pas.System.TObject.Destroy.call(this);
    };
    this.Start = function () {
      if (this.FRunEvent != null) this.FRunEvent(this.FRequest);
      this.FTaskStatus = $mod.TTaskStatus.Running;
    };
    this.Cancel = function () {
      this.FTaskStatus = $mod.TTaskStatus.Canceled;
    };
    rtl.addIntf(this,$mod.ITask);
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TTMSFNCCloudBaseRequestHeaders",pas.contnrs.TObjectList,function () {
    this.GetItem$1 = function (Index) {
      var Result = null;
      Result = this.GetItem(Index);
      return Result;
    };
    this.SetItem$1 = function (Index, Value) {
      this.SetItem(Index,Value);
    };
  });
  rtl.createClass(this,"TTMSFNCCloudBaseRequests",pas.contnrs.TObjectList,function () {
    this.GetItem$1 = function (Index) {
      var Result = null;
      Result = this.GetItem(Index);
      return Result;
    };
    this.SetItem$1 = function (Index, Value) {
      this.SetItem(Index,Value);
    };
  });
  this.TTMSFNCCloudBaseRequestMethod = {"0": "rmGET", rmGET: 0, "1": "rmPOST", rmPOST: 1, "2": "rmPOSTMULTIPART", rmPOSTMULTIPART: 2, "3": "rmPOSTMULTIPARTRELATED", rmPOSTMULTIPARTRELATED: 3, "4": "rmPUT", rmPUT: 4, "5": "rmPUTMULTIPART", rmPUTMULTIPART: 5, "6": "rmPUTMULTIPARTRELATED", rmPUTMULTIPARTRELATED: 6, "7": "rmDELETE", rmDELETE: 7, "8": "rmPATCH", rmPATCH: 8, "9": "rmUPDATE", rmUPDATE: 9};
  this.$rtti.$Enum("TTMSFNCCloudBaseRequestMethod",{minvalue: 0, maxvalue: 9, ordtype: 1, enumtype: this.TTMSFNCCloudBaseRequestMethod});
  this.TTMSFNCCloudBaseRequestScheme = {"0": "rsHTTP", rsHTTP: 0, "1": "rsHTTPS", rsHTTPS: 1};
  this.$rtti.$Enum("TTMSFNCCloudBaseRequestScheme",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TTMSFNCCloudBaseRequestScheme});
  this.TTMSFNCCloudBaseRequestResultType = {"0": "rrtString", rrtString: 0, "1": "rrtStream", rrtStream: 1, "2": "rrtFile", rrtFile: 2};
  this.$rtti.$Enum("TTMSFNCCloudBaseRequestResultType",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TTMSFNCCloudBaseRequestResultType});
  rtl.createClass(this,"TTMSFNCCloudBaseRequestPostDataBuilder",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FPostData = "";
    };
    this.AddInternalData = function (ADataType, AName, AValue, ASkipBoundary, AFileName, AContentType, AContentTransferEncoding, ASkipLineBreakOnEnd) {
      if (!ASkipBoundary) this.AddHeadBoundary();
      if (AContentType !== "") this.FPostData = this.FPostData + pas.SysUtils.Format("Content-Type: %s" + $mod.sRequestLineBreak,pas.System.VarRecs(18,AContentType));
      if (AContentTransferEncoding !== "") this.FPostData = this.FPostData + pas.SysUtils.Format("Content-Transfer-Encoding: %s" + $mod.sRequestLineBreak,pas.System.VarRecs(18,AContentTransferEncoding));
      if ((AFileName !== "") && (AName !== "")) {
        this.FPostData = this.FPostData + pas.SysUtils.Format("Content-Disposition: " + ADataType + '; name="%s"; filename="%s"' + $mod.sRequestLineBreak,pas.System.VarRecs(18,AName,18,AFileName))}
       else if (AName !== "") {
        this.FPostData = this.FPostData + pas.SysUtils.Format("Content-Disposition: " + ADataType + '; name="%s"' + $mod.sRequestLineBreak,pas.System.VarRecs(18,AName))}
       else if (AFileName !== "") this.FPostData = this.FPostData + pas.SysUtils.Format("Content-Disposition: " + ADataType + '; filename="%s"' + $mod.sRequestLineBreak,pas.System.VarRecs(18,AFileName));
      if (AValue !== "") {
        if (!ASkipLineBreakOnEnd) {
          this.FPostData = this.FPostData + pas.SysUtils.Format($mod.sRequestLineBreak + "%s" + $mod.sRequestLineBreak,pas.System.VarRecs(18,AValue))}
         else this.FPostData = this.FPostData + pas.SysUtils.Format($mod.sRequestLineBreak + "%s",pas.System.VarRecs(18,AValue));
      } else this.FPostData = this.FPostData + $mod.sRequestLineBreak;
    };
    this.Clear = function () {
      this.FPostData = "";
    };
    this.AddText = function (AText, ALineBreak) {
      this.FPostData = this.FPostData + AText;
      if (ALineBreak) this.FPostData = this.FPostData + pas.System.sLineBreak;
    };
    this.AddContentType = function (AValue) {
      this.FPostData = this.FPostData + pas.SysUtils.Format("Content-Type: %s" + $mod.sRequestLineBreak,pas.System.VarRecs(18,AValue));
    };
    this.AddLineBreak = function () {
      this.FPostData = this.FPostData + $mod.sRequestLineBreak;
    };
    this.AddAttachment = function (AName, AValue, ASkipBoundary, AFileName, AContentType, AContentTransferEncoding, ASkipLineBreakOnEnd) {
      this.AddInternalData("attachment",AName,AValue,ASkipBoundary,AFileName,AContentType,AContentTransferEncoding,ASkipLineBreakOnEnd);
    };
    this.AddHeadBoundary = function () {
      this.FPostData = this.FPostData + $mod.sRequestHeadBoundary + $mod.sRequestLineBreak;
    };
    this.AddTailBoundary = function () {
      this.FPostData = this.FPostData + $mod.sRequestTailBoundary + $mod.sRequestLineBreak;
    };
    this.AddFormData = function (AName, AValue, ASkipBoundary, AFileName, AContentType, AContentTransferEncoding, ASkipLineBreakOnEnd) {
      this.AddInternalData("form-data",AName,AValue,ASkipBoundary,AFileName,AContentType,AContentTransferEncoding,ASkipLineBreakOnEnd);
    };
    this.Close = function () {
      this.AddTailBoundary();
    };
    this.Build = function () {
      var Result = "";
      Result = this.FPostData;
      return Result;
    };
  });
  rtl.createClass(this,"TTMSFNCCloudBaseRequest",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FHeaders = null;
      this.FAgent = "";
      this.FHost = "";
      this.FPort = 0;
      this.FPath = "";
      this.FQuery = "";
      this.FMethod = 0;
      this.FName = "";
      this.FPostData = "";
      this.FDataPointer = null;
      this.FDataBoolean = false;
      this.FDataString = "";
      this.FDataObject = null;
      this.FDataInteger = 0;
      this.FResultType = 0;
      this.FUploadStream = null;
      this.FUploadFile = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtilsFile.$new();
      this.FResultFile = "";
      this.FCustomHeaders = false;
      this.FDataUpload = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtilsFile.$new();
      this.FResultFileSize = 0;
      this.FDataInt64 = 0;
    };
    this.$final = function () {
      this.FHeaders = undefined;
      this.FDataObject = undefined;
      this.FUploadStream = undefined;
      this.FUploadFile = undefined;
      this.FDataUpload = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.GetUploadStream = function () {
      var Result = null;
      if (!(this.FUploadStream != null)) this.FUploadStream = pas.Classes.TMemoryStream.$create("Create");
      Result = this.FUploadStream;
      return Result;
    };
    this.GetHeaders = function () {
      var Result = null;
      if (!(this.FHeaders != null)) this.FHeaders = $mod.TTMSFNCCloudBaseRequestHeaders.$create("Create$2");
      Result = this.FHeaders;
      return Result;
    };
    this.DuplicateHeader = function (AHeader) {
      var Result = null;
      Result = $mod.TTMSFNCCloudBaseRequestHeader.$create("Create$1",[AHeader.FName,AHeader.FValue]);
      return Result;
    };
    this.Create$1 = function () {
      this.FAgent = "Mozilla/5.001 (windows; U; NT4.0; en-US; rv:1.0) Gecko/25250101";
      this.FMethod = $mod.TTMSFNCCloudBaseRequestMethod.rmGET;
      this.FResultType = $mod.TTMSFNCCloudBaseRequestResultType.rrtString;
      this.FResultFileSize = -1;
      return this;
    };
    this.Destroy = function () {
      pas.SysUtils.FreeAndNil({p: this, get: function () {
          return this.p.FHeaders;
        }, set: function (v) {
          this.p.FHeaders = v;
        }});
      pas.SysUtils.FreeAndNil({p: this, get: function () {
          return this.p.FUploadStream;
        }, set: function (v) {
          this.p.FUploadStream = v;
        }});
      pas.System.TObject.Destroy.call(this);
    };
    this.Assign = function (ARequest) {
      var I = 0;
      this.FAgent = ARequest.FAgent;
      this.FHost = ARequest.FHost;
      this.FPort = ARequest.FPort;
      this.FPath = ARequest.FPath;
      this.FMethod = ARequest.FMethod;
      this.FQuery = ARequest.FQuery;
      this.FName = ARequest.FName;
      this.FPostData = ARequest.FPostData;
      this.FResultType = ARequest.FResultType;
      this.FResultFileSize = ARequest.FResultFileSize;
      if (ARequest.HasUploadStream()) this.GetUploadStream().LoadFromStream(ARequest.GetUploadStream());
      this.FUploadFile.$assign(ARequest.FUploadFile);
      this.FResultFile = ARequest.FResultFile;
      this.FCustomHeaders = ARequest.FCustomHeaders;
      this.FDataPointer = ARequest.FDataPointer;
      this.FDataBoolean = ARequest.FDataBoolean;
      this.FDataObject = ARequest.FDataObject;
      this.FDataString = ARequest.FDataString;
      this.FDataUpload.$assign(ARequest.FDataUpload);
      this.FDataInteger = ARequest.FDataInteger;
      this.FDataInt64 = ARequest.FDataInt64;
      this.GetHeaders().Clear();
      for (var $l = 0, $end = ARequest.GetHeaders().GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        this.GetHeaders().Add$1(this.DuplicateHeader(ARequest.GetHeaders().GetItem$1(I)));
      };
    };
    this.Clear = function () {
      this.ClearHeaders();
      this.FHost = "";
      this.FPort = 0;
      this.FResultFileSize = -1;
      this.FPath = "";
      this.FQuery = "";
      this.FMethod = $mod.TTMSFNCCloudBaseRequestMethod.rmGET;
      this.FResultType = $mod.TTMSFNCCloudBaseRequestResultType.rrtString;
      this.FName = "";
      this.FPostData = "";
      this.FDataPointer = null;
      this.FDataBoolean = false;
      this.FDataString = "";
      this.FDataObject = null;
      this.FDataInteger = 0;
      this.FDataInt64 = 0;
      if (this.FUploadStream != null) {
        this.FUploadStream.Clear();
        this.FUploadStream.SetPosition(0);
      };
      this.FDataUpload.Data = null;
      this.FDataUpload.Name = "";
      this.FUploadFile.Data = null;
      this.FUploadFile.Name = "";
      this.FResultFile = "";
      this.FCustomHeaders = false;
    };
    this.ClearHeaders = function () {
      this.GetHeaders().Clear();
    };
    this.HasUploadStream = function () {
      var Result = false;
      Result = (this.FUploadStream != null) && (this.FUploadStream.GetSize() > 0);
      return Result;
    };
    this.HasUploadFile = function () {
      var Result = false;
      Result = this.FUploadFile.Data != null;
      return Result;
    };
    this.GenerateHeaders = function () {
      var Result = "";
      var i = 0;
      Result = "";
      for (var $l = 0, $end = this.GetHeaders().GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        Result = Result + this.GetHeaders().GetItem$1(i).FName + ": " + this.GetHeaders().GetItem$1(i).FValue + "\r\n";
      };
      return Result;
    };
    this.GetMethodString = function () {
      var Result = "";
      var $tmp = this.FMethod;
      if ($tmp === $mod.TTMSFNCCloudBaseRequestMethod.rmGET) {
        Result = "GET"}
       else if (($tmp === $mod.TTMSFNCCloudBaseRequestMethod.rmPOST) || ($tmp === $mod.TTMSFNCCloudBaseRequestMethod.rmPOSTMULTIPART) || ($tmp === $mod.TTMSFNCCloudBaseRequestMethod.rmPOSTMULTIPARTRELATED)) {
        Result = "POST"}
       else if (($tmp === $mod.TTMSFNCCloudBaseRequestMethod.rmPUT) || ($tmp === $mod.TTMSFNCCloudBaseRequestMethod.rmPUTMULTIPART) || ($tmp === $mod.TTMSFNCCloudBaseRequestMethod.rmPUTMULTIPARTRELATED) || ($tmp === $mod.TTMSFNCCloudBaseRequestMethod.rmUPDATE)) {
        Result = "PUT"}
       else if ($tmp === $mod.TTMSFNCCloudBaseRequestMethod.rmDELETE) {
        Result = "DELETE"}
       else if ($tmp === $mod.TTMSFNCCloudBaseRequestMethod.rmPATCH) Result = "PATCH";
      return Result;
    };
    this.GetURL = function () {
      var Result = "";
      var p = "";
      var q = "";
      p = "";
      if (this.FPort > 0) p = ":" + pas.SysUtils.IntToStr(this.FPort);
      q = "";
      if (this.FQuery !== "") q = "?" + this.FQuery;
      Result = this.FHost + p + this.FPath + q;
      return Result;
    };
    this.GetServer = function () {
      var Result = "";
      var firstslash = 0;
      var firstat = 0;
      var s = "";
      s = this.FHost;
      if (pas.System.Pos("://",pas.SysUtils.UpperCase(s)) > 0) pas.System.Delete({get: function () {
          return s;
        }, set: function (v) {
          s = v;
        }},1,pas.System.Pos("://",s) + 2);
      firstslash = pas.System.Pos("/",s);
      firstat = pas.System.Pos("@",s);
      if ((firstat > 0) && (firstat < firstslash)) pas.System.Delete({get: function () {
          return s;
        }, set: function (v) {
          s = v;
        }},1,firstat + 1);
      if (firstslash > 0) pas.System.Delete({get: function () {
          return s;
        }, set: function (v) {
          s = v;
        }},1,firstslash - 1);
      Result = s;
      return Result;
    };
    this.GetQueryPath = function () {
      var Result = "";
      var q = "";
      q = "";
      if (this.FQuery !== "") q = "?" + this.FQuery;
      Result = this.FPath + q;
      return Result;
    };
    this.GetPort = function () {
      var Result = 0;
      Result = this.FPort;
      if (Result === 0) {
        if (pas.System.Pos("HTTPS",pas.SysUtils.UpperCase(this.FHost)) > 0) {
          Result = 443}
         else Result = 80;
      };
      return Result;
    };
    this.AddHeader = function (AName, AValue) {
      var Result = null;
      var h = null;
      h = $mod.TTMSFNCCloudBaseRequestHeader.$create("Create$1",[AName,AValue]);
      this.GetHeaders().Add$1(h);
      Result = h;
      return Result;
    };
    this.AddBasicAuthHeader = function (AUserName, APassword) {
      var Result = null;
      var h = null;
      h = $mod.TTMSFNCCloudBaseRequestHeader.$create("Create$1",["Authorization","Basic " + pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.Encode64(AUserName + ":" + APassword,false)]);
      this.GetHeaders().Add$1(h);
      Result = h;
      return Result;
    };
  });
  rtl.createClass(this,"TTMSFNCCloudBaseRequestResult",this.TTMSFNCCloudBaseRequest,function () {
    this.$init = function () {
      $mod.TTMSFNCCloudBaseRequest.$init.call(this);
      this.FResponseHeaders = null;
      this.FMessage = "";
      this.FIsDestroying = false;
      this.FResultString = "";
      this.FCallBackResult = null;
      this.FCallBackProgress = null;
      this.FAsync = false;
      this.FTask = null;
      this.FResolve = null;
      this.FResponseCode = 0;
      this.FProgress = 0.0;
      this.FRunning = false;
      this.FOnRemove = null;
      this.FOnComplete = null;
      this.FOnLog = null;
      this.FOnProgress = null;
      this.FResultStream = null;
      this.FSuccess = false;
      this.FOnCancelled = null;
      this.FTotalBytes = 0;
      this.FBytesReceived = 0;
      this.FDone = false;
    };
    this.$final = function () {
      this.FResponseHeaders = undefined;
      this.FCallBackResult = undefined;
      this.FCallBackProgress = undefined;
      rtl.setIntfP(this,"FTask",null);
      this.FResolve = undefined;
      this.FOnRemove = undefined;
      this.FOnComplete = undefined;
      this.FOnLog = undefined;
      this.FOnProgress = undefined;
      this.FResultStream = undefined;
      this.FOnCancelled = undefined;
      $mod.TTMSFNCCloudBaseRequest.$final.call(this);
    };
    this.ProcessResult = function () {
      if (this.FCallBackResult != null) this.FCallBackResult(this);
      if (this.FResolve != null) this.FResolve(this);
      if (this.FOnRemove != null) this.FOnRemove(this);
    };
    this.ProcessProgress = function () {
      if (this.FCallBackProgress != null) this.FCallBackProgress(this,this.FProgress);
    };
    this.RequestResult = function () {
      if (this.IsAsyncAvailable()) {
        this.ProcessResult();
      } else this.ProcessResult();
    };
    this.ProcessLog = function () {
      if (this.FOnLog != null) this.FOnLog(this,this.FMessage);
    };
    this.RequestProgress = function (AProgress, AUpload) {
      this.FProgress = AProgress;
      if (this.IsAsyncAvailable()) {
        this.ProcessProgress();
      } else this.ProcessProgress();
    };
    this.IsAsyncAvailable = function () {
      var Result = false;
      Result = this.FAsync;
      return Result;
    };
    this.Create$2 = function () {
      $mod.TTMSFNCCloudBaseRequest.Create$1.call(this);
      return this;
    };
    this.Create$3 = function (ARequest, ARequestResultEvent, ARequestResultProgressEvent, AAsync, ATask) {
      $mod.TTMSFNCCloudBaseRequest.Create$1.call(this);
      this.Assign(ARequest);
      this.FAsync = AAsync;
      rtl.setIntfP(this,"FTask",ATask);
      this.FCallBackResult = ARequestResultEvent;
      this.FCallBackProgress = ARequestResultProgressEvent;
      this.FResultStream = pas.Classes.TMemoryStream.$create("Create");
      this.FResponseHeaders = $mod.TTMSFNCCloudBaseRequestHeaders.$create("Create$2");
      return this;
    };
    this.Destroy = function () {
      this.FIsDestroying = true;
      if (this.FTask != null) this.FTask.Cancel();
      rtl.setIntfP(this,"FTask",null);
      this.FCallBackResult = null;
      this.FCallBackProgress = null;
      if (this.FResultStream != null) rtl.free(this,"FResultStream");
      if (this.FResponseHeaders != null) rtl.free(this,"FResponseHeaders");
      $mod.TTMSFNCCloudBaseRequest.Destroy.call(this);
    };
    this.Clear = function () {
      $mod.TTMSFNCCloudBaseRequest.Clear.call(this);
      this.FBytesReceived = 0;
      this.FTotalBytes = 0;
      this.FSuccess = false;
      this.FResultString = "";
      this.FResultStream.Clear();
      this.FCallBackResult = null;
      this.FCallBackProgress = null;
      rtl.setIntfP(this,"FTask",null);
      this.FResponseCode = 0;
      this.FRunning = false;
      this.FResponseHeaders.Clear();
    };
    this.Cancel = function () {
      if (this.FTask != null) this.FTask.Cancel();
    };
    this.Log = function (AMessage) {
      this.FMessage = AMessage;
      this.ProcessLog();
    };
    this.CheckTaskStatus = function () {
      var Result = false;
      if (this.FIsDestroying) {
        Result = false}
       else Result = (this.IsAsyncAvailable() && (this.FTask != null) && (this.FTask.GetStatus() !== $mod.TTaskStatus.Canceled)) || !this.IsAsyncAvailable();
      return Result;
    };
    this.GetResponseHeader = function (AName) {
      var Result = "";
      var I = 0;
      Result = "";
      for (var $l = 0, $end = this.FResponseHeaders.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        if (pas.SysUtils.UpperCase(this.FResponseHeaders.GetItem$1(I).FName) === pas.SysUtils.UpperCase(AName)) {
          Result = this.FResponseHeaders.GetItem$1(I).FValue;
          break;
        };
      };
      return Result;
    };
  });
  rtl.createClass(this,"TTMSFNCCloudBaseService",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FDeveloperURL = "";
      this.FName = "";
      this.FBaseURL = "";
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCCloudBaseService.isPrototypeOf(Source)) {
        this.FBaseURL = rtl.as(Source,$mod.TTMSFNCCloudBaseService).FBaseURL;
        this.FDeveloperURL = rtl.as(Source,$mod.TTMSFNCCloudBaseService).FDeveloperURL;
        this.FName = rtl.as(Source,$mod.TTMSFNCCloudBaseService).FName;
      } else pas.Classes.TPersistent.Assign.apply(this,arguments);
    };
  });
  rtl.createClass(this,"TTMSFNCCustomCloudBase",pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent,function () {
    this.$init = function () {
      pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent.$init.call(this);
      this.FPostDataBuilder = null;
      this.FCloudBase = null;
      this.FRequest = null;
      this.FRequestResult = null;
      this.FRequests = null;
      this.FOnRequestLog = null;
      this.FLogging = false;
      this.FLogFileName = "";
      this.FOnRequestComplete = null;
      this.FOnRequestProgress = null;
      this.FService = null;
      this.FScopes = null;
      this.FOnRequestsComplete = null;
      this.FOnRequestStarted = null;
      this.FOnRequestCancelled = null;
    };
    this.$final = function () {
      this.FPostDataBuilder = undefined;
      rtl.setIntfP(this,"FCloudBase",null);
      this.FRequest = undefined;
      this.FRequestResult = undefined;
      this.FRequests = undefined;
      this.FOnRequestLog = undefined;
      this.FOnRequestComplete = undefined;
      this.FOnRequestProgress = undefined;
      this.FService = undefined;
      this.FScopes = undefined;
      this.FOnRequestsComplete = undefined;
      this.FOnRequestStarted = undefined;
      this.FOnRequestCancelled = undefined;
      pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent.$final.call(this);
    };
    this.IsLogFileNameStored = function () {
      var Result = false;
      Result = this.FLogFileName !== (this.$classname + ".LOG");
      return Result;
    };
    this.SetService = function (Value) {
      this.FService.Assign(Value);
    };
    this.SetScopes = function (Value) {
      this.FScopes.Assign(Value);
    };
    this.GetPostDataBuilder = function () {
      var Result = null;
      if (!(this.FPostDataBuilder != null)) this.FPostDataBuilder = $mod.TTMSFNCCloudBaseRequestPostDataBuilder.$create("Create");
      Result = this.FPostDataBuilder;
      return Result;
    };
    this.GetInstance = function () {
      var Result = 0;
      Result = pas["WEBLib.TMSFNCTypes"].HInstance();
      return Result;
    };
    this.GetVersion = function () {
      var Result = "";
      Result = this.$class.GetVersionNumber(1,0,1,1);
      return Result;
    };
    this.GetScopes = function (ADelimiter, AEncode) {
      var Result = "";
      var i = 0;
      var scopestr = "";
      Result = "";
      for (var $l = 0, $end = this.FScopes.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        if (AEncode) {
          scopestr = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.URLEncode(this.FScopes.Get(i))}
         else scopestr = this.FScopes.Get(i);
        if (Result === "") {
          Result = scopestr}
         else Result = Result + ADelimiter + scopestr;
      };
      return Result;
    };
    this.GetCloudBaseGlobal = function () {
      var Result = null;
      if (!($impl.FCloudBaseGlobal != null)) $impl.FCloudBaseGlobal = $mod.TTMSFNCCustomCloudBase.$create("Create$5");
      Result = $impl.FCloudBaseGlobal;
      return Result;
    };
    this.GetPostDataBuilderGlobal = function () {
      var Result = null;
      if (!($impl.FPostDataBuilderGlobal != null)) $impl.FPostDataBuilderGlobal = $mod.TTMSFNCCloudBaseRequestPostDataBuilder.$create("Create");
      Result = $impl.FPostDataBuilderGlobal;
      return Result;
    };
    this.GetHeadersGlobal = function () {
      var Result = null;
      if (!($impl.FHeadersGlobal != null)) $impl.FHeadersGlobal = $mod.TTMSFNCCloudBaseRequestHeaders.$create("Create$2");
      Result = $impl.FHeadersGlobal;
      return Result;
    };
    this.Log = function (ARequestResult, AMessage) {
      var s = "";
      if (!this.FLogging) return;
      if (this.FOnRequestLog != null) {
        this.FOnRequestLog(this,ARequestResult,AMessage)}
       else {
        s = pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.DateTimeToISO(pas.SysUtils.Now(),false,false) + ": " + AMessage;
        console.log(s);
      };
    };
    this.DoCurlRequestComplete = function (ARequestResult) {
      var obj = null;
      if (ARequestResult.FDataObject != null) {
        obj = ARequestResult.FDataObject;
        if (obj.FCallbackRequest != null) obj.FCallbackRequest(ARequestResult);
        if (obj.FCallbackString != null) obj.FCallbackString(ARequestResult.FResultString);
        if (obj.FCallbackStream != null) obj.FCallbackStream(ARequestResult.FResultStream);
        obj = rtl.freeLoc(obj);
      };
    };
    this.DoRequestRemove = function (ARequestResult) {
      if ((ARequestResult != null) && ARequestResult.FAsync) this.FRequests.Remove$1(ARequestResult);
      if (this.FRequests.GetCount() === 0) this.DoRequestsComplete();
    };
    this.DoRequestComplete = function (ARequestResult) {
      if (ARequestResult != null) {
        ARequestResult.Log("Response code from request [" + ARequestResult.FName + "] is " + pas.SysUtils.IntToStr(ARequestResult.FResponseCode));
        if (ARequestResult.FResponseCode in $mod.ValidHTTPCodes) {
          var $tmp = ARequestResult.FResultType;
          if ($tmp === $mod.TTMSFNCCloudBaseRequestResultType.rrtString) {
            ARequestResult.Log("Result from request [" + ARequestResult.FName + "] is " + ARequestResult.FResultString)}
           else if ($tmp === $mod.TTMSFNCCloudBaseRequestResultType.rrtStream) {
            ARequestResult.Log("Result from request [" + ARequestResult.FName + "] is a stream with size " + pas["WEBLib.TMSFNCUtils"].TTMSFNCUtils.FormatBytesAsString(ARequestResult.FResultStream.GetSize()))}
           else if ($tmp === $mod.TTMSFNCCloudBaseRequestResultType.rrtFile) ARequestResult.Log("Result from request [" + ARequestResult.FName + "] is a file with location [" + ARequestResult.FResultFile + "]");
        };
        ARequestResult.FSuccess = ARequestResult.FResponseCode in $mod.ValidHTTPCodes;
        this.FRequestResult = ARequestResult;
        if (this.FOnRequestComplete != null) this.FOnRequestComplete(this,ARequestResult);
        ARequestResult.RequestResult();
      };
    };
    this.DoRequestCancelled = function (ARequestResult) {
      if (ARequestResult != null) {
        if (this.FOnRequestCancelled != null) this.FOnRequestCancelled(this,ARequestResult);
      };
    };
    this.DoRequestStarted = function (ARequestResult) {
      if (this.FOnRequestStarted != null) this.FOnRequestStarted(this,ARequestResult);
    };
    this.DoRequestsComplete = function () {
      if (this.FOnRequestsComplete != null) this.FOnRequestsComplete(this);
    };
    this.DoRequestProgress = function (ARequestResult, AProgress, AUpload) {
      if (ARequestResult != null) {
        if (ARequestResult != null) ARequestResult.RequestProgress(AProgress,AUpload);
        if (this.FOnRequestProgress != null) this.FOnRequestProgress(this,ARequestResult,AProgress,AUpload);
      };
    };
    this.DoRequestLog = function (ARequestResult, ALogMessage) {
      if (ARequestResult != null) this.Log(ARequestResult,ALogMessage);
    };
    this.InternalExecuteRequest = function (ARequest) {
      if ((this.FCloudBase != null) && (ARequest != null)) {
        this.FRequestResult = null;
        this.DoRequestStarted(ARequest);
        ARequest.FRunning = true;
        ARequest.Log("Executing request [" + ARequest.FName + "] with url: [" + ARequest.GetURL() + "]");
        this.FCloudBase.ExecuteRequest(ARequest);
      };
    };
    this.InternalSimpleGETAsync = function (AURL, AResultType, ARequestResultEvent) {
      var c = null;
      c = this.GetCloudBaseGlobal();
      if (c != null) {
        c.FRequest.Clear();
        c.FRequest.FHost = AURL;
        c.FRequest.FResultType = AResultType;
        c.ExecuteRequest(ARequestResultEvent,null,true);
      };
    };
    this.InternalSimpleGETSync = async function (AURL, AResultType) {
      var Result = null;
      var c = null;
      Result = null;
      c = this.GetCloudBaseGlobal();
      if (c != null) {
        c.FRequest.Clear();
        c.FRequest.FHost = AURL;
        c.FRequest.FResultType = AResultType;
        Result = await c.ExecuteRequest(null,null,false);
      };
      return Result;
    };
    this.Create$5 = function () {
      this.Create$1(null);
      return this;
    };
    this.Create$1 = function (AOwner) {
      var CloudBaseService = null;
      try {
        pas["WEBLib.TMSFNCCustomComponent"].TTMSFNCCustomComponent.Create$1.apply(this,arguments);
        if ($mod.TTMSFNCCloudBasePlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCCloudBaseService),{get: function () {
            return CloudBaseService;
          }, set: function (v) {
            CloudBaseService = rtl.setIntfL(CloudBaseService,v);
          }})) rtl.setIntfP(this,"FCloudBase",CloudBaseService.CreateCloudBase(this),true);
        this.FLogging = false;
        this.FLogFileName = this.$classname + ".LOG";
        this.FRequest = $mod.TTMSFNCCloudBaseRequest.$create("Create$1");
        this.FRequests = $mod.TTMSFNCCloudBaseRequests.$create("Create$2");
        this.FService = $mod.TTMSFNCCloudBaseService.$create("Create");
        this.FScopes = pas.Classes.TStringList.$create("Create$1");
      } finally {
        rtl._Release(CloudBaseService);
      };
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TTMSFNCCustomCloudBase.isPrototypeOf(Source)) {
        this.FLogging = rtl.as(Source,$mod.TTMSFNCCustomCloudBase).FLogging;
        this.FLogFileName = rtl.as(Source,$mod.TTMSFNCCustomCloudBase).FLogFileName;
      } else pas["WEBLib.Controls"].TControl.Assign.apply(this,arguments);
    };
    this.Destroy = function () {
      var CloudBaseService = null;
      try {
        pas.SysUtils.FreeAndNil({p: this, get: function () {
            return this.p.FRequests;
          }, set: function (v) {
            this.p.FRequests = v;
          }});
        pas.SysUtils.FreeAndNil({p: this, get: function () {
            return this.p.FRequest;
          }, set: function (v) {
            this.p.FRequest = v;
          }});
        pas.SysUtils.FreeAndNil({p: this, get: function () {
            return this.p.FPostDataBuilder;
          }, set: function (v) {
            this.p.FPostDataBuilder = v;
          }});
        if ($mod.TTMSFNCCloudBasePlatformServices.Current().SupportsPlatformService$1(rtl.getIntfGUIDR($mod.ITMSFNCCloudBaseService),{get: function () {
            return CloudBaseService;
          }, set: function (v) {
            CloudBaseService = rtl.setIntfL(CloudBaseService,v);
          }})) CloudBaseService.DestroyCloudBase(this.FCloudBase);
        rtl.setIntfP(this,"FCloudBase",null);
        rtl.free(this,"FService");
        rtl.free(this,"FScopes");
        pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
      } finally {
        rtl._Release(CloudBaseService);
      };
    };
    this.ExecuteAllRequests = function () {
      var I = 0;
      var req = null;
      for (var $l = 0, $end = this.FRequests.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        req = this.FRequests.GetItem$1(I);
        if (!req.FRunning) {
          if (req.IsAsyncAvailable()) {
            req.FTask.Start();
          } else {
            this.InternalExecuteRequest(req);
          };
        };
      };
    };
    this.Test = function () {
    };
    this.CancelRequests = function () {
      var I = 0;
      var r = null;
      var rr = null;
      for (var $l = 0, $end = this.FRequests.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        r = this.FRequests.GetItem$1(I);
        if ($mod.TTMSFNCCloudBaseRequestResult.isPrototypeOf(r)) {
          rr = rtl.as(r,$mod.TTMSFNCCloudBaseRequestResult);
          rr.Cancel();
        };
      };
    };
    this.CancelRequest = function (ARequest) {
      if (ARequest != null) ARequest.Cancel();
    };
    this.GetUploadFileSize = function (ARequest) {
      var Result = 0;
      Result = 0;
      if (this.FCloudBase != null) Result = this.FCloudBase.GetUploadFileSize(ARequest);
      return Result;
    };
    this.GetRequestCount = function (IsRunning, ARequestName) {
      var Result = 0;
      var I = 0;
      var r = null;
      var rr = null;
      Result = 0;
      for (var $l = 0, $end = this.FRequests.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        r = this.FRequests.GetItem$1(I);
        if ($mod.TTMSFNCCloudBaseRequestResult.isPrototypeOf(r)) {
          rr = rtl.as(r,$mod.TTMSFNCCloudBaseRequestResult);
          if (((IsRunning && !rr.FDone) || !IsRunning) && ((rr.FName === ARequestName) || (ARequestName === ""))) Result += 1;
        };
      };
      return Result;
    };
    this.AddRequest = function (ARequestResultEvent, ARequestResultProgressEvent, AAsync) {
      var Result = null;
      var req = null;
      var t = null;
      try {
        t = rtl.setIntfL(t,null);
        req = $mod.TTMSFNCCloudBaseRequestResult.$create("Create$3",[this.FRequest,ARequestResultEvent,ARequestResultProgressEvent,AAsync,t]);
        req.FOnRemove = rtl.createCallback(this,"DoRequestRemove");
        req.FOnComplete = rtl.createCallback(this,"DoRequestComplete");
        req.FOnCancelled = rtl.createCallback(this,"DoRequestCancelled");
        req.FOnProgress = rtl.createCallback(this,"DoRequestProgress");
        req.FOnLog = rtl.createCallback(this,"DoRequestLog");
        if (req.IsAsyncAvailable()) {
          t = rtl.setIntfL(t,rtl.queryIntfT($mod.TTask.$create("Create$1",[req,rtl.createCallback(this,"InternalExecuteRequest")]),$mod.ITask),true);
        };
        rtl.setIntfP(req,"FTask",t);
        this.FRequests.Add$1(req);
        Result = req;
      } finally {
        rtl._Release(t);
      };
      return Result;
    };
    this.ExecuteRequest = function (ARequestResultEvent, ARequestResultProgressEvent, AAsync) {
      var $Self = this;
      var Result = null;
      var req = null;
      Result = new Promise(function (AResolve, AReject) {
        req = $Self.AddRequest(ARequestResultEvent,ARequestResultProgressEvent,AAsync);
        if (!AAsync) req.FResolve = AResolve;
        if (req != null) $Self.InternalExecuteRequest(req);
        if (AAsync) AResolve(req);
      });
      return Result;
    };
    this.DownloadFileFromURL = function (AURL, ARequestResultEvent) {
      this.InternalSimpleGETAsync(AURL,$mod.TTMSFNCCloudBaseRequestResultType.rrtStream,ARequestResultEvent);
    };
    this.SimpleGETAsyncAsString = function (AURL, ARequestResultEvent) {
      this.InternalSimpleGETAsync(AURL,$mod.TTMSFNCCloudBaseRequestResultType.rrtString,ARequestResultEvent);
    };
    this.SimpleGETAsyncAsStream = function (AURL, ARequestResultEvent) {
      this.InternalSimpleGETAsync(AURL,$mod.TTMSFNCCloudBaseRequestResultType.rrtStream,ARequestResultEvent);
    };
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$5",2,[]);
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
  });
  rtl.createClass(this,"TTMSFNCCloudBase",this.TTMSFNCCustomCloudBase,function () {
    rtl.addIntf(this,pas["WEBLib.TMSFNCTypes"].ITMSFNCProductInfo);
    rtl.addIntf(this,pas["WEBLib.TMSFNCPersistence"].ITMSFNCPersistence);
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Logging",0,rtl.boolean,"FLogging","FLogging",{Default: false});
    $r.addProperty("LogFileName",12,rtl.string,"FLogFileName","FLogFileName",{stored: "IsLogFileNameStored"});
    $r.addProperty("Version",1,rtl.string,"GetVersion","");
    $r.addProperty("OnRequestsComplete",0,pas.Classes.$rtti["TNotifyEvent"],"FOnRequestsComplete","FOnRequestsComplete");
    $r.addProperty("OnRequestLog",0,$mod.$rtti["TTMSFNCCloudBaseLogEvent"],"FOnRequestLog","FOnRequestLog");
    $r.addProperty("OnRequestComplete",0,$mod.$rtti["TTMSFNCCloudBaseCompleteEvent"],"FOnRequestComplete","FOnRequestComplete");
    $r.addProperty("OnRequestCancelled",0,$mod.$rtti["TTMSFNCCloudBaseCancelledEvent"],"FOnRequestCancelled","FOnRequestCancelled");
    $r.addProperty("OnRequestStarted",0,$mod.$rtti["TTMSFNCCloudBaseStartedEvent"],"FOnRequestStarted","FOnRequestStarted");
    $r.addProperty("OnRequestProgress",0,$mod.$rtti["TTMSFNCCloudBaseProgressEvent"],"FOnRequestProgress","FOnRequestProgress");
    $r.attr = [pas.Classes.ComponentPlatformsAttribute,"Create$1",[0]];
  });
  rtl.createClass(this,"TTMSFNCCloudBaseList",pas.Classes.TList,function () {
    this.GetItem = function (Index) {
      var Result = null;
      var $ok = false;
      try {
        Result = rtl.setIntfL(Result,rtl.getObject(this.Get(Index)));
        $ok = true;
      } finally {
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.SetItem = function (Index, Value) {
      this.Put(Index,Value);
    };
  });
  rtl.createClass(this,"TTMSFNCCloudBaseFactoryService",pas.System.TInterfacedObject,function () {
    this.$init = function () {
      pas.System.TInterfacedObject.$init.call(this);
      this.FCloudBases = null;
    };
    this.$final = function () {
      this.FCloudBases = undefined;
      pas.System.TInterfacedObject.$final.call(this);
    };
    this.DoRemoveCloudBase = function (AValue) {
      if ((this.FCloudBases !== null) && (AValue !== null)) this.FCloudBases.Remove(AValue);
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FCloudBases = $mod.TTMSFNCCloudBaseList.$create("Create$1");
      return this;
    };
    this.Destroy = function () {
      pas.SysUtils.FreeAndNil({p: this, get: function () {
          return this.p.FCloudBases;
        }, set: function (v) {
          this.p.FCloudBases = v;
        }});
      pas.System.TObject.Destroy.call(this);
    };
    this.CreateCloudBase = function (AValue) {
      var Result = null;
      var $ok = false;
      try {
        Result = rtl.setIntfL(Result,this.DoCreateCloudBase(AValue),true);
        this.FCloudBases.Add(Result);
        $ok = true;
      } finally {
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.DestroyCloudBase = function (AValue) {
      this.DoRemoveCloudBase(AValue);
    };
    rtl.addIntf(this,$mod.ITMSFNCCloudBaseService);
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TTMSFNCCloudPlatformServicesService",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FInterface = null;
      this.FGUID = "";
    };
    this.$final = function () {
      rtl.setIntfP(this,"FInterface",null);
      pas.System.TObject.$final.call(this);
    };
    this.Create$1 = function (AGUID, AInterface) {
      this.FGUID = AGUID;
      rtl.setIntfP(this,"FInterface",AInterface);
      return this;
    };
  });
  rtl.createClass(this,"TTMSFNCCloudPlatformServicesList",pas.contnrs.TObjectList,function () {
    this.GetItem$1 = function (Index) {
      var Result = null;
      Result = this.GetItem(Index);
      return Result;
    };
    this.SetItem$1 = function (Index, Value) {
      this.SetItem(Index,Value);
    };
    this.GetValue = function (AGUID) {
      var Result = null;
      var I = 0;
      var $ok = false;
      try {
        Result = rtl.setIntfL(Result,null);
        for (var $l = 0, $end = this.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          if (this.GetItem$1(I).FGUID === AGUID) {
            Result = rtl.setIntfL(Result,this.GetItem$1(I).FInterface);
            break;
          };
        };
        $ok = true;
      } finally {
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.ContainsKey = function (AGUID) {
      var Result = false;
      var I = 0;
      Result = false;
      for (var $l = 0, $end = this.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        if (this.GetItem$1(I).FGUID === AGUID) {
          Result = true;
          break;
        };
      };
      return Result;
    };
    this.RemoveByGUID = function (AGUID) {
      var I = 0;
      for (var $l = this.GetCount() - 1; $l >= 0; $l--) {
        I = $l;
        if (this.GetItem$1(I).FGUID === AGUID) {
          this.Remove$1(this.GetItem$1(I));
          break;
        };
      };
    };
  });
  rtl.createClass(this,"TTMSFNCCloudBasePlatformServices",pas.System.TObject,function () {
    this.FCurrent = null;
    this.FCurrentReleased = false;
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FServicesList = null;
    };
    this.$final = function () {
      this.FServicesList = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.ReleaseCurrent = function () {
      pas.SysUtils.FreeAndNil({p: $mod.TTMSFNCCloudBasePlatformServices, get: function () {
          return this.p.FCurrent;
        }, set: function (v) {
          this.p.FCurrent = v;
        }});
      $mod.TTMSFNCCloudBasePlatformServices.FCurrentReleased = true;
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FServicesList = $mod.TTMSFNCCloudPlatformServicesList.$create("Create$2");
      return this;
    };
    this.Destroy = function () {
      pas.SysUtils.FreeAndNil({p: this, get: function () {
          return this.p.FServicesList;
        }, set: function (v) {
          this.p.FServicesList = v;
        }});
      pas.System.TObject.Destroy.call(this);
    };
    this.AddPlatformService = function (AServiceGUID, AService) {
      var LService = null;
      try {
        if (!this.FServicesList.ContainsKey(pas.SysUtils.GUIDToString(AServiceGUID))) {
          if (pas.SysUtils.Supports$1(AService,AServiceGUID,{get: function () {
              return LService;
            }, set: function (v) {
              LService = v;
            }})) this.FServicesList.Add$1($mod.TTMSFNCCloudPlatformServicesService.$create("Create$1",[pas.SysUtils.GUIDToString(AServiceGUID),AService]));
        };
      } finally {
        rtl._Release(LService);
      };
    };
    this.RemovePlatformService = function (AServiceGUID) {
      this.FServicesList.RemoveByGUID(pas.SysUtils.GUIDToString(AServiceGUID));
    };
    this.GetPlatformService = function (AServiceGUID) {
      var Result = null;
      var k = null;
      var $ok = false;
      try {
        k = rtl.setIntfL(k,this.FServicesList.GetValue(pas.SysUtils.GUIDToString(AServiceGUID)),true);
        pas.SysUtils.Supports$1(k,AServiceGUID,{get: function () {
            return Result;
          }, set: function (v) {
            Result = v;
          }});
        $ok = true;
      } finally {
        rtl._Release(k);
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.SupportsPlatformService = function (AServiceGUID) {
      var Result = false;
      Result = this.FServicesList.ContainsKey(pas.SysUtils.GUIDToString(AServiceGUID));
      return Result;
    };
    this.SupportsPlatformService$1 = function (AServiceGUID, AService) {
      var Result = false;
      var $ir = rtl.createIntfRefs();
      try {
        if (this.FServicesList.ContainsKey(pas.SysUtils.GUIDToString(AServiceGUID))) {
          Result = pas.SysUtils.Supports$1($ir.ref(1,this.FServicesList.GetValue(pas.SysUtils.GUIDToString(AServiceGUID))),AServiceGUID,AService)}
         else {
          AService.set(null);
          Result = false;
        };
      } finally {
        $ir.free();
      };
      return Result;
    };
    this.Current = function () {
      var Result = null;
      if ((this.FCurrent === null) && !this.FCurrentReleased) $mod.TTMSFNCCloudBasePlatformServices.FCurrent = $mod.TTMSFNCCloudBasePlatformServices.$create("Create$1");
      Result = this.FCurrent;
      return Result;
    };
  });
  this.HTTPPostDataBuilder = function () {
    var Result = null;
    Result = $mod.TTMSFNCCustomCloudBase.GetPostDataBuilderGlobal();
    return Result;
  };
  this.HTTPClearHeaders = function () {
    var h = null;
    h = $mod.TTMSFNCCustomCloudBase.GetHeadersGlobal();
    h.Clear();
  };
  this.HTTPAddHeader = function (AName, AValue) {
    var h = null;
    h = $mod.TTMSFNCCustomCloudBase.GetHeadersGlobal();
    h.Add$1($mod.TTMSFNCCloudBaseRequestHeader.$create("Create$1",[AName,AValue]));
  };
  this.HTTPCloudRequest = function (AURL, AResultType, AMethod, ARequestResultEvent) {
    var c = null;
    var I = 0;
    var h = null;
    c = $mod.TTMSFNCCustomCloudBase.GetCloudBaseGlobal();
    if (c != null) {
      c.FRequest.Clear();
      c.FRequest.FHost = AURL;
      c.FRequest.FMethod = AMethod;
      h = $mod.TTMSFNCCustomCloudBase.GetHeadersGlobal();
      if (h != null) {
        for (var $l = 0, $end = h.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          c.FRequest.AddHeader(h.GetItem$1(I).FName,h.GetItem$1(I).FValue);
        };
      };
      c.FRequest.FResultType = AResultType;
      c.ExecuteRequest(ARequestResultEvent,null,true);
    };
  };
  this.HTTPCloudRequest$1 = function (AHost, APath, AQuery, APostData, AResultType, AMethod, ARequestResultEvent) {
    var c = null;
    var I = 0;
    var h = null;
    c = $mod.TTMSFNCCustomCloudBase.GetCloudBaseGlobal();
    if (c != null) {
      c.FRequest.Clear();
      c.FRequest.FHost = AHost;
      c.FRequest.FPath = APath;
      c.FRequest.FQuery = AQuery;
      c.FRequest.FMethod = AMethod;
      c.FRequest.FPostData = APostData;
      h = $mod.TTMSFNCCustomCloudBase.GetHeadersGlobal();
      if (h != null) {
        for (var $l = 0, $end = h.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          c.FRequest.AddHeader(h.GetItem$1(I).FName,h.GetItem$1(I).FValue);
        };
      };
      c.FRequest.FResultType = AResultType;
      c.ExecuteRequest(ARequestResultEvent,null,true);
    };
  };
  $mod.$implcode = function () {
    $impl.FCloudBaseGlobal = null;
    $impl.FPostDataBuilderGlobal = null;
    $impl.FHeadersGlobal = null;
  };
  $mod.$init = function () {
    $mod.TTMSFNCCloudBasePlatformServices.FCurrentReleased = false;
    pas["WEBLib.TMSFNCCloudBase.WEB"].RegisterCloudBaseService();
  };
},["StrUtils","WEBLib.TMSFNCCloudBase.WEB"]);
//# sourceMappingURL=WEBLib.TMSFNCCloudBase.js.map
