var app = angular.module('app', []);

app.directive('foo', function () {

  // SIMPLE VARIANT
  // return function (scope, element, attrs) {
  //   console.log('This is my directive');
  // };


  // DIFFICULT VARIANT
  return {
    link: function (scope, element, attrs) {
      console.log('This is my directive');
      console.log('scope', scope);
      console.log('element', element);
      console.log('attrs', attrs);

      element.text('This is my magic directive');
    }
  }
});

// DEFINITION2
// link в директиве - это фукнция, которая срабатывает, уже после того, как DOM элемент отрисовался на странице.
// scope - область видимости нашей директивы
// element - внутри него виден наш элемент - div
// attrs - все атрибуты, которые есть на нашей директиве foo: ""


app.directive('bar', function () {
  return {
    link: function (scope, element, attrs) {
      element.on('click', function () {
        console.log('click bar');
        if (element.text() === 'bar') {
          element.text('baz');
        } else {
          element.text('bar')
        }
      });
    }
  };
});




