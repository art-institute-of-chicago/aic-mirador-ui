import React, { Component } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
//import { getViewer } from 'mirador/dist/es/src/state/selectors';
import * as actions from 'mirador/dist/es/src/state/actions';
import {
  getSequenceViewingDirection,
  getNextCanvasGrouping,
  getPreviousCanvasGrouping,
} from 'mirador/dist/es/src/state/selectors';
import ns from 'mirador/dist/es/src/config/css-ns';

//custom icons
const PrevIcon = (props) => (
  <SvgIcon {...props}>
    <svg viewBox="0 0 24 24" id="icon--arrow--24" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 5.55c1.915 2.632 3.343 4.542 4.57 6.45-1.227 1.908-2.655 3.817-4.57 6.45l1.2.55c2.229-2.46 4.143-4.57 5.8-6.71v-.58C14.342 9.57 12.429 7.46 10.2 5z" fill="currentColor">
      </path>
    </svg>
  </SvgIcon>
);

const NextIcon = (props) => (
  <SvgIcon {...props}>
    <svg viewBox="0 0 24 24" id="icon--arrow--24" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 5.55c1.915 2.632 3.343 4.542 4.57 6.45-1.227 1.908-2.655 3.817-4.57 6.45l1.2.55c2.229-2.46 4.143-4.57 5.8-6.71v-.58C14.342 9.57 12.429 7.46 10.2 5z" fill="currentColor">
      </path>
    </svg>
  </SvgIcon>
);

class NavigationButtonsPlugin extends Component {
  render() {
    const {
      hasNextCanvas, hasPreviousCanvas, setNextCanvas, setPreviousCanvas, t, viewingDirection,
    } = this.props;

    let htmlDir = 'ltr';
    let previousIconStyle = {};
    let nextIconStyle = {};
    switch (viewingDirection) {
      case 'top-to-bottom':
        previousIconStyle = { transform: 'rotate(270deg)' };
        nextIconStyle = { transform: 'rotate(90deg)' };
        break;
      case 'bottom-to-top':
        previousIconStyle = { transform: 'rotate(90deg)' };
        nextIconStyle = { transform: 'rotate(270deg)' };
        break;
      case 'right-to-left':
        htmlDir = 'rtl';
        previousIconStyle = {};
        nextIconStyle = { transform: 'rotate(180deg)' };
        break;
      default:
        previousIconStyle = { transform: 'rotate(180deg)', position: 'relative', left: 5};
        nextIconStyle = {};
    }

    // to do: convert ButtonGroup and Buttons to ToggleButtonGroup
    return (
      <div style={{position: 'absolute', bottom: 150, right: 100, zIndex:500}}>
        <ButtonGroup variant="contained" color="primary">
          <Button startIcon={<PrevIcon  style={previousIconStyle} />} aria-label={t('previousCanvas')}
          className={ns('previous-canvas-button')}
          disabled={!hasPreviousCanvas}
          onClick={() => { hasPreviousCanvas && setPreviousCanvas(); } }></Button>
          <Button startIcon={<NextIcon style={nextIconStyle} />} aria-label={t('nextCanvas')}
          className={ns('next-canvas-button')}
          disabled={!hasNextCanvas}
          onClick={() => { hasNextCanvas && setNextCanvas(); }}></Button>
        </ButtonGroup>
    </div>
    );
  }
}

const mapStateToProps = (state, { windowId }) => (
  {
    hasNextCanvas: !!getNextCanvasGrouping(state, { windowId }),
    hasPreviousCanvas: !!getPreviousCanvasGrouping(state, { windowId }),
    viewingDirection: getSequenceViewingDirection(state, { windowId }),
  }
);

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestForm
 * @private
 */
const mapDispatchToProps = (dispatch, { windowId }) => ({
  setNextCanvas: (...args) => dispatch(actions.setNextCanvas(windowId)),
  setPreviousCanvas: (...args) => dispatch(actions.setPreviousCanvas(windowId)),
});

export default {
  component: NavigationButtonsPlugin,
  mapStateToProps: mapStateToProps,
  mapDispatchToProps: mapDispatchToProps,
  target: 'OpenSeadragonViewer',
  mode: 'add',
};

