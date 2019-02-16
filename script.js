class List extends React.Component {
    constructor(){
        super()
        this.changeHandler1 = this.changeHandler1.bind(this);
        this.changeHandler2 = this.changeHandler2.bind(this);
        this.changeHandler3 = this.changeHandler3.bind(this);
        this.changeHandler4 = this.changeHandler4.bind(this);
        this.changeHandler5 = this.changeHandler5.bind(this);
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
    }

    state = {
        list : [],
        done : [],
        word : "",
        indexRemove : "",
        indexEdit : "",
        indexDone : "",
        displayEdit: ""
    }

    changeHandler1(event){
        this.setState({word:event.target.value});
    }

    changeHandler2(event){
        this.setState({indexRemove:event.target.value});
    }

    changeHandler3(event){
        this.setState({indexEdit:event.target.value});
    }

    changeHandler4(event){
        this.setState({displayEdit:event.target.value});
    }

    changeHandler5(event){
        this.setState({indexDone:event.target.value});
    }

    handleClick1() {
        let tempList = [...this.state.list];
        tempList.push(this.state.word);
        this.setState({list: tempList});
        this.setState({word: ""});
    }

    handleClick2() {
        let tempList = [...this.state.list];
        tempList.splice(parseInt(this.state.indexRemove)-1, 1);
        this.setState({list: tempList});
        this.setState({indexRemove: ""});
    }

    handleClick3() {
        let tempList = [...this.state.list];
        tempList[parseInt(this.state.indexEdit)-1] = this.state.displayEdit;
        this.setState({list: tempList});
        this.setState({indexEdit: ""});
        this.setState({displayEdit: ""});
    }

    handleClick4() {
        let tempList = [...this.state.list];
        let tempDone = [...this.state.done];
        tempDone.push(tempList[parseInt(this.state.indexDone)-1]);
        tempList.splice(parseInt(this.state.indexDone)-1, 1);;
        this.setState({list: tempList});
        this.setState({done: tempDone});
        this.setState({indexDone: ""});
    }

    render() {
      // render the list with a map() here
        const divStyle = {
            margin: "20px"
        }

        let itemsElements = this.state.list.map(item => {
                              return <li>{item}</li>
                             });
        let items = this.state.done.map(item => {
                              return <li>{item}</li>
                             });

            return (
                <div className="list">
                    <div style={divStyle}>
                        <input onChange={this.changeHandler1} value={this.state.word}/> <br/>
                        <button onClick={this.handleClick1} > add item </button>
                    </div>
                    <div style={divStyle}>
                         <label> No: </label> <br/>
                        <input onChange={this.changeHandler2} value={this.state.indexRemove}/> <br/>
                        <button onClick={this.handleClick2} > remove item </button>
                    </div>
                    <div style={divStyle}>
                        <label> No: </label> <br/>
                        <input onChange={this.changeHandler3} value={this.state.indexEdit}/> <br/>
                        <label> Content: </label> <br/>
                        <input onChange={this.changeHandler4} value={this.state.displayEdit}/> <br/>
                        <button onClick={this.handleClick3} > edit item </button>
                    </div>
                    <div style={divStyle}>
                        <label> No: </label> <br/>
                        <input onChange={this.changeHandler5} value={this.state.indexDone}/> <br/>
                        <button onClick={this.handleClick4} > item done </button>
                    </div>
                    <div style={divStyle}>
                        <h3> List of todo </h3>
                        <ol>
                            {itemsElements}
                        </ol>
                        <h3> Done Item List </h3>
                        <ol>
                            {items}
                        </ol>
                    </div>
                </div>
            );
        }
    }

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);