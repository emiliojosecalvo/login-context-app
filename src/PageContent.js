import React, { Component } from 'react';
import { ThemeContext } from './ThemeContext';

export default class PageContent extends Component {
    static contextType = ThemeContext;

    render() {
        const { isLightTheme } = this.context;
        const styles = {
            backgroundColor: isLightTheme ? '#e7e7e7' : '#000',
            height: '100vh',
            width: '100vw'
        }
        return (
            <div style={styles}>{this.props.children}</div>
        )
    }
}
