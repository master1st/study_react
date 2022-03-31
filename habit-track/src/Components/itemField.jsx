import React, { Component } from 'react';

class ItemField extends Component {
    inputRef = React.createRef();

    onSubmit = (e) => {
        e.preventDefault();
        const text = this.inputRef.current.value;
        text && this.props.textData(text);
        this.inputRef.current.value='';
    };

    
    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmit}>
                <input 
                ref={this.inputRef}
                type="text"
                className="add-input"
                placeholder="Habit"/>
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default ItemField;