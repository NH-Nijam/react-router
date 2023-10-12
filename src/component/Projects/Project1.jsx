import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Title from '../../Title';
import DisplayCards from '../../DisplayCards';
import InputField from '../../InputField';


const Project1 = () => {
  const [deposit, setDeposit] =useState(0);
  const [withdraw, setWithdraw] =useState(0);
  const total = deposit - withdraw;

  useEffect(()=> {
    setDeposit(Number(localStorage.getItem('deposit')))
    setWithdraw(Number(localStorage.getItem('withdraw')))
  },[]);

  useEffect(()=> {
    if(deposit !== 0 || withdraw !== 0){

      localStorage.setItem('deposit', deposit);
      localStorage.setItem('withdraw', withdraw);
    }
    
  },[deposit, withdraw])

  const resetHandler =() =>{
    localStorage.removeItem('deposit', deposit);
    localStorage.removeItem('withdraw', withdraw);
    setDeposit('')
    setWithdraw('')
    
  }
  return (
    <div className='space-y-10 w-screen h-screen flex justify-center items-center flex-col'>
      <ToastContainer/>
      <Title/>
      <div className='grid grid-cols-3 gap-4'>
        <DisplayCards 
        cardTitle='Deposit'
        amount={deposit || 0} 
        background ='bg-green-500'/>
        <DisplayCards 
        cardTitle='Withdraw' 
        amount={withdraw || 0} 
        background ='bg-red-500'/>
        <DisplayCards 
        cardTitle='Balance' 
        amount={deposit -withdraw} 
        background ='bg-orange-500'/>
      </div>
      
      <div className='grid grid-cols-2 gap-4 '>
        <InputField
        Title='Please Deposit'
        Placeholder='Amount you want to deposit'
        BtnTitle='Deposit'
        background='bg-blue-500'
        deposit ={deposit}
        setDeposit ={setDeposit}
       
        />

        <InputField
        Title='Please withdraw'
        Placeholder='Amount you want to Withdraw'
        BtnTitle='Withdraw'
        background='bg-green-500'
        withdraw={withdraw}
        setWithdraw={setWithdraw}
        total ={total}
        />
        
      </div>
      <button onClick={resetHandler} className='bg-red-600 text-3xl text-white px-4 py-1 rounded'>Reset</button>
    </div>
  );
};

export default Project1;