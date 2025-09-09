const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

const randomSurvey = new XMLHttpRequest();

randomSurvey.addEventListener('readystatechange', () => {
    if (randomSurvey.readyState === randomSurvey.DONE) {
        let survey = JSON.parse(randomSurvey.responseText);
        pollTitle.innerHTML = `${survey.data.title}`;
        Object.keys(survey.data.answers).forEach(element => {
            pollAnswers.insertAdjacentHTML('beforeEnd', `
                <button class="poll__answer">
                    ${survey.data.answers[element]}
                </button>
            `);
            
            const btnAnswers = document.querySelectorAll('button');
            pollAnswers.addEventListener('click', (e) => {
                if (e.target == btnAnswers[element]) {
                    alert('Спасибо, ваш голос засчитан!');
                }
            })

        });
    }
})

randomSurvey.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
randomSurvey.send();
