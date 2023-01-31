'use strict';

const numberOfFilms = +prompt('How many films have You seen?', '');

const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const
    a = prompt('One of films You have seen?', ''),
    b = prompt('How could You rate it?', ''),
    c = prompt('One of films You have seen?', ''),
    d = prompt('How could You rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);