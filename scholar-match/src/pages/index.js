import React from 'react';
import { useState, useEffect } from 'react';
import db from '../firebase.config';
//import Searchbar from "../components/searchBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'

  
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
      <div class="container text-center">
      <div class="row mb-2">
        {
          scholarships.map((scholarship) => (
            <div class="col">
              <div>
              <div class = "card text-center">
                <div class="card-block">
                  <h4 class = "card-title">Scholarship Name</h4>
                  <h6>Amount</h6>
                  <h6><b>Deadline:</b></h6>
                  <p class="card-text">
                    Short Description
                  </p>
                  </div>
                  <div class="card-footer">
                    <Button variant="primary">Apply</Button>
                    <Button variant="primary">Save</Button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  );
};
  
export default Home;