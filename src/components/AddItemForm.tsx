import type React from 'react';
import styled from 'styled-components';
import type { FormProps } from '../models/FormProps.model';
import { useState } from 'react';
import { CATEGORIES } from '../data/productCategories';

const AddItemForm: React.FC<FormProps> = ({onSubmit, onClose}) => {

const [name, setName] = useState('');
const [category, setCategory] = useState('');

const handleSubmit = (e: React.SubmitEvent) =>{
  e.preventDefault();
  onSubmit(name, category);
  setName("");
  setCategory(CATEGORIES[0].value)
}



  return (
    <Wrapper onSubmit={handleSubmit}>
        <header> <h2>Add Shopping List Item</h2> <button className="close-button" onClick={onClose} type="button">❌</button></header>
       <div className="input-container">
        <div className="form-group">
<label htmlFor="add-item">New Item</label>
       <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="add-item" id="add-item" />
<label htmlFor="add-category">Select Category</label>
       <select value={category} onChange={(e)=>setCategory(e.target.value)} name="add-category" id="add-category">
          {CATEGORIES.map(cat => <option value={cat.value}>{cat.label}</option>)}
        </select>
         <button className="submit-button" type="submit" >Submit</button>
        </div>
       </div>
    </Wrapper>
  )
}

export default AddItemForm



const Wrapper = styled.form`
position: absolute;
height: 50vh;
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
 .close-button{
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
        height: calc(100% - 3rem);
        margin: auto;
        .form-group{
            display: grid;
            height: 100%;
            align-items: center;
             label{
            line-height: 2rem;
            font-size: .9rem;
            margin-right: .5rem;
            display: block;
            margin-bottom: .5rem;
        }
         input{    
         height: 2rem;
        }
        select{
          height: 2rem;
        }
        }
         .submit-button{
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
  margin-top: 2rem;
    }
    button:active {
  letter-spacing: 3px;
  background-color: hsl(261deg 80% 48%);
  color: hsl(0, 0%, 100%);
  box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
  transform: translateY(2px);
  transition: 100ms;
}
    }
   
`;