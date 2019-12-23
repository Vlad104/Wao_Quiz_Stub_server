module.exports = {
  theme: 'Квантовая физика',
  questions: [
      {
          question: 'Каким выражением определяется импульс фотона с энергией E? ',
          answers: [
              { text: 'c / E', rigth: false },
              { text: 'hv / E', rigth: false },
              { text: 'E / hc', rigth: false },
              { text: 'E / c', rigth: true },
          ]
      },
      {
          question: 'В каких единицах измеряется постоянная Планка?',
          answers: [
              { text: 'Дж', rigth: false },
              { text: 'Дж/с', rigth: false },
              { text: 'Дж•с', rigth: true },
              { text: 'Дж/м', rigth: false },
          ]
      },
      {
          question: 'Какое из приведенных выражений соответствует массе фотона с длиной волны л?,
          answers: [
              { text: 'h / λc', rigth: true },
              { text: 'hc / λ', rigth: false },
              { text: 'hλc', rigth: false },
              { text: 'hλc^2', rigth: false },
          ]
      },
      {
          question: 'Хотите ли заниматься квантовой физикой?',
          answers: [
              { text: 'Да', rigth: true },
              { text: 'Нет', rigth: false },
          ]
      },
      {
        question: 'Наша оценка положительная или отрицательная?',
        answers: [
            { text: '+', rigth: false },
            { text: '-', rigth: false },
            { text: '~', rigth: true },
        ]
    },
  ]
};
