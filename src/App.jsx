
import { useState, useEffect, useRef } from 'react';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import Parent  from './components/parent';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const inputRef = useRef(null);
  const countRef =useRef(0);

  function increseRef(){
    countRef.current +=1;
    console.log(countRef.current);
  }
  function focusInput(){
     inputRef.current.focus();
  }
  const [users, setUsers] = useState([
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Bob', age: 35 }
  ]);

  useEffect(() => {
    console.log('Component mounted');
  }, [name]);

  function deleteUser(id) {
    setUsers(prevUsers =>
      prevUsers.filter(user => user.id !== id)
    );
  }

  function addUser(e) {
    e.preventDefault();

    const trimmedName = name.trim();
    const numericAge = Number(age);

    if (!trimmedName || age === '' || numericAge <= 0) {
      return;
    }

    const newUser = {
      id: Math.max(0, ...users.map(user => user.id)) + 1,
      name: trimmedName,
      age: numericAge
    };

    setUsers(prevUsers => [...prevUsers, newUser]);

    setName('');
    setAge('');
  }

  useEffect(() => {
  console.log("Count changed:", count);
}, [count]);

  function increaseCount() {
    setCount(prevCount => prevCount + 2);
  }

  return (
    <>
       <div>
        <Parent lists={users} deleteList={deleteUser}/>
      </div>
      <section id="center">
        <div className="hero">
          <img
            src={heroImg}
            className="base"
            width="170"
            height="179"
            alt=""
          />
          <img
            src={reactLogo}
            className="framework"
            alt="React logo"
          />
          <img
            src={viteLogo}
            className="vite"
            alt="Vite logo"
          />
        </div>

        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR.
          </p>
        </div>

        <button
          type="button"
          className="counter"
          onClick={increaseCount}
        >
          Count is {count}
        </button>

        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} is {user.age} years old.
              {' '}
              <button
                type="button"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>

      <form onSubmit={addUser}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter Name"
            required
          />
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={e => setAge(e.target.value)}
            placeholder="Enter Age"
            min="1"
            required
          />
        </div>

        <button type="submit">Add User</button>
      </form>
      
      <input ref={inputRef} placeholder='Enter your name'></input>
      <button onClick={focusInput}> Focus Input</button>
      <div className="ticks"></div>


      <div>
        <p>{countRef.current}</p>
        <button onClick={increseRef}>Click Ref</button>
      </div>
   
    </>
  );
}

export default App;
