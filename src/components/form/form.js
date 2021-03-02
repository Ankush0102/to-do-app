import React from 'react'
import styles from './form.module.css'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: "",
            desc: "",
            dueDate: "",
        }
    }

    render() {
        return (
            <div className={styles.main_div}>
                <div>
                    <input type="text" value={this.state.todo} placeholder="Add task..." onChange={(evt) => { this.setState({ todo: evt.target.value }) }} />
                </div>
                <div>
                    <input type="text" value={this.state.desc} placeholder="explain about the task.." onChange={(evt) => { this.setState({ desc: evt.target.value }) }} />
                </div>
                <div>
                    <input type="date" value={this.state.dueDate} onChange={(evt) => { this.setState({ dueDate: evt.target.value }) }} />
                </div>
                <button onClick={() => this.props.addList(this.state)}>Add Items</button>
            </div>
        )
    }
}


export default Form;
