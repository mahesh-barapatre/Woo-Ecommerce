const express = require("express");
const db = require("./db");
const authRouter = require("./Routes/auth");
const ownerRouter = require("./Routes/owner");
const productRouter = require("./Routes/product");
const userRouter = require("./Routes/user");
const cors = require("cors");
require("dotenv").config();
var cookieParser = require("cookie-parser");
const authMiddleware = require("./middlewares/auth");
const User = require("./models/userModel");
const nodemailer = require("nodemailer");
// const BASE_URL = process.env.BASE_URL
const gmail_pass = process.env.GMAIL_USER;
const gmail_user = process.env.GMAIL_PASSWORD;

const app = express();

const corsOptions = {
  origin: 'https://woo-ecommerce.vercel.app', // Replace with your actual client origin
  // origin: "http://localhost:5173", // Replace with your actual client origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  optionsSuccessStatus: 204, // No Content for preflight requests
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// app.use(authMiddleware)

//login, sign
app.use("/api/auth", authRouter);
//addproducts, delete products
app.use("/api/owner", ownerRouter);
//get products
app.use("/api/product", productRouter);
//review, wishlist
app.use("/api/user", userRouter);

db.on("error", (err) => {
  console.error("Mongoose connection error", err);
});

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/isAdmin", authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({
      _id: req.user._id,
    });
    res.status(200).json(user.role);
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/logout", (req, res) => {
  res.clearCookie("jwt", { secure: true, sameSite: "none", httpOnly: true });
  res.send("Cookie cleared successfully");
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: gmail_user, // Your Gmail email address
    pass: gmail_pass, // Your Gmail password
  },
});

app.post("/api/send-email", (req, res) => {
  const { to, name, price, address, method, orderNum } = req.body;

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  const formattedDate = `${day.toString().padStart(2, "0")}-${month
    .toString()
    .padStart(2, "0")}-${year}`;

  const mailOptions = {
    from: "barapatremahesh70@gmail.com",
    to,
    subject: "Order Confirmation for Your Recent Purchase!",
    html: ` <h1>Thank You for Your Order!</h1>
    <p>Dear ${name},</p>
    <p>We appreciate your recent purchase from Woo Commerce. Thank you for choosing us!</p>
    <p><strong>Shipping Details:</strong><br>
    Mode of Payment: ${method}<br>
    Shipping Address: ${address}<p>
    <p><strong>Order Details:</strong><br>
    Order Number: ${orderNum}<br>
    Order Amount: ${price}<br>
    Date of Purchase: ${formattedDate}<p>
    <p>If you have any questions, feel free to contact us at help@woo.commerce.</p>
    <p>Best regards,<br>
    Mahesh Barapatre<br> 
    CEO<br>
    Woo Commerce</p>`,
  };

  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.log(error);
  //     return res.status(500).send(error);
  //   }
  //   else
  //   res.status(200).send("Email sent: " + info.response);
  // });
  res.status(200).send("Email sent: " + mailOptions);
});

app.listen(8080, () => {
  console.log("server listening on port 8080!");
});
