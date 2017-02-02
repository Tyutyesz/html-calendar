/**
 * Created by csmat on 2017. 02. 02..
 */

function calendar() {

    //Make our constants
    const MONTH = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    //Make our date objects
    var date = new Date();

    var day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear();


    var currentMonth = new Date(year, month, 1);
    var nextMonth = new Date(year, month + 1, 1);

    var firstWeekDays = currentMonth.getDay();
    var daysInMonth = Math.round((nextMonth.getTime() - currentMonth.getTime()) / (1000 * 60 * 60 * 24));

    //Create our calendar HTML
    var generatedHtml = '<div class="calendar"> <table>';
    generatedHtml += '<tr><td colspan="8" class="month-row">' + MONTH[month] + ' ' + year + '</td></tr><tr><td></td>';
    for (var d = 0; d < DAYS.length; d++) {
        generatedHtml += '<td>' + DAYS[d] + '</td>'
    }
    generatedHtml += '<tr class="calendar-row"><td>1</td>';

    for (var weekDay = 0; weekDay < firstWeekDays; weekDay++) {
        generatedHtml += '<td class="inactive-days"> </td>';
    }

    var weekCounter = 2;
    weekDay = firstWeekDays;
    for (var i = 1; i <= daysInMonth; i++) {
        weekDay %= 7;
        if (weekDay == 0) {
            generatedHtml += '</tr><tr class="calendar-row he"><td>'+ weekCounter +'</td>';
            weekCounter++;
        }

        if (day == i) {
            generatedHtml += '<td class="present-day"><b>' + i + '</b></td>';
        } else if (weekDay == 0 || weekDay == 6) {
            generatedHtml += '<td class="weekend">' + i + '</td>'
        } else {
            generatedHtml += '<td> ' + i + ' </td>';
        }

        weekDay++;
    }

    generatedHtml += '</tr>';
    generatedHtml += '</table></div>';

    document.write(generatedHtml);
};






