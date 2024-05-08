
import './eventpage.css'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEventStore } from '../../store/eventStore';
import Infobox from '../../components/infoBox/Infobox';

function Eventpage() {

  const { events } = useEventStore((state) => ({ events: state.events }))

  const { id } = useParams()
  const [event, setEvent] = useState({})
  const navigateTo = useNavigate()
  const handleNavigateTo = (e) => { navigateTo(e) }

  useEffect(() => {
    const event = events.find(event => event.id === id);
    setEvent(event)
  }, [events])


  return (
    <main className='eventpage__container'>
      {event && event.id === id ?
        <>
          <h1 className='eventpage__heading'>Event</h1>
          <p className='eventpage__welcome-text'>You are about to score<br />some tickets to</p>
          <section>
            <section className='eventpage__ticket-container'>
              <h2 className='eventpage__artist'> {event.name} </h2>
              <time className='eventpage__date-time'>{`${event.when.date} kl ${event.when.from} - ${event.when.to}`}</time>
              <h3 className='eventpage__location'>{`@ ${event.where}`}</h3>
            </section>
            <Infobox event={event} />
          </section>
          <button onClick={(e) => handleNavigateTo('/order/')} className='eventpage__cart-btn'>Lägg i varukorgen</button>
        </>
        : <p className='errorMsg'>Event not found...</p>}
    </main>
  )
}

export default Eventpage;