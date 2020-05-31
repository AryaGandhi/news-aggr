import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import CardColumns from 'react-bootstrap/CardColumns';
import Form from 'react-bootstrap/Form'

function Covid(){ 
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");

  useEffect(() =>{
    axios
    .all([
      axios.get('https://corona.lmao.ninja/v2/all'),
      axios.get('https://corona.lmao.ninja/v2/countries')
      ])
    .then(responseArr => {
      setLatest(responseArr[0].data);
      setResults(responseArr[1].data);
    })
    .catch(err => {
      console.log(err);
    });
    }, []);

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();

  const filterCountries = results.filter(item => {
    return searchCountries !== "" ? item.country.includes(searchCountries) : item;
  })

  const countries = filterCountries.map((data, i) =>{
    return (
      
      <Card key={i} bg='light' text='dark' className='text-center' style={{margin: '10px'}}>
      <Card.Img variant='Top' src={data.countryInfo.flag} />
    <Card.Body>
      <Card.Title style={{ fontWeight:'bold',fontSize:'30px'}}>{data.country}</Card.Title>
      <Card.Text style={{ fontWeight:'bold',fontSize:'20px'}}>Total cases : {data.cases}</Card.Text>
      <Card.Text>Active cases : {data.active}</Card.Text>
      <Card.Text>Critical : {data.critical}</Card.Text>
      <Card.Text style={{ color:'red',fontWeight:'bold'}}>Deceased : {data.deaths}</Card.Text>
      <Card.Text style={{ color:'green',fontWeight:'bold'}}>Recovered : {data.recovered}</Card.Text>
      <Card.Text>New cases today : {data.todayCases}</Card.Text>
      <Card.Text style={{ color:'red',fontWeight:'bold'}}>Deceased today : {data.todayDeaths}</Card.Text>
    </Card.Body>
    </Card>
    
      );
  });

  return (
    <div>
    <h1 style={{ textAlign:'center', color:'red', fontWeight:'bold'}}>Covid-19 live updates</h1>
      <CardDeck>
  <Card bg='secondary' text='white' className='text-center' style={{margin: '10px'}}>
    <Card.Body>
      <Card.Title>Total Cases</Card.Title>
      <Card.Text>{latest.cases}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated {lastUpdated}</small>
    </Card.Footer>
  </Card>
  <Card bg='danger' text='white' className='text-center' style={{margin: '10px'}}>
    <Card.Body>
      <Card.Title>Deceased</Card.Title>
      <Card.Text>{latest.deaths}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated {lastUpdated}</small>
    </Card.Footer>
  </Card>
  <Card bg='success' text='white' className='text-center' style={{margin: '10px'}}>
    <Card.Body>
      <Card.Title>Recovered</Card.Title>
      <Card.Text>{latest.recovered}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated {lastUpdated}</small>
    </Card.Footer>
  </Card>
</CardDeck>
<Form>
  <Form.Group controlId="formGroupSearch">
    <Form.Control size='lg' type="text" placeholder="Search a country" onChange={e => setSearchCountries(e.target.value)} />
  </Form.Group>
</Form>
<CardColumns>{countries}</CardColumns>
    </div>
    )
}

export default Covid;