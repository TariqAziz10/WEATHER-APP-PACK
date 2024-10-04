# WEATHER-APP-PACK
This is a simple weather application that fetches and displays current weather data for any city using the WeatherAPI. The app allows users to search for a city and view real-time temperature, weather conditions, and local time.

Features:
 . Displays the current temperature in Celsius.
 . Shows the weather condition (e.g., sunny, rainy) with a corresponding emoji/icon.
 . Fetches local time and date for the searched city.
 . Responsive layout for a better user experience on different screen sizes.
 
Technologies Used:
 . HTML5 & CSS3: For structuring and styling the webpage.
 . JavaScript (ES6): To handle fetching data from the WeatherAPI and updating the DOM dynamically.
 . WeatherAPI: Used to retrieve real-time weather data.
 . Fetch API: For making asynchronous requests to the weather service.
 . GitHub Pages: Can be used for deploying the app (if applicable).
 
How to Use:
 - Enter the name of a city in the search bar.
 - Press "Submit" to view the real-time weather information for the specified city.
 - The app will update with the current temperature, weather condition, and the local time of the city.
   
How It Works:
 - The app makes an API call using the fetch() function to retrieve data from the WeatherAPI.
 - Once the data is received, the temperature, weather icon, and city information are displayed dynamically on the webpage.
 - If the city is not found, an error message is shown.
