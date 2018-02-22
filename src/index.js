import academyImage from './webpack-academy.png'
import webpackLogo from './webpack.jpeg'
import createCard from './card'
import './index.css'

createCard(
  'Card title 1',
  `The image below is served through generated URL, 
  becasue its size exceeds configured limit of 10 Kb`,
  academyImage
)

createCard(
  'Card title 2',
  'The image below is embedded in the bundle',
  webpackLogo
)