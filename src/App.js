import {useEffect} from "react";


const API_URL = "http://www.omdbapi.com?apikey=4c558802";

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_url}&s=${title}`)
    }

    useEffect(() => {

}, []);

    return (
        <h1>App</h1>
    );
};

export default App;