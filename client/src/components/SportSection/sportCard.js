import React from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

class sportCard extends React.Component {

    render(){
        let {image} = this.props;
        let imageTitle = image.toString().split("/")[3].split(".")[0].toUpperCase();
        return(
            
            <Card>
                <Link to={"/eventList?"+ imageTitle}>
                    <div className="sportImg" style={{background: "url("+ image + ")"}}></div>
                </Link>
                <Card.Content>
                    <Card.Header>{imageTitle}</Card.Header>
                </Card.Content>
            </Card>
            

        );
    }
}

export default sportCard;