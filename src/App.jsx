
import './App.css'
import { useEffect } from 'react';
import { handleApi } from './assets/api';
import { Route, Routes } from 'react-router-dom';
import { useCartStore } from './store/cartStore';
import Homepage from './pages/homepage/Homepage';
import { useEventStore } from './store/eventStore';
import Orderpage from './pages/orderpage/Orderpage';
import Eventpage from './pages/eventpage/Eventpage';
import Eventspage from './pages/eventspage/Eventspage';
import Ticketspage from './pages/ticketspage/Ticketspage';
import Navigation from './components/navigation/Navigation';


function App() {
  const { setEvents } = useEventStore()
  const { loadCart } = useCartStore()

  useEffect(() => {
    handleApi()
      .then(data => {
        setEvents(data.events)
        loadCart(data.events)
      })
      .catch(error => {
        console.error(`Error fetching events:`, error)
      })
  }, [])


  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/order/' element={<Orderpage />} />
        <Route path='/events/' element={<Eventspage />} />
        <Route path='/event/:id' element={<Eventpage />} />
        <Route path='/tickets/' element={<Ticketspage />} />
      </Routes>
      <Navigation />
    </div>

  )
}

export default App;
