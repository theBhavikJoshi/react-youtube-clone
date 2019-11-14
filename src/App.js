import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {

  render() {
    return (
      <div className='ui container'>
        <div className='ui segment'>
          <SearchBar />
        </div>
      </div>
    )
  }

}

export default App;