import React from "react";

const Fuel = () => {
    return (
        <div>
            <section className="flex justify-center items-center h-screen">
                {/* Fuel Quote Form */}
                <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-xl font-semibold mb-4">Fuel Quote Form</h2>
                    <form id="fuelQuoteForm">
                        <div className="mb-4">
                            <label htmlFor="gallonsRequested" className="block text-gray-700 text-sm font-bold mb-2">Gallons Requested:</label>
                            <input type="number" id="gallonsRequested" name="gallonsRequested" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="deliveryAddress" className="block text-gray-700 text-sm font-bold mb-2">Delivery Address:</label>
                            <input type="text" id="deliveryAddress" name="deliveryAddress" value="1234 Main St, Houston, TX" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="deliveryDate" className="block text-gray-700 text-sm font-bold mb-2">Delivery Date:</label>
                            <input type="date" id="deliveryDate" name="deliveryDate" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="suggestedPrice" className="block text-gray-700 text-sm font-bold mb-2">Suggested Price / gallon:</label>
                            <input type="number" id="suggestedPrice" name="suggestedPrice" value="1.50" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="totalAmountDue" className="block text-gray-700 text-sm font-bold mb-2">Total Amount Due:</label>
                            <input type="number" id="totalAmountDue" name="totalAmountDue" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly />
                        </div>
                        <button type="button" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Calculate Total</button>
                    </form>
                </div>
                 
            </section>
        </div>
    );
}

export default Fuel;
