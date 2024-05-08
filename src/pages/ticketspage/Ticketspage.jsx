
import './ticketspage.css'
import { useCartStore } from '../../store/cartStore';
import Tickets from '../../components/tickets/Tickets';

function Ticketspage() {

  const { tickets } = useCartStore((state) => ({ tickets: state.tickets, }))

  return (
    <main className='ticketspage__main'>
      {tickets.length > 0 ? (tickets.map((item, id) => <Tickets item={item} key={id} /> ))
          : (<p className='ticketspage__alert-msg'>Inga aktuella ordrar.</p>)}
    </main>
  );
}

export default Ticketspage;