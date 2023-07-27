var count = 0;
function deleteVideo() {
    var realConfirm=window.confirm;
    window.confirm=function(){
      window.confirm=realConfirm;
      return true;
    };
    $('.deleteMediaBtn').click();
}

function deleteVideoTest() {
    if(count > 0) {
        count--;
        deleteVideo();
        setTimeout(deleteVideoTest, 1000);
    }
}

function startDelete(num) {
    count = num;
    setTimeout(deleteVideoTest, 1000);
}
