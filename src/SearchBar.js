import React from 'react';

class SearchBar extends React.Component {
  state = { searchQuery: '' }

  onSearchQueryChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchFormSubmit(this.state.searchQuery);
  }

  render() {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={(e) => this.onFormSubmit(e)}>
          <div className='field'>
            <label>Search for Videos</label>
            <input placeholder="Enter a term to Search" type="text" value={this.state.searchQuery} onChange={(e) => this.onSearchQueryChange(e)} />
          </div>
        </form>
      </div>
    );
  }

}

export default SearchBar;