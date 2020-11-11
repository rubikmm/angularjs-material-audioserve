import angular from "angular";
import "angular-material";
import "angular-messages";
import "angular-material-icons";

// Import your app stylesheets
import "./style.css";

// Import your app functionality
import "./app/index.js";

// Create and bootstrap application
const requires = ["app", "ngMaterial", "ngMessages", "ngMdIcons"];
const app = angular.module("appRoot", requires);
app
  .config([
    "$mdGestureProvider",
    "$mdThemingProvider",
    "$mdIconProvider",
    function($mdGestureProvider, $mdThemingProvider, $mdIconProvider) {
      $mdGestureProvider.skipClickHijack();
      $mdThemingProvider
        .theme("default")
        .primaryPalette("indigo")
        .accentPalette("purple")
        .warnPalette("purple")
        .backgroundPalette("grey");

      $mdIconProvider
        .iconSet("social", "img/icons/sets/social-icons.svg", 24)
        .defaultIconSet("img/icons/sets/core-icons.svg", 24);
    }
  ])
  .directive("regularCard", function() {
    return {
      restrict: "E",
      templateUrl: "app/regularCard.tmpl.html",
      scope: {
        name: "@"
      }
    };
  });
window.app = app;
