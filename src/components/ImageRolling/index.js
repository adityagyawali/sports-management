import React, {Component} from 'react';
import { Container, Button } from 'semantic-ui-react';
import "./index.css";
import mainFootball from '../../assets/mainFootball.jpg';
import mainBasketball from '../../assets/mainBasketball.jpg';
import mainIceHockey from '../../assets/mainIceHockey.jpg';

class ImageRolling extends Component{ 
    state = {
        src: mainBasketball,
        imageList : [mainFootball, mainBasketball, mainIceHockey],
        num: 0
    }

    componentDidMount() {
        this.image = setInterval(
            () => this.changeImage(),
            3000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.image);
    }

    changeImage = ()=>{
        let num = this.state.num;
        const imageListLength =  this.state.imageList.length - 1;
        if (num === imageListLength) num = 0;
        else num++;
        
        this.setState({
            src: this.state.imageList[num],
            num: num
        });
    }

    render(){

        return (
                <Container className="mainImageBox" fluid style={{backgroundImage: "url("+ this.state.src+")"}}>
                    <Container className="mainInfoBox" fluid>
                        <h1 className="mainTitle"> What's Your Sports ? </h1>
                        <p className="mainDescription">Join the sports you like now !</p>
                        <br/>
                        <Button color='red'>Find guests</Button><Button color='blue'><a href="/eventList">Find events</a></Button>
                    </Container>
                </Container>
            );
    }
}

export default ImageRolling;