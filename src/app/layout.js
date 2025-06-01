import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Add or remove weights as needed
});


export const metadata = {
  title: 'TLC - The Learning Centre ',
  description: 'Established in 2019, The Learning Centre is an independent, small-group special needs learning platform in Cape Town, Western Cape. We promote each learner\'s full potential through individually designed programs, integrating ABA and WCED special needs curricula, supported by highly skilled educators in a relaxed, fully equipped environment. Our home away from home.',
  keywords: 'special needs school, learning centre, personalized learning, child development, special education, inclusive education, therapeutic support, South Africa, Cape Town, ABA curriculum, WCED special needs curriculum',
  openGraph: {
    type: 'website',
    url: 'https://www.thelearningcentre.co.za/',
    title: 'The Learning Centre - Inclusive learning for all',
    description: 'Established in 2019, The Learning Centre is an independent, small-group special needs learning platform in Cape Town, Western Cape. We promote each learner\'s full potential through individually designed programs, integrating ABA and WCED special needs curricula, supported by highly skilled educators in a relaxed, fully equipped environment. Our home away from home.',
    images: [{ url: 'https://placehold.co/1200x630/222222/FFFFFF?text=The+Learning+Centre+OG' }], // Replace with a compelling image for social sharing
  },
  twitter: {
    card: 'summary_large_image',
    url: 'https://www.thelearningcentre.co.za/',
    title: 'The Learning Centre - Inclusive learning for all',
    description: 'Established in 2019, The Learning Centre is an independent, small-group special needs learning platform in Cape Town, Western Cape. We promote each learner\'s full potential through individually designed programs, integrating ABA and WCED special needs curricula, supported by highly skilled educators in a relaxed, fully equipped environment. Our home away from home.',
    images: ['https://placehold.co/1200x675/222222/FFFFFF?text=The+Learning+Centre+Twitter'], // Replace with a compelling image for social sharing
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" class="scroll-smooth">
      <body
        className={`${lexend.variable} antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
