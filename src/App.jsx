import { useState } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

function App() {
  const [ queue, setQueue ] = useState([]);

  const addTOQueue = ( customer ) => {
    setQueue([...queue, {...customer, id: Date.now(), status: "waiting"}])
  }

  const updateStatus = ( id, newStatus ) => {
    setQueue(queue.map(customer => (
      customer.id === id ? {...customer, status: newStatus} : customer
    )))
  }

  const removeFormQueue = ( id ) => {
    setQueue(queue.filter(customer => customer.id !== id))
  }

  return (
  <div className="app">
    <header>
      <h1>Queue Manager</h1>
      <p>Manage customer with ease....</p>
    </header>
    <main>
      <QueueForm onAdd={ addTOQueue } />
      <QueueDisplay queue={queue} onUpdate={updateStatus} onRemove={removeFormQueue} />
    </main>
  </div>
  )
}

export default App;
