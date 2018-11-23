import React, {Component} from 'react';
import { Container, Image, Button } from 'semantic-ui-react';
import "./ImageRolling.css";
import Football from './images/football.jpg';
import Basketball from './images/basketball.jpg';
import IceHockey from './images/iceHockey.jpg';

class ImageRolling extends Component{ 
    state = {
        src: Basketball,
        imageList : [Basketball, Football, IceHockey],
        num: 0
    }

    componentDidMount() {
        this.imgage = setInterval(
            () => this.changeImage(),
            3000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.imgage);
    }

    changeImage = ()=>{
        let num = this.state.num;
        if (num === 2) num = 0;
        else num++;
        
        this.setState({
            src: this.state.imageList[num],
            num: num
        });
    }

    render(){

        return (
                <Container className="imageBox" fluid>
                    <Image className="mainImage" src={this.state.src} alt="mainImage"  />
                    <Container className="mainInfoBox" fluid>
                        <h1 className="mainTitle"> What's Your Sports ? </h1>
                        <p className="mainDescription">Join the sports you like now !</p>
                        <br/>
                        <Button color='red'>Need guests</Button><Button color='blue'>Find events</Button>
                    </Container>
                </Container>
            );
    }
}

export default ImageRolling;