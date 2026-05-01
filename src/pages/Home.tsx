import { useState } from 'react';

const Home = ({ data }) => {
    return (
    <>
      <div className="content flex-content flex--center">
        <div className="section__container flex-content flex--center">
          <div className="section__content section__content--construction flex__small--12 flex__large--12 center">
            <h1 className="center" id="section-construction">Under Construction</h1>
            <p>
              Exciting updates coming soon!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;