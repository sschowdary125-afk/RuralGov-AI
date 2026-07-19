import SchemeCard from "./SchemeCard";


function Schemes(){


return(

<section className="schemes-section">


<h2>

Government Schemes We Support

</h2>



<p className="schemes-subtitle">

AI-powered eligibility analysis for major
government welfare programs.

</p>




<div className="schemes-grid">



<SchemeCard

icon="🌾"

title="PM-KISAN"

description="Income support scheme helping eligible farmers through direct financial assistance."

/>




<SchemeCard

icon="🏠"

title="PMAY"

description="Housing assistance scheme helping eligible families build safe permanent homes."

/>




<SchemeCard

icon="🏥"

title="Ayushman Bharat"

description="Health protection scheme providing financial coverage for eligible families."

/>




<SchemeCard

icon="🛍️"

title="PM SVANidhi"

description="Working capital loan support for street vendors and small entrepreneurs."

/>




<SchemeCard

icon="👧"

title="Sukanya Samriddhi"

description="Savings scheme designed to secure the financial future of girl children."

/>




</div>



</section>


);


}


export default Schemes;