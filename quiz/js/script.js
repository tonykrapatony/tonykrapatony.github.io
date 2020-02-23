$(function(){
    loadQuestions();
    calcResult();
    
})

function loadQuestions(){
    // завантаження товарів
    $.getJSON('questions.json', function(data){
        console.log(data);
        var out = '';
    
        for (var key in data) {
            out += '<div class="question_item">';
            
            out += '<div class="question">'+data[key]['question']+'</div>';
            
            out += '<div class="answer_list">';
            
            out += '<div class="answer">';
            out += '<label for="a">'+data[key]['answers']['a']+'</label>';
            out += '<input type="radio" id="'+data[key]['name']+'" name="'+data[key]['name']+'" value="'+data[key]['answers']['a']+'">';
            out += '</div>';
        
            out += '<div class="answer">';
            out += '<label for="b">'+data[key]['answers']['b']+'</label>';
            out += '<input type="radio" id="'+data[key]['name']+'" name="'+data[key]['name']+'" value="'+data[key]['answers']['b']+'">';
            out += '</div>';
            
            out += '<div class="answer">';
            out += '<label for="c">'+data[key]['answers']['c']+'</label>';
            out += '<input type="radio" class="'+data[key]['name']+'" name="'+data[key]['name']+'" value="'+data[key]['answers']['c']+'">';
            out += '</div>';
            
            out += '<div class="answer">';
            out += '<label for="d">'+data[key]['answers']['d']+'</label>';
            out += '<input type="radio" class="'+data[key]['name']+'" name="'+data[key]['name']+'" value="'+data[key]['answers']['d']+'">';
            out += '</div>';
            
            out += '</div>';
            
            out += '</div>';
            
        }
        out += '<div class="result">Result</div>';
        $('.question_list').html(out);
    });
}

function calcResult() {
    $.getJSON('questions.json', function(data){
        $('.result').on("click", function(){
                var 
                correctAnswer_1 = data[111]['correctAnswer'],
                correctAnswer_2 = data[112]['correctAnswer'],
                correctAnswer_3 = data[113]['correctAnswer'],
                correctAnswer_4 = data[114]['correctAnswer'], 
                result = 0,
                answer_1 = $('input[name=question_1]:checked').val(),

                answer_2 = $('input[name=question_2]:checked').val(),
                answer_3 = $('input[name=question_3]:checked').val(),
                answer_4 = $('input[name=question_4]:checked').val();

                if (answer_1 === correctAnswer_1){
                    result = result + 1;
                };

                if (answer_2 === correctAnswer_2){
                    result = result + 1;
                };
                if (answer_3 === correctAnswer_3){
                    result = result + 1;
                };
                if (answer_4 === correctAnswer_4){
                    result = result + 1;
                }

                console.log(result);
                $('.question_list').html('<div class="score">Your result '+result+' point(s)</div>');

        });
    })
}