unit Unit1;

interface

uses
  System.SysUtils, System.Classes, JS, Web, WEBLib.Graphics, WEBLib.Controls,
  WEBLib.Forms, WEBLib.Dialogs, VCL.TMSFNCTypes, VCL.TMSFNCUtils,
  VCL.TMSFNCGraphics, VCL.TMSFNCGraphicsTypes, VCL.TMSFNCMapsCommonTypes,
  VCL.TMSFNCWebBrowser, VCL.TMSFNCMaps, VCL.TMSFNCSwitch, Vcl.StdCtrls,
  WEBLib.StdCtrls, Vcl.Controls, VCL.TMSFNCCustomControl, VCL.TMSFNCPanel,
  WEBLib.ExtCtrls, WEBLib.REST;

type
  TForm1 = class(TWebForm)
    TMSFNCPanel1: TTMSFNCPanel;
    FindISSButton: TWebButton;
    TMSFNCMaps1: TTMSFNCMaps;
    Timer1: TWebTimer;
    WebRESTClient1: TWebRESTClient;
    WebCheckBox1: TWebCheckBox;
    procedure FindISSButtonClick(Sender: TObject);
    procedure Timer1Timer(Sender: TObject);
    procedure WebRESTClient1RequestResponse(Sender: TObject; ARequest: TJSXMLHttpRequestRecord; AResponse: string);
    procedure WebFormCloseQuery(Sender: TObject; var CanClose: Boolean);
  private
    FInitialized: boolean;
    procedure DoISSTracking;
  end;

var
  Form1: TForm1;

implementation
uses WEBLib.JSON;

{$R *.dfm}


procedure TForm1.DoISSTracking;
begin
  WebRESTClient1.HttpsGet('http://api.open-notify.org/iss-now.json');
end;

procedure TForm1.FindISSButtonClick(Sender: TObject);
begin
  DoISSTracking;
end;

procedure TForm1.Timer1Timer(Sender: TObject);
begin
  FindISSButton.Enabled := True;
  if WebCheckBox1.Checked then DoISSTracking;
end;

procedure TForm1.WebFormCloseQuery(Sender: TObject; var CanClose: Boolean);
begin
  Timer1.Enabled := False;
end;

procedure TForm1.WebRESTClient1RequestResponse(Sender: TObject; ARequest: TJSXMLHttpRequestRecord; AResponse: string);
var
  JO, JPosition:         TJSONObject;
  PosLAT, PosLONG:       string;
  dLAT, dLong:           Double;
begin
  // We need to throttle the calls to the API so they are no more frequent than every 5 seconds
  // so we disable the button and trigger the timer (after the call) so it re-enables in 10 seconds
  FindISSButton.Enabled := False;
  Timer1.Enabled        := False;

  if not FInitialized then
  begin
    FInitialized := True;
    try
      TMSFNCMaps1.SetZoomLevel(0); // Open layer API sometimes times out..
    except
      FInitialized := False;
    end;
  end;
  try
    if ARequest.req.Status = 200 then
    begin
      JO        := TJSONObject.ParseJSONValue(AResponse) as TJSONObject; // Self managed so no need to destroy it
      JPosition := JO.Values['iss_position'] as TJSONObject;
      PosLAT    := JPosition.Values['latitude'].Value;
      PosLONG   := JPosition.Values['longitude'].Value;
      if TryStrToFloat(POSLat, dLat) then
        if TryStrToFloat(PosLONG, dLong) then
        begin
          TMSFNCMaps1.BeginUpdate;
          TMSFNCMaps1.AddMarker(dLAT, dLONG, 'ISS!', 'isslogo.png');
          TMSFNCMaps1.EndUpdate;
        end;
    end;
  finally
    // Sometimes the requests time out - if it does, we need to ensure we re-enable the button
    Timer1.Enabled := True;
  end;end;

end.