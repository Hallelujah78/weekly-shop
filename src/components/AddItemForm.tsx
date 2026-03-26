import type React from 'react';
import styled from 'styled-components';
import type { FormProps } from '../models/FormProps.model';
import { useState } from 'react';

const AddItemForm: React.FC<FormProps> = ({onSubmit, onClose}) => {

const [name, setName] = useState('');

const handleSubmit = (e: React.SubmitEvent) =>{
  e.preventDefault();
  onSubmit(name);
  setName("");
}



  return (
    <Wrapper onSubmit={handleSubmit}>
        <header> <h2>Add Shopping List Item</h2> <button onClick={onClose} type="button">❌</button></header>
       <div className="input-container">
        <div className="form-group">
<label htmlFor="add-item">New Item</label>
       <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="add-item" id="add-item" />
        </div>
        
       <button type="submit" >Submit</button>

       </div>
    </Wrapper>
  )
}

export default AddItemForm



const Wrapper = styled.form`
position: absolute;
height: 30vh;
width: 82%;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: peachpuff;
border-radius: 10px;
header{
    height: 3rem;
    display: flex;
    justify-content: center;
    background-color: #fdbd85;
     border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    align-items: center;
    h2{
    height: 2rem;
    text-align: center;
    line-height: 2rem;
   
}
 button{
        margin-right: 1rem;
        margin-left: auto;
        border: none;
        background: none;
        cursor: pointer;
        position: absolute;
        right: .5rem;
    }
}
  .input-container{
    display: grid;
    gap: 2rem;
    place-content: center;
     text-align: center;
        width: 80%;
        height: calc(100% - 2rem);
        margin: auto;
        label{
            line-height: 2rem;
            font-size: .9rem;
            margin-right: .5rem;
        }
        input{    
         height: 2rem;
        }
        .form-group{
            display: flex;
            height: 2rem;
            align-items: center;
        }
         button{
       padding: 17px 40px;
  border-radius: 50px;
  cursor: pointer;
  border: 0;
  background-color: white;
  box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 15px;
  transition: all 0.5s ease;
    }
    button:active {
  letter-spacing: 3px;
  background-color: hsl(261deg 80% 48%);
  color: hsl(0, 0%, 100%);
  box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
  transform: translateY(10px);
  transition: 100ms;
}

    }
   
`;