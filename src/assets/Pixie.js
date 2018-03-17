export default {
"skeleton":{"spine":"3.3.07","images":"./image/"},
"bones": [
    { "name": "root" },
    { "name": "hip", "parent": "root", "x": -5.36, "y": 120.63 },
    { "name": "L leg upper", "parent": "hip", "length": 90.28, "x": -21.3, "y": -8.59, "rotation": -123.16 },
    { "name": "R leg upper", "parent": "hip", "length": 79.63, "x": 14.54, "y": -29.09, "rotation": -12.07 },
    { "name": "back", "parent": "hip", "length": 117.04, "x": 3.43, "y": 0.51, "rotation": 64.34 },
    { "name": "L arm upper", "parent": "back", "length": 88.01, "x": 120.71, "y": -25.79, "rotation": 108.03 },
    { "name": "L leg lower", "parent": "L leg upper", "length": 77.82, "x": 89.23, "y": 3.84, "rotation": -74.59 },
    { "name": "R arm upper", "parent": "back", "length": 82.87, "x": 107.42, "y": 16.92, "rotation": -108.18 },
    { "name": "R leg lower", "parent": "R leg upper", "length": 67.73, "x": 79.31, "y": -0.23, "rotation": -35.49 },
    { "name": "fore wing", "parent": "back", "length": 174.95, "x": 78.26, "y": 14.47, "rotation": 111.09 },
    { "name": "neck", "parent": "back", "length": 65.79, "x": 115.87, "y": -0.67, "rotation": -1.35 },
    { "name": "L arm lower", "parent": "L arm upper", "length": 57.67, "x": 84.14, "y": -0.57, "rotation": 35.83 },
    { "name": "L foot", "parent": "L leg lower", "length": 57.67, "x": 74.89, "y": -3.37, "rotation": 79.65 },
    { "name": "R arm lower", "parent": "R arm upper", "length": 58.76, "x": 80.97, "y": -3.48, "rotation": 56.62 },
    { "name": "R foot", "parent": "R leg lower", "length": 51.26, "x": 67.69, "y": -1.98, "rotation": 84.54 },
    { "name": "bone1", "parent": "fore wing", "x": 50.67, "y": 19.71 },
    { "name": "head", "parent": "neck", "length": 132.5, "x": 116.13, "y": 41.67, "rotation": -40.37 },
    { "name": "rear wing", "parent": "fore wing", "length": 123.2, "x": 2.22, "y": -11.57, "rotation": -30.89 },
    { "name": "L hand", "parent": "L arm lower", "length": 33.27, "x": 55.37, "y": 1.3, "rotation": 30.89 },
    { "name": "R hand", "parent": "R arm lower", "length": 33.34, "x": 58.46, "y": -1.24, "rotation": 25.65 },
    { "name": "hair back", "parent": "head", "length": 156.52, "x": 43.77, "y": 270.91, "rotation": 22.07 },
    { "name": "jaw", "parent": "head", "length": 139.22, "x": 8.71, "y": -33.25, "rotation": -46.82 },
    { "name": "hair mid", "parent": "hair back", "length": 191.57, "x": 155.16, "y": -89.36, "rotation": -17.61 },
    { "name": "hair front", "parent": "hair mid", "length": 202.73, "x": 48, "y": -100.58, "rotation": -18.29 }
],
"slots": [
    { "name": "L hand", "bone": "L hand", "attachment": "L_hand" },
    { "name": "L arm lower", "bone": "L arm lower", "attachment": "L_lower_arm" },
    { "name": "L arm upper", "bone": "L arm upper", "attachment": "L_upper_arm" },
    { "name": "rear wing", "bone": "rear wing", "attachment": "rearWing" },
    { "name": "L foot", "bone": "L foot", "attachment": "L_foot" },
    { "name": "L leg lower", "bone": "L leg lower", "attachment": "L_lower_leg" },
    { "name": "L leg upper", "bone": "L leg upper", "attachment": "L_upper_leg" },
    { "name": "R foot", "bone": "R foot", "attachment": "R_foot" },
    { "name": "R lower", "bone": "R leg lower", "attachment": "R_lower_leg" },
    { "name": "R upper", "bone": "R leg upper", "attachment": "R_upper_leg" },
    { "name": "hip", "bone": "hip", "attachment": "groinal" },
    { "name": "fore wing", "bone": "fore wing", "attachment": "foreWing" },
    { "name": "neck", "bone": "neck", "attachment": "neck" },
    { "name": "back", "bone": "back", "attachment": "vest" },
    { "name": "R arm upper", "bone": "R arm upper", "attachment": "R_upper_arm" },
    { "name": "R arm lower", "bone": "R arm lower", "attachment": "R_lower_arm" },
    { "name": "R hand", "bone": "R hand", "attachment": "R_hand" },
    { "name": "hair back", "bone": "hair back", "attachment": "backHair" },
    { "name": "hair front", "bone": "hair front", "attachment": "frontHair" },
    { "name": "head", "bone": "head", "attachment": "head" },
    { "name": "jaw", "bone": "jaw", "attachment": "jaw" },
    { "name": "hair mid", "bone": "hair mid", "attachment": "midHair" }
],
"skins": {
    "default": {
        "L arm lower": {
            "L_lower_arm": { "x": 26.8, "y": 0.38, "rotation": -12.92, "width": 70, "height": 31 }
        },
        "L arm upper": {
            "L_upper_arm": { "x": 43.44, "y": -0.75, "rotation": 43.61, "width": 78, "height": 74 }
        },
        "L foot": {
            "L_foot": { "x": 25.73, "y": -3.97, "rotation": -37.09, "width": 68, "height": 51 }
        },
        "L hand": {
            "L_hand": { "x": 16.53, "y": 5.33, "rotation": -19.13, "width": 55, "height": 64 }
        },
        "L leg lower": {
            "L_lower_leg": { "x": 32.98, "y": 3.71, "rotation": 50.68, "width": 57, "height": 65 }
        },
        "L leg upper": {
            "L_upper_leg": { "x": 34.37, "y": 6.89, "rotation": 14.72, "width": 124, "height": 71 }
        },
        "R arm lower": {
            "R_lower_arm": { "x": 27.12, "y": 1.85, "rotation": -12.78, "width": 70, "height": 31 }
        },
        "R arm upper": {
            "R_upper_arm": { "x": 40.47, "y": -2.66, "rotation": 43.84, "width": 78, "height": 74 }
        },
        "R foot": {
            "R_foot": { "x": 19.53, "y": -8.7, "rotation": -36.33, "width": 68, "height": 51 }
        },
        "R hand": {
            "R_hand": { "x": 17.09, "y": -3.59, "rotation": -38.44, "width": 55, "height": 64 }
        },
        "R lower": {
            "R_lower_leg": { "x": 33.18, "y": -0.42, "rotation": 50.06, "width": 57, "height": 65 }
        },
        "R upper": {
            "R_upper_leg": { "x": 26.1, "y": 2.57, "rotation": 14.14, "width": 124, "height": 71 }
        },
        "back": {
            "vest": { "x": 47.37, "y": 12.63, "rotation": -64.34, "width": 139, "height": 144 }
        },
        "fore wing": {
            "foreWing": { "x": 103.77, "y": -7.39, "rotation": -175.44, "width": 253, "height": 78 }
        },
        "hair back": {
            "backHair": { "x": 71.84, "y": -6.96, "rotation": -44.69, "width": 261, "height": 175 }
        },
        "hair front": {
            "frontHair": { "x": 144.79, "y": -43.44, "rotation": -8.77, "width": 396, "height": 297 }
        },
        "hair mid": {
            "midHair": { "x": 98.77, "y": -24.19, "rotation": -27.07, "width": 351, "height": 178 }
        },
        "head": {
            "head": { "x": 54.08, "y": 79.01, "rotation": -22.61, "width": 613, "height": 408 }
        },
        "hip": {
            "groinal": { "x": -1.3, "y": -22.13, "width": 103, "height": 84 }
        },
        "jaw": {
            "jaw": { "x": 37.24, "y": -10.62, "rotation": 16.36, "width": 222, "height": 124 }
        },
        "neck": {
            "neck": { "x": 11.64, "y": 0.09, "rotation": -62.99, "width": 65, "height": 81 }
        },
        "rear wing": {
            "rearWing": { "x": 72.18, "y": -9.33, "rotation": -144.54, "width": 136, "height": 146 }
        }
    }
},
"animations": {
    "jump": {
        "bones": {
            "hip": {
                "rotate": [
                    { "time": 0, "angle": 0, "curve": "stepped" },
                    { "time": 0.6666, "angle": 0 }
                ],
                "translate": [
                    {
                        "time": 0,
                        "x": 0,
                        "y": 0,
                        "curve": [ 0.25, 0, 0.75, 1 ]
                    },
                    {
                        "time": 0.3666,
                        "x": 48.25,
                        "y": 387.29,
                        "curve": [ 0.25, 0, 0.75, 1 ]
                    },
                    { "time": 0.6666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 0.6666, "x": 1, "y": 1 }
                ]
            },
            "L leg upper": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.3666, "angle": -52.49 },
                    { "time": 0.6666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.6666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 0.6666, "x": 1, "y": 1 }
                ]
            },
            "R leg upper": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.3666, "angle": 42.23 },
                    { "time": 0.6666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.6666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 0.6666, "x": 1, "y": 1 }
                ]
            },
            "back": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.3666, "angle": 17.45 },
                    { "time": 0.6666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0 },
                    { "time": 0.3666, "x": -12.48, "y": 6.24 },
                    { "time": 0.6666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 0.6666, "x": 1, "y": 1 }
                ]
            },
            "L arm upper": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.3666, "angle": -23.04 },
                    { "time": 0.6666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.6666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 0.6666, "x": 1, "y": 1 }
                ]
            },
            "L leg lower": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.3666, "angle": 21.33 },
                    { "time": 0.6666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.6666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 0.6666, "x": 1, "y": 1 }
                ]
            },
            "R arm upper": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.3666, "angle": -20.49 },
                    { "time": 0.6666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.6666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 0.6666, "x": 1, "y": 1 }
                ]
            },
            "R leg lower": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.3666, "angle": 18.73 },
                    { "time": 0.6666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.6666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 0.6666, "x": 1, "y": 1 }
                ]
            },
            "fore wing": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.1333, "angle": -17.83 },
                    { "time": 0.2333, "angle": -0.57 },
                    { "time": 0.3333, "angle": -22.57 },
                    { "time": 0.4333, "angle": 6.45 },
                    { "time": 0.5333, "angle": -15.51 },
                    { "time": 0.6666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.6666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 0.6666, "x": 1, "y": 1 }
                ]
            },
            "neck": {
                "rotate": [
                    { "time": 0, "angle": 0, "curve": "stepped" },
                    { "time": 0.6666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.6666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 0.6666, "x": 1, "y": 1 }
                ]
            },
            "L arm lower": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.3666, "angle": 16.6 },
                    { "time": 0.6666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.6666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 0.6666, "x": 1, "y": 1 }
                ]
            },
            "L foot": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.3333, "angle": -19.99 },
                    { "time": 0.6666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0 },
                    { "time": 0.3333, "x": -13.89, "y": -5.83 },
                    { "time": 0.6666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 0.6666, "x": 1, "y": 1 }
                ]
            },
            "R arm lower": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.3666, "angle": 54.98 },
                    { "time": 0.6666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.6666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 0.6666, "x": 1, "y": 1 }
                ]
            },
            "R foot": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.3666, "angle": -4.87 },
                    { "time": 0.6666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.6666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 0.6666, "x": 1, "y": 1 }
                ]
            },
            "bone1": {
                "rotate": [
                    { "time": 0, "angle": 0, "curve": "stepped" },
                    { "time": 0.6666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.6666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 0.6666, "x": 1, "y": 1 }
                ]
            },
            "head": {
                "rotate": [
                    {
                        "time": 0,
                        "angle": 0,
                        "curve": [ 0.25, 0, 0.75, 1 ]
                    },
                    {
                        "time": 0.3743,
                        "angle": 13.84,
                        "curve": [ 0.25, 0, 0.75, 1 ]
                    },
                    { "time": 0.6666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.6666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 0.6666, "x": 1, "y": 1 }
                ]
            },
            "rear wing": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.1333, "angle": 30.94 },
                    { "time": 0.2333, "angle": -24.35 },
                    { "time": 0.3333, "angle": 25.11 },
                    { "time": 0.4333, "angle": -6.54 },
                    { "time": 0.5333, "angle": 24.65 },
                    { "time": 0.6666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.6666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 0.6666, "x": 1, "y": 1 }
                ]
            },
            "L hand": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.3666, "angle": 57.5 },
                    { "time": 0.6666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.6666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 0.6666, "x": 1, "y": 1 }
                ]
            },
            "R hand": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.3666, "angle": 3.65 },
                    { "time": 0.6666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.6666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 0.6666, "x": 1, "y": 1 }
                ]
            },
            "hair back": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.3333, "angle": 6.5 },
                    { "time": 0.6666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.6666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 0.6666, "x": 1, "y": 1 }
                ]
            },
            "jaw": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.3666, "angle": 5.72 },
                    { "time": 0.6666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0 },
                    { "time": 0.3666, "x": -4.28, "y": 3.04 },
                    { "time": 0.6666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1 },
                    { "time": 0.3666, "x": 1.169, "y": 1 },
                    { "time": 0.6666, "x": 1, "y": 1 }
                ]
            },
            "hair mid": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.3333, "angle": 6.71 },
                    { "time": 0.6666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.6666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 0.6666, "x": 1, "y": 1 }
                ]
            },
            "hair front": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.3333, "angle": -8.18 },
                    { "time": 0.6666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0 },
                    { "time": 0.3333, "x": -17.24, "y": 20.35 },
                    { "time": 0.6666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 0.6666, "x": 1, "y": 1 }
                ]
            }
        }
    },
    "running": {
        "bones": {
            "hip": {
                "rotate": [
                    { "time": 0, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 2.79 },
                    { "time": 0.2333, "x": 0, "y": -15.43 },
                    { "time": 0.5, "x": 0, "y": 8 },
                    { "time": 0.7, "x": 0, "y": -8.92 },
                    { "time": 0.9666, "x": 0, "y": 2.79 }
                ]
            },
            "R leg upper": {
                "rotate": [
                    {
                        "time": 0,
                        "angle": 0,
                        "curve": [ 0.25, 0, 0.75, 1 ]
                    },
                    { "time": 0.5, "angle": -150.25 },
                    { "time": 0.7, "angle": -110.91 },
                    {
                        "time": 0.8333,
                        "angle": -25.14,
                        "curve": [ 0.155, 0.16, 0.75, 1 ]
                    },
                    { "time": 1, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0 },
                    { "time": 0.5, "x": -35.15, "y": 0 },
                    { "time": 0.7, "x": -6.5, "y": 0 },
                    { "time": 1, "x": 2.6, "y": 0 }
                ]
            },
            "R leg lower": {
                "rotate": [
                    {
                        "time": 0,
                        "angle": 0,
                        "curve": [ 0.25, 0, 0.75, 1 ]
                    },
                    { "time": 0.5, "angle": 7.47 },
                    { "time": 0.7, "angle": -53.49 },
                    {
                        "time": 0.8333,
                        "angle": -85.3,
                        "curve": [ 0.16, 0.21, 0.75, 1 ]
                    },
                    { "time": 1, "angle": 0 }
                ],
                "translate": [
                    { "time": 0.7, "x": 2.5, "y": -1.47 },
                    { "time": 0.8333, "x": 3.93, "y": -5.18 }
                ]
            },
            "R foot": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.2, "angle": 7.03 },
                    { "time": 0.2333, "angle": 18.45 },
                    { "time": 0.2666, "angle": 26.41 },
                    { "time": 0.3, "angle": 29.63 },
                    { "time": 0.5, "angle": -22.49 },
                    { "time": 0.7, "angle": -30.93 },
                    { "time": 0.8333, "angle": -50.37 },
                    { "time": 1, "angle": 0 }
                ],
                "translate": [
                    { "time": 0.5, "x": 0.7, "y": -3.84 }
                ]
            },
            "L leg upper": {
                "rotate": [
                    {
                        "time": 0,
                        "angle": -30.25,
                        "curve": [ 0.25, 0, 0.75, 1 ]
                    },
                    { "time": 0.2333, "angle": 77.26 },
                    {
                        "time": 0.5,
                        "angle": 104.21,
                        "curve": [ 0.25, 0, 0.29, 1 ]
                    },
                    { "time": 1, "angle": -30.25 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0 },
                    { "time": 0.5, "x": 22.13, "y": -16.92 },
                    { "time": 1, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 1, "x": 1, "y": 1 }
                ]
            },
            "L leg lower": {
                "rotate": [
                    {
                        "time": 0,
                        "angle": 22.34,
                        "curve": [ 0.25, 0, 0.75, 1 ]
                    },
                    {
                        "time": 0.2333,
                        "angle": -65.53,
                        "curve": [ 0.094, -0.03, 0.678, 1.08 ]
                    },
                    {
                        "time": 0.5,
                        "angle": 43.39,
                        "curve": [ 0.25, 0, 0.287, 1 ]
                    },
                    { "time": 1, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0 },
                    { "time": 1, "x": 0.58, "y": -1.74 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 1, "x": 1, "y": 1 }
                ]
            },
            "L foot": {
                "rotate": [
                    { "time": 0, "angle": -22.23 },
                    { "time": 0.2333, "angle": -1.44 },
                    { "time": 0.5, "angle": 5.06 },
                    { "time": 0.6333, "angle": 27.11 },
                    { "time": 0.6666, "angle": 50.34 },
                    { "time": 1, "angle": -12.47 }
                ],
                "translate": [
                    { "time": 0, "x": -4.13, "y": -3.42 },
                    { "time": 0.6333, "x": 1.22, "y": 1.73 },
                    { "time": 0.6666, "x": -0.56, "y": 5.49 },
                    { "time": 1, "x": -0.87, "y": -0.96 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1, "curve": "stepped" },
                    { "time": 1, "x": 1, "y": 1 }
                ]
            },
            "back": {
                "rotate": [
                    { "time": 0, "angle": -1.79 },
                    { "time": 0.2333, "angle": -10.71 },
                    { "time": 0.5, "angle": -2.16 },
                    { "time": 0.7, "angle": -10.27 },
                    { "time": 0.9666, "angle": -1.79 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0 },
                    { "time": 0.2333, "x": 5.2, "y": -6.5 },
                    { "time": 0.5, "x": 1.3, "y": -2.6 },
                    { "time": 0.7, "x": 7.81, "y": -6.5 },
                    { "time": 0.9666, "x": 0, "y": 0 }
                ]
            },
            "R arm upper": {
                "rotate": [
                    {
                        "time": 0,
                        "angle": 0,
                        "curve": [ 0.25, 0, 0.75, 1 ]
                    },
                    { "time": 0.5, "angle": 235.62 },
                    { "time": 0.7, "angle": -57.38 },
                    { "time": 0.9666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.9666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1 }
                ]
            },
            "R arm lower": {
                "rotate": [
                    {
                        "time": 0,
                        "angle": 0,
                        "curve": [ 0.068, 0, 0.632, 1.14 ]
                    },
                    { "time": 0.5, "angle": -34.21 },
                    {
                        "time": 0.7,
                        "angle": 17.35,
                        "curve": [ 0.221, 0.26, 0.75, 1 ]
                    },
                    { "time": 0.9666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.9666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1 }
                ]
            },
            "R hand": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.5, "angle": 30.13 },
                    { "time": 0.7, "angle": 3.91 },
                    { "time": 0.9666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.9666, "x": 0, "y": 0 }
                ],
                "scale": [
                    { "time": 0, "x": 1, "y": 1 }
                ]
            },
            "L arm upper": {
                "rotate": [
                    {
                        "time": 0,
                        "angle": 0,
                        "curve": [ 0.25, 0, 0.75, 1 ]
                    },
                    {
                        "time": 0.5,
                        "angle": -190.85,
                        "curve": [ 0.25, 0, 0.75, 1 ]
                    },
                    { "time": 0.9666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.9666, "x": 0, "y": 0 }
                ]
            },
            "L hand": {
                "rotate": [
                    {
                        "time": 0,
                        "angle": 0,
                        "curve": [ 0.25, 1, 0.75, 1 ]
                    },
                    {
                        "time": 0.5,
                        "angle": -15.76,
                        "curve": [ 0.25, 0, 0.75, 1 ]
                    },
                    { "time": 0.9666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.9666, "x": 0, "y": 0 }
                ]
            },
            "L arm lower": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.3, "angle": 45.27 },
                    { "time": 0.5, "angle": -20.97 },
                    { "time": 0.9666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.9666, "x": 0, "y": 0 }
                ]
            },
            "fore wing": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.2333, "angle": 17.36 },
                    { "time": 0.5333, "angle": -2.27 },
                    { "time": 0.7333, "angle": 20.14 },
                    { "time": 0.9666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.9666, "x": 0, "y": 0 }
                ]
            },
            "rear wing": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.2333, "angle": 17.36 },
                    { "time": 0.5333, "angle": -2.27 },
                    { "time": 0.7333, "angle": 20.14 },
                    { "time": 0.9666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.9666, "x": 0, "y": 0 }
                ]
            },
            "head": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.2666, "angle": -13.61 },
                    { "time": 0.5, "angle": 0 },
                    { "time": 0.7333, "angle": -11.08 },
                    { "time": 0.9666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0 },
                    { "time": 0.2666, "x": 4.54, "y": -38.81 },
                    { "time": 0.5, "x": 0, "y": 0 },
                    { "time": 0.7333, "x": 0.32, "y": -40.1 },
                    { "time": 0.9666, "x": 0, "y": 0 }
                ]
            },
            "jaw": {
                "rotate": [
                    { "time": 0, "angle": 0 },
                    { "time": 0.2333, "angle": -3.93 },
                    { "time": 0.4666, "angle": 8.79 },
                    { "time": 0.7333, "angle": 13.97 },
                    { "time": 0.9666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0 },
                    { "time": 0.2333, "x": 4.63, "y": 6.7 },
                    { "time": 0.4666, "x": 6.67, "y": -4.82 },
                    { "time": 0.7333, "x": 6.8, "y": -7.61 },
                    { "time": 0.9666, "x": 0, "y": 0 }
                ]
            },
            "hair back": {
                "rotate": [
                    {
                        "time": 0,
                        "angle": 0,
                        "curve": [ 0.25, 0, 0.75, 1 ]
                    },
                    {
                        "time": 0.2333,
                        "angle": -3.9,
                        "curve": [ 0.25, 0, 0.75, 1 ]
                    },
                    {
                        "time": 0.5,
                        "angle": 0,
                        "curve": [ 0.25, 0, 0.75, 1 ]
                    },
                    {
                        "time": 0.7666,
                        "angle": -4,
                        "curve": [ 0.25, 0, 0.75, 1 ]
                    },
                    { "time": 0.9666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0 },
                    { "time": 0.2333, "x": -1.3, "y": -6.5 },
                    { "time": 0.5, "x": 0, "y": 0 },
                    { "time": 0.7666, "x": -3.49, "y": -10.15 },
                    { "time": 0.9666, "x": 0, "y": 0 }
                ]
            },
            "hair front": {
                "rotate": [
                    {
                        "time": 0,
                        "angle": 0,
                        "curve": [ 0.25, 0, 0.75, 1 ]
                    },
                    {
                        "time": 0.2333,
                        "angle": -3.9,
                        "curve": [ 0.25, 0, 0.75, 1 ]
                    },
                    {
                        "time": 0.5,
                        "angle": 0,
                        "curve": [ 0.25, 0, 0.75, 1 ]
                    },
                    {
                        "time": 0.7666,
                        "angle": -4,
                        "curve": [ 0.25, 0, 0.75, 1 ]
                    },
                    { "time": 0.9666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.9666, "x": 0, "y": 0 }
                ]
            },
            "hair mid": {
                "rotate": [
                    {
                        "time": 0,
                        "angle": 0,
                        "curve": [ 0.25, 0, 0.75, 1 ]
                    },
                    {
                        "time": 0.2333,
                        "angle": -3.9,
                        "curve": [ 0.25, 0, 0.75, 1 ]
                    },
                    {
                        "time": 0.5,
                        "angle": 0,
                        "curve": [ 0.25, 0, 0.75, 1 ]
                    },
                    {
                        "time": 0.7666,
                        "angle": -4,
                        "curve": [ 0.25, 0, 0.75, 1 ]
                    },
                    { "time": 0.9666, "angle": 0 }
                ],
                "translate": [
                    { "time": 0, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.5, "x": 0, "y": 0, "curve": "stepped" },
                    { "time": 0.9666, "x": 0, "y": 0 }
                ]
            }
        }
    }
}
}
