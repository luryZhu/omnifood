import Hero from "./components/Hero";
import Header from "./components/Header";
import How from "./components/How";
import Meals from "./components/Meals";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing"
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Hero></Hero>
        <How></How>
        <Meals></Meals>
        <Testimonials></Testimonials>
        <Pricing></Pricing>
        <CTA></CTA>
      </main>
      <Footer></Footer>

    </div>
  );
}

export default App;
