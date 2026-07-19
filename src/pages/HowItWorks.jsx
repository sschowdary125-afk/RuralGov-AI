import Navbar from "../components/Navbar";

function HowItWorks(){

return(

<>

<Navbar />

<div className="page-header">

<h1>
How RuralGov AI Works
</h1>


<p>
Understand how AI analyzes your profile
and recommends suitable government schemes.
</p>


</div>


<div className="steps-container">


<div className="step-card">

<h2>
1. Select Scheme
</h2>

<p>
Choose a government scheme from the available options.
</p>

</div>



<div className="step-card">

<h2>
2. Fill Details
</h2>

<p>
Provide personal, financial and scheme-specific information.
</p>

</div>



<div className="step-card">

<h2>
3. AI Analysis
</h2>

<p>
Gemini AI evaluates eligibility and identifies missing documents.
</p>

</div>



<div className="step-card">

<h2>
4. Get Result
</h2>

<p>
Receive personalized eligibility score and recommendations.
</p>

</div>



</div>


</>

);

}


export default HowItWorks;