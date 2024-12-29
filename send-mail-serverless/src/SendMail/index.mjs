import nodemailer from "nodemailer";

const contactMail = async (data) => {
  const { SMTP_HOST, SMTP_USER, SMTP_PASSWORD } = process.env;
  const transporter = await nodemailer.createTransport({
    host: SMTP_HOST,
    secure: false,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailSubject = `${data.subject}`;
  let mailBody = `${data.message}`;

  const mailOption = {
    from: SMTP_USER,
    to: SMTP_USER,
    subject: mailSubject,
    html: mailBody,
  };
  try {
    await transporter.sendMail(mailOption);
    return Promise.resolve("Message Sent Successfully");
  } catch (error) {
    return Promise.reject(error);
  }
};

export const handler = async (event) => {
  // Log the event argument for debugging and for use in local development.
  console.log(JSON.stringify(event, undefined, 2));

  const data = JSON.parse(event.body);

  try {
    await contactMail(data);
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
         "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
      body: JSON.stringify({
        success: true,
        message: "Email Send Successfully!",
      }),
    };
    return response;
  } catch (error) {
    console.log(error);
    const response = {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
         "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
      body: JSON.stringify({
        success: false,
        message: "Message Could not be Sent",
      }),
    };
    return response;
  };
};


// Ejemplo de body de la petición
// {
//   "subject": "Test Email",
//   "message": "Hello World"
// }

// Ejemplo de respuesta
// {
//   "success": true,
//   "message": "Email Send Successfully!"
// }

// Ejemplo de respuesta en caso de error
// {
//   "success": false,
//   "message": "Message Could not be Sent"
// }
