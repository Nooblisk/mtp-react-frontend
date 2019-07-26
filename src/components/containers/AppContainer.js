import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './AppContainer.module.css';

export default class AppContainer extends Component {
    static propTypes = {
        children: PropTypes.node,
    };


    render() {
        return (
            <div className={styles.wrapper}>
                {this.props.children}
            </div>
        );
    }
}
