// import React, { useRef } from "react";
// import styled from "styled-components";
// import emailjs from "@emailjs/browser";


// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 12px;
//   z-index: 1;
//   align-items: center;
//   @media (max-width: 960px) {
//     padding: 0px;
//   }
// `;

// const Wrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   max-width: 1350px;
//   padding: 0px 0px 80px 0px;
//   gap: 12px;
//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;

// const Title = styled.div`
//   font-size: 52px;
//   text-align: center;
//   font-weight: 600;
//   margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 32px;
//   }
// `;

// const Desc = styled.div`
//   font-size: 18px;
//   text-align: center;
//   max-width: 600px;
//   color: ${({ theme }) => theme.text_secondary};
//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 16px;
//   }
// `;
// const ContactForm = styled.form`
//   width: 95%;
//   max-width: 600px;
//   display: flex;
//   flex-direction: column;
//   background-color: rgba(17, 25, 40, 0.83);
//   border: 1px solid rgba(255, 255, 255, 0.125);
//   padding: 32px;
//   border-radius: 12px;
//   box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
//   margin-top: 28px;
//   gap: 12px;
// `;
// const ContactTitle = styled.div`
//   font-size: 28px;
//   margin-bottom: 6px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_primary};
// `;
// const ContactInput = styled.input`
//   flex: 1;
//   background-color: transparent;
//   border: 1px solid ${({ theme }) => theme.text_secondary + 50};
//   outline: none;
//   font-size: 18px;
//   color: ${({ theme }) => theme.text_primary};
//   border-radius: 12px;
//   padding: 12px 16px;
//   &:focus {
//     border: 1px solid ${({ theme }) => theme.primary};
//   }
// `;
// const ContactInputMessage = styled.textarea`
//   flex: 1;
//   background-color: transparent;
//   border: 1px solid ${({ theme }) => theme.text_secondary + 50};
//   outline: none;
//   font-size: 18px;
//   color: ${({ theme }) => theme.text_primary};
//   border-radius: 12px;
//   padding: 12px 16px;
//   &:focus {
//     border: 1px solid ${({ theme }) => theme.primary};
//   }
// `;
// const ContactButton = styled.input`
//   width: 100%;
//   text-decoration: none;
//   text-align: center;
//   background: hsla(271, 100%, 50%, 1);
//   background: linear-gradient(
//     225deg,
//     hsla(271, 100%, 50%, 1) 0%,
//     hsla(294, 100%, 50%, 1) 100%
//   );
//   background: -moz-linear-gradient(
//     225deg,
//     hsla(271, 100%, 50%, 1) 0%,
//     hsla(294, 100%, 50%, 1) 100%
//   );
//   background: -webkit-linear-gradient(
//     225deg,
//     hsla(271, 100%, 50%, 1) 0%,
//     hsla(294, 100%, 50%, 1) 100%
//   );
//   padding: 13px 16px;
//   margin-top: 2px;
//   border-radius: 12px;
//   border: none;
//   color: ${({ theme }) => theme.text_primary};
//   font-size: 18px;
//   font-weight: 600;
// `;


// const Contact = () => {
//   const form = useRef(null); // Initialize ref with null

//   const handleSubmit = (e) => {
//       e.preventDefault();

//       if (form.current) { // Check if form.current is not null
//           emailjs
//               .sendForm(
//                   "service_62v73jp",
//                   "template_uumdq5c",
//                   form.current,
//                   "5aAcUTvqoxHTCRKGU"
//               )
//               .then(
//                   (result) => {
//                       alert("Message Sent");
//                       form.current.reset(); // Corrected: Use form.current.reset()
//                   },
//                   (error) => {
//                       alert("Error sending message: " + error.text); // Improved error handling
//                   }
//               );
//       } else {
//           console.error("Form element not found!"); // Handle the case where the form is not found
//       }
//   };

//   return (
//       <Container>
//           <Wrapper>
            
//               <Title>Contact</Title>
//               <Desc>
//                   Feel free to reach out to me for any questions or opportunities!
//               </Desc>
//               <ContactForm ref={form} onSubmit={handleSubmit}> {/* Add ref to the form */}
//                   <ContactTitle>Email Me 🚀</ContactTitle>
//                   <ContactInput placeholder="Your Email" name="from_email" required /> {/* Added required attribute */}
//                   <ContactInput placeholder="Your Name" name="from_name" required/> {/* Added required attribute */}
//                   <ContactInput placeholder="Subject" name="subject" required/> {/* Added required attribute */}
//                   <ContactInputMessage placeholder="Message" name="message" rows={4} required/> {/* Added required attribute */}
//                   <ContactButton type="submit" value="Send" />
//               </ContactForm>
//           </Wrapper>
//       </Container>
//   );
// };

// export default Contact;

import React, { useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

const Contact = () => {
  const form = useRef(null); // Initialize ref with null
  const [result, setResult] = useState(""); // To track the result message

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    // Append Web3Forms API Key
    formData.append("access_key", "024a2d54-9c1a-40a7-bc5c-af45ef117f26");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset(); // Reset form on successful submission
        setResult(
          <span style={{ color: "green", fontWeight: "bold" }}>
            Form Submitted Successfully! 
            <br />
            I will get back to you as soon as possible.
          </span>
        ); // Show styled success message
      } else {
        setResult(data.message);
        alert(`Error: ${data.message}`); // Show toast message for errors
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Error sending message");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={onSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="email" required />
          <ContactInput placeholder="Your Name" name="name" required />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage
            placeholder="Message"
            name="message"
            rows={4}
            required
          />
          <ContactButton type="submit" value="Submit" />
        </ContactForm>
        <span>{result}</span>
      </Wrapper>
    </Container>
  );
};

export default Contact;
