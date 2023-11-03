import { Component } from "react";


export class Moon extends Component {
    state={
        userInput: '',
        todoList: []
    }

    addText(e){
        this.setState({userInput: e})
        console.log(e)
    }

    addItem(e){
        if(e === ''){
            alert('Please, enter your text!')
        } else {
        let userText = this.state.todoList;
        userText.push(e);
        this.setState({todoList:userText, userInput: ''})
        console.log(e)
        }
    }

    crossedWord(e){
        const li = e.target; // eventListener
        li.classList.toggle('crossed');
    }

    deleteItem(){
        this.setState({todoList: []})
    }
    formSubmit(e){
        e.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.formSubmit}>
            <div className={'container'}>
                <h1 className={'heading'}>ToDo List</h1>
                <input type="text"
                placeholder="Type your text..."
                onChange={(e) => {this.addText(e.target.value)}}
                value={this.state.userInput}
                />
                <div>
                    <ul className={'cover-ul'}>
                        {this.state.todoList.map((item, id) => (
                            <li onClick={this.crossedWord} key={id}><span>◯</span>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={'buttons'}>
                    <button onClick={() => this.addItem(this.state.userInput)}>Add</button>
                    <button onClick={() => this.deleteItem(this.state.todoList)}>Delete</button>
                </div>
            </div>
            </form>
        )
    }
}