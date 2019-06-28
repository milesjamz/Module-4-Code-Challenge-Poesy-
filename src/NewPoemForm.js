import React from 'react';

class NewPoemForm extends React.Component {
  state = {
    newTitle: '',
    newContent: '',
  }

  handleTitleChange = (e) => {
      this.setState({ newTitle: e.target.value })
    }

  handleContentChange = (e) => {
      this.setState({ newContent: e.target.value })
    }

  render(){
    
    return (
      <div className="new-poem">
        <form className="new-poem-form" onSubmit={this.props.submitAPoem}>
          <input placeholder="Name your masterpiece..." 
                    onChange={this.handleTitleChange} 
                    value={this.state.newTitle} />
          <textarea placeholder="Your masterpiece belongs here..." 
                    onChange={this.handleContentChange} 
                    value={this.state.newContent} />
          <input type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    ); 
  }
}

export default NewPoemForm;