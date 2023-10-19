<h1>Contact Directory Web Application</h1>
<p>This is a simple web application designed for managing a contact directory. 
It allows you to organize and store information about your contacts, including their first name, surname, gender, date of birth, telephone number, email, and city. 
The application ensures data integrity with mandatory fields and validation checks, and it stores the data in an SQL database for easy access and management. Additionally, you can view, edit, and add new contacts with ease.</p>

<h2>Features</h2>
    <ul>
        <li><strong>First Name</strong>: A field for entering the contact's first name.</li>
        <li><strong>Surname</strong>: A field for entering the contact's surname.</li>
        <li><strong>Gender</strong>: A drop-down box with options "Male" and "Female" for selecting the contact's gender.</li>
        <li><strong>Date of Birth</strong>: A field for entering the contact's date of birth.</li>
        <li><strong>Telephone Number</strong>: A field for entering the contact's telephone number.</li>
        <li><strong>Email</strong>: A field for entering the contact's email address.</li>
        <li><strong>City</strong>: A drop-down box with a list of cities, which is pre-populated from an external source.</li>
    </ul>

  <h2>Validation and Requirements</h2>
    <ul>
        <li><strong>Mandatory Fields</strong>: First Name, Surname, Gender, and Email fields are mandatory.</li>
        <li><strong>Email Validation</strong>: The Email field enforces validation to ensure a valid email address format.</li>
        <li><strong>Phone Number Validation</strong>: The Phone Number field enforces validation to ensure a valid phone number format.</li>
    </ul>

  <h2>User Interface</h2>
    <ul>
        <li><strong>Tabular Display</strong>: You can view all your contacts in a tabular format.</li>
        <li><strong>Add and Edit Contacts</strong>: The application provides forms to insert new contacts and modify existing ones.</li>
    </ul>

  <h2>Technologies Used</h2>
    <p>This web application is built using modern web technologies, making it responsive and accessible on various devices. The stack may include:</p>
    <ul>
        <li><strong>Frontend</strong>: HTML, CSS, JavaScript, and a frontend framework/library React for a responsive user interface.</li>
        <li><strong>Backend</strong>: A server-side technology like Node.js and Express(both JS frameworks).</li>
        <li><strong>Database</strong>: A SQL database system (PostgreSQL) for data storage.</li>
        <li><strong>Validation</strong>: Frontend and backend validation for mandatory fields and data integrity.</li>
        <li><strong>External Data Source</strong>: An external source for pre-populating the city drop-down box.</li>
    </ul>

  <h2>Prerequisites</h2>
<p>Before you can run this web application, ensure that you have the following software and dependencies installed on your local machine:</p>

<ul>
  <li><a href="https://nodejs.org/" target="_blank">Node.js</a>: This application requires Node.js to run the backend server and frontend development server. You can download and install Node.js from the official website.</li>
  <li><a href="https://www.npmjs.com/" target="_blank">npm</a> (Node Package Manager): npm is included with Node.js and is used to manage project dependencies. Make sure you have npm installed as well.</li>
</ul>

<p>Verify that you have the necessary versions installed by running the following commands in your terminal:</p>
<code>node --version</code>
<br><code>npm --version</code>

<!-- Clone the Repository -->
<h2>Clone the Repository</h2>
<p>To get started, clone this repository to your local environment using Git. Open your terminal and execute the following command:</p>
<pre>
<code>git clone &lt;repository-url&gt;</code>
</pre>
<p>Replace <code>&lt;repository-url&gt;</code> with the URL of this repository. You can find the URL by clicking the "Clone" or "Code" button on this page.</p>
<p>Once the repository is cloned, you can proceed to set up the backend and frontend components of the web application.</p>

<!-- Setting Up the Backend and Frontend -->
<h2>Setting Up the Backend and Frontend</h2>
<p>After cloning the repository, you'll need to set up both the backend and frontend components of the web application. Follow the steps below:</p>

<!-- Backend Setup -->
<h3>Backend Setup</h3>
<ol>
  <li>Open your terminal and navigate to the <code>./backend/</code> directory within the cloned repository using the <code>cd</code> command:</li>
  <pre>
  <code>cd ./backend/</code>
  </pre>
  <li>Install the required Node.js packages by running:</li>
  <pre>
  <code>npm install</code>
  </pre>
  <li>Configure the backend server. You may need to set environment variables for database connection details, API keys, or other necessary configurations. Refer to the provided documentation for configuration options.</li>
  <li>Start the backend server by running:</li>
  <pre>
  <code>npm start</code>
  </pre>
</ol>

<!-- Frontend Setup -->
<h3>Frontend Setup</h3>
<ol>
  <li>Open a new terminal window and navigate to the <code>./frontend/</code> directory within the cloned repository:</li>
  <pre>
  <code>cd ./frontend/</code>
  </pre>
  <li>Install the required frontend packages by running:</li>
  <pre>
  <code>npm install</code>
  </pre>
  <li>Configure the frontend application, which may involve specifying API endpoints or other settings. Refer to the provided documentation for configuration options.</li>
  <li>Launch the frontend development server with:</li>
  <pre>
  <code>npm start</code>
  </pre>
</ol>

<p>With both the backend and frontend components set up, you can access the web application in your web browser and begin using it to manage your contacts.</p>

  
