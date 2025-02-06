import { EmailTemplate } from '@/components/email/contactForm-template'
import { Resend } from 'resend'
import { NextResponse, NextRequest } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const dummyTemplateData = {
    email: 'maxi@ways.no',
    phone: '1234567890',
    typeOfRequest: 'Test',
    message: 'This is a test message',
}

export async function POST(NextRequest: NextRequest) {
    console.log('POST request made to /api/resend');
    

    const body = await NextRequest.json()
    const { email, phone, typeOfRequest, message } = body

    console.log(email, phone, typeOfRequest, message + ' data from POST request');
    
  try {
    const { data, error } = await resend.emails.send({
      from: 'Kontaktskjema <maximilian@kaktusfamilien.com>',
      //   to: ['maximilian@kaktusfamilien.no'],
      to: ['maximilian@kaktusfamilien.no'],
      subject: 'Ny henvendelse',
      react: await EmailTemplate({ email, phone, typeOfRequest, message }),
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}

export async function GET() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Noen prøvde å gjøre en GET request til /api/resend',
      react: await EmailTemplate({...dummyTemplateData}),
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}