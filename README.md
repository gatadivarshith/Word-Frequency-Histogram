Word-Frequency-Histogram

Netlify Link: https://glittering-pika-883db4.netlify.app/

Introduction:
The Terribly Tiny Tales Assignment is a frontend application built using Reactjs or Nextjs. The application fetches the contents of a text file from the URL https://www.terriblytinytales.com/test.txt and generates a histogram of the 20 most occurring words in the first 500 words. Additionally, it provides an "Export" button that enables users to download a CSV file of the histogram data

Featurs:
1.Submit button: When the application first loads, there is simply a submit button.
2.Fetches content: When a user clicks the submit button, the application uses the browser's fetch() function to retrieve the text file's contents from the specified URL.
3. Frequency of occurrence: After the text file's content has been processed, the application determines how frequently each word appears in the text file. The frequency count of each word is stored using a JavaScript object.
4.Histogram: Using the Chart.js package, the application creates a histogram of the 20 terms that appear most frequently on the front end. The top 20 words are shown on the X-axis of the histogram's bar chart, while the frequency of appearance is listed on the Y-axis.
5.The "Export" button in the application allows users to download a CSV file containing the histogram data. The term and its frequency of occurrence are separated into two columns in the CSV file.
Technology used:
This application is built using Reactjs/Nextjs, which is a popular JavaScript library for building user interfaces. The Chart.js library is used to generate the histogram on the frontend.

Components:
The codebase is divided into various components as follows:
1. App.js - It is the root component of the application that renders the main layout and holds the state of the application.
2. SubmitButton.js - It renders the "Submit" button on the first load and handles the submission of the form.
3. Histogram.js - It generates the histogram based on the frequency of words and displays the top 20 most occurring words on the X-axis and their frequency on the Y-axis.
4. ExportButton.js - It generates a CSV file of the histogram data and provides a download link for the same.

Libraries and Plugins:
This project uses the following libraries and plugins:
1.React - A JavaScript library for building user interfaces.
2.React-Bootstrap - A popular front-end framework that includes pre-built UI components and styles for rapid prototyping.
3.Papaparse:PapaParse is a JavaScript library that helps read CSV data. It converts CSV data into arrays/objects easily used in web applications with customization options available.
4.Recharts:Recharts is a JavaScript library that helps you create charts and graphs in your web application. It offers customization options and supports various types of charts like line, bar, and pie charts.

Usage:
To use the application, clone the repository and navigate to the project directory in the terminal. Install the project dependencies using npm. Then start the application using the npm run dev command. The application will run on http://localhost:3000 in development mode.

Summary:
This simple yet helpful application extracts the text from a file and creates a histogram of the 20 most frequent terms. Additionally, a "Export" option is provided, allowing users to download a CSV file containing the histogram data. The Chart.js library and React/NextJS were used to build the application. Since this project is released under the MIT Licence, anybody is allowed to use, modify, and distribute the programme.
