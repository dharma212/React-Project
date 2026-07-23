import {useState} from "react";
import "./Contact.css";

import {
 FaUser,
 FaEnvelope,
 FaPhone,
 FaCommentDots
} from "react-icons/fa";



export default function Contact(){


const [submitted,setSubmitted]=useState(false);



const handleSubmit=(e)=>{

 e.preventDefault();

 setSubmitted(true);

 e.target.reset();

};



return(


<div className="contact-container">


<div className="contact-card">


<div className="contact-header">


<h1>
 Contact Us
</h1>


<p>
 Have any questions? We would love to hear from you.
</p>


</div>



{
submitted &&

<div className="success-message">

✅ Your message has been sent successfully.

</div>

}




<form onSubmit={handleSubmit}>


<div className="input-box">

<FaUser/>

<input
type="text"
placeholder="Full Name"
required
/>

</div>



<div className="input-box">

<FaEnvelope/>

<input
type="email"
placeholder="Email Address"
required
/>

</div>




<div className="input-box">

<FaPhone/>

<input
type="tel"
placeholder="Phone Number"
required
/>

</div>





<div className="input-box textarea-box">

<FaCommentDots/>

<textarea

rows="5"

placeholder="Write your message..."

required

></textarea>


</div>




<button>

Send Message

</button>



</form>


</div>


</div>


)


}