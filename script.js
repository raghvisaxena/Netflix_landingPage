let acc = document.getElementsByClassName("drop");
        let i;
        for(i=0;i<acc.length;i++)
        {
            acc[i].addEventListener("click",function(){
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if(panel.style.display==="block"){
                    panel.style.display = "none";
                }else{
                    panel.style.display = "block";
                }
                
            });
        }
/*
  This Below script if for chnaging the content of site using simple Jquery
*/

$("select.langTranslate").change(function(){
	
	var selectedLang  = $(this).children("option:selected").val();
	if(selectedLang == 2)
	{
		$("#tm").html("अनलिमिटेड फिल्में, टीवी शो और बहुत कुछ।");
		$("#th2").html("जहां चाहे देखें. जब चाहें कैंसिल करें.");
		$("#ttry1").html("शुरू करे  >");
		$("#ttry2").html("शुरू करे  >");
		$("#ttry3").html("शुरू करे  >");
		$("#ttry4").html("शुरू करे  >");
		$("#ttry5").html("शुरू करे  >");
		$("#t1").html("आने टीवी पर मज़ा लें");
		$("#t2").html("स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blue-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें .");
		$("#t3").html("डाउनलोड हो रहा है . . .");
		$("#t4").html("ऑफलाइन देखने के लिए अपने शो को डाउनलोड करे.");
		$("#t5").html("आने पसंदीदा  शो और फिल्मे देखने के लिए सेव करें , ताकि आप कभी भी देख सकें.");
		$("#t6").html("हर जगह देखें.");
		$("#t7").html("बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें.");
		$("#t8").html("अक्सर पूछे जाने वाले सवाल");
		$("#t9").html("क्या है नेटफ्लिक्स?");
		$("#t10").html("Netflix एक स्ट्रीमिंग सर्विस है जो हजारों इंटरनेट-कनेक्टेड डिवाइस पर तरह-तरह के अवॉर्ड विजेता टीवी शो, फ़िल्में, ऐनिमे, डॉक्यूमेंट्रीज़ ऑफ़र करती है.<br>आप जब चाहें, जितना चाहें, बिना किसी विज्ञापन के देख सकते हैं, और यह सब कुछ बहुत कम मासिक शुल्क पर. खोजने के लिए हमेशा कुछ नया होता है और हर हफ़्ते नए टीवी शो और फ़िल्में जोड़ी जाती हैं!");
		$("#t11").html("हर महीने की तय फ़ी देकर अपने स्मार्टफ़ोन, टैबलेट, स्मार्ट टीवी, लैपटॉप, या स्ट्रीमिंग डिवाइस पर Netflix देखें. हर महीने ₹199 से ₹799 तक के प्लान. कोई एक्सट्रा कीमत या कॉन्ट्रैक्ट नहीं.");
		$("#t12").html("अनलिमिटेड डिवाइस पर कहीं भी, कभी भी देखें. अपने पर्सनल कंप्यूटर से या स्मार्ट टीवी, स्मार्टफ़ोन, टैबलेट, स्ट्रीमिंग मीडिया प्लेयर और गेम कंसोल सहित Netflix ऐप ऑफ़र करने वाले, किसी भी इंटरनेट-कनेक्टेड डिवाइस पर तुरंत देखने के लिए वेब पर netflix.com पर अपने Netflix अकाउंट में साइन इन करें.<br><br>आप अपने पसंदीदा शो iOS, Android या Windows 10 ऐप से भी डाउनलोड कर सकते हैं. चलते-फिरते और बिना इंटरनेट कनेक्शन के देखने के लिए डाउनलोड का उपयोग करें. Netflix को अपने साथ कहीं भी ले जाएं.");
		$("#t13").html("Netflix लचीला है. कोई परेशान करने वाले कॉन्ट्रैक्ट नहीं और कोई बंधन नहीं हैं. आप आसानी से दो क्लिक में अपना अकाउंट ऑनलाइन कैंसल कर सकते हैं. कोई कैंसलेशन फ़ीस नहीं है – अपना अकाउंट कभी भी शुरू या बंद करें.");
		$("#t14").html("Netflix की बहुत बड़ी लाइब्रेरी में फ़ीचर फ़िल्मों, डॉक्यूमेंट्री, टीवी शो, ऐनिमे, अवॉर्ड-विनिंग Netflix ओरिजिनल्स के अलावा और भी बहुत कुछ है. आप जितना चाहें, कभी भी देखें.");
		$("#t15").html("कोई सवाल है? 000-800-040-1843 पर कॉल करें");
		$("#t17").html("इंवेस्टर संबंध");
		$("#t18").html("प्रायवेसी");
		$("#t19").html("स्पीड टेस्ट");
		$("#t20").html("सहायता केंद्र");
		$("#t21").html("नौकरियां");
		$("#t22").html("कुकी प्राथमिकताएं");
		$("#t23").html("कानूनी सूचनाएं");
		$("#t24").html("अकाउंट");
		$("#t25").html("देखने के तरीके");
		$("#t26").html("कॉरपोरेट जानकारी");
		$("#t27").html("Netflix ओरिजिनल्स");
		$("#t28").html("मीडिया केंद्र");
		$("#t29").html("उपयोग की शर्तें");
		$("#t30").html("हमसे संपर्क करें");
		$("#t31").html("Netflix भारत");
		$("#f1").html("Netflix की कीमत कितनी है?");
		$("#f2").html("मैं कहाँ देख सकता हूँ .");
		$("#f3").html("मैं कैसे कैंसिल करू?");
		$("#f4").html("मैं  Netflix पर क्या देख सकता/सकती हूँ?");
		$("#sn").html("साइन इन करें");
	}else if(selectedLang!=2){
		location.reload();
	}
});
//Language Translation Script Ends Here!
