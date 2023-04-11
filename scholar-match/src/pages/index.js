import React from 'react';
import { useState, useEffect } from 'react';
import db from '../firebase.config';
import Searchbar from "../components/searchBar";
  
const Home = () => {
  const [scholarships, setScholsarships] = useState([]);

  useEffect(() => {
    Fetchdata();
  }, [])

  const Fetchdata = async() =>{
    db.collection("Scholarships").get().then((querySnapshot) => {
      querySnapshot.forEach(element => {
        var data = element.data();
        setScholsarships(arr => [...arr, data])
      })
    })
  }
  return (
    <div>

      {
        scholarships.map((scholarship) => (
          <h1>Test</h1>
        ))
      }
    </div>
  );
};
  
export default Home;