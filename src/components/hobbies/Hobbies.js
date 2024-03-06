import React from "react";
import Title from "../layouts/Title";
import Card from "./HobbiesCard";
import { hobbiesData } from "../../data/data_hobbies";
const Features = () => {
  return (
    <section
      id="hobbies"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Hobbies" des="What I Do In Spare Time" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {hobbiesData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Features;
