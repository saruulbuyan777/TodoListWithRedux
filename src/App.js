import React,{useState} from 'react';
import './App.css';
import styled from "styled-components";
import {FaTrashAlt } from 'react-icons/fa';
import StyledContainer from "./Components/StyledContainer";
import StyledInput from "./Components/StyledInput";
import StyledUi from "./Components/StyledUi";


function App() {

   const [inputvalue, setInputvalue] = useState("");
   const [items, setItems] = useState([]);


 
  const handlerBtn = () => {
    if(inputvalue !== ""){
      setInputvalue("");
      return setItems([...items,
        {
          value: inputvalue
          
        }
   
   ])
    
    
 
    }
  
  }
  
  

  return (
    <StyledContainer>
          <h1>Хийх ажлуудын жагсаалт</h1>
          <div>
             <StyledInput  value = {inputvalue} onChange ={e => setInputvalue(e.target.value)} ></StyledInput>
             <button onClick = {handlerBtn} >Нэмэх</button>
          </div>
          <StyledUi>
            {items.map((item,id) => {

              return(
                 <div
                 style = {
                   {
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "space-between"
                     

                   }
                 }
                 
                 
                 key = {id}>
                   <li id = {id} >{item.value}</li>
                   <FaTrashAlt />
                 </div>

              )
            } )}
          </StyledUi>


    </StyledContainer>
  );
}

export default App;
