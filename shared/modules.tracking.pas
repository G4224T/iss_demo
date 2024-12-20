unit modules.tracking;

interface
uses
  System.SysUtils,
  REST.Client
{$IFDEF FRAMEWORK_FMX}
  ,FMX.StdCtrls
  ,FMX.TMSFNCMaps
  ,FMX.Types
{$ELSE}
  ,VCL.StdCtrls
  ,VCL.ExtCtrls
  ,VCL.TMSFNCMaps
{$ENDIF}
  ;

procedure TrackTheISS(AButton: TButton; AMap: TTMSFNCMaps; ARESTClient: TRESTClient; ARESTRequest: TRESTRequest; ARESTResponse: TRESTResponse; ATimer: TTimer; const ALogo: string);

implementation
uses Json;

var
  FInitialized: boolean;

procedure TrackTheISS(AButton: TButton; AMap: TTMSFNCMaps; ARESTClient: TRESTClient; ARESTRequest: TRESTRequest; ARESTResponse: TRESTResponse; ATimer: TTimer; const ALogo: string);
var
  JO, JPosition:         TJSONObject;
  PosLAT, PosLONG:       string;
  dLAT, dLong:           Double;
begin
  // We need to throttle the calls to the API so they are no more frequent than every 5 seconds
  // so we disable the button and trigger the timer (after the call) so it re-enables in 10 seconds
  AButton.Enabled := False;
  ATimer.Enabled        := False;

  if not FInitialized then
  begin
    FInitialized := True;
    try
      AMap.SetZoomLevel(0); // Open layer API sometimes times out..
    except
      FInitialized := False;
    end;
  end;
  try
    ARESTRequest.Execute;
    if ARESTResponse.StatusCode = 200 then
    begin
      JO        := ARESTResponse.JSONValue as TJSONObject;
      JPosition := JO.Values['iss_position'] as TJSONObject;
      PosLAT    := JPosition.Values['latitude'].Value;
      PosLONG   := JPosition.Values['longitude'].Value;
      if TryStrToFloat(POSLat, dLat) then
        if TryStrToFloat(PosLONG, dLong) then
        begin
          AMap.BeginUpdate;
          AMap.AddMarker(dLAT, dLONG, 'ISS!', ALogo);
          AMap.EndUpdate;
        end;
    end;
  finally
    // Sometimes the requests time out - if it does, we need to ensure we re-enable the button
    ATimer.Enabled := True;
  end;
end;

end.
