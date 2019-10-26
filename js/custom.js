/* global, alert, $, console */

$(function() {

           'use strict' ; 
 
     // adjest header height 

            var myheader = $('.header');

            myheader.height($(window).height());

            $(window).resize(function() {

                myheader.height($(window).height());
            });

    // links add active classs

            $('.links li').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            });
  // begin slider code 

       /*  $('.slider').bxSlider({
                pager:false
         }); */

    });