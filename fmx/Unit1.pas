unit Unit1;

interface

uses
  System.SysUtils, System.Types, System.UITypes, System.Classes, System.Variants,
  FMX.Types, FMX.Controls, FMX.Forms, FMX.Graphics, FMX.Dialogs,
  FMX.StdCtrls, FMX.Controls.Presentation, FMX.TMSFNCTypes,
  FMX.TMSFNCUtils, FMX.TMSFNCGraphics, FMX.TMSFNCGraphicsTypes,
  FMX.TMSFNCMapsCommonTypes, FMX.TMSFNCCustomControl, FMX.TMSFNCWebBrowser,
  FMX.TMSFNCMaps, FMX.Objects, REST.Types, REST.Client,
  Data.Bind.Components, Data.Bind.ObjectScope;


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
    Panel1: TPanel;
    FindISSButton: TButton;
    ToggleSwitch1: TSwitch;
    TMSFNCMaps1: TTMSFNCMaps;
    StyleBook1: TStyleBook;
    Label1: TLabel;
    MarkerImage: TImage;
    RESTClient1: TRESTClient;
    RESTRequest1: TRESTRequest;
    RESTResponse1: TRESTResponse;
    Timer1: TTimer;
    procedure Timer1Timer(Sender: TObject);
    procedure FindISSButtonClick(Sender: TObject);
    procedure FormCloseQuery(Sender: TObject; var CanClose: Boolean);
    procedure FormCreate(Sender: TObject);
  private
    FMarkerLogo:  string;
    procedure ExtractLogoToFolder;
    procedure DoISSTracking;
  end;

var
  Form1: TForm1;

implementation
uses
  System.IOUtils,  // For TPath
  modules.tracking;

{$R *.fmx}

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
  if ToggleSwitch1.IsChecked then DoISSTracking;
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
    if not FileExists(FMarkerLogo) then MarkerImage.Bitmap.SaveToFile(FMarkerLogo);
  except
    FMarkerLogo := '';
  end;
end;

end.
