import { useContext,useEffect,useState } from "react";
import { ApplicationContext } from "../context/ApplicationContext";
import { analyzeApplication } from "../services/aiService";
import AIResultCard from "../components/AIResultCard";
import { schemeRequirements } from "../data/schemeRequirements";


function ResultsDashboard(){


const {applicationData}=useContext(ApplicationContext);



const [analysis,setAnalysis]=useState(null);

const [loading,setLoading]=useState(true);



const requiredDocs =
schemeRequirements[
applicationData?.scheme
] || [];



const selectedDocs =
applicationData?.documents || [];



const missingDocs =
requiredDocs.filter(
doc =>
!selectedDocs.includes(doc)
);





useEffect(()=>{


async function runAnalysis(){


try{


const result =
await analyzeApplication(applicationData);


setAnalysis(result);


}

catch(error){


setAnalysis({

score:"N/A",

approval:"Unable",

documents:[],

risks:[

"AI analysis temporarily unavailable"

],

recommendations:[

"Please try again"

]

});


}


setLoading(false);


}



if(applicationData)

runAnalysis();



},[applicationData]);







if(!applicationData)

return(

<h2>
No Application Found
</h2>

);








if(loading)

return(

<div className="analysis-loading">

<h2>
🤖 AI is analyzing your application...
</h2>

<p>
Checking eligibility, documents and risks.
</p>

</div>

);







return(



<div className="result-page">





<div className="result-header">


<h1>

AI Application Analysis Report

</h1>


<h2>

{applicationData.scheme}

</h2>


<p>

Personalized government scheme readiness assessment

</p>


</div>









<div className="ai-dashboard">





<AIResultCard

title="Eligibility Score"

icon="📊"

>


<div className="score-circle">

{analysis?.score ?? "N/A"}%

</div>


</AIResultCard>









<AIResultCard

title="Approval Prediction"

icon="✅"

>


<h2

className={
analysis?.approval === "High"

?

"high"

:

analysis?.approval === "Medium"

?

"medium"

:

"low"

}

>

{analysis?.approval ?? "N/A"}

</h2>


</AIResultCard>









<AIResultCard

title="Missing Documents"

icon="📄"

>


{

missingDocs.length > 0

?


<ul>


{

missingDocs.map(

(doc,index)=>(


<li key={index}>

❌ {doc}

</li>


)

)


}


</ul>


:

<h3>

All required documents available ✅

</h3>


}



</AIResultCard>









<AIResultCard

title="Risk Analysis"

icon="⚠️"

>


<ul>


{

analysis?.risks?.map(

(risk,index)=>(


<li key={index}>

⚠️ {risk}

</li>


)

)


}


</ul>


</AIResultCard>









<AIResultCard

title="AI Recommendations"

icon="🚀"

>


<ol>


{

analysis?.recommendations?.map(

(item,index)=>(


<li key={index}>

{item}

</li>


)

)


}


</ol>


</AIResultCard>









<AIResultCard

title="AI Reasoning"

icon="🧠"

>


<p>


{

analysis?.reason ||

"AI evaluated your profile based on scheme eligibility rules, provided documents and application details."

}


</p>


</AIResultCard>





</div>



</div>


);


}


export default ResultsDashboard;