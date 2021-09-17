const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-box">
            <h2>Event location information</h2>
            <ul>
                <li>id: <strong>{ info.id }</strong></li>
                <li>title: <strong>{ info.title }</strong></li>
            </ul>
        </div>
    )
}
export default LocationInfoBox