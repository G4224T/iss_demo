program iss_demo_vcl;

uses
  Vcl.Forms,
  Unit1 in 'Unit1.pas' {Form1},
  Vcl.Themes,
  Vcl.Styles,
  modules.tracking in '..\shared\modules.tracking.pas';

{$R *.res}

begin
  Application.Initialize;
  Application.MainFormOnTaskbar := True;
  TStyleManager.TrySetStyle('Windows11 Impressive Dark');
  Application.CreateForm(TForm1, Form1);
  Application.Run;
end.
