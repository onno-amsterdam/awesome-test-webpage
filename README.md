# awesome-test-webpage
Web page to be tested by automated test tooling

## Project requirements
To run this project locally you need to have the following installed on your system:
* Docker

## Run the webpage
To run the webpage run the following command:
```bash
# make sure to update the local folder for the mount
$ docker run --name nginx-webserver -v //C/Development/awesome-test-webpage/html:/usr/share/nginx/html -d -p 8080:80 nginx
```
Open `http://localhost:8080` in your browser.
