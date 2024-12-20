rtl.module("Unit1",["System","SysUtils","Classes","JS","Web","WEBLib.Graphics","WEBLib.Controls","WEBLib.Forms","WEBLib.Dialogs","WEBLib.TMSFNCTypes","WEBLib.TMSFNCUtils","WEBLib.TMSFNCGraphics","WEBLib.TMSFNCGraphicsTypes","WEBLib.TMSFNCMapsCommonTypes","WEBLib.TMSFNCWebBrowser","WEBLib.TMSFNCMaps","WEBLib.TMSFNCSwitch","WEBLib.StdCtrls","WEBLib.StdCtrls","WEBLib.Controls","WEBLib.TMSFNCCustomControl","WEBLib.TMSFNCPanel","WEBLib.ExtCtrls","WEBLib.REST"],function () {
  "use strict";
  var $mod = this;
  rtl.createClass(this,"TForm1",pas["WEBLib.Forms"].TForm,function () {
    this.$init = function () {
      pas["WEBLib.Forms"].TForm.$init.call(this);
      this.TMSFNCPanel1 = null;
      this.FindISSButton = null;
      this.TMSFNCMaps1 = null;
      this.Timer1 = null;
      this.WebRESTClient1 = null;
      this.WebCheckBox1 = null;
      this.FInitialized = false;
    };
    this.$final = function () {
      this.TMSFNCPanel1 = undefined;
      this.FindISSButton = undefined;
      this.TMSFNCMaps1 = undefined;
      this.Timer1 = undefined;
      this.WebRESTClient1 = undefined;
      this.WebCheckBox1 = undefined;
      pas["WEBLib.Forms"].TForm.$final.call(this);
    };
    this.FindISSButtonClick = function (Sender) {
      this.DoISSTracking();
    };
    this.Timer1Timer = function (Sender) {
      this.FindISSButton.SetEnabled(true);
      if (this.WebCheckBox1.GetChecked()) this.DoISSTracking();
    };
    this.WebRESTClient1RequestResponse = function (Sender, ARequest, AResponse) {
      var JO = null;
      var JPosition = null;
      var PosLAT = "";
      var PosLONG = "";
      var dLAT = 0.0;
      var dLong = 0.0;
      this.FindISSButton.SetEnabled(false);
      this.Timer1.SetEnabled(false);
      if (!this.FInitialized) {
        this.FInitialized = true;
        try {
          this.TMSFNCMaps1.SetZoomLevel(0);
        } catch ($e) {
          this.FInitialized = false;
        };
      };
      try {
        if (ARequest.req.status === 200) {
          JO = rtl.as(pas["WEBLib.JSON"].TJSONObject.ParseJSONValue(AResponse),pas["WEBLib.JSON"].TJSONObject);
          JPosition = rtl.as(JO.GetValue$1("iss_position"),pas["WEBLib.JSON"].TJSONObject);
          PosLAT = JPosition.GetValue$1("latitude").GetStrValue();
          PosLONG = JPosition.GetValue$1("longitude").GetStrValue();
          if (pas.SysUtils.TryStrToFloat$2(PosLAT,{get: function () {
              return dLAT;
            }, set: function (v) {
              dLAT = v;
            }})) if (pas.SysUtils.TryStrToFloat$2(PosLONG,{get: function () {
              return dLong;
            }, set: function (v) {
              dLong = v;
            }})) {
            this.TMSFNCMaps1.BeginUpdate();
            this.TMSFNCMaps1.AddMarker$1(dLAT,dLong,"ISS!","isslogo.png");
            this.TMSFNCMaps1.EndUpdate();
          };
        };
      } finally {
        this.Timer1.SetEnabled(true);
      };
    };
    this.WebFormCloseQuery = function (Sender, CanClose) {
      this.Timer1.SetEnabled(false);
    };
    this.DoISSTracking = function () {
      this.WebRESTClient1.HttpsGet("http://api.open-notify.org/iss-now.json");
    };
    this.LoadDFMValues = function () {
      pas["WEBLib.Forms"].TCustomForm.LoadDFMValues.call(this);
      this.TMSFNCPanel1 = pas["WEBLib.TMSFNCPanel"].TTMSFNCPanel.$create("Create$1",[this]);
      this.FindISSButton = pas["WEBLib.StdCtrls"].TButton.$create("Create$1",[this]);
      this.WebCheckBox1 = pas["WEBLib.StdCtrls"].TCheckBox.$create("Create$1",[this]);
      this.TMSFNCMaps1 = pas["WEBLib.TMSFNCMaps"].TTMSFNCMaps.$create("Create$1",[this]);
      this.Timer1 = pas["WEBLib.ExtCtrls"].TTimer.$create("Create$1",[this]);
      this.WebRESTClient1 = pas["WEBLib.REST"].TRESTClient.$create("Create$1",[this]);
      this.TMSFNCPanel1.BeforeLoadDFMValues();
      this.FindISSButton.BeforeLoadDFMValues();
      this.WebCheckBox1.BeforeLoadDFMValues();
      this.TMSFNCMaps1.BeforeLoadDFMValues();
      this.Timer1.BeforeLoadDFMValues();
      this.WebRESTClient1.BeforeLoadDFMValues();
      try {
        this.SetName("Form1");
        this.SetWidth(828);
        this.SetHeight(547);
        this.SetColor(0);
        this.SetEvent(this,"OnCloseQuery","WebFormCloseQuery");
        this.TMSFNCPanel1.SetParentComponent(this);
        this.TMSFNCPanel1.SetName("TMSFNCPanel1");
        this.TMSFNCPanel1.SetLeft(0);
        this.TMSFNCPanel1.SetTop(0);
        this.TMSFNCPanel1.SetWidth(828);
        this.TMSFNCPanel1.SetHeight(41);
        this.TMSFNCPanel1.SetAlign(pas["WEBLib.Controls"].TAlign.alTop);
        this.TMSFNCPanel1.FBevelCut = pas["WEBLib.Controls"].TBevelCut.bvNone;
        this.TMSFNCPanel1.FBevelOuter = pas["WEBLib.Controls"].TBevelCut.bvNone;
        this.TMSFNCPanel1.FParentDoubleBuffered = false;
        this.TMSFNCPanel1.SetColor(0);
        this.TMSFNCPanel1.FDoubleBuffered = true;
        this.TMSFNCPanel1.SetTabOrder(0);
        this.TMSFNCPanel1.FSectionsAppearance.FFont.FCharset = 1;
        this.TMSFNCPanel1.FSectionsAppearance.FFont.SetColor(65793);
        this.TMSFNCPanel1.FSectionsAppearance.FFont.SetHeight(-11);
        this.TMSFNCPanel1.FSectionsAppearance.FFont.SetName("Segoe UI");
        this.TMSFNCPanel1.FSectionsAppearance.FFont.SetStyle({});
        this.TMSFNCPanel1.FHeader.SetText("Header");
        this.TMSFNCPanel1.FHeader.FFont.FCharset = 1;
        this.TMSFNCPanel1.FHeader.FFont.SetColor(4539717);
        this.TMSFNCPanel1.FHeader.FFont.SetHeight(-13);
        this.TMSFNCPanel1.FHeader.FFont.SetName("Segoe UI");
        this.TMSFNCPanel1.FHeader.FFont.SetStyle(rtl.createSet(pas["WEBLib.Graphics"].TFontStyle.fsBold));
        this.TMSFNCPanel1.FHeader.SetVisible(false);
        this.TMSFNCPanel1.FHeader.FFill.SetColor(16380654);
        this.TMSFNCPanel1.FFooter.SetText("Footer");
        this.TMSFNCPanel1.FFooter.FFont.FCharset = 1;
        this.TMSFNCPanel1.FFooter.FFont.SetColor(4539717);
        this.TMSFNCPanel1.FFooter.FFont.SetHeight(-13);
        this.TMSFNCPanel1.FFooter.FFont.SetName("Segoe UI");
        this.TMSFNCPanel1.FFooter.FFont.SetStyle({});
        this.TMSFNCPanel1.FFooter.FFill.SetColor(16380654);
        this.TMSFNCPanel1.FGlobalFont.SetScale(1.000000000000000000);
        this.TMSFNCPanel1.FGlobalFont.SetStyle({});
        this.FindISSButton.SetParentComponent(this.TMSFNCPanel1);
        this.FindISSButton.SetName("FindISSButton");
        this.FindISSButton.SetAlignWithMargins(true);
        this.FindISSButton.SetLeft(3);
        this.FindISSButton.SetTop(3);
        this.FindISSButton.SetWidth(96);
        this.FindISSButton.SetHeight(35);
        this.FindISSButton.SetAlign(pas["WEBLib.Controls"].TAlign.alLeft);
        this.FindISSButton.SetCaption("Find the ISS?");
        this.FindISSButton.SetColor(15694170);
        this.FindISSButton.FFont.FCharset = 1;
        this.FindISSButton.FFont.SetColor(16777215);
        this.FindISSButton.FFont.SetHeight(-12);
        this.FindISSButton.FFont.SetName("Segoe UI");
        this.FindISSButton.FFont.SetStyle({});
        this.FindISSButton.SetHeightPercent(100.000000000000000000);
        this.FindISSButton.SetParentFont(false);
        this.FindISSButton.SetWidthPercent(100.000000000000000000);
        this.SetEvent$1(this.FindISSButton,this,"OnClick","FindISSButtonClick");
        this.WebCheckBox1.SetParentComponent(this.TMSFNCPanel1);
        this.WebCheckBox1.SetName("WebCheckBox1");
        this.WebCheckBox1.SetAlignWithMargins(true);
        this.WebCheckBox1.SetLeft(117);
        this.WebCheckBox1.SetTop(3);
        this.WebCheckBox1.SetWidth(332);
        this.WebCheckBox1.SetHeight(35);
        this.WebCheckBox1.FMargins.SetLeft(15);
        this.WebCheckBox1.SetAlign(pas["WEBLib.Controls"].TAlign.alLeft);
        this.WebCheckBox1.SetCaption("Automatic tracking?");
        this.WebCheckBox1.SetChildOrderEx(2);
        this.WebCheckBox1.FFont.FCharset = 1;
        this.WebCheckBox1.FFont.SetColor(16777215);
        this.WebCheckBox1.FFont.SetHeight(-12);
        this.WebCheckBox1.FFont.SetName("Segoe UI");
        this.WebCheckBox1.FFont.SetStyle({});
        this.WebCheckBox1.SetHeightPercent(100.000000000000000000);
        this.WebCheckBox1.SetParentFont(false);
        this.WebCheckBox1.SetWidthPercent(100.000000000000000000);
        this.TMSFNCMaps1.SetParentComponent(this);
        this.TMSFNCMaps1.SetName("TMSFNCMaps1");
        this.TMSFNCMaps1.SetLeft(0);
        this.TMSFNCMaps1.SetTop(41);
        this.TMSFNCMaps1.SetWidth(828);
        this.TMSFNCMaps1.SetHeight(506);
        this.TMSFNCMaps1.SetAlign(pas["WEBLib.Controls"].TAlign.alClient);
        this.TMSFNCMaps1.FParentDoubleBuffered = false;
        this.TMSFNCMaps1.FDoubleBuffered = true;
        this.TMSFNCMaps1.SetTabOrder(1);
        this.TMSFNCMaps1.FOptions.SetDefaultLatitude(40.689247000000000000);
        this.TMSFNCMaps1.FOptions.SetDefaultLongitude(-74.044502000000000000);
        this.TMSFNCMaps1.FOptions.SetDefaultZoomLevel(12.000000000000000000);
        this.TMSFNCMaps1.SetService(pas["WEBLib.TMSFNCMaps"].TTMSFNCMapsService.msOpenLayers);
        this.TMSFNCMaps1.SetLocalFileAccess(true);
        this.Timer1.SetParentComponent(this);
        this.Timer1.SetName("Timer1");
        this.Timer1.SetEnabled(false);
        this.Timer1.SetInterval(10000);
        this.SetEvent$1(this.Timer1,this,"OnTimer","Timer1Timer");
        this.Timer1.SetLeft(696);
        this.Timer1.SetTop(8);
        this.WebRESTClient1.SetParentComponent(this);
        this.WebRESTClient1.SetName("WebRESTClient1");
        this.WebRESTClient1.FLoginHeight = 0;
        this.WebRESTClient1.FLoginWidth = 0;
        this.WebRESTClient1.FResponseType = pas["WEBLib.REST"].THTTPRequestResponseType.rtText;
        this.SetEvent$1(this.WebRESTClient1,this,"OnRequestResponse","WebRESTClient1RequestResponse");
        this.WebRESTClient1.SetLeft(752);
        this.WebRESTClient1.SetTop(8);
      } finally {
        this.TMSFNCPanel1.AfterLoadDFMValues();
        this.FindISSButton.AfterLoadDFMValues();
        this.WebCheckBox1.AfterLoadDFMValues();
        this.TMSFNCMaps1.AfterLoadDFMValues();
        this.Timer1.AfterLoadDFMValues();
        this.WebRESTClient1.AfterLoadDFMValues();
      };
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addField("TMSFNCPanel1",pas["WEBLib.TMSFNCPanel"].$rtti["TTMSFNCPanel"]);
    $r.addField("FindISSButton",pas["WEBLib.StdCtrls"].$rtti["TButton"]);
    $r.addField("TMSFNCMaps1",pas["WEBLib.TMSFNCMaps"].$rtti["TTMSFNCMaps"]);
    $r.addField("Timer1",pas["WEBLib.ExtCtrls"].$rtti["TTimer"]);
    $r.addField("WebRESTClient1",pas["WEBLib.REST"].$rtti["TRESTClient"]);
    $r.addField("WebCheckBox1",pas["WEBLib.StdCtrls"].$rtti["TCheckBox"]);
    $r.addMethod("FindISSButtonClick",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("Timer1Timer",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("WebRESTClient1RequestResponse",0,[["Sender",pas.System.$rtti["TObject"]],["ARequest",pas["WEBLib.Controls"].$rtti["TJSXMLHttpRequestRecord"]],["AResponse",rtl.string]]);
    $r.addMethod("WebFormCloseQuery",0,[["Sender",pas.System.$rtti["TObject"]],["CanClose",rtl.boolean,1]]);
  });
  this.Form1 = null;
},["WEBLib.JSON"]);
//# sourceMappingURL=Unit1.js.map
