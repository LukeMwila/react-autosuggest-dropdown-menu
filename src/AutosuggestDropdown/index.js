import React, { Component } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import './index.css'

class AutosuggestDropdown extends Component {

  checkForMatch (textBeingChecked) {
    if (textBeingChecked.toUpperCase().indexOf(this.props.searchFor.toUpperCase()) !== -1) {
      let stringToWrap = textBeingChecked.substring(0, this.props.searchFor.length) + ')_' + textBeingChecked.substring(this.props.searchFor.length, textBeingChecked.length)
      return stringToWrap
    } else {
      return textBeingChecked
    }
  }

  checkForExactCharacterMatch(textBeingChecked){
    if(textBeingChecked.substring(0, this.props.searchFor.length).toUpperCase() === this.props.searchFor.toUpperCase()){
      return textBeingChecked.substring(0, this.props.searchFor.length) + ')_' + textBeingChecked.substring(this.props.searchFor.length, textBeingChecked.length)
    }else{
      return textBeingChecked
    }
  }

  itemsToDisplay () {
    let itemsToDisplay = null
    let text
    let newText = []

    if (this.props.itemsToDisplay) {
      if (this.props.searchFor !== '') {
        itemsToDisplay = this.props.itemsToDisplay.filter((item) => {
          if (item.valueToSearch && item.valueToSearch !== null) {
            return item.valueToSearch.substring(0, this.props.searchFor.length).toUpperCase() === this.props.searchFor.toUpperCase()
          }
        })
        if (itemsToDisplay.length) {
          itemsToDisplay = itemsToDisplay.map((item, index) => {
            text = this.checkForExactCharacterMatch(item.valueToSearch)
            if (text.includes(')_')) {
              newText = text.split(')_')
            }

            return <div className='float-left full-width standard-dropdown-menu-item' key={index} onClick={(e) => this.props.chooseDropdownItem(e, item.valueToSearch, item)}>
              {
                (newText.length) ? <div><div className='highlightText'>{ newText[0] }</div>{ newText[1] }</div> : text
              }
            </div>
          })
        }
      }
    }
    return itemsToDisplay
  }

  render () {
    let classes = classnames({
      'standard-dropdown-menu': true,
      'hide-me': !this.props.displayDropdown
    })

    return (
      <div className={classes}>
        { this.itemsToDisplay() }
      </div>
    )
  }
}

AutosuggestDropdown.propTypes = {
  displayDropdown: PropTypes.bool.isRequired,
  searchFor: PropTypes.string.isRequired,
  itemsToDisplay: PropTypes.array
}

export default AutosuggestDropdown
