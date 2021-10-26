(function () {

    function printSquare(width) {
        let row = '';
        for (let i = 0; i < width; i++) {
            row += '#';
        }
        for (let i = 0; i < width; i++) {
            console.log(row);
        }
    }

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

    console.log(getGrade(95));
    console.log(getGrade(80));
    console.log(getGrade(71));
    console.log(getGrade(67));
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

    console.log(prioritize(true, true));
    console.log(prioritize(false, true));
    console.log(prioritize(true, false));
    console.log(prioritize(false, false));

})();