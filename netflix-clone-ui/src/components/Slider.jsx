import React from "react";
import CardSlider from "./CardSlider";

export default function Slider({movies}) {

    const getMoviesFromRange = (from, to) => {
        return movies.slice(from,to)

    };
    return (<div>
        <CardSlider title = "Trending Now" data = {getMoviesFromRange(0,10)} />
        <CardSlider title = "New Releases" data = {getMoviesFromRange(10,20)} />
        <CardSlider title = "Blockbusters" data = {getMoviesFromRange(20,30)} />
        <CardSlider title = "Familiar Favourites" data = {getMoviesFromRange(30,40)} />
        <CardSlider title = "Popular" data = {getMoviesFromRange(40,50)} />
    </div>);
}