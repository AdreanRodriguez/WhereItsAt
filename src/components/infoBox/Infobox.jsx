
import './infobox.css'
import plus from '../../assets/plus.svg'
import minus from '../../assets/minus.svg'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';


function Infobox({ event }) {

    const { cart, addEvent, removeEvent } = useCartStore((state) => ({
        cart: state.cart,
        addEvent: state.addEvent,
        removeEvent: state.removeEvent,
    }))

    let location = useLocation()
    const [filterItem, setFilterItem] = useState({})


    useEffect(() => {
        setFilterItem(...cart.filter((item) => item.id === event.id))
    }, [cart, event])


    return (
        <section className='infobox__price-container'>
            <section className='infobox__total-price'>
                {                                                                               //  optional chaining ?.
                    location.pathname !== '/order/' ? <p className='infobox__center-count'>{filterItem?.qty > 0 ? filterItem.price * filterItem.qty : 0}</p> :
                        <section className='infobox__order-wrapper'>
                            <p className='infobox__artist'>
                                {event.name}
                            </p>
                            <p className='infobox__when-to-text'>
                                {`${event.when.date} kl ${event.when.from} - ${event.when.to}`}
                            </p>
                        </section>
                }
            </section>
            <section className='infobox__operator-wrapper'>
                <button className='infobox__operators-minus' onClick={() => removeEvent(event)}>
                    <img src={minus} alt="rectangle" />
                </button>
                <p className='infobox__ticket-amount'> {filterItem ? filterItem.qty : 0} </p>
                <button className='infobox__operators-plus' onClick={() => addEvent(event)}>
                    <img src={plus} alt="rectangle" />
                </button>
            </section>
        </section>
    )
}

export default Infobox