
import './tickets.css'

function Tickets({ item }) {

    const cardInfo = item.item

    return (
        <section className='tickets__container'>
            <section className='tickets__what-container'>
                <p className='tickets__info-text'>WHAT</p>
                <h1 className='tickets__what-heading'> {cardInfo.name} </h1>
            </section>
            <section className='tickets__where-container'>
                <p className='tickets__info-text'>WHERE</p>
                <h2 className='tickets__where-heading'>{cardInfo.where}</h2>
            </section>
            <section className='tickets__when-from-to-container'>
                <time className='tickets__date-time-box'>
                    <p className='tickets__info-text'>WHEN</p>
                    <h3 className='tickets__date-time'>
                        <span>{cardInfo.when.date.slice(0, 2)}</span>
                        <span>{cardInfo.when.date.slice(2, 6).toUpperCase()}</span>
                    </h3>
                </time>
                <time className='tickets__date-time-box'>
                    <p className='tickets__info-text'>FROM</p>
                    <h3 className='tickets__date-time'> {cardInfo.when.from}</h3>
                </time>
                <time className='tickets__date-time-box'>
                    <p className='tickets__info-text'>TO</p>
                    <h3 className='tickets__date-time'> {cardInfo.when.to}</h3>
                </time>
            </section>
            <section className='tickets__info-container'>
                <p className='tickets__info-text'>INFO</p>
                <p className='tickets__info__seat-section'> {`Section ${item.section} - seat ${item.seat}`} </p>
            </section>
            <section className='tickets__barcode-container'>
                <p className='tickets__barcode'> {item.biljettId} </p>
                <p className='tickets__barcode-clarification'>{item.biljettId}</p>
            </section>
        </section>
    )
}

export default Tickets