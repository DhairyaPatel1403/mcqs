import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { Question } from './components/Question';
import { Main } from './components/Main';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <Routes>
            <Route path={'/'} element={<Home/>}></Route>
            <Route path={'/score/:id'} element={<Main/>}/>
            <Route path={'/1/:id'} element={<Question no="1" value="What is color of water" op1="Blue" op2="Transperent" op3="Green" op4="Red" ans="Transperent" score={0}/>} />
            <Route path={'/2/:id'} element={<Question no="2" value="Where is Taj Mahal located" op1="Agra" op2="New York" op3="Mumbai" op4="Gujarat" ans="Agra" />} />
            <Route path={'/3/:id'} element={<Question no="3" value="Which communication is/are possible in ReactJs library?" op1="PArent to Child" op2="Child to Parent" op3="None of the above" op4="All of the above" ans="All of the above" />} />
          </Routes>
        </Router>

      </header>
    </div>
  );
}

export default App;
