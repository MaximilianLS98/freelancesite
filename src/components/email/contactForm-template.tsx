import * as React from 'react'

interface EmailTemplateProps {
  email: string
  phone: string
  typeOfRequest: string
  message: string

}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ email, phone, typeOfRequest, message }) => {
    console.log(email, phone, typeOfRequest, message);
    
  return (
    <div>
      <p>You have received a new contact form submission with the following details:</p>
      <ul>
        <li>
          <strong>Email:</strong> {email}
        </li>
        <li>
          <strong>Phone:</strong> {phone}
        </li>
        <li>
          <strong>Type of Request:</strong> {typeOfRequest}
        </li>
        <li>
          <strong>Message:</strong> {message}
        </li>
      </ul>
    </div>
  )
}