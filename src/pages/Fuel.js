import React from "react";
import Navbar from "../components/HomeNavbar";

const Fuel = () => {
    return (
        <div>
            <Navbar />
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

                {/* Profile Information Form */}
                <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
                    <form id="profileForm">
                        <div className="mb-4">
                            <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Full Name:</label>
                            <input type="text" id="fullName" name="fullName" placeholder="Enter Full Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address1" className="block text-gray-700 text-sm font-bold mb-2">Address 1:</label>
                            <input type="text" id="address1" name="address1" placeholder="Enter Address1" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address2" className="block text-gray-700 text-sm font-bold mb-2">Address 2:</label>
                            <input type="text" id="address2" name="address2" placeholder="Enter Address2" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City:</label>
                            <input type="text" id="city" name="city" placeholder="Enter City" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">State:</label>
                            <input type="text" id="state" name="state" placeholder="Enter State" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="zipcode" className="block text-gray-700 text-sm font-bold mb-2">Zipcode:</label>
                            <input type="text" id="zipcode" name="zipcode" placeholder="Enter Zipcode" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <button type="button" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save Profile</button>
                    </form>
                </div>
                 {/* Fuel Quote History */}
                 <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-xl font-semibold mb-4">Fuel Quote History</h2>
                    <div className="form-group">
                        <p className="text-sm text-gray-700">Date: 2/10/2023, Address: 1234 Main St, Houston, TX, Suggested Price: $1.50, Total Amount Due: 15, Gallons Requested: 10</p>
                        <br />
                        <p className="text-sm text-gray-700">Date: 6/19/2023, Address: 1234 Main St, Houston, TX, Suggested Price: $1.50, Total Amount Due: $63, Gallons Requested: 42</p>
                        <br />
                        <p className="text-sm text-gray-700">Date: 8/21/2023, Address: 1234 Main St, Houston, TX, Suggested Price: $1.50, Total Amount Due: $34.50, Gallons Requested: 23</p>
                        <br />
                        <p className="text-sm text-gray-700">Date: 12/11/2023, Address: 1234 Main St, Houston, TX, Suggested Price: $1.50, Total Amount Due: $52.50, Gallons Requested: 35</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Fuel;
