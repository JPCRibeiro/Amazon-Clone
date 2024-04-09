import "@/globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ContentPage from "./components/contentPage/contentPage";
import LoginRequest from "./components/loginRequest/loginRequest";

export default function App({ Component }) {
  return (
    <>
      <Component/>
      <Header />
      <ContentPage/>
      <LoginRequest/>
      <Footer />
    </>
  )
}
