# Christian Fire Camp Application Form

A React application built with Vite and Tailwind CSS for a Christian mission application form.

## Features

- Responsive design that works on mobile and desktop
- Form validation
- Modern UI with Tailwind CSS
- Reusable components

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

- `src/components/` - Reusable UI components
- `src/pages/` - Page components
- `src/assets/` - Static assets like images

## Building for Production

To build the application for production, run:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## License

This project is licensed under the MIT License.

## Email Integration

This application uses EmailJS to send form submissions via email. To set up EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service and template
3. Update the credentials in `src/components/ApplicationForm.tsx`

For detailed setup instructions, see [EMAILJS_SETUP.md](./EMAILJS_SETUP.md).
