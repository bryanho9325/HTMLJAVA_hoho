const quotes = [
    {
        quote : "a",
        author : "a"
    },
    {
        quote : "b",
        author : "b"
    },
    {
        quote : "c",
        author : "c"
    },
    {
        quote : "d",
        author : "d"
    },
    {
        quote : "e",
        author : "e"
    },
    {
        quote : "f",
        author : "f"
    },
    {
        quote : "g",
        author : "g"
    },
    {
        quote : "h",
        author : "h"
    },
    {
        quote : "i",
        author : "i"
    },
    {
        quote : "j",
        author : "j"
    },
    {
        quote : "k",
        author : "k"
    },
];

const quote = document.querySelector("#quote span:nth-child(1)");
const author = document.querySelector("#quote span:nth-child(2)")
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;