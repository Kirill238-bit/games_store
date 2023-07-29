'use client'
import Slider from '@/components/slider/slider'
import { SliderGames } from '@/data/sliderGames'
import { Games } from '@/data/games'
import CatalogPromo from '@/components/catalogPromo/catalogPromo'

export default function Home() {
  return (
    <main>
      <div>
        <Slider sliderGames={SliderGames}/>
      </div>
      <div>
        <CatalogPromo max={10} Games={Games} header={"Лидеры продаж"} button={"каталог"} link={true}/>
      </div>
    </main>
  )
}
