Country location Web Part for SharePoint 2010
=============================================

This Web Part embeds a map from Google Maps in your Web Part Page, zooms in on the country that is specified in the query string and draws a pin over its location.

It uses Google Maps v3 and jQuery version 1.11.1 provided by Google CDN.

Instructions
----

- Copy the files countryMaps.js and countryCoordinates.js to Site Assets.

- Put the API Key for Google Maps in the appropriate script tag. 
    - Instructions for finding API key here:
https://developers.google.com/maps/documentation/javascript/tutorial#api_key
    - This is where you are supposed to paste your API Key:
<script src="https://maps.googleapis.com/maps/api/js?key=YourApiKey"></script>

- Create a WebPart Page in Site Pages. I have named my page countryMap.aspx

- Add a Content Editor Web Part that uses the countryMap.js file
    - Site Actions
    - Edit Page
    - In Categories, select Media and Content
    - In Web Parts, select Content Editor
    - Click Add
    - Click Edit Web Part on the menu for the Web Part that you added
    - Insert URL: /SiteAssets/countryMap.js
    - Apply

- In countryMap.js, specify the desired dimensions of the map that appears in your page.

- The country that will be displayed and have a pin drawn over it is the one that is specified in the URL as the value of the parameter country, for example: "&country=Kosovo".
    - Note that both the parameter name and parameter value are case-sensitive.

- Specify default country. In country.js there is a variable called defaultCountry. You can edit its value and put in another country from the list of countries in countryCoordinates.js. This will country that will displayed in case the program cannot find the one you want or something goes wrong,

- You can edit countryCoordinates.js and add whatever countries you like.