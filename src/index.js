import React from 'react'
import AutosuggestDropdown from '../AutosuggestDropdown'

const ReactAutoSuggestDropdown = (props) => {
    return(
      <div>
        <input
            className='standard-input-field'
            placeholder='Start typing or select'
            value={props.searchValue}
            onFocus={props.showDropdown}
            onChange={props.updateSearchValue}
          />
          <AutosuggestDropdown
            itemsToDisplay={(props.list.length) ? props.list : null}
            displayDropdown={props.displayDropdownMenu}
            searchFor={props.searchValue}
            chooseDropdownItem={props.chooseDropdownItem}
            highlightColour={props.highlightColour}
          />
        </div>
    )
}

export default ReactAutoSuggestDropdown