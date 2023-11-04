import React from 'react'

function Sidebar(prop) {
  const NumberFetcher = () => {
    const [number, setNumber] = useState(null);
  
    useEffect(() => {
      const fetchNumber = async () => {
        try {
          const response = await fetch('https://api.example.com/number');
          if (response.ok) {
            const data = await response.text();
            setNumber(parseFloat(data));
          } else {
            console.error('Error:', response.status);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchNumber();
    }, []);
  return (
    <div className="top-box">
            <div id="top">
             
                <h3>{prop.names}</h3>
                <div className="number"><h2>{number}</h2></div>
            </div>
            <img id="top-image" scr={prop.image} alt=" " />
            <div id='top-footer'>
                <p id="top-footer1">{prop.foot}</p>
                <p>{prop.foot1}</p>
            </div>
        </div>
  )
}

export default Sidebar