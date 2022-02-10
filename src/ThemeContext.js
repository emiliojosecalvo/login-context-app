import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { isLightTheme: true }
        this.toggleTheme = this.toggleTheme.bind(this);
    }
    toggleTheme() {
        this.setState({ isLightTheme: !this.state.isLightTheme });
    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}