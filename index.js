const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
require("dotenv").config();
app.set('view engine', 'ejs');



const PORT = process.env.PORT;
const mongodb_URL = process.env.mongodb_URL;


const students = [
    {
        name: "Daniel Adeyemi",
        age: 16,
        gender: "Male",
        class: "SS2",
        admissionNumber: "STD001",
        email: "daniel@gmail.com",
        phone: "08012345678",
        averageScore: 78,
        attendance: "92%",
        status: "active"
    },

    {
        name: "Grace Johnson",
        age: 15,
        gender: "Female",
        class: "SS1",
        admissionNumber: "STD002",
        email: "grace@gmail.com",
        phone: "08023456789",
        averageScore: 85,
        attendance: "95%",
        status: "active"
    },

    {
        name: "Samuel James",
        age: 17,
        gender: "Male",
        class: "SS3",
        admissionNumber: "STD003",
        email: "samuel@gmail.com",
        phone: "08034567890",
        averageScore: 71,
        attendance: "89%",
        status: "active"
    },

    {
        name: "Esther Williams",
        age: 14,
        gender: "Female",
        class: "JSS3",
        admissionNumber: "STD004",
        email: "esther@gmail.com",
        phone: "08045678901",
        averageScore: 88,
        attendance: "97%",
        status: "active"
    },

    {
        name: "David Michael",
        age: 13,
        gender: "Male",
        class: "JSS2",
        admissionNumber: "STD005",
        email: "david@gmail.com",
        phone: "08056789012",
        averageScore: 69,
        attendance: "90%",
        status: "active"
    }
];



const staffs = [
    {
        name: "Mrs Grace Johnson",
        age: 38,
        gender: "Female",
        staffId: "STF001",
        position: "Teacher",
        subject: "Mathematics",
        email: "grace.johnson@school.com",
        phone: "08112345678",
        status: "active"
    },

    {
        name: "Mr Samuel Peter",
        age: 42,
        gender: "Male",
        staffId: "STF002",
        position: "Teacher",
        subject: "English Language",
        email: "samuel.peter@school.com",
        phone: "08123456789",
        status: "active"
    },

    {
        name: "Mrs Esther Daniel",
        age: 35,
        gender: "Female",
        staffId: "STF003",
        position: "Teacher",
        subject: "Biology",
        email: "esther.daniel@school.com",
        phone: "08134567890",
        status: "active"
    },

    {
        name: "Mr Michael James",
        age: 45,
        gender: "Male",
        staffId: "STF004",
        position: "Principal",
        subject: "Administration",
        email: "michael.james@school.com",
        phone: "08145678901",
        status: "active"
    },

    {
        name: "Miss Mary Adewale",
        age: 31,
        gender: "Female",
        staffId: "STF005",
        position: "Accountant",
        subject: "Finance",
        email: "mary.adewale@school.com",
        phone: "08156789012",
        status: "active"
    }
];



const schoolPerformance = [
    {
        session: "2025/2026",
        term: "First Term",
        totalStudents: 450,
        totalStaff: 35,
        averageScore: 74,
        passRate: "86%",
        attendanceRate: "91%",
        topClass: "SS2"
    },

    {
        session: "2025/2026",
        term: "Second Term",
        totalStudents: 455,
        totalStaff: 36,
        averageScore: 77,
        passRate: "88%",
        attendanceRate: "93%",
        topClass: "SS3"
    },

    {
        session: "2025/2026",
        term: "Third Term",
        totalStudents: 460,
        totalStaff: 37,
        averageScore: 80,
        passRate: "90%",
        attendanceRate: "94%",
        topClass: "SS1"
    }
];


app.get("/", (req, res) => {
    res.send("School API is working");
});

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/staffs", (req, res) => {
    res.json(staffs);
});

app.get("/performance", (req, res) => {
    res.json(schoolPerformance);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose
    .connect(mongodb_URL)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.log("MongoDB connection failed:", err);
    });
