'use client'
import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline :none;

  }
  button{
    background-color: transparent;
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }
`