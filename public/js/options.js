'use strict';
/* global $ tripModule attractionsModule hotels restaurants activities */

/**
 * This module fills the `select` tags with `option`s.
 * It runs immediately upon document ready (not called by other modules).
 * Each `option` displays the name of an attraction and is has a value of
 * that attraction's id. Selecting an option looks up the attraction by id,
 * then tells the trip module to add the attraction.
 */

$(function () {

    // jQuery selects
    var $optionsPanel = $('#options-panel');
    var $hotelSelect = $optionsPanel.find('#hotel-choices');
    var $restaurantSelect = $optionsPanel.find('#restaurant-choices');
    var $activitySelect = $optionsPanel.find('#activity-choices');

    // // // make all the option tags (second arg of `forEach` is a `this` binding)
    // hotels.forEach(makeOption, $hotelSelect);
    // restaurants.forEach(makeOption, $restaurantSelect);
    // activities.forEach(makeOption, $activitySelect);

    // // Once you've made AJAX calls to retrieve this information,
    // // call attractions.loadEnhancedAttractions in the fashion
    // // exampled below in order to integrate it.
    // attractionsModule.loadEnhancedAttractions('hotels', hotels);
    // attractionsModule.loadEnhancedAttractions('restaurants', restaurants);
    // attractionsModule.loadEnhancedAttractions('activities', activities);

    function makeOption(databaseAttraction, jqueryCall) {
        var $option = $('<option></option>') // makes a new option tag
          .text(databaseAttraction.name)
          .val(databaseAttraction.id);
        jqueryCall.append($option); // add the option to the specific select
    }

    // // what to do when the `+` button next to a `select` is clicked
    // $optionsPanel.on('click', 'button[data-action="add"]', function () {
    //     var $select = $(this).siblings('select');
    //     var type = $select.data('type'); // from HTML data-type attribute
    //     var id = $select.find(':selected').val();
    //     // get associated attraction and add it to the current day in the trip
    //     var attraction = attractionsModule.getByTypeAndId(type, id);
    //     tripModule.addToCurrent(attraction);
    // });


    // AJAX Test
    // function makeOption(databaseAttraction) {

    //     $.get('/' + databaseAttraction)
    //     .then(function (databaseAttraction) {
    //         databaseAttraction.forEach(function(attraction){
    //             console.log(this);
    //             var $option = $('<option></option>') // makes a new option tag
    //             .text(attraction.name)
    //             .val(attraction.id);
    //             $('select').append($option); // add the option to the specific select
    //         });
    //     })
    //     .catch( console.error.bind(console) );
    // }

    // console.log(makeOption("hotels"))



    // // getting the response from the server in api folder
    $.get('/restaurants')
    .then(function (restaurants) {
        restaurants.forEach(function(restaurant){
            makeOption(restaurant, $restaurantSelect);
        });
    })
    .catch( console.error.bind(console) );

    $.get('/hotels')
   .then(function (hotels) {
        hotels.forEach(function(hotel){
            makeOption(hotel, $hotelSelect);
        });
    })
    .catch( console.error.bind(console) );

    $.get('/activities')
    .then(function (activities) {
        activities.forEach(function(activity){
            makeOption(activity, $activitySelect);
        });
    })
    .catch( console.error.bind(console) );

    // $.ajax({
    // method: 'GET',
    // url: '/days' //refers to path in URL bar
    // })
    // .then(function (data) {
    //     console.log('GET response data: ', data)
    // })
    // .catch(console.error.bind(console));
    // // should log "GET response data: You GOT all the days"

    // $.ajax({
    // method: 'POST',
    // url: '/days'
    // })
    // .then(function (data) {
    //     console.log('POST response data: ', data)
    // })
    // .catch(console.error.bind(console));
    // // should log "POST response data: You created a day!!"

});
