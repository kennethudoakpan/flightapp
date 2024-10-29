export default function PopularQuestions() {
    return (
        <section className="popular-questions">
            <h3>Popular questions</h3>
            <div className="question-list">
                <div className="question-item">
                    <h4>How to book a flight?</h4>
                    <p>Go to flights section, search for the necessary flight and press "book". Fill your data, choose your baggage, seating and proceed to the payment tab, enter your credit card information and press "pay now".</p>
                </div>
                <div className="question-item">
                    <h4>How to rent a car?</h4>
                    <p>Visit our car rental section, choose your desired vehicle, and follow the booking process.</p>
                </div>
                <div className="question-item">
                    <h4>Can I cancel my booking?</h4>
                    <p>Yes, you can cancel your booking. Please refer to our cancellation policy for more details.</p>
                </div>
                <div className="question-item">
                    <h4>Is there a loyalty program?</h4>
                    <p>Yes, we offer a loyalty program. Sign up to start earning points on your bookings.</p>
                </div>
            </div>
        </section>
    );
} 