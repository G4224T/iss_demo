unit Unit1;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, VCL.TMSFNCTypes, Vcl.Forms,
  VCL.TMSFNCUtils, VCL.TMSFNCGraphics, VCL.TMSFNCGraphicsTypes,
  VCL.TMSFNCMapsCommonTypes, REST.Types, Vcl.ExtCtrls, REST.Client,
  Data.Bind.Components, Data.Bind.ObjectScope, Vcl.WinXCtrls, Vcl.StdCtrls,
  Vcl.Controls, VCL.TMSFNCCustomControl, VCL.TMSFNCWebBrowser,
  VCL.TMSFNCMaps, Vcl.Imaging.pngimage, System.Classes;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Demo to track the International Space Station
//
// Shown during the webinar - replay here: https://www.youtube.com/live/9XX3FtZD_NA?si=1vFoFj2gdh3F3KWG&t=2795
//
// Author: Ian Barker.
//         https://About.me/IanBarker
//         ian.barker@embarcadero.com
//
//      ////////////////////// NOTE /////////////////////////
//
// In order to use this demo you will need to have a copy of the TMS FNC Maps components
//
// You can find them here: https://www.tmssoftware.com/site/tmsfncmaps.asp
//
// The API I use is here: http://api.open-notify.org/iss-now.json
// I found it via the Free Public APIs site: https://www.freepublicapis.com/iss-current-location
//
//
// The ISS logo image is from Icons8
// - specifically icons8-international-space-station-satellite-with-multiples-charging-solar-panel-green
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(*

  This is what the returned JSON looks like from the API...

{
    "message": "success",
    "iss_position": {
        "latitude": "31.0865",
        "longitude": "-138.6526"
    },
    "timestamp": 1734443345
}

*)


type
  TForm1 = class(TForm)
    RESTClient1: TRESTClient;
    RESTRequest1: TRESTRequest;
    RESTResponse1: TRESTResponse;
    TMSFNCMaps1: TTMSFNCMaps;
    Panel1: TPanel;
    FindISSButton: TButton;
    Timer1: TTimer;
    ToggleSwitch1: TToggleSwitch;
    MarkerImage: TImage;
    procedure FindISSButtonClick(Sender: TObject);
    procedure FormCloseQuery(Sender: TObject; var CanClose: Boolean);
    procedure FormCreate(Sender: TObject);
    procedure Timer1Timer(Sender: TObject);
  private
    FMarkerLogo:  string;
    procedure ExtractLogoToFolder;
    procedure DoISSTracking;
  end;

var
  Form1: TForm1;

implementation
uses System.IOUtils, modules.tracking;

{$R *.dfm}

procedure TForm1.FindISSButtonClick(Sender: TObject);
begin
  DoISSTracking;
end;

procedure TForm1.FormCloseQuery(Sender: TObject; var CanClose: Boolean);
begin
  Timer1.Enabled := False;
end;

procedure TForm1.FormCreate(Sender: TObject);
begin
  ExtractLogoToFolder; // graphic to use for marking the ISS on the map
end;

procedure TForm1.Timer1Timer(Sender: TObject);
begin
  FindISSButton.Enabled := True;
  if ToggleSwitch1.IsOn then DoISSTracking;
end;

procedure TForm1.DoISSTracking;
begin
  TrackTheISS(FindISSButton, TMSFNCMaps1, RESTClient1, RESTRequest1, RESTResponse1, Timer1, FMarkerLogo);
end;

procedure TForm1.ExtractLogoToFolder;
begin
  try
    // In order to show a cool "ISS" graphical marker on the map we save out the image to a known
    // location so that the map can find it...
    var tmpName: string := TPath.GetFileNameWithoutExtension(ParamStr(0));
    var LMarkerFolder := TPath.GetHomePath + TPath.DirectorySeparatorChar + tmpName + TPath.DirectorySeparatorChar;
    ForceDirectories(LMarkerFolder);
    FMarkerLogo := LMarkerFolder + 'isslogo.png';
    if not FileExists(FMarkerLogo) then MarkerImage.Picture.SaveToFile(FMarkerLogo);
  except
    FMarkerLogo := '';
  end;
end;

end.
