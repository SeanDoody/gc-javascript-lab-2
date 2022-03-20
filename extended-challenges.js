(function () {

    console.log('extended challenges start');

    function printSquare(width) {
        let row = '';
        for (let i = 0; i < width; i++) {
            row += '#';
        }
        for (let i = 0; i < width; i++) {
            console.log(row);
        }
    }

    console.log('printing 3x3 square');
    printSquare(3);

    function printTriange(width) {
        
        for (let i = 1; i <= width; i++) {
            let row = '';
            for (let j = 0; j < i; j++) {
                row += '#';
            }
            console.log(row);
        }
    }

    console.log('printing triangle with width of 4');
    printTriange(4);

    function getGrade(number) {
        let grade = '';
        if (number >= 90) {
            grade = 'A';
        } else if (number >= 80) {
            grade = 'B';
        } else if (number >= 70) {
            grade = 'C';
        } else if (number >= 60) {
            grade = 'D';
        } else if (number < 60) {
            grade = 'F';
        }
        return grade;
    }

    console.log('letter grade for 95/100:');
    console.log(getGrade(95));
    console.log('letter grade for 80/100:');
    console.log(getGrade(80));
    console.log('letter grade for 71/100:');
    console.log(getGrade(71));
    console.log('letter grade for 67/100:');
    console.log(getGrade(67));
    console.log('letter grade for 40/100:');
    console.log(getGrade(40));

    function prioritize(urgent, important) {
        if (urgent && important) {
            return '1st priority';
        } else if (!urgent && important) {
            return '2nd priority';
        } else if (urgent && !important) {
            return '3rd priority';
        } else {
            return '4th priority';
        }
    }

    console.log('priority for urgent and important:');
    console.log(prioritize(true, true));
    console.log('priority for not urgent but important:');
    console.log(prioritize(false, true));
    console.log('priority for urgent but not important:');
    console.log(prioritize(true, false));
    console.log('priority for not urgent and not important:');
    console.log(prioritize(false, false));
    console.log('extended challenges end');

})();