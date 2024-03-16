"use server"
import { sql } from '@vercel/postgres';
import 'dotenv/config'
import {Resend} from 'resend' 
//get resend_api api from .env

const resendApiKey = process.env.RESEND_API_KEY
const adminEmail = process.env.ADMIN_EMAIL
const fromEmail = process.env.FROM_EMAIL

console.log(resendApiKey)
export async function createReservation(formData: FormData){
    const data = Object.fromEntries(formData)
    // Destructure the form data
    const { stay_type, date, email, name, name2 } = JSON.parse(JSON.stringify(data));
    // Validate the form date data
    const dateObj = JSON.parse(JSON.parse(JSON.stringify(date)));
    const checkInDate = new Date(dateObj.from);
    const checkOutDate = new Date(dateObj.to);
    const checkInDateStr = checkInDate.toISOString().split('T')[0];
    const checkOutDateStr = checkOutDate.toISOString().split('T')[0];
    const email_object = {
        from: fromEmail,
        to: email,
        subject: 'Reservation Confirmation',
        html: `<p>Dear ${name},</p><p>Your reservation has been confirmed.</p><p>Check-in date: ${checkInDateStr}</p><p>Check-out date: ${checkOutDateStr}</p>`
    }
    const admin_email_object = {
        from: fromEmail,
        to: adminEmail,
        subject: 'Nueva Reservacion Realizada',
        html: `<p>Nueva Reservacion Realizada:</p><p>Tipo de estadia: ${stay_type}</p><p>Fecha de llegada: ${checkInDateStr}</p><p>Fecha de salida: ${checkOutDateStr}</p><p>Email: ${email}</p><p>Nombre: ${name}</p><p>Segunda persona (Si aplica): ${name2}</p>`
    }

    // Add the reservation to the database
    try {
        await addReservationToDB({stay_type, check_in: checkInDateStr, check_out: checkOutDateStr, email, name, name2});
    } catch (error:any) {
        if (error.message.includes('relation "reservations" does not exist')) {
            await sql`CREATE TABLE reservations (
                id SERIAL PRIMARY KEY,
                stay_type TEXT,
                check_in DATE,
                check_out DATE,
                email TEXT,
                name TEXT,
                name2 TEXT
            )`
        await addReservationToDB({stay_type, check_in: checkInDateStr, check_out: checkOutDateStr, email, name, name2});

        } else {
          // Rethrow the error if it's not the one we're expecting
          console.error('Error adding reservation:',error);
          return {
            sent: false,
            error: true,
            message: error
          }
        }
      }

      // Send an email
      try {
        Send_email(email_object)
        Send_email(admin_email_object)
        return {
          sent: true,
          error: false,
          message: 'Reservation created successfully, confirmation email sent'
        }
      } catch (error) {
        console.error('Error sending email:', error);
        return {
          sent: false,
          error: true,
          message: error
        }
      }
    }

async function addReservationToDB({stay_type, check_in, check_out, email, name, name2}: {stay_type: string, check_in: string, check_out: string, email: string, name: string, name2: string}) {
    // Add the reservation to the database
    return sql`INSERT INTO reservations (stay_type, check_in, check_out, email, name, name2) VALUES (${stay_type}, ${check_in}, ${check_out}, ${email}, ${name}, ${name2})`;
}
async function Send_email({from, to, subject, html}: {from: string | undefined, to: string | undefined, subject: string, html: string}) {
    const resend = new Resend(resendApiKey);
    if (from && to){
        return resend.emails.send({from, to, subject, html});
    }
    else{
        throw new Error("from and to must be provided")
    }
}