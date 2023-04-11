import React from 'react';
import { useState, useEffect } from 'react';
import db from '../firebase.config';
//import Searchbar from "../components/searchBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import '../styling_sheets/homePage.css';

  
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
              <div class = "card text-center">
                <div class="card-block">
                  <h4 class = "card-title">{scholarship.Name}</h4>
                  <h6>${scholarship.Amount}</h6>
                  <h6><b>Deadline:</b></h6>
                  <p class="card-text">
                    Short Description
                  </p>
                  </div>
                  <div class="card-footer">
                    <div class="container">
                      <div class="buttons">
                        <a class="btn btn-primary" href="#" role="button">Apply</a>
                        <button class="btn btn-primary">Save</button>
                      </div>
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