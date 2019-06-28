import React from 'react';

class Poem extends React.Component {

	state = {
		clicked: false
	}

handleOnClick = () => {
	this.setState({clicked: !this.state.clicked})
}



  render() {

console.log(this.state.clicked)

    return (
      <div style={{color: "black"}} onClick={this.handleOnClick}>
        <h3>{this.props.poemData.title}</h3>
        <p>{this.props.poemData.content}</p>
        <strong>- By {this.props.poemData.author}</strong>
      </div>
    ); 
  }
}

export default Poem;
