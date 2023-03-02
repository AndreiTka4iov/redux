import { type } from '@testing-library/user-event/dist/type';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {
  const dispach = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  const addCash = (cash) => {
    dispach({type:'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispach({type:'GET_CASH', payload: cash})
  }

  const addCustomer = (name) =>{
    const customer ={
      name,
      id: Date.now(),
    }
    dispach(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispach(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div style={{fontSize: '30px'}}>{cash}</div>
      <div style={{display: 'flex'}}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => getCash(Number(prompt()))}>Удалить клиента</button>
      </div>
      {customers.length > 0 ?
       <div>
        {customers.map(customer =>
            <div onClick={() => removeCustomer(customer)} style={{fontSize: "2rem", border: "1px solid black", padding: "10px", marginTop: 5}}>
              {customer.name}
            </div>
        )}
      </div>
      :
      <div>
        Клиенты отсутвуют!
      </div>
      }
    </div>
  );
}

export default App;
