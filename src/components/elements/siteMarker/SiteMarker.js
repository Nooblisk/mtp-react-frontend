import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-leaflet';

export default class SiteMarker extends Component {
    static propTypes = {
        children: PropTypes.node,
        id: PropTypes.number.isRequired,
        position: PropTypes.arrayOf(PropTypes.number).isRequired,
    };

    handleClick = id => () => {
        if (this.props.handleMarkerClick) {
            this.props.handleMarkerClick(id);
        }
    };

    render() {
        const { id, position, icon, children } = this.props;

        return (
            <Marker
                position={position}
                icon={icon}
                onClick={this.handleClick(id)}
            >
                {children}
            </Marker>
        );
    }
}
