import './eventpage.css'
import EventCard from '../../components/eventCard/EventCard';

function Eventspage() {

  return (
    <main className='eventspage__pageWrapper'>
      <h1 className='eventspage__page-heading'>Events</h1>
      <div className="eventspage__search-container">
        <input
          className='eventspage__input'
          type="text"
          placeholder='Funktionen är som ett löfte från en politiker..'
          aria-label='Inputfield dont work'
        />
      </div>
      <EventCard />
    </main>
  )
}

export default Eventspage;