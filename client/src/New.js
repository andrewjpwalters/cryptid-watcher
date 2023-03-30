import CryptidForm from "./CryptidForm";
import LocationForm from "./LocationForm";

function New({ user }) {
    return (
        <>
            <h1>Hello from New</h1>
            <CryptidForm user={user} />
            <LocationForm />

        </>
    )
}

export default New;