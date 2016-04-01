# orderd-array-remove-all
Removed all occurrence of an element from array by keeping order of elements inside array

## Install

```sh
$ npm install --save orderd-array-remove-all
```

## Example

```js
var remove = require('orderd-array-remove-all');

console.log(remove([1, 2, 3, 4, 3], 3));
// -> [1, 2, 4]
```

### `require('orderd-array-remove-all')(array, element)`

**Arguments**:
- `array`: list
- `element`: the element that need to be removed

**Returns**: Returns the updated array after removal of the element

## License

&copy; 2016 Vikram Jadhav. MIT License
