import React from "react";
import { Card, Image } from "semantic-ui-react";

class sportCard extends React.Component {
    static defaultProps = {
        image: () => alert('image is not defined')
    }

    render(){
        const {image} = this.props;
        let imageTitle = image.toString().split("/")[3].split(".")[0].toUpperCase();
        return(
            <Card>
                <Image className="sportImg" style={{background: "url("+ image + ")"}} />
                <Card.Content>
                <Card.Header>{imageTitle}</Card.Header>
                </Card.Content>
            </Card>

        );
    }
}

export default sportCard;