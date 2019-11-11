var count = 0;
var interval = setInterval(function() {
  setTimeout(function() {
    var a = document.getElementsByClassName('ProductCartPill-unavailableMessage ProductCartPill-unavailableMessage--endOfLife');
    if (a.length === 1) {
      var content = a[0].innerText;
      if (content !== 'This product is sold out online and in store') {
        console.log('YAY!')
      } else {
        location.reload();
        count++;
        console.log(count);
      }
    }
  }, 5 * 1000);
}, 60 * 1000);
