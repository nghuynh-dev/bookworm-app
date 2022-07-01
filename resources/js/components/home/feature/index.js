import React from "react";
import './style.scss';
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import Bookcard from "../../bookcard";

export default function Feature(){
    return(
        <div className='wrapper'>
            <div className='container-fluid mt-4'>
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="text-center mt-5">Featured Books</h3>
                    </div>
                    <div className="col-lg-12">
                        <div className="text-center">
                            <ToggleButtonGroup type="radio" name="options">
                                <ToggleButton id="tbg-radio-1" value='recommend' >
                                    Recommended
                                </ToggleButton>
                                <ToggleButton id="tbg-radio-2" value='popular' >
                                    Popular
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                    </div>
                </div>
                <div className="product-home-list mx-5 mt-5">
                    <div className="book-items mx-6 mt-4">
                        <Bookcard />
                        <Bookcard />
                        <Bookcard />
                        <Bookcard />
                    </div>
                    <div className="book-items mx-6 mt-4">
                        <Bookcard />
                        <Bookcard />
                        <Bookcard />
                        <Bookcard />
                    </div>
                </div>
            </div>

        </div>
    );
}
