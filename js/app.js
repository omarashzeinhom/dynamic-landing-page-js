/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
//sections & navbar & fragment

const pagesections = document.querySelectorAll("section");
const pagenavigationbar = document.getElementById("navbar__list");
const pagefragment = document.createDocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/







/**
 * End Main Functions
 * Begin Events
 * 
*/


// build the nav

// Build menu 


pagesections.forEach((elm, _index) => {
    let pagelinktxt = elm.getAttribute("data-nav");
    let pagenewlink = document.createElement("a");
    let pagetextnode = document.createTextNode(pagelinktxt);
    let pagenewlistitm = document.createElement("li");
    pagenewlink.appendChild(pagetextnode);
    pagenewlistitm.appendChild(pagenewlink);

    // Scroll to anchor ID using scrollTO event

    pagenewlink.addEventListener("click", () => {
        elm.scrollIntoView({ behavior: "smooth" });
    })
    pagefragment.appendChild(pagenewlistitm);

})

pagenavigationbar.appendChild(pagefragment);

// Setting Sections as active 
// 800 is the sections ending point to show the active class

window.addEventListener("scroll", () => {
    pagesections.forEach((pagesection, index) => {
        /* for each loop added for too loop through all sections */
         /* there for foreachloop function excutes the getBoundingClientRect to scroll through section*/
        const pagereact = pagesection.getBoundingClientRect();
        const pagenavigationsection = pagesection.getAttribute("data-nav");

        //alert(pagesection.getAttribute("data-nav") + pagereact.top);
        if (pagereact.top > 0 && pagereact.top < 600) {
            //alert(pagenavigationsection);
            // alert added as to find out section location of the X&Y Offset.
            //alert(pagesection.getAttribute("data-nav")+ pagereact.top);
            /* retreieve by Data Navigation Attribute */
            //forEach Loop for Active Section Start
            // Background Colour leave as transparent
            pagesections.forEach((activesection) => {
                activesection.style.background = "transparent";
            })
            // Back Ground Colour End
            //Section styles for active class
            pagesection.style.background = "goldenrod";
            //End Section Styles for active class
            const pagelinks = document.querySelectorAll("a");
            pagelinks.forEach( (pagelink) => {
                if (pagelink.innerText == pagenavigationsection) {
                    pagelinks.forEach((deletelink)=>{
                        /*Start Links Colour Delete Active Class */
                        deletelink.style.background = "transparent";
                    })
                    pagelink.style.background = "linear-gradient(to right bottom, #870000, #190a05)";
                    /*End Links Active Class Colour */

                }
                //forEach Loop for Active Section End

            })
        }

    });
})






/*Reference
https://www.w3schools.com/howto/howto_js_active_element.asp
*/

// Return Top Button 

function scrollTopfunction() {
    if (document.body.scrollTop > 1050 ||
      document.documentElement.scrollTop > 1050) {
        topbtnclass.style.display = "block";
    } else {
        topbtnclass.style.display = "none";
    }
  }
  
  
  // At user click return to top of page for chrome , safari , firefox & most modern browsers
  
  function pushtopfunction() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
  
  
  /* User time out function when idle at 300 seconds which is equal to 5 minutes 5x60 =300 */
  
  setTimeout(function () { alert("User Time Out Message : 5 minutes"); }, 300000);