const booksByCategory = [
    {
        category : "Riqueza",
        books : [{
            title: "Os segredos da mente milionaria",
            author: "T.Harv Eker",
        },
        {
            title: "O homem mais ric da babilônia",
            author: "George S. Clarson",
        },
        {
            title: "Pai rico, pai pobre",
            author: "Robert T. Kyosaki e Sharon L. Lechter",
        },

        ],
    },
    {
        category: "Inteleigencia emocional",
        books: [{
            title: "Você é insubistuível",
            author: "August Cury",
        },
        {
            title: "Ansiedade - Como enfrentar o mal do Século",
            author: "August Cury",
        },
        {
            title: "Os 7 habitos das pessoas altamente eficases",
            author: "Sptephen R. Covey",
        },

        ],
    },

];

const booksCategories = booksByCategory.length;
console.log('Total de categorias:',booksCategories);
for (let category of booksByCategory) {
    
    console.log('total de livrios da categoria:', category.category)
    
    console.log(category.books.length)
    
    
    
}

function Contauthors() {
    let authors = [];
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
                
            }
        }
    }
    console.log("Total de autores: ", authors.length)
   
}
Contauthors();

function booksOfautors(author) {
    let books = [];
    for (let category of booksByCategory) {
        for (let book of category.books) {
          if(book.author === author){
            books.push(book.title)
          }
        }
    }
    console.log(`Livros do Autor ${author} : ${books.join(", ")}`)
    

    
}
booksOfautors('August Cury');

// Revisado !!! EEE