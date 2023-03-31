import React, { useState } from "react";
import "./App.css";
import { Carousel }from 'react-bootstrap';



const cities = [
  {
    name: "Paris",
    image: "https://source.unsplash.com/600x400/?paris",
    facts: [
      "Paris is known as the 'City of Love.'",
      "The Eiffel Tower is the most popular monument in Paris.",
    ],
    attractions: [
      "The Louvre Museum",
      "Notre-Dame Cathedral",
      "The Arc de Triomphe",
      "The Champs-Élysées",
      "The Palace of Versailles",
    ],
  },
  {
    name: "London",
    image: "https://source.unsplash.com/600x400/?london",
    facts: [
      "London is the capital and largest city of England and the United Kingdom.",
      "The River Thames flows through the heart of London.",
    ],
    attractions: [
      "The Tower of London",
      "The British Museum",
      "Big Ben and the Houses of Parliament",
      "Buckingham Palace",
      "The London Eye",
    ],
  },
   {
    name: "Tokyo",
    image:"https://source.unsplash.com/600x400/?tokyo",
    facts: [
      "Tokyo is the most populous city in the world, with over 37 million people in its greater metropolitan area.",
      "Tokyo is home to the world's busiest pedestrian crossing, Shibuya Crossing.",
    ],
    attractions: [
      "Tokyo Tower",
      "Sensō-ji temple",
      "Meiji Shrine",
       "Shinjuku Gyoen National Garden",
       "Tsukiji Fish Market",

    ],
   },
   {
    name: "New York",
    image: "https://source.unsplash.com/600x400/?newyork",
    facts: [
      "New York City is home to over 8.3 million people.",
      "The Statue of Liberty was a gift from France to the United States to commemorate the centennial of the American Declaration of Independence in 1876.",
    ],
    attractions: [
      "Empire State Building",
      "Central Park",
      "Statue of Liberty",
      "Metropolitan Museum of Art",
      "Times Square",
    ],
  },
  {
    name: "Rome",
    image: "https://source.unsplash.com/600x400/?rome",
    facts: [
      "Rome is known as the Eternal City due to its rich history spanning over 2,500 years.",
      "Rome has a population of around 2.8 million people."
    ],
    attractions: [
      "Colosseum",
      "Vatican City (including St. Peter's Basilica and the Sistine Chapel)",
      "Trevi Fountain",
      "Roman Forum",
      "Pantheon",
    ],
  },
  {
    name: "San Francisco",
    image: "https://source.unsplash.com/600x400/?sanfrancisco",
    facts: [
      "San Francisco is home to the Golden Gate Bridge, which was completed in 1937 and was the longest suspension bridge in the world at the time.",
      "San Francisco has a population of around 883,000 people.",
    ],
    attractions: [
      "Golden Gate Bridge",
      "Alcatraz Island",
      "Fisherman's Wharf",
      "Chinatown",
      "California Palace of the Legion of Honor",
    ],
  },
  {
    name: "Sydney",
    image: "https://source.unsplash.com/600x400/?sydney",
    facts: [
      "Sydney is the largest city in Australia and has a population of around 5.3 million people.",
      "Sydney Opera House was designed by Danish architect Jørn Utzon and was completed in 1973.",
    ],
    attractions: [
      "Sydney Opera House",
      "Sydney Harbour Bridge",
      "Bondi Beach",
      "Taronga Zoo",
      "Royal Botanic Garden Sydney",
    ],
  },
  {
    name: "Dubai",
    image: "https://source.unsplash.com/600x400/?dubai",
    facts: [
      "Dubai is the largest city in the United Arab Emirates and has a population of around 3.3 million people.",
      "The Burj Khalifa in Dubai is the tallest building in the world, standing at 828 meters (2,717 feet).",
    ],
    attractions: [
      "Burj Khalifa",
      "Dubai Mall",
      "Palm Jumeirah",
      "Dubai Miracle Garden",
      "Ski Dubai",
    ],
  },
  {
    name: "Berlin",
    image: "https://source.unsplash.com/600x400/?berlin",
    facts: [
      "Berlin is the capital and largest city of Germany, with a population of around 3.8 million people.",
      "The Berlin Wall, which divided the city from 1961 to 1989, was torn down in 1989, leading to the reunification of East and West Germany.",
    ],
    attractions: [
      "Brandenburg Gate",
      "Berlin Wall Memorial",
      "Museum Island",
      "Reichstag Building",
      "Berlin Zoological Garden",
    ],
  },
  {
    name: "Singapore",
    image: "https://source.unsplash.com/600x400/?singapore",
    facts: [
      "Singapore is a city-state in Southeast Asia, with a population of around 5.7 million people.",
      "Singapore is known as the Garden City due to its emphasis on green spaces and urban planning.",
    ],
    attractions: [
      "Marina Bay Sands",
      "Gardens by the Bayl",
      "Sentosa Island",
      "Merlion Park",
      "Universal Studios Singapore",
    ],
  },
];

function City({ city, onClick }) {
  return (
    <div className="city" onClick={() => onClick(city)}>
      <img src={city.image} alt={city.name} />
      <div className="name">{city.name}</div>
    </div>
  );
}

function CityDetails({ city, onClose }) {
  return (
    <div className="city-details">
     <div className="header">
        <h1>{city.name}</h1>
        <div className="close-button" onClick={onClose}>
          X
        </div>
      </div>
      <div className="facts">
        <h3>Facts:</h3>
        <ul>
          {city.facts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>
      <div className="attractions">
        <h3>Top Tourist Attractions:</h3>
        <ol>
          {city.attractions.map((attraction, index) => (
            <div key={index}>{attraction}</div>
          ))}
        </ol>
      </div>
    </div>
  );
}

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  function handleCityClick(city) {
    setSelectedCity(city);
  }

  function handleCloseCityDetails() {
    setSelectedCity(null);
  }

  return (
    // <Carousel>
    <div className="App">
      <h1>Travel Diary</h1>
      <h3>10 Beautiful Cities and their top tourist attractions</h3>

      <div className="carousel-container">
      <Carousel>
        {cities.map((city) => (
          <Carousel.Item key={city.name} onClick={() =>handleCityClick(city)}>
            <img
              className="carousel-image"
              src={city.image}
              alt={city.name}
            />
            <Carousel.Caption>
              <h3>{city.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>

      {selectedCity && (
        <div className="overlay">
          <CityDetails city={selectedCity} onClose={handleCloseCityDetails} />
        </div>
      )}
    </div>
    // </Carousel>
  );
}

export default App;


