import mirador from 'mirador/dist/es/src/index';
import aicZoomButtonsPlugin from '../../src/plugins/aicZoomButtonsPlugin';
import aicNavigationButtonsPlugin from '../../src/plugins/aicNavigationButtonsPlugin';

const config = {
  id: 'demo',
  selectedTheme: 'aicTheme',
    themes: {
    aicTheme:{
      palette: {
        type: 'dark',
        primary: {
          main: '#6F2562',
          dark: '#000000',
        },
        secondary: {
          main: '#000000',
        },
        shades: {
          dark: '#000000',
          main: '#000000',
          light: '#000000',     
        },
      },
      typography:{
        fontFamily: ['SabonLTPro-Roman',
                    'SabonLTPro-Roman'
                    ],
      },
    },
    dark: {
      palette: {
        type: 'dark',
        primary: {
          main: '#B50938',
        },
      },
    },
  },
  language: 'en',
  windows: [{
    loadedManifest: 'https://iiif.bodleian.ox.ac.uk/iiif/manifest/e32a277e-91e2-4a6d-8ba6-cc4bad230410.json',
    //thumbnailNavigationPosition: 'far-bottom',
  }],
  thumbnailNavigation: {
    defaultPosition: 'far-bottom', // Which position for the thumbnail navigation to be be displayed. Other possible values are "far-bottom" or "far-right"
    height: 130, // height of entire ThumbnailNavigation area when position is "far-bottom"
    width: 100, // width of one canvas (doubled for book view) in ThumbnailNavigation area when position is "far-right"
  },
  window: {
    allowClose: false, // Configure if windows can be closed or not
    allowFullscreen: false, // Configure to show a "fullscreen" button in the WindowTopBar
    allowTopMenuButton: false,
    allowWindowSideBar: false,
    allowMaximize: false, // Configure if windows can be maximized or not
    sideBarPanel: 'info', // Configure which sidebar is selected by default. Options: info, attribution, canvas, annotations, search
    defaultView: 'single',  // Configure which viewing mode (e.g. single, book, gallery) for windows to be opened in
    hideWindowTitle: true, // Configure if the window title is shown in the window title bar or not
    sideBarOpen: false, // Configure if the sidebar (and its content panel) is open by default
    panels: { // Configure which panels are visible in WindowSideBarButtons
      info: false,
      attribution: false,
      canvas: false,
      annotations: false,
      search: false,
      layers: false,
    },
  },
  workspace: {
    showZoomControls: false, // Configure if zoom controls should be displayed by default
    type: 'mosaic',
  },
   workspaceControlPanel: {
     enabled: false,
  },
}

const miradorInstance = mirador.viewer(config, [
  aicZoomButtonsPlugin, aicNavigationButtonsPlugin
]);
