module.exports = {
    theme: 'Космос',
    questions: [
        {
            question: 'Какая планета находится между Нептуном и Сатурном?',
            answers: [
                { text: 'Юпитер', rigth: false },
                { text: 'Уран', rigth: true },
                { text: 'Плутон', rigth: false },
                { text: 'Меркурий', rigth: false },
            ]
        },
        {
            question: 'Расстоняие от Земли до Солнца',
            answers: [
                { text: '237 420 000 км', rigth: false },
                { text: '6 световых лет', rigth: false },
                { text: '6 световых минут', rigth: false },
                { text: '149 600 000 км', rigth: true },
            ]
        },
        {
            question: 'Сколько спутников у Нептуна?',
            answers: [
                { text: '13', rigth: true },
                { text: '16', rigth: false },
                { text: '0', rigth: false },
                { text: '7', rigth: false },
            ]
        },
        {
            question: 'В честь чьего пантеона названы планеты?',
            answers: [
                { text: 'Римского', rigth: true },
                { text: 'Греческого', rigth: false },
                { text: 'Татарского', rigth: false },
                { text: 'Ведийского', rigth: false },
            ]
        },
        {
            question: 'Где космос?',
            answers: [
                { text: 'На наверху', rigth: false },
                { text: 'Здесь', rigth: false },
                { text: 'Вокруг', rigth: true },
                { text: 'Его нет', rigth: false },
            ]
        },
    ]
};
