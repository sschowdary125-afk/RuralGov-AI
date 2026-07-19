import { useNavigate } from "react-router-dom";

function Hero() {

  const navigate = useNavigate();


  return (

    <section className="hero">


      <div className="hero-left">


        <span className="hero-badge">

          🤖 AI-Powered Government Assistance

        </span>



        <h1>

          Application Success Assistant
          <br />
          for Government Schemes

        </h1>



        <p>

          RuralGov AI helps citizens identify suitable
          government schemes, check eligibility,
          find missing documents, and improve
          application readiness before submission.

        </p>



        <div className="hero-buttons">


          <button

            className="primary-btn"

            onClick={() =>
              navigate("/schemes")
            }

          >

            Explore Schemes

          </button>




          <button

            className="secondary-btn"

            onClick={() =>
              navigate("/how-it-works")
            }

          >

            Learn More

          </button>



        </div>



      </div>





      <div className="hero-right">


        <div className="demo-card">


          <div className="demo-tag">

            Live AI Analysis Preview

          </div>



          <h3>
            Farmer Application Analysis
          </h3>



          <div className="status-item">

            <span>
              Applicant
            </span>

            <strong>
              Ramesh Kumar
            </strong>

          </div>




          <div className="status-item">

            <span>
              Scheme
            </span>

            <strong>
              PM-KISAN
            </strong>

          </div>





          <div className="status-item">

            <span>
              Eligibility Score
            </span>

            <strong>
              87% ✅
            </strong>

          </div>





          <div className="status-item">

            <span>
              Approval Prediction
            </span>

            <strong>
              High
            </strong>

          </div>





          <div className="ai-note">

            💡 AI Recommendation:
            Complete required documents
            before submitting application.

          </div>



        </div>


      </div>


    </section>


  );

}


export default Hero;