export default function Search() {
    return (
        <section class="hero">
            <h1>TRAVEL WITH US</h1>
            <h2>DISCOVER THE WORLD</h2>
            <div class="travel-options">
                <button class="active">Flights</button>
                <button>Hotels</button>
            </div>
            <div class="search-form">
                <input type="text" placeholder="From" value="London (LHR)" />
                <input type="text" placeholder="To" value="Milan (MXP)" />
                <input type="text" placeholder="Trip" value="Round trip" />
                <input type="date" value="2023-05-11" />
                <input type="date" value="2023-05-17" />
                <input type="text" placeholder="Passengers" value="2 adults" />
                <button class="discover-btn">Discover</button>
            </div>
        </section>

    )
};