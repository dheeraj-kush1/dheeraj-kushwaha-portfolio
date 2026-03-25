import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> career
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Primary <br />Education</h4>
                <h5>G.N.H.I.S School</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Completed Primary Education under Uttar Pradesh Board, building a strong academic foundation.
               Developed interest in mathematics, discipline, and logical thinking that later supported my technical learning journey.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary Education</h4>
                <h5>Z.P.I College</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
          Completed Secondary Education (Intermediate - B.Science) under Uttar Pradesh Board with core subjects including Mathematics, Physics, and Chemistry. 
          This strengthened my analytical thinking, problem-solving ability, and interest in technical fields.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary Education</h4>
                <h5>GIHSM LUCKNOW</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing BCA with specialization in Java, Data Structures, and Cloud Computing. 
              Actively learning AWS, Linux, and backend development while building practical projects to strengthen real-world skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;