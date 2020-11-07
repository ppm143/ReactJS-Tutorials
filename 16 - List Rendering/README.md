># List Rendering

```js
import React from 'react'

function NameList() {
    const persons = [ 
        {
            name:'Parth1',
            age:'22'
        },
        {
            name: 'Parth2',
            age: '22'
        },
        {
            name: 'Parth3',
            age: '22'
        },
        {
            name: 'Part4',
            age: '22'
        },
    ];

let personList = persons.map(person => <h2>I am {person.name} and {person.age} years old</h2>)
    return <div>{personList}</div>
}

export default NameList

```
