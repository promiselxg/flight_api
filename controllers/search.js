const express = require('express');
const axios = require('axios');
const moment = require('moment');

exports.search = async (req, res, next) => {
    const url = `${process.env.URL}/v1/flight/search-flight`;


//  Comment this out if you are testing with POSTMAN /////
    let {
        departure_city,
        destination_city,
        departure_date,
        return_date,
        no_of_adult,
        no_of_child,
        no_of_infant,
        cabin
    } = req.body

    departure_date = moment(departure_date).format('MM/DD/YYYY');
    return_date = moment(return_date).format('MM/DD/YYYY');


    // Comment This out if you are testing with form ////////////////
    /*
    let {
        body: {
            origin_destinations: {
                departure_city,
                destination_city,
                departure_date,
                return_date
            },
            search_param: {
                no_of_adult,
                no_of_child,
                no_of_infant,
                preferred_airline_code,
                calendar,
                cabin
            }
        }
    } = req.body
    */




    // validate input fields
    let errors = []

    if (!departure_city) {
        errors.push({
            text: 'Please Enter a Departure City'
        })
    }

    if (!destination_city) {
        errors.push({
            text: 'Please Enter a Destination City'
        })
    }

    if (!departure_date) {
        errors.push({
            text: 'Please Select a Departure Date'
        })
    }

    if (no_of_adult.length < 1) {
        errors.push({
            text: 'A minimum of 1 Adult Passenger is Required'
        })
    }


    if (errors.length > 0) {
        res.render('index', {
            errors,
            departure_city,
            destination_city,
            departure_date,
            return_date,
            no_of_adult,
            no_of_child,
            no_of_infant,
            cabin
        })
    } else {

        const params = {
            "header": {
                "cookie": ""
            },
            "body": {
                "origin_destinations": [{
                    departure_city,
                    destination_city,
                    departure_date,
                    return_date
                }],
                "search_param": {
                    no_of_adult,
                    no_of_child,
                    no_of_infant,
                    preferred_airline_code: "",
                    calendar: false,
                    cabin
                }
            }
        }
        try {
            const resp = await axios.post(url, params)
            const {
                data: {
                    body: {
                        data: {
                            itineraries: [...origin_destinations]
                        }
                    }
                }
            } = resp;
            
            //  Send result to Handlebars
            res.status(200).render('index', {
                origin_destinations
            })

            // Send Result to POSTMAN
            
            /*res.status(200).json({
                success: true,
                count: origin_destinations.length,
                msg: origin_destinations
            })
            */

        } catch (error) {
            const {
                message
            } = error
            res.status(422).json({
                success: false,
                data: {
                    message
                }
            })
        }
    }
}