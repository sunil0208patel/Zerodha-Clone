import React from "react";
import "./AboutPage.css";

const Team = () => {
  return (
    <div className="container team-page my-5">
      <h2 className="text-center mb-5">People</h2>

      {/* Founder Section */}
      <div className="row align-items-center founder-container mb-5">
        <div className="col-12 col-md-6 text-center mb-4">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Founder"
            className="rounded-circle founder-img"
          />
          <h5 className="mt-3">Nithin Kamath</h5>
          <p>Founder, CEO</p>
        </div>

        <div className="col-12 col-md-6 founder-right">
          <p className="lh-lg">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader.
          </p>
          <p className="lh-lg">
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="team-grid">
        {[
          ["Nikhil", "Co-founder & CFO"],
          ["Kailash", "CTO"],
          ["Venu", "COO"],
          ["Hanan", "CCO"],
          ["Seema", "Director"],
          ["karthik", "Chief of Education"],
        ].map((member, i) => (
          <div className="team-member" key={i}>
            <img
              src={`media/images/${member[0]}.jpg`}
              alt={member[0]}
            />
            <h5 className="mt-2">{member[0]} Kamath</h5>
            <p>{member[1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
