# awesome-test-webpage
Web page to be tested by automated test tooling

## Automated test frameworks
This very simple webpage and it's functionality is created to serve as a test webpage to be tested by test automation frameworks. The following frameworks cover the functionality with automated tests:
* [protractor-cucumber-typescript](https://github.com/onno-amsterdam/protractor-cucumber-typescript)

## Project requirements
To run this project locally you need to have the following installed on your system:
* Docker

## Nginx & Docker
The webpage runs inside a Nginx webserver. The official [Nginx Docker image](https://hub.docker.com/_/nginx) is used.

All html, css and javascript in the html folder in this project is mounted to the html folder in the Docker container. This means all changes made in the local html folder are immediately (after save and refresh of the browser) in the webpage.

## Run the webpage
To run the webpage run the following command:
```bash
# make sure to update the local folder for the mount
$ docker run --name nginx-webserver -v //C/Development/awesome-test-webpage/html:/usr/share/nginx/html -d -p 8081:80 nginx
```
Open `http://localhost:8081` in your browser.
