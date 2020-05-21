var data = {
    "origin_destinations": [
        {
            "ref_number": "0",
            "direction_id": "0",
            "elapsed_time": "2435",
            "segments": [
                {
                    "departure": {
                        "date": "2020-05-20",
                        "time": "20:45:00",
                        "airport": {
                            "code": "LOS",
                            "name": "Lagos-Murtala Muhammed Intl, Nigeria",
                            "city_code": "",
                            "city_name": "Lagos",
                            "country_code": "NG",
                            "country_name": "Nigeria",
                            "terminal": "I"
                        }
                    },
                }

            ]
        }
    ],
    "origin_destinations": [
        {
            "ref_number": "0",
            "direction_id": "0",
            "elapsed_time": "2435",
            "segments": [
                {
                    "departure": {
                        "date": "2020-05-20",
                        "time": "20:45:00",
                        "airport": {
                            "code": "LOS",
                            "name": "Lagos-Murtala Muhammed Intl, Nigeria",
                            "city_code": "",
                            "city_name": "Lagos",
                            "country_code": "NG",
                            "country_name": "Nigeria",
                            "terminal": "I"
                        }
                    },
                }

            ]
        }
    ]

};

data.origin_destinations.forEach(function(destination) {
  destination.segments.forEach(function(segment) {
    console.log(segment);
  });
});