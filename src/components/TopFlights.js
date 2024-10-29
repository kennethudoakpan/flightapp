import { useEffect, useState } from "react";

export default function TopFlights() {
  const [topFlights, setTopFlights] = useState({});
  const [currency, setCurrency] = useState("₦");
  useEffect(() => {
    // fetch top flights data from API and set it to state
    fetch(
      "https://proxy.cors.sh/https://api.travelpayouts.com/v1/city-directions?origin=ABV&currency=ngn&token=6f5f329ba0d04558a5a78201f662720b",
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Headers": "*",
          "x-cors-api-key": "temp_b36cd81d30fee2265ef5c1b31b95d097",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setTopFlights(data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className="top-flights">
      <h3>Top flights</h3>
      <div className="flight-grid">
        <div className="flight-card">
          <img
            src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS82Ogra8w6vTaZ6CMI3kyw7BL0AkB8QxkgqM7bgUTZ6wcMWrV9NQXfx5LObel2nXUx4-gOjixYt6-eM5FGagD5oiYQGYN84P0aouTsgvA"
            alt="London - Milan"
          />
          <div className="flight-info">
            <h4>Abuja </h4>
            <p>
              Abuja is a city in Nigeria, known for its beautiful beaches and
              nightlife. It is also a popular tourist destination for tourists
              from around the world.
            </p>
            <a href="/">More information</a>
          </div>
        </div>
        <div className="flight-list">
          <input
            type="checkbox"
            onChange={() => setCurrency(currency === "₦" ? "$" : "₦")}
          />{" "}
          <p>change currency</p>
          {/* loop through an object */}
          {
            Object.entries(topFlights).map(([key, value]) => (
              <div className="flight-item">
                <span>
                  {value.origin} - {value.destination}
                </span>
                <span>
                  Starting from {currency}
                  {value.price}
                </span>
                <button className="book-button">Book</button>
              </div>
            ))
            //comment here
          }
        </div>
      </div>
    </section>
  );
}
