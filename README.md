# Where it's @ individuell examinationsuppgift, Frontendramverk

## Jag har använt mig av
- Pages & Components
- useState, useEffect
- Props
- API-hantering med axios
- Routing mellan Pages med react-router-dom
- Avancerad statehantering med externt bibliotek ( Zustand )


## Valde även att lägga till dessa hookar samt ett bibliotek

## useParams
Denna hook valde jag att applicera i min kod för att enkelt hämta id från adressfältet/URL:en.

## useLocation
Jag valde denna för att man kan kolla vilken sida jag är på och rendera ut olika saker beroende på vad som ska visas eller ej.
Med denna hook kan jag återanvända min komponent som heter Infobox. 
Om jag är på Eventpage så vill jag visa summan och antal medans om jag är på Orderpage vill jag rendera ut artist/bandet som spelar och datum med klockslag.

## useNavigate
Den här är perfekt att använda för att kunna navigera sig runt på sin sida/applikationen. 
Jag valde att ta med den dels för det var kul att lära sig en till hook men även att den var så lättanvänd och så blir koden lättare att läsa tycker jag.

## React Icons
Här har vi ett bibliotek fullt av roliga ikoner som är lätt att applicera på sin app/hemsida. Jag valde att använda mig av denna i min navigationsmeny.
Det ser lite roligare ut att kunna trycka på ikoner för att ta sig mellan sidorna. Tyckte dock det var svårt att bara köra med ikoner som ändå är ganska självbeskrivande så därför la jag även till namnen på de olika sidorna så att alla lätt kan förstå vilken sida man kan ta sig till.