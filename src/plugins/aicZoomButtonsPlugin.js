import React, { Component } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import { getViewer } from 'mirador/dist/es/src/state/selectors';

const ZoomInIcon = (props) => (
  <SvgIcon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <circle cx="10.5" cy="10.5" r="5.5" fill="none" stroke="currentColor" stroke-linejoin="bevel" stroke-width="1.4"/>
      <line x1="14.5" y1="14.5" x2="19" y2="19" fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="bevel" stroke-width="1.4"/>
      <rect x="10" y="8" width="1" height="5" fill="currentColor"/>
      <rect x="10" y="8" width="1" height="5" transform="translate(21) rotate(90)" fill="currentColor"/>
    </svg>
  </SvgIcon>
);

const ZoomOutIcon = (props) => (
  <SvgIcon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <circle cx="10.5" cy="10.5" r="5.5" fill="none" stroke="currentColor" stroke-linejoin="bevel" stroke-width="1.4"/>
        <line x1="14.5" y1="14.5" x2="19" y2="19" fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="bevel" stroke-width="1.4"/>
      <rect x="10" y="8" width="1" height="5" transform="translate(21) rotate(90)" fill="currentColor"/>
  </svg>
  </SvgIcon>
);

class ZoomButtonsPlugin extends Component {
  /**
   * constructor -
   */
  constructor(props) {
    super(props);

    this.handleZoomInClick = this.handleZoomInClick.bind(this);
    this.handleZoomOutClick = this.handleZoomOutClick.bind(this);
  }

  /**
   * @private
   */
  handleZoomInClick() {
    const { windowId, updateViewport, windowViewProperties } = this.props;

    updateViewport(windowId, {
      zoom: windowViewProperties.zoom * 2,
    });
  }

  /**
   * @private
   */
  handleZoomOutClick() {
    const { windowId, updateViewport, windowViewProperties } = this.props;

    updateViewport(windowId, {
      zoom: windowViewProperties.zoom / 2,
    });
  }

  // to do: convert ButtonGroup and Buttons to ToggleButtonGroup
  // add aria labels to buttons
  render() {
    return (
      <div style={{position: 'absolute', bottom: 150, right: 0, zIndex:500}}>
        <ButtonGroup variant="contained" color="primary">
          <Button startIcon={<ZoomInIcon />} onClick={this.handleZoomInClick}></Button>
          <Button startIcon={<ZoomOutIcon />} onClick={this.handleZoomOutClick}></Button>
        </ButtonGroup>
      </div>
    );
  }
}

/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */
const mapStateToProps = (state, { windowId }) => (
  {
    windowViewProperties: getViewer(state, { windowId }),
  }
);

export default {
  component: ZoomButtonsPlugin,
  mapStateToProps: mapStateToProps,
  target: 'OpenSeadragonViewer',
  mode: 'add',
};

