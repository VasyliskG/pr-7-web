// Завдання 1-2: Об'єкт "Студент" з методом обчислення середнього балу
const student = {
    firstName: "Василь",
    lastName: "Петренко",
    age: 20,
    grades: [85, 90, 78, 92, 88],
    
    // Метод обчислення середнього балу
    getAverageGrade: function() {
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return (sum / this.grades.length).toFixed(2);
    }
};

// Виведення інформації про студента
function displayStudent() {
    const output = document.getElementById('student-output');
    output.innerHTML = `
        <table>
            <tr><th>Властивість</th><th>Значення</th></tr>
            <tr><td>Ім'я</td><td>${student.firstName}</td></tr>
            <tr><td>Прізвище</td><td>${student.lastName}</td></tr>
            <tr><td>Вік</td><td>${student.age}</td></tr>
            <tr><td>Оцінки</td><td>${student.grades.join(', ')}</td></tr>
            <tr><td>Середній бал</td><td><strong>${student.getAverageGrade()}</strong></td></tr>
        </table>
    `;
}

// Завдання 3-5: Масив об'єктів "Книги"
const books = [
    { title: "1984", author: "Джордж Орвелл", year: 1949 },
    { title: "JavaScript: The Good Parts", author: "Дуглас Крокфорд", year: 2008 },
    { title: "Clean Code", author: "Роберт Мартін", year: 2008 },
    { title: "The Pragmatic Programmer", author: "Ендрю Гант", year: 1999 },
    { title: "Eloquent JavaScript", author: "Маріjn Хавербеке", year: 2014 },
    { title: "You Don't Know JS", author: "Кайл Сімпсон", year: 2015 }
];

// Завдання 3: Виведення списку книг
function displayBooks() {
    const output = document.getElementById('books-output');
    let html = '<ul class="book-list">';
    books.forEach((book, index) => {
        html += `<li><strong>${index + 1}.</strong> "${book.title}" — ${book.author} (${book.year})</li>`;
    });
    html += '</ul>';
    output.innerHTML = html;
}

// Завдання 4: Знайти книгу, видану найраніше
function displayEarliestBook() {
    const earliestBook = books.reduce((earliest, current) => {
        return current.year < earliest.year ? current : earliest;
    });
    
    const output = document.getElementById('earliest-book');
    output.innerHTML = `
        <h3>📖 Найраніше видана книга:</h3>
        <p><strong>"${earliestBook.title}"</strong> — ${earliestBook.author} (${earliestBook.year})</p>
    `;
}

// Завдання 5: Відібрати книги, видані після 2010 року
function displayBooksAfter2010() {
    const booksAfter2010 = books.filter(book => book.year > 2010);
    
    const output = document.getElementById('books-after-2010');
    let html = '<h3>📚 Книги після 2010 року (filter):</h3><ul class="book-list">';
    booksAfter2010.forEach(book => {
        html += `<li>"${book.title}" — ${book.author} (${book.year})</li>`;
    });
    html += '</ul>';
    output.innerHTML = html;
}

// Завдання 6: Метод map() - подвоєння елементів масиву
function displayMapExample() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const doubledNumbers = numbers.map(num => num * 2);
    
    const output = document.getElementById('map-output');
    output.innerHTML = `
        <p><strong>Оригінальний масив:</strong> [${numbers.join(', ')}]</p>
        <p><strong>Подвоєний масив (map):</strong> [${doubledNumbers.join(', ')}]</p>
        <p><em>Код: numbers.map(num => num * 2)</em></p>
    `;
}

// Завдання 7: Виведення властивостей об'єкта (for...in)
function displayForObject() {
    const output = document.getElementById('for-in-output');
    let html = '<p>Властивості об\'єкта "Студент":</p><ul>';
    
    for (let key in student) {
        if (typeof student[key] !== 'function') {
            html += `<li><strong>${key}:</strong> ${student[key]}</li>`;
        }
    }
    html += '</ul>';
    output.innerHTML = html;
}

// Додатково 1: Студенти із середнім балом > 80
const students = [
    {
        firstName: "Олена",
        lastName: "Коваленко",
        age: 19,
        grades: [95, 88, 92, 90],
        getAverageGrade: function() {
            const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
            return sum / this.grades.length;
        }
    },
    {
        firstName: "Максим",
        lastName: "Шевченко",
        age: 20,
        grades: [75, 68, 72, 80],
        getAverageGrade: function() {
            const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
            return sum / this.grades.length;
        }
    },
    {
        firstName: "Анна",
        lastName: "Бондаренко",
        age: 21,
        grades: [88, 92, 85, 90],
        getAverageGrade: function() {
            const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
            return sum / this.grades.length;
        }
    }
];

function getHighAchievers(studentsArray, minAverage = 80) {
    return studentsArray.filter(student => student.getAverageGrade() > minAverage);
}

function displayHighAchievers() {
    const highAchievers = getHighAchievers(students);
    
    const output = document.getElementById('high-achievers-output');
    let html = '<ul class="student-list">';
    highAchievers.forEach(student => {
        html += `<li><strong>${student.firstName} ${student.lastName}</strong> — 
                 Середній бал: ${student.getAverageGrade().toFixed(2)}</li>`;
    });
    html += '</ul>';
    output.innerHTML = html;
}

// Додатково 2: Сортування книг за роком видання
function displaySortedBooks() {
    const sortedBooks = [...books].sort((a, b) => a.year - b.year);
    
    const output = document.getElementById('sorted-books-output');
    let html = '<table><tr><th>№</th><th>Рік</th><th>Назва</th><th>Автор</th></tr>';
    sortedBooks.forEach((book, index) => {
        html += `<tr><td>${index + 1}</td><td>${book.year}</td><td>"${book.title}"</td><td>${book.author}</td></tr>`;
    });
    html += '</table>';
    output.innerHTML = html;
}

// Додатково 3: Функція додавання нової книги через форму
function renderBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    
    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${index + 1}.</strong> "${book.title}" — ${book.author} (${book.year})`;
        bookList.appendChild(li);
    });
}

function addBook() {
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const year = parseInt(document.getElementById('year').value);

    if (!title || !author || !year) {
        alert('Будь ласка, заповніть всі поля!');
        return;
    }

    if (year < 1000 || year > new Date().getFullYear()) {
        alert('Введіть коректний рік видання!');
        return;
    }

    books.push({ title, author, year });
    
    // Очищення форми
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('year').value = '';

    // Оновлення списку та виводу
    renderBooks();
    displayBooks();
    displayEarliestBook();
    displayBooksAfter2010();
    displaySortedBooks();
}

// Ініціалізація при завантаженні сторінки+
document.addEventListener('DOMContentLoaded', function() {
    displayStudent();
    displayBooks();
    displayEarliestBook();
    displayBooksAfter2010();
    displayMapExample();
    displayForObject();
    displayHighAchievers();
    displaySortedBooks();
    renderBooks();
});