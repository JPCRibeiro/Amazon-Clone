import "@/globals.css";
import Header from "./components/header/header";
import Carousel from "./components/carousel/carousel";

export default function App({ Component }) {
  return (
    <>
      <Header />
      <Carousel/>
      <Component/>
    </>
  )
}
