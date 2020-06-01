// Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».

// const userName = prompt('Your name?');
// alert(`Your name is ${userName}`);

// Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

// const yearOfBirth = prompt('What year were you born?');
// year = new Date();

// const currentYear = year.getFullYear();


// const userAge  =  currentYear - yearOfBirth; 
// alert(`You are ${userAge} years old`);

// Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

// const sideSqr = prompt('Put the size of square side');

// const area = sideSqr ** 2;
// alert(`The area is ${area}`);

//something about radius

// const radius = prompt('What is the radius?');

// const pi = 3.14;

// const area = radius * ((2 * pi) ** 2);

// alert(`the area of the circle is ${area.toFixed(3)}`);


// Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

// const distance = prompt("Put the distance beetween two cities in km")

// const time = prompt('Put the time you want to get there in hours');

// const speed = distance/time;

// alert(`You should move ${speed} km/hour`);

// Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.


// const dollarEuroRate = 1.1;

// const dollar = prompt('Put the dollar amount you would like to exchange for UAH?');

// const euro = dolar * dollarEuroRate;

// alert(`You have ${euro}euro now`);


//Make the soft that can count the number of 820mb files in the flashdrive of the certain size


// const flashDrive = prompt('Put the flashdrive size in GB');

// const howManyFiles = Math.floor((flashDrive * 1024)/820);

// alert(`You can have ${howManyFiles} on yor flashdrive`);


// Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.

// const wallet = prompt('What amount do you have in your wallet babe?');

// const chocoPrice = prompt('Choco price');

// const amountChoco = Math.floor(wallet/chocoPrice);

// const rest = wallet - chocoPrice * amountChoco;



// alert(`You can buy ${amountChoco} and you will have ${rest.toFixed(2)}$ in your wallet`);


// Запросите у пользователя трехзначное число и выведите его задом наперед. 


// const a = prompt('Put the number');
// alert(('' + a).split('').reverse().join(''));


// Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.

// const deposit = prompt('Put the amount of your deposit');

// const percentPerYear = 0.05;

// const percentPerMonth = 0.05 / 12;

// const devident = (deposit * percentPerMonth)*2;


// alert(`Your devidents for two month are ${devident.toFixed(2)}$`);


const numberOffilms = +prompt('How many movies have you seen?', '')

personalMovieDB = {
  count:numberOffilms,
  movies : {},
  actors : {},
  ganres : [],
  private:false
}

// const a = prompt('Last movie you have seen',''),
//       b = prompt('Your rating of this movie',''),
//       c = prompt('Last movie you have seen',''),
//       d = prompt('Your rating of this movie','');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// mi avtomatizirovali

for(i = 0; i < 2; i++) {
  const a = prompt('Last movie you have seen','');
        b = prompt('Your rating of this movie','');
    if( a != null && b != null && a != '' && b != '' && a.length < 50) {
      console.log('done');
    } else {
      console.log('error');
      i--;
    }

  personalMovieDB.movies[a] = b;
}


if (personalMovieDB.count < 10) {
  console.log('You have watched a lot of movies');
} else if (personalMovieDB > 10 && personalMovieDB.count < 30 ) {
  console.log('You are classic user');
} else if (personalMovieDB.count >= 30){
  console.log('You are kinoman');
} else {
   console.log('BOOM');
}

console.log(personalMovieDB);



