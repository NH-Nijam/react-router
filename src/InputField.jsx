import React, { useState } from 'react';
import { toast } from 'react-toastify';

const InputField = ({Title,Placeholder, BtnTitle,background, deposit, setDeposit,withdraw, setWithdraw, total}) => {
    const [input, setInput] =useState("")
    const handleDeposit =() =>{
        if(BtnTitle ==="Deposit"){
            if(input >=100){
                setDeposit(parseFloat(input) + deposit);
                setInput('')
                toast("Your money has been deposited correctly")
                
            }
            else{
                toast("You can't deposit bellow $10")
            }
           
            
        }
        else{
            if(input >= 100){
                if(parseFloat(input) <= total){
                    setWithdraw(parseFloat(input) + withdraw);
                    setInput('')
                    toast('Your money has been withdraw')
                }
                else{
                    toast("You don't have enough money")
                }
               
            }
            else{
                toast("You can't withdraw bellow $100")
            }         
            
        }
        
    }

    const handleChange =(even)=>{
        setInput(even.target.value);

    }
    return (
        <div className={`${background} flex flex-col w-[370px] rounded py-4 px-4`}>
        <p className='text-white text-xl'>{Title}</p>

        <input
        className='my-5 px-4 py-1 rounded border-none '
        onChange={handleChange}
        type="number" 
        value={input}
        placeholder={Placeholder}/>
        <button onClick={handleDeposit} className='bg-red-500 w-2/5 py-1 rounded-md text-white font-bold border-none text-xl'>{BtnTitle}</button>
    </div>
    );
};

export default InputField;