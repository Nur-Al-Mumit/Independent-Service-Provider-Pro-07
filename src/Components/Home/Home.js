import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("projectData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <Banner></Banner>
      <div className="d-flex mt-5">
      {services.map((service) => (
        <Service key={service.id} data={service}></Service>
      ))}
      </div>
    </>
  );
};

export default Home;
