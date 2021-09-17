import spinner from './spinner.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading" />
            <h1>Data is loading...</h1>
        </div>
    )
}
export default Loader