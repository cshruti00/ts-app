import * as React from 'react';
import './RadioGroup.scss';

class RadioGroup extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e: any) {
        console.log(e.target.value);
    }

    render() {
        return (
            <form onClick={this.handleClick}>
                <div>
                    <input type="radio" value="something 1" name="set1" defaultChecked={true}/>
                    <label>something 1 </label>
                </div>
                <div>
                    <input type="radio" value="something 2" name='set1'/>
                    <label>something 2 </label>
                </div>
                <div>
                    <input type="radio" value="something 3" name='set1'/>
                    <label>something 3 </label>
                </div>
            </form>
        );
    }
}

export default RadioGroup;