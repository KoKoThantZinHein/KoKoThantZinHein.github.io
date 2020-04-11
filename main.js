var result = window.confirm("ယခုဘားရှင်းမှာ စမ်းသပ်အဆင့်တွင်သာရှိသေးသည်။ ဝင်ရောက်ကြည့်ရှူ့ မှု့ကို ကျေးဇူးတင်ပါတယ်။ ယခုစာမျက်နှာတွင် မှုပိုင်ခွင့်များ ရှိနိုင်သည်ကို သတ္တိပြုပါ။ ဆက်လက်ဝင်ရောက်မှာပါလား။ This a beta version. Thank you for visiting us. Please notice, this page may contains CopyRight. Are you sure want to containue?");
function toConfirm(){
    if (result == true) {
        window.location.replace("addons/main.html");
    } 
    if (result != true) {
        window.location.replace("addons/bye.html");
    }
}


