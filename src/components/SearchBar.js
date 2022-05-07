import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label>video search</label>
            <input
              value={this.state.term}
              onChange={(event) => {
                this.setState({ term: event.target.value });
              }}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
