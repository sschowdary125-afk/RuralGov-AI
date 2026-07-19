import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);


export async function analyzeApplication(data) {

  try {

    const model = genAI.getGenerativeModel({

      model: "gemini-3.5-flash"

    });

    const prompt = `

You are an expert Indian Government Scheme Eligibility Assistant.

Analyze the applicant carefully.

Government Scheme:
${data.scheme}

Applicant Details:

Name: ${data.name}

Age: ${data.age}

Gender: ${data.gender}

Income: ${data.income}

Occupation: ${data.occupation}

State: ${data.state}

Submitted Documents:

${JSON.stringify(
  data.documents,
  null,
  2
)}

Scheme Specific Answers:

${JSON.stringify(
  data.schemeAnswers,
  null,
  2
)}

Eligibility Scoring Rules:

90-100
Strongly Eligible

70-89
Likely Eligible

50-69
Partially Eligible

30-49
Weak Eligibility

0-29
Not Eligible

Do not assign low scores simply because some information is missing.

Focus on actual scheme eligibility conditions.

Return ONLY valid JSON.

{
  "score":"0-100",
  "approval":"Low/Medium/High",
  "risks":[
    ""
  ],
  "recommendations":[
    ""
  ],
  "reason":""
}

`;

    const result =
      await model.generateContent(prompt);

    const response =
      await result.response;

    const text =
      response.text();

    return JSON.parse(text);

  }

  catch(error){

console.error(
"Gemini Error:",
error
);


return {

score:"N/A",

approval:"Unable",

documents:[],

risks:[
"AI service temporarily unavailable"
],

recommendations:[
"Please try again later"
]

};

}

}

function generateFallbackAnalysis(data) {

  let score = 60;

  if (
    data.documents &&
    data.documents.length >= 3
  ) {
    score += 15;
  }

  if (
    data.schemeAnswers &&
    Object.keys(
      data.schemeAnswers
    ).length > 0
  ) {
    score += 15;
  }

  if (
    Number(data.income) < 300000
  ) {
    score += 10;
  }

  score = Math.min(score, 95);

  let approval = "Medium";

  if (score >= 80) {
    approval = "High";
  }

  if (score < 50) {
    approval = "Low";
  }

  return {

    score: score,

    approval: approval,

    risks: [

      "Live AI analysis unavailable",

      "Fallback eligibility assessment generated"

    ],

    recommendations: [

      "Verify all scheme information",

      "Submit complete supporting documents"

    ],

    reason:
      "Fallback analysis generated based on applicant profile."

  };

}