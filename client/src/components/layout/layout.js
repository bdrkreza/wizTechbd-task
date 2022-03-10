import axios from 'axios';
import { createContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../common/footer";
import AppBar from "../common/navbar";
export const Context = createContext();

export default function Layout({ children }) {
  useEffect(() => {
    viewPost();
}, []);

const [isBook, setIsBook] = useState({});
const viewPost = async() =>{
  try {
    await axios.get(`http://localhost:5000/booking`,)
    .then(res => { 
      if(res.data){
        setIsBook(res.data);
      }
    })
  } catch (error) { throw error;}
}
  return (
    <Container>
      <Context.Provider value={isBook}>
        <AppBar />
        <main style={{ minHeight: "700px" }}>{children}</main>
        <Footer />
      </Context.Provider>
    </Container>
  );
}
