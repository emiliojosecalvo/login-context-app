import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function PageContent(props) {
    const { isLightTheme } = useContext(ThemeContext);
    const styles = {
        backgroundColor: isLightTheme ? '#e7e7e7' : '#000',
        height: '100vh',
        width: '100vw'
    }
    return (
        <div style={styles}>{this.props.children}</div>
    )
}
