import "bootstrap/dist/css/bootstrap.min.css";
import "../../Components/WeatherApp/WeatherApp.css";
import { Container, Row, Col, Button, Card, Navbar, FormControl } from "react-bootstrap";
import React from "react";
import { useState } from 'react';

export default function WeatherApp() {
  // Function for API elements goes here ie: name, temp, temp_max, temp_min, weather:main let
const [todayDate, setTodayDate] = useState('------');
const [weatherToday, setWeatherToday] = useState('0');
const [weatherTodayC, setWeatherTodayC] = useState('0');
const [dayType, setDayType] = useState('------');
const [dayTypeOne, setDayTypeOne] = useState('------');
const [dayTypeTwo, setDayTypeTwo] = useState('------');
const [dayTypeThree, setDayTypeThree] = useState('------');
const [dayTypeFour, setDayTypeFour] = useState('------');
const [dayTypeFive, setDayTypeFive] = useState('------');

const [cityName, setCityname] = useState('------');

const [dayOne, setDayOne] = useState('Monday');
const [dayTwo, setDayTwo] = useState('Tuesday');
const [dayThree, setDayThree] = useState('Wednesday');
const [dayFour, setDayFour] = useState('Thursday');
const [dayFive, setDayFive] = useState('Friday');

const [dayOneF, setDayOneF] = useState('0');
const [dayTwoF, setDayTwoF] = useState('0');
const [dayThreeF, setDayThreeF] = useState('0');
const [dayFourF, setDayFourF] = useState('0');
const [dayFiveF, setDayFiveF] = useState('0');

const [dayOneC, setDayOneC] = useState('0');
const [dayTwoC, setDayTwoC] = useState('0');
const [dayThreeC, setDayThreeC] = useState('0');
const [dayFourC, setDayFourC] = useState('0');
const [dayFiveC, setDayFiveC] = useState('0');

let searchCity = document.getElementById("searchCity");
let searchBtn = document.getElementById("searchBtn"); 

let asyncWeather;
let asyncFiveDay;



const dt = 1679695335

var day = new Date(dt*1000);

console.log(day.toDateString())

async function GetData() {

    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Stockton&units=imperial&appid=d42988fa62637d9ab117b02f3d69d14e');

    const data = await response.json()
    asyncWeather = data;

    console.log(asyncWeather)

    setTodayDate(day.toDateString())
    setWeatherToday(Math.round(asyncWeather.main.temp))
    setDayType(asyncWeather.weather[0].main)
    setCityname(asyncWeather.name)

}

async function FiveDay() {

    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Stockton&units=imperial&appid=d42988fa62637d9ab117b02f3d69d14e');

    const data = await response.json()
    asyncFiveDay = data;
    console.log(asyncFiveDay)
    setDayOne(asyncFiveDay.list[3].clouds.dt_txt)
    setDayOneF(Math.round(asyncFiveDay.list[3].main.temp))
    setDayTypeOne(asyncFiveDay.list[3].weather[0].main)
    setDayTwoF(Math.round(asyncFiveDay.list[11].main.temp))
    setDayTypeTwo(asyncFiveDay.list[11].weather[0].main)
    setDayThreeF(Math.round(asyncFiveDay.list[19].main.temp))
    setDayTypeThree(asyncFiveDay.list[19].weather[0].main)
    setDayFourF(Math.round(asyncFiveDay.list[27].main.temp))
    setDayTypeFour(asyncFiveDay.list[27].weather[0].main)
    setDayFiveF(Math.round(asyncFiveDay.list[35].main.temp))
    setDayTypeFive(asyncFiveDay.list[35].weather[0].main)
}


  return (
    <div className="Container">

      <Navbar className="NavColor">
        <h1 className="WeatherText">Freddy's Weather App</h1>
        <FormControl
          className="FormControl"
          placeholder="Type in the name of a city.."
        ></FormControl>
        <Button className="SearchButton">Search</Button>
      </Navbar>

      <h1 className="WeatherText"> Welcome to your Weather Hub</h1>
      <h1 className="CardText"> Current Temperature for {cityName}</h1>

      <Container>
        <Row className="ButtonRow">
          <Col>
            <Button className="ButtonStyle" onClick={GetData}>
              Get Current Weather
            </Button>
          </Col>
          <Col>
            <Button className="ButtonStyle" onClick={FiveDay}>
              Get Five Day Forecast
            </Button>
          </Col>
        </Row>
      </Container>

      <Container>
      <Row className="Center">
      <Card className="CardStyle2">
        <h1 className="CardText">Current Weather</h1>
        <h2 className="CardText">{todayDate}</h2>
        <h1 className="CardText2">{weatherToday}°F</h1>
        <h1 className="CardText3">{weatherTodayC}°C</h1>
        <h1 className="CardText3">{dayType}</h1>
      </Card>
      </Row>
      </Container>
      
      <br></br>

      <h1 className="CardText">5-Day Forecast for {cityName}</h1>

      <Container>
        <Row className="RowSpace">
          <Card className="CardStyle">
          <h3 className="CardText">{dayOne}</h3>
          <h1 className="CardText2">{dayOneF}°F</h1>
        <h1 className="CardText">{dayOneC}°C</h1>
        <h1 className="CardText">{dayTypeOne}</h1>
          </Card>
          <Card className="CardStyle">
          <h3 className="CardText">{dayTwo}</h3>
          <h1 className="CardText2">{dayTwoF}°F</h1>
        <h1 className="CardText">{dayTwoC}°C</h1>
        <h1 className="CardText">{dayTypeTwo}</h1>
          </Card>
          <Card className="CardStyle">
          <h3 className="CardText">{dayThree}</h3>
          <h1 className="CardText2">{dayThreeF}°F</h1>
        <h1 className="CardText">{dayThreeC}°C</h1>
        <h1 className="CardText">{dayTypeThree}</h1>
          </Card>
          <Card className="CardStyle">
          <h3 className="CardText">{dayFour}</h3>
          <h1 className="CardText2">{dayFourF}°F</h1>
        <h1 className="CardText">{dayFourC}°C</h1>
        <h1 className="CardText">{dayTypeFour}</h1>
          </Card>
          <Card className="CardStyle">
            <h3 className="CardText">{dayFive}</h3>
            <h1 className="CardText2">{dayFiveF}°F</h1>
        <h1 className="CardText">{dayFiveC}°C</h1>
        <h1 className="CardText">{dayTypeFive}</h1>
          </Card>
        </Row>
      </Container>

    </div>
  );
}
