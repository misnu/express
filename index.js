/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
//use mysql database
const mysql = require('mysql');
const app = express();
var multer = require('multer');
//konfigurasi koneksi
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'nunu8888',
  database: 'db_sample'
});
 

conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 

app.set('views',path.join(__dirname,'views'));

app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/assets',express.static(__dirname + '/public'));
 

app.get('/',(req, res) => {
  let sql = "SELECT a.id, a.name, b.name as name_category, CONCAT('Rp.', format( a.price, 2)) as price, a.status, a.photo FROM product a LEFT JOIN category b ON a.category = b.id";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.render('product_view',{
      results: results
    });
  });
});

app.post('/save',(req, res, next) => {
  let data = {id: req.body.id, name: req.body.name, barcode: req.body.barcode, sku: req.body.sku, category:req.body.category,price:req.body.price, tax:req.body.tax, status:req.body.status, type:req.body.type, description:req.body.description, variant_size:req.body.product_size, variant_type:req.body.product_type};
  let sql = "INSERT INTO product SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});

app.get('/edit_product/:id',(req, res) => {
  let sql = "SELECT * FROM product WHERE id='"+req.params.id+"' ";
  let query = conn.query(sql, (err, rows) => {
    if(err) throw err;
    res.render('update_product',{
      rows: rows
    });
  });
});

app.post('/update_product',(req, res) => {
  
  let sql = "UPDATE product SET id='"+req.body.id+"', name='"+req.body.name+"', barcode='"+req.body.barcode+"', sku='"+req.body.sku+"', category='"+req.body.category+"', price='"+req.body.price+"', tax='"+req.body.tax+"', status='"+req.body.status+"', type='"+req.body.type+"', description='"+req.body.description+"', variant_size='"+req.body.product_size+"', variant_type='"+req.body.product_type+"' WHERE id='"+req.body.id2+"'";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});

app.post('/update',(req, res) => {
  let sql = "UPDATE product SET product_name='"+req.body.product_name+"', product_price='"+req.body.product_price+"' WHERE product_id="+req.body.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});
 
app.get('/delete_product/:id',(req, res) => {
  let sql = "DELETE FROM product WHERE id='"+req.params.id+"'";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.redirect('/');
  });
});


app.get('/add_product', function(req, res, next) {
   
    res.render('add_product'); 
});

app.get('/export', function(req, res, next) {
   
   
});

  

const storage = multer.diskStorage({
  destination : path.join(__dirname + 'images/'),
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() +
        path.extname(file.originalname));
    }
});

const upload = multer({
  storage : storage
}).single('picture');
 
//server listening
app.listen(8000, () => {
  console.log('Server is running at port 8000');
});