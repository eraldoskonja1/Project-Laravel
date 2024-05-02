import { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";

export default function Authenticated({ user, header, children, auth }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        {/* NAVBAR LINKS */}
                        <div className="flex-grow hidden sm:flex sm:items-center sm:justify-center">
                            <div className="flex space-x-8">
                                <NavLink
                                    href={route("fotourgjente")}
                                    active={route().current("fotourgjente")}
                                    className="flex-grow"
                                >
                                    F.Urgjente
                                </NavLink>

                                {auth && auth.user && auth.user.role_id !== 2 && (
                                <NavLink
                                    href={route("shperndarjeurgjente")}
                                    active={route().current(
                                        "shperndarjeurgjente"
                                    )}
                                    className="flex-grow"
                                >
                                    Sh.Urgjente
                                </NavLink>
                                )}

                                <NavLink
                                    href={route("raporturgjent")}
                                    active={route().current("raporturgjent")}
                                >
                                    R.Urgjent
                                </NavLink>

                                <NavLink
                                    href={route("fotonormale")}
                                    active={route().current("fotonormale")}
                                >
                                    F.Normale
                                </NavLink>

                                {auth && auth.user && auth.user.role_id !== 2 && (
                                <NavLink
                                    href={route("shperndarjenormale")}
                                    active={route().current(
                                        "shperndarjenormale"
                                    )}
                                >
                                    Sh.Normale
                                </NavLink>
                                )}

                                <NavLink
                                    href={route("raportnormal")}
                                    active={route().current("raportnormal")}
                                >
                                    R.Normal
                                </NavLink>

                                <NavLink
                                    href={route("fototndryshe")}
                                    active={route().current("fototndryshe")}
                                >
                                    F.Ndryshe
                                </NavLink>

                                {auth && auth.user && auth.user.role_id !== 2 && (
                                <NavLink
                                    href={route("shperndarjendryshe")}
                                    active={route().current(
                                        "shperndarjendryshe"
                                    )}
                                >
                                    Sh.Ndryshe
                                </NavLink>
                                )}

                                <NavLink
                                    href={route("fotorikontroll")}
                                    active={route().current("fotorikontroll")}
                                >
                                    F.Rikontroll
                                </NavLink>

                                {auth && auth.user && auth.user.role_id !== 2 && (
                                <NavLink
                                    href={route("shperndarjerikontroll")}
                                    active={route().current(
                                        "shperndarjerikontroll"
                                    )}
                                >
                                    Sh.Rikontroll
                                </NavLink>
                                )}

                                {auth && auth.user && auth.user.role_id !== 2 && (
                                    <NavLink
                                        href={route("users")}
                                        active={route().current("users")}
                                    >
                                        Users
                                    </NavLink>
                                )}
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <div className="ms-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("fotourgjente")}
                            active={route().current("fotourgjente")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800 dark:text-gray-200">
                                {user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("profile.edit")}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white dark:bg-gray-800 shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
