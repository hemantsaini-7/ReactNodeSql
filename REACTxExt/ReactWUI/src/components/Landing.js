import React, { Fragment } from "react";
import { AllData } from "./AllData";

function Landing() {
  return (
    <Fragment>
      <section className='landing'>
        <div className='cards'>
          {AllData.map((data) => (
            <div className='card' key={data.id}>
              <h1>{data.head}</h1>
              <img src={data.imgCard} alt='' />
              <p className='bottom'>{data.bottom}</p>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
}

export default Landing;
