import "@/globals.css";
import Header from "./components/header/header";

export default function App({ Component }) {
  return (
    <>
      <Header />
      <Component />
    </>
  )
}
