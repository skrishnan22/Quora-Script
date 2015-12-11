
function remove(){
var answers= document.getElementsByClassName('Answer Upvote Button TwoStateButton primary_action answer_upvote main_button');
var limit=500;

for(var i=0;i<answers.length;i++)
{
var upvotes=document.getElementsByClassName('Answer Upvote Button TwoStateButton primary_action answer_upvote main_button')[i].innerText;
upvotes=upvotes.replace('Upvote','' ).replace('k','000').replace('.','');
var upvote_no=parseInt(upvotes);
if(upvote_no<limit)    
{
var feed_id=document.getElementsByClassName('feed_item feed_type_answer')[i].id;
document.getElementById(feed_id).remove();    
   } 
}
}
document.addEventListener("DOMNodeInserted", function() {
            
            remove();
        });
