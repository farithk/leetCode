/**by Farith Comas */
var longestPalindrome = function(s) {
    let normalS = [];
    let inverseS = [];
    let counter = 0;
    let max = 0;
    let result = [];

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            normalS.push(s[j]);
            inverseS.unshift(s[j]);

           /* for (let z = 0; z < normalS.length; z++) {
                if(normalS[z] != inverseS[z]){
                    counter = 1;
                }
            }

            */

            //console.log(normalS.join("") == inverseS.join(""));

            if(normalS.join("") !== inverseS.join("")){
                counter = 1;
            }

            //console.log([normalS, inverseS]);

            if(0 === counter && normalS.length > max){
                max = normalS.length;
                 result = [...normalS];
            }
            counter = 0;
        }

        inverseS = [];
        normalS = [];
   
    }
    return result.join("");
};

console.log("farith" == "farithh");

console.log(longestPalindrome("ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"));