# date-input

Date input react component

## Usage

### Install
```
npm i @react-ag-components/date-input --save
```
### Use in your project
```
import DateInput from '@react-ag-components/date-input'
```

```
handle = (date) => {
  console.log(date)
}


<DateInput
  id="dob"
  label="Date of birth"
  handle={this.handle}
/>

```

### Properties


## Contributing

Get the repository
```
git clone https://github.com/alphillips/date-input.git
```

Update dependencies
```
npm install
```

Run the project
```
npm start
```

### Deploy to npm
#### Build
`npm run build -- --copy-files`

#### Publish
`npm publish --access public`
