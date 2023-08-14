const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // index page
  router.get("/", (req, res) => {
    // res.send("<h1> Hai Hello Return nodejs connection success</h1>");

    res.render("index");
  });

  //register page
  router.get("/register", (req, res) => {
    res.render("register");
  });

  //Home page
  router.get("/home", (req, res) => {
    res.render("home");
  });

  router.get("/profile", (req, res) => {
    const query = "SELECT * FROM datas";
    const query1 = "SELECT * FROM datas001";

    db.query(query, (err, results) => {
      db.query(query1, (err1, results1) => {
        if (err && err1) {
          console.error("Error fetching data for enrollment table:", err);
          res.status(500).send("Error fetching data for enrollment table");
          console.error("Error fetching data for enrollment table:", err1);
          res.status(500).send("Error fetching data for enrollment table");
        } else {
          console.log("welcome : " + results);
          console.log("wel:" + results1);
          if (results == "" && results1 == "") {
            results = "";
            results1 = "";

            res.render("profile", { dataEnrollment: "NO DATA" });
            res.render("profile", { dataEnrollment1: "NO DATA" });
          } else {
            //res.render("profile", { dataEnrollment: results});
            res.render("profile", {
              dataEnrollment: results,
              dataEnrollment1: results1,
            });
          }
        }
      });
    });
  });

  //logout page
  router.get("/logout", (req, res) => {
    res.render("logout");
  });

  return router;
};
