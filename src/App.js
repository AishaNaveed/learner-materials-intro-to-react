import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import CindyClawFord from './Components/CindyClawford';
import LittleMissPerfect from './Components/LittleMissPerfect';
import ElTaco from './Components/ElTaco';
import MrGrumpy from './Components/MrGrumpy';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <div className="cards__wrapper">
          <CindyClawFord />
          <LittleMissPerfect />
          <ElTaco />
          <MrGrumpy />

        </div>
      </main>
      <Footer />

    </>
  );
}

export default App;
