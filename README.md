#ngGridView

**ngGridView** is an AngularJs directive that makes dynamic tables based on JSON data. want to see a full working example? click [here](https://github.com/smancebo/nggridview/tree/master/demo)

#Usage

##Basic structure
```html
<!doctype html>
<html ng-app='gvApp'>
    <head>
        <link href="assets/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="assets/css/font-awesome.min.css" rel="stylesheet"/>
        <link href="assets/css/main.css" rel="stylesheet"/>
    </head>
    <body>
    
    <grid-view gv-rows='contacts'>
        <columns>
            <column header-text='#' data-field='id'></column>
        </columns>
    </grid-view>
    
   <script src="assets/js/jquery-1.10.2.min.js"></script>
        <script src="assets/js/angular.min.js"></script>
        <script src="assets/js/ng-grid-view.min.js"></script>
        <script src="assets/js/app.js"></script>
    </body>
</html>
```

First yo need reference the **ngGridView** script file in your page with AngularJS and jQuery.

##ngGridView elements

In order to **ngGridView** works you need specify what columns you want to show, inside the ```<grid-view>....</grid-view>``` using the ```<columns></columns>``` element.

##Columns

At the moment I wrote this document **ngGridView** support 2 types of columns element.
<ul>
  <li>column</li>
  <li>templateColumn</li>
</ul>


###Column

The column element support the following attributes:
<ul>
  <li>header-text</li>
  <li>data-field</li>
  <li>null-text</li>
  <li>text</li>
  <li>counter</li>
</ul>

####header-text
This attribute receives the text yo want to show in the column header

####data-field
This attributes receives the name of the property in the Json Object the column will bound to

####null-text
When using _data-field_ attribute, if the value of the JSON property specified in the _data-field_ attribute returns null, it will bound this text to the column. ( _**this attribute support dataBound feature**_ )

####text
This attribute bound a text to the column. ( _**this attribute support dataBound feature**_ )

####counter
This attribute bound a secuential number equals to the number of rows displayed


###templateColumn

The _templateColumn_ let you write anything inside of it, you can write html or text of your choice and it will repeat this template for every rows displayed.( **_you can use dataBound feature inside the templateColumns_** )

The _templateColumn_ element support the following attributes:
<ul>
  <li>header-text</li>
</ul>

####header-text
this attribute receives the text yo want to show in the column header


##dataBound

One of the awesome features of **ngGridView**, is the _dataBound_, with _dataBound_ you can replace text with values from your JSON object, using the following syntax ----> *{*_nameOfJsonProperty_*}* ( **only in the supported attributes or templates** )

###Example

lets say you have the following json object

```javascript

var contacts = [
    
    {'id' : 0, 'name' : 'Adelle Laurie Adkings', 'phone' : '+1-747-544-5985'}
];
```

and the following templateColumn

```html

<templateColumn>
  <a ng-click="callContact('{phone}')" class='btn btn-xs btn-success'><i class="fa fa-phone"></i> Call</a>
  <a ng-click='deleteContact({id})' class='btn btn-xs btn-danger'><i class="fa fa-remove"></i> Delete</a>
</templateColumn>
```

when the **ngGridView** directive compile, the produced html will be

```html
  <a ng-click="callContact('+1-747-544-5985')" class='btn btn-xs btn-success'><i class="fa fa-phone"></i> Call</a>
  <a ng-click='deleteContact(0)' class='btn btn-xs btn-danger'><i class="fa fa-remove"></i> Delete</a>
```

you can use _dataBound_ inside supported attributes too, lets see the following code

```html
<grid-view gv-rows='contacts' gv-controller='gvTestController'>
  <columns>
      <column header-text='#' data-field='id'></column>
      <column header-text='Name' data-field='name'></column>
      <column header-text='Phone Number' data-field='phone' null-text='no phone number'></column>
      <column header-text='Phone plus name' text='{phone} {name}'
      <templateColumn>
        <a ng-click="callContact('{phone}')" class='btn btn-xs btn-success'><i class="fa fa-phone"></i> Call</a>
        <a ng-click='deleteContact({id})' class='btn btn-xs btn-danger'><i class="fa fa-remove"></i> Delete</a>
      </templateColumn>
  </columns>
</grid-view>
```

will produce the following code

```html
<table>
    <thead>
        <th>#</th>
        <th>Name</th>
        <th>Phone Number</th>
        <th>Phone plus name</th>
        <th></th>
    </thead>
    <tbody>
        <tr>
            <td>0</td>
            <td>Adelle Laurie Adkings</td>
            <td>+1-747-544-5985</td>
            <td>+1-747-544-5985 Adelle Laurie Adkings</td>
            <td>
                <a ng-click="callContact('+1-747-544-5985')" class='btn btn-xs btn-success'><i class="fa                              fa-phone"></i> Call</a>
                <a ng-click='deleteContact(0)' class='btn btn-xs btn-danger'><i class="fa fa-remove"></i>                             Delete</a>
            </td>
        </tr>
    </tbody>
</table>
```

you can see a full working example in the [**demo**](https://github.com/smancebo/nggridview/tree/master/demo) folder in this repository

