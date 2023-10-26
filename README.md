# Invoice Generator App

Welcome to the Invoice Generator App project! This app is designed to simplify the process of creating, managing, and sending invoices. Whether you're a business owner or a developer looking to learn, this project has something for everyone.

## Features

- **Modern Landing Page:** Impress clients with a stunning and professional landing page.
- **Invoice Creation:** Generate invoices with ease, including logo upload and loading spinners.
- **Download and Print:** Allow users to download and print their invoices effortlessly.
- **Cloud Storage:** Securely store invoices in the cloud for easy access from anywhere.
- **Email Integration:** Send invoices via email, making business communication seamless.
- **Authentication System:** Ensure secure access to the app for users.
- **Single Invoice View:** Explore individual invoices with a user-friendly interface.
- **Source Code:** Access and customize the source code for learning and customization.

## Installation

To run this project locally, follow these steps:

1. Get the Source Code.
   `Grab the Link from Video Description`
2. Create a `.env` file in the project root directory and add the following keys:

   ```dotenv
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
   DATABASE_URL=
   RESEND_API_KEY=
   NEXTAUTH_URL=
   NEXT_PUBLIC_BASE_URL=
   NEXTAUTH_SECRET=

   ```

## Install the project dependencies.

`cd invoice-generator-app
npm install`

## Modify all fetch requests in the following components to use the NEXT_PUBLIC_BASE_URL from the environmental variables:

1. RegisterForm Component
2. Create Invoice page component
3. ActionButons Component
4. Fetch requests in the getInvoices and getInvoiceById functions in the libs folder.

## Modify the Prisma schema in the schema.prisma file to include the relationships between User, Invoice, and Row models.

## Update the package.json file to include a postinstall command for Prisma generation:

```
   "scripts": {
   "dev": "next dev",
   "build": "next build",
   "start": "next start",
   "lint": "next lint",
   "postinstall": "prisma generate"
   }

```

Start the development server.

Open your web browser and visit http://localhost:3000 to access the app.

## Contributing

We welcome contributions from the community. If you'd like to contribute to this project, please follow our [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to contact us at your@email.com.

---

Thank you for supporting our project! Enjoy the Invoice Generator App and happy invoicing!

# invoice-app-deployment
