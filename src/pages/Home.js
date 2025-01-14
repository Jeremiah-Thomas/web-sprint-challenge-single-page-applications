import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const otherDelivery = [
    { name: "McDonald's", wait: "10-15", fee: "4.99" },
    { name: "Chipotle", wait: "15-20", fee: "6.99" },
    { name: "Chick-fil-a", wait: "15-25", fee: "7.99" },
  ];
  return (
    <>
      <section className="pizza-order">
        <h1>Your favorite food, delivered while coding.</h1>
        <Link id="order-pizza" className="btn-to-order" to="/pizza">
          Pizza?
        </Link>
      </section>
      <p>Other places near you</p>
      <section className="other">
        {otherDelivery.map((place) => {
          return (
            <div key={place.name} className="other-card">
              <h1>{place.name}</h1>
              <p>{place.wait} min</p>
              <p>Delivery Fee ${place.fee}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Home;
