angular.module("project3App").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html>\r\n<html ng-app=\"project3App\">\r\n<head>\r\n	<title>WEPO Assignment 3 - Online Web Store</title>\r\n	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n	<meta charset=\"utf-8\">\r\n	<link rel=\"stylesheet\" href=\"styles/vendor.css\">\r\n	<link rel=\"stylesheet\" href=\"styles/app.css\">\r\n	<!--<script src=\"app.js\"></script>\r\n	<script scr=\"/components/sellers/SellersController.js\"</script>-->\r\n	\r\n	<!--<script src=\"src/vendor/jquery/dist/jquery.js\"></script>-->\r\n	<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js\" integrity=\"sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS\" crossorigin=\"anonymous\"></script>\r\n	<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" integrity=\"sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7\" crossorigin=\"anonymous\">\r\n</head>\r\n<body>\r\n	<main class=\"container-fluid col-lg-10 col-lg-offset-1\" style=\"padding-top: 50px; padding-bottom: 50px\">\r\n\r\n			<div class=\"Main clearfix\" ng-view id=\"content\"></div>\r\n	</main>\r\n	\r\n	<toaster-container></toaster-container>\r\n	<!-- inject:vendor:js -->\r\n	<!-- endinject -->\r\n\r\n	<!-- inject:app:js -->\r\n	<!-- endinject -->\r\n\r\n	<!-- inject:templates:js -->\r\n	<!-- endinject -->\r\n</body>\r\n\r\n</html>\r\n");
$templateCache.put("components/sellers/index.html","\r\n\r\n<div class=\"page-header\">\r\n  <h1>SöluTorgið <small>Sölu Aðilar</small></h1>\r\n</div>\r\n\r\n\r\n<div  style=\"align: center\">\r\n	<div style=\"max-height: 800px; overflow-y: scroll;\">\r\n	<table class=\"table table-striped\">\r\n		<tr>\r\n			<th>Sölu Aðilar</th>\r\n			<th>Flokkur</th> \r\n			<th></th> \r\n		</tr>\r\n		<tr class=\"active\" ng-repeat=\"seller in sellers\">\r\n			<td><a ng-click=\"viewSeller(seller.id)\">{{seller.name}}</a></td>\r\n			<td>{{seller.category}}</td>\r\n			<td><button type=\"button\" class=\"btn btn-warning col-lg-4 col-lg-offset-8\" data-toggle=\"modal\" data-target=\".bs-edit-modal-lg\" ng-click=\"setUpdateSeller(seller)\">Breyta</button></td>\r\n		</tr>\r\n\r\n	</table>\r\n	</div>\r\n	\r\n	<div class=\"col-lg-12\">\r\n		<button type=\"button\" class=\"btn btn-primary col-lg-2 col-lg-offset-10\" data-toggle=\"modal\" data-target=\".bs-add-modal-lg\">Bæta Við</button>\r\n\r\n		<div class=\"modal fade bs-add-modal-lg\" id=\"add\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\">\r\n			<div class=\"modal-dialog modal-lg\">\r\n				<div class=\"modal-content\">\r\n					<div class=\"panel panel-default\">\r\n						<div class=\"panel-heading\">\r\n							<h2>Bæta við Söluaðila</h2>\r\n						</div>\r\n						<div class=\"panel-body\">\r\n							<form>\r\n								<div class=\"form-group\">\r\n									<label for=\"name\">Nafn: </label>\r\n									<input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Nafn...\" ng-model=\"name\">\r\n								</div>\r\n								<div class=\"form-group\">\r\n									<label for=\"category\">Flokkur: </label>\r\n									<input type=\"text\" class=\"form-control\" id=\"category\" placeholder=\"Flokkur...\" ng-model=\"cat\">\r\n								</div>\r\n								<div class=\"form-group\">\r\n									<label for=\"image\">Linkur á mynd: </label>\r\n									<input type=\"text\" class=\"form-control\" id=\"image\" placeholder=\"Linkur á mynd...\" ng-model=\"img\">\r\n								</div>\r\n								<button type=\"submit\" class=\"btn btn-primary col-lg-2 col-lg-offset-10\" ng-click=\"addSeller(name, cat, img)\">Bæta við</button>\r\n							</form>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n\r\n	<div class=\"modal fade bs-edit-modal-lg\" id=\"update\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\">\r\n			<div class=\"modal-dialog modal-lg\" id=\"update\">\r\n				<div class=\"modal-content\">\r\n					<div class=\"panel panel-default\">\r\n						<div class=\"panel-heading\">\r\n							<h2>Breyta við Söluaðila</h2>\r\n						</div>\r\n						<div class=\"panel-body\">\r\n							<form>\r\n								<div class=\"form-group\">\r\n									<label for=\"name\">Nafn: </label>\r\n									<input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"{{UpdateSellerName}}\" ng-model=\"updateName\">\r\n								</div>\r\n								<div class=\"form-group\">\r\n									<label for=\"category\">Flokkur: </label>\r\n									<input type=\"text\" class=\"form-control\" id=\"category\" placeholder=\"{{UpdateSellerCat}}\" ng-model=\"updateCat\">\r\n								</div>\r\n								<div class=\"form-group\">\r\n									<label for=\"image\">Linkur á mynd: </label>\r\n									<input type=\"text\" class=\"form-control\" id=\"image\" placeholder=\"{{UpdateSellerImg}}\" ng-model=\"uptadeImg\">\r\n								</div>\r\n								<button type=\"submit\" class=\"btn btn-primary col-lg-2 col-lg-offset-10\" ng-click=\"updateSellers(updateName, updateCat, uptadeImg)\">Uppfæra</button>\r\n							</form>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n");
$templateCache.put("components/sellers/singleSeller.html","<div>\r\n	<div class=\"row\" style=\"padding-bottom: 50px;\">\r\n		<img src=\"{{currSeller.imagePath}}\" alt=\"...\" class=\"img-rounded col-lg-3 col-xs-12\">\r\n		<h1 class=\"col-lg-9 col-xs-12\">{{currSeller.name}}</h1>\r\n		<h1><small>{{currSeller.category}}</small></h1>\r\n	</div>\r\n\r\n	<div class=\"row\" style=\"padding-bottom: 70px;\">\r\n		<ol class=\"nav nav-tabs nav-justified col-lg-5\">\r\n			<li role=\"presentation\"><a href=\"#/\">Allar Vörur</a></li>\r\n			<li role=\"presentation\"><a href=\"#/\">Topp 10</a></li>\r\n		</ol>\r\n	</div>\r\n\r\n	<div style=\"max-height: 1000px; overflow-y: scroll;\" class=\"row\">\r\n		<ul ng-repeat=\"product in currSellerProducts\">\r\n			<div class=\"col-lg-3\" style=\"padding: 20px;\">\r\n				<img ng-src=\" {{ product.imagePath }} \" class=\"img-thumbnail\" style=\"display: block; height: 250px; width: 300px;\">\r\n				<h3>product.name</h3><h3>{{product.price}}Kr.</h3>\r\n			</div>\r\n		</ul>\r\n	</div>\r\n\r\n	<div class=\"row\" style=\"padding-top: 30px;\">\r\n		<div>\r\n			<button type=\"button\" class=\"btn btn-primary col-lg-3 col-lg-offset-9 col-xs-12\">Skrá nýja vöru</button>\r\n		</div>\r\n	</div>\r\n</div>\r\n");
$templateCache.put("shared/notify/centris-notify-undo.tpl.html","<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">\r\n	<!-- Note: basically the same template as the default template,\r\n	     but with an added \"Undo\" button. Note: we don\'t assume that\r\n	     there will be any need for custom HTML in the title/message,\r\n	     so that support has been removed. -->\r\n	<div class=\"{{titleClass}}\"\r\n		translate=\"AppTitle\">\r\n	</div>\r\n	<div class=\"{{messageClass}}\">\r\n		{{title}}\r\n	</div>\r\n	<div>\r\n		<a class=\"centris-notify-undo pull-right\"\r\n			ng-click=\"centrisUndo(message.type, message.id)\"\r\n			translate=\"Undo\" />\r\n	</div>\r\n</div>");
$templateCache.put("shared/notify/centris-notify.tpl.html","<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">\r\n	<div class=\"{{titleClass}}\"\r\n		translate=\"AppTitle\">\r\n	</div>\r\n	<div class=\"{{messageClass}}\">\r\n		{{message}}\r\n	</div>\r\n</div>");}]);