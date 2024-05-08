
import './eventCard.css'
import { Link } from 'react-router-dom';
import { useEventStore } from '../../store/eventStore';

function EventCard() {

  const { events } = useEventStore((state) => ({ events: state.events }))


  return (
    <section className='eventCard__info-wrapper'>
      {
        events.map((event, index) =>
        (
          <Link className='eventCard__link' key={index} to={`/event/${event.id}`} >
            <article className='eventCard__container'>
              <aside className='eventCard__date-container'>
                <time className='eventCard__date'>
                  <span>{event.when.date.substring(0, 2)}</span>
                  <span>{event.when.date.substring(2, 6).toUpperCase()}</span>
                </time>
              </aside>
              <article className='eventCard__info-container'>
                <h2 className='eventCard__artist'> {event.name} </h2>
                <h3 className='eventCard__location'> {event.where} </h3>
                <section className='eventCard__timePrice-container'>
                  <time className='eventCard__time'> {event.when.from} - {event.when.to} </time>
                  <span className='eventCard__price'> {event.price === 0 ? `GRATIS` : `${event.price} sek`} </span>
                </section>
              </article>
            </article>
          </Link>
        ))
      }
    </section>
  )
}

export default EventCard;