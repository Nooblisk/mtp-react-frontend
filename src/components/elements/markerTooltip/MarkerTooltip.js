import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-leaflet';
import { isNilOrEmpty } from '../../../utils/lomda';
import { costsDictionary } from '../../../constants/costs';

export default class MarkerTooltip extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        selected: PropTypes.bool,
    };

    static defaultProps = {};

    render() {
        const { id, name, selected, ...data } = this.props;

        return (
            <Tooltip>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span>{`id: ${id}`}</span>
                    <span>{`название: ${name}`}</span>
                    {
                        !selected && (
                            <>
                                {
                                    Object.entries(costsDictionary).map(([name, description]) => {
                                            const value = data[name];
                                            if (isNilOrEmpty(value)) {
                                                return null;
                                            }

                                            return (
                                                <span key={`${id}_${name}`}>{`${description}: ${value}`}</span>
                                            );
                                        },
                                    )

                                }
                            </>
                        )
                    }
                </div>
            </Tooltip>
        );
    }
}
