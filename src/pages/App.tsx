import React from 'react'
import logo from './logo.svg'
import './App.css'
import rx, { Subject } from 'rxjs'

function App() {
  const subject = new Subject()
  subject.subscribe(
    (item) => console.log('next', item),
    (err: Error) => console.error(err),
    () => console.log('a complete')
  )
  subject.next('item')
  subject.complete()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
