## How to see the page ##
Easy way:
https://tyypo.github.io/angularwsi/

Hard way:
follow the tutorial https://angular.io/guide/setup-local
1. install node.js 10.16.0
2. in cmd run npm install -g @angular/cli
3. download the source code from this repo
4. cd to the extract directory and run npm install
5. run ng serve
6. open http://localhost:4200 in firefox (Right, firefox only. chrome will have CORS issue)

It took me too much time to figure out the CORS issue in Angular 7 but still does not have a very elegance solution.
My current solution is copy and paste the content of https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json to https://tyypo.github.io/test/api.json and consume this github api.  

Other possible solution are:
1. host a proxy server to redirect westelm api. For example write a piece of Spring code to consume the westelm api and deploy to heroku. The angular app will consume the herokuapp api. Pretty simliar to the github approach above.
2. config your browser. use proper extension/add-ons or hack the browser.
3. find a way to hack the frontend end code (if would be easy if angular 5 downward, or plain js) to bypass CORS issue.

sorry no tests, I am running out of time.
