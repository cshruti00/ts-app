import * as React from 'react';
import {Themes} from "../../types/ThemeType";
import './ThemeSelector.scss';

interface ThemeSelectorStateProp {
    selectedTheme: string
}

class ThemeSelector extends React.Component<any, ThemeSelectorStateProp> {
    constructor(props: ThemeSelectorStateProp){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: any){
        this.props.setTheme({selectedTheme : event.target.value})
    }

    render() {
        return (<div className="themes">
            <form onChange={this.handleChange}>
                <select name="themes" id="theme">
                    <option value={Themes.DARK} >Singapore</option>
                    <option value={Themes.LIGHT}>India</option>
                </select>
            </form>
        </div>)
    }
}

export default ThemeSelector;