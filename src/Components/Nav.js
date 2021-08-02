import React from 'react'
import './Nav.css'

function Nav({
    handleSubmit,
    searchTerm,
    handleChange
}) {
    return (
        <div>
            <div className="nav">
                <input type="checkbox" id="nav-check" />
                <div class="nav-header">
                    <div class="nav-title">
                        <a href="" target="">Home</a>
                    </div>
                </div>
                <div class="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>


                <div class="nav-links">
                    <div className="search-box">
                        <form onSubmit={handleSubmit}>
                            <input
                                className="search" t
                                ype="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={handleChange}
                            />
                        </form>
                        {/* <input
                            className="search" t
                            ype="text"
                            placeholder="Search..."
                        /> */}
                    </div>

                    <a href="" target="">Favourites</a>
                </div>
            </div>
        </div>
    )
}

export default Nav
