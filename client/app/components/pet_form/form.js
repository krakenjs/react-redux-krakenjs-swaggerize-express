import React, {Component} from 'react';

class PetForm extends Component {
    render() {
        return (
            <div>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="petname" className="col-sm-4 control-label">Pet Name</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="petname" placeholder="Name of your Pet"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="photoImage" className="col-sm-4 control-label">Pet photo url</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="photoImage" placeholder="Photo url of your pet"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-4 col-sm-8">
                            <button type="submit" className="btn btn-default">Add Pet</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default PetForm
