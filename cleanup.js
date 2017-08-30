var count = 0;
var adtpulse_url = "https://portal.adtpulse.com/myhome/6.18.0-238/pictures/editpictures/serv/DelPictureServ";
var sat = findsat();

function findsat() {
    var jq = $('#delb').attr('onclick');
    return jq.substring(jq.indexOf('(')+2,jq.indexOf(',')-1);
}

function deleteVideoTest() {
    if(count > 0) {
        count--;
        $.post(adtpulse_url, {video:1, sat:sat}, function(data) { console.log(data); });
        setTimeout(deleteVideoTest, 1000);
    }
}

function startDelete(num) {
    count = num;
    setTimeout(deleteVideoTest, 1000);
}