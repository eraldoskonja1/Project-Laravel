import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function FotoUrgjente({ auth }) {
    const [isImageExpanded, setIsImageExpanded] = useState(false);

    const toggleImageSize = () => {
        setIsImageExpanded(!isImageExpanded);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="FotoUrgjente" />

            <div className="flex justify-center">
                <div className="w-1/3 p-4">
                    <input
                        type="text"
                        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 mb-4"
                        placeholder="Modifikimi i fundit"
                        disabled
                    />

                    <input
                        type="text"
                        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Kont: (AL0002918)-Lex: (5992)-Matesi: (82881079)-Anomali: ()"
                        disabled
                    />

                    <div className="mb-4">
                        <div
                            className={`w-full rounded cursor-pointer ${
                                isImageExpanded
                                    ? "w-2/3 fixed top-0 left-0 right-0 bottom-0 z-50 object-contain bg-black"
                                    : ""
                            }`}
                            onClick={toggleImageSize}
                        >
                            <img
                                src="/storage/Photo/150.png"
                                alt="Placeholder"
                                className="w-full rounded "
                            />
                        </div>
                    </div>
                </div>

                {/* Third Column */}
                <div className="w-1/3 p-4">
                    <h3 className="text-lg font-bold mb-4 text-white">
                        Ploteso infot nga fotot
                    </h3>

                    <form className="flex flex-col space-y-2">
                        <input
                            type="text"
                            className="border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Leximi Aktiv"
                        />
                        <input
                            type="text"
                            className="border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Leximi Pike"
                        />
                        <input
                            type="text"
                            className="border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Leximi Reaktiv"
                        />
                        <input
                            type="text"
                            className="border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Komente per foton"
                        />

                        <div className="flex justify-center">
                            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                                Ruaj Infot
                            </button>
                        </div>

                        <div>
                            <div className="text-lg font-bold text-center text-white mb-4">
                                Leximi NR matesit
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                    korrekt-korrekt
                                </button>
                                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                                    korrekt-jokorrekt
                                </button>
                                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                                    korrekt- pa qarte
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="text-lg font-bold text-center text-white mb-4">
                                Leximi NR matesit
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                                    jokorrekt-korrekt
                                </button>
                                <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                                    jokorrekt-jokorrekt
                                </button>
                                <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
                                    jokorrekt-paqarte
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="text-lg font-bold text-center text-white mb-4">
                                Leximi NR matesit
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
                                    pa qarte-korrekt
                                </button>
                                <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
                                    pa qarte-jokorrekt
                                </button>
                                <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
                                    pa qarte- pa qarte
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
