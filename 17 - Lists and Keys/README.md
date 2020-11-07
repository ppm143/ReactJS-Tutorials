># Lists and Keys
- A `key` is a special string attribute you need to include when creating lists of elements.
- Keys give the elements a `stable identity`.
- Keys help react which items have `changed, are added, or are removed`.
- Help in `efficient update` of the user interface. 

```js
import React from 'react'
function NameList() {
    const persons = [ 
        {
            id: 1,
            name:'Parth1',
            age:'22'
        },
        {
            id: 2,
            name: 'Parth2',
            age: '22'
        },
        {
            id: 3,
            name: 'Parth3',
            age: '22'
        },
        {
            id: 4,
            name: 'Part4',
            age: '22'
        },
    ];

let personList = persons.map(person => <h2 key={person.id}>I am {person.name} and {person.age} years old</h2>)
    return <div>{personList}</div>
}
export default NameList
```

