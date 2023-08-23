import React from 'react'
import './main.css'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsClipboardCheck } from 'react-icons/bs'


const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitoms of romance, Bora Bora is one of the best traveling destinations in the World. This place is known for its luxurius stays and adventurous activations. '
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Macchu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular tourist as the sunrire from the Sun Geta is simply spectacular.'
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grede: 'CULTURAL RELAX',
    fees: '$700',
  description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is `lavish` and `beauty`. Always interesting to be in this place.'
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    discription: 'According to the World Turism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million visit Cappadocia. This place is known for its luxurius stays and adventurous activations. '
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Gunajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'A city in central Mexico, Gunajuato is known for its history of silver mining and colonial architecture. The houses in the city are very atractively painted with the most bright colors available. Always welcome. '
  }, 

  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: 'The vibrant hues of the houses are its benchmark and explain the beauty of thus place. Also, if you are a foodie and love seafood, you will be exhilarated with the choce you are about to get here. Happy exploring great food! '
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    discription: 'Angkor Wat represents the entire range of Khmer art form the 9th to the 15th century. This temple is considered the heart and soul of Combodia. This place is known for its luxurius stays and adventurous activations. ' 
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle:'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'An immense mausoleum of white merble, built-in Agra by Mughal emperor Shan Jahan in memory of his wife Mumez, the monument is breathtakingly beautiful. The place is known for its luxurius stays and adventurous activations.'
  }, 

  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Bali is Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & colture, food, temples and beautiful sandy beaches. '
  },
]



const Main = () => {
  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
            return(
              <div key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className='continent flex'>
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{location}</span>
                  </span>
                  
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <BsClipboardCheck className='icon' />
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
      </section>
  )
}

export default Main