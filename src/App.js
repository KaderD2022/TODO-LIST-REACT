import './App.css';

import ToDoMenu  from './components/ToDoMenu';
function App() {
  return (
    <div className="App App h-screen bg-gradient-to-r from-red-200 via-pink-200 to-pink-300">
      <h1> TO DO LIST</h1>

      <ToDoMenu />
    </div>
  );
}

export default App;
 