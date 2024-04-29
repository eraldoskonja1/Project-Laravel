import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function FototNdryshe({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="FototNdryshe" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Kjo eshte faqja per Fotot Ndryshe.
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                {/* First Column */}
                <div className="w-1/3 p-4">
                    <input
                        type="text"
                        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 mb-4"
                        placeholder="numri >>> modifikimi i fundit"
                    />

                    {/* Third Column */}
                    <div className="w-1/3 p-4">
                        <form className="flex flex-col space-y-2">
                            <h3 className="text-lg font-bold mb-4 text-white">
                                Data e fillimit
                            </h3>
                            <input
                                type="text"
                                className="border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="YYYY-MM-DD"
                            />
                            <h3 className="text-lg font-bold mb-4 text-white">
                                Data e mbarimit
                            </h3>
                            <input
                                type="text"
                                className="border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="YYYY-MM-DD"
                            />

                            <div className="flex justify-between">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                    Kerko
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
