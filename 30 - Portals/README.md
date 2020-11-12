># Portals

- React portal provide a way to `render children into the DOM node that exits outside DOM hierarchy`

1. In index.html write element with id `portal-root` like `<div id="portal-root"></div>`
2. Create New component **PortalDemo.js**.

```js
import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
	return ReactDOM.createPortal(
		<h1>Portals Demo</h1>,
		document.getElementById('portal-root')
	)
}

export default PortalDemo

```
3. Import PortalDemo component into `App.js`
4. In PortalDemo include `ReactDOM.createPortal()`.

>## Why do we need portal?
- having a deal with parent component css when child component is a model, pop-up or tooltip.

- [Click Here For Demo of Portals](https://codesandbox.io/s/00254q4n6p)

- [Portal Event Bubbling](https://codepen.io/gaearon/pen/jGBWpE)
