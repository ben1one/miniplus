//Library

function getPlayer(link){

    link2 = youtubeIDextract(link);
    code='';
    //code += '<a target="_blank" href="'+link+'">'+link+'</a><br/>';
    code += '<object width="640" height="385"><param name="movie" value="http://www.youtube.com/v/'+link2+'&amp;hl=en_US&amp;fs=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/'+link2+'&amp;hl=en_US&amp;fs=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="640" height="385"></embed></object>';
    //alert(code);
    return code;
}

function isTestPost(url){
    if(url.indexOf("showtopic.fcgi?FID=7") != -1)return('testpost');

}

function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=");
  if (c_start!=-1)
    {
    c_start=c_start + c_name.length+1;
    c_end=document.cookie.indexOf(";",c_start);
    if (c_end==-1) c_end=document.cookie.length;
    return unescape(document.cookie.substring(c_start,c_end));
    }
  }
return "";
}

function getPage(url){

    //Mind the order


    if(url.indexOf("showpost") != -1)return('showpost');

    if(url.indexOf("showtopic") != -1)return('showtopic');

    if(url.indexOf("posting") != -1 && url.indexOf("accessurl") == -1)return('posting');

    if(url.indexOf("show_newtopic") != -1)return('newtopic'); //mind the order

    if(url.indexOf("extra") != -1)return('extra');

    if(url.indexOf("category") != -1)return('category');
    
    if(url.indexOf("register.cgi") != -1)return('register');

    if(url.indexOf("search.fcgi?FID=9&tempid=2") != -1)return('search');

    
    return null;

}

function trim(stringToTrim)
{
    return stringToTrim.replace(/^\s+|\s+$/g,"");
}

function youtubeIDextract(url)
{
    var youtube_id;
    youtube_id = url.replace(/^[^v]+v.(.{11}).*/,"$1");
    return youtube_id;
}

function insert_youtube_code() {
    var link = prompt("Hey there, good looking stranger!  What's your name?", "");
    $('textarea').val($('textarea').val()+'[youtube]'+youtubeIDextract(link)+'[/youtube]');
}

function BBC2HTML(S) {
    if (S.indexOf('[') < 0) return S;

    function X(p, f) {
        return new RegExp(p, f)
    }
    function D(s) {
        return rD.exec(s)
    }
    function R(s) {
        return s.replace(rB, P)
    }
    function A(s, p) {
        for (var i in p) s = s.replace(X(i, 'g'), p[i]); return s;
    }

    function P($0, $1, $2, $3) {
        if ($3 && $3.indexOf('[') > -1) $3 = R($3);
        switch ($1) {
            // case 'url':case 'anchor':case 'email':
            //   return '<a '+ L[$1] + ($2||$3) +'">'+ $3 +'</a>';
            //case 'img':
            //  var d = D($2);
            //return '<img src="'+ $3 +'"'+ (d ? ' width="'+ d[1] +'" height="'+ d[2] +'"' : '') +' alt="'+ (d ? '' : $2) +'" />';
            case 'flash':case 'youtube':
                var d = D($2)||[0, 640, 385];
                return '<object type="application/x-shockwave-flash" data="'+ Y[$1] + $3 +'" width="'+ d[1] +'" height="'+ d[2] +'"><param name="movie" value="'+ Y[$1] + $3 +'" /></object>';
            case 'float':
                return '<span style="float: '+ $2 +'">'+ $3 +'</span>';
            case 'left':case 'right':case 'center':case 'justify':
                return '<div style="text-align: '+ $1 +'">'+ $3 +'</div>';
            case 'google':case 'wikipedia':
                return '<a href="'+ G[$1] + $3 +'">'+ $3 +'</a>';
            case 'b':case 'i':case 'u':case 's':case 'sup':case 'sub':case 'h1':case 'h2':case 'h3':case 'h4':case 'h5':case 'h6':case 'table':case 'tr':case 'th':case 'td':
                return '<'+ $1 +'>'+ $3 +'</'+ $1 +'>';
            case 'row': case 'r':case 'header':case 'head':case 'h':case 'col':case 'c':
                return '<'+ T[$1] +'>'+ $3 +'</'+ T[$1] +'>';
            case 'acronym':case 'abbr':
                return '<'+ $1 +' title="'+ $2 +'">'+ $3 +'</'+ $1 +'>';
        }
        return '['+ $1 + ($2 ? '='+ $2 : '') +']'+ $3 +'[/'+ $1 +']';
    }

    var rB = X('\\[([a-z][a-z0-9]*)(?:=([^\\]]+))?]((?:.|[\r\n])*?)\\[/\\1]', 'g'), rD = X('^(\\d+)x(\\d+)$');
    var L = {
        url: 'href="',
        'anchor': 'name="',
        email: 'href="mailto: '
    };
    var G = {
        google: 'http://www.google.com/search?q=',
        wikipedia: 'http://www.wikipedia.org/wiki/'
    };
    var Y = {
        youtube: 'http://www.youtube.com/v/',
        flash: ''
    };
    var T = {
        row: 'tr',
        r: 'tr',
        header: 'th',
        head: 'th',
        h: 'th',
        col: 'td',
        c: 'td'
    };
    var C = {
        notag: [{
            '\\[': '&#91;',
            ']': '&#93;'
        }, '', ''],
        code: [{
            '<': '&lt;'
        }, '<code><pre>', '</pre></code>']
    };
    C.php = [C.code[0], C.code[1]+ '&lt;?php ', '?>'+ C.code[2]];
    var F = {
        font: 'font-family:$1',
        size: 'font-size:$1px',
        color: 'color:$1'
    };
    var U = {
        c: 'circle',
        d: 'disc',
        s: 'square',
        '1': 'decimal',
        a: 'lower-alpha',
        A: 'upper-alpha',
        i: 'lower-roman',
        I: 'upper-roman'
    };
    var I = {}, B = {};

    for (var i in C) I['\\[('+ i +')]((?:.|[\r\n])*?)\\[/\\1]'] = function($0, $1, $2) {
        return C[$1][1] + A($2, C[$1][0]) + C[$1][2]
    };
    for (var i in F) {
        B['\\['+ i +'=([^\\]]+)]'] = '<span style="'+ F[i] +'">';
        B['\\[/'+ i +']'] = '</span>';
    }
    B['\\[list]'] = '<ul>';
    B['\\[list=(\\w)]'] = function($0, $1) {
        return '<ul style="list-style-type: '+ (U[$1]||'disc') +'">'
    };
    B['\\[/list]'] = '</ul>';
    B['\\[\\*]'] = '<li>';
    B['\\[quote(?:=([^\\]]+))?]'] = function($0, $1) {
        return '<div class="bb-quote">'+ ($1 ? $1 +' wrote' : 'Quote') +':<blockquote>'
    };
    B['\\[/quote]'] = '</blockquote></div>';
    B['\\[(hr|br)]'] = '<$1 />';
    B['\\[sp]'] = '&nbsp;';
    return R(A(A(S, I), B));
}
//End Library













if(getPage(location.href)=='posting'){
    //ICON
    chrome.extension.sendRequest({
        options: "custom_icon"
    }, function(response) {

        //alert(response)

        temp = response.split(',');


        for(var i=0 ; i<temp.length ; i++){
            if(temp[i]!= ''){
                $('div:eq(3)').append("<img class='custom_icon' src=\'"+ temp[i]+"\'/>&nbsp;");
                insertCode2(i, temp[i]);
            }
        }

        if(temp.length>100){
            //Scrool
            $('div:eq(3)').css('height', '200px');
            //$('div:eq(3)').css('width', '450px')
            $('div:eq(3)').css('overflow-y', 'scroll');
        //$('textarea').css('width', '550px')
        //$('textarea').css('height', '300px')
        }


    });



    var icon=new Array(
        "http://img.miniforum.net/temp2/smile.gif",
        "http://img.miniforum.net/temp2/frown.gif",
        "http://img.miniforum.net/temp2/redface.gif" ,
        "http://img.miniforum.net/temp2/biggrin.gif" ,
        "http://img.miniforum.net/temp2/wink.gif",
        "http://img.miniforum.net/temp2/tongue.gif" ,
        "http://img.miniforum.net/temp2/cool.gif" ,
        "http://img.miniforum.net/temp2/rolleyes.gif" ,
        "http://img.miniforum.net/temp2/mad.gif" ,
        "http://img.miniforum.net/temp2/eek.gif" ,
        "http://img.miniforum.net/temp2/confused.gif"
        );





    var icon_tag=new Array(
        ':)',
        ':(',
        ':o',
        ':D',
        ';)',
        ':p',
        ':cool:',
        ':rolleyes:',
        ':mad:'	,
        ':eek:'	,
        ':confused:'
        );


    //insert custome
    function insertCode2(index, link){
        //document.post.textarea.value = document.post.textarea.value;
        link=link.split(' ').join('');
        link = link.replace(/[\n\r\t]/g,'');
        $('img.custom_icon:eq('+index+')').click(function(){

            //var startPos = document.post.message.selectionEnd;
            //var endPos = document.post.message.selectionEnd;
            //not supported by Chrome 7 any more


            var startPos = document.getElementsByTagName('textarea')[0].selectionStart;

            var endPos = document.getElementsByTagName('textarea')[0].selectionStart;

            //alert(startPos+' '+endPos);

            var temp = $('textarea').val();

            $('textarea').val(temp.substring(0, startPos)

                + '[img]'+link+'[/img]'

                + temp.substring(endPos, temp.length));






        //$('textarea').val($('textarea').val()+'[img]'+link+'[/img]');
        });
    }


    function insertCode(index){
        //document.post.textarea.value = document.post.textarea.value;
        $('img.icon:eq('+index+')').click(function(){

            var startPos = document.getElementsByTagName('textarea')[0].selectionStart;

            var endPos = document.getElementsByTagName('textarea')[0].selectionStart;

            //alert(startPos+' '+endPos);

            var temp = $('textarea').val();

            $('textarea').val(temp.substring(0, startPos)

                + icon_tag[index]

                + temp.substring(endPos, temp.length));


        // $('textarea').val($('textarea').val()+icon_tag[index]);
        });
    }

    function insertCode_plus(tag){
        return "function insertTag(inputText){ var startPos = document.getElementsByTagName('textarea')[0].selectionStart;var endPos = document.getElementsByTagName('textarea')[0].selectionEnd;var selectedText = document.getElementsByTagName('textarea')[0].value.substring(startPos, endPos);if(selectedText==''){input=window.prompt('['+inputText+']...[/'+inputText+']','','');if(input != null){	str1=document.getElementsByTagName('textarea')[0].value.substring(0,startPos);	str2=document.getElementsByTagName('textarea')[0].value.substring(startPos,document.getElementsByTagName('textarea')[0].value.length);	str=str1+'['+inputText+']'+input+'[/'+inputText+']'+str2;}  }else{	str1=document.getElementsByTagName('textarea')[0].value.substring(0,startPos);	str2=document.getElementsByTagName('textarea')[0].value.substring(endPos,document.getElementsByTagName('textarea')[0].value.length);	str=str1+'['+inputText+']'+selectedText+'[/'+inputText+']'+str2;}document.getElementsByTagName('textarea')[0].value=str;}document.getElementsByTagName('textarea')[0].focus();  insertTag('"+tag+"')";
    }

    function insertCode2_plus(tag, msg1, default1, msg2, default2){
        return "function insertTag(inputText){ var startPos = document.getElementsByTagName('textarea')[0].selectionStart;var endPos = document.getElementsByTagName('textarea')[0].selectionEnd;var selectedText = document.getElementsByTagName('textarea')[0].value.substring(startPos, endPos);if(selectedText==''){input=window.prompt('"+msg1+"','"+default1+"','');input2=window.prompt('"+msg2+"','"+default2+"','');if(input != null){	str1=document.getElementsByTagName('textarea')[0].value.substring(0,startPos);	str2=document.getElementsByTagName('textarea')[0].value.substring(startPos,document.getElementsByTagName('textarea')[0].value.length);	str=str1+'['+inputText+'='+'\"'+input+'\"'+']'+input2+'[/'+inputText+']'+str2;}  }else{input3=window.prompt('"+msg2+"','"+default2+"','');str1=document.getElementsByTagName('textarea')[0].value.substring(0,startPos);	str2=document.getElementsByTagName('textarea')[0].value.substring(endPos,document.getElementsByTagName('textarea')[0].value.length);	str=str1+'['+inputText+'=\"'+selectedText+'\"]'+input3+'[/'+inputText+']'+str2;}document.getElementsByTagName('textarea')[0].value=str;}document.getElementsByTagName('textarea')[0].focus();  insertTag('"+tag+"')";
    }

    function insertCode2_plus_fontsize(tag, msg1, default1, msg2, default2){
        return "function insertTag(inputText){ var startPos = document.getElementsByTagName('textarea')[0].selectionStart;var endPos = document.getElementsByTagName('textarea')[0].selectionEnd;var selectedText = document.getElementsByTagName('textarea')[0].value.substring(startPos, endPos);if(selectedText==''){input=window.prompt('"+msg1+"','"+default1+"','');input2=window.prompt('"+msg2+"','"+default2+"','');if(input != null){	str1=document.getElementsByTagName('textarea')[0].value.substring(0,startPos);	str2=document.getElementsByTagName('textarea')[0].value.substring(startPos,document.getElementsByTagName('textarea')[0].value.length);	str=str1+'['+inputText+'='+'\"'+input+'\"'+']'+input2+'[/'+inputText+']'+str2;}  }else{input3=window.prompt('"+msg1+"','"+default1+"','');str1=document.getElementsByTagName('textarea')[0].value.substring(0,startPos);	str2=document.getElementsByTagName('textarea')[0].value.substring(endPos,document.getElementsByTagName('textarea')[0].value.length);	str=str1+'['+inputText+'=\"'+input3+'\"]'+selectedText+'[/'+inputText+']'+str2;}document.getElementsByTagName('textarea')[0].value=str;}document.getElementsByTagName('textarea')[0].focus();  insertTag('"+tag+"')";
    }



    function appendIcon(index){
        $('div:eq(2)').append('<img class="icon" src ="'+icon[index]+'" />&nbsp;');
    }


    for(var i=0 ; i<icon.length ; i++){
        appendIcon(i);
    }

    for(var j=0 ; j<icon.length ; j++){
        insertCode(j);
    }




//End icon
}








if(getPage(location.href)=='posting'){
    //Youtube
    function insert_youtube(){
        //var link = prompt('請輸入Youtube網址');
        //link=youtubeIDextract(link);

        var startPos = document.post.message.selectionEnd;

        var endPos = document.post.message.selectionEnd;

        //alert(startPos+' '+endPos);

        var temp = $('textarea').val();

        //$('textarea').val(temp.substring(0, startPos) + 'http://www.youtube.com/watch?v='+link+'\n[youtube]'+link+'[/youtube]' + temp.substring(endPos, temp.length));

        alert('A preview of the last youtube link will be added at the front on the post automatically now, no more code! ');

    //$('textarea').val($('textarea').val()+'http://www.youtube.com/watch?v='+link+'\n[youtube]'+link+'[/youtube]');
    }

    if($('td:eq(560)').length){
//  $('td:eq(560)').append("<img id='youtubeicon' src='"+chrome.extension.getURL('youtube.png')+"' border=0/>");
//$('#youtubeicon').click(function(){
//  insert_youtube();
//});
}
//End youtube
}





if(getPage(location.href)=='posting'){
    //BBcode link
    $('td:eq(557)').append('<a href="http://www.bbcode.org/reference.php" target="_blank">*BBCode</a>');
//BBcode
}


if(getPage(location.href)=='showpost'){
    //alert(BBC2HTML(text));
    for(var jj=0;jj<15;jj++){
        if($('#MID_ind'+jj).length){
    //$('#MID_ind'+jj).html(BBC2HTML($('#MID_ind'+jj).html()));
    }
    }
//End youtube bbcode
}






//Social plugin
//$('td:eq(0)').append('<p/><iframe src="http://www.facebook.com/plugins/like.php?href='+location.href+'&amp;layout=standard&amp;show_faces=false&amp;width=450&amp;action=like&amp;colorscheme=light&amp;height=30" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:30px;" allowTransparency="true"></iframe>');
//$('td:eq(2)').append('<a class="addthis_button" href="http://www.addthis.com/bookmark.php?v=250&amp;username=xa-4c2b7bd42fbe692a"><img src="http://s7.addthis.com/static/btn/v2/lg-share-en.gif" width="125" height="16" alt="Bookmark and Share" style="border:0"/></a><script type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js#username=xa-4c2b7bd42fbe692a"></script>');
//End social plugin


if(getPage(location.href)=='showpost'||getPage(location.href)=='showtopic'){
    //bam
    chrome.extension.sendRequest({
        options: "bam"
    }, function(response) {

        if(response!=null){
            users = response.split(','); //get bam user list
            for(var cc=0;cc<users.length;cc++){

                //users[cc]=users[cc].split(' ').join(''); //remove space
                users[cc]=trim(users[cc]);
                users[cc]=users[cc].replace(/[\n\r\t]/g,'');
                //alert('*'+users[cc]+'*');

                //alert(users[cc]);
                for(var jjj=0;jjj<15;jjj++){
                    if(users[cc]!=''){
                        //block user topic
                        if(getPage(location.href)=='showtopic'){
                            $('td[bgcolor]').filter(':contains('+users[cc]+')').parent("tr").html("");

                        }else{

                            //block user post
                            if($('.nickname_style:eq('+jjj+')').length){
                                target = $('.nickname_style:eq('+jjj+')').html();
                                //target=target.split(' ').join('');
                                target=trim(target);
                                //alert(target+':'+users[cc]);
                                if(target == users[cc]){
                                    //alert(users[cc]);
                                    $('#MID_ind'+jjj).parent().parent().parent().parent().parent().parent().parent().remove();
                                //$('#MID_ind'+jjj).html('--- BAMED USER ---');

                                //$('td').filter(':contains('+users[cc]+')').parent("tr").html("");

                                }
                                $('td').filter(':contains('+users[cc]+')').parent("tr").html("");

                            }
                        }
                    }
                
               
                }

        
            }
        }else{
    // for(var jjj=0;jjj<15;jjj++){
    //   $('.nickname_style:eq('+jjj+')').html("<a style='color:#000000;text-decoration:none;' target='_blank' href='http://www.miniforum.net/extra.fcgi?action=show_pinfo&nickname="+$('.nickname_style:eq('+jjj+')').html()+"&tempid=2'>"+$('.nickname_style:eq('+jjj+')').html()+"</a>");
    //}
    }




    });
//end bam
}





if(getPage(location.href)=='posting'){
    //Signiture
    //document.post.signature.checked=true;
    $('input[name="signature"]').attr('checked', 'true');

    chrome.extension.sendRequest({
        options: "signature"
    }, function(response) {
        if(response=='off'){
            //document.post.signature.checked=false;
            $('input[name="signature"]').attr('checked', '');
        //alert();
        }
    });
//End signiture
}


//popup
if(getPage(location.href)=='showpost'){
    //$('table:eq(2)').prepend('<a target="_blank" href="'+location.href+'"><img src="http://img.miniforum.net/temp2/open.gif"/></a>');
    //$('td').filter(":contains('select')").prepend('<span>hi</span>');

    for(var jjj=0;jjj<15;jjj++){
        $('.nickname_style:eq('+jjj+')').before("<a target='_blank' href='http://www.miniforum.net/extra.fcgi?action=show_pinfo&nickname="+$('.nickname_style:eq('+jjj+')').html()+"&tempid=2'>"+"<img src='http://img.miniforum.net/temp2/newwin.gif'/></a>&nbsp;");
    }

//$('.nickname_style').before('<a target="_blank" href="'+location.href+'"><img src="http://img.miniforum.net/temp2/newwin.gif"/></a>&nbsp;');

}

if(getPage(location.href)=='showtopic'){
//$('table:eq(2)').prepend('<a target="_blank" href="'+location.href+'"><img src="http://img.miniforum.net/temp2/newwin.gif"/></a>');
//$('td').filter(":contains('select')").prepend('<span>hi</span>');
}


//End popup



if(getPage(location.href)=='showpost'){
    //MGID

    chrome.extension.sendRequest({
        options: "position"
    }, function(response) {
        //alert(response);
        if(response=='on'){
            $('a').each(function(){
                var temp3436 =$(this).attr('id');

                $(this).next().click(function(){


                    location.href= location.href.substring(0, location.href.search('#')) +'#'+temp3436;
                //alert(temp3436);
                });



            });
        }
    });





//END MGID
}



//boss mode

chrome.extension.sendRequest({
    options: "boss"
}, function(response) {
    //alert(response);
    if(response=='on'){
        $('*').attr('style', 'color:#555555;text-decoration:none;background-color:#FCFCFC;background-image:none;font-size:12px;border-color:#555555');
        $('img').attr('src','http://t3.gstatic.com/images?q=tbn:seu_sBH5fvRgVM:http://www.markgarlick.com/images/misc/square.gif');
        $('img').attr('width','20');
        $('img').attr('height','20');
        $( 'title' ).html ( ' New Tab' );
    }
});

//end boss




//bigicon
if(getPage(location.href)=='showpost'||getPage(location.href)=='showtopic'||getPage(location.href)=='posting'||getPage(location.href)=='category'||getPage(location.href)=='extra'||isTestPost(location.href)=='testpost'){
    chrome.extension.sendRequest({
        options: "bigicon"
    }, function(response) {
        //alert(response);
        if(response=='on'){
            $('img:eq(0)').hide();
          
        }
    });
}
//end bigicon




//like
if(getPage(location.href)=='showpost'){
    chrome.extension.sendRequest({
        options: "like"
    }, function(response) {
        //alert(response);
        //if($('a#1').exists())alert();

        if(response!='off'){

            if($('a#1').length){
                //alert(encodeURIComponent(location.href));
                code = '<iframe src="http://www.facebook.com/plugins/like.php?href='+encodeURIComponent(location.href)+'&amp;layout=standard&amp;show_faces=true&amp;width=450&amp;action=like&amp;colorscheme=light&amp;height=80" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:80px;" allowTransparency="true"></iframe>';
                //alert('<iframe src="http://www.facebook.com/plugins/like.php?href="'+location.href+'"&amp;layout=standard&amp;show_faces=true&amp;width=450&amp;action=like&amp;colorscheme=light&amp;height=80" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:80px;" allowTransparency="true"></iframe>');
                $('td:eq(23)').append('<br/>&nbsp;&nbsp;'+code);
            }
        }
    });
}
//end like


//Clean table title
if(getPage(location.href)=='showpost'){
    $('table').attr('title', '');
}
//End clean table title




//<object width="640" height="385"><param name="movie" value="http://www.youtube.com/watch?v=RrDHrwLUtvk&amp;hl=en_US&amp;fs=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/watch?v=RrDHrwLUtvk&amp;hl=en_US&amp;fs=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="640" height="385"></embed></object>









//Begine youtube



function append_youtube(num){
    var patt=/<a[\w|\d|\W]+(http:\/\/[\w|\d|\W]+youtube[\w|\d|\W]+)<\/a>/gi;

    if( patt.test($('#MID_ind'+num).html())){
        alert(num);
        html = $('#MID_ind'+num).html();
        alert(html);
        patt=/<a[\w|\d|\W]+(http:\/\/[\w|\d|\W]+youtube[\w|\d|\W]+)<\/a>/gi;
        $('#MID_ind'+num).html(html.replace(patt, getPlayer(patt.exec(html)[1])));
    //alert(num);
    //$('#MID_ind'+ij).html($('#MID_ind'+ij).html().replace(patt, getPlayer(patt.exec($('#MID_ind'+ij).html())[1])));

    }

}

if(getPage(location.href)=='showpost'){
    chrome.extension.sendRequest({
        options: "youtube"
    }, function(response) {
        //alert(response);
        //if($('a#1').exists())alert();

        if(response!='off'){
            for(var i=0;i<15;i++){

                //append_youtube(i);
                a(i);
            }

        }
    });
}

    
//var str1 = '<a href="http://www.youtube.com/watch?v=RrDHrwLUtvk" target="_blank">http://www.youtube.com/watch?v=RrDHrwLUtvk</a>';


//alert(ij);
function a(ij){
    var patt=/<a href=[\w|\d|\W]+youtube[\w|\d|\W]+v=[\w|\d|\W]+(http:\/\/[\w|\d|\W]+youtube[\w|\d|\W]+v=[\w|\d|\W]+)<\/a>/i;
    //alert(1);

    //alert(ij);
    html=$('#MID_ind'+ij).html();
    //alert(html);

    result = patt.exec(html);
    //alert(result);
    if(result==null)return;
    //alert(2.2);
    //alert(url);
    url = result[1];
    player= getPlayer(url);
    out = $('#MID_ind'+ij).html().replace(patt, player);
    //alert(3);
    // $('#MID_ind'+ij).append(out);
    $('#MID_ind'+ij).prepend('<p>'+player+'</p>');

//alert(ij);
}


//a(4);
//
//
//
//a(5);
//
//
//a(6);a(7);
//a(8);a(9);
//
//End youtube





//Begine chat
if(getPage(location.href)=='register'){
    $('body').append("<div style='position: fixed;bottom: 0px;right:0px;z-index: 9999;border-bottom: none;width: 640px;margin: 0px auto;'><iframe frameborder='0'height='450'width='630px' src='http://benone.web100hk.com/saved_resource.html'></iframe></div>");
}


if(getPage(location.href)=='search'){

    $('td:eq(5)').prepend('<p/><form action="http://www.google.com.hk/cse" id="cse-search-box" target="_blank"><div>Google: <input type="hidden" name="cx" value="partner-pub-5984960572076322:cxxvgynds40" /><input type="hidden" name="ie" value="big5" /><input type="text" name="q" size="31" /><input type="submit" name="sa" value="&#x641c;&#x5c0b;" /></div></form><p/>');
}
//End chat


//start Lauing
if(getPage(location.href)=='showpost'){

    chrome.extension.sendRequest({
        options: "lauming"
    }, function(response) {
        //alert(response.length);
        if(response.length>19 && response.search('undefined')<0){
            $('td:eq(12)').prepend('<a target="_blank" href="https://www.instapaper.com/api/add?'+response+'&redirect='+encodeURIComponent('https://www.instapaper.com/u')+'&title='+encodeURIComponent(document.title)+'&url='+encodeURIComponent(location.href)+'"><font color="#CC99CC">LauMing</font></a> | ');
        }
    });



}
//end lauming








if(getPage(location.href)=='posting'){
	
    $('td:eq(558) a:eq(0)').attr('href', 'javascript:'+insertCode_plus('B'));
    $('td:eq(558) a:eq(1)').attr('href', 'javascript:'+insertCode_plus('I'));
    $('td:eq(558) a:eq(2)').attr('href', 'javascript:'+insertCode_plus('U'));
    $('td:eq(558) a:eq(3)').attr('href', 'javascript:'+insertCode_plus('CENTER'));
    $('td:eq(558) a:eq(6)').attr('href', 'javascript:'+insertCode_plus('IMG'));
    $('td:eq(558) a:eq(7)').attr('href', 'javascript:'+insertCode_plus('SWF'));

    $('td:eq(558) a:eq(4)').attr('href', 'javascript:'+insertCode2_plus('URL', '請輸入連結網址', 'http://, ftp://, mms:// 或 其他', '連結時顯示的文字', ''));
    $('td:eq(558) a:eq(5)').attr('href', 'javascript:'+insertCode2_plus('URL', '請輸入電郵地址', '', '電郵地址連結時顯示的文字', ''));

    $('td:eq(558) a:eq(8)').attr('href', 'javascript:'+insertCode2_plus_fontsize('fontsize', '字形大小：(請輸入10-26)', '', '顯示的文字', ''));
    $('td:eq(558) img:eq(8)').attr('src', chrome.extension.getURL('fontsize.png'));
	
	//alert(getCookie("username"));
	$('body').append('<div id="process" style="text-align:right;padding:20px;width:200px;height:15px;position:fixed;right:0px;top:0px;"><b>'+getCookie("username")+'(<a href="/paccount.fcgi">登出</a>)</b></div>');
	//$('td:eq(1)').append("<p/><b>"+getCookie("username")+"(<a href='/paccount.fcgi'>登出</a>)</b>");

//jscode = insertCode2_plus('URL', '請輸入電郵地址', '', '電郵地址連結時顯示的文字', '');
//alert(jscode);
//jscode= 'alert()';
//$('td:eq(560)').append("<a href='javascript:"+jscode+"'><img id='fontsize' src='"+chrome.extension.getURL('fontsize.png')+"' border=0/></a>");
}




//lab


function preview(i){

    $('table:eq(4) tr:eq('+i+') td:eq(2) a').parent('td').append("<div id='topicPreview"+i+"'></div>");

    var link = ""+$('table:eq(4) tr:eq('+i+') td:eq(2) a').attr('href');

    //alert(link);

    $.ajax({
        url: link,
        success: function(res){

            res= res.substring(res.search('var message'), res.search('var MID = new Array'));

            res= res.substring(res.search('<img src='), res.search("name='postimg'>"));


            // alert(res);

            var patt=/(http:\/\/[\w|\d|\W\D]+(jpg|jpeg|PNG|png))/i;

            var result = patt.exec(res);

            if(result!=null){
                
                $('#topicPreview'+i).html("<a href='"+link+"'><img border=0 style='max-height:80px;width:auto'src='"+result[1]+"'/></a>");
            }




        // alert(res);


        }
    });

}

function preview_newpost(i){

    //$('table:eq(1) tr:eq(1) td:eq(2) a')

    $('table:eq(1) tr:eq('+i+') td:eq(2) a').parent('td').append("<div id='topicPreview"+i+"'></div>");

    var link = ""+$('table:eq(1) tr:eq('+i+') td:eq(2) a').attr('href');

    $.ajax({
        url: link,
        success: function(res){

            res= res.substring(res.search('var message'), res.search('var MID = new Array'));

            res= res.substring(res.search('<img src='), res.search("name='postimg'>"));

            // alert(res);

            var patt=/(http:\/\/[\w|\d|\W\D]+(jpg|jpeg|PNG|png))/i;

            var result = patt.exec(res);

            if(result!=null){
                //alert(result[1]);
                $('#topicPreview'+i).html("<a href='"+link+"'><img border=0 style='max-height:80px;width:auto'src='"+result[1]+"'/></a>");
            }


        // alert(res);


        }
    });

}

if(getPage(location.href)=='showtopic'&& isTestPost(location.href)!='testpost' ){
    //alert();



    chrome.extension.sendRequest({
        options: "preview"
    }, function(response) {
        if(response!='off'){
            for(i=1;i<43;i++){
                preview(i);

            }
        }

    });


}

if(getPage(location.href)=='newtopic'){
    //alert();

    chrome.extension.sendRequest({
        options: "preview"
    }, function(response) {
        if(response!='off'){
            for(i=1;i<43;i++){
                preview_newpost(i);

            }
        }

    });


}


//Remove Banner Ad
if(getPage(location.href)=='newtopic' ||getPage(location.href)=='showtopic' ||isTestPost(location.href)=='testpost'||getPage(location.href)=='showpost'  ){

    $('table:eq(0) td:eq(2)').html("");

   
}


if(getPage(location.href)=='showtopic'){
//new paging

    chrome.extension.sendRequest({
        options: "page"
    }, function(response) {
        if(response!='off'){
 //-------
 $('td td:contains("最後一頁")').each(
    function(){

    $(this).html('');

   // $(this).prev('td').append('a');

    url = $(this).prev('td').children('a').attr('href');


   // $(this).children('div')

    lastpage=  $(this).parent().parent().parent().parent().next().children('select').val();

   // $(this).next('td').children('select').hide();


   // $(this).children('div').remove();
    //$('a:contains("")').hide();
    //$(this).append('[<a href='+url+"&page="+2+'>2</a>]');
   // lastpagehtml = " [] ";
    //alert($(this).html());
  //  newhtml = $(this).html().replace(lastpagehtml, " ");
   // $(this).html(newhtml);


    url = url.replace("&page=1", "");
// [<a href="/showpost.fcgi?MGID=2853379&amp;page=3&amp;tempid=2">????</a>]
    //[<a href="/showpost.fcgi?MGID=2854048&page=1&tempid=2">????</a>]


theCode=' ';

    for(j=2;j<=lastpage;j++){

        if(j==6 && lastpage>6){theCode = theCode + '...';}

        if(j>5 && j<=lastpage-4){continue};
    theCode = theCode +'[<a href='+url+"&page="+j+'>'+j+'</a>]';
    }

    $(this).prev().children('a').after(theCode);

    }

);
 //--------
        }

    });


}




//lab

if(getPage(location.href)=='xxxxxposting'){
    //alert();
     
    msg ='';

    $.post("posting.fcgi", {
        form_id:'replypost',
        FID:'7',
        MGID:'2831995',
        MID:'' ,
        tempid:'2' ,
        status:'1' ,
        font_text:'',
        font_size: '%A4j%A4p',
        method:'3' ,
        text:'' ,
        text:'120' ,
        TEXT:'' ,
        select:'%B3%B1%BCv' ,
        message:msg,
        protection_method:'%A4%A3%A7%40%A5X%A5%F4%A6%F3%A5%5B%B1K%2C%A5i%AA%BD%B1%B5%A8%FA%B1o%C0%C9%AE%D7%B3s%B5%B2'
    },
    function(data){
        //alert("Data Loaded: " + data);
        });


}



//