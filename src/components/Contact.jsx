import React from 'react'
import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa'

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xpwjoqgg", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        const payload = await res.json().catch(() => ({}));
        setStatus("error");
        setError(
          payload?.errors?.[0]?.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  };

  return (
        <section id="contact" className='scroll-mt-5 md:scroll-mt-5'>
        <div className='bg-black text-white py-20'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <div className='flex-1'>
                        <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-500 mb-4'>Let's Talk</h3>
                        <p>I am open to discussing new opportunities, collaborations, or simply connecting with like-minded individuals. Feel free to reach out to me through any of the following methods:</p>
                        <div className='mb-4 mt-8'>
                            <FaEnvelope className='inline-block text-rose-400 mr-2'></FaEnvelope>
                            <a href="mailto:annayan@uchicago.edu" className='hover:underline'> 
                                annayan@uchicago.edu
                            </a>
                        </div>
                        <div className='mb-4'>
                            <FaPhone className='inline-block text-rose-400 mr-2'></FaPhone>
                            <span>+16306088237</span>
                        </div>
                        <div className='mb-4'>
                            <FaMapMarkedAlt className='inline-block text-rose-400 mr-2'></FaMapMarkedAlt>
                            <span>Chicago, IL</span>
                        </div>
                    </div>
                    <div className='flex-1 w-full'>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Honeypot (spam trap) */}
                            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} />

                            {/* Optional subject shown in incoming email */}
                            <input type="hidden" name="_subject" value="New message from portfolio" />

                            <div>
                                <label htmlFor="name" className="block mb-2">Your Name</label>
                                <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-rose-400"
                                placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2">Email</label>
                                <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-rose-400"
                                placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2">Message</label>
                                <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                                className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-rose-400"
                                placeholder="Enter your message"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="bg-gradient-to-r from-rose-400 to-blue-500 text-white transform transition-transform 
                                        duration-300 hover:scale-110 px-8 py-2 rounded-full"
                            >
                                {status === "sending" ? "Sending..." : "Send"}
                            </button>

                            {status === "sent" && (
                                <p className="text-green-200">Thanks! Your message has been sent.</p>
                            )}
                            {status === "error" && (
                                <p className="text-rose-400">Error: {error}</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}







// // function ContactForm() {
// //   const [state, handleSubmit] = useForm("xpwjoqgg");
// //   if (state.succeeded) {
// //       return <p>Thanks for joining!</p>;
// //   }
// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <label htmlFor="email">
// //         Email Address
// //       </label>
// //       <input
// //         id="email"
// //         type="email" 
// //         name="email"
// //       />
// //       <ValidationError 
// //         prefix="Email" 
// //         field="email"
// //         errors={state.errors}
// //       />
// //       <textarea
// //         id="message"
// //         name="message"
// //       />
// //       <ValidationError 
// //         prefix="Message" 
// //         field="message"
// //         errors={state.errors}
// //       />
// //       <button type="submit" disabled={state.submitting}>
// //         Submit
// //       </button>
// //     </form>
// //   );
// // }

// const Contact = () => {
//   return (
//     <section id="contact" className='scroll-mt-5 md:scroll-mt-5'>
//         <div className='bg-black text-white py-20'>
//             <div className='container mx-auto px-8 md:px-16 lg:px-24'>
//                 <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
//                 <div className='flex flex-col md:flex-row items-center md:space-x-12'>
//                     <div className='flex-1'>
//                         <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-500 mb-4'>Let's Talk</h3>
//                         <p>I am open to discussing new opportunities, collaborations, or simply connecting with like-minded individuals. Feel free to reach out to me through any of the following methods:</p>
//                         <div className='mb-4 mt-8'>
//                             <FaEnvelope className='inline-block text-rose-400 mr-2'></FaEnvelope>
//                             <a href="mailto:annayan@uchicago.edu" className='hover:underline'> 
//                                 annayan@uchicago.edu
//                             </a>
//                         </div>
//                         <div className='mb-4'>
//                             <FaPhone className='inline-block text-rose-400 mr-2'></FaPhone>
//                             <span>+16306088237</span>
//                         </div>
//                         <div className='mb-4'>
//                             <FaMapMarkedAlt className='inline-block text-rose-400 mr-2'></FaMapMarkedAlt>
//                             <span>Chicago, IL</span>
//                         </div>
//                     </div>
//                     <div className='flex-1 w-full'>
//                         <form className='space-y-4'>
//                             <div>
//                                 <label htmlFor='name' className='block mb-2'>Your Name</label>
//                                 <input type='text'
//                                 className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-rose-400'
//                                 placeholder='Enter your name'/>
//                             </div>
//                             <div>
//                                 <label htmlFor='email' className='block mb-2'>Email</label>
//                                 <input type='email'
//                                 className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-rose-400'
//                                 placeholder='Enter your email'/>
//                             </div>
//                             <div>
//                                 <label htmlFor='message' className='block mb-2'>Message</label>
//                                 <textarea
//                                 className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-rose-400'
//                                 rows='5'
//                                 placeholder='Enter your message'/>
//                             </div>
//                             <button className='bg-gradient-to-r from-rose-400 to-blue-500 
//                             text-white hidden md:inline transform transition-transform 
//                             duration-300 hover:scale-120 px-8 py-2 rounded-full'>Send</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Contact