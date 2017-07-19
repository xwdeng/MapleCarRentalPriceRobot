"use strict";

function ReservationData() {
    function e(e) {
        var t = {
            "Š": "S",
            "š": "s",
            "Ð": "Dj",
            "Ž": "Z",
            "ž": "z",
            "À": "A",
            "Á": "A",
            "Â": "A",
            "Ã": "A",
            "Ä": "A",
            "Å": "A",
            "Æ": "A",
            "Ç": "C",
            "È": "E",
            "É": "E",
            "Ê": "E",
            "Ë": "E",
            "Ì": "I",
            "Í": "I",
            "Î": "I",
            "Ï": "I",
            "Ñ": "N",
            "Ń": "N",
            "Ò": "O",
            "Ó": "O",
            "Ô": "O",
            "Õ": "O",
            "Ö": "O",
            "Ø": "O",
            "Ù": "U",
            "Ú": "U",
            "Û": "U",
            "Ü": "U",
            "Ý": "Y",
            "Þ": "B",
            "ß": "Ss",
            "à": "a",
            "á": "a",
            "â": "a",
            "ã": "a",
            "ä": "a",
            "å": "a",
            "æ": "a",
            "ç": "c",
            "è": "e",
            "é": "e",
            "ê": "e",
            "ë": "e",
            "ì": "i",
            "í": "i",
            "î": "i",
            "ï": "i",
            "ð": "o",
            "ñ": "n",
            "ń": "n",
            "ò": "o",
            "ó": "o",
            "ô": "o",
            "õ": "o",
            "ö": "o",
            "ø": "o",
            "ù": "u",
            "ú": "u",
            "û": "u",
            "ü": "u",
            "ý": "y",
            "þ": "b",
            "ÿ": "y",
            "ƒ": "f",
            "ă": "a",
            "ș": "s",
            "ț": "t",
            "Ă": "A",
            "Ș": "S",
            "Ț": "T"
        };
        return (e = e.toLowerCase()).replace(/[^A-Za-z0-9\[\] ]/g, function(e) {
            return t[e] || e
        })
    }

    function t(e, t) {
        return [t.hourSunOpen.split(":"), t.hourMonOpen.split(":"), t.hourTueOpen.split(":"), t.hourWedOpen.split(":"), t.hourThuOpen.split(":"), t.hourFriOpen.split(":"), t.hourSatOpen.split(":")][e]
    }

    function a(e, t) {
        return [t.hourSunClose.split(":"), t.hourMonClose.split(":"), t.hourTueClose.split(":"), t.hourWedClose.split(":"), t.hourThuClose.split(":"), t.hourFriClose.split(":"), t.hourSatClose.split(":")][e]
    }

    function o(e, t, a, o) {
        Number.prototype.toRadians = function() {
            return this * Math.PI / 180
        };
        var r = e.toRadians(),
            n = a.toRadians(),
            i = (a - e).toRadians(),
            s = (o - t).toRadians(),
            l = Math.sin(i / 2) * Math.sin(i / 2) + Math.cos(r) * Math.cos(n) * Math.sin(s / 2) * Math.sin(s / 2);
        return 6371e3 * (2 * Math.atan2(Math.sqrt(l), Math.sqrt(1 - l))) / 1e3
    }

    function r(e) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
    }

    function n(e, t) {
        e || (e = moment().hours(0).minutes(0)), t || (t = moment().hours(23).minutes(30));
        for (var a = [], o = e; moment(o).isSameOrBefore(moment(t), "minute");) a.push(moment(o).format()), o = moment(o).add(30, "minutes");
        return a
    }
    return {
        reservationModel: {},
        fleetMeta: {
            compact: "Our fleet of compact rental cars is efficient & comfortable for travel, business & more! Reserve your compact car rental today with Discount.",
            diamond: "Our diamond car rentals offer luxury & performance with plenty of room for passengers & luggage. Book your high performance car rental with Discount today.",
            economy: "Discount Car and Truck Rentals offers competitive rates on clean, reliable & fuel efficient economy rental cars. Reserve your rental vehicle online now!",
            "full-size": "Need more space for passengers & luggage? Choose a full size car rental from Discount. Book online know for the best selection & great rates!",
            intermediate: "Discount's intermediate rental cars offer the space you need for passengers & luggage without sacrificing efficiency. Reserve your rental car online today!",
            intermediatesuv: "With room for 5 passengers, an intermediate SUV is comfortable yet still efficient for travel around town. Book your SUV rental with Discount today!",
            largesuv: "Seat up to 7 passengers & luggage comfortably with a large SUV rental from Discount. Ideal for business travel, road trips, special occasions & more!",
            luxury: "Enjoy the comfort & performance of a luxury rental car from Discount Car and Truck Rentals. Book online now for best availability & great rates!",
            "mini-van": "With room for passengers, luggage or cargo, minivan rentals are ideal for a range of personal & business uses. Book with Discount today for great rates.",
            "pick-up": "Our pickup truck rentals are perfect for smaller loads, construction projects & more! Contact Discount to rent a pickup truck at an affordable rate.",
            premium: "Get plenty of room for passengers & luggage with premium car rentals from Discount. Book a vehicle for business or personal travel online now.",
            "standard-size": "A standard car rental offers the flexibility & comfort you need whether you're traveling for business or pleasure. Book a standard car rental online now!",
            standardsuv: "With lots of room for passengers & luggage, a standard SUV rental is ideal for business, leisure, road trips & more. Book with Discount today!",
            "1tonpickuptruck": "Discount offers a variety of pickup truck rentals for light & medium duty jobs. Learn more about our one ton truck rentals & book yours today!",
            "1-2tonpickuptruck": "Our 1/2 ton pickup truck rentals are perfect for smaller loads, construction projects & more! Contact Discount to rent a pickup truck at an affordable rate.",
            "3-4tonpickuptruck": "Our 3/4 ton truck rentals offer comfort, cargo space & great towing capacity. Contact Discount Car and Truck Rentals to get a quote today!",
            cubetruck: "Browse our most popular moving truck rentals & find the ideal truck for your job! Reserve a 16 Ft cube truck rental for personal or business use today.",
            truck20: "Find the ideal cube van for the job with Discount. Offering great rates on 20 Ft cube van rentals for personal moves & commercial use. Get a quote today.",
            truck26: "Find the ideal cube van for the job with Discount. Offering great rates on 26 Ft cube van and truck rentals for personal moves & commercial use. Reserve one today!",
            cargovan: "Make smaller moving projects simple with a cargo van rental that is easy to load & drive. Contact Discount Car & Truck for reliable & affordable rentals!",
            refrigeratedtruck: "Keep temperature sensitive cargo cool with convenient refrigerated truck rentals from Discount. Reserve your reefer truck rental today!"
        },
        fleetTitle: {
            compact: "Compact (Small) Car Rentals | Discountcar.com",
            diamond: "Diamond Car Rentals (High Performance) | Discountcar.com",
            economy: "Economy Car Rentals | Discountcar.com",
            "full-size": "Full Size Car Rental | Discountcar.com",
            intermediate: "Intermediate Rental Cars | Discountcar.com",
            intermediatesuv: "Intermediate SUV Rental | Discountcar.com",
            largesuv: "Full-Size (Large) SUV Rentals | Discountcar.com",
            luxury: "Luxury Car Rentals | Discountcar.com",
            "mini-van": "Minivan Rental, 7 Passenger Van Rental | Discountcar.com",
            "pick-up": "Pickup Truck Rental | Discountcar.com",
            premium: "Premium Car Rentals | Discountcar.com",
            "standard-size": "Standard Car Rentals | Discountcar.com",
            standardsuv: "Standard (mid size) SUV Rental | Discountcar.com",
            "1tonpickuptruck": "1 Ton Pickup Truck Rental | Discountcar.com",
            "1-2tonpickuptruck": "1/2 Ton Pickup Truck Rental | Discountcar.com",
            "3-4tonpickuptruck": "3/4 Ton Pickup Truck Rental | Discountcar.com",
            cubetruck: "16 Ft Cube Van & Moving Truck Rentals | Discountcar.com",
            truck20: "20 Ft Cube Truck / Van Rental | Discountcar.com",
            truck26: "26 Ft Cube Truck / Van Rentals | Discountcar.com",
            cargovan: "Cargo Van Rentals | Discountcar.com",
            refrigeratedtruck: "Refrigerated (Reefer) Truck Rental | Discountcar.com"
        },
        intLocations: ["dominican republic", "france", "germany", "ireland", "italy", "jamaica", "mexico", "portugal", "spain", "uk"],
        frStates: ["home-fr", "promotions-fr", "promoTemplate-fr", "business-industry-fr", "fleet-fr", "locations-home-fr", "locations-fr", "about-fr", "contact-fr", "business-fr", "sitemap-fr", "privacy-fr", "blog-fr", "blogPost-fr", "moving-fr", "404-fr", "origin-fr", "about-origin-fr", "fleet-type-fr", "home-seo-fr", "locations-seo-fr", "canada-detours-fr"],
        homeParams: ["", "reserve-car", "reserve-truck", "modify-reservation"],
        carType: ["all", "cars", "trucks"],
        aboutSates: ["press", "press-video"],
        promotions: ["free-weekend", "petro-points", "1895-rental", "webdiscount", "one-way-rental", "moving-supplies", "europcar", "unlimited-freedom", "hometowin"],
        blogPosts: ["7-packing-tips", "banff", "calgary", "how-to-load-truck", "how-to-save-money", "one-way-tips", "ottawa", "pack-furniture", "toronto"],
        getTimeArray: n,
        getOpenHours: t,
        getCloseHours: a,
        validateEmail: r,
        calculateDistance: o,
        checkChars: e
    }
}! function() {
    angular.module("dataService", []), angular.module("reservation", []), angular.module("secondaryPages", []).config(["$stateProvider", "$urlMatcherFactoryProvider", function(e, t) {
        t.caseInsensitive(!0), t.strictMode(!1), e.state("fleet-type", {
            url: "/fleet/:carType",
            views: {
                main: {
                    controller: "TrucksCtrl",
                    templateUrl: "app/secondaryPages/fleet/trucksVans/trucks.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Our selection of car and truck rental"
            }
        }), e.state("fleet-type-fr", {
            url: "/fleet-fr/:carType",
            views: {
                main: {
                    controller: "TrucksCtrl",
                    templateUrl: "app/secondaryPages/fleet/trucksVans/trucks-fr.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Notre sélection de voitures et de location de camions"
            }
        }), e.state("home-seo", {
            url: "/home",
            views: {
                main: {
                    controller: "HomeCtrl",
                    templateUrl: "app/home/home.html"
                }
            },
            data: {
                pageTitle: "Car Rentals & Truck Rentals"
            }
        }), e.state("home-seo-fr", {
            url: "/home-fr",
            views: {
                main: {
                    controller: "HomeCtrl",
                    templateUrl: "app/home/home-fr.html"
                }
            },
            data: {
                pageTitle: "Car Rentals & Truck Rentals"
            }
        }), e.state("locations-seo", {
            url: "/locations",
            views: {
                main: {
                    controller: "LocCtrl",
                    controllerAs: "vm",
                    templateUrl: "app/secondaryPages/locations/loc-details-en.html",
                    resolve: {
                        closedLocs: function() {
                            return []
                        }
                    }
                }
            },
            data: {
                pageTitle: "Locations"
            }
        }), e.state("locations-seo-fr", {
            url: "/locations-fr",
            views: {
                main: {
                    controller: "LocCtrl",
                    controllerAs: "vm",
                    templateUrl: "app/secondaryPages/locations/loc-details-fr.html",
                    resolve: {
                        closedLocs: function() {
                            return []
                        }
                    }
                }
            },
            data: {
                pageTitle: "Locations"
            }
        })
    }])
}(), angular.module("dataService").factory("ReservationData", ReservationData), angular.module("mainModule", ["main.home", "reservation", "secondaryPages", "ngAnimate", "dataService", "ui.router", "ui.bootstrap", "ngAutocomplete", "ngStorage", "leaflet-directive", "duScroll", "slickCarousel", "angulartics", "angulartics.google.analytics", "angular-google-analytics", "updateMeta", "tmh.dynamicLocale", "ngSanitize", "pascalprecht.translate"]).config(["$translateProvider", function(e) {
        e.useStaticFilesLoader({
            prefix: "translations/locale-",
            suffix: ".json"
        }), e.preferredLanguage("en"), e.fallbackLanguage("en"), e.useSanitizeValueStrategy("escapeParameters")
    }]).config(["$stateProvider", "AnalyticsProvider", "$locationProvider", "$urlRouterProvider", "$provide", "$logProvider", "tmhDynamicLocaleProvider", "$analyticsProvider", function(e, t, a, o, r, n, i, s) {
        o.otherwise(function(e, t) {
            e.invoke(["$state", function(e) {
                e.go("404", {
                    InvalidURL: t.absUrl()
                })
            }])
        }), n.debugEnabled(!1), a.html5Mode(!0), a.hashPrefix("!"), i.localeLocationPattern("js/Locales/angular-locale_{{locale}}.js"), s.settings.ga.additionalAccountNames = ["journeyTracker"], t.setAccount([{
            tracker: "UA-74685240-1",
            name: "DCTR_Default"
        }, {
            tracker: "UA-30962629-1",
            name: "journeyTracker"
        }]), t.useECommerce(!0, !1)
    }]).controller("AppCtrl", ["$scope", "$location", "ReservationData", "$state", "$sessionStorage", "$uibModal", "$anchorScroll", "tmhDynamicLocale", "ServerRequest", "$rootScope", "$translate", function(e, t, a, o, r, n, i, s, l, c, u) {
        function m() {
            l.getMeta({
                PageURL: t.$$url
            }).then(function(t) {
                e.metaTitle = t.title, e.metaDescription = t.description, c.$broadcast("heading-updated", {
                    heading: t.heading,
                    subHeading: t.subHeading
                })
            }).catch(function(e) {})
        }

        function d() {
            ! function(e) {
                var t, a = e.createElement("script");
                a.type = "text/javascript", a.async = !0, a.src = "//o2.eyereturn.com/?site=6804&page=generic", (t = e.getElementsByTagName("script")[0]).parentNode.insertBefore(a, t)
            }(document),
            function(e, t, a, o, r, n) {
                e.hj = e.hj || function() {
                    (e.hj.q = e.hj.q || []).push(arguments)
                }, e._hjSettings = {
                    hjid: 260410,
                    hjsv: 5
                }, r = t.getElementsByTagName("head")[0], (n = t.createElement("script")).async = 1, n.src = "//static.hotjar.com/c/hotjar-" + e._hjSettings.hjid + ".js?sv=" + e._hjSettings.hjsv, r.appendChild(n)
            }(window, document)
        }! function(e, t, a, o, r, n, i) {
            e.fbq || (r = e.fbq = function() {
                r.callMethod ? r.callMethod.apply(r, arguments) : r.queue.push(arguments)
            }, e._fbq || (e._fbq = r), r.push = r, r.loaded = !0, r.version = "2.0", r.queue = [], (n = t.createElement(a)).async = !0, n.src = "https://connect.facebook.net/en_US/fbevents.js", (i = t.getElementsByTagName(a)[0]).parentNode.insertBefore(n, i))
        }(window, document, "script"), fbq("init", "227857164317836"), e.$on("$stateChangeSuccess", function(t, n, l, c, u) {
            angular.isDefined(n.data.pageTitle) && (e.pageTitle = n.data.pageTitle + " | Discountcar.com"), d(), m(), ["reservation", "carSelect", "confirm", "final", "refine"].indexOf(o.current.name) > -1 ? e.hideNavigation = !0 : (e.hideNavigation = !1, a.frStates.indexOf(o.current.name) > -1 ? (r.language = "FR", s.set("fr")) : (r.language = "EN", s.set("en"))), "FR" === r.language ? e.lang = "FR" : e.lang = "EN", e.prevState = c.name, e.currState = n.name, e.toggleLang(e.lang), i()
        }), e.toggleLang = function(t) {
            u.use(t.toLowerCase()); {
                if ("fleet" !== o.current.name && "fleet-fr" !== o.current.name) {
                    if ("fleet-type" === o.current.name || "fleet-type-fr" === o.current.name) return e.enRef = "/fleet/" + o.params.carType, void(e.frRef = "/fleet-fr/" + o.params.carType);
                    if ("locations" === o.current.name || "locations-fr" === o.current.name) return e.enRef = "/locations/" + o.params.locationName, void(e.frRef = "/locations-fr/" + o.params.locationName);
                    if ("origin-fr" === o.current.name || "origin" === o.current.name) return e.enRef = "/", e.frRef = "/fr", void fbq("track", "PageView");
                    if ("home-fr" === o.current.name || "home" === o.current.name) {
                        var a = "";
                        return o.params.type && (a = o.params.type.toLowerCase()), e.enRef = "/home/" + a, e.frRef = "/home-fr/" + a, void fbq("track", "PageView")
                    }
                    return "final" === o.current.name && "new-reservation" == o.params.type && (fbq("track", "PageView"), fbq("track", "<BOOKING>")), "blogPost" === o.current.name || "blogPost-fr" === o.current.name ? (e.frRef = "/blog-fr/" + o.params.post, void(e.enRef = "/blog/" + o.params.post)) : "business-industry" === o.current.name || "business-industry-fr" === o.current.name ? (e.frRef = "/for-business-fr/" + o.params.industry, void(e.enRef = "/for-business/" + o.params.industry)) : "about-fr" === o.current.name || "about" === o.current.name ? (e.frRef = "/about-fr/" + o.params.state, void(e.enRef = "/about/" + o.params.state)) : "promoTemplate-fr" === o.current.name || "promoTemplate" === o.current.name ? (e.frRef = "/promotions-fr/" + o.params.promo, void(e.enRef = "/promotions/" + o.params.promo)) : "canada-detours-fr" === o.current.name || "canada-detours" === o.current.name ? (e.frRef = "/canada-detours-fr/" + o.params.chosenDetour, void(e.enRef = "/canada-detours/" + o.params.chosenDetour)) : void("EN" == t ? (e.frRef = o.current.url + "-fr", e.enRef = o.current.url) : (e.frRef = o.current.url, e.enRef = o.current.url.replace(/-fr/g, "")))
                }
                o.params.carType && o.params.carClass ? (e.enRef = "/fleet/" + o.params.carType + "/" + o.params.carClass, e.frRef = "/fleet-fr/" + o.params.carType + "/" + o.params.carClass) : (e.enRef = "/fleet/all/", e.frRef = "/fleet-fr/all/")
            }
        }, e.openPrompt = function() {
            "final" === e.currState ? "FR" === e.lang ? o.go("home-fr") : o.go("home") : ["reservation", "carSelect", "confirm"].indexOf(o.current.name) > -1 ? n.open({
                animation: !0,
                templateUrl: "app/home/prompt.html",
                controller: ["$scope", "$uibModalInstance", function(e, t) {
                    e.modOK = function() {
                        t.close()
                    }, e.modNotOK = function() {
                        t.dismiss()
                    }
                }],
                size: "sm"
            }).result.then(function() {
                "FR" === e.lang ? o.go("home-fr") : o.go("home")
            }, function() {}) : "FR" === e.lang ? o.go("home-fr") : o.go("home")
        }, e.goBack = function() {
            "final" === e.currState ? "FR" === e.lang ? o.go("home-fr") : o.go("home") : "home" === e.currState && "home-fr" === e.currState || window.history.back()
        }
    }]).controller("FooterLocsCtrl", ["ServerRequest", "$sessionStorage", "$state", "$scope", function(e, t, a, o) {
        var r = this;
        e.getLocationsList({}).then(function(e) {
            r.locations = e
        }), r.search = function() {
            r.autoDetails ? (t.directLocation = {
                latN: r.autoDetails.geometry.location.lat(),
                longN: r.autoDetails.geometry.location.lng(),
                cityName: r.autoDetails.formatted_address
            }, "FR" === o.lang ? a.go("locations-fr") : a.go("locations")) : r.showError = !0
        }
    }]),
    function() {
        function e() {
            function e(e, t, a, o, r, n, i) {
                function s() {
                    i.open({
                        animation: !0,
                        templateUrl: y.fr ? "app/CustomServices/autocomplete/search-by-branch-fr.html" : "app/CustomServices/autocomplete/search-by-branch.html",
                        size: "md",
                        controller: "AutocompleteBranchSearchCtrl as vm"
                    }).result.then(function(e) {
                        d(e)
                    }, function() {})
                }

                function l() {
                    y.pickupAddress = y.lastSearch.name, y.autoLocations = null, y.selectedAddress = y.pickupAddress, t.geolocation = y.lastSearch.geo, y.details = y.lastSearch.geo
                }

                function c() {
                    y.showSpinner = !0, u().then(function(a) {
                        t.geolocation = a, e.revGeocode().then(function(e) {
                            y.autoLocations = null, y.showSpinner = !1, y.pickupAddress = e[0].formatted_address, y.selectedAddress = y.pickupAddress
                        })
                    }).catch(function(e) {})
                }

                function u() {
                    if (navigator.geolocation) {
                        var e = o.defer();
                        return navigator.geolocation.getCurrentPosition(function(t) {
                            var a = {
                                lat: t.coords.latitude,
                                lng: t.coords.longitude
                            };
                            e.resolve(a)
                        }, function(t) {
                            e.reject(t)
                        }), e.promise
                    }
                }

                function m(e) {
                    y.pickupAddress = e.description, y.autoLocations = null, y.selectedAddress = y.pickupAddress, a.lastSearch.name = y.pickupAddress, e.terms.length > 3 ? t.autocompleteCity = !1 : t.autocompleteCity = y.pickupAddress, C.getDetails({
                        placeId: e.place_id
                    }, function(e, o) {
                        t.userLocation = e;
                        var r = {
                            lat: e.geometry.location.lat(),
                            lng: e.geometry.location.lng()
                        };
                        t.geolocation = r, a.lastSearch.geo = r
                    })
                }

                function d(e) {
                    t.autocompleteCity = !1, y.pickupAddress = e.address, y.selectedAddress = y.pickupAddress, y.autoLocations = null, a.lastSearch.name = y.pickupAddress, t.reservationModel.PickupLocation = e;
                    var o = {
                        lat: e.lat + 1e-4,
                        lng: e.long + 1e-4
                    };
                    a.lastSearch.geo = o, t.geolocation = o, t.visitedLocations = !0
                }

                function p(e) {
                    y.pickupAddress = e.cityName + ", " + y.myProvince, t.autocompleteCity = y.pickupAddress, t.geolocation = {
                        lat: e.latN,
                        lng: e.longN
                    }, y.autoLocations = null, y.myProvince = ""
                }

                function g() {
                    y.pickupAddress && (y.pickupAddress.length > 1 ? w.getPlacePredictions({
                        input: y.pickupAddress,
                        componentRestrictions: {
                            country: "ca"
                        },
                        location: new google.maps.LatLng(0, 0),
                        radius: "20000000"
                    }, function(e, a) {
                        r.myAddress = y.pickupAddress, y.airportFlag = !1, y.myProvince = "", y.cityList = [], null == e || 0 == e.length || (C.getDetails({
                            placeId: e[0].place_id
                        }, function(e, a) {
                            t.userLocation = e, n.$apply(function() {
                                y.details = {
                                    lat: e.geometry.location.lat(),
                                    lng: e.geometry.location.lng()
                                }
                            })
                        }), y.autoLocations = e, y.scrollInput(), -1 != M.indexOf(y.pickupAddress.toUpperCase()) ? v() : -1 != y.pickupAddress.toLowerCase().search("airpo") ? (y.airportFlag = !0, f(e)) : (R ? h() : k(), y.myProvince ? n.$apply() : f(e)))
                    }) : (y.autoLocations = null, y.myProvince = "", y.cityList = []))
                }

                function f(o) {
                    C.getDetails({
                        placeId: o[0].place_id
                    }, function(o, r) {
                        if (r == google.maps.GeocoderStatus.OK) {
                            var n = {
                                lat: o.geometry.location.lat(),
                                lng: o.geometry.location.lng()
                            };
                            a.lastSearch = {
                                name: o.name,
                                geo: n
                            }, t.geolocation = n, e.getAllLocations({
                                LatN: o.geometry.location.lat(),
                                LongN: o.geometry.location.lng(),
                                Radius: 10
                            }).then(function(e) {
                                y.airportFlag ? y.autoBranches = e.filter(function(e) {
                                    return e.airportCode
                                }) : y.autoBranches = e
                            }).catch(function(e) {})
                        }
                    })
                }

                function v() {
                    e.getAllLocationsByAirportCode({
                        searchTerm: y.pickupAddress.toUpperCase()
                    }).then(function(e) {
                        y.autoBranches = e
                    }).catch(function(e) {})
                }

                function h() {
                    R.forEach(function(e) {
                        var a = e.provinceAbbrList.map(function(e) {
                            return e.toLowerCase()
                        }); - 1 == a.indexOf(y.pickupAddress.toLowerCase()) && y.pickupAddress.toLowerCase() != e.provinceName.toLowerCase() || (y.cityList = e.citiesList, y.myProvince = e.provinceName, t.geolocation = {
                            lat: e.citiesList[0].latN,
                            lng: e.citiesList[0].longN
                        })
                    })
                }

                function k() {
                    e.getProvinces().then(function(e) {
                        R = e, h()
                    }).catch(function(e) {})
                }
                var y = this;
                console;
                y.fr ? y.placeholder = "Ville, adresse, code postal" : y.placeholder = "City, Address, Landmark, Postal Code", y.fr ? y.placeholder2 = "Utiliser mon emplacement actuel" : y.placeholder2 = "Use my current location", y.fr ? y.placeholder3 = "Recherche par nom de branche" : y.placeholder3 = "Search by branch name", a.lastSearch ? a.lastSearch.geo && (y.lastSearch = a.lastSearch) : a.lastSearch = {}, y.onChange = g, y.selectAddress = m, y.selectBranch = d, y.selectCity = p, y.useCurrentLocation = c, y.setToLastSearch = l, y.searchByBranch = s, y.scrollInput = function() {
                    screen.width < 992 && $("body").animate({
                        scrollTop: 160
                    })
                };
                var w = new google.maps.places.AutocompleteService,
                    C = new google.maps.places.PlacesService(document.getElementById("hi")),
                    R = null,
                    M = null;
                ! function() {
                    e.getAirportCodes().then(function(e) {
                        M = e.airports
                    }).catch(function(e) {})
                }()
            }
            return e.$inject = ["ServerRequest", "$sessionStorage", "$localStorage", "$q", "$rootScope", "$scope", "$uibModal"], {
                bindToController: !0,
                controller: e,
                controllerAs: "vm",
                restrict: "EA",
                scope: {
                    selectedAddress: "=",
                    hasError: "=",
                    fr: "=",
                    mobile: "=",
                    details: "="
                },
                templateUrl: "app/CustomServices/autocomplete/angular-autocomplete.html"
            }
        }
        angular.module("mainModule").directive("customAutocomplete", e), angular.module("mainModule").controller("AutocompleteBranchSearchCtrl", ["$uibModalInstance", "ServerRequest", "$scope", function(e, t, a) {
            var o, r = this;
            r.close = function() {
                e.dismiss()
            }, r.onChange = function() {
                r.input.length > 2 && (r.error = !1, r.branchList = [], t.getAllLocationsByLocationName({
                    searchTerm: r.input
                }).then(function(e) {
                    e[0] ? r.branchList = e : r.error = !0
                }).catch(function(e) {}))
            }, r.selectBranch = function(e) {
                r.input = e.locationName, o = e, r.branchList = []
            }, r.okay = function() {
                o && e.close(o)
            }
        }])
    }(),
    function() {
        function e() {
            function e() {
                function e(e) {
                    for (var t = e.length, a = 0, o = document.getElementById("tweetDom"), r = ""; a < t;) r += '<div class="tweet"><p>' + e[a].tweet + "</p><i>" + e[a].time + "</i></div>", a++;
                    o.innerHTML = r
                }
                var t = {
                    maxTweets: 3,
                    customCallback: e,
                    dataOnly: !0
                };
                twitterFetcher.fetch(t)
            }
            return {
                bindToController: !0,
                controller: e,
                controllerAs: "vm",
                restrict: "EA",
                scope: {
                    fr: "="
                },
                templateUrl: "app/CustomServices/social-widget/socialWidget.html"
            }
        }
        angular.module("mainModule").directive("socialWidget", e)
    }(),
    function() {
        function e(e) {
            function t(t, a, o) {
                var r;
                switch (t) {
                    case "1h":
                        r = "app/CustomServices/warning-modal/1h-notice.html";
                        break;
                    case "limitedCars":
                        r = "app/CustomServices/warning-modal/limited-vehicles.html";
                        break;
                    case "72h":
                        r = "app/CustomServices/warning-modal/72h-notice.html";
                        break;
                    case "closed":
                        r = "app/CustomServices/warning-modal/branch-closed.html";
                        break;
                    case "notes":
                        r = "app/CustomServices/warning-modal/location-notes.html";
                        break;
                    case "oneWayBlocked":
                        r = "app/CustomServices/warning-modal/one-way-blocked.html";
                        break;
                    case "custom":
                        r = "app/CustomServices/warning-modal/custom.html"
                }
                if (a) var n = {
                    str: a
                };
                e.open({
                    animation: !0,
                    templateUrl: r,
                    size: "md",
                    resolve: {
                        msg: n,
                        hideHeader: o
                    },
                    controller: ["$scope", "$uibModalInstance", "msg", "hideHeader", "$sessionStorage", function(e, t, a, o, r) {
                        a && (e.msg = a.str), o && (e.hideHeader = !0), r.reservationModel.PickupLocation && (e.pickup = r.reservationModel.PickupLocation), e.modOK = function() {
                            t.dismiss()
                        }
                    }]
                })
            }
            return {
                open: t
            }
        }
        e.$inject = ["$uibModal"], angular.module("mainModule").factory("WarningModal", e)
    }(), angular.module("main.home", ["ui.router", "dataService"]).config(["$stateProvider", "$urlMatcherFactoryProvider", function(e, t) {
        t.caseInsensitive(!0), t.strictMode(!1), e.state("home", {
            url: "/home/:type",
            views: {
                main: {
                    controller: "HomeCtrl",
                    templateUrl: "app/home/home.html"
                }
            },
            data: {
                pageTitle: "Car Rentals & Truck Rentals at Great Rates"
            }
        }).state("origin", {
            url: "/",
            views: {
                main: {
                    controller: "HomeCtrl",
                    templateUrl: "app/home/home.html"
                }
            },
            data: {
                pageTitle: "Car Rentals & Truck Rentals at Great Rates"
            }
        }).state("origin-fr", {
            url: "/fr",
            views: {
                main: {
                    controller: "HomeCtrl",
                    templateUrl: "app/home/home-fr.html"
                }
            },
            data: {
                pageTitle: "Car Rentals & Truck Rentals at Great Rates"
            }
        }).state("home-fr", {
            url: "/home-fr/:type",
            views: {
                main: {
                    controller: "HomeCtrl",
                    templateUrl: "app/home/home-fr.html"
                }
            },
            data: {
                pageTitle: "Car Rentals & Truck Rentals at Great Rates"
            }
        }).state("modify-mobile", {
            url: "/modify-res",
            views: {
                main: {
                    controller: "RefineCtrl as vm",
                    templateUrl: "app/home/modify-mobile.html"
                }
            },
            data: {
                pageTitle: "Car Rentals & Truck Rentals at Great Rates"
            }
        }).state("moving", {
            url: "/for-moving",
            views: {
                main: {
                    controller: "RefineCtrl as vm",
                    templateUrl: "app/home/moving.html"
                }
            },
            data: {
                pageTitle: "Moving Truck & Van Rental"
            }
        }).state("moving-fr", {
            url: "/for-moving-fr",
            views: {
                main: {
                    controller: "RefineCtrl as vm",
                    templateUrl: "app/home/moving-fr.html"
                }
            },
            data: {
                pageTitle: "Moving Truck & Van Rental"
            }
        }).state("careers", {
            url: "/careers",
            views: {
                main: {
                    controller: function() {
                        window.location.replace("https://careers-discountcar.icims.com/")
                    }
                }
            }
        })
    }]).controller("HomeCtrl", ["$scope", "$stateParams", "$state", "ReservationData", "$sessionStorage", function(e, t, a, o, r) {
        function n() {
            r.askLocation = !0, a.go("refine")
        }

        function i() {
            e.pickupAddress ? (r.userLocation = e.autoDetails, r.geolocation = {
                lat: e.autoDetails.geometry.location.lat(),
                lng: e.autoDetails.geometry.location.lng()
            }, a.go("refine")) : e.inputError = !0
        }
        e.findVehicle = i, e.goNext = n, e.toggleLang = function(e) {
                "FR" === e ? a.go("home-fr") : a.go("home")
            },
            function() {
                r.askLocation = !1, r.getReservation = null, e.pageTitle = "Car Rentals & Truck Rentals at Great Rates | Discountcar.com", t.type && ("reserve-truck" == t.type.toLowerCase() ? (r.reserveCarType = "trucks", e.pageTitle = "Rent a Truck | Discountcar.com") : "reserve-car" == t.type.toLowerCase() ? e.pageTitle = "Rent a Car | Discountcar.com" : "modify-reservation" == t.type.toLowerCase() && (r.reserveCarType = "modify", e.pageTitle = "Manage Reservations | Discountcar.com"))
            }()
    }]), angular.module("reservation").config(["$stateProvider", function(e) {
        e.state("confirm", {
            url: "/driver-info",
            views: {
                main: {
                    controller: "ConfirmCtrl",
                    template: '<div ng-include="vm.templateUrl"></div>',
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Confirm Rental"
            }
        })
    }]).controller("ConfirmCtrl", ["Analytics", "ReservationData", "$uibModal", "ServerRequest", "$state", "$sessionStorage", function(e, t, a, o, r, n) {
        function i(e) {
            n.savedInfo || (n.savedInfo = {}), n.getReservation ? "province" == e || "phone" == e ? (n.getReservation.provinceState = g.province, n.getReservation.phoneNumber = g.phone) : n.getReservation[e] = g[e] : n.savedInfo[e] = g[e]
        }

        function s(e) {
            e.addOnCode || ("CDW" === e.addOnName ? e.status ? n.reservationModel.cdwCharge = e.addOnRate : n.reservationModel.cdwCharge = 0 : e.status ? n.reservationModel.papCharge = e.addOnRate : n.reservationModel.papCharge = 0, m())
        }

        function l(e) {
            a.open({
                animation: !0,
                templateUrl: "carAddons.html",
                resolve: {
                    addon: function() {
                        return e
                    }
                },
                controller: ["$scope", "$uibModalInstance", "addon", function(e, t, a) {
                    e.addon = a, e.modOK = function() {
                        t.close(a)
                    }, e.modNotOK = function() {
                        t.dismiss(a)
                    }, e.close = function() {
                        t.dismiss()
                    }
                }],
                size: "md"
            }).result.then(function(e) {
                e.status = !0, s(e)
            }, function(e) {
                e.status = !1, s(e)
            })
        }

        function c() {
            g.firstName && g.lastName && t.validateEmail(g.email) && g.phone ? (g.spin = !0, g.blockCheckbox = !0, n.reservationModel.cdwCharge || (n.reservationModel.cdwCharge = 0), n.reservationModel.papCharge || (n.reservationModel.papCharge = 0), n.reservationModel.FirstName = g.firstName, n.reservationModel.LastName = g.lastName, n.reservationModel.provinceState = g.province, n.reservationModel.country = g.country, n.reservationModel.Email = g.email, n.reservationModel.PhoneNumber = g.phone, n.reservationModel.PickupLocation = g.pickupLocation.locationId, n.reservationModel.ReturnLocation = g.returnLocation.locationId, n.reservationModel.PickupDate = moment(g.pickupDate).format("YYYY/MM/DDTHH:mm:ss"), n.reservationModel.ReturnDate = moment(g.returnDate).format("YYYY/MM/DDTHH:mm:ss"), n.reservationModel.BaseRentalRate = g.baseRate, n.reservationModel.AvgRatePerDay = g.ratePerDay, n.reservationModel.Airline = g.airline, n.reservationModel.flightNumber = g.flightNumber, n.reservationModel.totalDays = g.taxes.totalDays, n.reservationModel.oneWayRate = g.taxes.oneWayRate, n.reservationModel.pickupAddress = g.pickupLocation.address, n.reservationModel.returnAddress = g.returnLocation.address, n.reservationModel.pickupDateCalendar = moment(g.pickupDate).format(), n.reservationModel.returnDateCalendar = moment(g.returnDate).format(), screen.width > 990 ? n.reservationModel.rateType = 0 : n.reservationModel.rateType = 4, n.getReservation ? (n.reservationModel.reservationNumber = n.getReservation.reservationNumber, o.modifyReservation().then(function(e) {
                e.failed ? alert(e.status) : (e.reservationNumber || (n.confirmation = {
                    status: "canceled",
                    code: "N/A"
                }), 0 !== e.reservationNumber && (n.confirmation = {
                    status: "modified",
                    code: e.reservationNumber
                }), r.go("final", {
                    type: "modified"
                }))
            }).catch(function(e) {
                g.spin = !1, alert("Something went wrong!")
            })) : o.createReservation().then(function(e) {
                0 !== e.reservationNumber && (n.confirmation = {
                    status: "reserved",
                    code: e.reservationNumber
                }, u(e.reservationNumber), r.go("final", {
                    type: "new-reservation"
                }))
            }).catch(function(e) {
                g.spin = !1, g.blockCheckbox = !1, n.reservationModel.PickupLocation = g.pickupLocation, n.reservationModel.ReturnLocation = g.returnLocation, n.reservationModel.PickupDate = moment(g.pickupDate).format(), n.reservationModel.ReturnDate = moment(g.returnDate).format(), alert(e.data.message)
            })) : p()
        }

        function u(t) {
            e.addTrans(t, "", g.taxes.finalRate, 0, g.taxes.taxRate, "", "", "", "CAD"), e.addItem(t, "KIA", n.reservationModel.VehicleClass, g.pickupLocation.city, g.ratePerDay, "1"), e.trackTrans(), e.clearTrans()
        }

        function m() {
            g.blockCheckbox = !0, o.calculateRate({
                LocationId: n.reservationModel.PickupLocation.locationId,
                ReturnLocationId: n.reservationModel.ReturnLocation.locationId,
                puDate: moment(g.pickupDate).format("YYYY/MM/DD"),
                rDate: moment(g.returnDate).format("YYYY/MM/DD"),
                PickupTime: moment(g.pickupDate).format("H:mm"),
                DropOffTime: moment(g.returnDate).format("H:mm"),
                PromotionId: n.reservationModel.PromotionId,
                vehicleType: n.reservationModel.VehicleType,
                vehicleClass: n.reservationModel.VehicleClass,
                baseRate: g.baseRate,
                CDWRate: n.reservationModel.cdwCharge,
                PAPRate: n.reservationModel.papCharge
            }).then(function(e) {
                g.taxes = e, g.baseRate = e.baseRate, g.ratePerDay = e.averageRate, g.promoMessage = e.promoMessage, d(), g.blockCheckbox = !1
            })
        }

        function d() {
            g.taxList = [];
            for (var e, t, a = 1; a < 7; a++) e = "taxName" + a, t = "taxAmount" + a, g.taxList.push({
                name: g.taxes[e],
                amount: g.taxes[t]
            })
        }

        function p() {
            g.inputError = {}, g.firstName || (g.inputError.name = 1), g.lastName || (g.inputError.surname = 1), g.phone || (g.inputError.phone = 1), t.validateEmail(g.email) || (g.inputError.email = 1)
        }
        var g = this;
        if ("FR" === n.language ? g.templateUrl = "app/reservation/confirm-rental/FR/confirm-fr.html" : g.templateUrl = "app/reservation/confirm-rental/confirm.html", g.taxes = n.taxes, g.baseRate = g.taxes.baseRate, g.ratePerDay = g.taxes.averageRate, d(), g.age = "25 +", g.country = n.reservationModel.country ? n.reservationModel.country : "CANADA", g.province = "ON", g.carClass = n.reservationModel.VehicleClass, g.pickupDate = n.reservationModel.PickupDate, g.returnDate = n.reservationModel.ReturnDate, g.pickupLocation = n.reservationModel.PickupLocation, g.returnLocation = n.reservationModel.ReturnLocation, g.includedKM = n.reservationModel.includedKM, g.dailyPerKm = n.reservationModel.dailyPerKm, n.getReservation && (g.firstName = n.getReservation.firstName, g.lastName = n.getReservation.lastName, g.phone = n.getReservation.phoneNumber, g.email = n.getReservation.email, g.country = n.getReservation.country, g.postalCode = n.getReservation.postalZipCode, g.province = n.getReservation.provinceState, g.airline = n.getReservation.airline, g.flightNumber = n.getReservation.flightNumber), n.savedInfo)
            for (var f in n.savedInfo) n.savedInfo.hasOwnProperty(f) && (g[f] = n.savedInfo[f]);
        ~g.pickupLocation.locationName.indexOf("Airport") ? g.isAirport = !0 : g.isAirport = !1, n.visitedConfirm = !0, g.submitContact = c, g.addonInfo = l, g.toggleAddon = s, g.saveInfo = i,
            function() {
                n.reservationModel.PickupLocation.locationComments && " " != n.reservationModel.PickupLocation.locationComments && (g.locationComments = n.reservationModel.PickupLocation.locationComments), o.getAllCountries().then(function(e) {
                    g.allCountries = e
                }), g.addons = [], n.reservationModel.addons ? m() : o.getAddons({
                    locationId: n.reservationModel.PickupLocation.locationId,
                    vehicleClass: n.reservationModel.VehicleClass
                }).then(function(e) {
                    n.addons = e, g.addons = e, g.addons.forEach(function(e) {
                        (n.reservationModel.cdwCharge || n.reservationModel.papCharge || n.reservationModel.FreedomPackageRate) && ("CDW" === e.addOnName && n.reservationModel.cdwCharge && (e.status = !0), "PAP" === e.addOnName && n.reservationModel.papCharge && (e.status = !0)), 1 === e.addOnCode ? (e.status = !0, "CDW" === e.addOnName ? n.reservationModel.cdwCharge = e.addOnRate : n.reservationModel.papCharge = e.addOnRate) : n.getReservation && (n.getReservation.cdwCharge || n.getReservation.papCharge) ? ("CDW" === e.addOnName && n.getReservation.cdwCharge && (e.status = !0, n.reservationModel.cdwCharge = e.addOnRate), "PAP" === e.addOnName && n.getReservation.papCharge && (e.status = !0, n.reservationModel.papCharge = n.getReservation.papCharge)) : ("CDW" === e.addOnName && n.reservationModel.cdwCharge || "PAP" === e.addOnName && n.reservationModel.papCharge) && (e.status = !0)
                    }), m()
                })
            }()
    }]), angular.module("reservation").config(["$stateProvider", function(e) {
        e.state("refine", {
            url: "/refine-search",
            views: {
                main: {
                    controller: "RefineCtrl",
                    template: '<div ng-include="vm.templateUrl"></div>',
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Reservation"
            }
        })
    }]).controller("RefineCtrl", ["WarningModal", "$log", "ReservationData", "$q", "ServerRequest", "$state", "$uibModal", "$sessionStorage", "$stateParams", "$scope", function(e, t, a, o, r, n, i, s, l, c) {
        function u(e) {
            if (s.reservationModel.PickupLocation) {
                var a, o, r, n, i, l = s.reservationModel.PickupLocation;
                i = "return" === e ? h.returnDate : h.pickupDate, 0 === moment(i).day() ? (r = l.hourSunOpen.split(":"), n = l.hourSunClose.split(":")) : 6 === moment(i).day() ? (r = l.hourSatOpen.split(":"), n = l.hourSatClose.split(":")) : moment(i).day() < 6 && (r = l.hourMonOpen.split(":"), n = l.hourMonClose.split(":")), l.holidaysInfoList.forEach(function(e) {
                    moment(i).isSame(moment(e.date), "day") && (r = e.hourOpen.split(":"), n = e.hourClose.split(":"))
                }), a = moment(i).hours(parseInt(r[0])).minutes(parseInt(r[1])), o = moment(i).hours(parseInt(n[0])).minutes(parseInt(n[1])), moment(i).isBetween(moment(a).subtract(1, "m"), moment(o).add(1, "m"), "minute") || ("return" === e ? h.timeWarningReturn = !0 : h.showTimeWarning = !0, 0 === moment(a).hours() ? ("return" === e ? h.returnClosedAllDay = !0 : h.pickupClosedAllDay = !0, t.debug(e + " closed all day!")) : "return" === e ? h.returnClosed = !0 : h.pickupClosed = !0), 0 === moment(h.pickupDate).hours() ? h.pickupClosed = !0 : h.pickupClosed = !1, 0 === moment(h.returnDate).hours() ? h.returnClosed = !0 : h.returnClosed = !1
            }
        }

        function m() {
            h.inputError = {}, h.modifyResNumber && h.modifyEmail ? (h.loadingRes = !0, r.cancelReservation(h.modifyResNumber, h.modifyEmail).then(function(t) {
                h.loadingRes = !1, t.failed ? e.open("custom", t.status) : (s.confirmation = {
                    status: "canceled",
                    code: t.reservationNumber
                }, delete s.savedInfo, n.go("final", {
                    type: "cancel"
                }))
            }).catch(function(t) {
                h.loadingRes = !1, e.open("custom", t.data.message, !0)
            })) : (h.modifyResNumber || (h.inputError.resNumber = 1), h.modifyEmail || (h.inputError.email = 1))
        }

        function d() {
            h.inputError = {}, h.modifyResNumber && h.modifyEmail ? (h.loadingRes = !0, r.getReservation(h.modifyResNumber, h.modifyEmail).then(function(t) {
                h.loadingRes = !1, t.reservationNumber ? (s.getReservation = t, s.reservationModel.PickupDate = t.pickupDate, s.reservationModel.ReturnDate = t.returnDate, s.reservationModel.AvgRatePerDay = t.avgRatePerDay, s.reservationModel.BaseRentalRate = t.baseRentalRate, s.reservationModel.TotalDays = t.totalDays, s.reservationModel.VehicleClass = t.vehicleClass, s.reservationModel.VehicleType = t.vehicleType, s.reservationModel.rateId = t.rateId, s.reservationModel.dailyPerKm = t.dailyPerKm, s.reservationModel.includedKM = t.includedKM, s.reservationModel.PromotionId = t.promotionId, s.reservationModel.cdwCharge = t.cdwCharge, s.reservationModel.papCharge = t.papCharge, s.visitedCars = !0, s.visitedConfirm = !0, s.resIsUnchanged = !0, "Truck" === t.vehicleType && (s.startTruckReservation = !0), p(t)) : (e.open("custom", t.status), h.loadingRes = !1)
            }).catch(function(t) {
                h.loadingRes = !1, e.open("custom", t.data.message, !0)
            })) : (h.modifyResNumber || (h.inputError.resNumber = 1), h.modifyEmail || (h.inputError.email = 1))
        }

        function p(e) {
            r.getAllLocations({
                LatN: e.pickupLat,
                LongN: e.pickupLong,
                Radius: 10
            }).then(function(t) {
                s.geolocation = {}, s.geolocation.lat = parseFloat(e.pickupLat), s.geolocation.lng = parseFloat(e.pickupLong), s.reservationModel.PickupLocation = t[0], e.pickupLocation !== e.returnLocation ? r.getAllLocations({
                    LatN: e.returnLat,
                    LongN: e.returnLong,
                    Radius: 10
                }).then(function(e) {
                    s.reservationModel.ReturnLocation = e[0], n.go("reservation")
                }) : (s.reservationModel.ReturnLocation = t[0], n.go("reservation"))
            })
        }

        function g() {
            h.minReturnDate = moment(h.pickupDate).format(), moment(h.returnDate).isSameOrBefore(moment(h.minReturnDate), "day") && (h.returnDate = moment(h.minReturnDate).add(1, "day").format()), u("pickup")
        }

        function f() {
            if (moment(h.returnDate).diff(moment(h.pickupDate), "hours") < 1) e.open("1h");
            else {
                if (h.truckReserve && (s.startTruckReservation = !0), s.reservationModel.PickupDate = h.pickupDate, s.reservationModel.ReturnDate = h.returnDate, s.reservationModel.PromotionId = h.promoCode, s.reservationModel.country = h.country, s.diffLocationReturn = h.diffLocation, h.autoDetails) {
                    var t = {};
                    t.lat = h.autoDetails.geometry.location.lat(), t.lng = h.autoDetails.geometry.location.lng(), s.geolocation = t
                }!s.reservationModel.PickupLocation || h.promoCode || h.diffLocation ? n.go("reservation") : (s.reservationModel.ReturnLocation = s.reservationModel.PickupLocation, u("pickup"), u("return"), h.showTimeWarning || h.timeWarningReturn ? n.go("reservation") : v())
            }
        }

        function v() {
            moment(h.returnDate).diff(moment(h.pickupDate), "hours") < 1 ? e.open("1h") : (delete s.availableCars, r.GetAvailableCarsWithRate({
                LocationId: s.reservationModel.PickupLocation.locationId,
                ReturnLocationId: s.reservationModel.ReturnLocation.locationId,
                puDate: moment(h.pickupDate).format("YYYY/MM/DD"),
                rDate: moment(h.returnDate).format("YYYY/MM/DD"),
                pickupTime: moment(h.pickupDate).format("H:mm"),
                dropOffTime: moment(h.returnDate).format("H:mm")
            }).then(function(e) {
                var t = 0;
                e.forEach(function(e) {
                    e.blackout && t++
                }), t == e.length ? n.go("reservation") : (s.jumpedToCars = !0, s.availableCars = e, n.go("carSelect"))
            }).catch(function(t) {
                s.reservationModel.PickupLocation = "", s.reservationModel.ReturnLocation = "", e.open("custom", t.data.message), h.wait = !1
            }))
        }
        var h = this;
        "FR" === s.language ? h.templateUrl = "app/reservation/refine-search/refine-fr.html" : h.templateUrl = "app/reservation/refine-search/refine.html", l.type && -1 == a.homeParams.indexOf(l.type.toLowerCase()) && ("FR" === s.language ? n.go("404-fr") : n.go("404")), h.h1 = "Count On Discount", c.$on("heading-updated", function(e, t) {
            h.h1 = t.heading, h.h2 = t.subHeading
        }), h.country = "CANADA", h.carReserve = !0, h.showForm = !0, "trucks" !== s.reserveCarType && "moving" != n.current.name && "moving-fr" != n.current.name || (h.carReserve = !1, h.truckReserve = !0, s.reserveCarType = null), "modify" === s.reserveCarType && (h.carReserve = !1, h.showForm = !1, h.mngReserve = !0, s.confirmation && (h.modifyResNumber = s.confirmation.code), s.reserveCarType = null), s.oneWay && (h.diffLocation = !0), h.pickupDate = h.minDate = moment().add(1, "days").hours(10).minutes(30).format(), h.returnDate = moment().add(2, "days").hours(10).minutes(30).format(), h.minReturnDate = moment(h.pickupDate).add(1, "hours").format(), h.timeArray = h.timeArrayReturn = a.getTimeArray(), s.reservationModel = {}, h.locations = a.branchLocations, h.checkBranchTime = u, h.pickupDateChange = g, h.findVehicle = f, h.getReservation = d, h.cancelReservation = m, h.formatTimeString = function(e) {
            return 0 === moment(e).hours() && 0 === moment(e).minutes() ? "Location is closed on this day" : moment(e).format("hh:mm a")
        }, h.formatTimeStringNoCheck = function(e) {
            return moment(e).format("hh:mm a")
        }, h.scrollIt = function() {
            $("body").animate({
                scrollTop: 380
            })
        };
        delete s.visitedCars, delete s.visitedConfirm, delete s.startTruckReservation, delete s.getReservation, delete s.geolocation, delete s.oneWay, delete s.savedInfo,
            function() {
                r.getAllCountries().then(function(e) {
                    h.allCountries = e
                })
            }(), h.setReturnTime = function(e) {
                h.returnDate = moment(h.returnDate).hours(moment(e).hours()).minutes(moment(e).minutes()).format(), s.reservationModel.ReturnDate = h.returnDate
            }, h.setPickupTime = function(e) {
                h.pickupDate = moment(h.pickupDate).hours(moment(e).hours()).minutes(moment(e).minutes()).format(), s.reservationModel.PickupDate = h.pickupDate
            }
    }]), angular.module("reservation").controller("ModalInstanceCtrl", ["$scope", "$uibModalInstance", function(e, t) {
        e.modOK = function() {
            t.close()
        }, e.modNotOK = function() {
            t.dismiss()
        }
    }]), angular.module("reservation").config(["$stateProvider", function(e) {
        e.state("final", {
            url: "/confirmation/:type",
            views: {
                main: {
                    controller: "FinalCtrl",
                    template: '<div ng-include="vm.templateUrl"></div>',
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Confirmation"
            }
        })
    }]).controller("FinalCtrl", ["ReservationData", "ServerRequest", "$state", "$sessionStorage", function(e, t, a, o) {
        var r = this;
        if (r.showTrackCode = !1, "FR" === o.language ? r.templateUrl = "app/reservation/reserve-final/final-fr.html" : r.templateUrl = "app/reservation/reserve-final/final.html", o.confirmation) switch (r.code = o.confirmation.code, o.confirmation.status) {
            case "reserved":
                r.showTrackCode = !0, "FR" === o.language ? r.message = "Votre véhicule est réservé." : r.message = "Your vehicle is reserved.";
                break;
            case "modified":
                "FR" === o.language ? r.message = "Réservation a été modifié!" : r.message = "Reservation Has Been Modified!", o.getReservation = null;
                break;
            case "canceled":
                "FR" === o.language ? r.message = "Réservation a été annulé!" : r.message = "Reservation Has Been Cancelled!", r.canceled = !0
        } else "FR" === o.language ? a.go("home-fr") : a.go("home");
        r.addToCalendar = function() {
            var e = ics();
            e.addEvent("Discount Car & Truck Rental", "Vehicle Pick-Up", o.reservationModel.pickupAddress, o.reservationModel.pickupDateCalendar, o.reservationModel.pickupDateCalendar), e.addEvent("Discount Car & Truck Rental", "Vehicle Return", o.reservationModel.returnAddress, o.reservationModel.returnDateCalendar, o.reservationModel.returnDateCalendar), e.download("Discount Car & Truck Rental")
        }, r.goModify = function() {
            screen.width > 767 ? "FR" === o.language ? a.go("home-fr", {
                type: "modify-reservation"
            }) : a.go("home", {
                type: "modify-reservation"
            }) : (o.reserveCarType = "modify", a.go("modify-mobile"))
        }
    }]), angular.module("reservation").config(["$stateProvider", function(e) {
        e.state("carSelect", {
            url: "/select-vehicle",
            views: {
                main: {
                    controller: "CarSelectCtrl",
                    template: '<div ng-include="vm.templateUrl"></div>',
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Select Vehicle"
            }
        })
    }]).controller("CarSelectCtrl", ["ReservationData", "ServerRequest", "$state", "$sessionStorage", "WarningModal", "$uibModal", "$filter", function(e, t, a, o, r, n, i) {
        function s(e, t) {
            v.selectedCar = e, v.selectedIndex = t, screen.width < 992 && e.vehicleUnavailable && r.open("limitedCars")
        }

        function l(e) {
            v.carFilter = e, v.filteredCars = i("orderBy")(v.filteredCars, ["vehicleUnavailable", e.val]), v.selectedIndex = 0, v.selectedCar = v.filteredCars[0]
        }

        function c(e) {
            "Truck" === e && !v.gotTrucks && v.filteredCars ? (r.open("limitedCars"), v.carModel = 1) : "Car" === e && v.carBlackout ? (r.open("limitedCars"), v.carModel = 2) : (v.filteredCars = i("filter")(v.allCars, {
                vehicleType: e
            }), l(v.filters[0]), v.selectedIndex = 0, v.selectedCar = v.filteredCars[0])
        }

        function u() {
            v.filteredCars[v.selectedIndex - 1] ? (v.selectedCar = v.filteredCars[v.selectedIndex - 1], v.selectedIndex--) : (v.selectedCar = v.filteredCars[v.filteredCars.length - 1], v.selectedIndex = v.filteredCars.length - 1), $("#carScrollDesk").animate({
                scrollTop: 250 + 180 * v.selectedIndex
            })
        }

        function m() {
            v.filteredCars[v.selectedIndex + 1] ? (v.selectedCar = v.filteredCars[v.selectedIndex + 1], v.selectedIndex++) : (v.selectedCar = v.filteredCars[0], v.selectedIndex = 0), $("#carScrollDesk").animate({
                scrollTop: 250 + 180 * v.selectedIndex
            })
        }

        function d(e) {
            function a(t) {
                o.reservationModel.addons = t, t.forEach(function(e) {
                    "CDW" === e.addOnName && (e.status ? o.reservationModel.cdwCharge = e.addOnRate : o.reservationModel.cdwCharge = 0), "PAP" === e.addOnName && (e.status ? o.reservationModel.papCharge = e.addOnRate : o.reservationModel.papCharge = 0)
                }), o.reservationModel.addons = !0, g(e)
            }

            function r() {
                o.reservationModel.cdwCharge = 0, o.reservationModel.papCharge = 0, o.reservationModel.addons = !0, g(e)
            }
            o.reservationModel.VehicleClass = e.carClassType + e.truckClassType, o.reservationModel.VehicleType = e.vehicleType, o.reservationModel.rateId = e.rateId, o.reservationModel.includedKM = e.includedKM, o.reservationModel.dailyPerKm = e.dailyPerKm, t.getAddons({
                locationId: o.reservationModel.PickupLocation.locationId,
                vehicleClass: e.carClassType + e.truckClassType
            }).then(function(t) {
                var i;
                t.forEach(function(e) {
                    1 === e.addOnCode ? (e.status = !0, i = !0, "CDW" === e.addOnName ? o.reservationModel.cdwCharge = e.addOnRate : o.reservationModel.papCharge = e.addOnRate) : o.getReservation && (o.getReservation.cdwCharge || o.getReservation.papCharge) && ("CDW" === e.addOnName && o.getReservation.cdwCharge && (e.status = !0, o.reservationModel.cdwCharge = e.addOnRate), "PAP" === e.addOnName && o.getReservation.papCharge && (e.status = !0, o.reservationModel.papCharge = o.getReservation.papCharge))
                }), screen.width > 992 ? g(e) : t[0] ? n.open({
                    animation: !0,
                    templateUrl: "carAddons.html",
                    size: "md",
                    backdrop: "static",
                    resolve: {
                        addons: function() {
                            return t
                        },
                        status: i
                    },
                    controller: ["$scope", "$uibModalInstance", "addons", "status", "$sessionStorage", function(e, t, a, o, r) {
                        e.addons = a, e.status = o, e.addOff = function() {
                            var t = !0;
                            return e.addons.forEach(function(e) {
                                e.status && (t = !1)
                            }), t
                        }, e.modOK = function() {
                            t.close(e.addons)
                        }, e.modNotOK = function() {
                            t.dismiss()
                        }
                    }]
                }).result.then(a, function() {
                    i ? a(t) : r()
                }) : r()
            })
        }

        function p() {
            var e, t, a;
            if (v.selectedCar = v.allCars[0], !v.allCars[0].thumbnailImagePath) return v.showError = !0, void(v.errorStatus = v.allCars[0].status);
            v.allCars.forEach(function(r, n) {
                "Truck" === r.vehicleType && (v.gotTrucks = !0), o.getReservation && (v.disableTabs = !0), o.visitedConfirm && (r.carClassType !== o.reservationModel.VehicleClass && r.truckClassType !== o.reservationModel.VehicleClass || (t = r, e = n, "Truck" === o.reservationModel.VehicleType && (a = !0))), o.reserveVehicleClass && (r.carClassType !== o.reserveVehicleClass && r.truckClassType !== o.reserveVehicleClass || (t = r, e = n))
            }), "Truck" === o.reserveVehicleType && (a = !0, delete o.reserveVehicleType), o.startTruckReservation && v.gotTrucks || a ? (c("Truck"), v.carModel = 2, delete o.startTruckReservation) : v.carBlackout && v.gotTrucks ? (r.open("limitedCars"), c("Truck"), v.carModel = 2) : c("Car"), t && (v.selectedCar = t, v.selectedIndex = e + 1)
        }

        function g(e) {
            t.calculateRate({
                LocationId: o.reservationModel.PickupLocation.locationId,
                ReturnLocationId: o.reservationModel.ReturnLocation.locationId,
                puDate: moment(v.pickupDate).format("YYYY/MM/DD"),
                rDate: moment(v.returnDate).format("YYYY/MM/DD"),
                PickupTime: moment(v.pickupDate).format("H:mm"),
                DropOffTime: moment(v.returnDate).format("H:mm"),
                PromotionId: o.reservationModel.PromotionId,
                vehicleType: e.vehicleType,
                vehicleClass: e.carClassType + e.truckClassType,
                baseRate: e.baseRate,
                CDWRate: o.reservationModel.cdwCharge,
                PAPRate: o.reservationModel.papCharge
            }).then(function(e) {
                o.taxes = e, a.go("confirm")
            })
        }

        function f(e) {
            t.getAddons({
                locationId: o.reservationModel.PickupLocation.locationId,
                vehicleClass: e.carClassType + e.truckClassType,
                FreedomPackage: !0
            }).then(function(t) {
                var a = t[t.length - 1];
                n.open({
                    animation: !0,
                    templateUrl: "freedomPackage.html",
                    resolve: {
                        car: function() {
                            return e
                        },
                        freedomPackage: function() {
                            return a
                        }
                    },
                    controller: ["$scope", "$uibModalInstance", "car", "freedomPackage", function(e, t, a, o) {
                        e.car = a, e.freedomPackage = o, "Unlimited Kilometres 4 Free" === e.car.freedomPackageCaption ? e.charge = "Included at no extra charge" : "Unlimited Kilometres Available 4 Purchase" === e.car.freedomPackageCaption && (e.charge = "+ " + e.freedomPackage.addOnRate.toFixed(2) + " / day"), e.close = function() {
                            t.dismiss()
                        }
                    }],
                    size: "md"
                })
            })
        }
        var v = this;
        "FR" === o.language ? v.templateUrl = "app/reservation/select-vehicle/FR/vehicle-fr.html" : v.templateUrl = "app/reservation/select-vehicle/selectVehicle.html", v.carModel = 1, v.vehicleFilter = "", v.pickupDate = o.reservationModel.PickupDate, v.returnDate = o.reservationModel.ReturnDate, v.pickupLocation = o.reservationModel.PickupLocation.locationName, v.returnLocation = o.reservationModel.ReturnLocation.locationName, v.filters = [{
                str: "Price (low to high)",
                val: "averageRatePerDay",
                reverse: !1
            }, {
                str: "# of Passengers",
                val: "-numberofAdults",
                reverse: !0
            }, {
                str: "# of Suitcases (Large)",
                val: "-numberofLargeSuitcases",
                reverse: !0
            }], v.filtersFR = [{
                str: "Prix ascendant",
                val: "averageRatePerDay",
                reverse: !1
            }, {
                str: "# des passagers",
                val: "-numberofAdults",
                reverse: !0
            }, {
                str: "# des Suitcases (Grande)",
                val: "-numberofLargeSuitcases",
                reverse: !0
            }], "FR" === o.language ? v.carFilter = v.filtersFR[0] : v.carFilter = v.filters[0], v.blackoutStatus = "Limited vehicle availability at the selected location. Please choose another location or change date.", v.selectedIndex = 0, o.visitedCars = !0, o.visitedConfirm && (v.backFromConfirm = !0), v.onReserve = d, v.showCaseLeft = u, v.showCaseRight = m, v.resetFilter = c, v.sortBy = l, v.carlistClick = s, v.freedomPackageInfo = f,
            function() {
                o.reservationModel.cdwCharge = 0, o.reservationModel.papCharge = 0, o.availableCars ? (v.allCars = o.availableCars, delete o.availableCars, p()) : (v.showSpin = !0, t.GetAvailableCarsWithRate({
                    LocationId: o.reservationModel.PickupLocation.locationId,
                    ReturnLocationId: o.reservationModel.ReturnLocation.locationId,
                    puDate: moment(v.pickupDate).format("YYYY/MM/DD"),
                    rDate: moment(v.returnDate).format("YYYY/MM/DD"),
                    pickupTime: moment(v.pickupDate).format("H:mm"),
                    dropOffTime: moment(v.returnDate).format("H:mm"),
                    PromotionId: o.reservationModel.PromotionId
                }).then(function(e) {
                    v.showSpin = !1, v.allCars = e, p()
                }).catch(function(e) {
                    v.showSpin = !1, v.showError = !0, v.errorStatus = e.data.message
                }))
            }()
    }]),
    function() {
        angular.module("reservation").controller("ValidatePromoCtrl", ["ReservationData", "$uibModalInstance", "ServerRequest", "$scope", "$sessionStorage", "resp", function(e, t, a, o, r, n) {
            var i = this;
            i.code = r.reservationModel.PromotionId, i.message = n.status, i.pickupDate = r.reservationModel.PickupDate, i.returnDate = r.reservationModel.ReturnDate, i.pickupBranch = r.reservationModel.PickupLocation, i.applyPromo = function() {
                i.code && a.validatePromo({
                    PickupLocationId: i.pickupBranch.locationId,
                    puDate: moment(i.pickupDate).format("YYYY/MM/DD"),
                    rDate: moment(i.returnDate).format("YYYY/MM/DD"),
                    PickupTime: moment(i.pickupDate).format("H:mm"),
                    DropOffTime: moment(i.returnDate).format("H:mm"),
                    promotionId: i.code
                }).then(function(e) {
                    "Valid" === e.message ? t.close(i.code) : i.message = e.status
                }).catch(function(e) {})
            }
        }])
    }(), angular.module("reservation").config(["$stateProvider", function(e) {
        e.state("reservation", {
            url: "/reservation",
            views: {
                main: {
                    controller: "ReserveCtrl",
                    template: '<div ng-include="vm.templateUrl"></div>',
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Reservation"
            }
        })
    }]).controller("ReserveCtrl", ["ReservationData", "$uibModal", "WarningModal", "ServerRequest", "$state", "$scope", "$sessionStorage", "$localStorage", "$log", "$rootScope", function(e, t, a, o, r, n, i, s, l, c) {
        function u() {
            o.calculateRate({
                LocationId: i.reservationModel.PickupLocation.locationId,
                ReturnLocationId: i.reservationModel.ReturnLocation.locationId,
                puDate: moment($.pickupDate).format("YYYY/MM/DD"),
                rDate: moment($.returnDate).format("YYYY/MM/DD"),
                PickupTime: moment($.pickupDate).format("H:mm"),
                DropOffTime: moment($.returnDate).format("H:mm"),
                PromotionId: i.reservationModel.PromotionId,
                vehicleType: i.reservationModel.VehicleType,
                vehicleClass: i.reservationModel.VehicleClass,
                baseRate: i.reservationModel.BaseRentalRate,
                CDWRate: i.reservationModel.cdwCharge,
                PAPRate: i.reservationModel.papCharge
            }).then(function(e) {
                i.taxes = e, r.go("confirm")
            }).catch(function(e) {
                d()
            })
        }

        function m(t) {
            if ($.pickupBranch) return e.calculateDistance($.pickupBranch.lat, $.pickupBranch.long, t.lat, t.long)
        }

        function d(e) {
            $.showTimeWarning || $.timeWarningReturn ? a.open("closed") : moment($.returnDate).diff(moment($.pickupDate), "hours") < 1 ? a.open("1h") : $.pickupBranch.locationId !== $.returnBranch.locationId && moment($.pickupDate).diff(moment(), "hours") < 72 ? a.open("72h") : ($.freeze = !0, $.promoValid ? i.reservationModel.PromotionId = $.promoCode : i.reservationModel.PromotionId = "", i.geolocation = {}, i.geolocation.lat = $.pickupBranch.lat, i.geolocation.lng = $.pickupBranch.long, e ? r.go("confirm") : I())
        }

        function p() {
            $.promoCode ? ($.promoMessage = "", o.validatePromo({
                PickupLocationId: $.pickupBranch.locationId,
                puDate: moment($.pickupDate).format("YYYY/MM/DD"),
                rDate: moment($.returnDate).format("YYYY/MM/DD"),
                PickupTime: moment($.pickupDate).format("H:mm"),
                DropOffTime: moment($.returnDate).format("H:mm"),
                promotionId: $.promoCode
            }).then(function(e) {
                "Valid" === e.status ? $.promoValid = !0 : ($.promoValid = !1, $.promoMessage = e.status)
            }).catch(function(e) {
                $.promoValid = !1, $.promoMessage = ""
            })) : ($.promoValid = !1, $.promoMessage = "")
        }

        function g(e) {
            e.locationId !== $.currMarker.locationId && ($.markers[e.locationId].icon.iconSize = [40, 50])
        }

        function f(e) {
            e.locationId !== $.currMarker.locationId && ($.markers[e.locationId].icon.iconSize = [30, 40])
        }

        function v(e) {
            screen.width > 992 && ($.currMarker = e, E())
        }

        function h() {
            $.minReturnDate = moment($.pickupDate).format(), moment($.returnDate).isBefore(moment($.minReturnDate)) && ($.returnDate = $.minReturnDate, i.reservationModel.ReturnDate = $.returnDate, T($.returnBranch, "return")), i.reservationModel.PickupDate = $.pickupDate, T($.pickupBranch, "pickup")
        }

        function k() {
            i.reservationModel.ReturnDate = $.returnDate, T($.returnBranch, "return")
        }

        function y(e) {
            var t;
            t = "pickup" === e ? $.autoDetails : $.autoDetails2, $.loadingLocs = !0, o.getAllLocations({
                LatN: t.geometry.location.lat(),
                LongN: t.geometry.location.lng(),
                Radius: 12
            }).then(function(a) {
                $.autocompleteCity = !1, $.loadingLocs = !1, "pickup" === e ? ($.locations = a, i.geolocation = {}, i.geolocation.lat = t.geometry.location.lat(), i.geolocation.lng = t.geometry.location.lng()) : ($.returnLocations = [], a.forEach(function(e) {
                    e.oneWayDropOff && $.returnLocations.push(e)
                })), $.mapCenter = {
                    lat: t.geometry.location.lat(),
                    lng: t.geometry.location.lng(),
                    zoom: 12
                }, $.diffReturn ? N() : A(), $.markers[0] && (F[0] = F[1] = $.markers[0])
            }).catch(function(e) {
                $.loadingLocs = !1
            })
        }

        function w() {
            $.disableReturn ? a.open("oneWayBlocked") : ($.diffReturn = !0, $.openDate = !1, $.editingLoc = !0, $.collapsePickup = !0, N())
        }

        function C() {
            $.editingLoc = !0, $.openDate = !1, $.openpanel1 = !1, $.showReturn = !1, A()
        }

        function R(e) {
            $.timeWarningReturn = !1, $.returnClosed = !1, $.returnDate = moment($.returnDate).hours(moment(e).hours()).minutes(moment(e).minutes()).format(), i.reservationModel.ReturnDate = $.returnDate, p()
        }

        function M(e) {
            $.showTimeWarning = !1, $.pickupClosed = !1, $.pickupDate = moment($.pickupDate).hours(moment(e).hours()).minutes(moment(e).minutes()).format(), i.reservationModel.PickupDate = $.pickupDate, p()
        }

        function b(e, t) {
            ("mobile" === t && screen.width < 992 || "desktop" === t) && ($.pickupBranch = e, $.openpanel1 = !0, $.showReturn = !0, U = e.locationId, $.currMarker = e, $.markers[e.locationId] && (F[0] = $.markers[e.locationId], F[0].message = "EN" === B ? "Pick-up Location" : "Endroit de la prise en charge", F[0].focus = !0), i.reservationModel.PickupLocation = e, $.diffReturn && "Quebec" == e.provinceState && a.open("custom", "Sorry, we are not able to make one-way reservations for locations in Quebec."), e.oneWayPickUp ? $.disableReturn = !1 : ($.disableReturn = !0, $.diffReturn = !1), $.diffReturn && e.oneWayPickUp || ($.openDate = !0, $.returnBranch = e, $.editingLoc = !1, $.markers[e.locationId] && (F[0] = F[1] = $.markers[e.locationId], F[0].message = F[1].message = "FR" === B ? "<span>Endroit de la prise en charge<br>Endroit du retour</span>" : "<span>Pick-up Location<br>Return Location</span>", $.deskMarkers = F), i.reservationModel.ReturnLocation = e, T(e, "return")), T(e, "pickup")), p()
        }

        function D(e, a) {
            var o;
            o = "FR" == B ? "app/partials/branchSelectPopup-fr.html" : "app/partials/branchSelectPopup.html", t.open({
                templateUrl: o,
                controller: ["branch", "$scope", "$uibModalInstance", function(e, t, a) {
                    t.branch = e, t.resFlow = !0, t.checkStoreHours = function(e, t) {
                        var a, o;
                        return a = "00:00" === e ? "Closed" : e, o = "00:00" === t ? "" : " - " + t, a + o
                    }, t.close = function() {
                        a.dismiss("cancel")
                    }, t.find = function() {
                        a.close()
                    }
                }],
                size: "md",
                openedClass: "locations-br-modal",
                resolve: {
                    branch: function() {
                        return e
                    }
                }
            }).result.then(function() {
                "pickup" == a ? $.branchSelect(e, "desktop") : $.branchSelectReturn(e, "desktop"), $.showMap = !1
            }, function() {})
        }

        function L(e, t) {
            ("mobile" === t && screen.width < 992 || "desktop" === t) && ($.returnBranch = e, $.diffReturn = !1, $.openDate = !0, $.collapsePickup = !1, $.currMarker = e, $.editingLoc = !1, $.markers[e.locationId] || S(e), $.markers[e.locationId] && (F[1] = $.markers[e.locationId], "FR" === B ? (F[1].message = "Endroit du retour", F[0].message = "Endroit de la prise en charge") : (F[1].message = "Return Location", F[0].message = "Pick-up Location"), F[1].focus = !0, $.deskMarkers = F), $.diffLocations = !0, i.reservationModel.ReturnLocation = e, F[1].data.address === F[0].data.address && (F[1].message = F[1].message = "FR" === B ? "<span>Endroit de la prise en charge<br>Endroit du retour</span>" : "<span>Pick-up Location<br>Return Location</span>", $.diffLocations = !1), T(e, "return"))
        }

        function T(t, a) {
            var o, r, n, s, c;
            "return" === a ? (c = $.returnDate, $.returnClosed = !1, $.returnClosedAllDay = !1, $.timeWarningReturn = !1) : (c = $.pickupDate, $.pickupClosed = !1, $.pickupClosedAllDay = !1, $.showTimeWarning = !1), "return" == a && t.dropOff24Hour ? $.timeArrayReturn = e.getTimeArray() : (n = e.getOpenHours(moment(c).day(), t), s = e.getCloseHours(moment(c).day(), t), t.holidaysInfoList.forEach(function(e) {
                moment(c).isSame(moment(e.date), "day") && (n = e.hourOpen.split(":"), s = e.hourClose.split(":"))
            }), o = moment(c).hours(parseInt(n[0])).minutes(parseInt(n[1])), r = moment(c).hours(parseInt(s[0])).minutes(parseInt(s[1])), moment(c).isBetween(moment(o).subtract(1, "m"), moment(r).add(1, "m"), "minute") || ("return" === a ? $.timeWarningReturn = !0 : $.showTimeWarning = !0, 0 === moment(o).hours() ? ("return" === a ? $.returnClosedAllDay = !0 : $.pickupClosedAllDay = !0, l.debug(a + " closed all day!")) : i.skippedDateSelect || ("return" === a ? $.returnClosed = !0 : $.pickupClosed = !0))), delete i.skippedDateSelect;
            var u = e.getTimeArray(o, r);
            "pickup" === a ? $.timeArray = u : $.timeArrayReturn = u, p()
        }

        function P(e, t) {
            $.loadingLocs = !0, o.getAllLocations({
                LatN: e,
                LongN: t,
                Radius: 12
            }).then(function(a) {
                a[0].address || ($.showWarning = !0), $.locations = a, $.loadingLocs = !1, $.returnLocations = [], $.locations.forEach(function(e) {
                    e.oneWayDropOff && $.returnLocations.push(e)
                }), $.mapCenter = {
                    lat: e,
                    lng: t,
                    zoom: 12
                }, A(), $.markers[0] && (F[0] = F[1] = $.markers[0]), M(i.reservationModel.PickupDate), R(i.reservationModel.ReturnDate), i.reservationModel.PickupLocation && (i.reservationModel.PickupLocation.locationId !== i.reservationModel.ReturnLocation.locationId ? ($.diffReturn = !0, b(i.reservationModel.PickupLocation, "desktop"), L(i.reservationModel.ReturnLocation, "desktop")) : b(i.reservationModel.PickupLocation, "desktop"), $.backFromCars = !0, i.visitedConfirm && ($.backFromConfirm = !0), i.visitedLocations && delete i.visitedLocations)
            })
        }

        function A() {
            $.markers = {}, i.autocompleteCity || ($.markers.center = {
                lng: $.mapCenter.lng,
                lat: $.mapCenter.lat,
                icon: Y
            }), $.locations.forEach(function(e, t, a) {
                S(e, t)
            }), $.currMarker = $.markers[$.locations[0].locationId].data, $.markers[$.currMarker.locationId].icon = $.markers[$.currMarker.locationId].green, $.markers[$.currMarker.locationId].focus = !0, U = $.currMarker.locationId, $.deskMarkers = $.markers
        }

        function N() {
            $.markers = {}, i.autocompleteCity || ($.markers.center = {
                lng: $.mapCenter.lng,
                lat: $.mapCenter.lat,
                icon: Y
            }), $.returnLocations[0] && ($.returnLocations.forEach(function(e, t, a) {
                S(e, t)
            }), $.currMarker = $.markers[$.returnLocations[0].locationId].data, $.markers[$.currMarker.locationId].icon = $.markers[$.currMarker.locationId].green, $.markers[$.currMarker.locationId].focus = !0, U = $.currMarker.locationId, $.deskMarkers = $.markers)
        }

        function S(e, t) {
            var a = t + 1,
                o = e.locationId;
            $.str = "FR" === B ? "Sélectionner" : "Select", $.markers[o] = {}, $.markers[o].lng = e.long, $.markers[o].lat = e.lat, $.markers[o].message = '<span><span class="marker-popup center-block"><h5>{{vm.currMarker.locationName}}</h5><div ng-show="!vm.checkTimeForList(vm.currMarker)" class="yellow visible-xs visible-sm">Closed</div></span><button ng-show="vm.editingLoc" class="btn btn-act-green maxwidth margin-top-5pc hidden-xs hidden-sm" ng-click="markerSelect()">{{vm.str}}</button></span>', $.markers[o].getMessageScope = function() {
                return n
            }, $.markers[o].draggable = !1, $.markers[o].icon = $.markers[o].blue = {
                iconUrl: "app/secondaryPages/locations/markers/Blue/blue-" + a + ".png",
                iconSize: [30, 40],
                popupAnchor: [0, -12]
            }, $.markers[o].green = {
                iconUrl: "app/secondaryPages/locations/markers/Green/green-" + a + ".png",
                iconSize: [40, 50],
                popupAnchor: [0, -15]
            }, $.markers[o].data = e, $.markers[o].popupOptions = {
                closeButton: !1,
                autoPan: !1
            }
        }

        function E() {
            U && ($.markers[U].icon = $.markers[U].blue, $.markers[U].focus = !1), $.markers[$.currMarker.locationId].focus = !0, $.markers[$.currMarker.locationId].icon = $.markers[$.currMarker.locationId].green, U = $.currMarker.locationId, $.mapCenter = {
                lat: $.currMarker.lat,
                lng: $.currMarker.long,
                zoom: 12
            }
        }

        function _() {
            "pickup" === $.branchType ? (b($.currMarker, "desktop"), $.showMap = !$.showMap) : (L($.currMarker, "desktop"), $.showMap = !$.showMap)
        }

        function I() {
            delete i.availableCars, o.GetAvailableCarsWithRate({
                LocationId: i.reservationModel.PickupLocation.locationId,
                ReturnLocationId: i.reservationModel.ReturnLocation.locationId,
                puDate: moment($.pickupDate).format("YYYY/MM/DD"),
                rDate: moment($.returnDate).format("YYYY/MM/DD"),
                pickupTime: moment($.pickupDate).format("H:mm"),
                dropOffTime: moment($.returnDate).format("H:mm"),
                PromotionId: i.reservationModel.PromotionId
            }).then(function(e) {
                var t = 0;
                if (i.getReservation) var o = i.getReservation.vehicleType,
                    n = "";
                e.forEach(function(e) {
                    e.blackout && (o && o === e.vehicleType && (n = !0), t++)
                }), t == e.length || n ? (a.open("limitedCars"), $.freeze = !1) : (i.availableCars = e, r.go("carSelect"))
            }).catch(function(e) {
                a.open("custom", e.data.message), $.freeze = !1
            })
        }

        function O(e) {
            if (!e || i.skippedDateSelect) return !0;
            var t, a, o, r, n;
            return n = $.showReturn ? $.returnDate : $.pickupDate, 0 === moment(n).day() ? (o = e.hourSunOpen.split(":"), r = e.hourSunClose.split(":")) : 6 === moment(n).day() ? (o = e.hourSatOpen.split(":"), r = e.hourSatClose.split(":")) : moment(n).day() < 6 && (o = e.hourMonOpen.split(":"), r = e.hourMonClose.split(":")), e.holidaysInfoList.forEach(function(e) {
                moment(n).isSame(moment(e.date), "day") && (o = e.hourOpen.split(":"), r = e.hourClose.split(":"))
            }), t = moment(n).hours(parseInt(o[0])).minutes(parseInt(o[1])), a = moment(n).hours(parseInt(r[0])).minutes(parseInt(r[1])), moment(n).isBetween(moment(t).subtract(1, "m"), moment(a).add(1, "m"), "minute")
        }
        var $ = this,
            B = i.language;
        $.templateUrl = "FR" === B ? "app/reservation/verify-search/FR/reservation-fr.html" : "app/reservation/verify-search/reservation.html", $.$log = l;
        $.checkBranchDesktop = v, $.hoverBranchIn = g, $.hoverBranchOut = f, $.pickupDate = i.reservationModel.PickupDate, $.returnDate = i.reservationModel.ReturnDate, $.minDate = moment().add(1, "days").format(), $.minReturnDate = $.pickupDate, $.pickupDateChange = h, $.returnDateChange = k, $.timeArray = $.timeArrayReturn = e.getTimeArray(), $.branchSelect = b, $.branchSelectReturn = L, $.findVehicle = d, $.setReturnTime = R, $.setPickupTime = M, $.diffReturn = i.diffLocationReturn, $.promoCode = i.reservationModel.PromotionId, $.editPickup = C, $.editReturn = w, $.editingLoc = !0, $.updateLocations = y, $.validatePromo = p, $.getDistance = m, $.checkTimeForList = O, $.gotoInfo = u, $.showBranchDetails = D, $.mapCenter = {
            lat: 57.335,
            lng: -95.173,
            zoom: 3
        }, $.branchType = "pickup";
        var U = "",
            F = [{}, {}];
        $.clearInput = function() {
            $.pickupAddress = ""
        }, $.formatTimeString = function(e) {
            return moment(e).format("hh:mm a")
        }, $.checkStoreHours = function(e, t) {
            var a, o;
            return a = "00:00" === e ? "Closed" : e, o = "00:00" === t ? "" : " - " + t, a + o
        }, $.markers = {}, $.selectBranchMap = _;
        var Y = {
            iconUrl: "app/reservation/map-view/assets/mapMarkerRound.png",
            iconSize: [40, 40]
        };
        ! function() {
            i.geolocation ? (i.autocompleteCity ? ($.pickupAddress = i.autocompleteCity, $.autocompleteCity = !0, delete i.autocompleteCity) : s.lastSearch.name ? $.pickupAddress = s.lastSearch.name : o.revGeocode().then(function(e) {
                $.pickupAddress = e[0].formatted_address
            }), P(i.geolocation.lat, i.geolocation.lng)) : $.pickupAddress = c.myAddress
        }(), n.markerSelect = function() {
            $.openpanel1 ? L($.currMarker, "desktop") : b($.currMarker, "desktop")
        }, n.$on("leafletDirectiveMarker.click", function(e, t) {
            "center" !== t.modelName && $.editingLoc && ($.currMarker = t.model.data, E())
        }), n.$on("leafletDirectiveMarker.mouseover", function(e, t) {
            "center" !== t.modelName && $.editingLoc && g(t.model.data)
        }), n.$on("leafletDirectiveMarker.mouseout", function(e, t) {
            "center" !== t.modelName && $.editingLoc && f(t.model.data)
        })
    }]), angular.module("secondaryPages").config(["$stateProvider", function(e) {
        e.state("about", {
            url: "/about/:state",
            views: {
                main: {
                    controller: "AboutCtrl",
                    templateUrl: "app/secondaryPages/about/about.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Discount Car & Truck Rentals in the Press"
            }
        }), e.state("about-origin", {
            url: "/about",
            views: {
                main: {
                    controller: "AboutCtrl",
                    templateUrl: "app/secondaryPages/about/about.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "About Us"
            }
        }), e.state("about-fr", {
            url: "/about-fr/:state",
            views: {
                main: {
                    controller: "AboutCtrl",
                    templateUrl: "app/secondaryPages/about/about-fr.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Nous Connaitre"
            }
        }), e.state("about-origin-fr", {
            url: "/about-fr",
            views: {
                main: {
                    controller: "AboutCtrl",
                    templateUrl: "app/secondaryPages/about/about-fr.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Nous Connaitre"
            }
        }), e.state("privacy", {
            url: "/privacy-policy",
            views: {
                main: {
                    templateUrl: "app/secondaryPages/privacy/privacy.html"
                }
            },
            data: {
                pageTitle: "Privacy Policy"
            }
        }), e.state("privacy-fr", {
            url: "/privacy-policy-fr",
            views: {
                main: {
                    templateUrl: "app/secondaryPages/privacy/privacy-fr.html"
                }
            },
            data: {
                pageTitle: "Privacy Policy"
            }
        }), e.state("404", {
            url: "/not-found",
            views: {
                main: {
                    controller: ["$scope", "ServerRequest", "$sessionStorage", "$state", "$stateParams", function(e, t, a, o, r) {
                        t.Save404Page({
                            URL: r.InvalidURL,
                            Referrer: document.referrer
                        }).then(function(e) {})
                    }],
                    templateUrl: "app/secondaryPages/404/not-found.html"
                }
            },
            params: {
                InvalidURL: null
            },
            data: {
                pageTitle: "404"
            }
        }), e.state("404-fr", {
            url: "/not-found-fr",
            views: {
                main: {
                    controller: ["$scope", "ServerRequest", "$sessionStorage", "$state", "$stateParams", function(e, t, a, o, r) {
                        t.Save404Page({
                            URL: r.InvalidURL,
                            Referrer: document.referrer
                        }).then(function(e) {})
                    }],
                    templateUrl: "app/secondaryPages/404/not-found.html"
                }
            },
            params: {
                InvalidURL: null
            },
            data: {
                pageTitle: "404"
            }
        }), e.state("sitemap", {
            url: "/site-map",
            views: {
                main: {
                    controller: ["$scope", "ServerRequest", "$sessionStorage", "$state", function(e, t, a, o) {
                        t.getProvinces().then(function(t) {
                            e.provinces = t
                        }), t.getLocationsList({}).then(function(t) {
                            e.locationsList = t
                        })
                    }],
                    templateUrl: "app/secondaryPages/sitemap/sitemap.html"
                }
            },
            data: {
                pageTitle: "Site Map"
            }
        }), e.state("sitemap-fr", {
            url: "/site-map-fr",
            views: {
                main: {
                    controller: ["$scope", "ServerRequest", "$sessionStorage", "$state", function(e, t, a, o) {
                        t.getProvinces().then(function(t) {
                            e.provinces = t
                        }), t.getLocationsList({}).then(function(t) {
                            e.locationsList = t
                        })
                    }],
                    templateUrl: "app/secondaryPages/sitemap/sitemap-fr.html"
                }
            },
            data: {
                pageTitle: "Site Map"
            }
        })
    }]).controller("AboutCtrl", ["$state", "$uibModal", "ReservationData", "$stateParams", "$sessionStorage", function(e, t, a, o, r) {
        var n = this;
        o.state && -1 == a.aboutSates.indexOf(o.state.toLowerCase()) && ("FR" === r.language ? e.go("404-fr") : e.go("404")), n.openAd = function(e) {
            var a;
            a = e ? '<div class="embed-responsive embed-responsive-16by9"><video controls poster="assets/img/discount_olympics.jpeg"><source src="app/secondaryPages/about/discount_olympics_video.mov" type="video/mp4">Your browser does not support HTML5 video.</video></div>' : '<div class="embed-responsive embed-responsive-16by9"><video controls poster="assets/img/logo_img.png"><source src="app/secondaryPages/about/Discount_Commercial.mp4" type="video/mp4">Your browser does not support HTML5 video.</video></div>';
            t.open({
                template: a,
                size: "lg"
            })
        }, o.state ? "press-video" == o.state ? (n.aboutState = "press", n.openAd(!0)) : n.aboutState = o.state.toLowerCase() : n.aboutState = "overview"
    }]), angular.module("secondaryPages").config(["$stateProvider", function(e) {
        e.state("blog", {
            url: "/blog",
            views: {
                main: {
                    controller: "BlogCtrl",
                    templateUrl: "app/secondaryPages/blog/blog.home.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Blog - Moving Tips, Travel Advice & More"
            }
        }), e.state("blogPost", {
            url: "/blog/:post",
            views: {
                main: {
                    controller: "BlogCtrl",
                    templateUrl: "app/secondaryPages/blog/blog.post.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Blog - Moving Tips, Travel Advice & More"
            }
        }), e.state("blog-fr", {
            url: "/blog-fr",
            views: {
                main: {
                    controller: "BlogCtrl",
                    templateUrl: "app/secondaryPages/blog/blog.home-fr.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Blog - Moving Tips, Travel Advice & More"
            }
        }), e.state("blogPost-fr", {
            url: "/blog-fr/:post",
            views: {
                main: {
                    controller: "BlogCtrl",
                    templateUrl: "app/secondaryPages/blog/blog.post-fr.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Blog - Moving Tips, Travel Advice & More"
            }
        })
    }]).controller("BlogCtrl", ["$state", "$sessionStorage", "$stateParams", "ReservationData", "$scope", function(e, t, a, o, r) {
        var n = this,
            i = t.language.toLowerCase();
        r.$on("heading-updated", function(e, t) {
            n.h1 = t.heading
        }), (a.post || "" == a.post) && (o.blogPosts.indexOf(a.post.toLowerCase()) > -1 ? n.templateUrl = "app/secondaryPages/blog/subpages/" + a.post.toLowerCase() + "-" + i + ".html" : "fr" == i ? e.go("404-fr", {
            InvalidURL: window.location.href
        }) : e.go("404", {
            InvalidURL: window.location.href
        }))
    }]), angular.module("secondaryPages").controller("CanadaDetoursCtrl", ["ServerRequest", "$sessionStorage", "ReservationData", "$scope", "$state", "CanadaDetoursSvc", "$stateParams", function(e, t, a, o, r, n, i) {
        var s = this;
        s.selectedDetour = null, s.chosenDetour = n.getChosenDetour() || null, s.detours = n.detours, s.getDetourPinImage = n.getDetourPinImage, s.getDetourPinType = n.getDetourPinType, s.getDetourByName = n.getDetourByName, s.getDetourBySlug = n.getDetourBySlug, s.extractHostname = n.extractHostname;
        var l = t.language,
            c = "EN" === l;
        s.promotionsRestrictionsURL = function() {
            return c ? "https://www.discountcar.com/promotions/unlimited-freedom" : "https://www.discountcar.com/promotions-fr/unlimited-freedom"
        }, s.isEnglish = function() {
            return "EN" === l
        }, s.isFrench = function() {
            return "FR" === l
        }, s.choseDetour = function(e) {
            return n.choseDetour(e), n.getChosenDetour() ? r.go(c ? "canada-detours" : "canada-detours-" + l.toLowerCase(), {
                chosenDetour: e.slug
            }).then(function() {
                s.chosenDetour = n.getChosenDetour(), s.selectedDetour = n.getChosenDetour()
            }) : (r.go(c ? "canada-detours" : "canada-detours-" + l.toLowerCase(), {
                chosenDetour: ""
            }), void(s.chosenDetour = null))
        }, s.selectDetour = function(e) {
            s.selectedDetour = e
        }, s.selectMarker = function(e) {
            o.center.lng = e.longitude, o.center.lat = e.latitude
        }, s.scrollUp = function() {
            $("body").animate({
                scrollTop: 410
            })
        }, s.init = function() {
            s.chosenDetour = null;
            var e = s.getDetourBySlug(i.chosenDetour);
            e ? s.choseDetour(e).then(function() {
                o.center = {
                    lat: s.chosenDetour ? s.chosenDetour.latitude + s.chosenDetour.mapLatOffset : null,
                    lng: s.chosenDetour ? s.chosenDetour.longitude + s.chosenDetour.mapLgnOffset : null,
                    zoom: s.chosenDetour ? s.chosenDetour.mapZoom : null
                }
            }) : r.go(c ? "canada-detours" : "canada-detours-" + l.toLowerCase(), {
                chosenDetour: ""
            })
        }, s.init()
    }]), angular.module("secondaryPages").factory("CanadaDetoursSvc", function() {
        var e = [{
                id: 1,
                name: "DET-1-DETOUR-NAME",
                googleMapsLink: "https://maps.google.com",
                slug: "algonquin-park",
                latitude: 45.5539737,
                longitude: -78.5989487,
                mapZoom: 7,
                mapLatOffset: -.2,
                mapLgnOffset: 0,
                gems: [{
                    id: 1,
                    name: "DET-1-1-GEM-NAME",
                    image: "Algonquin-Webers.jpg",
                    category: "orange - plate",
                    copy: "1-1-GEM-COPY",
                    latitude: 44.694026,
                    longitude: -79.398366,
                    website: "http://www.webers.com/",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Restaurant_Review-g182145-d1504858-Reviews-Webers_Charcoal_Barbecued_Hamburgers-Orillia_Ontario.html",
                    tripAdvisorRating: 3.5,
                    yelpLink: "https://www.yelp.ca/biz/webers-orillia",
                    yelpRating: 3.5
                }, {
                    id: 2,
                    name: "DET-1-2-GEM-NAME",
                    image: "Algonquin-BarronCanyon.jpg",
                    category: "yellow - sun",
                    copy: "1-2-GEM-COPY",
                    latitude: 45.888356,
                    longitude: -77.578732,
                    website: "http://www.algonquinpark.on.ca/visit/recreational_activites/barron-canyon-trail.php",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g319818-d4751326-Reviews-Barron_Canyon_Trail-Algonquin_Provincial_Park_Ontario.html",
                    tripAdvisorRating: 4.5,
                    yelpLink: "https://www.yelp.ca/biz/algonquin-provincial-park-whitney-2",
                    yelpRating: 5
                }, {
                    id: 3,
                    name: "DET-1-3-GEM-NAME",
                    image: "Algonquin-LoggingMuseum.jpg",
                    category: "green - trees",
                    copy: "1-3-GEM-COPY",
                    latitude: 45.544765,
                    longitude: -78.262717,
                    website: "http://www.algonquinpark.on.ca/visit/locations/algonquin-logging-museum.php",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g319818-d4269066-Reviews-Algonquin_Logging_Museum-Algonquin_Provincial_Park_Ontario.html",
                    tripAdvisorRating: 4.5,
                    yelpLink: "https://www.yelp.ca/biz/algonquin-provincial-park-whitney-2",
                    yelpRating: 5
                }]
            }, {
                id: 2,
                name: "DET-2-DETOUR-NAME",
                googleMapsLink: "https://maps.google.com",
                slug: "banff-national-park",
                latitude: 51.6548345,
                longitude: -117.458709,
                mapZoom: 8,
                mapLatOffset: -.1,
                mapLgnOffset: .5,
                gems: [{
                    id: 1,
                    name: "DET-2-1-GEM-NAME",
                    image: "Banff-JohnstonCanyonistock117205293.jpg",
                    category: "red - tent",
                    copy: "2-1-GEM-COPY",
                    latitude: 51.268287,
                    longitude: -115.727615,
                    website: "http://banff.ca/index.aspx?NID=648",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g154910-d187024-Reviews-Johnston_Canyon-Banff_National_Park_Alberta.html",
                    tripAdvisorRating: 4.5,
                    yelpLink: "https://www.yelp.ca/biz/johnston-canyon-banff",
                    yelpRating: 5
                }, {
                    id: 2,
                    name: "DET-2-2-GEM-NAME",
                    image: "Banff-Cave_Basinistock503263205.jpg",
                    category: "purple - camera",
                    copy: "2-2-GEM-COPY",
                    latitude: 51.168977,
                    longitude: -115.590521,
                    website: "http://banff.ca/index.aspx?NID=659",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g154911-d311286-Reviews-Cave_and_Basin_National_Historic_Site-Banff_Banff_National_Park_Alberta.html",
                    tripAdvisorRating: 4,
                    yelpLink: "https://www.yelp.ca/biz/cave-and-basin-national-historical-site-banff",
                    yelpRating: 4
                }, {
                    id: 3,
                    name: "DET-2-3-GEM-NAME",
                    image: "Banff-TunnelMountainistock612629878.jpg",
                    category: "green - trees",
                    copy: "2-3-GEM-COPY",
                    latitude: 51.176868,
                    longitude: -115.554167,
                    website: "http://banff.ca/index.aspx?NID=653",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g154911-d3443726-Reviews-Tunnel_Mountain_Trail-Banff_Banff_National_Park_Alberta.html",
                    tripAdvisorRating: 4.5,
                    yelpLink: "https://www.yelp.ca/biz/tunnel-mountain-banff",
                    yelpRating: 4.5
                }]
            }, {
                id: 3,
                name: "DET-3-DETOUR-NAME",
                googleMapsLink: "https://maps.google.com",
                slug: "drumbeller-dinosaur-valley",
                latitude: 51.4048562,
                longitude: -112.6995799,
                mapZoom: 6,
                mapLatOffset: 1.8,
                mapLgnOffset: -.02,
                gems: [{
                    id: 1,
                    name: "DET-3-1-GEM-NAME",
                    image: "Drumheller-RoyalTyrellMuseum.jpg",
                    category: "purple - camera",
                    copy: "3-1-GEM-COPY",
                    latitude: 51.47925,
                    longitude: -112.789599,
                    website: "http://www.tyrrellmuseum.com/",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g181805-d538043-Reviews-Royal_Tyrrell_Museum-Drumheller_Alberta.html",
                    tripAdvisorRating: 5,
                    yelpLink: "https://www.yelp.ca/biz/royal-tyrrell-museum-drumheller",
                    yelpRating: 4.5
                }, {
                    id: 2,
                    name: "DET-3-2-GEM-NAME",
                    image: "Drumheller-Hoodoos.jpg",
                    category: "green - trees",
                    copy: "3-2-GEM-COPY",
                    latitude: 51.3806,
                    longitude: -112.533876,
                    website: "http://traveldrumheller.com/hiking-in-the-badlands/",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g181805-d3333107-Reviews-Hoodoos-Drumheller_Alberta.html",
                    tripAdvisorRating: 4.5,
                    yelpLink: "https://www.yelp.ca/biz/town-of-drumheller-drumheller-2",
                    yelpRating: 4.5
                }, {
                    id: 3,
                    name: "DET-3-3-GEM-NAME",
                    image: "Drumheller-ElkIsland.jpg",
                    category: "red - tent",
                    copy: "3-3-GEM-COPY",
                    latitude: 53.583313,
                    longitude: -112.835888,
                    website: "https://www.travelalberta.com/ca/places-to-go/national-parks/elk-island-national-park/",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g154914-d531685-Reviews-Elk_Island_National_Park-Edmonton_Alberta.html",
                    tripAdvisorRating: 4.5,
                    yelpLink: "https://www.yelp.ca/biz/elk-island-national-park-fort-saskatchewan-2",
                    yelpRating: 4.5
                }]
            }, {
                id: 4,
                name: "DET-4-DETOUR-NAME",
                googleMapsLink: "https://maps.google.com",
                slug: "granville-island",
                latitude: 49.2706255,
                longitude: -123.1369297,
                mapZoom: 11,
                mapLatOffset: .05,
                mapLgnOffset: 0,
                gems: [{
                    id: 1,
                    name: "DET-4-1-GEM-NAME",
                    image: "GranvilleIsland-PublicMarketistock157733117.jpg",
                    category: "orange - plate",
                    copy: "4-1-GEM-COPY",
                    latitude: 49.272296,
                    longitude: -123.134622,
                    website: "http://granvilleisland.com/public-market",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g154943-d282447-Reviews-Granville_Island_Public_Market-Vancouver_British_Columbia.html",
                    tripAdvisorRating: 4.5,
                    yelpLink: "https://www.yelp.ca/biz/granville-island-public-market-vancouver",
                    yelpRating: 4.5
                }, {
                    id: 2,
                    name: "DET-4-2-GEM-NAME",
                    image: "GranvilleIsland-GrouseMountain.jpg",
                    category: "green - trees",
                    copy: "4-2-GEM-COPY",
                    latitude: 49.372296,
                    longitude: -123.099165,
                    website: "https://www.grousemountain.com/wildlife-refuge/breakfast-w-the-bears",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g181717-d156264-Reviews-Grouse_Mountain-North_Vancouver_British_Columbia.html",
                    tripAdvisorRating: 4.5,
                    yelpLink: "https://www.yelp.ca/biz/grouse-mountain-north-vancouver",
                    yelpRating: 4
                }, {
                    id: 3,
                    name: "DET-4-3-GEM-NAME",
                    image: "GranvilleIsland-KitsilanoBeachistock482629274.jpg",
                    category: "yellow - sun",
                    copy: "4-3-GEM-COPY",
                    latitude: 49.274075,
                    longitude: -123.155388,
                    website: "http://vancouver.ca/parks-recreation-culture/kitsilano-beach.aspx",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g154943-d184627-Reviews-Kitsilano_Beach-Vancouver_British_Columbia.html",
                    tripAdvisorRating: 4.5,
                    yelpLink: "https://www.yelp.ca/biz/kitsilano-beach-park-vancouver",
                    yelpRating: 4
                }]
            }, {
                id: 5,
                name: "DET-5-DETOUR-NAME",
                googleMapsLink: "https://maps.google.com",
                slug: "gros-morne-national-park",
                latitude: 49.619096,
                longitude: -57.7711429,
                mapZoom: 10,
                mapLatOffset: .045,
                mapLgnOffset: -.14,
                gems: [{
                    id: 1,
                    name: "DET-5-1-GEM-NAME",
                    image: "GrosMorne-LobsterCoverLighthouseistock177123266.jpg",
                    category: "purple - camera",
                    copy: "5-1-GEM-COPY",
                    latitude: 49.603125,
                    longitude: -57.955747,
                    website: "http://www.newfoundlandlabrador.com/PlanYourTrip/Detail/28790549",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g499205-d298746-Reviews-Lobster_Cove_Head_Lighthouse-Rocky_Harbour_Gros_Morne_National_Park_Newfoundland_N.html",
                    tripAdvisorRating: 4.5,
                    yelpLink: "https://www.yelp.ca/biz/lobster-cove-head-lighthouse-rocky-harbour",
                    yelpRating: 4
                }, {
                    id: 2,
                    name: "DET-5-2-GEM-NAME",
                    image: "GrosMorne-SSEthie.jpg",
                    category: "blue - boat",
                    copy: "5-2-GEM-COPY",
                    latitude: 49.768792,
                    longitude: -57.911627,
                    website: "http://www.railwaycoastalmuseum.ca/ethie.htm",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g580445-d6793179-Reviews-Wreck_of_the_S_S_Ethie-Gros_Morne_National_Park_Newfoundland_Newfoundland_and_Lab.html",
                    tripAdvisorRating: 4,
                    yelpLink: "https://www.yelp.ca/biz/gros-morne-national-park-norris-point-2",
                    yelpRating: 5
                }, {
                    id: 3,
                    name: "DET-5-3-GEM-NAME",
                    image: "GrosMorne-GalliottStudios.jpg",
                    category: "orange - plate",
                    copy: "5-3-GEM-COPY",
                    latitude: 49.500571,
                    longitude: -57.913075,
                    website: "http://galliottstudios.blogspot.ca/",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g1954790-d6027014-Reviews-Galliott_Studios-Bonne_Bay_Gros_Morne_National_Park_Newfoundland_Newfoundland_an.html",
                    tripAdvisorRating: 5,
                    yelpLink: "",
                    yelpRating: null
                }]
            }, {
                id: 6,
                name: "DET-6-DETOUR-NAME",
                googleMapsLink: "https://maps.google.com",
                slug: "the-grotto-tobermory",
                latitude: 45.2308733,
                longitude: -81.5316802,
                mapZoom: 11,
                mapLatOffset: .06,
                mapLgnOffset: -.17,
                gems: [{
                    id: 1,
                    name: "DET-6-1-GEM-NAME",
                    image: "Toberymory-Flowerpotislandistock527664982.jpg.jpg",
                    category: "green - trees",
                    copy: "6-1-GEM-COPY",
                    latitude: 45.305328,
                    longitude: -81.615888,
                    website: "http://flowerpotisland.ca/",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g670005-d3171273-Reviews-Flowerpot_Island-Tobermory_Bruce_County_Ontario.html",
                    tripAdvisorRating: 4.5,
                    yelpLink: "https://www.yelp.ca/biz/flowerpot-island-bruce-county",
                    yelpRating: 4
                }, {
                    id: 2,
                    name: "DET-6-2-GEM-NAME",
                    image: "Tobermory-FathomFiveMarinePark.jpg",
                    category: "blue - boat",
                    copy: "6-2-GEM-COPY",
                    latitude: 45.284346,
                    longitude: -81.727645,
                    website: "http://www.pc.gc.ca/en/amnc-nmca/on/fathomfive/index",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g670005-d612686-Reviews-Fathom_Five_National_Marine_Park-Tobermory_Bruce_County_Ontario.html",
                    tripAdvisorRating: 4.5,
                    yelpLink: "https://www.yelp.ca/biz/bruce-peninsula-national-park-miller-lake",
                    yelpRating: 4.5
                }, {
                    id: 3,
                    name: "DET-6-3-GEM-NAME",
                    image: "Tobermory-ShipwreckLee.jpg",
                    category: "orange - plate",
                    copy: "6-3-GEM-COPY",
                    latitude: 45.254672,
                    longitude: -81.665301,
                    website: "https://www.facebook.com/ShipwrecksPirateBistro/",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Restaurant_Review-g670005-d769678-Reviews-Shipwreck_Lee_s_Of_Tobermory-Tobermory_Bruce_County_Ontario.html",
                    tripAdvisorRating: 4,
                    yelpLink: "https://www.yelp.ca/biz/shipwreck-lees-tobermory",
                    yelpRating: 3.5
                }]
            }, {
                id: 7,
                name: "DET-7-DETOUR-NAME",
                googleMapsLink: "https://maps.google.com",
                slug: "hopewell-rock",
                latitude: 45.8200935,
                longitude: -64.5769283,
                mapZoom: 8,
                mapLatOffset: -.23,
                mapLgnOffset: -.19,
                gems: [{
                    id: 1,
                    name: "DET-7-1-GEM-NAME",
                    image: "HopewellRock-LavertyFalls.jpg",
                    category: "blue - boat",
                    copy: "7-1-GEM-COPY",
                    latitude: 45.67709,
                    longitude: -65.011621,
                    website: "http://www.tourismnewbrunswick.ca/Products/Parks/Fundy-National-Park.aspx",
                    tripAdvisorLink: "https://www.tripadvisor.ca/ShowUserReviews-g499173-d183716-r133074113-Fundy_National_Park-Alma_Albert_County_New_Brunswick.html",
                    tripAdvisorRating: 4,
                    yelpLink: "https://www.yelp.ca/biz/fundy-national-park-alma",
                    yelpRating: 5
                }, {
                    id: 2,
                    name: "DET-7-2-GEM-NAME",
                    image: "HopewellRock-StMartinSeaCaves.jpg",
                    category: "purple - camera",
                    copy: "7-2-GEM-COPY",
                    latitude: 45.357612,
                    longitude: -65.522611,
                    website: "http://www.stmartinscanada.com/attractions-events/st-martins-sea-caves/",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g499184-d2315517-Reviews-St_Martins_Sea_Caves-St_Martins_New_Brunswick.html",
                    tripAdvisorRating: 4.5,
                    yelpLink: "https://www.yelp.ca/biz/sea-caves-st-martins",
                    yelpRating: 5
                }, {
                    id: 3,
                    name: "DET-7-3-GEM-NAME",
                    image: "HopewellRock-HallsHarbour.jpg",
                    category: "orange - plate",
                    copy: "7-3-GEM-COPY",
                    latitude: 45.201166,
                    longitude: -64.620209,
                    website: "https://www.hallsharbourlobster.com/",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Restaurant_Review-g499229-d704781-Reviews-Hall_s_Harbour_Lobster_Pound_Restaurant-Kentville_Southwest_Nova_Scotia_Nova_Scoti.html",
                    tripAdvisorRating: 4,
                    yelpLink: "https://www.yelp.ca/biz/halls-harbour-lobster-pound-kings",
                    yelpRating: 3.5
                }]
            }, {
                id: 8,
                name: "DET-8-DETOUR-NAME",
                googleMapsLink: "https://maps.google.com",
                slug: "niagara-falls",
                latitude: 43.0802145,
                longitude: -79.0761883,
                mapZoom: 11,
                mapLatOffset: .08,
                mapLgnOffset: -.1,
                gems: [{
                    id: 1,
                    name: "DET-8-1-GEM-NAME",
                    image: "NiagaraFalls-BirdKingdom.jpg",
                    category: "purple - camera",
                    copy: "8-1-GEM-COPY",
                    latitude: 43.092577,
                    longitude: -79.068441,
                    website: "http://www.birdkingdom.ca/",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g154998-d586713-Reviews-Bird_Kingdom-Niagara_Falls_Ontario.html",
                    tripAdvisorRating: 4.5,
                    yelpLink: "https://www.yelp.ca/biz/bird-kingdom-niagara-falls",
                    yelpRating: 4
                }, {
                    id: 2,
                    name: "DET-8-2-GEM-NAME",
                    image: "NiagaraFalls-WhiteWaterwalk.jpg",
                    category: "yellow - sun",
                    copy: "8-2-GEM-COPY",
                    latitude: 43.111096,
                    longitude: -79.060455,
                    website: "https://www.niagaraparks.com/niagara-falls-attractions/white-water-walk.html",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g154998-d507148-Reviews-White_Water_Walk-Niagara_Falls_Ontario.html",
                    tripAdvisorRating: 4.5,
                    yelpLink: "https://www.yelp.ca/biz/white-water-walk-niagara-falls",
                    yelpRating: 3.5
                }, {
                    id: 3,
                    name: "DET-8-3-GEM-NAME",
                    image: "Niagara-Neob.jpg",
                    category: "green - trees",
                    copy: "8-3-GEM-COPY",
                    latitude: 43.195746,
                    longitude: -79.157964,
                    website: "https://neoblavender.com",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g154999-d2486803-Reviews-NEOB_Lavender_Niagara_Essential_Oils_Blends-Niagara_on_the_Lake_Ontario.html",
                    tripAdvisorRating: 4.5,
                    yelpLink: "https://www.yelp.ca/biz/neob-lavender-niagara-on-the-lake",
                    yelpRating: 5
                }]
            }, {
                id: 9,
                name: "DET-9-DETOUR-NAME",
                googleMapsLink: "https://maps.google.com",
                slug: "peggys-cove",
                latitude: 44.4946454,
                longitude: -63.9162786,
                mapZoom: 10,
                mapLatOffset: .08,
                mapLgnOffset: 0,
                gems: [{
                    id: 1,
                    name: "DET-9-1-GEM-NAME",
                    image: "PeggysCove-MaritimeMuseum.jpg",
                    category: "purple - camera",
                    copy: "9-1-GEM-COPY",
                    latitude: 44.649223,
                    longitude: -63.571002,
                    website: "https://maritimemuseum.novascotia.ca/",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g154976-d155414-Reviews-Maritime_Museum_of_the_Atlantic-Halifax_Halifax_Region_Nova_Scotia.html",
                    tripAdvisorRating: 4.5,
                    yelpLink: "https://www.yelp.ca/biz/maritime-museum-of-the-atlantic-halifax",
                    yelpRating: 4.5
                }, {
                    id: 2,
                    name: "DET-9-2-GEM-NAME",
                    image: "PeggysCove-Swissair111Memorialistock496948614.jpg",
                    category: "green - trees",
                    copy: "9-2-GEM-COPY",
                    latitude: 44.499728,
                    longitude: -64.068423,
                    website: "http://www.novascotia.com/see-do/attractions/swissair-memorial-site-peggys-cove/1636",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g780595-d8681619-Reviews-Swissair_Flight_111_Memorial-Peggy_s_Cove_Halifax_Region_Nova_Scotia.html",
                    tripAdvisorRating: 4.5,
                    yelpLink: "https://www.yelp.ca/biz/swissair-flight-111-memorial-west-dover",
                    yelpRating: 5
                }, {
                    id: 3,
                    name: "DET-9-3-GEM-NAME",
                    image: "PeggysCove-SouWester.jpg",
                    category: "orange - plate",
                    copy: "9-3-GEM-COPY",
                    latitude: 44.492371,
                    longitude: -63.917119,
                    website: "http://www.peggys-cove.com/",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Restaurant_Review-g780595-d981568-Reviews-Sou_Wester_Gift_Restaurant-Peggy_s_Cove_Halifax_Region_Nova_Scotia.html",
                    tripAdvisorRating: 4,
                    yelpLink: "https://www.yelp.ca/biz/the-souwester-restaurant-and-gift-shop-halifax",
                    yelpRating: 3.5
                }]
            }, {
                id: 10,
                name: "DET-10-DETOUR-NAME",
                googleMapsLink: "https://maps.google.com",
                slug: "stanley-park",
                latitude: 49.3017084,
                longitude: -123.143889,
                mapZoom: 12,
                mapLatOffset: .03,
                mapLgnOffset: 0,
                gems: [{
                    id: 1,
                    name: "DET-10-1-GEM-NAME",
                    image: "StanleyPark-Seawallistock508515130.jpg",
                    category: "green - trees",
                    copy: "10-1-GEM-COPY",
                    latitude: 49.296173,
                    longitude: -123.127432,
                    website: "http://vancouver.ca/parks-recreation-culture/seawall.aspx",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g154943-d3858597-Reviews-Seawall_in_Vancouver-Vancouver_British_Columbia.html",
                    tripAdvisorRating: 5,
                    yelpLink: "https://www.yelp.ca/biz/vancouver-seawall-vancouver",
                    yelpRating: 5
                }, {
                    id: 2,
                    name: "DET-10-2-GEM-NAME",
                    image: "StanleyPark-TotemPoleistock184298761.jpg",
                    category: "purple - camera",
                    copy: "10-2-GEM-COPY",
                    latitude: 49.299335,
                    longitude: -123.118549,
                    website: "http://vancouver.ca/parks-recreation-culture/totems-and-first-nations-art.aspx",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g154943-d1500981-Reviews-Brockton_Point_Totem_Pole-Vancouver_British_Columbia.html",
                    tripAdvisorRating: 4.5,
                    yelpLink: "https://www.yelp.ca/biz/stanley-park-vancouver",
                    yelpRating: 5
                }, {
                    id: 3,
                    name: "DET-10-3-GEM-NAME",
                    image: "StanleyPark-CapilanoSuspensionBridge.jpg",
                    category: "blue - boat",
                    copy: "10-3-GEM-COPY",
                    latitude: 49.342962,
                    longitude: -123.11441,
                    website: "https://www.capbridge.com/",
                    tripAdvisorLink: "https://www.tripadvisor.ca/Attraction_Review-g181717-d156257-Reviews-Capilano_Suspension_Bridge_Park-North_Vancouver_British_Columbia.html",
                    tripAdvisorRating: 4.5,
                    yelpLink: "https://www.yelp.ca/biz/capilano-suspension-bridge-park-north-vancouver",
                    yelpRating: 4
                }]
            }],
            t = [{
                name: "red - tent",
                image: "06-red_tent.png",
                pinType: "DET-CAT-CAMPING"
            }, {
                name: "orange - plate",
                image: "05-orange_plate.png",
                pinType: "DET-CAT-RESTAURANT"
            }, {
                name: "yellow - sun",
                image: "04-yellow_sun.png",
                pinType: "DET-CAT-WALKING"
            }, {
                name: "green - trees",
                image: "03-green_trees.png",
                pinType: "DET-CAT-PARK"
            }, {
                name: "purple - camera",
                image: "02-purple_camera.png",
                pinType: "DET-CAT-ATTRACTION"
            }, {
                name: "blue - boat",
                image: "01-blue_boat.png",
                pinType: "DET-CAT-MARINE"
            }],
            a = null;
        return {
            detours: e,
            detourPins: t,
            getDetourPinImage: function(e) {
                return t.find(function(t) {
                    return t.name === e
                }).image
            },
            getDetourByName: function(t) {
                return e.find(function(e) {
                    return e.name === t
                })
            },
            getDetourBySlug: function(t) {
                return e.find(function(e) {
                    return e.slug === t
                })
            },
            getDetourPinType: function(e) {
                return t.find(function(t) {
                    return t.name === e
                }).pinType
            },
            extractHostname: function(e) {
                return e.indexOf("://") > -1 ? e.split("/")[2] : e.split("/")[0]
            },
            choseDetour: function(e) {
                a = e
            },
            getChosenDetour: function() {
                return a || null
            }
        }
    }), angular.module("secondaryPages").config(["$stateProvider", function(e) {
        e.state("canada-detours", {
            url: "/canada-detours/:chosenDetour",
            views: {
                main: {
                    controller: "CanadaDetoursCtrl",
                    templateUrl: "app/secondaryPages/canada-detours/canada-detours.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Canada's 150th"
            }
        }), e.state("canada-detours-fr", {
            url: "/canada-detours-fr/:chosenDetour",
            views: {
                main: {
                    controller: "CanadaDetoursCtrl",
                    templateUrl: "app/secondaryPages/canada-detours/canada-detours.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Canada's 150th"
            }
        })
    }]), angular.module("secondaryPages").controller("SimpleMapController", ["$scope", "leafletMarkerEvents", "CanadaDetoursSvc", function(e, t, a) {
        var o = this,
            r = {
                default_icon: {},
                red_icon: {
                    iconUrl: "/assets/img/06-red_tent.png",
                    iconSize: [30, 48],
                    iconAnchor: [15, 48]
                },
                orange_icon: {
                    iconUrl: "/assets/img/05-orange_plate.png",
                    iconSize: [30, 48],
                    iconAnchor: [15, 48]
                },
                yellow_icon: {
                    iconUrl: "/assets/img/04-yellow_sun.png",
                    iconSize: [30, 48],
                    iconAnchor: [15, 48]
                },
                green_icon: {
                    iconUrl: "/assets/img/03-green_trees.png",
                    iconSize: [30, 48],
                    iconAnchor: [15, 48]
                },
                purple_icon: {
                    iconUrl: "/assets/img/02-purple_camera.png",
                    iconSize: [30, 48],
                    iconAnchor: [15, 48]
                },
                blue_icon: {
                    iconUrl: "/assets/img/01-blue_boat.png",
                    iconSize: [30, 48],
                    iconAnchor: [15, 48]
                },
                national_treasure_icon: {
                    iconUrl: "/assets/img/National_Treasure.png",
                    iconSize: [30, 48],
                    iconAnchor: [15, 48]
                }
            };
        angular.extend(e, {
            icons: r
        });
        var n = function(e) {
            switch (e) {
                case "red - tent":
                    return r.red_icon;
                case "orange - plate":
                    return r.orange_icon;
                case "yellow - sun":
                    return r.yellow_icon;
                case "green - trees":
                    return r.green_icon;
                case "purple - camera":
                    return r.purple_icon;
                case "blue - boat":
                    return r.blue_icon
            }
        };
        if (a) {
            var i = a.getChosenDetour();
            if (i) var s = i.gems[0],
                l = i.gems[1],
                c = i.gems[2];
            e.markers = {
                gem1: {
                    focus: !1,
                    lat: s.latitude,
                    lng: s.longitude,
                    icon: n(s.category),
                    zIndexOffset: 0
                },
                gem2: {
                    focus: !1,
                    lat: l.latitude,
                    lng: l.longitude,
                    icon: n(l.category),
                    zIndexOffset: 0
                },
                gem3: {
                    focus: !1,
                    lat: c.latitude,
                    lng: c.longitude,
                    icon: n(c.category),
                    zIndexOffset: 0
                },
                landmark: {
                    focus: !0,
                    lat: i.latitude,
                    lng: i.longitude,
                    icon: r.national_treasure_icon,
                    zIndexOffset: 1e3
                }
            }, o.setMarkerOnTop = function(t) {
                e.markers[t].zIndexOffset = 1e3, Object.keys(e.markers).filter(function(e) {
                    return e !== t
                }).forEach(function(t) {
                    e.markers[t].zIndexOffset = 0
                })
            };
            var u = i.latitude + i.mapLatOffset,
                m = i.longitude + i.mapLgnOffset;
            o.adjustZoom = function() {
                angular.extend(e, {
                    center: {
                        lat: u,
                        lng: m,
                        zoom: i.mapZoom
                    }
                })
            }, e.defaults = {
                scrollWheelZoom: !1
            }
        }
        e.events = {
            markers: {
                enable: t.getAvailableEvents()
            }
        }, e.eventDetected = "No events yet...";
        var d = t.getAvailableEvents();
        for (var p in d) {
            var g = "leafletDirectiveMarker." + d[p];
            e.$on(g, function(e, t) {})
        }
    }]), angular.module("secondaryPages").controller("CanadaDetoursResConfCtrl", ["ServerRequest", "$sessionStorage", "ReservationData", "$scope", "$state", "CanadaDetoursSvc", "$stateParams", function(e, t, a, o, r, n, i) {
        var s = this;
        s.what = "confirm!", s.selectedDetour = null, s.detours = n.detours, s.getDetourPinImage = n.getDetourPinImage, s.getDetourPinType = n.getDetourPinType, s.getDetourByName = n.getDetourByName, s.getDetourBySlug = n.getDetourBySlug;
        var l = t.language,
            c = "EN" === l;
        s.promotionsRestrictionsURL = function() {
            return c ? "https://www.discountcar.com/promotions/unlimited-freedom" : "https://www.discountcar.com/promotions-fr/unlimited-freedom"
        }, s.choseDetour = function(e) {
            return n.choseDetour(e), r.go(c ? "canada-detours" : "canada-detours-" + l.toLowerCase(), {
                chosenDetour: e.slug
            })
        }, s.selectDetour = function(e) {
            s.selectedDetour = e
        }
    }]), angular.module("secondaryPages").config(["$stateProvider", function(e) {
        e.state("contact", {
            url: "/contact",
            views: {
                main: {
                    controller: "ContactCtrl",
                    templateUrl: "app/secondaryPages/contact/contact.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Contact Us"
            }
        }), e.state("contact-fr", {
            url: "/contact-fr",
            views: {
                main: {
                    controller: "ContactCtrl",
                    templateUrl: "app/secondaryPages/contact/contact-fr.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Contact Us"
            }
        })
    }]).controller("ContactCtrl", ["ServerRequest", "$sessionStorage", "ReservationData", "$scope", function(e, t, a, o) {
        var r = this;
        o.$on("heading-updated", function(e, t) {
            r.h1 = t.heading, r.h2 = t.subHeading
        }), r.sendForm = function(t) {
            r.errors = {}, t ? e.contactForm({
                FirstName: r.firstName,
                LastName: r.lastName,
                Email: r.email,
                Comment: r.comment,
                PhoneNumber: r.phone
            }).then(function(e) {
                r.formSuccess = !0, r.firstName = "", r.lastName = "", r.phone = "", r.email = "", r.comment = ""
            }).catch(function(e) {}) : (r.firstName || (r.errors.firstName = 1), r.lastName || (r.errors.lastName = 1), r.comment || (r.errors.comment = 1), a.validateEmail(r.email) || (r.errors.email = 1))
        }
    }]), angular.module("secondaryPages").config(["$stateProvider", function(e) {
        e.state("fleet", {
            url: "/fleet/:carType/:carClass",
            views: {
                main: {
                    controller: "TrucksCtrl",
                    templateUrl: "app/secondaryPages/fleet/trucksVans/trucks.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Our selection of car and truck rental"
            }
        }), e.state("fleet-fr", {
            url: "/fleet-fr/:carType/:carClass",
            views: {
                main: {
                    controller: "TrucksCtrl",
                    templateUrl: "app/secondaryPages/fleet/trucksVans/trucks-fr.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Notre sélection de voitures et de location de camions"
            }
        })
    }]).controller("TrucksCtrl", ["ServerRequest", "$filter", "$anchorScroll", "$state", "ReservationData", "$stateParams", "$sessionStorage", "$scope", function(e, t, a, o, r, n, i, s) {
        function l(e) {
            switch (e) {
                case "isMoving":
                    p.filteredCars = t("filter")(p.allCars, {
                        isMoving: "Yes"
                    });
                    break;
                case "isCamping":
                    p.filteredCars = t("filter")(p.allCars, {
                        isCamping: "Yes"
                    });
                    break;
                case "isRoadtrip":
                    p.filteredCars = t("filter")(p.allCars, {
                        isRoadTrip: "Yes"
                    });
                    break;
                default:
                    p.filteredCars = p.allCars
            }
        }

        function c(e) {
            p.currentCar = e, p.carInfo = !0, a()
        }

        function u(e) {
            i.skippedDateSelect = !0, i.geolocation = null, i.reservationModel = {}, i.reserveVehicleType = e.vehicleType, i.reserveVehicleClass = e.vehicleClassType, i.reservationModel.PickupDate = moment().add(1, "d").hours(9).minutes(30).format(), i.reservationModel.ReturnDate = moment().add(2, "d").hours(9).minutes(30).format(), o.go("reservation")
        }

        function m(e) {
            p.reverse = p.predicate === e && !p.reverse, p.predicate = e
        }

        function d() {
            var e, t;
            p.allCars.forEach(function(a) {
                (e = a.vehicleClassType.replace(/\s+|\//g, "-").toLowerCase()) === g && (t = !0, c(a))
            }), t || ("FR" === i.language ? o.go("404-fr") : o.go("404"))
        }
        var p = this;
        if (n.carType && -1 == r.carType.indexOf(n.carType.toLowerCase()) && ("FR" === i.language ? o.go("404-fr") : o.go("404")), p.fleetType = n.carType.toLowerCase(), s.$on("heading-updated", function(e, t) {
                p.h1 = t.heading, p.h2 = t.subHeading
            }), n.carClass) var g = n.carClass.toLowerCase();
        p.filter = "", p.viewMode = 0, p.carModel = 0, p.predicate = "numberOfAdults", "FR" === i.language ? p.vehicleUse = "Tous" : p.vehicleUse = "All", i.reserveCarType = "", p.reverse = !0, p.locations = r.branchLocations, p.order = m, p.reserve = u, p.getCarInfo = c, p.filterBy = l, p.getCarClass = function(e) {
                return e.replace(/\s+|\//g, "-").toLowerCase()
            }, p.getCarType = function(e) {
                return "Car" == e ? "cars" : "trucks"
            },
            function() {
                e.getAllCars().then(function(e) {
                    p.allCars = p.filteredCars = e, g && d(), "cars" === p.fleetType ? (p.filter = "Car", p.carModel = 4) : "trucks" === p.fleetType && (p.filter = "Truck", p.carModel = 5)
                }).catch(function(e) {})
            }()
    }]), angular.module("secondaryPages").config(["$stateProvider", function(e) {
        e.state("business", {
            url: "/for-business",
            views: {
                main: {
                    controller: "BusCtrl",
                    controllerAs: "vm",
                    templateUrl: "app/secondaryPages/forbusiness/business.html"
                }
            },
            data: {
                pageTitle: "Corporate Car and Truck Rentals"
            }
        }), e.state("business-industry", {
            url: "/for-business/:industry",
            views: {
                main: {
                    controller: "BusCtrl",
                    templateUrl: "app/secondaryPages/forbusiness/business-industry.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Corporate Car and Truck Rentals"
            }
        }), e.state("business-fr", {
            url: "/for-business-fr",
            views: {
                main: {
                    controller: "BusCtrl",
                    controllerAs: "vm",
                    templateUrl: "app/secondaryPages/forbusiness/business-fr.html"
                }
            },
            data: {
                pageTitle: "Corporate Car and Truck Rentals"
            }
        }), e.state("business-industry-fr", {
            url: "/for-business-fr/:industry",
            views: {
                main: {
                    controller: "BusCtrl",
                    templateUrl: "app/secondaryPages/forbusiness/industry-fr.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Corporate Car and Truck Rentals"
            }
        })
    }]).controller("BusCtrl", ["ServerRequest", "$stateParams", "$scope", "$state", "ReservationData", "$sessionStorage", function(e, t, a, o, r, n) {
        function i() {
            s.firstName = s.lastName = s.comment = s.email = s.phone = s.companyName = s.firstName2 = s.lastName2 = s.comment2 = s.email2 = s.phone2 = s.companyName2 = ""
        }
        var s = this;
        a.$on("heading-updated", function(e, t) {
            s.h1 = t.heading, s.h2 = t.subHeading
        });
        var l = n.language.toLowerCase(),
            c = ["oil-energy", "film-tv", "construction", "logistics"];
        t.industry && (c.indexOf(t.industry.toLowerCase()) > -1 ? s.subTemplateUrl = "app/secondaryPages/forbusiness/subpages/" + t.industry.toLowerCase() + "-" + l + ".html" : "fr" == l ? o.go("404", {
                InvalidURL: window.location.href
            }) : o.go("404-fr", {
                InvalidURL: window.location.href
            })), s.slickConfig = {
                slidesToShow: 4,
                slidesToScroll: 1,
                centerMode: !0,
                centerPadding: "60px",
                focusOnSelect: !0,
                event: {
                    beforeChange: function(e, t, a, o) {},
                    afterChange: function(e, t, a, o) {
                        s.currCar = s.fleet[a]
                    }
                }
            },
            function() {
                e.getIndustries().then(function(e) {
                    s.allIndustries = e
                }), e.getAllCars().then(function(e) {
                    s.fleet = [], e.forEach(function(e) {
                        "Truck" === e.vehicleType && s.fleet.push(e)
                    }), s.currCar = s.fleet[0]
                })
            }(), s.submitForm = function(t) {
                s.errors = {}, t && r.validateEmail(s.email) ? e.saveCorporateAccount({
                    FirstName: s.firstName,
                    LastName: s.lastName,
                    Email: s.email,
                    PhoneNumber: s.phone,
                    BusinessName: s.companyName,
                    industry: s.industry,
                    comment: s.comment
                }).then(function(e) {
                    s.formSuccess = !0, i()
                }).catch(function(e) {
                    s.formError = !0, i()
                }) : (s.firstName || (s.errors.firstName = 1), s.lastName || (s.errors.lastName = 1), s.comment || (s.errors.comment = 1), r.validateEmail(s.email) || (s.errors.email = 1), s.phone || (s.errors.phone = 1), s.companyName || (s.errors.companyName = 1))
            }, s.submitForm2 = function(t) {
                s.errors = {}, t && r.validateEmail(s.email2) ? e.saveCorporateAccount({
                    FirstName: s.firstName2,
                    LastName: s.lastName2,
                    Email: s.email2,
                    PhoneNumber: s.phone2,
                    BusinessName: s.companyName2,
                    industry: s.industry,
                    comment: s.comment2
                }).then(function(e) {
                    s.formSuccess2 = !0, i()
                }).catch(function(e) {
                    s.formError2 = !0, i()
                }) : (s.firstName2 || (s.errors.firstName2 = 1), s.lastName2 || (s.errors.lastName2 = 1), s.comment2 || (s.errors.comment2 = 1), r.validateEmail(s.email2) || (s.errors.email2 = 1), s.phone2 || (s.errors.phone2 = 1), s.companyName2 || (s.errors.companyName2 = 1))
            }
    }]), angular.module("secondaryPages").config(["$stateProvider", function(e) {
        e.state("locations-home", {
            url: "/locations-home",
            views: {
                main: {
                    controller: "LocHomeCtrl",
                    templateUrl: "app/secondaryPages/locations/locations.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Canadian Car & Truck Rental Locations"
            }
        }), e.state("locations-home-fr", {
            url: "/locations-home-fr",
            views: {
                main: {
                    controller: "LocHomeCtrl",
                    templateUrl: "app/secondaryPages/locations/locations-fr.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Canadian Car & Truck Rental Locations"
            }
        })
    }]).controller("LocHomeCtrl", ["ServerRequest", "$state", "ReservationData", "$sessionStorage", "$scope", function(e, t, a, o, r) {
        function n() {
            o.geolocation = {}, "FR" === o.language ? t.go("locations-fr") : t.go("locations")
        }

        function i() {
            l.autoDetails && (o.geolocation2 = {}, l.autoDetails ? (o.geolocation2.lat = l.autoDetails.lat, o.geolocation2.lng = l.autoDetails.lng) : (l.pickupAddress = "Toronto, Ontario", o.geolocation.lat = 43.7695, o.geolocation.lng = -79.3625), "FR" === o.language ? t.go("locations-fr", {
                locationName: "map"
            }) : t.go("locations", {
                locationName: "map"
            }))
        }

        function s() {
            navigator.geolocation && navigator.geolocation.getCurrentPosition(function(e) {
                o.geolocation = {}, o.geolocation.lat = e.coords.latitude, o.geolocation.lng = e.coords.longitude, "FR" === o.language ? t.go("locations-fr", {
                    locationName: "map"
                }) : t.go("locations", {
                    locationName: "map"
                })
            }, function(e) {
                alert("Could not find location!")
            })
        }
        var l = this;
        r.$on("heading-updated", function(e, t) {
                l.h1 = t.heading
            }), l.geolocate = s, l.findLocationsBtn = i, l.goFull = n, o.geolocation = {},
            function() {
                e.getLocationsList({}).then(function(e) {
                    l.allCountries = e
                })
            }()
    }]), angular.module("secondaryPages").config(["$stateProvider", function(e) {
        function t(e, t) {
            return t.closedLocs ? t.closedLocs : e.getClosedLocations().then(function(e) {
                return t.closedLocs = e, e
            }).catch(function(e) {})
        }
        t.$inject = ["ServerRequest", "$sessionStorage"], e.state("locations", {
            url: "/locations/:locationName",
            views: {
                main: {
                    controller: "LocCtrl",
                    controllerAs: "vm",
                    templateUrl: "app/secondaryPages/locations/loc-details-en.html",
                    resolve: {
                        closedLocs: t
                    }
                }
            },
            data: {
                pageTitle: "Canadian Car & Truck Rental Locations"
            }
        }), e.state("locations-fr", {
            url: "/locations-fr/:locationName",
            views: {
                main: {
                    controller: "LocCtrl",
                    controllerAs: "vm",
                    templateUrl: "app/secondaryPages/locations/loc-details-fr.html",
                    resolve: {
                        closedLocs: t
                    }
                }
            },
            data: {
                pageTitle: "Canadian Car & Truck Rental Locations"
            }
        })
    }]).controller("LocCtrl", ["ServerRequest", "$anchorScroll", "$stateParams", "$timeout", "$scope", "$state", "ReservationData", "$sessionStorage", "$uibModal", "closedLocs", function(e, t, a, o, r, n, i, s, l, c) {
        function u(e, t) {
            "dorval" == a.locationName.toLowerCase() ? P.metaCity = "Dorval & Montreal Airport" : (P.metaCity = e, t && (P.metaProvince = t.provinceAbbrList[0]))
        }

        function m(e, t) {
            if (screen.width < 992) {
                var a;
                a = "FR" == A ? "app/partials/branchSelectPopup-fr.html" : "app/partials/branchSelectPopup.html", l.open({
                    templateUrl: a,
                    controller: ["branch", "$scope", "$uibModalInstance", function(e, t, a) {
                        t.branch = e, t.checkStoreHours = function(e, t) {
                            var a, o;
                            return a = "00:00" === e ? "Closed" : e, o = "00:00" === t ? "" : " - " + t, a + o
                        }, t.close = function() {
                            a.dismiss("cancel")
                        }, t.find = function() {
                            a.close()
                        }
                    }],
                    size: "md",
                    openedClass: "locations-br-modal",
                    resolve: {
                        branch: function() {
                            return e
                        }
                    }
                }).result.then(function() {
                    P.reserveNow(e)
                }, function() {})
            }
        }

        function d(e) {
            P.showLeaflet = !1, P.showFull = !1, P.showList = !0, o(function() {
                P.showLeaflet = !0, e && T(e)
            }, 300)
        }

        function p(e) {
            P.showMap = !1, P.showFull = !1, P.showList = !0, o(function() {
                P.showMap = !0, e && (P.currMarker = e, L())
            }, 300)
        }

        function g(a) {
            e.getLocationsContent({
                CityName: a,
                CityNameValue: a
            }).then(function(e) {
                P.selectedCountry = a, e.headerContent && (P.locationContent = e, document.getElementById("locationContent").innerHTML = e.headerContent, document.getElementById("footerContent").innerHTML = e.footerContent), screen.width < 990 && (P.hideDeskBlock = !1, P.hideMobDetails = !0), t()
            }).catch(function(e) {})
        }

        function f(e, a) {
            P.currCity = e, a && (P.dropdownCities = a), screen.width < 990 && (P.hideDeskBlock = !1, P.hideMobDetails = !0), C(e.cityNameValue), t()
        }

        function v() {
            P.showFull = !0, P.showList = !1, screen.width < 990 && (P.hideMobDetails = !1, P.hideDeskBlock = !0), P.currCity.cityName = P.currMarker.city
        }

        function h(e) {
            s.skippedDateSelect = !0, s.geolocation = {}, s.reservationModel = {}, s.geolocation.lat = e.lat + 1e-4, s.geolocation.lng = e.long + 1e-4, s.reservationModel.PickupLocation = e, s.reservationModel.ReturnLocation = e, s.reservationModel.PickupDate = moment().add(1, "d").hours(9).minutes(30).format(), s.reservationModel.ReturnDate = moment().add(2, "d").hours(9).minutes(30).format(), s.visitedLocations = !0, n.go("reservation")
        }

        function k() {
            P.autoDetails && (P.autocompleteCity = !1, R(P.autoDetails.geometry.location.lat(), P.autoDetails.geometry.location.lng()))
        }

        function y(e) {
            e.locationId !== P.currMarker.locationId && (P.markers[e.locationId].icon.iconSize = [40, 50])
        }

        function w(e) {
            e.locationId !== P.currMarker.locationId && (P.markers[e.locationId].icon.iconSize = [30, 40])
        }

        function C(t) {
            P.loading = !0, e.getLocationsByCity({
                searchTerm: t
            }).then(function(a) {
                M(a), e.getLocationsContent({
                    CityName: t,
                    CityNameValue: t
                }).then(function(e) {
                    e.headerContent && (document.getElementById("locationContentCity").innerHTML = e.headerContent, document.getElementById("footerContentCity").innerHTML = e.footerContent)
                })
            })
        }

        function R(t, a) {
            P.loading = !0, e.getAllLocations({
                LatN: t,
                LongN: a,
                Radius: 10
            }).then(function(e) {
                M(e)
            })
        }

        function M(e) {
            e[0] && e[0].address ? (P.locations = e, P.mapCenter = {
                lat: e[0].lat,
                lng: e[0].long,
                zoom: 12
            }, P.metaLoc1 = e[0].locationName, b()) : P.noLocs = !0, P.loading = !1, P.loadingLocs = !1
        }

        function b() {
            P.markers = {}, P.locations.forEach(function(e, t, a) {
                D(e, t)
            }), P.currMarker = P.markers[P.locations[0].locationId].data, P.markers[P.currMarker.locationId].icon = P.markers[P.currMarker.locationId].green, P.markers[P.currMarker.locationId].focus = !0, N = P.currMarker.locationId, P.deskMarkers = P.markers, delete s.directLocation
        }

        function D(e, t) {
            var a = t + 1,
                o = e.locationId;
            P.markers[o] = {}, P.markers[o].lng = e.long, P.markers[o].lat = e.lat, P.markers[o].message = '<span><h5 class="text-center">{{vm.currMarker.locationName}}</h5></span>', P.markers[o].getMessageScope = function() {
                return r
            }, P.markers[o].draggable = !1, P.markers[o].icon = P.markers[o].blue = {
                iconUrl: "app/secondaryPages/locations/markers/Blue/blue-" + a + ".png",
                iconSize: [30, 40],
                popupAnchor: [0, -12]
            }, P.markers[o].green = {
                iconUrl: "app/secondaryPages/locations/markers/Green/green-" + a + ".png",
                iconSize: [40, 50],
                popupAnchor: [0, -15]
            }, P.markers[o].data = e, P.markers[o].popupOptions = {
                closeButton: !1,
                autoPan: !1
            }
        }

        function L() {
            N && (P.markers[N].icon = P.markers[N].blue, P.markers[N].focus = !1), P.markers[P.currMarker.locationId].focus = !0, P.markers[P.currMarker.locationId].icon = P.markers[P.currMarker.locationId].green, N = P.currMarker.locationId, P.mapCenter = {
                lat: P.currMarker.lat,
                lng: P.currMarker.long,
                zoom: 12
            }
        }

        function T(e) {
            screen.width > 992 && (P.currMarker = e, L())
        }
        var P = this,
            A = s.language;
        P.h1 = "Discount Locations", r.$on("heading-updated", function(e, t) {
            P.h1 = t.heading
        }), P.markers = {}, P.mapCenter = "";
        var N = "";
        P.currCity = {
                cityName: "Toronto",
                latN: 43.6425,
                longN: -79.3892
            }, P.findLocations = k, P.hoverBranchIn = y, P.hoverBranchOut = w, P.checkBranchDesktop = T, P.reserveNow = h, P.selectCity = f, P.updateLocations = k, P.showFullDirectory = v, P.selectCountry = g, P.branchSelect = P.showBranchDetails = m, P.selectBranchMap = function() {
                h(P.currMarker)
            }, P.clearInput = function() {
                P.pickupAddress = ""
            }, P.checkTimeForList = function() {
                return !0
            }, P.fromFullToMapMobile = p, P.fromFullToMap = d, P.checkStoreHours = function(e, t) {
                var a, o;
                return a = "00:00" === e ? "Closed" : e, o = "00:00" === t ? "" : " - " + t, a + o
            },
            function() {
                var e = !0;
                return a.locationName && "map" !== a.locationName.toLowerCase() && c.forEach(function(t) {
                    t.locationName.toLowerCase() != a.locationName.toLowerCase() && t.city.toLowerCase() != a.locationName.toLowerCase() || (e = !1, "FR" == A ? n.go("locations-home-fr") : n.go("locations-home"))
                }), e
            }() && function() {
                e.getLocationsList({}).then(function(e) {
                    P.allCountries = e
                }), s.autocompleteCity && (P.pickupAddress = s.autocompleteCity, P.autocompleteCity = !0), screen.width < 990 ? P.hideDeskBlock = !0 : g("France"), e.getProvinces().then(function(e) {
                    P.provinces = e, P.dropdownCities = e[6].citiesList, a.locationName && "map" !== a.locationName.toLowerCase() ? i.intLocations.indexOf(a.locationName.toLowerCase()) > -1 ? (P.showFull = !0, P.showInt = !0, u(a.locationName, null), g(a.locationName.toLowerCase())) : (P.provinces.forEach(function(e) {
                        e.citiesList.forEach(function(t) {
                            a.locationName.toLowerCase() === t.cityNameValue.toLowerCase() && (P.showFull = !0, u(t.cityName, e), f(t, e.citiesList))
                        })
                    }), P.showFull || ("FR" == A ? n.go("404-fr", {
                        InvalidURL: window.location.href
                    }) : n.go("404", {
                        InvalidURL: window.location.href
                    }))) : s.directLocation ? (P.showFull = !1, P.showList = !0, P.showLeaflet = !0, R(s.directLocation.latN, s.directLocation.longN), P.pickupAddress = s.directLocation.cityName) : s.geolocation && s.geolocation.lat ? (P.showList = !0, P.showLeaflet = !0, R(s.geolocation.lat, s.geolocation.lng)) : a.locationName && "map" == a.locationName.toLowerCase() ? (R(s.geolocation2.lat, s.geolocation2.lng), P.showList = !0, P.showLeaflet = !0) : (C("Toronto"), P.showFull = !0)
                })
            }(), r.$on("leafletDirectiveMarker.click", function(e, t) {
                "center" !== t.modelName && (P.currMarker = t.model.data, L())
            }), r.$on("leafletDirectiveMarker.mouseover", function(e, t) {
                "center" !== t.modelName && P.editingLoc && y(t.model.data)
            }), r.$on("leafletDirectiveMarker.mouseout", function(e, t) {
                "center" !== t.modelName && P.editingLoc && w(t.model.data)
            })
    }]), angular.module("secondaryPages").config(["$stateProvider", function(e) {
        e.state("promotions", {
            url: "/promotions",
            views: {
                main: {
                    controller: "PromosCtrl",
                    templateUrl: "app/secondaryPages/promotions/promotions.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Promotions"
            }
        }), e.state("promoTemplate", {
            url: "/promotions/:promo",
            views: {
                main: {
                    controller: "PromosCtrl",
                    templateUrl: "app/secondaryPages/promotions/promoTemplate.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Promotions"
            }
        }), e.state("promotions-fr", {
            url: "/promotions-fr",
            views: {
                main: {
                    controller: "PromosCtrl",
                    templateUrl: "app/secondaryPages/promotions/promotions-fr.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Promotions"
            }
        }), e.state("promoTemplate-fr", {
            url: "/promotions-fr/:promo",
            views: {
                main: {
                    controller: "PromosCtrl",
                    templateUrl: "app/secondaryPages/promotions/promoTemplate-fr.html",
                    controllerAs: "vm"
                }
            },
            data: {
                pageTitle: "Promotions"
            }
        })
    }]).controller("PromosCtrl", ["ServerRequest", "$stateParams", "$state", "ReservationData", "$sessionStorage", function(e, t, a, o, r) {
        var n, i = this,
            s = r.language.toLowerCase();
        (t.promo || "" == t.promo) && (o.promotions.indexOf(t.promo.toLowerCase()) > -1 ? i.subTemplateUrl = "app/secondaryPages/promotions/subpages/" + t.promo + "-" + s + ".html" : "fr" == s ? a.go("404-fr") : a.go("404"), "webdiscount" != t.promo.toLowerCase() && "hometowin" != t.promo.toLowerCase() || (i.selectedProvince = {
            provinceCode: "ON",
            provinceState: "Ontario"
        }, e.getMyIp().then(function(e) {
            n = e
        }), e.getAllProvinces().then(function(e) {
            i.provinceList = e
        }).catch(function(e) {}))), i.goOneWay = function() {
            r.oneWay = !0, "fr" === s ? a.go("home-fr") : a.go("home")
        }, i.getMeTruck = function() {
            r.reserveCarType = "trucks", "FR" === r.language ? a.go("home-fr") : a.go("home")
        }, i.submitWebdiscount = function(t) {
            if (i.errors = {}, t && o.validateEmail(i.email)) {
                var a = {
                    firstName: i.firstName,
                    lastName: i.lastName,
                    email: i.email,
                    contactMe: i.contactMe,
                    province: i.selectedProvince.provinceState,
                    IPAddress: n
                };
                i.petroNumber && (a.PetroPointsNumber = "7069" + i.petroNumber), e.createWebPromo(a).then(function(e) {
                    i.formSuccess = e
                }).catch(function(e) {})
            } else i.firstName || (i.errors.firstName = 1), o.validateEmail(i.email) || (i.errors.email = 1), i.contactMe || (i.errors.contact = 1), i.selectedProvince.provinceState || (i.errors.provinceState = 1)
        }
    }]);
