># Component Lifecycle Methods

- Mounting
    - when instance of component is being `created` and `inserted` into the DOM.
    - Methods
      - constructor
      - static getDerivedStateFromProps
      - render
      - componentDidMount
- Updating
    - when a component being `re-render` as a result of `changes` to either its `props or state`.
    - Methods
      - static getDerivedStateFromProps
      - shouldComponentUpdate
      - render
      - getSnapshotBeforeUpdate
      - componentDidUpdate
- Unmounting
    - when component being `removed` from DOM.
    - Methods
      - componentWillUnmount
- Error Handling
  
    - when there is a `error` during rendering, in a lifecycle method, or in the `constructor of any child component`.
    - Methods
      - static getDerivedStateFromError
      - componentDidCatch
