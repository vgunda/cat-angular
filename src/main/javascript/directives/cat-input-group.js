'use strict';

angular.module('cat.directives.inputGroup', [])

/**
 * @ngdoc directive
 * @name cat.directives.inputGroup:catInputGroup
 */
    .directive('catInputGroup', function CatInputGroupDirective(catValidationService) {
        return {
            restrict: 'A',
            transclude: true,
            scope: {
                label: '@',
                name: '@',
                catI18nKey: '@'
            },
            require: '?^^catValidationGroup',
            link: function CatInputGroupLink(scope, element, attr, /* CatValidationController */ catValidationGroupCtrl) {
                if (!!catValidationGroupCtrl && !!catValidationService) {
                    var context = catValidationService.getContext(catValidationGroupCtrl.getContextId());
                    context.registerField(scope.name);
                }

                element.addClass('form-group');
            },
            templateUrl: 'template/cat-input.tpl.html'
        };
    });