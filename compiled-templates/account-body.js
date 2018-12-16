(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['account-body'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<main role=\"main\" class=\"container\" style=\"margin-top:30px\">\r\n    <div class=\"row d-flex justify-content-center\">\r\n        <div class=\"col-6\">\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top\" src=\""
    + alias4(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photo","hash":{},"data":data}) : helper)))
    + "\">\r\n                <div class=\"card-body\">\r\n                    <ul class=\"list-group list-group-flush\">\r\n                        <li class=\"list-group-item\">Name: <span class=\"float-right\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span></li>\r\n                        <li class=\"list-group-item\">Email Address: <span class=\"float-right\">"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</span></li>\r\n                        <li class=\"list-group-item\">Birthday: <span class=\"float-right\">"
    + alias4(((helper = (helper = helpers.birthday || (depth0 != null ? depth0.birthday : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"birthday","hash":{},"data":data}) : helper)))
    + "</span></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</main>";
},"useData":true});
})();