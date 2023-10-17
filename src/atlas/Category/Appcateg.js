import { useState } from 'react';
import React, { useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Appcateg.css';
import car from './chr.jpg'
import mar from './marcedes.webp'
import chr from './tucson.png'
import tuc from './tucson.jpg'
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import Header from "./Header";
import Main from './Main';
import { Link } from 'react-router-dom';

import Footer from './Footer';

export default function App() {
  const[Rec , setRec] = useState([])
 
 
  const [selectedPrice, setSelectedPrice] = useState('');

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(data=>setRec(data)
             
            )
            .then(json=>console.log(json))
  },[])

  //   const brand = event.target.value;
  //   setSelectedBrand(brand);
  //   filterProducts(brand, selectedPrice);
  // };

  

  // const filterProducts = (brand, price) => {
  //   let filtered = Rec;

  //   if (brand) {
  //     filtered = filtered.filter(product => product.brand === brand);
  //   }

  //   if (price) {
  //     filtered = filtered.filter(product => product.price === parseInt(price));
  //   }

  //   setFilteredProducts(filtered);
  // };
  const [Filt , setFilter]=useState('')
const Filter =[
   {label : "Filter by"},
   {label : "CHR" , value :1},
   {label : "Rava" , value :1},
   {label : "Tucson" , value :1},
]
function handleSelect(event){
  setFilter(event.target.value)
}
  // const filtersort = Rec.filter((a)=> a.price>0)
  // .sort((a,b)=> a.price>b.price ? 1:-1)
  // function Sort(){
  //   <div  id="sec">
  //     {filtersort?.map((list, index) => (
  //       <SwiperSlide key={index}>
          
  //      <div className="lll"> 
  //      <div className="categ">
  //           <h4 id="pro">{list.category}</h4>
  //          <Link to='/spec'> <img src={list.image} alt="pic"/></Link>
  //           <h3 id="model">{list.category}</h3>
  //           <h4 id="price" onClick={Sort}>{list.price}</h4>
  //           <h5>{list.category}</h5>
  //       </div> 
  //       </div>
         
  //       </SwiperSlide>
  //        ))}
  //        </div>
  // }
  const [sortedItems, setSortedItems] = useState([]);
  useEffect(() => {
    const filteredItems = Rec.filter((a) => a.price > 0);
    const sortedItems = filteredItems.sort((a, b) => a.price > b.price ? 1 :- 1);
    setSortedItems(sortedItems);
  }, [Rec]);

  return (
    <div>
    <Header />
    <Main 
      quant="4"
      categ="Car"
    />
    
  
    
        <div className='background'>
        <Swiper
          slidesPerView={3}
          centeredSlides={false}
          slidesPerGroupSkip={3}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 3,
              slidesPerGroup: 2,
            },
          }}
          scrollbar={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
        <div  id="sec">
        {sortedItems.map((list, index) => (
          <SwiperSlide key={index}>
            
         <div className="lll"> 
         <div className="categ">
              <h4 id="pro">{list.category}</h4>
             <Link to='/spec'> <img src={list.image} alt="pic"/></Link>
              <h3 id="model">{list.category}</h3>
              <h4 id="price">{list.price}</h4>
              <h5>{list.category}</h5>
          </div> 
          </div>
           
          </SwiperSlide>
           ))}
          {/* <SwiperSlide>
          <Categ 
         profile=" Dagi.W"
         image={tuc}
         model="Tucson"
         price="$200"
         location="Harer"
      />
          </SwiperSlide>
          <SwiperSlide>
          <Categ 
         profile=" Dagi.W"
         image={mar}
         model="Tucson"
         price="$200"
         location="Harer"
      />
          </SwiperSlide>
          <SwiperSlide>
          <Categ  
         profile=" Fikir.E"
         image={car}
         model="Tucson"
         price="$200"
         location="Harer"
      />
          </SwiperSlide>
          <SwiperSlide>
          <Categ 
         profile=" Dagi.W"
         image={chr}
         model="Tucson"
         price="$200"
         location="Harer"
      />
          </SwiperSlide>
          <SwiperSlide>
          <Categ 
         profile=" Dagi.W"
         image={mar}
         model="Tucson"
         price="$200"
         location="Harer"
      />
          </SwiperSlide>
          <SwiperSlide>
          <Categ  
         profile=" Dagi.W"
         image={car}
         model="Tucson"
         price="$200"
         location="Harer"
      />
          </SwiperSlide>
          <SwiperSlide>
          <Categ 
         profile=" Dagi.W"
         image={tuc}
         model="Tucson"
         price="$200"
         location="Harer"
      />
          </SwiperSlide>
          <SwiperSlide>
          <Categ 
         profile=" Dagi.W"
         image={mar}
         model="Tucson"
         price="$200"
         location="Harer"
      />
          </SwiperSlide>
          <SwiperSlide>
          <Categ  
         profile=" Dagi.W"
         image={car}
         model="Tucson"
         price="$200"
         location="Harer"
      />
          </SwiperSlide>
          <SwiperSlide>
          <Categ 
         profile=" Dagi.W"
         image={chr}
         model="Tucson"
         price="$200"
         location="Harer"
      />
          </SwiperSlide>
          <SwiperSlide>
          <Categ 
         profile=" Dagi.W"
         image={mar}
         model="Tucson"
         price="$200"
         location="Harer"
      />
          </SwiperSlide> */}
          </div>
        </Swiper>
      </div>
      
    
     
    <button onClick={() => setSortedItems([...sortedItems].reverse())}>
          Sort
        </button>
        <select onchange={handleSelect} id="cat" placeholder="Filter by">
               {Filter.map(option => (
                  <option value={option.Filter}>{option.label}</option>
               ))}

            </select>
   <Footer />
    </div>
  );
}