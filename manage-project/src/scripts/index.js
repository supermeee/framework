exports.install = function(Vue, options) {
  Vue.prototype.setCookie = function(c_name, value, expiredays) {
    var exdate = new Date();
    expiredays = expiredays == undefined ? 1 : expiredays
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
  };
  Vue.prototype.getCookie = function(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
      return unescape(arr[2]);
    else
      return null;
  };
}
