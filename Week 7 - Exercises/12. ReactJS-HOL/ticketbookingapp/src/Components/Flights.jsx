import styles from "./Flight.module.css"

class Flight {
    constructor(flightNo, name, arrival, departure, status, price){
        this.flightNo = flightNo;
        this.name = name;
        this.arrival = arrival;
        this.departure = departure;
        this.status = status;
        this.price = price;
    }
}

const FlightDetails = [
    new Flight(1, "AirIndia", "09:00", "11:00", "Onboarding", 1400),
    new Flight(2, "Spicyjet", "10:30", "13:15", "Delayed", 2200),
    new Flight(3, "Kingfisher", "23:45", "01:00", "Onboarding", 1500),
    new Flight(4, "Vistara", "12:00", "14:00", "Cancelled", 3000),
    new Flight(5, "UAEmirates", "07:45", "10:00", "Delayed", 5600),
]

export function FlightList(props) {

    if (props.isLogged) { 
        return <></> 
    }
    else {
        return (
            <div>
                <h1>Flight Details:-</h1>
                <table className={styles.flightTable} >
                    <tr>
                        <th>Flight No.</th>
                        <th>Name</th>
                        <th>Arrival</th>
                        <th>Departure</th>
                        <th>Status</th>
                        <th>Ticket Price</th>
                    </tr>
                    {FlightDetails.map(flight => (
                        <tr>
                            <td>{flight.flightNo}</td>
                            <td>{flight.name}</td>
                            <td>{flight.arrival}</td>
                            <td>{flight.departure}</td>
                            <td>{flight.status}</td>
                            <td>Rs.{flight.price}</td>
                        </tr>
                    ))}
                </table>
            </div>
        );
    }
}