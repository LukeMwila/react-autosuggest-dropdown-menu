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
  }

  chooseDropdownItem (e, valueSelected, valueObject) {
    this.setState({ showDropdown: false, chosenValue: valueSelected })
    console.log(valueObject)
  }

  render() {
    return (
      <div className='App'>
        <ReactAutoSuggestDropdown 
          list={this.state.list} 
          showDropdown={this.state.showDropdown} 
          chosenValue={this.state.chosenValue} 
          chooseDropdownItem={this.chooseDropdownItem} 
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
| showDropdown       | false         | boolean                                   |
| chosenValue        | none          | any                                       |
| chooseDropdownItem | none          | function                                  |