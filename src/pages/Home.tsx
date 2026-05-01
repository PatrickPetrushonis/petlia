import { useState } from 'react';

const Home = ({ data }) => {
    return (
    <>
      <div className="content flex-content flex--center">
        <div className="section__container">
          <div className="section__content section__content--construction flex-content flex--center">
            <div className="flex__small--12 flex__large--12 center">
              <h1 id="section-construction">Under Construction</h1>
              <p>
                Exciting updates coming soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;