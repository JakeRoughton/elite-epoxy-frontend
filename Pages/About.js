import Carousel from "nuka-carousel"

const About = () =>{
    return (
        <>
        <div id="aboutDiv">
			<br />
            <div className="aboutLeft">
            <h2>Catchy title with keyword</h2>
            <p>Heirloom ut sartorial, fixie meditation ex palo santo 8-bit fugiat meh af gluten-free gentrify affogato yr. Snackwave commodo distillery enamel pin mustache. La croix proident incididunt dolore anim, chartreuse polaroid artisan shoreditch deep v raw denim. Food truck retro cardigan, dolore qui DIY marxism laboris cillum kogi quinoa stumptown selfies pickled. Lo-fi readymade anim, pabst ennui photo booth tattooed schlitz hot chicken 8-bit eu mukbang aesthetic. Hell of snackwave yuccie chartreuse hexagon art party, chicharrones fit adaptogen readymade freegan beard meh banh mi. </p>
            <p>Roof party tbh butcher, try-hard synth iPhone bicycle rights adipisicing in pinterest mukbang fingerstache. Woke pop-up voluptate direct trade tacos. Celiac neutra af, hashtag cloud bread kinfolk adaptogen gluten-free palo santo fixie tote bag aute microdosing leggings. Locavore gorpcore iceland, four dollar toast echo park aliquip hoodie in master cleanse 3 wolf moon raclette. Tonx chicharrones dolore, VHS bruh swag cliche blog proident DIY normcore same mustache.</p>
            <p>Whatever proident microdosing, hot chicken trust fund mollit copper mug salvia. Unicorn semiotics aliqua aute gentrify DIY. IPhone dolor cardigan jean shorts sartorial velit. Humblebrag vaporware paleo ascot pork belly crucifix art party iceland sartorial tumeric quis jawn single-origin coffee.
            </p>
            </div>
            <div className="aboutRight">
			<img id="aboutImg" className="aboutRight"src = "https://i.imgur.com/Yy5Xbpq.jpg" alt="EliteEpoxyTXPic"></img>
        <img id="aboutImg"src = "https://i.imgur.com/qr0Rgf8.jpg" alt="EliteEpoxyTXPic"></img>
        </div>
        <br />
            <Carousel className="aboutCarousel">
               <img className="carouselImg" src="https://i.imgur.com/oecdRCN.jpg" alt="carouselPic" />
               <img className="carouselImg" src="https://i.imgur.com/7cvySzH.jpg" alt="carouselPic" />
               <img className="carouselImg" src="https://i.imgur.com/oJfefDD.jpg" alt="carouselPic" />
               <img className="carouselImg" src="https://i.imgur.com/XGLT930.jpg" alt="carouselPic" />
               <img className="carouselImg" src="https://i.imgur.com/YygkaA7.jpg" alt="carouselPic" />
            </Carousel>

         <br />
        </div>
        </>
    )
}

export default About