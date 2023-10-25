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
   const [selectedBrand, setSelectedBrand] = useState('');
 
   const [clicked,setClicked]=useState(false)
  

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setRec(data)
             
            )
            .then(json=>console.log(json))
  },[])


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
    const handlePriceFilterChange = event => {
    const price = event.target.value;
    setSelectedPrice(price);
  };
 
  const onclickHandler = () => {
    const sortedItemsCopy = [...sortedItems].reverse();
    setSortedItems(sortedItemsCopy);
    setClicked(!clicked);
  };

 const handleBrandFilterChange = event => {
    const brand = event.target.value;
    setSelectedBrand(brand);
   };
  const [sortedItems, setSortedItems] = useState([]);
  // useEffect(() => {
  //   const filteredItems = Rec.filter((a) => a.price > 0);
  //   const sortedItems = filteredItems.sort((a, b) => a.price > b.price ? 1 :- 1);
  //   setSortedItems(sortedItems);
  // }, [Rec]);
  useEffect(() => {
    const filteredItems = Rec.filter(a => a.price > 0);
    const sortedItems = [...filteredItems].sort((a, b) =>
      a.price > b.price ? 1 : -1
    );
    setSortedItems(sortedItems);
  }, [Rec]);
  const filterProductsByPrice = () => {
    let filteredProducts = [...Rec];
  
    if (selectedPrice !== '') {
      let priceRange = selectedPrice.split('-');
      let minPrice = parseFloat(priceRange[0]);
      let maxPrice = parseFloat(priceRange[1]);
  
      filteredProducts = filteredProducts.filter(
        product => product.price >= minPrice && product.price <= maxPrice
      );
    }
  
    if (selectedBrand !== '') {
      filteredProducts = filteredProducts.filter(pro =>
        pro.category.toLowerCase().includes(selectedBrand.toLowerCase())
      );
    }
  
    if (clicked) {
      filteredProducts = [...sortedItems];
    }
  
    return filteredProducts;
  };
  return (
    <div>
    <Header />
    <Main 
      quant="4"
      categ="Car"
    />
    
  <div className="inp" id="buttons">
  <select value={selectedPrice} onChange={handlePriceFilterChange} id="cat" placeholder="Filter by price">
        <option value="">Filter by Price</option>
         <option value="0-100">0 - 100</option>
         <option value="100-200">101 - 200</option>
         <option value="200-300>">201 - 300 </option>
         <option value="301-400>">301 - 400 </option>
        
     </select>
    <select value={selectedBrand} onChange={handleBrandFilterChange} id="cat" placeholder="Filter by price">
    <option value="">Select Brand</option>
      <option value="electronics">electronics</option>
         <option value="jewelery">jewelery</option>
      
        
     </select>
    
     
     <button onClick={onclickHandler}>
           Sort by Price
      </button>
    </div>
    
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
        {filterProductsByPrice().map((list, index) => (
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
      
       
   <Footer />
    </div>
  );
}


