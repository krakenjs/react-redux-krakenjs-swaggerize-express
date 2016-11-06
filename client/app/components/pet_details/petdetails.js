import React, {Component} from 'react';

class PetDetails extends Component {


    render() {
        let indicators = this.props.photoUrls.map((url, i) => {
            return (
                <li key={i} data-target="#petdetails" data-slide-to={i} className={i === 0 ? "active": ""}></li>
            )
        });
        let slides = this.props.photoUrls.map((url, i) => {
            return (
                <div key={i} className={i === 0 ? "item active" : "item"}>
                    <img src={url} alt={this.props.name} className="center-block"/>
                    <div className="carousel-caption">
                        {this.props.name}
                    </div>
                </div>
            )
        });

        return (
            <div>

                <div id="petdetails" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {indicators}
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        {slides}
                    </div>
                    <a className="left carousel-control" href="#petdetails" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#petdetails" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default PetDetails
