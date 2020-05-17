const express = require('express');
const axios = require('axios');


exports.login = async (req, res, next) => {
    const url = `${process.env.URL}/v1/auth/login`;
    const {
        body: {
            email,
            password
        }
    } = req.body;

    const params = {
        "headers": {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        "body": {
            email,
            password
        }
    }

    if (email == undefined || password == undefined) {
        res.status(422).json({
            success: false,
            message: "Please Fill out the Form"
        });
    }

    try {
        const resp = await axios.post(url, params);
        const {
            data
        } = resp
        res.status(200).json({
            success: true,
            data
        })
    } catch (err) {
        res.status(422).json({
            success: false,
            Message: "Inccorect Email Address or Password"
        })
    }
}

exports.register = async (req, res, next) => {
    const url = `${process.env.URL}/v1/auth/register`;
    res.send('Register Route')
}