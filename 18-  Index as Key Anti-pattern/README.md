>#  Index as Key Anti-pattern

## When to use Index as a Key
- The items in your list do not have unique id.
- The list is a static list and will not change.
- The list never be reordered or filtered.

```js
import React from 'react'

function NameList() {
    const names = [ 'Parth', 'PPM', 'XYZ', 'PQR'];

    let nameList = names.map((name,index) => <h2 key={index}>{name}</h2>)
    return <div>{nameList}</div>
}

export default NameList
```
  