window.onload = function()
    {
        setTimeout(function() {
            document.querySelector(".preloader").classList.add("loading-block--hidden");
            setTimeout(function() {document.querySelector(".preloader").classList.add("loading-block--removed");}, 1000);
        }, 100);
    }

window.onscroll = function() {scrollFunction()};

function scrollFunction() 
    {
        if (document.body.scrollTop > 55 || document.documentElement.scrollTop > 55) 
            {
                document.getElementById("header").classList.add("header--onscroll");
            }
        else 
            {
                document.getElementById("header").classList.remove("header--onscroll");
            }
    }

modalclosed = 1;

function accessibilitymodal() 
    {
        modal_element = document.getElementById('amodal');

        if (modalclosed == 1)
            {
                modal_element.classList.add("accessibility-tab-open");
                modalclosed = 0;
            }
        else
            {
                modal_element.classList.remove("accessibility-tab-open");
                modalclosed = 1;
            }
    }

function getCookie(cname) 
    {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }

function setCookie(cname, cvalue, exdays) 
    {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

function checkCookie() 
    {
        asize = getCookie("asize");
        acontrast = getCookie("acontrast");
        afont = getCookie("afont");

        asize_boxes = document.getElementsByName("asize");
        acontrast_boxes = document.getElementsByName("acontrast");
        afont_boxes = document.getElementsByName("afont");

        ebody = document.getElementById("body");
        ehtml = document.getElementById("html");

        if (asize != "")
            {
                asize_boxes[asize].checked = true;
                ebody.classList.add("asize"+asize);
            }
        else
            {
                setCookie("asize", 0, 365);
                asize_boxes[0].checked = true;
            }

        if (acontrast != "")
            {
                acontrast_boxes[acontrast].checked = true;
                ehtml.classList.add("acontrast"+acontrast);
            }
        else
            {
                setCookie("acontrast", 0, 365);
                acontrast_boxes[0].checked = true;
            }

        if (afont != "")
            {
                afont_boxes[afont].checked = true;
                ebody.classList.add("afont"+afont);
            }
        else
            {
                setCookie("afont", 0, 365);
                afont_boxes[0].checked = true;
            }
    }
    
checkCookie();

$('input[type="radio"]').on('change', function(e) {
    gCookie = getCookie(e.target.name);
    setCookie(e.target.name, e.target.value, 365);
    console.log("cookies set");

    ebody = document.getElementById("body");
    ehtml = document.getElementById("html");

    if (e.target.name == "asize")
        {
            ebody.classList.remove("asize0", "asize1", "asize2", "asize3");
            ebody.classList.add("asize"+e.target.value);
        }

    else if (e.target.name == "acontrast")
        {
            ehtml.classList.remove("acontrast0", "acontrast1");
            ehtml.classList.add("acontrast"+e.target.value);
        }

    else if (e.target.name == "afont")
        {
            ebody.classList.remove("afont0", "afont1", "afont2", "afont3");
            ebody.classList.add("afont"+e.target.value);
        }
})


function openmobilenav() 
    {
        mnav = document.getElementById("mobnav");
        mnav.classList.remove("mobile-navbar--disabled");

        setTimeout(function() {
            mnav.classList.remove("mobile-navbar--hidden");
        }, 50);
    }

function closemobilenav() 
    {
        mnav = document.getElementById("mobnav");
        mnav.classList.add("mobile-navbar--hidden");

        setTimeout(function() {
            mnav.classList.add("mobile-navbar--disabled");
        }, 500);
    }