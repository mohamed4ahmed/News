// import React  , { useState , useEffect} from 'react' ;
// import {Container , Box , Contiant , Fixeds, CreatveTitle  ,CreativeDir  ,InfoDesc , Span} from './Meddile-style';

// import axios from "axios";
// import InfiniteScroll from 'react-infinite-scroll-component';


// const Meddile = () => {
     
//     const [images ,setImages] = useState([]);
    

//     useEffect( ()=>{
//         axios.get('http://80.240.21.204:1337/news?skip=12&limit=10').then(resp => { setImages(resp.data.news); console.log(resp.data.news) }  )

//     } , [])
    

//     const theNews = images.map(item => { 
//         return(
//             <Contiant key={item._id} >
                
//                 <CreatveTitle>{item.source.title}</CreatveTitle>
//                <img src={item.source.url} />
//                <CreativeDir>{item.title}</CreativeDir>
//                <InfoDesc>{item.created_at}</InfoDesc>
//                {
//                    item.keywords.length  ? item.keywords.map(item => { return (<Span key ={Math.random()}>{item.name}</Span>  ) }) : '' 
//                } 
        
//             </Contiant>
//         )
//     }) ;

//     return (
        
//             <Container>
//                 <Fixeds>fixed column</Fixeds>
//                  <Box> {theNews} </Box> 
//                 <Fixeds>fixed column</Fixeds>   

//             </Container>
     
        
//     )
// }

// export default Meddile ;
