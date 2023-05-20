var div = document.createElement("div");
div.id = "google_translate_element";
div.setAttribute('class', 'center_ii');
// div.innerHTML = "<p>Translate into:&nbsp;&nbsp;</p>";

document.body.appendChild(div);


function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

var s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js";
document.head.appendChild(s);


var s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
document.head.appendChild(s);


function google_translate (){ 
    var opt = { 
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE, 
        pageLanguage: "en" 
    }; 
    new google.translate.TranslateElement( opt, "translation" ); 
} 

/*  
Display the scrollable list of languages. 
Related to the size of current browser. 
*/
addEventListener( "load", function(){ 
    if ( document.querySelector(".goog-te-menu-frame") ) { 
    
        document.getElementById( "translation" ).addEventListener( "click", function(){ 
            if ( this.id === "translation" ) scrollableLanguagesList(); 
        }); 
        addEventListener( "resize", function(){ 
            if ( "none" !== document.querySelector(".goog-te-menu-frame").style.display ) scrollableLanguagesList(); 
        }); 
    
    } 
}); 

function scrollableLanguagesList (){ 
    var 
     iframe = document.querySelector( ".goog-te-menu-frame" ), 
     doc = iframe.contentWindow.document, 
     div = doc.body.children[ 0 ], 
     table = div.children[ 0 ], 
     width = div.dataset.width || parseInt( div.style.width ), 
     rect, diff; 
    
    if ( ! div.dataset.width ) div.dataset.width = width; 
    
    if ( innerWidth < width ) { 
        rect = table.getBoundingClientRect(); 
        width = rect.right - rect.left; 
        diff = width - innerWidth; 
        
        div.style.width = ( width - diff - 24 ) + "px"; 
        div.style.padding = "4px 0 1em 4px"; 
        div.style.overflowX = "scroll"; 
    } 
    else { 
        div.style.width = "auto"; 
        div.style.padding = "4px"; 
        div.style.overflowX = "visible"; 
    } 
    
    rect = div.getBoundingClientRect(); 
    iframe.style.width = ( rect.right - rect.left ) + "px"; 
    iframe.style.height = ( rect.bottom - rect.top ) + "px"; 
} 


if (document.readyState === 'complete') {
  // The page is fully loaded
	 translationTooltipsDisable();
}


    function translationTooltipsDisable()
    {       
        //Override google's functions
        _tipon = function()  { /*Don't display the tooltip*/ };
        _tipoff = function() { /*Don't hide the tooltip*/ };
    }
