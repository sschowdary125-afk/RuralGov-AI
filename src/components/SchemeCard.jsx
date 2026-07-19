import { useNavigate } from "react-router-dom";


function SchemeCard({ icon, title, description }) {


const navigate = useNavigate();



return (

<div className="scheme-card">


<div className="scheme-icon">

{icon}

</div>



<h3>

{title}

</h3>



<p>

{description}

</p>




<button

className="scheme-btn"

onClick={() =>
navigate(`/eligibility/${title}`)
}

>

Check Eligibility →

</button>



</div>

);


}


export default SchemeCard;