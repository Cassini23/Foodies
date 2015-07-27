(function() {
    angular.module('foodiesApp')
        .controller('mainController', ['$scope',mainController])
        .controller('authCarousalController',['$scope', authCarousalController]);
     function mainController($scope){
        $scope.message = 'Welcome';
        console.log($scope.message);
     }
    function authCarousalController($scope){
         $scope.message = 'From the carousal';
         $scope.myInterval = 5000;
         console.log($scope.message);
         var slides = $scope.slides = [];
         $scope.addSlide = function(value) {
         var newWidth = 600 + slides.length + 1;
             var images = ['/app/authorize/images/asian.jpg','/app/authorize/images/curry.jpg',
                 '/app/authorize/images/Pizza.jpg','/app/authorize/images/salad.jpg'];
         /*slides.push({
         image: 'http://placekitten.com/' + newWidth + '/300',
         text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
         ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
         });*/
             slides.push({
                 //image: 'http://placekitten.com/' + newWidth + '/300',
                 image: images[value],
                 text:['Join communities', 'Make friends', 'Review restaurants', 'Eat!'][slides.length % 4]
             });

         };
       // console.log('slides http request ',slides);
         for (var i=0; i<4; i++) {
         $scope.addSlide(i);
         }
    }

}());
