import React, {Component} from 'react';
import { Observable, Subject } from '@reactivex/rxjs';

class PetForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.urls = new Subject();
        this.photoUrlChange = this.photoUrlChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.addPet = this.addPet.bind(this);
    }

    componentDidMount() {
        this.photos = this.urls.debounceTime(1000)
            .distinctUntilChanged()
            .switchMap(photo => Observable.of(photo))
            .subscribe(photo => {
                if (photo) {
                    this.setState({
                        photo : photo
                    });
                }
            });
    }

    componentWillUnmount() {
        this.photos && this.photos.unsubscribe();
    }

    photoUrlChange(e) {
        this.urls.next(e.target.value);
        this.setState({
            photoUrl: e.target.value
        });
    }

    nameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    addPet(e) {
        e.preventDefault();
        //TODO Input validation
        fetch('/v2/pet', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                photoUrls: [this.state.photoUrl],
            })
        })
        .then(resp => console.log("API call", resp))
        .catch(err => console.log(err));
    }

    render() {

        return (
            <div>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="petname" className="col-sm-4 control-label">Pet Name</label>
                        <div className="col-sm-8">
                            <input required="true" onChange={this.nameChange} value={this.state.name || ''} type="text" className="form-control" id="petname" placeholder="Name of your Pet"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="photoImage" className="col-sm-4 control-label">Pet photo url</label>
                        <div className="col-sm-8">
                            <input required="true" value={this.state.photoUrl || ''} onChange={this.photoUrlChange} type="text" className="form-control" id="photoImage" placeholder="Photo url of your pet"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-4 col-sm-8">
                            <img src={this.state.photo} className="img-responsive" width="200px"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-4 col-sm-8">
                            <button onClick={this.addPet} type="submit" className="btn btn-default">Add Pet</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default PetForm
