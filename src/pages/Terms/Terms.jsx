import "./Terms.css";

import {
FaCheckCircle
} from "react-icons/fa";



export default function Terms(){


const terms=[

{
title:"Acceptance of Terms",
text:"By accessing and using our website, you agree to follow our terms and conditions."
},

{
title:"Product Information",
text:"We ensure product details, images and pricing information are accurate and updated."
},

{
title:"Orders & Availability",
text:"All orders depend on product availability and successful confirmation."
},


{
title:"Payments",
text:"Customers must complete payment through available secure payment methods."
},


{
title:"Returns & Refunds",
text:"Return and refund requests must follow our official return policy."
},


{
title:"User Responsibilities",
text:"Users must provide correct information and use our platform responsibly."
}


];



return(


<div className="terms-container">


<div className="terms-header">


<h1>
Terms & Conditions
</h1>


<p>
Please read our policies carefully before using our services.
</p>


</div>



<div className="terms-card">


{
terms.map((item,index)=>(


<div 
className="term-item"
key={index}
>


<div className="term-icon">

<FaCheckCircle/>

</div>



<div>

<h3>
{item.title}
</h3>


<p>
{item.text}
</p>


</div>



</div>


))

}



</div>



</div>


)

}