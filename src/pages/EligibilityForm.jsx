import { useParams, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { schemeQuestions } from "../data/schemeQuestions";
import { ApplicationContext } from "../context/ApplicationContext";


function EligibilityForm(){


const {schemeName}=useParams();

const navigate=useNavigate();

const {setApplicationData}=useContext(ApplicationContext);



const [formData,setFormData]=useState({

name:"",
age:"",
gender:"",
mobile:"",
state:"",
district:"",
income:"",
occupation:"",
category:"",
documents:[],
schemeAnswers:{}

});




const handleChange=(e)=>{


setFormData({

...formData,

[e.target.name]:e.target.value

});


};





const handleDocumentChange=(e)=>{


const {value,checked}=e.target;



setFormData({

...formData,

documents:

checked

?

[...formData.documents,value]

:

formData.documents.filter(
doc=>doc!==value
)

});


};





const handleSchemeAnswerChange=(question,value)=>{


setFormData({

...formData,

schemeAnswers:{

...formData.schemeAnswers,

[question]:value

}

});


};





const handleSubmit=(e)=>{


e.preventDefault();



setApplicationData({

scheme:schemeName,

...formData

});



navigate("/results");


};





return(


<div className="form-page">



<div className="form-header">


<h1>

{schemeName}

</h1>


<p>

AI-powered eligibility assessment

</p>


</div>






<form onSubmit={handleSubmit}>


<div className="form-section">


<h2>
👤 Personal Information
</h2>



<label>
Full Name *
</label>

<input

name="name"

placeholder="Enter your full name"

onChange={handleChange}

/>





<label>
Age *
</label>

<input

name="age"

type="number"

placeholder="Enter age"

onChange={handleChange}

/>






<label>
Gender
</label>


<div className="radio-group">


<label>

<input

type="radio"

name="gender"

value="Male"

onChange={handleChange}

/>

Male

</label>




<label>

<input

type="radio"

name="gender"

value="Female"

onChange={handleChange}

/>

Female

</label>




<label>

<input

type="radio"

name="gender"

value="Other"

onChange={handleChange}

/>

Other

</label>


</div>






<label>
Mobile Number *
</label>


<input

name="mobile"

placeholder="10 digit mobile number"

onChange={handleChange}

/>






<label>
State
</label>


<input

name="state"

placeholder="Your state"

onChange={handleChange}

/>





<label>
District
</label>


<input

name="district"

placeholder="Your district"

onChange={handleChange}

/>


</div>









<div className="form-section">


<h2>
💰 Financial Information
</h2>



<label>
Annual Family Income
</label>


<input

name="income"

placeholder="Income in ₹"

onChange={handleChange}

/>





<label>
Occupation
</label>


<select

name="occupation"

onChange={handleChange}

>


<option>
Select Occupation
</option>

<option>
Farmer
</option>

<option>
Student
</option>

<option>
Self Employed
</option>

<option>
Street Vendor
</option>


</select>







<label>
Category
</label>


<select

name="category"

onChange={handleChange}

>


<option>
Select Category
</option>

<option>
General
</option>

<option>
OBC
</option>

<option>
SC
</option>

<option>
ST
</option>


</select>


</div>










<div className="form-section">


<h2>
📋 Scheme Specific Information
</h2>


<p>

Answer these questions for accurate AI prediction.

</p>




{

schemeQuestions[schemeName]?.map(

(question,index)=>(


<div className="question-box" key={index}>


<label>

{question}

</label>


<input

placeholder="Enter answer"

onChange={(e)=>

handleSchemeAnswerChange(

question,

e.target.value

)

}


/>


</div>


)

)


}


</div>









<div className="form-section">


<h2>
📄 Available Documents
</h2>



<p>
Select documents you already have.
</p>





<div className="checkbox-list">


{

[

"Aadhaar Card",

"Bank Passbook",

"Income Certificate",

"Residence Certificate",

"Caste Certificate",

"Land Ownership Document",

"Ration Card"

].map((doc)=>(



<label key={doc}>


<input

type="checkbox"

value={doc}

onChange={handleDocumentChange}

/>


{doc}


</label>



))


}



</div>


</div>








<button

className="analyze-btn"

type="submit"

>

🤖 Analyze Application


</button>





</form>


</div>


);


}


export default EligibilityForm;