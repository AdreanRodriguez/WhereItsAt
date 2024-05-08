import './orderpage.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCartStore } from '../../store/cartStore';
import Infobox from '../../components/infoBox/Infobox';


function Orderpage() {

  const { cart, resetCart, addTicket, } = useCartStore((state) => ({
    cart: state.cart,
    addTicket: state.addTicket,
    resetCart: state.resetCart,
  }))

  const [totalPrice, setTotalPrice] = useState(0)
  const hasTickets = cart.some(item => item.qty > 0);


  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      cart.forEach(event => {
        if (event.qty >= 1) {
          total += event.price * event.qty
        }
      });
      setTotalPrice(total)
    }
    calculateTotalPrice()
  }, [cart])


  const generateSection = () => {
    let section = 'ABCDEFGHIJKLMN'
    const randomIndex = Math.floor(Math.random() * section.length)
    const randomSection = section[randomIndex]
    return randomSection
  }


  const generateTicketId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let ticketId = '#';

    for (let i = 0; i < 5; i++) {
      ticketId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return ticketId;
  };


  const generateSeat = () => {
    const seat = Math.floor(Math.random() * 400) + 1
    return seat
  }


  const handleOrder = () => {
    cart.forEach(item => {
      if (item.qty > 0) {

        const sameSeat = generateSeat()
        const section = generateSection()

        for (let i = 0; i < item.qty; i++) {
          const seat = sameSeat + i;
          const ticketWithSeat = {
            item: { ...item },
            biljettId: generateTicketId(),
            section: section,
            seat: seat,
          }
          addTicket(ticketWithSeat)
        }
      }
    })
    resetCart()
  }


  return (
    <main className='orderpage-container'>
      <h1 className='orderpage__heading'>Order</h1>
      {
        cart.map((c, index) => {
          return c.qty > 0 ? <Infobox key={index} event={c} /> : ''
        })
      }
      {hasTickets ? (
        <>
          <p className='orderpage__total-text'>Totalt värde på ordern</p>
          <div className='orderpage__total-price'> {totalPrice} sek</div>
          <Link className='orderpage__link' to="/tickets/">
            <button className='orderpage__link-btn' onClick={handleOrder} >Skicka order</button>
          </Link>
        </>
      ) : <p className='orderpage__alert-msg'>Inga aktuella ordrar.</p>}
    </main>
  )
}

export default Orderpage;
