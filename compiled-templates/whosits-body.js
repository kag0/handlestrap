(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['whosits-body'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"col-sm-4\" style=\"margin-top:25px\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item\">Name: <span class=\"float-right\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span></li>\r\n        <li class=\"list-group-item\">Shape: <span class=\"float-right\">"
    + alias4(((helper = (helper = helpers.shape || (depth0 != null ? depth0.shape : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shape","hash":{},"data":data}) : helper)))
    + "</span></li>\r\n        <li class=\"list-group-item\">Color: <span class=\"float-right\">"
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "</span></li>\r\n        <li class=\"list-group-item\">Smell: <span class=\"float-right\">"
    + alias4(((helper = (helper = helpers.smell || (depth0 != null ? depth0.smell : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"smell","hash":{},"data":data}) : helper)))
    + "</span></li>\r\n        <li class=\"list-group-item\">Texture: <span class=\"float-right\">"
    + alias4(((helper = (helper = helpers.texture || (depth0 != null ? depth0.texture : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"texture","hash":{},"data":data}) : helper)))
    + "</span></li>\r\n      </ul>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<main role=\"main\" class=\"container\" style=\"margin-top:30px\">\r\n  <div class=\"row\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.whosits : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\r\n</main>";
},"useData":true});
})();