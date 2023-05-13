export const googleBookService = {
    query,
}

function query(bookToSearch) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${bookToSearch}`)
}


