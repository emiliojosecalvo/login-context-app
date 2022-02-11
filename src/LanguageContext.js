import React, { Component, createContext } from "react";

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { language: 'spanish' };
        this.chooseLanguage = this.chooseLanguage.bind(this);
    }
    chooseLanguage(newLanguage) {
        this.setState({ language: newLanguage });
    }
    render() {
        return (
            <LanguageContext.Provider value={{ ...this.state, chooseLanguage: this.chooseLanguage }}>
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}