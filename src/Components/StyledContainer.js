import React from "react";
import styled from "styled-components";


const StyledContainer = styled.div`

margin : 10% auto;
padding: 40px;
border : 1px solid #61dafb;
text-align: center;
width:400px;
min-height:500px;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
background: #dddd;

h1{
  margin : 20px 0;
  font-size: 2rem;
}

button {
  width:100px;
  padding :0.5rem 2rem;
  border-radius:10px;
  color:black;
  background:#61dafb;
  border: none;
  
  outline: none;
  cursor:pointer;
  /* margin-top:5px; */
}
`;

export default StyledContainer