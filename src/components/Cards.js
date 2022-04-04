import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Movie Gallery</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/movie-1.png"
              text="Sneaking out. Hooking up. Melting down. The cast and crew of a blockbuster action franchise attempt to shoot a sequel while quarantined at a posh hotel."
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/movie-2.png"
              text="A comedy about class, capitalism and one man's quest to achieve the American dream. And also about hunting really big snakes."
              label="Comedy"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/movie-3.png"
              text="A civilized dinner party in a country house sees four friends, Lucas, Adam, Chloe, and Eve, coming together for a birthday celebration."
              label="Action"
              path="/services"
            />
            <CardItem
              src="images/movie-4.png"
              text="After being involuntarily discharged from the U.S. Special Forces, James Harper decides to support his family by joining a private contracting organization alongside his best friend and under the command of a fellow veteran."
              label="Action"
              path="/products"
            />
            <CardItem
              src="images/movie-5.png"
              text="In a North Dublin housing estate, Char's mother goes missing. When she returns Char is determined to uncover the truth of her disappearance and unearth the dark secrets of her family."
              label="Horror"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
