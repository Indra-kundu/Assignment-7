import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center relative">
                {/* Background Decorative Circle (Subtle) */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#244D3F]/5 rounded-full blur-3xl -z-0"></div>

                <div className="relative z-10">
                    {/* Error Status Code */}
                    <p className="text-base font-semibold text-[#244D3F]">404</p>

                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Page not found
                    </h1>

                    <p className="mt-6 text-base leading-7 text-gray-600">
                        {error?.statusText || error?.message || "Sorry, we couldn’t find the page you’re looking for."}
                    </p>

                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        {/* Go Back (Browser History) */}
                        <button
                            onClick={() => window.history.back()}
                            className="text-sm font-semibold text-gray-900 hover:text-[#244D3F] transition-colors"
                        >
                            <span aria-hidden="true">&larr;</span> Go back
                        </button>

                        {/* Primary Home Button */}
                        <Link
                            to="/"
                            className="rounded-full bg-[#244D3F] px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1a3a2f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#244D3F] transition-all"
                        >
                            Go back home
                        </Link>
                    </div>

                    {/* Support Contact */}
                    <div className="mt-16 border-t border-gray-100 pt-8">
                        <p className="text-sm text-gray-500">
                            Facing issues? <a href="#" className="font-medium text-[#244D3F] hover:underline">Contact support</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;