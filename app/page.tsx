import Carousel from "./components/homePage/carousel";
import Collections from "./components/homePage/collections";
import { BannerImage1 } from "./components/icons";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      {/* <BannerImage1 className=""/> */}
      <Carousel/>
      <Collections/>
      
    </main>
  )
}
