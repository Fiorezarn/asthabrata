import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Background from '../../assets/backgroundgradient.png';

function App() {
 return (
  <>
   <Navbar />
   <div
    className='w-full bg-gradient-to-br from-[#0D2143] to-[#3F72AF] py-32 lg:py-28 px-8 sm:px-36 relative'
    id='contact'
    style={{
     backgroundImage: `url(${Background})`,
     backgroundSize: 'cover',
     backgroundPosition: 'center',
    }}>
    <Contact />
   </div>
   <Footer />
  </>
 );
}

export default App;
