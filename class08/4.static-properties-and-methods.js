'use strict';

{
  //static properties -> implemented to the class as a whole, not to the instances or objects in the class
  //example 1: comparing article
  class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }

    static compare(articleA, artilceB) {
      return articleA.date - artilceB.date;
    }
  }

  let articles = [
    new Article('HTML', new Date(2019, 1, 1)),
    new Article('CSS', new Date(2019, 0, 1)),
    new Article('JavaScript`', new Date(2019, 11, 1)),
  ];

  articles.sort(Article.compare); //sorting an array, (a,b)=> a-b, check the array methods class
  console.log(articles[0].title);
}

//inheritance also works here, fully same as before. just check the module for the code
