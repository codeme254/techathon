import React from "react";
import ButtonTicket from "../UI/ButtonTicket";

const Navigation = () => {
    return(
        <header className="header">
            <h2 className="header__logo">tec<span className="header__logo--colored">hathon</span>.</h2>
            <nav className="header__nav">
                <ol className="header__nav--list">
                    <li className="header__nav--item">
                        <a href="#home" className="header__nav--link">home</a>
                    </li>
                    <li className="header__nav--item">
                        <a href="#home" className="header__nav--link">about</a>
                    </li>
                    <li className="header__nav--item">
                        <a href="#home" className="header__nav--link">speakers</a>
                    </li>
                    <li className="header__nav--item">
                        <a href="#home" className="header__nav--link">organizers</a>
                    </li>
                    <li className="header__nav--item">
                        <a href="#home" className="header__nav--link">news</a>
                    </li>
                    <li className="header__nav--item">
                        <a href="#home" className="header__nav--link">contact</a>
                    </li>
                </ol>
                <ButtonTicket to={'/'} text="ticket" />
            </nav>
        </header>
    )
}
export default Navigation;