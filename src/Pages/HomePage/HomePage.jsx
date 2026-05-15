import { Suspense } from "react";
import AllFriends from "./AllFriends";
import Banner from "./Banner";
import Card from "./Card";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Card></Card>
            <Suspense fallback={<LoadingSpinner />}>
                <AllFriends></AllFriends>

            </Suspense>
        </div>
    );
};

const LoadingSpinner = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
            {/* Apnar screenshot-e thaka yellow theme-er spinner */}
            <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-500 font-medium italic">Finding your friends...</p>
        </div>
    );
};
export default HomePage;