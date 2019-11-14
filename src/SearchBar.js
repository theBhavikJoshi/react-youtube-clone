import React from 'react';

class SearchBar extends React.Component {
  state = { searchQuery: '' }

  onSearchQueryChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  render() {
    return (
      <form className='ui form'>
        <div className='field'>
          <label>Search for Videos</label>
          <input type="text" value={this.state.searchQuery} onChange={(e) => this.onSearchQueryChange(e)} />
        </div>
      </form>
    );
  }

}

export default SearchBar;