import emailjs from 'emailjs-com';

const sendEmail = (templateId, serviceId, userId, name, email, message) => {
  emailjs.send(serviceId, templateId, { name, email, message }, userId)
   .then(() => {
      console.log('Email sent successfully!');
    })
   .catch((error) => {
      console.error('Error sending email:', error);
    });
};

export default sendEmail;