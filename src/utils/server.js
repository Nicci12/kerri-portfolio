const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  sgMail.setApiKey('your-sendgrid-api-key');

  const msg = {
    to: 'your-email-address@gmail.com',
    from: email,
    subject: 'New Message from Contact Form',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  sgMail.send(msg);

  res.status(200).json({ message: 'Email sent successfully!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});