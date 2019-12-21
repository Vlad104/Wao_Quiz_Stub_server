module.exports = {
    theme: 'Machine Learning',
    questions: [
        {
            question: 'Что из этого является нейросетью?',
            answers: [
                { text: 'kNN', rigth: false },
                { text: 'SVM', rigth: false },
                { text: 'Adaboost', rigth: false },
                { text: 'CNN', rigth: true },
            ]
        },
        {
            question: 'Создатель теории CNN',
            answers: [
                { text: 'Ян Лекун', rigth: true },
                { text: 'Владимир Вапник', rigth: false },
                { text: 'Сатоси Накамото', rigth: false },
                { text: 'Томас Байес', rigth: false },
            ]
        },
        {
            question: 'Какой функции активации не существует?',
            answers: [
                { text: 'Сигмоида', rigth: false },
                { text: 'ReLU', rigth: false },
                { text: 'Синус', rigth: false },
                { text: 'Гиперболический тангенс', rigth: true },
            ]
        },
        {
            question: 'Да?',
            answers: [
                { text: 'Да', rigth: true },
                { text: 'Нет', rigth: false },
            ]
        },
    ]
};
