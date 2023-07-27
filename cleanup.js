var count = 0;
var delayTime = 1000;
function deleteVideo() {
    var realConfirm=window.confirm;
    window.confirm=function(){
      window.confirm=realConfirm;
      return true;
    };
    document.getElementsByClassName("deleteMediaBtn")[0].click();
}

function deleteVideoTest() {
    if(count > 0) {
        count--;
        deleteVideo();
        setTimeout(deleteVideoTest, delayTime);
    }
}

function startDelete(num) {
    count = num;
    setTimeout(deleteVideoTest, delayTime);
}
