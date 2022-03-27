import React, { Component } from 'react';
import styles from './search.module.css'
class InputFiled extends Component {
    inputRef = React.createRef();


    handleSubmit = (e) => {
        e.preventDefault();
        const text = this.inputRef.current.value;
        text && this.props.query(text);
    }
    render() {
        return (
            <form className={styles.form}onSubmit={this.handleSubmit}>
                    <i class="fa-brands fa-youtube"></i>
                    <span className={styles.mainbtn}>YouTube</span>
                <input className={styles.input}
                    type="text"
                    ref={this.inputRef}
                 />
                <button className={styles.searchbtn}><i class="fa-solid fa-magnifying-glass"></i></button>

            </form>
        );
    }
}

export default InputFiled;