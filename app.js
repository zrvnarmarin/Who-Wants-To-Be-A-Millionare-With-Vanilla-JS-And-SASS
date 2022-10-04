// DOM elements selectors
const question = document.getElementsByName('question')
const totalAmountValue = document.getElementById('total-amount-value')
const fiftyFiftyButton = document.getElementById('fifty-fifty-button')
const callButton = document.getElementById('call-button')
const crowdButton = document.getElementById('crowd-button')
const firstAnswer = document.getElementById('first-answer')
const secondAnswer = document.getElementById('second-answer')
const thirdAnswer = document.getElementById('third-answer')
const fourthAnswer = document.getElementById('fourth-answer')

let test = []
// Functions
window.addEventListener('load', () => {
    fetchQuestions()
    console.log(test)
})

// Fetch questions from the file
const fetchQuestions = () => {
    fetch('questions.json')
    .then(response => {
        return response.json()
    })
    .then(questions => {

        // Put all of the questions in the same array
        const allQuestions = []
        Array.from(questions.games)
            .map((questionsArray, index) => {
                let emptyArray = [questionsArray.questions]

                emptyArray.map(questions => {
                    questions.map(question => {
                        allQuestions.push(question)
                    })
                })
        })

        console.log(allQuestions)
    })
}