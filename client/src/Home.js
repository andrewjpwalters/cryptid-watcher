import { Container } from "react-bootstrap"

function Home() {

    return (
        <Container fluid className="position-relative p-0">
            <h1 className="display-1 text-center">WELCOME TO CRYPTID WATCHER</h1>
            <img
                src="https://images.unsplash.com/photo-1483982258113-b72862e6cff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="homepage"
                className="w-100"
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                <h1 className="text-white text-center">The finest cryptid tracking community on the planet</h1>
            </div>
        </Container>
    )
}

export default Home