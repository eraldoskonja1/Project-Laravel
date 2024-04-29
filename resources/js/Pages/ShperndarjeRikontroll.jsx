import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";


export default function ShperndarjeRikontroll({ auth, users }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [data, setData] = useState([
        { id: 1, name: "John", age: 30, city: "New York" },
        { id: 2, name: "Alice", age: 25, city: "Los Angeles" },
        { id: 3, name: "Bob", age: 35, city: "Chicago" },
        { id: 4, name: "Jane", age: 28, city: "Houston" },
        { id: 5, name: "Sam", age: 40, city: "San Francisco" }
      
    ]); 
   
    // // Function to toggle the dropdown open/closed
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleUserSelection = (e) => {
        e.preventDefault();
        post(route("users.registry"), {
            // Pass form data to the registration route
            onSuccess: (page) => {
                // Set the name of the registered user from the response
                setRegisteredName(data.name);
            },
        });
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="ShperndarjeRikontroll" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="w-1/6 p-4">
                        <h2 className="text-lg font-bold mb-4 text-white">
                            Foto te lira: 0{" "}
                        </h2>
                    </div>

                    <div className="flex">
                        <div className="w-1/5 p-4">
                            <div className="flex flex-col justify-between h-full">
                            <select
                                    className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 mb-2"
                                    // Populate options with user names
                                    onChange={handleUserSelection} // Call the function on change
                                    onClick={toggleDropdown} // Toggle dropdown when clicked
                                >
                                    <option value="">Operatori</option>
                                    {users && users.map((user) => (
                                            <option
                                                key={user.id}
                                                value={user.name}
                                            >
                                                {user.name}
                                            </option>
                                        ))}
                                </select>
                            </div>
                        </div>

                        <div className="w-1/5 p-4">
                            <input
                                type="number"
                                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 mb-2" // Reduced bottom margin
                                placeholder="Fut sasi kontratash"
                            />
                        </div>

                        <div className="w-full sm:w-1/5 p-2 flex justify-center mb-0">
                            <button className="w-full sm:w-auto bg-green-500 text-white rounded-md px-3 py-1 text-sm">
                                Shpernda
                            </button>
                        </div>

                        <div className="w-full sm:w-1/5 p-2 flex justify-center mb-0">
                            <button className="w-full sm:w-auto bg-yellow-500 text-white rounded-md px-3 py-1 text-sm">
                                Shperndarje Automatike
                            </button>
                        </div>

                        <div className="w-full sm:w-1/5 p-2 flex justify-center mb-0">
                            <button className="w-full sm:w-auto bg-green-500 text-white rounded-md px-3 py-1 text-sm">
                                Export tabelen
                            </button>
                        </div>

                        <div className="w-full sm:w-1/5 p-2 flex justify-center mb-0">
                            <button className="w-full sm:w-auto bg-green-500 text-white rounded-md px-3 py-1 text-sm">
                                Export raport
                            </button>
                        </div>

                        <div className="w-full sm:w-1/5 p-2 flex justify-center mb-0">
                            <button className="w-full sm:w-auto bg-red-500 text-white rounded-md px-3 py-1 text-sm">
                                Pastro kontratat nga operatoret
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto px-10">
                        {" "}
                        {/* Add padding here */}
                        <table className="min-w-full bg-white border rounded-md">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Operatori</th>
                                    <th className="px-4 py-2">
                                        Kontrata te kontrolluara
                                    </th>
                                    <th className="px-4 py-2">
                                        Kontrata te pakontrolluara
                                    </th>
                                    <th className="px-4 py-2">
                                        Kontrata totale
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row) => (
                                    <tr key={row.id}>
                                        <td className="border px-4 py-2">
                                            {row.id}
                                        </td>
                                        <td className="border px-4 py-2">
                                            {row.name}
                                        </td>
                                        <td className="border px-4 py-2">
                                            {row.age}
                                        </td>
                                        <td className="border px-4 py-2">
                                            {row.city}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
