import "./CardGrid.css";
// import React from "react";

function CardGrid() {
  return (
    <div className="card-grid-container">
      <h2>Eventos Destacados</h2>
      <div className="card-grid">
        <div className="card">
          <img
            src="https://www.ticketeg.com/assets/images/events/LOGO_REAL-STATE.jpg"
            alt="Imagen 1"
          />
          <h3>Casacor Bolivia 2024</h3>
          <h4>11 jun. 2024 al 20 jul. 2024 , Santa Cruz</h4>
        </div>
        <div className="card">
          <img
            src="https://instagram.fsrz1-2.fna.fbcdn.net/v/t39.30808-6/438275615_17895462746991331_2965249647577883689_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xOTk5eDE5OTkuc2RyLmYzMDgwOCJ9&_nc_ht=instagram.fsrz1-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=snzagbHZ5X8Q7kNvgGy8lp_&edm=ALQROFkAAAAA&ccb=7-5&ig_cache_key=MzM1MjE2NDkyMjM5MTE4NTMzOA%3D%3D.2-ccb7-5&oh=00_AYD7PVI2KqJkqi0nVGrBXQj2rIPGTg_ZWL9ORK4wDHr1xw&oe=667B8D37&_nc_sid=fc8dfb"
            alt="Imagen 2"
          />
          <h3>Concierto Trueno</h3>
          <h4>11 jun. 2024 al 20 jul. 2024 , Santa Cruz</h4>
        </div>
        <div className="card">
          <img
            src="https://scontent.fsrz1-1.fna.fbcdn.net/v/t39.30808-6/423478789_730137889210872_1218970070466796518_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WxZpnRlQiqcQ7kNvgFy-CsE&_nc_ht=scontent.fsrz1-1.fna&oh=00_AYBABZcxSVd2MRx1RrNYvGDW-di_WDgKJ5mL3cVjxQ9_Wg&oe=6675CCEF"
            alt="Imagen 3"
          />
          <h3>Concierto Martin Garriz</h3>
          <h4>11 jun. 2024 al 20 jul. 2024 , Santa Cruz</h4>
        </div>
        <div className="card">
          <img
            src="https://static.eldeber.com.bo//Files/Sizes/2024/5/18/vitruality_2013378879_763x300.jpg"
            alt="Imagen 3"
          />
          <h3>Virtuality</h3>
          <h4>11 jun. 2024 al 20 jul. 2024 , Santa Cruz</h4>
        </div>
      </div>
    </div>
  );
}

export default CardGrid;
