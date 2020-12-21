https://material-ui.com/

npm i -g yarn (win)

yarn add @material-ui/core
yarn add @material-ui/icons


# React.JS Frontend Dependency
yarn add axios chart.js react-chartjs-2 react-moment react-number-format react-router-dom redux react-redux formik redux-logger redux-thunk url-join clsx @material-ui/lab  jsonwebtoken material-table formik-material-ui


# Page Components
// In Pages
yarn add create-react-component-folder

npx crcf -f LoginPage
npx crcf -f RegisterPage
npx crcf -f ReportPage
npx crcf -f StockPage
npx crcf -f StockCreatePage
npx crcf -f StockEditPage
npx crcf -f TransactionPage
npx crcf -f ShopPage


-------------- For Node.js ---------------
node server.js
npx nodemon server.js
npm init

npx yarn add express formidable body-parser fs-extra

npx yarn add express body-parser fs-extra formidable cors bcryptjs rand-token jsonwebtoken mongoose mongoose-sequence onesignal-node

http://localhost:8081/images/8.jpg

http://travistidwell.com/jsencrypt/demo/

useEffect
useState
useDispatch
useSelector

npx crcf -f Payment
npx crcf -f StockCard
npx serve -s build -p 99

brew install nginx
sudo nginx
sudo nginx -s stop
/usr/local/etc/nginx/nginx.conf
cd /usr/local/Cellar/nginx/



# location / {
    #    root   html;
    #    index  index.html index.htm;
    # }   

    #no sub-folder        
    location / {
        try_files $uri $uri/ /index.html;
    }   
    
    # have sub-folder named "demo"        
    location /demo {
        try_files $uri $uri/ /demo/index.html; 
    }  


sudo npm i -g pm2

pm2 start server.js
pm2 status
pm2 start server
pm2 stop server
pm2 restart server
pm2 [start/stop/restart] all
pm2 delete [server/0]
pm2 start 0 --watch 
pm2 monit