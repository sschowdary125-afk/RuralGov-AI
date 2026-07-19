function AIResultCard({
title,
icon,
children
}){


return(

<div className="ai-result-card">


<div className="ai-card-header">


<span>
{icon}
</span>


<h3>
{title}
</h3>


</div>


<div className="ai-card-content">

{children}

</div>


</div>


)

}


export default AIResultCard;