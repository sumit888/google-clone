function Body(){
    return(
        <main>
        <section className="main">
            <div className="main--1">
                <img src="logo.png" alt="logo" />
                <input type="text" placeholder="search the world.." />
                <div className="button-group">
                    <button>Google Search</button>
                    <button>I'm Feeling Lucky</button>
                </div>
                <p>Google Offerd in: <a href="#">Nepali</a></p>
            </div>
        </section>
    </main>
    )
}

export default Body