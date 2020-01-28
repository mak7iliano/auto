$(function() {
    //ie detection
    if ($.browser.msie && $.browser.version == 10) {
        $("html").addClass("ie10");
    }
    if ($.browser.msie && $.browser.version == 9) {
        $("html").addClass("ie9");
    }
    if ($.browser.msie && $.browser.version == 8) {
        $("html").addClass("ie8");
    }
});


$(function() {
    $('.am-car-list .element a').click(function(){
        var currElBlock = $(this).closest('.element');
        var currEl = currElBlock.data('el');

        if (currElBlock.hasClass('selected')) {
            currElBlock.removeClass('selected');
        } else {
            $('.am-car-list .element').removeClass('selected');
            currElBlock.addClass('selected');
        }

        $('.am-car-list .values').each(function(){
            if ($(this).hasClass('js-el-'+currEl)) {
                $(this).slideToggle();
            } else {
                $(this).slideUp();
            }
        });
        return false;
    });
});

$(function() {
    //modern select
    $('.am-select').each(function(){
        if ($(this).hasClass('selectable')) {
            if ($(this).hasClass('light')) {
                $(this).uniform({selectClass: 'am-uni-select light selectable'});
            } else {
                $(this).uniform({selectClass: 'am-uni-select selectable'});
            }
            $(this).change(function(){
                $(this).closest('.am-uni-select').removeClass('selectable');
            });
        } else {
            if ($(this).hasClass('light')) {
                $(this).uniform({selectClass: 'am-uni-select light'});
            } else {
                $(this).uniform({selectClass: 'am-uni-select'});
            }
        }
    });

    //modern checkbox
    $('input[type="checkbox"]').uniform({checkboxClass: 'am-uni-checkbox'});

    //modern radio
    $('input[type="radio"]').uniform({radioClass: 'am-uni-radio'});
});


$(function() {
    //tools block expand
    $('.js-toolsgroup-block .expand').click(function(){
        $(this).next().next('ul').toggle();
        $(this).parent().toggleClass('selected');
        return false;
    });
});

$(function() {
    //brands block toggle
    $('.js-morebrands-filter').click(function(){
        $(this).toggleClass('down');
        $(this).closest('.filter').find('.brand-list').toggleClass('open');
        return false;
    });
});

$(function() {
    //count block
    $('.js-count').click(function(){
        var valueEl = $(this).find('input');
        var currValue = valueEl.val();
        $(this).find('.up').click(function(){
            currValue = parseInt(currValue) + 1;
            valueEl.val(currValue);
        });
        $(this).find('.down').click(function(){
            if (currValue > 1) {
                currValue = parseInt(currValue) - 1;
                valueEl.val(currValue);
            }
        });
    });
});

$(function() {
    //basket user type change
    $('.js-user-type-change a').click(function(){
        if ($(this).hasClass('selected')) {
            return false;
        } else {
            $('.js-user-type-change a').removeClass('selected');
            $(this).addClass('selected');
            $('.js-user-type').toggle();
            return false;
        }
    });
});

$(function() {
    //map refresh
    $('a.map').click(function(){
        setTimeout(function(){
            var map = $('.js-maps-popup iframe');
            map.attr('src', map.attr('src'));
        }, 500);
    });
});