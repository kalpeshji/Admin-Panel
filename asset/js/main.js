
$(document).ready(function () {
    
    
    // Full screen
    
    
    // var elem = document.getElementById("fullscreen");
    
    //   if (elem.requestFullscreen) {
    //     elem.requestFullscreen();
    //   } else if (elem.webkitRequestFullscreen) { /* Safari */
    //     elem.webkitRequestFullscreen();
    //   } else if (elem.msRequestFullscreen) { /* IE11 */
    //     elem.msRequestFullscreen();
    //   }
    
    
    
    // chart
    
    // var options = {
    //     series: [{
    //         name: 'Net Profit',
    //         data: [19, 36, 24, 20, 34, 24, 11, 36, 24, 15, 21, 28]
    //     }, {
    //         name: 'Revenue',
    //         data: [7, 12, 10, 12, 11, 10, 13, 10, 12, 8, 13, 13]
    //     }],
    //     dataLabels: {
    //         enabled: false,
    //     },
    //     chart: {
    //         type: 'bar',
    //         height: 350,
    //         stacked: true,
    //     },
        
    //     legend: {
    //         show: false,
    //     },
        
    //     responsive: [{
    //         breakpoint: 480,
    //     }],
    //     xaxis: {
    //         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    //     },
    //     fill: {
    //         opacity: 1
    //     },
    //     colors: ["#0c768a", "#daeaee" ],
    // };
    
    $('.m1').hover(function(){
       $('.aside-small-hover1').toggle(); 
    });
    $('.m2').hover(function(){
        $('.aside-small-hover2').toggle(); 
     });
     $('.m3').hover(function(){
        $('.aside-small-hover3').toggle(); 
     });
     $('.m4').hover(function(){
        $('.aside-small-hover4').toggle(); 
     });
     $('.m5').hover(function(){
        $('.aside-small-hover5').toggle(); 
     });
     $('.m6').hover(function(){
        $('.aside-small-hover6').toggle(); 
     });
     $('.m7').hover(function(){
        $('.aside-small-hover7').toggle(); 
     });
     $('.m8').hover(function(){
        $('.aside-small-hover8').toggle(); 
     });
     $('.m9').hover(function(){
        $('.aside-small-hover9').toggle(); 
     });
     $('.m10').hover(function(){
        $('.aside-small-hover10').toggle(); 
     });
     $('.m11').hover(function(){
        $('.aside-small-hover11').toggle(); 
     });
     $('.m12').hover(function(){
        $('.aside-small-hover12').toggle(); 
     });
    var options = {
        series: [{
            name: "Net Profit",
            data: [19, 36, 24, 20, 34, 24, 11, 36, 24, 15, 21, 28]
        }, {
            name: "Revenue",
            data: [7, 12, 10, 12, 11, 10, 13, 10, 12, 8, 13, 13]
        }],
        chart: {
            type: "bar",
            height: 350,
            stacked: !0,
            toolbar: {
                show: !1
            },
            zoom: {
                enabled: !0
            }
        },
        plotOptions: {
            bar: {
                horizontal: !1,
                columnWidth: "42%"
            }
        },
        dataLabels: {
            enabled: !1
        },
        legend: {
            show: !1
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        colors: ["#0c768a", "#daeaee"],
        fill: {
            opacity: 1
        }
    };
    var chart = new ApexCharts(document.querySelector("#chart1"), options);
    chart.render();
    
    
    
    
    
    
    
    
    
    // ----------------------------------- chart 2 ----------------------------------- //
    // var options = {
    //     series: [40405, 15552, 19824],
    //     chart: {
    //         type: 'donut',
    //     },
    //     legend: {
    //         show: true,
    //         position: 'bottom'
    //     },
    //     dataLabels: {
    //         enabled: false,
    //     },
    //     labels: ['Online','Offline','Marketing'],
    //     responsive: [{
    //         breakpoint: 480,
    //         options: {
    //             chart: {
    //                 width: 400
    //             },
    //             legend: {
    //                 show: true,
    //                 position: 'bottom'
    //             }
    //         }
    //     }],
    //     colors: ["#0c768a", "#38c786", "#daeaee"],
    // };
    
    options = {
        series: [40405, 15552, 19824],
        labels: ["Online", "Offline", "Marketing"],
        chart: {
            type: "donut",
            height: 350
        },
        plotOptions: {
            pie: {
                size: 100,
                offsetX: 0,
                offsetY: 0,
                donut: {
                    size: "77%",
                    labels: {
                        show: !0,
                        name: {
                            show: !0,
                            fontSize: "18px",
                            offsetY: -5
                        },
                        value: {
                            show: !0,
                            fontSize: "24px",
                            color: "#343a40",
                            fontWeight: 500,
                            offsetY: 10,
                            formatter: function(e) {
                                return "$" + e
                            }
                        },
                        total: {
                            show: !0,
                            fontSize: "16px",
                            label: "Total value",
                            color: "#9599ad",
                            fontWeight: 400,
                            formatter: function(e) {
                                return "$" + e.globals.seriesTotals.reduce(function(e, o) {
                                    return e + o
                                }, 0)
                            }
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: !1
        },
        legend: {
            show: !0,
            position: "bottom"
        },
        yaxis: {
            labels: {
                formatter: function(e) {
                    return "$" + e
                }
            }
        },
        stroke: {
            lineCap: "round",
            width: 2
        },
        colors: ["#0c768a", "#38c786", "#daeaee"]
    };
    var chart = new ApexCharts(document.querySelector("#chart2"), options);
    chart.render();
    // ----------------------------------- chart 2 ----------------------------------- //
    
    // Map-js
    
    var worldlinemap = new jsVectorMap({
        map: "world_merc",
        selector: "#maps",
        zoomOnScroll: !1,
        zoomButtons: !1,
        markerStyle: {
            initial: {
                fill: "#0c768a"
            },
            selected: {
                fill: "#0c768a"
            }
        },
        markers: [{
            name: "Greenland",
            coords: [72, -42]
        }, {
            name: "Canada",
            coords: [56.1304, -106.3468]
        }, {
            name: "Brazil",
            coords: [-14.235, -51.9253]
        }, {
            name: "Egypt",
            coords: [26.8206, 30.8025]
        }, {
            name: "Russia",
            coords: [61, 105]
        }, {
            name: "China",
            coords: [35.8617, 104.1954]
        }, {
            name: "United States",
            coords: [37.0902, -95.7129]
        }, {
            name: "Norway",
            coords: [60.472024, 8.468946]
        }, {
            name: "Ukraine",
            coords: [48.379433, 31.16558]
        }],
        lines: [{
            from: "Canada",
            to: "Egypt"
        }, {
            from: "Russia",
            to: "Egypt"
        }, {
            from: "Greenland",
            to: "Egypt"
        }, {
            from: "Brazil",
            to: "Egypt"
        }, {
            from: "United States",
            to: "Egypt"
        }, {
            from: "China",
            to: "Egypt"
        }, {
            from: "Norway",
            to: "Egypt"
        }, {
            from: "Ukraine",
            to: "Egypt"
        }],
        regionStyle: {
            initial: {
                stroke: "#daeaee",
                strokeWidth: .25,
                fill: "#daeaee",
                fillOpacity: 1
            }
        },
        lineStyle: {
            animation: !0,
            strokeDasharray: "6 3 6"
        }
    });
    
    
    // chart 3
    
    options = {
        labels: ["E-Commerce", "Facebook", "Instagram"],
        series: [38, 24, 16],
        chart: {
            height: 402,
            type: "donut"
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 90,
                offsetY: 10,
                donut: {
                    size: "77%",
                    labels: {
                        show: !0,
                        name: {
                            show: !0,
                            fontSize: "18px",
                            offsetY: -5
                        },
                        value: {
                            show: !0,
                            fontSize: "24px",
                            color: "#343a40",
                            fontWeight: 500,
                            offsetY: 10,
                            formatter: function(e) {
                                return  e
                            }
                        },
                        total: {
                            show: !0,
                            fontSize: "16px",
                            label: "TOTAL SALES",
                            color: "#9599ad",
                            fontWeight: 400,
                            formatter: function(e) {
                                return e.globals.seriesTotals.reduce(function(e, o) {
                                    return e + o
                                }, 0)
                            }
                        }
                    }
                }
            }
        },
        colors: ["#0c768a", "#38c786", "#daeaee"],
        grid: {
            padding: {
                bottom: -190
            }
        },
        legend: {
            show: !1
            
        },
         yaxis: {
            labels: {
                formatter: function(e) {
                    return e
                }
            }
        },
        responsive: [{
            breakpoint: 320,
            options: {
                chart: {
                    width: 180
                },
                legend: {
                    position: "bottom"
                }
            }
        }]
    };
    (chart = new ApexCharts(document.querySelector("#purchase-chart"),options)).render();
    // $('.bar').click(function () {
    //     if ($('aside').css("width", "250px")) {

    //         $('header').toggleClass('ml-70'),('bar1');
    //         $('.page-content').toggleClass('ml-70');
    //         $('.aside-big').css("width", "0px");
    //     }
    //     else {
    //             $('.aside-big').css("width", "250px");
    //             $('header').toggleClass('ml-250');
    //             $('.page-content').toggleClass('ml-250');
    //         }
    //     });
    // $('.bar1').click(function () {
    //     if ($('aside').css("width", "0px")) {

    //         $('header').toggleClass('ml-250');
    //         $('.page-content').toggleClass('ml-250');
    //         $('.aside-big').css("width", "250px");   
    //     }
    //     else {
    //         $('.aside-big').css("width", "250px");
    //             $('header').toggleClass('ml-70');
    //             $('.page-content').toggleClass('ml-250');
    //         }
    //     });

    
    // $('#scroll').click(function () {
	// 	$("html, body").animate({ scrollTop: 0 }, 600);
	// 	return false;
	// });
    
    $('.sort-pur-dropdown').click(function() {
        $('.sort').slideToggle(0);
        $('.sort1').slideUp(0);
        $('.sort2').slideUp(0);
        $('.sort3').slideUp(0);
    });
    $('.sort-sale-dropdown').click(function() {
        $('.sort1').slideToggle(0);
        $('.sort').slideUp(0);
        $('.sort2').slideUp(0);
        $('.sort3').slideUp(0);
    });
    $('.sort-user-dropdown').click(function() {
        $('.sort2').slideToggle(0);
        $('.sort1').slideUp(0);
        $('.sort').slideUp(0);
        $('.sort3').slideUp(0);
    });
    $('.sort-trans-dropdown').click(function() {
        $('.sort3').slideToggle(0);
        $('.sort1').slideUp(0);
        $('.sort2').slideUp(0);
        $('.sort').slideUp(0);
    });
    $('.contry').click(function () {
        $('.language').slideToggle(100);
        $('.apps').slideUp(0);
        $('.notification-section').slideUp(0);
    });
    $('.setting-icon').click(function () {
        $('.setting').css("display", "block");
        $('.language').slideUp(0);
        $('.apps').slideUp(0);
        $('.notification-section').slideUp(0);
        $('.setting-bg').css("display","block");
        // $('body').css("opacity",".7");
    });
    $('.close').click(function () {
        $('.setting').css("display", "none");
        $('.setting-bg').css("display","none");
    });
    $('.page-content').click(function(){
        // $('.sort').slideUp(0);
        // $('.sort1').slideUp(0);
        // $('.sort2').slideUp(0);
        // $('.sort3').slideUp(0);
        $('.setting-bg').css("display","none"); 
        $('.language').slideUp(0);
        $('.apps').slideUp(0);
        $('.notification-section').slideUp(0);
        $('.setting').css("display", "none");
    });
    $('.setting-bg').click(function(){
        $('.setting-bg').css("display","none");
        $('.setting').css("display", "none");
    });
    $('.app-icon').click(function () {
        $('.apps').slideToggle(100);
        $('.language').slideUp(0);
        $('.notification-section').slideUp(0);
    });
    $('.notification-icon').click(function () {
        $('.notification-section').slideToggle(100);
        $('.apps').slideUp(0);
        $('.language').slideUp(0);
    });
    $('.bar').click(function () {
        $('.aside-big').toggleClass('w-0');
        $('header').toggleClass('ml-70');
        $('.page-content').toggleClass('ml-70');
        $('footer').toggleClass('ml-70');
    });
    // const buttons = document.querySelectorAll('a');
    // buttons.forEach(btn => {
    //     btn.addEventListener('click', function (e) {

    //         let x = e.clientX - e.target.offsetLeft;
    //         let y = e.clientY - e.target.offsetTop;

    //         let ripples = document.createElement('span');
    //         ripples.style.left = x + 'px';
    //         ripples.style.top = y + 'px';
    //         this.appendChild(ripples);

    //         setTimeout(() => {
    //             ripples.remove()
    //         }, 1000);
    //     });
    // });

    // Dark Mode //////////////////////////////////////////////////////////////////////////////////////////

    $('.mode-dark>img').click(function(){
        $(':root').css("--second-light","#182028");
        $(':root').css("--bg-color","#0e1217");
        $(':root').css("--black","#ffffff");
        $(':root').css("--dark","#ffffff");
        $(':root').css("--gray","#ffffff");
        $('.setting-bg').css("background-color","rgba(0, 0, 0, 0.6)");
        $('.setting').css("display", "none");
        $('.setting-bg').css("display","none");

    });

    // Light Mode //////////////////////////////////////////////////////////////////////////////////////////

    $('.mode-light>img').click(function(){
        $(':root').css("--second-light","#ffffff");
        $(':root').css("--bg-color","#F0F0F0");
        $(':root').css("--black","#47484a");
        $(':root').css("--dark","#000000");
        $(':root').css("--gray","#83838d");
        $('.setting-bg').css("background-color","rgba(0, 0, 0, 0.4)");
        $('.setting').css("display", "none");
        $('.setting-bg').css("display","none");
    });


    $('.main-menu').click(function () {
        $('.menu-set').slideUp(500);
        $(this).next('.menu-set').slideToggle(500);
    });
    $('.menu-set').click(function () {
        $('.set').slideUp(1000);
        $(this).next('.set').slideToggle(1000);
    });

    // Full screen

    $(document).on("click", ".ri-fullscreen-line", function toggleFullScreen() {
		$('html').addClass('fullscreen-button');
		if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
			if (document.documentElement.requestFullScreen) {
				document.documentElement.requestFullScreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullScreen) {
				document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
			} else if (document.documentElement.msRequestFullscreen) {
				document.documentElement.msRequestFullscreen();
			}
		} else {
			$('html').removeClass('fullscreen-button');
			if (document.cancelFullScreen) {
				document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		}
	})


});