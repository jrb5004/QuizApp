let questionNumber = 0;
let scoreCount = 0;

function handleKickoffButton() {
    $('.js-start-button').click(function(event) {
        $('.js-start-page').remove();   
        $('.quiz-form').css('display', 'block').html('<form><h2>Who is the only Nittany Lion player to have ever won the Heisman Trophy?</h2><input type="radio" name="question1" value="Saquon Barkley">Saquon Barkley<br><input type="radio" name="question1" value="Lavar Arrington">Lavar Arrington<br><input type="radio" name="question1" value="John Cappelletti">John Cappelletti<br><input type="radio" name="question1" value="Franco Harris">Franco Harris<br><button type="submit" class="submitButton">Submit</button></form>');
    });
}




function initiateQuiz() {

    handleKickoffButton();
    handleSubmitButton();
    handleNextButton();
    handleRestartButton();
}

$(initiateQuiz);