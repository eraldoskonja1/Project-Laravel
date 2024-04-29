import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function RaportNormal({ auth }) {
    const data = [
        { id: 1, name: "John", age: 30, city: "New York" },
        { id: 2, name: "Alice", age: 25, city: "Los Angeles" },
        { id: 3, name: "Bob", age: 35, city: "Chicago" },
        { id: 4, name: "Jane", age: 28, city: "Houston" },
        { id: 5, name: "Sam", age: 40, city: "San Francisco" },
        { id: 6, name: "Emily", age: 22, city: "Boston" },
        { id: 7, name: "Mike", age: 33, city: "Seattle" },
        { id: 8, name: "Lily", age: 29, city: "Denver" },
        { id: 9, name: "Chris", age: 31, city: "Miami" },
        { id: 10, name: "Emma", age: 27, city: "Atlanta" },
        { id: 11, name: "Max", age: 38, city: "Dallas" },
    ];
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="RaportNormal" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="w-1/6 p-4">
                        <h2 className="text-lg font-bold mb-4 text-white">
                            Raport{" "}
                        </h2>
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
