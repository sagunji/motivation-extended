import http from '../uitls/http';

export async function fetchQuotes(count = 10) {
    const { data } = await http.get("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=10");

    return data;
}