
import React,{useState,useEffect} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import {Container,Row,Col} from 'react-bootstrap'
import youtube from './api/youtube';

function App() {
 const [videos,setVideos] = useState([])
const [selectedVideo,setSelectedVideo] = useState('')

const onVideoSelect = (video) =>{
  setSelectedVideo(video)
}

  useEffect(()=>{
  //   async function handleSubmit(){
  //  const response = await youtube.get('search',{
  //   params:{
  //     part:'snippet',
  //     maxResults:5,
  //     key:'AIzaSyBpXaGN6Yi_i2x9EkyOUBPM9M7un-gnGfI',
  //     q:"Srk"
  //   }
  // })
  // console.log(response.data.items)
  // }
  // handleSubmit()
  submitHandler("react")
},[])
const submitHandler = async (searchTerm) =>{
  const response = await youtube.get('search',{
    params:{
      part:'snippet',
      maxResults:5,
      key:'AIzaSyDZ_gGdUT_6H1ZBSLWe_qGT6I862VSTsRw',
      q:searchTerm
    }

  })
  // console.log(response.data.items[0])
  setVideos(response.data.items)
  setSelectedVideo(response.data.items[0])

}



  return (

   <Container>
    <SearchBar onFormSubmit={submitHandler}/>
    <Row>
      <Col sm={8}>
      <VideoDetail video={selectedVideo}/>
      </Col>
      <Col sm={4}>
      <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
      </Col>
    </Row>




    </Container>


  );
}

export default App;