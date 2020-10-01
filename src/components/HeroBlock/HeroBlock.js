import React from 'react'
import './HeroBlock.scss'

const HeroBlock = ({title, logos, links}) => {
    const logosImages = logos.map((logoItem, i) => <img src={logoItem} alt="partner-logo" className="hero__partners-item" key={i}/>);
    const navItems = links.map((link, i) => <a href={link.href} className="hero__navigation-item" key={i}>{link.title}</a>);

    return (
        <section className="hero">
            <div className="container">
                <div className="hero__partners">
                    {logosImages}
                </div>
                <nav className="hero__navigation">
                    {navItems}
                </nav>
                <h1 className="hero__title">{title}</h1>
                <a href="#" className="hero__link">Отследить</a>
            </div>
        </section>
    )
}

export default HeroBlock
