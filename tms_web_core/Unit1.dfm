object Form1: TForm1
  Width = 828
  Height = 547
  Color = clBlack
  OnCloseQuery = WebFormCloseQuery
  object TMSFNCPanel1: TTMSFNCPanel
    Left = 0
    Top = 0
    Width = 828
    Height = 41
    Align = alTop
    BevelInner = bvNone
    BevelOuter = bvNone
    ParentDoubleBuffered = False
    Color = clBlack
    DoubleBuffered = True
    TabOrder = 0
    Sections = <>
    SectionsAppearance.Font.Charset = DEFAULT_CHARSET
    SectionsAppearance.Font.Color = clWindowText
    SectionsAppearance.Font.Height = -11
    SectionsAppearance.Font.Name = 'Segoe UI'
    SectionsAppearance.Font.Style = []
    Header.Text = 'Header'
    Header.Font.Charset = DEFAULT_CHARSET
    Header.Font.Color = 4539717
    Header.Font.Height = -13
    Header.Font.Name = 'Segoe UI'
    Header.Font.Style = [fsBold]
    Header.Visible = False
    Header.Fill.Color = 16380654
    Footer.Text = 'Footer'
    Footer.Font.Charset = DEFAULT_CHARSET
    Footer.Font.Color = 4539717
    Footer.Font.Height = -13
    Footer.Font.Name = 'Segoe UI'
    Footer.Font.Style = []
    Footer.Fill.Color = 16380654
    GlobalFont.Scale = 1.000000000000000000
    GlobalFont.Style = []
    ExplicitWidth = 866
    object FindISSButton: TWebButton
      AlignWithMargins = True
      Left = 3
      Top = 3
      Width = 96
      Height = 35
      Align = alLeft
      Caption = 'Find the ISS?'
      Color = 15694170
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWhite
      Font.Height = -12
      Font.Name = 'Segoe UI'
      Font.Style = []
      HeightPercent = 100.000000000000000000
      ParentFont = False
      WidthPercent = 100.000000000000000000
      OnClick = FindISSButtonClick
    end
    object WebCheckBox1: TWebCheckBox
      AlignWithMargins = True
      Left = 117
      Top = 3
      Width = 332
      Height = 35
      Margins.Left = 15
      Align = alLeft
      Caption = 'Automatic tracking?'
      ChildOrder = 2
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWhite
      Font.Height = -12
      Font.Name = 'Segoe UI'
      Font.Style = []
      HeightPercent = 100.000000000000000000
      ParentFont = False
      WidthPercent = 100.000000000000000000
    end
  end
  object TMSFNCMaps1: TTMSFNCMaps
    Left = 0
    Top = 41
    Width = 828
    Height = 506
    Align = alClient
    ParentDoubleBuffered = False
    DoubleBuffered = True
    TabOrder = 1
    Polylines = <>
    Polygons = <>
    Circles = <>
    Rectangles = <>
    Markers = <>
    ElementContainers = <>
    Labels = <>
    HeadLinks = <>
    Options.DefaultLatitude = 40.689247000000000000
    Options.DefaultLongitude = -74.044502000000000000
    Options.DefaultZoomLevel = 12.000000000000000000
    Service = msOpenLayers
    LocalFileAccess = True
    ExplicitWidth = 866
    ExplicitHeight = 918
  end
  object Timer1: TWebTimer
    Enabled = False
    Interval = 10000
    OnTimer = Timer1Timer
    Left = 696
    Top = 8
  end
  object WebRESTClient1: TWebRESTClient
    LoginHeight = 0
    LoginWidth = 0
    ResponseType = rtText
    OnRequestResponse = WebRESTClient1RequestResponse
    Left = 752
    Top = 8
  end
end
