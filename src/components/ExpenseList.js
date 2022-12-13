import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

function ExpenseList() {
  const {expenses} = useContext(AppContext)
    
  return (
    <ul className='list-group'>
      {
        expenses.map(item=> (
            <ExpenseItem name={item.name} cost={item.cost} id={item.id}/>
            ))
      }
    </ul>
  )
}

export default ExpenseList