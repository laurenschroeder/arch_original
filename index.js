//start create database file on ready https://www.youtube.com/watch?v=39kDLPyix-k 4:55
$(document).on("ready", function(){
    databaseHandler.createDatabase();
    //$("#lstEvents").on("tap", "li", function(){
        //https://www.youtube.com/watch?v=CziQL1Z1S_4&list=PLxyOsIbHSrxmbXmqJ4WmI0-8SbrcM9fN8&index=13
        //get value where span element equals name
       // alert($(this).find("[name='name']").html());
    //});
});


//https://www.youtube.com/watch?v=CAFit_Rboog&list=PLxyOsIbHSrxmbXmqJ4WmI0-8SbrcM9fN8&index=7
//method to add product
function addEvent(){
    var title = $("#givenTitle").val();
    var day = $("#givenDay").val();
    var time = $("#givenTime").val();
    var location = $("#givenLocation").val();
    

    if (typeof first_name !== 'undefined'){
    var name = first_name;}
    else {var name= "User not registered";}
    if((!title)||(!day)||(!time)||(!location)){
        alert("Add info to all fields!");
    }else{
        eventHandler.addEvent(title, day, time, location, name);
        //clear form
        $("#givenTitle").val(""),
        $("#givenDay").val(""),
        $("#givenLocation").val(""),
        $("#givenTime").val("");
    }
};

function displayEvents(results){
   //todo if results.rows.item(i).rowid not in list..
    var length=results.rows.length;
    var lstEvents=$("#lstEvents");
    for (var i=0; i<length; i++){
        var item = results.rows.item(i); //rows,item is websql method
        var a = $("<a />");
        var h3 = $("<h3 />").text("Event name: ");
        var h4 = $("<h4 />").text("Day: ");
        var h4b = $("<h4 />").text("Time: ");
        var p = $("<p />").text("Event Created By: ");
        
        var spanTitle = $("<span />").text(item.title);
        spanTitle.attr("name", "title");
        var spanRowid = $("<span />").text(item.id);
        spanRowid.attr("name", "rowid");
        var spanDay = $("<span />").text(item.day);
        spanDay.attr("name", "day");
        var spanTime = $("<span />").text(item.time);
        spanTime.attr("name", "time");
        var spanLocation = $("<span />").text(item.location);
        spanLocation.attr("name", "location");
        var spanName = $("<span />").text(item.name);
        spanName.attr("name", "name");
        //nested structure
        h3.append(spanTitle);
        h4.append(spanDay);
        h4.append(spanTime);
        h4b.append(spanLocation);
        p.append(spanName);
        a.append(h3);
        a.append(h4);
        a.append(h4b);
        a.append(p);
        var li = $("<li/>");
        li.append(a);
        li.append(spanRowid)
        lstEvents.append(li);
    }
    lstEvents.listview("refresh");
    //set event for the list item to create popup
    lstEvents.on("tap", "li", function(){
        currentEvent.rowid = $(this).find("[name='rowid']").text();
        currentEvent.title= $(this).find("[name='title']").text();
        $("#popupUpdateDelete").popup("open");
    });
}
//add data from current event to popup
var currentEvent={
rowid: -1,
title:"",
};
$(document).on("pagebeforeshow", "#loadpage", function(){
    eventHandler.loadEvents(displayEvents);
});

function deleteEvents(){
    var r = confirm("Are you sure you want to delete this event?");
        if(r==true){
            eventHandler.deleteEvent(currentEvent.rowid);
        }
}        

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
