angular.module('maxon', ['ngAnimate', 'ui.bootstrap'])
    .controller('heroTableCtrl', HeroTblCtrl)
    .factory('heroApi', heroApi)
    .constant('apiUrl',
        'http://maxonhouse.com/api/index.php?view=hero&callback=JSON_CALLBACK');

function HeroTblCtrl($scope, $uibModal, $log, heroApi) {
    $scope.heros = [];
    $scope.BASE_URL = 'http://maxonhouse.com/upload/';
    $scope.headers = [
        "ID",
        "File name",
        "Order",
        "Thumb",
        "Action"
    ];
    $scope.loading = false;
    $scope.refreshHeros = refreshHeros;
    $scope.animationsEnabled = true;

    $scope.open = function(size) {
        var hero = this.hero;
        var modalInstance;

        hero.dir = $scope.BASE_URL;
        modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                hero: function() {
                    return hero;
                }
            }
        });


        modalInstance.result.then(function() {

        }, function() {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    $scope.toggleAnimation = function() {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

    function refreshHeros() {
        $scope.loading = true;
        $scope.heros = [];
        $scope.errorMessage = '';
        heroApi.getHeros()
            .success(function(data) {
                $scope.heros = data;
                $scope.loading = false;
            })
            .error(function() {
                $scope.errorMessage = "Request failed";
                $scope.loading = false;
            });
    }

    refreshHeros();
}

function heroApi($http, apiUrl) {

    return {
        getHeros: function() {
            var url = apiUrl;
            return $http.jsonp(url);
        }
    };
}


angular.module('maxon').controller('ModalInstanceCtrl', function($scope, $uibModalInstance) {
    $scope.hero = $scope.$resolve.hero;

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});
