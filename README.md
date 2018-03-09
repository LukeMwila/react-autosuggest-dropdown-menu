# react-autosuggest-dropdown-menu

An autosuggest dropdown menu that highlights the matching characters.

## Installation

  ```bash
  npm install react-autosuggest-dropdown-menu --save
  ```
  or
  ```bash
  yarn add react-autosuggest-dropdown-menu
  ```

## Usage

```js
import ReactAutoSuggestDropdown from 'react-autosuggest-dropdown-menu'

class App extends Component {
  constructor () {
    super()
    this.state = {
      showDropdown: false,
      list: [
        {
          valueToSearch: "James Brown",
          age: 23
        },
        {
          valueToSearch: "Mariaha Carey",
          age: 27
        },
        {
          valueToSearch: "Jim Carey",
          age: 63
        },
        {
          valueToSearch: "Jimmy Marvolo Riddle",
          age: 33
        },
        {
          valueToSearch: "Mark Hamil",
          age: 21
        },
        {
          valueToSearch: "Sammy Crane",
          age: 19
        },
        {
          valueToSearch: "Sally Johnson",
          age: 22
        }
      ]
    }

    this.chooseDropdownItem = this.chooseDropdownItem.bind(this)
    this.updateSearchValue = this.updateSearchValue.bind(this)
    this.showDropdown = this.showDropdown.bind(this)
  }

  chooseDropdownItem (e, valueSelected, valueObject) {
    e.preventDefault()
    this.setState({ showDropdown: false, searchValue: valueSelected })
  }

  updateSearchValue(e){
    e.preventDefault()
    this.setState({ searchValue: e.target.value })
  }

  showDropdown(){
    this.setState({ showDropdown: true })
  }

  render() {
    return (
      <div className='App'>
       <ReactAutoSuggestDropdown 
          list={this.state.list} 
          showDropdown={this.showDropdown} 
          displayDropdownMenu={this.state.showDropdown}
          chosenValue={this.state.chosenValue} 
          chooseDropdownItem={this.chooseDropdownItem} 
          updateSearchValue={this.updateSearchValue}
          searchValue={this.state.searchValue}
          highlightColour={"#ff9966"}
        />
       </div>
    );
  }
}

export default App;
```

#### ReactAutoSuggestDropdown props

| Props              | Default values | Possible values                          |
| -------------------| --------------| ------------------------------------------|
| list               | none          | array                                     |
| showDropdown       | none          | function                                  |
| displayDropdownMenu| false         | bool                                      |
| chosenValue        | none          | any                                       |
| searchValue        | none          | any                                       |
| chooseDropdownItem | none          | function                                  |
| updateSearchValue  | none          | function                                  |
| highlightColour    | "#00cc99"     | string                                    |