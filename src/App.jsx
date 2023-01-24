
import './App.css'

const users = [
  {
    name: 'Carlos',
    address: 'Rua X',
    age: 28,
    isAdmin: false,
  },
  {
    name: 'Maria',
    address: 'Rua XX',
    age: 31,
    isAdmin: true,
  },
  {
    name: 'Matheus',
    address: 'Rua XI',
    age: 22,
    isAdmin: false,
  }
]

function App() {
 return (
  <>
    <div>
      {users.map((user) => 
      (<div>{user.name}, {user.age}</div>))}
    </div>
  </>
 )
}

export default App
