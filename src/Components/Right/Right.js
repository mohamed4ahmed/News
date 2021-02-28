import React  , { useState , useEffect} from 'react' ;
import './Right-style.css';
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';





const Right = () => {
    const [images ,setImages] = useState([]);
  
     
      
    useEffect( ()=>{
        axios.get(`http://80.240.21.204:1337/news?skip=12&limit=10`).then(resp => { setImages(resp.data.news) }  )

    } , [])

    
  
    const theNews = images.map(item => { 
        return(
            <div className='contiant' key={Math.random()* 100} >
                
                <h2>{item.source.title}</h2>
               <img src={item.source.url} />
               <h4>{item.title}</h4>
               <p>{item.created_at}</p> 
               {
                   item.keywords.length  ? item.keywords.map(item => { return (<span key ={Math.random()* 100} className="SPan">{item.name}</span>  ) }) : '' 
               }

               {
                 item.keywords.length  ? item.keywords.map(item => { return (<img src={item.imagePath} key={Math.random() *100}/> ) }) : '' 
                } 
        
            </div>
        )
    }) ;

    const  fetchMoreData = () =>  {
        console.log('test')
        setTimeout(() => {
            setImages(images.concat(images) )
        }, 1500);
      };
    
            return(
                <div  className='container'>
                    
                     <div className='fixeds'>Show News</div>

                   <InfiniteScroll
                    dataLength={images.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    > {theNews} </InfiniteScroll> 

                    <div className='fixeds'>Show News</div>
                  
                 </div>
            )

  
}

export default Right ;
