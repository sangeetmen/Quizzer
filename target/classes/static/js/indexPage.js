/**
 * 
 */

var headers = {};
var sources = [];
//$.ajax({
//        type: "POST",
//        url: 'linksnew',
//        dataType: "json",
//        success: function(data) {
//	        	
//	        	var response = eval("(" + JSON.stringify(data) + ")");
//	            var displayhtml="";
//	            var appName="";
//	        	for (var j = 0; j < response.length; j++)
//	    		{
//	        		if(appName!=response[j].app_name)
//	        		{
//	        			if(j!=0){
//	        				
//	        				displayhtml+="</ul>";	
//	        				displayhtml+="</li>";
//	        			}
//	        			displayhtml+="<li class=\"nav-item has-treeview \" catname='"+response[j].app_name+"'>";
//	        		
//	        			displayhtml+="<a href='#' class=\"nav-link\"><i class=\"nav-icon fas "+response[j].iconname+"\"></i><p>"+response[j].app_name+"<i class=\"right fas fa-angle-left\"></i></p></a>"
//	        			displayhtml+="<ul class=\"nav nav-treeview\">"
//	        			appName=response[j].app_name;
//	        		}
//	        		displayhtml+="<li class=\"nav-item\"><a href='"+response[j].app_folder+"/"+response[j].link_page+"' appname='"+response[j].link_name+"' class=\"nav-link\"><i class=\"far fa-circle nav-icon\"></i><p>"+response[j].link_name+"</p>";
//	        		
//	        		if(response[j].roleid==99)
//	        			displayhtml+="<span class=\"right badge badge-danger\">Admin</span></a></li>";
//	        		else
//	        			displayhtml+="</a></li>";
//	        		
//					sources.push({'label': response[j].link_name, 'category' : response[j].app_name, 'link':response[j].app_folder+"/"+response[j].link_page});
//
//	        		
//	    		}
//	        	
//	        	
//	        	$("#menuUl").html(displayhtml);
//	        	$(".nav-treeview > li > a").click(function(e){
//
//	        		if($(this).attr("href").indexOf("logout")==-1){
//		        		e.preventDefault();
//		        		LoadPage($(this).attr("href"));
//	        		}
//	        		
//	        	})
//	        	
//	        	
//	        	
//	        	$.widget( "custom.catcomplete", $.ui.autocomplete, {
//	        	      _create: function() {
//	        	        this._super();
//	        	        this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
//	        	      },
//	        	      _renderMenu: function( ul, items ) {
//	        	        var that = this,
//	        	          currentCategory = "";
//	        	        $.each( items, function( index, item ) {
//	        	          var li;
//	        	          if ( item.category != currentCategory ) {
//	        	            ul.append( "<li class='ui-autocomplete-category appname'>" + item.category + "</li>" );
//	        	            currentCategory = item.category;
//	        	          }
//	        	          li = that._renderItemData( ul, item );
//	        	          if ( item.category ) {
//	        	            li.attr( "aria-label", item.category + " : " + item.label );
//	        	            li.addClass("linkname");
//	        	          }
//	        	        });
//	        	      }
//	        	    });
//	        	    
//	        	 
//	        	    $( "#menusearch" ).catcomplete({
//	        	      delay: 0,
//	        	      source: sources,
//	        	      select: function( event, ui ) {
//	        	    	  $( "#menusearch").val("");
//	        	    	  LoadPage(ui.item.link);
//	        	    	  return false;
//	        	        }
//	        	    });
//	        	
//	        	
//        	}
//        })
//        
// $.ajax({
//        url: 'getEmpname',
//        //global: true,
//        type: "POST",
//        dataType: "html",
//        async: false,
//        success: function(msg) {
//            
//            $("#empname").html(msg);
//            var initials = msg.match(/\b\w/g) || [];
//            initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
//            $("#initials").html(initials);
//            
//
//        },
//        error: function(xhr, ajaxopt, error) {
//            
//            alert(xhr.status + '  ' + error);
//        }
//
//    });       
        
       
        
function LoadPage(page,cat,displayText) {
	
	var url =page;
	
//	$("#menuUl li a, #menuUl li").removeClass('active menu-open');
//	
//	$('ul.nav-treeview a').removeClass('active');
//	$('ul.nav-treeview a').filter(function() {return $(this).attr("href") == url;}).addClass('active');
//	
//	var linksArr=$('ul.nav-treeview a').filter(function() {return $(this).attr("href").split("/")[0] == url.split("/")[0];});
//	
//	$('ul.nav-treeview a').filter(function() { return $(this).attr("href") == url;}).parent().parent().parent().find("a").eq(0).addClass('active menu-open');
//	$('ul.nav-treeview a').filter(function() { return $(this).attr("href") == url;}).parent().parent().parent().addClass("menu-open");
//	
//	var category=$('ul.nav-treeview a').filter(function() { return $(this).attr("href") == url;}).parent().parent().parent().attr("catname");
//	var label=	 $('ul.nav-treeview a').filter(function() {return $(this).attr("href") == url;}).attr("appname");
	
	
	$.ajax({
        url: 'loadcontent',
        global: true,
        secureuri: false,
        type: "POST",
        data: ({
            action: page
          
        }),
        dataType: "html",
        async: false,
        success: function(msg) {
            
            $("#bodycontent").html(msg);
//            $("#breadcrumb").html(category+"&nbsp;&nbsp;<i class='nav-icon fas fa-arrow-circle-right'></i>&nbsp;&nbsp;"+label);
//            
//            if (category != undefined && label != undefined) {
//            	 $("#breadcrumb").html(category+"&nbsp;&nbsp;<i class='nav-icon fas fa-arrow-circle-right'></i>&nbsp;&nbsp;"+label);
//			} else {
//				$("#breadcrumb").html(
//						cat
//						+ "&nbsp;&nbsp;<i class='nav-icon fas fa-arrow-circle-right'></i>&nbsp;&nbsp;"
//						+ displayText);
//			}
//            
//            var displayHtml="";
//            for(var i=0;i<linksArr.length;i++){
//            	
//            	var linkName=$(linksArr[i]).html().replace("<i class=\"far fa-circle nav-icon\"></i><p>","")
//            	linkName=linkName.substring(0, linkName.length - 4);
//            	displayHtml+="<a href='"+$(linksArr[i]).attr("href")+"'  class='dropdown-item'>"+linkName+"</a>";
//            	
//            }
//            $("#dropdownlinks").html(displayHtml);
//            
//            $("#dropdownlinks > a").click(function(e){
//
//            	if($(this).attr("href").indexOf("logout")==-1){
//            		e.preventDefault();
//            		LoadPage($(this).attr("href"));
//        		}
//        		
//        		
//        	})
        }
    });
	
	$(".sidebar-hidden").addClass("sidebar-collapse").removeClass("sidebar-open");
}

LoadPage("playquiz","main","PLAY QUIZ")
$(".othlinks").click(function(e) {

	e.preventDefault();
	LoadPage($(this).attr("href"),"Account","Change Password");

})

$("#modal-loading").modal({
    backdrop: 'static',
    keyboard: false,
    show: false
}); 

