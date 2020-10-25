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
          value: inputvalue,
          isCompleted: false
        }
   
   ])
    
    
 
    }
  
  }
  
      
  //  function handleDelete(e){
  //    const id = Number(e.target.id);

  //    const filteredArray = items.filter((item,index) => {
  //      return index !== id;
      
       
  //    });
  //    setItems(filteredArray);
  //  }


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
                   <li id = {id} style = {item.isCompleted ? {textDecoration: "line-through"}: {textDecoration: "none"}}>{item.value}</li>
                   <FaTrashAlt  />
                 </div>

              )
            } )}
          </StyledUi>


    </StyledContainer>
  );
}

export default App;
