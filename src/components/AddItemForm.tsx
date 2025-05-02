import type React from 'react';
import styled from 'styled-components';

const AddItemForm: React.FC = () => {
  return (
    <Wrapper>
        <header> <h2>Add Shopping List Item</h2> <button type="button">❌</button></header>
       <div className="input-container">
        <div className="form-group">
<label htmlFor="add-item">New Shopping Item</label>
       <input type="text" name="add-item" id="add-item" />
        </div>
        
       <button type="submit">Submit</button>

       </div>
    </Wrapper>
  )
}

export default AddItemForm



const Wrapper = styled.form`
position: absolute;
height: 30vh;
width: 80%;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: peachpuff;
border-radius: 10px;
header{
    position: relative;
    display: flex;
    border: red solid 1px;
    justify-content: center;
    background-color: #fdbd85;
     border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    align-items: center;
    h2{
        left: 50%;
        transform: translate(-50%);
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    position: absolute;
}
 button{
        margin-right: 1rem;
        margin-left: auto;
        border: none;
        background: none;
        cursor: pointer;
    }
}
  .input-container{
    display: grid;
    gap: 1rem;
    place-content: center;
     text-align: center;
        width: 80%;
        height: calc(100% - 2rem);
        border: red solid 1px;
        margin: auto;
        label{
            line-height: 2rem;
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
    }
`;