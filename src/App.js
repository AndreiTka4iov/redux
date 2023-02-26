import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispach = useDispatch()
  const cash = useSelector(state => state.cash)

  const addCash = (cash) => {
    dispach({type:'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispach({type:'GET_CASH', payload: cash})
  }

  return (
    <div className="App">
      <div style={{fontSize: '30px'}}>{cash}</div>
      <div style={{display: 'flex'}}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
      </div>
    </div>
  );
}

export default App;
