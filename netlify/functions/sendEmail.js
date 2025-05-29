const { Resend } = require('resend');

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
        console.error("Method not allowed");
    return {
      statusCode: 405,
       headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Initialize Resend with API key from environment variable
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Parse request body if needed
    let body = {};
    if (event.body) {
      try {
        body = JSON.parse(event.body);
      } catch (e) {
        console.error("Invalid JSON in request:", e);
        return {
          statusCode: 400,
           headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
      },
          body: JSON.stringify({ error: 'Invalid JSON in request body' })
        };
      }
    }

    // Send email with Resend
    const { data, error } = await resend.emails.send({
      from: `${body.name} <no-reply@resend.dev>`,
      to:  [process.env.RECIEVER_MAIl],
      subject: body.action,
      html: `<strong>${body.message}</strong>
      <p>my mail is ${body.email} please contact me </p>
      `,
    });

    if (error) {
      console.error('Failed to send email',error);
      return {
        statusCode: 500,
         headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({ error: 'Failed to send email', details: error })
      };
    }
    
    return {
      statusCode: 200,
 headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        data: data 
      })
    };

  } catch (error) {
    console.error('Internal server error: ', error.message)
    return {
      statusCode: 500,
       headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      })
    };
  }
};