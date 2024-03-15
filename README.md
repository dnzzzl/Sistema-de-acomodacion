## Definición del proyecto

Diseñar un sistema de reservas de calendario para un hotel o alojamiento que permita a los huéspedes reservar habitaciones para una duración determinada, con los siguientes requisitos:

**Requisitos:**

1. **Periodo de Reserva**: El sistema debe permitir reservas para las noches del 10, 11 y 12 de abril. Los huéspedes deben reservar al menos una de estas noches, pero la 13 está reservada para la salida y no se puede reservar.
2. **Estadía mínima**: El número mínimo de noches que un huésped puede reservar es 3.
3. **Prórroga opcional**: Los invitados deben tener la opción de extender su estancia antes o después de las fechas requeridas (10-12 de abril), la disponibilidad no es una preocupación ya que no esperamos que asistan más de 20 personas.
4. Tipos de habitación y tarifas
    - Habitación individual: 270 $ por noche
    - Habitación doble (para 2 personas): $160 por persona, por noche (total $320 por noche)
5. Interfaz de usuario El sistema debe proporcionar una interfaz fácil de usar para que los huéspedes introduzcan:
    1. fechas deseadas
    2. tipo de habitación
    3. nombre/nombres de los asistentes si la habitación es doble
    4. dirección de correo electrónico
6. La interfaz de usuario estará desarrollada en NextJS y alojada por sí misma en una plataforma como vercel.
7. **Confirmación de reservas**: Nuestra principal preocupación es: una vez realizada la reserva con éxito, el sistema debe generar un registro con los datos de entrada, un correo electrónico de confirmación debe ser enviado tanto al cliente como a la gestión, una copia del registro debe ser enviada al cliente.
    1. Firebase
    2. AWS Lambda + Amazon Simple Email Service (SES)
    3. Azure Functions + Azure Cosmos DB
    4. Google Cloud Functions + Cloud Firestore
8. **Gestión de disponibilidad**: La disponibilidad no es una preocupación ya que no esperamos que asistan más de 20 personas.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.