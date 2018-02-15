import React, { Component } from 'react'
import AutosuggestDropdown from './AutosuggestDropdown'

class ReactAutoSuggestDropdown extends Component{

  constructor () {
    super()
    this.state = {
      searchValue: '',
      showDropdown: false
    }
    this.showDropdown = this.showDropdown.bind(this)
    this.updateSearchValue = this.updateSearchValue.bind(this)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.showDropdown !== undefined){
      this.setState({ showDropdown: nextProps.showDropdown })
    }
  }

  showDropdown () {
    this.setState({ showDropdown: true })
  }

  updateSearchValue (e) {
    e.preventDefault()
    this.setState({ searchValue: e.target.value })
  }

  render(){
    return(
      <div>
        <input
            className='standard-input-field'
            placeholder='Start typing or select'
            onFocus={this.showDropdown}
            onChange={this.updateSearchValue}
            value={this.props.chosenValue}
          />
          <AutosuggestDropdown
            itemsToDisplay={(this.props.list.length) ? this.props.list : null}
            displayDropdown={this.state.showDropdown}
            searchFor={this.state.searchValue}
            chooseDropdownItem={this.props.chooseDropdownItem}
          />
        </div>
    )
  }
}

export default ReactAutoSuggestDropdown