import Slider from '@/components/slider'
import { SliderGames } from '@/data/sliderGames'
import Image from 'next/image'
import styles from '../styles/page.module.scss'

export default function Home() {
  return (
    <main>
      <div>
        <Slider games={SliderGames}/>
      </div>
    </main>
  )
}
