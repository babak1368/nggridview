

var app = angular.module('gvTest');

var counter = 5;

var contacts = [
    
    {'id' : 0, 'name' : 'Adelle Laurie Adkings', 'phone' : '+1-747-544-5985'},
    {id : 1, name : 'Salvatore Bono', phone : '+1-747-544-5985'},
    {id : 2, name : 'Allen Brunk', phone : null},
    {id : 3, name : 'Tyrone Donmoyer', phone : '+1-747-544-5985'},
    {id : 4, name : 'Erica Wright', phone : '+1-747-544-5985'}
];


app.controller('gvTestController', ['$scope', function($scope){
    
    $scope.contacts = contacts;
    $scope.currentContact = {};
    
    $scope.addContact = function(contact){
        var newContact = {};
        newContact.id = counter;
        newContact.name = contact.name;
        newContact.phone = contact.phone
        
        contacts.push(newContact);
        $scope.contacts = contacts;
        $scope.currentContact = {}
        counter++;
    };
    
    $scope.deleteContact = function(id){
        var contact = contacts.filter(function(e){
            return e.id == id;
        });  
        contacts.splice(contacts.indexOf(contact[0]),1);
        $scope.contacts = contacts;
    };
    
    $scope.callContact = function(phone){
        alert('calling number ' +phone);
    }
    
    
}]);