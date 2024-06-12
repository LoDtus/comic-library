import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';

import Home from './components/Home';
import ComicDetail from './components/ComicDetail';
import Chapter from './components/Chapter';
import Result from './components/Result';
import Author from './components/Author';
import User from './components/User';

function App() {
    return (
        <div className="App bg-[#fafafa] flex flex-col justify-center items-center">
            <Header/>
            <main className="flex justify-center min-h-[85vh] mb-5">
                <div className="container-main lg:flex 2xl:px-3">
                    <NavigationBar/>
                    <Routes>
                        <Route path='/' element={
                            <Home/>
                        }/>
                        <Route path='/comic-detail' element={
                            <ComicDetail/>
                        }/>
                        <Route path='/chapter' element={
                            <Chapter/>
                        }/>
                        <Route path='/result' element={
                            <Result/>
                        }/>
                        <Route path='/author' element={
                            <Author/>
                        }/>
                        <Route path='/user' element={
                            <User/>
                        }/>
                    </Routes>
                </div>
            </main>
            <Footer/>
		</div>
    );
}

export default App;
