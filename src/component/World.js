import React from "react";
import { db } from "../firebase";
import "./Box.css";
import {Card,Button,CardDeck,Modal,modalShow,setModalShow,ButtonToolbar} from 'react-bootstrap';
import "./Home.css";
export class World extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      news: [],show:false, newsId: null};
  }
  componentDidMount(){
  db.collection('news')
  .where("Category", "==", "world")
  .limit(200)
  .get()
  .then(querySnapshot => {
    const data = []
    querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data());
        data.push({id: doc.id, ...doc.data()})
    });
    console.log(data); 
    this.setState({news:data});
  });
}

openModal(id){
  this.setState({newsId: id, show: true})
}

closeModal(){
  this.setState({show: false})
}

  render() {
    const { news } = this.state;
    

      return (

         <div className="row">
          {news.map(one_news => (
            <div key={one_news.uid} >
            <div className="mainstyle">
          <div className="box">
          <div className="col">
          <Card style={{ width:"23.8rem", height:"26rem"}} className='text-center'>
        
          <Card.Img variant="top" src={one_news.Top_Image} style={{width:"23.8rem", height:"15rem"}}/>
        
          <Card.Body>
          <Card.Title>{one_news.Title}</Card.Title>
          <div>
        <Button variant="primary" onClick={() => this.openModal(one_news.id)} >View full news</Button>
        
        </div>
        </Card.Body>
      </Card>
      </div>
      </div>
      </div>
      </div>
      ))}
      {this.state.newsId  ? 
      <Modal show={this.state.show} onHide={()=>this.closeModal()} size="lg"> 

        <Modal.Header closeButton>
        <Modal.Title>{news.filter(d=>d.id===this.state.newsId)[0].Title}<br></br>
       </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={news.filter(d=>d.id===this.state.newsId)[0].Top_Image} style={{width:"47.5rem"}}></img><br></br>
        <br></br>{news.filter(d=>d.id===this.state.newsId)[0].Text}
        </Modal.Body>
        <Modal.Footer>
        <Button  onClick={() => this.closeModal()}>Close</Button>
        </Modal.Footer>
        </Modal>
         : null}
        </div>
        
    );
  }

}
export default World;