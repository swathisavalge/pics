import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }
    render() {
        return(
            <div className="ui segment" >
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field" >
                        <label className="label">Image Search:</label>
                        <input 
                            className='searchText' 
                            type='text' 
                            value={this.state.term}
                            onChange={(e) => this.setState({term: e.target.value})} 
                            placeholder="Type name here to see relevent images"/>
                    </div> 
                </form>
            </div>
            
        );
    }

}

export default SearchBar;