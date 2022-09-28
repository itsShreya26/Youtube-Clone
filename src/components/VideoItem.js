import{Container,Row,Col,Image} from 'react-bootstrap'

function VideoItem({video,onVideoSelect}){
    if(video==undefined) return <h1>Loading!!!</h1>

    return <Container style={{padding:"10px"}}>
        <Row>
            <Col sm={8} style={{cursor:"pointer"}} onClick={()=>onVideoSelect(video)}>
             <Image src={video.snippet.thumbnails.medium.url} thumbnail={true}/>
            </Col>
            <Col sm={4}>
                <h6>{video.snippet.title}</h6>
            </Col>
        </Row>

    </Container>

}
export default VideoItem