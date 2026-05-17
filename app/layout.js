import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'SHEILA Alteration Clothing — Expert Tailoring in Chinatown, Singapore',
  description: 'Professional clothing alterations and tailoring services in Chinatown Complex, Singapore. From wedding dresses to suits, SHEILA delivers precision fitting and expert craftsmanship for every garment.',
  keywords: 'clothing alteration, tailoring, Singapore, Chinatown, dress alteration, suit tailoring, wedding dress, hem, resize, custom fitting',
  openGraph: {
    title: 'SHEILA Alteration Clothing — Expert Tailoring in Singapore',
    description: 'Professional clothing alterations with precision and care. Located in the heart of Chinatown Complex.',
    type: 'website',
    locale: 'en_SG',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
