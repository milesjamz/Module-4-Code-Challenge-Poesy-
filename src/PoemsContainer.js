import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {


  render(){

    let makeThePoems = () => { 
  		return this.props.poems.map( poem => <Poem key={poem.id} poemData={poem} /> ) 
  	}

    return (
      <div className="poems-container">
      --== Poems ==--
        {makeThePoems()}
      </div>
    ); 
  }
}

export default PoemsContainer;