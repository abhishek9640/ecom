import './globals.css'; // Import global styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavigationBar from './components/NavigationBar';


export const metadata = {
  title: 'Puella',
  description: 'Puella',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <NavigationBar /> */}
        {children}
      </body>
    </html>
  );
}
