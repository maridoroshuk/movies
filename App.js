import "./App.css";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import { useDispatch } from "react-redux";
import { fetchPopular } from "./features/movies/movies-actions";
import HomePage from "./pages/HomePage";
import AuthForm from "./components/AuthForm";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPopular ())
  }, [dispatch])

  return (
    <div className="App">
     <HomePage/>
     <AuthForm/>
    </div>
  );
}

export default App;
