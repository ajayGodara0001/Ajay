import React, { useState } from 'react'
import toast from 'react-hot-toast';

function Contact({theme}) {
   
    const [result, setResult] = useState("Send Message");

    const onSubmit = async (event) => {
      event.preventDefault();

      setResult("Sending....");

      const formData = new FormData(event.target);
  
      formData.append("access_key", "d25ed56c-06b1-422c-9b5d-692599f4c19c");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        toast.success("Form Submitted succesfully")
        setResult("Send Message");
        event.target.reset();
    } else {
        console.log("Error", data);
        setResult(data.message);
        toast.error(data.message)
      }
    };

  return (
    <div className='w-full pt-28   flex flex-col items-center' id="contact">
            <div className='text-4xl font-bold mb-16 text-blue-800 '>Contact Me</div>
            <form onSubmit={onSubmit}  className={`flex flex-col gap-5  ${theme === "black" ? "text-white" : "text-black"} rounded-md  w-[90%] md:w-[70%] px-5 pb-10 pt-7 shadow-md ${theme === "black" ? "bg-slate-900" : "shadow-gray-400"}`}>

           
 

                <div className='text-2xl flex flex-col w-full gap-1'>
                    <label htmlFor="name">Name:</label>
                    <input id="name" required name='name' className='rounded-md bg-gray-300 border-none  text-black text-2xl px-2 pb-2 pt-1' type="text" />    
                </div>
                <div className='text-2xl flex flex-col w-full gap-1'>
                    <label htmlFor="email">Email:</label>
                    <input  name='email' required className='rounded-md bg-gray-300 border-none  text-black text-2xl px-2 pb-2 pt-1' id="email" type="email" />    
                </div>
                <div className='text-2xl flex flex-col w-full gap-1' >
                    <label htmlFor="message">Message:</label>
                    <textarea name='message' required className='rounded-md h-32 bg-gray-300 border-none text-black text-2xl pt-1 pb-2 px-2 ' id="message" type="text" ></textarea>   
                </div>

                <div>
                    <button type='submit'  className={`text-center text-white font-bold hover:bg-blue-950 bg-blue-700 w-full text-2xl py-2 rounded-md ${result === "Sending...." ? "opacity-50 cursor-not-allowed" : ""}`}

                        disabled={result === "Sending...."} >
                        {`${result}`}

                    </button>
                </div>
        </form>
            
   
    </div>
  )
}

export default Contact
