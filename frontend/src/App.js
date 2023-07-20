import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header/>
      {/* py-3 add padding to the top and bottom */}
      <main className="py-3">
        <Container>
          <h1>Welcome To Proshop</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App