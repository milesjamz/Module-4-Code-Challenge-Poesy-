import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {

  state = {
    currentUser: '',
    poemsList: [],
    loggedIn: false
  }

  componentWillMount() {
    fetch('http://localhost:3000/poems')
    .then(resp => resp.json())
    .then(parsedJson => {
      console.log(parsedJson)
      this.setState({ poemsList: parsedJson })
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.setState({ currentUser: e.target[0].value })
    console.log(this.state.currentUser)
    this.setState({ loggedIn: !this.state.loggedIn })
  }

  logOut = () => {
    this.setState({ currentUser: '', loggedIn: false })
  }

  whichThingToShow = () => {
    return this.state.loggedIn === false ? <LoginForm handleOnSubmit={this.handleOnSubmit} /> : <UserHeader logOut={this.logOut} userName={this.state.currentUser}/>
  }

  handlePoemSubmission = (e) => {
    e.preventDefault()
    if (this.state.loggedIn === true) {
      let newPoem = {
          id: 100,
          title: e.target[0].value,
          content: e.target[1].value,
          author: this.state.currentUser
      }

      let newPoemList = [...this.state.poemsList, newPoem]

      this.setState ({ poemsList: newPoemList})

    } else { alert("You must log in to post a poem!")}
  }

  render(){
    return (
      <div className="app">
        <div className="sidebar">
          {this.whichThingToShow()}
          <NewPoemForm submitAPoem={this.handlePoemSubmission}/>
        </div>
        <PoemsContainer poems={this.state.poemsList}/>
      </div>
    ); 
  }
}

export default App;
