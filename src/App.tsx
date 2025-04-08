import './App.css';
import {BrowserRouter, Route, Routes} from "react-router";
import {lazy, Suspense} from "react";
import LoadingSpinner from "./components/LoadingSpinner.tsx";

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));


function App() {
    return (
        <BrowserRouter>
            <div className='bg-darkgray text-white flex flex-col items-center'>
                <Suspense fallback={<LoadingSpinner />}>
                    <div className="flex flex-col w-screen p-5 xl:w-[1166px] xl:p-0">
                        <Routes>
                            <Route index element={<MainPage/>}/>
                        </Routes>
                    </div>
                </Suspense>
            </div>
        </BrowserRouter>
    );
}

export default App;
